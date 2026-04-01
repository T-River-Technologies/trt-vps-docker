((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,F,G,E,A={
BV(d){y.P.a(d)
B.r(d.j(0,"grantee_type"))
return new A.c4(B.r(d.j(0,"grantee_id")),B.r(d.j(0,"permission")))},
BU(d){var x,w,v,u,t,s,r="expires_at",q=y.P
q.a(d)
x=y.g.a(d.j(0,"members"))
q=J.bo(x==null?[]:x,q)
x=q.$ti
w=x.h("J<P.E,c4>")
v=B.B(new B.J(q,x.h("c4(P.E)").a(A.GH()),w),w.h("N.E"))
q=B.r(d.j(0,"share_id"))
x=B.r(d.j(0,"node_id"))
w=B.q(d.j(0,"node_name"))
if(w==null)w=B.r(d.j(0,"node_id"))
u=B.q(d.j(0,"node_type"))
if(u==null)u="file"
t=B.r(d.j(0,"share_type"))
s=E.aQ(B.r(d.j(0,"created_at")))
return new A.aJ(q,x,w,u,t,v,s,d.j(0,r)!=null?E.aQ(B.r(d.j(0,r))):null)},
c4:function c4(d,e){this.b=d
this.c=e},
aJ:function aJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oE:function oE(d){this.a=d},
d8:function d8(){},
fF:function fF(d,e){this.a=d
this.b=e},
d7:function d7(d){this.a=d},
iu:function iu(){},
dM:function dM(d){this.a=d},
BK(d){return A.z0(y.P.a(d))},
z0(d){var x,w,v,u,t,s,r,q="expires_at",p=B.r(d.j(0,"share_id"))
B.r(d.j(0,"node_id"))
x=B.q(d.j(0,"node_name"))
if(x==null)x=B.r(d.j(0,"node_id"))
w=B.q(d.j(0,"node_type"))
if(w==null)w="file"
B.q(d.j(0,"token"))
v=B.q(d.j(0,"link_url"))
if(v==null)v=""
u=B.aA(d.j(0,"password_protected"))
t=B.kW(d.j(0,"download_count"))
if(t==null)t=0
s=B.kW(d.j(0,"max_downloads"))
r=d.j(0,q)!=null?E.aQ(B.r(d.j(0,q))):null
E.aQ(B.r(d.j(0,"created_at")))
return new A.aC(p,x,w,v,u===!0,t,s,r)},
aC:function aC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.c=e
_.d=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k},
c1:function c1(){},
h_:function h_(d,e){this.a=d
this.b=e},
da:function da(d){this.a=d},
iq:function iq(d){this.a=d},
dJ:function dJ(d){this.a=d},
jo:function jo(){},
ef:function ef(d){this.a=d},
hf:function hf(){},
ju:function ju(d){this.a=d},
ej:function ej(d){this.a=d},
BN(d){var x,w,v,u,t,s,r="expires_at"
y.P.a(d)
B.r(d.j(0,"share_id"))
x=B.r(d.j(0,"node_id"))
w=B.q(d.j(0,"node_name"))
if(w==null)w=B.r(d.j(0,"node_id"))
v=B.q(d.j(0,"node_type"))
if(v==null)v="file"
u=B.q(d.j(0,"shared_by"))
if(u==null)u="\u2014"
t=B.q(d.j(0,"permission"))
if(t==null)t="view"
s=E.aQ(B.r(d.j(0,"shared_at")))
if(d.j(0,r)!=null)E.aQ(B.r(d.j(0,r)))
return new A.aI(x,w,v,u,t,s)},
aI:function aI(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
hi:function hi(){},
hj:function hj(d,e){this.a=d
this.b=e},
dc:function dc(d){this.a=d},
ek:function ek(){},
oH:function oH(d,e){this.a=d
this.b=e},
oI:function oI(d){this.a=d},
oP:function oP(d,e){this.a=d
this.b=e},
oQ:function oQ(d){this.a=d},
oJ:function oJ(d,e){this.a=d
this.b=e},
oK:function oK(d){this.a=d},
oL:function oL(d,e){this.a=d
this.b=e},
oM:function oM(d){this.a=d},
oF:function oF(d,e){this.a=d
this.b=e},
oG:function oG(d){this.a=d},
oR:function oR(d,e){this.a=d
this.b=e},
oS:function oS(d){this.a=d},
oN:function oN(d,e){this.a=d
this.b=e},
oO:function oO(d){this.a=d}},C,H
J=c[1]
B=c[0]
D=c[2]
F=c[51]
G=c[76]
E=c[47]
A=a.updateHolder(c[40],A)
C=c[83]
H=c[48]
A.c4.prototype={}
A.aJ.prototype={
gfv(){var x,w
if(this.e==="public_link")return"Public link"
x=this.f
w=x.length
if(w===0)return"\u2014"
if(w===1)return D.b.gca(x).b
return""+w+" members"},
gfi(){var x,w=this.f
if(w.length===0)return"\u2014"
x=D.b.gca(w).c
if(D.b.qi(w,new A.oE(x))){if(0>=x.length)return B.E(x,0)
return x[0].toUpperCase()+D.a.P(x,1)}return"Various"}}
A.d8.prototype={}
A.fF.prototype={}
A.d7.prototype={}
A.iu.prototype={}
A.dM.prototype={}
A.aC.prototype={
gij(){var x=Date.now(),w=this.y
if(w!=null)x=x>w.a
else x=!1
if(x)return"expired"
x=this.x
if(x!=null&&this.w>=x)return"limit_reached"
return"active"},
gqd(){var x=this.x
if(x==null)return""+this.w+" / \u221e"
return""+this.w+" / "+B.V(x)}}
A.c1.prototype={}
A.h_.prototype={}
A.da.prototype={}
A.iq.prototype={}
A.dJ.prototype={}
A.jo.prototype={}
A.ef.prototype={}
A.hf.prototype={}
A.ju.prototype={}
A.ej.prototype={}
A.aI.prototype={
gfi(){var x=this.f,w=x.length
if(w===0)return"\u2014"
if(0>=w)return B.E(x,0)
return x[0].toUpperCase()+D.a.P(x,1)}}
A.hi.prototype={}
A.hj.prototype={}
A.dc.prototype={}
A.ek.prototype={
aV(d,e,f,g,h,i,j){var x=0,w=B.n(y._),v,u,t,s,r,q,p,o
var $async$aV=B.o(function(k,l){if(k===1)return B.k(l,w)
for(;;)switch(x){case 0:o=B.p(["node_id",h,"share_type",j,"grantee_type",g,"grantee_id",f,"permission",i],y.N,y.z)
if(e!=null&&e.length!==0)o.l(0,"expires_at",e)
s=new B.M($.R,y.s)
r=new B.a3(s,y.C)
q=B.f(new b.G.XMLHttpRequest())
q.open("POST","/api/sharing/create")
q.setRequestHeader("Content-Type","application/json")
q.setRequestHeader("X-CSRF-Token",d)
q.onload=B.a_(new A.oH(r,q))
q.onerror=B.a_(new A.oI(r))
q.send(D.c.O(o,null))
x=3
return B.j(s,$async$aV)
case 3:u=l
if(u==null){v=C.h2
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.h1
x=1
break}if(B.A(q.status)<200||B.A(q.status)>=300){s=B.q(J.w(t,"error"))
v=new A.ej(s==null?"Share creation failed":s)
x=1
break}s=B.q(J.w(t,"share_id"))
v=new A.ju(s==null?"":s)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aV,w)},
cd(d){var x=0,w=B.n(y.a),v,u,t,s,r,q,p,o,n,m,l,k
var $async$cd=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=d!=null&&d.length!==0?"/api/sharing/list?cursor="+F.aw(1,d,G.j,!0):"/api/sharing/list"
m=new B.M($.R,y.s)
l=new B.a3(m,y.C)
k=B.f(new b.G.XMLHttpRequest())
k.open("GET",n)
k.onload=B.a_(new A.oP(l,k))
k.onerror=B.a_(new A.oQ(l))
k.send()
x=3
return B.j(m,$async$cd)
case 3:u=f
if(u==null){v=C.eS
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(j){v=C.eR
x=1
break}if(B.A(k.status)<200||B.A(k.status)>=300){m=B.q(J.w(t,"error"))
v=new A.d7(m==null?"Failed to load shares":m)
x=1
break}r=y.g.a(J.w(t,"shares"))
if(r==null)r=[]
m=J.bo(r,y.P)
q=m.$ti
p=q.h("J<P.E,aJ>")
o=B.B(new B.J(m,q.h("aJ(P.E)").a(A.GG()),p),p.h("N.E"))
m=B.q(J.w(t,"next_cursor"))
v=new A.fF(o,m==null?"":m)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cd,w)},
qu(){return this.cd(null)},
du(d,e){var x=0,w=B.n(y.a),v,u,t,s,r,q,p,o
var $async$du=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:q=new B.M($.R,y.s)
p=new B.a3(q,y.C)
o=B.f(new b.G.XMLHttpRequest())
o.open("DELETE","/api/sharing/delete")
o.setRequestHeader("Content-Type","application/json")
o.setRequestHeader("X-CSRF-Token",d)
o.onload=B.a_(new A.oJ(p,o))
o.onerror=B.a_(new A.oK(p))
s=y.N
o.send(D.c.O(B.p(["share_id",e],s,s),null))
x=3
return B.j(q,$async$du)
case 3:u=g
if(u==null){v=C.dL
x=1
break}if(B.A(o.status)<200||B.A(o.status)>=300){t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.dK
x=1
break}q=B.q(J.w(t,"error"))
v=new A.dM(q==null?"Failed to revoke share":q)
x=1
break}v=C.cV
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$du,w)},
cb(d){var x=0,w=B.n(y.w),v,u,t,s,r,q,p,o,n,m,l,k
var $async$cb=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=d!=null&&d.length!==0?"/api/sharing/public-links?cursor="+F.aw(1,d,G.j,!0):"/api/sharing/public-links"
m=new B.M($.R,y.s)
l=new B.a3(m,y.C)
k=B.f(new b.G.XMLHttpRequest())
k.open("GET",n)
k.onload=B.a_(new A.oL(l,k))
k.onerror=B.a_(new A.oM(l))
k.send()
x=3
return B.j(m,$async$cb)
case 3:u=f
if(u==null){v=C.fq
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(j){v=C.fr
x=1
break}if(B.A(k.status)<200||B.A(k.status)>=300){m=B.q(J.w(t,"error"))
v=new A.da(m==null?"Failed to load public links":m)
x=1
break}r=y.g.a(J.w(t,"items"))
if(r==null)r=[]
m=J.bo(r,y.P)
q=m.$ti
p=q.h("J<P.E,aC>")
o=B.B(new B.J(m,q.h("aC(P.E)").a(A.GK()),p),p.h("N.E"))
m=B.q(J.w(t,"next_cursor"))
v=new A.h_(o,m==null?"":m)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cb,w)},
qs(){return this.cb(null)},
dr(d,e,f,g,h){var x=0,w=B.n(y.w),v,u,t,s,r,q,p,o
var $async$dr=B.o(function(i,j){if(i===1)return B.k(j,w)
for(;;)switch(x){case 0:o=B.p(["node_id",g],y.N,y.z)
if(h!=null&&h.length!==0)o.l(0,"password",h)
if(f!=null)o.l(0,"max_downloads",f)
if(e!=null&&e.length!==0)o.l(0,"expires_at",e)
s=new B.M($.R,y.s)
r=new B.a3(s,y.C)
q=B.f(new b.G.XMLHttpRequest())
q.open("POST","/api/sharing/public-links/create")
q.setRequestHeader("Content-Type","application/json")
q.setRequestHeader("X-CSRF-Token",d)
q.onload=B.a_(new A.oF(r,q))
q.onerror=B.a_(new A.oG(r))
q.send(D.c.O(o,null))
x=3
return B.j(s,$async$dr)
case 3:u=j
if(u==null){v=C.dD
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.dC
x=1
break}if(B.A(q.status)<200||B.A(q.status)>=300){s=B.q(J.w(t,"error"))
v=new A.dJ(s==null?"Failed to create public link":s)
x=1
break}v=new A.iq(A.z0(t))
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dr,w)},
dO(d,e){var x=0,w=B.n(y.w),v,u,t,s,r,q,p,o
var $async$dO=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:q=new B.M($.R,y.s)
p=new B.a3(q,y.C)
o=B.f(new b.G.XMLHttpRequest())
o.open("DELETE","/api/sharing/public-links/revoke")
o.setRequestHeader("Content-Type","application/json")
o.setRequestHeader("X-CSRF-Token",d)
o.onload=B.a_(new A.oR(p,o))
o.onerror=B.a_(new A.oS(p))
s=y.N
o.send(D.c.O(B.p(["share_id",e],s,s),null))
x=3
return B.j(q,$async$dO)
case 3:u=g
if(u==null){v=C.fR
x=1
break}if(B.A(o.status)<200||B.A(o.status)>=300){t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.fS
x=1
break}q=B.q(J.w(t,"error"))
v=new A.ef(q==null?"Failed to revoke public link":q)
x=1
break}v=C.dl
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dO,w)},
cc(d){var x=0,w=B.n(y.h),v,u,t,s,r,q,p,o,n,m,l,k
var $async$cc=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=d!=null&&d.length!==0?"/api/sharing/received?cursor="+F.aw(1,d,G.j,!0):"/api/sharing/received"
m=new B.M($.R,y.s)
l=new B.a3(m,y.C)
k=B.f(new b.G.XMLHttpRequest())
k.open("GET",n)
k.onload=B.a_(new A.oN(l,k))
k.onerror=B.a_(new A.oO(l))
k.send()
x=3
return B.j(m,$async$cc)
case 3:u=f
if(u==null){v=C.h6
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(j){v=C.h7
x=1
break}if(B.A(k.status)<200||B.A(k.status)>=300){m=B.q(J.w(t,"error"))
v=new A.dc(m==null?"Failed to load received shares":m)
x=1
break}r=y.g.a(J.w(t,"items"))
if(r==null)r=[]
m=J.bo(r,y.P)
q=m.$ti
p=q.h("J<P.E,aI>")
o=B.B(new B.J(m,q.h("aI(P.E)").a(A.GO()),p),p.h("N.E"))
m=B.q(J.w(t,"next_cursor"))
v=new A.hj(o,m==null?"":m)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cc,w)},
qt(){return this.cc(null)}}
var z=a.updateTypes(["G(c4)","c4(z<d,@>)","aJ(z<d,@>)","aC(z<d,@>)","aI(z<d,@>)"])
A.oE.prototype={
$1(d){return y.R.a(d).c===this.a},
$S:z+0}
A.oH.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oI.prototype={
$1(d){this.a.A(null)},
$S:2}
A.oP.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oQ.prototype={
$1(d){this.a.A(null)},
$S:2}
A.oJ.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oK.prototype={
$1(d){this.a.A(null)},
$S:2}
A.oL.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oM.prototype={
$1(d){this.a.A(null)},
$S:2}
A.oF.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oG.prototype={
$1(d){this.a.A(null)},
$S:2}
A.oR.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oS.prototype={
$1(d){this.a.A(null)},
$S:2}
A.oN.prototype={
$1(d){this.a.A(B.r(this.b.responseText))},
$S:2}
A.oO.prototype={
$1(d){this.a.A(null)},
$S:2};(function installTearOffs(){var x=a._static_1
x(A,"GH","BV",1)
x(A,"GG","BU",2)
x(A,"GK","BK",3)
x(A,"GO","BN",4)})();(function inheritance(){var x=a.inheritMany
x(B.I,[A.c4,A.aJ,A.d8,A.aC,A.c1,A.hf,A.aI,A.hi,A.ek])
x(B.a0,[A.oE,A.oH,A.oI,A.oP,A.oQ,A.oJ,A.oK,A.oL,A.oM,A.oF,A.oG,A.oR,A.oS,A.oN,A.oO])
x(A.d8,[A.fF,A.d7,A.iu,A.dM])
x(A.c1,[A.h_,A.da,A.iq,A.dJ,A.jo,A.ef])
x(A.hf,[A.ju,A.ej])
x(A.hi,[A.hj,A.dc])})()
B.X(b.typeUniverse,JSON.parse('{"fF":{"d8":[]},"d7":{"d8":[]},"iu":{"d8":[]},"dM":{"d8":[]},"h_":{"c1":[]},"da":{"c1":[]},"iq":{"c1":[]},"dJ":{"c1":[]},"jo":{"c1":[]},"ef":{"c1":[]},"ju":{"hf":[]},"ej":{"hf":[]},"hj":{"hi":[]},"dc":{"hi":[]}}'))
var y=(function rtii(){var x=B.i
return{P:x("z<d,@>"),a:x("d8"),w:x("c1"),R:x("c4"),_:x("hf"),h:x("hi"),N:x("d"),C:x("a3<d?>"),s:x("M<d?>"),z:x("@"),g:x("H<@>?")}})();(function constants(){C.cV=new A.iu()
C.dl=new A.jo()
C.dC=new A.dJ("Unexpected server response")
C.dD=new A.dJ("Network error")
C.dK=new A.dM("Unexpected server response")
C.dL=new A.dM("Network error")
C.a2=new H.W("name","Name",3,!0)
C.eR=new A.d7("Unexpected server response")
C.eS=new A.d7("Network error")
C.fq=new A.da("Network error")
C.fr=new A.da("Unexpected server response")
C.fR=new A.ef("Network error")
C.fS=new A.ef("Unexpected server response")
C.h1=new A.ej("Unexpected server response")
C.h2=new A.ej("Network error")
C.h6=new A.dc("Network error")
C.h7=new A.dc("Unexpected server response")})()};
(a=>{a["jHJZRYMz+D3f1XMvrfXGVhzWbKY="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_142.part.js.map
