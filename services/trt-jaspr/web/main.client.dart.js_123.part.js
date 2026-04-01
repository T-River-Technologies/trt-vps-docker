((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
Cv(d){return new B.cP(d,null)},
cP:function cP(d,e){this.c=d
this.a=e},
kS:function kS(){var _=this
_.d=$
_.e=""
_.f=!1
_.c=_.a=null},
wG:function wG(d){this.a=d},
wH:function wH(d){this.a=d},
wF:function wF(d){this.a=d},
wE:function wE(d,e){this.a=d
this.b=e}},G,E,H,I,K,L,F,D,M,N,O,P
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
G=c[39]
E=c[58]
H=c[56]
I=c[61]
K=c[52]
L=c[57]
F=c[45]
D=c[69]
M=c[46]
N=c[74]
O=c[73]
P=c[54]
B.cP.prototype={
B(){return new B.kS()}}
B.kS.prototype={
F(){var x,w,v=this
v.G()
x=F.f6(new F.cg())
v.d=x
w=v.a.c
if(w!=null&&w.length!==0)x.aK(v.hq(),w)},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
hq(){var x,w,v,u,t
for(x=A.r(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=C.a.Y(u,"=")
if(t>0)if(C.a.u(C.a.L(u,0,t))==="hs_csrf")return C.a.u(C.a.P(u,t+1))}return""},
m3(){var x,w,v=this
if(C.a.u(v.e).length===0)return
v.k(new B.wG(v))
x=v.d
x===$&&A.h()
w=C.a.u(v.e)
x.aJ(v.hq(),w)},
n(d){var x=this.d
x===$&&A.h()
return new L.S(x,new B.wH(this),null,y.l)},
oZ(d){var x,w=this,v=null,u="div",t="hs-verify-email",s="hs-login-card__title",r="hs-verify-email__body",q="hs-login-card__links",p="hs-auth-link",o="Back to sign in",n=d.a
if(n===D.u)return w.fM()
if(n===D.aS){n=y.p
x=y.g
return new A.b(u,v,t,v,v,v,A.a([new A.b("h1",v,s,v,v,v,A.a([new A.c("Email verified",v)],n),v),new A.b("p",v,r,v,v,v,A.a([new A.c("Your email address has been verified. You can now sign in.",v)],n),v),new A.b(u,v,q,v,v,v,A.a([new A.b("a",v,p,v,A.p(["href","/login"],x,x),v,A.a([new A.c("Sign in",v)],n),v)],n),v)],n),v)}if(n===D.aT){n=y.p
x=y.g
return new A.b(u,v,t,v,v,v,A.a([new A.b("h1",v,s,v,v,v,A.a([new A.c("Verification email sent",v)],n),v),new A.b("p",v,r,v,v,v,A.a([new A.c("A new verification link has been sent. Please check your inbox.",v)],n),v),new A.b(u,v,q,v,v,v,A.a([new A.b("a",v,p,v,A.p(["href","/login"],x,x),v,A.a([new A.c(o,v)],n),v)],n),v)],n),v)}if(n===D.K)return w.je(d.z)
n=w.a.c
if(n==null||n.length===0){n=y.p
x=y.g
return new A.b(u,v,t,v,v,v,A.a([new A.b("h1",v,s,v,v,v,A.a([new A.c("Invalid link",v)],n),v),new A.b("p",v,r,v,v,v,A.a([new A.c("This verification link is missing a token. Please use the link from your verification email.",v)],n),v),new A.b(u,v,q,v,v,v,A.a([new A.b("a",v,p,v,A.p(["href","/login"],x,x),v,A.a([new A.c(o,v)],n),v)],n),v)],n),v)}return w.fM()},
fM(){var x=null,w=y.p
return new A.b("div",x,"hs-verify-email",x,x,x,A.a([new A.b("h1",x,"hs-login-card__title",x,x,x,A.a([new A.c("Verifying your email\u2026",x)],w),x),new G.de(0,4,x)],w),x)},
je(d){var x=null,w=y.p,v=A.a([new A.c("Verification failed",x)],w),u=A.a([new A.c(d==null?"This verification link is invalid or has expired.":d,x)],w),t=A.a([new A.c("Enter your email to receive a new link:",x)],w),s=this.f,r=K.an(!1,x,x,s,!1,"Email",new B.wF(this),"you@example.com",x),q=s?x:this.gm2(),p=y.g
return new A.b("div",x,"hs-verify-email",x,x,x,A.a([new A.b("h1",x,"hs-login-card__title",x,x,x,v,x),new A.b("p",x,"hs-login-card__error",x,x,x,u,x),new A.b("p",x,"hs-verify-email__body",x,x,x,t,x),r,new H.C("Resend verification email",I.p,q,!1,s,x),new A.b("div",x,"hs-login-card__links",x,x,x,A.a([new A.b("a",x,"hs-auth-link",x,A.p(["href","/login"],p,p),x,A.a([new A.c("Back to sign in",x)],w),x)],w),x)],w),x)}}
var z=a.updateTypes(["~()","aL(O,a4)"])
B.wG.prototype={
$0(){this.a.f=!0},
$S:0}
B.wH.prototype={
$2(d,e){var x=null,w=y.p
return new M.aL(x,O.l,N.t,new A.b("div",x,"hs-auth-center",x,x,x,A.a([new P.as(new A.b("div",x,"hs-login-card",x,x,x,A.a([this.a.oZ(y.k.a(e))],w),x),x)],w),x),x)},
$S:z+1}
B.wF.prototype={
$1(d){var x=this.a
return x.k(new B.wE(x,d))},
$S:4}
B.wE.prototype={
$0(){this.a.e=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.kS.prototype,"gm2","m3",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cP,E.y)
x(B.kS,E.u)
w(A.ab,[B.wG,B.wE])
x(B.wH,A.ai)
x(B.wF,A.a0)})()
A.X(b.typeUniverse,JSON.parse('{"cP":{"y":[],"e":[]},"kS":{"u":["cP"],"u.T":"cP"}}'))
var y={k:A.i("a4"),l:A.i("S<bK,a4>"),p:A.i("v<e>"),g:A.i("d")}};
(a=>{a["s8SlOeIBMKQlY0LWg30LCnRKpMc="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_123.part.js.map
