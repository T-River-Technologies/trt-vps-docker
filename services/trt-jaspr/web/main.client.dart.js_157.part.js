((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,I,K,N,L,B={c2:function c2(){},jg:function jg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},je:function je(d){this.a=d},jc:function jc(d){this.a=d},jd:function jd(){},jf:function jf(){},ea:function ea(d){this.a=d},ok:function ok(){},ol:function ol(d,e){this.a=d
this.b=e},om:function om(d){this.a=d},on:function on(d,e){this.a=d
this.b=e},oo:function oo(d){this.a=d},jb:function jb(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},c3:function c3(d,e){this.a=d
this.b=e},aS:function aS(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},l5:function l5(d,e){this.c=d
this.a=e},lk:function lk(d,e){this.c=d
this.a=e},fT:function fT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},kt:function kt(){this.d=""
this.c=this.a=null},uE:function uE(d){this.a=d},uD:function uD(d,e){this.a=d
this.b=e},lN:function lN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
BM(d,e,f,g){return new B.cy(g,d,f,e,null)},
cy:function cy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ky:function ky(){this.d=$
this.c=this.a=null},
vg:function vg(d){this.a=d},
ve:function ve(){},
vf:function vf(){},
vd:function vd(d){this.a=d},
yL(d){var x,w
try{x=N.aQ(d)
return x}catch(w){if(A.aF(w) instanceof A.lq)return null
else throw w}}},C,M,E,F,G,O,H,P,Q,R,S
J=c[1]
A=c[0]
D=c[2]
I=c[51]
K=c[76]
N=c[47]
L=c[81]
B=a.updateHolder(c[16],B)
C=c[84]
M=c[58]
E=c[50]
F=c[56]
G=c[61]
O=c[52]
H=c[57]
P=c[60]
Q=c[46]
R=c[74]
S=c[54]
B.c2.prototype={}
B.jg.prototype={}
B.je.prototype={}
B.jc.prototype={}
B.jd.prototype={}
B.jf.prototype={}
B.ea.prototype={}
B.ok.prototype={
cv(d){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p
var $async$cv=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=I.aw(2,d,K.j,!1)
r=new A.M($.R,y.s)
q=new A.a3(r,y.d)
p=A.f(new b.G.XMLHttpRequest())
p.open("GET","/api/public/share/"+s)
p.onload=A.a_(new B.ol(q,p))
p.onerror=A.a_(new B.om(q))
p.send()
x=3
return A.j(r,$async$cv)
case 3:t=f
if(t==null){v=C.bB
x=1
break}v=u.hi(t,A.A(p.status))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cv,w)},
bd(d,e){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o
var $async$bd=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:r=u.nx()
q=new A.M($.R,y.s)
p=new A.a3(q,y.d)
o=A.f(new b.G.XMLHttpRequest())
o.open("POST","/api/public/verify")
o.setRequestHeader("Content-Type","application/json")
o.setRequestHeader("X-CSRF-Token",r)
o.onload=A.a_(new B.on(p,o))
o.onerror=A.a_(new B.oo(p))
t=y.w
o.send(D.c.O(A.p(["token",d,"password",e],t,t),null))
x=3
return A.j(q,$async$bd)
case 3:s=g
if(s==null){v=C.bB
x=1
break}v=u.hi(s,A.A(o.status))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$bd,w)},
nx(){var x,w,v,u,t
for(x=A.r(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=D.a.Y(u,"=")
if(t<0)continue
if(D.a.u(D.a.L(u,0,t))==="hs_csrf")return D.a.u(D.a.P(u,t+1))}return""},
hi(d,e){var x,w,v,u,t,s,r,q="file_name",p="expires_at",o=null
try{o=y.y.a(D.c.q(d,null))}catch(x){return C.fv}w=A.q(J.w(o,"status"))
if(w==null)w=""
if(w==="available"){v=A.q(J.w(o,q))
if(v==null)v=""
u=A.q(J.w(o,"node_type"))
if(u==null)u="file"
t=A.kW(J.w(o,"download_count"))
if(t==null)t=0
s=A.q(J.w(o,"created_at"))
s=B.yL(s==null?"":s)
if(s==null)s=new E.aU(Date.now(),0,!1)
r=A.kW(J.w(o,"max_downloads"))
return new B.jg(v,u,t,s,r,J.w(o,p)!=null?B.yL(A.r(J.w(o,p))):null)}if(w==="password_required"){v=A.q(J.w(o,q))
return new B.je(v==null?"":v)}if(w==="expired"||w==="not_found"||e===404){v=A.q(J.w(o,"reason"))
return new B.jc(v==null?"not_found":v)}if(w==="invalid_password"||e===401)return C.d9
if(w==="rate_limited"||e===429)return C.da
v=A.q(J.w(o,"error"))
return new B.ea(v==null?"failed to load share info":v)}}
B.jb.prototype={
cj(d){var x=0,w=A.n(y.v),v=this
var $async$cj=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.i(C.bC)
x=2
return A.j(v.x.cv(d),$async$cj)
case 2:v.fJ(f)
return A.l(null,w)}})
return A.m($async$cj,w)},
bd(d,e){var x=0,w=A.n(y.v),v=this
var $async$bd=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.i(v.c.eW(null,C.bE))
x=2
return A.j(v.x.bd(d,e),$async$bd)
case 2:v.fJ(g)
return A.l(null,w)}})
return A.m($async$bd,w)},
fJ(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null
A:{x=d instanceof B.jg
w=l
v=l
u=l
t=l
s=l
if(x){r=d.a
w=d.b
v=d.c
u=d.d
t=d.e
s=d.f
q=r}else{q=l
r=q}if(x){m.i(new B.aS(C.bD,q,w,v,u,t,s,l,l,l))
break A}x=d instanceof B.je
if(x)q=d.a
else q=l
if(x){m.i(new B.aS(C.fx,q,l,l,l,l,l,l,l,l))
break A}p=d instanceof B.jc
o=p?d.a:l
if(p){m.i(new B.aS(C.fy,l,l,l,l,l,l,l,l,o))
break A}if(d instanceof B.jd){m.i(m.c.eW("Incorrect password. Please try again.",C.fA))
break A}if(d instanceof B.jf){m.i(m.c.eW(l,C.fB))
break A}p=d instanceof B.ea
n=p?d.a:l
if(p)m.i(new B.aS(C.fz,l,l,l,l,l,l,n,l,l))}}}
B.c3.prototype={
C(){return"PublicShareStatus."+this.b}}
B.aS.prototype={
eW(d,e){var x=this,w=d==null?x.x:d
return new B.aS(e,x.b,x.c,x.d,x.e,x.f,x.r,x.w,w,x.y)}}
B.l5.prototype={
n(d){var x=null,w=y.w,v=y.F
return new A.b("footer",x,"hs-public-footer",x,x,x,A.a([new A.b("p",x,"hs-public-footer__cta",x,x,x,A.a([new A.c("Store your files securely \u2014 ",x),new A.b("a",x,"hs-public-footer__link",x,A.p(["href","/register"],w,w),x,A.a([new A.c("Sign up free",x)],v),x)],v),x),new A.b("p",x,"hs-public-footer__brand",x,x,x,A.a([new A.c("Powered by "+this.c,x)],v),x)],v),x)}}
B.lk.prototype={
n(d){var x=null,w=y.w,v=y.F
return new A.b("div",x,"hs-public-download",x,x,x,A.a([new A.b("a",x,"hs-public-download__btn",x,A.p(["href","/s/"+I.aw(2,this.c,K.j,!1)+"/download"],w,w),x,A.a([new A.b("span",x,"material-icons hs-public-download__icon",x,x,x,A.a([new A.c("download",x)],v),x),new A.c("Download",x)],v),x)],v),x)}}
B.fT.prototype={
B(){return new B.kt()},
dH(d){return this.d.$1(d)}}
B.kt.prototype={
n4(){var x=this.d
if(x.length===0)return
this.a.dH(x)},
n(d){var x=this,w=null,v=y.F,u=A.a([new A.b("span",w,"material-icons hs-public-password__icon",w,w,w,A.a([new A.c("lock",w)],v),w),new A.b("h2",w,"hs-public-password__title",w,w,w,A.a([new A.c("This link is password protected",w)],v),w),new A.b("p",w,"hs-public-password__file-name",w,w,w,A.a([new A.c(x.a.c,w)],v),w),O.an(!1,w,w,x.a.f,!0,"Password",new B.uE(x),"Enter password",w)],v),t=x.a.e
if(t!=null)u.push(new A.b("p",w,"hs-public-password__error",w,w,w,A.a([new A.c(t,w)],v),w))
v=x.a.f
t=v?"Verifying\u2026":"Access File"
v=v||x.d.length===0
u.push(new F.C(t,G.p,x.gn3(),!1,v,w))
return new A.b("div",w,"hs-public-password",w,w,w,u,w)}}
B.lN.prototype={
n(d){var x=this,w=null,v=x.d==="directory"?"folder":"insert_drive_file",u=y.F,t=A.a([new A.c(v,w)],u),s=A.a([new A.c(x.c,w)],u),r=x.ee("Shared",x.ho(x.f)),q=x.r,p=""+x.e
r=A.a([r,x.ee("Downloads",q!=null?p+" / "+A.V(q):p)],u)
q=x.w
if(q!=null)r.push(x.ee("Expires",x.ho(q)))
return new S.as(new A.b("div",w,"hs-public-file-card",w,w,w,A.a([new A.b("span",w,"material-icons hs-public-file-card__icon",w,w,w,t,w),new A.b("h2",w,"hs-public-file-card__name",w,w,w,s,w),new A.b("div",w,"hs-public-file-card__meta",w,w,w,r,w)],u),w),w)},
ee(d,e){var x=null,w=y.F
return new A.b("div",x,"hs-public-file-card__meta-row",x,x,x,A.a([new A.b("span",x,"hs-public-file-card__meta-label",x,x,x,A.a([new A.c(d,x)],w),x),new A.b("span",x,"hs-public-file-card__meta-value",x,x,x,A.a([new A.c(e,x)],w),x)],w),x)},
ho(d){var x=E.c_(d)-1
if(!(x>=0&&x<12))return A.E(L.o,x)
return L.o[x]+" "+E.bZ(d)+", "+E.c0(d)}}
B.cy.prototype={
B(){return new B.ky()}}
B.ky.prototype={
F(){this.G()
var x=new B.jb(new B.ok(),P.m,C.bC)
this.d=x
x.cj(this.a.c)},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
lY(d){var x=this.d
x===$&&A.h()
x.bd(this.a.c,d)},
h8(){var x,w=b.G,v=A.Z(A.f(w.document).head)
if((v==null?null:A.Z(v.querySelector('meta[name="robots"]')))!=null)return
x=A.f(A.f(w.document).createElement("meta"))
x.setAttribute("name","robots")
x.setAttribute("content","noindex, nofollow")
w=A.Z(A.f(w.document).head)
if(w!=null)w.append(x)},
n(d){var x=this.d
x===$&&A.h()
return new H.S(x,new B.vg(this),null,y.m)},
jy(d){var x,w,v,u=this,t=null,s=y.w,r=A.p(["href","/"],s,s),q=u.a
q=A.p(["src",q.e,"alt",q.d],s,s)
x=y.F
w=A.a([],x)
v=u.a
return new Q.aL(new A.b("div",t,"hs-public-header",t,t,t,A.a([new A.b("a",t,t,t,r,t,A.a([new A.b("img",t,"hs-public-header__logo hs-public-header__logo--light",t,q,t,w,t),new A.b("img",t,"hs-public-header__logo hs-public-header__logo--dark",t,A.p(["src",v.f,"alt",v.d],s,s),t,A.a([],x),t)],x),t)],x),t),A.a([new F.C("Login",G.e,new B.ve(),!1,!1,t),new F.C("Get Started",G.p,new B.vf(),!1,!1,t)],x),R.t,new A.b("div",t,"hs-public-content",t,t,t,A.a([u.nv(d),new B.l5(u.a.d,t)],x),t),t)},
nv(d){var x,w,v,u,t,s,r=this,q=null
switch(d.a.a){case 0:x=y.F
x=new A.b("div",q,"hs-public-loading",q,q,q,A.a([new A.b("p",q,q,q,q,q,A.a([new A.c("Loading\u2026",q)],x),q)],x),q)
break
case 1:x=d.c
w=x==null
v=w?"file":x
u=d.b
if(u==null)u=""
if(w)x="file"
w=d.d
if(w==null)w=0
t=d.e
if(t==null)t=new E.aU(Date.now(),0,!1)
s=y.F
t=A.a([new B.lN(u,x,w,t,d.f,d.r,q)],s)
if(v==="directory")t.push(new A.b("p",q,"hs-public-available__directory-note",q,q,q,A.a([new A.c("This is a shared folder. Download the entire folder as an archive.",q)],s),q))
t.push(new B.lk(r.a.c,q))
x=new A.b("div",q,"hs-public-available",q,q,q,t,q)
break
case 2:x=r.jL(d)
break
case 5:x=r.ef(d,!0)
break
case 6:x=r.ef(d,!1)
break
case 3:x=r.jf(d)
break
case 7:x=y.F
x=new A.b("div",q,"hs-public-rate-limited",q,q,q,A.a([new A.b("span",q,"material-icons hs-public-rate-limited__icon",q,q,q,A.a([new A.c("timer_off",q)],x),q),new A.b("h2",q,"hs-public-rate-limited__title",q,q,q,A.a([new A.c("Too many attempts",q)],x),q),new A.b("p",q,"hs-public-rate-limited__message",q,q,q,A.a([new A.c("You have made too many password attempts. Please wait a few minutes before trying again.",q)],x),q)],x),q)
break
case 4:x=r.nw(d)
break
default:x=q}return x},
ef(d,e){var x,w=d.b
if(w==null)w=""
x=e||d.a===C.bE
return new B.fT(w,this.glX(),d.x,x,null)},
jL(d){return this.ef(d,!1)},
jf(d){var x,w,v,u=null,t=d.y
if(t==null)t="not_found"
A:{if("limit_reached"===t){x="The download limit for this link has been reached."
break A}if("revoked"===t){x="The file owner may have revoked this link."
break A}x="This link has expired or is no longer available."
break A}w=y.F
v=y.w
return new A.b("div",u,"hs-public-expired",u,u,u,A.a([new A.b("span",u,"material-icons hs-public-expired__icon",u,u,u,A.a([new A.c("link_off",u)],w),u),new A.b("h2",u,"hs-public-expired__title",u,u,u,A.a([new A.c("This link is no longer available",u)],w),u),new A.b("p",u,"hs-public-expired__hint",u,u,u,A.a([new A.c(x,u)],w),u),new A.b("p",u,"hs-public-expired__cta",u,u,u,A.a([new A.c("Store your files securely \u2014 ",u),new A.b("a",u,"hs-public-expired__link",u,A.p(["href","/register"],v,v),u,A.a([new A.c("Sign up free",u)],w),u)],w),u)],w),u)},
nw(d){var x=null,w=y.F,v=A.a([new A.c("error_outline",x)],w),u=A.a([new A.c("Something went wrong",x)],w),t=d.w
return new A.b("div",x,"hs-public-error",x,x,x,A.a([new A.b("span",x,"material-icons hs-public-error__icon",x,x,x,v,x),new A.b("h2",x,"hs-public-error__title",x,x,x,u,x),new A.b("p",x,"hs-public-error__message",x,x,x,A.a([new A.c(t==null?"Failed to load share info.":t,x)],w),x),new F.C("Try again",G.e,new B.vd(this),!1,!1,x)],w),x)}}
var z=a.updateTypes(["~()","~(d)","e(O,aS)"])
B.ol.prototype={
$1(d){this.a.A(A.r(this.b.responseText))},
$S:2}
B.om.prototype={
$1(d){this.a.A(null)},
$S:2}
B.on.prototype={
$1(d){this.a.A(A.r(this.b.responseText))},
$S:2}
B.oo.prototype={
$1(d){this.a.A(null)},
$S:2}
B.uE.prototype={
$1(d){var x=this.a
return x.k(new B.uD(x,d))},
$S:4}
B.uD.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.vg.prototype={
$2(d,e){var x,w
y.k.a(e)
x=this.a
if(e.a===C.bD){w=e.b
if(w!=null&&w.length!==0)A.f(b.G.document).title=w
x.h8()}else x.h8()
return x.jy(e)},
$S:z+2}
B.ve.prototype={
$0(){A.f(A.f(b.G.window).location).href="/login"
return"/login"},
$S:0}
B.vf.prototype={
$0(){A.f(A.f(b.G.window).location).href="/register"
return"/register"},
$S:0}
B.vd.prototype={
$0(){var x=this.a,w=x.d
w===$&&A.h()
return w.cj(x.a.c)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
x(B.kt.prototype,"gn3","n4",0)
w(B.ky.prototype,"glX","lY",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.c2,B.ok,B.aS])
x(B.c2,[B.jg,B.je,B.jc,B.jd,B.jf,B.ea])
x(A.a0,[B.ol,B.om,B.on,B.oo,B.uE])
w(B.jb,H.ae)
w(B.c3,A.ar)
x(H.a5,[B.l5,B.lk,B.lN])
x(M.y,[B.fT,B.cy])
x(M.u,[B.kt,B.ky])
x(A.ab,[B.uD,B.ve,B.vf,B.vd])
w(B.vg,A.ai)})()
A.X(b.typeUniverse,JSON.parse('{"jg":{"c2":[]},"je":{"c2":[]},"jc":{"c2":[]},"jd":{"c2":[]},"jf":{"c2":[]},"ea":{"c2":[]},"jb":{"ae":["aS"],"a2":["aS"],"aK":["aS"],"a2.0":"aS"},"l5":{"a5":[],"e":[]},"lk":{"a5":[],"e":[]},"fT":{"y":[],"e":[]},"kt":{"u":["fT"],"u.T":"fT"},"lN":{"a5":[],"e":[]},"cy":{"y":[],"e":[]},"ky":{"u":["cy"],"u.T":"cy"}}'))
var y={m:A.i("S<jb,aS>"),F:A.i("v<e>"),y:A.i("z<d,@>"),C:A.i("c2"),k:A.i("aS"),w:A.i("d"),d:A.i("a3<d?>"),s:A.i("M<d?>"),v:A.i("~")};(function constants(){C.d9=new B.jd()
C.da=new B.jf()
C.fv=new B.ea("unexpected server response")
C.bB=new B.ea("network error")
C.fw=new B.c3(0,"loading")
C.bC=new B.aS(C.fw,null,null,null,null,null,null,null,null,null)
C.bD=new B.c3(1,"available")
C.fx=new B.c3(2,"passwordRequired")
C.fy=new B.c3(3,"expired")
C.fz=new B.c3(4,"error")
C.bE=new B.c3(5,"verifyingPassword")
C.fA=new B.c3(6,"verifyError")
C.fB=new B.c3(7,"rateLimited")})()};
(a=>{a["wZQeV38ngCajxOZ0syDUZbjeU/g="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_157.part.js.map
