((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
CR(){return new B.cy(null)},
cy:function cy(d){this.a=d},
kU:function kU(){var _=this
_.d=$
_.e=!1
_.f=""
_.c=_.a=_.r=null},
uz:function uz(d){this.a=d},
ux:function ux(d){this.a=d},
uw:function uw(d,e){this.a=d
this.b=e},
uy:function uy(d){this.a=d},
uv:function uv(d){this.a=d}},D,K,L,M,N,E,O,F,G,H,I
A=c[0]
C=c[2]
B=a.updateHolder(c[10],B)
D=c[65]
K=c[62]
L=c[68]
M=c[57]
N=c[64]
E=c[51]
O=c[76]
F=c[52]
G=c[81]
H=c[80]
I=c[59]
B.cy.prototype={
C(){return new B.kU()}}
B.kU.prototype={
F(){var x,w
this.G()
this.d=E.fk(new E.cm())
x=b.G
w=A.r(A.f(A.f(x.window).sessionStorage).getItem("hs_mfa_token"))
if(w==null||w.length===0){A.f(A.f(x.window).location).assign("/login")
return}this.r=w},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
mX(){var x,w,v,u,t
for(x=A.q(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=C.a.V(u,"=")
if(t>0)if(C.a.t(C.a.H(u,0,t))==="hs_csrf")return C.a.t(C.a.N(u,t+1))}return""},
mW(){var x,w,v,u,t=this,s=t.r
if(s==null||s.length===0||t.f.length===0)return
x=t.mX()
w=t.e
v=t.d
u=t.f
if(w){v===$&&A.i()
v.dT(x,s,u)}else{v===$&&A.i()
v.dU(x,s,u)}},
p(d){var x=this.d
x===$&&A.i()
return new N.P(x,new B.uz(this),null,y.l)},
mU(d){var x,w,v,u,t=this,s=null,r=d.Q,q=t.e?"Enter backup code":"Two-factor authentication",p=y.p
q=A.a([new A.c(q,s)],p)
q=A.a([new A.b("h1",s,"hs-login-card__title",s,s,s,q,s),new A.b("p",s,"hs-verify-email__body",s,s,s,A.a([new A.c(t.e?"Enter one of your backup recovery codes in the format XXXX-XXXX.":"Enter the 6-digit code from your authenticator app to complete sign in.",s)],p),s)],p)
x=d.z
if(x!=null)q.push(new A.b("p",s,"hs-login-card__error",s,s,s,A.a([new A.c(x,s)],p),s))
x=t.e?"Backup code":"Authenticator code"
q.push(M.an(!1,s,s,r,!1,x,new B.ux(t),s,s))
x=r?"Verifying\u2026":"Verify"
w=!r
v=!w||t.f.length===0?s:t.gmV()
q.push(new K.D(x,L.p,v,!1,!w||t.f.length===0,s))
x=y.g
v=A.p(["type","button"],x,x)
u=A.p(["click",new B.uy(t)],x,y.a)
q.push(new A.b("div",s,"hs-login-card__links",s,s,s,A.a([new A.b("button",s,"hs-mfa-toggle",s,v,u,A.a([new A.c(t.e?"Use authenticator app":"Use backup code",s)],p),s),new A.b("a",s,"hs-auth-link",s,A.p(["href","/login"],x,x),s,A.a([new A.c("Cancel",s)],p),s)],p),s))
return new F.aN(s,H.n,G.t,new A.b("div",s,"hs-auth-center",s,s,s,A.a([new I.aw(new A.b("div",s,"hs-login-card",s,s,s,q,s),s)],p),s),s)}}
var z=a.updateTypes(["~()","e(O,a6)"])
B.uz.prototype={
$2(d,e){var x,w,v=null
y.k.a(e)
if(e.a===O.y){x=b.G
A.f(A.f(x.window).sessionStorage).removeItem("hs_mfa_token")
A.f(A.f(x.window).location).assign("/files")}x=this.a
w=x.r
if(w==null||w.length===0){x=y.p
w=y.g
return new F.aN(v,H.n,G.t,new A.b("div",v,"hs-auth-center",v,v,v,A.a([new I.aw(new A.b("div",v,"hs-login-card",v,v,v,A.a([new A.b("h1",v,"hs-login-card__title",v,v,v,A.a([new A.c("Session expired",v)],x),v),new A.b("p",v,"hs-verify-email__body",v,v,v,A.a([new A.c("Your authentication session has expired. Please sign in again.",v)],x),v),new A.b("div",v,"hs-login-card__links",v,v,v,A.a([new A.b("a",v,"hs-auth-link",v,A.p(["href","/login"],w,w),v,A.a([new A.c("Back to sign in",v)],x),v)],x),v)],x),v),v)],x),v),v)}return x.mU(e)},
$S:z+1}
B.ux.prototype={
$1(d){var x=this.a
return x.k(new B.uw(x,d))},
$S:5}
B.uw.prototype={
$0(){this.a.f=this.b},
$S:0}
B.uy.prototype={
$1(d){var x
A.f(d)
x=this.a
return x.k(new B.uv(x))},
$S:1}
B.uv.prototype={
$0(){var x=this.a
x.e=!x.e
x.f=""},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.kU.prototype,"gmV","mW",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cy,D.x)
x(B.kU,D.u)
x(B.uz,A.ah)
w(A.Z,[B.ux,B.uy])
w(A.aa,[B.uw,B.uv])})()
A.W(b.typeUniverse,JSON.parse('{"cy":{"x":[],"e":[]},"kU":{"u":["cy"],"u.T":"cy"}}'))
var y={k:A.h("a6"),l:A.h("P<bU,a6>"),p:A.h("v<e>"),g:A.h("d"),a:A.h("~(H)")}};
(a=>{a["ajQFUd67+VsUi+h82goB87VZixw="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_123.part.js.map
