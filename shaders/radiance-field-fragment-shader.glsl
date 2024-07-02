varying vec2 vUv;

// // DEBUG
// uniform sampler2DArray cascadeTextures;
// //

uniform sampler2D mergedCascade0Texture;

uniform vec2 sceneResolution;


void main() {
  CascadeInfo ci0 = Cascade_GetInfo(0);

  vec2 pixelIndex = (gl_FragCoord.xy - 0.5);
  //fixme
  vec2 pixelIndexCascadeTexture = pixelIndex * float(ci0.dimensions);

  ProbeIndex cascade0_Index = ProbeIndex_Create(pixelIndexCascadeTexture, ci0);
  ProbeAABB cascade0_AABB = ProbeAABB_Create(cascade0_Index, ci0);
  vec2 cascade0_BL_Pixels = cascade0_AABB.min;

  vec4 radiance = vec4(0.0);
  for (int i = 0; i < ci0.dimensions; ++i) {
    for (int j = 0; j < ci0.dimensions; ++j) {
      vec2 sampleIndex = cascade0_BL_Pixels + vec2(i, j);
      radiance += texture(mergedCascade0Texture, (sampleIndex + 0.5) / cascadeResolution);
    }
  }

  //fixme
  radiance /= float(ci0.dimensions * ci0.dimensions);

  gl_FragColor = radiance;
}
