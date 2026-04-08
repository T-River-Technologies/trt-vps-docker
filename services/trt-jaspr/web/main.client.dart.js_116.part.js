((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
Ep(d,e,f){var x,w,v,u,t=f-e
if(t<=4096)x=$.BP()
else x=new Uint8Array(t)
for(w=J.d4(d),v=0;v<t;++v){u=w.j(d,e+v)
if((u&255)!==u)u=255
x[v]=u}return x},
Eo(d,e,f,g){var x=d?$.BO():$.BN()
if(x==null)return null
if(0===f&&g===e.length)return B.AS(x,e)
return B.AS(x,e.subarray(f,g))},
AS(d,e){var x,w
try{x=d.decode(e)
return x}catch(w){}return null},
Eq(d){switch(d){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
xJ:function xJ(){},
xI:function xI(){},
lU:function lU(){},
mQ:function mQ(){},
qZ:function qZ(){},
xK:function xK(d){this.b=0
this.c=d},
qY:function qY(d){this.a=d},
xH:function xH(d){this.a=d
this.b=16
this.c=0},
D5(d,e,f){var x,w,v,u
if(f<=500&&e===0&&f===d.length)return String.fromCharCode.apply(null,d)
for(x=e,w="";x<f;x=v){v=x+500
u=v<f?v:f
w+=String.fromCharCode.apply(null,d.subarray(x,u))}return w},
CT(d){return new Uint8Array(d)},
Do(d,e,f){var x,w
A.z7(e,"start")
x=f-e
if(x<0)throw A.C(A.b2(f,e,null,"end",null))
if(x===0)return""
w=B.Dp(d,e,f)
return w},
Dp(d,e,f){var x=d.length
if(e>=x)return""
return B.D5(d,e,f==null||f>x?x:f)},
aB(d,e,f,g){var x,w,v,u,t,s="0123456789ABCDEF"
if(f===C.i){x=$.BM()
x=x.b.test(e)}else x=!1
if(x)return e
w=C.dG.f7(e)
for(x=w.length,v=0,u="";v<x;++v){t=w[v]
if(t<128&&("\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00".charCodeAt(t)&d)!==0)u+=A.a4(t)
else u=g&&t===32?u+"+":u+"%"+s[t>>>4&15]+s[t&15]}return u.charCodeAt(0)==0?u:u}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[55],B)
C=c[83]
B.lU.prototype={}
B.mQ.prototype={}
B.qZ.prototype={
f7(d){var x,w,v,u,t=d.length,s=A.pd(0,null,t)
if(s===0)return new Uint8Array(0)
x=s*3
w=new Uint8Array(x)
v=new B.xK(w)
if(v.lj(d,0,s)!==s){u=s-1
if(!(u>=0&&u<t))return A.B(d,u)
v.eZ()}return new Uint8Array(w.subarray(0,A.F0(0,v.b,x)))}}
B.xK.prototype={
eZ(){var x,w=this,v=w.c,u=w.b,t=w.b=u+1
v.$flags&2&&A.b7(v)
x=v.length
if(!(u<x))return A.B(v,u)
v[u]=239
u=w.b=t+1
if(!(t<x))return A.B(v,t)
v[t]=191
w.b=u+1
if(!(u<x))return A.B(v,u)
v[u]=189},
pM(d,e){var x,w,v,u,t,s=this
if((e&64512)===56320){x=65536+((d&1023)<<10)|e&1023
w=s.c
v=s.b
u=s.b=v+1
w.$flags&2&&A.b7(w)
t=w.length
if(!(v<t))return A.B(w,v)
w[v]=x>>>18|240
v=s.b=u+1
if(!(u<t))return A.B(w,u)
w[u]=x>>>12&63|128
u=s.b=v+1
if(!(v<t))return A.B(w,v)
w[v]=x>>>6&63|128
s.b=u+1
if(!(u<t))return A.B(w,u)
w[u]=x&63|128
return!0}else{s.eZ()
return!1}},
lj(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(e!==f){x=f-1
if(!(x>=0&&x<d.length))return A.B(d,x)
x=(d.charCodeAt(x)&64512)===55296}else x=!1
if(x)--f
for(x=p.c,w=x.$flags|0,v=x.length,u=d.length,t=e;t<f;++t){if(!(t<u))return A.B(d,t)
s=d.charCodeAt(t)
if(s<=127){r=p.b
if(r>=v)break
p.b=r+1
w&2&&A.b7(x)
x[r]=s}else{r=s&64512
if(r===55296){if(p.b+4>v)break
r=t+1
if(!(r<u))return A.B(d,r)
if(p.pM(s,d.charCodeAt(r)))t=r}else if(r===56320){if(p.b+3>v)break
p.eZ()}else if(s<=2047){r=p.b
q=r+1
if(q>=v)break
p.b=q
w&2&&A.b7(x)
if(!(r<v))return A.B(x,r)
x[r]=s>>>6|192
p.b=q+1
x[q]=s&63|128}else{r=p.b
if(r+2>=v)break
q=p.b=r+1
w&2&&A.b7(x)
if(!(r<v))return A.B(x,r)
x[r]=s>>>12|224
r=p.b=q+1
if(!(q<v))return A.B(x,q)
x[q]=s>>>6&63|128
p.b=r+1
if(!(r<v))return A.B(x,r)
x[r]=s&63|128}}}return t}}
B.qY.prototype={
f7(d){return new B.xH(this.a).kS(y.c.a(d),0,null,!0)}}
B.xH.prototype={
kS(d,e,f,g){var x,w,v,u,t,s,r,q=this
y.c.a(d)
x=A.pd(e,f,J.bQ(d))
if(e===x)return""
if(d instanceof Uint8Array){w=d
v=w
u=0}else{v=B.Ep(d,e,x)
x-=e
u=e
e=0}if(x-e>=15){t=q.a
s=B.Eo(t,v,e,x)
if(s!=null){if(!t)return s
if(s.indexOf("\ufffd")<0)return s}}s=q.eG(v,e,x,!0)
t=q.b
if((t&1)!==0){r=B.Eq(t)
q.b=0
throw A.C(A.j_(r,d,u+q.c))}return s},
eG(d,e,f,g){var x,w,v=this
if(f-e>1000){x=D.d.O(e+f,2)
w=v.eG(d,e,x,!1)
if((v.b&1)!==0)return w
return w+v.eG(d,x,f,g)}return v.qY(d,e,f,g)},
qY(d,e,f,g){var x,w,v,u,t,s,r,q,p=this,o="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",n=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",m=65533,l=p.b,k=p.c,j=new A.cb(""),i=e+1,h=d.length
if(!(e>=0&&e<h))return A.B(d,e)
x=d[e]
A:for(w=p.a;;){for(;;i=t){if(!(x>=0&&x<256))return A.B(o,x)
v=o.charCodeAt(x)&31
k=l<=32?x&61694>>>v:(x&63|k<<6)>>>0
u=l+v
if(!(u>=0&&u<144))return A.B(n,u)
l=n.charCodeAt(u)
if(l===0){u=A.a4(k)
j.a+=u
if(i===f)break A
break}else if((l&1)!==0){if(w)switch(l){case 69:case 67:u=A.a4(m)
j.a+=u
break
case 65:u=A.a4(m)
j.a+=u;--i
break
default:u=A.a4(m)
j.a=(j.a+=u)+u
break}else{p.b=l
p.c=i-1
return""}l=0}if(i===f)break A
t=i+1
if(!(i>=0&&i<h))return A.B(d,i)
x=d[i]}t=i+1
if(!(i>=0&&i<h))return A.B(d,i)
x=d[i]
if(x<128){for(;;){if(!(t<f)){s=f
break}r=t+1
if(!(t>=0&&t<h))return A.B(d,t)
x=d[t]
if(x>=128){s=r-1
t=r
break}t=r}if(s-i<20)for(q=i;q<s;++q){if(!(q<h))return A.B(d,q)
u=A.a4(d[q])
j.a+=u}else{u=B.Do(d,i,s)
j.a+=u}if(s===f)break A
i=t}else i=t}if(g&&l>32)if(w){h=A.a4(m)
j.a+=h}else{p.b=77
p.c=f
return""}p.b=l
p.c=k
h=j.a
return h.charCodeAt(0)==0?h:h}}
var z=a.updateTypes([])
B.xJ.prototype={
$0(){var x,w
try{x=new TextDecoder("utf-8",{fatal:true})
return x}catch(w){}return null},
$S:18}
B.xI.prototype={
$0(){var x,w
try{x=new TextDecoder("utf-8",{fatal:false})
return x}catch(w){}return null},
$S:18};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aa,[B.xJ,B.xI])
w(B.lU,A.dV)
w(B.mQ,B.lU)
x(A.iP,[B.qZ,B.qY])
x(A.J,[B.xK,B.xH])})()
A.W(b.typeUniverse,JSON.parse('{"lU":{"dV":["d","I<t>"]},"mQ":{"dV":["d","I<t>"]}}'))
var y={c:A.h("I<t>")};(function constants(){C.i=new B.mQ()
C.dG=new B.qZ()
C.ja=new B.qY(!1)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"J8","BP",()=>B.CT(4096))
x($,"J6","BN",()=>new B.xJ().$0())
x($,"J7","BO",()=>new B.xI().$0())
x($,"J5","BM",()=>A.bd("^[\\-\\.0-9A-Z_a-z~]*$"))})()};
(a=>{a["l3XfRU48FmfD/Cm12jehZrv9CtA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_116.part.js.map
