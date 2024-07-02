
uniform int cascade0_Dims;
uniform float cascade0_Range;
uniform vec2 cascadeResolution;


struct CascadeInfo {
  int dimensions;
  int angles;
  int level;
  vec2 range;
};

struct PixelIndex {
  ivec2 index;
};

struct ProbeIndex {
  ivec2 index;
};

struct ProbeAABB {
  vec2 min;
  vec2 max;
  vec2 center;
};

vec2 _CalculateRange(int cascadeLevel) {
  const float factor = 4.0;
 
  float cascadeN_Start_Pixels = cascade0_Range * (1.0 - pow(factor, float(cascadeLevel))) / (1.0 - factor);
  float cascadeN_End_Pixels = cascade0_Range * (1.0 - pow(factor, float(cascadeLevel) + 1.0)) / (1.0 - factor);

  return vec2(cascadeN_Start_Pixels, cascadeN_End_Pixels);
}


CascadeInfo Cascade_GetInfo(int cascadeLevel) {
  int dims = cascade0_Dims * (1 << cascadeLevel);
  vec2 range = _CalculateRange(cascadeLevel);
  return CascadeInfo(dims, dims * dims, cascadeLevel, range);
}

ProbeIndex ProbeIndex_Create(vec2 pixelIndex, CascadeInfo info) {
  //fixme
  return ProbeIndex(ivec2(floor(pixelIndex / float(info.dimensions))));
}


ProbeAABB ProbeAABB_Create(ProbeIndex cascadeIndex, CascadeInfo info) {
  //fixme
  float dimensions = float(info.dimensions);
  vec2 bl = dimensions * vec2(cascadeIndex.index);

  return ProbeAABB(bl, bl + dimensions - 1.0, bl + 0.5 * (dimensions - 1.0));
}

float _AngleOffset(CascadeInfo info) {
  //fixme
  float angleStep = 2.0 * PI / float(info.dimensions * info.dimensions);
  return angleStep * 0.5;
}

int _Angle_to_Index(float angle, CascadeInfo info) {
  float angleNormalized = (angle / (2.0 * PI));
  //fixme
  int angleIndex = int(floor(angleNormalized * float(info.dimensions * info.dimensions)));

  return angleIndex % int(info.dimensions * info.dimensions);
}

struct CascadePixelIndex {
  ivec2 index;
};

CascadePixelIndex _Index_To_CascadeIndex(int angleIndex, CascadeInfo info) {
  angleIndex = angleIndex % (info.dimensions * info.dimensions);
  int x = angleIndex % info.dimensions;
  int y = angleIndex / info.dimensions;
  return CascadePixelIndex(ivec2(x, y));
}

CascadePixelIndex[4] Cascade_FindNearbyAngles(float angle, CascadeInfo info) {
  int index = _Angle_to_Index(angle + _AngleOffset(info), info);

  CascadePixelIndex cascadeIndex1 = _Index_To_CascadeIndex(index - 1, info);
  CascadePixelIndex cascadeIndex2 = _Index_To_CascadeIndex(index, info);
  CascadePixelIndex cascadeIndex3 = _Index_To_CascadeIndex(index + 1, info);
  CascadePixelIndex cascadeIndex4 = _Index_To_CascadeIndex(index + 2, info);

  return CascadePixelIndex[4](cascadeIndex1, cascadeIndex2, cascadeIndex3, cascadeIndex4);
}

CascadePixelIndex[5] Cascade_FindNearbyAngles2(float angle, CascadeInfo info) {
  int index = _Angle_to_Index(angle + _AngleOffset(info), info);

  int dims = info.dimensions * info.dimensions;
  CascadePixelIndex cascadeIndex0 = _Index_To_CascadeIndex(index + dims - 2, info);
  CascadePixelIndex cascadeIndex1 = _Index_To_CascadeIndex(index + dims - 1, info);
  CascadePixelIndex cascadeIndex2 = _Index_To_CascadeIndex(index, info);
  CascadePixelIndex cascadeIndex3 = _Index_To_CascadeIndex(index + 1, info);
  CascadePixelIndex cascadeIndex4 = _Index_To_CascadeIndex(index + 2, info);

  return CascadePixelIndex[5](cascadeIndex0, cascadeIndex1, cascadeIndex2, cascadeIndex3, cascadeIndex4);
}

CascadePixelIndex CascadePixelIndex_FromPixelIndex(vec2 idx, ProbeAABB aabb) {
  return CascadePixelIndex(ivec2(idx - aabb.min));
}

CascadePixelIndex CascadeIndex_FromAngle(float angle, CascadeInfo info) {
  int index = _Angle_to_Index(angle + _AngleOffset(info), info);
  return _Index_To_CascadeIndex(index, info);
}

int _CascadeIndex_to_Index(CascadePixelIndex idx, CascadeInfo info) {
  //fixme
  return idx.index.x + idx.index.y * info.dimensions;
}

float _Index_to_Angle(int index, CascadeInfo info) {
  //fixme
  // return (index / float(info.dimensions * info.dimensions)) * 2.0 * PI;

  float angleStep = 2.0 * PI / float(info.dimensions * info.dimensions);

  return float(index) * angleStep;
}


float Angle_FromCascadeIndex(CascadePixelIndex coords, CascadeInfo info) {
  int ni = _CascadeIndex_to_Index(coords, info);
  float angle = _Index_to_Angle(ni, info) - _AngleOffset(info);
  
  angle = mod(angle, 2.0 * PI);

  return angle;
}

// vec3 Cascade_BL_and_AngleIndex_To_UV(vec2 cascade_BL_Pixels, vec2 angleIndex, float cascadeLevel, vec2 cascadeResolution) {
//   return vec3((cascade_BL_Pixels + angleIndex + 0.5) / cascadeResolution, cascadeLevel);
// }

