varying vec2 vUv;

uniform sampler2D sceneTexture;
uniform sampler2D sdfTexture;
uniform vec2 sceneResolution;

uniform int cascadeLevel;



// #define DEBUG

void main() {
  vec2 pixelIndex = (gl_FragCoord.xy - 0.5);

  // Grab info about the current cascade level
  CascadeInfo info = Cascade_GetInfo(cascadeLevel);
  ProbeIndex cascadeIndex = ProbeIndex_Create(pixelIndex, info);
  ProbeAABB aabb = ProbeAABB_Create(cascadeIndex, info);

  // Angle of the ray from the center of the cascade
  CascadePixelIndex coordsInCascade = CascadePixelIndex(ivec2(pixelIndex - aabb.min));
  float angleRadians = Angle_FromCascadeIndex(coordsInCascade, info);

  // Sample the scene to get radiance
  vec2 rayDirection = vec2(cos(angleRadians), sin(angleRadians));
  vec2 rayOrigin = aabb.center * sceneResolution / cascadeResolution;

  vec4 radiance = SampleRadiance_SDF(
      sdfTexture, sceneResolution, rayOrigin, rayDirection, info);

  gl_FragColor = radiance;
}
