((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,G,B={dA:function dA(){},cf:function cf(d,e,f){this.b=d
this.c=e
this.d=f},dz:function dz(d,e){this.a=d
this.b=e},br:function br(d){this.a=d},eZ:function eZ(){},i8:function i8(){},eY:function eY(d){this.a=d},eX:function eX(){},i7:function i7(){},eW:function eW(d){this.a=d},f0:function f0(){},i9:function i9(d){this.a=d},f_:function f_(d){this.a=d},cg:function cg(){},dB:function dB(){},ib:function ib(d,e,f){this.b=d
this.c=e
this.d=f},ic:function ic(){},f3:function f3(){},f5:function f5(){},id:function id(){},f4:function f4(d){this.a=d},f2:function f2(){},ia:function ia(){},f1:function f1(d){this.a=d},
f6(d){return new B.bK(d,H.m,C.cI)},
bK:function bK(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
b4:function b4(d,e){this.a=d
this.b=e},
a4:function a4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o}},C,F,E,H
J=c[1]
A=c[0]
D=c[2]
G=c[57]
B=a.updateHolder(c[45],B)
C=c[69]
F=c[77]
E=c[53]
H=c[60]
B.dA.prototype={}
B.cf.prototype={}
B.dz.prototype={}
B.br.prototype={}
B.eZ.prototype={}
B.i8.prototype={}
B.eY.prototype={}
B.eX.prototype={}
B.i7.prototype={}
B.eW.prototype={}
B.f0.prototype={}
B.i9.prototype={}
B.f_.prototype={}
B.cg.prototype={
aF(d,e,f,g){var x=0,w=A.n(y.L),v,u,t,s,r,q,p,o,n,m,l
var $async$aF=A.o(function(h,i){if(h===1)return A.k(i,w)
for(;;)switch(x){case 0:m=b.G
l=A.f(new m.Headers())
l.set("content-type","application/json")
l.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:l,body:D.c.O(A.p(["email",e,"password",f,"remember_me",g],r,y.K),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(m.window).fetch("/api/auth/login",q)),y.m),$async$aF)
case 3:u=i
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aF)
case 4:t=i
s=null
try{s=y.P.a(D.c.q(t,null))}catch(k){A.A(u.status)
v=new B.br("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){m=A.q(J.w(s,"error"))
if(m==null)m="Login failed"
A.A(u.status)
v=new B.br(m)
x=1
break}if(J.bg(J.w(s,"mfa_required"),!0)){m=A.q(J.w(s,"mfa_token"))
if(m==null)m=""
o=y.g.a(J.w(s,"mfa_methods"))
r=o==null?null:J.bo(o,r)
v=new B.dz(m,r==null?F.E:r)
x=1
break}n=y.h.a(J.w(s,"user"))
if(n==null)n=A.a8(r,y.z)
A.q(n.j(0,"id"))
m=A.q(n.j(0,"email"))
if(m==null)m=""
r=A.q(n.j(0,"first_name"))
if(r==null)r=""
o=A.q(n.j(0,"last_name"))
v=new B.cf(m,r,o==null?"":o)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aF,w)},
cn(d,e,f,g,h){var x=0,w=A.n(y.V),v,u,t,s,r,q,p,o,n
var $async$cn=A.o(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.O(A.p(["first_name",f,"last_name",g,"email",e,"password",h],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/register",q)),y.m),$async$cn)
case 3:u=j
x=4
return A.j(E.ag(A.f(u.text()),r),$async$cn)
case 4:t=j
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.A(u.status)
v=new B.f_("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){o=A.q(J.w(s,"error"))
if(o==null)o="Registration failed"
A.A(u.status)
v=new B.f_(o)
x=1
break}v=new B.i9(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cn,w)},
aK(d,e){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n
var $async$aK=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.O(A.p(["token",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/verify-email",q)),y.m),$async$aK)
case 3:u=g
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aK)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.A(u.status)
v=new B.f4("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){o=A.q(J.w(s,"error"))
if(o==null)o="Verification failed"
A.A(u.status)
v=new B.f4(o)
x=1
break}v=new B.id()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aK,w)},
aH(d,e){var x=0,w=A.n(y.q),v,u,t,s,r,q,p,o,n
var $async$aH=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.O(A.p(["email",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/password-reset/request",q)),y.m),$async$aH)
case 3:u=g
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aH)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.A(u.status)
v=new B.eY("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){o=A.q(J.w(s,"error"))
if(o==null)o="Failed to send reset email"
A.A(u.status)
v=new B.eY(o)
x=1
break}v=new B.i8()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aH,w)},
aw(d,e,f){var x=0,w=A.n(y.n),v,u,t,s,r,q,p,o,n
var $async$aw=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.O(A.p(["token",f,"new_password",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/password-reset/confirm",q)),y.m),$async$aw)
case 3:u=h
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aw)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.A(u.status)
v=new B.eW("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){o=A.q(J.w(s,"error"))
if(o==null)o="Password reset failed"
A.A(u.status)
v=new B.eW(o)
x=1
break}v=new B.i7()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aw,w)},
cu(d,e,f){var x=0,w=A.n(y.L),v,u,t,s,r,q,p,o,n,m,l
var $async$cu=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:m=b.G
l=A.f(new m.Headers())
l.set("content-type","application/json")
l.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:l,body:D.c.O(A.p(["mfa_token",e,"totp_code",f],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(m.window).fetch("/api/auth/mfa/verify-totp",q)),y.m),$async$cu)
case 3:u=h
x=4
return A.j(E.ag(A.f(u.text()),r),$async$cu)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(k){A.A(u.status)
v=new B.br("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){m=A.q(J.w(s,"error"))
if(m==null)m="Verification failed"
A.A(u.status)
v=new B.br(m)
x=1
break}o=y.h.a(J.w(s,"user"))
if(o==null)o=A.a8(r,y.z)
A.q(o.j(0,"id"))
m=A.q(o.j(0,"email"))
if(m==null)m=""
r=A.q(o.j(0,"first_name"))
if(r==null)r=""
n=A.q(o.j(0,"last_name"))
v=new B.cf(m,r,n==null?"":n)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cu,w)},
ct(d,e,f){var x=0,w=A.n(y.L),v,u,t,s,r,q,p,o,n,m,l
var $async$ct=A.o(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:m=b.G
l=A.f(new m.Headers())
l.set("content-type","application/json")
l.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:l,body:D.c.O(A.p(["mfa_token",e,"recovery_code",f],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(m.window).fetch("/api/auth/mfa/verify-recovery",q)),y.m),$async$ct)
case 3:u=h
x=4
return A.j(E.ag(A.f(u.text()),r),$async$ct)
case 4:t=h
s=null
try{s=y.P.a(D.c.q(t,null))}catch(k){A.A(u.status)
v=new B.br("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){m=A.q(J.w(s,"error"))
if(m==null)m="Recovery login failed"
A.A(u.status)
v=new B.br(m)
x=1
break}o=y.h.a(J.w(s,"user"))
if(o==null)o=A.a8(r,y.z)
A.q(o.j(0,"id"))
m=A.q(o.j(0,"email"))
if(m==null)m=""
r=A.q(o.j(0,"first_name"))
if(r==null)r=""
n=A.q(o.j(0,"last_name"))
v=new B.cf(m,r,n==null?"":n)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ct,w)},
au(){var x=0,w=A.n(y.G),v,u,t,s,r,q,p,o,n,m
var $async$au=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q={method:"GET",credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(b.G.window).fetch("/api/auth/session",q)),y.m),$async$au)
case 3:p=e
o=y.N
x=4
return A.j(E.ag(A.f(p.text()),o),$async$au)
case 4:n=e
m=null
try{m=y.P.a(D.c.q(n,null))}catch(l){v=new B.f3()
x=1
break}if(A.A(p.status)===401){v=new B.ic()
x=1
break}if(!A.ak(p.ok)){A.q(J.w(m,"error"))
v=new B.f3()
x=1
break}t=y.h.a(J.w(m,"user"))
if(t==null)t=A.a8(o,y.z)
A.q(t.j(0,"id"))
o=A.q(t.j(0,"email"))
if(o==null)o=""
s=A.q(t.j(0,"first_name"))
if(s==null)s=""
r=A.q(t.j(0,"last_name"))
v=new B.ib(o,s,r==null?"":r)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$au,w)},
b6(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q,p
var $async$b6=A.o(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:r=b.G
q=A.f(new r.Headers())
q.set("content-type","application/json")
q.set("x-csrf-token",d)
t={method:"POST",headers:q,body:"{}",credentials:"same-origin"}
v=3
x=6
return A.j(E.ag(A.f(A.f(r.window).fetch("/api/auth/logout",t)),y.m),$async$b6)
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
return A.m($async$b6,w)},
aJ(d,e){var x=0,w=A.n(y.I),v,u,t,s,r,q,p,o,n
var $async$aJ=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:o=b.G
n=A.f(new o.Headers())
n.set("content-type","application/json")
n.set("x-csrf-token",d)
r=y.N
q={method:"POST",headers:n,body:D.c.O(A.p(["email",e],r,r),null),credentials:"same-origin"}
x=3
return A.j(E.ag(A.f(A.f(o.window).fetch("/api/auth/resend-verification",q)),y.m),$async$aJ)
case 3:u=g
x=4
return A.j(E.ag(A.f(u.text()),r),$async$aJ)
case 4:t=g
s=null
try{s=y.P.a(D.c.q(t,null))}catch(m){A.A(u.status)
v=new B.f1("Unexpected server response")
x=1
break}if(!A.ak(u.ok)){o=A.q(J.w(s,"error"))
if(o==null)o="Failed to resend verification"
A.A(u.status)
v=new B.f1(o)
x=1
break}v=new B.ia()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aJ,w)}}
B.dB.prototype={}
B.ib.prototype={}
B.ic.prototype={}
B.f3.prototype={}
B.f5.prototype={}
B.id.prototype={}
B.f4.prototype={}
B.f2.prototype={}
B.ia.prototype={}
B.f1.prototype={}
B.bK.prototype={
aF(d,e,f,g){return this.qG(d,e,f,g)},
qG(d,e,f,g){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$aF=A.o(function(h,a0){if(h===1){u.push(a0)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aF(d,e,f,g),$async$aF)
case 6:s=a0
A:{r=s
q=null
p=null
l=r instanceof B.cf
if(l){q=r.b
k=r
p=k.c+" "+k.d}if(l){t.i(t.c.dn(null,!1,C.y,q,p))
break A}o=null
n=null
l=r instanceof B.dz
if(l){o=r.a
n=r.b}if(l){l=t.c
k=o
t.i(l.q2(null,!1,n,k,C.x))
break A}m=null
l=r instanceof B.br
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
return A.m($async$aF,w)},
dI(d,e,f,g){return this.qY(d,e,f,g)},
qY(d,e,f,g){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$dI=A.o(function(h,i){if(h===1){u.push(i)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
m=A.a(D.a.u(f).split(" "),y.s)
s=D.b.gca(m)
r=m.length>1?D.b.V(D.b.fA(m,1)," "):""
v=3
x=6
return A.j(t.x.cn(d,e,s,r,g),$async$dI)
case 6:q=i
A:{p=q
o=null
l=p instanceof B.i9
if(l)o=p.a
if(l){t.i(t.c.q0(null,!1,o,C.aR))
break A}n=null
l=p instanceof B.f_
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
return A.m($async$dI,w)},
aK(d,e){return this.rg(d,e)},
rg(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aK=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aK(d,e),$async$aK)
case 6:s=g
A:{r=s
if(r instanceof B.id){t.i(t.c.E(null,!1,C.aS))
break A}q=null
p=r instanceof B.f4
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
return A.m($async$aK,w)},
aH(d,e){return this.r2(d,e)},
r2(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aH=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aH(d,e),$async$aH)
case 6:s=g
A:{r=s
if(r instanceof B.i8){t.i(t.c.E(null,!1,C.aU))
break A}q=null
p=r instanceof B.eY
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
return A.m($async$aH,w)},
aw(d,e,f){return this.pb(d,e,f)},
pb(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aw=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aw(d,e,f),$async$aw)
case 6:s=h
A:{r=s
if(r instanceof B.i7){t.i(t.c.E(null,!1,C.aQ))
break A}q=null
p=r instanceof B.eW
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
return A.m($async$aw,w)},
dE(d,e,f){return this.qI(d,e,f)},
qI(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$dE=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.cu(d,e,f),$async$dE)
case 6:s=h
A:{r=s
q=null
p=null
n=r instanceof B.cf
if(n){q=r.b
m=r
p=m.c+" "+m.d}if(n){t.i(t.c.dn(null,!1,C.y,q,p))
break A}if(r instanceof B.dz){t.i(t.c.E("Unexpected server response",!1,C.x))
break A}o=null
n=r instanceof B.br
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
return A.m($async$dE,w)},
dD(d,e,f){return this.qH(d,e,f)},
qH(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$dD=A.o(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.ct(d,e,f),$async$dD)
case 6:s=h
A:{r=s
q=null
p=null
n=r instanceof B.cf
if(n){q=r.b
m=r
p=m.c+" "+m.d}if(n){t.i(t.c.dn(null,!1,C.y,q,p))
break A}if(r instanceof B.dz){t.i(t.c.E("Unexpected server response",!1,C.x))
break A}o=null
n=r instanceof B.br
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
return A.m($async$dD,w)},
au(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$au=A.o(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.au(),$async$au)
case 6:s=e
A:{r=s
q=null
p=null
o=null
n=r instanceof B.ib
if(n){q=r.b
p=r.c
o=r.d}if(n){t.i(t.c.dn(null,!1,C.y,q,D.a.u(A.V(p)+" "+A.V(o))))
break A}if(r instanceof B.ic){t.i(t.c.eU(!1,C.w))
break A}if(r instanceof B.f3)t.i(t.c.eU(!1,C.w))}v=1
x=5
break
case 3:v=2
l=u.pop()
t.i(t.c.eU(!1,C.w))
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$au,w)},
b6(d){return this.qJ(d)},
qJ(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r
var $async$b6=A.o(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.j(t.x.b6(d),$async$b6)
case 6:v=1
x=5
break
case 3:v=2
r=u.pop()
x=5
break
case 2:x=1
break
case 5:t.i(C.cJ)
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$b6,w)},
aJ(d,e){return this.r3(d,e)},
r3(d,e){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n
var $async$aJ=A.o(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:t.i(t.c.E(null,!0,C.u))
v=3
x=6
return A.j(t.x.aJ(d,e),$async$aJ)
case 6:s=g
A:{r=s
if(r instanceof B.ia){t.i(t.c.E(null,!1,C.aT))
break A}q=null
p=r instanceof B.f1
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
return A.m($async$aJ,w)}}
B.b4.prototype={
C(){return"AuthStatus."+this.b}}
B.a4.prototype={
c3(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r=this
y.y.a(f)
x=j==null?r.b:j
w=k==null?r.c:k
v=g==null?r.w:g
u=f==null?r.x:f
t=h==null?r.y:h
s=d==null?r.z:d
return new B.a4(i,x,w,r.d,r.e,r.f,!1,v,u,t,s,e)},
E(d,e,f){var x=null
return this.c3(d,e,x,x,x,f,x,x)},
q0(d,e,f,g){var x=null
return this.c3(d,e,x,x,f,g,x,x)},
dn(d,e,f,g,h){return this.c3(d,e,null,null,null,f,g,h)},
q2(d,e,f,g,h){return this.c3(d,e,f,g,null,h,null,null)},
eU(d,e){var x=null
return this.c3(x,d,x,x,x,e,x,x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.dA,B.eZ,B.eX,B.f0,B.cg,B.dB,B.f5,B.f2,B.a4])
x(B.dA,[B.cf,B.dz,B.br])
x(B.eZ,[B.i8,B.eY])
x(B.eX,[B.i7,B.eW])
x(B.f0,[B.i9,B.f_])
x(B.dB,[B.ib,B.ic,B.f3])
x(B.f5,[B.id,B.f4])
x(B.f2,[B.ia,B.f1])
w(B.bK,G.ae)
w(B.b4,A.ar)})()
A.X(b.typeUniverse,JSON.parse('{"cf":{"dA":[]},"dz":{"dA":[]},"br":{"dA":[]},"i8":{"eZ":[]},"eY":{"eZ":[]},"i7":{"eX":[]},"eW":{"eX":[]},"i9":{"f0":[]},"f_":{"f0":[]},"ib":{"dB":[]},"ic":{"dB":[]},"f3":{"dB":[]},"id":{"f5":[]},"f4":{"f5":[]},"ia":{"f2":[]},"f1":{"f2":[]},"bK":{"ae":["a4"],"a2":["a4"],"aK":["a4"],"a2.0":"a4"}}'))
var y=(function rtii(){var x=A.i
return{L:x("dA"),n:x("eX"),q:x("eZ"),V:x("f0"),I:x("f2"),G:x("dB"),B:x("f5"),s:x("v<d>"),m:x("F"),P:x("z<d,@>"),K:x("I"),N:x("d"),z:x("@"),y:x("H<d>?"),g:x("H<@>?"),h:x("z<d,@>?"),H:x("~")}})();(function constants(){C.u=new B.b4(1,"loading")
C.aQ=new B.b4(10,"passwordResetSuccess")
C.J=new B.b4(11,"passwordResetFailed")
C.y=new B.b4(2,"authenticated")
C.w=new B.b4(3,"unauthenticated")
C.x=new B.b4(4,"mfaRequired")
C.aR=new B.b4(5,"registrationSuccess")
C.aS=new B.b4(6,"emailVerified")
C.K=new B.b4(7,"emailVerificationFailed")
C.aT=new B.b4(8,"resendVerificationSuccess")
C.aU=new B.b4(9,"passwordResetRequested")
C.cH=new B.b4(0,"initial")
C.cI=new B.a4(C.cH,null,null,null,null,F.E,!1,null,F.E,null,null,!1)
C.cJ=new B.a4(C.w,null,null,null,null,F.E,!1,null,F.E,null,null,!1)})()};
(a=>{a["zpRhjFsCaJao6sLbmevn5fdFD1E="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_62.part.js.map
