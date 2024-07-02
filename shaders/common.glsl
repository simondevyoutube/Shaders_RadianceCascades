
mat2 rotate2D(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float saturate(float x) {
  return clamp(x, 0.0, 1.0);
}

vec3 saturate3(vec3 x) {
  return clamp(x, vec3(0.0), vec3(1.0));
}


float linearstep(float minValue, float maxValue, float v) {
  return clamp((v - minValue) / (maxValue - minValue), 0.0, 1.0);
}

float inverseLerp(float minValue, float maxValue, float v) {
  return (v - minValue) / (maxValue - minValue);
}

float inverseLerpSat(float minValue, float maxValue, float v) {
  return saturate((v - minValue) / (maxValue - minValue));
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(inMin, inMax, v);
  return mix(outMin, outMax, t);
}

float easeOut(float x, float t) {
	return 1.0 - pow(1.0 - x, t);
}

float easeIn(float x, float t) {
	return pow(x, t);
}

float easeOutBounce(float x) {
  const float n1 = 7.5625;
  const float d1 = 2.75;

  if (x < 1.0 / d1) {
    return n1 * x * x;
  } else if (x < 2.0 / d1) {
    x -= 1.5 / d1;
    return n1 * x * x + 0.75;
  } else if (x < 2.5 / d1) {
    x -= 2.25 / d1;
    return n1 * x * x + 0.9375;
  } else {
    x -= 2.625 / d1;
    return n1 * x * x + 0.984375;
  }
}

float easeInBounce(float x) {
  return 1.0 - easeOutBounce(1.0 - x);
}

float easeInOutBounce(float x) {
  return x < 0.5
    ? (1.0 - easeOutBounce(1.0 - 2.0 * x)) / 2.0
    : (1.0 + easeOutBounce(2.0 * x - 1.0)) / 2.0;
}

float elasticOut(float t) {
  const float HALF_PI =1.5707963267948966;

  return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;
}

float sinc( float x, float k )
{
  float a = 3.14159*(k*x-1.0);
  return sin(a)/a;
}

float pcurve( float x, float a, float b )
{
    float k = pow(a+b,a+b)/(pow(a,a)*pow(b,b));
    return k*pow(x,a)*pow(1.0-x,b);
}

float easeOutPow(float x, float k) {
  return 1.0 - pow(1.0 - x, k);
}

float easeOutQuad(float x) {
  return 1.0 - (1.0 - x) * (1.0 - x);
}

// gain definition
float gain(float x, float k) 
{
  float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);
  return (x<0.5)?a:1.0-a;
}

float expImpulse( float x, float k )
{
  float h = k * x;
  return max(0.0, h * exp(1.0 - h));
}

float cubicPulse( float c, float w, float x )
{
    x = abs(x - c);
    if( x>w ) return 0.0;
    x /= w;
    return 1.0 - x*x*(3.0-2.0*x);
}

float parabola( float x, float k )
{
    return pow( 4.0*x*(1.0-x), k );
}

