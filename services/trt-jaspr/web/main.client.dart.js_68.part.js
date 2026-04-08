((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,G,B={dN:function dN(){},cl:function cl(d,e,f){this.b=d
this.c=e
this.d=f},dM:function dM(d,e){this.a=d
this.b=e},bw:function bw(d){this.a=d},fc:function fc(){},iA:function iA(){},fb:function fb(d){this.a=d},fa:function fa(){},iz:function iz(){},f9:function f9(d){this.a=d},fe:function fe(){},iB:function iB(d){this.a=d},fd:function fd(d){this.a=d},cm:function cm(){},dO:function dO(){},iD:function iD(d,e,f){this.b=d
this.c=e
this.d=f},iE:function iE(){},fh:function fh(){},fj:function fj(){},iF:function iF(){},fi:function fi(d){this.a=d},fg:function fg(){},iC:function iC(){},ff:function ff(d){this.a=d},
fk(d){return new B.bU(d,H.k,C.cR)},
bU:function bU(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
b9:function b9(d,e){this.a=d
this.b=e},
a6:function a6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o}},C,F,H,E
J=c[1]
A=c[0]
D=c[2]
G=c[64]
B=a.updateHolder(c[51],B)
C=c[76]
F=c[84]
H=c[67]
E=c[58]
B.dN.prototype={}
B.cl.prototype={}
B.dM.prototype={}
B.bw.prototype={}
B.fc.prototype={}
B.iA.prototype={}
B.fb.prototype={}
B.fa.prototype={}
B.iz.prototype={}
B.f9.prototype={}
B.fe.prototype={}
B.iB.prototype={}
B.fd.prototype={}
B.cm.prototype={
aG(d,e,f,g){var x=0,w=A.n(y.L),v,u,t,s,r,q,p,o,n,m,l
var $async$aG=A.o(function(h,i){if(h===1)return A.k(i,w)
for(;;)switch(x){case 0:m=b.G
l=A.f(new m.Headers())
l.set("content-type","application/json")
l.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:l,body:D.c.P(A.p(["email",e,"password",f,"remember_me",g],r,y.K),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(m.window).fetch("/api/auth/login",q)),y.m),$async$aG)
case 3:u=i
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aG)
case 4:t=i
s=null
try{s=y.P.a(D.c.q(t,null))}catch(k){A.E(u.status)
v=new B.bw("Unexpected server response")
x=1
break}if(!A.al(u.ok)){m=A.r(J.w(s,"error"))
if(m==null)m="Login failed"
A.E(u.status)
v=new B.bw(m)
x=1
break}if(J.aY(J.w(s,"mfa_required"),!0)){m=A.r(J.w(s,"mfa_token"))
if(m==null)m=""
o=y.g.a(J.w(s,"mfa_methods"))
r=o==null?null:J.bt(o,r)
v=new B.dM(m,r==null?F.E:r)
x=1
break}n=y.h.a(J.w(s,"user"))
if(n==null)n=A.a5(r,y.z)
A.r(n.j(0,"id"))
m=A.r(n.j(0,"email"))
if(m==null)m=""
r=A.r(n.j(0,"first_name"))
if(r==null)r=""
o=A.r(n.j(0,"last_name"))
v=new B.cl(m,r,o==null?"":o)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aG,w)},
cA(d,e,f,g,h){var x=0,w=A.n(y.V),v,u,t,s,r,q,p,o,n
var $async$cA=A.o(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.P(A.p(["first_name",f,"last_name",g,"email",e,"password",h],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/register",q)),y.m),$async$cA)
case 3:u=j
x=4
return A.j(E.ag(A.f(u.text()),r),$async$cA)
case 4:t=j
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.E(u.status)
v=new B.fd("Unexpected server response")
x=1
break}if(!A.al(u.ok)){o=A.r(J.w(s,"error"))
if(o==null)o="Registration failed"
A.E(u.status)
v=new B.fd(o)
x=1
break}v=new B.iB(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cA,w)},
aM(d,e){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n
var $async$aM=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.P(A.p(["token",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/verify-email",q)),y.m),$async$aM)
case 3:u=g
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aM)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.E(u.status)
v=new B.fi("Unexpected server response")
x=1
break}if(!A.al(u.ok)){o=A.r(J.w(s,"error"))
if(o==null)o="Verification failed"
A.E(u.status)
v=new B.fi(o)
x=1
break}v=new B.iF()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aM,w)},
aI(d,e){var x=0,w=A.n(y.q),v,u,t,s,r,q,p,o,n
var $async$aI=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.P(A.p(["email",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/password-reset/request",q)),y.m),$async$aI)
case 3:u=g
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aI)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.E(u.status)
v=new B.fb("Unexpected server response")
x=1
break}if(!A.al(u.ok)){o=A.r(J.w(s,"error"))
if(o==null)o="Failed to send reset email"
A.E(u.status)
v=new B.fb(o)
x=1
break}v=new B.iA()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aI,w)},
aA(d,e,f){var x=0,w=A.n(y.n),v,u,t,s,r,q,p,o,n
var $async$aA=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.P(A.p(["token",f,"new_password",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/password-reset/confirm",q)),y.m),$async$aA)
case 3:u=h
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aA)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.E(u.status)
v=new B.f9("Unexpected server response")
x=1
break}if(!A.al(u.ok)){o=A.r(J.w(s,"error"))
if(o==null)o="Password reset failed"
A.E(u.status)
v=new B.f9(o)
x=1
break}v=new B.iz()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aA,w)},
cI(d,e,f){var x=0,w=A.n(y.L),v,u,t,s,r,q,p,o,n,m,l
var $async$cI=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:m=b.G
l=A.f(new m.Headers())
l.set("content-type","application/json")
l.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:l,body:D.c.P(A.p(["mfa_token",e,"totp_code",f],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(m.window).fetch("/api/auth/mfa/verify-totp",q)),y.m),$async$cI)
case 3:u=h
x=4
return A.j(E.ag(A.f(u.text()),r),$async$cI)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(k){A.E(u.status)
v=new B.bw("Unexpected server response")
x=1
break}if(!A.al(u.ok)){m=A.r(J.w(s,"error"))
if(m==null)m="Verification failed"
A.E(u.status)
v=new B.bw(m)
x=1
break}o=y.h.a(J.w(s,"user"))
if(o==null)o=A.a5(r,y.z)
A.r(o.j(0,"id"))
m=A.r(o.j(0,"email"))
if(m==null)m=""
r=A.r(o.j(0,"first_name"))
if(r==null)r=""
n=A.r(o.j(0,"last_name"))
v=new B.cl(m,r,n==null?"":n)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cI,w)},
cH(d,e,f){var x=0,w=A.n(y.L),v,u,t,s,r,q,p,o,n,m,l
var $async$cH=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:m=b.G
l=A.f(new m.Headers())
l.set("content-type","application/json")
l.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:l,body:D.c.P(A.p(["mfa_token",e,"recovery_code",f],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(m.window).fetch("/api/auth/mfa/verify-recovery",q)),y.m),$async$cH)
case 3:u=h
x=4
return A.j(E.ag(A.f(u.text()),r),$async$cH)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(k){A.E(u.status)
v=new B.bw("Unexpected server response")
x=1
break}if(!A.al(u.ok)){m=A.r(J.w(s,"error"))
if(m==null)m="Recovery login failed"
A.E(u.status)
v=new B.bw(m)
x=1
break}o=y.h.a(J.w(s,"user"))
if(o==null)o=A.a5(r,y.z)
A.r(o.j(0,"id"))
m=A.r(o.j(0,"email"))
if(m==null)m=""
r=A.r(o.j(0,"first_name"))
if(r==null)r=""
n=A.r(o.j(0,"last_name"))
v=new B.cl(m,r,n==null?"":n)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cH,w)},
az(){var x=0,w=A.n(y.G),v,u,t,s,r,q,p,o,n,m
var $async$az=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q={method:"GET",credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(b.G.window).fetch("/api/auth/session",q)),y.m),$async$az)
case 3:p=e
o=y.N
x=4
return A.j(E.ag(A.f(p.text()),o),$async$az)
case 4:n=e
m=null
try{m=y.P.a(D.c.q(n,null))}catch(l){v=new B.fh()
x=1
break}if(A.E(p.status)===401){v=new B.iE()
x=1
break}if(!A.al(p.ok)){A.r(J.w(m,"error"))
v=new B.fh()
x=1
break}t=y.h.a(J.w(m,"user"))
if(t==null)t=A.a5(o,y.z)
A.r(t.j(0,"id"))
o=A.r(t.j(0,"email"))
if(o==null)o=""
s=A.r(t.j(0,"first_name"))
if(s==null)s=""
r=A.r(t.j(0,"last_name"))
v=new B.iD(o,s,r==null?"":r)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$az,w)},
b7(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q,p
var $async$b7=A.o(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:r=b.G
q=A.f(new r.Headers())
q.set("content-type","application/json")
q.set("x-csrf-token",d)
t={method:"POST",headers:q,body:"{}",credentials:"same-origin"}
v=3
x=6
return A.j(E.ag(A.f(A.f(r.window).fetch("/api/auth/logout",t)),y.m),$async$b7)
case 6:v=1
x=5
break
case 3:v=2
p=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$b7,w)},
aK(d,e){var x=0,w=A.n(y.I),v,u,t,s,r,q,p,o,n
var $async$aK=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.P(A.p(["email",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/resend-verification",q)),y.m),$async$aK)
case 3:u=g
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aK)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.E(u.status)
v=new B.ff("Unexpected server response")
x=1
break}if(!A.al(u.ok)){o=A.r(J.w(s,"error"))
if(o==null)o="Failed to resend verification"
A.E(u.status)
v=new B.ff(o)
x=1
break}v=new B.iC()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aK,w)}}
B.dO.prototype={}
B.iD.prototype={}
B.iE.prototype={}
B.fh.prototype={}
B.fj.prototype={}
B.iF.prototype={}
B.fi.prototype={}
B.fg.prototype={}
B.iC.prototype={}
B.ff.prototype={}
B.bU.prototype={
aG(d,e,f,g){return this.rF(d,e,f,g)},
rF(d,e,f,g){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$aG=A.o(function(h,a0){if(h===1){u.push(a0)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aG(d,e,f,g),$async$aG)
case 6:s=a0
A:{r=s
q=null
p=null
l=r instanceof B.cl
if(l){q=r.b
k=r
p=k.c+" "+k.d}if(l){t.i(t.c.dF(null,!1,C.y,q,p))
break A}o=null
n=null
l=r instanceof B.dM
if(l){o=r.a
n=r.b}if(l){l=t.c
k=o
t.i(l.qQ(null,!1,n,k,C.x))
break A}m=null
l=r instanceof B.bw
if(l)m=r.a
if(l)t.i(t.c.E(m,!1,C.w))}v=1
x=5
break
case 3:v=2
i=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.w))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aG,w)},
dY(d,e,f,g){return this.rX(d,e,f,g)},
rX(d,e,f,g){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$dY=A.o(function(h,i){if(h===1){u.push(i)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
m=A.a(D.a.t(f).split(" "),y.s)
s=D.b.gbG(m)
r=m.length>1?D.b.a_(D.b.fW(m,1)," "):""
v=3
x=6
return A.j(t.x.cA(d,e,s,r,g),$async$dY)
case 6:q=i
A:{p=q
o=null
l=p instanceof B.iB
if(l)o=p.a
if(l){t.i(t.c.qN(null,!1,o,C.aU))
break A}n=null
l=p instanceof B.fd
if(l)n=p.a
if(l)t.i(t.c.E(n,!1,C.w))}v=1
x=5
break
case 3:v=2
j=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.w))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$dY,w)},
aM(d,e){return this.tf(d,e)},
tf(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aM=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aM(d,e),$async$aM)
case 6:s=g
A:{r=s
if(r instanceof B.iF){t.i(t.c.E(null,!1,C.aV))
break A}q=null
p=r instanceof B.fi
if(p)q=r.a
if(p)t.i(t.c.E(q,!1,C.K))}v=1
x=5
break
case 3:v=2
n=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.K))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aM,w)},
aI(d,e){return this.t1(d,e)},
t1(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aI=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aI(d,e),$async$aI)
case 6:s=g
A:{r=s
if(r instanceof B.iA){t.i(t.c.E(null,!1,C.aX))
break A}q=null
p=r instanceof B.fb
if(p)q=r.a
if(p)t.i(t.c.E(q,!1,C.J))}v=1
x=5
break
case 3:v=2
n=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.J))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aI,w)},
aA(d,e,f){return this.pS(d,e,f)},
pS(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aA=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aA(d,e,f),$async$aA)
case 6:s=h
A:{r=s
if(r instanceof B.iz){t.i(t.c.E(null,!1,C.aT))
break A}q=null
p=r instanceof B.f9
if(p)q=r.a
if(p)t.i(t.c.E(q,!1,C.J))}v=1
x=5
break
case 3:v=2
n=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.J))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aA,w)},
dU(d,e,f){return this.rH(d,e,f)},
rH(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$dU=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.cI(d,e,f),$async$dU)
case 6:s=h
A:{r=s
q=null
p=null
n=r instanceof B.cl
if(n){q=r.b
m=r
p=m.c+" "+m.d}if(n){t.i(t.c.dF(null,!1,C.y,q,p))
break A}if(r instanceof B.dM){t.i(t.c.E("Unexpected server response",!1,C.x))
break A}o=null
n=r instanceof B.bw
if(n)o=r.a
if(n)t.i(t.c.E(o,!1,C.x))}v=1
x=5
break
case 3:v=2
k=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.x))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$dU,w)},
dT(d,e,f){return this.rG(d,e,f)},
rG(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$dT=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.cH(d,e,f),$async$dT)
case 6:s=h
A:{r=s
q=null
p=null
n=r instanceof B.cl
if(n){q=r.b
m=r
p=m.c+" "+m.d}if(n){t.i(t.c.dF(null,!1,C.y,q,p))
break A}if(r instanceof B.dM){t.i(t.c.E("Unexpected server response",!1,C.x))
break A}o=null
n=r instanceof B.bw
if(n)o=r.a
if(n)t.i(t.c.E(o,!1,C.x))}v=1
x=5
break
case 3:v=2
k=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.x))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$dT,w)},
az(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$az=A.o(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.az(),$async$az)
case 6:s=e
A:{r=s
q=null
p=null
o=null
n=r instanceof B.iD
if(n){q=r.b
p=r.c
o=r.d}if(n){t.i(t.c.dF(null,!1,C.y,q,D.a.t(A.V(p)+" "+A.V(o))))
break A}if(r instanceof B.iE){t.i(t.c.fe(!1,C.w))
break A}if(r instanceof B.fh)t.i(t.c.fe(!1,C.w))}v=1
x=5
break
case 3:v=2
l=u.pop()
t.i(t.c.fe(!1,C.w))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$az,w)},
b7(d){return this.rI(d)},
rI(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r
var $async$b7=A.o(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.j(t.x.b7(d),$async$b7)
case 6:v=1
x=5
break
case 3:v=2
r=u.pop()
x=5
break
case 2:x=1
break
case 5:t.i(C.cS)
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$b7,w)},
aK(d,e){return this.t2(d,e)},
t2(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aK=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aK(d,e),$async$aK)
case 6:s=g
A:{r=s
if(r instanceof B.iC){t.i(t.c.E(null,!1,C.aW))
break A}q=null
p=r instanceof B.ff
if(p)q=r.a
if(p)t.i(t.c.E(q,!1,C.K))}v=1
x=5
break
case 3:v=2
n=u.pop()
t.i(t.c.E("An unexpected error occurred",!1,C.K))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$aK,w)}}
B.b9.prototype={
B(){return"AuthStatus."+this.b}}
B.a6.prototype={
cc(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r=this
y.y.a(f)
x=j==null?r.b:j
w=k==null?r.c:k
v=g==null?r.w:g
u=f==null?r.x:f
t=h==null?r.y:h
s=d==null?r.z:d
return new B.a6(i,x,w,r.d,r.e,r.f,!1,v,u,t,s,e)},
E(d,e,f){var x=null
return this.cc(d,e,x,x,x,f,x,x)},
qN(d,e,f,g){var x=null
return this.cc(d,e,x,x,f,g,x,x)},
dF(d,e,f,g,h){return this.cc(d,e,null,null,null,f,g,h)},
qQ(d,e,f,g,h){return this.cc(d,e,f,g,null,h,null,null)},
fe(d,e){var x=null
return this.cc(x,d,x,x,x,e,x,x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.dN,B.fc,B.fa,B.fe,B.cm,B.dO,B.fj,B.fg,B.a6])
x(B.dN,[B.cl,B.dM,B.bw])
x(B.fc,[B.iA,B.fb])
x(B.fa,[B.iz,B.f9])
x(B.fe,[B.iB,B.fd])
x(B.dO,[B.iD,B.iE,B.fh])
x(B.fj,[B.iF,B.fi])
x(B.fg,[B.iC,B.ff])
w(B.bU,G.a7)
w(B.b9,A.ao)})()
A.W(b.typeUniverse,JSON.parse('{"cl":{"dN":[]},"dM":{"dN":[]},"bw":{"dN":[]},"iA":{"fc":[]},"fb":{"fc":[]},"iz":{"fa":[]},"f9":{"fa":[]},"iB":{"fe":[]},"fd":{"fe":[]},"iD":{"dO":[]},"iE":{"dO":[]},"fh":{"dO":[]},"iF":{"fj":[]},"fi":{"fj":[]},"iC":{"fg":[]},"ff":{"fg":[]},"bU":{"a7":["a6"],"a1":["a6"],"aG":["a6"],"a1.0":"a6"}}'))
var y=(function rtii(){var x=A.h
return{L:x("dN"),n:x("fa"),q:x("fc"),V:x("fe"),I:x("fg"),G:x("dO"),B:x("fj"),s:x("v<d>"),m:x("H"),P:x("z<d,@>"),K:x("J"),N:x("d"),z:x("@"),y:x("I<d>?"),g:x("I<@>?"),h:x("z<d,@>?"),H:x("~")}})();(function constants(){C.u=new B.b9(1,"loading")
C.aT=new B.b9(10,"passwordResetSuccess")
C.J=new B.b9(11,"passwordResetFailed")
C.y=new B.b9(2,"authenticated")
C.w=new B.b9(3,"unauthenticated")
C.x=new B.b9(4,"mfaRequired")
C.aU=new B.b9(5,"registrationSuccess")
C.aV=new B.b9(6,"emailVerified")
C.K=new B.b9(7,"emailVerificationFailed")
C.aW=new B.b9(8,"resendVerificationSuccess")
C.aX=new B.b9(9,"passwordResetRequested")
C.cQ=new B.b9(0,"initial")
C.cR=new B.a6(C.cQ,null,null,null,null,F.E,!1,null,F.E,null,null,!1)
C.cS=new B.a6(C.w,null,null,null,null,F.E,!1,null,F.E,null,null,!1)})()};
(a=>{a["qgWAoep2OFkwoC4MTAnRDbEnktI="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_68.part.js.map
