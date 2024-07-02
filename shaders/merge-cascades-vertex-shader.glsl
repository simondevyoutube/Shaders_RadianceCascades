varying vec2 vUv;


void main() {
  vec4 localSpacePosition = vec4(position, 1.0);

  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * localSpacePosition;
}