float smootherstep(float edge0, float edge1, float x) {
  // Scale, and clamp x to 0..1 range
  x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  // Evaluate polynomial
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

vec2 smootherstep2(vec2 edge0, vec2 edge1, vec2 x) {
  // Scale, and clamp x to 0..1 range
  x = clamp((x - edge0) / (edge1 - edge0), vec2(0.0), vec2(1.0));
  // Evaluate polynomial
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

vec3 smootherstep3(vec3 edge0, vec3 edge1, vec3 x) {
  // Scale, and clamp x to 0..1 range
  x = clamp((x - edge0) / (edge1 - edge0), vec3(0.0), vec3(1.0));
  // Evaluate polynomial
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}


float integralSmoothstep( float x, float T )
{
    if( x>T ) return x - T/2.0;
    return x*x*x*(1.0-x*0.5/T)/T/T;
}

/////////////////////////////////////////////////////////////////////////
//
// 2D SDF's
//
/////////////////////////////////////////////////////////////////////////

float opUnion( float d1, float d2 )
{
  return min(d1,d2);
}
float opSubtraction( float d1, float d2 )
{
  return max(-d1,d2);
}
float opIntersection( float d1, float d2 )
{
  return max(d1,d2);
}
float opXor(float d1, float d2 )
{
  return max(min(d1,d2),-max(d1,d2));
}

float sdfCircle(vec2 p, float r) {
    return length(p) - r;
}

float sdfBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float sdEquilateralTriangle( in vec2 p, in float r )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + r/k;
    if( p.x+k*p.y>0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
    p.x -= clamp( p.x, -2.0*r, 0.0 );
    return -length(p)*sign(p.y);
}

float sdfLine(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);

  return length(pa - ba * h);
}

float sdArc( in vec2 p, in vec2 sc, in float ra, float rb )
{
    // sc is the sin/cos of the arc's aperture
    p.x = abs(p.x);
    return ((sc.y*p.x>sc.x*p.y) ? length(p-sc*ra) : 
                                  abs(length(p)-ra)) - rb;
}

float sdPie( in vec2 p, in vec2 c, in float r )
{
    p.x = abs(p.x);
    float l = length(p) - r;
    float m = length(p-c*clamp(dot(p,c),0.0,r)); // c=sin/cos of aperture
    return max(l,m*sign(c.y*p.x-c.x*p.y));
}

float sdfStickman(vec2 pos) {
  float d = sdfCircle(pos - vec2(0.0, 20.0), 20.0);
  float d1 = sdfLine(pos, vec2(0.0, 0.0), vec2(0.0, -25.0)) - 4.0;
  float d2 = sdfLine(pos, vec2(0.0, -25.0), vec2(20.0, -50.0)) - 4.0;
  float d3 = sdfLine(pos, vec2(0.0, -25.0), vec2(-20.0, -50.0)) - 4.0;
  float d4 = sdfLine(pos, vec2(0.0, -12.5), vec2(-20.0, -12.5)) - 4.0;
  float d5 = sdfLine(pos, vec2(0.0, -12.5), vec2(20.0, -12.5)) - 4.0;

  d = min(d, d1);
  d = min(d, d2);
  d = min(d, d3);
  d = min(d, d4);
  d = min(d, d5);

  return d;
}

float sdPolygon(in vec2[3] v, in vec2 p )
{
    float d = dot(p-v[0],p-v[0]);
    float s = 1.0;
    for( int i=0, j=3-1; i<3; j=i, i++ )
    {
        vec2 e = v[j] - v[i];
        vec2 w =    p - v[i];
        vec2 b = w - e*clamp( dot(w,e)/dot(e,e), 0.0, 1.0 );
        d = min( d, dot(b,b) );
        bvec3 c = bvec3(p.y>=v[i].y,p.y<v[j].y,e.x*w.y>e.y*w.x);
        if( all(c) || all(not(c)) ) s*=-1.0;  
    }
    return s*sqrt(d);
}

float sdPolygon(in vec2[4] v, in vec2 p )
{
    float d = dot(p-v[0],p-v[0]);
    float s = 1.0;
    for( int i=0, j=4-1; i<4; j=i, i++ )
    {
        vec2 e = v[j] - v[i];
        vec2 w =    p - v[i];
        vec2 b = w - e*clamp( dot(w,e)/dot(e,e), 0.0, 1.0 );
        d = min( d, dot(b,b) );
        bvec3 c = bvec3(p.y>=v[i].y,p.y<v[j].y,e.x*w.y>e.y*w.x);
        if( all(c) || all(not(c)) ) s*=-1.0;  
    }
    return s*sqrt(d);
}

vec3 opRep( in vec3 p, in vec3 c )
{
    vec3 q = mod(p+0.5*c,c)-0.5*c;
    return q;
}


vec3 opRepLim( in vec3 p, in float c, in vec3 l)
{
    vec3 q = p-c*clamp(round(p/c),-l,l);
    return q;
}

// Create multiple copies of an object - https://iquilezles.org/articles/distfunctions
vec2 opRepLim( in vec2 p, in float s, in vec2 lima, in vec2 limb )
{
    return p-s*clamp(round(p/s),lima,limb);
}

// Create infinite copies of an object -  https://iquilezles.org/articles/distfunctions
vec2 opRep( in vec2 p, in float s )
{
    return mod(p+s*0.5,s)-s*0.5;
}



/////////////////////////////////////////////////////////////////////////
//
// Misc
//
/////////////////////////////////////////////////////////////////////////
vec3 vignette(vec2 uvs) {
  float v1 = smoothstep(0.5, 0.3, abs(uvs.x - 0.5));
  float v2 = smoothstep(0.5, 0.3, abs(uvs.y - 0.5));
  float v = v1 * v2;
  v = pow(v, 0.25);
  v = remap(v, 0.0, 1.0, 0.4, 1.0);
  return col3(v);
}

float softMax(float a, float b, float k) {
  return log(exp(k * a) + exp(k * b)) / k;
}

float softMin(float a, float b, float k) {
  return -softMax(-a, -b, k);
}

/////////////////////////////////////////////////////////////////////////
//
// Animated SDF's
//
/////////////////////////////////////////////////////////////////////////
float sdfDistLines_Anim(vec2 p, vec2 a, vec2 b, float t) {
  vec2 ab = (a + b) * 0.5;

  float t1 = smoothstep(0.0, 0.75, t);
  float d = sdfLine(p, mix(ab, a, t1), mix(ab, b, t1));

  vec2 dir = normalize(b - a);

  // d = min(d, sdfLine(p, b, b - 150.0 * dir + 75.0 * vec2(dir.y, -dir.x)));
  // d = min(d, sdfLine(p, b, b - 150.0 * dir + 75.0 * vec2(-dir.y, dir.x)));

  float t2 = smoothstep(0.75, 1.0, t);
  vec2 offset = mix(vec2(0.0), 10.0 * vec2(dir.y, -dir.x), t2);
  float ends = sdfLine(p, b - offset, b + offset);
  ends = min(ends, sdfLine(p, a - offset, a + offset));

  float t3 = smoothstep(0.75, 0.76, t);
  d = mix(d, min(d, ends), t3);

  return d;
}

float sdfLine_Anim(vec2 p, vec2 a, vec2 b, float t) {
  vec2 bAnimated = mix(a, b, t);

  vec2 pa = p - a;
  vec2 ba = bAnimated - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);

  return length(pa - ba * h);
}

