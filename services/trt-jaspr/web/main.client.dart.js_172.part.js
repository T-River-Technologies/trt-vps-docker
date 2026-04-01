((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,F,A={fa:function fa(){},ii:function ii(d){this.a=d},cZ:function cZ(d){this.a=d},e5:function e5(){},j7:function j7(d,e,f){this.a=d
this.b=e
this.c=f},e4:function e4(d){this.a=d},j6:function j6(){},
Bj(d){y.P.a(d)
return new A.aR(B.r(d.j(0,"id")),B.r(d.j(0,"payment_id")),B.r(d.j(0,"date")),B.r(d.j(0,"description")),B.A(d.j(0,"amount_cents")),B.r(d.j(0,"currency")),A.Bk(B.r(d.j(0,"status"))),B.ak(d.j(0,"can_refund")))},
Bk(d){var x
A:{if("paid"===d){x=C.b4
break A}if("pending"===d){x=C.e0
break A}if("refunded"===d){x=C.e1
break A}x=C.b4
break A}return x},
iD:function iD(d,e){this.a=d
this.b=e},
aR:function aR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fr:function fr(){},
iC:function iC(d){this.a=d},
dR:function dR(d){this.a=d},
h1:function h1(){},
ji:function ji(){},
eb:function eb(d){this.a=d},
BC(d){var x,w,v,u,t
y.P.a(d)
x=B.r(d.j(0,"id"))
w=B.r(d.j(0,"name"))
v=B.r(d.j(0,"storage_label"))
u=B.A(d.j(0,"monthly_price_cents"))
t=B.A(d.j(0,"yearly_price_cents"))
B.r(d.j(0,"currency"))
return new A.bA(x,w,v,u,t,J.bo(y.j.a(d.j(0,"features")),y.N))},
bA:function bA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
fV:function fV(){},
j8:function j8(d){this.a=d},
fU:function fU(d){this.a=d},
oY:function oY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o},
ho:function ho(){},
jA:function jA(d){this.a=d},
ep:function ep(d){this.a=d},
hl:function hl(){},
jz:function jz(){},
eo:function eo(d){this.a=d},
hn:function hn(){},
oZ:function oZ(d,e){this.a=d
this.b=e},
p_:function p_(d){this.a=d},
p0:function p0(d,e){this.a=d
this.b=e},
p1:function p1(d){this.a=d},
oX(d){return new A.cH(d,H.m,C.hh)},
cH:function cH(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
hp:function hp(d,e){this.a=d
this.b=e},
hm:function hm(d,e){this.a=d
this.b=e},
dG:function dG(d,e){this.a=d
this.b=e},
aq:function aq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t}},C,G,H
J=c[1]
B=c[0]
D=c[2]
E=c[51]
F=c[76]
A=a.updateHolder(c[41],A)
C=c[92]
G=c[57]
H=c[60]
A.fa.prototype={}
A.ii.prototype={}
A.cZ.prototype={}
A.e5.prototype={}
A.j7.prototype={}
A.e4.prototype={}
A.j6.prototype={}
A.iD.prototype={
C(){return"InvoiceStatus."+this.b}}
A.aR.prototype={}
A.fr.prototype={}
A.iC.prototype={}
A.dR.prototype={}
A.h1.prototype={}
A.ji.prototype={}
A.eb.prototype={}
A.bA.prototype={}
A.fV.prototype={}
A.j8.prototype={}
A.fU.prototype={}
A.oY.prototype={
gbK(){var x=this.e
if(x===0)return 0
return D.f.bv(this.d/x,0,1)}}
A.ho.prototype={}
A.jA.prototype={}
A.ep.prototype={}
A.hl.prototype={}
A.jz.prototype={}
A.eo.prototype={}
A.hn.prototype={
dB(){var x=0,w=B.n(y.f),v,u=this,t,s,r,q,p,o,n,m
var $async$dB=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bt("/api/subscription/plans"),$async$dB)
case 3:m=e
if(m==null){v=C.fk
x=1
break}t=null
try{t=y.P.a(D.c.q(m,null))}catch(l){v=C.fj
x=1
break}r=y.g.a(J.w(t,"plans"))
if(r==null)r=[]
q=J.bo(r,y.P)
p=q.$ti
o=p.h("J<P.E,bA>")
n=B.B(new B.J(q,p.h("bA(P.E)").a(A.GI()),o),o.h("N.E"))
v=new A.j8(n)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dB,w)},
ds(d,e){var x=0,w=B.n(y.e),v,u=this,t,s,r,q,p,o,n
var $async$ds=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=null
x=3
return B.j(u.bW("/api/subscription/checkout",D.c.O(B.p(["plan_id",d,"is_yearly",e],y.N,y.K),null)),$async$ds)
case 3:o=g
n=o.a
p=o.b
if(p==null){v=C.dw
x=1
break}t=null
try{t=y.P.a(D.c.q(p,null))}catch(m){v=C.du
x=1
break}if(n<200||n>=300){r=B.q(J.w(t,"error"))
v=new A.cZ(r==null?"Failed to create checkout session":r)
x=1
break}q=B.q(J.w(t,"checkout_url"))
if(q==null){v=C.dv
x=1
break}v=new A.ii(q)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$ds,w)},
dV(d,e){var x=0,w=B.n(y.d),v,u=this,t,s,r,q,p,o,n
var $async$dV=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bt("/api/subscription/verify?session_id="+E.aw(1,d,F.j,!0)+"&adyen_result="+E.aw(1,e,F.j,!0)),$async$dV)
case 3:n=g
if(n==null){v=C.fi
x=1
break}t=null
try{t=y.P.a(D.c.q(n,null))}catch(m){v=C.fh
x=1
break}r=B.q(J.w(t,"status"))
if(r==null)r=""
A:{if("success"===r){q=B.q(J.w(t,"plan_name"))
if(q==null)q=""
p=B.q(J.w(t,"storage_label"))
if(p==null)p=""
o=B.q(J.w(t,"renewal_date"))
q=new A.j7(q,p,o==null?"":o)
break A}if("cancelled"===r){q=C.d7
break A}q=B.q(J.w(t,"error"))
q=new A.e4(q==null?"Payment verification failed":q)
break A}v=q
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dV,w)},
cw(){var x=0,w=B.n(y.t),v,u=this,t,s,r,q,p
var $async$cw=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bt("/api/subscription/current"),$async$cw)
case 3:p=e
if(p==null){v=C.he
x=1
break}t=null
try{t=y.P.a(D.c.q(p,null))}catch(o){v=C.hg
x=1
break}try{q=t
s=new A.oY(B.r(q.j(0,"plan_id")),B.r(q.j(0,"plan_name")),B.r(q.j(0,"storage_label")),B.A(q.j(0,"storage_used_bytes")),B.A(q.j(0,"storage_total_bytes")),B.A(q.j(0,"monthly_price_cents")),B.A(q.j(0,"yearly_price_cents")),B.r(q.j(0,"currency")),B.ak(q.j(0,"is_yearly")),B.r(q.j(0,"renewal_date")),J.bo(y.j.a(q.j(0,"features")),y.N),B.ak(q.j(0,"is_cancelled")))
v=new A.jA(s)
x=1
break}catch(o){v=C.hf
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$cw,w)},
ar(){var x=0,w=B.n(y.J),v,u=this,t,s,r,q,p,o
var $async$ar=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:q=null
x=3
return B.j(u.bW("/api/subscription/cancel","{}"),$async$ar)
case 3:p=e
o=p.a
q=p.b
if(q==null){v=C.hd
x=1
break}if(o<200||o>=300){t=null
try{t=y.P.a(D.c.q(q,null))}catch(n){v=C.hc
x=1
break}r=B.q(J.w(t,"error"))
v=new A.eo(r==null?"Failed to cancel subscription":r)
x=1
break}v=C.dq
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$ar,w)},
dA(){var x=0,w=B.n(y.u),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$dA=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bt("/api/subscription/invoices"),$async$dA)
case 3:k=e
if(k==null){v=C.dY
x=1
break}t=null
try{t=y.P.a(D.c.q(k,null))}catch(j){v=C.dZ
x=1
break}p=y.g.a(J.w(t,"invoices"))
s=p==null?[]:p
try{o=J.bo(s,y.P)
n=o.$ti
m=n.h("J<P.E,aR>")
l=B.B(new B.J(o,n.h("aR(P.E)").a(A.Ge()),m),m.h("N.E"))
r=l
v=new A.iC(r)
x=1
break}catch(j){v=C.e_
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$dA,w)},
aI(d){var x=0,w=B.n(y.z),v,u=this,t,s,r,q,p,o
var $async$aI=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:r=y.N
q=null
x=3
return B.j(u.bW("/api/subscription/refund",D.c.O(B.p(["payment_id",d],r,r),null)),$async$aI)
case 3:p=f
o=p.a
q=p.b
if(q==null){v=C.fQ
x=1
break}if(o<200||o>=300){t=null
try{t=y.P.a(D.c.q(q,null))}catch(n){v=C.fP
x=1
break}r=B.q(J.w(t,"error"))
v=new A.eb(r==null?"Failed to request refund":r)
x=1
break}v=C.db
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aI,w)},
bt(d){var x=0,w=B.n(y.T),v,u,t,s
var $async$bt=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=new B.M($.R,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("GET",d)
s.onload=B.a_(new A.oZ(t,s))
s.onerror=B.a_(new A.p_(t))
s.send()
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$bt,w)},
bW(d,e){var x=0,w=B.n(y._),v,u,t,s
var $async$bW=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:u=new B.M($.R,y.Y)
t=new B.a3(u,y.a)
s=B.f(new b.G.XMLHttpRequest())
s.open("POST",d)
s.setRequestHeader("Content-Type","application/json")
s.onload=B.a_(new A.p0(t,s))
s.onerror=B.a_(new A.p1(t))
s.send(e)
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$bW,w)}}
A.cH.prototype={
ci(){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$ci=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.a2(C.G))
x=2
return B.j(v.x.dB(),$async$ci)
case 2:u=e
A:{t=u instanceof A.j8
s=t?u.a:null
if(t){v.i(v.c.pF(s,C.av))
break A}t=u instanceof A.fU
r=t?u.a:null
if(t)v.i(v.c.W(r,C.H))}return B.l(null,w)}})
return B.m($async$ci,w)},
bC(){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$bC=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.a2(C.G))
x=2
return B.j(v.x.cw(),$async$bC)
case 2:u=e
A:{t=u instanceof A.jA
s=t?u.a:null
if(t){v.i(v.c.pO(C.av,s))
break A}t=u instanceof A.ep
r=t?u.a:null
if(t)v.i(v.c.W(r,C.H))}return B.l(null,w)}})
return B.m($async$bC,w)},
ar(){var x=0,w=B.n(y.H),v=this,u,t,s
var $async$ar=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.hC(C.a_))
x=2
return B.j(v.x.ar(),$async$ar)
case 2:u=e
x=u instanceof A.jz?4:5
break
case 4:v.i(v.c.hC(C.c1))
x=6
return B.j(v.bC(),$async$ar)
case 6:x=3
break
case 5:t=u instanceof A.eo
s=t?u.a:null
if(t)v.i(v.c.pr(s,C.a0))
case 3:return B.l(null,w)}})
return B.m($async$ar,w)},
bB(){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$bB=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.pj(C.G))
x=2
return B.j(v.x.dA(),$async$bB)
case 2:u=e
A:{t=u instanceof A.iC
s=t?u.a:null
if(t){v.i(v.c.pA(s,C.av))
break A}t=u instanceof A.dR
r=t?u.a:null
if(t)v.i(v.c.pB(r,C.H))}return B.l(null,w)}})
return B.m($async$bB,w)},
aI(d){var x=0,w=B.n(y.H),v=this,u,t,s
var $async$aI=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:v.i(v.c.eS(C.a_))
x=2
return B.j(v.x.aI(d),$async$aI)
case 2:u=f
x=u instanceof A.ji?4:5
break
case 4:v.i(v.c.eS(C.c1))
x=6
return B.j(v.bB(),$async$aI)
case 6:x=3
break
case 5:t=u instanceof A.eb
s=t?u.a:null
if(t)v.i(v.c.pJ(s,C.a0))
case 3:return B.l(null,w)}})
return B.m($async$aI,w)},
dW(d,e){var x=0,w=B.n(y.H),v,u=this,t,s,r,q,p,o
var $async$dW=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:if(d.toLowerCase()==="cancelled"){u.i(u.c.eO(C.ac))
x=1
break}u.i(u.c.eO(C.aZ))
x=3
return B.j(u.x.dV(e,d),$async$dW)
case 3:t=g
A:{s=t instanceof A.j7
r=null
q=null
if(s){p=t.a
r=t.b
q=t.c}else p=null
if(s){u.i(u.c.pW(p,r,C.b_,q))
break A}s=t instanceof A.e4
o=s?t.a:null
if(s){u.i(u.c.pw(o,C.b0))
break A}if(t instanceof A.j6)u.i(u.c.eO(C.ac))}case 1:return B.l(v,w)}})
return B.m($async$dW,w)}}
A.hp.prototype={
C(){return"SubscriptionStatus."+this.b}}
A.hm.prototype={
C(){return"SubscriptionActionStatus."+this.b}}
A.dG.prototype={
C(){return"CheckoutStatus."+this.b}}
A.aq.prototype={
a7(d,e,f,g,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
y.i.a(a7)
y.B.a(a3)
x=b1==null?h.a:b1
w=a7==null?h.b:a7
v=a6==null?h.c:a6
u=a2==null?h.d:a2
t=a1==null?h.e:a1
s=f==null?h.f:f
r=g==null?h.r:g
q=b0==null?h.w:b0
p=a0==null?h.x:a0
o=b2==null?h.y:b2
n=e==null?h.z:e
m=d==null?h.Q:d
l=a5==null?h.as:a5
k=a3==null?h.at:a3
j=a4==null?h.ax:a4
i=a9==null?h.ay:a9
return new A.aq(x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,a8==null?h.ch:a8)},
hC(d){var x=null
return this.a7(x,d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
pr(d,e){var x=null
return this.a7(d,e,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
a2(d){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,d,x)},
pO(d,e){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,d,e)},
W(d,e){var x=null
return this.a7(x,x,x,x,x,x,d,x,x,x,x,x,x,x,x,e,x)},
pF(d,e){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,x,x,d,x,x,x,e,x)},
pk(d){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,x,d,x,x,x,x,x,x)},
eO(d){var x=null
return this.a7(x,x,x,x,x,d,x,x,x,x,x,x,x,x,x,x,x)},
pW(d,e,f,g){var x=null
return this.a7(x,x,d,e,x,f,x,x,x,x,x,x,x,x,g,x,x)},
pw(d,e){var x=null
return this.a7(x,x,x,x,d,e,x,x,x,x,x,x,x,x,x,x,x)},
eS(d){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,x,x,x,x,d,x,x,x)},
pJ(d,e){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,x,x,x,d,e,x,x,x)},
pj(d){var x=null
return this.a7(x,x,x,x,x,x,x,x,x,d,x,x,x,x,x,x,x)},
pA(d,e){var x=null
return this.a7(x,x,x,x,x,x,x,d,x,e,x,x,x,x,x,x,x)},
pB(d,e){var x=null
return this.a7(x,x,x,x,x,x,x,x,d,e,x,x,x,x,x,x,x)}}
var z=a.updateTypes(["Y<~>()","aR(z<d,@>)","bA(z<d,@>)"])
A.oZ.prototype={
$1(d){return this.a.A(B.r(this.b.responseText))},
$S:5}
A.p_.prototype={
$1(d){return this.a.A(null)},
$S:5}
A.p0.prototype={
$1(d){var x=this.b
this.a.A(new B.aD(B.A(x.status),B.r(x.responseText)))},
$S:2}
A.p1.prototype={
$1(d){return this.a.A(C.fE)},
$S:5};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(A,"Ge","Bj",1)
x(A,"GI","BC",2)
var v
w(v=A.cH.prototype,"gqA","ci",0)
w(v,"gqD","bC",0)
w(v,"gqx","bB",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.fa,A.e5,A.aR,A.fr,A.h1,A.bA,A.fV,A.oY,A.ho,A.hl,A.hn,A.aq])
x(A.fa,[A.ii,A.cZ])
x(A.e5,[A.j7,A.e4,A.j6])
x(B.ar,[A.iD,A.hp,A.hm,A.dG])
x(A.fr,[A.iC,A.dR])
x(A.h1,[A.ji,A.eb])
x(A.fV,[A.j8,A.fU])
x(A.ho,[A.jA,A.ep])
x(A.hl,[A.jz,A.eo])
x(B.a0,[A.oZ,A.p_,A.p0,A.p1])
w(A.cH,G.ae)})()
B.X(b.typeUniverse,JSON.parse('{"ii":{"fa":[]},"cZ":{"fa":[]},"j7":{"e5":[]},"e4":{"e5":[]},"j6":{"e5":[]},"iC":{"fr":[]},"dR":{"fr":[]},"ji":{"h1":[]},"eb":{"h1":[]},"j8":{"fV":[]},"fU":{"fV":[]},"jA":{"ho":[]},"ep":{"ho":[]},"jz":{"hl":[]},"eo":{"hl":[]},"cH":{"ae":["aq"],"a2":["aq"],"aK":["aq"],"a2.0":"aq"}}'))
var y=(function rtii(){var x=B.i
return{e:x("fa"),u:x("fr"),j:x("H<@>"),P:x("z<d,@>"),K:x("I"),d:x("e5"),f:x("fV"),_:x("+(t,d?)"),z:x("h1"),N:x("d"),J:x("hl"),t:x("ho"),a:x("a3<+(t,d?)>"),C:x("a3<d?>"),Y:x("M<+(t,d?)>"),s:x("M<d?>"),B:x("H<aR>?"),i:x("H<bA>?"),g:x("H<@>?"),T:x("d?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.d7=new A.j6()
C.db=new A.ji()
C.dq=new A.jz()
C.du=new A.cZ("Unexpected server response")
C.dv=new A.cZ("Missing checkout URL")
C.dw=new A.cZ("Network error")
C.aY=new A.dG(0,"idle")
C.aZ=new A.dG(1,"verifying")
C.b_=new A.dG(2,"success")
C.b0=new A.dG(3,"failed")
C.ac=new A.dG(4,"cancelled")
C.dY=new A.dR("Network error")
C.dZ=new A.dR("Unexpected server response")
C.e_=new A.dR("Failed to parse invoice data")
C.b4=new A.iD(0,"paid")
C.e0=new A.iD(1,"pending")
C.e1=new A.iD(2,"refunded")
C.fh=new A.e4("Unexpected server response")
C.fi=new A.e4("Network error")
C.fj=new A.fU("Unexpected server response")
C.fk=new A.fU("Network error")
C.fE=new B.aD(0,null)
C.fP=new A.eb("Failed to request refund")
C.fQ=new A.eb("Network error")
C.hc=new A.eo("Failed to cancel subscription")
C.hd=new A.eo("Network error")
C.au=new A.hm(0,"idle")
C.a_=new A.hm(1,"submitting")
C.c1=new A.hm(2,"success")
C.a0=new A.hm(3,"error")
C.he=new A.ep("Network error")
C.hf=new A.ep("Failed to parse subscription data")
C.hg=new A.ep("Unexpected server response")
C.O=new A.hp(0,"idle")
C.en=x([],B.i("v<bA>"))
C.eo=x([],B.i("v<aR>"))
C.hh=new A.aq(C.O,C.en,!1,null,C.aY,null,null,null,null,null,C.au,null,C.O,C.eo,null,C.au,null)
C.G=new A.hp(1,"loading")
C.av=new A.hp(2,"loaded")
C.H=new A.hp(3,"error")})()};
(a=>{a["hDpykSOn0crydILrNKZVF0Xuwlc="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_172.part.js.map
