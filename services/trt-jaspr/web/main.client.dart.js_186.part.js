((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,H,I,K,L,B={c7:function c7(){},jO:function jO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},jM:function jM(d){this.a=d},jK:function jK(d){this.a=d},jL:function jL(){},jN:function jN(){},en:function en(d){this.a=d},p8:function p8(){},p9:function p9(d,e){this.a=d
this.b=e},pa:function pa(d){this.a=d},pb:function pb(d,e){this.a=d
this.b=e},pc:function pc(d){this.a=d},jJ:function jJ(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},c8:function c8(d,e){this.a=d
this.b=e},aW:function aW(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},lE:function lE(d,e){this.c=d
this.a=e},lS:function lS(d,e){this.c=d
this.a=e},hc:function hc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},l2:function l2(){this.d=""
this.c=this.a=null},vI:function vI(d){this.a=d},vH:function vH(d,e){this.a=d
this.b=e},mk:function mk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
D9(d,e,f,g){return new B.cH(g,d,f,e,null)},
cH:function cH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
l7:function l7(){this.d=$
this.c=this.a=null},
wk:function wk(d){this.a=d},
wi:function wi(){},
wj:function wj(){},
wh:function wh(d){this.a=d}},C,M,E,F,G,O,P,N,Q,R,S,T
J=c[1]
A=c[0]
D=c[2]
H=c[55]
I=c[83]
K=c[88]
L=c[46]
B=a.updateHolder(c[19],B)
C=c[94]
M=c[65]
E=c[60]
F=c[62]
G=c[68]
O=c[63]
P=c[57]
N=c[64]
Q=c[67]
R=c[52]
S=c[81]
T=c[59]
B.c7.prototype={}
B.jO.prototype={}
B.jM.prototype={}
B.jK.prototype={}
B.jL.prototype={}
B.jN.prototype={}
B.en.prototype={}
B.p8.prototype={
cK(d){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p
var $async$cK=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=H.aB(2,d,I.i,!1)
r=new A.N($.Q,y.s)
q=new A.a3(r,y.d)
p=A.f(new b.G.XMLHttpRequest())
p.open("GET","/api/public/share/"+s)
p.onload=A.X(new B.p9(q,p))
p.onerror=A.X(new B.pa(q))
p.send()
x=3
return A.j(r,$async$cK)
case 3:t=f
if(t==null){v=C.bJ
x=1
break}v=u.hJ(t,A.E(p.status))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cK,w)},
bh(d,e){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o
var $async$bh=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:r=u.oa()
q=new A.N($.Q,y.s)
p=new A.a3(q,y.d)
o=A.f(new b.G.XMLHttpRequest())
o.open("POST","/api/public/verify")
o.setRequestHeader("Content-Type","application/json")
o.setRequestHeader("X-CSRF-Token",r)
o.onload=A.X(new B.pb(p,o))
o.onerror=A.X(new B.pc(p))
t=y.w
o.send(D.c.P(A.p(["token",d,"password",e],t,t),null))
x=3
return A.j(q,$async$bh)
case 3:s=g
if(s==null){v=C.bJ
x=1
break}v=u.hJ(s,A.E(o.status))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$bh,w)},
oa(){var x,w,v,u,t
for(x=A.q(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=D.a.V(u,"=")
if(t<0)continue
if(D.a.t(D.a.H(u,0,t))==="hs_csrf")return D.a.t(D.a.N(u,t+1))}return""},
hJ(d,e){var x,w,v,u,t,s,r,q="file_name",p="expires_at",o=null
try{o=y.y.a(D.c.q(d,null))}catch(x){return C.h4}w=A.r(J.w(o,"status"))
if(w==null)w=""
if(w==="available"){v=A.r(J.w(o,q))
if(v==null)v=""
u=A.r(J.w(o,"node_type"))
if(u==null)u="file"
t=A.dA(J.w(o,"download_count"))
if(t==null)t=0
s=A.r(J.w(o,"created_at"))
s=L.yW(s==null?"":s)
if(s==null)s=new E.aP(Date.now(),0,!1)
r=A.dA(J.w(o,"max_downloads"))
return new B.jO(v,u,t,s,r,J.w(o,p)!=null?L.yW(A.q(J.w(o,p))):null)}if(w==="password_required"){v=A.r(J.w(o,q))
return new B.jM(v==null?"":v)}if(w==="expired"||w==="not_found"||e===404){v=A.r(J.w(o,"reason"))
return new B.jK(v==null?"not_found":v)}if(w==="invalid_password"||e===401)return C.dp
if(w==="rate_limited"||e===429)return C.dq
v=A.r(J.w(o,"error"))
return new B.en(v==null?"failed to load share info":v)}}
B.jJ.prototype={
ct(d){var x=0,w=A.n(y.v),v=this
var $async$ct=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.i(C.bK)
x=2
return A.j(v.x.cK(d),$async$ct)
case 2:v.h5(f)
return A.l(null,w)}})
return A.m($async$ct,w)},
bh(d,e){var x=0,w=A.n(y.v),v=this
var $async$bh=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.i(v.c.fg(null,C.bM))
x=2
return A.j(v.x.bh(d,e),$async$bh)
case 2:v.h5(g)
return A.l(null,w)}})
return A.m($async$bh,w)},
h5(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null
A:{x=d instanceof B.jO
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
r=q}if(x){m.i(new B.aW(C.bL,q,w,v,u,t,s,l,l,l))
break A}x=d instanceof B.jM
if(x)q=d.a
else q=l
if(x){m.i(new B.aW(C.h6,q,l,l,l,l,l,l,l,l))
break A}p=d instanceof B.jK
o=p?d.a:l
if(p){m.i(new B.aW(C.h7,l,l,l,l,l,l,l,l,o))
break A}if(d instanceof B.jL){m.i(m.c.fg("Incorrect password. Please try again.",C.h9))
break A}if(d instanceof B.jN){m.i(m.c.fg(l,C.ha))
break A}p=d instanceof B.en
n=p?d.a:l
if(p)m.i(new B.aW(C.h8,l,l,l,l,l,l,n,l,l))}}}
B.c8.prototype={
B(){return"PublicShareStatus."+this.b}}
B.aW.prototype={
fg(d,e){var x=this,w=d==null?x.x:d
return new B.aW(e,x.b,x.c,x.d,x.e,x.f,x.r,x.w,w,x.y)}}
B.lE.prototype={
p(d){var x=null,w=y.w,v=y.F
return new A.b("footer",x,"hs-public-footer",x,x,x,A.a([new A.b("p",x,"hs-public-footer__cta",x,x,x,A.a([new A.c("Store your files securely \u2014 ",x),new A.b("a",x,"hs-public-footer__link",x,A.p(["href","/register"],w,w),x,A.a([new A.c("Sign up free",x)],v),x)],v),x),new A.b("p",x,"hs-public-footer__brand",x,x,x,A.a([new A.c("Powered by "+this.c,x)],v),x)],v),x)}}
B.lS.prototype={
p(d){var x=null,w=y.w,v=y.F
return new A.b("div",x,"hs-public-download",x,x,x,A.a([new A.b("a",x,"hs-public-download__btn",x,A.p(["href","/s/"+H.aB(2,this.c,I.i,!1)+"/download"],w,w),x,A.a([new A.b("span",x,"material-icons hs-public-download__icon",x,x,x,A.a([new A.c("download",x)],v),x),new A.c("Download",x)],v),x)],v),x)}}
B.hc.prototype={
C(){return new B.l2()},
dX(d){return this.d.$1(d)}}
B.l2.prototype={
nH(){var x=this.d
if(x.length===0)return
this.a.dX(x)},
p(d){var x=this,w=null,v=y.F,u=A.a([new A.b("span",w,"material-icons hs-public-password__icon",w,w,w,A.a([new A.c("lock",w)],v),w),new A.b("h2",w,"hs-public-password__title",w,w,w,A.a([new A.c("This link is password protected",w)],v),w),new A.b("p",w,"hs-public-password__file-name",w,w,w,A.a([new A.c(x.a.c,w)],v),w),P.an(!1,w,w,x.a.f,!0,"Password",new B.vI(x),"Enter password",w)],v),t=x.a.e
if(t!=null)u.push(new A.b("p",w,"hs-public-password__error",w,w,w,A.a([new A.c(t,w)],v),w))
v=x.a.f
t=v?"Verifying\u2026":"Access File"
v=v||x.d.length===0
u.push(new F.D(t,G.p,x.gnG(),!1,v,w))
return new A.b("div",w,"hs-public-password",w,w,w,u,w)}}
B.mk.prototype={
p(d){var x=this,w=null,v=x.d==="directory"?"folder":"insert_drive_file",u=y.F,t=A.a([new A.c(v,w)],u),s=A.a([new A.c(x.c,w)],u),r=x.ev("Shared",x.hP(x.f)),q=x.r,p=""+x.e
r=A.a([r,x.ev("Downloads",q!=null?p+" / "+A.V(q):p)],u)
q=x.w
if(q!=null)r.push(x.ev("Expires",x.hP(q)))
return new T.aw(new A.b("div",w,"hs-public-file-card",w,w,w,A.a([new A.b("span",w,"material-icons hs-public-file-card__icon",w,w,w,t,w),new A.b("h2",w,"hs-public-file-card__name",w,w,w,s,w),new A.b("div",w,"hs-public-file-card__meta",w,w,w,r,w)],u),w),w)},
ev(d,e){var x=null,w=y.F
return new A.b("div",x,"hs-public-file-card__meta-row",x,x,x,A.a([new A.b("span",x,"hs-public-file-card__meta-label",x,x,x,A.a([new A.c(d,x)],w),x),new A.b("span",x,"hs-public-file-card__meta-value",x,x,x,A.a([new A.c(e,x)],w),x)],w),x)},
hP(d){var x=E.bZ(d)-1
if(!(x>=0&&x<12))return A.B(K.o,x)
return K.o[x]+" "+E.bY(d)+", "+E.c_(d)}}
B.cH.prototype={
C(){return new B.l7()}}
B.l7.prototype={
F(){this.G()
var x=new B.jJ(new B.p8(),Q.k,C.bK)
this.d=x
x.ct(this.a.c)},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
ms(d){var x=this.d
x===$&&A.i()
x.bh(this.a.c,d)},
hx(){var x,w=b.G,v=A.a0(A.f(w.document).head)
if((v==null?null:A.a0(v.querySelector('meta[name="robots"]')))!=null)return
x=A.f(A.f(w.document).createElement("meta"))
x.setAttribute("name","robots")
x.setAttribute("content","noindex, nofollow")
w=A.a0(A.f(w.document).head)
if(w!=null)w.append(x)},
p(d){var x=this.d
x===$&&A.i()
return new N.P(x,new B.wk(this),null,y.m)},
k6(d){var x,w,v,u=this,t=null,s=y.w,r=A.p(["href","/"],s,s),q=u.a
q=A.p(["src",q.e,"alt",q.d],s,s)
x=y.F
w=A.a([],x)
v=u.a
return new R.aN(new A.b("div",t,"hs-public-header",t,t,t,A.a([new A.b("a",t,t,t,r,t,A.a([new A.b("img",t,"hs-public-header__logo hs-public-header__logo--light",t,q,t,w,t),new A.b("img",t,"hs-public-header__logo hs-public-header__logo--dark",t,A.p(["src",v.f,"alt",v.d],s,s),t,A.a([],x),t)],x),t)],x),t),A.a([new F.D("Login",G.e,new B.wi(),!1,!1,t),new F.D("Get Started",G.p,new B.wj(),!1,!1,t)],x),S.t,new A.b("div",t,"hs-public-content",t,t,t,A.a([u.o8(d),new B.lE(u.a.d,t)],x),t),t)},
o8(d){var x,w,v,u,t,s,r=this,q=null
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
if(t==null)t=new E.aP(Date.now(),0,!1)
s=y.F
t=A.a([new B.mk(u,x,w,t,d.f,d.r,q)],s)
if(v==="directory")t.push(new A.b("p",q,"hs-public-available__directory-note",q,q,q,A.a([new A.c("This is a shared folder. Download the entire folder as an archive.",q)],s),q))
t.push(new B.lS(r.a.c,q))
x=new A.b("div",q,"hs-public-available",q,q,q,t,q)
break
case 2:x=r.kj(d)
break
case 5:x=r.ew(d,!0)
break
case 6:x=r.ew(d,!1)
break
case 3:x=r.jK(d)
break
case 7:x=y.F
x=new A.b("div",q,"hs-public-rate-limited",q,q,q,A.a([new A.b("span",q,"material-icons hs-public-rate-limited__icon",q,q,q,A.a([new A.c("timer_off",q)],x),q),new A.b("h2",q,"hs-public-rate-limited__title",q,q,q,A.a([new A.c("Too many attempts",q)],x),q),new A.b("p",q,"hs-public-rate-limited__message",q,q,q,A.a([new A.c("You have made too many password attempts. Please wait a few minutes before trying again.",q)],x),q)],x),q)
break
case 4:x=r.o9(d)
break
default:x=q}return x},
ew(d,e){var x,w=d.b
if(w==null)w=""
x=e||d.a===C.bM
return new B.hc(w,this.gmr(),d.x,x,null)},
kj(d){return this.ew(d,!1)},
jK(d){var x,w,v,u=null,t=d.y
if(t==null)t="not_found"
A:{if("limit_reached"===t){x="The download limit for this link has been reached."
break A}if("revoked"===t){x="The file owner may have revoked this link."
break A}x="This link has expired or is no longer available."
break A}w=y.F
v=y.w
return new A.b("div",u,"hs-public-expired",u,u,u,A.a([new A.b("span",u,"material-icons hs-public-expired__icon",u,u,u,A.a([new A.c("link_off",u)],w),u),new A.b("h2",u,"hs-public-expired__title",u,u,u,A.a([new A.c("This link is no longer available",u)],w),u),new A.b("p",u,"hs-public-expired__hint",u,u,u,A.a([new A.c(x,u)],w),u),new A.b("p",u,"hs-public-expired__cta",u,u,u,A.a([new A.c("Store your files securely \u2014 ",u),new A.b("a",u,"hs-public-expired__link",u,A.p(["href","/register"],v,v),u,A.a([new A.c("Sign up free",u)],w),u)],w),u)],w),u)},
o9(d){var x=null,w=y.F,v=A.a([new A.c("error_outline",x)],w),u=A.a([new A.c("Something went wrong",x)],w),t=d.w
return new A.b("div",x,"hs-public-error",x,x,x,A.a([new A.b("span",x,"material-icons hs-public-error__icon",x,x,x,v,x),new A.b("h2",x,"hs-public-error__title",x,x,x,u,x),new A.b("p",x,"hs-public-error__message",x,x,x,A.a([new A.c(t==null?"Failed to load share info.":t,x)],w),x),new F.D("Try again",G.e,new B.wh(this),!1,!1,x)],w),x)}}
var z=a.updateTypes(["~()","~(d)","e(O,aW)"])
B.p9.prototype={
$1(d){this.a.A(A.q(this.b.responseText))},
$S:2}
B.pa.prototype={
$1(d){this.a.A(null)},
$S:2}
B.pb.prototype={
$1(d){this.a.A(A.q(this.b.responseText))},
$S:2}
B.pc.prototype={
$1(d){this.a.A(null)},
$S:2}
B.vI.prototype={
$1(d){var x=this.a
return x.k(new B.vH(x,d))},
$S:5}
B.vH.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.wk.prototype={
$2(d,e){var x,w
y.k.a(e)
x=this.a
if(e.a===C.bL){w=e.b
if(w!=null&&w.length!==0)A.f(b.G.document).title=w
x.hx()}else x.hx()
return x.k6(e)},
$S:z+2}
B.wi.prototype={
$0(){A.f(A.f(b.G.window).location).href="/login"
return"/login"},
$S:0}
B.wj.prototype={
$0(){A.f(A.f(b.G.window).location).href="/register"
return"/register"},
$S:0}
B.wh.prototype={
$0(){var x=this.a,w=x.d
w===$&&A.i()
return w.ct(x.a.c)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
x(B.l2.prototype,"gnG","nH",0)
w(B.l7.prototype,"gmr","ms",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.c7,B.p8,B.aW])
x(B.c7,[B.jO,B.jM,B.jK,B.jL,B.jN,B.en])
x(A.Z,[B.p9,B.pa,B.pb,B.pc,B.vI])
w(B.jJ,N.a7)
w(B.c8,A.ao)
x(O.a8,[B.lE,B.lS,B.mk])
x(M.x,[B.hc,B.cH])
x(M.u,[B.l2,B.l7])
x(A.aa,[B.vH,B.wi,B.wj,B.wh])
w(B.wk,A.ah)})()
A.W(b.typeUniverse,JSON.parse('{"jO":{"c7":[]},"jM":{"c7":[]},"jK":{"c7":[]},"jL":{"c7":[]},"jN":{"c7":[]},"en":{"c7":[]},"jJ":{"a7":["aW"],"a1":["aW"],"aG":["aW"],"a1.0":"aW"},"lE":{"a8":[],"e":[]},"lS":{"a8":[],"e":[]},"hc":{"x":[],"e":[]},"l2":{"u":["hc"],"u.T":"hc"},"mk":{"a8":[],"e":[]},"cH":{"x":[],"e":[]},"l7":{"u":["cH"],"u.T":"cH"}}'))
var y={m:A.h("P<jJ,aW>"),F:A.h("v<e>"),y:A.h("z<d,@>"),C:A.h("c7"),k:A.h("aW"),w:A.h("d"),d:A.h("a3<d?>"),s:A.h("N<d?>"),v:A.h("~")};(function constants(){C.dp=new B.jL()
C.dq=new B.jN()
C.h4=new B.en("unexpected server response")
C.bJ=new B.en("network error")
C.h5=new B.c8(0,"loading")
C.bK=new B.aW(C.h5,null,null,null,null,null,null,null,null,null)
C.bL=new B.c8(1,"available")
C.h6=new B.c8(2,"passwordRequired")
C.h7=new B.c8(3,"expired")
C.h8=new B.c8(4,"error")
C.bM=new B.c8(5,"verifyingPassword")
C.h9=new B.c8(6,"verifyError")
C.ha=new B.c8(7,"rateLimited")})()};
(a=>{a["wmemdFHLW0fHJB91Zo0+p2EK4OA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_186.part.js.map