vec2 Cascade_GenerateUVs(ProbeAABB aabb, CascadePixelIndex cascadeIndex, vec2 cascadeResolution) {
  vec2 uv = (aabb.min + vec2(cascadeIndex.index) + 0.5) / cascadeResolution;
  return uv;
}

struct BilinearPositions {
  vec2 bl;
  vec2 br;
  vec2 tl;
  vec2 tr;
  vec2 weight;
};

BilinearPositions FindBilinearPositions(vec2 pixelIndex, CascadeInfo info) {
  //fixme
  vec2 pos = pixelIndex - float(info.dimensions) * 0.5;

  ProbeIndex cascade_BL_Index = ProbeIndex_Create(pos, info);
  ProbeAABB cascadeAABB = ProbeAABB_Create(cascade_BL_Index, info);
  vec2 cascade_BL_Pixels = cascadeAABB.center;

  vec2 st = (pixelIndex - cascade_BL_Pixels) / float(info.dimensions);
  vec2 f = fract(st);

  return BilinearPositions(
      cascade_BL_Pixels + vec2(0.0, 0.0),
      cascade_BL_Pixels + vec2(info.dimensions, 0.0),
      cascade_BL_Pixels + vec2(0.0, info.dimensions),
      cascade_BL_Pixels + vec2(info.dimensions, info.dimensions),
      f);
}

vec4 SampleRadiance_SDF(sampler2D sdfTexture, vec2 sceneResolution, vec2 rayOrigin, vec2 rayDirection, CascadeInfo info) {
  vec2 ray = rayOrigin;

  float start = info.range.x;
  float end = info.range.y;

  float stepSize = 0.5;
  float t = start;
  for (float i = 0.0; i < 64.0; ++i) {
    vec2 currentPosition = rayOrigin + t * rayDirection;

    if (t > end) {
      break;
    }

    if (currentPosition.x < 0.0 || currentPosition.x > sceneResolution.x - 1.0 ||
        currentPosition.y < 0.0 || currentPosition.y > sceneResolution.y - 1.0) {
      break;
    }

    // Sample the scene SDF, if we're inside the scene, break
    vec4 sceneSample = texture2D(sdfTexture, (currentPosition + 0.5) / sceneResolution);

    float sceneDist = sceneSample.w;
    vec3 sceneColour = sceneSample.xyz;
    if (sceneDist > 0.1) {
      t += sceneDist;

      continue;
    }

    return vec4(sceneColour, 0.0);
  }

  return vec4(vec3(0.0), 1.0);
}

vec4 SampleRadianceCascadeInDirection(sampler2D mergedTexture, ProbeIndex cascadeIndex, int level, float angleRadians) {
  CascadeInfo info = Cascade_GetInfo(level);
  ProbeAABB cascadeAABB = ProbeAABB_Create(cascadeIndex, info);
  vec2 cascade_Center_Pixels = cascadeAABB.center;
  vec2 cascade_BL_Pixels = cascadeAABB.min;

  // Quick check for offscreen
  if (cascade_Center_Pixels.x < 0.0 || cascade_Center_Pixels.x >= cascadeResolution.x ||
      cascade_Center_Pixels.y < 0.0 || cascade_Center_Pixels.y >= cascadeResolution.y) {
    return vec4(0.0);
  }

  CascadePixelIndex nearbyAngleIndices[4] = Cascade_FindNearbyAngles(angleRadians, info);

  vec4 radiance = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    CascadePixelIndex angleIndex = nearbyAngleIndices[i];

    vec2 uv = Cascade_GenerateUVs(cascadeAABB, angleIndex, cascadeResolution);
    vec4 radianceSample = texture(mergedTexture, uv);
    radiance += radianceSample;
  }
  radiance *= 0.25;

  return radiance;
}


vec4 SampleMergedRadiance_Bilinear(sampler2D mergedTexture, vec2 pixelIndex, float angleRadians, int level) {
  CascadeInfo ci = Cascade_GetInfo(level);

  // Sample the radiance from higher cascade levels in direction of angleRadians
  // Make sure to use the position of the probe from the lower cascade level
  CascadeInfo ciLower = Cascade_GetInfo(level - 1);
  ProbeIndex idxLower = ProbeIndex_Create(pixelIndex, ciLower);
  ProbeAABB aabbLower = ProbeAABB_Create(idxLower, ciLower);
  BilinearPositions positions = FindBilinearPositions(aabbLower.center, ci);

  ProbeIndex cascadeIndex_x0y0 = ProbeIndex_Create(positions.bl, ci);
  ProbeIndex cascadeIndex_x1y0 = ProbeIndex_Create(positions.br, ci);
  ProbeIndex cascadeIndex_x0y1 = ProbeIndex_Create(positions.tl, ci);
  ProbeIndex cascadeIndex_x1y1 = ProbeIndex_Create(positions.tr, ci);

  vec4 radiance_x0y0 = SampleRadianceCascadeInDirection(mergedTexture, cascadeIndex_x0y0, level, angleRadians);
  vec4 radiance_x1y0 = SampleRadianceCascadeInDirection(mergedTexture, cascadeIndex_x1y0, level, angleRadians);
  vec4 radiance_x0y1 = SampleRadianceCascadeInDirection(mergedTexture, cascadeIndex_x0y1, level, angleRadians);
  vec4 radiance_x1y1 = SampleRadianceCascadeInDirection(mergedTexture, cascadeIndex_x1y1, level, angleRadians);

  vec4 px1 = mix(radiance_x0y0, radiance_x1y0, positions.weight.x);
  vec4 px2 = mix(radiance_x0y1, radiance_x1y1, positions.weight.x);
  vec4 radiance = mix(px1, px2, positions.weight.y);

  return radiance;
}
