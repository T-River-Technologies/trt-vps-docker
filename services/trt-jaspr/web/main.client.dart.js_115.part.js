((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
By(d){return new B.cs(d,null)},
cs:function cs(d,e){this.c=d
this.a=e},
kl:function kl(){var _=this
_.d=$
_.e=!1
_.f=""
_.c=_.a=null},
tF:function tF(d){this.a=d},
tD:function tD(d){this.a=d},
tC:function tC(d,e){this.a=d
this.b=e},
tE:function tE(d){this.a=d},
tB:function tB(d){this.a=d}},D,K,L,M,N,E,O,F,G,H,I
A=c[0]
C=c[2]
B=a.updateHolder(c[10],B)
D=c[58]
K=c[56]
L=c[61]
M=c[52]
N=c[57]
E=c[45]
O=c[69]
F=c[46]
G=c[74]
H=c[73]
I=c[54]
B.cs.prototype={
B(){return new B.kl()}}
B.kl.prototype={
F(){this.G()
this.d=E.f6(new E.cg())},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
ms(){var x,w,v,u,t
for(x=A.r(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=C.a.Y(u,"=")
if(t>0)if(C.a.u(C.a.L(u,0,t))==="hs_csrf")return C.a.u(C.a.P(u,t+1))}return""},
mr(){var x,w,v,u,t=this,s=t.a.c
if(s==null||s.length===0||t.f.length===0)return
x=t.ms()
w=t.e
v=t.d
u=t.f
if(w){v===$&&A.h()
v.dD(x,s,u)}else{v===$&&A.h()
v.dE(x,s,u)}},
n(d){var x=this.d
x===$&&A.h()
return new N.S(x,new B.tF(this),null,y.l)},
mp(d){var x,w,v,u,t=this,s=null,r=d.Q,q=t.e?"Enter backup code":"Two-factor authentication",p=y.p
q=A.a([new A.c(q,s)],p)
q=A.a([new A.b("h1",s,"hs-login-card__title",s,s,s,q,s),new A.b("p",s,"hs-verify-email__body",s,s,s,A.a([new A.c(t.e?"Enter one of your backup recovery codes in the format XXXX-XXXX.":"Enter the 6-digit code from your authenticator app to complete sign in.",s)],p),s)],p)
x=d.z
if(x!=null)q.push(new A.b("p",s,"hs-login-card__error",s,s,s,A.a([new A.c(x,s)],p),s))
x=t.e?"Backup code":"Authenticator code"
q.push(M.an(!1,s,s,r,!1,x,new B.tD(t),s,s))
x=r?"Verifying\u2026":"Verify"
w=!r
v=!w||t.f.length===0?s:t.gmq()
q.push(new K.C(x,L.p,v,!1,!w||t.f.length===0,s))
x=y.g
v=A.p(["type","button"],x,x)
u=A.p(["click",new B.tE(t)],x,y.a)
q.push(new A.b("div",s,"hs-login-card__links",s,s,s,A.a([new A.b("button",s,"hs-mfa-toggle",s,v,u,A.a([new A.c(t.e?"Use authenticator app":"Use backup code",s)],p),s),new A.b("a",s,"hs-auth-link",s,A.p(["href","/login"],x,x),s,A.a([new A.c("Cancel",s)],p),s)],p),s))
return new F.aL(s,H.l,G.t,new A.b("div",s,"hs-auth-center",s,s,s,A.a([new I.as(new A.b("div",s,"hs-login-card",s,s,s,q,s),s)],p),s),s)}}
var z=a.updateTypes(["~()","e(O,a4)"])
B.tF.prototype={
$2(d,e){var x,w,v=null
y.k.a(e)
if(e.a===O.y)A.f(A.f(b.G.window).location).assign("/files")
x=this.a
w=x.a.c
if(w==null||w.length===0){x=y.p
w=y.g
return new F.aL(v,H.l,G.t,new A.b("div",v,"hs-auth-center",v,v,v,A.a([new I.as(new A.b("div",v,"hs-login-card",v,v,v,A.a([new A.b("h1",v,"hs-login-card__title",v,v,v,A.a([new A.c("Session expired",v)],x),v),new A.b("p",v,"hs-verify-email__body",v,v,v,A.a([new A.c("Your authentication session has expired. Please sign in again.",v)],x),v),new A.b("div",v,"hs-login-card__links",v,v,v,A.a([new A.b("a",v,"hs-auth-link",v,A.p(["href","/login"],w,w),v,A.a([new A.c("Back to sign in",v)],x),v)],x),v)],x),v),v)],x),v),v)}return x.mp(e)},
$S:z+1}
B.tD.prototype={
$1(d){var x=this.a
return x.k(new B.tC(x,d))},
$S:4}
B.tC.prototype={
$0(){this.a.f=this.b},
$S:0}
B.tE.prototype={
$1(d){var x
A.f(d)
x=this.a
return x.k(new B.tB(x))},
$S:1}
B.tB.prototype={
$0(){var x=this.a
x.e=!x.e
x.f=""},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.kl.prototype,"gmq","mr",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cs,D.y)
x(B.kl,D.u)
x(B.tF,A.ai)
w(A.a0,[B.tD,B.tE])
w(A.ab,[B.tC,B.tB])})()
A.X(b.typeUniverse,JSON.parse('{"cs":{"y":[],"e":[]},"kl":{"u":["cs"],"u.T":"cs"}}'))
var y={k:A.i("a4"),l:A.i("S<bK,a4>"),p:A.i("v<e>"),g:A.i("d"),a:A.i("~(F)")}};
(a=>{a["DPIdphVUVOc9wRj5iJJrBJsOSxU="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_115.part.js.map
