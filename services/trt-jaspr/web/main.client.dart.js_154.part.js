((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,F,G,E,A={
Di(d){y.P.a(d)
B.q(d.j(0,"grantee_type"))
return new A.c9(B.q(d.j(0,"grantee_id")),B.q(d.j(0,"permission")))},
Dh(d){var x,w,v,u,t,s,r="expires_at",q=y.P
q.a(d)
x=y.g.a(d.j(0,"members"))
q=J.bt(x==null?[]:x,q)
x=q.$ti
w=x.h("G<R.E,c9>")
v=B.A(new B.G(q,x.h("c9(R.E)").a(A.Ij()),w),w.h("M.E"))
q=B.q(d.j(0,"share_id"))
x=B.q(d.j(0,"node_id"))
w=B.r(d.j(0,"node_name"))
if(w==null)w=B.q(d.j(0,"node_id"))
u=B.r(d.j(0,"node_type"))
if(u==null)u="file"
t=B.q(d.j(0,"share_type"))
s=E.aQ(B.q(d.j(0,"created_at")))
return new A.aM(q,x,w,u,t,v,s,d.j(0,r)!=null?E.aQ(B.q(d.j(0,r))):null)},
c9:function c9(d,e){this.b=d
this.c=e},
aM:function aM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
pt:function pt(d){this.a=d},
di:function di(){},
fX:function fX(d,e){this.a=d
this.b=e},
dh:function dh(d){this.a=d},
iV:function iV(){},
dZ:function dZ(d){this.a=d},
D7(d){return A.Ae(y.P.a(d))},
Ae(d){var x,w,v,u,t,s,r,q="expires_at",p=B.q(d.j(0,"share_id"))
B.q(d.j(0,"node_id"))
x=B.r(d.j(0,"node_name"))
if(x==null)x=B.q(d.j(0,"node_id"))
w=B.r(d.j(0,"node_type"))
if(w==null)w="file"
B.r(d.j(0,"token"))
v=B.r(d.j(0,"link_url"))
if(v==null)v=""
u=B.au(d.j(0,"password_protected"))
t=B.dA(d.j(0,"download_count"))
if(t==null)t=0
s=B.dA(d.j(0,"max_downloads"))
r=d.j(0,q)!=null?E.aQ(B.q(d.j(0,q))):null
E.aQ(B.q(d.j(0,"created_at")))
return new A.aF(p,x,w,v,u===!0,t,s,r)},
aF:function aF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.c=e
_.d=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k},
c6:function c6(){},
ho:function ho(d,e){this.a=d
this.b=e},
dn:function dn(d){this.a=d},
iR:function iR(d){this.a=d},
dW:function dW(d){this.a=d},
jW:function jW(){},
es:function es(d){this.a=d},
hE:function hE(){},
k1:function k1(d){this.a=d},
ew:function ew(d){this.a=d},
Da(d){var x,w,v,u,t,s,r="expires_at"
y.P.a(d)
B.q(d.j(0,"share_id"))
x=B.q(d.j(0,"node_id"))
w=B.r(d.j(0,"node_name"))
if(w==null)w=B.q(d.j(0,"node_id"))
v=B.r(d.j(0,"node_type"))
if(v==null)v="file"
u=B.r(d.j(0,"shared_by"))
if(u==null)u="\u2014"
t=B.r(d.j(0,"permission"))
if(t==null)t="view"
s=E.aQ(B.q(d.j(0,"shared_at")))
if(d.j(0,r)!=null)E.aQ(B.q(d.j(0,r)))
return new A.aL(x,w,v,u,t,s)},
aL:function aL(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
hH:function hH(){},
hI:function hI(d,e){this.a=d
this.b=e},
dq:function dq(d){this.a=d},
ex:function ex(){},
pw:function pw(d,e){this.a=d
this.b=e},
px:function px(d){this.a=d},
pE:function pE(d,e){this.a=d
this.b=e},
pF:function pF(d){this.a=d},
py:function py(d,e){this.a=d
this.b=e},
pz:function pz(d){this.a=d},
pA:function pA(d,e){this.a=d
this.b=e},
pB:function pB(d){this.a=d},
pu:function pu(d,e){this.a=d
this.b=e},
pv:function pv(d){this.a=d},
pG:function pG(d,e){this.a=d
this.b=e},
pH:function pH(d){this.a=d},
pC:function pC(d,e){this.a=d
this.b=e},
pD:function pD(d){this.a=d}},C,H
J=c[1]
B=c[0]
D=c[2]
F=c[55]
G=c[83]
E=c[56]
A=a.updateHolder(c[45],A)
C=c[90]
H=c[53]
A.c9.prototype={}
A.aM.prototype={
gfT(){var x,w
if(this.e==="public_link")return"Public link"
x=this.f
w=x.length
if(w===0)return"\u2014"
if(w===1)return D.b.gbG(x).b
return""+w+" members"},
gfG(){var x,w=this.f
if(w.length===0)return"\u2014"
x=D.b.gbG(w).c
if(D.b.r9(w,new A.pt(x))){if(0>=x.length)return B.B(x,0)
return x[0].toUpperCase()+D.a.N(x,1)}return"Various"}}
A.di.prototype={}
A.fX.prototype={}
A.dh.prototype={}
A.iV.prototype={}
A.dZ.prototype={}
A.aF.prototype={
giM(){var x=Date.now(),w=this.y
if(w!=null)x=x>w.a
else x=!1
if(x)return"expired"
x=this.x
if(x!=null&&this.w>=x)return"limit_reached"
return"active"},
gr4(){var x=this.x
if(x==null)return""+this.w+" / \u221e"
return""+this.w+" / "+B.V(x)}}
A.c6.prototype={}
A.ho.prototype={}
A.dn.prototype={}
A.iR.prototype={}
A.dW.prototype={}
A.jW.prototype={}
A.es.prototype={}
A.hE.prototype={}
A.k1.prototype={}
A.ew.prototype={}
A.aL.prototype={
gfG(){var x=this.f,w=x.length
if(w===0)return"\u2014"
if(0>=w)return B.B(x,0)
return x[0].toUpperCase()+D.a.N(x,1)}}
A.hH.prototype={}
A.hI.prototype={}
A.dq.prototype={}
A.ex.prototype={
aW(d,e,f,g,h,i,j){var x=0,w=B.n(y._),v,u,t,s,r,q,p,o
var $async$aW=B.o(function(k,l){if(k===1)return B.k(l,w)
for(;;)switch(x){case 0:o=B.p(["node_id",h,"share_type",j,"grantee_type",g,"grantee_id",f,"permission",i],y.N,y.z)
if(e!=null&&e.length!==0)o.l(0,"expires_at",e)
s=new B.N($.Q,y.s)
r=new B.a3(s,y.C)
q=B.f(new b.G.XMLHttpRequest())
q.open("POST","/api/sharing/create")
q.setRequestHeader("Content-Type","application/json")
q.setRequestHeader("X-CSRF-Token",d)
q.onload=B.X(new A.pw(r,q))
q.onerror=B.X(new A.px(r))
q.send(D.c.P(o,null))
x=3
return B.j(s,$async$aW)
case 3:u=l
if(u==null){v=C.hC
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.hB
x=1
break}if(B.E(q.status)<200||B.E(q.status)>=300){s=B.r(J.w(t,"error"))
v=new A.ew(s==null?"Share creation failed":s)
x=1
break}s=B.r(J.w(t,"share_id"))
v=new A.k1(s==null?"":s)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aW,w)},
cm(d){var x=0,w=B.n(y.a),v,u,t,s,r,q,p,o,n,m,l,k
var $async$cm=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=d!=null&&d.length!==0?"/api/sharing/list?cursor="+F.aB(1,d,G.i,!0):"/api/sharing/list"
m=new B.N($.Q,y.s)
l=new B.a3(m,y.C)
k=B.f(new b.G.XMLHttpRequest())
k.open("GET",n)
k.onload=B.X(new A.pE(l,k))
k.onerror=B.X(new A.pF(l))
k.send()
x=3
return B.j(m,$async$cm)
case 3:u=f
if(u==null){v=C.f8
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(j){v=C.f7
x=1
break}if(B.E(k.status)<200||B.E(k.status)>=300){m=B.r(J.w(t,"error"))
v=new A.dh(m==null?"Failed to load shares":m)
x=1
break}r=y.g.a(J.w(t,"shares"))
if(r==null)r=[]
m=J.bt(r,y.P)
q=m.$ti
p=q.h("G<R.E,aM>")
o=B.A(new B.G(m,q.h("aM(R.E)").a(A.Ii()),p),p.h("M.E"))
m=B.r(J.w(t,"next_cursor"))
v=new A.fX(o,m==null?"":m)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cm,w)},
ro(){return this.cm(null)},
dK(d,e){var x=0,w=B.n(y.a),v,u,t,s,r,q,p,o
var $async$dK=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:q=new B.N($.Q,y.s)
p=new B.a3(q,y.C)
o=B.f(new b.G.XMLHttpRequest())
o.open("DELETE","/api/sharing/delete")
o.setRequestHeader("Content-Type","application/json")
o.setRequestHeader("X-CSRF-Token",d)
o.onload=B.X(new A.py(p,o))
o.onerror=B.X(new A.pz(p))
s=y.N
o.send(D.c.P(B.p(["share_id",e],s,s),null))
x=3
return B.j(q,$async$dK)
case 3:u=g
if(u==null){v=C.e_
x=1
break}if(B.E(o.status)<200||B.E(o.status)>=300){t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.dZ
x=1
break}q=B.r(J.w(t,"error"))
v=new A.dZ(q==null?"Failed to revoke share":q)
x=1
break}v=C.d3
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dK,w)},
ck(d){var x=0,w=B.n(y.w),v,u,t,s,r,q,p,o,n,m,l,k
var $async$ck=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=d!=null&&d.length!==0?"/api/sharing/public-links?cursor="+F.aB(1,d,G.i,!0):"/api/sharing/public-links"
m=new B.N($.Q,y.s)
l=new B.a3(m,y.C)
k=B.f(new b.G.XMLHttpRequest())
k.open("GET",n)
k.onload=B.X(new A.pA(l,k))
k.onerror=B.X(new A.pB(l))
k.send()
x=3
return B.j(m,$async$ck)
case 3:u=f
if(u==null){v=C.h_
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(j){v=C.h0
x=1
break}if(B.E(k.status)<200||B.E(k.status)>=300){m=B.r(J.w(t,"error"))
v=new A.dn(m==null?"Failed to load public links":m)
x=1
break}r=y.g.a(J.w(t,"items"))
if(r==null)r=[]
m=J.bt(r,y.P)
q=m.$ti
p=q.h("G<R.E,aF>")
o=B.A(new B.G(m,q.h("aF(R.E)").a(A.Im()),p),p.h("M.E"))
m=B.r(J.w(t,"next_cursor"))
v=new A.ho(o,m==null?"":m)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$ck,w)},
rm(){return this.ck(null)},
dH(d,e,f,g,h){var x=0,w=B.n(y.w),v,u,t,s,r,q,p,o
var $async$dH=B.o(function(i,j){if(i===1)return B.k(j,w)
for(;;)switch(x){case 0:o=B.p(["node_id",g],y.N,y.z)
if(h!=null&&h.length!==0)o.l(0,"password",h)
if(f!=null)o.l(0,"max_downloads",f)
if(e!=null&&e.length!==0)o.l(0,"expires_at",e)
s=new B.N($.Q,y.s)
r=new B.a3(s,y.C)
q=B.f(new b.G.XMLHttpRequest())
q.open("POST","/api/sharing/public-links/create")
q.setRequestHeader("Content-Type","application/json")
q.setRequestHeader("X-CSRF-Token",d)
q.onload=B.X(new A.pu(r,q))
q.onerror=B.X(new A.pv(r))
q.send(D.c.P(o,null))
x=3
return B.j(s,$async$dH)
case 3:u=j
if(u==null){v=C.dS
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.dR
x=1
break}if(B.E(q.status)<200||B.E(q.status)>=300){s=B.r(J.w(t,"error"))
v=new A.dW(s==null?"Failed to create public link":s)
x=1
break}v=new A.iR(A.Ae(t))
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dH,w)},
e3(d,e){var x=0,w=B.n(y.w),v,u,t,s,r,q,p,o
var $async$e3=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:q=new B.N($.Q,y.s)
p=new B.a3(q,y.C)
o=B.f(new b.G.XMLHttpRequest())
o.open("DELETE","/api/sharing/public-links/revoke")
o.setRequestHeader("Content-Type","application/json")
o.setRequestHeader("X-CSRF-Token",d)
o.onload=B.X(new A.pG(p,o))
o.onerror=B.X(new A.pH(p))
s=y.N
o.send(D.c.P(B.p(["share_id",e],s,s),null))
x=3
return B.j(q,$async$e3)
case 3:u=g
if(u==null){v=C.hq
x=1
break}if(B.E(o.status)<200||B.E(o.status)>=300){t=null
try{t=y.P.a(D.c.q(u,null))}catch(n){v=C.hr
x=1
break}q=B.r(J.w(t,"error"))
v=new A.es(q==null?"Failed to revoke public link":q)
x=1
break}v=C.dB
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$e3,w)},
cl(d){var x=0,w=B.n(y.h),v,u,t,s,r,q,p,o,n,m,l,k
var $async$cl=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=d!=null&&d.length!==0?"/api/sharing/received?cursor="+F.aB(1,d,G.i,!0):"/api/sharing/received"
m=new B.N($.Q,y.s)
l=new B.a3(m,y.C)
k=B.f(new b.G.XMLHttpRequest())
k.open("GET",n)
k.onload=B.X(new A.pC(l,k))
k.onerror=B.X(new A.pD(l))
k.send()
x=3
return B.j(m,$async$cl)
case 3:u=f
if(u==null){v=C.hG
x=1
break}t=null
try{t=y.P.a(D.c.q(u,null))}catch(j){v=C.hH
x=1
break}if(B.E(k.status)<200||B.E(k.status)>=300){m=B.r(J.w(t,"error"))
v=new A.dq(m==null?"Failed to load received shares":m)
x=1
break}r=y.g.a(J.w(t,"items"))
if(r==null)r=[]
m=J.bt(r,y.P)
q=m.$ti
p=q.h("G<R.E,aL>")
o=B.A(new B.G(m,q.h("aL(R.E)").a(A.Ip()),p),p.h("M.E"))
m=B.r(J.w(t,"next_cursor"))
v=new A.hI(o,m==null?"":m)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cl,w)},
rn(){return this.cl(null)}}
var z=a.updateTypes(["F(c9)","c9(z<d,@>)","aM(z<d,@>)","aF(z<d,@>)","aL(z<d,@>)"])
A.pt.prototype={
$1(d){return y.R.a(d).c===this.a},
$S:z+0}
A.pw.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.px.prototype={
$1(d){this.a.A(null)},
$S:2}
A.pE.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.pF.prototype={
$1(d){this.a.A(null)},
$S:2}
A.py.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.pz.prototype={
$1(d){this.a.A(null)},
$S:2}
A.pA.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.pB.prototype={
$1(d){this.a.A(null)},
$S:2}
A.pu.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.pv.prototype={
$1(d){this.a.A(null)},
$S:2}
A.pG.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.pH.prototype={
$1(d){this.a.A(null)},
$S:2}
A.pC.prototype={
$1(d){this.a.A(B.q(this.b.responseText))},
$S:2}
A.pD.prototype={
$1(d){this.a.A(null)},
$S:2};(function installTearOffs(){var x=a._static_1
x(A,"Ij","Di",1)
x(A,"Ii","Dh",2)
x(A,"Im","D7",3)
x(A,"Ip","Da",4)})();(function inheritance(){var x=a.inheritMany
x(B.J,[A.c9,A.aM,A.di,A.aF,A.c6,A.hE,A.aL,A.hH,A.ex])
x(B.Z,[A.pt,A.pw,A.px,A.pE,A.pF,A.py,A.pz,A.pA,A.pB,A.pu,A.pv,A.pG,A.pH,A.pC,A.pD])
x(A.di,[A.fX,A.dh,A.iV,A.dZ])
x(A.c6,[A.ho,A.dn,A.iR,A.dW,A.jW,A.es])
x(A.hE,[A.k1,A.ew])
x(A.hH,[A.hI,A.dq])})()
B.W(b.typeUniverse,JSON.parse('{"fX":{"di":[]},"dh":{"di":[]},"iV":{"di":[]},"dZ":{"di":[]},"ho":{"c6":[]},"dn":{"c6":[]},"iR":{"c6":[]},"dW":{"c6":[]},"jW":{"c6":[]},"es":{"c6":[]},"k1":{"hE":[]},"ew":{"hE":[]},"hI":{"hH":[]},"dq":{"hH":[]}}'))
var y=(function rtii(){var x=B.h
return{P:x("z<d,@>"),a:x("di"),w:x("c6"),R:x("c9"),_:x("hE"),h:x("hH"),N:x("d"),C:x("a3<d?>"),s:x("N<d?>"),z:x("@"),g:x("I<@>?")}})();(function constants(){C.d3=new A.iV()
C.dB=new A.jW()
C.dR=new A.dW("Unexpected server response")
C.dS=new A.dW("Network error")
C.dZ=new A.dZ("Unexpected server response")
C.e_=new A.dZ("Network error")
C.a2=new H.a_("name","Name",3,!0)
C.f7=new A.dh("Unexpected server response")
C.f8=new A.dh("Network error")
C.h_=new A.dn("Network error")
C.h0=new A.dn("Unexpected server response")
C.hq=new A.es("Network error")
C.hr=new A.es("Unexpected server response")
C.hB=new A.ew("Unexpected server response")
C.hC=new A.ew("Network error")
C.hG=new A.dq("Network error")
C.hH=new A.dq("Unexpected server response")})()};
(a=>{a["ElG6dMJaK7D56dr7PYRSDxqiqKk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_154.part.js.map
