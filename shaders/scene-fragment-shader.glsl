
uniform vec2 resolution;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying vec2 vUv;

uniform float time;
uniform sampler2D sdfTexture;

uniform vec2 brushPos;
uniform float brushRadius;
uniform vec3 brushColour;


void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 pixelCoords = gl_FragCoord.xy - resolution.xy / 2.0;

  vec4 texel = texture2D(sdfTexture, uv);

  vec3 lightColour = vec3(0.0, 0.0, 1.0);
  float lightDist = sdfBox(pixelCoords - vec2(0.0), vec2(20.0));

  vec3 colour = mix(texel.xyz, lightColour, smoothstep(0.0, 1.0, texel.w));
  float dist = min(texel.w, lightDist);

  // Draw temporary brush
  vec2 brushCoords = (brushPos - 0.5) * resolution;
  float brushDist = sdfCircle((pixelCoords - brushCoords), brushRadius * 0.5);

  colour = mix(colour, brushColour, smoothstep(1.0, 0.0, brushDist));
  dist = min(dist, brushDist);


  gl_FragColor = vec4(colour, dist);
}