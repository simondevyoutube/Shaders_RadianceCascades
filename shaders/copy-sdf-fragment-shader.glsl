varying vec2 vUv;

uniform sampler2D sdfSource;

uniform vec2 brushPos1;
uniform vec2 brushPos2;
uniform float brushRadius;
uniform vec3 brushColour;

uniform vec2 resolution;
uniform float time;

void main() {
  vec2 pixelCoords = (vUv - 0.5) * resolution;

  vec4 texel = texture2D(sdfSource, vUv);


  // Kinda dumb but whatever
  vec2 brushCoords1 = (brushPos1 - 0.5) * resolution;
  vec2 brushCoords2 = (brushPos2 - 0.5) * resolution;

  float distBetweenBrushes = distance(brushCoords1, brushCoords2);
  float steps = ceil(distBetweenBrushes);

  for (float i = 0.0; i < steps; ++i) {
    vec2 brushCoords = mix(brushCoords1, brushCoords2, i / steps);
    float dist = sdfCircle(pixelCoords - brushCoords, brushRadius * 0.5);

    texel.w = min(texel.w, dist);
    texel.xyz = mix(texel.xyz, brushColour, smoothstep(1.0, 0.0, dist));
  }

  gl_FragColor = texel;

  // float lightDist1 = sdfBox(pixelCoords - vec2(-16.0, 0.0), vec2(8.0, 64.0));
  // float lightDist2 = sdfBox(pixelCoords - vec2(-48.0, 0.0), vec2(8.0, 80.0));
  // float lightDist3 = sdfBox(pixelCoords - vec2(48.0, 0.0), vec2(8.0, 80.0));
  // float lightDist4 = sdfBox(pixelCoords - vec2(0.0, -200.0), vec2(200.0, 8.0));

  // float opaqueDist1 = sdfBox(pixelCoords - vec2(16.0, 24.0), vec2(8.0, 16.0));
  // float opaqueDist2 = sdfBox(pixelCoords - vec2(16.0, -24.0), vec2(8.0, 16.0));
  // float opaqueDist3 = sdfBox(pixelCoords - vec2(0.0, 150.0), vec2(remap(sin(time), -1.0, 1.0, 100.0, 200.0), 16.0));
  // // float opaqueDist3 = sdBox(pixelCoords - vec2(0.0, 150.0), vec2(200.0, 16.0));

  // float sd = min(opaqueDist1, opaqueDist2);
  // sd = min(sd, opaqueDist3);

  // vec3 emissivity = col3(0.0);

  // emissivity = mix(emissivity, col3(1.0, 1.0, 0.0), smoothstep(1.0, 0.0, lightDist1));
  // sd = min(sd, lightDist1);

  // emissivity = mix(emissivity, col3(0.8, 0.9, 1.0), smoothstep(1.0, 0.0, lightDist4));
  // sd = min(sd, lightDist4);

  // // sd = min(sd, lightDist2);
  // // emissivity = mix(emissivity, col3(1.0, 0.0, 0.0), smoothstep(1.0, 0.0, lightDist2));

  // sd = min(sd, lightDist3);
  // emissivity = mix(emissivity, col3(0.0, 0.0, 1.0), smoothstep(1.0, 0.0, lightDist3));

  // gl_FragColor = vec4(emissivity, sd);
}
