((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,E,K,L,F,M,G,H,N,O,P,Q,I,B={
Bw(d){return new B.cq(d,null)},
cq:function cq(d,e){this.c=d
this.a=e},
ki:function ki(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
ts:function ts(d){this.a=d},
tr:function tr(d){this.a=d},
tq:function tq(d,e){this.a=d
this.b=e},
hw:function hw(d,e,f){this.c=d
this.r=e
this.a=f},
jI:function jI(d){var _=this
_.e=d
_.r=_.f=""
_.x=_.w=!1
_.c=_.a=null},
ph:function ph(d,e){this.a=d
this.b=e},
pi:function pi(d,e){this.a=d
this.b=e}}
A=c[0]
C=c[2]
D=c[30]
E=c[58]
K=c[56]
L=c[61]
F=c[52]
M=c[57]
G=c[45]
H=c[69]
N=c[46]
O=c[74]
P=c[73]
Q=c[54]
I=c[72]
B=a.updateHolder(c[8],B)
B.cq.prototype={
B(){return new B.ki()}}
B.ki.prototype={
F(){this.G()
this.d=G.f6(new G.cg())},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
ml(){var x,w,v,u,t
for(x=A.r(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=C.a.Y(u,"=")
if(t>0)if(C.a.u(C.a.L(u,0,t))==="hs_csrf")return C.a.u(C.a.P(u,t+1))}return""},
mk(d,e){var x,w=this.d
w===$&&A.h()
x=this.e
w.aF(this.ml(),d,e,x)},
n(d){var x=this.d
x===$&&A.h()
return new M.S(x,new B.ts(this),null,y.l)}}
B.hw.prototype={
B(){return new B.jI(D.zd())},
hS(d,e){return this.c.$2(d,e)}}
B.jI.prototype={
oA(d){var x,w=this
w.f=d
x=I.C.aj(d)
if(w.w!==x.a)w.k(new B.ph(w,x))},
oC(d){var x,w=this
w.r=d
x=w.e.aj(d)
if(w.x!==x.a)w.k(new B.pi(w,x))},
oE(d){var x=this
A.f(d).preventDefault()
if(x.w&&x.x&&!x.a.r)x.a.hS(x.f,x.r)},
oG(){var x=this
if(x.w&&x.x&&!x.a.r)x.a.hS(x.f,x.r)},
n(d){var x,w,v,u,t,s=this,r=null,q=s.a.r,p=A.p(["submit",s.goD()],y.g,y.a),o=s.a
o.toString
x=F.an(!1,r,r,q,!1,"Email",s.goz(),"you@example.com",I.C)
w=F.an(!1,r,r,q,!0,"Password",s.goB(),r,s.e)
o=o.r
v=o?"Loading\u2026":"Login"
u=s.w
t=u&&s.x&&!o?s.goF():r
return new A.b("form",r,"tr-login-form",r,r,p,A.a([x,w,new K.C(v,L.p,t,!1,!(u&&s.x)||o,r)],y.p),r)}}
var z=a.updateTypes(["~(d)","~(d,d)","aL(O,a4)","~(F)","~()"])
B.ts.prototype={
$2(d,e){var x,w,v,u,t=null,s="hs-auth-link"
y.k.a(e)
x=e.a
if(x===H.y){w=this.a.a.c
v=w!=null&&C.a.cB(w,"/")&&!C.a.cB(w,"//")
u=b.G
if(v)A.f(A.f(u.window).location).assign(w)
else A.f(A.f(u.window).location).assign("/files")}if(x===H.x&&e.w!=null){x=e.w
x.toString
A.f(A.f(b.G.window).location).assign("/mfa-verify?token="+x)}x=y.p
v=A.a([new A.b("h1",t,"hs-login-card__title",t,t,t,A.a([new A.c("Sign in",t)],x),t)],x)
u=e.z
if(u!=null)v.push(new A.b("p",t,"hs-login-card__error",t,t,t,A.a([new A.c(u,t)],x),t))
u=this.a
v.push(new B.hw(u.gmj(),e.Q,t))
v.push(D.z9("Remember me",new B.tr(u),u.e))
u=y.g
v.push(new A.b("div",t,"hs-login-card__links",t,t,t,A.a([new A.b("a",t,s,t,A.p(["href","/forgot-password"],u,u),t,A.a([new A.c("Forgot password?",t)],x),t),new A.b("a",t,s,t,A.p(["href","/register"],u,u),t,A.a([new A.c("Create account",t)],x),t)],x),t))
return new N.aL(t,P.l,O.t,new A.b("div",t,"hs-auth-center",t,t,t,A.a([new Q.as(new A.b("div",t,"hs-login-card",t,t,t,v,t),t)],x),t),t)},
$S:z+2}
B.tr.prototype={
$1(d){var x=this.a
return x.k(new B.tq(x,d))},
$S:19}
B.tq.prototype={
$0(){this.a.e=this.b===!0},
$S:0}
B.ph.prototype={
$0(){this.a.w=this.b.a},
$S:0}
B.pi.prototype={
$0(){this.a.x=this.b.a},
$S:0};(function installTearOffs(){var x=a._instance_2u,w=a._instance_1u,v=a._instance_0u
x(B.ki.prototype,"gmj","mk",1)
var u
w(u=B.jI.prototype,"goz","oA",0)
w(u,"goB","oC",0)
w(u,"goD","oE",3)
v(u,"goF","oG",4)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(E.y,[B.cq,B.hw])
x(E.u,[B.ki,B.jI])
w(B.ts,A.ai)
w(B.tr,A.a0)
x(A.ab,[B.tq,B.ph,B.pi])})()
A.X(b.typeUniverse,JSON.parse('{"cq":{"y":[],"e":[]},"ki":{"u":["cq"],"u.T":"cq"},"hw":{"y":[],"e":[]},"jI":{"u":["hw"],"u.T":"hw"}}'))
var y={k:A.i("a4"),l:A.i("S<bK,a4>"),p:A.i("v<e>"),g:A.i("d"),a:A.i("~(F)")}};
(a=>{a["tNXVISPStS/JhDQVzSBlBV+jb9Y="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_95.part.js.map
