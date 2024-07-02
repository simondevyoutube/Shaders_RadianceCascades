varying vec2 vUv;

// uniform sampler2DArray cascadeTextures;
uniform sampler2D nextCascadeMergedTexture;
uniform sampler2D cascadeRealTexture;
uniform sampler2D sceneTexture;
uniform sampler2D sdfTexture;
uniform vec2 sceneResolution;

uniform int numCascadeLevels;
uniform int currentCascadeLevel;


void main() {
  vec2 pixelCoords = gl_FragCoord.xy * cascadeResolution - cascadeResolution * 0.5;
  vec2 pixelIndex = (gl_FragCoord.xy - 0.5);

  // Debug
  CascadeInfo ci = Cascade_GetInfo(currentCascadeLevel);
  ProbeIndex cascadeIndex = ProbeIndex_Create(pixelIndex, ci);
  ProbeAABB cascadeAABB = ProbeAABB_Create(cascadeIndex, ci);

  CascadePixelIndex coordsInCascade = CascadePixelIndex(ivec2(pixelIndex - cascadeAABB.min));
  float angleRadians = Angle_FromCascadeIndex(coordsInCascade, ci);

  // This is the computed radiance, in the direction "angleRadians"
  vec4 radiance = texture(cascadeRealTexture, gl_FragCoord.xy / cascadeResolution);

  // Sample the scene to get radiance
  vec2 rayDirection = vec2(cos(angleRadians), sin(angleRadians));
  vec2 rayOrigin = cascadeAABB.center * sceneResolution / cascadeResolution;

  // merged5 RT0 = cascade5 + merged6
  // merged4 RT1 = cascade4 + merged5 RT0
  // merged3 RT0 = cascade3 + merged4 RT1

  int lastCascadeIndex = numCascadeLevels - 1;
  int nextCascadeIndex = currentCascadeLevel + 1;

  if (nextCascadeIndex <= lastCascadeIndex) {
    vec4 radianceSample = SampleMergedRadiance_Bilinear(
        nextCascadeMergedTexture, pixelIndex, angleRadians, nextCascadeIndex);

    radiance.rgb += radianceSample.rgb * radiance.a;
    radiance.a *= radianceSample.a;
  }

  gl_FragColor = radiance;
}
