(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const En="156",Vh=0,oo=1,kh=2,lo=1,Bh=2,hi=3,Wt=0,Ct=1,ui=2,Ti=0,dr=1,co=2,ho=3,uo=4,zh=5,pr=100,Hh=101,Gh=102,po=103,mo=104,Wh=200,jh=201,Xh=202,qh=203,fo=204,go=205,Kh=206,Yh=207,Zh=208,$h=209,Jh=210,Qh=0,eu=1,tu=2,Tn=3,iu=4,ru=5,au=6,nu=7,vo=0,su=1,ou=2,Ci=0,lu=1,cu=2,hu=3,uu=4,du=5,_o=300,mr=301,fr=302,Cn=303,An=304,Pa=306,Rn=1e3,Kt=1001,Pn=1002,mt=1003,bo=1004,Ln=1005,At=1006,pu=1007,Yr=1008,Ai=1009,mu=1010,fu=1011,Un=1012,xo=1013,Ri=1014,Pi=1015,Wi=1016,yo=1017,Mo=1018,ji=1020,gu=1021,Nt=1023,vu=1024,_u=1025,Xi=1026,gr=1027,bu=1028,wo=1029,xu=1030,So=1031,Eo=1033,Dn=33776,In=33777,Nn=33778,On=33779,To=35840,Co=35841,Ao=35842,Ro=35843,yu=36196,Po=37492,Lo=37496,Uo=37808,Do=37809,Io=37810,No=37811,Oo=37812,Fo=37813,Vo=37814,ko=37815,Bo=37816,zo=37817,Ho=37818,Go=37819,Wo=37820,jo=37821,Fn=36492,Xo=36494,qo=36495,Mu=36283,Ko=36284,Yo=36285,Zo=36286,$o=3e3,qi=3001,wu=3200,Su=3201,Eu=0,Tu=1,Ki="",Ke="srgb",ri="srgb-linear",La="display-p3",Vn=7680,Cu=519,Au=512,Ru=513,Pu=514,Lu=515,Uu=516,Du=517,Iu=518,Nu=519,Jo=35044,Qo="300 es",kn=1035,di=2e3,Ua=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bn=Math.PI/180,zn=180/Math.PI;function Zr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Hn(i,e,t){return(1-t)*i+t*e}function el(i){return(i&i-1)===0&&i!==0}function Gn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $r(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*r-s*a+e.x,this.y=n*a+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,r,a,n,s,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,l,c)}set(e,t,r,a,n,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],p=r[2],f=r[5],_=r[8],v=a[0],m=a[3],u=a[6],E=a[1],y=a[4],S=a[7],T=a[2],R=a[5],C=a[8];return n[0]=s*v+o*E+l*T,n[3]=s*m+o*y+l*R,n[6]=s*u+o*S+l*C,n[1]=c*v+h*E+d*T,n[4]=c*m+h*y+d*R,n[7]=c*u+h*S+d*C,n[2]=p*v+f*E+_*T,n[5]=p*m+f*y+_*R,n[8]=p*u+f*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,p=o*l-h*n,f=c*n-s*l,_=t*d+r*p+a*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(a*c-h*r)*v,e[2]=(o*r-a*s)*v,e[3]=p*v,e[4]=(h*t-a*l)*v,e[5]=(a*n-o*t)*v,e[6]=f*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,n,s,o){const l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wn.makeScale(e,t)),this}rotate(e){return this.premultiply(Wn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wn=new Ue;function tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fu(){const i=Da("canvas");return i.style.display="block",i}const il={};function Jr(i){i in il||(il[i]=!0,console.warn(i))}function _r(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vu=new Ue().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ku=new Ue().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Bu(i){return i.convertSRGBToLinear().applyMatrix3(ku)}function zu(i){return i.applyMatrix3(Vu).convertLinearToSRGB()}const Hu={[ri]:i=>i,[Ke]:i=>i.convertSRGBToLinear(),[La]:Bu},Gu={[ri]:i=>i,[Ke]:i=>i.convertLinearToSRGB(),[La]:zu},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return ri},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=Hu[e],a=Gu[t];if(r===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return a(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let br;class rl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Da("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=_r(n[s]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(_r(t[r]/255)*255):t[r]=_r(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wu=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Zr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(Xn(a[s].image)):n.push(Xn(a[s]))}else n=Xn(a);r.url=n}return t||(e.images[this.uuid]=r),r}}function Xn(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class zt extends vr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,r=Kt,a=Kt,n=At,s=Yr,o=Nt,l=Ai,c=zt.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Zr(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qi?Ke:Ki),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_o)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Pn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Pn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?qi:$o}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?Ke:Ki}}zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=_o,zt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,r=0,a=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*r+s[11]*a+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,n;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],p=s[9],f=s[2],_=s[6],v=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(p-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(p+_)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(o+1)/2,E=(d+1)/2,y=(v+1)/2,S=(l+h)/4,T=(c+f)/4,R=(p+_)/4;return u>E&&u>y?u<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(u),a=S/r,n=T/r):E>y?E<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(E),r=S/a,n=R/a):y<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(y),r=T/n,a=R/n),this.set(r,a,n,t),this}let m=Math.sqrt((_-p)*(_-p)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(_-p)/m,this.y=(c-f)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xu extends vr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const a={width:e,height:t,depth:1};r.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===qi?Ke:Ki),this.texture=new zt(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:At,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ot extends Xu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class nl extends zt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=mt,this.minFilter=mt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qu extends zt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=mt,this.minFilter=mt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,n,s,o){let l=r[a+0],c=r[a+1],h=r[a+2],d=r[a+3];const p=n[s+0],f=n[s+1],_=n[s+2],v=n[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==p||c!==f||h!==_){let m=1-o;const u=l*p+c*f+h*_+d*v,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const T=Math.sqrt(y),R=Math.atan2(T,u*E);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}const S=o*E;if(l=l*m+p*S,c=c*m+f*S,h=h*m+_*S,d=d*m+v*S,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,a,n,s){const o=r[a],l=r[a+1],c=r[a+2],h=r[a+3],d=n[s],p=n[s+1],f=n[s+2],_=n[s+3];return e[t]=o*_+h*d+l*f-c*p,e[t+1]=l*_+h*p+c*d-o*f,e[t+2]=c*_+h*f+o*p-l*d,e[t+3]=h*_-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(a/2),d=o(n/2),p=l(r/2),f=l(a/2),_=l(n/2);switch(s){case"XYZ":this._x=p*h*d+c*f*_,this._y=c*f*d-p*h*_,this._z=c*h*_+p*f*d,this._w=c*h*d-p*f*_;break;case"YXZ":this._x=p*h*d+c*f*_,this._y=c*f*d-p*h*_,this._z=c*h*_-p*f*d,this._w=c*h*d+p*f*_;break;case"ZXY":this._x=p*h*d-c*f*_,this._y=c*f*d+p*h*_,this._z=c*h*_+p*f*d,this._w=c*h*d-p*f*_;break;case"ZYX":this._x=p*h*d-c*f*_,this._y=c*f*d+p*h*_,this._z=c*h*_-p*f*d,this._w=c*h*d+p*f*_;break;case"YZX":this._x=p*h*d+c*f*_,this._y=c*f*d+p*h*_,this._z=c*h*_-p*f*d,this._w=c*h*d-p*f*_;break;case"XZY":this._x=p*h*d-c*f*_,this._y=c*f*d-p*h*_,this._z=c*h*_+p*f*d,this._w=c*h*d+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],n=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=r+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(n-c)*f,this._z=(s-a)*f}else if(r>o&&r>d){const f=2*Math.sqrt(1+r-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(a+s)/f,this._z=(n+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-r-d);this._w=(n-c)/f,this._x=(a+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-r-o);this._w=(s-a)/f,this._x=(n+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,n=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+s*o+a*c-n*l,this._y=a*h+s*l+n*o-r*c,this._z=n*h+s*c+r*l-a*o,this._w=s*h-r*o-a*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,n=this._z,s=this._w;let o=s*e._w+r*e._x+a*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=a,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*r+t*this._x,this._y=f*a+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=s*d+this._w*p,this._x=r*d+this._x*p,this._y=a*d+this._y*p,this._z=n*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(a),r*Math.sin(n),r*Math.cos(n),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,r=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*a,this.y=n[1]*t+n[4]*r+n[7]*a,this.z=n[2]*t+n[5]*r+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*a-o*r,h=l*r+o*t-n*a,d=l*a+n*r-s*t,p=-n*t-s*r-o*a;return this.x=c*l+p*-n+h*-o-d*-s,this.y=h*l+p*-s+d*-n-c*-o,this.z=d*l+p*-o+c*-s-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a,this.y=n[1]*t+n[5]*r+n[9]*a,this.z=n[2]*t+n[6]*r+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,n=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qn.copy(this).projectOnVector(e),this.sub(qn)}reflect(e){return this.sub(qn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qn=new N,sl=new Qr;class ea{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr);else{const a=e.geometry;if(a!==void 0)if(t&&a.attributes!==void 0&&a.attributes.position!==void 0){const n=a.attributes.position;for(let s=0,o=n.count;s<o;s++)mi.fromBufferAttribute(n,s).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else a.boundingBox===null&&a.computeBoundingBox(),xr.copy(a.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Ia.subVectors(this.max,ta),yr.subVectors(e.a,ta),Mr.subVectors(e.b,ta),wr.subVectors(e.c,ta),Li.subVectors(Mr,yr),Ui.subVectors(wr,Mr),Yi.subVectors(yr,wr);let t=[0,-Li.z,Li.y,0,-Ui.z,Ui.y,0,-Yi.z,Yi.y,Li.z,0,-Li.x,Ui.z,0,-Ui.x,Yi.z,0,-Yi.x,-Li.y,Li.x,0,-Ui.y,Ui.x,0,-Yi.y,Yi.x,0];return!Kn(t,yr,Mr,wr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,yr,Mr,wr,Ia))?!1:(Na.crossVectors(Li,Ui),t=[Na.x,Na.y,Na.z],Kn(t,yr,Mr,wr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new N,new N,new N,new N,new N,new N,new N,new N],mi=new N,xr=new ea,yr=new N,Mr=new N,wr=new N,Li=new N,Ui=new N,Yi=new N,ta=new N,Ia=new N,Na=new N,Zi=new N;function Kn(i,e,t,r,a){for(let n=0,s=i.length-3;n<=s;n+=3){Zi.fromArray(i,n);const o=a.x*Math.abs(Zi.x)+a.y*Math.abs(Zi.y)+a.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=r.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ku=new ea,ia=new N,Yn=new N;class Zn{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ku.setFromPoints(e).getCenter(r);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ia,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Yn)),this.expandByPoint(ia.copy(e.center).sub(Yn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new N,$n=new N,Oa=new N,Di=new N,Jn=new N,Fa=new N,Qn=new N;class Yu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){$n.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub($n);const n=e.distanceTo(t)*.5,s=-this.direction.dot(Oa),o=Di.dot(this.direction),l=-Di.dot(Oa),c=Di.lengthSq(),h=Math.abs(1-s*s);let d,p,f,_;if(h>0)if(d=s*l-o,p=s*o-l,_=n*h,d>=0)if(p>=-_)if(p<=_){const v=1/h;d*=v,p*=v,f=d*(d+s*p+2*o)+p*(s*d+p+2*l)+c}else p=n,d=Math.max(0,-(s*p+o)),f=-d*d+p*(p+2*l)+c;else p=-n,d=Math.max(0,-(s*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-_?(d=Math.max(0,-(-s*n+o)),p=d>0?-n:Math.min(Math.max(-n,-l),n),f=-d*d+p*(p+2*l)+c):p<=_?(d=0,p=Math.min(Math.max(-n,-l),n),f=p*(p+2*l)+c):(d=Math.max(0,-(s*n+o)),p=d>0?n:Math.min(Math.max(-n,-l),n),f=-d*d+p*(p+2*l)+c);else p=s>0?-n:n,d=Math.max(0,-(s*p+o)),f=-d*d+p*(p+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy($n).addScaledVector(Oa,p),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const r=fi.dot(this.direction),a=fi.dot(fi)-r*r,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,n,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(r=(e.min.x-p.x)*c,a=(e.max.x-p.x)*c):(r=(e.max.x-p.x)*c,a=(e.min.x-p.x)*c),h>=0?(n=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(n=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),r>s||n>a||((n>r||isNaN(r))&&(r=n),(s<a||isNaN(a))&&(a=s),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),r>l||o>a)||((o>r||r!==r)&&(r=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,r,a,n){Jn.subVectors(t,e),Fa.subVectors(r,e),Qn.crossVectors(Jn,Fa);let s=this.direction.dot(Qn),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(Fa.crossVectors(Di,Fa));if(l<0)return null;const c=o*this.direction.dot(Jn.cross(Di));if(c<0||l+c>s)return null;const h=-o*Di.dot(Qn);return h<0?null:this.at(h/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,r,a,n,s,o,l,c,h,d,p,f,_,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,l,c,h,d,p,f,_,v,m)}set(e,t,r,a,n,s,o,l,c,h,d,p,f,_,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=r,u[12]=a,u[1]=n,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Sr.setFromMatrixColumn(e,0).length(),n=1/Sr.setFromMatrixColumn(e,1).length(),s=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,n=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const p=s*h,f=s*d,_=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=_+f*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*h,f=l*d,_=c*h,v=c*d;t[0]=p+v*o,t[4]=_*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=f*o-_,t[6]=v+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*h,f=l*d,_=c*h,v=c*d;t[0]=p-v*o,t[4]=-s*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=s*h,t[9]=v-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*h,f=s*d,_=o*h,v=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,f=s*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-p*d,t[8]=_*d+f,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=p-v*d}else if(e.order==="XZY"){const p=s*l,f=s*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+v,t[5]=s*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zu,e,$u)}lookAt(e,t,r){const a=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ii.crossVectors(r,Ft),Ii.lengthSq()===0&&(Math.abs(r.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ii.crossVectors(r,Ft)),Ii.normalize(),Va.crossVectors(Ft,Ii),a[0]=Ii.x,a[4]=Va.x,a[8]=Ft.x,a[1]=Ii.y,a[5]=Va.y,a[9]=Ft.y,a[2]=Ii.z,a[6]=Va.z,a[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],p=r[9],f=r[13],_=r[2],v=r[6],m=r[10],u=r[14],E=r[3],y=r[7],S=r[11],T=r[15],R=a[0],C=a[4],q=a[8],b=a[12],w=a[1],K=a[5],ie=a[9],I=a[13],z=a[2],G=a[6],Y=a[10],W=a[14],X=a[3],$=a[7],j=a[11],O=a[15];return n[0]=s*R+o*w+l*z+c*X,n[4]=s*C+o*K+l*G+c*$,n[8]=s*q+o*ie+l*Y+c*j,n[12]=s*b+o*I+l*W+c*O,n[1]=h*R+d*w+p*z+f*X,n[5]=h*C+d*K+p*G+f*$,n[9]=h*q+d*ie+p*Y+f*j,n[13]=h*b+d*I+p*W+f*O,n[2]=_*R+v*w+m*z+u*X,n[6]=_*C+v*K+m*G+u*$,n[10]=_*q+v*ie+m*Y+u*j,n[14]=_*b+v*I+m*W+u*O,n[3]=E*R+y*w+S*z+T*X,n[7]=E*C+y*K+S*G+T*$,n[11]=E*q+y*ie+S*Y+T*j,n[15]=E*b+y*I+S*W+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],f=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+n*l*d-a*c*d-n*o*p+r*c*p+a*o*f-r*l*f)+v*(+t*l*f-t*c*p+n*s*p-a*s*f+a*c*h-n*l*h)+m*(+t*c*d-t*o*f-n*s*d+r*s*f+n*o*h-r*c*h)+u*(-a*o*h-t*l*d+t*o*p+a*s*d-r*s*p+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],f=e[11],_=e[12],v=e[13],m=e[14],u=e[15],E=d*m*c-v*p*c+v*l*f-o*m*f-d*l*u+o*p*u,y=_*p*c-h*m*c-_*l*f+s*m*f+h*l*u-s*p*u,S=h*v*c-_*d*c+_*o*f-s*v*f-h*o*u+s*d*u,T=_*d*l-h*v*l-_*o*p+s*v*p+h*o*m-s*d*m,R=t*E+r*y+a*S+n*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=E*C,e[1]=(v*p*n-d*m*n-v*a*f+r*m*f+d*a*u-r*p*u)*C,e[2]=(o*m*n-v*l*n+v*a*c-r*m*c-o*a*u+r*l*u)*C,e[3]=(d*l*n-o*p*n-d*a*c+r*p*c+o*a*f-r*l*f)*C,e[4]=y*C,e[5]=(h*m*n-_*p*n+_*a*f-t*m*f-h*a*u+t*p*u)*C,e[6]=(_*l*n-s*m*n-_*a*c+t*m*c+s*a*u-t*l*u)*C,e[7]=(s*p*n-h*l*n+h*a*c-t*p*c-s*a*f+t*l*f)*C,e[8]=S*C,e[9]=(_*d*n-h*v*n-_*r*f+t*v*f+h*r*u-t*d*u)*C,e[10]=(s*v*n-_*o*n+_*r*c-t*v*c-s*r*u+t*o*u)*C,e[11]=(h*o*n-s*d*n-h*r*c+t*d*c+s*r*f-t*o*f)*C,e[12]=T*C,e[13]=(h*v*a-_*d*a+_*r*p-t*v*p-h*r*m+t*d*m)*C,e[14]=(_*o*a-s*v*a-_*r*l+t*v*l+s*r*m-t*o*m)*C,e[15]=(s*d*a-h*o*a+h*r*l-t*d*l-s*r*p+t*o*p)*C,this}scale(e){const t=this.elements,r=e.x,a=e.y,n=e.z;return t[0]*=r,t[4]*=a,t[8]*=n,t[1]*=r,t[5]*=a,t[9]*=n,t[2]*=r,t[6]*=a,t[10]*=n,t[3]*=r,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),n=1-r,s=e.x,o=e.y,l=e.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,n,s){return this.set(1,r,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,n=t._x,s=t._y,o=t._z,l=t._w,c=n+n,h=s+s,d=o+o,p=n*c,f=n*h,_=n*d,v=s*h,m=s*d,u=o*d,E=l*c,y=l*h,S=l*d,T=r.x,R=r.y,C=r.z;return a[0]=(1-(v+u))*T,a[1]=(f+S)*T,a[2]=(_-y)*T,a[3]=0,a[4]=(f-S)*R,a[5]=(1-(p+u))*R,a[6]=(m+E)*R,a[7]=0,a[8]=(_+y)*C,a[9]=(m-E)*C,a[10]=(1-(p+v))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let n=Sr.set(a[0],a[1],a[2]).length();const s=Sr.set(a[4],a[5],a[6]).length(),o=Sr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Zt.copy(this);const l=1/n,c=1/s,h=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=c,Zt.elements[5]*=c,Zt.elements[6]*=c,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),r.x=n,r.y=s,r.z=o,this}makePerspective(e,t,r,a,n,s,o=di){const l=this.elements,c=2*n/(t-e),h=2*n/(r-a),d=(t+e)/(t-e),p=(r+a)/(r-a);let f,_;if(o===di)f=-(s+n)/(s-n),_=-2*s*n/(s-n);else if(o===Ua)f=-s/(s-n),_=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,a,n,s,o=di){const l=this.elements,c=1/(t-e),h=1/(r-a),d=1/(s-n),p=(t+e)*c,f=(r+a)*h;let _,v;if(o===di)_=(s+n)*d,v=-2*d;else if(o===Ua)_=n*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Sr=new N,Zt=new gt,Zu=new N(0,0,0),$u=new N(1,1,1),Ii=new N,Va=new N,Ft=new N,ol=new gt,ll=new Qr;class gn{constructor(e=0,t=0,r=0,a=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],p=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const hl=new N,Er=new Qr,gi=new gt,ka=new N,ra=new N,Qu=new N,ed=new Qr,ul=new N(1,0,0),dl=new N(0,1,0),pl=new N(0,0,1),td={type:"added"},id={type:"removed"};class Ht extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new N,t=new gn,r=new Qr,a=new N(1,1,1);function n(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ue}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ka.copy(e):ka.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ra,ka,this.up):gi.lookAt(ka,ra,this.up),this.quaternion.setFromRotationMatrix(gi),a&&(gi.extractRotation(a.matrixWorld),Er.setFromRotationMatrix(gi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(td)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let a=0,n=this.children.length;a<n;a++){const s=this.children[a].getObjectsByProperty(e,t);s.length>0&&(r=r.concat(s))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const n=t[r];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let n=0,s=a.length;n<s;n++){const o=a[n];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(n(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),p=s(e.skeletons),f=s(e.animations),_=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),f.length>0&&(r.animations=f),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Ht.DEFAULT_UP=new N(0,1,0),Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new N,vi=new N,es=new N,_i=new N,Tr=new N,Cr=new N,ml=new N,ts=new N,is=new N,rs=new N;let Ba=!1;class ei{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),$t.subVectors(e,t),a.cross($t);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,r,a,n){$t.subVectors(a,t),vi.subVectors(r,t),es.subVectors(e,t);const s=$t.dot($t),o=$t.dot(vi),l=$t.dot(es),c=vi.dot(vi),h=vi.dot(es),d=s*c-o*o;if(d===0)return n.set(-2,-1,-1);const p=1/d,f=(c*l-o*h)*p,_=(s*h-o*l)*p;return n.set(1-f-_,_,f)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,r,a,n,s,o,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,t,r,a,n,s,o,l)}static getInterpolation(e,t,r,a,n,s,o,l){return this.getBarycoord(e,t,r,a,_i),l.setScalar(0),l.addScaledVector(n,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(o,_i.z),l}static isFrontFacing(e,t,r,a){return $t.subVectors(r,t),vi.subVectors(e,t),$t.cross(vi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),$t.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,a,n){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),ei.getInterpolation(e,this.a,this.b,this.c,t,r,a,n)}getInterpolation(e,t,r,a,n){return ei.getInterpolation(e,this.a,this.b,this.c,t,r,a,n)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,n=this.c;let s,o;Tr.subVectors(a,r),Cr.subVectors(n,r),ts.subVectors(e,r);const l=Tr.dot(ts),c=Cr.dot(ts);if(l<=0&&c<=0)return t.copy(r);is.subVectors(e,a);const h=Tr.dot(is),d=Cr.dot(is);if(h>=0&&d<=h)return t.copy(a);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(r).addScaledVector(Tr,s);rs.subVectors(e,n);const f=Tr.dot(rs),_=Cr.dot(rs);if(_>=0&&f<=_)return t.copy(n);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(r).addScaledVector(Cr,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return ml.subVectors(n,a),o=(d-h)/(d-h+(f-_)),t.copy(a).addScaledVector(ml,o);const u=1/(m+v+p);return s=v*u,o=p*u,t.copy(r).addScaledVector(Tr,s).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rd=0;class za extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=dr,this.side=Wt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=go,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(r.blending=this.blending),this.side!==Wt&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(n){const s=[];for(const o in n){const l=n[o];delete l.metadata,s.push(l)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(r.textures=n),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let n=0;n!==a;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function as(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Yt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Yt.workingColorSpace){if(e=Ou(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,s=2*r-n;this.r=as(s,n,e+1/3),this.g=as(s,n,e),this.b=as(s,n,e-1/3)}return Yt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ke){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){const r=fl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return Yt.fromWorkingColorSpace(bt.copy(this),e),Math.round(Rt(bt.r*255,0,255))*65536+Math.round(Rt(bt.g*255,0,255))*256+Math.round(Rt(bt.b*255,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(bt.copy(this),t);const r=bt.r,a=bt.g,n=bt.b,s=Math.max(r,a,n),o=Math.min(r,a,n);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case r:l=(a-n)/d+(a<n?6:0);break;case a:l=(n-r)/d+2;break;case n:l=(r-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Ke){Yt.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,r=bt.g,a=bt.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=r,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(Ha);const r=Hn(Jt.h,Ha.h,t),a=Hn(Jt.s,Ha.s,t),n=Hn(Jt.l,Ha.l,t);return this.setHSL(r,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*a,this.g=n[1]*t+n[4]*r+n[7]*a,this.b=n[2]*t+n[5]*r+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new qe;qe.NAMES=fl;class gl extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new N,Ga=new ge;class ai{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Jo,this.updateRange={offset:0,count:-1},this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$r(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$r(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$r(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$r(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),r=Pt(r,this.array),a=Pt(a,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class vl extends ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _l extends ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $i extends ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ad=0;const jt=new gt,ns=new Ht,Ar=new N,Vt=new ea,aa=new ea,dt=new N;class ur extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tl(e)?_l:vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Ue().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,r){return jt.makeTranslation(e,t,r),this.applyMatrix4(jt),this}scale(e,t,r){return jt.makeScale(e,t,r),this.applyMatrix4(jt),this}lookAt(e){return ns.lookAt(e),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const n=e[r];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new $i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const n=t[r];Vt.setFromBufferAttribute(n),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Vt.min,aa.min),Vt.expandByPoint(dt),dt.addVectors(Vt.max,aa.max),Vt.expandByPoint(dt)):(Vt.expandByPoint(aa.min),Vt.expandByPoint(aa.max))}Vt.getCenter(r);let a=0;for(let n=0,s=e.count;n<s;n++)dt.fromBufferAttribute(e,n),a=Math.max(a,r.distanceToSquared(dt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dt.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),dt.add(Ar)),a=Math.max(a,r.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=t.position.array,n=t.normal.array,s=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new N,h[w]=new N;const d=new N,p=new N,f=new N,_=new ge,v=new ge,m=new ge,u=new N,E=new N;function y(w,K,ie){d.fromArray(a,w*3),p.fromArray(a,K*3),f.fromArray(a,ie*3),_.fromArray(s,w*2),v.fromArray(s,K*2),m.fromArray(s,ie*2),p.sub(d),f.sub(d),v.sub(_),m.sub(_);const I=1/(v.x*m.y-m.x*v.y);isFinite(I)&&(u.copy(p).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(I),E.copy(f).multiplyScalar(v.x).addScaledVector(p,-m.x).multiplyScalar(I),c[w].add(u),c[K].add(u),c[ie].add(u),h[w].add(E),h[K].add(E),h[ie].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:r.length}]);for(let w=0,K=S.length;w<K;++w){const ie=S[w],I=ie.start,z=ie.count;for(let G=I,Y=I+z;G<Y;G+=3)y(r[G+0],r[G+1],r[G+2])}const T=new N,R=new N,C=new N,q=new N;function b(w){C.fromArray(n,w*3),q.copy(C);const K=c[w];T.copy(K),T.sub(C.multiplyScalar(C.dot(K))).normalize(),R.crossVectors(q,K);const ie=R.dot(h[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=ie}for(let w=0,K=S.length;w<K;++w){const ie=S[w],I=ie.start,z=ie.count;for(let G=I,Y=I+z;G<Y;G+=3)b(r[G+0]),b(r[G+1]),b(r[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,f=r.count;p<f;p++)r.setXYZ(p,0,0,0);const a=new N,n=new N,s=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let p=0,f=e.count;p<f;p+=3){const _=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);a.fromBufferAttribute(t,_),n.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)a.fromBufferAttribute(t,p+0),n.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),r.setXYZ(p+0,h.x,h.y,h.z),r.setXYZ(p+1,h.x,h.y,h.z),r.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let u=0;u<h;u++)p[_++]=c[f++]}return new ai(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,r=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,r);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=e(p,r);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(a[l]=h,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],d=n[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new gt,Ji=new Yu,Wa=new Zn,xl=new N,Rr=new N,Pr=new N,Lr=new N,ss=new N,ja=new N,Xa=new ge,qa=new ge,Ka=new ge,yl=new N,Ml=new N,wl=new N,Ya=new N,Za=new N;class wt extends Ht{constructor(e=new ur,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,n=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){ja.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=o[l],d=n[l];h!==0&&(ss.fromBufferAttribute(d,e),s?ja.addScaledVector(ss,h):ja.addScaledVector(ss.sub(t),h))}t.add(ja)}return t}raycast(e,t){const r=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wa.copy(r.boundingSphere),Wa.applyMatrix4(n),Ji.copy(e.ray).recast(e.near),!(Wa.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Wa,xl)===null||Ji.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(bl.copy(n).invert(),Ji.copy(e.ray).applyMatrix4(bl),!(r.boundingBox!==null&&Ji.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,r){let a;const n=this.geometry,s=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,d=n.attributes.normal,p=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=s[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,T=y;S<T;S+=3){const R=o.getX(S),C=o.getX(S+1),q=o.getX(S+2);a=$a(this,u,e,r,c,h,d,R,C,q),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const E=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);a=$a(this,s,e,r,c,h,d,E,y,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=s[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,T=y;S<T;S+=3){const R=S,C=S+1,q=S+2;a=$a(this,u,e,r,c,h,d,R,C,q),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const E=m,y=m+1,S=m+2;a=$a(this,s,e,r,c,h,d,E,y,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function nd(i,e,t,r,a,n,s,o){let l;if(e.side===Ct?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,e.side===Wt,o),l===null)return null;Za.copy(o),Za.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:i}}function $a(i,e,t,r,a,n,s,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Lr);const h=nd(i,e,t,r,Rr,Pr,Lr,Ya);if(h){a&&(Xa.fromBufferAttribute(a,o),qa.fromBufferAttribute(a,l),Ka.fromBufferAttribute(a,c),h.uv=ei.getInterpolation(Ya,Rr,Pr,Lr,Xa,qa,Ka,new ge)),n&&(Xa.fromBufferAttribute(n,o),qa.fromBufferAttribute(n,l),Ka.fromBufferAttribute(n,c),h.uv1=ei.getInterpolation(Ya,Rr,Pr,Lr,Xa,qa,Ka,new ge),h.uv2=h.uv1),s&&(yl.fromBufferAttribute(s,o),Ml.fromBufferAttribute(s,l),wl.fromBufferAttribute(s,c),h.normal=ei.getInterpolation(Ya,Rr,Pr,Lr,yl,Ml,wl,new N),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};ei.getNormal(Rr,Pr,Lr,d.normal),h.face=d}return h}class Ta extends ur{constructor(e=1,t=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[];let p=0,f=0;_("z","y","x",-1,-1,r,t,e,s,n,0),_("z","y","x",1,-1,r,t,-e,s,n,1),_("x","z","y",1,1,e,r,t,a,s,2),_("x","z","y",1,-1,e,r,-t,a,s,3),_("x","y","z",1,-1,e,t,r,a,n,4),_("x","y","z",-1,-1,e,t,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new $i(c,3)),this.setAttribute("normal",new $i(h,3)),this.setAttribute("uv",new $i(d,2));function _(v,m,u,E,y,S,T,R,C,q,b){const w=S/C,K=T/q,ie=S/2,I=T/2,z=R/2,G=C+1,Y=q+1;let W=0,X=0;const $=new N;for(let j=0;j<Y;j++){const O=j*K-I;for(let k=0;k<G;k++){const Q=k*w-ie;$[v]=Q*E,$[m]=O*y,$[u]=z,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[u]=R>0?1:-1,h.push($.x,$.y,$.z),d.push(k/C),d.push(1-j/q),W+=1}}for(let j=0;j<q;j++)for(let O=0;O<C;O++){const k=p+O+G*j,Q=p+O+G*(j+1),se=p+(O+1)+G*(j+1),ue=p+(O+1)+G*j;l.push(k,Q,ue),l.push(Q,se,ue),X+=6}o.addGroup(f,X,b),f+=X,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const r=Ur(i[t]);for(const a in r)e[a]=r[a]}return e}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sl(i){return i.getRenderTarget()===null?i.outputColorSpace:ri}const od={clone:Ur,merge:St};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class El extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends El{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zn*2*Math.atan(Math.tan(Bn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bn*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*a/l,t-=s.offsetY*r/c,a*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ir=1;class hd extends Ht{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const a=new Qt(Dr,Ir,e,t);a.layers=this.layers,this.add(a);const n=new Qt(Dr,Ir,e,t);n.layers=this.layers,this.add(n);const s=new Qt(Dr,Ir,e,t);s.layers=this.layers,this.add(s);const o=new Qt(Dr,Ir,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Dr,Ir,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Dr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,n,s,o,l]=t;for(const c of t)this.remove(c);if(e===di)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const p=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,a),e.setRenderTarget(r,1),e.render(t,n),e.setRenderTarget(r,2),e.render(t,s),e.setRenderTarget(r,3),e.render(t,o),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=p,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=d,r.texture.needsPMREMUpdate=!0}}class Tl extends zt{constructor(e,t,r,a,n,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,r,a,n,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ud extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qi?Ke:Ki),this.texture=new Tl(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ta(5,5,5),n=new Lt({name:"CubemapFromEquirect",uniforms:Ur(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ct,blending:Ti});n.uniforms.tEquirect.value=t;const s=new wt(a,n),o=t.minFilter;return t.minFilter===Yr&&(t.minFilter=At),new hd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,a){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,a);e.setRenderTarget(n)}}const os=new N,dd=new N,pd=new Ue;class Qi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=os.subVectors(r,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(os),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||pd.getNormalMatrix(e),a=this.coplanarPoint(os).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Zn,Ja=new N;class Cl{constructor(e=new Qi,t=new Qi,r=new Qi,a=new Qi,n=new Qi,s=new Qi){this.planes=[e,t,r,a,n,s]}set(e,t,r,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=di){const r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],p=a[7],f=a[8],_=a[9],v=a[10],m=a[11],u=a[12],E=a[13],y=a[14],S=a[15];if(r[0].setComponents(l-n,p-c,m-f,S-u).normalize(),r[1].setComponents(l+n,p+c,m+f,S+u).normalize(),r[2].setComponents(l+s,p+h,m+_,S+E).normalize(),r[3].setComponents(l-s,p-h,m-_,S-E).normalize(),r[4].setComponents(l-o,p-d,m-v,S-y).normalize(),t===di)r[5].setComponents(l+o,p+d,m+v,S+y).normalize();else if(t===Ua)r[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Ja.x=a.normal.x>0?e.max.x:e.min.x,Ja.y=a.normal.y>0?e.max.y:e.min.y,Ja.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,e=!1,t=null,r=null;function a(n,s){t(n,s),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function md(i,e){const t=e.isWebGL2,r=new WeakMap;function a(c,h){const d=c.array,p=c.usage,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,d,p),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,d){const p=h.array,f=h.updateRange;i.bindBuffer(d,c),f.count===-1?i.bufferSubData(d,0,p):(t?i.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=r.get(c);(!p||p.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=r.get(c);d===void 0?r.set(c,a(c,h)):d.version<c.version&&(n(d.buffer,c,h),d.version=c.version)}return{get:s,remove:o,update:l}}class vn extends ur{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,d=e/o,p=t/l,f=[],_=[],v=[],m=[];for(let u=0;u<h;u++){const E=u*p-s;for(let y=0;y<c;y++){const S=y*d-n;_.push(S,-E,0),v.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const y=E+c*u,S=E+c*(u+1),T=E+1+c*(u+1),R=E+1+c*u;f.push(y,S,R),f.push(S,T,R)}this.setIndex(f),this.setAttribute("position",new $i(_,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:fd,alphahash_pars_fragment:gd,alphamap_fragment:vd,alphamap_pars_fragment:_d,alphatest_fragment:bd,alphatest_pars_fragment:xd,aomap_fragment:yd,aomap_pars_fragment:Md,begin_vertex:wd,beginnormal_vertex:Sd,bsdfs:Ed,iridescence_fragment:Td,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Ud,color_pars_fragment:Dd,color_pars_vertex:Id,color_vertex:Nd,common:Od,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:kd,displacementmap_vertex:Bd,emissivemap_fragment:zd,emissivemap_pars_fragment:Hd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:jd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:sp,envmap_vertex:Yd,fog_vertex:Zd,fog_pars_vertex:$d,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ep,lightmap_fragment:tp,lightmap_pars_fragment:ip,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:np,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:fp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:bp,map_fragment:xp,map_pars_fragment:yp,map_particle_fragment:Mp,map_particle_pars_fragment:wp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphcolor_vertex:Tp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Up,normal_pars_vertex:Dp,normal_vertex:Ip,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:kp,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:jp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:$p,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:im,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:nm,transmission_fragment:sm,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:fm,cube_vert:gm,cube_frag:vm,depth_vert:_m,depth_frag:bm,distanceRGBA_vert:xm,distanceRGBA_frag:ym,equirect_vert:Mm,equirect_frag:wm,linedashed_vert:Sm,linedashed_frag:Em,meshbasic_vert:Tm,meshbasic_frag:Cm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Um,meshnormal_frag:Dm,meshphong_vert:Im,meshphong_frag:Nm,meshphysical_vert:Om,meshphysical_frag:Fm,meshtoon_vert:Vm,meshtoon_frag:km,points_vert:Bm,points_frag:zm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:jm},ne={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ni={basic:{uniforms:St([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:St([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:St([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:St([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:St([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:St([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:St([ne.points,ne.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:St([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:St([ne.common,ne.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:St([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:St([ne.sprite,ne.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:St([ne.common,ne.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:St([ne.lights,ne.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};ni.physical={uniforms:St([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Qa={r:0,b:0,g:0};function Xm(i,e,t,r,a,n,s){const o=new qe(0);let l=n===!0?0:1,c,h,d=null,p=0,f=null;function _(m,u){let E=!1,y=u.isScene===!0?u.background:null;y&&y.isTexture&&(y=(u.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),E=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?r.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Pa)?(h===void 0&&(h=new wt(new Ta(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Ur(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=y.colorSpace!==Ke,(d!==y||p!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new wt(new vn(2,2),new Lt({name:"BackgroundMaterial",uniforms:Ur(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(Qa,Sl(i)),r.buffers.color.setClear(Qa.r,Qa.g,Qa.b,u,s)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function qm(i,e,t,r){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),n=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||n!==null,o={},l=m(null);let c=l,h=!1;function d(z,G,Y,W,X){let $=!1;if(s){const j=v(W,Y,G);c!==j&&(c=j,f(c.object)),$=u(z,W,Y,X),$&&E(z,W,Y,X)}else{const j=G.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==j)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=j,$=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,q(z,G,Y,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return r.isWebGL2?i.createVertexArray():n.createVertexArrayOES()}function f(z){return r.isWebGL2?i.bindVertexArray(z):n.bindVertexArrayOES(z)}function _(z){return r.isWebGL2?i.deleteVertexArray(z):n.deleteVertexArrayOES(z)}function v(z,G,Y){const W=Y.wireframe===!0;let X=o[z.id];X===void 0&&(X={},o[z.id]=X);let $=X[G.id];$===void 0&&($={},X[G.id]=$);let j=$[W];return j===void 0&&(j=m(p()),$[W]=j),j}function m(z){const G=[],Y=[],W=[];for(let X=0;X<a;X++)G[X]=0,Y[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:W,object:z,attributes:{},index:null}}function u(z,G,Y,W){const X=c.attributes,$=G.attributes;let j=0;const O=Y.getAttributes();for(const k in O)if(O[k].location>=0){const Q=X[k];let se=$[k];if(se===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;j++}return c.attributesNum!==j||c.index!==W}function E(z,G,Y,W){const X={},$=G.attributes;let j=0;const O=Y.getAttributes();for(const k in O)if(O[k].location>=0){let Q=$[k];Q===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),X[k]=se,j++}c.attributes=X,c.attributesNum=j,c.index=W}function y(){const z=c.newAttributes;for(let G=0,Y=z.length;G<Y;G++)z[G]=0}function S(z){T(z,0)}function T(z,G){const Y=c.newAttributes,W=c.enabledAttributes,X=c.attributeDivisors;Y[z]=1,W[z]===0&&(i.enableVertexAttribArray(z),W[z]=1),X[z]!==G&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,G),X[z]=G)}function R(){const z=c.newAttributes,G=c.enabledAttributes;for(let Y=0,W=G.length;Y<W;Y++)G[Y]!==z[Y]&&(i.disableVertexAttribArray(Y),G[Y]=0)}function C(z,G,Y,W,X,$,j){j===!0?i.vertexAttribIPointer(z,G,Y,X,$):i.vertexAttribPointer(z,G,Y,W,X,$)}function q(z,G,Y,W){if(r.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const X=W.attributes,$=Y.getAttributes(),j=G.defaultAttributeValues;for(const O in $){const k=$[O];if(k.location>=0){let Q=X[O];if(Q===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),Q!==void 0){const se=Q.normalized,ue=Q.itemSize,de=t.get(Q);if(de===void 0)continue;const ye=de.buffer,ve=de.type,Ve=de.bytesPerElement,ke=r.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||Q.gpuType===xo);if(Q.isInterleavedBufferAttribute){const Ee=Q.data,L=Ee.stride,ht=Q.offset;if(Ee.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)T(k.location+be,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let be=0;be<k.locationSize;be++)S(k.location+be);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let be=0;be<k.locationSize;be++)C(k.location+be,ue/k.locationSize,ve,se,L*Ve,(ht+ue/k.locationSize*be)*Ve,ke)}else{if(Q.isInstancedBufferAttribute){for(let Ee=0;Ee<k.locationSize;Ee++)T(k.location+Ee,Q.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)S(k.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Ee=0;Ee<k.locationSize;Ee++)C(k.location+Ee,ue/k.locationSize,ve,se,ue*Ve,ue/k.locationSize*Ee*Ve,ke)}}else if(j!==void 0){const se=j[O];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(k.location,se);break;case 3:i.vertexAttrib3fv(k.location,se);break;case 4:i.vertexAttrib4fv(k.location,se);break;default:i.vertexAttrib1fv(k.location,se)}}}}R()}function b(){ie();for(const z in o){const G=o[z];for(const Y in G){const W=G[Y];for(const X in W)_(W[X].object),delete W[X];delete G[Y]}delete o[z]}}function w(z){if(o[z.id]===void 0)return;const G=o[z.id];for(const Y in G){const W=G[Y];for(const X in W)_(W[X].object),delete W[X];delete G[Y]}delete o[z.id]}function K(z){for(const G in o){const Y=o[G];if(Y[z.id]===void 0)continue;const W=Y[z.id];for(const X in W)_(W[X].object),delete W[X];delete Y[z.id]}}function ie(){I(),h=!0,c!==l&&(c=l,f(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:K,initAttributes:y,enableAttribute:S,disableUnusedAttributes:R}}function Km(i,e,t,r){const a=r.isWebGL2;let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,d){if(d===0)return;let p,f;if(a)p=i,f="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](n,c,h,d),t.update(h,n,d)}this.setMode=s,this.render=o,this.renderInstances=l}function Ym(i,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=n(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,S=s||e.has("OES_texture_float"),T=y&&S,R=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:n,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:R}}function Zm(i){const e=this;let t=null,r=0,a=!1,n=!1;const s=new Qi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||r!==0||a;return a=p,r=d.length,f},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!a||_===null||_.length===0||n&&!m)n?h(null):c();else{const E=n?0:r,y=E*4;let S=u.clippingState||null;l.value=S,S=h(_,p,y,f);for(let T=0;T!==y;++T)S[T]=t[T];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(d,p,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=f+v*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,S=f;y!==v;++y,S+=4)s.copy(d[y]).applyMatrix4(E,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $m(i){let e=new WeakMap;function t(s,o){return o===Cn?s.mapping=mr:o===An&&(s.mapping=fr),s}function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Cn||o===An)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ud(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}class Rl extends El{constructor(e=-1,t=1,r=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=r-e,s=r+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,Pl=[.125,.215,.35,.446,.526,.582],tr=20,ls=new Rl,Ll=new qe;let cs=null;const ir=(1+Math.sqrt(5))/2,Or=1/ir,Ul=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ir,Or),new N(0,ir,-Or),new N(Or,0,ir),new N(-Or,0,ir),new N(ir,Or,0),new N(-ir,Or,0)];class Dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){cs=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,a,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs),e.scissorTest=!1,en(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:At,minFilter:At,generateMipmaps:!1,type:Wi,format:Nt,colorSpace:ri,depthBuffer:!1},a=Il(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(n)),this._blurMaterial=Qm(n,e,t)}return a}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,r,a){const n=new Qt(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ll),l.toneMapping=Ci,l.autoClear=!1;const d=new gl({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),p=new wt(new Ta,d);let f=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,f=!0):(d.color.copy(Ll),f=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(n.up.set(0,s[v],0),n.lookAt(o[v],0,0)):m===1?(n.up.set(0,0,s[v]),n.lookAt(0,o[v],0)):(n.up.set(0,s[v],0),n.lookAt(0,0,o[v]));const u=this._cubeSize;en(a,m*u,v>2?u:0,u,u),l.setRenderTarget(a),f&&l.render(p,n),l.render(e,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===mr||e.mapping===fr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const n=a?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;en(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,ls)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Ul[(a-1)%Ul.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,a,"latitudinal",n),this._halfBlur(s,e,r,r,a,"longitudinal",n)}_halfBlur(e,t,r,a,n,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new wt(this._lodPlanes[a],c),p=c.uniforms,f=this._sizeLods[r]-1,_=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*tr-1),v=n/_,m=isFinite(n)?1+Math.floor(h*v):tr;m>tr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const u=[];let E=0;for(let C=0;C<tr;++C){const q=C/v,b=Math.exp(-q*q/2);u.push(b),C===0?E+=b:C<m&&(E+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=_,p.mipInt.value=y-r;const S=this._sizeLods[a],T=3*S*(a>y-Nr?a-y+Nr:0),R=4*(this._cubeSize-S);en(t,T,R,3*S,2*S),l.setRenderTarget(t),l.render(d,ls)}}function Jm(i){const e=[],t=[],r=[];let a=i;const n=i-Nr+1+Pl.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>i-Nr?l=Pl[s-i+Nr-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,v=3,m=2,u=1,E=new Float32Array(v*_*f),y=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,q=R>2?0:-1,b=[C,q,0,C+2/3,q,0,C+2/3,q+1,0,C,q,0,C+2/3,q+1,0,C,q+1,0];E.set(b,v*_*R),y.set(p,m*_*R);const w=[R,R,R,R,R,R];S.set(w,u*_*R)}const T=new ur;T.setAttribute("position",new ai(E,v)),T.setAttribute("uv",new ai(y,m)),T.setAttribute("faceIndex",new ai(S,u)),e.push(T),a>Nr&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Il(i,e,t){const r=new Ot(i,e,t);return r.texture.mapping=Pa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function en(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function Qm(i,e,t){const r=new Float32Array(tr),a=new N(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Nl(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ol(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ef(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cn||l===An,h=l===mr||l===fr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Dl(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&a(d)){t===null&&(t=new Dl(i));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",n),p.texture}else return null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function tf(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function rf(i,e,t,r){const a={},n=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}p.removeEventListener("dispose",s),delete a[p.id];const f=n.get(p);f&&(e.remove(f),n.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return a[p.id]===!0||(p.addEventListener("dispose",s),a[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,u=v.length;m<u;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let y=0,S=E.length;y<S;y+=3){const T=E[y+0],R=E[y+1],C=E[y+2];p.push(T,R,R,C,C,T)}}else if(_!==void 0){const E=_.array;v=_.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const T=y+0,R=y+1,C=y+2;p.push(T,R,R,C,C,T)}}else return;const m=new(tl(p)?_l:vl)(p,1);m.version=v;const u=n.get(d);u&&e.remove(u),n.set(d,m)}function h(d){const p=n.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function af(i,e,t,r){const a=r.isWebGL2;let n;function s(p){n=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,f){i.drawElements(n,f,o,p*l),t.update(f,n,1)}function d(p,f,_){if(_===0)return;let v,m;if(a)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](n,f,o,p*l,_),t.update(f,n,_)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d}function nf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(n/3);break;case i.LINES:t.lines+=o*(n/2);break;case i.LINE_STRIP:t.lines+=o*(n-1);break;case i.LINE_LOOP:t.lines+=o*n;break;case i.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function sf(i,e){return i[0]-e[0]}function of(i,e){return Math.abs(e[1])-Math.abs(i[1])}function lf(i,e,t){const r={},a=new Float32Array(8),n=new WeakMap,s=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let m=n.get(h);if(m===void 0||m.count!==v){let y=function(){z.dispose(),n.delete(h),h.removeEventListener("dispose",y)};var f=y;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],q=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let w=0;S===!0&&(w=1),T===!0&&(w=2),R===!0&&(w=3);let K=h.attributes.position.count*w,ie=1;K>e.maxTextureSize&&(ie=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const I=new Float32Array(K*ie*4*v),z=new nl(I,K,ie,v);z.type=Pi,z.needsUpdate=!0;const G=w*4;for(let Y=0;Y<v;Y++){const W=C[Y],X=q[Y],$=b[Y],j=K*ie*4*Y;for(let O=0;O<W.count;O++){const k=O*G;S===!0&&(s.fromBufferAttribute(W,O),I[j+k+0]=s.x,I[j+k+1]=s.y,I[j+k+2]=s.z,I[j+k+3]=0),T===!0&&(s.fromBufferAttribute(X,O),I[j+k+4]=s.x,I[j+k+5]=s.y,I[j+k+6]=s.z,I[j+k+7]=0),R===!0&&(s.fromBufferAttribute($,O),I[j+k+8]=s.x,I[j+k+9]=s.y,I[j+k+10]=s.z,I[j+k+11]=$.itemSize===4?s.w:1)}}m={count:v,texture:z,size:new ge(K,ie)},n.set(h,m),h.addEventListener("dispose",y)}let u=0;for(let y=0;y<p.length;y++)u+=p[y];const E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let v=r[h.id];if(v===void 0||v.length!==_){v=[];for(let S=0;S<_;S++)v[S]=[S,0];r[h.id]=v}for(let S=0;S<_;S++){const T=v[S];T[0]=S,T[1]=p[S]}v.sort(of);for(let S=0;S<8;S++)S<_&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(sf);const m=h.morphAttributes.position,u=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=o[S],R=T[0],C=T[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+S)!==m[R]&&h.setAttribute("morphTarget"+S,m[R]),u&&h.getAttribute("morphNormal"+S)!==u[R]&&h.setAttribute("morphNormal"+S,u[R]),a[S]=C,E+=C):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),u&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),a[S]=0)}const y=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:l}}function cf(i,e,t,r){let a=new WeakMap;function n(l){const c=r.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}const Fl=new zt,Vl=new nl,kl=new qu,Bl=new Tl,zl=[],Hl=[],Gl=new Float32Array(16),Wl=new Float32Array(9),jl=new Float32Array(4);function Fr(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let n=zl[a];if(n===void 0&&(n=new Float32Array(a),zl[a]=n),e!==0){r.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(n,o)}return n}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function ot(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function tn(i,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),ot(t,e)}}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),ot(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),ot(t,e)}}function mf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,r))return;jl.set(r),i.uniformMatrix2fv(this.addr,!1,jl),ot(t,r)}}function ff(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,r))return;Wl.set(r),i.uniformMatrix3fv(this.addr,!1,Wl),ot(t,r)}}function gf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,r))return;Gl.set(r),i.uniformMatrix4fv(this.addr,!1,Gl),ot(t,r)}}function vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),ot(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),ot(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),ot(t,e)}}function yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),ot(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),ot(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),ot(t,e)}}function Ef(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2D(e||Fl,a)}function Tf(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||kl,a)}function Cf(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Bl,a)}function Af(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Vl,a)}function Rf(i){switch(i){case 5126:return hf;case 35664:return uf;case 35665:return df;case 35666:return pf;case 35674:return mf;case 35675:return ff;case 35676:return gf;case 5124:case 35670:return vf;case 35667:case 35671:return _f;case 35668:case 35672:return bf;case 35669:case 35673:return xf;case 5125:return yf;case 36294:return Mf;case 36295:return wf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Af}}function Pf(i,e){i.uniform1fv(this.addr,e)}function Lf(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Uf(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Df(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function If(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nf(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Of(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ff(i,e){i.uniform1iv(this.addr,e)}function Vf(i,e){i.uniform2iv(this.addr,e)}function kf(i,e){i.uniform3iv(this.addr,e)}function Bf(i,e){i.uniform4iv(this.addr,e)}function zf(i,e){i.uniform1uiv(this.addr,e)}function Hf(i,e){i.uniform2uiv(this.addr,e)}function Gf(i,e){i.uniform3uiv(this.addr,e)}function Wf(i,e){i.uniform4uiv(this.addr,e)}function jf(i,e,t){const r=this.cache,a=e.length,n=tn(t,a);st(r,n)||(i.uniform1iv(this.addr,n),ot(r,n));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Fl,n[s])}function Xf(i,e,t){const r=this.cache,a=e.length,n=tn(t,a);st(r,n)||(i.uniform1iv(this.addr,n),ot(r,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||kl,n[s])}function qf(i,e,t){const r=this.cache,a=e.length,n=tn(t,a);st(r,n)||(i.uniform1iv(this.addr,n),ot(r,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Bl,n[s])}function Kf(i,e,t){const r=this.cache,a=e.length,n=tn(t,a);st(r,n)||(i.uniform1iv(this.addr,n),ot(r,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Vl,n[s])}function Yf(i){switch(i){case 5126:return Pf;case 35664:return Lf;case 35665:return Uf;case 35666:return Df;case 35674:return If;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return Ff;case 35667:case 35671:return Vf;case 35668:case 35672:return kf;case 35669:case 35673:return Bf;case 5125:return zf;case 36294:return Hf;case 36295:return Gf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Kf}}class Zf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Rf(t.type)}}class $f{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=Yf(t.type)}}class Jf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],r)}}}const us=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}function Qf(i,e,t){const r=i.name,a=r.length;for(us.lastIndex=0;;){const n=us.exec(r),s=us.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Xl(t,c===void 0?new Zf(o,i,e):new $f(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Jf(o),Xl(t,h)),t=h}}}class rn{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const n=e.getActiveUniform(t,a),s=e.getUniformLocation(t,n.name);Qf(n,s,this)}}setValue(e,t,r,a){const n=this.map[t];n!==void 0&&n.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&r.push(s)}return r}}function ql(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}let eg=0;function tg(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function ig(i){switch(i){case ri:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Kl(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(r&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+tg(i.getShaderSource(e),s)}else return a}function rg(i,e){const t=ig(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ag(i,e){let t;switch(e){case lu:t="Linear";break;case cu:t="Reinhard";break;case hu:t="OptimizedCineon";break;case uu:t="ACESFilmic";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ng(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(na).join(`
`)}function sg(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function og(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const n=i.getActiveAttrib(e,a),s=n.name;let o=1;n.type===i.FLOAT_MAT2&&(o=2),n.type===i.FLOAT_MAT3&&(o=3),n.type===i.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function na(i){return i!==""}function Yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ds(i){return i.replace(lg,hg)}const cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hg(i,e){let t=Re[e];if(t===void 0){const r=cg.get(e);if(r!==void 0)t=Re[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ds(t)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(ug,dg)}function dg(i,e,t,r){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Jl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function mg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case fr:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vo:e="ENVMAP_BLENDING_MULTIPLY";break;case su:e="ENVMAP_BLENDING_MIX";break;case ou:e="ENVMAP_BLENDING_ADD";break}return e}function vg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function _g(i,e,t,r){const a=i.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=pg(t),c=mg(t),h=fg(t),d=gg(t),p=vg(t),f=t.isWebGL2?"":ng(t),_=sg(n),v=a.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(na).join(`
`),m.length>0&&(m+=`
`),u=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(na).join(`
`),u.length>0&&(u+=`
`)):(m=[Jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),u=[f,Jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Re.tonemapping_pars_fragment:"",t.toneMapping!==Ci?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,rg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),s=ds(s),s=Yl(s,t),s=Zl(s,t),o=ds(o),o=Yl(o,t),o=Zl(o,t),s=$l(s),o=$l(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=E+m+s,S=E+u+o,T=ql(a,a.VERTEX_SHADER,y),R=ql(a,a.FRAGMENT_SHADER,S);if(a.attachShader(v,T),a.attachShader(v,R),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v),i.debug.checkShaderErrors){const b=a.getProgramInfoLog(v).trim(),w=a.getShaderInfoLog(T).trim(),K=a.getShaderInfoLog(R).trim();let ie=!0,I=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,T,R);else{const z=Kl(a,T,"vertex"),G=Kl(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+z+`
`+G)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(w===""||K==="")&&(I=!1);I&&(this.diagnostics={runnable:ie,programLog:b,vertexShader:{log:w,prefix:m},fragmentShader:{log:K,prefix:u}})}a.deleteShader(T),a.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new rn(a,v)),C};let q;return this.getAttributes=function(){return q===void 0&&(q=og(a,v)),q},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=R,this}let bg=0;class xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new yg(e),t.set(e,r)),r}}class yg{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function Mg(i,e,t,r,a,n,s){const o=new cl,l=new xg,c=[],h=a.isWebGL2,d=a.logarithmicDepthBuffer,p=a.vertexTextures;let f=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,w,K,ie,I){const z=ie.fog,G=I.geometry,Y=b.isMeshStandardMaterial?ie.environment:null,W=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),X=W&&W.mapping===Pa?W.image.height:null,$=_[b.type];b.precision!==null&&(f=a.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,O=j!==void 0?j.length:0;let k=0;G.morphAttributes.position!==void 0&&(k=1),G.morphAttributes.normal!==void 0&&(k=2),G.morphAttributes.color!==void 0&&(k=3);let Q,se,ue,de;if($){const ti=ni[$];Q=ti.vertexShader,se=ti.fragmentShader}else Q=b.vertexShader,se=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),de=l.getFragmentShaderID(b);const ye=i.getRenderTarget(),ve=I.isInstancedMesh===!0,Ve=!!b.map,ke=!!b.matcap,Ee=!!W,L=!!b.aoMap,ht=!!b.lightMap,be=!!b.bumpMap,Te=!!b.normalMap,Se=!!b.displacementMap,Ze=!!b.emissiveMap,Oe=!!b.metalnessMap,Le=!!b.roughnessMap,He=b.anisotropy>0,pt=b.clearcoat>0,vt=b.iridescence>0,M=b.sheen>0,g=b.transmission>0,D=He&&!!b.anisotropyMap,ee=pt&&!!b.clearcoatMap,Z=pt&&!!b.clearcoatNormalMap,J=pt&&!!b.clearcoatRoughnessMap,pe=vt&&!!b.iridescenceMap,te=vt&&!!b.iridescenceThicknessMap,V=M&&!!b.sheenColorMap,fe=M&&!!b.sheenRoughnessMap,me=!!b.specularMap,_e=!!b.specularColorMap,ce=!!b.specularIntensityMap,he=g&&!!b.transmissionMap,De=g&&!!b.thicknessMap,Ge=!!b.gradientMap,A=!!b.alphaMap,oe=b.alphaTest>0,F=!!b.alphaHash,re=!!b.extensions,ae=!!G.attributes.uv1,Xe=!!G.attributes.uv2,$e=!!G.attributes.uv3;let it=Ci;return b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(it=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:se,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:ve,instancingColor:ve&&I.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ri,map:Ve,matcap:ke,envMap:Ee,envMapMode:Ee&&W.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:ht,bumpMap:be,normalMap:Te,displacementMap:p&&Se,emissiveMap:Ze,normalMapObjectSpace:Te&&b.normalMapType===Tu,normalMapTangentSpace:Te&&b.normalMapType===Eu,metalnessMap:Oe,roughnessMap:Le,anisotropy:He,anisotropyMap:D,clearcoat:pt,clearcoatMap:ee,clearcoatNormalMap:Z,clearcoatRoughnessMap:J,iridescence:vt,iridescenceMap:pe,iridescenceThicknessMap:te,sheen:M,sheenColorMap:V,sheenRoughnessMap:fe,specularMap:me,specularColorMap:_e,specularIntensityMap:ce,transmission:g,transmissionMap:he,thicknessMap:De,gradientMap:Ge,opaque:b.transparent===!1&&b.blending===dr,alphaMap:A,alphaTest:oe,alphaHash:F,combine:b.combine,mapUv:Ve&&v(b.map.channel),aoMapUv:L&&v(b.aoMap.channel),lightMapUv:ht&&v(b.lightMap.channel),bumpMapUv:be&&v(b.bumpMap.channel),normalMapUv:Te&&v(b.normalMap.channel),displacementMapUv:Se&&v(b.displacementMap.channel),emissiveMapUv:Ze&&v(b.emissiveMap.channel),metalnessMapUv:Oe&&v(b.metalnessMap.channel),roughnessMapUv:Le&&v(b.roughnessMap.channel),anisotropyMapUv:D&&v(b.anisotropyMap.channel),clearcoatMapUv:ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Z&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:V&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(b.sheenRoughnessMap.channel),specularMapUv:me&&v(b.specularMap.channel),specularColorMapUv:_e&&v(b.specularColorMap.channel),specularIntensityMapUv:ce&&v(b.specularIntensityMap.channel),transmissionMapUv:he&&v(b.transmissionMap.channel),thicknessMapUv:De&&v(b.thicknessMap.channel),alphaMapUv:A&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||He),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Xe,vertexUv3s:$e,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Ve||A),fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&b.map.colorSpace===Ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ui,flipSided:b.side===Ct,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:re&&b.extensions.derivatives===!0,extensionFragDepth:re&&b.extensions.fragDepth===!0,extensionDrawBuffers:re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)w.push(K),w.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(E(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function E(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){const w=_[b.type];let K;if(w){const ie=ni[w];K=od.clone(ie.uniforms)}else K=b.uniforms;return K}function T(b,w){let K;for(let ie=0,I=c.length;ie<I;ie++){const z=c[ie];if(z.cacheKey===w){K=z,++K.usedTimes;break}}return K===void 0&&(K=new _g(i,w,b,n),c.push(K)),K}function R(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:q}}function wg(){let i=new WeakMap;function e(n){let s=i.get(n);return s===void 0&&(s={},i.set(n,s)),s}function t(n){i.delete(n)}function r(n,s,o){i.get(n)[s]=o}function a(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function Sg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ql(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ec(){const i=[];let e=0;const t=[],r=[],a=[];function n(){e=0,t.length=0,r.length=0,a.length=0}function s(d,p,f,_,v,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,p,f,_,v,m){const u=s(d,p,f,_,v,m);f.transmission>0?r.push(u):f.transparent===!0?a.push(u):t.push(u)}function l(d,p,f,_,v,m){const u=s(d,p,f,_,v,m);f.transmission>0?r.unshift(u):f.transparent===!0?a.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Sg),r.length>1&&r.sort(p||Ql),a.length>1&&a.sort(p||Ql)}function h(){for(let d=e,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:h,sort:c}}function Eg(){let i=new WeakMap;function e(r,a){const n=i.get(r);let s;return n===void 0?(s=new ec,i.set(r,[s])):a>=n.length?(s=new ec,n.push(s)):s=n[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ag=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pg(i,e){const t=new Tg,r=Cg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)a.probe.push(new N);const n=new N,s=new gt,o=new gt;function l(h,d){let p=0,f=0,_=0;for(let K=0;K<9;K++)a.probe[K].set(0,0,0);let v=0,m=0,u=0,E=0,y=0,S=0,T=0,R=0,C=0,q=0;h.sort(Rg);const b=d===!0?Math.PI:1;for(let K=0,ie=h.length;K<ie;K++){const I=h[K],z=I.color,G=I.intensity,Y=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=z.r*G*b,f+=z.g*G*b,_+=z.b*G*b;else if(I.isLightProbe)for(let X=0;X<9;X++)a.probe[X].addScaledVector(I.sh.coefficients[X],G);else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const $=I.shadow,j=r.get(I);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,a.directionalShadow[v]=j,a.directionalShadowMap[v]=W,a.directionalShadowMatrix[v]=I.shadow.matrix,S++}a.directional[v]=X,v++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(z).multiplyScalar(G*b),X.distance=Y,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,a.spot[u]=X;const $=I.shadow;if(I.map&&(a.spotLightMap[C]=I.map,C++,$.updateMatrices(I),I.castShadow&&q++),a.spotLightMatrix[u]=$.matrix,I.castShadow){const j=r.get(I);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,a.spotShadow[u]=j,a.spotShadowMap[u]=W,R++}u++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),a.rectArea[E]=X,E++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*b),X.distance=I.distance,X.decay=I.decay,I.castShadow){const $=I.shadow,j=r.get(I);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,a.pointShadow[m]=j,a.pointShadowMap[m]=W,a.pointShadowMatrix[m]=I.shadow.matrix,T++}a.point[m]=X,m++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(G*b),X.groundColor.copy(I.groundColor).multiplyScalar(G*b),a.hemi[y]=X,y++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=p,a.ambient[1]=f,a.ambient[2]=_;const w=a.hash;(w.directionalLength!==v||w.pointLength!==m||w.spotLength!==u||w.rectAreaLength!==E||w.hemiLength!==y||w.numDirectionalShadows!==S||w.numPointShadows!==T||w.numSpotShadows!==R||w.numSpotMaps!==C)&&(a.directional.length=v,a.spot.length=u,a.rectArea.length=E,a.point.length=m,a.hemi.length=y,a.directionalShadow.length=S,a.directionalShadowMap.length=S,a.pointShadow.length=T,a.pointShadowMap.length=T,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=S,a.pointShadowMatrix.length=T,a.spotLightMatrix.length=R+C-q,a.spotLightMap.length=C,a.numSpotLightShadowsWithMaps=q,w.directionalLength=v,w.pointLength=m,w.spotLength=u,w.rectAreaLength=E,w.hemiLength=y,w.numDirectionalShadows=S,w.numPointShadows=T,w.numSpotShadows=R,w.numSpotMaps=C,a.version=Ag++)}function c(h,d){let p=0,f=0,_=0,v=0,m=0;const u=d.matrixWorldInverse;for(let E=0,y=h.length;E<y;E++){const S=h[E];if(S.isDirectionalLight){const T=a.directional[p];T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(u),p++}else if(S.isSpotLight){const T=a.spot[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const T=a.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),o.identity(),s.copy(S.matrixWorld),s.premultiply(u),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const T=a.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),f++}else if(S.isHemisphereLight){const T=a.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:a}}function tc(i,e){const t=new Pg(i,e),r=[],a=[];function n(){r.length=0,a.length=0}function s(h){r.push(h)}function o(h){a.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:n,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Lg(i,e){let t=new WeakMap;function r(n,s=0){const o=t.get(n);let l;return o===void 0?(l=new tc(i,e),t.set(n,[l])):s>=o.length?(l=new tc(i,e),o.push(l)):l=o[s],l}function a(){t=new WeakMap}return{get:r,dispose:a}}class Ug extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dg extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Og(i,e,t){let r=new Cl;const a=new ge,n=new ge,s=new ft,o=new Ug({depthPacking:Su}),l=new Dg,c={},h=t.maxTextureSize,d={[Wt]:Ct,[Ct]:Wt,[ui]:ui},p=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Ig,fragmentShader:Ng}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new ur;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let u=this.type;this.render=function(T,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const q=i.getRenderTarget(),b=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Ti),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=u!==hi&&this.type===hi,I=u===hi&&this.type!==hi;for(let z=0,G=T.length;z<G;z++){const Y=T[z],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const X=W.getFrameExtents();if(a.multiply(X),n.copy(W.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/X.x),a.x=n.x*X.x,W.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/X.y),a.y=n.y*X.y,W.mapSize.y=n.y)),W.map===null||ie===!0||I===!0){const j=this.type!==hi?{minFilter:mt,magFilter:mt}:{};W.map!==null&&W.map.dispose(),W.map=new Ot(a.x,a.y,j),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const $=W.getViewportCount();for(let j=0;j<$;j++){const O=W.getViewport(j);s.set(n.x*O.x,n.y*O.y,n.x*O.z,n.y*O.w),K.viewport(s),W.updateMatrices(Y,j),r=W.getFrustum(),S(R,C,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===hi&&E(W,C),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(q,b,w)};function E(T,R){const C=e.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ot(a.x,a.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,C,p,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,C,f,v,null)}function y(T,R,C,q){let b=null;const w=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)b=w;else if(b=C.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=b.uuid,ie=R.uuid;let I=c[K];I===void 0&&(I={},c[K]=I);let z=I[ie];z===void 0&&(z=b.clone(),I[ie]=z),b=z}if(b.visible=R.visible,b.wireframe=R.wireframe,q===hi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=i.properties.get(b);K.light=C}return b}function S(T,R,C,q,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===hi)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const K=e.update(T),ie=T.material;if(Array.isArray(ie)){const I=K.groups;for(let z=0,G=I.length;z<G;z++){const Y=I[z],W=ie[Y.materialIndex];if(W&&W.visible){const X=y(T,W,q,b);i.renderBufferDirect(C,null,K,X,T,Y)}}}else if(ie.visible){const I=y(T,ie,q,b);i.renderBufferDirect(C,null,K,I,T,null)}}const w=T.children;for(let K=0,ie=w.length;K<ie;K++)S(w[K],R,C,q,b)}}function Fg(i,e,t){const r=t.isWebGL2;function a(){let A=!1;const oe=new ft;let F=null;const re=new ft(0,0,0,0);return{setMask:function(ae){F!==ae&&!A&&(i.colorMask(ae,ae,ae,ae),F=ae)},setLocked:function(ae){A=ae},setClear:function(ae,Xe,$e,it,ti){ti===!0&&(ae*=it,Xe*=it,$e*=it),oe.set(ae,Xe,$e,it),re.equals(oe)===!1&&(i.clearColor(ae,Xe,$e,it),re.copy(oe))},reset:function(){A=!1,F=null,re.set(-1,0,0,0)}}}function n(){let A=!1,oe=null,F=null,re=null;return{setTest:function(ae){ae?ye(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ae){oe!==ae&&!A&&(i.depthMask(ae),oe=ae)},setFunc:function(ae){if(F!==ae){switch(ae){case Qh:i.depthFunc(i.NEVER);break;case eu:i.depthFunc(i.ALWAYS);break;case tu:i.depthFunc(i.LESS);break;case Tn:i.depthFunc(i.LEQUAL);break;case iu:i.depthFunc(i.EQUAL);break;case ru:i.depthFunc(i.GEQUAL);break;case au:i.depthFunc(i.GREATER);break;case nu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=ae}},setLocked:function(ae){A=ae},setClear:function(ae){re!==ae&&(i.clearDepth(ae),re=ae)},reset:function(){A=!1,oe=null,F=null,re=null}}}function s(){let A=!1,oe=null,F=null,re=null,ae=null,Xe=null,$e=null,it=null,ti=null;return{setTest:function(Qe){A||(Qe?ye(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!A&&(i.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,ii,yt){(F!==Qe||re!==ii||ae!==yt)&&(i.stencilFunc(Qe,ii,yt),F=Qe,re=ii,ae=yt)},setOp:function(Qe,ii,yt){(Xe!==Qe||$e!==ii||it!==yt)&&(i.stencilOp(Qe,ii,yt),Xe=Qe,$e=ii,it=yt)},setLocked:function(Qe){A=Qe},setClear:function(Qe){ti!==Qe&&(i.clearStencil(Qe),ti=Qe)},reset:function(){A=!1,oe=null,F=null,re=null,ae=null,Xe=null,$e=null,it=null,ti=null}}}const o=new a,l=new n,c=new s,h=new WeakMap,d=new WeakMap;let p={},f={},_=new WeakMap,v=[],m=null,u=!1,E=null,y=null,S=null,T=null,R=null,C=null,q=null,b=!1,w=null,K=null,ie=null,I=null,z=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=W>=2);let $=null,j={};const O=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),Q=new ft().fromArray(O),se=new ft().fromArray(k);function ue(A,oe,F,re){const ae=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(A,Xe),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<F;$e++)r&&(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(oe+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Xe}const de={};de[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(de[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(i.DEPTH_TEST),l.setFunc(Tn),Se(!1),Ze(oo),ye(i.CULL_FACE),be(Ti);function ye(A){p[A]!==!0&&(i.enable(A),p[A]=!0)}function ve(A){p[A]!==!1&&(i.disable(A),p[A]=!1)}function Ve(A,oe){return f[A]!==oe?(i.bindFramebuffer(A,oe),f[A]=oe,r&&(A===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),A===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function ke(A,oe){let F=v,re=!1;if(A)if(F=_.get(oe),F===void 0&&(F=[],_.set(oe,F)),A.isWebGLMultipleRenderTargets){const ae=A.texture;if(F.length!==ae.length||F[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,$e=ae.length;Xe<$e;Xe++)F[Xe]=i.COLOR_ATTACHMENT0+Xe;F.length=ae.length,re=!0}}else F[0]!==i.COLOR_ATTACHMENT0&&(F[0]=i.COLOR_ATTACHMENT0,re=!0);else F[0]!==i.BACK&&(F[0]=i.BACK,re=!0);re&&(t.isWebGL2?i.drawBuffers(F):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}function Ee(A){return m!==A?(i.useProgram(A),m=A,!0):!1}const L={[pr]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Gh]:i.FUNC_REVERSE_SUBTRACT};if(r)L[po]=i.MIN,L[mo]=i.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(L[po]=A.MIN_EXT,L[mo]=A.MAX_EXT)}const ht={[Wh]:i.ZERO,[jh]:i.ONE,[Xh]:i.SRC_COLOR,[fo]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA};function be(A,oe,F,re,ae,Xe,$e,it){if(A===Ti){u===!0&&(ve(i.BLEND),u=!1);return}if(u===!1&&(ye(i.BLEND),u=!0),A!==zh){if(A!==E||it!==b){if((y!==pr||R!==pr)&&(i.blendEquation(i.FUNC_ADD),y=pr,R=pr),it)switch(A){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.ONE,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,T=null,C=null,q=null,E=A,b=it}return}ae=ae||oe,Xe=Xe||F,$e=$e||re,(oe!==y||ae!==R)&&(i.blendEquationSeparate(L[oe],L[ae]),y=oe,R=ae),(F!==S||re!==T||Xe!==C||$e!==q)&&(i.blendFuncSeparate(ht[F],ht[re],ht[Xe],ht[$e]),S=F,T=re,C=Xe,q=$e),E=A,b=!1}function Te(A,oe){A.side===ui?ve(i.CULL_FACE):ye(i.CULL_FACE);let F=A.side===Ct;oe&&(F=!F),Se(F),A.blending===dr&&A.transparent===!1?be(Ti):be(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),o.setMask(A.colorWrite);const re=A.stencilWrite;c.setTest(re),re&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Le(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(A){w!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),w=A)}function Ze(A){A!==Vh?(ye(i.CULL_FACE),A!==K&&(A===oo?i.cullFace(i.BACK):A===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),K=A}function Oe(A){A!==ie&&(Y&&i.lineWidth(A),ie=A)}function Le(A,oe,F){A?(ye(i.POLYGON_OFFSET_FILL),(I!==oe||z!==F)&&(i.polygonOffset(oe,F),I=oe,z=F)):ve(i.POLYGON_OFFSET_FILL)}function He(A){A?ye(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function pt(A){A===void 0&&(A=i.TEXTURE0+G-1),$!==A&&(i.activeTexture(A),$=A)}function vt(A,oe,F){F===void 0&&($===null?F=i.TEXTURE0+G-1:F=$);let re=j[F];re===void 0&&(re={type:void 0,texture:void 0},j[F]=re),(re.type!==A||re.texture!==oe)&&($!==F&&(i.activeTexture(F),$=F),i.bindTexture(A,oe||de[A]),re.type=A,re.texture=oe)}function M(){const A=j[$];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function g(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function D(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(A){Q.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),Q.copy(A))}function ce(A){se.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),se.copy(A))}function he(A,oe){let F=d.get(oe);F===void 0&&(F=new WeakMap,d.set(oe,F));let re=F.get(A);re===void 0&&(re=i.getUniformBlockIndex(oe,A.name),F.set(A,re))}function De(A,oe){const F=d.get(oe).get(A);h.get(oe)!==F&&(i.uniformBlockBinding(oe,F,A.__bindingPointIndex),h.set(oe,F))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},$=null,j={},f={},_=new WeakMap,v=[],m=null,u=!1,E=null,y=null,S=null,T=null,R=null,C=null,q=null,b=!1,w=null,K=null,ie=null,I=null,z=null,Q.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ye,disable:ve,bindFramebuffer:Ve,drawBuffers:ke,useProgram:Ee,setBlending:be,setMaterial:Te,setFlipSided:Se,setCullFace:Ze,setLineWidth:Oe,setPolygonOffset:Le,setScissorTest:He,activeTexture:pt,bindTexture:vt,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:fe,texImage3D:me,updateUBOMapping:he,uniformBlockBinding:De,texStorage2D:te,texStorage3D:V,texSubImage2D:ee,texSubImage3D:Z,compressedTexSubImage2D:J,compressedTexSubImage3D:pe,scissor:_e,viewport:ce,reset:Ge}}function Vg(i,e,t,r,a,n,s){const o=a.isWebGL2,l=a.maxTextures,c=a.maxCubemapSize,h=a.maxTextureSize,d=a.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,g){return u?new OffscreenCanvas(M,g):Da("canvas")}function y(M,g,D,ee){let Z=1;if((M.width>ee||M.height>ee)&&(Z=ee/Math.max(M.width,M.height)),Z<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const J=g?Gn:Math.floor,pe=J(Z*M.width),te=J(Z*M.height);v===void 0&&(v=E(pe,te));const V=D?E(pe,te):v;return V.width=pe,V.height=te,V.getContext("2d").drawImage(M,0,0,pe,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+pe+"x"+te+")."),V}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return el(M.width)&&el(M.height)}function T(M){return o?!1:M.wrapS!==Kt||M.wrapT!==Kt||M.minFilter!==mt&&M.minFilter!==At}function R(M,g){return M.generateMipmaps&&g&&M.minFilter!==mt&&M.minFilter!==At}function C(M){i.generateMipmap(M)}function q(M,g,D,ee,Z=!1){if(o===!1)return g;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=g;return g===i.RED&&(D===i.FLOAT&&(J=i.R32F),D===i.HALF_FLOAT&&(J=i.R16F),D===i.UNSIGNED_BYTE&&(J=i.R8)),g===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(J=i.R8UI),D===i.UNSIGNED_SHORT&&(J=i.R16UI),D===i.UNSIGNED_INT&&(J=i.R32UI),D===i.BYTE&&(J=i.R8I),D===i.SHORT&&(J=i.R16I),D===i.INT&&(J=i.R32I)),g===i.RG&&(D===i.FLOAT&&(J=i.RG32F),D===i.HALF_FLOAT&&(J=i.RG16F),D===i.UNSIGNED_BYTE&&(J=i.RG8)),g===i.RGBA&&(D===i.FLOAT&&(J=i.RGBA32F),D===i.HALF_FLOAT&&(J=i.RGBA16F),D===i.UNSIGNED_BYTE&&(J=ee===Ke&&Z===!1?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)),(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(M,g,D){return R(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==mt&&M.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){return M===mt||M===bo||M===Ln?i.NEAREST:i.LINEAR}function K(M){const g=M.target;g.removeEventListener("dispose",K),I(g),g.isVideoTexture&&_.delete(g)}function ie(M){const g=M.target;g.removeEventListener("dispose",ie),G(g)}function I(M){const g=r.get(M);if(g.__webglInit===void 0)return;const D=M.source,ee=m.get(D);if(ee){const Z=ee[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&z(M),Object.keys(ee).length===0&&m.delete(D)}r.remove(M)}function z(M){const g=r.get(M);i.deleteTexture(g.__webglTexture);const D=M.source,ee=m.get(D);delete ee[g.__cacheKey],s.memory.textures--}function G(M){const g=M.texture,D=r.get(M),ee=r.get(g);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),s.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(D.__webglFramebuffer[Z]))for(let J=0;J<D.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(D.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(D.__webglFramebuffer[Z]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[Z])}else{if(Array.isArray(D.__webglFramebuffer))for(let Z=0;Z<D.__webglFramebuffer.length;Z++)i.deleteFramebuffer(D.__webglFramebuffer[Z]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Z=0;Z<D.__webglColorRenderbuffer.length;Z++)D.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[Z]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,J=g.length;Z<J;Z++){const pe=r.get(g[Z]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(g[Z])}r.remove(g),r.remove(M)}let Y=0;function W(){Y=0}function X(){const M=Y;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Y+=1,M}function $(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function j(M,g){const D=r.get(M);if(M.isVideoTexture&&pt(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const ee=M.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(D,M,g);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+g)}function O(M,g){const D=r.get(M);if(M.version>0&&D.__version!==M.version){Ve(D,M,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+g)}function k(M,g){const D=r.get(M);if(M.version>0&&D.__version!==M.version){Ve(D,M,g);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+g)}function Q(M,g){const D=r.get(M);if(M.version>0&&D.__version!==M.version){ke(D,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+g)}const se={[Rn]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Pn]:i.MIRRORED_REPEAT},ue={[mt]:i.NEAREST,[bo]:i.NEAREST_MIPMAP_NEAREST,[Ln]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[pu]:i.LINEAR_MIPMAP_NEAREST,[Yr]:i.LINEAR_MIPMAP_LINEAR},de={[Au]:i.NEVER,[Nu]:i.ALWAYS,[Ru]:i.LESS,[Lu]:i.LEQUAL,[Pu]:i.EQUAL,[Iu]:i.GEQUAL,[Uu]:i.GREATER,[Du]:i.NOTEQUAL};function ye(M,g,D){if(D?(i.texParameteri(M,i.TEXTURE_WRAP_S,se[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,se[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,se[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ue[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ue[g.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Kt||g.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,w(g.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==mt&&g.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===mt||g.minFilter!==Ln&&g.minFilter!==Yr||g.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||r.get(g).__currentAnisotropy)&&(i.texParameterf(M,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy)}}function ve(M,g){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",K));const ee=g.source;let Z=m.get(ee);Z===void 0&&(Z={},m.set(ee,Z));const J=$(g);if(J!==M.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,D=!0),Z[J].usedTimes++;const pe=Z[M.__cacheKey];pe!==void 0&&(Z[M.__cacheKey].usedTimes--,pe.usedTimes===0&&z(g)),M.__cacheKey=J,M.__webglTexture=Z[J].texture}return D}function Ve(M,g,D){let ee=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=i.TEXTURE_3D);const Z=ve(M,g),J=g.source;t.bindTexture(ee,M.__webglTexture,i.TEXTURE0+D);const pe=r.get(J);if(J.version!==pe.__version||Z===!0){t.activeTexture(i.TEXTURE0+D),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=T(g)&&S(g.image)===!1;let V=y(g.image,te,!1,h);V=vt(g,V);const fe=S(V)||o,me=n.convert(g.format,g.colorSpace);let _e=n.convert(g.type),ce=q(g.internalFormat,me,_e,g.colorSpace,g.isVideoTexture);ye(ee,g,fe);let he;const De=g.mipmaps,Ge=o&&g.isVideoTexture!==!0,A=pe.__version===void 0||Z===!0,oe=b(g,V,fe);if(g.isDepthTexture)ce=i.DEPTH_COMPONENT,o?g.type===Pi?ce=i.DEPTH_COMPONENT32F:g.type===Ri?ce=i.DEPTH_COMPONENT24:g.type===ji?ce=i.DEPTH24_STENCIL8:ce=i.DEPTH_COMPONENT16:g.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Xi&&ce===i.DEPTH_COMPONENT&&g.type!==Un&&g.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ri,_e=n.convert(g.type)),g.format===gr&&ce===i.DEPTH_COMPONENT&&(ce=i.DEPTH_STENCIL,g.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ji,_e=n.convert(g.type))),A&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ce,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,ce,V.width,V.height,0,me,_e,null));else if(g.isDataTexture)if(De.length>0&&fe){Ge&&A&&t.texStorage2D(i.TEXTURE_2D,oe,ce,De[0].width,De[0].height);for(let F=0,re=De.length;F<re;F++)he=De[F],Ge?t.texSubImage2D(i.TEXTURE_2D,F,0,0,he.width,he.height,me,_e,he.data):t.texImage2D(i.TEXTURE_2D,F,ce,he.width,he.height,0,me,_e,he.data);g.generateMipmaps=!1}else Ge?(A&&t.texStorage2D(i.TEXTURE_2D,oe,ce,V.width,V.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,me,_e,V.data)):t.texImage2D(i.TEXTURE_2D,0,ce,V.width,V.height,0,me,_e,V.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ge&&A&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,De[0].width,De[0].height,V.depth);for(let F=0,re=De.length;F<re;F++)he=De[F],g.format!==Nt?me!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,he.width,he.height,V.depth,me,he.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,ce,he.width,he.height,V.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,he.width,he.height,V.depth,me,_e,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,ce,he.width,he.height,V.depth,0,me,_e,he.data)}else{Ge&&A&&t.texStorage2D(i.TEXTURE_2D,oe,ce,De[0].width,De[0].height);for(let F=0,re=De.length;F<re;F++)he=De[F],g.format!==Nt?me!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(i.TEXTURE_2D,F,ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,F,0,0,he.width,he.height,me,_e,he.data):t.texImage2D(i.TEXTURE_2D,F,ce,he.width,he.height,0,me,_e,he.data)}else if(g.isDataArrayTexture)Ge?(A&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,V.width,V.height,V.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,me,_e,V.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,V.width,V.height,V.depth,0,me,_e,V.data);else if(g.isData3DTexture)Ge?(A&&t.texStorage3D(i.TEXTURE_3D,oe,ce,V.width,V.height,V.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,me,_e,V.data)):t.texImage3D(i.TEXTURE_3D,0,ce,V.width,V.height,V.depth,0,me,_e,V.data);else if(g.isFramebufferTexture){if(A)if(Ge)t.texStorage2D(i.TEXTURE_2D,oe,ce,V.width,V.height);else{let F=V.width,re=V.height;for(let ae=0;ae<oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,ce,F,re,0,me,_e,null),F>>=1,re>>=1}}else if(De.length>0&&fe){Ge&&A&&t.texStorage2D(i.TEXTURE_2D,oe,ce,De[0].width,De[0].height);for(let F=0,re=De.length;F<re;F++)he=De[F],Ge?t.texSubImage2D(i.TEXTURE_2D,F,0,0,me,_e,he):t.texImage2D(i.TEXTURE_2D,F,ce,me,_e,he);g.generateMipmaps=!1}else Ge?(A&&t.texStorage2D(i.TEXTURE_2D,oe,ce,V.width,V.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,_e,V)):t.texImage2D(i.TEXTURE_2D,0,ce,me,_e,V);R(g,fe)&&C(ee),pe.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ke(M,g,D){if(g.image.length!==6)return;const ee=ve(M,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const J=r.get(Z);if(Z.version!==J.__version||ee===!0){t.activeTexture(i.TEXTURE0+D),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,te=g.image[0]&&g.image[0].isDataTexture,V=[];for(let F=0;F<6;F++)!pe&&!te?V[F]=y(g.image[F],!1,!0,c):V[F]=te?g.image[F].image:g.image[F],V[F]=vt(g,V[F]);const fe=V[0],me=S(fe)||o,_e=n.convert(g.format,g.colorSpace),ce=n.convert(g.type),he=q(g.internalFormat,_e,ce,g.colorSpace),De=o&&g.isVideoTexture!==!0,Ge=J.__version===void 0||ee===!0;let A=b(g,fe,me);ye(i.TEXTURE_CUBE_MAP,g,me);let oe;if(pe){De&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,A,he,fe.width,fe.height);for(let F=0;F<6;F++){oe=V[F].mipmaps;for(let re=0;re<oe.length;re++){const ae=oe[re];g.format!==Nt?_e!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,0,0,ae.width,ae.height,_e,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,he,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,0,0,ae.width,ae.height,_e,ce,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,he,ae.width,ae.height,0,_e,ce,ae.data)}}}else{oe=g.mipmaps,De&&Ge&&(oe.length>0&&A++,t.texStorage2D(i.TEXTURE_CUBE_MAP,A,he,V[0].width,V[0].height));for(let F=0;F<6;F++)if(te){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,V[F].width,V[F].height,_e,ce,V[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,he,V[F].width,V[F].height,0,_e,ce,V[F].data);for(let re=0;re<oe.length;re++){const ae=oe[re].image[F].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,0,0,ae.width,ae.height,_e,ce,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,he,ae.width,ae.height,0,_e,ce,ae.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,_e,ce,V[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,he,_e,ce,V[F]);for(let re=0;re<oe.length;re++){const ae=oe[re];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,0,0,_e,ce,ae.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,he,_e,ce,ae.image[F])}}}R(g,me)&&C(i.TEXTURE_CUBE_MAP),J.__version=Z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ee(M,g,D,ee,Z,J){const pe=n.convert(D.format,D.colorSpace),te=n.convert(D.type),V=q(D.internalFormat,pe,te,D.colorSpace);if(!r.get(g).__hasExternalTextures){const fe=Math.max(1,g.width>>J),me=Math.max(1,g.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,J,V,fe,me,g.depth,0,pe,te,null):t.texImage2D(Z,J,V,fe,me,0,pe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),He(g)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Z,r.get(D).__webglTexture,0,Le(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,Z,r.get(D).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function L(M,g,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let ee=i.DEPTH_COMPONENT16;if(D||He(g)){const Z=g.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Pi?ee=i.DEPTH_COMPONENT32F:Z.type===Ri&&(ee=i.DEPTH_COMPONENT24));const J=Le(g);He(g)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,ee,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,ee,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const ee=Le(g);D&&He(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,g.width,g.height):He(g)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ee=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Z=0;Z<ee.length;Z++){const J=ee[Z],pe=n.convert(J.format,J.colorSpace),te=n.convert(J.type),V=q(J.internalFormat,pe,te,J.colorSpace),fe=Le(g);D&&He(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,V,g.width,g.height):He(g)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const D=r.get(g.depthTexture).__webglTexture,ee=Le(g);if(g.depthTexture.format===Xi)He(g)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0);else if(g.depthTexture.format===gr)He(g)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function be(M){const g=r.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ht(g.__webglFramebuffer,M)}else if(D){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]=i.createRenderbuffer(),L(g.__webglDepthbuffer[ee],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),L(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(M,g,D){const ee=r.get(M);g!==void 0&&Ee(ee.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&be(M)}function Se(M){const g=M.texture,D=r.get(M),ee=r.get(g);M.addEventListener("dispose",ie),M.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=g.version,s.memory.textures++);const Z=M.isWebGLCubeRenderTarget===!0,J=M.isWebGLMultipleRenderTargets===!0,pe=S(M)||o;if(Z){D.__webglFramebuffer=[];for(let te=0;te<6;te++)if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[te]=[];for(let V=0;V<g.mipmaps.length;V++)D.__webglFramebuffer[te][V]=i.createFramebuffer()}else D.__webglFramebuffer[te]=i.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)D.__webglFramebuffer[te]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(J)if(a.drawBuffers){const te=M.texture;for(let V=0,fe=te.length;V<fe;V++){const me=r.get(te[V]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&He(M)===!1){const te=J?g:[g];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let V=0;V<te.length;V++){const fe=te[V];D.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[V]);const me=n.convert(fe.format,fe.colorSpace),_e=n.convert(fe.type),ce=q(fe.internalFormat,me,_e,fe.colorSpace,M.isXRRenderTarget===!0),he=Le(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,D.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),L(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ye(i.TEXTURE_CUBE_MAP,g,pe);for(let te=0;te<6;te++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let V=0;V<g.mipmaps.length;V++)Ee(D.__webglFramebuffer[te][V],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,V);else Ee(D.__webglFramebuffer[te],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);R(g,pe)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const te=M.texture;for(let V=0,fe=te.length;V<fe;V++){const me=te[V],_e=r.get(me);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),ye(i.TEXTURE_2D,me,pe),Ee(D.__webglFramebuffer,M,me,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,0),R(me,pe)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?te=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,ee.__webglTexture),ye(te,g,pe),o&&g.mipmaps&&g.mipmaps.length>0)for(let V=0;V<g.mipmaps.length;V++)Ee(D.__webglFramebuffer[V],M,g,i.COLOR_ATTACHMENT0,te,V);else Ee(D.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,te,0);R(g,pe)&&C(te),t.unbindTexture()}M.depthBuffer&&be(M)}function Ze(M){const g=S(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0,Z=D.length;ee<Z;ee++){const J=D[ee];if(R(J,g)){const pe=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=r.get(J).__webglTexture;t.bindTexture(pe,te),C(pe),t.unbindTexture()}}}function Oe(M){if(o&&M.samples>0&&He(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,ee=M.height;let Z=i.COLOR_BUFFER_BIT;const J=[],pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=r.get(M),V=M.isWebGLMultipleRenderTargets===!0;if(V)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){J.push(i.COLOR_ATTACHMENT0+fe),M.depthBuffer&&J.push(pe);const me=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(me===!1&&(M.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),V&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[fe]),me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),V){const _e=r.get(g[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,D,ee,0,0,D,ee,Z,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,te.__webglColorRenderbuffer[fe]);const me=r.get(g[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Le(M){return Math.min(d,M.samples)}function He(M){const g=r.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function pt(M){const g=s.render.frame;_.get(M)!==g&&(_.set(M,g),M.update())}function vt(M,g){const D=M.colorSpace,ee=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===kn||D!==ri&&D!==Ki&&(D===Ke||D===La?o===!1?e.has("EXT_sRGB")===!0&&ee===Nt?(M.format=kn,M.minFilter=At,M.generateMipmaps=!1):g=rl.sRGBToLinear(g):(ee!==Nt||Z!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=He}const kg=0,lt=1;function Bg(i,e,t){const r=t.isWebGL2;function a(n,s=Ki){let o;const l=s===Ke||s===La?lt:kg;if(n===Ai)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.BYTE;if(n===fu)return i.SHORT;if(n===Un)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===Wi)return r?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(n===gu)return i.ALPHA;if(n===Nt)return i.RGBA;if(n===vu)return i.LUMINANCE;if(n===_u)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===gr)return i.DEPTH_STENCIL;if(n===kn)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(n===bu)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===xu)return i.RG;if(n===So)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===Dn||n===In||n===Nn||n===On)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Dn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===In)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===On)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Dn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===In)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===On)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Co||n===Ao||n===Ro)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===To)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ao)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Po||n===Lo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Po)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Lo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===Do||n===Io||n===No||n===Oo||n===Fo||n===Vo||n===ko||n===Bo||n===zo||n===Ho||n===Go||n===Wo||n===jo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Uo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fn||n===Xo||n===qo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Fn)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mu||n===Ko||n===Yo||n===Zo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Fn)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?r?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[n]!==void 0?i[n]:null}return{convert:a}}class zg extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class an extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hg={type:"move"};class ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,n=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new an;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Gg extends zt{constructor(e,t,r,a,n,s,o,l,c,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===Xi&&(r=Ri),r===void 0&&h===gr&&(r=ji),super(null,a,n,s,o,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wg extends vr{constructor(e,t){super();const r=this;let a=null,n=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,_=null;const v=t.getContextAttributes();let m=null,u=null;const E=[],y=[],S=new Qt;S.layers.enable(1),S.viewport=new ft;const T=new Qt;T.layers.enable(2),T.viewport=new ft;const R=[S,T],C=new zg;C.layers.enable(1),C.layers.enable(2);let q=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=E[O];return k===void 0&&(k=new ps,E[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=E[O];return k===void 0&&(k=new ps,E[O]=k),k.getGripSpace()},this.getHand=function(O){let k=E[O];return k===void 0&&(k=new ps,E[O]=k),k.getHandSpace()};function w(O){const k=y.indexOf(O.inputSource);if(k===-1)return;const Q=E[k];Q!==void 0&&(Q.update(O.inputSource,O.frame,c||s),Q.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){a.removeEventListener("select",w),a.removeEventListener("selectstart",w),a.removeEventListener("selectend",w),a.removeEventListener("squeeze",w),a.removeEventListener("squeezestart",w),a.removeEventListener("squeezeend",w),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",ie);for(let O=0;O<E.length;O++){const k=y[O];k!==null&&(y[O]=null,E[O].disconnect(k))}q=null,b=null,e.setRenderTarget(m),f=null,p=null,d=null,a=null,u=null,j.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){n=O,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(O){if(a=O,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",w),a.addEventListener("selectstart",w),a.addEventListener("selectend",w),a.addEventListener("squeeze",w),a.addEventListener("squeezestart",w),a.addEventListener("squeezeend",w),a.addEventListener("end",K),a.addEventListener("inputsourceschange",ie),v.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(a,t,k),a.updateRenderState({baseLayer:f}),u=new Ot(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,Q=null,se=null;v.depth&&(se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?gr:Xi,Q=v.stencil?ji:Ri);const ue={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:n};d=new XRWebGLBinding(a,t),p=d.createProjectionLayer(ue),a.updateRenderState({layers:[p]}),u=new Ot(p.textureWidth,p.textureHeight,{format:Nt,type:Ai,depthTexture:new Gg(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const de=e.properties.get(u);de.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),j.setContext(a),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ie(O){for(let k=0;k<O.removed.length;k++){const Q=O.removed[k],se=y.indexOf(Q);se>=0&&(y[se]=null,E[se].disconnect(Q))}for(let k=0;k<O.added.length;k++){const Q=O.added[k];let se=y.indexOf(Q);if(se===-1){for(let de=0;de<E.length;de++)if(de>=y.length){y.push(Q),se=de;break}else if(y[de]===null){y[de]=Q,se=de;break}if(se===-1)break}const ue=E[se];ue&&ue.connect(Q)}}const I=new N,z=new N;function G(O,k,Q){I.setFromMatrixPosition(k.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const se=I.distanceTo(z),ue=k.projectionMatrix.elements,de=Q.projectionMatrix.elements,ye=ue[14]/(ue[10]-1),ve=ue[14]/(ue[10]+1),Ve=(ue[9]+1)/ue[5],ke=(ue[9]-1)/ue[5],Ee=(ue[8]-1)/ue[0],L=(de[8]+1)/de[0],ht=ye*Ee,be=ye*L,Te=se/(-Ee+L),Se=Te*-Ee;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Se),O.translateZ(Te),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Ze=ye+Te,Oe=ve+Te,Le=ht-Se,He=be+(se-Se),pt=Ve*ve/Oe*Ze,vt=ke*ve/Oe*Ze;O.projectionMatrix.makePerspective(Le,He,pt,vt,Ze,Oe),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Y(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(a===null)return;C.near=T.near=S.near=O.near,C.far=T.far=S.far=O.far,(q!==C.near||b!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),q=C.near,b=C.far);const k=O.parent,Q=C.cameras;Y(C,k);for(let se=0;se<Q.length;se++)Y(Q[se],k);Q.length===2?G(C,S,T):C.projectionMatrix.copy(S.projectionMatrix),W(O,C,k)};function W(O,k,Q){Q===null?O.matrix.copy(k.matrixWorld):(O.matrix.copy(Q.matrixWorld),O.matrix.invert(),O.matrix.multiply(k.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=zn*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(O){l=O,p!==null&&(p.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let X=null;function $(O,k){if(h=k.getViewerPose(c||s),_=k,h!==null){const Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(u,f.framebuffer),e.setRenderTarget(u));let se=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,se=!0);for(let ue=0;ue<Q.length;ue++){const de=Q[ue];let ye=null;if(f!==null)ye=f.getViewport(de);else{const Ve=d.getViewSubImage(p,de);ye=Ve.viewport,ue===0&&(e.setRenderTargetTextures(u,Ve.colorTexture,p.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(u))}let ve=R[ue];ve===void 0&&(ve=new Qt,ve.layers.enable(ue),ve.viewport=new ft,R[ue]=ve),ve.matrix.fromArray(de.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(de.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(ye.x,ye.y,ye.width,ye.height),ue===0&&(C.matrix.copy(ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),se===!0&&C.cameras.push(ve)}}for(let Q=0;Q<E.length;Q++){const se=y[Q],ue=E[Q];se!==null&&ue!==void 0&&ue.update(se,k,c||s)}X&&X(O,k),k.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:k}),_=null}const j=new Al;j.setAnimationLoop($),this.setAnimationLoop=function(O){X=O},this.dispose=function(){}}}function jg(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function r(m,u){u.color.getRGB(m.fogColor.value,Sl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,E,y,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(m,u):u.isMeshToonMaterial?(n(m,u),d(m,u)):u.isMeshPhongMaterial?(n(m,u),h(m,u)):u.isMeshStandardMaterial?(n(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(n(m,u),_(m,u)):u.isMeshDepthMaterial?n(m,u):u.isMeshDistanceMaterial?(n(m,u),v(m,u)):u.isMeshNormalMaterial?n(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ct&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ct&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*y,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Xg(i,e,t,r){let a={},n={},s=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const S=y.program;r.uniformBlockBinding(E,S)}function c(E,y){let S=a[E.id];S===void 0&&(_(E),S=h(E),a[E.id]=S,E.addEventListener("dispose",m));const T=y.program;r.updateUBOMapping(E,T);const R=e.render.frame;n[E.id]!==R&&(p(E),n[E.id]=R)}function h(E){const y=d();E.__bindingPointIndex=y;const S=i.createBuffer(),T=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function d(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const y=a[E.id],S=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,C=S.length;R<C;R++){const q=S[R];if(f(q,R,T)===!0){const b=q.__offset,w=Array.isArray(q.value)?q.value:[q.value];let K=0;for(let ie=0;ie<w.length;ie++){const I=w[ie],z=v(I);typeof I=="number"?(q.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,b+K,q.__data)):I.isMatrix3?(q.__data[0]=I.elements[0],q.__data[1]=I.elements[1],q.__data[2]=I.elements[2],q.__data[3]=I.elements[0],q.__data[4]=I.elements[3],q.__data[5]=I.elements[4],q.__data[6]=I.elements[5],q.__data[7]=I.elements[0],q.__data[8]=I.elements[6],q.__data[9]=I.elements[7],q.__data[10]=I.elements[8],q.__data[11]=I.elements[0]):(I.toArray(q.__data,K),K+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,q.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,S){const T=E.value;if(S[y]===void 0){if(typeof T=="number")S[y]=T;else{const R=Array.isArray(T)?T:[T],C=[];for(let q=0;q<R.length;q++)C.push(R[q].clone());S[y]=C}return!0}else if(typeof T=="number"){if(S[y]!==T)return S[y]=T,!0}else{const R=Array.isArray(S[y])?S[y]:[S[y]],C=Array.isArray(T)?T:[T];for(let q=0;q<R.length;q++){const b=R[q];if(b.equals(C[q])===!1)return b.copy(C[q]),!0}}return!1}function _(E){const y=E.uniforms;let S=0;const T=16;let R=0;for(let C=0,q=y.length;C<q;C++){const b=y[C],w={boundary:0,storage:0},K=Array.isArray(b.value)?b.value:[b.value];for(let ie=0,I=K.length;ie<I;ie++){const z=K[ie],G=v(z);w.boundary+=G.boundary,w.storage+=G.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,C>0){R=S%T;const ie=T-R;R!==0&&ie-w.boundary<0&&(S+=T-R,b.__offset=S)}S+=w.storage}return R=S%T,R>0&&(S+=T-R),E.__size=S,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const S=s.indexOf(y.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete n[y.id]}function u(){for(const E in a)i.deleteBuffer(a[E]);s=[],a={},n={}}return{bind:l,update:c,dispose:u}}class ic{constructor(e={}){const{canvas:t=Fu(),context:r=null,depth:a=!0,stencil:n=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;r!==null?p=r.getContextAttributes().alpha:p=s;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;const y=this;let S=!1,T=0,R=0,C=null,q=-1,b=null;const w=new ft,K=new ft;let ie=null;const I=new qe(0);let z=0,G=t.width,Y=t.height,W=1,X=null,$=null;const j=new ft(0,0,G,Y),O=new ft(0,0,G,Y);let k=!1;const Q=new Cl;let se=!1,ue=!1,de=null;const ye=new gt,ve=new ge,Ve=new N,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return C===null?W:1}let L=r;function ht(x,P){for(let H=0;H<x.length;H++){const U=x[H],B=t.getContext(U,P);if(B!==null)return B}return null}try{const x={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${En}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",re,!1),L===null){const P=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&P.shift(),L=ht(P,x),L===null)throw ht(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let be,Te,Se,Ze,Oe,Le,He,pt,vt,M,g,D,ee,Z,J,pe,te,V,fe,me,_e,ce,he,De;function Ge(){be=new tf(L),Te=new Ym(L,be,e),be.init(Te),ce=new Bg(L,be,Te),Se=new Fg(L,be,Te),Ze=new nf(L),Oe=new wg,Le=new Vg(L,be,Se,Oe,Te,ce,Ze),He=new $m(y),pt=new ef(y),vt=new md(L,Te),he=new qm(L,be,vt,Te),M=new rf(L,vt,Ze,he),g=new cf(L,M,vt,Ze),fe=new lf(L,Te,Le),pe=new Zm(Oe),D=new Mg(y,He,pt,be,Te,he,pe),ee=new jg(y,Oe),Z=new Eg,J=new Lg(be,Te),V=new Xm(y,He,pt,Se,g,p,l),te=new Og(y,g,Te),De=new Xg(L,Ze,Te,Se),me=new Km(L,be,Ze,Te),_e=new af(L,be,Ze,Te),Ze.programs=D.programs,y.capabilities=Te,y.extensions=be,y.properties=Oe,y.renderLists=Z,y.shadowMap=te,y.state=Se,y.info=Ze}Ge();const A=new Wg(y,L);this.xr=A,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(G,Y,!1))},this.getSize=function(x){return x.set(G,Y)},this.setSize=function(x,P,H=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Y=P,t.width=Math.floor(x*W),t.height=Math.floor(P*W),H===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(G*W,Y*W).floor()},this.setDrawingBufferSize=function(x,P,H){G=x,Y=P,W=H,t.width=Math.floor(x*H),t.height=Math.floor(P*H),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,P,H,U){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,P,H,U),Se.viewport(w.copy(j).multiplyScalar(W).floor())},this.getScissor=function(x){return x.copy(O)},this.setScissor=function(x,P,H,U){x.isVector4?O.set(x.x,x.y,x.z,x.w):O.set(x,P,H,U),Se.scissor(K.copy(O).multiplyScalar(W).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(x){Se.setScissorTest(k=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){$=x},this.getClearColor=function(x){return x.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(x=!0,P=!0,H=!0){let U=0;if(x){let B=!1;if(C!==null){const le=C.texture.format;B=le===Eo||le===So||le===wo}if(B){const le=C.texture.type,xe=le===Ai||le===Ri||le===Un||le===ji||le===yo||le===Mo,Me=V.getClearColor(),we=V.getClearAlpha(),Ie=Me.r,Ce=Me.g,Ae=Me.b;xe?(f[0]=Ie,f[1]=Ce,f[2]=Ae,f[3]=we,L.clearBufferuiv(L.COLOR,0,f)):(_[0]=Ie,_[1]=Ce,_[2]=Ae,_[3]=we,L.clearBufferiv(L.COLOR,0,_))}else U|=L.COLOR_BUFFER_BIT}P&&(U|=L.DEPTH_BUFFER_BIT),H&&(U|=L.STENCIL_BUFFER_BIT),L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Z.dispose(),J.dispose(),Oe.dispose(),He.dispose(),pt.dispose(),g.dispose(),he.dispose(),De.dispose(),D.dispose(),A.dispose(),A.removeEventListener("sessionstart",Qe),A.removeEventListener("sessionend",ii),de&&(de.dispose(),de=null),yt.stop()};function oe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const x=Ze.autoReset,P=te.enabled,H=te.autoUpdate,U=te.needsUpdate,B=te.type;Ge(),Ze.autoReset=x,te.enabled=P,te.autoUpdate=H,te.needsUpdate=U,te.type=B}function re(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ae(x){const P=x.target;P.removeEventListener("dispose",ae),Xe(P)}function Xe(x){$e(x),Oe.remove(x)}function $e(x){const P=Oe.get(x).programs;P!==void 0&&(P.forEach(function(H){D.releaseProgram(H)}),x.isShaderMaterial&&D.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,H,U,B,le){P===null&&(P=ke);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Me=Ih(x,P,H,U,B);Se.setMaterial(U,xe);let we=H.index,Ie=1;if(U.wireframe===!0){if(we=M.getWireframeAttribute(H),we===void 0)return;Ie=2}const Ce=H.drawRange,Ae=H.attributes.position;let ut=Ce.start*Ie,tt=(Ce.start+Ce.count)*Ie;le!==null&&(ut=Math.max(ut,le.start*Ie),tt=Math.min(tt,(le.start+le.count)*Ie)),we!==null?(ut=Math.max(ut,0),tt=Math.min(tt,we.count)):Ae!=null&&(ut=Math.max(ut,0),tt=Math.min(tt,Ae.count));const Gt=tt-ut;if(Gt<0||Gt===1/0)return;he.setup(B,U,Me,H,we);let ci,rt=me;if(we!==null&&(ci=vt.get(we),rt=_e,rt.setIndex(ci)),B.isMesh)U.wireframe===!0?(Se.setLineWidth(U.wireframeLinewidth*Ee()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(B.isLine){let Ne=U.linewidth;Ne===void 0&&(Ne=1),Se.setLineWidth(Ne*Ee()),B.isLineSegments?rt.setMode(L.LINES):B.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else B.isPoints?rt.setMode(L.POINTS):B.isSprite&&rt.setMode(L.TRIANGLES);if(B.isInstancedMesh)rt.renderInstances(ut,Gt,B.count);else if(H.isInstancedBufferGeometry){const Ne=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xn=Math.min(H.instanceCount,Ne);rt.renderInstances(ut,Gt,xn)}else rt.render(ut,Gt)},this.compile=function(x,P){function H(U,B,le){U.transparent===!0&&U.side===ui&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,Ra(U,B,le),U.side=Wt,U.needsUpdate=!0,Ra(U,B,le),U.side=ui):Ra(U,B,le)}m=J.get(x),m.init(),E.push(m),x.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(y._useLegacyLights),x.traverse(function(U){const B=U.material;if(B)if(Array.isArray(B))for(let le=0;le<B.length;le++){const xe=B[le];H(xe,x,U)}else H(B,x,U)}),E.pop(),m=null};let it=null;function ti(x){it&&it(x)}function Qe(){yt.stop()}function ii(){yt.start()}const yt=new Al;yt.setAnimationLoop(ti),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(x){it=x,A.setAnimationLoop(x),x===null?yt.stop():yt.start()},A.addEventListener("sessionstart",Qe),A.addEventListener("sessionend",ii),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(P),P=A.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,P,C),m=J.get(x,E.length),m.init(),E.push(m),ye.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Q.setFromProjectionMatrix(ye),ue=this.localClippingEnabled,se=pe.init(this.clippingPlanes,ue),v=Z.get(x,u.length),v.init(),u.push(v),to(x,P,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(X,$),this.info.render.frame++,se===!0&&pe.beginShadows();const H=m.state.shadowsArray;if(te.render(H,x,P),se===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(v,x),m.setupLights(y._useLegacyLights),P.isArrayCamera){const U=P.cameras;for(let B=0,le=U.length;B<le;B++){const xe=U[B];io(v,x,xe,xe.viewport)}}else io(v,x,P);C!==null&&(Le.updateMultisampleRenderTarget(C),Le.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(y,x,P),he.resetDefaultState(),q=-1,b=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function to(x,P,H,U){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Q.intersectsSprite(x)){U&&Ve.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ye);const le=g.update(x),xe=x.material;xe.visible&&v.push(x,le,xe,H,Ve.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Q.intersectsObject(x))){const le=g.update(x),xe=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ve.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ve.copy(le.boundingSphere.center)),Ve.applyMatrix4(x.matrixWorld).applyMatrix4(ye)),Array.isArray(xe)){const Me=le.groups;for(let we=0,Ie=Me.length;we<Ie;we++){const Ce=Me[we],Ae=xe[Ce.materialIndex];Ae&&Ae.visible&&v.push(x,le,Ae,H,Ve.z,Ce)}}else xe.visible&&v.push(x,le,xe,H,Ve.z,null)}}const B=x.children;for(let le=0,xe=B.length;le<xe;le++)to(B[le],P,H,U)}function io(x,P,H,U){const B=x.opaque,le=x.transmissive,xe=x.transparent;m.setupLightsView(H),se===!0&&pe.setGlobalState(y.clippingPlanes,H),le.length>0&&Dh(B,le,P,H),U&&Se.viewport(w.copy(U)),B.length>0&&Aa(B,P,H),le.length>0&&Aa(le,P,H),xe.length>0&&Aa(xe,P,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Dh(x,P,H,U){const B=Te.isWebGL2;de===null&&(de=new Ot(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Wi:Ai,minFilter:Yr,samples:B?4:0})),y.getDrawingBufferSize(ve),B?de.setSize(ve.x,ve.y):de.setSize(Gn(ve.x),Gn(ve.y));const le=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(I),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear();const xe=y.toneMapping;y.toneMapping=Ci,Aa(x,H,U),Le.updateMultisampleRenderTarget(de),Le.updateRenderTargetMipmap(de);let Me=!1;for(let we=0,Ie=P.length;we<Ie;we++){const Ce=P[we],Ae=Ce.object,ut=Ce.geometry,tt=Ce.material,Gt=Ce.group;if(tt.side===ui&&Ae.layers.test(U.layers)){const ci=tt.side;tt.side=Ct,tt.needsUpdate=!0,ro(Ae,H,U,ut,tt,Gt),tt.side=ci,tt.needsUpdate=!0,Me=!0}}Me===!0&&(Le.updateMultisampleRenderTarget(de),Le.updateRenderTargetMipmap(de)),y.setRenderTarget(le),y.setClearColor(I,z),y.toneMapping=xe}function Aa(x,P,H){const U=P.isScene===!0?P.overrideMaterial:null;for(let B=0,le=x.length;B<le;B++){const xe=x[B],Me=xe.object,we=xe.geometry,Ie=U===null?xe.material:U,Ce=xe.group;Me.layers.test(H.layers)&&ro(Me,P,H,we,Ie,Ce)}}function ro(x,P,H,U,B,le){x.onBeforeRender(y,P,H,U,B,le),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(y,P,H,U,x,le),B.transparent===!0&&B.side===ui&&B.forceSinglePass===!1?(B.side=Ct,B.needsUpdate=!0,y.renderBufferDirect(H,P,U,B,x,le),B.side=Wt,B.needsUpdate=!0,y.renderBufferDirect(H,P,U,B,x,le),B.side=ui):y.renderBufferDirect(H,P,U,B,x,le),x.onAfterRender(y,P,H,U,B,le)}function Ra(x,P,H){P.isScene!==!0&&(P=ke);const U=Oe.get(x),B=m.state.lights,le=m.state.shadowsArray,xe=B.state.version,Me=D.getParameters(x,B.state,le,P,H),we=D.getProgramCacheKey(Me);let Ie=U.programs;U.environment=x.isMeshStandardMaterial?P.environment:null,U.fog=P.fog,U.envMap=(x.isMeshStandardMaterial?pt:He).get(x.envMap||U.environment),Ie===void 0&&(x.addEventListener("dispose",ae),Ie=new Map,U.programs=Ie);let Ce=Ie.get(we);if(Ce!==void 0){if(U.currentProgram===Ce&&U.lightsStateVersion===xe)return ao(x,Me),Ce}else Me.uniforms=D.getUniforms(x),x.onBuild(H,Me,y),x.onBeforeCompile(Me,y),Ce=D.acquireProgram(Me,we),Ie.set(we,Ce),U.uniforms=Me.uniforms;const Ae=U.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=pe.uniform),ao(x,Me),U.needsLights=Oh(x),U.lightsStateVersion=xe,U.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix);const ut=Ce.getUniforms(),tt=rn.seqWithValue(ut.seq,Ae);return U.currentProgram=Ce,U.uniformsList=tt,Ce}function ao(x,P){const H=Oe.get(x);H.outputColorSpace=P.outputColorSpace,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Ih(x,P,H,U,B){P.isScene!==!0&&(P=ke),Le.resetTextureUnits();const le=P.fog,xe=U.isMeshStandardMaterial?P.environment:null,Me=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ri,we=(U.isMeshStandardMaterial?pt:He).get(U.envMap||xe),Ie=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ce=!!H.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ae=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,tt=!!H.morphAttributes.color;let Gt=Ci;U.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Gt=y.toneMapping);const ci=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=ci!==void 0?ci.length:0,Ne=Oe.get(U),xn=m.state.lights;if(se===!0&&(ue===!0||x!==b)){const It=x===b&&U.id===q;pe.setState(U,x,It)}let yn=!1;U.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==xn.state.version||Ne.outputColorSpace!==Me||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||Ne.envMap!==we||U.fog===!0&&Ne.fog!==le||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==pe.numPlanes||Ne.numIntersection!==pe.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==Ce||Ne.morphTargets!==Ae||Ne.morphNormals!==ut||Ne.morphColors!==tt||Ne.toneMapping!==Gt||Te.isWebGL2===!0&&Ne.morphTargetsCount!==rt)&&(yn=!0):(yn=!0,Ne.__version=U.version);let Hi=Ne.currentProgram;yn===!0&&(Hi=Ra(U,P,B));let no=!1,Kr=!1,Mn=!1;const Mt=Hi.getUniforms(),Gi=Ne.uniforms;if(Se.useProgram(Hi.program)&&(no=!0,Kr=!0,Mn=!0),U.id!==q&&(q=U.id,Kr=!0),no||b!==x){Mt.setValue(L,"projectionMatrix",x.projectionMatrix),Mt.setValue(L,"viewMatrix",x.matrixWorldInverse);const It=Mt.map.cameraPosition;It!==void 0&&It.setValue(L,Ve.setFromMatrixPosition(x.matrixWorld)),Te.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,Kr=!0,Mn=!0)}if(B.isSkinnedMesh){Mt.setOptional(L,B,"bindMatrix"),Mt.setOptional(L,B,"bindMatrixInverse");const It=B.skeleton;It&&(Te.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),Mt.setValue(L,"boneTexture",It.boneTexture,Le),Mt.setValue(L,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wn=H.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0&&Te.isWebGL2===!0)&&fe.update(B,H,Hi),(Kr||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,Mt.setValue(L,"receiveShadow",B.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Gi.envMap.value=we,Gi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Kr&&(Mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Nh(Gi,Mn),le&&U.fog===!0&&ee.refreshFogUniforms(Gi,le),ee.refreshMaterialUniforms(Gi,U,W,Y,de),rn.upload(L,Ne.uniformsList,Gi,Le)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(rn.upload(L,Ne.uniformsList,Gi,Le),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Mt.setValue(L,"center",B.center),Mt.setValue(L,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(L,"normalMatrix",B.normalMatrix),Mt.setValue(L,"modelMatrix",B.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const It=U.uniformsGroups;for(let Sn=0,Fh=It.length;Sn<Fh;Sn++)if(Te.isWebGL2){const so=It[Sn];De.update(so,Hi),De.bind(so,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function Nh(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Oh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,P,H){Oe.get(x.texture).__webglTexture=P,Oe.get(x.depthTexture).__webglTexture=H;const U=Oe.get(x);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const H=Oe.get(x);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,H=0){C=x,T=P,R=H;let U=!0,B=null,le=!1,xe=!1;if(x){const Me=Oe.get(x);Me.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(L.FRAMEBUFFER,null),U=!1):Me.__webglFramebuffer===void 0?Le.setupRenderTarget(x):Me.__hasExternalTextures&&Le.rebindTextures(x,Oe.get(x.texture).__webglTexture,Oe.get(x.depthTexture).__webglTexture);const we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Ie=Oe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[P])?B=Ie[P][H]:B=Ie[P],le=!0):Te.isWebGL2&&x.samples>0&&Le.useMultisampledRTT(x)===!1?B=Oe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[H]:B=Ie,w.copy(x.viewport),K.copy(x.scissor),ie=x.scissorTest}else w.copy(j).multiplyScalar(W).floor(),K.copy(O).multiplyScalar(W).floor(),ie=k;if(Se.bindFramebuffer(L.FRAMEBUFFER,B)&&Te.drawBuffers&&U&&Se.drawBuffers(x,B),Se.viewport(w),Se.scissor(K),Se.setScissorTest(ie),le){const Me=Oe.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me.__webglTexture,H)}else if(xe){const Me=Oe.get(x.texture),we=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,we)}q=-1},this.readRenderTargetPixels=function(x,P,H,U,B,le,xe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){Se.bindFramebuffer(L.FRAMEBUFFER,Me);try{const we=x.texture,Ie=we.format,Ce=we.type;if(Ie!==Nt&&ce.convert(Ie)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Ce===Wi&&(be.has("EXT_color_buffer_half_float")||Te.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ce!==Ai&&ce.convert(Ce)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Pi&&(Te.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-U&&H>=0&&H<=x.height-B&&L.readPixels(P,H,U,B,ce.convert(Ie),ce.convert(Ce),le)}finally{const we=C!==null?Oe.get(C).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(x,P,H=0){const U=Math.pow(2,-H),B=Math.floor(P.image.width*U),le=Math.floor(P.image.height*U);Le.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,x.x,x.y,B,le),Se.unbindTexture()},this.copyTextureToTexture=function(x,P,H,U=0){const B=P.image.width,le=P.image.height,xe=ce.convert(H.format),Me=ce.convert(H.type);Le.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,x.x,x.y,B,le,xe,Me,P.image.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,xe,P.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,U,x.x,x.y,xe,Me,P.image),U===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(x,P,H,U,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,xe=x.max.y-x.min.y+1,Me=x.max.z-x.min.z+1,we=ce.convert(U.format),Ie=ce.convert(U.type);let Ce;if(U.isData3DTexture)Le.setTexture3D(U,0),Ce=L.TEXTURE_3D;else if(U.isDataArrayTexture)Le.setTexture2DArray(U,0),Ce=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ae=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),tt=L.getParameter(L.UNPACK_SKIP_PIXELS),Gt=L.getParameter(L.UNPACK_SKIP_ROWS),ci=L.getParameter(L.UNPACK_SKIP_IMAGES),rt=H.isCompressedTexture?H.mipmaps[0]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,x.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,x.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,x.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(Ce,B,P.x,P.y,P.z,le,xe,Me,we,Ie,rt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ce,B,P.x,P.y,P.z,le,xe,Me,we,rt.data)):L.texSubImage3D(Ce,B,P.x,P.y,P.z,le,xe,Me,we,Ie,rt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ci),B===0&&U.generateMipmaps&&L.generateMipmap(Ce),Se.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Le.setTextureCube(x,0):x.isData3DTexture?Le.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Le.setTexture2DArray(x,0):Le.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,Se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?qi:$o}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?Ke:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qg extends ic{}qg.prototype.isWebGL1Renderer=!0;class rr extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:En}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=En);var Kg=Object.defineProperty,Yg=(i,e,t)=>e in i?Kg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,bi=(i,e,t)=>(Yg(i,typeof e!="symbol"?e+"":e,t),t);function rc(i){return 1-Math.sqrt(1-Math.pow(i,2))}class _n{constructor(e,t){bi(this,"x"),bi(this,"y"),this.x=e,this.y=t}update(e){return this.x=e.x,this.y=e.y,this}moveByAngle(e,t,r){const a=e+Math.PI/2;return r?(this.x=this.x+Math.sin(a)*t*rc(1-r),this.y=this.y-Math.cos(a)*t*rc(1-r)):(this.x=this.x+Math.sin(a)*t,this.y=this.y-Math.cos(a)*t),this}equalsTo(e){return this.x===e.x&&this.y===e.y}getDifferenceTo(e){return new _n(this.x-e.x,this.y-e.y)}getDistanceTo(e){const t=this.getDifferenceTo(e);return Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2))}getAngleTo(e){const t=this.getDifferenceTo(e);return Math.atan2(t.y,t.x)}toObject(){return{x:this.x,y:this.y}}}const Zg=30;class $g{constructor(e={}){bi(this,"_isEnabled"),bi(this,"_hasMoved"),bi(this,"radius"),bi(this,"pointer"),bi(this,"brush"),bi(this,"angle"),bi(this,"distance");const t=e.initialPoint||{x:0,y:0};this.radius=e.radius||Zg,this._isEnabled=e.enabled!==!1,this.pointer=new _n(t.x,t.y),this.brush=new _n(t.x,t.y),this.angle=0,this.distance=0,this._hasMoved=!1}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}isEnabled(){return this._isEnabled}setRadius(e){this.radius=e}getRadius(){return this.radius}getBrushCoordinates(){return this.brush.toObject()}getPointerCoordinates(){return this.pointer.toObject()}getBrush(){return this.brush}getPointer(){return this.pointer}getAngle(){return this.angle}getDistance(){return this.distance}brushHasMoved(){return this._hasMoved}update(e,t={}){if(this._hasMoved=!1,this.pointer.equalsTo(e)&&!t.both&&!t.friction)return!1;if(this.pointer.update(e),t.both)return this._hasMoved=!0,this.brush.update(e),!0;if(this._isEnabled){this.distance=this.pointer.getDistanceTo(this.brush),this.angle=this.pointer.getAngleTo(this.brush);const r=Math.round((this.distance-this.radius)*10)/10>0,a=t.friction&&t.friction<1&&t.friction>0?t.friction:void 0;r&&(this.brush.moveByAngle(this.angle,this.distance-this.radius,a),this._hasMoved=!0)}else this.distance=0,this.angle=0,this.brush.update(e),this._hasMoved=!0;return!0}}/*! Tweakpane 4.0.4 (c) 2016 cocopon, licensed under the MIT license. */function We(i){return i==null}function ms(i){return i!==null&&typeof i=="object"}function fs(i){return i!==null&&typeof i=="object"}function Jg(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function ar(i,e){return Array.from(new Set([...Object.keys(i),...Object.keys(e)])).reduce((t,r)=>{const a=i[r],n=e[r];return fs(a)&&fs(n)?Object.assign(Object.assign({},t),{[r]:ar(a,n)}):Object.assign(Object.assign({},t),{[r]:r in e?n:a})},{})}function gs(i){return ms(i)?"target"in i:!1}const Qg={alreadydisposed:()=>"View has been already disposed",invalidparams:i=>`Invalid parameters for '${i.name}'`,nomatchingcontroller:i=>`No matching controller for '${i.key}'`,nomatchingview:i=>`No matching view for '${JSON.stringify(i.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:i=>`Not compatible with  plugin '${i.id}'`,propertynotfound:i=>`Property '${i.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class et{static alreadyDisposed(){return new et({type:"alreadydisposed"})}static notBindable(){return new et({type:"notbindable"})}static notCompatible(e,t){return new et({type:"notcompatible",context:{id:`${e}.${t}`}})}static propertyNotFound(e){return new et({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new et({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=Qg[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}toString(){return this.message}}class bn{constructor(e,t){this.obj_=e,this.key=t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}read(){return this.obj_[this.key]}write(e){this.obj_[this.key]=e}writeProperty(e,t){const r=this.read();if(!bn.isBindable(r))throw et.notBindable();if(!(e in r))throw et.propertyNotFound(e);r[e]=t}}class nt{constructor(){this.observers_={}}on(e,t,r){var a;let n=this.observers_[e];return n||(n=this.observers_[e]=[]),n.push({handler:t,key:(a=r==null?void 0:r.key)!==null&&a!==void 0?a:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(a=>a.key!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(a=>{a.handler(t)})}}class ev{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(a,n)=>a===n,this.emitter=new nt,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},a=this.constraint_?this.constraint_.constrain(e):e,n=this.rawValue_;this.equals_(n,a)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=a,this.emitter.emit("change",{options:r,previousRawValue:n,rawValue:a,sender:this}))}}class tv{constructor(e){this.emitter=new nt,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},a=this.value_;a===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:a,rawValue:this.value_,sender:this}))}}class iv{constructor(e){this.emitter=new nt,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function Ye(i,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new tv(i):new ev(i,e)}function rv(i){return[new iv(i),(e,t)=>{i.setRawValue(e,t)}]}class Pe{constructor(e){this.emitter=new nt,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((t,r)=>Object.assign(t,{[r]:Ye(e[r])}),{})}static fromObject(e){const t=this.createCore(e);return new Pe(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}class sa{constructor(e){this.values=Pe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class av{constructor(e){this.values=Pe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let a=e;return We(r)||(a=Math.max(a,r)),We(t)||(a=Math.min(a,t)),a}}class nv{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}class sv{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const ov={"**":(i,e)=>Math.pow(i,e),"*":(i,e)=>i*e,"/":(i,e)=>i/e,"%":(i,e)=>i%e,"+":(i,e)=>i+e,"-":(i,e)=>i-e,"<<":(i,e)=>i<<e,">>":(i,e)=>i>>e,">>>":(i,e)=>i>>>e,"&":(i,e)=>i&e,"^":(i,e)=>i^e,"|":(i,e)=>i|e};class lv{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=ov[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const cv={"+":i=>i,"-":i=>-i,"~":i=>~i};class hv{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=cv[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function vs(i){return(e,t)=>{for(let r=0;r<i.length;r++){const a=i[r](e,t);if(a!=="")return a}return""}}function oa(i,e){var t;const r=i.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function uv(i,e){const t=i.substr(e,1);return t.match(/^[1-9]$/)?t:""}function la(i,e){var t;const r=i.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function dv(i,e){const t=la(i,e);if(t!=="")return t;const r=i.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const a=la(i,e);return a===""?"":r+a}function _s(i,e){const t=i.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=dv(i,e);return r===""?"":t+r}function ac(i,e){const t=i.substr(e,1);if(t==="0")return t;const r=uv(i,e);return e+=r.length,r===""?"":r+la(i,e)}function pv(i,e){const t=ac(i,e);if(e+=t.length,t==="")return"";const r=i.substr(e,1);if(e+=r.length,r!==".")return"";const a=la(i,e);return e+=a.length,t+r+a+_s(i,e)}function mv(i,e){const t=i.substr(e,1);if(e+=t.length,t!==".")return"";const r=la(i,e);return e+=r.length,r===""?"":t+r+_s(i,e)}function fv(i,e){const t=ac(i,e);return e+=t.length,t===""?"":t+_s(i,e)}const gv=vs([pv,mv,fv]);function vv(i,e){var t;const r=i.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function _v(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=vv(i,e);return r===""?"":t+r}function bv(i,e){var t;const r=i.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function xv(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=bv(i,e);return r===""?"":t+r}function yv(i,e){var t;const r=i.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Mv(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=yv(i,e);return r===""?"":t+r}const wv=vs([_v,xv,Mv]),Sv=vs([wv,gv]);function Ev(i,e){const t=Sv(i,e);return e+=t.length,t===""?null:{evaluable:new sv(t),cursor:e}}function Tv(i,e){const t=i.substr(e,1);if(e+=t.length,t!=="(")return null;const r=sc(i,e);if(!r)return null;e=r.cursor,e+=oa(i,e).length;const a=i.substr(e,1);return e+=a.length,a!==")"?null:{evaluable:r.evaluable,cursor:e}}function Cv(i,e){var t;return(t=Ev(i,e))!==null&&t!==void 0?t:Tv(i,e)}function nc(i,e){const t=Cv(i,e);if(t)return t;const r=i.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const a=nc(i,e);return a?(e=a.cursor,{cursor:e,evaluable:new hv(r,a.evaluable)}):null}function Av(i,e,t){t+=oa(e,t).length;const r=i.filter(a=>e.startsWith(a,t))[0];return r?(t+=r.length,t+=oa(e,t).length,{cursor:t,operator:r}):null}function Rv(i,e){return(t,r)=>{const a=i(t,r);if(!a)return null;r=a.cursor;let n=a.evaluable;for(;;){const s=Av(e,t,r);if(!s)break;r=s.cursor;const o=i(t,r);if(!o)return null;r=o.cursor,n=new lv(s.operator,n,o.evaluable)}return n?{cursor:r,evaluable:n}:null}}const Pv=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((i,e)=>Rv(i,e),nc);function sc(i,e){return e+=oa(i,e).length,Pv(i,e)}function Lv(i){const e=sc(i,0);return!e||e.cursor+oa(i,e.cursor).length!==i.length?null:e.evaluable}function xi(i){var e;const t=Lv(i);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function oc(i){if(typeof i=="number")return i;if(typeof i=="string"){const e=xi(i);if(!We(e))return e}return 0}function Uv(i){return String(i)}function Ut(i){return e=>e.toFixed(Math.max(Math.min(i,20),0))}function ze(i,e,t,r,a){const n=(i-e)/(t-e);return r+n*(a-r)}function lc(i){return String(i.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ct(i,e,t){return Math.min(Math.max(i,e),t)}function cc(i,e){return(i%e+e)%e}function Dv(i,e){return We(i.step)?Math.max(lc(e),2):lc(i.step)}function hc(i){var e;return(e=i.step)!==null&&e!==void 0?e:1}function uc(i,e){var t;const r=Math.abs((t=i.step)!==null&&t!==void 0?t:e);return r===0?.1:Math.pow(10,Math.floor(Math.log10(r))-1)}function dc(i,e){return We(i.step)?null:new nv(i.step,e)}function pc(i){return!We(i.max)&&!We(i.min)?new sa({max:i.max,min:i.min}):!We(i.max)||!We(i.min)?new av({max:i.max,min:i.min}):null}function mc(i,e){var t,r,a;return{formatter:(t=i.format)!==null&&t!==void 0?t:Ut(Dv(i,e)),keyScale:(r=i.keyScale)!==null&&r!==void 0?r:hc(i),pointerScale:(a=i.pointerScale)!==null&&a!==void 0?a:uc(i,e)}}function fc(i){return{format:i.optional.function,keyScale:i.optional.number,max:i.optional.number,min:i.optional.number,pointerScale:i.optional.number,step:i.optional.number}}function bs(i){return{constraint:i.constraint,textProps:Pe.fromObject(mc(i.params,i.initialValue))}}class nr{constructor(e){this.controller=e}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(e){this.controller.viewProps.set("disabled",e)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(e){this.controller.viewProps.set("hidden",e)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(e){return this.controller.importState(e)}exportState(){return this.controller.exportState()}}class nn{constructor(e){this.target=e}}class ca extends nn{constructor(e,t,r){super(e),this.value=t,this.last=r??!0}}class Iv extends nn{constructor(e,t){super(e),this.expanded=t}}class Nv extends nn{constructor(e,t){super(e),this.index=t}}class Ov extends nn{constructor(e,t){super(e),this.native=t}}class ha extends nr{constructor(e){super(e),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new nt,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(e){this.controller.tag=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.controller.value.fetch()}onValueChange_(e){const t=this.controller.value;this.emitter_.emit("change",new ca(this,t.binding.target.read(),e.options.last))}}class Fv{constructor(e,t){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t,this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new nt}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function Vv(i){if(!("binding"in i))return!1;const e=i.binding;return gs(e)&&"read"in e&&"write"in e}function kv(i,e){return Object.keys(e).reduce((r,a)=>{if(r===void 0)return;const n=e[a],s=n(i[a]);return s.succeeded?Object.assign(Object.assign({},r),{[a]:s.value}):void 0},{})}function Bv(i,e){return i.reduce((t,r)=>{if(t===void 0)return;const a=e(r);if(!(!a.succeeded||a.value===void 0))return[...t,a.value]},[])}function zv(i){return i===null?!1:typeof i=="object"}function yi(i){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=i(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function gc(i){return{custom:e=>yi(e)(i),boolean:yi(e=>typeof e=="boolean"?e:void 0)(i),number:yi(e=>typeof e=="number"?e:void 0)(i),string:yi(e=>typeof e=="string"?e:void 0)(i),function:yi(e=>typeof e=="function"?e:void 0)(i),constant:e=>yi(t=>t===e?e:void 0)(i),raw:yi(e=>e)(i),object:e=>yi(t=>{if(zv(t))return kv(t,e)})(i),array:e=>yi(t=>{if(Array.isArray(t))return Bv(t,e)})(i)}}const xs={optional:gc(!0),required:gc(!1)};function Je(i,e){const t=e(xs),r=xs.required.object(t)(i);return r.succeeded?r.value:void 0}function kt(i,e,t,r){if(e&&!e(i))return!1;const a=Je(i,t);return a?r(a):!1}function Bt(i,e){var t;return ar((t=i==null?void 0:i())!==null&&t!==void 0?t:{},e)}function sr(i){return"value"in i}function vc(i){if(!ms(i)||!("binding"in i))return!1;const e=i.binding;return gs(e)}const si="http://www.w3.org/2000/svg";function sn(i){i.offsetHeight}function Hv(i,e){const t=i.style.transition;i.style.transition="none",e(),i.style.transition=t}function ys(i){return i.ontouchstart!==void 0}function Gv(){return globalThis}function Wv(){return Gv().document}function jv(i){const e=i.ownerDocument.defaultView;return e&&"document"in e?i.getContext("2d",{willReadFrequently:!0}):null}const Xv={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function on(i,e){const t=i.createElementNS(si,"svg");return t.innerHTML=Xv[e],t}function _c(i,e,t){i.insertBefore(e,i.children[t])}function Ms(i){i.parentElement&&i.parentElement.removeChild(i)}function bc(i){for(;i.children.length>0;)i.removeChild(i.children[0])}function qv(i){for(;i.childNodes.length>0;)i.removeChild(i.childNodes[0])}function xc(i){return i.relatedTarget?i.relatedTarget:"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function Mi(i,e){i.emitter.on("change",t=>{e(t.rawValue)}),e(i.rawValue)}function oi(i,e,t){Mi(i.value(e),t)}const Kv="tp";function Fe(i){return(e,t)=>[Kv,"-",i,"v",e?`_${e}`:"",t?`-${t}`:""].join("")}const ua=Fe("lbl");function Yv(i,e){const t=i.createDocumentFragment();return e.split(`
`).map(r=>i.createTextNode(r)).forEach((r,a)=>{a>0&&t.appendChild(i.createElement("br")),t.appendChild(r)}),t}class yc{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ua()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ua("l")),oi(t.props,"label",n=>{We(n)?this.element.classList.add(ua(void 0,"nol")):(this.element.classList.remove(ua(void 0,"nol")),qv(r),r.appendChild(Yv(e,n)))}),this.element.appendChild(r),this.labelElement=r;const a=e.createElement("div");a.classList.add(ua("v")),this.element.appendChild(a),this.valueElement=a}}class Mc{constructor(e,t){this.props=t.props,this.valueController=t.valueController,this.viewProps=t.valueController.viewProps,this.view=new yc(e,{props:t.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(e){return kt(e,null,t=>({label:t.optional.string}),t=>(this.props.set("label",t.label),!0))}exportProps(){return Bt(null,{label:this.props.get("label")})}}function Zv(){return["veryfirst","first","last","verylast"]}const wc=Fe(""),Sc={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ln{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Zv().forEach(r=>{t.classList.remove(wc(void 0,Sc[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(wc(void 0,Sc[r]))})}),this.viewProps.handleDispose(()=>{Ms(t)})}get parent(){return this.parent_}set parent(e){this.parent_=e,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(e){return kt(e,null,t=>({disabled:t.required.boolean,hidden:t.required.boolean}),t=>(this.viewProps.importState(t),!0))}exportState(){return Bt(null,Object.assign({},this.viewProps.exportState()))}}class or extends ln{constructor(e,t){if(t.value!==t.valueController.value)throw et.shouldNeverHappen();const r=t.valueController.viewProps,a=new Mc(e,{blade:t.blade,props:t.props,valueController:t.valueController});super(Object.assign(Object.assign({},t),{view:new yc(e,{props:t.props,viewProps:r}),viewProps:r})),this.labelController=a,this.value=t.value,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(e){return kt(e,t=>{var r,a,n;return super.importState(t)&&this.labelController.importProps(t)&&((n=(a=(r=this.valueController).importProps)===null||a===void 0?void 0:a.call(r,e))!==null&&n!==void 0?n:!0)},t=>({value:t.optional.raw}),t=>(t.value&&(this.value.rawValue=t.value),!0))}exportState(){var e,t,r;return Bt(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(r=(t=(e=this.valueController).exportProps)===null||t===void 0?void 0:t.call(e))!==null&&r!==void 0?r:{}))}}function Ec(i){const e=Object.assign({},i);return delete e.value,e}class Tc extends or{constructor(e,t){super(e,t),this.tag=t.tag}importState(e){return kt(e,t=>super.importState(Ec(e)),t=>({tag:t.optional.string}),t=>(this.tag=t.tag,!0))}exportState(){return Bt(()=>Ec(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function $v(i){return sr(i)&&vc(i.value)}class Jv extends Tc{importState(e){return kt(e,t=>super.importState(t),t=>({binding:t.required.object({value:t.required.raw})}),t=>(this.value.binding.inject(t.binding.value),this.value.fetch(),!0))}}function Qv(i){return sr(i)&&Vv(i.value)}function Cc(i,e){for(;i.length<e;)i.push(void 0)}function e_(i){const e=[];return Cc(e,i),e}function t_(i){const e=i.indexOf(void 0);return e<0?i:i.slice(0,e)}function i_(i,e){const t=[...t_(i),e];return t.length>i.length?t.splice(0,t.length-i.length):Cc(t,i.length),t}class r_{constructor(e){this.emitter=new nt,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e.binding,this.value_=Ye(e_(e.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=i_(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function a_(i){if(!("binding"in i))return!1;const e=i.binding;return gs(e)&&"read"in e&&!("write"in e)}class n_ extends Tc{exportState(){return Bt(()=>super.exportState(),{binding:{readonly:!0}})}}function s_(i){return sr(i)&&a_(i.value)}class o_ extends nr{get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get title(){var e;return(e=this.controller.buttonController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.buttonController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller.buttonController.emitter.on(e,a=>{r(new Ov(this,a.nativeEvent))}),this}off(e,t){return this.controller.buttonController.emitter.off(e,t),this}}function l_(i,e,t){t?i.classList.add(e):i.classList.remove(e)}function Vr(i,e){return t=>{l_(i,e,t)}}function ws(i,e){Mi(i,t=>{e.textContent=t??""})}const Ss=Fe("btn");class c_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ss()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(Ss("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const a=e.createElement("div");a.classList.add(Ss("t")),ws(t.props.value("title"),a),this.buttonElement.appendChild(a)}}class h_{constructor(e,t){this.emitter=new nt,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new c_(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(e){return kt(e,null,t=>({title:t.optional.string}),t=>(this.props.set("title",t.title),!0))}exportProps(){return Bt(null,{title:this.props.get("title")})}onClick_(e){this.emitter.emit("click",{nativeEvent:e,sender:this})}}class Ac extends ln{constructor(e,t){const r=new h_(e,{props:t.buttonProps,viewProps:t.viewProps}),a=new Mc(e,{blade:t.blade,props:t.labelProps,valueController:r});super({blade:t.blade,view:a.view,viewProps:t.viewProps}),this.buttonController=r,this.labelController=a}importState(e){return kt(e,t=>super.importState(t)&&this.buttonController.importProps(t)&&this.labelController.importProps(t),()=>({}),()=>!0)}exportState(){return Bt(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class Rc{constructor(e){const[t,r]=e.split("-"),a=t.split(".");this.major=parseInt(a[0],10),this.minor=parseInt(a[1],10),this.patch=parseInt(a[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}const kr=new Rc("2.0.4");function Et(i){return Object.assign({core:kr},i)}const u_=Et({id:"button",type:"blade",accept(i){const e=Je(i,t=>({title:t.required.string,view:t.required.constant("button"),label:t.optional.string}));return e?{params:e}:null},controller(i){return new Ac(i.document,{blade:i.blade,buttonProps:Pe.fromObject({title:i.params.title}),labelProps:Pe.fromObject({label:i.params.label}),viewProps:i.viewProps})},api(i){return i.controller instanceof Ac?new o_(i.controller):null}});function d_(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function p_(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function m_(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}function f_(i){return ms(i)?"refresh"in i&&typeof i.refresh=="function":!1}function g_(i,e){if(!bn.isBindable(i))throw et.notBindable();return new bn(i,e)}class v_{constructor(e,t){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=e,this.emitter_=new nt,this.pool_=t,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(e=>this.pool_.createApi(e))}addBinding(e,t,r){const a=r??{},n=this.controller_.element.ownerDocument,s=this.pool_.createBinding(n,g_(e,t),a),o=this.pool_.createBindingApi(s);return this.add(o,a.index)}addFolder(e){return p_(this,e)}addButton(e){return d_(this,e)}addTab(e){return m_(this,e)}add(e,t){const r=e.controller;return this.controller_.rack.add(r,t),e}remove(e){this.controller_.rack.remove(e.controller)}addBlade(e){const t=this.controller_.element.ownerDocument,r=this.pool_.createBlade(t,e),a=this.pool_.createApi(r);return this.add(a,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.children.forEach(e=>{f_(e)&&e.refresh()})}onRackValueChange_(e){const t=e.bladeController,r=this.pool_.createApi(t),a=vc(t.value)?t.value.binding:null;this.emitter_.emit("change",new ca(r,a?a.target.read():t.value.rawValue,e.options.last))}}class Es extends nr{constructor(e,t){super(e),this.rackApi_=new v_(e.rackController,t)}refresh(){this.rackApi_.refresh()}}class Ts extends ln{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}importState(e){return kt(e,t=>super.importState(t),t=>({children:t.required.array(t.required.raw)}),t=>this.rackController.rack.children.every((r,a)=>r.importState(t.children[a])))}exportState(){return Bt(()=>super.exportState(),{children:this.rackController.rack.children.map(e=>e.exportState())})}}function Cs(i){return"rackController"in i}class __{constructor(e){this.emitter=new nt,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw et.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const a=this.extract_(e);a&&(a.emitter.on("add",this.onSubListAdd_),a.emitter.on("remove",this.onSubListRemove_),a.allItems().forEach(n=>{this.cache_.add(n)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.allItems().forEach(a=>{this.cache_.delete(a)}),r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}function b_(i,e){for(let t=0;t<i.length;t++){const r=i[t];if(sr(r)&&r.value===e)return r}return null}function x_(i){return Cs(i)?i.rackController.rack.bcSet_:null}class y_{constructor(e){var t,r;this.emitter=new nt,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new __(x_),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),e.parent=this,this.bcSet_.add(e,t)}remove(e){e.parent=null,this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,root:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),sr(r))r.value.emitter.on("change",this.onChildValueChange_);else if(Cs(r)){const a=r.rackController.rack;if(a){const n=a.emitter;n.on("layout",this.onRackLayout_),n.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,root:t,sender:this}),!t)return;const r=e.item;if(sr(r))r.value.emitter.off("change",this.onChildValueChange_);else if(Cs(r)){const a=r.rackController.rack;if(a){const n=a.emitter;n.off("layout",this.onRackLayout_),n.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const e=this.bcSet_.items.filter(a=>!a.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(a=>{const n=[];a===t&&(n.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&n.push("veryfirst")),a===r&&(n.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&n.push("verylast")),a.blade.set("positions",n)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(e){const t=b_(this.find(sr),e.sender);if(!t)throw et.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:t,options:e.options,sender:this})}onRackLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(e){this.emitter.emit("valuechange",{bladeController:e.bladeController,options:e.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class As{constructor(e){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=e.element,this.viewProps=e.viewProps;const t=new y_({blade:e.root?void 0:e.blade,viewProps:e.viewProps});t.emitter.on("add",this.onRackAdd_),t.emitter.on("remove",this.onRackRemove_),this.rack=t,this.viewProps.handleDispose(()=>{for(let r=this.rack.children.length-1;r>=0;r--)this.rack.children[r].viewProps.set("disposed",!0)})}onRackAdd_(e){e.root&&_c(this.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.root&&Ms(e.bladeController.view.element)}}function Br(){return new Pe({positions:Ye([],{equals:Jg})})}class Ca extends Pe{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=Pe.createCore(t);return new Ca(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!We(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};oi(this,"expanded",r),oi(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function M_(i,e){let t=0;return Hv(e,()=>{i.set("expandedHeight",null),i.set("temporaryExpanded",!0),sn(e),t=e.clientHeight,i.set("temporaryExpanded",null),sn(e)}),t}function Pc(i,e){e.style.height=i.styleHeight}function Rs(i,e){i.value("expanded").emitter.on("beforechange",()=>{if(i.set("completed",!1),We(i.get("expandedHeight"))){const t=M_(i,e);t>0&&i.set("expandedHeight",t)}i.set("shouldFixHeight",!0),sn(e)}),i.emitter.on("change",()=>{Pc(i,e)}),Pc(i,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&i.cleanUpTransition()})}class Lc extends Es{constructor(e,t){super(e,t),this.emitter_=new nt,this.controller.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",new Iv(this,r.sender.rawValue))}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",r)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(e){this.controller.foldable.set("expanded",e)}get title(){return this.controller.props.get("title")}set title(e){this.controller.props.set("title",e)}get children(){return this.rackApi_.children}addBinding(e,t,r){return this.rackApi_.addBinding(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const Uc=Fe("cnt");class w_{constructor(e,t){var r;this.className_=Fe((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Uc()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),oi(this.foldable_,"completed",Vr(this.element,this.className_(void 0,"cpl")));const a=e.createElement("button");a.classList.add(this.className_("b")),oi(t.props,"title",c=>{We(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(a),this.element.appendChild(a),this.buttonElement=a;const n=e.createElement("div");n.classList.add(this.className_("i")),this.element.appendChild(n);const s=e.createElement("div");s.classList.add(this.className_("t")),ws(t.props.value("title"),s),this.buttonElement.appendChild(s),this.titleElement=s;const o=e.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const l=e.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class Ps extends Ts{constructor(e,t){var r;const a=Ca.create((r=t.expanded)!==null&&r!==void 0?r:!0),n=new w_(e,{foldable:a,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new As({blade:t.blade,element:n.containerElement,root:t.root,viewProps:t.viewProps}),view:n})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=a,Rs(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(e){return kt(e,t=>super.importState(t),t=>({expanded:t.required.boolean,title:t.optional.string}),t=>(this.foldable.set("expanded",t.expanded),this.props.set("title",t.title),!0))}exportState(){return Bt(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const S_=Et({id:"folder",type:"blade",accept(i){const e=Je(i,t=>({title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean}));return e?{params:e}:null},controller(i){return new Ps(i.document,{blade:i.blade,expanded:i.params.expanded,props:Pe.fromObject({title:i.params.title}),viewProps:i.viewProps})},api(i){return i.controller instanceof Ps?new Lc(i.controller,i.pool):null}}),E_=Fe("");function Dc(i,e){return Vr(i,E_(void 0,e))}class Ei extends Pe{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=rv(Ye(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,a;const n=e??{};return new Ei(Pe.createCore({disabled:(t=n.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=n.hidden)!==null&&r!==void 0?r:!1,parent:(a=n.parent)!==null&&a!==void 0?a:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){Mi(this.globalDisabled_,Dc(e,"disabled")),oi(this,"hidden",Dc(e,"hidden"))}bindDisabled(e){Mi(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){Mi(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}importState(e){this.set("disabled",e.disabled),this.set("hidden",e.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Ic=Fe("tbp");class T_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ic()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Ic("c")),this.element.appendChild(r),this.containerElement=r}}const da=Fe("tbi");class C_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(da()),t.viewProps.bindClassModifiers(this.element),oi(t.props,"selected",n=>{n?this.element.classList.add(da(void 0,"sel")):this.element.classList.remove(da(void 0,"sel"))});const r=e.createElement("button");r.classList.add(da("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const a=e.createElement("div");a.classList.add(da("t")),ws(t.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a}}class A_{constructor(e,t){this.emitter=new nt,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new C_(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ls extends Ts{constructor(e,t){const r=new T_(e,{viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new As({blade:t.blade,element:r.containerElement,viewProps:t.viewProps}),view:r})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new A_(e,{props:t.itemProps,viewProps:Ei.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=t.props,oi(this.props,"selected",a=>{this.itemController.props.set("selected",a),this.viewProps.set("hidden",!a)})}get itemController(){return this.ic_}importState(e){return kt(e,t=>super.importState(t),t=>({selected:t.required.boolean,title:t.required.string}),t=>(this.ic_.props.set("selected",t.selected),this.ic_.props.set("title",t.title),!0))}exportState(){return Bt(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class R_ extends Es{constructor(e,t){super(e,t),this.emitter_=new nt,this.onSelect_=this.onSelect_.bind(this),this.pool_=t,this.rackApi_.on("change",r=>{this.emitter_.emit("change",r)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(e){const t=this.controller.view.element.ownerDocument,r=new Ls(t,{blade:Br(),itemProps:Pe.fromObject({selected:!1,title:e.title}),props:Pe.fromObject({selected:!1}),viewProps:Ei.create()}),a=this.pool_.createApi(r);return this.rackApi_.add(a,e.index)}removePage(e){this.rackApi_.remove(this.rackApi_.children[e])}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}onSelect_(e){this.emitter_.emit("select",new Nv(this,e.rawValue))}}class P_ extends Es{get title(){var e;return(e=this.controller.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.itemController.props.set("title",e)}get selected(){return this.controller.props.get("selected")}set selected(e){this.controller.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBinding(e,t,r){return this.rackApi_.addBinding(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}const Nc=-1;class L_{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Ye(!0),this.selectedIndex=Ye(Nc),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Nc,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,a)=>{r.rawValue=a===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const pa=Fe("tab");class U_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pa(),Uc()),t.viewProps.bindClassModifiers(this.element),Mi(t.empty,Vr(this.element,pa(void 0,"nop")));const r=e.createElement("div");r.classList.add(pa("t")),this.element.appendChild(r),this.itemsElement=r;const a=e.createElement("div");a.classList.add(pa("i")),this.element.appendChild(a);const n=e.createElement("div");n.classList.add(pa("c")),this.element.appendChild(n),this.contentsElement=n}}class Oc extends Ts{constructor(e,t){const r=new L_,a=new U_(e,{empty:r.empty,viewProps:t.viewProps});super({blade:t.blade,rackController:new As({blade:t.blade,element:a.contentsElement,viewProps:t.viewProps}),view:a}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const n=this.rackController.rack;n.emitter.on("add",this.onRackAdd_),n.emitter.on("remove",this.onRackRemove_),this.tab=r}add(e,t){this.rackController.rack.add(e,t)}remove(e){this.rackController.rack.remove(this.rackController.rack.children[e])}onRackAdd_(e){if(!e.root)return;const t=e.bladeController;_c(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.tab.add(t.props.value("selected"))}onRackRemove_(e){if(!e.root)return;const t=e.bladeController;Ms(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.tab.remove(t.props.value("selected"))}}const Fc=Et({id:"tab",type:"blade",accept(i){const e=Je(i,t=>({pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")}));return!e||e.pages.length===0?null:{params:e}},controller(i){const e=new Oc(i.document,{blade:i.blade,viewProps:i.viewProps});return i.params.pages.forEach(t=>{const r=new Ls(i.document,{blade:Br(),itemProps:Pe.fromObject({selected:!1,title:t.title}),props:Pe.fromObject({selected:!1}),viewProps:Ei.create()});e.add(r)}),e},api(i){return i.controller instanceof Oc?new R_(i.controller,i.pool):i.controller instanceof Ls?new P_(i.controller,i.pool):null}});function D_(i,e){const t=i.accept(e.params);if(!t)return null;const r=Je(e.params,a=>({disabled:a.optional.boolean,hidden:a.optional.boolean}));return i.controller({blade:Br(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r==null?void 0:r.disabled,hidden:r==null?void 0:r.hidden}),viewProps:Ei.create({disabled:r==null?void 0:r.disabled,hidden:r==null?void 0:r.hidden})})}class Us extends ha{get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}}class I_{constructor(){this.disabled=!1,this.emitter=new nt}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class N_{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new nt,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ma{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function cn(i,e){if(i instanceof e)return i;if(i instanceof ma){const t=i.constraints.reduce((r,a)=>r||(a instanceof e?a:null),null);if(t)return t}return null}class fa{constructor(e){this.values=Pe.fromObject({options:e})}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(r=>r.value===e).length>0?e:t[0].value}}function ga(i){var e;const t=xs;if(Array.isArray(i))return(e=Je({items:i},r=>({items:r.required.array(r.required.object({text:r.required.string,value:r.required.raw}))})))===null||e===void 0?void 0:e.items;if(typeof i=="object")return t.required.raw(i).value}function Ds(i){if(Array.isArray(i))return i;const e=[];return Object.keys(i).forEach(t=>{e.push({text:t,value:i[t]})}),e}function Is(i){return We(i)?null:new fa(Ds(i))}const Ns=Fe("lst");class O_{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Ns()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(Ns("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const a=e.createElement("div");a.classList.add(Ns("m")),a.appendChild(on(e,"dropdown")),this.element.appendChild(a),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,oi(this.props_,"options",n=>{bc(this.selectElement),n.forEach(s=>{const o=e.createElement("option");o.textContent=s.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Ni{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new O_(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}importProps(e){return kt(e,null,t=>({options:t.required.custom(ga)}),t=>(this.props.set("options",Ds(t.options)),!0))}exportProps(){return Bt(null,{options:this.props.get("options")})}}const Vc=Fe("pop");class F_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Vc()),t.viewProps.bindClassModifiers(this.element),Mi(t.shows,Vr(this.element,Vc(void 0,"v")))}}class kc{constructor(e,t){this.shows=Ye(!1),this.viewProps=t.viewProps,this.view=new F_(e,{shows:this.shows,viewProps:this.viewProps})}}const Bc=Fe("txt");class V_{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Bc()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(Bc("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class va{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new V_(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget.value,r=this.parser_(t);We(r)||(this.value.rawValue=r),this.view.refresh()}}function k_(i){return String(i)}function zc(i){return i==="false"?!1:!!i}function Hc(i){return k_(i)}function B_(i){return e=>i.reduce((t,r)=>t!==null?t:r(e),null)}const z_=Ut(0);function hn(i){return z_(i)+"%"}function Gc(i){return String(i)}function Os(i){return i}function zr({primary:i,secondary:e,forward:t,backward:r}){let a=!1;function n(s){a||(a=!0,s(),a=!1)}i.emitter.on("change",s=>{n(()=>{e.setRawValue(t(i.rawValue,e.rawValue),s.options)})}),e.emitter.on("change",s=>{n(()=>{i.setRawValue(r(i.rawValue,e.rawValue),s.options)}),n(()=>{e.setRawValue(t(i.rawValue,e.rawValue),s.options)})}),n(()=>{e.setRawValue(t(i.rawValue,e.rawValue),{forceEmit:!1,last:!0})})}function Dt(i,e){const t=i*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function _a(i){return{altKey:i.altKey,downKey:i.key==="ArrowDown",shiftKey:i.shiftKey,upKey:i.key==="ArrowUp"}}function wi(i){return{altKey:i.altKey,downKey:i.key==="ArrowLeft",shiftKey:i.shiftKey,upKey:i.key==="ArrowRight"}}function H_(i){return i==="ArrowUp"||i==="ArrowDown"}function Wc(i){return H_(i)||i==="ArrowLeft"||i==="ArrowRight"}function Fs(i,e){var t,r;const a=e.ownerDocument.defaultView,n=e.getBoundingClientRect();return{x:i.pageX-(((t=a&&a.scrollX)!==null&&t!==void 0?t:0)+n.left),y:i.pageY-(((r=a&&a.scrollY)!==null&&r!==void 0?r:0)+n.top)}}class lr{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new nt,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,a=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-a.left,y:r.clientY-a.top}:void 0),sender:this,shiftKey:e.shiftKey})}}const Xt=Fe("txt");class G_{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Xt(),Xt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Xt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Xt("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Xt()),this.inputElement.classList.add(Xt("i"));const a=e.createElement("div");a.classList.add(Xt("k")),this.element.appendChild(a),this.knobElement=a;const n=e.createElementNS(si,"svg");n.classList.add(Xt("g")),this.knobElement.appendChild(n);const s=e.createElementNS(si,"path");s.classList.add(Xt("gb")),n.appendChild(s),this.guideBodyElem_=s;const o=e.createElementNS(si,"path");o.classList.add(Xt("gh")),n.appendChild(o),this.guideHeadElem_=o;const l=e.createElement("div");l.classList.add(Fe("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Xt(void 0,"drg"));return}this.element.classList.add(Xt(void 0,"drg"));const t=e.rawValue/this.props_.get("pointerScale"),r=t+(t>0?-1:t<0?1:0),a=ct(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+a},0 L${r},4 L${r+a},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const n=this.props_.get("formatter");this.tooltipElem_.textContent=n(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class ba{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=Ye(null),this.view=new G_(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const a=new lr(this.view.knobElement);a.emitter.on("down",this.onPointerDown_),a.emitter.on("move",this.onPointerMove_),a.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const a=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("min"),n=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("max");let s=e;return a!==void 0&&(s=Math.max(s,a)),n!==void 0&&(s=Math.min(s,n)),s}onInputChange_(e){const t=e.currentTarget.value,r=this.parser_(t);We(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(e){const t=Dt(this.props.get("keyScale"),_a(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Dt(this.props.get("keyScale"),_a(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("pointerScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Vs=Fe("sld");class W_{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Vs("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const a=e.createElement("div");a.classList.add(Vs("k")),this.trackElement.appendChild(a),this.knobElement=a,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ct(ze(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class j_{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new W_(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new lr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(ze(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("min"),this.props.get("max")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Dt(this.props.get("keyScale"),wi(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Dt(this.props.get("keyScale"),wi(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ks=Fe("sldtxt");class X_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ks());const r=e.createElement("div");r.classList.add(ks("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(ks("t")),this.textView_=t.textView,a.appendChild(this.textView_.element),this.element.appendChild(a)}}class un{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new j_(e,{props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new ba(e,{parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new X_(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(e){return kt(e,null,t=>({max:t.required.number,min:t.required.number}),t=>{const r=this.sliderC_.props;return r.set("max",t.max),r.set("min",t.min),!0})}exportProps(){const e=this.sliderC_.props;return Bt(null,{max:e.get("max"),min:e.get("min")})}}function jc(i){return{sliderProps:new Pe({keyScale:i.keyScale,max:i.max,min:i.min}),textProps:new Pe({formatter:Ye(i.formatter),keyScale:i.keyScale,pointerScale:Ye(i.pointerScale)})}}const q_={containerUnitSize:"cnt-usz"};function Xc(i){return`--${q_[i]}`}function xa(i){return fc(i)}function Oi(i){if(fs(i))return Je(i,xa)}function Si(i,e){if(!i)return;const t=[],r=dc(i,e);r&&t.push(r);const a=pc(i);return a&&t.push(a),new ma(t)}function K_(i){return i?i.major===kr.major:!1}function qc(i){if(i==="inline"||i==="popup")return i}function ya(i,e){i.write(e)}const dn=Fe("ckb");class Y_{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(dn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(dn("l")),this.element.appendChild(r),this.labelElement=r;const a=e.createElement("input");a.classList.add(dn("i")),a.type="checkbox",this.labelElement.appendChild(a),this.inputElement=a,t.viewProps.bindDisabled(this.inputElement);const n=e.createElement("div");n.classList.add(dn("w")),this.labelElement.appendChild(n);const s=on(e,"check");n.appendChild(s),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Z_{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Y_(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked,e.preventDefault(),e.stopPropagation()}onLabelMouseDown_(e){e.preventDefault()}}function $_(i){const e=[],t=Is(i.options);return t&&e.push(t),new ma(e)}const J_=Et({id:"input-bool",type:"input",accept:(i,e)=>{if(typeof i!="boolean")return null;const t=Je(e,r=>({options:r.optional.custom(ga),readonly:r.optional.constant(!1)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>zc,constraint:i=>$_(i.params),writer:i=>ya},controller:i=>{const e=i.document,t=i.value,r=i.constraint,a=r&&cn(r,fa);return a?new Ni(e,{props:new Pe({options:a.values.value("options")}),value:t,viewProps:i.viewProps}):new Z_(e,{value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="boolean"?null:i.controller.valueController instanceof Ni?new Us(i.controller):null}}),cr=Fe("col");class Q_{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(cr()),t.foldable.bindExpandedClass(this.element,cr(void 0,"expanded")),oi(t.foldable,"completed",Vr(this.element,cr(void 0,"cpl")));const r=e.createElement("div");r.classList.add(cr("h")),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(cr("s")),r.appendChild(a),this.swatchElement=a;const n=e.createElement("div");if(n.classList.add(cr("t")),r.appendChild(n),this.textElement=n,t.pickerLayout==="inline"){const s=e.createElement("div");s.classList.add(cr("p")),this.element.appendChild(s),this.pickerElement=s}else this.pickerElement=null}}function e0(i,e,t){const r=ct(i/255,0,1),a=ct(e/255,0,1),n=ct(t/255,0,1),s=Math.max(r,a,n),o=Math.min(r,a,n),l=s-o;let c=0,h=0;const d=(o+s)/2;return l!==0&&(h=l/(1-Math.abs(s+o-1)),r===s?c=(a-n)/l:a===s?c=2+(n-r)/l:c=4+(r-a)/l,c=c/6+(c<0?1:0)),[c*360,h*100,d*100]}function t0(i,e,t){const r=(i%360+360)%360,a=ct(e/100,0,1),n=ct(t/100,0,1),s=(1-Math.abs(2*n-1))*a,o=s*(1-Math.abs(r/60%2-1)),l=n-s/2;let c,h,d;return r>=0&&r<60?[c,h,d]=[s,o,0]:r>=60&&r<120?[c,h,d]=[o,s,0]:r>=120&&r<180?[c,h,d]=[0,s,o]:r>=180&&r<240?[c,h,d]=[0,o,s]:r>=240&&r<300?[c,h,d]=[o,0,s]:[c,h,d]=[s,0,o],[(c+l)*255,(h+l)*255,(d+l)*255]}function i0(i,e,t){const r=ct(i/255,0,1),a=ct(e/255,0,1),n=ct(t/255,0,1),s=Math.max(r,a,n),o=Math.min(r,a,n),l=s-o;let c;l===0?c=0:s===r?c=60*(((a-n)/l%6+6)%6):s===a?c=60*((n-r)/l+2):c=60*((r-a)/l+4);const h=s===0?0:l/s,d=s;return[c,h*100,d*100]}function Kc(i,e,t){const r=cc(i,360),a=ct(e/100,0,1),n=ct(t/100,0,1),s=n*a,o=s*(1-Math.abs(r/60%2-1)),l=n-s;let c,h,d;return r>=0&&r<60?[c,h,d]=[s,o,0]:r>=60&&r<120?[c,h,d]=[o,s,0]:r>=120&&r<180?[c,h,d]=[0,s,o]:r>=180&&r<240?[c,h,d]=[0,o,s]:r>=240&&r<300?[c,h,d]=[o,0,s]:[c,h,d]=[s,0,o],[(c+l)*255,(h+l)*255,(d+l)*255]}function r0(i,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[i,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function a0(i,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[i,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function li(i){return[i[0],i[1],i[2]]}function pn(i,e){return[i[0],i[1],i[2],e]}const n0={hsl:{hsl:(i,e,t)=>[i,e,t],hsv:r0,rgb:t0},hsv:{hsl:a0,hsv:(i,e,t)=>[i,e,t],rgb:Kc},rgb:{hsl:e0,hsv:i0,rgb:(i,e,t)=>[i,e,t]}};function Hr(i,e){return[e==="float"?1:i==="rgb"?255:360,e==="float"?1:i==="rgb"?255:100,e==="float"?1:i==="rgb"?255:100]}function s0(i,e){return i===e?e:cc(i,e)}function Yc(i,e,t){var r;const a=Hr(e,t);return[e==="rgb"?ct(i[0],0,a[0]):s0(i[0],a[0]),ct(i[1],0,a[1]),ct(i[2],0,a[2]),ct((r=i[3])!==null&&r!==void 0?r:1,0,1)]}function Zc(i,e,t,r){const a=Hr(e,t),n=Hr(e,r);return i.map((s,o)=>s/a[o]*n[o])}function $c(i,e,t){const r=Zc(i,e.mode,e.type,"int"),a=n0[e.mode][t.mode](...r);return Zc(a,t.mode,"int",t.type)}class Be{static black(){return new Be([0,0,0],"rgb")}constructor(e,t){this.type="int",this.mode=t,this.comps_=Yc(e,t,this.type)}getComponents(e){return pn($c(li(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Fi=Fe("colp");class o0{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Fi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Fi("hsv"));const a=e.createElement("div");a.classList.add(Fi("sv")),this.svPaletteView_=t.svPaletteView,a.appendChild(this.svPaletteView_.element),r.appendChild(a);const n=e.createElement("div");n.classList.add(Fi("h")),this.hPaletteView_=t.hPaletteView,n.appendChild(this.hPaletteView_.element),r.appendChild(n),this.element.appendChild(r);const s=e.createElement("div");if(s.classList.add(Fi("rgb")),this.textsView_=t.textsView,s.appendChild(this.textsView_.element),this.element.appendChild(s),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const o=e.createElement("div");o.classList.add(Fi("a"));const l=e.createElement("div");l.classList.add(Fi("ap")),l.appendChild(this.alphaViews_.palette.element),o.appendChild(l);const c=e.createElement("div");c.classList.add(Fi("at")),c.appendChild(this.alphaViews_.text.element),o.appendChild(c),this.element.appendChild(o)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function l0(i){return i==="int"?"int":i==="float"?"float":void 0}function Bs(i){return Je(i,e=>({color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(l0)}),expanded:e.optional.boolean,picker:e.optional.custom(qc),readonly:e.optional.constant(!1)}))}function hr(i){return i?.1:1}function Jc(i){var e;return(e=i.color)===null||e===void 0?void 0:e.type}class zs{constructor(e,t){this.type="float",this.mode=t,this.comps_=Yc(e,t,this.type)}getComponents(e){return pn($c(li(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const c0={int:(i,e)=>new Be(i,e),float:(i,e)=>new zs(i,e)};function Hs(i,e,t){return c0[t](i,e)}function h0(i){return i.type==="float"}function u0(i){return i.type==="int"}function d0(i){const e=i.getComponents(),t=Hr(i.mode,"int");return new Be([Math.round(ze(e[0],0,1,0,t[0])),Math.round(ze(e[1],0,1,0,t[1])),Math.round(ze(e[2],0,1,0,t[2])),e[3]],i.mode)}function p0(i){const e=i.getComponents(),t=Hr(i.mode,"int");return new zs([ze(e[0],0,t[0],0,1),ze(e[1],0,t[1],0,1),ze(e[2],0,t[2],0,1),e[3]],i.mode)}function Tt(i,e){if(i.type===e)return i;if(u0(i)&&e==="float")return p0(i);if(h0(i)&&e==="int")return d0(i);throw et.shouldNeverHappen()}function m0(i,e){return i.alpha===e.alpha&&i.mode===e.mode&&i.notation===e.notation&&i.type===e.type}function qt(i,e){const t=i.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(i),e)}const f0={deg:i=>i,grad:i=>i*360/400,rad:i=>i*360/(2*Math.PI),turn:i=>i*360};function Qc(i){const e=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(i);const t=parseFloat(e[1]),r=e[2];return f0[r](t)}function eh(i){const e=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[qt(e[1],255),qt(e[2],255),qt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function g0(i){const e=eh(i);return e?new Be(e,"rgb"):null}function th(i){const e=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[qt(e[1],255),qt(e[2],255),qt(e[3],255),qt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function v0(i){const e=th(i);return e?new Be(e,"rgb"):null}function ih(i){const e=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Qc(e[1]),qt(e[2],100),qt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _0(i){const e=ih(i);return e?new Be(e,"hsl"):null}function rh(i){const e=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Qc(e[1]),qt(e[2],100),qt(e[3],100),qt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function b0(i){const e=rh(i);return e?new Be(e,"hsl"):null}function ah(i){const e=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function x0(i){const e=ah(i);return e?new Be(e,"rgb"):null}function nh(i){const e=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),ze(parseInt(t[4],16),0,255,0,1)]:null}function y0(i){const e=nh(i);return e?new Be(e,"rgb"):null}function sh(i){const e=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function oh(i){return e=>{const t=sh(e);return t?Hs(t,"rgb",i):null}}function lh(i){const e=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ch(i){return e=>{const t=lh(e);return t?Hs(t,"rgb",i):null}}const M0=[{parser:ah,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:nh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:eh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:th,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ih,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:rh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:sh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:lh,result:{alpha:!0,mode:"rgb",notation:"object"}}];function w0(i){return M0.reduce((e,{parser:t,result:r})=>e||(t(i)?r:null),null)}function S0(i,e="int"){const t=w0(i);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}function Ma(i){const e=[x0,y0,g0,v0,_0,b0];i==="int"&&e.push(oh("int"),ch("int")),i==="float"&&e.push(oh("float"),ch("float"));const t=B_(e);return r=>{const a=t(r);return a?Tt(a,i):null}}function E0(i){const e=Ma("int");return typeof i!="string"?Be.black():e(i)??Be.black()}function hh(i){const e=ct(Math.floor(i),0,255).toString(16);return e.length===1?`0${e}`:e}function Gs(i,e="#"){const t=li(i.getComponents("rgb")).map(hh).join("");return`${e}${t}`}function Ws(i,e="#"){const t=i.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(hh).join("");return`${e}${r}`}function uh(i){const e=Ut(0),t=Tt(i,"int");return`rgb(${li(t.getComponents("rgb")).map(r=>e(r)).join(", ")})`}function mn(i){const e=Ut(2),t=Ut(0);return`rgba(${Tt(i,"int").getComponents("rgb").map((r,a)=>(a===3?e:t)(r)).join(", ")})`}function T0(i){const e=[Ut(0),hn,hn],t=Tt(i,"int");return`hsl(${li(t.getComponents("hsl")).map((r,a)=>e[a](r)).join(", ")})`}function C0(i){const e=[Ut(0),hn,hn,Ut(2)];return`hsla(${Tt(i,"int").getComponents("hsl").map((t,r)=>e[r](t)).join(", ")})`}function dh(i,e){const t=Ut(e==="float"?2:0),r=["r","g","b"],a=Tt(i,e);return`{${li(a.getComponents("rgb")).map((n,s)=>`${r[s]}: ${t(n)}`).join(", ")}}`}function A0(i){return e=>dh(e,i)}function ph(i,e){const t=Ut(2),r=Ut(e==="float"?2:0),a=["r","g","b","a"];return`{${Tt(i,e).getComponents("rgb").map((n,s)=>{const o=s===3?t:r;return`${a[s]}: ${o(n)}`}).join(", ")}}`}function R0(i){return e=>ph(e,i)}const P0=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Gs},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ws},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:uh},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:mn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:T0},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:C0},...["int","float"].reduce((i,e)=>[...i,{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:A0(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:R0(e)}],[])];function mh(i){return P0.reduce((e,t)=>e||(m0(t.format,i)?t.stringifier:null),null)}const wa=Fe("apl");class L0{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(wa()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(wa("b")),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(wa("c")),r.appendChild(a),this.colorElem_=a;const n=e.createElement("div");n.classList.add(wa("m")),this.element.appendChild(n),this.markerElem_=n;const s=e.createElement("div");s.classList.add(wa("p")),this.markerElem_.appendChild(s),this.previewElem_=s,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new Be([t[0],t[1],t[2],0],"rgb"),a=new Be([t[0],t[1],t[2],255],"rgb"),n=["to right",mn(r),mn(a)];this.colorElem_.style.background=`linear-gradient(${n.join(",")})`,this.previewElem_.style.backgroundColor=mn(e);const s=ze(t[3],0,1,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class U0{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new L0(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new lr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,a=this.value.rawValue,[n,s,o]=a.getComponents("hsv");this.value.setRawValue(new Be([n,s,o,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Dt(hr(!0),wi(e));if(t===0)return;const r=this.value.rawValue,[a,n,s,o]=r.getComponents("hsv");this.value.setRawValue(new Be([a,n,s,o+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Dt(hr(!0),wi(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Gr=Fe("coltxt");function D0(i){const e=i.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return e.appendChild(t.reduce((r,a)=>{const n=i.createElement("option");return n.textContent=a.text,n.value=a.value,r.appendChild(n),r},i.createDocumentFragment())),e}class I0{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Gr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Gr("m")),this.modeElem_=D0(e),this.modeElem_.classList.add(Gr("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const a=e.createElement("div");a.classList.add(Gr("mm")),a.appendChild(on(e,"dropdown")),r.appendChild(a),this.element.appendChild(r);const n=e.createElement("div");n.classList.add(Gr("w")),this.element.appendChild(n),this.inputsElem_=n,this.inputViews_=t.inputViews,this.applyInputViews_(),Mi(t.mode,s=>{this.modeElem_.value=s})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(e){this.inputViews_=e,this.applyInputViews_()}applyInputViews_(){bc(this.inputsElem_);const e=this.element.ownerDocument;this.inputViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(Gr("c")),r.appendChild(t.element),this.inputsElem_.appendChild(r)})}}function N0(i){return Ut(i==="float"?2:0)}function O0(i,e,t){const r=Hr(i,e)[t];return new sa({min:0,max:r})}function F0(i,e,t){return new ba(i,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",parser:e.parser,props:Pe.fromObject({formatter:N0(e.colorType),keyScale:hr(!1),pointerScale:e.colorType==="float"?.01:1}),value:Ye(0,{constraint:O0(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}function V0(i,e){const t={colorMode:e.colorMode,colorType:e.colorType,parser:xi,viewProps:e.viewProps};return[0,1,2].map(r=>{const a=F0(i,t,r);return zr({primary:e.value,secondary:a.value,forward(n){return Tt(n,e.colorType).getComponents(e.colorMode)[r]},backward(n,s){const o=e.colorMode,l=Tt(n,e.colorType).getComponents(o);l[r]=s;const c=Hs(pn(li(l),l[3]),o,e.colorType);return Tt(c,"int")}}),a})}function k0(i,e){const t=new va(i,{parser:Ma("int"),props:Pe.fromObject({formatter:Gs}),value:Ye(Be.black()),viewProps:e.viewProps});return zr({primary:e.value,secondary:t.value,forward:r=>new Be(li(r.getComponents()),r.mode),backward:(r,a)=>new Be(pn(li(a.getComponents(r.mode)),r.getComponents()[3]),r.mode)}),[t]}function B0(i){return i!=="hex"}class z0{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=Ye(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new I0(e,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t=this.colorMode.rawValue;return B0(t)?V0(e,{colorMode:t,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):k0(e,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(r=>r.view)}}const js=Fe("hpl");class H0{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(js()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(js("c")),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(js("m")),this.element.appendChild(a),this.markerElem_=a,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=uh(new Be([t,100,100],"hsv"));const r=ze(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class G0{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new H0(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new lr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=ze(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),a=this.value.rawValue,[,n,s,o]=a.getComponents("hsv");this.value.setRawValue(new Be([r,n,s,o],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Dt(hr(!1),wi(e));if(t===0)return;const r=this.value.rawValue,[a,n,s,o]=r.getComponents("hsv");this.value.setRawValue(new Be([a+t,n,s,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Dt(hr(!1),wi(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Xs=Fe("svp"),fh=64;class W0{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Xs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=fh,r.width=fh,r.classList.add(Xs("c")),this.element.appendChild(r),this.canvasElement=r;const a=e.createElement("div");a.classList.add(Xs("m")),this.element.appendChild(a),this.markerElem_=a,this.update_()}update_(){const e=jv(this.canvasElement);if(!e)return;const t=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,a=this.canvasElement.height,n=e.getImageData(0,0,r,a),s=n.data;for(let c=0;c<a;c++)for(let h=0;h<r;h++){const d=ze(h,0,r,0,100),p=ze(c,0,a,100,0),f=Kc(t[0],d,p),_=(c*r+h)*4;s[_]=f[0],s[_+1]=f[1],s[_+2]=f[2],s[_+3]=255}e.putImageData(n,0,0);const o=ze(t[1],0,100,0,100);this.markerElem_.style.left=`${o}%`;const l=ze(t[2],0,100,100,0);this.markerElem_.style.top=`${l}%`}onValueChange_(){this.update_()}}class j0{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new W0(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new lr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=ze(e.point.x,0,e.bounds.width,0,100),a=ze(e.point.y,0,e.bounds.height,100,0),[n,,,s]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Be([n,r,a,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Wc(e.key)&&e.preventDefault();const[t,r,a,n]=this.value.rawValue.getComponents("hsv"),s=hr(!1),o=Dt(s,wi(e)),l=Dt(s,_a(e));o===0&&l===0||this.value.setRawValue(new Be([t,r+o,a+l,n],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=hr(!1),r=Dt(t,wi(e)),a=Dt(t,_a(e));r===0&&a===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class X0{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new G0(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new j0(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new U0(e,{value:this.value,viewProps:this.viewProps}),text:new ba(e,{parser:xi,props:Pe.fromObject({pointerScale:.01,keyScale:.1,formatter:Ut(2)}),value:Ye(0,{constraint:new sa({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&zr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.getComponents()[3],backward:(r,a)=>{const n=r.getComponents();return n[3]=a,new Be(n,r.mode)}}),this.textsC_=new z0(e,{colorType:t.colorType,value:this.value,viewProps:this.viewProps}),this.view=new o0(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const qs=Fe("colsw");class q0{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(qs()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(qs("sw")),this.element.appendChild(r),this.swatchElem_=r;const a=e.createElement("button");a.classList.add(qs("b")),t.viewProps.bindDisabled(a),this.element.appendChild(a),this.buttonElement=a,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ws(e)}onValueChange_(){this.update_()}}class K0{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new q0(e,{value:this.value,viewProps:this.viewProps})}}class Ks{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ca.create(t.expanded),this.swatchC_=new K0(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new va(e,{parser:t.parser,props:Pe.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Q_(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new kc(e,{viewProps:this.viewProps}):null;const a=new X0(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});a.view.allFocusableElements.forEach(n=>{n.addEventListener("blur",this.onPopupChildBlur_),n.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=a,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(a.view.element),zr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:n=>n,backward:(n,s)=>s})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Rs(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=xc(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!ys(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Y0(i){return li(i.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Z0(i){return i.getComponents("rgb").reduce((e,t,r)=>{const a=Math.floor(r===3?t*255:t)&255;return e<<8|a},0)>>>0}function $0(i){return new Be([i>>16&255,i>>8&255,i&255],"rgb")}function J0(i){return new Be([i>>24&255,i>>16&255,i>>8&255,ze(i&255,0,255,0,1)],"rgb")}function Q0(i){return typeof i!="number"?Be.black():$0(i)}function eb(i){return typeof i!="number"?Be.black():J0(i)}function fn(i,e){return typeof i!="object"||We(i)?!1:e in i&&typeof i[e]=="number"}function gh(i){return fn(i,"r")&&fn(i,"g")&&fn(i,"b")}function vh(i){return gh(i)&&fn(i,"a")}function _h(i){return gh(i)}function Ys(i,e){if(i.mode!==e.mode||i.type!==e.type)return!1;const t=i.getComponents(),r=e.getComponents();for(let a=0;a<t.length;a++)if(t[a]!==r[a])return!1;return!0}function bh(i){return"a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b]}function tb(i){const e=mh(i);return e?(t,r)=>{ya(t,e(r))}:null}function ib(i){const e=i?Z0:Y0;return(t,r)=>{ya(t,e(r))}}function rb(i,e,t){const r=Tt(e,t).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b),i.writeProperty("a",r.a)}function ab(i,e,t){const r=Tt(e,t).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b)}function nb(i,e){return(t,r)=>{i?rb(t,r,e):ab(t,r,e)}}function sb(i){var e;return!!(!((e=i==null?void 0:i.color)===null||e===void 0)&&e.alpha)}function ob(i){return i?e=>Ws(e,"0x"):e=>Gs(e,"0x")}function lb(i){return"color"in i||i.view==="color"}const cb=Et({id:"input-color-number",type:"input",accept:(i,e)=>{if(typeof i!="number"||!lb(e))return null;const t=Bs(e);return t?{initialValue:i,params:Object.assign(Object.assign({},t),{supportsAlpha:sb(e)})}:null},binding:{reader:i=>i.params.supportsAlpha?eb:Q0,equals:Ys,writer:i=>ib(i.params.supportsAlpha)},controller:i=>{var e,t;return new Ks(i.document,{colorType:"int",expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:ob(i.params.supportsAlpha),parser:Ma("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i.params.supportsAlpha,value:i.value,viewProps:i.viewProps})}});function hb(i,e){if(!_h(i))return Tt(Be.black(),e);if(e==="int"){const t=bh(i);return new Be(t,"rgb")}if(e==="float"){const t=bh(i);return new zs(t,"rgb")}return Tt(Be.black(),"int")}function ub(i){return vh(i)}function db(i){return e=>{const t=hb(e,i);return Tt(t,"int")}}function pb(i,e){return t=>i?ph(t,e):dh(t,e)}const mb=Et({id:"input-color-object",type:"input",accept:(i,e)=>{var t;if(!_h(i))return null;const r=Bs(e);return r?{initialValue:i,params:Object.assign(Object.assign({},r),{colorType:(t=Jc(e))!==null&&t!==void 0?t:"int"})}:null},binding:{reader:i=>db(i.params.colorType),equals:Ys,writer:i=>nb(ub(i.initialValue),i.params.colorType)},controller:i=>{var e,t;const r=vh(i.initialValue);return new Ks(i.document,{colorType:i.params.colorType,expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:pb(r,i.params.colorType),parser:Ma("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:r,value:i.value,viewProps:i.viewProps})}}),fb=Et({id:"input-color-string",type:"input",accept:(i,e)=>{if(typeof i!="string"||e.view==="text")return null;const t=S0(i,Jc(e));if(!t)return null;const r=mh(t);if(!r)return null;const a=Bs(e);return a?{initialValue:i,params:Object.assign(Object.assign({},a),{format:t,stringifier:r})}:null},binding:{reader:()=>E0,equals:Ys,writer:i=>{const e=tb(i.params.format);if(!e)throw et.notBindable();return e}},controller:i=>{var e,t;return new Ks(i.document,{colorType:i.params.format.type,expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:i.params.stringifier,parser:Ma("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i.params.format.alpha,value:i.value,viewProps:i.viewProps})}});class Zs{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,a)=>{var n,s;return(s=(n=this.components[a])===null||n===void 0?void 0:n.constrain(r))!==null&&s!==void 0?s:r});return this.asm_.fromComponents(t)}}const xh=Fe("pndtxt");class gb{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(xh()),this.textViews.forEach(r=>{const a=e.createElement("div");a.classList.add(xh("a")),a.appendChild(r.element),this.element.appendChild(a)})}}function vb(i,e,t){return new ba(i,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",parser:e.parser,props:e.axes[t].textProps,value:Ye(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class $s{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,a)=>vb(e,t,a)),this.acs_.forEach((r,a)=>{zr({primary:this.value,secondary:r.value,forward:n=>t.assembly.toComponents(n)[a],backward:(n,s)=>{const o=t.assembly.toComponents(n);return o[a]=s,t.assembly.fromComponents(o)}})}),this.view=new gb(e,{textViews:this.acs_.map(r=>r.view)})}get textControllers(){return this.acs_}}class _b extends ha{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}}function bb(i,e){const t=[],r=dc(i,e);r&&t.push(r);const a=pc(i);a&&t.push(a);const n=Is(i.options);return n&&t.push(n),new ma(t)}const xb=Et({id:"input-number",type:"input",accept:(i,e)=>{if(typeof i!="number")return null;const t=Je(e,r=>Object.assign(Object.assign({},fc(r)),{options:r.optional.custom(ga),readonly:r.optional.constant(!1)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>oc,constraint:i=>bb(i.params,i.initialValue),writer:i=>ya},controller:i=>{const e=i.value,t=i.constraint,r=t&&cn(t,fa);if(r)return new Ni(i.document,{props:new Pe({options:r.values.value("options")}),value:e,viewProps:i.viewProps});const a=mc(i.params,e.rawValue),n=t&&cn(t,sa);return n?new un(i.document,Object.assign(Object.assign({},jc(Object.assign(Object.assign({},a),{keyScale:Ye(a.keyScale),max:n.values.value("max"),min:n.values.value("min")}))),{parser:xi,value:e,viewProps:i.viewProps})):new ba(i.document,{parser:xi,props:Pe.fromObject(a),value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="number"?null:i.controller.valueController instanceof un?new _b(i.controller):i.controller.valueController instanceof Ni?new Us(i.controller):null}});class Vi{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(We(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const yh={toComponents:i=>i.getComponents(),fromComponents:i=>new Vi(...i)},Wr=Fe("p2d");class yb{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wr()),t.viewProps.bindClassModifiers(this.element),Mi(t.expanded,Vr(this.element,Wr(void 0,"expanded")));const r=e.createElement("div");r.classList.add(Wr("h")),this.element.appendChild(r);const a=e.createElement("button");a.classList.add(Wr("b")),a.appendChild(on(e,"p2dpad")),t.viewProps.bindDisabled(a),r.appendChild(a),this.buttonElement=a;const n=e.createElement("div");if(n.classList.add(Wr("t")),r.appendChild(n),this.textElement=n,t.pickerLayout==="inline"){const s=e.createElement("div");s.classList.add(Wr("p")),this.element.appendChild(s),this.pickerElement=s}else this.pickerElement=null}}const ki=Fe("p2dp");class Mb{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=e.createElement("div"),this.element.classList.add(ki()),t.layout==="popup"&&this.element.classList.add(ki(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ki("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const a=e.createElementNS(si,"svg");a.classList.add(ki("g")),this.padElement.appendChild(a),this.svgElem_=a;const n=e.createElementNS(si,"line");n.classList.add(ki("ax")),n.setAttributeNS(null,"x1","0"),n.setAttributeNS(null,"y1","50%"),n.setAttributeNS(null,"x2","100%"),n.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(n);const s=e.createElementNS(si,"line");s.classList.add(ki("ax")),s.setAttributeNS(null,"x1","50%"),s.setAttributeNS(null,"y1","0"),s.setAttributeNS(null,"x2","50%"),s.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(s);const o=e.createElementNS(si,"line");o.classList.add(ki("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const l=e.createElement("div");l.classList.add(ki("m")),this.padElement.appendChild(l),this.markerElem_=l,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.props_.get("max"),a=ze(e,-r,+r,0,100),n=ze(t,-r,+r,0,100),s=this.props_.get("invertsY")?100-n:n;this.lineElem_.setAttributeNS(null,"x2",`${a}%`),this.lineElem_.setAttributeNS(null,"y2",`${s}%`),this.markerElem_.style.left=`${a}%`,this.markerElem_.style.top=`${s}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Mh(i,e,t){return[Dt(e[0],wi(i)),Dt(e[1],_a(i))*(t?1:-1)]}class wb{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mb(e,{layout:t.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new lr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.props.get("max"),a=ze(e.point.x,0,e.bounds.width,-r,+r),n=ze(this.props.get("invertsY")?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new Vi(a,n),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Wc(e.key)&&e.preventDefault();const[t,r]=Mh(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&r===0||this.value.setRawValue(new Vi(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=Mh(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Sb{constructor(e,t){var r,a;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ca.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new kc(e,{viewProps:this.viewProps}):null;const n=new wb(e,{layout:t.pickerLayout,props:new Pe({invertsY:Ye(t.invertsY),max:Ye(t.max),xKeyScale:t.axes[0].textProps.value("keyScale"),yKeyScale:t.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});n.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=n,this.textC_=new $s(e,{assembly:yh,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new yb(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(a=this.view.buttonElement)===null||a===void 0||a.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),zr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Rs(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=xc(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!ys(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}function Eb(i){return Vi.isObject(i)?new Vi(i.x,i.y):new Vi}function Tb(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y)}function Cb(i,e){return new Zs({assembly:yh,components:[Si(Object.assign(Object.assign({},i),i.x),e.x),Si(Object.assign(Object.assign({},i),i.y),e.y)]})}function wh(i,e){var t,r;if(!We(i.min)||!We(i.max))return Math.max(Math.abs((t=i.min)!==null&&t!==void 0?t:0),Math.abs((r=i.max)!==null&&r!==void 0?r:0));const a=hc(i);return Math.max(Math.abs(a)*10,Math.abs(e)*10)}function Ab(i,e){var t,r;const a=wh(ar(i,(t=i.x)!==null&&t!==void 0?t:{}),e.x),n=wh(ar(i,(r=i.y)!==null&&r!==void 0?r:{}),e.y);return Math.max(a,n)}function Rb(i){if(!("y"in i))return!1;const e=i.y;return e&&"inverted"in e?!!e.inverted:!1}const Pb=Et({id:"input-point2d",type:"input",accept:(i,e)=>{if(!Vi.isObject(i))return null;const t=Je(e,r=>Object.assign(Object.assign({},xa(r)),{expanded:r.optional.boolean,picker:r.optional.custom(qc),readonly:r.optional.constant(!1),x:r.optional.custom(Oi),y:r.optional.object(Object.assign(Object.assign({},xa(r)),{inverted:r.optional.boolean}))}));return t?{initialValue:i,params:t}:null},binding:{reader:()=>Eb,constraint:i=>Cb(i.params,i.initialValue),equals:Vi.equals,writer:()=>Tb},controller:i=>{var e,t;const r=i.document,a=i.value,n=i.constraint,s=[i.params.x,i.params.y];return new Sb(r,{axes:a.rawValue.getComponents().map((o,l)=>{var c;return bs({constraint:n.components[l],initialValue:o,params:ar(i.params,(c=s[l])!==null&&c!==void 0?c:{})})}),expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,invertsY:Rb(i.params),max:Ab(i.params,a.rawValue),parser:xi,pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",value:a,viewProps:i.viewProps})}});class jr{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(We(e))return!1;const t=e.x,r=e.y,a=e.z;return!(typeof t!="number"||typeof r!="number"||typeof a!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Sh={toComponents:i=>i.getComponents(),fromComponents:i=>new jr(...i)};function Lb(i){return jr.isObject(i)?new jr(i.x,i.y,i.z):new jr}function Ub(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y),i.writeProperty("z",e.z)}function Db(i,e){return new Zs({assembly:Sh,components:[Si(Object.assign(Object.assign({},i),i.x),e.x),Si(Object.assign(Object.assign({},i),i.y),e.y),Si(Object.assign(Object.assign({},i),i.z),e.z)]})}const Ib=Et({id:"input-point3d",type:"input",accept:(i,e)=>{if(!jr.isObject(i))return null;const t=Je(e,r=>Object.assign(Object.assign({},xa(r)),{readonly:r.optional.constant(!1),x:r.optional.custom(Oi),y:r.optional.custom(Oi),z:r.optional.custom(Oi)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Lb,constraint:i=>Db(i.params,i.initialValue),equals:jr.equals,writer:i=>Ub},controller:i=>{const e=i.value,t=i.constraint,r=[i.params.x,i.params.y,i.params.z];return new $s(i.document,{assembly:Sh,axes:e.rawValue.getComponents().map((a,n)=>{var s;return bs({constraint:t.components[n],initialValue:a,params:ar(i.params,(s=r[n])!==null&&s!==void 0?s:{})})}),parser:xi,value:e,viewProps:i.viewProps})}});class Xr{constructor(e=0,t=0,r=0,a=0){this.x=e,this.y=t,this.z=r,this.w=a}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(We(e))return!1;const t=e.x,r=e.y,a=e.z,n=e.w;return!(typeof t!="number"||typeof r!="number"||typeof a!="number"||typeof n!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Eh={toComponents:i=>i.getComponents(),fromComponents:i=>new Xr(...i)};function Nb(i){return Xr.isObject(i)?new Xr(i.x,i.y,i.z,i.w):new Xr}function Ob(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y),i.writeProperty("z",e.z),i.writeProperty("w",e.w)}function Fb(i,e){return new Zs({assembly:Eh,components:[Si(Object.assign(Object.assign({},i),i.x),e.x),Si(Object.assign(Object.assign({},i),i.y),e.y),Si(Object.assign(Object.assign({},i),i.z),e.z),Si(Object.assign(Object.assign({},i),i.w),e.w)]})}const Vb=Et({id:"input-point4d",type:"input",accept:(i,e)=>{if(!Xr.isObject(i))return null;const t=Je(e,r=>Object.assign(Object.assign({},xa(r)),{readonly:r.optional.constant(!1),w:r.optional.custom(Oi),x:r.optional.custom(Oi),y:r.optional.custom(Oi),z:r.optional.custom(Oi)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Nb,constraint:i=>Fb(i.params,i.initialValue),equals:Xr.equals,writer:i=>Ob},controller:i=>{const e=i.value,t=i.constraint,r=[i.params.x,i.params.y,i.params.z,i.params.w];return new $s(i.document,{assembly:Eh,axes:e.rawValue.getComponents().map((a,n)=>{var s;return bs({constraint:t.components[n],initialValue:a,params:ar(i.params,(s=r[n])!==null&&s!==void 0?s:{})})}),parser:xi,value:e,viewProps:i.viewProps})}});function kb(i){const e=[],t=Is(i.options);return t&&e.push(t),new ma(e)}const Bb=Et({id:"input-string",type:"input",accept:(i,e)=>{if(typeof i!="string")return null;const t=Je(e,r=>({readonly:r.optional.constant(!1),options:r.optional.custom(ga)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Gc,constraint:i=>kb(i.params),writer:i=>ya},controller:i=>{const e=i.document,t=i.value,r=i.constraint,a=r&&cn(r,fa);return a?new Ni(e,{props:new Pe({options:a.values.value("options")}),value:t,viewProps:i.viewProps}):new va(e,{parser:n=>n,props:Pe.fromObject({formatter:Os}),value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="string"?null:i.controller.valueController instanceof Ni?new Us(i.controller):null}}),Sa={monitor:{defaultInterval:200,defaultRows:3}},Th=Fe("mll");class zb{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Th()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(Th("i")),r.style.height=`calc(var(${Xc("containerUnitSize")}) * ${t.rows})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(a=>{a!==void 0&&r.push(this.formatter_(a))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Js{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new zb(e,{formatter:t.formatter,rows:t.rows,value:this.value,viewProps:this.viewProps})}}const Ch=Fe("sgl");class Hb{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ch()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Ch("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Qs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Hb(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Gb=Et({id:"monitor-bool",type:"monitor",accept:(i,e)=>{if(typeof i!="boolean")return null;const t=Je(e,r=>({readonly:r.required.constant(!0),rows:r.optional.number}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>zc},controller:i=>{var e;return i.value.rawValue.length===1?new Qs(i.document,{formatter:Hc,value:i.value,viewProps:i.viewProps}):new Js(i.document,{formatter:Hc,rows:(e=i.params.rows)!==null&&e!==void 0?e:Sa.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}});class Wb extends ha{get max(){return this.controller.valueController.props.get("max")}set max(e){this.controller.valueController.props.set("max",e)}get min(){return this.controller.valueController.props.get("min")}set min(e){this.controller.valueController.props.set("min",e)}}const Bi=Fe("grl");class jb{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Bi()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(si,"svg");r.classList.add(Bi("g")),r.style.height=`calc(var(${Xc("containerUnitSize")}) * ${t.rows})`,this.element.appendChild(r),this.svgElem_=r;const a=e.createElementNS(si,"polyline");this.svgElem_.appendChild(a),this.lineElem_=a;const n=e.createElement("div");n.classList.add(Bi("t"),Fe("tt")()),this.element.appendChild(n),this.tooltipElem_=n,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:e,clientHeight:t}=this.element,r=this.value.rawValue.length-1,a=this.props_.get("min"),n=this.props_.get("max"),s=[];this.value.rawValue.forEach((d,p)=>{if(d===void 0)return;const f=ze(p,0,r,0,e),_=ze(d,a,n,t,0);s.push([f,_].join(","))}),this.lineElem_.setAttributeNS(null,"points",s.join(" "));const o=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){o.classList.remove(Bi("t","a"));return}const c=ze(this.cursor_.rawValue,0,r,0,e),h=ze(l,a,n,t,0);o.style.left=`${c}px`,o.style.top=`${h}px`,o.textContent=`${this.formatter_(l)}`,o.classList.contains(Bi("t","a"))||(o.classList.add(Bi("t","a"),Bi("t","in")),sn(o),o.classList.remove(Bi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ah{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=Ye(-1),this.view=new jb(e,{cursor:this.cursor_,formatter:t.formatter,rows:t.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!ys(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new lr(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}importProps(e){return kt(e,null,t=>({max:t.required.number,min:t.required.number}),t=>(this.props.set("max",t.max),this.props.set("min",t.min),!0))}exportProps(){return Bt(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const{clientWidth:t}=this.view.element;this.cursor_.rawValue=Math.floor(ze(e.offsetX,0,t,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function eo(i){return We(i.format)?Ut(2):i.format}function Xb(i){var e;return i.value.rawValue.length===1?new Qs(i.document,{formatter:eo(i.params),value:i.value,viewProps:i.viewProps}):new Js(i.document,{formatter:eo(i.params),rows:(e=i.params.rows)!==null&&e!==void 0?e:Sa.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}function qb(i){var e,t,r;return new Ah(i.document,{formatter:eo(i.params),rows:(e=i.params.rows)!==null&&e!==void 0?e:Sa.monitor.defaultRows,props:Pe.fromObject({max:(t=i.params.max)!==null&&t!==void 0?t:100,min:(r=i.params.min)!==null&&r!==void 0?r:0}),value:i.value,viewProps:i.viewProps})}function Rh(i){return i.view==="graph"}const Kb=Et({id:"monitor-number",type:"monitor",accept:(i,e)=>{if(typeof i!="number")return null;const t=Je(e,r=>({format:r.optional.function,max:r.optional.number,min:r.optional.number,readonly:r.required.constant(!0),rows:r.optional.number,view:r.optional.string}));return t?{initialValue:i,params:t}:null},binding:{defaultBufferSize:i=>Rh(i)?64:1,reader:i=>oc},controller:i=>Rh(i.params)?qb(i):Xb(i),api:i=>i.controller.valueController instanceof Ah?new Wb(i.controller):null}),Yb=Et({id:"monitor-string",type:"monitor",accept:(i,e)=>{if(typeof i!="string")return null;const t=Je(e,r=>({multiline:r.optional.boolean,readonly:r.required.constant(!0),rows:r.optional.number}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Gc},controller:i=>{var e;const t=i.value;return t.rawValue.length>1||i.params.multiline?new Js(i.document,{formatter:Os,rows:(e=i.params.rows)!==null&&e!==void 0?e:Sa.monitor.defaultRows,value:t,viewProps:i.viewProps}):new Qs(i.document,{formatter:Os,value:t,viewProps:i.viewProps})}});class Zb{constructor(){this.map_=new Map}get(e){var t;return(t=this.map_.get(e))!==null&&t!==void 0?t:null}has(e){return this.map_.has(e)}add(e,t){return this.map_.set(e,t),e.viewProps.handleDispose(()=>{this.map_.delete(e)}),t}}class $b{constructor(e){this.target=e.target,this.reader_=e.reader,this.writer_=e.writer}read(){return this.reader_(this.target.read())}write(e){this.writer_(this.target,e)}inject(e){this.write(this.reader_(e))}}function Jb(i,e){var t;const r=i.accept(e.target.read(),e.params);if(We(r))return null;const a={target:e.target,initialValue:r.initialValue,params:r.params},n=Je(e.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),s=i.binding.reader(a),o=i.binding.constraint?i.binding.constraint(a):void 0,l=new $b({reader:s,target:e.target,writer:i.binding.writer(a)}),c=new Fv(Ye(s(r.initialValue),{constraint:o,equals:i.binding.equals}),l),h=i.controller({constraint:o,document:e.document,initialValue:r.initialValue,params:r.params,value:c,viewProps:Ei.create({disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden})});return new Jv(e.document,{blade:Br(),props:Pe.fromObject({label:"label"in e.params?(t=n==null?void 0:n.label)!==null&&t!==void 0?t:null:e.target.key}),tag:n==null?void 0:n.tag,value:c,valueController:h})}class Qb{constructor(e){this.target=e.target,this.reader_=e.reader}read(){return this.reader_(this.target.read())}}function ex(i,e){return e===0?new I_:new N_(i,e??Sa.monitor.defaultInterval)}function tx(i,e){var t,r,a;const n=i.accept(e.target.read(),e.params);if(We(n))return null;const s={target:e.target,initialValue:n.initialValue,params:n.params},o=Je(e.params,p=>({bufferSize:p.optional.number,disabled:p.optional.boolean,hidden:p.optional.boolean,interval:p.optional.number,label:p.optional.string})),l=i.binding.reader(s),c=(r=(t=o==null?void 0:o.bufferSize)!==null&&t!==void 0?t:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(n.params))!==null&&r!==void 0?r:1,h=new r_({binding:new Qb({reader:l,target:e.target}),bufferSize:c,ticker:ex(e.document,o==null?void 0:o.interval)}),d=i.controller({document:e.document,params:n.params,value:h,viewProps:Ei.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return d.viewProps.bindDisabled(h.ticker),d.viewProps.handleDispose(()=>{h.ticker.dispose()}),new n_(e.document,{blade:Br(),props:Pe.fromObject({label:"label"in e.params?(a=o==null?void 0:o.label)!==null&&a!==void 0?a:null:e.target.key}),value:h,valueController:d})}class ix{constructor(e){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=e}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e,t){if(!K_(t.core))throw et.notCompatible(e,t.id);t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput_(e,t,r){return this.pluginsMap_.inputs.reduce((a,n)=>a??Jb(n,{document:e,target:t,params:r}),null)}createMonitor_(e,t,r){return this.pluginsMap_.monitors.reduce((a,n)=>a??tx(n,{document:e,params:r,target:t}),null)}createBinding(e,t,r){const a=t.read();if(We(a))throw new et({context:{key:t.key},type:"nomatchingcontroller"});const n=this.createInput_(e,t,r);if(n)return n;const s=this.createMonitor_(e,t,r);if(s)return s;throw new et({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((a,n)=>a??D_(n,{document:e,params:t}),null);if(!r)throw new et({type:"nomatchingview",context:{params:t}});return r}createInputBindingApi_(e){const t=this.pluginsMap_.inputs.reduce((r,a)=>{var n,s;return r||((s=(n=a.api)===null||n===void 0?void 0:n.call(a,{controller:e}))!==null&&s!==void 0?s:null)},null);return this.apiCache_.add(e,t??new ha(e))}createMonitorBindingApi_(e){const t=this.pluginsMap_.monitors.reduce((r,a)=>{var n,s;return r||((s=(n=a.api)===null||n===void 0?void 0:n.call(a,{controller:e}))!==null&&s!==void 0?s:null)},null);return this.apiCache_.add(e,t??new ha(e))}createBindingApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(Qv(e))return this.createInputBindingApi_(e);if(s_(e))return this.createMonitorBindingApi_(e);throw et.shouldNeverHappen()}createApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if($v(e))return this.createBindingApi(e);const t=this.pluginsMap_.blades.reduce((r,a)=>r??a.api({controller:e,pool:this}),null);if(!t)throw et.shouldNeverHappen();return this.apiCache_.add(e,t)}}const rx=new Zb;function ax(){const i=new ix(rx);return[Pb,Ib,Vb,Bb,xb,fb,mb,cb,J_,Gb,Yb,Kb,u_,S_,Fc].forEach(e=>{i.register("core",e)}),i}class nx extends nr{constructor(e){super(e),this.emitter_=new nt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new ca(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class sx extends nr{}class ox extends nr{constructor(e){super(e),this.emitter_=new nt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new ca(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class lx extends nr{constructor(e){super(e),this.emitter_=new nt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new ca(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(e){this.controller.valueController.props.set("formatter",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const cx=function(){return{id:"list",type:"blade",core:kr,accept(i){const e=Je(i,t=>({options:t.required.custom(ga),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string}));return e?{params:e}:null},controller(i){const e=new fa(Ds(i.params.options)),t=Ye(i.params.value,{constraint:e}),r=new Ni(i.document,{props:new Pe({options:e.values.value("options")}),value:t,viewProps:i.viewProps});return new or(i.document,{blade:i.blade,props:Pe.fromObject({label:i.params.label}),value:t,valueController:r})},api(i){return!(i.controller instanceof or)||!(i.controller.valueController instanceof Ni)?null:new nx(i.controller)}}}();class hx extends Lc{constructor(e,t){super(e,t)}get element(){return this.controller.view.element}}class ux extends Ps{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Ph=Fe("spr");class dx{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ph()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(Ph("r")),this.element.appendChild(r)}}class Lh extends ln{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new dx(e,{viewProps:t.viewProps})}))}}const px={id:"separator",type:"blade",core:kr,accept(i){const e=Je(i,t=>({view:t.required.constant("separator")}));return e?{params:e}:null},controller(i){return new Lh(i.document,{blade:i.blade,viewProps:i.viewProps})},api(i){return i.controller instanceof Lh?new sx(i.controller):null}},mx={id:"slider",type:"blade",core:kr,accept(i){const e=Je(i,t=>({max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number}));return e?{params:e}:null},controller(i){var e,t;const r=(e=i.params.value)!==null&&e!==void 0?e:0,a=new sa({max:i.params.max,min:i.params.min}),n=Ye(r,{constraint:a}),s=new un(i.document,Object.assign(Object.assign({},jc({formatter:(t=i.params.format)!==null&&t!==void 0?t:Uv,keyScale:Ye(1),max:a.values.value("max"),min:a.values.value("min"),pointerScale:uc(i.params,r)})),{parser:xi,value:n,viewProps:i.viewProps}));return new or(i.document,{blade:i.blade,props:Pe.fromObject({label:i.params.label}),value:n,valueController:s})},api(i){return!(i.controller instanceof or)||!(i.controller.valueController instanceof un)?null:new ox(i.controller)}},fx=function(){return{id:"text",type:"blade",core:kr,accept(i){const e=Je(i,t=>({parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string}));return e?{params:e}:null},controller(i){var e;const t=Ye(i.params.value),r=new va(i.document,{parser:i.params.parse,props:Pe.fromObject({formatter:(e=i.params.format)!==null&&e!==void 0?e:a=>String(a)}),value:t,viewProps:i.viewProps});return new or(i.document,{blade:i.blade,props:Pe.fromObject({label:i.params.label}),value:t,valueController:r})},api(i){return!(i.controller instanceof or)||!(i.controller.valueController instanceof va)?null:new lx(i.controller)}}}();function gx(i){const e=i.createElement("div");return e.classList.add(Fe("dfw")()),i.body&&i.body.appendChild(e),e}function vx(i,e,t){if(i.querySelector(`style[data-tp-style=${e}]`))return;const r=i.createElement("style");r.dataset.tpStyle=e,r.textContent=t,i.head.appendChild(r)}class _x extends hx{constructor(e){var t,r;const a=e??{},n=(t=a.document)!==null&&t!==void 0?t:Wv(),s=ax(),o=new ux(n,{expanded:a.expanded,blade:Br(),props:Pe.fromObject({title:a.title}),viewProps:Ei.create()});super(o,s),this.pool_=s,this.containerElem_=(r=a.container)!==null&&r!==void 0?r:gx(n),this.containerElem_.appendChild(this.element),this.doc_=n,this.usesDefaultWrapper_=!a.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw et.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw et.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){e.css&&vx(this.document,`plugin-${e.id}`,e.css),("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(t=>{this.pool_.register(e.id,t)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[cx,px,mx,Fc,fx]})}}new Rc("4.0.4");var Ea=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),r(++i%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function r(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";i=h}var a=(performance||Date).now(),n=a,s=0,o=t(new Ea.Panel("FPS","#0ff","#002")),l=t(new Ea.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ea.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var h=(performance||Date).now();if(l.update(h-a,200),h>=n+1e3&&(o.update(s*1e3/(h-n),100),n=h,s=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){a=this.end()},domElement:e,setMode:r}};Ea.Panel=function(i,e,t){var r=1/0,a=0,n=Math.round,s=n(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,h=2*s,d=3*s,p=15*s,f=74*s,_=30*s,v=document.createElement("canvas");v.width=o,v.height=l,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*s+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(i,c,h),m.fillRect(d,p,f,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d,p,f,_),{dom:v,update:function(u,E){r=Math.min(r,u),a=Math.max(a,u),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,p),m.fillStyle=e,m.fillText(n(u)+" "+i+" ("+n(r)+"-"+n(a)+")",c,h),m.drawImage(v,d+s,p,f-s,_,d,p,f-s,_),m.fillRect(d+f-s,p,s,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d+f-s,p,s,n((1-u/E)*_))}}};const bx=Ea,zi=2,qr=1,xx=16/9,je=new ge(1920,1080),xt=new ge(1024*xx,1024),yx=60;class Mx{constructor(){}async initialize(){this.threejs_=new ic,document.body.appendChild(this.threejs_.domElement),this.params_={brush:{radius:{radius:20,min:10,max:400},colour:{colour:{r:1,g:1,b:1}},friction:{friction:5,min:1,max:100,step:1}}};const e=new _x({title:"Brush"});e.addBinding(this.params_.brush.radius,"radius",{min:this.params_.brush.radius.min,max:this.params_.brush.radius.max,step:1}),e.addBinding(this.params_.brush.friction,"friction",{min:this.params_.brush.friction.min,max:this.params_.brush.friction.max,step:this.params_.brush.friction.step}),e.addBinding(this.params_.brush.colour,"colour",{color:{type:"float"}}),this.stats_=bx(),window.addEventListener("resize",()=>{this.onWindowResize_()},!1),this.camera_=new Rl(0,1,1,0,.1,1e3),this.camera_.position.set(0,0,1),this.materials_=[],this.targets_=[],this.setupBrush_(),await this.setupProject_(),this.previousRAF_=null,this.onWindowResize_(),this.raf_()}setupBrush_(){this.lazyBrush_=new $g({enabled:!0,radius:yx}),this.brushCoords_={x:-1,y:-1,current:null,previous:null,touching:!1,points:[]},this.threejs_.domElement.addEventListener("mousemove",e=>{const t=e.clientX/window.innerWidth*je.x,r=e.clientY/window.innerHeight*je.y;this.brushCoords_.x=t,this.brushCoords_.y=r}),this.threejs_.domElement.addEventListener("touchstart",e=>{this.brushCoords_.touching=!0}),this.threejs_.domElement.addEventListener("mousedown",e=>{this.brushCoords_.touching=!0}),this.threejs_.domElement.addEventListener("mouseup",e=>{this.brushCoords_.touching=!1,this.brushCoords_.points=[],this.brushCoords_.current=null,this.brushCoords_.previous=null}),this.threejs_.domElement.addEventListener("touchend",e=>{this.brushCoords_.touching=!1,this.brushCoords_.points=[],this.brushCoords_.current=null,this.brushCoords_.previous=null})}async setupProject_(){const e=await fetch("./shaders/common.glsl"),t=await fetch("./shaders/noise.glsl"),r=await fetch("./shaders/oklab.glsl"),a=await fetch("./shaders/header.glsl"),n=await fetch("./shaders/cascades.glsl"),s=await fetch("./shaders/scene-vertex-shader.glsl"),o=await fetch("./shaders/scene-fragment-shader.glsl"),l=await fetch("./shaders/copy-vertex-shader.glsl"),c=await fetch("./shaders/copy-fragment-shader.glsl"),h=await fetch("./shaders/copy-sdf-fragment-shader.glsl"),d=await fetch("./shaders/compute-cascade-vertex-shader.glsl"),p=await fetch("./shaders/compute-cascade-fragment-shader.glsl"),f=await fetch("./shaders/merge-cascades-vertex-shader.glsl"),_=await fetch("./shaders/merge-cascades-fragment-shader.glsl"),v=await fetch("./shaders/radiance-field-vertex-shader.glsl"),m=await fetch("./shaders/radiance-field-fragment-shader.glsl"),u=await fetch("./shaders/final-compose-fragment-shader.glsl"),E=await e.text()+`
`,y=await t.text()+`
`,S=await r.text()+`
`,T=await a.text()+`
`,R=await n.text()+`
`,C=T+S+E+y,q=C+await s.text(),b=C+await o.text(),w=C+await l.text(),K=C+await c.text(),ie=C+await h.text(),I=C+await d.text(),z=C+R+await p.text(),G=C+await f.text(),Y=C+R+await _.text(),W=C+R+await v.text(),X=C+R+await m.text(),$=C+R+await u.text();this.scene_=new rr,this.sceneMaterial_=new Lt({uniforms:{brushPos:{value:new ge(0,0)},brushRadius:{value:0},brushColour:{value:new N(1,1,1)},sdfTexture:{value:null},time:{value:0},resolution:{value:new ge(1,1)}},vertexShader:q,fragmentShader:b,side:Wt});const j=new vn(1,1),O=new wt(j,this.sceneMaterial_);O.position.set(.5,.5,0),this.scene_.add(O),this.materials_.push(this.sceneMaterial_);const k={minFilter:mt,magFilter:mt,format:Nt,type:Wi},Q={minFilter:At,magFilter:At,format:Nt,type:Wi};this.sdfTargets_=[new Ot(je.x,je.y,k),new Ot(je.x,je.y,k)],this.sdfFinalTarget_=new Ot(je.x,je.y,k),this.sdfIndex_=0,this.threejs_.setRenderTarget(this.sdfTargets_[0]),this.threejs_.setClearColor(0,1e3),this.threejs_.clear(),this.threejs_.setRenderTarget(this.sdfTargets_[1]),this.threejs_.clear(),this.threejs_.setClearColor(0,0);const se=4,ue=(je.x**2+je.y**2)**.5;let de=Math.ceil(Math.log(ue/qr)/Math.log(se))-1;console.log("numCascadeLevels: "+de),console.log("diagonalLength: "+ue);for(let ke=0;;++ke)if(qr*(1-se**(ke+1))/(1-se)>ue){console.log("ACTUAL FUCKING LEVEL: ",ke),de=ke+1;break}this.cascadeRealTargets_=[];for(let ke=0;ke<de;ke++)this.cascadeRealTargets_.push(new Ot(xt.x,xt.y,k));this.cascadeMaterial_=new Lt({uniforms:{time:{value:0},resolution:{value:new ge(1,1)},sceneResolution:{value:new ge(je.x,je.y)},sceneTexture:{value:null},sdfTexture:{value:null},cascadeLevel:{value:0},cascade0_Range:{value:qr},cascade0_Dims:{value:zi},cascadeResolution:{value:new ge(xt.x,xt.y)}},vertexShader:I,fragmentShader:z});const ye=new wt(j,this.cascadeMaterial_);ye.position.set(.5,.5,0),this.cascadeQuad_=ye,this.cascadeScene_=new rr,this.cascadeScene_.add(ye);for(let ke=0;ke<de;ke++){const Ee=zi*2**ke,L=qr*(1-se**ke)/(1-se),ht=qr*(1-se**(ke+1))/(1-se);console.log("cascade level: "+ke),console.log("start: "+L),console.log("end  : "+ht),console.log("dims : "+Ee)}this.materials_.push(this.cascadeMaterial_),this.cascadeMergeMaterial_=new Lt({uniforms:{time:{value:0},resolution:{value:new ge(1,1)},sdfTexture:{value:null},sceneResolution:{value:new ge(je.x,je.y)},cascadeRealTexture:{value:null},nextCascadeMergedTexture:{value:null},prevCascadeTexture:{value:null},currentCascadeLevel:{value:0},numCascadeLevels:{value:de},cascade0_Range:{value:qr},cascade0_Dims:{value:zi},cascadeResolution:{value:new ge(xt.x,xt.y)}},vertexShader:G,fragmentShader:Y});const ve=Math.floor(xt.x),Ve=xt.y;this.cascadeMergeTargets_=[];for(let ke=0;ke<de;ke++)this.cascadeMergeTargets_.push(new Ot(xt.x,xt.y,k));this.cascadeMergeMesh_=new wt(j,this.cascadeMergeMaterial_),this.cascadeMergeMesh_.position.set(.5,.5,0),this.cascadeMergeScene_=new rr,this.cascadeMergeScene_.add(this.cascadeMergeMesh_),this.materials_.push(this.cascadeMergeMaterial_),console.log("cascade0_ProbesX: "+ve),console.log("cascade0_ProbesY: "+Ve),this.radianceFieldMat_=new Lt({uniforms:{resolution:{value:new ge(1,1)},time:{value:0},cascade0_Dims:{value:zi},cascadeResolution:{value:new ge(xt.x,xt.y)},mergedCascade0Texture:{value:this.cascadeMergeTargets_[0].texture},sceneResolution:{value:new ge(je.x,je.y)}},vertexShader:W,fragmentShader:X}),this.radianceFieldTarget_=new Ot(xt.x/zi,xt.y/zi,Q),this.radianceFieldMesh_=new wt(j,this.radianceFieldMat_),this.radianceFieldMesh_.position.set(.5,.5,0),this.radianceFieldScene_=new rr,this.radianceFieldScene_.add(this.radianceFieldMesh_),this.materials_.push(this.radianceFieldMat_),this.finalComposeMat_=new Lt({uniforms:{radianceTexture:{value:null},sceneTexture:{value:null},sdfTexture:{value:this.sdfTargets_[0].texture},resolution:{value:new ge(1,1)},time:{value:0}},vertexShader:w,fragmentShader:$,side:Wt}),this.finalComposeMesh_=new wt(j,this.finalComposeMat_),this.finalComposeMesh_.position.set(.5,.5,0),this.finalComposeScene_=new rr,this.finalComposeScene_.add(this.finalComposeMesh_),this.materials_.push(this.finalComposeMat_),this.copyMat_=new Lt({uniforms:{diffuse:{value:null},resolution:{value:new ge(1,1)},time:{value:0}},vertexShader:w,fragmentShader:K,side:Wt}),this.copyMesh_=new wt(j,this.copyMat_),this.copyMesh_.position.set(.5,.5,0),this.copyScene_=new rr,this.copyScene_.add(this.copyMesh_),this.materials_.push(this.copyMat_),this.copySDFMat_=new Lt({uniforms:{brushPos1:{value:new ge(0,0)},brushPos2:{value:new ge(0,0)},brushRadius:{value:0},brushColour:{value:new N(1,1,1)},sdfSource:{value:null},resolution:{value:new ge(1,1)},time:{value:0}},vertexShader:w,fragmentShader:ie,side:Wt}),this.copySDFMesh_=new wt(j,this.copySDFMat_),this.copySDFMesh_.position.set(.5,.5,0),this.copySDFScene_=new rr,this.copySDFScene_.add(this.copySDFMesh_),this.materials_.push(this.copySDFMat_),this.totalTime_=0,this.onWindowResize_()}onWindowResize_(){const e=window.devicePixelRatio,t=this.threejs_.domElement;t.style.width=window.innerWidth+"px",t.style.height=window.innerHeight+"px";const r=t.clientWidth,a=t.clientHeight;this.threejs_.setSize(r*e,a*e,!1);for(let n of this.materials_)n.uniforms.resolution.value.set(r*e,a*e);this.copySDFMat_.uniforms.resolution.value.set(je.x,je.y),this.radianceFieldMat_.uniforms.resolution.value.set(xt.x/zi,xt.y/zi)}raf_(){requestAnimationFrame(e=>{this.previousRAF_===null&&(this.previousRAF_=e),this.step_(e-this.previousRAF_),this.render_(),this.raf_(),this.previousRAF_=e})}render_(){const e=this.lazyBrush_.getBrushCoordinates();this.sceneMaterial_.uniforms.brushPos.value=new ge(e.x/je.x,1-e.y/je.y),this.sceneMaterial_.uniforms.brushRadius.value=this.params_.brush.radius.radius,this.sceneMaterial_.uniforms.brushColour.value=new N(this.params_.brush.colour.colour.r,this.params_.brush.colour.colour.g,this.params_.brush.colour.colour.b),this.sceneMaterial_.uniforms.sdfTexture.value=this.sdfTargets_[(this.sdfIndex_+1)%2].texture,this.sceneMaterial_.uniforms.resolution.value=new ge(je.x,je.y),this.threejs_.setRenderTarget(this.sdfFinalTarget_),this.threejs_.render(this.scene_,this.camera_);for(let t=0;t<this.cascadeRealTargets_.length;t++){const r=t;this.cascadeMaterial_.uniforms.cascadeLevel.value=r,this.cascadeMaterial_.uniforms.sdfTexture.value=this.sdfFinalTarget_.texture,this.threejs_.setRenderTarget(this.cascadeRealTargets_[t]),this.threejs_.render(this.cascadeScene_,this.camera_)}for(let t=this.cascadeRealTargets_.length-1;t>=0;t--)this.cascadeMergeMaterial_.uniforms.currentCascadeLevel.value=t,this.cascadeMergeMaterial_.uniforms.cascadeRealTexture.value=this.cascadeRealTargets_[t].texture,this.cascadeMergeMaterial_.uniforms.sdfTexture.value=this.sdfFinalTarget_.texture,this.cascadeMergeMaterial_.needsUpdate=!0,t<this.cascadeRealTargets_.length-1&&(this.cascadeMergeMaterial_.uniforms.nextCascadeMergedTexture.value=this.cascadeMergeTargets_[t+1].texture),t>0&&(this.cascadeMergeMaterial_.uniforms.prevCascadeTexture.value=this.cascadeRealTargets_[t-1].texture),this.threejs_.setRenderTarget(this.cascadeMergeTargets_[t]),this.threejs_.render(this.cascadeMergeScene_,this.camera_);this.radianceFieldMat_.uniforms.mergedCascade0Texture.value=this.cascadeMergeTargets_[0].texture,this.radianceFieldMat_.uniforms.resolution.value=new ge(this.radianceFieldTarget_.width,this.radianceFieldTarget_.height),this.threejs_.setRenderTarget(this.radianceFieldTarget_),this.threejs_.render(this.radianceFieldScene_,this.camera_),this.finalComposeMat_.uniforms.radianceTexture.value=this.radianceFieldTarget_.texture,this.finalComposeMat_.uniforms.sdfTexture.value=this.sdfFinalTarget_.texture,this.threejs_.setRenderTarget(null),this.threejs_.render(this.finalComposeScene_,this.camera_)}step_(e){const t=e*.001;this.totalTime_+=t;for(let r of this.materials_)r.uniforms.time.value=this.totalTime_;this.updateBrush_(e),this.stats_.update()}updateBrush_(e){this.lazyBrush_.update({x:this.brushCoords_.x,y:this.brushCoords_.y},{friction:this.brushCoords_.touching?this.params_.brush.friction.friction/100:1}),this.lazyBrush_.isEnabled(),this.lazyBrush_.brushHasMoved(),this.brushCoords_.touching&&(this.brushCoords_.points.push(this.lazyBrush_.getBrushCoordinates()),this.brushCoords_.points.push(this.lazyBrush_.getBrushCoordinates()),this.updateBrushSDF_())}updateBrushSDF_(){const e=this.lazyBrush_.getBrushCoordinates();this.brushCoords_.current==null&&(this.brushCoords_.current={x:e.x,y:e.y},this.brushCoords_.previous={x:e.x,y:e.y}),this.brushCoords_.current={x:e.x,y:e.y};const t=this.brushCoords_.current,r=this.brushCoords_.previous;this.threejs_.setRenderTarget(this.sdfTargets_[this.sdfIndex_]),this.copySDFMat_.uniforms.brushPos1.value=new ge(t.x/je.x,1-t.y/je.y),this.copySDFMat_.uniforms.brushPos2.value=new ge(r.x/je.x,1-r.y/je.y),this.copySDFMat_.uniforms.brushRadius.value=this.params_.brush.radius.radius,this.copySDFMat_.uniforms.brushColour.value=new N(this.params_.brush.colour.colour.r,this.params_.brush.colour.colour.g,this.params_.brush.colour.colour.b),this.copySDFMat_.uniforms.sdfSource.value=this.sdfTargets_[1-this.sdfIndex_].texture,this.threejs_.render(this.copySDFScene_,this.camera_),this.sdfIndex_=(this.sdfIndex_+1)%2,this.brushCoords_.previous=this.brushCoords_.current}}let Uh=null;window.addEventListener("DOMContentLoaded",async()=>{Uh=new Mx,await Uh.initialize()});
