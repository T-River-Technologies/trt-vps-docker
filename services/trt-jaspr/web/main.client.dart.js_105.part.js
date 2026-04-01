((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
Bx(){return new B.cr(null)},
cr:function cr(d){this.a=d},
kk:function kk(){var _=this
_.d=$
_.r=_.f=_.e=""
_.c=_.a=null},
tA:function tA(d){this.a=d},
tw:function tw(d){this.a=d},
tv:function tv(d,e){this.a=d
this.b=e},
tx:function tx(d){this.a=d},
tu:function tu(d,e){this.a=d
this.b=e},
tz:function tz(d){this.a=d},
ty:function ty(d,e){this.a=d
this.b=e},
tt:function tt(d,e){this.a=d
this.b=e},
o9:function o9(){},
fA:function fA(){},
iV:function iV(d,e){this.a=d
this.b=e},
fz:function fz(d){this.a=d},
fw:function fw(){},
iT:function iT(d){this.a=d},
fv:function fv(d){this.a=d},
fy:function fy(){},
iU:function iU(){},
fx:function fx(d){this.a=d},
fB:function fB(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
d6:function d6(d,e){this.a=d
this.b=e},
bw:function bw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
F8(d,e,f){var x,w=null,v=y.i,u=A.a([new A.c("Two-factor authentication is now enabled. Save these backup codes in a safe place \u2014 they can only be shown once and will let you regain access if you lose your authenticator.",w)],v),t=A.a([],v)
for(x=J.bV(f);x.v();)t.push(new A.b("code",w,"hs-mfa-setup__backup-code",w,w,w,A.a([new A.c(x.gD(),w)],v),w))
return new A.b("div",w,"hs-mfa-setup__section",w,w,w,A.a([new A.b("p",w,"hs-mfa-setup__description",w,w,w,u,w),new A.b("div",w,"hs-mfa-setup__backup-codes",w,w,w,t,w),new A.b("div",w,"hs-mfa-setup__actions",w,w,w,A.a([new E.C("Download backup codes",F.P,e,!1,!1,w),new E.C("Done",F.p,d,!1,!1,w)],v),w)],v),w)}},C,L,M,I,E,F,H,K,N,G,O
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[9],B)
C=c[75]
L=c[51]
M=c[76]
I=c[58]
E=c[56]
F=c[61]
H=c[52]
K=c[57]
N=c[77]
G=c[53]
O=c[60]
B.cr.prototype={
B(){return new B.kk()}}
B.kk.prototype={
F(){this.G()
this.d=new B.fB(new B.o9(),O.m,C.bd)},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
es(){var x,w,v,u,t
for(x=A.r(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=D.a.Y(u,"=")
if(t>0)if(D.a.u(D.a.L(u,0,t))==="hs_csrf")return D.a.u(D.a.P(u,t+1))}return""},
lw(){var x=this.d
x===$&&A.h()
x.aC(this.es())},
mo(){var x,w=this.e
if(w.length===0)return
x=this.d
x===$&&A.h()
x.az(w,this.es())},
lg(){var x,w,v=this,u=v.f
if(u.length===0)return
x=v.d
x===$&&A.h()
w=v.r
w=w.length!==0?w:null
x.aB(v.es(),u,w)},
n(d){var x=this.d
x===$&&A.h()
return new K.S(x,new B.tA(this),null,y.X)},
mm(d){var x,w,v,u=this,t=null,s="div",r="hs-mfa-setup__section",q="hs-login-card__error",p="hs-verify-email__body",o=d.a
switch(o.a){case 0:x=y.i
w=A.a([new A.b("h3",t,"hs-mfa-setup__subtitle",t,t,t,A.a([new A.c("Enable two-factor authentication",t)],x),t),new A.b("p",t,"hs-mfa-setup__description",t,t,t,A.a([new A.c("Use an authenticator app such as Google Authenticator, Authy, or 1Password to generate one-time codes that protect your account even if your password is compromised.",t)],x),t)],x)
v=d.e
if(v!=null&&o===C.be)w.push(new A.b("p",t,q,t,t,t,A.a([new A.c(v,t)],x),t))
w.push(new E.C("Set up authenticator app",F.p,u.glv(),!1,!1,t))
o=new A.b(s,t,r,t,t,t,A.a([new A.b(s,t,"hs-mfa-setup__block",t,t,t,w,t),new A.b("hr",t,"hs-mfa-setup__divider",t,t,t,A.a([],x),t),u.jc(d)],x),t)
break
case 1:o=y.i
o=new A.b(s,t,"hs-mfa-setup__loading",t,t,t,A.a([new A.b("p",t,p,t,t,t,A.a([new A.c("Please wait\u2026",t)],o),t)],o),t)
break
case 2:o=u.jd(d)
break
case 3:o=u.j3(d)
break
case 4:o=y.i
x=A.a([new A.c("Two-factor authentication has been disabled for your account.",t)],o)
w=u.d
w===$&&A.h()
o=new A.b(s,t,r,t,t,t,A.a([new A.b("p",t,p,t,t,t,x,t),new E.C("Set up two-factor authentication",F.P,w.gdL(),!1,!1,t)],o),t)
break
case 5:o=d.e
if(o==null)o="An unexpected error occurred"
x=y.i
o=A.a([new A.c(o,t)],x)
w=u.d
w===$&&A.h()
x=new A.b(s,t,r,t,t,t,A.a([new A.b("p",t,q,t,t,t,o,t),new E.C("Try again",F.P,w.gdL(),!1,!1,t)],x),t)
o=x
break
default:o=t}return o},
jc(d){var x=this,w="Disable two-factor authentication",v=null,u=d.f,t=y.i,s=A.a([new A.c(w,v)],t),r=A.a([new A.c("Enter your current password and your TOTP code to disable two-factor authentication.",v)],t),q=H.an(!1,v,v,u,!0,"Current password",new B.tw(x),v,v),p=H.an(!1,v,v,u,!1,"Authenticator code (optional)",new B.tx(x),v,v),o=u?"Disabling\u2026":w,n=!u,m=!n||x.f.length===0?v:x.glf()
n=!n||x.f.length===0
return new A.b("div",v,"hs-mfa-setup__block",v,v,v,A.a([new A.b("h3",v,"hs-mfa-setup__subtitle",v,v,v,s,v),new A.b("p",v,"hs-mfa-setup__description",v,v,v,r,v),q,p,new E.C(o,F.P,m,!1,n,v)],t),v)},
jd(d){var x,w,v,u,t,s=this,r=null,q="div",p=s.e,o=s.gmn(),n=s.d
n===$&&A.h()
x=d.f
w=y.i
v=A.a([new A.b("p",r,"hs-mfa-setup__description",r,r,r,A.a([new A.c("Scan the QR code below with your authenticator app, then enter the 6-digit code to confirm setup.",r)],w),r)],w)
u=d.c
if(u!=null&&u.length!==0){t=y.N
v.push(new A.b(q,r,"hs-mfa-setup__qr",r,r,r,A.a([new A.b("img",r,"hs-mfa-setup__qr-img",r,A.p(["src","data:image/png;base64,"+u,"alt","QR code for authenticator app"],t,t),r,A.a([],w),r)],w),r))}u=d.b
if(u!=null&&u.length!==0)v.push(new A.b(q,r,"hs-mfa-setup__secret",r,r,r,A.a([new A.b("p",r,"hs-mfa-setup__secret-label",r,r,r,A.a([new A.c("Or enter this key manually:",r)],w),r),new A.b("code",r,"hs-mfa-setup__secret-code",r,r,r,A.a([new A.c(u,r)],w),r)],w),r))
u=d.e
if(u!=null)v.push(new A.b("p",r,"hs-login-card__error",r,r,r,A.a([new A.c(u,r)],w),r))
v.push(H.an(!1,r,r,x,!1,"6-digit code from app",new B.tz(s),r,r))
u=x?"Verifying\u2026":"Confirm"
t=!x
if(!t||p.length===0)o=r
v.push(new A.b(q,r,"hs-mfa-setup__actions",r,r,r,A.a([new E.C(u,F.p,o,!1,!t||p.length===0,r),new E.C("Cancel",F.P,n.gdL(),!1,!1,r)],w),r))
return new A.b(q,r,"hs-mfa-setup__section",r,r,r,v,r)},
j3(d){var x=this.d
x===$&&A.h()
return B.F8(x.gdL(),new B.tt(this,d),d.d)}}
B.o9.prototype={
aC(d){var x=0,w=A.n(y.Z),v,u,t,s,r,q,p,o,n
var $async$aC=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.z
q={method:"POST",headers:n,body:D.c.O(A.a8(r,r),null),credentials:"same-origin"}
x=3
return A.j(G.ag(A.f(A.f(o.window).fetch("/api/auth/mfa/enroll",q)),y.m),$async$aC)
case 3:u=f
x=4
return A.j(G.ag(A.f(u.text()),y.N),$async$aC)
case 4:t=f
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.A(u.status)
v=new B.fz("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){o=A.q(J.w(s,"error"))
if(o==null)o="Enrollment failed"
A.A(u.status)
v=new B.fz(o)
x=1
break}o=A.q(J.w(s,"secret"))
if(o==null)o=""
r=A.q(J.w(s,"qr_code"))
v=new B.iV(o,r==null?"":r)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aC,w)},
az(d,e){var x=0,w=A.n(y.K),v,u,t,s,r,q,p,o,n,m
var $async$az=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:n=b.G
m=A.f(new n.Headers())
m.set("content-type","application/json")
m.set("x-csrf-token",e)
r=y.N
q={method:"POST",headers:m,body:D.c.O(A.p(["code",d],r,r),null),credentials:"same-origin"}
x=3
return A.j(G.ag(A.f(A.f(n.window).fetch("/api/auth/mfa/confirm",q)),y.m),$async$az)
case 3:u=g
x=4
return A.j(G.ag(A.f(u.text()),r),$async$az)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(l){A.A(u.status)
v=new B.fv("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){n=A.q(J.w(s,"error"))
if(n==null)n="Confirmation failed"
A.A(u.status)
v=new B.fv(n)
x=1
break}n=y.g.a(J.w(s,"recovery_codes"))
o=n==null?null:J.bo(n,r)
v=new B.iT(o==null?A.a([],y.s):o)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$az,w)},
aB(d,e,f){var x=0,w=A.n(y.M),v,u,t,s,r,q,p,o,n,m
var $async$aB=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:n=b.G
m=A.f(new n.Headers())
m.set("content-type","application/json")
m.set("x-csrf-token",d)
r=y.N
q=A.p(["password",e],r,y.z)
if(f!=null&&f.length!==0)q.l(0,"totp_code",f)
p={method:"POST",headers:m,body:D.c.O(q,null),credentials:"same-origin"}
x=3
return A.j(G.ag(A.f(A.f(n.window).fetch("/api/auth/mfa/disable",p)),y.m),$async$aB)
case 3:u=h
x=4
return A.j(G.ag(A.f(u.text()),r),$async$aB)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(l){A.A(u.status)
v=new B.fx("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){n=A.q(J.w(s,"error"))
if(n==null)n="Failed to disable MFA"
A.A(u.status)
v=new B.fx(n)
x=1
break}v=new B.iU()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aB,w)}}
B.fA.prototype={}
B.iV.prototype={}
B.fz.prototype={}
B.fw.prototype={}
B.iT.prototype={}
B.fv.prototype={}
B.fy.prototype={}
B.iU.prototype={}
B.fx.prototype={}
B.fB.prototype={
aC(d){return this.qf(d)},
qf(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$aC=A.o(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.ai))
v=3
x=6
return A.j(t.x.aC(d),$async$aC)
case 6:s=f
A:{r=s
q=null
p=null
n=r instanceof B.iV
if(n){q=r.a
p=r.b}if(n){n=t.c
m=q
t.i(n.q3(null,!1,p,m,C.aj))
break A}o=null
n=r instanceof B.fz
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
return A.m($async$aC,w)},
az(d,e){return this.pc(d,e)},
pc(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$az=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.ai))
v=3
x=6
return A.j(t.x.az(d,e),$async$az)
case 6:s=g
A:{r=s
q=null
o=r instanceof B.iT
if(o)q=r.a
if(o){t.i(t.c.q_(null,!1,q,C.eP))
break A}p=null
o=r instanceof B.fv
if(o)p=r.a
if(o)t.i(t.c.E(p,!1,C.aj))}v=1
x=5
break
case 3:v=2
m=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.aj))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$az,w)},
aB(d,e,f){return this.qa(d,e,f)},
qa(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aB=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.ai))
v=3
x=6
return A.j(t.x.aB(d,e,f),$async$aB)
case 6:s=h
A:{r=s
if(r instanceof B.iU){t.i(t.c.E(null,!1,C.eQ))
break A}q=null
p=r instanceof B.fx
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
return A.m($async$aB,w)},
r4(){this.i(C.bd)}}
B.d6.prototype={
C(){return"MfaSetupStatus."+this.b}}
B.bw.prototype={
f1(d,e,f,g,h,i){var x,w,v,u,t=this
y.y.a(g)
x=h==null?t.b:h
w=f==null?t.c:f
v=g==null?t.d:g
u=d==null?t.e:d
return new B.bw(i,x,w,v,u,e)},
E(d,e,f){return this.f1(d,e,null,null,null,f)},
q3(d,e,f,g,h){return this.f1(d,e,f,null,g,h)},
q_(d,e,f,g){return this.f1(d,e,null,f,null,g)}}
var z=a.updateTypes(["~()","e(O,bw)"])
B.tA.prototype={
$2(d,e){var x,w=null
y.w.a(e)
x=y.i
return new A.b("div",w,"hs-mfa-setup",w,w,w,A.a([new A.b("h2",w,"hs-mfa-setup__title",w,w,w,A.a([new A.c("Two-factor authentication",w)],x),w),this.a.mm(e)],x),w)},
$S:z+1}
B.tw.prototype={
$1(d){var x=this.a
return x.k(new B.tv(x,d))},
$S:4}
B.tv.prototype={
$0(){this.a.f=this.b},
$S:0}
B.tx.prototype={
$1(d){var x=this.a
return x.k(new B.tu(x,d))},
$S:4}
B.tu.prototype={
$0(){this.a.r=this.b},
$S:0}
B.tz.prototype={
$1(d){var x=this.a
return x.k(new B.ty(x,d))},
$S:4}
B.ty.prototype={
$0(){this.a.e=this.b},
$S:0}
B.tt.prototype={
$0(){var x,w=L.aw(2,J.yC(y.a.a(this.b.d),"\n"),M.j,!1),v=b.G,u=A.f(A.f(v.document).createElement("a"))
u.href="data:text/plain;charset=utf-8,"+w
u.download="hashstore-backup-codes.txt"
x=A.Z(A.f(v.document).body)
if(x!=null)A.f(x.appendChild(u))
u.click()
v=A.Z(A.f(v.document).body)
if(v!=null)A.f(v.removeChild(u))
return null},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.kk.prototype,"glv","lw",0)
x(w,"gmn","mo",0)
x(w,"glf","lg",0)
x(B.fB.prototype,"gdL","r4",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cr,I.y)
x(B.kk,I.u)
x(B.tA,A.ai)
w(A.a0,[B.tw,B.tx,B.tz])
w(A.ab,[B.tv,B.tu,B.ty,B.tt])
w(A.I,[B.o9,B.fA,B.fw,B.fy,B.bw])
w(B.fA,[B.iV,B.fz])
w(B.fw,[B.iT,B.fv])
w(B.fy,[B.iU,B.fx])
x(B.fB,K.ae)
x(B.d6,A.ar)})()
A.X(b.typeUniverse,JSON.parse('{"cr":{"y":[],"e":[]},"kk":{"u":["cr"],"u.T":"cr"},"iV":{"fA":[]},"fz":{"fA":[]},"iT":{"fw":[]},"fv":{"fw":[]},"iU":{"fy":[]},"fx":{"fy":[]},"fB":{"ae":["bw"],"a2":["bw"],"aK":["bw"],"a2.0":"bw"}}'))
var y=(function rtii(){var x=A.i
return{X:x("S<fB,bw>"),i:x("v<e>"),s:x("v<d>"),m:x("F"),a:x("H<d>"),P:x("z<d,@>"),K:x("fw"),M:x("fy"),Z:x("fA"),w:x("bw"),N:x("d"),z:x("@"),y:x("H<d>?"),g:x("H<@>?"),H:x("~")}})();(function constants(){C.be=new B.d6(0,"initial")
C.bd=new B.bw(C.be,null,null,N.E,null,!1)
C.ai=new B.d6(1,"loading")
C.aj=new B.d6(2,"enrolled")
C.eP=new B.d6(3,"confirmed")
C.eQ=new B.d6(4,"disabled")
C.T=new B.d6(5,"error")})()};
(a=>{a["53JEmebbr7+eT1FweDDe4esXn5U="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_105.part.js.map
