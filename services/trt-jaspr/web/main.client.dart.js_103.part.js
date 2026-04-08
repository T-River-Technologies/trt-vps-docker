((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
CP(d){return new B.cw(d,null)},
cw:function cw(d,e){this.c=d
this.a=e},
kR:function kR(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
um:function um(d){this.a=d},
ul:function ul(d){this.a=d},
uk:function uk(d,e){this.a=d
this.b=e},
hV:function hV(d,e,f){this.c=d
this.r=e
this.a=f},
kf:function kf(d){var _=this
_.e=d
_.r=_.f=""
_.x=_.w=!1
_.c=_.a=null},
q6:function q6(d,e){this.a=d
this.b=e},
q7:function q7(d,e){this.a=d
this.b=e}},D,E,K,L,F,M,G,H,N,O,P,Q,I
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[33]
E=c[65]
K=c[62]
L=c[68]
F=c[57]
M=c[64]
G=c[51]
H=c[76]
N=c[52]
O=c[81]
P=c[80]
Q=c[59]
I=c[79]
B.cw.prototype={
C(){return new B.kR()}}
B.kR.prototype={
F(){this.G()
this.d=G.fk(new G.cm())},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
mQ(){var x,w,v,u,t
for(x=A.q(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=C.a.V(u,"=")
if(t>0)if(C.a.t(C.a.H(u,0,t))==="hs_csrf")return C.a.t(C.a.N(u,t+1))}return""},
mP(d,e){var x,w=this.d
w===$&&A.i()
x=this.e
w.aG(this.mQ(),d,e,x)},
p(d){var x=this.d
x===$&&A.i()
return new M.P(x,new B.um(this),null,y.l)}}
B.hV.prototype={
C(){return new B.kf(D.Aq())},
io(d,e){return this.c.$2(d,e)}}
B.kf.prototype={
pj(d){var x,w=this
w.f=d
x=I.C.al(d)
if(w.w!==x.a)w.k(new B.q6(w,x))},
pl(d){var x,w=this
w.r=d
x=w.e.al(d)
if(w.x!==x.a)w.k(new B.q7(w,x))},
pn(d){var x=this
A.f(d).preventDefault()
if(x.w&&x.x&&!x.a.r)x.a.io(x.f,x.r)},
pp(){var x=this
if(x.w&&x.x&&!x.a.r)x.a.io(x.f,x.r)},
p(d){var x,w,v,u,t,s=this,r=null,q=s.a.r,p=A.p(["submit",s.gpm()],y.g,y.a),o=s.a
o.toString
x=F.an(!1,r,r,q,!1,"Email",s.gpi(),"you@example.com",I.C)
w=F.an(!1,r,r,q,!0,"Password",s.gpk(),r,s.e)
o=o.r
v=o?"Loading\u2026":"Login"
u=s.w
t=u&&s.x&&!o?s.gpo():r
return new A.b("form",r,"tr-login-form",r,r,p,A.a([x,w,new K.D(v,L.p,t,!1,!(u&&s.x)||o,r)],y.p),r)}}
var z=a.updateTypes(["~(d)","~(d,d)","aN(O,a6)","~(H)","~()"])
B.um.prototype={
$2(d,e){var x,w,v,u,t=null,s="hs-auth-link"
y.k.a(e)
x=e.a
if(x===H.y){w=this.a.a.c
v=w!=null&&C.a.cP(w,"/")&&!C.a.cP(w,"//")
u=b.G
if(v)A.f(A.f(u.window).location).assign(w)
else A.f(A.f(u.window).location).assign("/files")}if(x===H.x&&e.w!=null){x=e.w
x.toString
v=b.G
A.f(A.f(v.window).sessionStorage).setItem("hs_mfa_token",x)
A.f(A.f(v.window).location).assign("/mfa-verify")}x=y.p
v=A.a([new A.b("h1",t,"hs-login-card__title",t,t,t,A.a([new A.c("Sign in",t)],x),t)],x)
u=e.z
if(u!=null)v.push(new A.b("p",t,"hs-login-card__error",t,t,t,A.a([new A.c(u,t)],x),t))
u=this.a
v.push(new B.hV(u.gmO(),e.Q,t))
v.push(D.Am("Remember me",new B.ul(u),u.e))
u=y.g
v.push(new A.b("div",t,"hs-login-card__links",t,t,t,A.a([new A.b("a",t,s,t,A.p(["href","/forgot-password"],u,u),t,A.a([new A.c("Forgot password?",t)],x),t),new A.b("a",t,s,t,A.p(["href","/register"],u,u),t,A.a([new A.c("Create account",t)],x),t)],x),t))
return new N.aN(t,P.n,O.t,new A.b("div",t,"hs-auth-center",t,t,t,A.a([new Q.aw(new A.b("div",t,"hs-login-card",t,t,t,v,t),t)],x),t),t)},
$S:z+2}
B.ul.prototype={
$1(d){var x=this.a
return x.k(new B.uk(x,d))},
$S:14}
B.uk.prototype={
$0(){this.a.e=this.b===!0},
$S:0}
B.q6.prototype={
$0(){this.a.w=this.b.a},
$S:0}
B.q7.prototype={
$0(){this.a.x=this.b.a},
$S:0};(function installTearOffs(){var x=a._instance_2u,w=a._instance_1u,v=a._instance_0u
x(B.kR.prototype,"gmO","mP",1)
var u
w(u=B.kf.prototype,"gpi","pj",0)
w(u,"gpk","pl",0)
w(u,"gpm","pn",3)
v(u,"gpo","pp",4)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(E.x,[B.cw,B.hV])
x(E.u,[B.kR,B.kf])
w(B.um,A.ah)
w(B.ul,A.Z)
x(A.aa,[B.uk,B.q6,B.q7])})()
A.W(b.typeUniverse,JSON.parse('{"cw":{"x":[],"e":[]},"kR":{"u":["cw"],"u.T":"cw"},"hV":{"x":[],"e":[]},"kf":{"u":["hV"],"u.T":"hV"}}'))
var y={k:A.h("a6"),l:A.h("P<bU,a6>"),p:A.h("v<e>"),g:A.h("d"),a:A.h("~(H)")}};
(a=>{a["RjpovTwS2xvAv3ax3NYLe0Unjb4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_103.part.js.map
