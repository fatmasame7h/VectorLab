const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es.min-oGm8PBCe.js","./index-DnBKuz4x.js","./index-Cp7MFzWE.css","./typeof-QjJsDpFa.js"])))=>i.map(i=>d[i]);
import{j as ve,r as xe,g as LS,o as NS,_ as DS,a as US,l as OS,f as FS,e as BS,P as zS,C as cd}from"./index-DnBKuz4x.js";import{_ as Cu,S as kS}from"./extends-QY5ast_E.js";function HS({steps:r}){return ve.jsx("div",{className:"space-y-2",children:r.map((e,t)=>ve.jsxs("details",{open:!0,className:"rounded-xl border border-line bg-surface px-4 py-3",children:[ve.jsx("summary",{className:"cursor-pointer font-semibold",children:e.title}),e.why&&ve.jsx("p",{className:"mt-1 text-sm text-muted",children:e.why}),ve.jsx("div",{className:"mt-2 space-y-1 font-mono text-sm",children:e.lines.map((n,i)=>ve.jsx("p",{className:"whitespace-pre-wrap break-words",children:n},i))})]},t))})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="187",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vv=0,lp=1,xv=2,VS=3,yv=0,Go=1,Ha=2,Ps=3,$r=0,Jn=1,si=2,Ds=0,Wo=1,cp=2,up=3,hp=4,Sv=5,GS=6,Rs=100,Mv=101,wv=102,Ev=103,bv=104,Tv=200,Av=201,Cv=202,Rv=203,Cp=204,Rp=205,Pv=206,Iv=207,Lv=208,Nv=209,Dv=210,Uv=211,Ov=212,Fv=213,Bv=214,Ru=0,Pu=1,Iu=2,Yo=3,Lu=4,Nu=5,Du=6,Uu=7,_l=0,zv=1,kv=2,Wi=0,Pp=1,Ip=2,Lp=3,Sh=4,Np=5,Dp=6,Up=7,fp="attached",Hv="detached",Mh=300,Dr=301,Bs=302,Va=303,Ga=304,$a=1e3,ai=1001,el=1002,fn=1003,Op=1004,WS=1004,Bo=1005,XS=1005,rn=1006,Wa=1007,YS=1007,Vi=1008,qS=1008,qn=1009,Fp=1010,Bp=1011,qo=1012,wh=1013,Ii=1014,jn=1015,Xi=1016,Eh=1017,bh=1018,zs=1020,zp=35902,kp=35899,Hp=1021,Vp=1022,Zn=1023,Ur=1026,Ir=1027,Th=1028,vl=1029,es=1030,Ah=1031,jS=1032,Ch=1033,Xa=33776,Ya=33777,qa=33778,ja=33779,Ou=35840,Fu=35841,Bu=35842,zu=35843,ku=36196,Hu=37492,Vu=37496,Gu=37488,Wu=37489,tl=37490,Xu=37491,Yu=37808,qu=37809,ju=37810,Zu=37811,Ju=37812,Ku=37813,Qu=37814,$u=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,oh=36492,ah=36494,lh=36495,ch=36283,uh=36284,nl=36285,hh=36286,Vv=2200,Gv=2201,Wv=2202,il=2300,fh=2301,wu=2302,dp=2303,Is=2400,Ls=2401,rl=2402,Rh=2500,Gp=2501,ZS=0,JS=1,KS=2,Xv=3200,QS=3201,$S=3202,eM=3203,Or=0,Yv=1,Rr="",ri="srgb",sl="srgb-linear",ol="linear",Wt="srgb",tM="",nM="rg",iM="ga",rM=0,Eu=7680,sM=7681,oM=7682,aM=7683,lM=34055,cM=34056,uM=5386,hM=512,fM=513,dM=514,pM=515,mM=516,gM=517,_M=518,qv=519,jv=512,Zv=513,Jv=514,Wp=515,Kv=516,Qv=517,Xp=518,Yp=519,Ph=35044,vM=35048,xM=35040,yM=35045,SM=35049,MM=35041,wM=35046,EM=35050,bM=35042,TM="100",pp="300 es",_i=2e3,ks=2001,AM={COMPUTE:"compute",RENDER:"render"},CM={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},RM={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},PM={TEXTURE_COMPARE:"depthTextureCompare"},IM={NONE:0,SHARED:1,FULL:2};function LM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const NM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function zo(r,e){return new NM[r](e)}function $v(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ex(){const r=al("canvas");return r.style.display="block",r}const u0={};let ts=null;function DM(r){ts=r}function UM(){return ts}function ll(...r){const e="THREE."+r.shift();ts?ts("log",e,...r):console.log(e,...r)}function tx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=tx(r);const e="THREE."+r.shift();if(ts)ts("warn",e,...r);else{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function rt(...r){r=tx(r);const e="THREE."+r.shift();if(ts)ts("error",e,...r);else{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Lr(...r){const e=r.join(" ");e in u0||(u0[e]=!0,He(...r))}function OM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const FM={[Ru]:Ru,[Iu]:Du,[Lu]:Lu,[Yo]:Nu,[Pu]:Pu,[Du]:Iu,[Uu]:Uu,[Nu]:Yo};let qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let h0=1234567;const Us=Math.PI/180,jo=180/Math.PI;function Li(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function qp(r,e){return(r%e+e)%e}function BM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zM(r,e,t){return r!==e?(t-r)/(e-r):0}function Za(r,e,t){return(1-t)*r+t*e}function kM(r,e,t,n){return Za(r,e,1-Math.exp(-t*n))}function HM(r,e=1){return e-Math.abs(qp(r,e*2)-e)}function VM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function GM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function WM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function XM(r,e){return r+Math.random()*(e-r)}function YM(r){return r*(.5-Math.random())}function qM(r){r!==void 0&&(h0=r);let e=h0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jM(r){return r*Us}function ZM(r){return r*jo}function JM(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function KM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function nx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function QM(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),h=s((e+n)/2),f=o((e+n)/2),p=s((e-n)/2),m=o((e-n)/2),g=s((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*v,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*v,c*h);break;case"ZYZ":r.set(u*v,u*g,c*f,c*h);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ih(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ns(r,e){if(e.constructor===Float32Array)return r;const t=Ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Vn(r,e){if(e.constructor===Float32Array)return r;const t=Ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const ix={DEG2RAD:Us,RAD2DEG:jo,generateUUID:Li,clamp:gt,euclideanModulo:qp,mapLinear:BM,inverseLerp:zM,lerp:Za,damp:kM,pingpong:HM,smoothstep:VM,smootherstep:GM,randInt:WM,randFloat:XM,randFloatSpread:YM,seededRandom:qM,degToRad:jM,radToDeg:ZM,isPowerOfTwo:JM,ceilPowerOfTwo:KM,floorPowerOfTwo:nx,setQuaternionFromProperEuler:QM,normalize:Vn,denormalize:Ns},Rm=class Rm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rm.prototype.isVector2=!0;let _e=Rm;class Rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3],m=s[o+0],g=s[o+1],v=s[o+2],M=s[o+3];if(p!==M||u!==m||h!==g||f!==v){let y=u*m+h*g+f*v+p*M;y<0&&(m=-m,g=-g,v=-v,M=-M,y=-y);let x=1-c;if(y<.9995){const w=Math.acos(y),b=Math.sin(w);x=Math.sin(x*w)/b,c=Math.sin(c*w)/b,u=u*x+m*c,h=h*x+g*c,f=f*x+v*c,p=p*x+M*c}else{u=u*x+m*c,h=h*x+g*c,f=f*x+v*c,p=p*x+M*c;const w=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=w,h*=w,f*=w,p*=w}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[o],m=s[o+1],g=s[o+2],v=s[o+3];return e[t]=c*v+f*p+u*g-h*m,e[t+1]=u*v+f*m+h*p-c*g,e[t+2]=h*v+f*g+c*m-u*p,e[t+3]=f*v-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),v=u(s/2);switch(o){case"XYZ":this._x=m*f*p+h*g*v,this._y=h*g*p-m*f*v,this._z=h*f*v+m*g*p,this._w=h*f*p-m*g*v;break;case"YXZ":this._x=m*f*p+h*g*v,this._y=h*g*p-m*f*v,this._z=h*f*v-m*g*p,this._w=h*f*p+m*g*v;break;case"ZXY":this._x=m*f*p-h*g*v,this._y=h*g*p+m*f*v,this._z=h*f*v+m*g*p,this._w=h*f*p-m*g*v;break;case"ZYX":this._x=m*f*p-h*g*v,this._y=h*g*p+m*f*v,this._z=h*f*v-m*g*p,this._w=h*f*p+m*g*v;break;case"YZX":this._x=m*f*p+h*g*v,this._y=h*g*p+m*f*v,this._z=h*f*v-m*g*p,this._w=h*f*p-m*g*v;break;case"XZY":this._x=m*f*p-h*g*v,this._y=h*g*p-m*f*v,this._z=h*f*v+m*g*p,this._w=h*f*p+m*g*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(o-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(o-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*c+i*h-s*u,this._y=i*f+o*u+s*c-n*h,this._z=s*f+o*h+n*u-i*c,this._w=o*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,i=-i,s=-s,o=-o,c=-c);let u=1-t;if(c<.9995){const h=Math.acos(c),f=Math.sin(h);u=Math.sin(u*h)/f,t=Math.sin(t*h)/f,this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pm=class Pm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(f0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(f0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*i-c*n),f=2*(c*t-s*i),p=2*(s*n-o*t);return this.x=t+u*h+o*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pm.prototype.isVector3=!0;let U=Pm;const ud=new U,f0=new Rn,Im=class Im{constructor(e,t,n,i,s,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h)}set(e,t,n,i,s,o,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],v=n[8],M=i[0],y=i[3],x=i[6],w=i[1],b=i[4],T=i[7],P=i[2],C=i[5],E=i[8];return s[0]=o*M+c*w+u*P,s[3]=o*y+c*b+u*C,s[6]=o*x+c*T+u*E,s[1]=h*M+f*w+p*P,s[4]=h*y+f*b+p*C,s[7]=h*x+f*T+p*E,s[2]=m*M+g*w+v*P,s[5]=m*y+g*b+v*C,s[8]=m*x+g*T+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*c*h-n*s*f+n*c*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*o-c*h,m=c*u-f*s,g=h*s-o*u,v=t*p+n*m+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*o)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-i*h,i*u,-i*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,t)),this}rotate(e){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Im.prototype.isMatrix3=!0;let xt=Im;const hd=new xt,d0=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p0=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const r={enabled:!0,workingColorSpace:sl,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Wt&&(i.r=Nr(i.r),i.g=Nr(i.g),i.b=Nr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Wt&&(i.r=Xo(i.r),i.g=Xo(i.g),i.b=Xo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rr?ol:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[sl]:{primaries:e,whitePoint:n,transfer:ol,toXYZ:d0,fromXYZ:p0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:d0,fromXYZ:p0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Ot=$M();function Nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let po;class rx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{po===void 0&&(po=al("canvas")),po.width=e.width,po.height=e.height;const i=po.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=po}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=al("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Nr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nr(t[n]/255)*255):t[n]=Nr(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ew=0;class hr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(fd(i[o].image)):s.push(fd(i[o]))}else s=fd(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function fd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}class tw extends hr{constructor(e=null){Lr('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}}let nw=0;const dd=new U;class sn extends qi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=ai,i=ai,s=rn,o=Vi,c=Zn,u=qn,h=sn.DEFAULT_ANISOTROPY,f=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=Li(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Mh;sn.DEFAULT_ANISOTROPY=1;const Lm=class Lm{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],v=u[9],M=u[2],y=u[6],x=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(v-y)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(v+y)<.1&&Math.abs(h+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,T=(g+1)/2,P=(x+1)/2,C=(f+m)/4,E=(p+M)/4,R=(v+y)/4;return b>T&&b>P?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=C/n,s=E/n):T>P?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=C/i,s=R/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=E/s,i=R/s),this.set(n,i,s,t),this}let w=Math.sqrt((y-v)*(y-v)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(w)<.001&&(w=1),this.x=(y-v)/w,this.y=(p-M)/w,this.z=(m-f)/w,this.w=Math.acos((h+g+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;let Bt=Lm;class jp extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new sn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lh extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iw extends xi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Lh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Nh extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class rw extends xi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Nh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const yh=class yh{constructor(e,t,n,i,s,o,c,u,h,f,p,m,g,v,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h,f,p,m,g,v,M,y)}set(e,t,n,i,s,o,c,u,h,f,p,m,g,v,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=c,x[13]=u,x[2]=h,x[6]=f,x[10]=p,x[14]=m,x[3]=g,x[7]=v,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/mo.setFromMatrixColumn(e,0).length(),s=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*f,g=o*p,v=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+v*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=v+g*h,t[10]=o*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,v=h*f,M=h*p;t[0]=m+M*c,t[4]=v*c-g,t[8]=o*h,t[1]=o*p,t[5]=o*f,t[9]=-c,t[2]=g*c-v,t[6]=M+m*c,t[10]=o*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,v=h*f,M=h*p;t[0]=m-M*c,t[4]=-o*p,t[8]=v+g*c,t[1]=g+v*c,t[5]=o*f,t[9]=M-m*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const m=o*f,g=o*p,v=c*f,M=c*p;t[0]=u*f,t[4]=v*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-v,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const m=o*u,g=o*h,v=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=v*p+g,t[1]=p,t[5]=o*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+v,t[10]=m-M*p}else if(e.order==="XZY"){const m=o*u,g=o*h,v=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=o*f,t[9]=g*p-v,t[2]=v*p-g,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sw,e,ow)}lookAt(e,t,n){const i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),qr.crossVectors(n,mi),qr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),qr.crossVectors(n,mi)),qr.normalize(),bc.crossVectors(mi,qr),i[0]=qr.x,i[4]=bc.x,i[8]=mi.x,i[1]=qr.y,i[5]=bc.y,i[9]=mi.y,i[2]=qr.z,i[6]=bc.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],v=n[2],M=n[6],y=n[10],x=n[14],w=n[3],b=n[7],T=n[11],P=n[15],C=i[0],E=i[4],R=i[8],O=i[12],N=i[1],D=i[5],X=i[9],K=i[13],V=i[2],Q=i[6],oe=i[10],$=i[14],k=i[3],H=i[7],W=i[11],J=i[15];return s[0]=o*C+c*N+u*V+h*k,s[4]=o*E+c*D+u*Q+h*H,s[8]=o*R+c*X+u*oe+h*W,s[12]=o*O+c*K+u*$+h*J,s[1]=f*C+p*N+m*V+g*k,s[5]=f*E+p*D+m*Q+g*H,s[9]=f*R+p*X+m*oe+g*W,s[13]=f*O+p*K+m*$+g*J,s[2]=v*C+M*N+y*V+x*k,s[6]=v*E+M*D+y*Q+x*H,s[10]=v*R+M*X+y*oe+x*W,s[14]=v*O+M*K+y*$+x*J,s[3]=w*C+b*N+T*V+P*k,s[7]=w*E+b*D+T*Q+P*H,s[11]=w*R+b*X+T*oe+P*W,s[15]=w*O+b*K+T*$+P*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],v=e[3],M=e[7],y=e[11],x=e[15],w=u*g-h*m,b=c*g-h*p,T=c*m-u*p,P=o*g-h*f,C=o*m-u*f,E=o*p-c*f;return t*(M*w-y*b+x*T)-n*(v*w-y*P+x*C)+i*(v*b-M*P+x*E)-s*(v*T-M*C+y*E)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],c=e[9],u=e[2],h=e[6],f=e[10];return t*(o*f-c*h)-n*(s*f-c*u)+i*(s*h-o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],v=e[12],M=e[13],y=e[14],x=e[15],w=t*c-n*o,b=t*u-i*o,T=t*h-s*o,P=n*u-i*c,C=n*h-s*c,E=i*h-s*u,R=f*M-p*v,O=f*y-m*v,N=f*x-g*v,D=p*y-m*M,X=p*x-g*M,K=m*x-g*y,V=w*K-b*X+T*D+P*N-C*O+E*R;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/V;return e[0]=(c*K-u*X+h*D)*Q,e[1]=(i*X-n*K-s*D)*Q,e[2]=(M*E-y*C+x*P)*Q,e[3]=(m*C-p*E-g*P)*Q,e[4]=(u*N-o*K-h*O)*Q,e[5]=(t*K-i*N+s*O)*Q,e[6]=(y*T-v*E-x*b)*Q,e[7]=(f*E-m*T+g*b)*Q,e[8]=(o*X-c*N+h*R)*Q,e[9]=(n*N-t*X-s*R)*Q,e[10]=(v*C-M*T+x*w)*Q,e[11]=(p*T-f*C-g*w)*Q,e[12]=(c*O-o*D-u*R)*Q,e[13]=(t*D-n*O+i*R)*Q,e[14]=(M*b-v*P-y*w)*Q,e[15]=(f*P-p*b+m*w)*Q,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,h=s*o,f=s*c;return this.set(h*o+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*o,0,h*u-i*c,f*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,h=s+s,f=o+o,p=c+c,m=s*h,g=s*f,v=s*p,M=o*f,y=o*p,x=c*p,w=u*h,b=u*f,T=u*p,P=n.x,C=n.y,E=n.z;return i[0]=(1-(M+x))*P,i[1]=(g+T)*P,i[2]=(v-b)*P,i[3]=0,i[4]=(g-T)*C,i[5]=(1-(m+x))*C,i[6]=(y+w)*C,i[7]=0,i[8]=(v+b)*E,i[9]=(y-w)*E,i[10]=(1-(m+M))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=mo.set(i[0],i[1],i[2]).length();const c=mo.set(i[4],i[5],i[6]).length(),u=mo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Fi.copy(this);const h=1/o,f=1/c,p=1/u;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=f,Fi.elements[5]*=f,Fi.elements[6]*=f,Fi.elements[8]*=p,Fi.elements[9]*=p,Fi.elements[10]*=p,t.setFromRotationMatrix(Fi),n.x=o,n.y=c,n.z=u,this}makePerspective(e,t,n,i,s,o,c=_i,u=!1){const h=this.elements,f=2*s/(t-e),p=2*s/(n-i),m=(t+e)/(t-e),g=(n+i)/(n-i);let v,M;if(u)v=s/(o-s),M=o*s/(o-s);else if(c===_i)v=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(c===ks)v=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=_i,u=!1){const h=this.elements,f=2/(t-e),p=2/(n-i),m=-(t+e)/(t-e),g=-(n+i)/(n-i);let v,M;if(u)v=1/(o-s),M=o/(o-s);else if(c===_i)v=-2/(o-s),M=-(o+s)/(o-s);else if(c===ks)v=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=p,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yh.prototype.isMatrix4=!0;let _t=yh;const mo=new U,Fi=new _t,sw=new U(0,0,0),ow=new U(1,1,1),qr=new U,bc=new U,mi=new U,m0=new _t,g0=new Rn;class Yi{constructor(e=0,t=0,n=0,i=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return m0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g0.setFromEuler(this),this.setFromQuaternion(g0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Os{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aw=0;const _0=new U,go=new Rn,wr=new _t,Tc=new U,Ea=new U,lw=new U,cw=new Rn,v0=new U(1,0,0),x0=new U(0,1,0),y0=new U(0,0,1),S0={type:"added"},uw={type:"removed"},_o={type:"childadded",child:null},pd={type:"childremoved",child:null};class Ht extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new U,t=new Yi,n=new Rn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new xt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(v0,e)}rotateY(e){return this.rotateOnAxis(x0,e)}rotateZ(e){return this.rotateOnAxis(y0,e)}translateOnAxis(e,t){return _0.copy(e).applyQuaternion(this.quaternion),this.position.add(_0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v0,e)}translateY(e){return this.translateOnAxis(x0,e)}translateZ(e){return this.translateOnAxis(y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tc.copy(e):Tc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(Ea,Tc,this.up):wr.lookAt(Tc,Ea,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),go.setFromRotationMatrix(wr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S0),_o.child=e,this.dispatchEvent(_o),_o.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uw),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S0),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,lw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,cw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),v=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ko extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hw={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,v=.005;h.inputState.pinching&&m>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(hw)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ko;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function md(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ot.workingColorSpace){if(e=qp(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=md(o,s,e+1/3),this.g=md(o,s,e),this.b=md(o,s,e-1/3)}return Ot.colorSpaceToWorking(this,i),this}setStyle(e,t=ri){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const n=sx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ot.workingToColorSpace(kn.copy(this),e),Math.round(gt(kn.r*255,0,255))*65536+Math.round(gt(kn.g*255,0,255))*256+Math.round(gt(kn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(kn.copy(this),t);const n=kn.r,i=kn.g,s=kn.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+o)/2;if(c===o)u=0,h=0;else{const p=o-c;switch(h=f<=.5?p/(o+c):p/(2-o-c),o){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=ri){Ot.workingToColorSpace(kn.copy(this),e);const t=kn.r,n=kn.g,i=kn.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Ac);const n=Za(jr.h,Ac.h,t),i=Za(jr.s,Ac.s,t),s=Za(jr.l,Ac.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new je;je.NAMES=sx;class Dh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Dh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new Uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zp extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new U,Er=new U,gd=new U,br=new U,vo=new U,xo=new U,M0=new U,_d=new U,vd=new U,xd=new U,yd=new Bt,Sd=new Bt,Md=new Bt;class oi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bi.subVectors(e,t),i.cross(Bi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bi.subVectors(i,t),Er.subVectors(n,t),gd.subVectors(e,t);const o=Bi.dot(Bi),c=Bi.dot(Er),u=Bi.dot(gd),h=Er.dot(Er),f=Er.dot(gd),p=o*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,v=(o*f-c*u)*m;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,n,i,s,o,c,u){return this.getBarycoord(e,t,n,i,br)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,br.x),u.addScaledVector(o,br.y),u.addScaledVector(c,br.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(yd,s.x),o.addScaledVector(Sd,s.y),o.addScaledVector(Md,s.z),o}static isFrontFacing(e,t,n,i){return Bi.subVectors(n,t),Er.subVectors(e,t),Bi.cross(Er).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Bi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;vo.subVectors(i,n),xo.subVectors(s,n),_d.subVectors(e,n);const u=vo.dot(_d),h=xo.dot(_d);if(u<=0&&h<=0)return t.copy(n);vd.subVectors(e,i);const f=vo.dot(vd),p=xo.dot(vd);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0&&u-f>0)return o=u/(u-f),t.copy(n).addScaledVector(vo,o);xd.subVectors(e,s);const g=vo.dot(xd),v=xo.dot(xd);if(v>=0&&g<=v)return t.copy(s);const M=g*h-u*v;if(M<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(n).addScaledVector(xo,c);const y=f*v-g*p;if(y<=0&&p-f>=0&&g-v>=0)return M0.subVectors(s,i),c=(p-f)/(p-f+(g-v)),t.copy(i).addScaledVector(M0,c);const x=1/(y+M+m);return o=M*x,c=m*x,t.copy(n).addScaledVector(vo,o).addScaledVector(xo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cc.copy(n.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Rc.subVectors(this.max,ba),yo.subVectors(e.a,ba),So.subVectors(e.b,ba),Mo.subVectors(e.c,ba),Zr.subVectors(So,yo),Jr.subVectors(Mo,So),ms.subVectors(yo,Mo);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-ms.z,ms.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,ms.z,0,-ms.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-ms.y,ms.x,0];return!wd(t,yo,So,Mo,Rc)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,yo,So,Mo,Rc))?!1:(Pc.crossVectors(Zr,Jr),t=[Pc.x,Pc.y,Pc.z],wd(t,yo,So,Mo,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tr=[new U,new U,new U,new U,new U,new U,new U,new U],zi=new U,Cc=new xn,yo=new U,So=new U,Mo=new U,Zr=new U,Jr=new U,ms=new U,ba=new U,Rc=new U,Pc=new U,gs=new U;function wd(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gs.fromArray(r,s);const c=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),u=e.dot(gs),h=t.dot(gs),f=n.dot(gs);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const Pr=fw();function fw(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)o[u]=u<<23;o[31]=1199570944,o[32]=2147483648;for(let u=33;u<63;++u)o[u]=2147483648+(u-32<<23);o[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:c}}function ii(r){Math.abs(r)>65504&&He("DataUtils.toHalfFloat(): Value out of range."),r=gt(r,-65504,65504),Pr.floatView[0]=r;const e=Pr.uint32View[0],t=e>>23&511;return Pr.baseTable[t]+((e&8388607)>>Pr.shiftTable[t])}function Ba(r){const e=r>>10;return Pr.uint32View[0]=Pr.mantissaTable[Pr.offsetTable[e]+(r&1023)]+Pr.exponentTable[e],Pr.floatView[0]}class dw{static toHalfFloat(e){return ii(e)}static fromHalfFloat(e){return Ba(e)}}const _n=new U,Ic=new _e;let pw=0;class jt extends qi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?Ih(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ns(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vn(e,this.array)}}class mw extends jt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class gw extends jt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class _w extends jt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class vw extends jt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Jp extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xw extends jt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Kp extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yw extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ba(this.array[e*this.itemSize]);return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=ii(t),this}getY(e){let t=Ba(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=ii(t),this}getZ(e){let t=Ba(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=ii(t),this}getW(e){let t=Ba(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=ii(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array)),this.array[e+0]=ii(t),this.array[e+1]=ii(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),i=Vn(i,this.array)),this.array[e+0]=ii(t),this.array[e+1]=ii(n),this.array[e+2]=ii(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=ii(t),this.array[e+1]=ii(n),this.array[e+2]=ii(i),this.array[e+3]=ii(s),this}}class Je extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Sw=new xn,Ta=new U,Ed=new U;class yn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sw.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ta,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Ed)),this.expandByPoint(Ta.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mw=0;const Ri=new _t,bd=new Ht,wo=new U,gi=new xn,Aa=new xn,Cn=new U;class St extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?Kp:Jp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Aa.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(gi.min,Aa.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,Aa.max),gi.expandByPoint(Cn)):(gi.expandByPoint(Aa.min),gi.expandByPoint(Aa.max))}gi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)Cn.fromBufferAttribute(c,h),u&&(wo.fromBufferAttribute(e,h),Cn.add(wo)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const c=[],u=[],h=new Uint8Array(n.count);for(let O=0;O<n.count;O++)c[O]=new U,u[O]=new U;const f=new U,p=new U,m=new U,g=new _e,v=new _e,M=new _e,y=new U,x=new U;function w(O,N,D){h[O]=h[N]=h[D]=1,f.fromBufferAttribute(n,O),p.fromBufferAttribute(n,N),m.fromBufferAttribute(n,D),g.fromBufferAttribute(s,O),v.fromBufferAttribute(s,N),M.fromBufferAttribute(s,D),p.sub(f),m.sub(f),v.sub(g),M.sub(g);const X=1/(v.x*M.y-M.x*v.y);isFinite(X)&&(y.copy(p).multiplyScalar(M.y).addScaledVector(m,-v.y).multiplyScalar(X),x.copy(m).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(X),c[O].add(y),c[N].add(y),c[D].add(y),u[O].add(x),u[N].add(x),u[D].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,N=b.length;O<N;++O){const D=b[O],X=D.start,K=D.count;for(let V=X,Q=X+K;V<Q;V+=3)w(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new U,P=new U,C=new U,E=new U;function R(O){C.fromBufferAttribute(i,O),E.copy(C);const N=c[O];T.copy(N),T.sub(C.multiplyScalar(C.dot(N))).normalize(),P.crossVectors(E,N);const X=P.dot(u[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,X)}for(let O=0,N=n.count;O<N;++O)h[O]&&R(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new U,s=new U,o=new U,c=new U,u=new U,h=new U,f=new U,p=new U;if(e)for(let m=0,g=e.count;m<g;m+=3){const v=e.getX(m+0),M=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,y),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),c.add(f),u.add(f),h.add(f),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,v=0;for(let M=0,y=u.length;M<y;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*f;for(let x=0;x<f;x++)m[v++]=h[g++]}return new jt(m,f,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=w0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=w0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function w0(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Li()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}const Xn=new U;class vi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Ih(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ll("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ll("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ns(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vn(e,this.data.array)}}const Td=new U,ww=new U,Ew=new xt;class cr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Td.subVectors(n,t).cross(ww.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Td),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ew.getNormalMatrix(e),i=this.coplanarPoint(Td).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bw=0;class Dn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Wo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cp,this.blendDst=Rp,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eu,this.stencilZFail=Eu,this.stencilZPass=Eu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new cr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qp extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Eo;const Ca=new U,bo=new U,To=new U,Ao=new _e,Ra=new _e,ox=new _t,Lc=new U,Pa=new U,Nc=new U,E0=new _e,Ad=new _e,b0=new _e;class ax extends Ht{constructor(e=new Qp){if(super(),this.isSprite=!0,this.type="Sprite",Eo===void 0){Eo=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oh(t,5);Eo.setIndex([0,1,2,0,2,3]),Eo.setAttribute("position",new vi(n,3,0,!1)),Eo.setAttribute("uv",new vi(n,2,3,!1))}this.geometry=Eo,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bo.setFromMatrixScale(this.matrixWorld),ox.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),To.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bo.multiplyScalar(-To.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Dc(Lc.set(-.5,-.5,0),To,o,bo,i,s),Dc(Pa.set(.5,-.5,0),To,o,bo,i,s),Dc(Nc.set(.5,.5,0),To,o,bo,i,s),E0.set(0,0),Ad.set(1,0),b0.set(1,1);let c=e.ray.intersectTriangle(Lc,Pa,Nc,!1,Ca);if(c===null&&(Dc(Pa.set(-.5,.5,0),To,o,bo,i,s),Ad.set(0,1),c=e.ray.intersectTriangle(Lc,Nc,Pa,!1,Ca),c===null))return;const u=e.ray.origin.distanceTo(Ca);u<e.near||u>e.far||t.push({distance:u,point:Ca.clone(),uv:oi.getInterpolation(Ca,Lc,Pa,Nc,E0,Ad,b0,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Dc(r,e,t,n,i,s){Ao.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ra.x=s*Ao.x-i*Ao.y,Ra.y=i*Ao.x+s*Ao.y):Ra.copy(Ao),r.copy(e),r.x+=Ra.x,r.y+=Ra.y,r.applyMatrix4(ox)}const Uc=new U,T0=new U;class lx extends Ht{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Uc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Uc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Uc.setFromMatrixPosition(e.matrixWorld),T0.setFromMatrixPosition(this.matrixWorld);const n=Uc.distanceTo(T0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Ar=new U,Cd=new U,Oc=new U,Fc=new U;class Ws{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cd.copy(e).add(t).multiplyScalar(.5),Oc.copy(t).sub(e).normalize(),Fc.copy(this.origin).sub(Cd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oc),c=Fc.dot(this.direction),u=-Fc.dot(Oc),h=Fc.lengthSq(),f=Math.abs(1-o*o);let p,m,g,v;if(f>0)if(p=o*u-c,m=o*c-u,v=s*f,p>=0)if(m>=-v)if(m<=v){const M=1/f;p*=M,m*=M,g=p*(p+o*m+2*c)+m*(o*p+m+2*u)+h}else m=s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-v?(p=Math.max(0,-(-o*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=v?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(o*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=o>0?-s:s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Cd).addScaledVector(Oc,m),g}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);const n=Ar.dot(this.direction),i=Ar.dot(Ar)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,i,s){const o=this.origin,c=this.direction,u=c.x,h=c.y,f=c.z,p=e.x-o.x,m=e.y-o.y,g=e.z-o.z,v=t.x-o.x,M=t.y-o.y,y=t.z-o.z,x=n.x-o.x,w=n.y-o.y,b=n.z-o.z,T=Math.abs(u),P=Math.abs(h),C=Math.abs(f);let E,R,O,N,D,X,K,V,Q,oe,$,k;if(T>=P&&T>=C?(O=u,X=p,Q=v,k=x,u>=0?(E=h,R=f,N=m,D=g,K=M,V=y,oe=w,$=b):(E=f,R=h,N=g,D=m,K=y,V=M,oe=b,$=w)):P>=C?(O=h,X=m,Q=M,k=w,h>=0?(E=f,R=u,N=g,D=p,K=y,V=v,oe=b,$=x):(E=u,R=f,N=p,D=g,K=v,V=y,oe=x,$=b)):(O=f,X=g,Q=y,k=b,f>=0?(E=u,R=h,N=p,D=m,K=v,V=M,oe=x,$=w):(E=h,R=u,N=m,D=p,K=M,V=v,oe=w,$=x)),O===0)return null;const H=E/O,W=R/O,J=1/O,pe=N-H*X,Me=D-W*X,ae=K-H*Q,ye=V-W*Q,Ie=oe-H*k,qe=$-W*k,Ue=Ie*ye-qe*ae,nt=pe*qe-Me*Ie,vt=ae*Me-ye*pe;if(i){if(Ue<0||nt<0||vt<0)return null}else if((Ue<0||nt<0||vt<0)&&(Ue>0||nt>0||vt>0))return null;const Pe=Ue+nt+vt;if(Pe===0)return null;const lt=J*(Ue*X+nt*Q+vt*k);return(Pe>0?lt<0:lt>0)?null:this.at(lt/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xs extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const A0=new _t,_s=new Ws,Bc=new yn,C0=new U,zc=new U,kc=new U,Hc=new U,Rd=new U,Vc=new U,R0=new U,Gc=new U;class Sn extends Ht{constructor(e=new St,t=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Vc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(Rd.fromBufferAttribute(p,e),o?Vc.addScaledVector(Rd,f):Vc.addScaledVector(Rd.sub(t),f))}t.add(Vc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(Bc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Bc,C0)===null||_s.origin.distanceToSquared(C0)>(e.far-e.near)**2))&&(A0.copy(s).invert(),_s.copy(e.ray).applyMatrix4(A0),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let v=0,M=m.length;v<M;v++){const y=m[v],x=o[y.materialIndex],w=Math.max(y.start,g.start),b=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let T=w,P=b;T<P;T+=3){const C=c.getX(T),E=c.getX(T+1),R=c.getX(T+2);i=Wc(this,x,e,n,h,f,p,C,E,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let y=v,x=M;y<x;y+=3){const w=c.getX(y),b=c.getX(y+1),T=c.getX(y+2);i=Wc(this,o,e,n,h,f,p,w,b,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let v=0,M=m.length;v<M;v++){const y=m[v],x=o[y.materialIndex],w=Math.max(y.start,g.start),b=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let T=w,P=b;T<P;T+=3){const C=T,E=T+1,R=T+2;i=Wc(this,x,e,n,h,f,p,C,E,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let y=v,x=M;y<x;y+=3){const w=y,b=y+1,T=y+2;i=Wc(this,o,e,n,h,f,p,w,b,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function Tw(r,e,t,n,i,s,o,c){let u;if(e.side===Jn?u=n.intersectTriangle(o,s,i,!0,c):u=n.intersectTriangle(i,s,o,e.side===$r,c),u===null)return null;Gc.copy(c),Gc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Gc);return h<t.near||h>t.far?null:{distance:h,point:Gc.clone(),object:r}}function Wc(r,e,t,n,i,s,o,c,u,h){r.getVertexPosition(c,zc),r.getVertexPosition(u,kc),r.getVertexPosition(h,Hc);const f=Tw(r,e,t,n,zc,kc,Hc,R0);if(f){const p=new U;oi.getBarycoord(R0,zc,kc,Hc,p),i&&(f.uv=oi.getInterpolatedAttribute(i,c,u,h,p,new _e)),s&&(f.uv1=oi.getInterpolatedAttribute(s,c,u,h,p,new _e)),o&&(f.normal=oi.getInterpolatedAttribute(o,c,u,h,p,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new U,materialIndex:0};oi.getNormal(zc,kc,Hc,m.normal),f.face=m,f.barycoord=p}return f}const Ia=new Bt,P0=new Bt,I0=new Bt,Aw=new Bt,L0=new _t,Xc=new U,Pd=new yn,N0=new _t,Id=new Ws;class cx extends Sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fp,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xc),this.boundingBox.expandByPoint(Xc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xc),this.boundingSphere.expandByPoint(Xc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pd.copy(this.boundingSphere),Pd.applyMatrix4(i),e.ray.intersectsSphere(Pd)!==!1&&(N0.copy(i).invert(),Id.copy(e.ray).applyMatrix4(N0),!(this.boundingBox!==null&&Id.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Id)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hv?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;P0.fromBufferAttribute(i.attributes.skinIndex,e),I0.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ia.copy(t),t.set(0,0,0,0)):(Ia.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=I0.getComponent(s);if(o!==0){const c=P0.getComponent(s);L0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(Aw.copy(Ia).applyMatrix4(L0),o)}}return t.isVector4&&(t.w=Ia.w),t.applyMatrix4(this.bindMatrixInverse)}}class $p extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pi extends sn{constructor(e=null,t=1,n=1,i,s,o,c,u,h=fn,f=fn,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const D0=new _t,Cw=new _t;class Fh{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:Cw;D0.multiplyMatrices(c,t[s]),D0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pi(t,e,e,Zn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(He("Skeleton: No bone found with UUID:",s),o=new $p),this.bones.push(o),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Zo extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Co=new _t,U0=new _t,Yc=[],O0=new xn,Rw=new _t,La=new Sn,Na=new yn;class ux extends Sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),O0.copy(e.boundingBox).applyMatrix4(Co),this.boundingBox.union(O0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),Na.copy(e.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Co),U0.multiplyMatrices(n,Co),La.matrixWorld=U0,La.raycast(e,Yc);for(let o=0,c=Yc.length;o<c;o++){const u=Yc[o];u.instanceId=s,u.object=this,t.push(u)}Yc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pi(new Float32Array(i*this.count),i,this.count,Th,jn));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;return s[u]=c,s.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vs=new yn,Pw=new _e(.5,.5),qc=new U;class Hs{constructor(e=new cr,t=new cr,n=new cr,i=new cr,s=new cr,o=new cr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){const i=this.planes,s=e.elements,o=s[0],c=s[1],u=s[2],h=s[3],f=s[4],p=s[5],m=s[6],g=s[7],v=s[8],M=s[9],y=s[10],x=s[11],w=s[12],b=s[13],T=s[14],P=s[15];if(i[0].setComponents(h-o,g-f,x-v,P-w).normalize(),i[1].setComponents(h+o,g+f,x+v,P+w).normalize(),i[2].setComponents(h+c,g+p,x+M,P+b).normalize(),i[3].setComponents(h-c,g-p,x-M,P-b).normalize(),n)i[4].setComponents(u,m,y,T).normalize(),i[5].setComponents(h-u,g-m,x-y,P-T).normalize();else if(i[4].setComponents(h-u,g-m,x-y,P-T).normalize(),t===_i)i[5].setComponents(h+u,g+m,x+y,P+T).normalize();else if(t===ks)i[5].setComponents(u,m,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=Pw.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qc.x=i.normal.x>0?e.max.x:e.min.x,qc.y=i.normal.y>0?e.max.y:e.min.y,qc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const F0=new _t;class xl{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];F0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Hs),n[i].setFromProjectionMatrix(F0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Hs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new xl().copy(this)}}function Ld(r,e){return r-e}function Iw(r,e){return r.z-e.z}function Lw(r,e){return e.z-r.z}class Nw{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const c=s[this.index];o.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const ni=new _t,Dw=new je(1,1,1),Uw=new Hs,Ow=new xl,jc=new xn,xs=new yn,Nd=new U,B0=new U,z0=new U,Fw=new U,Dd=new Nw,Hn=new Sn,Zc=[];function Bw(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function ir(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class hx extends Sn{constructor(e,t,n=t*2,i){super(new St,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Pi(t,e,e,Zn,jn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Pi(t,e,e,vl,Ii);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Pi(t,e,e,Zn,jn);n.colorSpace=Ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=o,f=new c.constructor(n*u),p=new jt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new jt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,ni),this.getBoundingBoxAt(s,jc).applyMatrix4(ni),e.union(jc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,ni),this.getBoundingSphereAt(s,xs).applyMatrix4(ni),e.union(xs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ld),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;ni.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Dw.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ld),u=this._availableGeometryIds.shift(),s[u]=i):(u=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(u,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),c=this._geometryInfo[e];if(i&&o.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const f in n.attributes){const p=t.getAttribute(f),m=n.getAttribute(f);Bw(p,m,u);const g=p.itemSize;for(let v=p.count,M=h;v<M;v++){const y=u+v;for(let x=0;x<g;x++)m.setComponent(y,x,0)}m.needsUpdate=!0,m.addUpdateRange(u*g,h*g)}if(i){const f=c.indexStart,p=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let m=0;m<o.count;m++)s.setX(f+m,u+o.getX(m));for(let m=o.count,g=p;m<g;m++)s.setX(f+m,u);s.needsUpdate=!0,s.addUpdateRange(f,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,c)=>c).sort((o,c)=>n[o].vertexStart-n[c].vertexStart),s=this.geometry;for(let o=0,c=n.length;o<c;o++){const u=i[o],h=n[u];if(h.active!==!1){if(s.index!==null){if(h.indexStart!==t){const{indexStart:f,vertexStart:p,reservedIndexCount:m}=h,g=s.index,v=g.array,M=e-p;for(let y=f;y<f+m;y++)v[y]=v[y]+M;g.array.copyWithin(t,f,f+m),g.addUpdateRange(t,m),g.needsUpdate=!0,h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:f,reservedVertexCount:p}=h,m=s.attributes;for(const g in m){const v=m[g],{array:M,itemSize:y}=v;M.copyWithin(e*y,f*y,(f+p)*y),v.addUpdateRange(e*y,p*y),v.needsUpdate=!0}h.vertexStart=e}e+=h.reservedVertexCount,h.start=s.index?h.indexStart:h.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new xn,o=n.index,c=n.attributes.position;for(let u=i.start,h=i.start+i.count;u<h;u++){let f=u;o&&(f=o.getX(f)),s.expandByPoint(Nd.fromBufferAttribute(c,f))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new yn;this.getBoundingBoxAt(e,jc),jc.getCenter(s.center);const o=n.index,c=n.attributes.position;let u=0;for(let h=i.start,f=i.start+i.count;h<f;h++){let p=h;o&&(p=o.getX(p)),Nd.fromBufferAttribute(c,p),u=Math.max(u,s.center.distanceToSquared(Nd))}s.radius=Math.sqrt(u),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Ld);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);ir(this._multiDrawCounts,i),ir(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s;const o=new Int32Array(e),c=new Int32Array(e),u=new Int32Array(e);ir(this._mergedDrawCounts,o),ir(this._mergedDrawStarts,c),ir(this._mergedDrawInstanceCounts,u),this._mergedDrawCounts=o,this._mergedDrawStarts=c,this._mergedDrawInstanceCounts=u,this._maxInstanceCount=e;const h=this._indirectTexture,f=this._matricesTexture,p=this._colorsTexture;h.dispose(),this._initIndirectTexture(),ir(h.image.data,this._indirectTexture.image.data),f.dispose(),this._initMatricesTexture(),ir(f.image.data,this._matricesTexture.image.data),p&&(p.dispose(),this._initColorsTexture(),ir(p.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(u=>u.indexStart+u.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new St,this._initializeGeometry(s));const o=this.geometry;s.index&&ir(s.index.array,o.index.array);for(const c in s.attributes)ir(s.attributes[c].array,o.attributes[c].array);this._visibilityChanged=!0}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;Hn.material=this.material,Hn.geometry.index=o.index,Hn.geometry.attributes=o.attributes,Hn.geometry.boundingBox===null&&(Hn.geometry.boundingBox=new xn),Hn.geometry.boundingSphere===null&&(Hn.geometry.boundingSphere=new yn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Hn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Hn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Hn.geometry.boundingBox),this.getBoundingSphereAt(h,Hn.geometry.boundingSphere),Hn.raycast(e,Zc);for(let p=0,m=Zc.length;p<m;p++){const g=Zc[p];g.object=this,g.batchId=c,t.push(g)}Zc.length=0}Hn.material=null,Hn.geometry.index=null,Hn.geometry.attributes={},Hn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=t.getIndex();let o=s===null?1:s.array.BYTES_PER_ELEMENT,c=1;n.wireframe&&(c=2,o=t.attributes.position.count>65535?4:2);const u=this._instanceInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._mergedDrawStarts,m=this._mergedDrawCounts,g=this._mergedDrawInstanceCounts,v=this._geometryInfo,M=this.perObjectFrustumCulled,y=this._indirectTexture,x=y.image.data,w=e.isArrayCamera?Ow:Uw;M&&(e.isArrayCamera?w.setFromArrayCamera(e):(ni.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),w.setFromProjectionMatrix(ni,e.coordinateSystem,e.reversedDepth)));let b=0,T=0;if(this.sortObjects){ni.copy(this.matrixWorld).invert(),B0.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ni),z0.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(ni);for(let E=0,R=u.length;E<R;E++)if(u[E].visible&&u[E].active){const O=u[E].geometryIndex;this.getMatrixAt(E,ni),this.getBoundingSphereAt(O,xs).applyMatrix4(ni);let N=!1;if(M&&(N=!w.intersectsSphere(xs)),!N){const D=v[O],X=Fw.subVectors(xs.center,B0).dot(z0);Dd.push(D.start,D.count,X,E)}}const P=Dd.list,C=this.customSort;C===null?P.sort(n.transparent?Lw:Iw):C.call(this,P,e);for(let E=0,R=P.length;E<R;E++){const O=P[E],N=O.start*o*c,D=O.count*c;i==="merged"?T>0&&p[T-1]===N&&m[T-1]===D?g[T-1]++:(p[T]=N,m[T]=D,g[T]=1,T++):(h[b]=N,f[b]=D),x[b]=O.index,b++}Dd.reset()}else for(let P=0,C=u.length;P<C;P++)if(u[P].visible&&u[P].active){const E=u[P].geometryIndex;let R=!1;if(M&&(this.getMatrixAt(P,ni),this.getBoundingSphereAt(E,xs).applyMatrix4(ni),R=!w.intersectsSphere(xs)),!R){const O=v[E],N=O.start*o*c,D=O.count*c;i==="merged"?T>0&&p[T-1]===N&&m[T-1]===D?g[T-1]++:(p[T]=N,m[T]=D,g[T]=1,T++):(h[b]=N,f[b]=D),x[b]=P,b++}}y.needsUpdate=!0,this._multiDrawCount=b,this._mergedDrawCount=T,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,s){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,s)}onBeforeShadow(e,t,n,i,s,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,s,o)}}class Kn extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dh=new U,ph=new U,k0=new _t,Da=new Ws,Jc=new yn,Ud=new U,H0=new U;let ns=class extends Ht{constructor(e=new St,t=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)dh.fromBufferAttribute(t,i-1),ph.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dh.distanceTo(ph);e.setAttribute("lineDistance",new Je(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jc.copy(n.boundingSphere),Jc.applyMatrix4(i),Jc.radius+=s,e.ray.intersectsSphere(Jc)===!1)return;k0.copy(i).invert(),Da.copy(e.ray).applyMatrix4(k0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let M=g,y=v-1;M<y;M+=h){const x=f.getX(M),w=f.getX(M+1),b=Kc(this,e,Da,u,x,w,M);b&&t.push(b)}if(this.isLineLoop){const M=f.getX(v-1),y=f.getX(g),x=Kc(this,e,Da,u,M,y,v-1);x&&t.push(x)}}else{const g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let M=g,y=v-1;M<y;M+=h){const x=Kc(this,e,Da,u,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){const M=Kc(this,e,Da,u,v-1,g,v-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Kc(r,e,t,n,i,s,o){const c=r.geometry.attributes.position;if(dh.fromBufferAttribute(c,i),ph.fromBufferAttribute(c,s),t.distanceSqToSegment(dh,ph,Ud,H0)>n)return;Ud.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Ud);if(!(h<e.near||h>e.far))return{distance:h,point:H0.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const V0=new U,G0=new U;class mr extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)V0.fromBufferAttribute(t,i),G0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+V0.distanceTo(G0);e.setAttribute("lineDistance",new Je(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fx extends ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class em extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W0=new _t,mp=new Ws,Qc=new yn,$c=new U;class dx extends Ht{constructor(e=new St,t=new em){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qc.copy(n.boundingSphere),Qc.applyMatrix4(i),Qc.radius+=s,e.ray.intersectsSphere(Qc)===!1)return;W0.copy(i).invert(),mp.copy(e.ray).applyMatrix4(W0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,M=g;v<M;v++){const y=h.getX(v);$c.fromBufferAttribute(p,y),X0($c,y,u,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=m,M=g;v<M;v++)$c.fromBufferAttribute(p,v),X0($c,v,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function X0(r,e,t,n,i,s,o){const c=mp.distanceSqToPoint(r);if(c<t){const u=new U;mp.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class px extends sn{constructor(e,t,n,i,s=rn,o=rn,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const f=this;function p(){f.needsUpdate=!0,f._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class zw extends px{constructor(e,t,n,i,s,o,c,u){super({},e,t,n,i,s,o,c,u),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class kw extends sn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=fn,this.minFilter=fn,this.generateMipmaps=!1,this.needsUpdate=!0}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this}}class Bh extends sn{constructor(e=[],t,n,i,s,o,c,u,h,f,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Hw extends Bh{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=ai,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vw extends Bh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Dr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class yl extends sn{constructor(e=[],t=Dr,n,i,s,o,c,u,h,f){super(e,t,n,i,s,o,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gw extends sn{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ww extends sn{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const f=e?e.parentNode:null;f!==null&&"requestPaint"in f&&(f.onpaint=()=>{this.needsUpdate=!0},f.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class Vs extends sn{constructor(e,t,n=Ii,i,s,o,c=fn,u=fn,h,f=Ur,p=1){if(f!==Ur&&f!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:p};super(m,i,s,o,c,u,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class tm extends Vs{constructor(e,t=Ii,n=Dr,i,s,o=fn,c=fn,u,h=Ur){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,i,s,o,c,u,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nm extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ys extends St{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],p=[];let m=0,g=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function v(M,y,x,w,b,T,P,C,E,R,O){const N=T/E,D=P/R,X=T/2,K=P/2,V=C/2,Q=E+1,oe=R+1;let $=0,k=0;const H=new U;for(let W=0;W<oe;W++){const J=W*D-K;for(let pe=0;pe<Q;pe++){const Me=pe*N-X;H[M]=Me*w,H[y]=J*b,H[x]=V,h.push(H.x,H.y,H.z),H[M]=0,H[y]=0,H[x]=C>0?1:-1,f.push(H.x,H.y,H.z),p.push(pe/E),p.push(1-W/R),$+=1}}for(let W=0;W<R;W++)for(let J=0;J<E;J++){const pe=m+J+Q*W,Me=m+J+Q*(W+1),ae=m+(J+1)+Q*(W+1),ye=m+(J+1)+Q*W;u.push(pe,Me,ye),u.push(Me,ae,ye),k+=6}c.addGroup(g,k,O),g+=k,m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zh extends St{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],c=[],u=[],h=[],f=t/2,p=Math.PI/2*e,m=t,g=2*p+m,v=n*2+s,M=i+1,y=new U,x=new U;for(let w=0;w<=v;w++){let b=0,T=0,P=0,C=0;if(w<=n){const O=w/n,N=O*Math.PI/2;T=-f-e*Math.cos(N),P=e*Math.sin(N),C=-e*Math.cos(N),b=O*p}else if(w<=n+s){const O=(w-n)/s;T=-f+O*t,P=e,C=0,b=p+O*m}else{const O=(w-n-s)/n,N=O*Math.PI/2;T=f+e*Math.sin(N),P=e*Math.cos(N),C=e*Math.sin(N),b=p+m+O*p}const E=Math.max(0,Math.min(1,b/g));let R=0;w===0?R=.5/i:w===v&&(R=-.5/i);for(let O=0;O<=i;O++){const N=O/i,D=N*Math.PI*2,X=Math.sin(D),K=Math.cos(D);x.x=-P*K,x.y=T,x.z=P*X,c.push(x.x,x.y,x.z),y.set(-P*K,C,P*X),y.normalize(),u.push(y.x,y.y,y.z),h.push(N+R,E)}if(w>0){const O=(w-1)*M;for(let N=0;N<i;N++){const D=O+N,X=O+N+1,K=w*M+N,V=w*M+N+1;o.push(D,X,K),o.push(X,V,K)}}}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class kh extends St{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],c=[],u=[],h=new U,f=new _e;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sl extends St{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let v=0;const M=[],y=n/2;let x=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(g,2));function w(){const T=new U,P=new U;let C=0;const E=(t-e)/n;for(let R=0;R<=s;R++){const O=[],N=R/s,D=N*(t-e)+e;for(let X=0;X<=i;X++){const K=X/i,V=K*u+c,Q=Math.sin(V),oe=Math.cos(V);P.x=D*Q,P.y=-N*n+y,P.z=D*oe,p.push(P.x,P.y,P.z),T.set(Q,E,oe).normalize(),m.push(T.x,T.y,T.z),g.push(K,1-N),O.push(v++)}M.push(O)}for(let R=0;R<i;R++)for(let O=0;O<s;O++){const N=M[O][R],D=M[O+1][R],X=M[O+1][R+1],K=M[O][R+1];(e>0||O!==0)&&(f.push(N,D,K),C+=3),(t>0||O!==s-1)&&(f.push(D,X,K),C+=3)}h.addGroup(x,C,0),x+=C}function b(T){const P=v,C=new _e,E=new U;let R=0;const O=T===!0?e:t,N=T===!0?1:-1;for(let X=1;X<=i;X++)p.push(0,y*N,0),m.push(0,N,0),g.push(.5,.5),v++;const D=v;for(let X=0;X<=i;X++){const V=X/i*u+c,Q=Math.cos(V),oe=Math.sin(V);E.x=O*oe,E.y=y*N,E.z=O*Q,p.push(E.x,E.y,E.z),m.push(0,N,0),C.x=Q*.5+.5,C.y=oe*.5*N+.5,g.push(C.x,C.y),v++}for(let X=0;X<i;X++){const K=P+X,V=D+X;T===!0?f.push(V,V+1,K):f.push(V+1,V,K),R+=3}h.addGroup(x,R,T===!0?1:2),x+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ml extends Sl{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new Ml(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class is extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];c(i),h(n),f(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(w){const b=new U,T=new U,P=new U;for(let C=0;C<t.length;C+=3)g(t[C+0],b),g(t[C+1],T),g(t[C+2],P),u(b,T,P,w)}function u(w,b,T,P){const C=P+1,E=[];for(let R=0;R<=C;R++){E[R]=[];const O=w.clone().lerp(T,R/C),N=b.clone().lerp(T,R/C),D=C-R;for(let X=0;X<=D;X++)X===0&&R===C?E[R][X]=O:E[R][X]=O.clone().lerp(N,X/D)}for(let R=0;R<C;R++)for(let O=0;O<2*(C-R)-1;O++){const N=Math.floor(O/2);O%2===0?(m(E[R][N+1]),m(E[R+1][N]),m(E[R][N])):(m(E[R][N+1]),m(E[R+1][N+1]),m(E[R+1][N]))}}function h(w){const b=new U;for(let T=0;T<s.length;T+=3)b.x=s[T+0],b.y=s[T+1],b.z=s[T+2],b.normalize().multiplyScalar(w),s[T+0]=b.x,s[T+1]=b.y,s[T+2]=b.z}function f(){const w=new U;for(let b=0;b<s.length;b+=3){w.x=s[b+0],w.y=s[b+1],w.z=s[b+2];const T=y(w)/2/Math.PI+.5,P=x(w)/Math.PI+.5;o.push(T,1-P)}v(),p()}function p(){for(let w=0;w<o.length;w+=6){const b=o[w+0],T=o[w+2],P=o[w+4],C=Math.max(b,T,P),E=Math.min(b,T,P);C>.9&&E<.1&&(b<.2&&(o[w+0]+=1),T<.2&&(o[w+2]+=1),P<.2&&(o[w+4]+=1))}}function m(w){s.push(w.x,w.y,w.z)}function g(w,b){const T=w*3;b.x=e[T+0],b.y=e[T+1],b.z=e[T+2]}function v(){const w=new U,b=new U,T=new U,P=new U,C=new _e,E=new _e,R=new _e;for(let O=0,N=0;O<s.length;O+=9,N+=6){w.set(s[O+0],s[O+1],s[O+2]),b.set(s[O+3],s[O+4],s[O+5]),T.set(s[O+6],s[O+7],s[O+8]),C.set(o[N+0],o[N+1]),E.set(o[N+2],o[N+3]),R.set(o[N+4],o[N+5]),P.copy(w).add(b).add(T).divideScalar(3);const D=y(P);M(C,N+0,w,D),M(E,N+2,b,D),M(R,N+4,T,D)}}function M(w,b,T,P){P<0&&w.x===1&&(o[b]=w.x-1),T.x===0&&T.z===0&&(o[b]=P/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function x(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.vertices,e.indices,e.radius,e.detail)}}class Hh extends is{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hh(e.radius,e.detail)}}const eu=new U,tu=new U,Od=new U,nu=new oi;class mx extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Us*t),o=e.getIndex(),c=e.getAttribute("position"),u=o?o.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m=new Map,g=[];for(let v=0;v<u;v+=3){o?(h[0]=o.getX(v),h[1]=o.getX(v+1),h[2]=o.getX(v+2)):(h[0]=v,h[1]=v+1,h[2]=v+2);const{a:M,b:y,c:x}=nu;if(M.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),x.fromBufferAttribute(c,h[2]),nu.getNormal(Od),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,p[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let w=0;w<3;w++){const b=(w+1)%3,T=p[w],P=p[b],C=nu[f[w]],E=nu[f[b]],R=`${T}_${P}`,O=`${P}_${T}`,N=m.get(O);N?(Od.dot(N.normal)<=s&&(g.push(C.x,C.y,C.z),g.push(E.x,E.y,E.z)),m.set(O,null)):m.has(R)||m.set(R,{index0:h[w],index1:h[b],normal:Od.clone()})}}for(const v of m.values())if(v){const{index0:M,index1:y}=v;eu.fromBufferAttribute(c,M),tu.fromBufferAttribute(c,y),g.push(eu.x,eu.y,eu.z),g.push(tu.x,tu.y,tu.z)}this.setAttribute("position",new Je(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-o,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(o-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),c=this.getPoint(s),u=t||(o.isVector2?new _e:new U);return u.copy(c).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],o=[],c=new U,u=new _t;for(let g=0;g<=e;g++){const v=g/e;i[g]=this.getTangentAt(v,new U)}s[0]=new U,o[0]=new U;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),o[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const v=Math.acos(gt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,v))}o[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(gt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let v=1;v<=e;v++)s[v].applyMatrix4(u.makeRotationAxis(i[v],g*v)),o[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Vh extends ji{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new _e){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gx extends Vh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function im(){let r=0,e=0,t=0,n=0;function i(s,o,c,u){r=s,e=c,t=-3*s+3*o-2*c-u,n=2*s-2*o+c+u}return{initCatmullRom:function(s,o,c,u,h){i(o,c,h*(c-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,c,u,h,f,p){let m=(o-s)/h-(c-s)/(h+f)+(c-o)/f,g=(c-o)/f-(u-o)/(f+p)+(u-c)/p;m*=f,g*=f,i(o,c,m,g)},calc:function(s){const o=s*s,c=o*s;return r+e*s+t*o+n*c}}}const Y0=new U,q0=new U,Fd=new im,Bd=new im,zd=new im;class _x extends ji{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),u=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(q0.subVectors(i[0],i[1]).add(i[0]),h=q0);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(Y0.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Y0),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),y=Math.pow(m.distanceToSquared(f),g);M<1e-4&&(M=1),v<1e-4&&(v=M),y<1e-4&&(y=M),Fd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,v,M,y),Bd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,v,M,y),zd.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,v,M,y)}else this.curveType==="catmullrom"&&(Fd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Bd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),zd.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(Fd.calc(u),Bd.calc(u),zd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function j0(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+o)*u+(-3*t+3*n-2*s-o)*c+s*r+t}function Xw(r,e){const t=1-r;return t*t*e}function Yw(r,e){return 2*(1-r)*r*e}function qw(r,e){return r*r*e}function Ja(r,e,t,n){return Xw(r,e)+Yw(r,t)+qw(r,n)}function jw(r,e){const t=1-r;return t*t*t*e}function Zw(r,e){const t=1-r;return 3*t*t*r*e}function Jw(r,e){return 3*(1-r)*r*r*e}function Kw(r,e){return r*r*r*e}function Ka(r,e,t,n,i){return jw(r,e)+Zw(r,t)+Jw(r,n)+Kw(r,i)}class rm extends ji{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(Ka(e,i.x,s.x,o.x,c.x),Ka(e,i.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vx extends ji{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(Ka(e,i.x,s.x,o.x,c.x),Ka(e,i.y,s.y,o.y,c.y),Ka(e,i.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sm extends ji{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xx extends ji{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends ji{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ja(e,i.x,s.x,o.x),Ja(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends ji{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ja(e,i.x,s.x,o.x),Ja(e,i.y,s.y,o.y),Ja(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lm extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),c=s-o,u=i[o===0?o:o-1],h=i[o],f=i[o>i.length-2?i.length-1:o+1],p=i[o>i.length-3?i.length-1:o+2];return n.set(j0(c,u.x,h.x,f.x,p.x),j0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new _e().fromArray(i))}return this}}var mh=Object.freeze({__proto__:null,ArcCurve:gx,CatmullRomCurve3:_x,CubicBezierCurve:rm,CubicBezierCurve3:vx,EllipseCurve:Vh,LineCurve:sm,LineCurve3:xx,QuadraticBezierCurve:om,QuadraticBezierCurve3:am,SplineCurve:lm});class yx extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-o/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mh[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class cl extends yx{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sm(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new om(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const c=new rm(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,o,c,u),this}absellipse(e,t,n,i,s,o,c,u){const h=new Vh(e,t,n,i,s,o,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wl extends cl{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new cl().fromJSON(i))}return this}}function Qw(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Sx(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,u,h;if(n&&(s=i1(r,e,s,t)),r.length>80*t){c=r[0],u=r[1];let f=c,p=u;for(let m=t;m<i;m+=t){const g=r[m],v=r[m+1];g<c&&(c=g),v<u&&(u=v),g>f&&(f=g),v>p&&(p=v)}h=Math.max(f-c,p-u),h=h!==0?32767/h:0}return ul(s,o,t,c,u,h,0),o}function Sx(r,e,t,n,i){let s;if(i===p1(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Z0(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Z0(o/n|0,r[o],r[o+1],s);return s&&Jo(s,s.next)&&(fl(s),s=s.next),s}function Gs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Jo(t,t.next)||nn(t.prev,t,t.next)===0)){if(fl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ul(r,e,t,n,i,s,o){if(!r)return;!o&&s&&l1(r,n,i,s);let c=r;for(;r.prev!==r.next;){const u=r.prev,h=r.next;if(s?e1(r,n,i,s):$w(r)){e.push(u.i,r.i,h.i),fl(r),r=h.next,c=h.next;continue}if(r=h,r===c){o?o===1?(r=t1(Gs(r),e),ul(r,e,t,n,i,s,2)):o===2&&n1(r,e,t,n,i,s):ul(Gs(r),e,t,n,i,s,1);break}}}function $w(r){const e=r.prev,t=r,n=r.next;if(nn(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,c=e.y,u=t.y,h=n.y,f=Math.min(i,s,o),p=Math.min(c,u,h),m=Math.max(i,s,o),g=Math.max(c,u,h);let v=n.next;for(;v!==e;){if(v.x>=f&&v.x<=m&&v.y>=p&&v.y<=g&&za(i,c,s,u,o,h,v.x,v.y)&&nn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function e1(r,e,t,n){const i=r.prev,s=r,o=r.next;if(nn(i,s,o)>=0)return!1;const c=i.x,u=s.x,h=o.x,f=i.y,p=s.y,m=o.y,g=Math.min(c,u,h),v=Math.min(f,p,m),M=Math.max(c,u,h),y=Math.max(f,p,m),x=gp(g,v,e,t,n),w=gp(M,y,e,t,n);let b=r.prevZ,T=r.nextZ;for(;b&&b.z>=x&&T&&T.z<=w;){if(b.x>=g&&b.x<=M&&b.y>=v&&b.y<=y&&b!==i&&b!==o&&za(c,f,u,p,h,m,b.x,b.y)&&nn(b.prev,b,b.next)>=0||(b=b.prevZ,T.x>=g&&T.x<=M&&T.y>=v&&T.y<=y&&T!==i&&T!==o&&za(c,f,u,p,h,m,T.x,T.y)&&nn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;b&&b.z>=x;){if(b.x>=g&&b.x<=M&&b.y>=v&&b.y<=y&&b!==i&&b!==o&&za(c,f,u,p,h,m,b.x,b.y)&&nn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;T&&T.z<=w;){if(T.x>=g&&T.x<=M&&T.y>=v&&T.y<=y&&T!==i&&T!==o&&za(c,f,u,p,h,m,T.x,T.y)&&nn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function t1(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Jo(n,i)&&wx(n,t,t.next,i)&&hl(n,i)&&hl(i,n)&&(e.push(n.i,t.i,i.i),fl(t),fl(t.next),t=r=i),t=t.next}while(t!==r);return Gs(t)}function n1(r,e,t,n,i,s){let o=r;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&h1(o,c)){let u=Ex(o,c);o=Gs(o,o.next),u=Gs(u,u.next),ul(o,e,t,n,i,s,0),ul(u,e,t,n,i,s,0);return}c=c.next}o=o.next}while(o!==r)}function i1(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s]*n,u=s<o-1?e[s+1]*n:r.length,h=Sx(r,c,u,n,!1);h===h.next&&(h.steiner=!0),i.push(u1(h))}i.sort(r1);for(let s=0;s<i.length;s++)t=s1(i[s],t);return t}function r1(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function s1(r,e){const t=o1(r,e);if(!t)return e;const n=Ex(t,r);return Gs(n,n.next),Gs(t,t.next)}function o1(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Jo(r,t))return t;do{if(Jo(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const p=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;const c=o,u=o.x,h=o.y;let f=1/0;t=o;do{if(n>=t.x&&t.x>=u&&n!==t.x&&Mx(i<h?n:s,i,u,h,i<h?s:n,i,t.x,t.y)){const p=Math.abs(i-t.y)/(n-t.x);hl(t,r)&&(p<f||p===f&&(t.x>o.x||t.x===o.x&&a1(o,t)))&&(o=t,f=p)}t=t.next}while(t!==c);return o}function a1(r,e){return nn(r.prev,r,e.prev)<0&&nn(e.next,r,r.next)<0}function l1(r,e,t,n){let i=r;do i.z===0&&(i.z=gp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,c1(i)}function c1(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,c=0;for(let h=0;h<t&&(c++,o=o.nextZ,!!o);h++);let u=t;for(;c>0||u>0&&o;)c!==0&&(u===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,c--):(i=o,o=o.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function gp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function u1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Mx(r,e,t,n,i,s,o,c){return(i-o)*(e-c)>=(r-o)*(s-c)&&(r-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(i-o)*(n-c)}function za(r,e,t,n,i,s,o,c){return!(r===o&&e===c)&&Mx(r,e,t,n,i,s,o,c)}function h1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!f1(r,e)&&(hl(r,e)&&hl(e,r)&&d1(r,e)&&(nn(r.prev,r,e.prev)||nn(r,e.prev,e))||Jo(r,e)&&nn(r.prev,r,r.next)>0&&nn(e.prev,e,e.next)>0)}function nn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Jo(r,e){return r.x===e.x&&r.y===e.y}function wx(r,e,t,n){const i=ru(nn(r,e,t)),s=ru(nn(r,e,n)),o=ru(nn(t,n,r)),c=ru(nn(t,n,e));return!!(i!==s&&o!==c||i===0&&iu(r,t,e)||s===0&&iu(r,n,e)||o===0&&iu(t,r,n)||c===0&&iu(t,e,n))}function iu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ru(r){return r>0?1:r<0?-1:0}function f1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&wx(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function hl(r,e){return nn(r.prev,r,r.next)<0?nn(r,e,r.next)>=0&&nn(r,r.prev,e)>=0:nn(r,e,r.prev)<0||nn(r,r.next,e)<0}function d1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Ex(r,e){const t=_p(r.i,r.x,r.y),n=_p(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Z0(r,e,t,n){const i=_p(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _p(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function p1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class m1{static triangulate(e,t,n=2){return Qw(e,t,n)}}class Gi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];J0(e),K0(n,e);let o=e.length;t.forEach(J0);for(let u=0;u<t.length;u++)i.push(o),o+=t[u].length,K0(n,t[u]);const c=m1.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function J0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function K0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Gh extends St{constructor(e=new wl([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];o(h)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:g1;let b,T=!1,P,C,E,R;if(x){b=x.getSpacedPoints(f),T=!0,m=!1;const me=x.isCatmullRomCurve3?x.closed:!1;P=x.computeFrenetFrames(f,me),C=new U,E=new U,R=new U}m||(y=0,g=0,v=0,M=0);const O=c.extractPoints(h);let N=O.shape;const D=O.holes;if(!Gi.isClockWise(N)){N=N.reverse();for(let me=0,Re=D.length;me<Re;me++){const Le=D[me];Gi.isClockWise(Le)&&(D[me]=Le.reverse())}}function K(me){const Le=10000000000000001e-36;let Be=me[0];for(let Oe=1;Oe<=me.length;Oe++){const ct=Oe%me.length,Ze=me[ct],Mt=Ze.x-Be.x,wt=Ze.y-Be.y,Rt=Mt*Mt+wt*wt,q=Math.max(Math.abs(Ze.x),Math.abs(Ze.y),Math.abs(Be.x),Math.abs(Be.y)),Zt=Le*q*q;if(Rt<=Zt){me.splice(ct,1),Oe--;continue}Be=Ze}}K(N),D.forEach(K);const V=D.length,Q=N;for(let me=0;me<V;me++){const Re=D[me];N=N.concat(Re)}function oe(me,Re,Le){return Re||rt("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(Re,Le)}const $=N.length;function k(me,Re,Le){let Be,Oe,ct;const Ze=me.x-Re.x,Mt=me.y-Re.y,wt=Le.x-me.x,Rt=Le.y-me.y,q=Ze*Ze+Mt*Mt,Zt=Ze*Rt-Mt*wt;if(Math.abs(Zt)>Number.EPSILON){const yt=Math.sqrt(q),Pt=Math.sqrt(wt*wt+Rt*Rt),Fe=Re.x-Mt/yt,Jt=Re.y+Ze/yt,st=Le.x-Rt/Pt,ut=Le.y+wt/Pt,B=((st-Fe)*Rt-(ut-Jt)*wt)/(Ze*Rt-Mt*wt);Be=Fe+Ze*B-me.x,Oe=Jt+Mt*B-me.y;const I=Be*Be+Oe*Oe;if(I<=2)return new _e(Be,Oe);ct=Math.sqrt(I/2)}else{let yt=!1;Ze>Number.EPSILON?wt>Number.EPSILON&&(yt=!0):Ze<-Number.EPSILON?wt<-Number.EPSILON&&(yt=!0):Math.sign(Mt)===Math.sign(Rt)&&(yt=!0),yt?(Be=-Mt,Oe=Ze,ct=Math.sqrt(q)):(Be=Ze,Oe=Mt,ct=Math.sqrt(q/2))}return new _e(Be/ct,Oe/ct)}const H=[];for(let me=0,Re=Q.length,Le=Re-1,Be=me+1;me<Re;me++,Le++,Be++)Le===Re&&(Le=0),Be===Re&&(Be=0),H[me]=k(Q[me],Q[Le],Q[Be]);const W=[];let J,pe=H.concat();for(let me=0,Re=V;me<Re;me++){const Le=D[me];J=[];for(let Be=0,Oe=Le.length,ct=Oe-1,Ze=Be+1;Be<Oe;Be++,ct++,Ze++)ct===Oe&&(ct=0),Ze===Oe&&(Ze=0),J[Be]=k(Le[Be],Le[ct],Le[Ze]);W.push(J),pe=pe.concat(J)}let Me;if(y===0)Me=Gi.triangulateShape(Q,D);else{const me=[],Re=[];for(let Le=0;Le<y;Le++){const Be=Le/y,Oe=g*Math.cos(Be*Math.PI/2),ct=v*Math.sin(Be*Math.PI/2)+M;for(let Ze=0,Mt=Q.length;Ze<Mt;Ze++){const wt=oe(Q[Ze],H[Ze],ct);nt(wt.x,wt.y,-Oe),Be===0&&me.push(wt)}for(let Ze=0,Mt=V;Ze<Mt;Ze++){const wt=D[Ze];J=W[Ze];const Rt=[];for(let q=0,Zt=wt.length;q<Zt;q++){const yt=oe(wt[q],J[q],ct);nt(yt.x,yt.y,-Oe),Be===0&&Rt.push(yt)}Be===0&&Re.push(Rt)}}Me=Gi.triangulateShape(me,Re)}const ae=Me.length,ye=v+M;for(let me=0;me<$;me++){const Re=m?oe(N[me],pe[me],ye):N[me];T?(E.copy(P.normals[0]).multiplyScalar(Re.x),C.copy(P.binormals[0]).multiplyScalar(Re.y),R.copy(b[0]).add(E).add(C),nt(R.x,R.y,R.z)):nt(Re.x,Re.y,0)}for(let me=1;me<=f;me++)for(let Re=0;Re<$;Re++){const Le=m?oe(N[Re],pe[Re],ye):N[Re];T?(E.copy(P.normals[me]).multiplyScalar(Le.x),C.copy(P.binormals[me]).multiplyScalar(Le.y),R.copy(b[me]).add(E).add(C),nt(R.x,R.y,R.z)):nt(Le.x,Le.y,p/f*me)}for(let me=y-1;me>=0;me--){const Re=me/y,Le=g*Math.cos(Re*Math.PI/2),Be=v*Math.sin(Re*Math.PI/2)+M;for(let Oe=0,ct=Q.length;Oe<ct;Oe++){const Ze=oe(Q[Oe],H[Oe],Be);nt(Ze.x,Ze.y,p+Le)}for(let Oe=0,ct=D.length;Oe<ct;Oe++){const Ze=D[Oe];J=W[Oe];for(let Mt=0,wt=Ze.length;Mt<wt;Mt++){const Rt=oe(Ze[Mt],J[Mt],Be);T?nt(Rt.x,Rt.y+b[f-1].y,b[f-1].x+Le):nt(Rt.x,Rt.y,p+Le)}}}Ie(),qe();function Ie(){const me=i.length/3;if(m){let Re=0,Le=$*Re;for(let Be=0;Be<ae;Be++){const Oe=Me[Be];vt(Oe[2]+Le,Oe[1]+Le,Oe[0]+Le)}Re=f+y*2,Le=$*Re;for(let Be=0;Be<ae;Be++){const Oe=Me[Be];vt(Oe[0]+Le,Oe[1]+Le,Oe[2]+Le)}}else{for(let Re=0;Re<ae;Re++){const Le=Me[Re];vt(Le[2],Le[1],Le[0])}for(let Re=0;Re<ae;Re++){const Le=Me[Re];vt(Le[0]+$*f,Le[1]+$*f,Le[2]+$*f)}}n.addGroup(me,i.length/3-me,0)}function qe(){const me=i.length/3;let Re=0;Ue(Q,Re),Re+=Q.length;for(let Le=0,Be=D.length;Le<Be;Le++){const Oe=D[Le];Ue(Oe,Re),Re+=Oe.length}n.addGroup(me,i.length/3-me,1)}function Ue(me,Re){let Le=me.length;for(;--Le>=0;){const Be=Le;let Oe=Le-1;Oe<0&&(Oe=me.length-1);for(let ct=0,Ze=f+y*2;ct<Ze;ct++){const Mt=$*ct,wt=$*(ct+1),Rt=Re+Be+Mt,q=Re+Oe+Mt,Zt=Re+Oe+wt,yt=Re+Be+wt;Pe(Rt,q,Zt,yt)}}}function nt(me,Re,Le){u.push(me),u.push(Re),u.push(Le)}function vt(me,Re,Le){lt(me),lt(Re),lt(Le);const Be=i.length/3,Oe=w.generateTopUV(n,i,Be-3,Be-2,Be-1);tt(Oe[0]),tt(Oe[1]),tt(Oe[2])}function Pe(me,Re,Le,Be){lt(me),lt(Re),lt(Be),lt(Re),lt(Le),lt(Be);const Oe=i.length/3,ct=w.generateSideWallUV(n,i,Oe-6,Oe-3,Oe-2,Oe-1);tt(ct[0]),tt(ct[1]),tt(ct[3]),tt(ct[1]),tt(ct[2]),tt(ct[3])}function lt(me){i.push(u[me*3+0]),i.push(u[me*3+1]),i.push(u[me*3+2])}function tt(me){s.push(me.x),s.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mh[i.type]().fromJSON(i)),new Gh(n,e.options)}}const g1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new _e(s,o),new _e(c,u),new _e(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],v=e[i*3+2],M=e[s*3],y=e[s*3+1],x=e[s*3+2];return Math.abs(c-f)<Math.abs(o-h)?[new _e(o,1-u),new _e(h,1-p),new _e(m,1-v),new _e(M,1-x)]:[new _e(c,1-u),new _e(f,1-p),new _e(g,1-v),new _e(y,1-x)]}};function _1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wh extends is{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wh(e.radius,e.detail)}}class Xh extends St{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=gt(i,0,Math.PI*2);const s=[],o=[],c=[],u=[],h=[],f=1/t,p=new U,m=new _e,g=new U,v=new U,M=new U;let y=0,x=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:y=e[w+1].x-e[w].x,x=e[w+1].y-e[w].y,g.x=x*1,g.y=-y,g.z=x*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:M.normalize(),u.push(M.x,M.y,M.z);break;default:y=e[w+1].x-e[w].x,x=e[w+1].y-e[w].y,g.x=x*1,g.y=-y,g.z=x*0,v.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(v)}for(let w=0;w<=t;w++){const b=n+w*f*i,T=Math.sin(b),P=Math.cos(b);for(let C=0;C<=e.length-1;C++){p.x=e[C].x*T,p.y=e[C].y,p.z=e[C].x*P,o.push(p.x,p.y,p.z),m.x=w/t,m.y=C/(e.length-1),c.push(m.x,m.y);const E=u[3*C+0]*T,R=u[3*C+1],O=u[3*C+0]*P;h.push(E,R,O)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const T=b+w*e.length,P=T,C=T+e.length,E=T+e.length+1,R=T+1;s.push(P,C,R),s.push(E,R,C)}this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(c,2)),this.setAttribute("normal",new Je(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.points,e.segments,e.phiStart,e.phiLength)}}class El extends is{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new El(e.radius,e.detail)}}class $o extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],v=[],M=[],y=[];for(let x=0;x<f;x++){const w=x*m-o;for(let b=0;b<h;b++){const T=b*p-s;v.push(T,-w,0),M.push(0,0,1),y.push(b/c),y.push(1-x/u)}}for(let x=0;x<u;x++)for(let w=0;w<c;w++){const b=w+h*x,T=w+h*(x+1),P=w+1+h*(x+1),C=w+1+h*x;g.push(b,T,C),g.push(T,P,C)}this.setIndex(g),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(M,3)),this.setAttribute("uv",new Je(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yh extends St{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new U,v=new _e;for(let M=0;M<=i;M++){for(let y=0;y<=n;y++){const x=s+y/n*o;g.x=p*Math.cos(x),g.y=p*Math.sin(x),u.push(g.x,g.y,g.z),h.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,f.push(v.x,v.y)}p+=m}for(let M=0;M<i;M++){const y=M*(n+1);for(let x=0;x<n;x++){const w=x+y,b=w,T=w+n+1,P=w+n+2,C=w+1;c.push(b,T,C),c.push(T,P,C)}}this.setIndex(c),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qh extends St{constructor(e=new wl([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(o,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const v=m.holes;Gi.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,x=v.length;y<x;y++){const w=v[y];Gi.isClockWise(w)===!0&&(v[y]=w.reverse())}const M=Gi.triangulateShape(g,v);for(let y=0,x=v.length;y<x;y++){const w=v[y];g=g.concat(w)}for(let y=0,x=g.length;y<x;y++){const w=g[y];i.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let y=0,x=M.length;y<x;y++){const w=M[y],b=w[0]+p,T=w[1]+p,P=w[2]+p;n.push(b,T,P),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return v1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new qh(n,e.curveSegments)}}function v1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class bl extends St{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let h=0;const f=[],p=new U,m=new U,g=[],v=[],M=[],y=[];for(let x=0;x<=n;x++){const w=[],b=x/n,T=o+b*c,P=e*Math.cos(T),C=Math.sqrt(e*e-P*P);let E=0;x===0&&o===0?E=.5/t:x===n&&u===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const O=R/t,N=i+O*s;p.x=-C*Math.cos(N),p.y=P,p.z=C*Math.sin(N),v.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),y.push(O+E,1-b),w.push(h++)}f.push(w)}for(let x=0;x<n;x++)for(let w=0;w<t;w++){const b=f[x][w+1],T=f[x][w],P=f[x+1][w],C=f[x+1][w+1];(x!==0||o>0)&&g.push(b,T,C),(x!==n-1||u<Math.PI)&&g.push(T,P,C)}this.setIndex(g),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(M,3)),this.setAttribute("uv",new Je(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jh extends is{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jh(e.radius,e.detail)}}class Zh extends St{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:c},n=Math.floor(n),i=Math.floor(i);const u=[],h=[],f=[],p=[],m=new U,g=new U,v=new U;for(let M=0;M<=n;M++){const y=o+M/n*c;for(let x=0;x<=i;x++){const w=x/i*s;g.x=(e+t*Math.cos(y))*Math.cos(w),g.y=(e+t*Math.cos(y))*Math.sin(w),g.z=t*Math.sin(y),h.push(g.x,g.y,g.z),m.x=e*Math.cos(w),m.y=e*Math.sin(w),v.subVectors(g,m).normalize(),f.push(v.x,v.y,v.z),p.push(x/i),p.push(M/n)}}for(let M=1;M<=n;M++)for(let y=1;y<=i;y++){const x=(i+1)*M+y-1,w=(i+1)*(M-1)+y-1,b=(i+1)*(M-1)+y,T=(i+1)*M+y;u.push(x,w,T),u.push(w,b,T)}this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Jh extends St{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new U,m=new U,g=new U,v=new U,M=new U,y=new U,x=new U;for(let b=0;b<=n;++b){const T=b/n*s*Math.PI*2;w(T,s,o,e,g),w(T+.01,s,o,e,v),y.subVectors(v,g),x.addVectors(v,g),M.crossVectors(y,x),x.crossVectors(M,y),M.normalize(),x.normalize();for(let P=0;P<=i;++P){const C=P/i*Math.PI*2,E=-t*Math.cos(C),R=t*Math.sin(C);p.x=g.x+(E*x.x+R*M.x),p.y=g.y+(E*x.y+R*M.y),p.z=g.z+(E*x.z+R*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(b/n),f.push(P/i)}}for(let b=1;b<=n;b++)for(let T=1;T<=i;T++){const P=(i+1)*(b-1)+(T-1),C=(i+1)*b+(T-1),E=(i+1)*b+T,R=(i+1)*(b-1)+T;c.push(P,C,R),c.push(C,E,R)}this.setIndex(c),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function w(b,T,P,C,E){const R=Math.cos(b),O=Math.sin(b),N=P/T*b,D=Math.cos(N);E.x=C*(2+D)*.5*R,E.y=C*(2+D)*O*.5,E.z=C*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Kh extends St{constructor(e=new am(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new U,u=new U,h=new _e;let f=new U;const p=[],m=[],g=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(g,2));function M(){for(let b=0;b<t;b++)y(b);y(s===!1?t:0),w(),x()}function y(b){f=e.getPointAt(b/t,f);const T=o.normals[b],P=o.binormals[b];for(let C=0;C<=i;C++){const E=C/i*Math.PI*2,R=Math.sin(E),O=-Math.cos(E);u.x=O*T.x+R*P.x,u.y=O*T.y+R*P.y,u.z=O*T.z+R*P.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function x(){for(let b=1;b<=t;b++)for(let T=1;T<=i;T++){const P=(i+1)*(b-1)+(T-1),C=(i+1)*b+(T-1),E=(i+1)*b+T,R=(i+1)*(b-1)+T;v.push(P,C,R),v.push(C,E,R)}}function w(){for(let b=0;b<=t;b++)for(let T=0;T<=i;T++)h.x=b/t,h.y=T/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Kh(new mh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class cm extends St{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const o=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let v=m,M=m+g;v<M;v+=3)for(let y=0;y<3;y++){const x=c.getX(v+y),w=c.getX(v+(y+1)%3);i.fromBufferAttribute(o,x),s.fromBufferAttribute(o,w),Q0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let c=0,u=o.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(o,f),s.fromBufferAttribute(o,p),Q0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Q0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var $0=Object.freeze({__proto__:null,BoxGeometry:Ys,CapsuleGeometry:zh,CircleGeometry:kh,ConeGeometry:Ml,CylinderGeometry:Sl,DodecahedronGeometry:Hh,EdgesGeometry:mx,ExtrudeGeometry:Gh,IcosahedronGeometry:Wh,LatheGeometry:Xh,OctahedronGeometry:El,PlaneGeometry:$o,PolyhedronGeometry:is,RingGeometry:Yh,ShapeGeometry:qh,SphereGeometry:bl,TetrahedronGeometry:jh,TorusGeometry:Zh,TorusKnotGeometry:Jh,TubeGeometry:Kh,WireframeGeometry:cm});class bx extends Dn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ko(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(e_(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(e_(i[0])){const s=[];for(let o=0,c=i.length;o<c;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Yn(r){const e={};for(let t=0;t<r.length;t++){const n=Ko(r[t]);for(const i in n)e[i]=n[i]}return e}function e_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function x1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const gh={clone:Ko,merge:Yn};var y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y1,this.fragmentShader=S1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=x1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(i.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class um extends pr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hm extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ax extends hm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cx extends Dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rx extends Dn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Px extends Dn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ix extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fm extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dm extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lx extends Dn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new je(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nx extends Kn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ki(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ho(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Dx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[c+u]}return i}function Ux(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function M1(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const v=h.times[g]*i;if(!(v<t||v>=n)){p.push(h.times[g]);for(let M=0;M<f;++M)m.push(h.values[g*f+M])}}p.length!==0&&(h.times=ki(p,h.times.constructor),h.values=ki(m,h.values.constructor),o.push(h))}s.tracks=o;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function w1(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const c=t.tracks[o],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(x){return x.name===c.name&&x.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const v=c.times.length-1;let M;if(s<=c.times[0]){const x=f,w=p-f;M=c.values.slice(x,w)}else if(s>=c.times[v]){const x=v*p+f,w=x+p-f;M=c.values.slice(x,w)}else{const x=c.createInterpolant();x.evaluate(s),M=x.resultBuffer.slice()}u==="quaternion"&&new Rn().fromArray(M).normalize().conjugate().toArray(M);const y=h.times.length;for(let x=0;x<y;++x){const w=x*g+m;if(u==="quaternion")Rn.multiplyQuaternionsFlat(h.values,w,M,0,h.values,w);else{const b=g-m*2;for(let T=0;T<b;++T)h.values[w+T]-=M[T]}}}return r.blendMode=Gp,r}class E1{static convertArray(e,t){return ki(e,t)}static isTypedArray(e){return $v(e)}static hasTangents(e){return Ho(e)}static getKeyframeOrder(e){return Dx(e)}static sortedArray(e,t,n){return vp(e,t,n)}static flattenJSON(e,t,n,i){Ux(e,t,n,i)}static subclip(e,t,n,i,s=30){return M1(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return w1(e,t,n,i)}}class ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ox extends ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Is,endingEnd:Is}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],u=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case Ls:s=e,c=2*t-n;break;case rl:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Ls:o=e,u=2*n-t;break;case rl:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,v=(n-t)/(i-t),M=v*v,y=M*v,x=-m*y+2*m*M-m*v,w=(1+m)*y+(-1.5-2*m)*M+(-.5+m)*v+1,b=(-1-g)*y+(1.5+g)*M+.5*v,T=g*y-g*M;for(let P=0;P!==c;++P)s[P]=x*o[f+P]+w*o[h+P]+b*o[u+P]+T*o[p+P];return s}}class pm extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=o[h+m]*p+o[u+m]*f;return s}}class Fx extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bx extends ea{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this.inTangents,p=this.outTangents;if(!f||!p){const v=(n-t)/(i-t),M=1-v;for(let y=0;y!==c;++y)s[y]=o[h+y]*M+o[u+y]*v;return s}const m=c*2,g=e-1;for(let v=0;v!==c;++v){const M=o[h+v],y=o[u+v],x=g*m+v*2,w=p[x],b=p[x+1],T=e*m+v*2,P=f[T],C=f[T+1],E=T1(n,t,w,P,i);s[v]=zx(E,M,b,C,y)}return s}}function zx(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function b1(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function T1(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){const c=zx(s,e,t,n,i)-r;if(Math.abs(c)<1e-10)break;const u=b1(s,e,t,n,i);if(Math.abs(u)<1e-10)break;s=Math.max(0,Math.min(1,s-c/u))}return s}class Ni{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ki(t,this.TimeBufferType),this.values=ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ki(e.times,Array),values:ki(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ho(e.settings)&&(n.settings={inTangents:ki(e.settings.inTangents,Array),outTangents:ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Bx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case il:t=this.InterpolantFactoryMethodDiscrete;break;case fh:t=this.InterpolantFactoryMethodLinear;break;case wu:t=this.InterpolantFactoryMethodSmooth;break;case dp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return il;case this.InterpolantFactoryMethodLinear:return fh;case this.InterpolantFactoryMethodSmooth:return wu;case this.InterpolantFactoryMethodBezier:return dp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Ho(this.settings)&&(t_(this.settings.inTangents,e),t_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ho(this.settings)&&(n_(this.settings.inTangents,e),n_(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){rt("KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){rt("KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(i!==void 0&&$v(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){rt("KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wu,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let v=0;v!==n;++v){const M=t[p+v];if(M!==t[m+v]||M!==t[g+v]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const p=c*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ho(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function t_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function n_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=fh;class qs extends Ni{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=il;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class mm extends Ni{constructor(e,t,n,i){super(e,t,n,i)}}mm.prototype.ValueTypeName="color";class Qh extends Ni{constructor(e,t,n,i){super(e,t,n,i)}}Qh.prototype.ValueTypeName="number";class kx extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Rn.slerpFlat(s,0,o,h-c,o,h,u);return s}}class $h extends Ni{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kx(this.times,this.values,this.getValueSize(),e)}}$h.prototype.ValueTypeName="quaternion";$h.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Ni{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=il;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class gm extends Ni{constructor(e,t,n,i){super(e,t,n,i)}}gm.prototype.ValueTypeName="vector";class dl{constructor(e="",t=-1,n=[],i=Rh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(C1(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ni.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Dx(u);u=vp(u,1,f),h=vp(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new Qh(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function A1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qh;case"vector":case"vector2":case"vector3":case"vector4":return gm;case"color":return mm;case"quaternion":return $h;case"bool":case"boolean":return qs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function C1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A1(r.type);if(r.times===void 0){const n=[],i=[];Ux(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Ho(r.settings)&&(t.settings={inTangents:ki(r.settings.inTangents,Float32Array),outTangents:ki(r.settings.outTangents,Float32Array)}),t}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(i_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!i_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function i_(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _m{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,c),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],v=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hx=new _m;class li{constructor(e){this.manager=e!==void 0?e:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}li.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class R1 extends Error{constructor(e,t){super(e),this.response=t}}class Fr extends li{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:n,onError:i});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=Cr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,v=g!==0;let M=0;const y=new ReadableStream({start(x){w();function w(){p.read().then(({done:b,value:T})=>{if(b)x.close();else{M+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:g});for(let C=0,E=f.length;C<E;C++){const R=f[C];R.onProgress&&R.onProgress(P)}x.enqueue(T),w()}},b=>{x.error(b)})}}});return new Response(y)}else throw new R1(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c==="")return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(v=>g.decode(v))}}}).then(h=>{fr.add(`file:${e}`,h);const f=Cr[e];delete Cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=Cr[e];if(f===void 0)throw this.manager.itemError(e),h;delete Cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class P1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Fr(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):rt(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=dl.parse(e[n]);t.push(i)}return t}}class I1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],c=new Bh,u=new Fr(this.manager);u.setPriority(this.priority),u.setCache(this.cache),u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);o[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=rn),c.image=o,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let v=0;v<g;v++){o[v]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)o[v].mipmaps.push(m.mipmaps[v*m.mipmapCount+M]),o[v].format=m.format,o[v].width=m.width,o[v].height=m.height}c.image=o}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=rn),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}const Ro=new WeakMap;class pl extends li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let p=Ro.get(o);p===void 0&&(p=[],Ro.set(o,p)),p.push({onLoad:t,onError:i})}return o}const c=al("img");function u(){f(),t&&t(this);const p=Ro.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onLoad&&g.onLoad(this)}Ro.delete(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),fr.remove(`image:${e}`);const m=Ro.get(this)||[];for(let g=0;g<m.length;g++){const v=m[g];v.onError&&v.onError(p)}Ro.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),fr.add(`image:${e}`,c),s.manager.itemStart(e),c.fetchPriority=this.priority,c.src=e,c}}class L1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=new yl;s.colorSpace=ri;const o=new pl(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function u(h){o.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class N1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Pi,c=new Fr(this.manager);return c.setPriority(this.priority),c.setCache(this.cache),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){i!==void 0?i(f):rt(f);return}s._applyTexData(o,h),t&&t(o,h)},n,i),o}createDataTexture(e){const t=new Pi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:ai,e.wrapT=t.wrapT!==void 0?t.wrapT:ai,e.magFilter=t.magFilter!==void 0?t.magFilter:rn,e.minFilter=t.minFilter!==void 0?t.minFilter:rn,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Vi),t.mipmapCount===1&&(e.minFilter=rn),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class D1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=new sn,o=new pl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class rs extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vx extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kd=new _t,r_=new U,s_=new U;class ef{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;r_.setFromMatrixPosition(e.matrixWorld),t.position.copy(r_),s_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){kd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=i?i.z/s.x:1,c=i?i.w/s.y:1,u=i?i.x/s.x:0,h=i?i.y/s.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),t.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const su=new U,ou=new Rn,rr=new U;class Tl extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(su,ou,rr),rr.x===1&&rr.y===1&&rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ou,rr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(su,ou,rr),rr.x===1&&rr.y===1&&rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ou,rr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new U,o_=new _e,a_=new _e;class ln extends Tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,o_,a_),t.subVectors(a_,o_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class U1 extends ef{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=jo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Gx extends rs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new U1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class O1 extends ef{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class Wx extends rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dr extends Tl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class F1 extends ef{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xx extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new F1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yx extends rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qx extends rs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class vm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class jx extends rs{constructor(e=new vm,t=1){super(void 0,t),this.isLightProbe=!0,this.type="LightProbe",this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const l_={};class tf extends li{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Fr(s.manager);o.setPriority(s.priority),o.setCache(s.cache),o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):rt(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return tf.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:bx,SpriteMaterial:Qp,RawShaderMaterial:um,ShaderMaterial:pr,PointsMaterial:em,MeshPhysicalMaterial:Ax,MeshStandardMaterial:hm,MeshPhongMaterial:Cx,MeshToonMaterial:Rx,MeshNormalMaterial:Px,MeshLambertMaterial:Ix,MeshDepthMaterial:fm,MeshDistanceMaterial:dm,MeshBasicMaterial:Xs,MeshMatcapMaterial:Lx,LineDashedMaterial:Nx,LineBasicMaterial:Kn,Material:Dn,...l_}[e];let i;return n===void 0?(Lr(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),i=new Dn):i=new n,i}static registerMaterial(e,t){l_[e]=t}}class xp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xm extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Zx extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Fr(s.manager);o.setPriority(s.priority),o.setCache(s.cache),o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):rt(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,v){if(t[v]!==void 0)return t[v];const y=g.interleavedBuffers[v],x=s(g,y.buffer),w=zo(y.type,x),b=new Oh(w,y.stride);return b.uuid=y.uuid,y.usage!==void 0&&b.setUsage(y.usage),t[v]=b,b}function s(g,v){if(n[v]!==void 0)return n[v];const y=g.arrayBuffers[v],x=new Uint32Array(y).buffer;return n[v]=x,x}const o=e.isInstancedBufferGeometry?new xm:new St,c=e.data.index;if(c!==void 0){const g=zo(c.type,c.array);o.setIndex(new jt(g,1))}const u=e.data.attributes;for(const g in u){const v=u[g];let M;if(v.isInterleavedBufferAttribute){const y=i(e.data,v.data);M=new vi(y,v.itemSize,v.offset,v.normalized)}else{const y=zo(v.type,v.array),x=v.isInstancedBufferAttribute?Zo:jt;M=new x(y,v.itemSize,v.normalized)}v.name!==void 0&&(M.name=v.name),v.usage!==void 0&&M.setUsage(v.usage),v.gpuType!==void 0&&(M.gpuType=v.gpuType),o.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const v=h[g],M=[];for(let y=0,x=v.length;y<x;y++){const w=v[y];let b;if(w.isInterleavedBufferAttribute){const T=i(e.data,w.data);b=new vi(T,w.itemSize,w.offset,w.normalized)}else{const T=zo(w.type,w.array);b=new jt(T,w.itemSize,w.normalized)}w.name!==void 0&&(b.name=w.name),w.usage!==void 0&&b.setUsage(w.usage),w.gpuType!==void 0&&(b.gpuType=w.gpuType),M.push(b)}o.morphAttributes[g]=M}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,v=p.length;g!==v;++g){const M=p[g];o.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;return m!==void 0&&(o.boundingSphere=new yn().fromJSON(m)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}const Hd={};class B1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?xp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const c=new Fr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),rt("ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),rt("ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?xp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Fr(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t);let c;try{c=JSON.parse(o)}catch(h){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+h.message)}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,o),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in o)if(o[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,o),u=this.parseObject(e.object,i,c,o,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}static registerGeometry(e,t){Hd[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new wl().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=new Fh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Zx;for(let s=0,o=e.length;s<o;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in $0?c=$0[u.type].fromJSON(u,t):u.type in Hd?c=Hd[u.type].fromJSON(u,t):He(`ObjectLoader: Unknown geometry type "${u.type}". Use .registerGeometry() before starting the deserialization process.`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new tf;s.setTextures(t);for(let o=0,c=e.length;o<c;o++){const u=e[o];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=dl.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(u){return u=n.manager.resolveURL(u),n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return o(f)}else return u.data?{data:zo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new _m(t);s=new pl(u),s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let v=0,M=m.length;v<M;v++){const y=m[v],x=c(y);x!==null&&(x instanceof HTMLImageElement?g.push(x):g.push(new Pi(x.data,x.width,x.height)))}i[p.uuid]=new hr(g)}else{const g=c(p.url);i[p.uuid]=new hr(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const c=o,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return o.data?{data:zo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new pl(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=await s(g);v!==null&&(v instanceof HTMLImageElement?f.push(v):f.push(new Pi(v.data,v.width,v.height)))}n[u.uuid]=new hr(f)}else{const f=await s(u.url);n[u.uuid]=new hr(f)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(He("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=e[s];c.image===void 0&&He('ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&He("ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new yl,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Pi:f=new sn,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,z1)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],c_),f.wrapT=n(c.wrap[1],c_)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,u_)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,u_)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.mipmapsAutoUpdate!==void 0&&(f.mipmapsAutoUpdate=c.mipmapsAutoUpdate),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.normalized!==void 0&&(f.normalized=c.normalized),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let o;function c(m){return t[m]===void 0&&He("ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let v=0,M=m.length;v<M;v++){const y=m[v];n[y]===void 0&&He("ObjectLoader: Undefined material",y),g.push(n[y])}return g}return n[m]===void 0&&He("ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&He("ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":o=new Zp,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new je(e.background):o.background=h(e.background)),e.environment!==void 0&&(o.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Uh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Dh(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new ln(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new dr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Yx(e.color,e.intensity);break;case"DirectionalLight":o=new Xx(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Wx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new qx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Gx(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"",e.map!==void 0&&(o.map=h(e.map));break;case"HemisphereLight":o=new Vx(e.color,e.groundColor,e.intensity);break;case"LightProbe":const m=new vm().fromArray(e.sh);o=new jx(m,e.intensity);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),o=new cx(f,p),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),o=new Sn(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const g=e.count,v=e.instanceMatrix,M=e.instanceColor;o=new ux(f,p,g),o.instanceMatrix=new Zo(new Float32Array(v.array),16),M!==void 0&&(o.instanceColor=new Zo(new Float32Array(M.array),M.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),o=new hx(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),o.geometry=f,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(y=>{let x=null,w=null;return y.boundingBox!==void 0&&(x=new xn().fromJSON(y.boundingBox)),y.boundingSphere!==void 0&&(w=new yn().fromJSON(y.boundingSphere)),{...y,boundingBox:x,boundingSphere:w}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e.availableInstanceIds,o._availableGeometryIds=e.availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=h(e.matricesTexture.uuid),o._indirectTexture=h(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=h(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new yn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new xn().fromJSON(e.boundingBox));break;case"LOD":o=new lx;break;case"Line":o=new ns(c(e.geometry),u(e.material));break;case"LineLoop":o=new fx(c(e.geometry),u(e.material));break;case"LineSegments":o=new mr(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":o=new dx(c(e.geometry),u(e.material));break;case"Sprite":o=new ax(u(e.material)),e.center!==void 0&&o.center.fromArray(e.center);break;case"Group":o=new ko;break;case"Bone":o=new $p;break;default:o=new Ht}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.pivot!==void 0&&(o.pivot=new U().fromArray(e.pivot)),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(o.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(o.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.mapType!==void 0&&(o.shadow.mapType=e.shadow.mapType),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)o.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const v=m[g];o.animations.push(s[v])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const v=m[g],M=o.getObjectByProperty("uuid",v.object);M!==void 0&&o.addLevel(M,v.distance,v.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?He("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Ht}})}}const z1={UVMapping:Mh,CubeReflectionMapping:Dr,CubeRefractionMapping:Bs,EquirectangularReflectionMapping:Va,EquirectangularRefractionMapping:Ga},c_={RepeatWrapping:$a,ClampToEdgeWrapping:ai,MirroredRepeatWrapping:el},u_={NearestFilter:fn,NearestMipmapNearestFilter:Op,NearestMipmapLinearFilter:Bo,LinearFilter:rn,LinearMipmapNearestFilter:Wa,LinearMipmapLinearFilter:Vi},Vd=new WeakMap;class k1 extends li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{Vd.has(o)===!0?(i&&i(Vd.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(h),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const c={};c.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",c.headers=this.requestHeader,c.priority=this.priority,c.cache=this.cache,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Vd.set(u,h),fr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});fr.add(`image-bitmap:${e}`,u),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let au;class ym{static getContext(){return au===void 0&&(au=new(window.AudioContext||window.webkitAudioContext)),au}static setContext(e){au=e}}class H1 extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Fr(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{const h=u.slice(0),f=ym.getContext(),p=e+"#decode";s.manager.itemStart(p),f.decodeAudioData(h,function(m){t(m),s.manager.itemEnd(p)}).catch(function(m){c(m),s.manager.itemEnd(p)})}catch(h){c(h)}},n,i);function c(u){i?i(u):rt(u),s.manager.itemError(e)}}}const h_=new _t,f_=new _t,ys=new _t;class V1{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ln,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ln,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ys.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Us*t.fov*.5)/t.zoom;let c,u;f_.elements[12]=-i,h_.elements[12]=i,c=-o*t.aspect+s,u=o*t.aspect+s,ys.elements[0]=2*t.near/(u-c),ys.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(ys),c=-o*t.aspect-s,u=o*t.aspect-s,ys.elements[0]=2*t.near/(u-c),ys.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(ys)}this.cameraL.matrix.copy(e.matrixWorld).multiply(f_),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(h_),this.cameraR.matrixWorldNeedsUpdate=!0}}const Po=-90,Io=1;class _h extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(Po,Io,e,t);i.layers=this.layers,this.add(i);const s=new ln(Po,Io,e,t);s.layers=this.layers,this.add(s);const o=new ln(Po,Io,e,t);o.layers=this.layers,this.add(o);const c=new ln(Po,Io,e,t);c.layers=this.layers,this.add(c);const u=new ln(Po,Io,e,t);u.layers=this.layers,this.add(u);const h=new ln(Po,Io,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,u]=t;for(const h of t)this.remove(h);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Jx extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Kx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=G1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function G1(){this._document.hidden===!1&&this.reset()}const Ss=new U,Gd=new Rn,W1=new U,Ms=new U,ws=new U;class X1 extends Ht{constructor(){super(),this.type="AudioListener",this.context=ym.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Kx}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ss,Gd,W1),Ms.set(0,0,-1).applyQuaternion(Gd),ws.set(0,1,0).applyQuaternion(Gd),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ss.x,n),t.positionY.linearRampToValueAtTime(Ss.y,n),t.positionZ.linearRampToValueAtTime(Ss.z,n),t.forwardX.linearRampToValueAtTime(Ms.x,n),t.forwardY.linearRampToValueAtTime(Ms.y,n),t.forwardZ.linearRampToValueAtTime(Ms.z,n),t.upX.linearRampToValueAtTime(ws.x,n),t.upY.linearRampToValueAtTime(ws.y,n),t.upZ.linearRampToValueAtTime(ws.z,n)}else t.setPosition(Ss.x,Ss.y,Ss.z),t.setOrientation(Ms.x,Ms.y,Ms.z,ws.x,ws.y,ws.z)}}class Qx extends Ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){He("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){He("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){He("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){He("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){He("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(He("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){He("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(He("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Es=new U,d_=new Rn,Y1=new U,bs=new U;class q1 extends Qx{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Es,d_,Y1),bs.set(0,0,1).applyQuaternion(d_);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Es.x,n),t.positionY.linearRampToValueAtTime(Es.y,n),t.positionZ.linearRampToValueAtTime(Es.z,n),t.orientationX.linearRampToValueAtTime(bs.x,n),t.orientationY.linearRampToValueAtTime(bs.y,n),t.orientationZ.linearRampToValueAtTime(bs.z,n)}else t.setPosition(Es.x,Es.y,Es.z),t.setOrientation(bs.x,bs.y,bs.z)}}class j1{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class $x{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let c=0;c!==i;++c)n[s+c]=n[c];o=t}else{o+=t;const c=t/o;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Rn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Rn.multiplyQuaternionsFlat(e,o,e,t,e,n),Rn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*o+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]+e[n+o]*i}}}const Sm="\\[\\]\\.:\\/",Z1=new RegExp("["+Sm+"]","g"),Mm="[^"+Sm+"]",J1="[^"+Sm.replace("\\.","")+"]",K1=/((?:WC+[\/:])*)/.source.replace("WC",Mm),Q1=/(WCOD+)?/.source.replace("WCOD",J1),$1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mm),eE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mm),tE=new RegExp("^"+K1+Q1+$1+eE+"$"),nE=["material","materials","bones","map"];class iE{constructor(e,t,n){const i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class kt{constructor(e,t,n){this.path=t,this.parsedPath=n||kt.parseTrackName(t),this.node=kt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new kt.Composite(e,t,n):new kt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z1,"")}static parseTrackName(e){const t=tE.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=kt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=iE;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rE{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Li(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let v=t[g];if(v===void 0){v=u++,t[g]=v,e.push(m);for(let M=0,y=o;M!==y;++M)s[M].push(new kt(m,n[M],i[M]))}else if(v<h){c=e[v];const M=--h,y=e[M];t[y.uuid]=v,e[v]=y,t[g]=M,e[M]=m;for(let x=0,w=o;x!==w;++x){const b=s[x],T=b[M];let P=b[v];b[v]=T,P===void 0&&(P=new kt(m,n[x],i[x])),b[M]=P}}else e[v]!==c&&rt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,c=arguments.length;o!==c;++o){const u=arguments[o],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,v=i;g!==v;++g){const M=n[g],y=M[p],x=M[f];M[f]=y,M[p]=x}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],v=--o,M=e[v];p!==m&&(t[g.uuid]=p),e[p]=g,m!==v&&(t[M.uuid]=m),e[m]=M,e.pop();for(let y=0,x=i;y!==x;++y){const w=n[y],b=w[m],T=w[v];w[p]=b,w[m]=T,w.pop()}}else{const m=--o,g=e[m];p!==m&&(t[g.uuid]=p),e[p]=g,e.pop();for(let v=0,M=i;v!==M;++v){const y=n[v];y[p]=y[m],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,o.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const v=u[m];p[m]=new kt(v,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,c=o.length-1,u=o[c],h=i[c];t[h]=n,o[n]=u,o.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class ey{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,c=new Array(o),u={endingStart:Is,endingEnd:Is};for(let h=0;h!==o;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Gv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,c=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const o=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Gp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulateAdditive(c);break;case Rh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Wv;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Vv){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ls,i.endingEnd=Ls):(e?i.endingStart=this.zeroSlopeAtStart?Ls:Is:i.endingStart=rl,t?i.endingEnd=this.zeroSlopeAtEnd?Ls:Is:i.endingEnd=rl)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const sE=new Float32Array(1);class oE extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let v=f[g];if(v!==void 0)++v.referenceCount,o[p]=v;else{if(v=o[p],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;v=new $x(kt.create(n,g,M),m.ValueTypeName,m.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,u,g),o[p]=v}c[p].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const c=o.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,c=o[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,c=o[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new pm(new Float32Array(2),new Float32Array(2),1,sE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?dl.findByName(i,e):e;const c=o!==null?o.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Rh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const f=new ey(this,o,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?dl.findByName(n,e):e,o=s?s.uuid:e,c=this._actionsByClip[o];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let c=0,u=o.length;c!==u;++c){const h=o[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const c=n[o].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const c=s[o];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class aE extends jp{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n;for(let s=0;s<this.textures.length;s++){const o=new Nh(null,e,t,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[s]=o}this._setTextureOptions(i)}}class wm{constructor(e){this.value=e}clone(){return new wm(this.value.clone===void 0?this.value:this.value.clone())}}let lE=0;class cE extends qi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:lE++}),this.name="",this.usage=Ph,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=t[n];Array.isArray(s)?this.uniforms.push(s.map(o=>o.clone())):this.uniforms.push(s.clone())}return this}clone(){return new this.constructor().copy(this)}}class vh extends Oh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class uE{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const p_=new _t;class ty{constructor(e,t,n=0,i=1/0){this.ray=new Ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return p_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p_),this}intersectObject(e,t=!0,n=[]){return yp(e,this,n,t),n.sort(m_),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)yp(e[i],this,n,t);return n.sort(m_),n}}function m_(r,e){return r.distance-e.distance}function yp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,c=s.length;o<c;o++)yp(s[o],e,t,!0)}}class ny{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Sp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hE{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Nm=class Nm{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Nm.prototype.isMatrix2=!0;let Mp=Nm;const g_=new _e;class iy{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=g_.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,g_).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const __=new U,lu=new U,Lo=new U,No=new U,Wd=new U,fE=new U,dE=new U;class ry{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){__.subVectors(e,this.start),lu.subVectors(this.end,this.start);const n=lu.dot(lu);if(n===0)return 0;let s=lu.dot(__)/n;return t&&(s=gt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=fE,n=dE){const i=10000000000000001e-32;let s,o;const c=this.start,u=e.start,h=this.end,f=e.end;Lo.subVectors(h,c),No.subVectors(f,u),Wd.subVectors(c,u);const p=Lo.dot(Lo),m=No.dot(No),g=No.dot(Wd);if(p<=i&&m<=i)return t.copy(c),n.copy(u),t.distanceToSquared(n);if(p<=i)s=0,o=g/m,o=gt(o,0,1);else{const v=Lo.dot(Wd);if(m<=i)o=0,s=gt(-v/p,0,1);else{const M=Lo.dot(No),y=p*m-M*M;y!==0?s=gt((M*g-v*m)/y,0,1):s=0,o=(M*s+g)/m,o<0?(o=0,s=gt(-v/p,0,1)):o>1&&(o=1,s=gt((M-v)/p,0,1))}}return t.copy(c).addScaledVector(Lo,s),n.copy(u).addScaledVector(No,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const v_=new U;class pE extends Ht{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new St,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,c=1,u=32;o<u;o++,c++){const h=o/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new Je(i,3));const s=new Kn({fog:!1,toneMapped:!1});this.cone=new mr(n,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),v_.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(v_),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Qr=new U,cu=new _t,Xd=new _t;class mE extends mr{constructor(e){const t=sy(e),n=new St,i=[],s=[];for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Je(i,3)),n.setAttribute("color",new Je(s,3));const o=new Kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const c=new je(255),u=new je(65280);this.setColors(c,u)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Xd.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(cu.multiplyMatrices(Xd,c.matrixWorld),Qr.setFromMatrixPosition(cu),i.setXYZ(o,Qr.x,Qr.y,Qr.z),cu.multiplyMatrices(Xd,c.parent.matrixWorld),Qr.setFromMatrixPosition(cu),i.setXYZ(o+1,Qr.x,Qr.y,Qr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function sy(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...sy(r.children[t]));return e}class gE extends Sn{constructor(e,t,n){const i=new bl(t,4,2),s=new Xs({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _E=new U,x_=new je,y_=new je;class vE extends Ht{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new El(t);i.rotateY(Math.PI*.5),this.material=new Xs({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new jt(o,3)),this.add(new Sn(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");x_.copy(this.light.color),y_.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?x_:y_;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(_E.setFromMatrixPosition(this.light.matrixWorld).negate())}}class xE extends mr{constructor(e=10,t=10,n=4473924,i=8947848){n=new je(n),i=new je(i);const s=t/2,o=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,v=-c;m<=t;m++,v+=o){u.push(-c,0,v,c,0,v),u.push(v,0,-c,v,0,c);const M=m===s?n:i;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const f=new St;f.setAttribute("position",new Je(u,3)),f.setAttribute("color",new Je(h,3));const p=new Kn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class yE extends mr{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new je(s),o=new je(o);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,v=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,v);const M=p&1?s:o;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:o,g=e-e/n*p;for(let v=0;v<i;v++){let M=v/i*(Math.PI*2),y=Math.sin(M)*g,x=Math.cos(M)*g;c.push(y,0,x),u.push(m.r,m.g,m.b),M=(v+1)/i*(Math.PI*2),y=Math.sin(M)*g,x=Math.cos(M)*g,c.push(y,0,x),u.push(m.r,m.g,m.b)}}const h=new St;h.setAttribute("position",new Je(c,3)),h.setAttribute("color",new Je(u,3));const f=new Kn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const S_=new U,uu=new U,M_=new U;class SE extends Ht{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new St;i.setAttribute("position",new Je([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Kn({fog:!1,toneMapped:!1});this.lightPlane=new ns(i,s),this.add(this.lightPlane),i=new St,i.setAttribute("position",new Je([0,0,0,0,0,1],3)),this.targetLine=new ns(i,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),S_.setFromMatrixPosition(this.light.matrixWorld),uu.setFromMatrixPosition(this.light.target.matrixWorld),M_.subVectors(uu,S_),this.lightPlane.lookAt(uu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(uu),this.targetLine.scale.z=M_.length()}}const hu=new U,an=new Tl;class ME extends mr{constructor(e){const t=new St,n=new Kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(v,M){u(v),u(M)}function u(v){i.push(0,0,0),s.push(0,0,0),o[v]===void 0&&(o[v]=[]),o[v].push(i.length/3-1)}t.setAttribute("position",new Je(i,3)),t.setAttribute("color",new Je(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new je(16755200),f=new je(16711680),p=new je(43775),m=new je(16777215),g=new je(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");return c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(an.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===_i)s=-1,o=1;else if(this.camera.coordinateSystem===ks)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);hn("c",t,e,an,0,0,s),hn("t",t,e,an,0,0,o),hn("n1",t,e,an,-n,-i,s),hn("n2",t,e,an,n,-i,s),hn("n3",t,e,an,-n,i,s),hn("n4",t,e,an,n,i,s),hn("f1",t,e,an,-n,-i,o),hn("f2",t,e,an,n,-i,o),hn("f3",t,e,an,-n,i,o),hn("f4",t,e,an,n,i,o),hn("u1",t,e,an,n*.7,i*1.1,s),hn("u2",t,e,an,-n*.7,i*1.1,s),hn("u3",t,e,an,0,i*2,s),hn("cf1",t,e,an,-n,0,o),hn("cf2",t,e,an,n,0,o),hn("cf3",t,e,an,0,-i,o),hn("cf4",t,e,an,0,i,o),hn("cn1",t,e,an,-n,0,s),hn("cn2",t,e,an,n,0,s),hn("cn3",t,e,an,0,-i,s),hn("cn4",t,e,an,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function hn(r,e,t,n,i,s,o){hu.set(i,s,o).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],hu.x,hu.y,hu.z)}}const fu=new xn;class wE extends mr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new St;s.setIndex(new jt(n,1)),s.setAttribute("position",new jt(i,3)),super(s,new Kn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&fu.setFromObject(this.object),fu.isEmpty())return;const e=fu.min,t=fu.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class EE extends mr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new St;s.setIndex(new jt(n,1)),s.setAttribute("position",new Je(i,3)),super(s,new Kn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class bE extends ns{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new St;o.setAttribute("position",new Je(s,3)),o.computeBoundingSphere(),super(o,new Kn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new St;u.setAttribute("position",new Je(c,3)),u.computeBoundingSphere(),this.add(new Sn(u,new Xs({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const w_=new U;let du,Yd;class oy extends Ht{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",du===void 0&&(du=new St,du.setAttribute("position",new Je([0,0,0,0,1,0],3)),Yd=new Ml(.5,1,5,1),Yd.translate(0,-.5,0)),this.position.copy(t),this.line=new ns(du,new Kn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Sn(Yd,new Xs({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{w_.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(w_,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class TE extends mr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new St;i.setAttribute("position",new Je(t,3)),i.setAttribute("color",new Je(n,3));const s=new Kn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new je,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class AE{constructor(){this.type="ShapePath",this.color=new je,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new cl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(u,h){let f=!1;const p=h.length;for(let m=0,g=p-1;m<p;g=m++){const v=h[m],M=h[g];v.y>u.y!=M.y>u.y&&u.x<(M.x-v.x)*(u.y-v.y)/(M.y-v.y)+v.x&&(f=!f)}return f}function t(u,h){const f=h.getCenter(new _e);if(e(f,u))return f;const p=f.y,m=[],g=u.length;for(let v=0;v<g;v++){const M=u[v],y=u[(v+1)%g];if(M.y>p!=y.y>p){const x=M.x+(p-M.y)*(y.x-M.x)/(y.y-M.y);m.push(x)}}return m.length>1&&(m.sort((v,M)=>v-M),f.x=(m[0]+m[1])/2),f}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(He('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?u=>u!==0:u=>(u&1)!==0,s=[];for(const u of this.subPaths){const h=u.getPoints();if(h.length<3)continue;const f=Gi.area(h);if(f===0)continue;const p=new iy;for(let m=0;m<h.length;m++)p.expandByPoint(h[m]);s.push({subPath:u,points:h,boundingBox:p,interiorPoint:t(h,p),absArea:Math.abs(f),winding:f<0?-1:1,container:null,exclude:!1,role:null})}s.sort((u,h)=>h.absArea-u.absArea);for(let u=0;u<s.length;u++){const h=s[u];let f=0;for(let p=u-1;p>=0;p--){const m=s[p];if(m.boundingBox.containsBox(h.boundingBox)&&e(h.interiorPoint,m.points)){h.container=m.exclude?m.container:m,f=m.winding,h.winding+=f;break}}i(h.winding)===i(f)&&(h.exclude=!0)}for(const u of s)u.exclude||(u.role=u.container===null||u.container.role==="hole"?"outer":"hole");const o=[],c=new Map;for(const u of s){if(u.exclude||u.role!=="outer")continue;const h=new wl;h.curves=u.subPath.curves,o.push(h),c.set(u,h)}for(const u of s){if(u.exclude||u.role!=="hole")continue;const h=c.get(u.container);if(!h)continue;const f=new cl;f.curves=u.subPath.curves,h.holes.push(f)}return o}}class CE extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function RE(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function PE(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function IE(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function wp(r,e,t,n){const i=LE(n);switch(t){case Hp:return r*e;case Th:return r*e/i.components*i.byteLength;case vl:return r*e/i.components*i.byteLength;case es:return r*e*2/i.components*i.byteLength;case Ah:return r*e*2/i.components*i.byteLength;case Vp:return r*e*3/i.components*i.byteLength;case Zn:return r*e*4/i.components*i.byteLength;case Ch:return r*e*4/i.components*i.byteLength;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qa:case ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fu:case zu:return Math.max(r,16)*Math.max(e,8)/4;case Ou:case Bu:return Math.max(r,8)*Math.max(e,8)/2;case ku:case Hu:case Gu:case Wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vu:case tl:case Xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ju:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oh:case ah:case lh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ch:case uh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nl:case hh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LE(r){switch(r){case qn:case Fp:return{byteLength:1,components:1};case qo:case Bp:case Xi:return{byteLength:2,components:1};case Eh:case bh:return{byteLength:2,components:4};case Ii:case wh:case jn:return{byteLength:4,components:1};case zp:case kp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}class NE{static contain(e,t){return RE(e,t)}static cover(e,t){return PE(e,t)}static fill(e){return IE(e)}static getByteLength(e,t,n,i){return wp(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ay(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function DE(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=r.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,v)=>g.start-v.start);let m=0;for(let g=1;g<p.length;g++){const v=p[m],M=p[g];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,v=p.length;g<v;g++){const M=p[g];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:o}}var UE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OE=`#ifdef USE_ALPHAHASH
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
#endif`,FE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jE=`#ifdef USE_IRIDESCENCE
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
#endif`,ZE=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
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
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Tb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ob=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wb=`#if defined( USE_POINTS_UV )
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
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,xT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,ET=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CT=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,NT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UT=`uniform sampler2D t2D;
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,HT=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,GT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ZT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,JT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,KT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,QT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$T=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,eA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,tA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,iA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sA=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,aA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,cA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,uA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,fA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,dA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ct={alphahash_fragment:UE,alphahash_pars_fragment:OE,alphamap_fragment:FE,alphamap_pars_fragment:BE,alphatest_fragment:zE,alphatest_pars_fragment:kE,aomap_fragment:HE,aomap_pars_fragment:VE,batching_pars_vertex:GE,batching_vertex:WE,begin_vertex:XE,beginnormal_vertex:YE,bsdfs:qE,iridescence_fragment:jE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:$E,color_fragment:eb,color_pars_fragment:tb,color_pars_vertex:nb,color_vertex:ib,common:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ob,displacementmap_vertex:ab,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:hb,envmap_fragment:fb,envmap_common_pars_fragment:db,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Tb,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:xb,fog_pars_fragment:yb,gradientmap_pars_fragment:Sb,lightmap_pars_fragment:Mb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Eb,lights_pars_begin:bb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Cb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Ib,lights_physical_pars_fragment:Lb,lights_fragment_begin:Nb,lights_fragment_maps:Db,lights_fragment_end:Ub,lightprobes_pars_fragment:Ob,logdepthbuf_fragment:Fb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:zb,logdepthbuf_vertex:kb,map_fragment:Hb,map_pars_fragment:Vb,map_particle_fragment:Gb,map_particle_pars_fragment:Wb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:Yb,morphinstance_vertex:qb,morphcolor_vertex:jb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Kb,normal_fragment_begin:Qb,normal_fragment_maps:$b,normal_pars_fragment:eT,normal_pars_vertex:tT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:aT,opaque_fragment:lT,packing:cT,premultiplied_alpha_fragment:uT,project_vertex:hT,dithering_fragment:fT,dithering_pars_fragment:dT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:_T,shadowmap_vertex:vT,shadowmask_pars_fragment:xT,skinbase_vertex:yT,skinning_pars_vertex:ST,skinning_vertex:MT,skinnormal_vertex:wT,specularmap_fragment:ET,specularmap_pars_fragment:bT,tonemapping_fragment:TT,tonemapping_pars_fragment:AT,transmission_fragment:CT,transmission_pars_fragment:RT,uv_pars_fragment:PT,uv_pars_vertex:IT,uv_vertex:LT,worldpos_vertex:NT,background_vert:DT,background_frag:UT,backgroundCube_vert:OT,backgroundCube_frag:FT,cube_vert:BT,cube_frag:zT,depth_vert:kT,depth_frag:HT,distance_vert:VT,distance_frag:GT,equirect_vert:WT,equirect_frag:XT,linedashed_vert:YT,linedashed_frag:qT,meshbasic_vert:jT,meshbasic_frag:ZT,meshlambert_vert:JT,meshlambert_frag:KT,meshmatcap_vert:QT,meshmatcap_frag:$T,meshnormal_vert:eA,meshnormal_frag:tA,meshphong_vert:nA,meshphong_frag:iA,meshphysical_vert:rA,meshphysical_frag:sA,meshtoon_vert:oA,meshtoon_frag:aA,points_vert:lA,points_frag:cA,shadow_vert:uA,shadow_frag:hA,sprite_vert:fA,sprite_frag:dA},Ge={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Hi={basic:{uniforms:Yn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Yn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Yn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Yn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Yn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new je(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Yn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Yn([Ge.points,Ge.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Yn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Yn([Ge.common,Ge.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Yn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Yn([Ge.sprite,Ge.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Yn([Ge.common,Ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Yn([Ge.lights,Ge.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Hi.physical={uniforms:Yn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const pu={r:0,b:0,g:0},pA=new _t,ly=new xt;ly.set(-1,0,0,0,1,0,0,0,1);function mA(r,e,t,n,i,s){const o=new je(0);let c=i===!0?0:1,u,h,f=null,p=0,m=null;function g(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){const T=w.backgroundBlurriness>0;b=e.get(b,T)}return b}function v(w){let b=!1;const T=g(w);T===null?y(o,c):T&&T.isColor&&(y(T,1),b=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(w,b){const T=g(b);T&&T.isCubeTexture?(h===void 0&&(h=new Sn(new Ys(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Ko(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pA.makeRotationFromEuler(b.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ly),h.material.toneMapped=Ot.getTransfer(T.colorSpace)!==Wt,(f!==T||p!==T.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=T,p=T.version,m=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Sn(new $o(2,2),new pr({name:"BackgroundMaterial",uniforms:Ko(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Ot.getTransfer(T.colorSpace)!==Wt,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=T,p=T.version,m=r.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function y(w,b){w.getRGB(pu,Tx(r)),t.buffers.color.setClear(pu.r,pu.g,pu.b,b,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),c=b,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,y(o,c)},render:v,addToRenderList:M,dispose:x}}function gA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,o=!1;function c(D,X,K,V,Q){let oe=!1;const $=p(D,V,K,X);s!==$&&(s=$,h(s.object)),oe=g(D,V,K,Q),oe&&v(D,V,K,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,T(D,X,K,V),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return r.createVertexArray()}function h(D){return r.bindVertexArray(D)}function f(D){return r.deleteVertexArray(D)}function p(D,X,K,V){const Q=V.wireframe===!0;let oe=n[X.id];oe===void 0&&(oe={},n[X.id]=oe);const $=D.isInstancedMesh===!0?D.id:0;let k=oe[$];k===void 0&&(k={},oe[$]=k);let H=k[K.id];H===void 0&&(H={},k[K.id]=H);let W=H[Q];return W===void 0&&(W=m(u()),H[Q]=W),W}function m(D){const X=[],K=[],V=[];for(let Q=0;Q<t;Q++)X[Q]=0,K[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:V,object:D,attributes:{},index:null}}function g(D,X,K,V){const Q=s.attributes,oe=X.attributes;let $=0;const k=K.getAttributes();for(const H in k)if(k[H].location>=0){const J=Q[H];let pe=oe[H];if(pe===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;$++}return s.attributesNum!==$||s.index!==V}function v(D,X,K,V){const Q={},oe=X.attributes;let $=0;const k=K.getAttributes();for(const H in k)if(k[H].location>=0){let J=oe[H];J===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),Q[H]=pe,$++}s.attributes=Q,s.attributesNum=$,s.index=V}function M(){const D=s.newAttributes;for(let X=0,K=D.length;X<K;X++)D[X]=0}function y(D){x(D,0)}function x(D,X){const K=s.newAttributes,V=s.enabledAttributes,Q=s.attributeDivisors;K[D]=1,V[D]===0&&(r.enableVertexAttribArray(D),V[D]=1),Q[D]!==X&&(r.vertexAttribDivisor(D,X),Q[D]=X)}function w(){const D=s.newAttributes,X=s.enabledAttributes;for(let K=0,V=X.length;K<V;K++)X[K]!==D[K]&&(r.disableVertexAttribArray(K),X[K]=0)}function b(D,X,K,V,Q,oe,$){$===!0?r.vertexAttribIPointer(D,X,K,Q,oe):r.vertexAttribPointer(D,X,K,V,Q,oe)}function T(D,X,K,V){M();const Q=V.attributes,oe=K.getAttributes(),$=X.defaultAttributeValues;for(const k in oe){const H=oe[k];if(H.location>=0){let W=Q[k];if(W===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const J=W.normalized,pe=W.itemSize,Me=e.get(W);if(Me===void 0)continue;const ae=Me.buffer,ye=Me.type,Ie=Me.bytesPerElement,qe=ye===r.INT||ye===r.UNSIGNED_INT||W.gpuType===wh;if(W.isInterleavedBufferAttribute){const Ue=W.data,nt=Ue.isInterleavedBuffer===!0?Ue.stride:Ue.itemSize,vt=W.offset;if(Ue.isInstancedInterleavedBuffer||Ue.isInstancedBufferAttribute){for(let Pe=0;Pe<H.locationSize;Pe++)x(H.location+Pe,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)y(H.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let Pe=0;Pe<H.locationSize;Pe++)b(H.location+Pe,pe/H.locationSize,ye,J,nt*Ie,(vt+pe/H.locationSize*Pe)*Ie,qe)}else{if(W.isInstancedBufferAttribute){for(let Ue=0;Ue<H.locationSize;Ue++)x(H.location+Ue,W.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)y(H.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let Ue=0;Ue<H.locationSize;Ue++)b(H.location+Ue,pe/H.locationSize,ye,J,pe*Ie,pe/H.locationSize*Ue*Ie,qe)}}else if($!==void 0){const J=$[k];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(H.location,J);break;case 3:r.vertexAttrib3fv(H.location,J);break;case 4:r.vertexAttrib4fv(H.location,J);break;default:r.vertexAttrib1fv(H.location,J)}}}}w()}function P(){O();for(const D in n){const X=n[D];for(const K in X){const V=X[K];for(const Q in V){const oe=V[Q];for(const $ in oe)f(oe[$].object),delete oe[$];delete V[Q]}}delete n[D]}}function C(D){if(n[D.id]===void 0)return;const X=n[D.id];for(const K in X){const V=X[K];for(const Q in V){const oe=V[Q];for(const $ in oe)f(oe[$].object),delete oe[$];delete V[Q]}}delete n[D.id]}function E(D){for(const X in n){const K=n[X];for(const V in K){const Q=K[V];if(Q[D.id]===void 0)continue;const oe=Q[D.id];for(const $ in oe)f(oe[$].object),delete oe[$];delete Q[D.id]}}}function R(D){for(const X in n){const K=n[X],V=D.isInstancedMesh===!0?D.id:0,Q=K[V];if(Q!==void 0){for(const oe in Q){const $=Q[oe];for(const k in $)f($[k].object),delete $[k];delete Q[oe]}delete K[V],Object.keys(K).length===0&&delete n[X]}}}function O(){N(),o=!0,s!==i&&(s=i,h(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:O,resetDefaultState:N,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:R,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:y,disableUnusedAttributes:w}}function _A(r,e,t){let n;function i(u){n=u}function s(u,h){r.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,f){f!==0&&(r.drawArraysInstanced(n,u,h,f),t.update(h,n,f))}function c(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function vA(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Zn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(E){const R=E===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==qn&&E!==jn&&!R&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function u(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(He("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:T,maxSamples:P,samples:C}}function xA(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new cr,c=new xt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const v=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,x=r.get(p);if(!i||v===null||v.length===0||s&&!y)s?f(null):h();else{const w=s?0:n,b=w*4;let T=x.clippingState||null;u.value=T,T=f(v,m,b,g);for(let P=0;P!==b;++P)T[P]=t[P];x.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,v){const M=p!==null?p.length:0;let y=null;if(M!==0){if(y=u.value,v!==!0||y===null){const x=g+M*4,w=m.matrixWorldInverse;c.getNormalMatrix(w),(y===null||y.length<x)&&(y=new Float32Array(x));for(let b=0,T=g;b!==M;++b,T+=4)o.copy(p[b]).applyMatrix4(w,c),o.normal.toArray(y,T),y[T+3]=o.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}class nf extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ys(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:Ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Ds});s.uniforms.tEquirect.value=t;const o=new Sn(i,s),c=t.minFilter;return t.minFilter===Vi&&(t.minFilter=rn),new _h(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const E_=256,yA=3,SA=20,cy=256,uy=16,MA=3,wA=new U,EA=new je;class ml{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _h(1,10,null),this._boxMesh=new Sn(new Ys(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:c=wA}=s,u=this._renderer;this._setSize(o);const h=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const p=u.autoClear,m=u.autoClearColor,g=u.autoClearDepth,v=u.autoClearStencil,M=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,M===null&&(e.background=u.getClearColor(EA));const y=new _h(n,i,f);return y.position.copy(c),y.update(u,e),u.autoClear=p,u.autoClearColor=m,u.autoClearDepth=g,u.autoClearStencil=v,e.background=M,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(E_,nx(e))}_fromTexture(e,t){e.mapping===Dr||e.mapping===Bs?this._setSize(e.image.length===0?E_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=b_(e,!1,!1),n=Math.log2(e)-yA;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=b_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Dr||e.mapping===Bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=T_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=bA(),this._integrationMaterial=TA());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/uy);for(let o=0;o<=n;o++){const c=ml.lodToRoughness(o,n);if(o>n-MA)s.roughness.value=c,this._renderCube(e,o,this._integrationMaterial);else{const u=c>0?Math.log2(t)+.5*Math.log2(6/(cy*Math.pow(c,4)))+.5:0;i.roughness.value=c,i.lodBias.value=u,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=AA());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function b_(r,e,t){return new nf(r,{minFilter:Vi,generateMipmaps:e,type:Xi,colorSpace:sl,depthBuffer:t})}function Al(r,e,t){return new pr({name:r,uniforms:e,vertexShader:Ct.cube_vert,fragmentShader:t,side:Jn,blending:Ds,depthTest:!1,depthWrite:!1})}function bA(){return Al("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cy}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function TA(){return Al("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uy}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function AA(){return Al("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${SA}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function T_(){return Al("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function A_(){return Al("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function CA(r){let e=new WeakMap,t=new WeakMap,n=null;function i(m,g=!1){return m==null?null:g?o(m):s(m)}function s(m){if(m&&m.isTexture){const g=m.mapping;if(g===Va||g===Ga)if(e.has(m)){const v=e.get(m).texture;return c(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const M=new nf(v.height);return M.fromEquirectangularTexture(r,m),e.set(m,M),m.addEventListener("dispose",h),c(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture&&m.isPMREMTexture!==!0){const g=m.mapping,v=g===Va||g===Ga,M=g===Dr||g===Bs;if(v||M){let y=t.get(m);const x=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return n===null&&(n=new ml(r)),y=v?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const w=m.image;return v&&w&&w.height>0||M&&w&&u(w)?(n===null&&(n=new ml(r)),y=v?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",f),y.texture):null}}}return m}function c(m,g){return g===Va?m.mapping=Dr:g===Ga&&(m.mapping=Bs),m}function u(m){let g=0;const v=6;for(let M=0;M<v;M++)m[M]!==void 0&&g++;return g===v}function h(m){const g=m.target;g.removeEventListener("dispose",h);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function f(m){const g=m.target;g.removeEventListener("dispose",f);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function RA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Lr("WebGLRenderer: "+n+" extension not supported."),i}}}function PA(r,e,t,n){const i={},s=new WeakMap,o=new FinalizationRegistry(v=>delete i[v]);function c(v){u(v.target)}function u(v){v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);v.removeEventListener("dispose",c),delete i[v.id],o.unregister(v);const M=s.get(v);M&&(e.remove(M),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(v,M){return i[M.id]!==void 0||(M.addEventListener("dispose",c),i[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function f(v){const M=v.attributes;for(const y in M)e.update(M[y],r.ARRAY_BUFFER)}function p(v){const M=v.index,y=v.attributes.position;let x=0;if(y===void 0)return;const w=M!==null?M.array.length:y.array.length/3-1,b=y.count>=65535?Kp:Jp,T=new b(Math.ceil(w/3)*6,1),P=T.array;if(M!==null){const E=M.array;x=M.version;for(let R=0,O=0;R<w;R+=3){const N=E[R+0],D=E[R+1],X=E[R+2];P[O++]=N,P[O++]=D,P[O++]=D,P[O++]=X,P[O++]=X,P[O++]=N}}else{x=y.version;for(let E=0,R=0;E<w;E+=3){const O=E+0,N=E+1,D=E+2;P[R++]=O,P[R++]=N,P[R++]=N,P[R++]=D,P[R++]=D,P[R++]=O}}T.version=x;const C=s.get(v);C&&e.remove(C),s.set(v,T)}function m(v){const M=s.get(v);if(M){const y=v.index;y!==null&&M.version<y.version&&p(v)}else p(v);return s.get(v)}function g(){for(const v in i){const M=i[v].deref();M!==void 0&&u(M)}}return{get:h,update:f,getWireframeAttribute:m,dispose:g}}function IA(r,e,t){let n;function i(p){n=p}let s,o;function c(p){s=p.type,o=p.bytesPerElement}function u(p,m){r.drawElements(n,m,s,p*o),t.update(m,n,1)}function h(p,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,p*o,g),t.update(m,n,g))}function f(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,g);let M=0;for(let y=0;y<g;y++)M+=m[y];t.update(M,n,1)}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function LA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function NA(r,e,t){const n=new WeakMap,i=new Bt;function s(o,c,u){const h=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let O=function(){E.dispose(),n.delete(c),c.removeEventListener("dispose",O)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let T=c.attributes.position.count*b,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*P*4*p),E=new Lh(C,T,P,p);E.type=jn,E.needsUpdate=!0;const R=b*4;for(let N=0;N<p;N++){const D=y[N],X=x[N],K=w[N],V=T*P*4*N;for(let Q=0;Q<D.count;Q++){const oe=Q*R;g===!0&&(i.fromBufferAttribute(D,Q),C[V+oe+0]=i.x,C[V+oe+1]=i.y,C[V+oe+2]=i.z,C[V+oe+3]=0),v===!0&&(i.fromBufferAttribute(X,Q),C[V+oe+4]=i.x,C[V+oe+5]=i.y,C[V+oe+6]=i.z,C[V+oe+7]=0),M===!0&&(i.fromBufferAttribute(K,Q),C[V+oe+8]=i.x,C[V+oe+9]=i.y,C[V+oe+10]=i.z,C[V+oe+11]=K.itemSize===4?i.w:1)}}m={count:p,texture:E,size:new _e(T,P)},n.set(c,m),c.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const v=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function DA(r,e,t,n,i){let s=new WeakMap;function o(h){const f=i.render.frame,p=h.geometry,m=e.get(h,p);if(s.get(m)!==f&&(e.update(m),s.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return m}function c(){s=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:c}}const UA={[Pp]:"LINEAR_TONE_MAPPING",[Ip]:"REINHARD_TONE_MAPPING",[Lp]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[Dp]:"AGX_TONE_MAPPING",[Up]:"NEUTRAL_TONE_MAPPING",[Np]:"CUSTOM_TONE_MAPPING"};function OA(r,e,t,n,i,s){const o=new xi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,u=null,h=null;const f=new St;f.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Je([0,2,0,0,2,0],2));const p=new um({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Sn(f,p),g=new dr(-1,1,1,-1,0,1);let v=null,M=null,y=!1,x,w=null,b=[],T=!1;this.setSize=function(P,C){o.setSize(P,C),c!==null&&c.setSize(P,C),u!==null&&u.setSize(P,C);for(let E=0;E<b.length;E++){const R=b[E];R.setSize&&R.setSize(P,C)}},this.setEffects=function(P){b=P,T=b.length>0&&b[0].isRenderPass===!0;const C=o.width,E=o.height;b.length>0&&c===null&&(c=new xi(C,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),u=new xi(C,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}));const R=i===!0&&b.some(O=>O.needsDepthTexture===!0);R!==(o.depthTexture!==null)&&(R===!0&&h===null&&(h=new Vs(C,E),s===!0&&(h.format=Ir,h.type=zs)),o.dispose(),o.depthTexture=R?h:null,o.resolveDepthBuffer=R,o.storeMultisampledDepthBuffer=R);for(let O=0;O<b.length;O++){const N=b[O];N.setSize&&N.setSize(C,E),R&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(h)}},this.begin=function(P,C){if(y||P.toneMapping===Wi&&b.length===0)return!1;if(w=C,C!==null){const E=C.width,R=C.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return T===!1&&P.setRenderTarget(o),x=P.toneMapping,P.toneMapping=Wi,!0},this.hasRenderPass=function(){return T},this.end=function(P,C){P.toneMapping=x,y=!0;let E=o,R=c;for(let O=0;O<b.length;O++){const N=b[O];N.enabled!==!1&&(N.render(P,R,E,C),N.needsSwap!==!1&&(E=R,R=R===c?u:c))}if(v!==P.outputColorSpace||M!==P.toneMapping){v=P.outputColorSpace,M=P.toneMapping,p.defines={},Ot.getTransfer(v)===Wt&&(p.defines.SRGB_TRANSFER="");const O=UA[M];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=E.texture,P.setRenderTarget(w),P.render(m,g),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),f.dispose(),p.dispose()}}const hy=new sn,fy=new Vs(1,1),dy=new tm(1),py=new Lh,my=new Nh,gy=new yl,C_=[],R_=[],P_=new Float32Array(16),I_=new Float32Array(9),L_=new Float32Array(4);function ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=C_[i];if(s===void 0&&(s=new Float32Array(i),C_[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function Mn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function rf(r,e){let t=R_[e];t===void 0&&(t=new Int32Array(e),R_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function FA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2fv(this.addr,e),wn(t,e)}}function zA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;r.uniform3fv(this.addr,e),wn(t,e)}}function kA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4fv(this.addr,e),wn(t,e)}}function HA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,n))return;L_.set(n),r.uniformMatrix2fv(this.addr,!1,L_),wn(t,n)}}function VA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,n))return;I_.set(n),r.uniformMatrix3fv(this.addr,!1,I_),wn(t,n)}}function GA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,n))return;P_.set(n),r.uniformMatrix4fv(this.addr,!1,P_),wn(t,n)}}function WA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function XA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2iv(this.addr,e),wn(t,e)}}function YA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;r.uniform3iv(this.addr,e),wn(t,e)}}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4iv(this.addr,e),wn(t,e)}}function jA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ZA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2uiv(this.addr,e),wn(t,e)}}function JA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;r.uniform3uiv(this.addr,e),wn(t,e)}}function KA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4uiv(this.addr,e),wn(t,e)}}function sf(r){return r.version===0&&(r.compareFunction=Yp,r.needsUpdate=!0),r}function QA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=sf(fy):s=hy,t.setTexture2D(e||s,i)}function $A(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||my,i)}function eC(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=sf(dy):s=gy,t.setTextureCube(e||s,i)}function tC(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||py,i)}function nC(r){switch(r){case 5126:return FA;case 35664:return BA;case 35665:return zA;case 35666:return kA;case 35674:return HA;case 35675:return VA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return YA;case 35669:case 35673:return qA;case 5125:return jA;case 36294:return ZA;case 36295:return JA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return eC;case 36289:case 36303:case 36311:case 36292:return tC}}function iC(r,e){r.uniform1fv(this.addr,e)}function rC(r,e){const t=ta(e,this.size,2);r.uniform2fv(this.addr,t)}function sC(r,e){const t=ta(e,this.size,3);r.uniform3fv(this.addr,t)}function oC(r,e){const t=ta(e,this.size,4);r.uniform4fv(this.addr,t)}function aC(r,e){const t=ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lC(r,e){const t=ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cC(r,e){const t=ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uC(r,e){r.uniform1iv(this.addr,e)}function hC(r,e){r.uniform2iv(this.addr,e)}function fC(r,e){r.uniform3iv(this.addr,e)}function dC(r,e){r.uniform4iv(this.addr,e)}function pC(r,e){r.uniform1uiv(this.addr,e)}function mC(r,e){r.uniform2uiv(this.addr,e)}function gC(r,e){r.uniform3uiv(this.addr,e)}function _C(r,e){r.uniform4uiv(this.addr,e)}function vC(r,e,t){const n=this.cache,i=e.length,s=rf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),wn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=sf(fy):o=hy;for(let c=0;c!==i;++c)t.setTexture2D(e[c]||o,s[c])}function xC(r,e,t){const n=this.cache,i=e.length,s=rf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),wn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||my,s[o])}function yC(r,e,t){const n=this.cache,i=e.length,s=rf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),wn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=sf(dy):o=gy;for(let c=0;c!==i;++c)t.setTextureCube(e[c]||o,s[c])}function SC(r,e,t){const n=this.cache,i=e.length,s=rf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),wn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||py,s[o])}function MC(r){switch(r){case 5126:return iC;case 35664:return rC;case 35665:return sC;case 35666:return oC;case 35674:return aC;case 35675:return lC;case 35676:return cC;case 5124:case 35670:return uC;case 35667:case 35671:return hC;case 35668:case 35672:return fC;case 35669:case 35673:return dC;case 5125:return pC;case 36294:return mC;case 36295:return gC;case 36296:return _C;case 35678:case 36198:case 36298:case 36306:case 35682:return vC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return SC}}class wC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nC(t.type)}}class EC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MC(t.type)}}class bC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function N_(r,e){r.seq.push(e),r.map[e.id]=e}function TC(r,e,t){const n=r.name,i=n.length;for(qd.lastIndex=0;;){const s=qd.exec(n),o=qd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===i){N_(t,h===void 0?new wC(c,r,e):new EC(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new bC(c),N_(t,p)),t=p}}}class Tu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const c=e.getActiveUniform(t,o),u=e.getUniformLocation(t,c.name);TC(c,u,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function D_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const AC=37297;let CC=0;function RC(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const U_=new xt;function PC(r){Ot._getMatrix(U_,Ot.workingColorSpace,r);const e=`mat3( ${U_.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(r)){case ol:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function O_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+RC(r.getShaderSource(e),c)}else return s}function IC(r,e){const t=PC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const LC={[Pp]:"Linear",[Ip]:"Reinhard",[Lp]:"Cineon",[Sh]:"ACESFilmic",[Dp]:"AgX",[Up]:"Neutral",[Np]:"Custom"};function NC(r,e){const t=LC[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mu=new U;function DC(){Ot.getLuminanceCoefficients(mu);const r=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function OC(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FC(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function ka(r){return r!==""}function F_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function B_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(r){return r.replace(BC,zC)}function zC(r,e){const t=Ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ep(t)}const kC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(r){return r.replace(kC,HC)}function HC(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function k_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const VC={[Go]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function GC(r){return VC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WC={[Bs]:"ENVMAP_MODE_REFRACTION"};function XC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":WC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YC={[_l]:"ENVMAP_BLENDING_MULTIPLY",[zv]:"ENVMAP_BLENDING_MIX",[kv]:"ENVMAP_BLENDING_ADD"};function qC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":YC[r.combine]||"ENVMAP_BLENDING_NONE"}function jC(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=GC(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=XC(t),p=qC(t),m=UC(t),g=OC(s),v=i.createProgram();let M,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),y.length>0&&(y+=`
`)):(M=[k_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),y=[k_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Wi?NC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,IC("linearToOutputTexel",t.outputColorSpace),DC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),o=Ep(o),o=F_(o,t),o=B_(o,t),c=Ep(c),c=F_(c,t),c=B_(c,t),o=z_(o),c=z_(c),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,M=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=x+M+o,b=x+y+c,T=D_(i,i.VERTEX_SHADER,w),P=D_(i,i.FRAGMENT_SHADER,b);i.attachShader(v,T),i.attachShader(v,P),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(N){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(v)||"",X=i.getShaderInfoLog(T)||"",K=i.getShaderInfoLog(P)||"",V=D.trim(),Q=X.trim(),oe=K.trim();let $=!0,k=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,T,P);else{const H=O_(i,T,"vertex"),W=O_(i,P,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+H+`
`+W)}else V!==""?He("WebGLProgram: Program Info Log:",V):(Q===""||oe==="")&&(k=!1);k&&(N.diagnostics={runnable:$,programLog:V,vertexShader:{log:Q,prefix:M},fragmentShader:{log:oe,prefix:y}})}i.deleteShader(T),i.deleteShader(P),E=new Tu(i,v),R=FC(i,v)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(v,AC)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=P,this}let ZC=0;class JC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new KC(e),t.set(e,n)),n}}class KC{constructor(e){this.id=ZC++,this.code=e,this.usedTimes=0}}function QC(r){return r===es||r===tl||r===nl}function $C(r,e,t,n,i,s){const o=new Os,c=new JC,u=new Set,h=[],f=new Map,p=n.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return u.add(E),E===0?"uv":`uv${E}`}function v(E,R,O,N,D,X){const K=N.fog,V=D.geometry,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=e.get(E.envMap||Q,oe),k=m[E.type];let H=n.precision;E.precision!==null&&(H=n.getMaxPrecision(E.precision),H!==E.precision&&He("WebGLProgram.getParameters:",E.precision,"not supported, using",H,"instead."));const W=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=W!==void 0?W.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let Me,ae,ye,Ie;if(k){const Ve=Hi[k];Me=Ve.vertexShader,ae=Ve.fragmentShader}else{Me=E.vertexShader,ae=E.fragmentShader;const Ve=c.getVertexShaderStage(E),zt=c.getFragmentShaderStage(E);c.update(E,Ve,zt),ye=Ve.id,Ie=zt.id}const qe=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),nt=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,Pe=!!E.map,lt=!!E.matcap,tt=!!$,me=tt&&$.isPMREMTexture===!0,Re=!!E.aoMap,Le=!!E.lightMap,Be=!!E.bumpMap&&E.wireframe===!1,Oe=!!E.normalMap,ct=!!E.displacementMap,Ze=!!E.emissiveMap,Mt=!!E.metalnessMap,wt=!!E.roughnessMap,Rt=E.anisotropy>0,q=E.clearcoat>0,Zt=E.diffuseRoughness>0,yt=E.dispersion>0,Pt=E.retroreflectivity>0,Fe=E.iridescence>0,Jt=E.sheen>0,st=E.transmission>0,ut=Rt&&!!E.anisotropyMap,B=q&&!!E.clearcoatMap,I=q&&!!E.clearcoatNormalMap,ie=q&&!!E.clearcoatRoughnessMap,Se=Zt&&!!E.diffuseRoughnessMap,F=Fe&&!!E.iridescenceMap,re=Fe&&!!E.iridescenceThicknessMap,fe=Jt&&!!E.sheenColorMap,se=Jt&&!!E.sheenRoughnessMap,ce=!!E.specularMap,Ae=!!E.specularColorMap,G=!!E.specularIntensityMap,ge=st&&!!E.transmissionMap,ue=st&&!!E.thicknessMap,Te=!!E.gradientMap,we=!!E.alphaMap,Ce=E.alphaTest>0,Ke=!!E.alphaHash,pt=!!E.extensions;let Ee=Wi;E.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(Ee=r.toneMapping);const at=me?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,Et={shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:ae,defines:E.defines,customVertexShaderID:ye,customFragmentShaderID:Ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:H,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:nt,instancingColor:nt&&D.instanceColor!==null,instancingMorph:nt&&D.morphTexture!==null,outputColorSpace:qe===null?r.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:lt,envMap:tt,envMapMode:tt&&$.mapping,envMapPMREM:me,envMapMaxLod:me?at.length-1:null,envMapSize:me?at[0].width:null,aoMap:Re,lightMap:Le,bumpMap:Be,normalMap:Oe,displacementMap:ct,emissiveMap:Ze,normalMapObjectSpace:Oe&&E.normalMapType===Yv,normalMapTangentSpace:Oe&&E.normalMapType===Or,packedNormalMap:Oe&&E.normalMapType===Or&&QC(E.normalMap.format),metalnessMap:Mt,roughnessMap:wt,anisotropy:Rt,anisotropyMap:ut,clearcoat:q,clearcoatMap:B,clearcoatNormalMap:I,clearcoatRoughnessMap:ie,diffuseRoughness:Zt,diffuseRoughnessMap:Se,dispersion:yt,retroreflection:Pt,iridescence:Fe,iridescenceMap:F,iridescenceThicknessMap:re,sheen:Jt,sheenColorMap:fe,sheenRoughnessMap:se,specularMap:ce,specularColorMap:Ae,specularIntensityMap:G,transmission:st,transmissionMap:ge,thicknessMap:ue,gradientMap:Te,opaque:E.transparent===!1&&E.blending===Wo&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:Ke,combine:E.combine,mapUv:Pe&&g(E.map.channel),aoMapUv:Re&&g(E.aoMap.channel),lightMapUv:Le&&g(E.lightMap.channel),bumpMapUv:Be&&g(E.bumpMap.channel),normalMapUv:Oe&&g(E.normalMap.channel),displacementMapUv:ct&&g(E.displacementMap.channel),emissiveMapUv:Ze&&g(E.emissiveMap.channel),metalnessMapUv:Mt&&g(E.metalnessMap.channel),roughnessMapUv:wt&&g(E.roughnessMap.channel),anisotropyMapUv:ut&&g(E.anisotropyMap.channel),clearcoatMapUv:B&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:I&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&g(E.diffuseRoughnessMap.channel),iridescenceMapUv:F&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:se&&g(E.sheenRoughnessMap.channel),specularMapUv:ce&&g(E.specularMap.channel),specularColorMapUv:Ae&&g(E.specularColorMap.channel),specularIntensityMapUv:G&&g(E.specularIntensityMap.channel),transmissionMapUv:ge&&g(E.transmissionMap.channel),thicknessMapUv:ue&&g(E.thicknessMap.channel),alphaMapUv:we&&g(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Oe||Rt),vertexNormals:!!V.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Pe||we),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||V.attributes.normal===void 0&&Oe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pe,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.filter(Ve=>Ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&Ot.getTransfer(E.map.colorSpace)===Wt,decodeVideoTextureEmissive:Ze&&E.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(E.emissiveMap.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pt&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&E.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function M(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)R.push(O),R.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(y(R,E),x(R,E),R.push(r.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapPMREM),E.push(R.envMapMaxLod),E.push(R.envMapSize),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.diffuseRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.numSunLights),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numSunLightShadows),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.numLightProbeGrids),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function x(E,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.diffuseRoughness&&o.enable(25),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),E.push(o.mask)}function w(E){const R=m[E.type];let O;if(R){const N=Hi[R];O=gh.clone(N.uniforms)}else O=E.uniforms;return O}function b(E,R){let O=f.get(R);return O!==void 0?++O.usedTimes:(O=new jC(r,R,E,i),h.push(O),f.set(R,O)),O}function T(E){if(--E.usedTimes===0){const R=h.indexOf(E);h[R]=h[h.length-1],h.pop(),f.delete(E.cacheKey),E.destroy()}}function P(E){c.remove(E)}function C(){c.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:w,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:C}}function eR(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let c=r.get(o);return c===void 0&&(c={},r.set(o,c)),c}function n(o){r.delete(o)}function i(o,c,u){r.get(o)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function tR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function H_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function V_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function c(m,g,v,M,y,x){let w=r[e];return w===void 0?(w={id:m.id,object:m,geometry:g,material:v,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:y,group:x},r[e]=w):(w.id=m.id,w.object=m,w.geometry=g,w.material=v,w.materialVariant=o(m),w.groupOrder=M,w.renderOrder=m.renderOrder,w.z=y,w.group=x),e++,w}function u(m,g,v,M,y,x,w){w.reversedDepth===!0&&(y=-y);const b=c(m,g,v,M,y,x);v.transmission>0?n.push(b):v.transparent===!0?i.push(b):t.push(b)}function h(m,g,v,M,y,x){const w=c(m,g,v,M,y,x);v.transmission>0?n.unshift(w):v.transparent===!0?i.unshift(w):t.unshift(w)}function f(m,g){t.length>1&&t.sort(m||tR),n.length>1&&n.sort(g||H_),i.length>1&&i.sort(g||H_)}function p(){for(let m=e,g=r.length;m<g;m++){const v=r[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:u,unshift:h,finish:p,sort:f}}function nR(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new V_,r.set(n,[o])):i>=s.length?(o=new V_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function iR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function rR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sR=0;function oR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aR(r){const e=new iR,t=rR(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const i=new U,s=new _t,o=new _t;function c(h){let f=0,p=0,m=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let g=0,v=0,M=0,y=0,x=0,w=0,b=0,T=0,P=0,C=0,E=0,R=0,O=0,N=0;h.sort(oR);for(let X=0,K=h.length;X<K;X++){const V=h[X],Q=V.color,oe=V.intensity,$=V.distance;let k=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===es?k=V.shadow.map.texture:k=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)f+=Q.r*oe,p+=Q.g*oe,m+=Q.b*oe;else if(V.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(V.sh.coefficients[H],oe);N++}else if(V.isSunLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,J=t.get(V);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[v]=J,n.sunShadowMap[v]=k;const pe=W.getViewportCount();for(let Me=0;Me<pe;Me++)n.sunShadowMatrix[M+Me]=W.getMatrix(Me),n.sunShadowCascade[M+Me]=W._cascadeData[Me];M+=pe,v++}n.sun[g]=H,g++}else if(V.isDirectionalLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,J=t.get(V);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.directionalShadow[y]=J,n.directionalShadowMap[y]=k,n.directionalShadowMatrix[y]=V.shadow.matrix,P++}n.directional[y]=H,y++}else if(V.isSpotLight){const H=e.get(V);H.position.setFromMatrixPosition(V.matrixWorld),H.color.copy(Q).multiplyScalar(oe),H.distance=$,H.coneCos=Math.cos(V.angle),H.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),H.decay=V.decay,n.spot[w]=H;const W=V.shadow;if(V.map&&(n.spotLightMap[R]=V.map,R++,W.updateMatrices(V),V.castShadow&&O++),n.spotLightMatrix[w]=W.matrix,V.castShadow){const J=t.get(V);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.spotShadow[w]=J,n.spotShadowMap[w]=k,E++}w++}else if(V.isRectAreaLight){const H=e.get(V);H.color.copy(Q).multiplyScalar(oe),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),n.rectArea[b]=H,b++}else if(V.isPointLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),H.distance=V.distance,H.decay=V.decay,V.castShadow){const W=V.shadow,J=t.get(V);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=V.shadow.matrix,C++}n.point[x]=H,x++}else if(V.isHemisphereLight){const H=e.get(V);H.skyColor.copy(V.color).multiplyScalar(oe),H.groundColor.copy(V.groundColor).multiplyScalar(oe),n.hemi[T]=H,T++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const D=n.hash;(D.sunLength!==g||D.directionalLength!==y||D.pointLength!==x||D.spotLength!==w||D.rectAreaLength!==b||D.hemiLength!==T||D.numSunShadows!==v||D.numDirectionalShadows!==P||D.numPointShadows!==C||D.numSpotShadows!==E||D.numSpotMaps!==R||D.numLightProbes!==N)&&(n.sun.length=g,n.directional.length=y,n.spot.length=w,n.rectArea.length=b,n.point.length=x,n.hemi.length=T,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+R-O,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=N,D.sunLength=g,D.directionalLength=y,D.pointLength=x,D.spotLength=w,D.rectAreaLength=b,D.hemiLength=T,D.numSunShadows=v,D.numDirectionalShadows=P,D.numPointShadows=C,D.numSpotShadows=E,D.numSpotMaps=R,D.numLightProbes=N,n.version=sR++)}function u(h,f){let p=0,m=0,g=0,v=0,M=0,y=0;const x=f.matrixWorldInverse;for(let w=0,b=h.length;w<b;w++){const T=h[w];if(T.isSunLight){const P=n.sun[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(x),p++}else if(T.isDirectionalLight){const P=n.directional[m];P.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(x),m++}else if(T.isSpotLight){const P=n.spot[v];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(x),v++}else if(T.isRectAreaLight){const P=n.rectArea[M];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),o.identity(),s.copy(T.matrixWorld),s.premultiply(x),o.extractRotation(s),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),M++}else if(T.isPointLight){const P=n.point[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),g++}else if(T.isHemisphereLight){const P=n.hemi[y];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(x),y++}}}return{setup:c,setupView:u,state:n}}function G_(r){const e=new aR(r),t=[],n=[],i=[];function s(p){f.camera=p,t.length=0,n.length=0,i.length=0}function o(p){p.isLightProbeGrid?i.push(p):t.push(p)}function c(p){n.push(p)}function u(){e.setup(t),i.sort((p,m)=>p.priority-m.priority||p.id-m.id)}function h(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:c}}function lR(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let c;return o===void 0?(c=new G_(r),e.set(i,[c])):s>=o.length?(c=new G_(r),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const cR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hR=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],fR=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],W_=new _t,Ua=new U,jd=new U;function dR(r,e,t){let n=new Hs;const i=new _e,s=new _e,o=new Bt,c=new fm,u=new dm,h={},f=t.maxTextureSize,p={[$r]:Jn,[Jn]:$r,[si]:si},m=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:cR,fragmentShader:uR}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const v=new St;v.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(v,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let x=this.type;this.render=function(C,E,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===Ha&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Go);const O=r.getRenderTarget(),N=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Ds),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=x!==this.type;K&&E.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Q=>Q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Q=C.length;V<Q;V++){const oe=C[V],$=oe.shadow;if($===void 0){He("WebGLShadowMap:",oe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const k=$.getFrameExtents();i.multiply(k),s.copy($.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/k.x),i.x=s.x*k.x,$.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/k.y),i.y=s.y*k.y,$.mapSize.y=s.y));const H=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=H,$.map===null||K===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ps){if(oe.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new xi(i.x,i.y,{format:es,type:Xi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),$.map.texture.name=oe.name+".shadowMap",$.map.depthTexture=new Vs(i.x,i.y,jn),$.map.depthTexture.name=oe.name+".shadowMapDepth",$.map.depthTexture.format=Ur,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=fn,$.map.depthTexture.magFilter=fn}else oe.isPointLight?($.map=new nf(i.x),$.map.depthTexture=new tm(i.x,Ii)):($.map=new xi(i.x,i.y),$.map.depthTexture=new Vs(i.x,i.y,Ii)),$.map.depthTexture.name=oe.name+".shadowMap",$.map.depthTexture.format=Ur,this.type===Go?($.map.depthTexture.compareFunction=H?Xp:Wp,$.map.depthTexture.minFilter=rn,$.map.depthTexture.magFilter=rn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=fn,$.map.depthTexture.magFilter=fn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);const W=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();oe.isPointLight!==!0&&$.updateMatrices(oe,R);const J=$.camera.layers.mask&4294967294?$.camera.layers:R.layers;for(let pe=0;pe<W;pe++){const Me=$.getCamera(pe);if(oe.isPointLight){const ae=$.camera,ye=$.matrix,Ie=oe.distance||ae.far;Ie!==ae.far&&(ae.far=Ie,ae.updateProjectionMatrix()),Ua.setFromMatrixPosition(oe.matrixWorld),ae.position.copy(Ua),jd.copy(ae.position),jd.add(hR[pe]),ae.up.copy(fR[pe]),ae.lookAt(jd),ae.updateMatrixWorld(),ye.makeTranslation(-Ua.x,-Ua.y,-Ua.z),W_.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(W_,ae.coordinateSystem,ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,pe),r.clear();else{pe===0&&(r.setRenderTarget($.map),r.clear());const ae=$.getViewport(pe);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),X.viewport(o)}n=$.getFrustum(pe),T(E,R,Me,oe,J,this.type)}$.isPointLightShadow!==!0&&this.type===Ps&&w($,R),$.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(O,N,D)};function w(C,E){const R=e.update(M);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null?C.mapPass=new xi(i.x,i.y,{format:es,type:Xi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),m.uniforms.shadow_pass.value=C.map.depthTexture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(E,null,R,m,M,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(E,null,R,g,M,null)}function b(C,E,R,O){let N=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)N=D;else if(N=R.isPointLight===!0?u:c,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const X=N.uuid,K=E.uuid;let V=h[X];V===void 0&&(V={},h[X]=V);let Q=V[K];Q===void 0&&(Q=N.clone(),V[K]=Q,E.addEventListener("dispose",P)),N=Q}if(N.visible=E.visible,N.wireframe=E.wireframe,O===Ps?N.side=E.shadowSide!==null?E.shadowSide:E.side:N.side=E.shadowSide!==null?E.shadowSide:p[E.side],N.alphaMap=E.alphaMap,N.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,N.map=E.map,N.clipShadows=E.clipShadows,N.clippingPlanes=E.clippingPlanes,N.clipIntersection=E.clipIntersection,N.displacementMap=E.displacementMap,N.displacementScale=E.displacementScale,N.displacementBias=E.displacementBias,N.wireframeLinewidth=E.wireframeLinewidth,N.linewidth=E.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const X=r.properties.get(N);X.light=R}return N}function T(C,E,R,O,N,D){if(C.visible===!1)return;if(C.layers.test(N)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&D===Ps)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const V=e.update(C),Q=C.material;if(Array.isArray(Q)){const oe=V.groups;for(let $=0,k=oe.length;$<k;$++){const H=oe[$],W=Q[H.materialIndex];if(W&&W.visible){const J=b(C,W,O,D);C.onBeforeShadow(r,C,E,R,V,J,H),r.renderBufferDirect(R,null,V,J,C,H),C.onAfterShadow(r,C,E,R,V,J,H)}}}else if(Q.visible){const oe=b(C,Q,O,D);C.onBeforeShadow(r,C,E,R,V,oe,null),r.renderBufferDirect(R,null,V,oe,C,null),C.onAfterShadow(r,C,E,R,V,oe,null)}}const K=C.children;for(let V=0,Q=K.length;V<Q;V++)T(K[V],E,R,O,N,D)}function P(C){C.target.removeEventListener("dispose",P);for(const R in h){const O=h[R],N=C.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function pR(r,e){function t(){let G=!1;const ge=new Bt;let ue=null;const Te=new Bt(0,0,0,0);return{setMask:function(we){ue!==we&&!G&&(r.colorMask(we,we,we,we),ue=we)},setLocked:function(we){G=we},setClear:function(we,Ce,Ke,pt,Ee){Ee===!0&&(we*=pt,Ce*=pt,Ke*=pt),ge.set(we,Ce,Ke,pt),Te.equals(ge)===!1&&(r.clearColor(we,Ce,Ke,pt),Te.copy(ge))},reset:function(){G=!1,ue=null,Te.set(-1,0,0,0)}}}function n(){let G=!1,ge=!1,ue=null,Te=null,we=null;return{setReversed:function(Ce){if(ge!==Ce){const Ke=e.get("EXT_clip_control");Ce?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),ge=Ce;const pt=we;we=null,this.setClear(pt)}},getReversed:function(){return ge},setTest:function(Ce){Ce?Ue(r.DEPTH_TEST):nt(r.DEPTH_TEST)},setMask:function(Ce){ue!==Ce&&!G&&(r.depthMask(Ce),ue=Ce)},setFunc:function(Ce){if(ge&&(Ce=FM[Ce]),Te!==Ce){switch(Ce){case Ru:r.depthFunc(r.NEVER);break;case Pu:r.depthFunc(r.ALWAYS);break;case Iu:r.depthFunc(r.LESS);break;case Yo:r.depthFunc(r.LEQUAL);break;case Lu:r.depthFunc(r.EQUAL);break;case Nu:r.depthFunc(r.GEQUAL);break;case Du:r.depthFunc(r.GREATER);break;case Uu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=Ce}},setLocked:function(Ce){G=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,ge&&(Ce=1-Ce),r.clearDepth(Ce))},reset:function(){G=!1,ue=null,Te=null,we=null,ge=!1}}}function i(){let G=!1,ge=null,ue=null,Te=null,we=null,Ce=null,Ke=null,pt=null,Ee=null;return{setTest:function(at){G||(at?Ue(r.STENCIL_TEST):nt(r.STENCIL_TEST))},setMask:function(at){ge!==at&&!G&&(r.stencilMask(at),ge=at)},setFunc:function(at,Et,Ve){(ue!==at||Te!==Et||we!==Ve)&&(r.stencilFunc(at,Et,Ve),ue=at,Te=Et,we=Ve)},setOp:function(at,Et,Ve){(Ce!==at||Ke!==Et||pt!==Ve)&&(r.stencilOp(at,Et,Ve),Ce=at,Ke=Et,pt=Ve)},setLocked:function(at){G=at},setClear:function(at){Ee!==at&&(r.clearStencil(at),Ee=at)},reset:function(){G=!1,ge=null,ue=null,Te=null,we=null,Ce=null,Ke=null,pt=null,Ee=null}}}const s=new t,o=new n,c=new i;let u={};const h=new WeakMap;let f={},p={},m={},g=new WeakMap,v=[],M=null,y=!1,x=null,w=null,b=null,T=null,P=null,C=null,E=null,R=new je(0,0,0),O=0,N=!1,D=null,X=null,K=null,V=null,Q=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,k=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=k>=2);let W=null,J={};const pe=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),ae=new Bt().fromArray(pe),ye=new Bt().fromArray(Me);function Ie(G,ge,ue,Te){const we=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(G,Ce),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ue;Ke++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(ge+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Ce}const qe={};qe[r.TEXTURE_2D]=Ie(r.TEXTURE_2D,r.TEXTURE_2D,1),qe[r.TEXTURE_CUBE_MAP]=Ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),qe[r.TEXTURE_2D_ARRAY]=Ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),qe[r.TEXTURE_3D]=Ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),Ue(r.DEPTH_TEST),o.setFunc(Yo),Be(!1),Oe(lp),Ue(r.CULL_FACE),Re(Ds);function Ue(G){f[G]!==!0&&(r.enable(G),f[G]=!0)}function nt(G){f[G]!==!1&&(r.disable(G),f[G]=!1)}function vt(G,ge){return m[G]!==ge?(r.bindFramebuffer(G,ge),m[G]=ge,G===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ge),G===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(G,ge){let ue=v,Te=!1;if(G){ue=g.get(ge),ue===void 0&&(ue=[],g.set(ge,ue));const we=G.textures;if(ue.length!==we.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,Ke=we.length;Ce<Ke;Ce++)ue[Ce]=r.COLOR_ATTACHMENT0+Ce;ue.length=we.length,Te=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,Te=!0);Te&&r.drawBuffers(ue)}function lt(G){return M!==G?(r.useProgram(G),M=G,!0):!1}const tt={[Rs]:r.FUNC_ADD,[Mv]:r.FUNC_SUBTRACT,[wv]:r.FUNC_REVERSE_SUBTRACT};tt[Ev]=r.MIN,tt[bv]=r.MAX;const me={[Tv]:r.ZERO,[Av]:r.ONE,[Cv]:r.SRC_COLOR,[Cp]:r.SRC_ALPHA,[Dv]:r.SRC_ALPHA_SATURATE,[Lv]:r.DST_COLOR,[Pv]:r.DST_ALPHA,[Rv]:r.ONE_MINUS_SRC_COLOR,[Rp]:r.ONE_MINUS_SRC_ALPHA,[Nv]:r.ONE_MINUS_DST_COLOR,[Iv]:r.ONE_MINUS_DST_ALPHA,[Uv]:r.CONSTANT_COLOR,[Ov]:r.ONE_MINUS_CONSTANT_COLOR,[Fv]:r.CONSTANT_ALPHA,[Bv]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(G,ge,ue,Te,we,Ce,Ke,pt,Ee,at){if(G===Ds){y===!0&&(nt(r.BLEND),y=!1);return}if(y===!1&&(Ue(r.BLEND),y=!0),G!==Sv){if(G!==x||at!==N){if((w!==Rs||P!==Rs)&&(r.blendEquation(r.FUNC_ADD),w=Rs,P=Rs),at)switch(G){case Wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cp:r.blendFunc(r.ONE,r.ONE);break;case up:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:rt("WebGLState: Invalid blending: ",G);break}else switch(G){case Wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case up:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hp:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",G);break}b=null,T=null,C=null,E=null,R.set(0,0,0),O=0,x=G,N=at}return}we=we||ge,Ce=Ce||ue,Ke=Ke||Te,(ge!==w||we!==P)&&(r.blendEquationSeparate(tt[ge],tt[we]),w=ge,P=we),(ue!==b||Te!==T||Ce!==C||Ke!==E)&&(r.blendFuncSeparate(me[ue],me[Te],me[Ce],me[Ke]),b=ue,T=Te,C=Ce,E=Ke),(pt.equals(R)===!1||Ee!==O)&&(r.blendColor(pt.r,pt.g,pt.b,Ee),R.copy(pt),O=Ee),x=G,N=!1}function Le(G,ge){G.side===si?nt(r.CULL_FACE):Ue(r.CULL_FACE);let ue=G.side===Jn;ge&&(ue=!ue),Be(ue),G.blending===Wo&&G.transparent===!1?Re(Ds):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const Te=G.stencilWrite;c.setTest(Te),Te&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ue(r.SAMPLE_ALPHA_TO_COVERAGE):nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(G){D!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),D=G)}function Oe(G){G!==vv?(Ue(r.CULL_FACE),G!==X&&(G===lp?r.cullFace(r.BACK):G===xv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):nt(r.CULL_FACE),X=G}function ct(G){G!==K&&($&&r.lineWidth(G),K=G)}function Ze(G,ge,ue){G?(Ue(r.POLYGON_OFFSET_FILL),(V!==ge||Q!==ue)&&(V=ge,Q=ue,o.getReversed()&&(ge=-ge,ue=-ue),r.polygonOffset(ge,ue))):nt(r.POLYGON_OFFSET_FILL)}function Mt(G){G?Ue(r.SCISSOR_TEST):nt(r.SCISSOR_TEST)}function wt(G){G===void 0&&(G=r.TEXTURE0+oe-1),W!==G&&(r.activeTexture(G),W=G)}function Rt(G,ge,ue){ue===void 0&&(W===null?ue=r.TEXTURE0+oe-1:ue=W);let Te=J[ue];Te===void 0&&(Te={type:void 0,texture:void 0},J[ue]=Te),(Te.type!==G||Te.texture!==ge)&&(W!==ue&&(r.activeTexture(ue),W=ue),r.bindTexture(G,ge||qe[G]),Te.type=G,Te.texture=ge)}function q(){const G=J[W];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Zt(){try{r.compressedTexImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function yt(){try{r.compressedTexImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function Pt(){try{r.texSubImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function Fe(){try{r.texSubImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function Jt(){try{r.compressedTexSubImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function st(){try{r.compressedTexSubImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function ut(){try{r.texStorage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function B(){try{r.texStorage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function I(){try{r.texImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function ie(){try{r.texImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function Se(G){return p[G]!==void 0?p[G]:r.getParameter(G)}function F(G,ge){p[G]!==ge&&(r.pixelStorei(G,ge),p[G]=ge)}function re(G){ae.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),ae.copy(G))}function fe(G){ye.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),ye.copy(G))}function se(G,ge){let ue=h.get(ge);ue===void 0&&(ue=new WeakMap,h.set(ge,ue));let Te=ue.get(G);Te===void 0&&(Te=r.getUniformBlockIndex(ge,G.name),r.uniformBlockBinding(ge,Te,Te),ue.set(G,Te))}function ce(G,ge,ue){const we=h.get(ge).get(G);u[we]!==ue&&(r.bindBufferBase(r.UNIFORM_BUFFER,we,ue),u[we]=ue)}function Ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),f={},p={},W=null,J={},m={},u={},g=new WeakMap,v=[],M=null,y=!1,x=null,w=null,b=null,T=null,P=null,C=null,E=null,R=new je(0,0,0),O=0,N=!1,D=null,X=null,K=null,V=null,Q=null,ae.set(0,0,r.canvas.width,r.canvas.height),ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:Ue,disable:nt,bindFramebuffer:vt,drawBuffers:Pe,useProgram:lt,setBlending:Re,setMaterial:Le,setFlipSided:Be,setCullFace:Oe,setLineWidth:ct,setPolygonOffset:Ze,setScissorTest:Mt,activeTexture:wt,bindTexture:Rt,unbindTexture:q,compressedTexImage2D:Zt,compressedTexImage3D:yt,texImage2D:I,texImage3D:ie,pixelStorei:F,getParameter:Se,updateUBOMapping:se,uniformBlockBinding:ce,texStorage2D:ut,texStorage3D:B,texSubImage2D:Pt,texSubImage3D:Fe,compressedTexSubImage2D:Jt,compressedTexSubImage3D:st,scissor:re,viewport:fe,reset:Ae}}function mR(r,e,t,n,i,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _e,f=new WeakMap,p=new Set;let m;const g=new WeakMap,v=new Set,M=new FinalizationRegistry(B=>v.delete(B));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,I){return y?new OffscreenCanvas(B,I):al("canvas")}function w(B,I,ie){let Se=1;const F=ut(B);if((F.width>ie||F.height>ie)&&(Se=ie/Math.max(F.width,F.height)),Se<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const re=Math.floor(Se*F.width),fe=Math.floor(Se*F.height);m===void 0&&(m=x(re,fe));const se=I?x(re,fe):m;return se.width=re,se.height=fe,se.getContext("2d").drawImage(B,0,0,re,fe),He("WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+re+"x"+fe+")."),se}else return"data"in B&&He("WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),B;return B}function b(B){return B.generateMipmaps}function T(B){r.generateMipmap(B)}function P(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(B,I,ie,Se,F,re=!1){if(B!==null){if(r[B]!==void 0)return r[B];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let fe;Se&&(fe=e.get("EXT_texture_norm16"),fe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=I;if(I===r.RED&&(ie===r.FLOAT&&(se=r.R32F),ie===r.HALF_FLOAT&&(se=r.R16F),ie===r.UNSIGNED_BYTE&&(se=r.R8),ie===r.UNSIGNED_SHORT&&fe&&(se=fe.R16_EXT),ie===r.SHORT&&fe&&(se=fe.R16_SNORM_EXT)),I===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(se=r.R8UI),ie===r.UNSIGNED_SHORT&&(se=r.R16UI),ie===r.UNSIGNED_INT&&(se=r.R32UI),ie===r.BYTE&&(se=r.R8I),ie===r.SHORT&&(se=r.R16I),ie===r.INT&&(se=r.R32I)),I===r.RG&&(ie===r.FLOAT&&(se=r.RG32F),ie===r.HALF_FLOAT&&(se=r.RG16F),ie===r.UNSIGNED_BYTE&&(se=r.RG8),ie===r.UNSIGNED_SHORT&&fe&&(se=fe.RG16_EXT),ie===r.SHORT&&fe&&(se=fe.RG16_SNORM_EXT)),I===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(se=r.RG8UI),ie===r.UNSIGNED_SHORT&&(se=r.RG16UI),ie===r.UNSIGNED_INT&&(se=r.RG32UI),ie===r.BYTE&&(se=r.RG8I),ie===r.SHORT&&(se=r.RG16I),ie===r.INT&&(se=r.RG32I)),I===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(se=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(se=r.RGB16UI),ie===r.UNSIGNED_INT&&(se=r.RGB32UI),ie===r.BYTE&&(se=r.RGB8I),ie===r.SHORT&&(se=r.RGB16I),ie===r.INT&&(se=r.RGB32I)),I===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(se=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(se=r.RGBA16UI),ie===r.UNSIGNED_INT&&(se=r.RGBA32UI),ie===r.BYTE&&(se=r.RGBA8I),ie===r.SHORT&&(se=r.RGBA16I),ie===r.INT&&(se=r.RGBA32I)),I===r.RGB&&(ie===r.UNSIGNED_SHORT&&fe&&(se=fe.RGB16_EXT),ie===r.SHORT&&fe&&(se=fe.RGB16_SNORM_EXT),ie===r.UNSIGNED_INT_5_9_9_9_REV&&(se=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(se=r.R11F_G11F_B10F)),I===r.RGBA){const ce=re?ol:Ot.getTransfer(F);ie===r.FLOAT&&(se=r.RGBA32F),ie===r.HALF_FLOAT&&(se=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(se=ce===Wt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT&&fe&&(se=fe.RGBA16_EXT),ie===r.SHORT&&fe&&(se=fe.RGBA16_SNORM_EXT),ie===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(B,I){let ie;return B?I===null||I===Ii||I===zs?ie=r.DEPTH24_STENCIL8:I===jn?ie=r.DEPTH32F_STENCIL8:I===qo&&(ie=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Ii||I===zs?ie=r.DEPTH_COMPONENT24:I===jn?ie=r.DEPTH_COMPONENT32F:I===qo&&(ie=r.DEPTH_COMPONENT16),ie}function R(B,I){return b(B)===!0||B.isFramebufferTexture&&B.minFilter!==fn&&B.minFilter!==rn?Math.log2(Math.max(I.width,I.height))+1:B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?I.mipmaps.length:1}function O(B){const I=new WeakRef(B);n.get(B).__ref=I,v.add(I),M.register(B,I,I)}function N(B){const I=n.get(B).__ref;I!==void 0&&(v.delete(I),M.unregister(I))}function D(B){K(B.target)}function X(B){V(B.target)}function K(B){B.removeEventListener("dispose",D),N(B),oe(B),B.isVideoTexture&&f.delete(B),B.isHTMLTexture&&p.delete(B)}function V(B){B.removeEventListener("dispose",X),N(B),k(B)}function Q(){for(const B of v){const I=B.deref();I!==void 0&&(I.isRenderTarget===!0?V(I):K(I))}v.clear(),p.clear()}function oe(B){const I=n.get(B);if(I.__webglInit===void 0)return;const ie=B.source,Se=g.get(ie);if(Se){const F=Se[I.__cacheKey];F.usedTimes--,F.usedTimes===0&&$(B),Object.keys(Se).length===0&&g.delete(ie)}n.remove(B)}function $(B){const I=n.get(B);r.deleteTexture(I.__webglTexture);const ie=B.source,Se=g.get(ie);delete Se[I.__cacheKey],o.memory.textures--}function k(B){const I=n.get(B);I.__depthDisposeCallback&&I.__depthDisposeCallback();const ie=B.depthTexture;if(ie&&ie.renderTarget===B&&K(ie),B.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(I.__webglFramebuffer[F]))for(let re=0;re<I.__webglFramebuffer[F].length;re++)r.deleteFramebuffer(I.__webglFramebuffer[F][re]);else r.deleteFramebuffer(I.__webglFramebuffer[F]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[F])}else{if(Array.isArray(I.__webglFramebuffer))for(let F=0;F<I.__webglFramebuffer.length;F++)r.deleteFramebuffer(I.__webglFramebuffer[F]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let F=0;F<I.__webglColorRenderbuffer.length;F++)I.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[F]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const Se=B.textures;for(let F=0,re=Se.length;F<re;F++){const fe=n.get(Se[F]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(Se[F])}n.remove(B)}let H=0;function W(){H=0}function J(){return H}function pe(B){H=B}function Me(){const B=H;return B>=i.maxTextures&&He("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,B}function ae(B){const I=[];return I.push(B.wrapS),I.push(B.wrapT),I.push(B.wrapR||0),I.push(B.magFilter),I.push(B.minFilter),I.push(B.anisotropy),I.push(B.internalFormat),I.push(B.format),I.push(B.type),I.push(B.generateMipmaps),I.push(B.mipmapsAutoUpdate),I.push(B.premultiplyAlpha),I.push(B.flipY),I.push(B.unpackAlignment),I.push(B.colorSpace),I.join()}function ye(B,I){const ie=n.get(B);if(B.isVideoTexture&&Jt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ie.__version!==B.version){const Se=B.image;if(Se===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ie,B,I);return}}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+I)}function Ie(B,I){const ie=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){Le(ie,B,I);return}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+I)}function qe(B,I){const ie=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){Le(ie,B,I);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+I)}function Ue(B,I){const ie=n.get(B);if(B.version>0&&ie.__version!==B.version){Be(ie,B,I);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+I)}const nt={[$a]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[el]:r.MIRRORED_REPEAT},vt={[fn]:r.NEAREST,[Op]:r.NEAREST_MIPMAP_NEAREST,[Bo]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Wa]:r.LINEAR_MIPMAP_NEAREST,[Vi]:r.LINEAR_MIPMAP_LINEAR},Pe={[jv]:r.NEVER,[Yp]:r.ALWAYS,[Zv]:r.LESS,[Wp]:r.LEQUAL,[Jv]:r.EQUAL,[Xp]:r.GEQUAL,[Kv]:r.GREATER,[Qv]:r.NOTEQUAL};function lt(B,I){if(I.type===jn&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===rn||I.magFilter===Wa||I.magFilter===Bo||I.magFilter===Vi||I.minFilter===rn||I.minFilter===Wa||I.minFilter===Bo||I.minFilter===Vi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,nt[I.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,nt[I.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,nt[I.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,vt[I.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,vt[I.minFilter]),I.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,Pe[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===fn||I.minFilter!==Bo&&I.minFilter!==Vi||I.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function tt(B,I){let ie=!1;B.__webglInit===void 0&&(B.__webglInit=!0,I.addEventListener("dispose",D),O(I));const Se=I.source;let F=g.get(Se);F===void 0&&(F={},g.set(Se,F));const re=ae(I);if(re!==B.__cacheKey){F[re]===void 0&&(F[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),F[re].usedTimes++;const fe=F[B.__cacheKey];fe!==void 0&&(F[B.__cacheKey].usedTimes--,fe.usedTimes===0&&$(I)),B.__cacheKey=re,B.__webglTexture=F[re].texture}return ie}function me(B,I,ie){return Math.floor(Math.floor(B/ie)/I)}function Re(B,I,ie,Se){const re=B.updateRanges;if(re.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,I.width,I.height,ie,Se,I.data);else{re.sort((G,ge)=>G.start-ge.start);let fe=0;for(let G=1;G<re.length;G++){const ge=re[fe],ue=re[G],Te=ge.start+ge.count,we=me(ue.start,I.width,4),Ce=me(ge.start,I.width,4);ue.start<=Te+1&&we===Ce&&me(ue.start+ue.count-1,I.width,4)===we?ge.count=Math.max(ge.count,ue.start+ue.count-ge.start):(++fe,re[fe]=ue)}re.length=fe+1;const se=t.getParameter(r.UNPACK_ROW_LENGTH),ce=t.getParameter(r.UNPACK_SKIP_PIXELS),Ae=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,I.width);for(let G=0,ge=re.length;G<ge;G++){const ue=re[G],Te=Math.floor(ue.start/4),we=Math.ceil(ue.count/4),Ce=Te%I.width,Ke=Math.floor(Te/I.width),pt=we,Ee=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(r.TEXTURE_2D,0,Ce,Ke,pt,Ee,ie,Se,I.data)}B.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,se),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function Le(B,I,ie){let Se=r.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),I.isData3DTexture&&(Se=r.TEXTURE_3D);const F=tt(B,I),re=I.source;t.bindTexture(Se,B.__webglTexture,r.TEXTURE0+ie);const fe=n.get(re);if(re.version!==fe.__version||F===!0){if(t.activeTexture(r.TEXTURE0+ie),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){const Ee=Ot.getPrimaries(Ot.workingColorSpace),at=I.colorSpace===Rr?null:Ot.getPrimaries(I.colorSpace),Et=I.colorSpace===Rr||Ee===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}t.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment);let ce=w(I.image,!1,i.maxTextureSize);ce=st(I,ce);const Ae=s.convert(I.format,I.colorSpace),G=s.convert(I.type);let ge=C(I.internalFormat,Ae,G,I.normalized,I.colorSpace,I.isVideoTexture);lt(Se,I);let ue;const Te=I.mipmaps,we=I.isVideoTexture!==!0,Ce=fe.__version===void 0||F===!0,Ke=re.dataReady,pt=R(I,ce);if(I.isDepthTexture)ge=E(I.format===Ir,I.type),Ce&&(we?t.texStorage2D(r.TEXTURE_2D,1,ge,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,ge,ce.width,ce.height,0,Ae,G,null));else if(I.isDataTexture)if(Te.length>0){we&&Ce&&t.texStorage2D(r.TEXTURE_2D,pt,ge,Te[0].width,Te[0].height);for(let Ee=0,at=Te.length;Ee<at;Ee++)ue=Te[Ee],we?Ke&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,ue.width,ue.height,Ae,G,ue.data):t.texImage2D(r.TEXTURE_2D,Ee,ge,ue.width,ue.height,0,Ae,G,ue.data);I.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(r.TEXTURE_2D,pt,ge,ce.width,ce.height),Ke&&Re(I,ce,Ae,G)):t.texImage2D(r.TEXTURE_2D,0,ge,ce.width,ce.height,0,Ae,G,ce.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pt,ge,Te[0].width,Te[0].height,ce.depth);for(let Ee=0,at=Te.length;Ee<at;Ee++)if(ue=Te[Ee],I.format!==Zn)if(Ae!==null)if(we){if(Ke)if(I.layerUpdates.size>0){const Et=wp(ue.width,ue.height,I.format,I.type);for(const Ve of I.layerUpdates){const zt=ue.data.subarray(Ve*Et/ue.data.BYTES_PER_ELEMENT,(Ve+1)*Et/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,Ve,ue.width,ue.height,1,Ae,zt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,ue.width,ue.height,ce.depth,Ae,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,ge,ue.width,ue.height,ce.depth,0,ue.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Ke&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,ue.width,ue.height,ce.depth,Ae,G,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,ge,ue.width,ue.height,ce.depth,0,Ae,G,ue.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(r.TEXTURE_2D,pt,ge,Te[0].width,Te[0].height);for(let Ee=0,at=Te.length;Ee<at;Ee++)ue=Te[Ee],I.format!==Zn?Ae!==null?we?Ke&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,ue.width,ue.height,Ae,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,ge,ue.width,ue.height,0,ue.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ke&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,ue.width,ue.height,Ae,G,ue.data):t.texImage2D(r.TEXTURE_2D,Ee,ge,ue.width,ue.height,0,Ae,G,ue.data)}else if(I.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pt,ge,ce.width,ce.height,ce.depth),Ke)if(I.layerUpdates.size>0){const Ee=wp(ce.width,ce.height,I.format,I.type);for(const at of I.layerUpdates){const Et=ce.data.subarray(at*Ee/ce.data.BYTES_PER_ELEMENT,(at+1)*Ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,ce.width,ce.height,1,Ae,G,Et)}I.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,G,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,ce.width,ce.height,ce.depth,0,Ae,G,ce.data);else if(I.isData3DTexture)we?(Ce&&t.texStorage3D(r.TEXTURE_3D,pt,ge,ce.width,ce.height,ce.depth),Ke&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,G,ce.data)):t.texImage3D(r.TEXTURE_3D,0,ge,ce.width,ce.height,ce.depth,0,Ae,G,ce.data);else if(I.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(r.TEXTURE_2D,pt,ge,ce.width,ce.height);else{let Ee=ce.width,at=ce.height;for(let Et=0;Et<pt;Et++)t.texImage2D(r.TEXTURE_2D,Et,ge,Ee,at,0,Ae,G,null),Ee>>=1,at>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in r){const Ee=r.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),ce.parentNode!==Ee){Ee.appendChild(ce),p.add(I),Ee.onpaint=at=>{const Et=at.changedElements;for(const Ve of p)Et.includes(Ve.image)&&(Ve.needsUpdate=!0)},Ee.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ce);else{const Et=r.RGBA,Ve=r.RGBA,zt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Et,Ve,zt,ce)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Te.length>0){if(we&&Ce){const Ee=ut(Te[0]);t.texStorage2D(r.TEXTURE_2D,pt,ge,Ee.width,Ee.height)}for(let Ee=0,at=Te.length;Ee<at;Ee++)ue=Te[Ee],we?Ke&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ae,G,ue):t.texImage2D(r.TEXTURE_2D,Ee,ge,Ae,G,ue);I.generateMipmaps=!1}else if(we){if(Ce){const Ee=ut(ce);t.texStorage2D(r.TEXTURE_2D,pt,ge,Ee.width,Ee.height)}Ke&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,G,ce)}else t.texImage2D(r.TEXTURE_2D,0,ge,Ae,G,ce);b(I)&&I.mipmapsAutoUpdate===!0&&T(Se),fe.__version=re.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function Be(B,I,ie){if(I.image.length!==6)return;const Se=tt(B,I),F=I.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+ie);const re=n.get(F);if(F.version!==re.__version||Se===!0){t.activeTexture(r.TEXTURE0+ie);const fe=Ot.getPrimaries(Ot.workingColorSpace),se=I.colorSpace===Rr?null:Ot.getPrimaries(I.colorSpace),ce=I.colorSpace===Rr||fe===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ae=I.isCompressedTexture||I.image[0].isCompressedTexture,G=I.image[0]&&I.image[0].isDataTexture,ge=[];for(let Ve=0;Ve<6;Ve++)!Ae&&!G?ge[Ve]=w(I.image[Ve],!0,i.maxCubemapSize):ge[Ve]=G?I.image[Ve].image:I.image[Ve],ge[Ve]=st(I,ge[Ve]);const ue=ge[0],Te=s.convert(I.format,I.colorSpace),we=s.convert(I.type);let Ce=C(I.internalFormat,Te,we,I.normalized,I.colorSpace);const Ke=I.isVideoTexture!==!0,pt=re.__version===void 0||Se===!0,Ee=F.dataReady;let at=R(I,ue);lt(r.TEXTURE_CUBE_MAP,I);let Et;if(I.isDepthTexture){if(Ce=E(I.format===Ir,I.type),pt)if(Ke)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Ce,ue.width,ue.height);else for(let Ve=0;Ve<6;Ve++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ce,ue.width,ue.height,0,Te,we,null)}else if(Ae){Ke&&pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,at,Ce,ue.width,ue.height);for(let Ve=0;Ve<6;Ve++){Et=ge[Ve].mipmaps;for(let zt=0;zt<Et.length;zt++){const dn=Et[zt];I.format!==Zn?Te!==null?Ke?Ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt,0,0,dn.width,dn.height,Te,dn.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt,Ce,dn.width,dn.height,0,dn.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt,0,0,dn.width,dn.height,Te,we,dn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt,Ce,dn.width,dn.height,0,Te,we,dn.data)}}}else{if(Et=I.mipmaps,Ke&&pt){Et.length>0&&at++;const Ve=ut(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,at,Ce,Ve.width,Ve.height)}for(let Ve=0;Ve<6;Ve++)if(G){Ke?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,0,0,ge[Ve].width,ge[Ve].height,Te,we,ge[Ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ce,ge[Ve].width,ge[Ve].height,0,Te,we,ge[Ve].data);for(let zt=0;zt<Et.length;zt++){const Qn=Et[zt].image[Ve].image;Ke?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt+1,0,0,Qn.width,Qn.height,Te,we,Qn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt+1,Ce,Qn.width,Qn.height,0,Te,we,Qn.data)}}else{Ke?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,0,0,Te,we,ge[Ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ce,Te,we,ge[Ve]);for(let zt=0;zt<Et.length;zt++){const dn=Et[zt];Ke?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt+1,0,0,Te,we,dn.image[Ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,zt+1,Ce,Te,we,dn.image[Ve])}}}b(I)&&I.mipmapsAutoUpdate===!0&&T(r.TEXTURE_CUBE_MAP),re.__version=F.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function Oe(B,I,ie,Se,F,re){const fe=s.convert(ie.format,ie.colorSpace),se=s.convert(ie.type),ce=C(ie.internalFormat,fe,se,ie.normalized,ie.colorSpace),Ae=n.get(I),G=n.get(ie);if(G.__renderTarget=I,!Ae.__hasExternalTextures){const ge=Math.max(1,I.width>>re),ue=Math.max(1,I.height>>re);F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?t.texImage3D(F,re,ce,ge,ue,I.depth,0,fe,se,null):t.texImage2D(F,re,ce,ge,ue,0,fe,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,B),Fe(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,F,G.__webglTexture,0,Pt(I)):(F===r.TEXTURE_2D||F>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,F,G.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(B,I,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,B),I.depthBuffer){const Se=I.depthTexture,F=Se&&Se.isDepthTexture?Se.type:null,re=E(I.stencilBuffer,F),fe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Fe(I)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt(I),re,I.width,I.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt(I),re,I.width,I.height):r.renderbufferStorage(r.RENDERBUFFER,re,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,B)}else{const Se=I.textures;for(let F=0;F<Se.length;F++){const re=Se[F],fe=s.convert(re.format,re.colorSpace),se=s.convert(re.type),ce=C(re.internalFormat,fe,se,re.normalized,re.colorSpace);Fe(I)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt(I),ce,I.width,I.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt(I),ce,I.width,I.height):r.renderbufferStorage(r.RENDERBUFFER,ce,I.width,I.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(B,I,ie){const Se=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,B),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const F=n.get(I.depthTexture);F.__renderTarget=I;const re=Se?I.depthTexture.image[0]:I.depthTexture.image;(!F.__webglTexture||re.width!==I.width||re.height!==I.height)&&(re.width=I.width,re.height=I.height,I.depthTexture.needsUpdate=!0),Se?Ue(I.depthTexture,0):ye(I.depthTexture,0);const fe=F.__webglTexture,se=Pt(I),ce=Se?r.TEXTURE_CUBE_MAP_POSITIVE_X+ie:r.TEXTURE_2D,Ae=I.depthTexture.format===Ir?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(I.depthTexture.format===Ur)Fe(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,ce,fe,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,ce,fe,0);else if(I.depthTexture.format===Ir)Fe(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,ce,fe,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,ce,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(B){const I=n.get(B),ie=B.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==B.depthTexture){const Se=B.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),Se){const F=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,Se.removeEventListener("dispose",F)};Se.addEventListener("dispose",F),I.__depthDisposeCallback=F}I.__boundDepthTexture=Se}if(B.depthTexture&&!I.__autoAllocateDepthBuffer)if(ie)for(let Se=0;Se<6;Se++)Ze(I.__webglFramebuffer[Se],B,Se);else B.texture.mipmaps.length>0?Ze(I.__webglFramebuffer[0],B,0):Ze(I.__webglFramebuffer,B,0);else if(ie){I.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer[Se]),I.__webglDepthbuffer[Se]===void 0)I.__webglDepthbuffer[Se]=r.createRenderbuffer(),ct(I.__webglDepthbuffer[Se],B,!1);else{const F=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=I.__webglDepthbuffer[Se];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,F,r.RENDERBUFFER,re)}}else if(B.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=r.createRenderbuffer(),ct(I.__webglDepthbuffer,B,!1);else{const F=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=I.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,F,r.RENDERBUFFER,re)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(B,I,ie){const Se=n.get(B);I!==void 0&&Oe(Se.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Mt(B)}function Rt(B){const I=B.texture,ie=n.get(B),Se=n.get(I);B.addEventListener("dispose",X),O(B);const F=B.textures,re=B.isWebGLCubeRenderTarget===!0,fe=F.length>1;if(fe||(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=I.version,o.memory.textures++),re){ie.__webglFramebuffer=[];for(let se=0;se<6;se++)if(I.mipmaps.length>0){ie.__webglFramebuffer[se]=[];for(let ce=0;ce<I.mipmaps.length;ce++)ie.__webglFramebuffer[se][ce]=r.createFramebuffer()}else ie.__webglFramebuffer[se]=r.createFramebuffer()}else{if(I.mipmaps.length>0){ie.__webglFramebuffer=[];for(let se=0;se<I.mipmaps.length;se++)ie.__webglFramebuffer[se]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(fe)for(let se=0,ce=F.length;se<ce;se++){const Ae=n.get(F[se]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),o.memory.textures++)}if(B.samples>0&&Fe(B)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let se=0;se<F.length;se++){const ce=F[se];ie.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[se]);const Ae=s.convert(ce.format,ce.colorSpace),G=s.convert(ce.type),ge=C(ce.internalFormat,Ae,G,ce.normalized,ce.colorSpace,B.isXRRenderTarget===!0),ue=Pt(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,ge,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,ie.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(ie.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),lt(r.TEXTURE_CUBE_MAP,I);for(let se=0;se<6;se++)if(I.mipmaps.length>0)for(let ce=0;ce<I.mipmaps.length;ce++)Oe(ie.__webglFramebuffer[se][ce],B,I,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else Oe(ie.__webglFramebuffer[se],B,I,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(I)?T(r.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let se=0,ce=F.length;se<ce;se++){const Ae=F[se],G=n.get(Ae);let ge=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ge=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,G.__webglTexture),lt(ge,Ae),Oe(ie.__webglFramebuffer,B,Ae,r.COLOR_ATTACHMENT0+se,ge,0),b(Ae)&&T(ge)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(se=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Se.__webglTexture),lt(se,I),I.mipmaps.length>0)for(let ce=0;ce<I.mipmaps.length;ce++)Oe(ie.__webglFramebuffer[ce],B,I,r.COLOR_ATTACHMENT0,se,ce);else Oe(ie.__webglFramebuffer,B,I,r.COLOR_ATTACHMENT0,se,0);b(I)?T(se):I.mipmaps.length>0&&r.texParameteri(se,r.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),t.unbindTexture()}B.depthBuffer&&Mt(B)}function q(B){const I=B.textures;for(let ie=0,Se=I.length;ie<Se;ie++){const F=I[ie];if(b(F)&&F.mipmapsAutoUpdate===!0){const re=P(B),fe=n.get(F).__webglTexture;t.bindTexture(re,fe),T(re),t.unbindTexture()}}}const Zt=[];function yt(B){if(B.samples>0){if(Fe(B)===!1){const I=B.textures,ie=B.width,Se=B.height;let F=r.COLOR_BUFFER_BIT;const re=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(B),se=I.length>1;if(se)for(let Ae=0;Ae<I.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),B.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ae=0;Ae<I.length;Ae++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(F|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(F|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[Ae]);const G=n.get(I[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,G,0)}r.blitFramebuffer(0,0,ie,Se,0,0,ie,Se,F,r.NEAREST),u===!0&&(Zt.length=0,Zt.push(r.COLOR_ATTACHMENT0+Ae),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&Zt.push(re),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Ae=0;Ae<I.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,fe.__webglColorRenderbuffer[Ae]);const G=n.get(I[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,G,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&u){const I=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[I])}}}function Pt(B){return Math.min(i.maxSamples,B.samples)}function Fe(B){const I=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Jt(B){const I=o.render.frame;f.get(B)!==I&&(f.set(B,I),B.update())}function st(B,I){const ie=B.colorSpace,Se=B.format,F=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ie!==sl&&ie!==Rr&&(Ot.getTransfer(ie)===Wt?(Se!==Zn||F!==qn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",ie)),I}function ut(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=Me,this.resetTextureUnits=W,this.getTextureUnits=J,this.setTextureUnits=pe,this.setTexture2D=ye,this.setTexture2DArray=Ie,this.setTexture3D=qe,this.setTextureCube=Ue,this.rebindTextures=wt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Fe,this.dispose=Q}function _y(r,e){function t(n,i=Rr){let s;const o=Ot.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===Eh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fp)return r.BYTE;if(n===Bp)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===wh)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===Xi)return r.HALF_FLOAT;if(n===Hp)return r.ALPHA;if(n===Vp)return r.RGB;if(n===Zn)return r.RGBA;if(n===Ur)return r.DEPTH_COMPONENT;if(n===Ir)return r.DEPTH_STENCIL;if(n===Th)return r.RED;if(n===vl)return r.RED_INTEGER;if(n===es)return r.RG;if(n===Ah)return r.RG_INTEGER;if(n===Ch)return r.RGBA_INTEGER;if(n===Xa||n===Ya||n===qa||n===ja)if(o===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ou||n===Fu||n===Bu||n===zu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===tl||n===Xu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ku||n===Hu)return o===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vu)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gu)return s.COMPRESSED_R11_EAC;if(n===Wu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===tl)return s.COMPRESSED_RG11_EAC;if(n===Xu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yu||n===qu||n===ju||n===Zu||n===Ju||n===Ku||n===Qu||n===$u||n===eh||n===th||n===nh||n===ih||n===rh||n===sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yu)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qu)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ju)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zu)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ju)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ku)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qu)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$u)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===th)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ih)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sh)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oh||n===ah||n===lh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oh)return o===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ch||n===uh||n===nl||n===hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ch)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pr({vertexShader:gR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new $o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends qi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,v=null;const M=typeof XRWebGLBinding<"u",y=new vR,x={},w=t.getContextAttributes();let b=null,T=null;const P=[],C=[],E=new _e;let R=null,O=null;const N=new ln;N.viewport=new Bt;const D=new ln;D.viewport=new Bt;const X=[N,D],K=new Jx;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=P[ae];return ye===void 0&&(ye=new bu,P[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=P[ae];return ye===void 0&&(ye=new bu,P[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=P[ae];return ye===void 0&&(ye=new bu,P[ae]=ye),ye.getHandSpace()};function oe(ae){const ye=C.indexOf(ae.inputSource);if(ye===-1)return;const Ie=P[ye];Ie!==void 0&&(Ie.update(ae.inputSource,ae.frame,h||o),Ie.dispatchEvent({type:ae.type,data:ae.inputSource}))}function $(){i.removeEventListener("select",oe),i.removeEventListener("selectstart",oe),i.removeEventListener("selectend",oe),i.removeEventListener("squeeze",oe),i.removeEventListener("squeezestart",oe),i.removeEventListener("squeezeend",oe),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",k);for(let ae=0;ae<P.length;ae++){const ye=C[ae];ye!==null&&(C[ae]=null,P[ae].disconnect(ye))}V=null,Q=null,y.reset();for(const ae in x)delete x[ae];if(e.setRenderTarget(b),g=null,m=null,p=null,i=null,T=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),O!==null){const ae=O.camera;ae.fov=O.fov,ae.zoom=O.zoom,ae.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",oe),i.addEventListener("selectstart",oe),i.addEventListener("selectend",oe),i.addEventListener("squeeze",oe),i.addEventListener("squeezestart",oe),i.addEventListener("squeezeend",oe),i.addEventListener("end",$),i.addEventListener("inputsourceschange",k),w.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,qe=null,Ue=null;w.depth&&(Ue=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=w.stencil?Ir:Ur,qe=w.stencil?zs:Ii);const nt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(nt),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new xi(m.textureWidth,m.textureHeight,{format:Zn,type:qn,depthTexture:new Vs(m.textureWidth,m.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Ie={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,Ie),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new xi(g.framebufferWidth,g.framebufferHeight,{format:Zn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(c),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(ae){for(let ye=0;ye<ae.removed.length;ye++){const Ie=ae.removed[ye],qe=C.indexOf(Ie);qe>=0&&(C[qe]=null,P[qe].disconnect(Ie))}for(let ye=0;ye<ae.added.length;ye++){const Ie=ae.added[ye];let qe=C.indexOf(Ie);if(qe===-1){for(let nt=0;nt<P.length;nt++)if(nt>=C.length){C.push(Ie),qe=nt;break}else if(C[nt]===null){C[nt]=Ie,qe=nt;break}if(qe===-1)break}const Ue=P[qe];Ue&&Ue.connect(Ie)}}function H(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let ye=ae.near,Ie=ae.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),K.near=D.near=N.near=ye,K.far=D.far=N.far=Ie,(V!==K.near||Q!==K.far)&&(i.updateRenderState({depthNear:K.near,depthFar:K.far}),V=K.near,Q=K.far),K.layers.mask=ae.layers.mask|6,N.layers.mask=K.layers.mask&-5,D.layers.mask=K.layers.mask&-3;const qe=ae.parent,Ue=K.cameras;H(K,qe);for(let nt=0;nt<Ue.length;nt++)H(Ue[nt],qe);K.projectionMatrix.copy(N.projectionMatrix),K.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&ae.isPerspectiveCamera&&(O={camera:ae,fov:ae.fov,zoom:ae.zoom}),W(ae,K,qe)};function W(ae,ye,Ie){Ie===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(Ie.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=jo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ae){u=ae,m!==null&&(m.fixedFoveation=ae),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ae){return x[ae]};let J=null;function pe(ae,ye){if(f=ye.getViewerPose(h||o),v=ye,f!==null){const Ie=f.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let qe=!1;Ie.length!==K.cameras.length&&(K.cameras.length=0,qe=!0);for(let Pe=0;Pe<Ie.length;Pe++){const lt=Ie[Pe];let tt=null;if(g!==null)tt=g.getViewport(lt);else{const Re=p.getViewSubImage(m,lt);tt=Re.viewport,Pe===0&&(e.setRenderTargetTextures(T,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(T))}let me=X[Pe];me===void 0&&(me=new ln,me.layers.enable(Pe),me.viewport=new Bt,X[Pe]=me),me.matrix.fromArray(lt.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(lt.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(tt.x,tt.y,tt.width,tt.height),Pe===0&&(K.matrix.copy(me.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),qe===!0&&K.cameras.push(me)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const Pe=p.getDepthInformation(Ie[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(Pe,i.renderState)}if(Ue&&Ue.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Pe=0;Pe<Ie.length;Pe++){const lt=Ie[Pe].camera;if(lt){let tt=x[lt];tt||(tt=new nm,x[lt]=tt);const me=p.getCameraImage(lt);tt.sourceTexture=me}}}}for(let Ie=0;Ie<P.length;Ie++){const qe=C[Ie],Ue=P[Ie];qe!==null&&Ue!==void 0&&Ue.update(qe,ye,h||o)}J&&J(ae,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),v=null}const Me=new ay;Me.setAnimationLoop(pe),this.setAnimationLoop=function(ae){J=ae},this.dispose=function(){}}}const yR=new _t,vy=new xt;vy.set(-1,0,0,0,1,0,0,0,1);function SR(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,Tx(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function i(y,x,w,b,T){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(y,x):x.isMeshLambertMaterial?(s(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(y,x),p(y,x)):x.isMeshPhongMaterial?(s(y,x),f(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(y,x),m(y,x),x.isMeshPhysicalMaterial&&g(y,x,T)):x.isMeshMatcapMaterial?(s(y,x),v(y,x)):x.isMeshDepthMaterial?s(y,x):x.isMeshDistanceMaterial?(s(y,x),M(y,x)):x.isMeshNormalMaterial?s(y,x):x.isLineBasicMaterial?(o(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?u(y,x,w,b):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const w=e.get(x),b=w.envMap,T=w.envMapRotation;b&&(y.envMap.value=b,y.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(T)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(vy),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function o(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function u(y,x,w,b){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*w,y.scale.value=b*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function f(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function p(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function m(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function g(y,x,w){y.ior.value=x.ior,x.diffuseRoughness>0&&(y.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const w=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MR(r,e,t,n){let i={},s={};function o(w,b){const T=b.program;n.uniformBlockBinding(w,T,i[w.id])}function c(w,b){let T=i[w.id];T===void 0&&(v(w),T=u(w),i[w.id]=T,w.addEventListener("dispose",y));const P=b.program;n.updateUBOMapping(w,P);const C=e.render.frame;s[w.id]!==C&&(h(w),s[w.id]=C)}function u(w){const b=r.createBuffer(),T=w.__size,P=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,T,P),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function h(w){const b=i[w.id],T=w.uniforms,P=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let C=0,E=T.length;C<E;C++){const R=T[C];if(Array.isArray(R))for(let O=0,N=R.length;O<N;O++)f(R[O],C,O,P);else f(R,C,0,P)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(w,b,T,P){if(m(w,b,T,P)===!0){const C=w.__offset,E=w.value;if(Array.isArray(E)){let R=0;for(let O=0;O<E.length;O++){const N=E[O],D=M(N,!0);p(N,w.__data,R),R+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(E,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,C,w.__data)}}function p(w,b,T){typeof w=="number"||typeof w=="boolean"?b[T]=w:w.isMatrix3?(b[T]=w.elements[0],b[T+1]=w.elements[1],b[T+2]=w.elements[2],b[T+3]=0,b[T+4]=w.elements[3],b[T+5]=w.elements[4],b[T+6]=w.elements[5],b[T+7]=0,b[T+8]=w.elements[6],b[T+9]=w.elements[7],b[T+10]=w.elements[8],b[T+11]=0):ArrayBuffer.isView(w)?b.set(w.subarray(0,b.length-T),T):w.toArray(b,T)}function m(w,b,T,P){const C=w.value,E=b+"_"+T;if(Array.isArray(C)){P[E]===void 0&&(P[E]=[]);const R=P[E];let O=!1;for(let N=0;N<C.length;N++)g(C[N],R,N)===!0&&(O=!0);return O}return g(C,P,E)}function g(w,b,T){if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:ArrayBuffer.isView(w)?b[T]=w.slice():b[T]=w.clone(),!0;{const P=b[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return b[T]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(P.equals(w)===!1)return P.copy(w),!0}}return!1}function v(w){const b=w.uniforms;let T=0;const P=16;for(let E=0,R=b.length;E<R;E++){const O=Array.isArray(b[E])?b[E]:[b[E]];for(let N=0,D=O.length;N<D;N++){const X=O[N],K=Array.isArray(X.value)?X.value:[X.value],V=Array.isArray(b[E])||Array.isArray(X.value);let Q=T;for(let $=0,k=K.length;$<k;$++){const H=K[$],W=M(H,V),J=T%P,pe=J%W.boundary,Me=J+pe;T+=pe,Me!==0&&P-Me<W.storage&&(T+=P-Me),$===0&&(Q=T),T+=W.storage}const oe=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new oe((T-Q)/Float32Array.BYTES_PER_ELEMENT),X.__offset=Q}}const C=T%P;return C>0&&(T+=P-C),w.__size=T,w.__cache={},this}function M(w,b){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=16,T.storage=48):w.isMatrix4?(T.boundary=16,T.storage=64):w.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(T.boundary=16,T.storage=w.byteLength):He("WebGLRenderer: Unsupported uniform value type.",w),b===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function y(w){const b=w.target;b.removeEventListener("dispose",y),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function x(){for(const w in i)r.deleteBuffer(i[w]);i={},s={}}return{bind:o,update:c,dispose:x}}const wR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sr=null;function ER(){return sr===null&&(sr=new Pi(wR,16,16,es,Xi),sr.name="DFG_LUT",sr.minFilter=rn,sr.magFilter=rn,sr.wrapS=ai,sr.wrapT=ai,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}class xy{constructor(e={}){const{canvas:t=ex(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=qn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const M=g,y=new Set([Ch,Ah,vl]),x=new Set([qn,Ii,qo,zs,Eh,bh]),w=new Uint32Array(4),b=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let P=null,C=null;const E=[],R=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,X=null,K=null,V=null,Q=null;this._outputColorSpace=ri;let oe=0,$=0,k=null,H=-1,W=null;const J=new Bt,pe=new Bt;let Me=null;const ae=new je(0);let ye=0,Ie=t.width,qe=t.height,Ue=1,nt=null,vt=null;const Pe=new Bt(0,0,Ie,qe),lt=new Bt(0,0,Ie,qe);let tt=!1;const me=new Hs,Re=new xl;let Le=!1,Be=!1;const Oe=new _t,ct=new U,Ze=new Bt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Rt(){return k===null?Ue:1}let q=n;function Zt(L,Y){return t.getContext(L,Y)}let yt,Pt,Fe,Jt,st,ut,B,I,ie,Se,F,re,fe,se,ce,Ae,G,ge,ue,Te,we,Ce,Ke;try{const L={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),q===null){const Y="webgl2";if(q=Zt(Y,L),q===null)throw Zt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(L){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),rt("WebGLRenderer: "+L.message),L}function pt(){yt=new RA(q),yt.init(),we=new _y(q,yt),Pt=new vA(q,yt,e,we),Fe=new pR(q,yt),Pt.reversedDepthBuffer&&m&&Fe.buffers.depth.setReversed(!0),K=q.createFramebuffer(),V=q.createFramebuffer(),Q=q.createFramebuffer(),Jt=new LA(q),st=new eR,ut=new mR(q,yt,Fe,st,Pt,we,Jt),B=new CA(N),I=new DE(q),Ce=new gA(q,I),ie=new PA(q,I,Jt,Ce),Se=new DA(q,ie,I,Ce,Jt),ge=new NA(q,Pt,ut),ce=new xA(st),F=new $C(N,B,yt,Pt,Ce,ce),re=new SR(N,st),fe=new nR,se=new lR(yt),G=new mA(N,B,Fe,Se,v,u),Ae=new dR(N,Se,Pt),Ke=new MR(q,Jt,Pt,Fe),ue=new _A(q,yt,Jt),Te=new IA(q,yt,Jt),Jt.programs=F.programs,N.capabilities=Pt,N.extensions=yt,N.properties=st,N.renderLists=fe,N.shadowMap=Ae,N.state=Fe,N.info=Jt}M!==qn&&(O=new OA(M,t.width,t.height,c,i,s));const Ee=new xR(N,q);this.xr=Ee,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const L=yt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=yt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(L){L!==void 0&&(Ue=L,this.setSize(Ie,qe,!1))},this.getSize=function(L){return L.set(Ie,qe)},this.setSize=function(L,Y,te=!0){if(Ee.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=L,qe=Y,t.width=Math.floor(L*Ue),t.height=Math.floor(Y*Ue),te===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(Ie*Ue,qe*Ue).floor()},this.setDrawingBufferSize=function(L,Y,te){Ie=L,qe=Y,Ue=te,t.width=Math.floor(L*te),t.height=Math.floor(Y*te),this.setViewport(0,0,L,Y)},this.setEffects=function(L){if(M===qn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Y=0;Y<L.length;Y++)if(L[Y].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(J)},this.getViewport=function(L){return L.copy(Pe)},this.setViewport=function(L,Y,te,j){L.isVector4?Pe.set(L.x,L.y,L.z,L.w):Pe.set(L,Y,te,j),Fe.viewport(J.copy(Pe).multiplyScalar(Rt()).round())},this.getScissor=function(L){return L.copy(lt)},this.setScissor=function(L,Y,te,j){L.isVector4?lt.set(L.x,L.y,L.z,L.w):lt.set(L,Y,te,j),Fe.scissor(pe.copy(lt).multiplyScalar(Rt()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(L){Fe.setScissorTest(tt=L)},this.setOpaqueSort=function(L){nt=L},this.setTransparentSort=function(L){vt=L},this.getClearColor=function(L){return L.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(L=!0,Y=!0,te=!0){let j=0;if(L){let ne=!1;if(k!==null){const be=k.texture.format;ne=y.has(be)}if(ne){const be=k.texture.type,ke=x.has(be),Ne=G.getClearColor(),ze=G.getClearAlpha(),We=Ne.r,mt=Ne.g,Lt=Ne.b;ke?(w[0]=We,w[1]=mt,w[2]=Lt,w[3]=ze,q.clearBufferuiv(q.COLOR,0,w)):(b[0]=We,b[1]=mt,b[2]=Lt,b[3]=ze,q.clearBufferiv(q.COLOR,0,b))}else j|=q.COLOR_BUFFER_BIT}Y&&(j|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(j|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&q.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),X=L},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),G.dispose(),fe.dispose(),se.dispose(),ut.dispose(),st.dispose(),B.dispose(),Se.dispose(),ie.dispose(),Ce.dispose(),Ke.dispose(),F.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Il),Ee.removeEventListener("sessionend",Ll),gr.stop()};function at(L){L.preventDefault(),ll("WebGLRenderer: Context Lost."),D=!0}function Et(){ll("WebGLRenderer: Context Restored."),D=!1;const L=Jt.autoReset,Y=Ae.enabled,te=Ae.autoUpdate,j=Ae.needsUpdate,ne=Ae.type;pt(),Jt.autoReset=L,Ae.enabled=Y,Ae.autoUpdate=te,Ae.needsUpdate=j,Ae.type=ne}function Ve(L){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function zt(L){const Y=L.target;Y.removeEventListener("dispose",zt),dn(Y)}function dn(L){Qn(L),st.remove(L)}function Qn(L){const Y=st.get(L).programs;Y!==void 0&&(Y.forEach(function(te){F.releaseProgram(te)}),L.isShaderMaterial&&F.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,te,j,ne,be){Y===null&&(Y=Mt);const ke=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ne=sa(L,Y,te,j,ne);Fe.setMaterial(j,ke);let ze=te.index,We=1;if(j.wireframe===!0){if(ze=ie.getWireframeAttribute(te),ze===void 0)return;We=2}const mt=te.drawRange,Lt=te.attributes.position;let Qe=mt.start*We,At=(mt.start+mt.count)*We;be!==null&&(Qe=Math.max(Qe,be.start*We),At=Math.min(At,(be.start+be.count)*We)),ze!==null?(Qe=Math.max(Qe,0),At=Math.min(At,ze.count)):Lt!=null&&(Qe=Math.max(Qe,0),At=Math.min(At,Lt.count));const $t=At-Qe;if($t<0||$t===1/0)return;Ce.setup(ne,j,Ne,te,ze);let Dt,Xt=ue;if(ze!==null&&(Dt=I.get(ze),Xt=Te,Xt.setIndex(Dt)),ne.isMesh)j.wireframe===!0?(Fe.setLineWidth(j.wireframeLinewidth*Rt()),Xt.setMode(q.LINES)):Xt.setMode(q.TRIANGLES);else if(ne.isLine){let En=j.linewidth;En===void 0&&(En=1),Fe.setLineWidth(En*Rt()),ne.isLineSegments?Xt.setMode(q.LINES):ne.isLineLoop?Xt.setMode(q.LINE_LOOP):Xt.setMode(q.LINE_STRIP)}else ne.isPoints?Xt.setMode(q.POINTS):ne.isSprite&&Xt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const En=ne._multiDrawStarts,$e=ne._multiDrawCounts,pn=ne._multiDrawCount,Ft=ze?I.get(ze).bytesPerElement:1,ci=st.get(j).currentProgram.getUniforms();for(let cn=0;cn<pn;cn++)ci.setValue(q,"_gl_DrawID",cn),Xt.render(En[cn]/Ft,$e[cn])}else if(ne.isInstancedMesh)Xt.renderInstances(Qe,$t,ne.count);else if(te.isInstancedBufferGeometry){const En=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$e=Math.min(te.instanceCount,En);Xt.renderInstances(Qe,$t,$e)}else Xt.render(Qe,$t)};function Pl(L,Y,te,j){X!==null&&L.isNodeMaterial&&X.setObject(j,L),Le===!0&&ce.setState(L,te,!1),L.transparent===!0&&L.side===si&&L.forceSinglePass===!1?(L.side=Jn,L.needsUpdate=!0,ss(L,Y,j),L.side=$r,L.needsUpdate=!0,ss(L,Y,j),L.side=si):ss(L,Y,j)}this.compile=function(L,Y,te=null){te===null&&(te=L),X!==null&&X.renderStart(L,Y,te),C=se.get(te),C.init(Y),R.push(C),te.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(C.pushLight(ne),ne.castShadow&&C.pushShadow(ne))}),L!==te&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(C.pushLight(ne),ne.castShadow&&C.pushShadow(ne))}),C.setupLights(),X!==null&&X.updateLights(C.state.lightsArray),Be=this.localClippingEnabled,Le=ce.init(this.clippingPlanes,Be),Le===!0&&ce.setGlobalState(this.clippingPlanes,Y),X!==null&&Ae.render(C.state.shadowsArray,te,Y);const j=new Set;return L.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const be=ne.material;if(be)if(Array.isArray(be))for(let ke=0;ke<be.length;ke++){const Ne=be[ke];Pl(Ne,te,Y,ne),j.add(Ne)}else Pl(be,te,Y,ne),j.add(be)}),C=R.pop(),X!==null&&X.renderEnd(),j},this.compileAsync=function(L,Y,te=null){const j=this.compile(L,Y,te);return new Promise(ne=>{function be(){if(j.forEach(function(ke){const ze=st.get(ke).currentProgram;(ze===void 0||ze.isReady())&&j.delete(ke)}),j.size===0){ne(L);return}setTimeout(be,10)}yt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let na=null;function of(L){na&&na(L)}function Il(){gr.stop()}function Ll(){gr.start()}const gr=new ay;gr.setAnimationLoop(of),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(L){na=L,Ee.setAnimationLoop(L),L===null?gr.stop():gr.start()},Ee.addEventListener("sessionstart",Il),Ee.addEventListener("sessionend",Ll),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;X!==null&&X.renderStart(L,Y);const te=Ee.enabled===!0&&Ee.isPresenting===!0,j=O!==null&&(k===null||te)&&O.begin(N,k);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),L.isScene===!0&&L.onBeforeRender(N,L,Y,k),C=se.get(L,R.length),C.init(Y),C.state.textureUnits=ut.getTextureUnits(),R.push(C),Oe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?Re.setFromArrayCamera(Y):me.setFromProjectionMatrix(Oe,_i,Y.reversedDepth),Be=this.localClippingEnabled,Le=ce.init(this.clippingPlanes,Be),P=fe.get(L,E.length),P.init(),E.push(P),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){const ke=N.xr.getDepthSensingMesh();ke!==null&&ia(ke,Y,-1/0,N.sortObjects)}ia(L,Y,0,N.sortObjects),P.finish(),X!==null&&X.updateLights(C.state.lightsArray),N.sortObjects===!0&&P.sort(nt,vt),wt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,wt&&G.addToRenderList(P,L),this.info.autoReset===!0&&this.info.reset(),Le===!0&&ce.beginShadows();const ne=C.state.shadowsArray;if(Ae.render(ne,L,Y),Le===!0&&ce.endShadows(),(j&&O.hasRenderPass())===!1){const ke=P.opaque,Ne=P.transmissive;if(C.setupLights(),Y.isArrayCamera){const ze=Y.cameras;if(Ne.length>0)for(let We=0,mt=ze.length;We<mt;We++){const Lt=ze[We];Nl(ke,Ne,L,Lt)}wt&&G.render(L);for(let We=0,mt=ze.length;We<mt;We++){const Lt=ze[We];ra(P,L,Lt,Lt.viewport)}}else Ne.length>0&&Nl(ke,Ne,L,Y),wt&&G.render(L),ra(P,L,Y)}k!==null&&$===0&&(ut.updateMultisampleRenderTarget(k),ut.updateRenderTargetMipmap(k)),j&&O.end(N),L.isScene===!0&&L.onAfterRender(N,L,Y),Ce.resetDefaultState(),H=-1,W=null,R.pop(),R.length>0?(C=R[R.length-1],ut.setTextureUnits(C.state.textureUnits),Le===!0&&ce.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?P=E[E.length-1]:P=null,X!==null&&X.renderEnd()};function ia(L,Y,te,j){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){const ke=Y.isArrayCamera?Re:me;if(!L.frustumCulled||L.intersectsFrustum(ke)){j&&Ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Oe);const Ne=Se.update(L),ze=L.material;ze.visible&&P.push(L,Ne,ze,te,Ze.z,null,Y)}}else if(L.isMesh||L.isLine||L.isPoints){const ke=Y.isArrayCamera?Re:me;if(!L.frustumCulled||L.intersectsFrustum(ke)){const Ne=Se.update(L),ze=L.material;if(j&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ze.copy(L.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ze.copy(Ne.boundingSphere.center)),Ze.applyMatrix4(L.matrixWorld).applyMatrix4(Oe)),Array.isArray(ze)){const We=Ne.groups;for(let mt=0,Lt=We.length;mt<Lt;mt++){const Qe=We[mt],At=ze[Qe.materialIndex];At&&At.visible&&P.push(L,Ne,At,te,Ze.z,Qe,Y)}}else ze.visible&&P.push(L,Ne,ze,te,Ze.z,null,Y)}}}const be=L.children;for(let ke=0,Ne=be.length;ke<Ne;ke++)ia(be[ke],Y,te,j)}function ra(L,Y,te,j){const{opaque:ne,transmissive:be,transparent:ke}=L;C.setupLightsView(te),Le===!0&&ce.setGlobalState(N.clippingPlanes,te),j&&Fe.viewport(J.copy(j)),ne.length>0&&Js(ne,Y,te),be.length>0&&Js(be,Y,te),ke.length>0&&Js(ke,Y,te),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Nl(L,Y,te,j){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){const Qe=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new xi(1,1,{generateMipmaps:!0,type:Qe?Xi:qn,minFilter:Vi,samples:Math.max(4,Pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const be=C.state.transmissionRenderTarget[j.id],ke=j.viewport||J;be.setSize(ke.z*N.transmissionResolutionScale,ke.w*N.transmissionResolutionScale);const Ne=N.getRenderTarget(),ze=N.getActiveCubeFace(),We=N.getActiveMipmapLevel();N.setRenderTarget(be),N.getClearColor(ae),ye=N.getClearAlpha(),ye<1&&N.setClearColor(16777215,.5),N.clear(),wt&&G.render(te);const mt=N.toneMapping;N.toneMapping=Wi;const Lt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),Le===!0&&ce.setGlobalState(N.clippingPlanes,j),Js(L,te,j),ut.updateMultisampleRenderTarget(be),ut.updateRenderTargetMipmap(be),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let At=0,$t=Y.length;At<$t;At++){const Dt=Y[At],{object:Xt,geometry:En,material:$e,group:pn}=Dt;if($e.side===si&&Xt.layers.test(j.layers)){const Ft=$e.side;$e.side=Jn,$e.needsUpdate=!0,Dl(Xt,te,j,En,$e,pn),$e.side=Ft,$e.needsUpdate=!0,Qe=!0}}Qe===!0&&(ut.updateMultisampleRenderTarget(be),ut.updateRenderTargetMipmap(be))}N.setRenderTarget(Ne,ze,We),N.setClearColor(ae,ye),Lt!==void 0&&(j.viewport=Lt),N.toneMapping=mt}function Js(L,Y,te){const j=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,be=L.length;ne<be;ne++){const ke=L[ne],{object:Ne,geometry:ze,group:We}=ke;let mt=ke.material;mt.allowOverride===!0&&j!==null&&(mt=j),Ne.layers.test(te.layers)&&Dl(Ne,Y,te,ze,mt,We)}}function Dl(L,Y,te,j,ne,be){X!==null&&ne.isNodeMaterial&&X.setObject(L,ne),L.onBeforeRender(N,Y,te,j,ne,be),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(N,Y,te,j,L,be),ne.transparent===!0&&ne.side===si&&ne.forceSinglePass===!1?(ne.side=Jn,ne.needsUpdate=!0,N.renderBufferDirect(te,Y,j,ne,L,be),ne.side=$r,ne.needsUpdate=!0,N.renderBufferDirect(te,Y,j,ne,L,be),ne.side=si):N.renderBufferDirect(te,Y,j,ne,L,be),L.onAfterRender(N,Y,te,j,ne,be)}function Ul(L){let Y=0;for(const te of L)te.texture!==null&&Y++;return Y}function ss(L,Y,te){Y.isScene!==!0&&(Y=Mt);const j=st.get(L),ne=C.state.lights,be=C.state.shadowsArray,ke=ne.state.version,Ne=F.getParameters(L,ne.state,be,Y,te,C.state.lightProbeGridArray),ze=F.getProgramCacheKey(Ne);let We=j.programs;j.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Y.environment:null,j.fog=Y.fog;const mt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;j.envMap=B.get(L.envMap||j.environment,mt),j.envMapRotation=j.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,We===void 0&&(L.addEventListener("dispose",zt),We=new Map,j.programs=We,j.programVariants=new Map);let Lt=We.get(ze);if(Lt!==void 0){if(j.currentProgram===Lt&&j.lightsStateVersion===ke)return Br(L,Ne),Lt}else Ne.uniforms=F.getUniforms(L),X!==null&&L.isNodeMaterial&&X.build(L,te,Ne),L.onBeforeCompile(Ne,N),Lt=F.acquireProgram(Ne,ze),We.set(ze,Lt),j.uniforms=Ne.uniforms;const Qe=j.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=ce.uniform),Br(L,Ne),j.needsLights=lf(L),j.lightsStateVersion=ke,j.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.sunLights.value=ne.state.sun,Qe.sunLightShadows.value=ne.state.sunShadow,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.sunShadowMatrix.value=ne.state.sunShadowMatrix,Qe.sunShadowCascade.value=ne.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),j.numLightProbeGrids=Ul(C.state.lightProbeGridArray),j.currentProgram=Lt,j.uniformsList=null,Lt}function af(L,Y,te,j,ne){const be=st.get(L),ke=be.currentProgram.id+","+j+","+ne;let Ne=be.programVariants.get(ke);return Ne===void 0?(Ne=ss(L,Y,te),be.programVariants.set(ke,Ne)):(be.currentProgram=Ne,be.uniformsList=null,be.outputColorSpace=j,be.toneMapping=ne),Ne}function Ks(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=Tu.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Br(L,Y){const te=st.get(L);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function sa(L,Y,te,j,ne){Y.isScene!==!0&&(Y=Mt),ut.resetTextureUnits();const be=Y.fog,ke=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Y.environment:null,Ne=k===null?N.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ot.workingColorSpace,ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,We=B.get(j.envMap||ke,ze),mt=j.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Lt=!!te.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Qe=!!te.morphAttributes.position,At=!!te.morphAttributes.normal,$t=!!te.morphAttributes.color;let Dt=Wi;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Dt=N.toneMapping);const Xt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,En=Xt!==void 0?Xt.length:0,$e=st.get(j),pn=C.state.lights;if(Le===!0&&(Be===!0||L!==W)){const Yt=L===W&&j.id===H;ce.setState(j,L,Yt)}let Ft=!1,ci=!1;j.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==pn.state.version||ne.isBatchedMesh&&$e.batching===!1||!ne.isBatchedMesh&&$e.batching===!0||ne.isBatchedMesh&&$e.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&$e.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&$e.instancing===!1||!ne.isInstancedMesh&&$e.instancing===!0||ne.isSkinnedMesh&&$e.skinning===!1||!ne.isSkinnedMesh&&$e.skinning===!0||ne.isInstancedMesh&&$e.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&$e.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&$e.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&$e.instancingMorph===!1&&ne.morphTexture!==null||$e.envMap!==We||j.fog===!0&&$e.fog!==be||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ce.numPlanes||$e.numIntersection!==ce.numIntersection)||$e.vertexAlphas!==mt||$e.vertexTangents!==Lt||$e.morphTargets!==Qe||$e.morphNormals!==At||$e.morphColors!==$t||$e.morphTargetsCount!==En||$e.numLightProbeGrids!==Ul(C.state.lightProbeGridArray)?Ft=!0:($e.outputColorSpace!==Ne||$e.toneMapping!==Dt)&&(ci=!0):(Ft=!0,$e.__version=j.version);let cn=$e.currentProgram;(Ft===!0||ci===!0)&&(cn=ci===!0?af(j,Y,ne,Ne,Dt):ss(j,Y,ne),X&&j.isNodeMaterial&&X.onUpdateProgram(j,cn,$e));let $s=!1,Zi=!1,Di=!1;const Ut=cn.getUniforms(),en=$e.uniforms;if(Fe.useProgram(cn.program)&&($s=!0,Zi=!0,Di=!0),j.id!==H&&(H=j.id,Zi=!0),$s||W!==L){Fe.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ut.setValue(q,"projectionMatrix",L.projectionMatrix),Ut.setValue(q,"viewMatrix",L.matrixWorldInverse);const dt=Ut.map.cameraPosition;dt!==void 0&&dt.setValue(q,ct.setFromMatrixPosition(L.matrixWorld)),Pt.logarithmicDepthBuffer&&Ut.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ut.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),W!==L&&(W=L,Zi=!0,Di=!0)}if($e.needsLights&&(pn.state.sunShadowMap.length>0&&Ut.setValue(q,"sunShadowMap",pn.state.sunShadowMap,ut),pn.state.directionalShadowMap.length>0&&Ut.setValue(q,"directionalShadowMap",pn.state.directionalShadowMap,ut),pn.state.spotShadowMap.length>0&&Ut.setValue(q,"spotShadowMap",pn.state.spotShadowMap,ut),pn.state.pointShadowMap.length>0&&Ut.setValue(q,"pointShadowMap",pn.state.pointShadowMap,ut)),ne.isSkinnedMesh){Ut.setOptional(q,ne,"bindMatrix"),Ut.setOptional(q,ne,"bindMatrixInverse");const Yt=ne.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ut.setValue(q,"boneTexture",Yt.boneTexture,ut))}ne.isBatchedMesh&&(Ut.setOptional(q,ne,"batchingTexture"),Ut.setValue(q,"batchingTexture",ne._matricesTexture,ut),Ut.setOptional(q,ne,"batchingIdTexture"),Ut.setValue(q,"batchingIdTexture",ne._indirectTexture,ut),Ut.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ut.setValue(q,"batchingColorTexture",ne._colorsTexture,ut));const ui=te.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&ge.update(ne,te,cn),(Zi||$e.receiveShadow!==ne.receiveShadow)&&($e.receiveShadow=ne.receiveShadow,Ut.setValue(q,"receiveShadow",ne.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Y.environment!==null&&(en.envMapIntensity.value=Y.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=ER()),Zi){if(Ut.setValue(q,"toneMappingExposure",N.toneMappingExposure),$e.needsLights&&oa(en,Di),be&&j.fog===!0&&re.refreshFogUniforms(en,be),re.refreshMaterialUniforms(en,j,Ue,qe,C.state.transmissionRenderTarget[L.id]),$e.needsLights&&$e.numLightProbeGrids>0){const Yt=T;let dt=0;for(const yi of C.state.lightProbeGridArray)yi.texture!==null&&(Yt.textures[dt]=yi.texture,Yt.min[dt]=yi.boundingBox.min,Yt.max[dt]=yi.boundingBox.max,Yt.resolution[dt]=yi.resolution,dt++);for(const yi in Yt)Yt[yi].length=dt;en.probesSH.value=Yt.textures,en.probesMin.value=Yt.min,en.probesMax.value=Yt.max,en.probesResolution.value=Yt.resolution}Tu.upload(q,Ks($e),en,ut)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Tu.upload(q,Ks($e),en,ut),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ut.setValue(q,"center",ne.center),Ut.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Ut.setValue(q,"normalMatrix",ne.normalMatrix),Ut.setValue(q,"modelMatrix",ne.matrixWorld),j.uniformsGroups!==void 0){const Yt=j.uniformsGroups;for(let dt=0,yi=Yt.length;dt<yi;dt++){const eo=Yt[dt];Ke.update(eo,cn),Ke.bind(eo,cn)}}return cn}function oa(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.sunLights.needsUpdate=Y,L.sunLightShadows.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function lf(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,Y,te){const j=st.get(L);j.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),st.get(L.texture).__webglTexture=Y,st.get(L.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:te,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Y){const te=st.get(L);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,te=0){k=L,oe=Y,$=te;let j=null,ne=!1,be=!1;if(L){const Ne=st.get(L);if(Ne.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(q.FRAMEBUFFER,Ne.__webglFramebuffer),J.copy(L.viewport),pe.copy(L.scissor),Me=L.scissorTest,Fe.viewport(J),Fe.scissor(pe),Fe.setScissorTest(Me),H=-1;return}else if(Ne.__webglFramebuffer===void 0)ut.setupRenderTarget(L);else if(Ne.__hasExternalTextures)ut.rebindTextures(L,st.get(L.texture).__webglTexture,st.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const mt=L.depthTexture;if(Ne.__boundDepthTexture!==mt){if(mt!==null&&st.has(mt)&&(L.width!==mt.image.width||L.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(L)}}const ze=L.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const We=st.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?j=We[Y][te]:j=We[Y],ne=!0):L.samples>0&&ut.useMultisampledRTT(L)===!1?j=st.get(L).__webglMultisampledFramebuffer:Array.isArray(We)?j=We[te]:j=We,J.copy(L.viewport),pe.copy(L.scissor),Me=L.scissorTest}else J.copy(Pe).multiplyScalar(Ue).floor(),pe.copy(lt).multiplyScalar(Ue).floor(),Me=tt;if(te!==0&&(j=K),Fe.bindFramebuffer(q.FRAMEBUFFER,j)&&Fe.drawBuffers(L,j),Fe.viewport(J),Fe.scissor(pe),Fe.setScissorTest(Me),ne){const Ne=st.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,te)}else if(be){const Ne=Y;for(let ze=0;ze<L.textures.length;ze++){const We=st.get(L.textures[ze]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ze,We.__webglTexture,te,Ne)}}else if(L!==null&&te!==0){const Ne=st.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ne.__webglTexture,te)}H=-1};function Qs(L){const Y=st.get(L);return(Y.__readFormat!==L.format||Y.__readType!==L.type)&&(Y.__readFormat=L.format,Y.__readType=L.type,Y.__formatReadable=Pt.textureFormatReadable(L.format),Y.__typeReadable=Pt.textureTypeReadable(L.type)),Y}this.readRenderTargetPixels=function(L,Y,te,j,ne,be,ke,Ne=0){if(!(L&&L.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=st.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke],Array.isArray(ze)&&(ze=ze[0])),ze){Fe.bindFramebuffer(q.FRAMEBUFFER,ze);try{const We=L.textures[Ne],mt=We.format,Lt=We.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne);const Qe=Qs(We);if(Qe.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-j&&te>=0&&te<=L.height-ne&&q.readPixels(Y,te,j,ne,we.convert(mt),we.convert(Lt),be)}finally{const We=k!==null?st.get(k).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(L,Y,te,j,ne,be,ke,Ne=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=st.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke],Array.isArray(ze)&&(ze=ze[0])),ze)if(Y>=0&&Y<=L.width-j&&te>=0&&te<=L.height-ne){Fe.bindFramebuffer(q.FRAMEBUFFER,ze);const We=L.textures[Ne],mt=We.format,Lt=We.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne);const Qe=Qs(We);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,At),q.bufferData(q.PIXEL_PACK_BUFFER,be.byteLength,q.STREAM_READ),q.readPixels(Y,te,j,ne,we.convert(mt),we.convert(Lt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const $t=k!==null?st.get(k).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,$t);const Dt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await OM(q,Dt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,At),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,be),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(At),q.deleteSync(Dt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Y=null,te=0){const j=Math.pow(2,-te),ne=Math.floor(L.image.width*j),be=Math.floor(L.image.height*j),ke=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;ut.setTexture2D(L,0),q.copyTexSubImage2D(q.TEXTURE_2D,te,0,0,ke,Ne,ne,be),Fe.unbindTexture()},this.copyTextureToTexture=function(L,Y,te=null,j=null,ne=0,be=0){let ke,Ne,ze,We,mt,Lt,Qe,At,$t;const Dt=L.isCompressedTexture?L.mipmaps[be]:L.image;if(te!==null)ke=te.max.x-te.min.x,Ne=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,We=te.min.x,mt=te.min.y,Lt=te.isBox3?te.min.z:0;else{const Ut=Math.pow(2,-ne);ke=Math.floor(Dt.width*Ut),Ne=Math.floor(Dt.height*Ut),L.isDataArrayTexture?ze=Dt.depth:L.isData3DTexture?ze=Math.floor(Dt.depth*Ut):ze=1,We=0,mt=0,Lt=0}j!==null?(Qe=j.x,At=j.y,$t=j.z):(Qe=0,At=0,$t=0);const Xt=we.convert(Y.format),En=we.convert(Y.type);let $e;Y.isData3DTexture?(ut.setTexture3D(Y,0),$e=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ut.setTexture2DArray(Y,0),$e=q.TEXTURE_2D_ARRAY):(ut.setTexture2D(Y,0),$e=q.TEXTURE_2D),Fe.activeTexture(q.TEXTURE0),Fe.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Fe.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Fe.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const pn=Fe.getParameter(q.UNPACK_ROW_LENGTH),Ft=Fe.getParameter(q.UNPACK_IMAGE_HEIGHT),ci=Fe.getParameter(q.UNPACK_SKIP_PIXELS),cn=Fe.getParameter(q.UNPACK_SKIP_ROWS),$s=Fe.getParameter(q.UNPACK_SKIP_IMAGES);Fe.pixelStorei(q.UNPACK_ROW_LENGTH,Dt.width),Fe.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Dt.height),Fe.pixelStorei(q.UNPACK_SKIP_PIXELS,We),Fe.pixelStorei(q.UNPACK_SKIP_ROWS,mt),Fe.pixelStorei(q.UNPACK_SKIP_IMAGES,Lt);const Zi=L.isDataArrayTexture||L.isData3DTexture,Di=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isDepthTexture){const Ut=st.get(L),en=st.get(Y),ui=st.get(Ut.__renderTarget),Yt=st.get(en.__renderTarget);Fe.bindFramebuffer(q.READ_FRAMEBUFFER,ui.__webglFramebuffer),Fe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let dt=0;dt<ze;dt++)Zi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,st.get(L).__webglTexture,ne,Lt+dt),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,st.get(Y).__webglTexture,be,$t+dt)),q.blitFramebuffer(We,mt,We+ke,mt+Ne,Qe,At,Qe+ke,At+Ne,q.DEPTH_BUFFER_BIT,q.NEAREST);Fe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||L.isRenderTargetTexture||st.has(L)){const Ut=st.get(L),en=st.get(Y);Fe.bindFramebuffer(q.READ_FRAMEBUFFER,V),Fe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Q);for(let ui=0;ui<ze;ui++)Zi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ut.__webglTexture,ne,Lt+ui):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ut.__webglTexture,ne),Di?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,en.__webglTexture,be,$t+ui):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,en.__webglTexture,be),ne!==0?q.blitFramebuffer(We,mt,We+ke,mt+Ne,Qe,At,Qe+ke,At+Ne,q.COLOR_BUFFER_BIT,q.NEAREST):Di?q.copyTexSubImage3D($e,be,Qe,At,$t+ui,We,mt,ke,Ne):q.copyTexSubImage2D($e,be,Qe,At,We,mt,ke,Ne);Fe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Di?L.isDataTexture||L.isData3DTexture?q.texSubImage3D($e,be,Qe,At,$t,ke,Ne,ze,Xt,En,Dt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D($e,be,Qe,At,$t,ke,Ne,ze,Xt,Dt.data):q.texSubImage3D($e,be,Qe,At,$t,ke,Ne,ze,Xt,En,Dt):L.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,be,Qe,At,ke,Ne,Xt,En,Dt.data):L.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,be,Qe,At,Dt.width,Dt.height,Xt,Dt.data):q.texSubImage2D(q.TEXTURE_2D,be,Qe,At,ke,Ne,Xt,En,Dt);Fe.pixelStorei(q.UNPACK_ROW_LENGTH,pn),Fe.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ft),Fe.pixelStorei(q.UNPACK_SKIP_PIXELS,ci),Fe.pixelStorei(q.UNPACK_SKIP_ROWS,cn),Fe.pixelStorei(q.UNPACK_SKIP_IMAGES,$s),be===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&q.generateMipmap($e),Fe.unbindTexture()},this.initRenderTarget=function(L){st.get(L).__webglFramebuffer===void 0&&ut.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ut.setTextureCube(L,0):L.isData3DTexture?ut.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ut.setTexture2DArray(L,0):ut.setTexture2D(L,0),Fe.unbindTexture()},this.resetState=function(){oe=0,$=0,k=null,Fe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}const bR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Sh,AddEquation:Rs,AddOperation:kv,AdditiveAnimationBlendMode:Gp,AdditiveBlending:cp,AgXToneMapping:Dp,AlphaFormat:Hp,AlwaysCompare:Yp,AlwaysDepth:Pu,AlwaysStencilFunc:qv,AmbientLight:Yx,AnimationAction:ey,AnimationClip:dl,AnimationLoader:P1,AnimationMixer:oE,AnimationObjectGroup:rE,AnimationUtils:E1,ArcCurve:gx,ArrayCamera:Jx,ArrowHelper:oy,AttachedBindMode:fp,Audio:Qx,AudioAnalyser:j1,AudioContext:ym,AudioListener:X1,AudioLoader:H1,AxesHelper:TE,BackSide:Jn,BasicDepthPacking:Xv,BasicShadowMap:yv,BatchedMesh:hx,BezierInterpolant:Bx,Bone:$p,BooleanKeyframeTrack:qs,Box2:iy,Box3:xn,Box3Helper:EE,BoxGeometry:Ys,BoxHelper:wE,BufferAttribute:jt,BufferGeometry:St,BufferGeometryLoader:Zx,ByteType:Fp,Cache:fr,Camera:Tl,CameraHelper:ME,CanvasTexture:Gw,CapsuleGeometry:zh,CatmullRomCurve3:_x,CineonToneMapping:Lp,CircleGeometry:kh,ClampToEdgeWrapping:ai,Clock:ny,Color:je,ColorKeyframeTrack:mm,ColorManagement:Ot,Compatibility:PM,CompressedArrayTexture:Hw,CompressedCubeTexture:Vw,CompressedTexture:Bh,CompressedTextureLoader:I1,ConeGeometry:Ml,ConstantAlphaFactor:Fv,ConstantColorFactor:Uv,Controls:CE,CubeCamera:_h,CubeDepthTexture:tm,CubeReflectionMapping:Dr,CubeRefractionMapping:Bs,CubeTexture:yl,CubeTextureLoader:L1,CubicBezierCurve:rm,CubicBezierCurve3:vx,CubicInterpolant:Ox,CullFaceBack:lp,CullFaceFront:xv,CullFaceFrontBack:VS,CullFaceNone:vv,Curve:ji,CurvePath:yx,CustomBlending:Sv,CustomToneMapping:Np,CylinderGeometry:Sl,Cylindrical:hE,Data3DTexture:Nh,DataArrayTexture:Lh,DataTexture:Pi,DataTextureLoader:N1,DataUtils:dw,DecrementStencilOp:aM,DecrementWrapStencilOp:cM,DefaultLoadingManager:Hx,DepthFormat:Ur,DepthStencilFormat:Ir,DepthTexture:Vs,DetachedBindMode:Hv,DirectionalLight:Xx,DirectionalLightHelper:SE,DiscreteInterpolant:Fx,DodecahedronGeometry:Hh,DoubleSide:si,DstAlphaFactor:Pv,DstColorFactor:Lv,DynamicCopyUsage:EM,DynamicDrawUsage:vM,DynamicReadUsage:SM,EdgesGeometry:mx,EllipseCurve:Vh,EqualCompare:Jv,EqualDepth:Lu,EqualStencilFunc:dM,EquirectangularReflectionMapping:Va,EquirectangularRefractionMapping:Ga,Euler:Yi,EventDispatcher:qi,ExternalTexture:nm,ExtrudeGeometry:Gh,FileLoader:Fr,Float16BufferAttribute:yw,Float32BufferAttribute:Je,FloatType:jn,Fog:Uh,FogExp2:Dh,FramebufferTexture:kw,FrontSide:$r,Frustum:Hs,FrustumArray:xl,GLBufferAttribute:uE,GLSL1:TM,GLSL3:pp,GreaterCompare:Kv,GreaterDepth:Du,GreaterEqualCompare:Xp,GreaterEqualDepth:Nu,GreaterEqualStencilFunc:_M,GreaterStencilFunc:mM,GridHelper:xE,Group:ko,HTMLTexture:Ww,HalfFloatType:Xi,HemisphereLight:Vx,HemisphereLightHelper:vE,IcosahedronGeometry:Wh,ImageBitmapLoader:k1,ImageLoader:pl,ImageUtils:rx,IncrementStencilOp:oM,IncrementWrapStencilOp:lM,InstancedBufferAttribute:Zo,InstancedBufferGeometry:xm,InstancedInterleavedBuffer:vh,InstancedMesh:ux,Int16BufferAttribute:vw,Int32BufferAttribute:xw,Int8BufferAttribute:mw,IntType:wh,InterleavedBuffer:Oh,InterleavedBufferAttribute:vi,Interpolant:ea,InterpolateBezier:dp,InterpolateDiscrete:il,InterpolateLinear:fh,InterpolateSmooth:wu,InterpolationSamplingMode:RM,InterpolationSamplingType:CM,InvertStencilOp:uM,KeepStencilOp:Eu,KeyframeTrack:Ni,LOD:lx,LatheGeometry:Xh,Layers:Os,LessCompare:Zv,LessDepth:Iu,LessEqualCompare:Wp,LessEqualDepth:Yo,LessEqualStencilFunc:pM,LessStencilFunc:fM,Light:rs,LightProbe:jx,LightShadow:ef,Line:ns,Line3:ry,LineBasicMaterial:Kn,LineCurve:sm,LineCurve3:xx,LineDashedMaterial:Nx,LineLoop:fx,LineSegments:mr,LinearFilter:rn,LinearInterpolant:pm,LinearMipMapLinearFilter:qS,LinearMipMapNearestFilter:YS,LinearMipmapLinearFilter:Vi,LinearMipmapNearestFilter:Wa,LinearSRGBColorSpace:sl,LinearToneMapping:Pp,LinearTransfer:ol,Loader:li,LoaderUtils:xp,LoadingManager:_m,LoopOnce:Vv,LoopPingPong:Wv,LoopRepeat:Gv,MOUSE:Ts,Material:Dn,MaterialBlending:GS,MaterialLoader:tf,MathUtils:ix,Matrix2:Mp,Matrix3:xt,Matrix4:_t,MaxEquation:bv,Mesh:Sn,MeshBasicMaterial:Xs,MeshDepthMaterial:fm,MeshDistanceMaterial:dm,MeshLambertMaterial:Ix,MeshMatcapMaterial:Lx,MeshNormalMaterial:Px,MeshPhongMaterial:Cx,MeshPhysicalMaterial:Ax,MeshStandardMaterial:hm,MeshToonMaterial:Rx,MinEquation:Ev,MirroredRepeatWrapping:el,MixOperation:zv,MultiplyBlending:hp,MultiplyOperation:_l,NearestFilter:fn,NearestMipMapLinearFilter:XS,NearestMipMapNearestFilter:WS,NearestMipmapLinearFilter:Bo,NearestMipmapNearestFilter:Op,NeutralToneMapping:Up,NeverCompare:jv,NeverDepth:Ru,NeverStencilFunc:hM,NoBlending:Ds,NoColorSpace:Rr,NoNormalPacking:tM,NoToneMapping:Wi,NormalAnimationBlendMode:Rh,NormalBlending:Wo,NormalGAPacking:iM,NormalRGPacking:nM,NotEqualCompare:Qv,NotEqualDepth:Uu,NotEqualStencilFunc:gM,NumberKeyframeTrack:Qh,Object3D:Ht,ObjectLoader:B1,ObjectSpaceNormalMap:Yv,OctahedronGeometry:El,OneFactor:Av,OneMinusConstantAlphaFactor:Bv,OneMinusConstantColorFactor:Ov,OneMinusDstAlphaFactor:Iv,OneMinusDstColorFactor:Nv,OneMinusSrcAlphaFactor:Rp,OneMinusSrcColorFactor:Rv,OrthographicCamera:dr,PCFShadowMap:Go,PCFSoftShadowMap:Ha,PMREMGenerator:ml,Path:cl,PerspectiveCamera:ln,Plane:cr,PlaneGeometry:$o,PlaneHelper:bE,PointLight:Wx,PointLightHelper:gE,Points:dx,PointsMaterial:em,PolarGridHelper:yE,PolyhedronGeometry:is,PositionalAudio:q1,PropertyBinding:kt,PropertyMixer:$x,QuadraticBezierCurve:om,QuadraticBezierCurve3:am,Quaternion:Rn,QuaternionKeyframeTrack:$h,QuaternionLinearInterpolant:kx,R11_EAC_Format:Gu,RED_GREEN_RGTC2_Format:nl,RED_RGTC1_Format:ch,REVISION:gl,RG11_EAC_Format:tl,RGBADepthPacking:QS,RGBAFormat:Zn,RGBAIntegerFormat:Ch,RGBA_ASTC_10x10_Format:ih,RGBA_ASTC_10x5_Format:eh,RGBA_ASTC_10x6_Format:th,RGBA_ASTC_10x8_Format:nh,RGBA_ASTC_12x10_Format:rh,RGBA_ASTC_12x12_Format:sh,RGBA_ASTC_4x4_Format:Yu,RGBA_ASTC_5x4_Format:qu,RGBA_ASTC_5x5_Format:ju,RGBA_ASTC_6x5_Format:Zu,RGBA_ASTC_6x6_Format:Ju,RGBA_ASTC_8x5_Format:Ku,RGBA_ASTC_8x6_Format:Qu,RGBA_ASTC_8x8_Format:$u,RGBA_BPTC_Format:oh,RGBA_ETC2_EAC_Format:Vu,RGBA_PVRTC_2BPPV1_Format:zu,RGBA_PVRTC_4BPPV1_Format:Bu,RGBA_S3TC_DXT1_Format:Ya,RGBA_S3TC_DXT3_Format:qa,RGBA_S3TC_DXT5_Format:ja,RGBDepthPacking:$S,RGBFormat:Vp,RGBIntegerFormat:jS,RGB_BPTC_SIGNED_Format:ah,RGB_BPTC_UNSIGNED_Format:lh,RGB_ETC1_Format:ku,RGB_ETC2_Format:Hu,RGB_PVRTC_2BPPV1_Format:Fu,RGB_PVRTC_4BPPV1_Format:Ou,RGB_S3TC_DXT1_Format:Xa,RGDepthPacking:eM,RGFormat:es,RGIntegerFormat:Ah,RawShaderMaterial:um,Ray:Ws,Raycaster:ty,RectAreaLight:qx,RedFormat:Th,RedIntegerFormat:vl,ReinhardToneMapping:Ip,RenderObjectRefreshType:IM,RenderTarget:jp,RenderTarget3D:aE,RepeatWrapping:$a,ReplaceStencilOp:sM,ReverseSubtractEquation:wv,RingGeometry:Yh,SIGNED_R11_EAC_Format:Wu,SIGNED_RED_GREEN_RGTC2_Format:hh,SIGNED_RED_RGTC1_Format:uh,SIGNED_RG11_EAC_Format:Xu,SRGBColorSpace:ri,SRGBTransfer:Wt,Scene:Zp,ShaderChunk:Ct,ShaderLib:Hi,ShaderMaterial:pr,ShadowMaterial:bx,Shape:wl,ShapeGeometry:qh,ShapePath:AE,ShapeUtils:Gi,ShortType:Bp,Skeleton:Fh,SkeletonHelper:mE,SkinnedMesh:cx,Source:tw,Sphere:yn,SphereGeometry:bl,Spherical:Sp,SphericalHarmonics3:vm,SplineCurve:lm,SpotLight:Gx,SpotLightHelper:pE,Sprite:ax,SpriteMaterial:Qp,SrcAlphaFactor:Cp,SrcAlphaSaturateFactor:Dv,SrcColorFactor:Cv,StaticCopyUsage:wM,StaticDrawUsage:Ph,StaticReadUsage:yM,StereoCamera:V1,StreamCopyUsage:bM,StreamDrawUsage:xM,StreamReadUsage:MM,StringKeyframeTrack:js,SubtractEquation:Mv,SubtractiveBlending:up,TOUCH:As,TangentSpaceNormalMap:Or,TetrahedronGeometry:jh,Texture:sn,TextureLoader:D1,TextureSource:hr,TextureUtils:NE,Timer:Kx,TimestampQuery:AM,TorusGeometry:Zh,TorusKnotGeometry:Jh,Triangle:oi,TriangleFanDrawMode:KS,TriangleStripDrawMode:JS,TrianglesDrawMode:ZS,TubeGeometry:Kh,UVMapping:Mh,Uint16BufferAttribute:Jp,Uint32BufferAttribute:Kp,Uint8BufferAttribute:gw,Uint8ClampedBufferAttribute:_w,Uniform:wm,UniformsGroup:cE,UniformsLib:Ge,UniformsUtils:gh,UnsignedByteType:qn,UnsignedInt101111Type:kp,UnsignedInt248Type:zs,UnsignedInt5999Type:zp,UnsignedIntType:Ii,UnsignedShort4444Type:Eh,UnsignedShort5551Type:bh,UnsignedShortType:qo,VSMShadowMap:Ps,Vector2:_e,Vector3:U,Vector4:Bt,VectorKeyframeTrack:gm,VideoFrameTexture:zw,VideoTexture:px,WebGL3DRenderTarget:rw,WebGLArrayRenderTarget:iw,WebGLCoordinateSystem:_i,WebGLCubeRenderTarget:nf,WebGLRenderTarget:xi,WebGLRenderer:xy,WebGLUtils:_y,WebGPUCoordinateSystem:ks,WebXRController:bu,WireframeGeometry:cm,WrapAroundEnding:rl,ZeroCurvatureEnding:Is,ZeroFactor:Tv,ZeroSlopeEnding:Ls,ZeroStencilOp:rM,createCanvasElement:ex,error:rt,getConsoleFunction:UM,log:ll,setConsoleFunction:DM,warn:He,warnOnce:Lr},Symbol.toStringTag,{value:"Module"}));var yy={exports:{}},Zs={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Zs.ConcurrentRoot=1;Zs.ContinuousEventPriority=4;Zs.DefaultEventPriority=16;Zs.DiscreteEventPriority=1;Zs.IdleEventPriority=536870912;Zs.LegacyRoot=0;yy.exports=Zs;var Vo=yy.exports;function TR(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const v=f(e);if(!p(m,v)){const M=m;h(m=v,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const AR=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),X_=AR?xe.useEffect:xe.useLayoutEffect;function CR(r){const e=typeof r=="function"?TR(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=xe.useReducer(y=>y+1,0),o=e.getState(),c=xe.useRef(o),u=xe.useRef(n),h=xe.useRef(i),f=xe.useRef(!1),p=xe.useRef();p.current===void 0&&(p.current=n(o));let m,g=!1;(c.current!==o||u.current!==n||h.current!==i||f.current)&&(m=n(o),g=!i(p.current,m)),X_(()=>{g&&(p.current=m),c.current=o,u.current=n,h.current=i,f.current=!1});const v=xe.useRef(o);X_(()=>{const y=()=>{try{const w=e.getState(),b=u.current(w);h.current(p.current,b)||(c.current=w,p.current=b,s())}catch{f.current=!0,s()}},x=e.subscribe(y);return e.getState()!==v.current&&y(),x},[]);const M=g?m:p.current;return xe.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Sy={exports:{}},Zd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function RR(){return Y_||(Y_=1,function(r){function e(k,H){var W=k.length;k.push(H);e:for(;0<W;){var J=W-1>>>1,pe=k[J];if(0<i(pe,H))k[J]=H,k[W]=pe,W=J;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var H=k[0],W=k.pop();if(W!==H){k[0]=W;e:for(var J=0,pe=k.length,Me=pe>>>1;J<Me;){var ae=2*(J+1)-1,ye=k[ae],Ie=ae+1,qe=k[Ie];if(0>i(ye,W))Ie<pe&&0>i(qe,ye)?(k[J]=qe,k[Ie]=W,J=Ie):(k[J]=ye,k[ae]=W,J=ae);else if(Ie<pe&&0>i(qe,W))k[J]=qe,k[Ie]=W,J=Ie;else break e}}return H}function i(k,H){var W=k.sortIndex-H.sortIndex;return W!==0?W:k.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,v=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var H=t(h);H!==null;){if(H.callback===null)n(h);else if(H.startTime<=k)n(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=t(h)}}function T(k){if(M=!1,b(k),!v)if(t(u)!==null)v=!0,oe(P);else{var H=t(h);H!==null&&$(T,H.startTime-k)}}function P(k,H){v=!1,M&&(M=!1,x(R),R=-1),g=!0;var W=m;try{for(b(H),p=t(u);p!==null&&(!(p.expirationTime>H)||k&&!D());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var pe=J(p.expirationTime<=H);H=r.unstable_now(),typeof pe=="function"?p.callback=pe:p===t(u)&&n(u),b(H)}else n(u);p=t(u)}if(p!==null)var Me=!0;else{var ae=t(h);ae!==null&&$(T,ae.startTime-H),Me=!1}return Me}finally{p=null,m=W,g=!1}}var C=!1,E=null,R=-1,O=5,N=-1;function D(){return!(r.unstable_now()-N<O)}function X(){if(E!==null){var k=r.unstable_now();N=k;var H=!0;try{H=E(!0,k)}finally{H?K():(C=!1,E=null)}}else C=!1}var K;if(typeof w=="function")K=function(){w(X)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Q=V.port2;V.port1.onmessage=X,K=function(){Q.postMessage(null)}}else K=function(){y(X,0)};function oe(k){E=k,C||(C=!0,K())}function $(k,H){R=y(function(){k(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){v||g||(v=!0,oe(P))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(k){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var W=m;m=H;try{return k()}finally{m=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,H){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=m;m=k;try{return H()}finally{m=W}},r.unstable_scheduleCallback=function(k,H,W){var J=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,k){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=W+pe,k={id:f++,callback:H,priorityLevel:k,startTime:W,expirationTime:pe,sortIndex:-1},W>J?(k.sortIndex=W,e(h,k),t(u)===null&&k===t(h)&&(M?(x(R),R=-1):M=!0,$(T,W-J))):(k.sortIndex=pe,e(u,k),v||g||(v=!0,oe(P))),k},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(k){var H=m;return function(){var W=m;m=H;try{return k.apply(this,arguments)}finally{m=W}}}}(Jd)),Jd}var q_;function PR(){return q_||(q_=1,Zd.exports=RR()),Zd.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IR=function(e){var t={},n=xe,i=PR(),s=Object.assign;function o(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),P=Symbol.iterator;function C(a){return a===null||typeof a!="object"?null:(a=P&&a[P]||a["@@iterator"],typeof a=="function"?a:null)}function E(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case x:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case v:return(a.displayName||"Context")+".Consumer";case g:return(a._context.displayName||"Context")+".Provider";case M:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case w:return l=a.displayName||null,l!==null?l:E(a.type)||"Memo";case b:l=a._payload,a=a._init;try{return E(a(l))}catch{}}return null}function R(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=l.render,a=a.displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return E(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function O(a){var l=a,d=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,l.flags&4098&&(d=l.return),a=l.return;while(a)}return l.tag===3?d:null}function N(a){if(O(a)!==a)throw Error(o(188))}function D(a){var l=a.alternate;if(!l){if(l=O(a),l===null)throw Error(o(188));return l!==a?null:a}for(var d=a,_=l;;){var S=d.return;if(S===null)break;var A=S.alternate;if(A===null){if(_=S.return,_!==null){d=_;continue}break}if(S.child===A.child){for(A=S.child;A;){if(A===d)return N(S),a;if(A===_)return N(S),l;A=A.sibling}throw Error(o(188))}if(d.return!==_.return)d=S,_=A;else{for(var z=!1,Z=S.child;Z;){if(Z===d){z=!0,d=S,_=A;break}if(Z===_){z=!0,_=S,d=A;break}Z=Z.sibling}if(!z){for(Z=A.child;Z;){if(Z===d){z=!0,d=A,_=S;break}if(Z===_){z=!0,_=A,d=S;break}Z=Z.sibling}if(!z)throw Error(o(189))}}if(d.alternate!==_)throw Error(o(190))}if(d.tag!==3)throw Error(o(188));return d.stateNode.current===d?a:l}function X(a){return a=D(a),a!==null?K(a):null}function K(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=K(a);if(l!==null)return l;a=a.sibling}return null}function V(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){if(a.tag!==4){var l=V(a);if(l!==null)return l}a=a.sibling}return null}var Q=Array.isArray,oe=e.getPublicInstance,$=e.getRootHostContext,k=e.getChildHostContext,H=e.prepareForCommit,W=e.resetAfterCommit,J=e.createInstance,pe=e.appendInitialChild,Me=e.finalizeInitialChildren,ae=e.prepareUpdate,ye=e.shouldSetTextContent,Ie=e.createTextInstance,qe=e.scheduleTimeout,Ue=e.cancelTimeout,nt=e.noTimeout,vt=e.isPrimaryRenderer,Pe=e.supportsMutation,lt=e.supportsPersistence,tt=e.supportsHydration,me=e.getInstanceFromNode,Re=e.preparePortalMount,Le=e.getCurrentEventPriority,Be=e.detachDeletedInstance,Oe=e.supportsMicrotasks,ct=e.scheduleMicrotask,Ze=e.supportsTestSelectors,Mt=e.findFiberRoot,wt=e.getBoundingRect,Rt=e.getTextContent,q=e.isHiddenSubtree,Zt=e.matchAccessibilityRole,yt=e.setFocusIfFocusable,Pt=e.setupIntersectionObserver,Fe=e.appendChild,Jt=e.appendChildToContainer,st=e.commitTextUpdate,ut=e.commitMount,B=e.commitUpdate,I=e.insertBefore,ie=e.insertInContainerBefore,Se=e.removeChild,F=e.removeChildFromContainer,re=e.resetTextContent,fe=e.hideInstance,se=e.hideTextInstance,ce=e.unhideInstance,Ae=e.unhideTextInstance,G=e.clearContainer,ge=e.cloneInstance,ue=e.createContainerChildSet,Te=e.appendChildToContainerChildSet,we=e.finalizeContainerChildren,Ce=e.replaceContainerChildren,Ke=e.cloneHiddenInstance,pt=e.cloneHiddenTextInstance,Ee=e.canHydrateInstance,at=e.canHydrateTextInstance,Et=e.canHydrateSuspenseInstance,Ve=e.isSuspenseInstancePending,zt=e.isSuspenseInstanceFallback,dn=e.registerSuspenseInstanceRetry,Qn=e.getNextHydratableSibling,Pl=e.getFirstHydratableChild,na=e.getFirstHydratableChildWithinContainer,of=e.getFirstHydratableChildWithinSuspenseInstance,Il=e.hydrateInstance,Ll=e.hydrateTextInstance,gr=e.hydrateSuspenseInstance,ia=e.getNextHydratableInstanceAfterSuspenseInstance,ra=e.commitHydratedContainer,Nl=e.commitHydratedSuspenseInstance,Js=e.clearSuspenseBoundary,Dl=e.clearSuspenseBoundaryFromContainer,Ul=e.shouldDeleteUnhydratedTailInstances,ss=e.didNotMatchHydratedContainerTextInstance,af=e.didNotMatchHydratedTextInstance,Ks;function Br(a){if(Ks===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);Ks=l&&l[1]||""}return`
`+Ks+a}var sa=!1;function oa(a,l){if(!a||sa)return"";sa=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(De){var _=De}Reflect.construct(a,[],l)}else{try{l.call()}catch(De){_=De}a.call(l.prototype)}else{try{throw Error()}catch(De){_=De}a()}}catch(De){if(De&&_&&typeof De.stack=="string"){for(var S=De.stack.split(`
`),A=_.stack.split(`
`),z=S.length-1,Z=A.length-1;1<=z&&0<=Z&&S[z]!==A[Z];)Z--;for(;1<=z&&0<=Z;z--,Z--)if(S[z]!==A[Z]){if(z!==1||Z!==1)do if(z--,Z--,0>Z||S[z]!==A[Z]){var de=`
`+S[z].replace(" at new "," at ");return a.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",a.displayName)),de}while(1<=z&&0<=Z);break}}}finally{sa=!1,Error.prepareStackTrace=d}return(a=a?a.displayName||a.name:"")?Br(a):""}var lf=Object.prototype.hasOwnProperty,Qs=[],L=-1;function Y(a){return{current:a}}function te(a){0>L||(a.current=Qs[L],Qs[L]=null,L--)}function j(a,l){L++,Qs[L]=a.current,a.current=l}var ne={},be=Y(ne),ke=Y(!1),Ne=ne;function ze(a,l){var d=a.type.contextTypes;if(!d)return ne;var _=a.stateNode;if(_&&_.__reactInternalMemoizedUnmaskedChildContext===l)return _.__reactInternalMemoizedMaskedChildContext;var S={},A;for(A in d)S[A]=l[A];return _&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=S),S}function We(a){return a=a.childContextTypes,a!=null}function mt(){te(ke),te(be)}function Lt(a,l,d){if(be.current!==ne)throw Error(o(168));j(be,l),j(ke,d)}function Qe(a,l,d){var _=a.stateNode;if(l=l.childContextTypes,typeof _.getChildContext!="function")return d;_=_.getChildContext();for(var S in _)if(!(S in l))throw Error(o(108,R(a)||"Unknown",S));return s({},d,_)}function At(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||ne,Ne=be.current,j(be,a),j(ke,ke.current),!0}function $t(a,l,d){var _=a.stateNode;if(!_)throw Error(o(169));d?(a=Qe(a,l,Ne),_.__reactInternalMemoizedMergedChildContext=a,te(ke),te(be),j(be,a)):te(ke),j(ke,d)}var Dt=Math.clz32?Math.clz32:$e,Xt=Math.log,En=Math.LN2;function $e(a){return a>>>=0,a===0?32:31-(Xt(a)/En|0)|0}var pn=64,Ft=4194304;function ci(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function cn(a,l){var d=a.pendingLanes;if(d===0)return 0;var _=0,S=a.suspendedLanes,A=a.pingedLanes,z=d&268435455;if(z!==0){var Z=z&~S;Z!==0?_=ci(Z):(A&=z,A!==0&&(_=ci(A)))}else z=d&~S,z!==0?_=ci(z):A!==0&&(_=ci(A));if(_===0)return 0;if(l!==0&&l!==_&&!(l&S)&&(S=_&-_,A=l&-l,S>=A||S===16&&(A&4194240)!==0))return l;if(_&4&&(_|=d&16),l=a.entangledLanes,l!==0)for(a=a.entanglements,l&=_;0<l;)d=31-Dt(l),S=1<<d,_|=a[d],l&=~S;return _}function $s(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zi(a,l){for(var d=a.suspendedLanes,_=a.pingedLanes,S=a.expirationTimes,A=a.pendingLanes;0<A;){var z=31-Dt(A),Z=1<<z,de=S[z];de===-1?(!(Z&d)||Z&_)&&(S[z]=$s(Z,l)):de<=l&&(a.expiredLanes|=Z),A&=~Z}}function Di(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function Ut(a){for(var l=[],d=0;31>d;d++)l.push(a);return l}function en(a,l,d){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,l=31-Dt(l),a[l]=d}function ui(a,l){var d=a.pendingLanes&~l;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=l,a.mutableReadLanes&=l,a.entangledLanes&=l,l=a.entanglements;var _=a.eventTimes;for(a=a.expirationTimes;0<d;){var S=31-Dt(d),A=1<<S;l[S]=0,_[S]=-1,a[S]=-1,d&=~A}}function Yt(a,l){var d=a.entangledLanes|=l;for(a=a.entanglements;d;){var _=31-Dt(d),S=1<<_;S&l|a[_]&l&&(a[_]|=l),d&=~S}}var dt=0;function yi(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var eo=i.unstable_scheduleCallback,Dm=i.unstable_cancelCallback,qy=i.unstable_shouldYield,jy=i.unstable_requestPaint,bn=i.unstable_now,cf=i.unstable_ImmediatePriority,Zy=i.unstable_UserBlockingPriority,uf=i.unstable_NormalPriority,Jy=i.unstable_IdlePriority,Ol=null,Ji=null;function Ky(a){if(Ji&&typeof Ji.onCommitFiberRoot=="function")try{Ji.onCommitFiberRoot(Ol,a,void 0,(a.current.flags&128)===128)}catch{}}function Qy(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var Ki=typeof Object.is=="function"?Object.is:Qy,_r=null,Fl=!1,hf=!1;function Um(a){_r===null?_r=[a]:_r.push(a)}function $y(a){Fl=!0,Um(a)}function Qi(){if(!hf&&_r!==null){hf=!0;var a=0,l=dt;try{var d=_r;for(dt=1;a<d.length;a++){var _=d[a];do _=_(!0);while(_!==null)}_r=null,Fl=!1}catch(S){throw _r!==null&&(_r=_r.slice(a+1)),eo(cf,Qi),S}finally{dt=l,hf=!1}}return null}var eS=c.ReactCurrentBatchConfig;function Bl(a,l){if(Ki(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var d=Object.keys(a),_=Object.keys(l);if(d.length!==_.length)return!1;for(_=0;_<d.length;_++){var S=d[_];if(!lf.call(l,S)||!Ki(a[S],l[S]))return!1}return!0}function tS(a){switch(a.tag){case 5:return Br(a.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return a=oa(a.type,!1),a;case 11:return a=oa(a.type.render,!1),a;case 1:return a=oa(a.type,!0),a;default:return""}}function Ui(a,l){if(a&&a.defaultProps){l=s({},l),a=a.defaultProps;for(var d in a)l[d]===void 0&&(l[d]=a[d]);return l}return l}var zl=Y(null),kl=null,to=null,ff=null;function df(){ff=to=kl=null}function Om(a,l,d){vt?(j(zl,l._currentValue),l._currentValue=d):(j(zl,l._currentValue2),l._currentValue2=d)}function pf(a){var l=zl.current;te(zl),vt?a._currentValue=l:a._currentValue2=l}function mf(a,l,d){for(;a!==null;){var _=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,_!==null&&(_.childLanes|=l)):_!==null&&(_.childLanes&l)!==l&&(_.childLanes|=l),a===d)break;a=a.return}}function no(a,l){kl=a,ff=to=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&l&&(di=!0),a.firstContext=null)}function Si(a){var l=vt?a._currentValue:a._currentValue2;if(ff!==a)if(a={context:a,memoizedValue:l,next:null},to===null){if(kl===null)throw Error(o(308));to=a,kl.dependencies={lanes:0,firstContext:a}}else to=to.next=a;return l}var $i=null,zr=!1;function gf(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function vr(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function kr(a,l){var d=a.updateQueue;d!==null&&(d=d.shared,mn!==null&&a.mode&1&&!(Nt&2)?(a=d.interleaved,a===null?(l.next=l,$i===null?$i=[d]:$i.push(d)):(l.next=a.next,a.next=l),d.interleaved=l):(a=d.pending,a===null?l.next=l:(l.next=a.next,a.next=l),d.pending=l))}function Hl(a,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var _=l.lanes;_&=a.pendingLanes,d|=_,l.lanes=d,Yt(a,d)}}function Bm(a,l){var d=a.updateQueue,_=a.alternate;if(_!==null&&(_=_.updateQueue,d===_)){var S=null,A=null;if(d=d.firstBaseUpdate,d!==null){do{var z={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};A===null?S=A=z:A=A.next=z,d=d.next}while(d!==null);A===null?S=A=l:A=A.next=l}else S=A=l;d={baseState:_.baseState,firstBaseUpdate:S,lastBaseUpdate:A,shared:_.shared,effects:_.effects},a.updateQueue=d;return}a=d.lastBaseUpdate,a===null?d.firstBaseUpdate=l:a.next=l,d.lastBaseUpdate=l}function Vl(a,l,d,_){var S=a.updateQueue;zr=!1;var A=S.firstBaseUpdate,z=S.lastBaseUpdate,Z=S.shared.pending;if(Z!==null){S.shared.pending=null;var de=Z,De=de.next;de.next=null,z===null?A=De:z.next=De,z=de;var et=a.alternate;et!==null&&(et=et.updateQueue,Z=et.lastBaseUpdate,Z!==z&&(Z===null?et.firstBaseUpdate=De:Z.next=De,et.lastBaseUpdate=de))}if(A!==null){var bt=S.baseState;z=0,et=De=de=null,Z=A;do{var ht=Z.lane,qt=Z.eventTime;if((_&ht)===ht){et!==null&&(et=et.next={eventTime:qt,lane:0,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null});e:{var ot=a,Bn=Z;switch(ht=l,qt=d,Bn.tag){case 1:if(ot=Bn.payload,typeof ot=="function"){bt=ot.call(qt,bt,ht);break e}bt=ot;break e;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=Bn.payload,ht=typeof ot=="function"?ot.call(qt,bt,ht):ot,ht==null)break e;bt=s({},bt,ht);break e;case 2:zr=!0}}Z.callback!==null&&Z.lane!==0&&(a.flags|=64,ht=S.effects,ht===null?S.effects=[Z]:ht.push(Z))}else qt={eventTime:qt,lane:ht,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null},et===null?(De=et=qt,de=bt):et=et.next=qt,z|=ht;if(Z=Z.next,Z===null){if(Z=S.shared.pending,Z===null)break;ht=Z,Z=ht.next,ht.next=null,S.lastBaseUpdate=ht,S.shared.pending=null}}while(!0);if(et===null&&(de=bt),S.baseState=de,S.firstBaseUpdate=De,S.lastBaseUpdate=et,l=S.shared.interleaved,l!==null){S=l;do z|=S.lane,S=S.next;while(S!==l)}else A===null&&(S.shared.lanes=0);ho|=z,a.lanes=z,a.memoizedState=bt}}function zm(a,l,d){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var _=a[l],S=_.callback;if(S!==null){if(_.callback=null,_=d,typeof S!="function")throw Error(o(191,S));S.call(_)}}}var km=new n.Component().refs;function _f(a,l,d,_){l=a.memoizedState,d=d(_,l),d=d==null?l:s({},l,d),a.memoizedState=d,a.lanes===0&&(a.updateQueue.baseState=d)}var Gl={isMounted:function(a){return(a=a._reactInternals)?O(a)===a:!1},enqueueSetState:function(a,l,d){a=a._reactInternals;var _=Wn(),S=Gr(a),A=vr(_,S);A.payload=l,d!=null&&(A.callback=d),kr(a,A),l=Ti(a,S,_),l!==null&&Hl(l,a,S)},enqueueReplaceState:function(a,l,d){a=a._reactInternals;var _=Wn(),S=Gr(a),A=vr(_,S);A.tag=1,A.payload=l,d!=null&&(A.callback=d),kr(a,A),l=Ti(a,S,_),l!==null&&Hl(l,a,S)},enqueueForceUpdate:function(a,l){a=a._reactInternals;var d=Wn(),_=Gr(a),S=vr(d,_);S.tag=2,l!=null&&(S.callback=l),kr(a,S),l=Ti(a,_,d),l!==null&&Hl(l,a,_)}};function Hm(a,l,d,_,S,A,z){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(_,A,z):l.prototype&&l.prototype.isPureReactComponent?!Bl(d,_)||!Bl(S,A):!0}function Vm(a,l,d){var _=!1,S=ne,A=l.contextType;return typeof A=="object"&&A!==null?A=Si(A):(S=We(l)?Ne:be.current,_=l.contextTypes,A=(_=_!=null)?ze(a,S):ne),l=new l(d,A),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Gl,a.stateNode=l,l._reactInternals=a,_&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=S,a.__reactInternalMemoizedMaskedChildContext=A),l}function Gm(a,l,d,_){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,_),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,_),l.state!==a&&Gl.enqueueReplaceState(l,l.state,null)}function vf(a,l,d,_){var S=a.stateNode;S.props=d,S.state=a.memoizedState,S.refs=km,gf(a);var A=l.contextType;typeof A=="object"&&A!==null?S.context=Si(A):(A=We(l)?Ne:be.current,S.context=ze(a,A)),S.state=a.memoizedState,A=l.getDerivedStateFromProps,typeof A=="function"&&(_f(a,l,A,d),S.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Gl.enqueueReplaceState(S,S.state,null),Vl(a,d,S,_),S.state=a.memoizedState),typeof S.componentDidMount=="function"&&(a.flags|=4194308)}var io=[],ro=0,Wl=null,Xl=0,Mi=[],wi=0,os=null,xr=1,yr="";function as(a,l){io[ro++]=Xl,io[ro++]=Wl,Wl=a,Xl=l}function Wm(a,l,d){Mi[wi++]=xr,Mi[wi++]=yr,Mi[wi++]=os,os=a;var _=xr;a=yr;var S=32-Dt(_)-1;_&=~(1<<S),d+=1;var A=32-Dt(l)+S;if(30<A){var z=S-S%5;A=(_&(1<<z)-1).toString(32),_>>=z,S-=z,xr=1<<32-Dt(l)+S|d<<S|_,yr=A+a}else xr=1<<A|d<<S|_,yr=a}function xf(a){a.return!==null&&(as(a,1),Wm(a,1,0))}function yf(a){for(;a===Wl;)Wl=io[--ro],io[ro]=null,Xl=io[--ro],io[ro]=null;for(;a===os;)os=Mi[--wi],Mi[wi]=null,yr=Mi[--wi],Mi[wi]=null,xr=Mi[--wi],Mi[wi]=null}var hi=null,fi=null,Qt=!1,aa=!1,Oi=null;function Xm(a,l){var d=Ai(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=a,l=a.deletions,l===null?(a.deletions=[d],a.flags|=16):l.push(d)}function Ym(a,l){switch(a.tag){case 5:return l=Ee(l,a.type,a.pendingProps),l!==null?(a.stateNode=l,hi=a,fi=Pl(l),!0):!1;case 6:return l=at(l,a.pendingProps),l!==null?(a.stateNode=l,hi=a,fi=null,!0):!1;case 13:if(l=Et(l),l!==null){var d=os!==null?{id:xr,overflow:yr}:null;return a.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=Ai(18,null,null,0),d.stateNode=l,d.return=a,a.child=d,hi=a,fi=null,!0}return!1;default:return!1}}function Sf(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Mf(a){if(Qt){var l=fi;if(l){var d=l;if(!Ym(a,l)){if(Sf(a))throw Error(o(418));l=Qn(d);var _=hi;l&&Ym(a,l)?Xm(_,d):(a.flags=a.flags&-4097|2,Qt=!1,hi=a)}}else{if(Sf(a))throw Error(o(418));a.flags=a.flags&-4097|2,Qt=!1,hi=a}}}function qm(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;hi=a}function la(a){if(!tt||a!==hi)return!1;if(!Qt)return qm(a),Qt=!0,!1;if(a.tag!==3&&(a.tag!==5||Ul(a.type)&&!ye(a.type,a.memoizedProps))){var l=fi;if(l){if(Sf(a)){for(a=fi;a;)a=Qn(a);throw Error(o(418))}for(;l;)Xm(a,l),l=Qn(l)}}if(qm(a),a.tag===13){if(!tt)throw Error(o(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));fi=ia(a)}else fi=hi?Qn(a.stateNode):null;return!0}function so(){tt&&(fi=hi=null,aa=Qt=!1)}function wf(a){Oi===null?Oi=[a]:Oi.push(a)}function ca(a,l,d){if(a=d.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(o(309));var _=d.stateNode}if(!_)throw Error(o(147,a));var S=_,A=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===A?l.ref:(l=function(z){var Z=S.refs;Z===km&&(Z=S.refs={}),z===null?delete Z[A]:Z[A]=z},l._stringRef=A,l)}if(typeof a!="string")throw Error(o(284));if(!d._owner)throw Error(o(290,a))}return a}function Yl(a,l){throw a=Object.prototype.toString.call(l),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function jm(a){var l=a._init;return l(a._payload)}function Zm(a){function l(le,ee){if(a){var he=le.deletions;he===null?(le.deletions=[ee],le.flags|=16):he.push(ee)}}function d(le,ee){if(!a)return null;for(;ee!==null;)l(le,ee),ee=ee.sibling;return null}function _(le,ee){for(le=new Map;ee!==null;)ee.key!==null?le.set(ee.key,ee):le.set(ee.index,ee),ee=ee.sibling;return le}function S(le,ee){return le=Xr(le,ee),le.index=0,le.sibling=null,le}function A(le,ee,he){return le.index=he,a?(he=le.alternate,he!==null?(he=he.index,he<ee?(le.flags|=2,ee):he):(le.flags|=2,ee)):(le.flags|=1048576,ee)}function z(le){return a&&le.alternate===null&&(le.flags|=2),le}function Z(le,ee,he,Ye){return ee===null||ee.tag!==6?(ee=od(he,le.mode,Ye),ee.return=le,ee):(ee=S(ee,he),ee.return=le,ee)}function de(le,ee,he,Ye){var it=he.type;return it===f?et(le,ee,he.props.children,Ye,he.key):ee!==null&&(ee.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===b&&jm(it)===ee.type)?(Ye=S(ee,he.props),Ye.ref=ca(le,ee,he),Ye.return=le,Ye):(Ye=wc(he.type,he.key,he.props,null,le.mode,Ye),Ye.ref=ca(le,ee,he),Ye.return=le,Ye)}function De(le,ee,he,Ye){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=ad(he,le.mode,Ye),ee.return=le,ee):(ee=S(ee,he.children||[]),ee.return=le,ee)}function et(le,ee,he,Ye,it){return ee===null||ee.tag!==7?(ee=ps(he,le.mode,Ye,it),ee.return=le,ee):(ee=S(ee,he),ee.return=le,ee)}function bt(le,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=od(""+ee,le.mode,he),ee.return=le,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return he=wc(ee.type,ee.key,ee.props,null,le.mode,he),he.ref=ca(le,null,ee),he.return=le,he;case h:return ee=ad(ee,le.mode,he),ee.return=le,ee;case b:var Ye=ee._init;return bt(le,Ye(ee._payload),he)}if(Q(ee)||C(ee))return ee=ps(ee,le.mode,he,null),ee.return=le,ee;Yl(le,ee)}return null}function ht(le,ee,he,Ye){var it=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return it!==null?null:Z(le,ee,""+he,Ye);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case u:return he.key===it?de(le,ee,he,Ye):null;case h:return he.key===it?De(le,ee,he,Ye):null;case b:return it=he._init,ht(le,ee,it(he._payload),Ye)}if(Q(he)||C(he))return it!==null?null:et(le,ee,he,Ye,null);Yl(le,he)}return null}function qt(le,ee,he,Ye,it){if(typeof Ye=="string"&&Ye!==""||typeof Ye=="number")return le=le.get(he)||null,Z(ee,le,""+Ye,it);if(typeof Ye=="object"&&Ye!==null){switch(Ye.$$typeof){case u:return le=le.get(Ye.key===null?he:Ye.key)||null,de(ee,le,Ye,it);case h:return le=le.get(Ye.key===null?he:Ye.key)||null,De(ee,le,Ye,it);case b:var It=Ye._init;return qt(le,ee,he,It(Ye._payload),it)}if(Q(Ye)||C(Ye))return le=le.get(he)||null,et(ee,le,Ye,it,null);Yl(ee,Ye)}return null}function ot(le,ee,he,Ye){for(var it=null,It=null,Tt=ee,Vt=ee=0,An=null;Tt!==null&&Vt<he.length;Vt++){Tt.index>Vt?(An=Tt,Tt=null):An=Tt.sibling;var Gt=ht(le,Tt,he[Vt],Ye);if(Gt===null){Tt===null&&(Tt=An);break}a&&Tt&&Gt.alternate===null&&l(le,Tt),ee=A(Gt,ee,Vt),It===null?it=Gt:It.sibling=Gt,It=Gt,Tt=An}if(Vt===he.length)return d(le,Tt),Qt&&as(le,Vt),it;if(Tt===null){for(;Vt<he.length;Vt++)Tt=bt(le,he[Vt],Ye),Tt!==null&&(ee=A(Tt,ee,Vt),It===null?it=Tt:It.sibling=Tt,It=Tt);return Qt&&as(le,Vt),it}for(Tt=_(le,Tt);Vt<he.length;Vt++)An=qt(Tt,le,Vt,he[Vt],Ye),An!==null&&(a&&An.alternate!==null&&Tt.delete(An.key===null?Vt:An.key),ee=A(An,ee,Vt),It===null?it=An:It.sibling=An,It=An);return a&&Tt.forEach(function(Yr){return l(le,Yr)}),Qt&&as(le,Vt),it}function Bn(le,ee,he,Ye){var it=C(he);if(typeof it!="function")throw Error(o(150));if(he=it.call(he),he==null)throw Error(o(151));for(var It=it=null,Tt=ee,Vt=ee=0,An=null,Gt=he.next();Tt!==null&&!Gt.done;Vt++,Gt=he.next()){Tt.index>Vt?(An=Tt,Tt=null):An=Tt.sibling;var Yr=ht(le,Tt,Gt.value,Ye);if(Yr===null){Tt===null&&(Tt=An);break}a&&Tt&&Yr.alternate===null&&l(le,Tt),ee=A(Yr,ee,Vt),It===null?it=Yr:It.sibling=Yr,It=Yr,Tt=An}if(Gt.done)return d(le,Tt),Qt&&as(le,Vt),it;if(Tt===null){for(;!Gt.done;Vt++,Gt=he.next())Gt=bt(le,Gt.value,Ye),Gt!==null&&(ee=A(Gt,ee,Vt),It===null?it=Gt:It.sibling=Gt,It=Gt);return Qt&&as(le,Vt),it}for(Tt=_(le,Tt);!Gt.done;Vt++,Gt=he.next())Gt=qt(Tt,le,Vt,Gt.value,Ye),Gt!==null&&(a&&Gt.alternate!==null&&Tt.delete(Gt.key===null?Vt:Gt.key),ee=A(Gt,ee,Vt),It===null?it=Gt:It.sibling=Gt,It=Gt);return a&&Tt.forEach(function(IS){return l(le,IS)}),Qt&&as(le,Vt),it}function Ci(le,ee,he,Ye){if(typeof he=="object"&&he!==null&&he.type===f&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case u:e:{for(var it=he.key,It=ee;It!==null;){if(It.key===it){if(it=he.type,it===f){if(It.tag===7){d(le,It.sibling),ee=S(It,he.props.children),ee.return=le,le=ee;break e}}else if(It.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===b&&jm(it)===It.type){d(le,It.sibling),ee=S(It,he.props),ee.ref=ca(le,It,he),ee.return=le,le=ee;break e}d(le,It);break}else l(le,It);It=It.sibling}he.type===f?(ee=ps(he.props.children,le.mode,Ye,he.key),ee.return=le,le=ee):(Ye=wc(he.type,he.key,he.props,null,le.mode,Ye),Ye.ref=ca(le,ee,he),Ye.return=le,le=Ye)}return z(le);case h:e:{for(It=he.key;ee!==null;){if(ee.key===It)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){d(le,ee.sibling),ee=S(ee,he.children||[]),ee.return=le,le=ee;break e}else{d(le,ee);break}else l(le,ee);ee=ee.sibling}ee=ad(he,le.mode,Ye),ee.return=le,le=ee}return z(le);case b:return It=he._init,Ci(le,ee,It(he._payload),Ye)}if(Q(he))return ot(le,ee,he,Ye);if(C(he))return Bn(le,ee,he,Ye);Yl(le,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,ee!==null&&ee.tag===6?(d(le,ee.sibling),ee=S(ee,he),ee.return=le,le=ee):(d(le,ee),ee=od(he,le.mode,Ye),ee.return=le,le=ee),z(le)):d(le,ee)}return Ci}var oo=Zm(!0),Jm=Zm(!1),ua={},Ei=Y(ua),ha=Y(ua),ao=Y(ua);function er(a){if(a===ua)throw Error(o(174));return a}function Ef(a,l){j(ao,l),j(ha,a),j(Ei,ua),a=$(l),te(Ei),j(Ei,a)}function lo(){te(Ei),te(ha),te(ao)}function Km(a){var l=er(ao.current),d=er(Ei.current);l=k(d,a.type,l),d!==l&&(j(ha,a),j(Ei,l))}function bf(a){ha.current===a&&(te(Ei),te(ha))}var tn=Y(0);function ql(a){for(var l=a;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Ve(d)||zt(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Tf=[];function Af(){for(var a=0;a<Tf.length;a++){var l=Tf[a];vt?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}Tf.length=0}var jl=c.ReactCurrentDispatcher,bi=c.ReactCurrentBatchConfig,co=0,on=null,Un=null,Tn=null,Zl=!1,fa=!1,da=0,nS=0;function On(){throw Error(o(321))}function Cf(a,l){if(l===null)return!1;for(var d=0;d<l.length&&d<a.length;d++)if(!Ki(a[d],l[d]))return!1;return!0}function Rf(a,l,d,_,S,A){if(co=A,on=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,jl.current=a===null||a.memoizedState===null?oS:aS,a=d(_,S),fa){A=0;do{if(fa=!1,da=0,25<=A)throw Error(o(301));A+=1,Tn=Un=null,l.updateQueue=null,jl.current=lS,a=d(_,S)}while(fa)}if(jl.current=ec,l=Un!==null&&Un.next!==null,co=0,Tn=Un=on=null,Zl=!1,l)throw Error(o(300));return a}function Pf(){var a=da!==0;return da=0,a}function Sr(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?on.memoizedState=Tn=a:Tn=Tn.next=a,Tn}function tr(){if(Un===null){var a=on.alternate;a=a!==null?a.memoizedState:null}else a=Un.next;var l=Tn===null?on.memoizedState:Tn.next;if(l!==null)Tn=l,Un=a;else{if(a===null)throw Error(o(310));Un=a,a={memoizedState:Un.memoizedState,baseState:Un.baseState,baseQueue:Un.baseQueue,queue:Un.queue,next:null},Tn===null?on.memoizedState=Tn=a:Tn=Tn.next=a}return Tn}function ls(a,l){return typeof l=="function"?l(a):l}function Jl(a){var l=tr(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var _=Un,S=_.baseQueue,A=d.pending;if(A!==null){if(S!==null){var z=S.next;S.next=A.next,A.next=z}_.baseQueue=S=A,d.pending=null}if(S!==null){A=S.next,_=_.baseState;var Z=z=null,de=null,De=A;do{var et=De.lane;if((co&et)===et)de!==null&&(de=de.next={lane:0,action:De.action,hasEagerState:De.hasEagerState,eagerState:De.eagerState,next:null}),_=De.hasEagerState?De.eagerState:a(_,De.action);else{var bt={lane:et,action:De.action,hasEagerState:De.hasEagerState,eagerState:De.eagerState,next:null};de===null?(Z=de=bt,z=_):de=de.next=bt,on.lanes|=et,ho|=et}De=De.next}while(De!==null&&De!==A);de===null?z=_:de.next=Z,Ki(_,l.memoizedState)||(di=!0),l.memoizedState=_,l.baseState=z,l.baseQueue=de,d.lastRenderedState=_}if(a=d.interleaved,a!==null){S=a;do A=S.lane,on.lanes|=A,ho|=A,S=S.next;while(S!==a)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Kl(a){var l=tr(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var _=d.dispatch,S=d.pending,A=l.memoizedState;if(S!==null){d.pending=null;var z=S=S.next;do A=a(A,z.action),z=z.next;while(z!==S);Ki(A,l.memoizedState)||(di=!0),l.memoizedState=A,l.baseQueue===null&&(l.baseState=A),d.lastRenderedState=A}return[A,_]}function Qm(){}function $m(a,l){var d=on,_=tr(),S=l(),A=!Ki(_.memoizedState,S);if(A&&(_.memoizedState=S,di=!0),_=_.queue,ma(ng.bind(null,d,_,a),[a]),_.getSnapshot!==l||A||Tn!==null&&Tn.memoizedState.tag&1){if(d.flags|=2048,pa(9,tg.bind(null,d,_,S,l),void 0,null),mn===null)throw Error(o(349));co&30||eg(d,l,S)}return S}function eg(a,l,d){a.flags|=16384,a={getSnapshot:l,value:d},l=on.updateQueue,l===null?(l={lastEffect:null,stores:null},on.updateQueue=l,l.stores=[a]):(d=l.stores,d===null?l.stores=[a]:d.push(a))}function tg(a,l,d,_){l.value=d,l.getSnapshot=_,ig(l)&&Ti(a,1,-1)}function ng(a,l,d){return d(function(){ig(l)&&Ti(a,1,-1)})}function ig(a){var l=a.getSnapshot;a=a.value;try{var d=l();return!Ki(a,d)}catch{return!0}}function If(a){var l=Sr();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:a},l.queue=a,a=a.dispatch=sS.bind(null,on,a),[l.memoizedState,a]}function pa(a,l,d,_){return a={tag:a,create:l,destroy:d,deps:_,next:null},l=on.updateQueue,l===null?(l={lastEffect:null,stores:null},on.updateQueue=l,l.lastEffect=a.next=a):(d=l.lastEffect,d===null?l.lastEffect=a.next=a:(_=d.next,d.next=a,a.next=_,l.lastEffect=a)),a}function rg(){return tr().memoizedState}function Ql(a,l,d,_){var S=Sr();on.flags|=a,S.memoizedState=pa(1|l,d,void 0,_===void 0?null:_)}function $l(a,l,d,_){var S=tr();_=_===void 0?null:_;var A=void 0;if(Un!==null){var z=Un.memoizedState;if(A=z.destroy,_!==null&&Cf(_,z.deps)){S.memoizedState=pa(l,d,A,_);return}}on.flags|=a,S.memoizedState=pa(1|l,d,A,_)}function Lf(a,l){return Ql(8390656,8,a,l)}function ma(a,l){return $l(2048,8,a,l)}function sg(a,l){return $l(4,2,a,l)}function og(a,l){return $l(4,4,a,l)}function ag(a,l){if(typeof l=="function")return a=a(),l(a),function(){l(null)};if(l!=null)return a=a(),l.current=a,function(){l.current=null}}function lg(a,l,d){return d=d!=null?d.concat([a]):null,$l(4,4,ag.bind(null,l,a),d)}function Nf(){}function cg(a,l){var d=tr();l=l===void 0?null:l;var _=d.memoizedState;return _!==null&&l!==null&&Cf(l,_[1])?_[0]:(d.memoizedState=[a,l],a)}function ug(a,l){var d=tr();l=l===void 0?null:l;var _=d.memoizedState;return _!==null&&l!==null&&Cf(l,_[1])?_[0]:(a=a(),d.memoizedState=[a,l],a)}function iS(a,l){var d=dt;dt=d!==0&&4>d?d:4,a(!0);var _=bi.transition;bi.transition={};try{a(!1),l()}finally{dt=d,bi.transition=_}}function hg(){return tr().memoizedState}function rS(a,l,d){var _=Gr(a);d={lane:_,action:d,hasEagerState:!1,eagerState:null,next:null},fg(a)?dg(l,d):(pg(a,l,d),d=Wn(),a=Ti(a,_,d),a!==null&&mg(a,l,_))}function sS(a,l,d){var _=Gr(a),S={lane:_,action:d,hasEagerState:!1,eagerState:null,next:null};if(fg(a))dg(l,S);else{pg(a,l,S);var A=a.alternate;if(a.lanes===0&&(A===null||A.lanes===0)&&(A=l.lastRenderedReducer,A!==null))try{var z=l.lastRenderedState,Z=A(z,d);if(S.hasEagerState=!0,S.eagerState=Z,Ki(Z,z))return}catch{}finally{}d=Wn(),a=Ti(a,_,d),a!==null&&mg(a,l,_)}}function fg(a){var l=a.alternate;return a===on||l!==null&&l===on}function dg(a,l){fa=Zl=!0;var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}function pg(a,l,d){mn!==null&&a.mode&1&&!(Nt&2)?(a=l.interleaved,a===null?(d.next=d,$i===null?$i=[l]:$i.push(l)):(d.next=a.next,a.next=d),l.interleaved=d):(a=l.pending,a===null?d.next=d:(d.next=a.next,a.next=d),l.pending=d)}function mg(a,l,d){if(d&4194240){var _=l.lanes;_&=a.pendingLanes,d|=_,l.lanes=d,Yt(a,d)}}var ec={readContext:Si,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},oS={readContext:Si,useCallback:function(a,l){return Sr().memoizedState=[a,l===void 0?null:l],a},useContext:Si,useEffect:Lf,useImperativeHandle:function(a,l,d){return d=d!=null?d.concat([a]):null,Ql(4194308,4,ag.bind(null,l,a),d)},useLayoutEffect:function(a,l){return Ql(4194308,4,a,l)},useInsertionEffect:function(a,l){return Ql(4,2,a,l)},useMemo:function(a,l){var d=Sr();return l=l===void 0?null:l,a=a(),d.memoizedState=[a,l],a},useReducer:function(a,l,d){var _=Sr();return l=d!==void 0?d(l):l,_.memoizedState=_.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},_.queue=a,a=a.dispatch=rS.bind(null,on,a),[_.memoizedState,a]},useRef:function(a){var l=Sr();return a={current:a},l.memoizedState=a},useState:If,useDebugValue:Nf,useDeferredValue:function(a){var l=If(a),d=l[0],_=l[1];return Lf(function(){var S=bi.transition;bi.transition={};try{_(a)}finally{bi.transition=S}},[a]),d},useTransition:function(){var a=If(!1),l=a[0];return a=iS.bind(null,a[1]),Sr().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,d){var _=on,S=Sr();if(Qt){if(d===void 0)throw Error(o(407));d=d()}else{if(d=l(),mn===null)throw Error(o(349));co&30||eg(_,l,d)}S.memoizedState=d;var A={value:d,getSnapshot:l};return S.queue=A,Lf(ng.bind(null,_,A,a),[a]),_.flags|=2048,pa(9,tg.bind(null,_,A,d,l),void 0,null),d},useId:function(){var a=Sr(),l=mn.identifierPrefix;if(Qt){var d=yr,_=xr;d=(_&~(1<<32-Dt(_)-1)).toString(32)+d,l=":"+l+"R"+d,d=da++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=nS++,l=":"+l+"r"+d.toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},aS={readContext:Si,useCallback:cg,useContext:Si,useEffect:ma,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:ug,useReducer:Jl,useRef:rg,useState:function(){return Jl(ls)},useDebugValue:Nf,useDeferredValue:function(a){var l=Jl(ls),d=l[0],_=l[1];return ma(function(){var S=bi.transition;bi.transition={};try{_(a)}finally{bi.transition=S}},[a]),d},useTransition:function(){var a=Jl(ls)[0],l=tr().memoizedState;return[a,l]},useMutableSource:Qm,useSyncExternalStore:$m,useId:hg,unstable_isNewReconciler:!1},lS={readContext:Si,useCallback:cg,useContext:Si,useEffect:ma,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:ug,useReducer:Kl,useRef:rg,useState:function(){return Kl(ls)},useDebugValue:Nf,useDeferredValue:function(a){var l=Kl(ls),d=l[0],_=l[1];return ma(function(){var S=bi.transition;bi.transition={};try{_(a)}finally{bi.transition=S}},[a]),d},useTransition:function(){var a=Kl(ls)[0],l=tr().memoizedState;return[a,l]},useMutableSource:Qm,useSyncExternalStore:$m,useId:hg,unstable_isNewReconciler:!1};function Df(a,l){try{var d="",_=l;do d+=tS(_),_=_.return;while(_);var S=d}catch(A){S=`
Error generating stack: `+A.message+`
`+A.stack}return{value:a,source:l,stack:S}}function Uf(a,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var cS=typeof WeakMap=="function"?WeakMap:Map;function gg(a,l,d){d=vr(-1,d),d.tag=3,d.payload={element:null};var _=l.value;return d.callback=function(){gc||(gc=!0,$f=_),Uf(a,l)},d}function _g(a,l,d){d=vr(-1,d),d.tag=3;var _=a.type.getDerivedStateFromError;if(typeof _=="function"){var S=l.value;d.payload=function(){return _(S)},d.callback=function(){Uf(a,l)}}var A=a.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(d.callback=function(){Uf(a,l),typeof _!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var z=l.stack;this.componentDidCatch(l.value,{componentStack:z!==null?z:""})}),d}function vg(a,l,d){var _=a.pingCache;if(_===null){_=a.pingCache=new cS;var S=new Set;_.set(l,S)}else S=_.get(l),S===void 0&&(S=new Set,_.set(l,S));S.has(d)||(S.add(d),a=wS.bind(null,a,l,d),l.then(a,a))}function xg(a){do{var l;if((l=a.tag===13)&&(l=a.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return a;a=a.return}while(a!==null);return null}function yg(a,l,d,_,S){return a.mode&1?(a.flags|=65536,a.lanes=S,a):(a===l?a.flags|=65536:(a.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=vr(-1,1),l.tag=2,kr(d,l))),d.lanes|=1),a)}function nr(a){a.flags|=4}function Sg(a,l){if(a!==null&&a.child===l.child)return!0;if(l.flags&16)return!1;for(a=l.child;a!==null;){if(a.flags&12854||a.subtreeFlags&12854)return!1;a=a.sibling}return!0}var ga,_a,tc,nc;if(Pe)ga=function(a,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)pe(a,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},_a=function(){},tc=function(a,l,d,_,S){if(a=a.memoizedProps,a!==_){var A=l.stateNode,z=er(Ei.current);d=ae(A,d,a,_,S,z),(l.updateQueue=d)&&nr(l)}},nc=function(a,l,d,_){d!==_&&nr(l)};else if(lt){ga=function(a,l,d,_){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&_&&(A=Ke(A,S.type,S.memoizedProps,S)),pe(a,A)}else if(S.tag===6)A=S.stateNode,d&&_&&(A=pt(A,S.memoizedProps,S)),pe(a,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),ga(a,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Mg=function(a,l,d,_){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&_&&(A=Ke(A,S.type,S.memoizedProps,S)),Te(a,A)}else if(S.tag===6)A=S.stateNode,d&&_&&(A=pt(A,S.memoizedProps,S)),Te(a,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),Mg(a,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};_a=function(a,l){var d=l.stateNode;if(!Sg(a,l)){a=d.containerInfo;var _=ue(a);Mg(_,l,!1,!1),d.pendingChildren=_,nr(l),we(a,_)}},tc=function(a,l,d,_,S){var A=a.stateNode,z=a.memoizedProps;if((a=Sg(a,l))&&z===_)l.stateNode=A;else{var Z=l.stateNode,de=er(Ei.current),De=null;z!==_&&(De=ae(Z,d,z,_,S,de)),a&&De===null?l.stateNode=A:(A=ge(A,De,d,z,_,l,a,Z),Me(A,d,_,S,de)&&nr(l),l.stateNode=A,a?nr(l):ga(A,l,!1,!1))}},nc=function(a,l,d,_){d!==_?(a=er(ao.current),d=er(Ei.current),l.stateNode=Ie(_,a,d,l),nr(l)):l.stateNode=a.stateNode}}else _a=function(){},tc=function(){},nc=function(){};function va(a,l){if(!Qt)switch(a.tailMode){case"hidden":l=a.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?a.tail=null:d.sibling=null;break;case"collapsed":d=a.tail;for(var _=null;d!==null;)d.alternate!==null&&(_=d),d=d.sibling;_===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:_.sibling=null}}function Fn(a){var l=a.alternate!==null&&a.alternate.child===a.child,d=0,_=0;if(l)for(var S=a.child;S!==null;)d|=S.lanes|S.childLanes,_|=S.subtreeFlags&14680064,_|=S.flags&14680064,S.return=a,S=S.sibling;else for(S=a.child;S!==null;)d|=S.lanes|S.childLanes,_|=S.subtreeFlags,_|=S.flags,S.return=a,S=S.sibling;return a.subtreeFlags|=_,a.childLanes=d,l}function uS(a,l,d){var _=l.pendingProps;switch(yf(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(l),null;case 1:return We(l.type)&&mt(),Fn(l),null;case 3:return _=l.stateNode,lo(),te(ke),te(be),Af(),_.pendingContext&&(_.context=_.pendingContext,_.pendingContext=null),(a===null||a.child===null)&&(la(l)?nr(l):a===null||a.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Oi!==null&&(nd(Oi),Oi=null))),_a(a,l),Fn(l),null;case 5:bf(l),d=er(ao.current);var S=l.type;if(a!==null&&l.stateNode!=null)tc(a,l,S,_,d),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!_){if(l.stateNode===null)throw Error(o(166));return Fn(l),null}if(a=er(Ei.current),la(l)){if(!tt)throw Error(o(175));a=Il(l.stateNode,l.type,l.memoizedProps,d,a,l,!aa),l.updateQueue=a,a!==null&&nr(l)}else{var A=J(S,_,d,a,l);ga(A,l,!1,!1),l.stateNode=A,Me(A,S,_,d,a)&&nr(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Fn(l),null;case 6:if(a&&l.stateNode!=null)nc(a,l,a.memoizedProps,_);else{if(typeof _!="string"&&l.stateNode===null)throw Error(o(166));if(a=er(ao.current),d=er(Ei.current),la(l)){if(!tt)throw Error(o(176));if(a=l.stateNode,_=l.memoizedProps,(d=Ll(a,_,l,!aa))&&(S=hi,S!==null))switch(A=(S.mode&1)!==0,S.tag){case 3:ss(S.stateNode.containerInfo,a,_,A);break;case 5:af(S.type,S.memoizedProps,S.stateNode,a,_,A)}d&&nr(l)}else l.stateNode=Ie(_,a,d,l)}return Fn(l),null;case 13:if(te(tn),_=l.memoizedState,Qt&&fi!==null&&l.mode&1&&!(l.flags&128)){for(a=fi;a;)a=Qn(a);return so(),l.flags|=98560,l}if(_!==null&&_.dehydrated!==null){if(_=la(l),a===null){if(!_)throw Error(o(318));if(!tt)throw Error(o(344));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));gr(a,l)}else so(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return Fn(l),null}return Oi!==null&&(nd(Oi),Oi=null),l.flags&128?(l.lanes=d,l):(_=_!==null,d=!1,a===null?la(l):d=a.memoizedState!==null,_&&!d&&(l.child.flags|=8192,l.mode&1&&(a===null||tn.current&1?vn===0&&(vn=3):rd())),l.updateQueue!==null&&(l.flags|=4),Fn(l),null);case 4:return lo(),_a(a,l),a===null&&Re(l.stateNode.containerInfo),Fn(l),null;case 10:return pf(l.type._context),Fn(l),null;case 17:return We(l.type)&&mt(),Fn(l),null;case 19:if(te(tn),S=l.memoizedState,S===null)return Fn(l),null;if(_=(l.flags&128)!==0,A=S.rendering,A===null)if(_)va(S,!1);else{if(vn!==0||a!==null&&a.flags&128)for(a=l.child;a!==null;){if(A=ql(a),A!==null){for(l.flags|=128,va(S,!1),a=A.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),l.subtreeFlags=0,a=d,_=l.child;_!==null;)d=_,S=a,d.flags&=14680066,A=d.alternate,A===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=A.childLanes,d.lanes=A.lanes,d.child=A.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=A.memoizedProps,d.memoizedState=A.memoizedState,d.updateQueue=A.updateQueue,d.type=A.type,S=A.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),_=_.sibling;return j(tn,tn.current&1|2),l.child}a=a.sibling}S.tail!==null&&bn()>Qf&&(l.flags|=128,_=!0,va(S,!1),l.lanes=4194304)}else{if(!_)if(a=ql(A),a!==null){if(l.flags|=128,_=!0,a=a.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),va(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Qt)return Fn(l),null}else 2*bn()-S.renderingStartTime>Qf&&d!==1073741824&&(l.flags|=128,_=!0,va(S,!1),l.lanes=4194304);S.isBackwards?(A.sibling=l.child,l.child=A):(a=S.last,a!==null?a.sibling=A:l.child=A,S.last=A)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=bn(),l.sibling=null,a=tn.current,j(tn,_?a&1|2:a&1),l):(Fn(l),null);case 22:case 23:return id(),_=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==_&&(l.flags|=8192),_&&l.mode&1?pi&1073741824&&(Fn(l),Pe&&l.subtreeFlags&6&&(l.flags|=8192)):Fn(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}var hS=c.ReactCurrentOwner,di=!1;function Gn(a,l,d,_){l.child=a===null?Jm(l,null,d,_):oo(l,a.child,d,_)}function wg(a,l,d,_,S){d=d.render;var A=l.ref;return no(l,S),_=Rf(a,l,d,_,A,S),d=Pf(),a!==null&&!di?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~S,Mr(a,l,S)):(Qt&&d&&xf(l),l.flags|=1,Gn(a,l,_,S),l.child)}function Eg(a,l,d,_,S){if(a===null){var A=d.type;return typeof A=="function"&&!sd(A)&&A.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=A,bg(a,l,A,_,S)):(a=wc(d.type,null,_,l,l.mode,S),a.ref=l.ref,a.return=l,l.child=a)}if(A=a.child,!(a.lanes&S)){var z=A.memoizedProps;if(d=d.compare,d=d!==null?d:Bl,d(z,_)&&a.ref===l.ref)return Mr(a,l,S)}return l.flags|=1,a=Xr(A,_),a.ref=l.ref,a.return=l,l.child=a}function bg(a,l,d,_,S){if(a!==null&&Bl(a.memoizedProps,_)&&a.ref===l.ref)if(di=!1,(a.lanes&S)!==0)a.flags&131072&&(di=!0);else return l.lanes=a.lanes,Mr(a,l,S);return Of(a,l,d,_,S)}function Tg(a,l,d){var _=l.pendingProps,S=_.children,A=a!==null?a.memoizedState:null;if(_.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},j(uo,pi),pi|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},_=A!==null?A.baseLanes:d,j(uo,pi),pi|=_;else return a=A!==null?A.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null},l.updateQueue=null,j(uo,pi),pi|=a,null;else A!==null?(_=A.baseLanes|d,l.memoizedState=null):_=d,j(uo,pi),pi|=_;return Gn(a,l,S,d),l.child}function Ag(a,l){var d=l.ref;(a===null&&d!==null||a!==null&&a.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function Of(a,l,d,_,S){var A=We(d)?Ne:be.current;return A=ze(l,A),no(l,S),d=Rf(a,l,d,_,A,S),_=Pf(),a!==null&&!di?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~S,Mr(a,l,S)):(Qt&&_&&xf(l),l.flags|=1,Gn(a,l,d,S),l.child)}function Cg(a,l,d,_,S){if(We(d)){var A=!0;At(l)}else A=!1;if(no(l,S),l.stateNode===null)a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),Vm(l,d,_),vf(l,d,_,S),_=!0;else if(a===null){var z=l.stateNode,Z=l.memoizedProps;z.props=Z;var de=z.context,De=d.contextType;typeof De=="object"&&De!==null?De=Si(De):(De=We(d)?Ne:be.current,De=ze(l,De));var et=d.getDerivedStateFromProps,bt=typeof et=="function"||typeof z.getSnapshotBeforeUpdate=="function";bt||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(Z!==_||de!==De)&&Gm(l,z,_,De),zr=!1;var ht=l.memoizedState;z.state=ht,Vl(l,_,z,S),de=l.memoizedState,Z!==_||ht!==de||ke.current||zr?(typeof et=="function"&&(_f(l,d,et,_),de=l.memoizedState),(Z=zr||Hm(l,d,Z,_,ht,de,De))?(bt||typeof z.UNSAFE_componentWillMount!="function"&&typeof z.componentWillMount!="function"||(typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount()),typeof z.componentDidMount=="function"&&(l.flags|=4194308)):(typeof z.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=_,l.memoizedState=de),z.props=_,z.state=de,z.context=De,_=Z):(typeof z.componentDidMount=="function"&&(l.flags|=4194308),_=!1)}else{z=l.stateNode,Fm(a,l),Z=l.memoizedProps,De=l.type===l.elementType?Z:Ui(l.type,Z),z.props=De,bt=l.pendingProps,ht=z.context,de=d.contextType,typeof de=="object"&&de!==null?de=Si(de):(de=We(d)?Ne:be.current,de=ze(l,de));var qt=d.getDerivedStateFromProps;(et=typeof qt=="function"||typeof z.getSnapshotBeforeUpdate=="function")||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(Z!==bt||ht!==de)&&Gm(l,z,_,de),zr=!1,ht=l.memoizedState,z.state=ht,Vl(l,_,z,S);var ot=l.memoizedState;Z!==bt||ht!==ot||ke.current||zr?(typeof qt=="function"&&(_f(l,d,qt,_),ot=l.memoizedState),(De=zr||Hm(l,d,De,_,ht,ot,de)||!1)?(et||typeof z.UNSAFE_componentWillUpdate!="function"&&typeof z.componentWillUpdate!="function"||(typeof z.componentWillUpdate=="function"&&z.componentWillUpdate(_,ot,de),typeof z.UNSAFE_componentWillUpdate=="function"&&z.UNSAFE_componentWillUpdate(_,ot,de)),typeof z.componentDidUpdate=="function"&&(l.flags|=4),typeof z.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof z.componentDidUpdate!="function"||Z===a.memoizedProps&&ht===a.memoizedState||(l.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||Z===a.memoizedProps&&ht===a.memoizedState||(l.flags|=1024),l.memoizedProps=_,l.memoizedState=ot),z.props=_,z.state=ot,z.context=de,_=De):(typeof z.componentDidUpdate!="function"||Z===a.memoizedProps&&ht===a.memoizedState||(l.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||Z===a.memoizedProps&&ht===a.memoizedState||(l.flags|=1024),_=!1)}return Ff(a,l,d,_,A,S)}function Ff(a,l,d,_,S,A){Ag(a,l);var z=(l.flags&128)!==0;if(!_&&!z)return S&&$t(l,d,!1),Mr(a,l,A);_=l.stateNode,hS.current=l;var Z=z&&typeof d.getDerivedStateFromError!="function"?null:_.render();return l.flags|=1,a!==null&&z?(l.child=oo(l,a.child,null,A),l.child=oo(l,null,Z,A)):Gn(a,l,Z,A),l.memoizedState=_.state,S&&$t(l,d,!0),l.child}function Rg(a){var l=a.stateNode;l.pendingContext?Lt(a,l.pendingContext,l.pendingContext!==l.context):l.context&&Lt(a,l.context,!1),Ef(a,l.containerInfo)}function Pg(a,l,d,_,S){return so(),wf(S),l.flags|=256,Gn(a,l,d,_),l.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function rc(a){return{baseLanes:a,cachePool:null}}function Ig(a,l,d){var _=l.pendingProps,S=tn.current,A=!1,z=(l.flags&128)!==0,Z;if((Z=z)||(Z=a!==null&&a.memoizedState===null?!1:(S&2)!==0),Z?(A=!0,l.flags&=-129):(a===null||a.memoizedState!==null)&&(S|=1),j(tn,S&1),a===null)return Mf(l),a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(l.mode&1?zt(a)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=_.children,a=_.fallback,A?(_=l.mode,A=l.child,S={mode:"hidden",children:S},!(_&1)&&A!==null?(A.childLanes=0,A.pendingProps=S):A=Ec(S,_,0,null),a=ps(a,_,d,null),A.return=l,a.return=l,A.sibling=a,l.child=A,l.child.memoizedState=rc(d),l.memoizedState=ic,a):Bf(l,S));if(S=a.memoizedState,S!==null){if(Z=S.dehydrated,Z!==null){if(z)return l.flags&256?(l.flags&=-257,sc(a,l,d,Error(o(422)))):l.memoizedState!==null?(l.child=a.child,l.flags|=128,null):(A=_.fallback,S=l.mode,_=Ec({mode:"visible",children:_.children},S,0,null),A=ps(A,S,d,null),A.flags|=2,_.return=l,A.return=l,_.sibling=A,l.child=_,l.mode&1&&oo(l,a.child,null,d),l.child.memoizedState=rc(d),l.memoizedState=ic,A);if(!(l.mode&1))l=sc(a,l,d,null);else if(zt(Z))l=sc(a,l,d,Error(o(419)));else if(_=(d&a.childLanes)!==0,di||_){if(_=mn,_!==null){switch(d&-d){case 4:A=2;break;case 16:A=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:A=32;break;case 536870912:A=268435456;break;default:A=0}_=A&(_.suspendedLanes|d)?0:A,_!==0&&_!==S.retryLane&&(S.retryLane=_,Ti(a,_,-1))}rd(),l=sc(a,l,d,Error(o(421)))}else Ve(Z)?(l.flags|=128,l.child=a.child,l=ES.bind(null,a),dn(Z,l),l=null):(d=S.treeContext,tt&&(fi=of(Z),hi=l,Qt=!0,Oi=null,aa=!1,d!==null&&(Mi[wi++]=xr,Mi[wi++]=yr,Mi[wi++]=os,xr=d.id,yr=d.overflow,os=l)),l=Bf(l,l.pendingProps.children),l.flags|=4096);return l}return A?(_=Ng(a,l,_.children,_.fallback,d),A=l.child,S=a.child.memoizedState,A.memoizedState=S===null?rc(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=a.childLanes&~d,l.memoizedState=ic,_):(d=Lg(a,l,_.children,d),l.memoizedState=null,d)}return A?(_=Ng(a,l,_.children,_.fallback,d),A=l.child,S=a.child.memoizedState,A.memoizedState=S===null?rc(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=a.childLanes&~d,l.memoizedState=ic,_):(d=Lg(a,l,_.children,d),l.memoizedState=null,d)}function Bf(a,l){return l=Ec({mode:"visible",children:l},a.mode,0,null),l.return=a,a.child=l}function Lg(a,l,d,_){var S=a.child;return a=S.sibling,d=Xr(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=_),d.return=l,d.sibling=null,a!==null&&(_=l.deletions,_===null?(l.deletions=[a],l.flags|=16):_.push(a)),l.child=d}function Ng(a,l,d,_,S){var A=l.mode;a=a.child;var z=a.sibling,Z={mode:"hidden",children:d};return!(A&1)&&l.child!==a?(d=l.child,d.childLanes=0,d.pendingProps=Z,l.deletions=null):(d=Xr(a,Z),d.subtreeFlags=a.subtreeFlags&14680064),z!==null?_=Xr(z,_):(_=ps(_,A,S,null),_.flags|=2),_.return=l,d.return=l,d.sibling=_,l.child=d,_}function sc(a,l,d,_){return _!==null&&wf(_),oo(l,a.child,null,d),a=Bf(l,l.pendingProps.children),a.flags|=2,l.memoizedState=null,a}function Dg(a,l,d){a.lanes|=l;var _=a.alternate;_!==null&&(_.lanes|=l),mf(a.return,l,d)}function zf(a,l,d,_,S){var A=a.memoizedState;A===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:_,tail:d,tailMode:S}:(A.isBackwards=l,A.rendering=null,A.renderingStartTime=0,A.last=_,A.tail=d,A.tailMode=S)}function Ug(a,l,d){var _=l.pendingProps,S=_.revealOrder,A=_.tail;if(Gn(a,l,_.children,d),_=tn.current,_&2)_=_&1|2,l.flags|=128;else{if(a!==null&&a.flags&128)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Dg(a,d,l);else if(a.tag===19)Dg(a,d,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}_&=1}if(j(tn,_),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)a=d.alternate,a!==null&&ql(a)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),zf(l,!1,S,d,A);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(a=S.alternate,a!==null&&ql(a)===null){l.child=S;break}a=S.sibling,S.sibling=d,d=S,S=a}zf(l,!0,d,null,A);break;case"together":zf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Mr(a,l,d){if(a!==null&&(l.dependencies=a.dependencies),ho|=l.lanes,!(d&l.childLanes))return null;if(a!==null&&l.child!==a.child)throw Error(o(153));if(l.child!==null){for(a=l.child,d=Xr(a,a.pendingProps),l.child=d,d.return=l;a.sibling!==null;)a=a.sibling,d=d.sibling=Xr(a,a.pendingProps),d.return=l;d.sibling=null}return l.child}function fS(a,l,d){switch(l.tag){case 3:Rg(l),so();break;case 5:Km(l);break;case 1:We(l.type)&&At(l);break;case 4:Ef(l,l.stateNode.containerInfo);break;case 10:Om(l,l.type._context,l.memoizedProps.value);break;case 13:var _=l.memoizedState;if(_!==null)return _.dehydrated!==null?(j(tn,tn.current&1),l.flags|=128,null):d&l.child.childLanes?Ig(a,l,d):(j(tn,tn.current&1),a=Mr(a,l,d),a!==null?a.sibling:null);j(tn,tn.current&1);break;case 19:if(_=(d&l.childLanes)!==0,a.flags&128){if(_)return Ug(a,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),j(tn,tn.current),_)break;return null;case 22:case 23:return l.lanes=0,Tg(a,l,d)}return Mr(a,l,d)}function dS(a,l){switch(yf(l),l.tag){case 1:return We(l.type)&&mt(),a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 3:return lo(),te(ke),te(be),Af(),a=l.flags,a&65536&&!(a&128)?(l.flags=a&-65537|128,l):null;case 5:return bf(l),null;case 13:if(te(tn),a=l.memoizedState,a!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(o(340));so()}return a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 19:return te(tn),null;case 4:return lo(),null;case 10:return pf(l.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var oc=!1,cs=!1,pS=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function ac(a,l){var d=a.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(_){ti(a,l,_)}else d.current=null}function kf(a,l,d){try{d()}catch(_){ti(a,l,_)}}var Og=!1;function mS(a,l){for(H(a.containerInfo),Xe=l;Xe!==null;)if(a=Xe,l=a.child,(a.subtreeFlags&1028)!==0&&l!==null)l.return=a,Xe=l;else for(;Xe!==null;){a=Xe;try{var d=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var _=d.memoizedProps,S=d.memoizedState,A=a.stateNode,z=A.getSnapshotBeforeUpdate(a.elementType===a.type?_:Ui(a.type,_),S);A.__reactInternalSnapshotBeforeUpdate=z}break;case 3:Pe&&G(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Z){ti(a,a.return,Z)}if(l=a.sibling,l!==null){l.return=a.return,Xe=l;break}Xe=a.return}return d=Og,Og=!1,d}function us(a,l,d){var _=l.updateQueue;if(_=_!==null?_.lastEffect:null,_!==null){var S=_=_.next;do{if((S.tag&a)===a){var A=S.destroy;S.destroy=void 0,A!==void 0&&kf(l,d,A)}S=S.next}while(S!==_)}}function xa(a,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&a)===a){var _=d.create;d.destroy=_()}d=d.next}while(d!==l)}}function Hf(a){var l=a.ref;if(l!==null){var d=a.stateNode;switch(a.tag){case 5:a=oe(d);break;default:a=d}typeof l=="function"?l(a):l.current=a}}function Fg(a,l,d){if(Ji&&typeof Ji.onCommitFiberUnmount=="function")try{Ji.onCommitFiberUnmount(Ol,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(a=l.updateQueue,a!==null&&(a=a.lastEffect,a!==null)){var _=a=a.next;do{var S=_,A=S.destroy;S=S.tag,A!==void 0&&(S&2||S&4)&&kf(l,d,A),_=_.next}while(_!==a)}break;case 1:if(ac(l,d),a=l.stateNode,typeof a.componentWillUnmount=="function")try{a.props=l.memoizedProps,a.state=l.memoizedState,a.componentWillUnmount()}catch(z){ti(l,d,z)}break;case 5:ac(l,d);break;case 4:Pe?Gg(a,l,d):lt&&lt&&(l=l.stateNode.containerInfo,d=ue(l),Ce(l,d))}}function Bg(a,l,d){for(var _=l;;)if(Fg(a,_,d),_.child===null||Pe&&_.tag===4){if(_===l)break;for(;_.sibling===null;){if(_.return===null||_.return===l)return;_=_.return}_.sibling.return=_.return,_=_.sibling}else _.child.return=_,_=_.child}function zg(a){var l=a.alternate;l!==null&&(a.alternate=null,zg(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode,l!==null&&Be(l)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function kg(a){return a.tag===5||a.tag===3||a.tag===4}function Hg(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||kg(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Vg(a){if(Pe){e:{for(var l=a.return;l!==null;){if(kg(l))break e;l=l.return}throw Error(o(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(re(l),d.flags&=-33),d=Hg(a),Gf(a,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=Hg(a),Vf(a,d,l);break;default:throw Error(o(161))}}}function Vf(a,l,d){var _=a.tag;if(_===5||_===6)a=a.stateNode,l?ie(d,a,l):Jt(d,a);else if(_!==4&&(a=a.child,a!==null))for(Vf(a,l,d),a=a.sibling;a!==null;)Vf(a,l,d),a=a.sibling}function Gf(a,l,d){var _=a.tag;if(_===5||_===6)a=a.stateNode,l?I(d,a,l):Fe(d,a);else if(_!==4&&(a=a.child,a!==null))for(Gf(a,l,d),a=a.sibling;a!==null;)Gf(a,l,d),a=a.sibling}function Gg(a,l,d){for(var _=l,S=!1,A,z;;){if(!S){S=_.return;e:for(;;){if(S===null)throw Error(o(160));switch(A=S.stateNode,S.tag){case 5:z=!1;break e;case 3:A=A.containerInfo,z=!0;break e;case 4:A=A.containerInfo,z=!0;break e}S=S.return}S=!0}if(_.tag===5||_.tag===6)Bg(a,_,d),z?F(A,_.stateNode):Se(A,_.stateNode);else if(_.tag===18)z?Dl(A,_.stateNode):Js(A,_.stateNode);else if(_.tag===4){if(_.child!==null){A=_.stateNode.containerInfo,z=!0,_.child.return=_,_=_.child;continue}}else if(Fg(a,_,d),_.child!==null){_.child.return=_,_=_.child;continue}if(_===l)break;for(;_.sibling===null;){if(_.return===null||_.return===l)return;_=_.return,_.tag===4&&(S=!1)}_.sibling.return=_.return,_=_.sibling}}function Wf(a,l){if(Pe){switch(l.tag){case 0:case 11:case 14:case 15:us(3,l,l.return),xa(3,l),us(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var _=l.memoizedProps;a=a!==null?a.memoizedProps:_;var S=l.type,A=l.updateQueue;l.updateQueue=null,A!==null&&B(d,A,S,a,_,l)}return;case 6:if(l.stateNode===null)throw Error(o(162));d=l.memoizedProps,st(l.stateNode,a!==null?a.memoizedProps:d,d);return;case 3:tt&&a!==null&&a.memoizedState.isDehydrated&&ra(l.stateNode.containerInfo);return;case 12:return;case 13:lc(l);return;case 19:lc(l);return;case 17:return}throw Error(o(163))}switch(l.tag){case 0:case 11:case 14:case 15:us(3,l,l.return),xa(3,l),us(5,l,l.return);return;case 12:return;case 13:lc(l);return;case 19:lc(l);return;case 3:tt&&a!==null&&a.memoizedState.isDehydrated&&ra(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(lt){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,Ce(l.containerInfo,l.pendingChildren);break e}throw Error(o(163))}}function lc(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var d=a.stateNode;d===null&&(d=a.stateNode=new pS),l.forEach(function(_){var S=bS.bind(null,a,_);d.has(_)||(d.add(_),_.then(S,S))})}}function gS(a,l){for(Xe=l;Xe!==null;){l=Xe;var d=l.deletions;if(d!==null)for(var _=0;_<d.length;_++){var S=d[_];try{var A=a;Pe?Gg(A,S,l):Bg(A,S,l);var z=S.alternate;z!==null&&(z.return=null),S.return=null}catch(it){ti(S,l,it)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Xe=d;else for(;Xe!==null;){l=Xe;try{var Z=l.flags;if(Z&32&&Pe&&re(l.stateNode),Z&512){var de=l.alternate;if(de!==null){var De=de.ref;De!==null&&(typeof De=="function"?De(null):De.current=null)}}if(Z&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var et=l.alternate;(et===null||et.memoizedState===null)&&(Kf=bn())}break;case 22:var bt=l.memoizedState!==null,ht=l.alternate,qt=ht!==null&&ht.memoizedState!==null;if(d=l,Pe){e:if(_=d,S=bt,A=null,Pe)for(var ot=_;;){if(ot.tag===5){if(A===null){A=ot;var Bn=ot.stateNode;S?fe(Bn):ce(ot.stateNode,ot.memoizedProps)}}else if(ot.tag===6){if(A===null){var Ci=ot.stateNode;S?se(Ci):Ae(Ci,ot.memoizedProps)}}else if((ot.tag!==22&&ot.tag!==23||ot.memoizedState===null||ot===_)&&ot.child!==null){ot.child.return=ot,ot=ot.child;continue}if(ot===_)break;for(;ot.sibling===null;){if(ot.return===null||ot.return===_)break e;A===ot&&(A=null),ot=ot.return}A===ot&&(A=null),ot.sibling.return=ot.return,ot=ot.sibling}}if(bt&&!qt&&d.mode&1){Xe=d;for(var le=d.child;le!==null;){for(d=Xe=le;Xe!==null;){_=Xe;var ee=_.child;switch(_.tag){case 0:case 11:case 14:case 15:us(4,_,_.return);break;case 1:ac(_,_.return);var he=_.stateNode;if(typeof he.componentWillUnmount=="function"){var Ye=_.return;try{he.props=_.memoizedProps,he.state=_.memoizedState,he.componentWillUnmount()}catch(it){ti(_,Ye,it)}}break;case 5:ac(_,_.return);break;case 22:if(_.memoizedState!==null){Yg(d);continue}}ee!==null?(ee.return=_,Xe=ee):Yg(d)}le=le.sibling}}}switch(Z&4102){case 2:Vg(l),l.flags&=-3;break;case 6:Vg(l),l.flags&=-3,Wf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,Wf(l.alternate,l);break;case 4:Wf(l.alternate,l)}}catch(it){ti(l,l.return,it)}if(d=l.sibling,d!==null){d.return=l.return,Xe=d;break}Xe=l.return}}}function _S(a,l,d){Xe=a,Wg(a)}function Wg(a,l,d){for(var _=(a.mode&1)!==0;Xe!==null;){var S=Xe,A=S.child;if(S.tag===22&&_){var z=S.memoizedState!==null||oc;if(!z){var Z=S.alternate,de=Z!==null&&Z.memoizedState!==null||cs;Z=oc;var De=cs;if(oc=z,(cs=de)&&!De)for(Xe=S;Xe!==null;)z=Xe,de=z.child,z.tag===22&&z.memoizedState!==null?qg(S):de!==null?(de.return=z,Xe=de):qg(S);for(;A!==null;)Xe=A,Wg(A),A=A.sibling;Xe=S,oc=Z,cs=De}Xg(a)}else S.subtreeFlags&8772&&A!==null?(A.return=S,Xe=A):Xg(a)}}function Xg(a){for(;Xe!==null;){var l=Xe;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:cs||xa(5,l);break;case 1:var _=l.stateNode;if(l.flags&4&&!cs)if(d===null)_.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:Ui(l.type,d.memoizedProps);_.componentDidUpdate(S,d.memoizedState,_.__reactInternalSnapshotBeforeUpdate)}var A=l.updateQueue;A!==null&&zm(l,A,_);break;case 3:var z=l.updateQueue;if(z!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=oe(l.child.stateNode);break;case 1:d=l.child.stateNode}zm(l,z,d)}break;case 5:var Z=l.stateNode;d===null&&l.flags&4&&ut(Z,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(tt&&l.memoizedState===null){var de=l.alternate;if(de!==null){var De=de.memoizedState;if(De!==null){var et=De.dehydrated;et!==null&&Nl(et)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(o(163))}cs||l.flags&512&&Hf(l)}catch(bt){ti(l,l.return,bt)}}if(l===a){Xe=null;break}if(d=l.sibling,d!==null){d.return=l.return,Xe=d;break}Xe=l.return}}function Yg(a){for(;Xe!==null;){var l=Xe;if(l===a){Xe=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Xe=d;break}Xe=l.return}}function qg(a){for(;Xe!==null;){var l=Xe;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{xa(4,l)}catch(de){ti(l,d,de)}break;case 1:var _=l.stateNode;if(typeof _.componentDidMount=="function"){var S=l.return;try{_.componentDidMount()}catch(de){ti(l,S,de)}}var A=l.return;try{Hf(l)}catch(de){ti(l,A,de)}break;case 5:var z=l.return;try{Hf(l)}catch(de){ti(l,z,de)}}}catch(de){ti(l,l.return,de)}if(l===a){Xe=null;break}var Z=l.sibling;if(Z!==null){Z.return=l.return,Xe=Z;break}Xe=l.return}}var cc=0,uc=1,hc=2,fc=3,dc=4;if(typeof Symbol=="function"&&Symbol.for){var ya=Symbol.for;cc=ya("selector.component"),uc=ya("selector.has_pseudo_class"),hc=ya("selector.role"),fc=ya("selector.test_id"),dc=ya("selector.text")}function Xf(a){var l=me(a);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(o(364));return l}if(a=Mt(a),a===null)throw Error(o(362));return a.stateNode.current}function Yf(a,l){switch(l.$$typeof){case cc:if(a.type===l.value)return!0;break;case uc:e:{l=l.value,a=[a,0];for(var d=0;d<a.length;){var _=a[d++],S=a[d++],A=l[S];if(_.tag!==5||!q(_)){for(;A!=null&&Yf(_,A);)S++,A=l[S];if(S===l.length){l=!0;break e}else for(_=_.child;_!==null;)a.push(_,S),_=_.sibling}}l=!1}return l;case hc:if(a.tag===5&&Zt(a.stateNode,l.value))return!0;break;case dc:if((a.tag===5||a.tag===6)&&(a=Rt(a),a!==null&&0<=a.indexOf(l.value)))return!0;break;case fc:if(a.tag===5&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function qf(a){switch(a.$$typeof){case cc:return"<"+(E(a.value)||"Unknown")+">";case uc:return":has("+(qf(a)||"")+")";case hc:return'[role="'+a.value+'"]';case dc:return'"'+a.value+'"';case fc:return'[data-testname="'+a.value+'"]';default:throw Error(o(365))}}function jg(a,l){var d=[];a=[a,0];for(var _=0;_<a.length;){var S=a[_++],A=a[_++],z=l[A];if(S.tag!==5||!q(S)){for(;z!=null&&Yf(S,z);)A++,z=l[A];if(A===l.length)d.push(S);else for(S=S.child;S!==null;)a.push(S,A),S=S.sibling}}return d}function jf(a,l){if(!Ze)throw Error(o(363));a=Xf(a),a=jg(a,l),l=[],a=Array.from(a);for(var d=0;d<a.length;){var _=a[d++];if(_.tag===5)q(_)||l.push(_.stateNode);else for(_=_.child;_!==null;)a.push(_),_=_.sibling}return l}var vS=Math.ceil,pc=c.ReactCurrentDispatcher,Zf=c.ReactCurrentOwner,un=c.ReactCurrentBatchConfig,Nt=0,mn=null,gn=null,Pn=0,pi=0,uo=Y(0),vn=0,Sa=null,ho=0,mc=0,Jf=0,Ma=null,$n=null,Kf=0,Qf=1/0;function fo(){Qf=bn()+500}var gc=!1,$f=null,Hr=null,_c=!1,Vr=null,vc=0,wa=0,ed=null,xc=-1,yc=0;function Wn(){return Nt&6?bn():xc!==-1?xc:xc=bn()}function Gr(a){return a.mode&1?Nt&2&&Pn!==0?Pn&-Pn:eS.transition!==null?(yc===0&&(a=pn,pn<<=1,!(pn&4194240)&&(pn=64),yc=a),yc):(a=dt,a!==0?a:Le()):1}function Ti(a,l,d){if(50<wa)throw wa=0,ed=null,Error(o(185));var _=Sc(a,l);return _===null?null:(en(_,l,d),(!(Nt&2)||_!==mn)&&(_===mn&&(!(Nt&2)&&(mc|=l),vn===4&&Wr(_,Pn)),ei(_,d),l===1&&Nt===0&&!(a.mode&1)&&(fo(),Fl&&Qi())),_)}function Sc(a,l){a.lanes|=l;var d=a.alternate;for(d!==null&&(d.lanes|=l),d=a,a=a.return;a!==null;)a.childLanes|=l,d=a.alternate,d!==null&&(d.childLanes|=l),d=a,a=a.return;return d.tag===3?d.stateNode:null}function ei(a,l){var d=a.callbackNode;Zi(a,l);var _=cn(a,a===mn?Pn:0);if(_===0)d!==null&&Dm(d),a.callbackNode=null,a.callbackPriority=0;else if(l=_&-_,a.callbackPriority!==l){if(d!=null&&Dm(d),l===1)a.tag===0?$y(Jg.bind(null,a)):Um(Jg.bind(null,a)),Oe?ct(function(){Nt===0&&Qi()}):eo(cf,Qi),d=null;else{switch(yi(_)){case 1:d=cf;break;case 4:d=Zy;break;case 16:d=uf;break;case 536870912:d=Jy;break;default:d=uf}d=s0(d,Zg.bind(null,a))}a.callbackPriority=l,a.callbackNode=d}}function Zg(a,l){if(xc=-1,yc=0,Nt&6)throw Error(o(327));var d=a.callbackNode;if(ds()&&a.callbackNode!==d)return null;var _=cn(a,a===mn?Pn:0);if(_===0)return null;if(_&30||_&a.expiredLanes||l)l=Mc(a,_);else{l=_;var S=Nt;Nt|=2;var A=$g();(mn!==a||Pn!==l)&&(fo(),hs(a,l));do try{SS();break}catch(Z){Qg(a,Z)}while(!0);df(),pc.current=A,Nt=S,gn!==null?l=0:(mn=null,Pn=0,l=vn)}if(l!==0){if(l===2&&(S=Di(a),S!==0&&(_=S,l=td(a,S))),l===1)throw d=Sa,hs(a,0),Wr(a,_),ei(a,bn()),d;if(l===6)Wr(a,_);else{if(S=a.current.alternate,!(_&30)&&!xS(S)&&(l=Mc(a,_),l===2&&(A=Di(a),A!==0&&(_=A,l=td(a,A))),l===1))throw d=Sa,hs(a,0),Wr(a,_),ei(a,bn()),d;switch(a.finishedWork=S,a.finishedLanes=_,l){case 0:case 1:throw Error(o(345));case 2:fs(a,$n);break;case 3:if(Wr(a,_),(_&130023424)===_&&(l=Kf+500-bn(),10<l)){if(cn(a,0)!==0)break;if(S=a.suspendedLanes,(S&_)!==_){Wn(),a.pingedLanes|=a.suspendedLanes&S;break}a.timeoutHandle=qe(fs.bind(null,a,$n),l);break}fs(a,$n);break;case 4:if(Wr(a,_),(_&4194240)===_)break;for(l=a.eventTimes,S=-1;0<_;){var z=31-Dt(_);A=1<<z,z=l[z],z>S&&(S=z),_&=~A}if(_=S,_=bn()-_,_=(120>_?120:480>_?480:1080>_?1080:1920>_?1920:3e3>_?3e3:4320>_?4320:1960*vS(_/1960))-_,10<_){a.timeoutHandle=qe(fs.bind(null,a,$n),_);break}fs(a,$n);break;case 5:fs(a,$n);break;default:throw Error(o(329))}}}return ei(a,bn()),a.callbackNode===d?Zg.bind(null,a):null}function td(a,l){var d=Ma;return a.current.memoizedState.isDehydrated&&(hs(a,l).flags|=256),a=Mc(a,l),a!==2&&(l=$n,$n=d,l!==null&&nd(l)),a}function nd(a){$n===null?$n=a:$n.push.apply($n,a)}function xS(a){for(var l=a;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var _=0;_<d.length;_++){var S=d[_],A=S.getSnapshot;S=S.value;try{if(!Ki(A(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Wr(a,l){for(l&=~Jf,l&=~mc,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var d=31-Dt(l),_=1<<d;a[d]=-1,l&=~_}}function Jg(a){if(Nt&6)throw Error(o(327));ds();var l=cn(a,0);if(!(l&1))return ei(a,bn()),null;var d=Mc(a,l);if(a.tag!==0&&d===2){var _=Di(a);_!==0&&(l=_,d=td(a,_))}if(d===1)throw d=Sa,hs(a,0),Wr(a,l),ei(a,bn()),d;if(d===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,fs(a,$n),ei(a,bn()),null}function Kg(a){Vr!==null&&Vr.tag===0&&!(Nt&6)&&ds();var l=Nt;Nt|=1;var d=un.transition,_=dt;try{if(un.transition=null,dt=1,a)return a()}finally{dt=_,un.transition=d,Nt=l,!(Nt&6)&&Qi()}}function id(){pi=uo.current,te(uo)}function hs(a,l){a.finishedWork=null,a.finishedLanes=0;var d=a.timeoutHandle;if(d!==nt&&(a.timeoutHandle=nt,Ue(d)),gn!==null)for(d=gn.return;d!==null;){var _=d;switch(yf(_),_.tag){case 1:_=_.type.childContextTypes,_!=null&&mt();break;case 3:lo(),te(ke),te(be),Af();break;case 5:bf(_);break;case 4:lo();break;case 13:te(tn);break;case 19:te(tn);break;case 10:pf(_.type._context);break;case 22:case 23:id()}d=d.return}if(mn=a,gn=a=Xr(a.current,null),Pn=pi=l,vn=0,Sa=null,Jf=mc=ho=0,$n=Ma=null,$i!==null){for(l=0;l<$i.length;l++)if(d=$i[l],_=d.interleaved,_!==null){d.interleaved=null;var S=_.next,A=d.pending;if(A!==null){var z=A.next;A.next=S,_.next=z}d.pending=_}$i=null}return a}function Qg(a,l){do{var d=gn;try{if(df(),jl.current=ec,Zl){for(var _=on.memoizedState;_!==null;){var S=_.queue;S!==null&&(S.pending=null),_=_.next}Zl=!1}if(co=0,Tn=Un=on=null,fa=!1,da=0,Zf.current=null,d===null||d.return===null){vn=1,Sa=l,gn=null;break}e:{var A=a,z=d.return,Z=d,de=l;if(l=Pn,Z.flags|=32768,de!==null&&typeof de=="object"&&typeof de.then=="function"){var De=de,et=Z,bt=et.tag;if(!(et.mode&1)&&(bt===0||bt===11||bt===15)){var ht=et.alternate;ht?(et.updateQueue=ht.updateQueue,et.memoizedState=ht.memoizedState,et.lanes=ht.lanes):(et.updateQueue=null,et.memoizedState=null)}var qt=xg(z);if(qt!==null){qt.flags&=-257,yg(qt,z,Z,A,l),qt.mode&1&&vg(A,De,l),l=qt,de=De;var ot=l.updateQueue;if(ot===null){var Bn=new Set;Bn.add(de),l.updateQueue=Bn}else ot.add(de);break e}else{if(!(l&1)){vg(A,De,l),rd();break e}de=Error(o(426))}}else if(Qt&&Z.mode&1){var Ci=xg(z);if(Ci!==null){!(Ci.flags&65536)&&(Ci.flags|=256),yg(Ci,z,Z,A,l),wf(de);break e}}A=de,vn!==4&&(vn=2),Ma===null?Ma=[A]:Ma.push(A),de=Df(de,Z),Z=z;do{switch(Z.tag){case 3:Z.flags|=65536,l&=-l,Z.lanes|=l;var le=gg(Z,de,l);Bm(Z,le);break e;case 1:A=de;var ee=Z.type,he=Z.stateNode;if(!(Z.flags&128)&&(typeof ee.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Hr===null||!Hr.has(he)))){Z.flags|=65536,l&=-l,Z.lanes|=l;var Ye=_g(Z,A,l);Bm(Z,Ye);break e}}Z=Z.return}while(Z!==null)}t0(d)}catch(it){l=it,gn===d&&d!==null&&(gn=d=d.return);continue}break}while(!0)}function $g(){var a=pc.current;return pc.current=ec,a===null?ec:a}function rd(){(vn===0||vn===3||vn===2)&&(vn=4),mn===null||!(ho&268435455)&&!(mc&268435455)||Wr(mn,Pn)}function Mc(a,l){var d=Nt;Nt|=2;var _=$g();mn===a&&Pn===l||hs(a,l);do try{yS();break}catch(S){Qg(a,S)}while(!0);if(df(),Nt=d,pc.current=_,gn!==null)throw Error(o(261));return mn=null,Pn=0,vn}function yS(){for(;gn!==null;)e0(gn)}function SS(){for(;gn!==null&&!qy();)e0(gn)}function e0(a){var l=r0(a.alternate,a,pi);a.memoizedProps=a.pendingProps,l===null?t0(a):gn=l,Zf.current=null}function t0(a){var l=a;do{var d=l.alternate;if(a=l.return,l.flags&32768){if(d=dS(d,l),d!==null){d.flags&=32767,gn=d;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{vn=6,gn=null;return}}else if(d=uS(d,l,pi),d!==null){gn=d;return}if(l=l.sibling,l!==null){gn=l;return}gn=l=a}while(l!==null);vn===0&&(vn=5)}function fs(a,l){var d=dt,_=un.transition;try{un.transition=null,dt=1,MS(a,l,d)}finally{un.transition=_,dt=d}return null}function MS(a,l,d){do ds();while(Vr!==null);if(Nt&6)throw Error(o(327));var _=a.finishedWork,S=a.finishedLanes;if(_===null)return null;if(a.finishedWork=null,a.finishedLanes=0,_===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var A=_.lanes|_.childLanes;if(ui(a,A),a===mn&&(gn=mn=null,Pn=0),!(_.subtreeFlags&2064)&&!(_.flags&2064)||_c||(_c=!0,s0(uf,function(){return ds(),null})),A=(_.flags&15990)!==0,_.subtreeFlags&15990||A){A=un.transition,un.transition=null;var z=dt;dt=1;var Z=Nt;Nt|=4,Zf.current=null,mS(a,_),gS(a,_),W(a.containerInfo),a.current=_,_S(_),jy(),Nt=Z,dt=z,un.transition=A}else a.current=_;if(_c&&(_c=!1,Vr=a,vc=S),A=a.pendingLanes,A===0&&(Hr=null),Ky(_.stateNode),ei(a,bn()),l!==null)for(d=a.onRecoverableError,_=0;_<l.length;_++)d(l[_]);if(gc)throw gc=!1,a=$f,$f=null,a;return vc&1&&a.tag!==0&&ds(),A=a.pendingLanes,A&1?a===ed?wa++:(wa=0,ed=a):wa=0,Qi(),null}function ds(){if(Vr!==null){var a=yi(vc),l=un.transition,d=dt;try{if(un.transition=null,dt=16>a?16:a,Vr===null)var _=!1;else{if(a=Vr,Vr=null,vc=0,Nt&6)throw Error(o(331));var S=Nt;for(Nt|=4,Xe=a.current;Xe!==null;){var A=Xe,z=A.child;if(Xe.flags&16){var Z=A.deletions;if(Z!==null){for(var de=0;de<Z.length;de++){var De=Z[de];for(Xe=De;Xe!==null;){var et=Xe;switch(et.tag){case 0:case 11:case 15:us(8,et,A)}var bt=et.child;if(bt!==null)bt.return=et,Xe=bt;else for(;Xe!==null;){et=Xe;var ht=et.sibling,qt=et.return;if(zg(et),et===De){Xe=null;break}if(ht!==null){ht.return=qt,Xe=ht;break}Xe=qt}}}var ot=A.alternate;if(ot!==null){var Bn=ot.child;if(Bn!==null){ot.child=null;do{var Ci=Bn.sibling;Bn.sibling=null,Bn=Ci}while(Bn!==null)}}Xe=A}}if(A.subtreeFlags&2064&&z!==null)z.return=A,Xe=z;else e:for(;Xe!==null;){if(A=Xe,A.flags&2048)switch(A.tag){case 0:case 11:case 15:us(9,A,A.return)}var le=A.sibling;if(le!==null){le.return=A.return,Xe=le;break e}Xe=A.return}}var ee=a.current;for(Xe=ee;Xe!==null;){z=Xe;var he=z.child;if(z.subtreeFlags&2064&&he!==null)he.return=z,Xe=he;else e:for(z=ee;Xe!==null;){if(Z=Xe,Z.flags&2048)try{switch(Z.tag){case 0:case 11:case 15:xa(9,Z)}}catch(it){ti(Z,Z.return,it)}if(Z===z){Xe=null;break e}var Ye=Z.sibling;if(Ye!==null){Ye.return=Z.return,Xe=Ye;break e}Xe=Z.return}}if(Nt=S,Qi(),Ji&&typeof Ji.onPostCommitFiberRoot=="function")try{Ji.onPostCommitFiberRoot(Ol,a)}catch{}_=!0}return _}finally{dt=d,un.transition=l}}return!1}function n0(a,l,d){l=Df(d,l),l=gg(a,l,1),kr(a,l),l=Wn(),a=Sc(a,1),a!==null&&(en(a,1,l),ei(a,l))}function ti(a,l,d){if(a.tag===3)n0(a,a,d);else for(;l!==null;){if(l.tag===3){n0(l,a,d);break}else if(l.tag===1){var _=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof _.componentDidCatch=="function"&&(Hr===null||!Hr.has(_))){a=Df(d,a),a=_g(l,a,1),kr(l,a),a=Wn(),l=Sc(l,1),l!==null&&(en(l,1,a),ei(l,a));break}}l=l.return}}function wS(a,l,d){var _=a.pingCache;_!==null&&_.delete(l),l=Wn(),a.pingedLanes|=a.suspendedLanes&d,mn===a&&(Pn&d)===d&&(vn===4||vn===3&&(Pn&130023424)===Pn&&500>bn()-Kf?hs(a,0):Jf|=d),ei(a,l)}function i0(a,l){l===0&&(a.mode&1?(l=Ft,Ft<<=1,!(Ft&130023424)&&(Ft=4194304)):l=1);var d=Wn();a=Sc(a,l),a!==null&&(en(a,l,d),ei(a,d))}function ES(a){var l=a.memoizedState,d=0;l!==null&&(d=l.retryLane),i0(a,d)}function bS(a,l){var d=0;switch(a.tag){case 13:var _=a.stateNode,S=a.memoizedState;S!==null&&(d=S.retryLane);break;case 19:_=a.stateNode;break;default:throw Error(o(314))}_!==null&&_.delete(l),i0(a,d)}var r0;r0=function(a,l,d){if(a!==null)if(a.memoizedProps!==l.pendingProps||ke.current)di=!0;else{if(!(a.lanes&d)&&!(l.flags&128))return di=!1,fS(a,l,d);di=!!(a.flags&131072)}else di=!1,Qt&&l.flags&1048576&&Wm(l,Xl,l.index);switch(l.lanes=0,l.tag){case 2:var _=l.type;a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps;var S=ze(l,be.current);no(l,d),S=Rf(null,l,_,a,S,d);var A=Pf();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,We(_)?(A=!0,At(l)):A=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,gf(l),S.updater=Gl,l.stateNode=S,S._reactInternals=l,vf(l,_,a,d),l=Ff(null,l,_,!0,A,d)):(l.tag=0,Qt&&A&&xf(l),Gn(null,l,S,d),l=l.child),l;case 16:_=l.elementType;e:{switch(a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps,S=_._init,_=S(_._payload),l.type=_,S=l.tag=AS(_),a=Ui(_,a),S){case 0:l=Of(null,l,_,a,d);break e;case 1:l=Cg(null,l,_,a,d);break e;case 11:l=wg(null,l,_,a,d);break e;case 14:l=Eg(null,l,_,Ui(_.type,a),d);break e}throw Error(o(306,_,""))}return l;case 0:return _=l.type,S=l.pendingProps,S=l.elementType===_?S:Ui(_,S),Of(a,l,_,S,d);case 1:return _=l.type,S=l.pendingProps,S=l.elementType===_?S:Ui(_,S),Cg(a,l,_,S,d);case 3:e:{if(Rg(l),a===null)throw Error(o(387));_=l.pendingProps,A=l.memoizedState,S=A.element,Fm(a,l),Vl(l,_,null,d);var z=l.memoizedState;if(_=z.element,tt&&A.isDehydrated)if(A={element:_,isDehydrated:!1,cache:z.cache,transitions:z.transitions},l.updateQueue.baseState=A,l.memoizedState=A,l.flags&256){S=Error(o(423)),l=Pg(a,l,_,d,S);break e}else if(_!==S){S=Error(o(424)),l=Pg(a,l,_,d,S);break e}else for(tt&&(fi=na(l.stateNode.containerInfo),hi=l,Qt=!0,Oi=null,aa=!1),d=Jm(l,null,_,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(so(),_===S){l=Mr(a,l,d);break e}Gn(a,l,_,d)}l=l.child}return l;case 5:return Km(l),a===null&&Mf(l),_=l.type,S=l.pendingProps,A=a!==null?a.memoizedProps:null,z=S.children,ye(_,S)?z=null:A!==null&&ye(_,A)&&(l.flags|=32),Ag(a,l),Gn(a,l,z,d),l.child;case 6:return a===null&&Mf(l),null;case 13:return Ig(a,l,d);case 4:return Ef(l,l.stateNode.containerInfo),_=l.pendingProps,a===null?l.child=oo(l,null,_,d):Gn(a,l,_,d),l.child;case 11:return _=l.type,S=l.pendingProps,S=l.elementType===_?S:Ui(_,S),wg(a,l,_,S,d);case 7:return Gn(a,l,l.pendingProps,d),l.child;case 8:return Gn(a,l,l.pendingProps.children,d),l.child;case 12:return Gn(a,l,l.pendingProps.children,d),l.child;case 10:e:{if(_=l.type._context,S=l.pendingProps,A=l.memoizedProps,z=S.value,Om(l,_,z),A!==null)if(Ki(A.value,z)){if(A.children===S.children&&!ke.current){l=Mr(a,l,d);break e}}else for(A=l.child,A!==null&&(A.return=l);A!==null;){var Z=A.dependencies;if(Z!==null){z=A.child;for(var de=Z.firstContext;de!==null;){if(de.context===_){if(A.tag===1){de=vr(-1,d&-d),de.tag=2;var De=A.updateQueue;if(De!==null){De=De.shared;var et=De.pending;et===null?de.next=de:(de.next=et.next,et.next=de),De.pending=de}}A.lanes|=d,de=A.alternate,de!==null&&(de.lanes|=d),mf(A.return,d,l),Z.lanes|=d;break}de=de.next}}else if(A.tag===10)z=A.type===l.type?null:A.child;else if(A.tag===18){if(z=A.return,z===null)throw Error(o(341));z.lanes|=d,Z=z.alternate,Z!==null&&(Z.lanes|=d),mf(z,d,l),z=A.sibling}else z=A.child;if(z!==null)z.return=A;else for(z=A;z!==null;){if(z===l){z=null;break}if(A=z.sibling,A!==null){A.return=z.return,z=A;break}z=z.return}A=z}Gn(a,l,S.children,d),l=l.child}return l;case 9:return S=l.type,_=l.pendingProps.children,no(l,d),S=Si(S),_=_(S),l.flags|=1,Gn(a,l,_,d),l.child;case 14:return _=l.type,S=Ui(_,l.pendingProps),S=Ui(_.type,S),Eg(a,l,_,S,d);case 15:return bg(a,l,l.type,l.pendingProps,d);case 17:return _=l.type,S=l.pendingProps,S=l.elementType===_?S:Ui(_,S),a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,We(_)?(a=!0,At(l)):a=!1,no(l,d),Vm(l,_,S),vf(l,_,S,d),Ff(null,l,_,!0,a,d);case 19:return Ug(a,l,d);case 22:return Tg(a,l,d)}throw Error(o(156,l.tag))};function s0(a,l){return eo(a,l)}function TS(a,l,d,_){this.tag=a,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=_,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(a,l,d,_){return new TS(a,l,d,_)}function sd(a){return a=a.prototype,!(!a||!a.isReactComponent)}function AS(a){if(typeof a=="function")return sd(a)?1:0;if(a!=null){if(a=a.$$typeof,a===M)return 11;if(a===w)return 14}return 2}function Xr(a,l){var d=a.alternate;return d===null?(d=Ai(a.tag,l,a.key,a.mode),d.elementType=a.elementType,d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=l,d.type=a.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=a.flags&14680064,d.childLanes=a.childLanes,d.lanes=a.lanes,d.child=a.child,d.memoizedProps=a.memoizedProps,d.memoizedState=a.memoizedState,d.updateQueue=a.updateQueue,l=a.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=a.sibling,d.index=a.index,d.ref=a.ref,d}function wc(a,l,d,_,S,A){var z=2;if(_=a,typeof a=="function")sd(a)&&(z=1);else if(typeof a=="string")z=5;else e:switch(a){case f:return ps(d.children,S,A,l);case p:z=8,S|=8;break;case m:return a=Ai(12,d,l,S|2),a.elementType=m,a.lanes=A,a;case y:return a=Ai(13,d,l,S),a.elementType=y,a.lanes=A,a;case x:return a=Ai(19,d,l,S),a.elementType=x,a.lanes=A,a;case T:return Ec(d,S,A,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case g:z=10;break e;case v:z=9;break e;case M:z=11;break e;case w:z=14;break e;case b:z=16,_=null;break e}throw Error(o(130,a==null?a:typeof a,""))}return l=Ai(z,d,l,S),l.elementType=a,l.type=_,l.lanes=A,l}function ps(a,l,d,_){return a=Ai(7,a,_,l),a.lanes=d,a}function Ec(a,l,d,_){return a=Ai(22,a,_,l),a.elementType=T,a.lanes=d,a.stateNode={},a}function od(a,l,d){return a=Ai(6,a,null,l),a.lanes=d,a}function ad(a,l,d){return l=Ai(4,a.children!==null?a.children:[],a.key,l),l.lanes=d,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function CS(a,l,d,_,S){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=nt,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ut(0),this.expirationTimes=Ut(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.identifierPrefix=_,this.onRecoverableError=S,tt&&(this.mutableSourceEagerHydrationData=null)}function o0(a,l,d,_,S,A,z,Z,de){return a=new CS(a,l,d,Z,de),l===1?(l=1,A===!0&&(l|=8)):l=0,A=Ai(3,null,null,l),a.current=A,A.stateNode=a,A.memoizedState={element:_,isDehydrated:d,cache:null,transitions:null},gf(A),a}function a0(a){if(!a)return ne;a=a._reactInternals;e:{if(O(a)!==a||a.tag!==1)throw Error(o(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(We(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(a.tag===1){var d=a.type;if(We(d))return Qe(a,d,l)}return l}function l0(a){var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=X(l),a===null?null:a.stateNode}function c0(a,l){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var d=a.retryLane;a.retryLane=d!==0&&d<l?d:l}}function ld(a,l){c0(a,l),(a=a.alternate)&&c0(a,l)}function RS(a){return a=X(a),a===null?null:a.stateNode}function PS(){return null}return t.attemptContinuousHydration=function(a){if(a.tag===13){var l=Wn();Ti(a,134217728,l),ld(a,134217728)}},t.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var l=Wn(),d=Gr(a);Ti(a,d,l),ld(a,d)}},t.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var d=ci(l.pendingLanes);d!==0&&(Yt(l,d|1),ei(l,bn()),!(Nt&6)&&(fo(),Qi()))}break;case 13:var _=Wn();Kg(function(){return Ti(a,1,_)}),ld(a,1)}},t.batchedUpdates=function(a,l){var d=Nt;Nt|=1;try{return a(l)}finally{Nt=d,Nt===0&&(fo(),Fl&&Qi())}},t.createComponentSelector=function(a){return{$$typeof:cc,value:a}},t.createContainer=function(a,l,d,_,S,A,z){return o0(a,l,!1,null,d,_,S,A,z)},t.createHasPseudoClassSelector=function(a){return{$$typeof:uc,value:a}},t.createHydrationContainer=function(a,l,d,_,S,A,z,Z,de){return a=o0(d,_,!0,a,S,A,z,Z,de),a.context=a0(null),d=a.current,_=Wn(),S=Gr(d),A=vr(_,S),A.callback=l??null,kr(d,A),a.current.lanes=S,en(a,S,_),ei(a,_),a},t.createPortal=function(a,l,d){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:_==null?null:""+_,children:a,containerInfo:l,implementation:d}},t.createRoleSelector=function(a){return{$$typeof:hc,value:a}},t.createTestNameSelector=function(a){return{$$typeof:fc,value:a}},t.createTextSelector=function(a){return{$$typeof:dc,value:a}},t.deferredUpdates=function(a){var l=dt,d=un.transition;try{return un.transition=null,dt=16,a()}finally{dt=l,un.transition=d}},t.discreteUpdates=function(a,l,d,_,S){var A=dt,z=un.transition;try{return un.transition=null,dt=1,a(l,d,_,S)}finally{dt=A,un.transition=z,Nt===0&&fo()}},t.findAllNodes=jf,t.findBoundingRects=function(a,l){if(!Ze)throw Error(o(363));l=jf(a,l),a=[];for(var d=0;d<l.length;d++)a.push(wt(l[d]));for(l=a.length-1;0<l;l--){d=a[l];for(var _=d.x,S=_+d.width,A=d.y,z=A+d.height,Z=l-1;0<=Z;Z--)if(l!==Z){var de=a[Z],De=de.x,et=De+de.width,bt=de.y,ht=bt+de.height;if(_>=De&&A>=bt&&S<=et&&z<=ht){a.splice(l,1);break}else if(_!==De||d.width!==de.width||ht<A||bt>z){if(!(A!==bt||d.height!==de.height||et<_||De>S)){De>_&&(de.width+=De-_,de.x=_),et<S&&(de.width=S-De),a.splice(l,1);break}}else{bt>A&&(de.height+=bt-A,de.y=A),ht<z&&(de.height=z-bt),a.splice(l,1);break}}}return a},t.findHostInstance=l0,t.findHostInstanceWithNoPortals=function(a){return a=D(a),a=a!==null?V(a):null,a===null?null:a.stateNode},t.findHostInstanceWithWarning=function(a){return l0(a)},t.flushControlled=function(a){var l=Nt;Nt|=1;var d=un.transition,_=dt;try{un.transition=null,dt=1,a()}finally{dt=_,un.transition=d,Nt=l,Nt===0&&(fo(),Qi())}},t.flushPassiveEffects=ds,t.flushSync=Kg,t.focusWithin=function(a,l){if(!Ze)throw Error(o(363));for(a=Xf(a),l=jg(a,l),l=Array.from(l),a=0;a<l.length;){var d=l[a++];if(!q(d)){if(d.tag===5&&yt(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return dt},t.getFindAllNodesFailureDescription=function(a,l){if(!Ze)throw Error(o(363));var d=0,_=[];a=[Xf(a),0];for(var S=0;S<a.length;){var A=a[S++],z=a[S++],Z=l[z];if((A.tag!==5||!q(A))&&(Yf(A,Z)&&(_.push(qf(Z)),z++,z>d&&(d=z)),z<l.length))for(A=A.child;A!==null;)a.push(A,z),A=A.sibling}if(d<l.length){for(a=[];d<l.length;d++)a.push(qf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(_.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},t.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return oe(a.child.stateNode);default:return a.child.stateNode}},t.injectIntoDevTools=function(a){if(a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:RS,findFiberByHostInstance:a.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)a=!0;else{try{Ol=l.inject(a),Ji=l}catch{}a=!!l.checkDCE}}return a},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(a,l,d,_){if(!Ze)throw Error(o(363));a=jf(a,l);var S=Pt(a,d,_).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(a,l){var d=l._getVersion;d=d(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,d]:a.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(a,l){var d=dt;try{return dt=a,l()}finally{dt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(a,l,d,_){var S=l.current,A=Wn(),z=Gr(S);return d=a0(d),l.context===null?l.context=d:l.pendingContext=d,l=vr(A,z),l.payload={element:a},_=_===void 0?null:_,_!==null&&(l.callback=_),kr(S,l),a=Ti(S,z,A),a!==null&&Hl(a,S,z),z},t};Sy.exports=IR;var LR=Sy.exports;const NR=LS(LR);var My={exports:{}},wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(k,H){var W=k.length;k.push(H);e:for(;0<W;){var J=W-1>>>1,pe=k[J];if(0<i(pe,H))k[J]=H,k[W]=pe,W=J;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var H=k[0],W=k.pop();if(W!==H){k[0]=W;e:for(var J=0,pe=k.length,Me=pe>>>1;J<Me;){var ae=2*(J+1)-1,ye=k[ae],Ie=ae+1,qe=k[Ie];if(0>i(ye,W))Ie<pe&&0>i(qe,ye)?(k[J]=qe,k[Ie]=W,J=Ie):(k[J]=ye,k[ae]=W,J=ae);else if(Ie<pe&&0>i(qe,W))k[J]=qe,k[Ie]=W,J=Ie;else break e}}return H}function i(k,H){var W=k.sortIndex-H.sortIndex;return W!==0?W:k.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,v=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var H=t(h);H!==null;){if(H.callback===null)n(h);else if(H.startTime<=k)n(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=t(h)}}function T(k){if(M=!1,b(k),!v)if(t(u)!==null)v=!0,oe(P);else{var H=t(h);H!==null&&$(T,H.startTime-k)}}function P(k,H){v=!1,M&&(M=!1,x(R),R=-1),g=!0;var W=m;try{for(b(H),p=t(u);p!==null&&(!(p.expirationTime>H)||k&&!D());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var pe=J(p.expirationTime<=H);H=r.unstable_now(),typeof pe=="function"?p.callback=pe:p===t(u)&&n(u),b(H)}else n(u);p=t(u)}if(p!==null)var Me=!0;else{var ae=t(h);ae!==null&&$(T,ae.startTime-H),Me=!1}return Me}finally{p=null,m=W,g=!1}}var C=!1,E=null,R=-1,O=5,N=-1;function D(){return!(r.unstable_now()-N<O)}function X(){if(E!==null){var k=r.unstable_now();N=k;var H=!0;try{H=E(!0,k)}finally{H?K():(C=!1,E=null)}}else C=!1}var K;if(typeof w=="function")K=function(){w(X)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Q=V.port2;V.port1.onmessage=X,K=function(){Q.postMessage(null)}}else K=function(){y(X,0)};function oe(k){E=k,C||(C=!0,K())}function $(k,H){R=y(function(){k(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){v||g||(v=!0,oe(P))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(k){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var W=m;m=H;try{return k()}finally{m=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,H){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=m;m=k;try{return H()}finally{m=W}},r.unstable_scheduleCallback=function(k,H,W){var J=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,k){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=W+pe,k={id:f++,callback:H,priorityLevel:k,startTime:W,expirationTime:pe,sortIndex:-1},W>J?(k.sortIndex=W,e(h,k),t(u)===null&&k===t(h)&&(M?(x(R),R=-1):M=!0,$(T,W-J))):(k.sortIndex=pe,e(u,k),v||g||(v=!0,oe(P))),k},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(k){var H=m;return function(){var W=m;m=H;try{return k.apply(this,arguments)}finally{m=W}}}})(wy);My.exports=wy;var j_=My.exports;const Em={},DR=r=>void Object.assign(Em,r);function UR(r,e){function t(f,{args:p=[],attach:m,...g},v){let M=`${f[0].toUpperCase()}${f.slice(1)}`,y;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const x=g.object;y=Oo(x,{type:f,root:v,attach:m,primitive:!0})}else{const x=Em[M];if(!x)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");y=Oo(new x(...p),{type:f,root:v,attach:m,memoizedProps:{args:p}})}return y.__r3f.attach===void 0&&(y.isBufferGeometry?y.__r3f.attach="geometry":y.isMaterial&&(y.__r3f.attach="material")),M!=="inject"&&$d(y,g),y}function n(f,p){let m=!1;if(p){var g,v;(g=p.__r3f)!=null&&g.attach?Qd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(v=f.__r3f)==null||v.objects.push(p),p.__r3f||Oo(p,{}),p.__r3f.parent=f,Tp(p),Fo(p)}}function i(f,p,m){let g=!1;if(p){var v,M;if((v=p.__r3f)!=null&&v.attach)Qd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const y=f.children.filter(w=>w!==p),x=y.indexOf(m);f.children=[...y.slice(0,x),p,...y.slice(x)],g=!0}g||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||Oo(p,{}),p.__r3f.parent=f,Tp(p),Fo(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>o(p,g,m))}function o(f,p,m){if(p){var g,v,M;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(T=>T!==p)),(v=p.__r3f)!=null&&v.attach)$_(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var y;f.remove(p),(y=p.__r3f)!=null&&y.root&&VR(Au(p),p)}const w=(M=p.__r3f)==null?void 0:M.primitive,b=!w&&(m===void 0?p.dispose!==null:m);if(!w){var x;s((x=p.__r3f)==null?void 0:x.objects,p,b),s(p.children,p,b)}if(delete p.__r3f,b&&p.dispose&&p.type!=="Scene"){const T=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?j_.unstable_scheduleCallback(j_.unstable_IdlePriority,T):T()}Fo(f)}}function c(f,p,m,g){var v;const M=(v=f.__r3f)==null?void 0:v.parent;if(!M)return;const y=t(p,m,f.__r3f.root);if(f.children){for(const x of f.children)x.__r3f&&n(y,x);f.children=f.children.filter(x=>!x.__r3f)}f.__r3f.objects.forEach(x=>n(y,x)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||o(M,f),y.parent&&(y.__r3f.autoRemovedBeforeAppend=!0),n(M,y),y.raycast&&y.__r3f.eventCount&&Au(y).getState().internal.interaction.push(y),[g,g.alternate].forEach(x=>{x!==null&&(x.stateNode=y,x.ref&&(typeof x.ref=="function"?x.ref(y):x.ref.current=y))})}const u=()=>{};return{reconciler:NR({createInstance:t,removeChild:o,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&o(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var v;if(((v=f==null?void 0:f.__r3f)!=null?v:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:y=[],children:x,...w}=g,{args:b=[],children:T,...P}=m;if(!Array.isArray(y))throw new Error("R3F: the args prop must be an array!");if(y.some((E,R)=>E!==b[R]))return[!0];const C=Py(f,w,P,!0);return C.changes.length?[!1,C]:null}},commitUpdate(f,[p,m],g,v,M,y){p?c(f,g,M,y):$d(f,m)},commitMount(f,p,m,g){var v;const M=(v=f.__r3f)!=null?v:{};f.raycast&&M.handlers&&M.eventCount&&Au(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>Oo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&$_(g,f,m),f.isObject3D&&(f.visible=!1),Fo(f)},unhideInstance(f,p){var m;const{attach:g,parent:v}=(m=f.__r3f)!=null?m:{};g&&v&&Qd(v,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),Fo(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Vo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Kt.fun(performance.now)?performance.now:Kt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Kt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Kt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:$d}}var Z_,J_;const Kd=r=>"colorSpace"in r||"outputColorSpace"in r,Ey=()=>{var r;return(r=Em.ColorManagement)!=null?r:null},by=r=>r&&r.isOrthographicCamera,OR=r=>r&&r.hasOwnProperty("current"),Cl=typeof window<"u"&&((Z_=window.document)!=null&&Z_.createElement||((J_=window.navigator)==null?void 0:J_.product)==="ReactNative")?xe.useLayoutEffect:xe.useEffect;function Ty(r){const e=xe.useRef(r);return Cl(()=>void(e.current=r),[r]),e}function FR({set:r}){return Cl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Ay extends xe.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Ay.getDerivedStateFromError=()=>({error:!0});const Cy="__default",K_=new Map,BR=r=>r&&!!r.memoized&&!!r.changes;function Ry(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const Oa=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function Au(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Kt={obj:r=>r===Object(r)&&!Kt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Kt.str(r)||Kt.num(r)||Kt.boo(r))return r===e;const s=Kt.obj(r);if(s&&n==="reference")return r===e;const o=Kt.arr(r);if(o&&t==="reference")return r===e;if((o||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Kt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Kt.und(c)){if(o&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function zR(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function Oo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function bp(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,o)=>s[o],r),{target:t,key:i}}else return{target:t,key:e}}const Q_=/-\d+$/;function Qd(r,e,t){if(Kt.str(t)){if(Q_.test(t)){const s=t.replace(Q_,""),{target:o,key:c}=bp(r,s);Array.isArray(o[c])||(o[c]=[])}const{target:n,key:i}=bp(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function $_(r,e,t){var n,i;if(Kt.str(t)){const{target:s,key:o}=bp(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[o]:s[o]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Py(r,{children:e,key:t,ref:n,...i},{children:s,key:o,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const v=Object.keys(u);for(let M=0;M<v.length;M++)i.hasOwnProperty(v[M])||p.unshift([v[M],Cy+"remove"])}p.forEach(([v,M])=>{var y;if((y=r.__r3f)!=null&&y.primitive&&v==="object"||Kt.equ(M,u[v]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(v))return m.push([v,M,!0,[]]);let x=[];v.includes("-")&&(x=v.split("-")),m.push([v,M,!1,x]);for(const w in i){const b=i[w];w.startsWith(`${v}-`)&&m.push([w,b,!1,w.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function $d(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:c}=BR(e)?e:Py(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=o);for(let m=0;m<c.length;m++){let[g,v,M,y]=c[m];if(Kd(r)){const T="srgb",P="srgb-linear";g==="encoding"?(g="colorSpace",v=v===3001?T:P):g==="outputEncoding"&&(g="outputColorSpace",v=v===3001?T:P)}let x=r,w=x[g];if(y.length&&(w=y.reduce((b,T)=>b[T],r),!(w&&w.set))){const[b,...T]=y.reverse();x=T.reverse().reduce((P,C)=>P[C],r),g=b}if(v===Cy+"remove")if(x.constructor){let b=K_.get(x.constructor);b||(b=new x.constructor,K_.set(x.constructor,b)),v=b[g]}else v=0;if(M&&n)v?n.handlers[g]=v:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(w&&w.set&&(w.copy||w instanceof Os)){if(Array.isArray(v))w.fromArray?w.fromArray(v):w.set(...v);else if(w.copy&&v&&v.constructor&&w.constructor===v.constructor)w.copy(v);else if(v!==void 0){var h;const b=(h=w)==null?void 0:h.isColor;!b&&w.setScalar?w.setScalar(v):w instanceof Os&&v instanceof Os?w.mask=v.mask:w.set(v),!Ey()&&s&&!s.linear&&b&&w.convertSRGBToLinear()}}else{var f;if(x[g]=v,(f=x[g])!=null&&f.isTexture&&x[g].format===Zn&&x[g].type===qn&&s){const b=x[g];Kd(b)&&Kd(s.gl)?b.colorSpace=s.gl.outputColorSpace:b.encoding=s.gl.outputEncoding}}Fo(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=Au(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&Tp(r),r}function Fo(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function Tp(r){r.onUpdate==null||r.onUpdate(r)}function kR(r,e){r.manual||(by(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function gu(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function HR(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Vo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Vo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Vo.ContinuousEventPriority;default:return Vo.DefaultEventPriority}}function Iy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function VR(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Iy(t.capturedMap,e,n,i)})}function GR(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let x=0;x<g.length;x++){const w=Oa(g[x]);w&&(w.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function v(x){const w=Oa(x);if(!w||!w.events.enabled||w.raycaster.camera===null)return[];if(w.raycaster.camera===void 0){var b;w.events.compute==null||w.events.compute(u,w,(b=w.previousRoot)==null?void 0:b.getState()),w.raycaster.camera===void 0&&(w.raycaster.camera=null)}return w.raycaster.camera?w.raycaster.intersectObject(x,!0):[]}let M=g.flatMap(v).sort((x,w)=>{const b=Oa(x.object),T=Oa(w.object);return!b||!T?x.distance-w.distance:T.events.priority-b.events.priority||x.distance-w.distance}).filter(x=>{const w=gu(x);return p.has(w)?!1:(p.add(w),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const x of M){let w=x.object;for(;w;){var y;(y=w.__r3f)!=null&&y.eventCount&&m.push({...x,eventObject:w}),w=w.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let x of f.internal.capturedMap.get(u.pointerId).values())p.has(gu(x.intersection))||m.push(x.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const v of u){const M=Oa(v.object)||m,{raycaster:y,pointer:x,camera:w,internal:b}=M,T=new U(x.x,x.y,0).unproject(w),P=N=>{var D,X;return(D=(X=b.capturedMap.get(N))==null?void 0:X.has(v.eventObject))!=null?D:!1},C=N=>{const D={intersection:v,target:h.target};b.capturedMap.has(N)?b.capturedMap.get(N).set(v.eventObject,D):b.capturedMap.set(N,new Map([[v.eventObject,D]])),h.target.setPointerCapture(N)},E=N=>{const D=b.capturedMap.get(N);D&&Iy(b.capturedMap,v.eventObject,D,N)};let R={};for(let N in h){let D=h[N];typeof D!="function"&&(R[N]=D)}let O={...v,...R,pointer:x,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:T,ray:y.ray,camera:w,stopPropagation(){const N="pointerId"in h&&b.capturedMap.get(h.pointerId);if((!N||N.has(v.eventObject))&&(O.stopped=g.stopped=!0,b.hovered.size&&Array.from(b.hovered.values()).find(D=>D.eventObject===v.eventObject))){const D=u.slice(0,u.indexOf(v));s([...D,v])}},target:{hasPointerCapture:P,setPointerCapture:C,releasePointerCapture:E},currentTarget:{hasPointerCapture:P,setPointerCapture:C,releasePointerCapture:E},nativeEvent:h};if(p(O),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(gu(f)),m!=null&&m.eventCount){const v={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(v),g.onPointerLeave==null||g.onPointerLeave(v)}}}function o(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",v=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",y=n(f,g?t:void 0),x=v?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=y.map(b=>b.eventObject)),v&&!y.length&&x<=2&&(o(f,m.interaction),p&&p(f)),g&&s(y);function w(b){const T=b.eventObject,P=T.__r3f,C=P==null?void 0:P.handlers;if(P!=null&&P.eventCount)if(g){if(C.onPointerOver||C.onPointerEnter||C.onPointerOut||C.onPointerLeave){const E=gu(b),R=m.hovered.get(E);R?R.stopped&&b.stopPropagation():(m.hovered.set(E,b),C.onPointerOver==null||C.onPointerOver(b),C.onPointerEnter==null||C.onPointerEnter(b))}C.onPointerMove==null||C.onPointerMove(b)}else{const E=C[u];E?(!v||m.initialHits.includes(T))&&(o(f,m.interaction.filter(R=>!m.initialHits.includes(R))),E(b)):v&&m.initialHits.includes(T)&&o(f,m.interaction.filter(R=>!m.initialHits.includes(R)))}}i(y,f,x,w)}}return{handlePointer:c}}const Ly=r=>!!(r!=null&&r.render),Ny=xe.createContext(null),WR=(r,e)=>{const t=CR((c,u)=>{const h=new U,f=new U,p=new U;function m(x=u().camera,w=f,b=u().size){const{width:T,height:P,top:C,left:E}=b,R=T/P;w.isVector3?p.copy(w):p.set(...w);const O=x.getWorldPosition(h).distanceTo(p);if(by(x))return{width:T/x.zoom,height:P/x.zoom,top:C,left:E,factor:1,distance:O,aspect:R};{const N=x.fov*Math.PI/180,D=2*Math.tan(N/2)*O,X=D*(T/P);return{width:X,height:D,top:C,left:E,factor:T/X,distance:O,aspect:R}}}let g;const v=x=>c(w=>({performance:{...w.performance,current:x}})),M=new _e;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(x=1)=>r(u(),x),advance:(x,w)=>e(x,w,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new ny,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const x=u();g&&clearTimeout(g),x.performance.current!==x.performance.min&&v(x.performance.min),g=setTimeout(()=>v(u().performance.max),x.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:x=>c(w=>({...w,events:{...w.events,...x}})),setSize:(x,w,b,T,P)=>{const C=u().camera,E={width:x,height:w,top:T||0,left:P||0,updateStyle:b};c(R=>({size:E,viewport:{...R.viewport,...m(C,f,E)}}))},setDpr:x=>c(w=>{const b=Ry(x);return{viewport:{...w.viewport,dpr:b,initialDpr:w.viewport.initialDpr||b}}}),setFrameloop:(x="always")=>{const w=u().clock;w.stop(),w.elapsedTime=0,x!=="never"&&(w.start(),w.elapsedTime=0),c(()=>({frameloop:x}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:xe.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(x,w,b)=>{const T=u().internal;return T.priority=T.priority+(w>0?1:0),T.subscribers.push({ref:x,priority:w,store:b}),T.subscribers=T.subscribers.sort((P,C)=>P.priority-C.priority),()=>{const P=u().internal;P!=null&&P.subscribers&&(P.priority=P.priority-(w>0?1:0),P.subscribers=P.subscribers.filter(C=>C.ref!==x))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,o=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,kR(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==o&&(o=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let _u,XR=new Set,YR=new Set,qR=new Set;function ep(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Fa(r,e){switch(r){case"before":return ep(XR,e);case"after":return ep(YR,e);case"tail":return ep(qR,e)}}let tp,np;function ip(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),tp=e.internal.subscribers,_u=0;_u<tp.length;_u++)np=tp[_u],np.ref.current(np.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function jR(r){let e=!1,t=!1,n,i,s;function o(h){i=requestAnimationFrame(o),e=!0,n=0,Fa("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=ip(h,s))}if(t=!1,Fa("after",h),n===0)return Fa("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(o)))}function u(h,f=!0,p,m){if(f&&Fa("before",h),p)ip(h,p,m);else for(const g of r.values())ip(h,g.store.getState());f&&Fa("after",h)}return{loop:o,invalidate:c,advance:u}}function Dy(){const r=xe.useContext(Ny);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function lr(r=t=>t,e){return Dy()(r,e)}function Uy(r,e=0){const t=Dy(),n=t.getState().internal.subscribe,i=Ty(r);return Cl(()=>n(i,e,t),[e,n,t]),null}const Qo=new Map,{invalidate:ev,advance:tv}=jR(Qo),{reconciler:xh,applyProps:Do}=UR(Qo,HR),Uo={objects:"shallow",strict:!1},ZR=(r,e)=>{const t=typeof r=="function"?r(e):r;return Ly(t)?t:new xy({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function JR(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:o,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:o,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:o}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function KR(r){const e=Qo.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||WR(ev,tv),o=t||xh.createContainer(s,Vo.ConcurrentRoot,null,!1,null,"",i,null);e||Qo.set(r,{fiber:o,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:v,onCreated:M,shadows:y=!1,linear:x=!1,flat:w=!1,legacy:b=!1,orthographic:T=!1,frameloop:P="always",dpr:C=[1,2],performance:E,raycaster:R,camera:O,onPointerMissed:N}=f,D=s.getState(),X=D.gl;D.gl||D.set({gl:X=ZR(p,r)});let K=D.raycaster;K||D.set({raycaster:K=new ty});const{params:V,...Q}=R||{};if(Kt.equ(Q,K,Uo)||Do(K,{...Q}),Kt.equ(V,K.params,Uo)||Do(K,{params:{...K.params,...V}}),!D.camera||D.camera===h&&!Kt.equ(h,O,Uo)){h=O;const W=O instanceof Tl,J=W?O:T?new dr(0,0,0,0,.1,1e3):new ln(75,0,.1,1e3);W||(J.position.z=5,O&&(Do(J,O),("aspect"in O||"left"in O||"right"in O||"bottom"in O||"top"in O)&&(J.manual=!0,J.updateProjectionMatrix())),!D.camera&&!(O!=null&&O.rotation)&&J.lookAt(0,0,0)),D.set({camera:J}),K.camera=J}if(!D.scene){let W;g!=null&&g.isScene?W=g:(W=new Zp,g&&Do(W,g)),D.set({scene:Oo(W)})}if(!D.xr){var oe;const W=(Me,ae)=>{const ye=s.getState();ye.frameloop!=="never"&&tv(Me,!0,ye,ae)},J=()=>{const Me=s.getState();Me.gl.xr.enabled=Me.gl.xr.isPresenting,Me.gl.xr.setAnimationLoop(Me.gl.xr.isPresenting?W:null),Me.gl.xr.isPresenting||ev(Me)},pe={connect(){const Me=s.getState().gl;Me.xr.addEventListener("sessionstart",J),Me.xr.addEventListener("sessionend",J)},disconnect(){const Me=s.getState().gl;Me.xr.removeEventListener("sessionstart",J),Me.xr.removeEventListener("sessionend",J)}};typeof((oe=X.xr)==null?void 0:oe.addEventListener)=="function"&&pe.connect(),D.set({xr:pe})}if(X.shadowMap){const W=X.shadowMap.enabled,J=X.shadowMap.type;if(X.shadowMap.enabled=!!y,Kt.boo(y))X.shadowMap.type=Ha;else if(Kt.str(y)){var $;const pe={basic:yv,percentage:Go,soft:Ha,variance:Ps};X.shadowMap.type=($=pe[y])!=null?$:Ha}else Kt.obj(y)&&Object.assign(X.shadowMap,y);(W!==X.shadowMap.enabled||J!==X.shadowMap.type)&&(X.shadowMap.needsUpdate=!0)}const k=Ey();k&&("enabled"in k?k.enabled=!b:"legacyMode"in k&&(k.legacyMode=b)),u||Do(X,{outputEncoding:x?3e3:3001,toneMapping:w?Wi:Sh}),D.legacy!==b&&D.set(()=>({legacy:b})),D.linear!==x&&D.set(()=>({linear:x})),D.flat!==w&&D.set(()=>({flat:w})),p&&!Kt.fun(p)&&!Ly(p)&&!Kt.equ(p,X,Uo)&&Do(X,p),v&&!D.events.handlers&&D.set({events:v(s)});const H=JR(r,m);return Kt.equ(H,D.size,Uo)||D.setSize(H.width,H.height,H.updateStyle,H.top,H.left),C&&D.viewport.dpr!==Ry(C)&&D.setDpr(C),D.frameloop!==P&&D.setFrameloop(P),D.onPointerMissed||D.set({onPointerMissed:N}),E&&!Kt.equ(E,D.performance,Uo)&&D.set(W=>({performance:{...W.performance,...E}})),c=M,u=!0,this},render(f){return u||this.configure(),xh.updateContainer(ve.jsx(QR,{store:s,children:f,onCreated:c,rootElement:r}),o,null,()=>{}),s},unmount(){Oy(r)}}}function QR({store:r,children:e,onCreated:t,rootElement:n}){return Cl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),ve.jsx(Ny.Provider,{value:r,children:e})}function Oy(r,e){const t=Qo.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),xh.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,o,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),zR(i),Qo.delete(r)}catch{}},500)})}}xh.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:xe.version});const rp={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function $R(r){const{handlePointer:e}=GR(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(rp).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(o=>({events:{...o.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([o,c])=>{const[u,h]=rp[o];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,o])=>{if(n&&n.connected instanceof HTMLElement){const[c]=rp[s];n.connected.removeEventListener(c,o)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function nv(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function eP({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,o]=xe.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=xe.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=xe.useRef(!1);xe.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=xe.useMemo(()=>{const x=()=>{if(!c.current.element)return;const{left:w,top:b,width:T,height:P,bottom:C,right:E,x:R,y:O}=c.current.element.getBoundingClientRect(),N={left:w,top:b,width:T,height:P,bottom:C,right:E,x:R,y:O};c.current.element instanceof HTMLElement&&n&&(N.height=c.current.element.offsetHeight,N.width=c.current.element.offsetWidth),Object.freeze(N),f.current&&!rP(c.current.lastBounds,N)&&o(c.current.lastBounds=N)};return[x,h?nv(x,h):x,u?nv(x,u):x]},[o,n,u,h]);function v(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(x=>x.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(x=>x.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const y=x=>{!x||x===c.current.element||(v(),c.current.element=x,c.current.scrollContainers=Fy(x),M())};return nP(g,!!e),tP(m),xe.useEffect(()=>{v(),M()},[e,g,m]),xe.useEffect(()=>v,[]),[y,s,p]}function tP(r){xe.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function nP(r,e){xe.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Fy(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Fy(r.parentElement)]}const iP=["x","y","top","bottom","left","right","width","height"],rP=(r,e)=>iP.every(t=>r[t]===e[t]);var sP=Object.defineProperty,oP=Object.defineProperties,aP=Object.getOwnPropertyDescriptors,iv=Object.getOwnPropertySymbols,lP=Object.prototype.hasOwnProperty,cP=Object.prototype.propertyIsEnumerable,rv=(r,e,t)=>e in r?sP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,sv=(r,e)=>{for(var t in e||(e={}))lP.call(e,t)&&rv(r,t,e[t]);if(iv)for(var t of iv(e))cP.call(e,t)&&rv(r,t,e[t]);return r},uP=(r,e)=>oP(r,aP(e)),ov,av;typeof window<"u"&&((ov=window.document)!=null&&ov.createElement||((av=window.navigator)==null?void 0:av.product)==="ReactNative")?xe.useLayoutEffect:xe.useEffect;function By(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=By(n,e,t);if(i)return i;n=n.sibling}}function zy(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const lv=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=lv;return}return lv.apply(this,arguments)};const bm=zy(xe.createContext(null));class ky extends xe.Component{render(){return xe.createElement(bm.Provider,{value:this._reactInternals},this.props.children)}}function hP(){const r=xe.useContext(bm);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=xe.useId();return xe.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=By(n,!1,s=>{let o=s.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(i)return i}},[r,e])}function fP(){const r=hP(),[e]=xe.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==bm&&!e.has(i)&&e.set(i,xe.useContext(zy(i)))}t=t.return}return e}function dP(){const r=fP();return xe.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>xe.createElement(e,null,xe.createElement(t.Provider,uP(sv({},n),{value:r.get(t)}))),e=>xe.createElement(ky,sv({},e))),[r])}const pP=xe.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:o=$R,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:v,dpr:M,performance:y,raycaster:x,camera:w,scene:b,onPointerMissed:T,onCreated:P,...C},E){xe.useMemo(()=>DR(bR),[]);const R=dP(),[O,N]=eP({scroll:!0,debounce:{scroll:50,resize:0},...n}),D=xe.useRef(null),X=xe.useRef(null);xe.useImperativeHandle(E,()=>D.current);const K=Ty(T),[V,Q]=xe.useState(!1),[oe,$]=xe.useState(!1);if(V)throw V;if(oe)throw oe;const k=xe.useRef(null);Cl(()=>{const W=D.current;N.width>0&&N.height>0&&W&&(k.current||(k.current=KR(W)),k.current.configure({gl:s,events:o,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:v,dpr:M,performance:y,raycaster:x,camera:w,scene:b,size:N,onPointerMissed:(...J)=>K.current==null?void 0:K.current(...J),onCreated:J=>{J.events.connect==null||J.events.connect(c?OR(c)?c.current:c:X.current),u&&J.setEvents({compute:(pe,Me)=>{const ae=pe[u+"X"],ye=pe[u+"Y"];Me.pointer.set(ae/Me.size.width*2-1,-(ye/Me.size.height)*2+1),Me.raycaster.setFromCamera(Me.pointer,Me.camera)}}),P==null||P(J)}}),k.current.render(ve.jsx(R,{children:ve.jsx(Ay,{set:$,children:ve.jsx(xe.Suspense,{fallback:ve.jsx(FR,{set:Q}),children:e??null})})})))}),xe.useEffect(()=>{const W=D.current;if(W)return()=>Oy(W)},[]);const H=c?"none":"auto";return ve.jsx("div",{ref:X,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:H,...i},...C,children:ve.jsx("div",{ref:O,style:{width:"100%",height:"100%"},children:ve.jsx("canvas",{ref:D,style:{display:"block"},children:t})})})}),mP=xe.forwardRef(function(e,t){return ve.jsx(ky,{children:ve.jsx(pP,{...e,ref:t})})}),Rl=new U,Tm=new U,gP=new U,cv=new _e;function _P(r,e,t){const n=Rl.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]}function vP(r,e){const t=Rl.setFromMatrixPosition(r.matrixWorld),n=Tm.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(gP);return i.angleTo(s)>Math.PI/2}function xP(r,e,t,n){const i=Rl.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),cv.set(s.x,s.y),t.setFromCamera(cv,e);const o=t.intersectObjects(n,!0);if(o.length){const c=o[0].distance;return i.distanceTo(t.ray.origin)<c}return!0}function yP(r,e){if(e instanceof dr)return e.zoom;if(e instanceof ln){const t=Rl.setFromMatrixPosition(r.matrixWorld),n=Tm.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function SP(r,e,t){if(e instanceof ln||e instanceof dr){const n=Rl.setFromMatrixPosition(r.matrixWorld),i=Tm.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),o=(t[1]-t[0])/(e.far-e.near),c=t[1]-o*e.far;return Math.round(o*s+c)}}const Ap=r=>Math.abs(r)<1e-10?0:r;function Hy(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=Ap(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const MP=(r=>e=>Hy(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),wP=(r=>(e,t)=>Hy(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function EP(r){return r&&typeof r=="object"&&"current"in r}const bP=xe.forwardRef(({children:r,eps:e=.001,style:t,className:n,prepend:i,center:s,fullscreen:o,portal:c,distanceFactor:u,sprite:h=!1,transform:f=!1,occlude:p,onOcclude:m,castShadow:g,receiveShadow:v,material:M,geometry:y,zIndexRange:x=[16777271,0],calculatePosition:w=_P,as:b="div",wrapperClass:T,pointerEvents:P="auto",...C},E)=>{const{gl:R,camera:O,scene:N,size:D,raycaster:X,events:K,viewport:V}=lr(),[Q]=xe.useState(()=>document.createElement(b)),oe=xe.useRef(),$=xe.useRef(null),k=xe.useRef(0),H=xe.useRef([0,0]),W=xe.useRef(null),J=xe.useRef(null),pe=(c==null?void 0:c.current)||K.connected||R.domElement.parentNode,Me=xe.useRef(null),ae=xe.useRef(!1),ye=xe.useMemo(()=>p&&p!=="blending"||Array.isArray(p)&&p.length&&EP(p[0]),[p]);xe.useLayoutEffect(()=>{const vt=R.domElement;p&&p==="blending"?(vt.style.zIndex=`${Math.floor(x[0]/2)}`,vt.style.position="absolute",vt.style.pointerEvents="none"):(vt.style.zIndex=null,vt.style.position=null,vt.style.pointerEvents=null)},[p]),xe.useLayoutEffect(()=>{if($.current){const vt=oe.current=NS(Q);if(N.updateMatrixWorld(),f)Q.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const Pe=w($.current,O,D);Q.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${Pe[0]}px,${Pe[1]}px,0);transform-origin:0 0;`}return pe&&(i?pe.prepend(Q):pe.appendChild(Q)),()=>{pe&&pe.removeChild(Q),vt.unmount()}}},[pe,f]),xe.useLayoutEffect(()=>{T&&(Q.className=T)},[T]);const Ie=xe.useMemo(()=>f?{position:"absolute",top:0,left:0,width:D.width,height:D.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...o&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...t},[t,s,o,D,f]),qe=xe.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);xe.useLayoutEffect(()=>{if(ae.current=!1,f){var vt;(vt=oe.current)==null||vt.render(xe.createElement("div",{ref:W,style:Ie},xe.createElement("div",{ref:J,style:qe},xe.createElement("div",{ref:E,className:n,style:t,children:r}))))}else{var Pe;(Pe=oe.current)==null||Pe.render(xe.createElement("div",{ref:E,style:Ie,className:n,children:r}))}});const Ue=xe.useRef(!0);Uy(vt=>{if($.current){O.updateMatrixWorld(),$.current.updateWorldMatrix(!0,!1);const Pe=f?H.current:w($.current,O,D);if(f||Math.abs(k.current-O.zoom)>e||Math.abs(H.current[0]-Pe[0])>e||Math.abs(H.current[1]-Pe[1])>e){const lt=vP($.current,O);let tt=!1;ye&&(Array.isArray(p)?tt=p.map(Be=>Be.current):p!=="blending"&&(tt=[N]));const me=Ue.current;if(tt){const Be=xP($.current,O,X,tt);Ue.current=Be&&!lt}else Ue.current=!lt;me!==Ue.current&&(m?m(!Ue.current):Q.style.display=Ue.current?"block":"none");const Re=Math.floor(x[0]/2),Le=p?ye?[x[0],Re]:[Re-1,0]:x;if(Q.style.zIndex=`${SP($.current,O,Le)}`,f){const[Be,Oe]=[D.width/2,D.height/2],ct=O.projectionMatrix.elements[5]*Oe,{isOrthographicCamera:Ze,top:Mt,left:wt,bottom:Rt,right:q}=O,Zt=MP(O.matrixWorldInverse),yt=Ze?`scale(${ct})translate(${Ap(-(q+wt)/2)}px,${Ap((Mt+Rt)/2)}px)`:`translateZ(${ct}px)`;let Pt=$.current.matrixWorld;h&&(Pt=O.matrixWorldInverse.clone().transpose().copyPosition(Pt).scale($.current.scale),Pt.elements[3]=Pt.elements[7]=Pt.elements[11]=0,Pt.elements[15]=1),Q.style.width=D.width+"px",Q.style.height=D.height+"px",Q.style.perspective=Ze?"":`${ct}px`,W.current&&J.current&&(W.current.style.transform=`${yt}${Zt}translate(${Be}px,${Oe}px)`,J.current.style.transform=wP(Pt,1/((u||10)/400)))}else{const Be=u===void 0?1:yP($.current,O)*u;Q.style.transform=`translate3d(${Pe[0]}px,${Pe[1]}px,0) scale(${Be})`}H.current=Pe,k.current=O.zoom}}if(!ye&&Me.current&&!ae.current)if(f){if(W.current){const Pe=W.current.children[0];if(Pe!=null&&Pe.clientWidth&&Pe!=null&&Pe.clientHeight){const{isOrthographicCamera:lt}=O;if(lt||y)C.scale&&(Array.isArray(C.scale)?C.scale instanceof U?Me.current.scale.copy(C.scale.clone().divideScalar(1)):Me.current.scale.set(1/C.scale[0],1/C.scale[1],1/C.scale[2]):Me.current.scale.setScalar(1/C.scale));else{const tt=(u||10)/400,me=Pe.clientWidth*tt,Re=Pe.clientHeight*tt;Me.current.scale.set(me,Re,1)}ae.current=!0}}}else{const Pe=Q.children[0];if(Pe!=null&&Pe.clientWidth&&Pe!=null&&Pe.clientHeight){const lt=1/V.factor,tt=Pe.clientWidth*lt,me=Pe.clientHeight*lt;Me.current.scale.set(tt,me,1),ae.current=!0}Me.current.lookAt(vt.camera.position)}});const nt=xe.useMemo(()=>({vertexShader:f?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[f]);return xe.createElement("group",Cu({},C,{ref:$}),p&&!ye&&xe.createElement("mesh",{castShadow:g,receiveShadow:v,ref:Me},y||xe.createElement("planeGeometry",null),M||xe.createElement("shaderMaterial",{side:si,vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader})))}),Vy=parseInt(gl.replace(/\D+/g,"")),Gy=Vy>=125?"uv1":"uv2";var TP=Object.defineProperty,AP=(r,e,t)=>e in r?TP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,CP=(r,e,t)=>(AP(r,e+"",t),t);class RP{constructor(){CP(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}var PP=Object.defineProperty,IP=(r,e,t)=>e in r?PP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ft=(r,e,t)=>(IP(r,typeof e!="symbol"?e+"":e,t),t);const vu=new Ws,uv=new cr,LP=Math.cos(70*(Math.PI/180)),hv=(r,e)=>(r%e+e)%e;let NP=class extends RP{constructor(e,t){super(),ft(this,"object"),ft(this,"domElement"),ft(this,"enabled",!0),ft(this,"target",new U),ft(this,"minDistance",0),ft(this,"maxDistance",1/0),ft(this,"minZoom",0),ft(this,"maxZoom",1/0),ft(this,"minPolarAngle",0),ft(this,"maxPolarAngle",Math.PI),ft(this,"minAzimuthAngle",-1/0),ft(this,"maxAzimuthAngle",1/0),ft(this,"enableDamping",!1),ft(this,"dampingFactor",.05),ft(this,"enableZoom",!0),ft(this,"zoomSpeed",1),ft(this,"enableRotate",!0),ft(this,"rotateSpeed",1),ft(this,"enablePan",!0),ft(this,"panSpeed",1),ft(this,"screenSpacePanning",!0),ft(this,"keyPanSpeed",7),ft(this,"zoomToCursor",!1),ft(this,"autoRotate",!1),ft(this,"autoRotateSpeed",2),ft(this,"reverseOrbit",!1),ft(this,"reverseHorizontalOrbit",!1),ft(this,"reverseVerticalOrbit",!1),ft(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ft(this,"mouseButtons",{LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN}),ft(this,"touches",{ONE:As.ROTATE,TWO:As.DOLLY_PAN}),ft(this,"target0"),ft(this,"position0"),ft(this,"zoom0"),ft(this,"_domElementKeyEvents",null),ft(this,"getPolarAngle"),ft(this,"getAzimuthalAngle"),ft(this,"setPolarAngle"),ft(this,"setAzimuthalAngle"),ft(this,"getDistance"),ft(this,"getZoomScale"),ft(this,"listenToKeyEvents"),ft(this,"stopListenToKeyEvents"),ft(this,"saveState"),ft(this,"reset"),ft(this,"update"),ft(this,"connect"),ft(this,"dispose"),ft(this,"dollyIn"),ft(this,"dollyOut"),ft(this,"getScale"),ft(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=F=>{let re=hv(F,2*Math.PI),fe=f.phi;fe<0&&(fe+=2*Math.PI),re<0&&(re+=2*Math.PI);let se=Math.abs(re-fe);2*Math.PI-se<se&&(re<fe?re+=2*Math.PI:fe+=2*Math.PI),p.phi=re-fe,n.update()},this.setAzimuthalAngle=F=>{let re=hv(F,2*Math.PI),fe=f.theta;fe<0&&(fe+=2*Math.PI),re<0&&(re+=2*Math.PI);let se=Math.abs(re-fe);2*Math.PI-se<se&&(re<fe?re+=2*Math.PI:fe+=2*Math.PI),p.theta=re-fe,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=F=>{F.addEventListener("keydown",Fe),this._domElementKeyEvents=F},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Fe),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),u=c.NONE},this.update=(()=>{const F=new U,re=new U(0,1,0),fe=new Rn().setFromUnitVectors(e.up,re),se=fe.clone().invert(),ce=new U,Ae=new Rn,G=2*Math.PI;return function(){const ue=n.object.position;fe.setFromUnitVectors(e.up,re),se.copy(fe).invert(),F.copy(ue).sub(n.target),F.applyQuaternion(fe),f.setFromVector3(F),n.autoRotate&&u===c.NONE&&V(X()),n.enableDamping?(f.theta+=p.theta*n.dampingFactor,f.phi+=p.phi*n.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let Te=n.minAzimuthAngle,we=n.maxAzimuthAngle;isFinite(Te)&&isFinite(we)&&(Te<-Math.PI?Te+=G:Te>Math.PI&&(Te-=G),we<-Math.PI?we+=G:we>Math.PI&&(we-=G),Te<=we?f.theta=Math.max(Te,Math.min(we,f.theta)):f.theta=f.theta>(Te+we)/2?Math.max(Te,f.theta):Math.min(we,f.theta)),f.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,f.phi)),f.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.zoomToCursor&&O||n.object.isOrthographicCamera?f.radius=Me(f.radius):f.radius=Me(f.radius*m),F.setFromSpherical(f),F.applyQuaternion(se),ue.copy(n.target).add(F),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Ce=!1;if(n.zoomToCursor&&O){let Ke=null;if(n.object instanceof ln&&n.object.isPerspectiveCamera){const pt=F.length();Ke=Me(pt*m);const Ee=pt-Ke;n.object.position.addScaledVector(E,Ee),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const pt=new U(R.x,R.y,0);pt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix(),Ce=!0;const Ee=new U(R.x,R.y,0);Ee.unproject(n.object),n.object.position.sub(Ee).add(pt),n.object.updateMatrixWorld(),Ke=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ke!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position):(vu.origin.copy(n.object.position),vu.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(vu.direction))<LP?e.lookAt(n.target):(uv.setFromNormalAndCoplanarPoint(n.object.up,n.target),vu.intersectPlane(uv,n.target))))}else n.object instanceof dr&&n.object.isOrthographicCamera&&(Ce=m!==1,Ce&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix()));return m=1,O=!1,Ce||ce.distanceToSquared(n.object.position)>h||8*(1-Ae.dot(n.object.quaternion))>h?(n.dispatchEvent(i),ce.copy(n.object.position),Ae.copy(n.object.quaternion),Ce=!1,!0):!1}})(),this.connect=F=>{n.domElement=F,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",ut),n.domElement.addEventListener("pointerdown",wt),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",Pt)},this.dispose=()=>{var F,re,fe,se,ce,Ae;n.domElement&&(n.domElement.style.touchAction="auto"),(F=n.domElement)==null||F.removeEventListener("contextmenu",ut),(re=n.domElement)==null||re.removeEventListener("pointerdown",wt),(fe=n.domElement)==null||fe.removeEventListener("pointercancel",q),(se=n.domElement)==null||se.removeEventListener("wheel",Pt),(ce=n.domElement)==null||ce.ownerDocument.removeEventListener("pointermove",Rt),(Ae=n.domElement)==null||Ae.ownerDocument.removeEventListener("pointerup",q),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Fe)};const n=this,i={type:"change"},s={type:"start"},o={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const h=1e-6,f=new Sp,p=new Sp;let m=1;const g=new U,v=new _e,M=new _e,y=new _e,x=new _e,w=new _e,b=new _e,T=new _e,P=new _e,C=new _e,E=new U,R=new _e;let O=!1;const N=[],D={};function X(){return 2*Math.PI/60/60*n.autoRotateSpeed}function K(){return Math.pow(.95,n.zoomSpeed)}function V(F){n.reverseOrbit||n.reverseHorizontalOrbit?p.theta+=F:p.theta-=F}function Q(F){n.reverseOrbit||n.reverseVerticalOrbit?p.phi+=F:p.phi-=F}const oe=(()=>{const F=new U;return function(fe,se){F.setFromMatrixColumn(se,0),F.multiplyScalar(-fe),g.add(F)}})(),$=(()=>{const F=new U;return function(fe,se){n.screenSpacePanning===!0?F.setFromMatrixColumn(se,1):(F.setFromMatrixColumn(se,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(fe),g.add(F)}})(),k=(()=>{const F=new U;return function(fe,se){const ce=n.domElement;if(ce&&n.object instanceof ln&&n.object.isPerspectiveCamera){const Ae=n.object.position;F.copy(Ae).sub(n.target);let G=F.length();G*=Math.tan(n.object.fov/2*Math.PI/180),oe(2*fe*G/ce.clientHeight,n.object.matrix),$(2*se*G/ce.clientHeight,n.object.matrix)}else ce&&n.object instanceof dr&&n.object.isOrthographicCamera?(oe(fe*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),$(se*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(F){n.object instanceof ln&&n.object.isPerspectiveCamera||n.object instanceof dr&&n.object.isOrthographicCamera?m=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(F){H(m/F)}function J(F){H(m*F)}function pe(F){if(!n.zoomToCursor||!n.domElement)return;O=!0;const re=n.domElement.getBoundingClientRect(),fe=F.clientX-re.left,se=F.clientY-re.top,ce=re.width,Ae=re.height;R.x=fe/ce*2-1,R.y=-(se/Ae)*2+1,E.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Me(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function ae(F){v.set(F.clientX,F.clientY)}function ye(F){pe(F),T.set(F.clientX,F.clientY)}function Ie(F){x.set(F.clientX,F.clientY)}function qe(F){M.set(F.clientX,F.clientY),y.subVectors(M,v).multiplyScalar(n.rotateSpeed);const re=n.domElement;re&&(V(2*Math.PI*y.x/re.clientHeight),Q(2*Math.PI*y.y/re.clientHeight)),v.copy(M),n.update()}function Ue(F){P.set(F.clientX,F.clientY),C.subVectors(P,T),C.y>0?W(K()):C.y<0&&J(K()),T.copy(P),n.update()}function nt(F){w.set(F.clientX,F.clientY),b.subVectors(w,x).multiplyScalar(n.panSpeed),k(b.x,b.y),x.copy(w),n.update()}function vt(F){pe(F),F.deltaY<0?J(K()):F.deltaY>0&&W(K()),n.update()}function Pe(F){let re=!1;switch(F.code){case n.keys.UP:k(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),re=!0;break}re&&(F.preventDefault(),n.update())}function lt(){if(N.length==1)v.set(N[0].pageX,N[0].pageY);else{const F=.5*(N[0].pageX+N[1].pageX),re=.5*(N[0].pageY+N[1].pageY);v.set(F,re)}}function tt(){if(N.length==1)x.set(N[0].pageX,N[0].pageY);else{const F=.5*(N[0].pageX+N[1].pageX),re=.5*(N[0].pageY+N[1].pageY);x.set(F,re)}}function me(){const F=N[0].pageX-N[1].pageX,re=N[0].pageY-N[1].pageY,fe=Math.sqrt(F*F+re*re);T.set(0,fe)}function Re(){n.enableZoom&&me(),n.enablePan&&tt()}function Le(){n.enableZoom&&me(),n.enableRotate&&lt()}function Be(F){if(N.length==1)M.set(F.pageX,F.pageY);else{const fe=Se(F),se=.5*(F.pageX+fe.x),ce=.5*(F.pageY+fe.y);M.set(se,ce)}y.subVectors(M,v).multiplyScalar(n.rotateSpeed);const re=n.domElement;re&&(V(2*Math.PI*y.x/re.clientHeight),Q(2*Math.PI*y.y/re.clientHeight)),v.copy(M)}function Oe(F){if(N.length==1)w.set(F.pageX,F.pageY);else{const re=Se(F),fe=.5*(F.pageX+re.x),se=.5*(F.pageY+re.y);w.set(fe,se)}b.subVectors(w,x).multiplyScalar(n.panSpeed),k(b.x,b.y),x.copy(w)}function ct(F){const re=Se(F),fe=F.pageX-re.x,se=F.pageY-re.y,ce=Math.sqrt(fe*fe+se*se);P.set(0,ce),C.set(0,Math.pow(P.y/T.y,n.zoomSpeed)),W(C.y),T.copy(P)}function Ze(F){n.enableZoom&&ct(F),n.enablePan&&Oe(F)}function Mt(F){n.enableZoom&&ct(F),n.enableRotate&&Be(F)}function wt(F){var re,fe;n.enabled!==!1&&(N.length===0&&((re=n.domElement)==null||re.ownerDocument.addEventListener("pointermove",Rt),(fe=n.domElement)==null||fe.ownerDocument.addEventListener("pointerup",q)),B(F),F.pointerType==="touch"?Jt(F):Zt(F))}function Rt(F){n.enabled!==!1&&(F.pointerType==="touch"?st(F):yt(F))}function q(F){var re,fe,se;I(F),N.length===0&&((re=n.domElement)==null||re.releasePointerCapture(F.pointerId),(fe=n.domElement)==null||fe.ownerDocument.removeEventListener("pointermove",Rt),(se=n.domElement)==null||se.ownerDocument.removeEventListener("pointerup",q)),n.dispatchEvent(o),u=c.NONE}function Zt(F){let re;switch(F.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Ts.DOLLY:if(n.enableZoom===!1)return;ye(F),u=c.DOLLY;break;case Ts.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;Ie(F),u=c.PAN}else{if(n.enableRotate===!1)return;ae(F),u=c.ROTATE}break;case Ts.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;ae(F),u=c.ROTATE}else{if(n.enablePan===!1)return;Ie(F),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function yt(F){if(n.enabled!==!1)switch(u){case c.ROTATE:if(n.enableRotate===!1)return;qe(F);break;case c.DOLLY:if(n.enableZoom===!1)return;Ue(F);break;case c.PAN:if(n.enablePan===!1)return;nt(F);break}}function Pt(F){n.enabled===!1||n.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(F.preventDefault(),n.dispatchEvent(s),vt(F),n.dispatchEvent(o))}function Fe(F){n.enabled===!1||n.enablePan===!1||Pe(F)}function Jt(F){switch(ie(F),N.length){case 1:switch(n.touches.ONE){case As.ROTATE:if(n.enableRotate===!1)return;lt(),u=c.TOUCH_ROTATE;break;case As.PAN:if(n.enablePan===!1)return;tt(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(n.touches.TWO){case As.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),u=c.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function st(F){switch(ie(F),u){case c.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(F),n.update();break;case c.TOUCH_PAN:if(n.enablePan===!1)return;Oe(F),n.update();break;case c.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ze(F),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(F),n.update();break;default:u=c.NONE}}function ut(F){n.enabled!==!1&&F.preventDefault()}function B(F){N.push(F)}function I(F){delete D[F.pointerId];for(let re=0;re<N.length;re++)if(N[re].pointerId==F.pointerId){N.splice(re,1);return}}function ie(F){let re=D[F.pointerId];re===void 0&&(re=new _e,D[F.pointerId]=re),re.set(F.pageX,F.pageY)}function Se(F){const re=F.pointerId===N[0].pointerId?N[1]:N[0];return D[re.pointerId]}this.dollyIn=(F=K())=>{J(F),n.update()},this.dollyOut=(F=K())=>{W(F),n.update()},this.getScale=()=>m,this.setScale=F=>{H(F),n.update()},this.getZoomScale=()=>K(),t!==void 0&&this.connect(t),this.update()}};const fv=new xn,xu=new U;class Am extends xm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Je(e,3)),this.setAttribute("uv",new Je(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new vh(t,6,1);return this.setAttribute("instanceStart",new vi(n,3,0)),this.setAttribute("instanceEnd",new vi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new vh(n,t*2,1);return this.setAttribute("instanceColorStart",new vi(i,t,0)),this.setAttribute("instanceColorEnd",new vi(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cm(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),fv.setFromBufferAttribute(t),this.boundingBox.union(fv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)xu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xu)),xu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Wy extends Am{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Cm extends pr{constructor(e){super({type:"LineMaterial",uniforms:gh.clone(gh.merge([Ge.common,Ge.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _e(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Vy>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const sp=new Bt,dv=new U,pv=new U,In=new Bt,Ln=new Bt,or=new Bt,op=new U,ap=new _t,Nn=new ry,mv=new U,yu=new xn,Su=new yn,ar=new Bt;let ur,Fs;function gv(r,e,t){return ar.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ar.multiplyScalar(1/ar.w),ar.x=Fs/t.width,ar.y=Fs/t.height,ar.applyMatrix4(r.projectionMatrixInverse),ar.multiplyScalar(1/ar.w),Math.abs(Math.max(ar.x,ar.y))}function DP(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let c=0,u=o;c<u;c++){Nn.start.fromBufferAttribute(i,c),Nn.end.fromBufferAttribute(s,c),Nn.applyMatrix4(t);const h=new U,f=new U;ur.distanceSqToSegment(Nn.start,Nn.end,f,h),f.distanceTo(h)<Fs*.5&&e.push({point:f,pointOnLine:h,distance:ur.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[Gy]:null})}}function UP(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;ur.at(1,or),or.w=1,or.applyMatrix4(e.matrixWorldInverse),or.applyMatrix4(n),or.multiplyScalar(1/or.w),or.x*=s.x/2,or.y*=s.y/2,or.z=0,op.copy(or),ap.multiplyMatrices(e.matrixWorldInverse,o);for(let m=0,g=f;m<g;m++){if(In.fromBufferAttribute(u,m),Ln.fromBufferAttribute(h,m),In.w=1,Ln.w=1,In.applyMatrix4(ap),Ln.applyMatrix4(ap),In.z>p&&Ln.z>p)continue;if(In.z>p){const b=In.z-Ln.z,T=(In.z-p)/b;In.lerp(Ln,T)}else if(Ln.z>p){const b=Ln.z-In.z,T=(Ln.z-p)/b;Ln.lerp(In,T)}In.applyMatrix4(n),Ln.applyMatrix4(n),In.multiplyScalar(1/In.w),Ln.multiplyScalar(1/Ln.w),In.x*=s.x/2,In.y*=s.y/2,Ln.x*=s.x/2,Ln.y*=s.y/2,Nn.start.copy(In),Nn.start.z=0,Nn.end.copy(Ln),Nn.end.z=0;const M=Nn.closestPointToPointParameter(op,!0);Nn.at(M,mv);const y=ix.lerp(In.z,Ln.z,M),x=y>=-1&&y<=1,w=op.distanceTo(mv)<Fs*.5;if(x&&w){Nn.start.fromBufferAttribute(u,m),Nn.end.fromBufferAttribute(h,m),Nn.start.applyMatrix4(o),Nn.end.applyMatrix4(o);const b=new U,T=new U;ur.distanceSqToSegment(Nn.start,Nn.end,T,b),t.push({point:T,pointOnLine:b,distance:ur.origin.distanceTo(T),object:r,face:null,faceIndex:m,uv:null,[Gy]:null})}}}class Xy extends Sn{constructor(e=new Am,t=new Cm({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,c=0,u=t.count;o<u;o++,c+=2)dv.fromBufferAttribute(t,o),pv.fromBufferAttribute(n,o),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+dv.distanceTo(pv);const s=new vh(i,2,1);return e.setAttribute("instanceDistanceStart",new vi(s,1,0)),e.setAttribute("instanceDistanceEnd",new vi(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ur=e.ray;const o=this.matrixWorld,c=this.geometry,u=this.material;Fs=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),Su.copy(c.boundingSphere).applyMatrix4(o);let h;if(n)h=Fs*.5;else{const p=Math.max(i.near,Su.distanceToPoint(ur.origin));h=gv(i,p,u.resolution)}if(Su.radius+=h,ur.intersectsSphere(Su)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),yu.copy(c.boundingBox).applyMatrix4(o);let f;if(n)f=Fs*.5;else{const p=Math.max(i.near,yu.distanceToPoint(ur.origin));f=gv(i,p,u.resolution)}yu.expandByScalar(f),ur.intersectsBox(yu)!==!1&&(n?DP(this,t):UP(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(sp),this.material.uniforms.resolution.value.set(sp.z,sp.w))}}class OP extends Xy{constructor(e=new Wy,t=new Cm({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Cs=xe.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:o,dashed:c,...u},h){var f,p;const m=lr(x=>x.size),g=xe.useMemo(()=>o?new Xy:new OP,[o]),[v]=xe.useState(()=>new Cm),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,y=xe.useMemo(()=>{const x=o?new Am:new Wy,w=e.map(b=>{const T=Array.isArray(b);return b instanceof U||b instanceof Bt?[b.x,b.y,b.z]:b instanceof _e?[b.x,b.y,0]:T&&b.length===3?[b[0],b[1],b[2]]:T&&b.length===2?[b[0],b[1],0]:b});if(x.setPositions(w.flat()),n){t=16777215;const b=n.map(T=>T instanceof je?T.toArray():T);x.setColors(b.flat(),M)}return x},[e,o,n,M]);return xe.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),xe.useLayoutEffect(()=>{c?v.defines.USE_DASH="":delete v.defines.USE_DASH,v.needsUpdate=!0},[c,v]),xe.useEffect(()=>()=>{y.dispose(),v.dispose()},[y]),xe.createElement("primitive",Cu({object:g,ref:h},u),xe.createElement("primitive",{object:y,attach:"geometry"}),xe.createElement("primitive",Cu({object:v,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))}),FP=xe.forwardRef(({makeDefault:r,camera:e,regress:t,domElement:n,enableDamping:i=!0,keyEvents:s=!1,onChange:o,onStart:c,onEnd:u,...h},f)=>{const p=lr(C=>C.invalidate),m=lr(C=>C.camera),g=lr(C=>C.gl),v=lr(C=>C.events),M=lr(C=>C.setEvents),y=lr(C=>C.set),x=lr(C=>C.get),w=lr(C=>C.performance),b=e||m,T=n||v.connected||g.domElement,P=xe.useMemo(()=>new NP(b),[b]);return Uy(()=>{P.enabled&&P.update()},-1),xe.useEffect(()=>(s&&P.connect(s===!0?T:s),P.connect(T),()=>void P.dispose()),[s,T,t,P,p]),xe.useEffect(()=>{const C=O=>{p(),t&&w.regress(),o&&o(O)},E=O=>{c&&c(O)},R=O=>{u&&u(O)};return P.addEventListener("change",C),P.addEventListener("start",E),P.addEventListener("end",R),()=>{P.removeEventListener("start",E),P.removeEventListener("end",R),P.removeEventListener("change",C)}},[o,c,u,P,p,M]),xe.useEffect(()=>{if(r){const C=x().controls;return y({controls:P}),()=>y({controls:C})}},[r,P]),xe.createElement("primitive",Cu({ref:f,object:P,enableDamping:i},h))}),BP={axes:!0,grid:!0,labels:!0,projections:!1};class zP extends xe.Component{constructor(){super(...arguments),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?ve.jsx("div",{className:"grid h-full place-items-center p-4 text-center text-sm text-muted",children:"3D view is unavailable (WebGL is not supported or was blocked)."}):this.props.children}}const Qa=({at:r,text:e})=>ve.jsx(bP,{position:r,center:!0,zIndexRange:[10,0],style:{pointerEvents:"none"},children:ve.jsx("span",{className:"whitespace-nowrap rounded bg-surface/85 px-1 text-xs text-ink",children:e})});function kP({from:r,vec:e,color:t}){const n=xe.useMemo(()=>{const i=Math.hypot(...e);return i<1e-9?null:new oy(new U(...e).normalize(),new U(...r),i,t,Math.min(.35,i*.3),Math.min(.18,i*.15))},[r,e,t]);return n?ve.jsx("primitive",{object:n}):null}function HP({grid:r,color:e,opacity:t}){const n=xe.useMemo(()=>{const i=r.length,s=r[0].length,o=new Float32Array(i*s*3);r.forEach((h,f)=>h.forEach((p,m)=>o.set(p,(f*s+m)*3)));const c=[];for(let h=0;h<i-1;h++)for(let f=0;f<s-1;f++){const p=h*s+f,m=p+1,g=p+s,v=g+1;c.push(p,g,m,m,g,v)}const u=new St;return u.setAttribute("position",new jt(o,3)),u.setIndex(c),u.computeVertexNormals(),u},[r]);return ve.jsxs(ve.Fragment,{children:[ve.jsx("mesh",{geometry:n,children:ve.jsx("meshStandardMaterial",{color:e,transparent:!0,opacity:t,side:si,depthWrite:!1})}),ve.jsx("mesh",{geometry:n,children:ve.jsx("meshBasicMaterial",{color:e,wireframe:!0,transparent:!0,opacity:.25})})]})}function VP({positions:r,color:e,opacity:t}){const n=xe.useMemo(()=>{const i=new St;return i.setAttribute("position",new jt(new Float32Array(r),3)),i.computeVertexNormals(),i},[r]);return ve.jsx("mesh",{geometry:n,children:ve.jsx("meshStandardMaterial",{color:e,transparent:!0,opacity:t,side:si,depthWrite:!1})})}function GP({p:r,n:e,size:t,color:n,opacity:i}){const s=xe.useMemo(()=>{const o=new U(...e).normalize();return new Rn().setFromUnitVectors(new U(0,0,1),o)},[e]);return ve.jsxs("mesh",{position:r,quaternion:s,children:[ve.jsx("planeGeometry",{args:[t,t]}),ve.jsx("meshBasicMaterial",{color:n,transparent:!0,opacity:i,side:si,depthWrite:!1})]})}function WP({s:r,labels:e,projections:t}){switch(r.kind){case"point":{const[n,i,s]=r.p;return ve.jsxs("group",{children:[ve.jsxs("mesh",{position:r.p,children:[ve.jsx("sphereGeometry",{args:[.09,20,20]}),ve.jsx("meshBasicMaterial",{color:r.color})]}),e&&r.label&&ve.jsx(Qa,{at:[n,i,s+.3],text:r.label}),t&&ve.jsxs(ve.Fragment,{children:[ve.jsx(Cs,{points:[r.p,[n,i,0]],color:r.color,dashed:!0,dashSize:.12,gapSize:.1,lineWidth:1}),ve.jsx(Cs,{points:[[n,i,0],[n,0,0]],color:r.color,dashed:!0,dashSize:.12,gapSize:.1,lineWidth:1}),ve.jsx(Cs,{points:[[n,i,0],[0,i,0]],color:r.color,dashed:!0,dashSize:.12,gapSize:.1,lineWidth:1}),ve.jsx(Cs,{points:[r.p,[n,0,s]],color:r.color,dashed:!0,dashSize:.12,gapSize:.1,lineWidth:1}),ve.jsx(Cs,{points:[r.p,[0,i,s]],color:r.color,dashed:!0,dashSize:.12,gapSize:.1,lineWidth:1})]})]})}case"vector":{const n=[r.from[0]+r.vec[0],r.from[1]+r.vec[1],r.from[2]+r.vec[2]];return ve.jsxs("group",{children:[ve.jsx(kP,{from:r.from,vec:r.vec,color:r.color}),e&&r.label&&ve.jsx(Qa,{at:n,text:r.label})]})}case"polyline":return r.pts.length<2?null:ve.jsxs("group",{children:[ve.jsx(Cs,{points:r.pts,color:r.color,lineWidth:2,dashed:r.dashed,dashSize:.15,gapSize:.1}),e&&r.label&&ve.jsx(Qa,{at:r.pts[Math.floor(r.pts.length/2)],text:r.label})]});case"plane":return ve.jsx(GP,{p:r.p,n:r.n,size:r.size??6,color:r.color,opacity:r.opacity??.25});case"surface":return r.grid.length>1?ve.jsx(HP,{grid:r.grid,color:r.color,opacity:r.opacity??.45}):null;case"mesh":return r.positions.length?ve.jsx(VP,{positions:r.positions,color:r.color,opacity:r.opacity??.5}):null}}function XP({E:r,labels:e}){const t=[{c:"#ef4444",a:[r,0,0],n:"x"},{c:"#22c55e",a:[0,r,0],n:"y"},{c:"#3b82f6",a:[0,0,r],n:"z"}];return ve.jsxs("group",{children:[t.map(n=>ve.jsxs("group",{children:[ve.jsx(Cs,{points:[n.a.map(i=>-i),n.a],color:n.c,lineWidth:1.5}),e&&ve.jsx(Qa,{at:n.a.map(i=>i*1.06+(i?.2:0)),text:n.n})]},n.n)),ve.jsxs("mesh",{children:[ve.jsx("sphereGeometry",{args:[.06,12,12]}),ve.jsx("meshBasicMaterial",{color:"#64748b"})]}),e&&ve.jsx(Qa,{at:[.25,-.25,-.25],text:"O"})]})}function YP({shapes:r,options:e,extent:t=5,height:n=380}){const i={...BP,...e},[s,o]=xe.useState(0);return ve.jsxs("div",{className:"relative overflow-hidden rounded-card border border-line bg-surface",style:{height:n},children:[ve.jsx(zP,{children:ve.jsxs(mP,{dpr:[1,2],camera:{position:[t*1.5,-t*1.5,t*1.1],up:[0,0,1],fov:45},children:[ve.jsx("ambientLight",{intensity:.8}),ve.jsx("directionalLight",{position:[5,-5,10],intensity:.8}),i.grid&&ve.jsx("gridHelper",{args:[t*2,t*2,"#94a3b8","#cbd5e1"],rotation:[Math.PI/2,0,0]}),i.axes&&ve.jsx(XP,{E:t,labels:i.labels}),r.map((c,u)=>ve.jsx(WP,{s:c,labels:i.labels,projections:i.projections},u)),ve.jsx(FP,{makeDefault:!0,enableDamping:!0})]},s)}),ve.jsx("button",{onClick:()=>o(c=>c+1),className:"absolute right-2 top-2 rounded-lg border border-line bg-surface/90 px-2 py-1 text-xs font-medium text-muted hover:text-ink",children:"Reset view"})]})}const qP={ρ:"rho",φ:"phi",θ:"theta",α:"alpha",β:"beta",γ:"gamma",κ:"kappa",π:"pi",Δ:"Delta","∇":"grad ","√":"sqrt","²":"^2","³":"^3","₀":"0","₁":"1","₂":"2","≈":"~","≠":"!=","≥":">=","≤":"<=","−":"-","×":"x","·":"*","°":" deg","∥":"||","→":"->","∈":"in","•":"-","‖":"|","′":"'","⃗":"","‑":"-"},jP=r=>r.replace(/[^\x00-\x7F]/g,e=>qP[e]??"");async function ZP(r){const{jsPDF:e}=await DS(async()=>{const{jsPDF:c}=await import("./jspdf.es.min-oGm8PBCe.js");return{jsPDF:c}},__vite__mapDeps([0,1,2,3]),import.meta.url),t=new e({unit:"pt",format:"a4"}),n=t.internal.pageSize.getWidth()-80,i=t.internal.pageSize.getHeight()-50;let s=50;const o=(c,u=10,h=!1,f=4)=>{t.setFont("helvetica",h?"bold":"normal"),t.setFontSize(u);for(const p of t.splitTextToSize(jP(c),n))s>i&&(t.addPage(),s=50),t.text(p,40,s),s+=u+f};o(`VectorLab - ${r.title}`,18,!0,8),o(new Date().toLocaleString(),9,!1,10),o(`Operation: ${r.meta.operation}`,11,!0),r.meta.system&&o(`Coordinate system: ${r.meta.system}`,11),r.meta.method&&o(`Method: ${r.meta.method}`,11),s+=6,o("Final result",13,!0,6),r.answer.forEach(c=>o(`${c.label}: ${c.value}`,11)),s+=6,o("Full solution",13,!0,6),r.steps.forEach(c=>{o(c.title,11,!0),c.why&&o(`(${c.why})`,9),c.lines.forEach(u=>o(u,10)),s+=4}),t.save(`vectorlab-${r.title.toLowerCase().replace(/\W+/g,"-")}.pdf`)}const Yy="rounded-lg px-4 py-2 text-sm font-medium transition-colors",_v=`${Yy} bg-accent text-accent-ink hover:opacity-90`,Mu=`${Yy} border border-line bg-surface text-ink hover:border-accent`;function t3({title:r,subtitle:e,form:t,restored:n,inputs:i,onCalculate:s,onExample:o,onClear:c}){const u=US(),h=OS(),f=FS(),p=BS(),[m,g]=xe.useState(null),[v,M]=xe.useState(null),[y,x]=xe.useState(!1),w=xe.useRef(n),b=C=>`${r} — ${C.meta.operation}
`+C.answer.map(E=>`${E.label}: ${E.value}`).join(`
`),T=(C=!0)=>{try{const E=s();g(E),M(null),C&&h.add({path:p.pathname,title:r,operation:E.meta.operation,summary:E.answer.map(R=>`${R.label}: ${R.value}`),form:t,copyText:b(E)})}catch(E){g(null),M(E instanceof Error?E.message:String(E))}};xe.useEffect(()=>{w.current&&(w.current=!1,T(!1))},[]);const P=async()=>{if(m)try{await navigator.clipboard.writeText(b(m)),x(!0),setTimeout(()=>x(!1),1500)}catch{M("Copy is not available in this browser.")}};return ve.jsxs(ve.Fragment,{children:[ve.jsx(zS,{title:r,subtitle:e}),ve.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]",children:[ve.jsxs("div",{className:"space-y-4",children:[ve.jsx(cd,{className:"space-y-4",children:i}),ve.jsxs("div",{className:"flex flex-wrap gap-2",children:[ve.jsx("button",{className:_v,onClick:()=>T(),children:"Calculate"}),o&&ve.jsx("button",{className:Mu,onClick:()=>{o(),g(null),M(null)},children:"Example input"}),c&&ve.jsx("button",{className:Mu,onClick:()=>{c(),g(null),M(null)},children:"Clear"})]})]}),ve.jsxs("div",{className:"min-w-0 space-y-4",children:[v&&ve.jsx("div",{role:"alert",className:"rounded-card border border-red-400/60 bg-red-500/10 p-4 text-sm",children:v}),!m&&!v&&ve.jsx(cd,{children:ve.jsxs("p",{className:"text-muted",children:["Enter your values and press ",ve.jsx("b",{children:"Calculate"}),". The result, the steps and a 3D view appear here."]})}),m&&ve.jsxs(ve.Fragment,{children:[ve.jsxs(cd,{children:[ve.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[ve.jsx("h2",{className:"text-lg font-semibold",children:m.meta.operation}),ve.jsxs("div",{className:"flex flex-wrap gap-2",children:[ve.jsx("button",{className:Mu,onClick:P,children:y?"Copied":"Copy result"}),ve.jsx("button",{className:Mu,onClick:()=>ZP({title:r,meta:m.meta,answer:m.answer,steps:m.steps}).catch(()=>M("PDF export failed.")),children:"Export PDF"}),ve.jsx("button",{className:_v,onClick:()=>f.openInVisualizer(m.shapes,r),children:"Visualize in 3D"})]})]}),ve.jsx("dl",{className:"space-y-2",children:m.answer.map((C,E)=>ve.jsxs("div",{className:"grid gap-1 sm:grid-cols-[180px_1fr]",children:[ve.jsx("dt",{className:"text-sm text-muted",children:C.label}),ve.jsx("dd",{className:"break-words font-mono text-sm",children:C.value})]},E))})]}),ve.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[ve.jsx("span",{className:"text-sm text-muted",children:"Show:"}),ve.jsx(kS,{label:"Display",value:u.mode,onChange:u.setMode,options:[{value:"answer",label:"Final answer"},{value:"steps",label:"Full solution"}]}),ve.jsxs("label",{className:"ml-auto flex items-center gap-2 text-sm text-muted",children:["Decimals",ve.jsx("select",{className:"rounded-lg border border-line bg-surface px-2 py-1 text-ink",value:u.precision,onChange:C=>u.setPrecision(Number(C.target.value)),children:[2,3,4,6,8,10].map(C=>ve.jsx("option",{children:C},C))})]})]}),u.mode==="steps"&&ve.jsx(HS,{steps:m.steps}),ve.jsx(YP,{shapes:m.shapes,options:m.sceneOptions,extent:m.extent})]})]})]})]})}export{t3 as C,YP as S,Mu as a,_v as b,HS as c};
