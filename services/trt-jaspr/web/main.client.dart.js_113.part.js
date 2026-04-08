((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
CQ(){return new B.cx(null)},
cx:function cx(d){this.a=d},
kT:function kT(){var _=this
_.d=$
_.r=_.f=_.e=""
_.c=_.a=null},
uu:function uu(d){this.a=d},
uq:function uq(d){this.a=d},
up:function up(d,e){this.a=d
this.b=e},
ur:function ur(d){this.a=d},
uo:function uo(d,e){this.a=d
this.b=e},
ut:function ut(d){this.a=d},
us:function us(d,e){this.a=d
this.b=e},
un:function un(d,e){this.a=d
this.b=e},
oJ:function oJ(){},
fS:function fS(){},
jo:function jo(d,e){this.a=d
this.b=e},
fR:function fR(d){this.a=d},
fO:function fO(){},
jm:function jm(d){this.a=d},
fN:function fN(d){this.a=d},
fQ:function fQ(){},
jn:function jn(){},
fP:function fP(d){this.a=d},
fT:function fT(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
dg:function dg(d,e){this.a=d
this.b=e},
bC:function bC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
GH(d,e,f){var x,w=null,v=y.i,u=A.a([new A.c("Two-factor authentication is now enabled. Save these backup codes in a safe place \u2014 they can only be shown once and will let you regain access if you lose your authenticator.",w)],v),t=A.a([],v)
for(x=J.c3(f);x.v();)t.push(new A.b("code",w,"hs-mfa-setup__backup-code",w,w,w,A.a([new A.c(x.gD(),w)],v),w))
return new A.b("div",w,"hs-mfa-setup__section",w,w,w,A.a([new A.b("p",w,"hs-mfa-setup__description",w,w,w,u,w),new A.b("div",w,"hs-mfa-setup__backup-codes",w,w,w,t,w),new A.b("div",w,"hs-mfa-setup__actions",w,w,w,A.a([new E.D("Download backup codes",F.P,e,!1,!1,w),new E.D("Done",F.p,d,!1,!1,w)],v),w)],v),w)}},C,L,M,I,E,F,H,K,N,O,G
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[9],B)
C=c[82]
L=c[55]
M=c[83]
I=c[65]
E=c[62]
F=c[68]
H=c[57]
K=c[64]
N=c[84]
O=c[67]
G=c[58]
B.cx.prototype={
C(){return new B.kT()}}
B.kT.prototype={
F(){this.G()
this.d=new B.fT(new B.oJ(),O.k,C.bh)},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
eK(){var x,w,v,u,t
for(x=A.q(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=D.a.V(u,"=")
if(t>0)if(D.a.t(D.a.H(u,0,t))==="hs_csrf")return D.a.t(D.a.N(u,t+1))}return""},
m0(){var x=this.d
x===$&&A.i()
x.aD(this.eK())},
mT(){var x,w=this.e
if(w.length===0)return
x=this.d
x===$&&A.i()
x.aB(w,this.eK())},
lL(){var x,w,v=this,u=v.f
if(u.length===0)return
x=v.d
x===$&&A.i()
w=v.r
w=w.length!==0?w:null
x.aC(v.eK(),u,w)},
p(d){var x=this.d
x===$&&A.i()
return new K.P(x,new B.uu(this),null,y.X)},
mR(d){var x,w,v,u=this,t=null,s="div",r="hs-mfa-setup__section",q="hs-login-card__error",p="hs-verify-email__body",o=d.a
switch(o.a){case 0:x=y.i
w=A.a([new A.b("h3",t,"hs-mfa-setup__subtitle",t,t,t,A.a([new A.c("Enable two-factor authentication",t)],x),t),new A.b("p",t,"hs-mfa-setup__description",t,t,t,A.a([new A.c("Use an authenticator app such as Google Authenticator, Authy, or 1Password to generate one-time codes that protect your account even if your password is compromised.",t)],x),t)],x)
v=d.e
if(v!=null&&o===C.bi)w.push(new A.b("p",t,q,t,t,t,A.a([new A.c(v,t)],x),t))
w.push(new E.D("Set up authenticator app",F.p,u.gm_(),!1,!1,t))
o=new A.b(s,t,r,t,t,t,A.a([new A.b(s,t,"hs-mfa-setup__block",t,t,t,w,t),new A.b("hr",t,"hs-mfa-setup__divider",t,t,t,A.a([],x),t),u.jH(d)],x),t)
break
case 1:o=y.i
o=new A.b(s,t,"hs-mfa-setup__loading",t,t,t,A.a([new A.b("p",t,p,t,t,t,A.a([new A.c("Please wait\u2026",t)],o),t)],o),t)
break
case 2:o=u.jI(d)
break
case 3:o=u.jy(d)
break
case 4:o=y.i
x=A.a([new A.c("Two-factor authentication has been disabled for your account.",t)],o)
w=u.d
w===$&&A.i()
o=new A.b(s,t,r,t,t,t,A.a([new A.b("p",t,p,t,t,t,x,t),new E.D("Set up two-factor authentication",F.P,w.ge0(),!1,!1,t)],o),t)
break
case 5:o=d.e
if(o==null)o="An unexpected error occurred"
x=y.i
o=A.a([new A.c(o,t)],x)
w=u.d
w===$&&A.i()
x=new A.b(s,t,r,t,t,t,A.a([new A.b("p",t,q,t,t,t,o,t),new E.D("Try again",F.P,w.ge0(),!1,!1,t)],x),t)
o=x
break
default:o=t}return o},
jH(d){var x=this,w="Disable two-factor authentication",v=null,u=d.f,t=y.i,s=A.a([new A.c(w,v)],t),r=A.a([new A.c("Enter your current password and your TOTP code to disable two-factor authentication.",v)],t),q=H.an(!1,v,v,u,!0,"Current password",new B.uq(x),v,v),p=H.an(!1,v,v,u,!1,"Authenticator code (optional)",new B.ur(x),v,v),o=u?"Disabling\u2026":w,n=!u,m=!n||x.f.length===0?v:x.glK()
n=!n||x.f.length===0
return new A.b("div",v,"hs-mfa-setup__block",v,v,v,A.a([new A.b("h3",v,"hs-mfa-setup__subtitle",v,v,v,s,v),new A.b("p",v,"hs-mfa-setup__description",v,v,v,r,v),q,p,new E.D(o,F.P,m,!1,n,v)],t),v)},
jI(d){var x,w,v,u,t,s=this,r=null,q="div",p=s.e,o=s.gmS(),n=s.d
n===$&&A.i()
x=d.f
w=y.i
v=A.a([new A.b("p",r,"hs-mfa-setup__description",r,r,r,A.a([new A.c("Scan the QR code below with your authenticator app, then enter the 6-digit code to confirm setup.",r)],w),r)],w)
u=d.c
if(u!=null&&u.length!==0){t=y.N
v.push(new A.b(q,r,"hs-mfa-setup__qr",r,r,r,A.a([new A.b("img",r,"hs-mfa-setup__qr-img",r,A.p(["src","data:image/png;base64,"+u,"alt","QR code for authenticator app"],t,t),r,A.a([],w),r)],w),r))}u=d.b
if(u!=null&&u.length!==0)v.push(new A.b(q,r,"hs-mfa-setup__secret",r,r,r,A.a([new A.b("p",r,"hs-mfa-setup__secret-label",r,r,r,A.a([new A.c("Or enter this key manually:",r)],w),r),new A.b("code",r,"hs-mfa-setup__secret-code",r,r,r,A.a([new A.c(u,r)],w),r)],w),r))
u=d.e
if(u!=null)v.push(new A.b("p",r,"hs-login-card__error",r,r,r,A.a([new A.c(u,r)],w),r))
v.push(H.an(!1,r,r,x,!1,"6-digit code from app",new B.ut(s),r,r))
u=x?"Verifying\u2026":"Confirm"
t=!x
if(!t||p.length===0)o=r
v.push(new A.b(q,r,"hs-mfa-setup__actions",r,r,r,A.a([new E.D(u,F.p,o,!1,!t||p.length===0,r),new E.D("Cancel",F.P,n.ge0(),!1,!1,r)],w),r))
return new A.b(q,r,"hs-mfa-setup__section",r,r,r,v,r)},
jy(d){var x=this.d
x===$&&A.i()
return B.GH(x.ge0(),new B.un(this,d),d.d)}}
B.oJ.prototype={
aD(d){var x=0,w=A.n(y.Z),v,u,t,s,r,q,p,o,n
var $async$aD=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.z
q={method:"POST",headers:n,body:D.c.P(A.a5(r,r),null),credentials:"same-origin"}
x=3
return A.j(G.ag(A.f(A.f(o.window).fetch("/api/auth/mfa/enroll",q)),y.m),$async$aD)
case 3:u=f
x=4
return A.j(G.ag(A.f(u.text()),y.N),$async$aD)
case 4:t=f
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.E(u.status)
v=new B.fR("Unexpected server response")
x=1
break}if(!A.al(u.ok)){o=A.r(J.w(s,"error"))
if(o==null)o="Enrollment failed"
A.E(u.status)
v=new B.fR(o)
x=1
break}o=A.r(J.w(s,"secret"))
if(o==null)o=""
r=A.r(J.w(s,"qr_code"))
v=new B.jo(o,r==null?"":r)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aD,w)},
aB(d,e){var x=0,w=A.n(y.K),v,u,t,s,r,q,p,o,n,m
var $async$aB=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:n=b.G
m=A.f(new n.Headers())
m.set("content-type","application/json")
m.set("x-csrf-token",e)
r=y.N
q={method:"POST",headers:m,body:D.c.P(A.p(["code",d],r,r),null),credentials:"same-origin"}
x=3
return A.j(G.ag(A.f(A.f(n.window).fetch("/api/auth/mfa/confirm",q)),y.m),$async$aB)
case 3:u=g
x=4
return A.j(G.ag(A.f(u.text()),r),$async$aB)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(l){A.E(u.status)
v=new B.fN("Unexpected server response")
x=1
break}if(!A.al(u.ok)){n=A.r(J.w(s,"error"))
if(n==null)n="Confirmation failed"
A.E(u.status)
v=new B.fN(n)
x=1
break}n=y.g.a(J.w(s,"recovery_codes"))
o=n==null?null:J.bt(n,r)
v=new B.jm(o==null?A.a([],y.s):o)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aB,w)},
aC(d,e,f){var x=0,w=A.n(y.M),v,u,t,s,r,q,p,o,n,m
var $async$aC=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:n=b.G
m=A.f(new n.Headers())
m.set("content-type","application/json")
m.set("x-csrf-token",d)
r=y.N
q=A.p(["password",e],r,y.z)
if(f!=null&&f.length!==0)q.l(0,"totp_code",f)
p={method:"POST",headers:m,body:D.c.P(q,null),credentials:"same-origin"}
x=3
return A.j(G.ag(A.f(A.f(n.window).fetch("/api/auth/mfa/disable",p)),y.m),$async$aC)
case 3:u=h
x=4
return A.j(G.ag(A.f(u.text()),r),$async$aC)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(l){A.E(u.status)
v=new B.fP("Unexpected server response")
x=1
break}if(!A.al(u.ok)){n=A.r(J.w(s,"error"))
if(n==null)n="Failed to disable MFA"
A.E(u.status)
v=new B.fP(n)
x=1
break}v=new B.jn()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aC,w)}}
B.fS.prototype={}
B.jo.prototype={}
B.fR.prototype={}
B.fO.prototype={}
B.jm.prototype={}
B.fN.prototype={}
B.fQ.prototype={}
B.jn.prototype={}
B.fP.prototype={}
B.fT.prototype={
aD(d){return this.r6(d)},
r6(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$aD=A.o(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.aj))
v=3
x=6
return A.j(t.x.aD(d),$async$aD)
case 6:s=f
A:{r=s
q=null
p=null
n=r instanceof B.jo
if(n){q=r.a
p=r.b}if(n){n=t.c
m=q
t.i(n.qR(null,!1,p,m,C.ak))
break A}o=null
n=r instanceof B.fR
if(n)o=r.a
if(n)t.i(t.c.E(o,!1,C.T))}v=1
x=5
break
case 3:v=2
k=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.T))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aD,w)},
aB(d,e){return this.pT(d,e)},
pT(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$aB=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.aj))
v=3
x=6
return A.j(t.x.aB(d,e),$async$aB)
case 6:s=g
A:{r=s
q=null
o=r instanceof B.jm
if(o)q=r.a
if(o){t.i(t.c.qM(null,!1,q,C.f5))
break A}p=null
o=r instanceof B.fN
if(o)p=r.a
if(o)t.i(t.c.E(p,!1,C.ak))}v=1
x=5
break
case 3:v=2
m=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.ak))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aB,w)},
aC(d,e,f){return this.r0(d,e,f)},
r0(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aC=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.aj))
v=3
x=6
return A.j(t.x.aC(d,e,f),$async$aC)
case 6:s=h
A:{r=s
if(r instanceof B.jn){t.i(t.c.E(null,!1,C.f6))
break A}q=null
p=r instanceof B.fP
if(p)q=r.a
if(p)t.i(t.c.E(q,!1,C.T))}v=1
x=5
break
case 3:v=2
n=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.T))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aC,w)},
t3(){this.i(C.bh)}}
B.dg.prototype={
B(){return"MfaSetupStatus."+this.b}}
B.bC.prototype={
fm(d,e,f,g,h,i){var x,w,v,u,t=this
y.y.a(g)
x=h==null?t.b:h
w=f==null?t.c:f
v=g==null?t.d:g
u=d==null?t.e:d
return new B.bC(i,x,w,v,u,e)},
E(d,e,f){return this.fm(d,e,null,null,null,f)},
qR(d,e,f,g,h){return this.fm(d,e,f,null,g,h)},
qM(d,e,f,g){return this.fm(d,e,null,f,null,g)}}
var z=a.updateTypes(["~()","e(O,bC)"])
B.uu.prototype={
$2(d,e){var x,w=null
y.w.a(e)
x=y.i
return new A.b("div",w,"hs-mfa-setup",w,w,w,A.a([new A.b("h2",w,"hs-mfa-setup__title",w,w,w,A.a([new A.c("Two-factor authentication",w)],x),w),this.a.mR(e)],x),w)},
$S:z+1}
B.uq.prototype={
$1(d){var x=this.a
return x.k(new B.up(x,d))},
$S:5}
B.up.prototype={
$0(){this.a.f=this.b},
$S:0}
B.ur.prototype={
$1(d){var x=this.a
return x.k(new B.uo(x,d))},
$S:5}
B.uo.prototype={
$0(){this.a.r=this.b},
$S:0}
B.ut.prototype={
$1(d){var x=this.a
return x.k(new B.us(x,d))},
$S:5}
B.us.prototype={
$0(){this.a.e=this.b},
$S:0}
B.un.prototype={
$0(){var x,w=L.aB(2,J.zP(y.a.a(this.b.d),"\n"),M.i,!1),v=b.G,u=A.f(A.f(v.document).createElement("a"))
u.href="data:text/plain;charset=utf-8,"+w
u.download="hashstore-backup-codes.txt"
x=A.a0(A.f(v.document).body)
if(x!=null)A.f(x.appendChild(u))
u.click()
v=A.a0(A.f(v.document).body)
if(v!=null)A.f(v.removeChild(u))
return null},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.kT.prototype,"gm_","m0",0)
x(w,"gmS","mT",0)
x(w,"glK","lL",0)
x(B.fT.prototype,"ge0","t3",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cx,I.x)
x(B.kT,I.u)
x(B.uu,A.ah)
w(A.Z,[B.uq,B.ur,B.ut])
w(A.aa,[B.up,B.uo,B.us,B.un])
w(A.J,[B.oJ,B.fS,B.fO,B.fQ,B.bC])
w(B.fS,[B.jo,B.fR])
w(B.fO,[B.jm,B.fN])
w(B.fQ,[B.jn,B.fP])
x(B.fT,K.a7)
x(B.dg,A.ao)})()
A.W(b.typeUniverse,JSON.parse('{"cx":{"x":[],"e":[]},"kT":{"u":["cx"],"u.T":"cx"},"jo":{"fS":[]},"fR":{"fS":[]},"jm":{"fO":[]},"fN":{"fO":[]},"jn":{"fQ":[]},"fP":{"fQ":[]},"fT":{"a7":["bC"],"a1":["bC"],"aG":["bC"],"a1.0":"bC"}}'))
var y=(function rtii(){var x=A.h
return{X:x("P<fT,bC>"),i:x("v<e>"),s:x("v<d>"),m:x("H"),a:x("I<d>"),P:x("z<d,@>"),K:x("fO"),M:x("fQ"),Z:x("fS"),w:x("bC"),N:x("d"),z:x("@"),y:x("I<d>?"),g:x("I<@>?"),H:x("~")}})();(function constants(){C.bi=new B.dg(0,"initial")
C.bh=new B.bC(C.bi,null,null,N.E,null,!1)
C.aj=new B.dg(1,"loading")
C.ak=new B.dg(2,"enrolled")
C.f5=new B.dg(3,"confirmed")
C.f6=new B.dg(4,"disabled")
C.T=new B.dg(5,"error")})()};
(a=>{a["v6jx8LtYNDiv+3DWizSDD2236bU="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_113.part.js.map
