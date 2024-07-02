varying vec2 vUv;

uniform sampler2D radianceTexture;
uniform sampler2D sceneTexture;
uniform sampler2D sdfTexture;
uniform vec2 resolution;

vec3 BackgroundColour() {
  return col3(1.0);
}

vec3 drawGrid(vec2 pixelCoords, vec3 colour, vec3 lineColour, float cellSpacing, float lineWidth, float pixelSize) {
  vec2 cellPosition = abs(fract(pixelCoords / vec2(cellSpacing)) - 0.5);
  float distToEdge = (0.5 - max(cellPosition.x, cellPosition.y)) * cellSpacing;
  float lines = smoothstep(lineWidth - pixelSize, lineWidth, distToEdge);

  colour = mix(lineColour, colour, lines);

  return colour;
}

vec3 drawGraphBackground_Ex(vec2 pixelCoords, float scale) {
  float pixelSize = 1.0 / scale;
  vec2 cellPosition = floor(pixelCoords / vec2(100.0));
  vec2 cellID = vec2(floor(cellPosition.x), floor(cellPosition.y));
  vec3 checkerboard = col3(mod(cellID.x + cellID.y, 2.0));

  vec3 colour = BackgroundColour();
  colour = mix(colour, checkerboard, 0.05);

  colour = drawGrid(pixelCoords, colour, col3(0.5), 10.0, 1.0, pixelSize);
  colour = drawGrid(pixelCoords, colour, col3(0.25), 100.0, 2.5, pixelSize);
  colour = (col3(0.95) + hash(pixelCoords) * 0.01) * colour;

  return colour;
}

vec3 drawGraphBackground(vec2 pixelCoords) {
  return drawGraphBackground_Ex(pixelCoords, 1.0);
}

void main() {
  vec2 pixelCoords = (vUv - 0.5) * resolution;

  vec2 uv = vUv;

  vec4 radiance = texture(radianceTexture, uv);

  vec4 scene = texture2D(sceneTexture, uv);
  vec4 sdf = texture2D(sdfTexture, uv);
  vec3 bg = drawGraphBackground(pixelCoords);

  vec3 colour = mix(bg, col3(sdf.xyz), smoothstep(1.0, 0.0, sdf.w));

#if defined(USE_OKLAB)
  colour = oklabToRGB(colour);
#endif

  colour *= radiance.xyz;
  colour = aces_tonemap(colour);

  gl_FragColor = vec4(colour, 1.0);
}