float sdfLine_Anim_Center(vec2 p, vec2 a, vec2 b, float t) {
  vec2 center = (a + b) * 0.5;

  a = mix(center, a, t);
  b = mix(center, b, t);

  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);

  return length(pa - ba * h);
}

struct SDFArrowParams {
  vec2 a;
  vec2 b;
  float size;
};

float sdfArrow_Anim(vec2 p, SDFArrowParams params, float t) {
  vec2 bAnimated = mix(params.a, params.b, t);
  float d = sdfLine(p, params.a, bAnimated);

  vec2 dir = normalize(params.b - params.a);
  float t_Arrow = t * t;

  float arrowLen = params.size;

  d = min(d, sdfLine(p, bAnimated, bAnimated - t_Arrow * arrowLen * 0.75 * dir + t_Arrow * arrowLen * 0.25 * vec2(dir.y, -dir.x)));
  d = min(d, sdfLine(p, bAnimated, bAnimated - t_Arrow * arrowLen * 0.75 * dir + t_Arrow * arrowLen * 0.25 * vec2(-dir.y, dir.x)));

  return d;
}

float sdfArrow_Anim(vec2 p, vec2 a, vec2 b, float t) {
  SDFArrowParams params = SDFArrowParams(a, b, 25.0);

  return sdfArrow_Anim(p, params, t);
}


float sdfEye(vec2 p, vec2 pos, float size) {
  vec2 dir = vec2(0.0, 1.0);
  float d1 = sdfLine(p, pos, pos + size * dir + size * 0.5 * vec2(-dir.y, dir.x));
  float d2 = sdfLine(p, pos, pos + size * dir + size * 0.5 * vec2(dir.y, -dir.x));

  float t = 3.14159 / 6.75;
  float d3 = sdPie(p - pos, vec2(sin(t), cos(t)), size * 0.75);

  float d = min(d1, d2);
  d = min(d, d3);

  return d;
}

vec3 aces_tonemap(vec3 color){	
	mat3 m1 = mat3(
        0.59719, 0.07600, 0.02840,
        0.35458, 0.90834, 0.13383,
        0.04823, 0.01566, 0.83777
	);
	mat3 m2 = mat3(
        1.60475, -0.10208, -0.00327,
        -0.53108,  1.10813, -0.07276,
        -0.07367, -0.00605,  1.07602
	);
	vec3 v = m1 * color;    
	vec3 a = v * (v + 0.0245786) - 0.000090537;
	vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
	return pow(clamp(m2 * (a / b), 0.0, 1.0), vec3(1.0 / 2.2));	
}

