varying vec2 vUv;

uniform sampler2D diffuse;

void main() {
  vec4 texel = texture2D(diffuse, vUv);

  gl_FragColor = texel;
}
