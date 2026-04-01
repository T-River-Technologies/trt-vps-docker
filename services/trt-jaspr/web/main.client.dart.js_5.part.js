((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
F2(d){var x
A:{if("inactive"===d){x=C.a9
break A}x=C.a8
break A}return x},
yD(d){var x,w,v,u,t=B.q(d.j(0,"role_id"))
if(t==null)t=""
x=B.q(d.j(0,"name"))
if(x==null)x=""
w=B.q(d.j(0,"description"))
if(w==null)w=""
v=B.kW(d.j(0,"member_count"))
if(v==null)v=0
u=y.g.a(d.j(0,"permissions"))
if(u==null)u=[]
u=J.cc(u,new A.n9(),y.N)
u=B.B(u,u.$ti.h("N.E"))
return new A.av(t,x,w,v,u)},
l_:function l_(d,e){this.a=d
this.b=e},
ao:function ao(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
av:function av(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
n9:function n9(){},
bI:function bI(d,e,f){this.a=d
this.b=e
this.c=f},
eQ:function eQ(){},
i5:function i5(d){this.a=d},
dw:function dw(d){this.a=d},
eM:function eM(){},
i3:function i3(){},
du:function du(d){this.a=d},
eO:function eO(){},
i4:function i4(){},
dv:function dv(d){this.a=d},
eK:function eK(){},
i2:function i2(d,e){this.a=d
this.b=e},
dt:function dt(d){this.a=d},
eG:function eG(){},
hZ:function hZ(d){this.a=d},
cY:function cY(d){this.a=d},
eJ:function eJ(){},
i0:function i0(){},
ds:function ds(d){this.a=d},
eH:function eH(){},
i_:function i_(){},
dr:function dr(d){this.a=d},
kZ:function kZ(){},
n8:function n8(){},
n6:function n6(){},
n7:function n7(){},
n2:function n2(d,e){this.a=d
this.b=e},
n3:function n3(d){this.a=d},
n4:function n4(d,e){this.a=d
this.b=e},
n5:function n5(d){this.a=d},
n0:function n0(d,e){this.a=d
this.b=e},
n1:function n1(d){this.a=d}},C
J=c[1]
B=c[0]
D=c[2]
E=c[34]
A=a.updateHolder(c[26],A)
C=c[66]
A.l_.prototype={
C(){return"AdminUserStatus."+this.b}}
A.ao.prototype={}
A.av.prototype={}
A.bI.prototype={}
A.eQ.prototype={}
A.i5.prototype={}
A.dw.prototype={}
A.eM.prototype={}
A.i3.prototype={}
A.du.prototype={}
A.eO.prototype={}
A.i4.prototype={}
A.dv.prototype={}
A.eK.prototype={}
A.i2.prototype={}
A.dt.prototype={}
A.eG.prototype={}
A.hZ.prototype={}
A.cY.prototype={}
A.eJ.prototype={}
A.i0.prototype={}
A.ds.prototype={}
A.eH.prototype={}
A.i_.prototype={}
A.dr.prototype={}
A.kZ.prototype={
b5(){var x=0,w=B.n(y.F),v,u=this,t,s,r,q,p,o
var $async$b5=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.cF("/api/admin/users"),$async$b5)
case 3:o=e
if(o==null){v=C.cz
x=1
break}t=null
try{t=y.P.a(D.c.q(o,null))}catch(n){v=C.cy
x=1
break}try{q=J.cc(y.j.a(J.w(t,"users")),new A.n8(),y.i)
p=B.B(q,q.$ti.h("N.E"))
s=p
v=new A.i5(s)
x=1
break}catch(n){v=C.cA
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$b5,w)},
aW(d,e){var x=0,w=B.n(y.e),v,u=this,t,s,r,q
var $async$aW=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bp("/api/admin/users/"+e+"/deactivate","{}",d),$async$aW)
case 3:q=g
if(q==null){v=C.cu
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cv
x=1
break}r=B.aA(J.w(t,"ok"))
if(r!==!0){r=B.q(J.w(t,"error"))
v=new A.du(r==null?"Deactivation failed":r)
x=1
break}v=C.cM
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aW,w)},
aR(d,e,f){var x=0,w=B.n(y.X),v,u=this,t,s,r,q
var $async$aR=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bp("/api/admin/users/"+f+"/role",D.c.O(B.p(["role",E.yq(e)],y.N,y.z),null),d),$async$aR)
case 3:q=h
if(q==null){v=C.cx
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cw
x=1
break}r=B.aA(J.w(t,"ok"))
if(r!==!0){r=B.q(J.w(t,"error"))
v=new A.dv(r==null?"Role change failed":r)
x=1
break}v=C.cN
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aR,w)},
b2(){var x=0,w=B.n(y.k),v,u=this,t,s,r,q,p,o,n,m,l
var $async$b2=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.cF("/api/admin/roles"),$async$b2)
case 3:l=e
if(l==null){v=C.cp
x=1
break}t=null
try{t=y.P.a(D.c.q(l,null))}catch(k){v=C.cr
x=1
break}try{p=y.j
o=J.cc(p.a(J.w(t,"roles")),new A.n6(),y.b)
n=B.B(o,o.$ti.h("N.E"))
s=n
p=J.cc(p.a(J.w(t,"permissions")),new A.n7(),y.Q)
m=B.B(p,p.$ti.h("N.E"))
r=m
v=new A.i2(s,r)
x=1
break}catch(k){v=C.cq
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$b2,w)},
aU(d,e,f,g){return this.q5(d,e,f,y.a.a(g))},
q5(d,e,f,g){var x=0,w=B.n(y.I),v,u=this,t,s,r,q,p
var $async$aU=B.o(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bp("/api/admin/roles",D.c.O(B.p(["name",f,"description",e,"permissions",g],y.N,y.z),null),d),$async$aU)
case 3:p=i
if(p==null){v=C.ci
x=1
break}t=null
try{t=y.P.a(D.c.q(p,null))}catch(o){v=C.ck
x=1
break}q=B.aA(J.w(t,"ok"))
if(q!==!0){q=B.q(J.w(t,"error"))
v=new A.cY(q==null?"Role creation failed":q)
x=1
break}try{s=A.yD(y.P.a(J.w(t,"role")))
v=new A.hZ(s)
x=1
break}catch(o){v=C.cj
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$aU,w)},
dS(d,e,f){return this.rd(d,y.a.a(e),f)},
rd(d,e,f){var x=0,w=B.n(y.c),v,u=this,t,s,r,q
var $async$dS=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bp("/api/admin/roles/"+f,D.c.O(B.p(["permissions",e],y.N,y.z),null),d),$async$dS)
case 3:q=h
if(q==null){v=C.co
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cn
x=1
break}r=B.aA(J.w(t,"ok"))
if(r!==!0){r=B.q(J.w(t,"error"))
v=new A.ds(r==null?"Role update failed":r)
x=1
break}v=C.cL
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dS,w)},
aY(d,e){var x=0,w=B.n(y.f),v,u=this,t,s,r,q
var $async$aY=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.j(u.e8("/api/admin/roles/"+e,d),$async$aY)
case 3:q=g
if(q==null){v=C.cl
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cm
x=1
break}r=B.aA(J.w(t,"ok"))
if(r!==!0){r=B.q(J.w(t,"error"))
v=new A.dr(r==null?"Role deletion failed":r)
x=1
break}v=C.cK
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aY,w)},
cF(d){var x=0,w=B.n(y.T),v,u,t,s
var $async$cF=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=new B.M($.R,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("GET",d)
s.onload=B.a_(new A.n2(t,s))
s.onerror=B.a_(new A.n3(t))
s.send()
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cF,w)},
bp(d,e,f){var x=0,w=B.n(y.T),v,u,t,s
var $async$bp=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=new B.M($.R,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("POST",d)
s.setRequestHeader("Content-Type","application/json")
s.setRequestHeader("X-CSRF-Token",f)
s.onload=B.a_(new A.n4(t,s))
s.onerror=B.a_(new A.n5(t))
s.send(e)
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$bp,w)},
e8(d,e){var x=0,w=B.n(y.T),v,u,t,s
var $async$e8=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:u=new B.M($.R,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("DELETE",d)
s.setRequestHeader("Content-Type","application/json")
s.setRequestHeader("X-CSRF-Token",e)
s.onload=B.a_(new A.n0(t,s))
s.onerror=B.a_(new A.n1(t))
s.send("{}")
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$e8,w)}}
var z=a.updateTypes(["ao(@)","av(@)","bI(@)"])
A.n9.prototype={
$1(d){return B.r(d)},
$S:59}
A.n8.prototype={
$1(d){var x,w,v,u,t,s,r
y.P.a(d)
x=B.q(d.j(0,"user_id"))
if(x==null)x=""
w=B.q(d.j(0,"first_name"))
if(w==null)w=""
v=B.q(d.j(0,"last_name"))
if(v==null)v=""
u=B.q(d.j(0,"email"))
if(u==null)u=""
t=B.q(d.j(0,"role"))
t=E.yp(t==null?"member":t)
s=B.q(d.j(0,"status"))
s=A.F2(s==null?"active":s)
r=B.q(d.j(0,"last_login_at"))
return new A.ao(x,w,v,u,t,s,r==null?"":r)},
$S:z+0}
A.n6.prototype={
$1(d){return A.yD(y.P.a(d))},
$S:z+1}
A.n7.prototype={
$1(d){var x,w,v
y.P.a(d)
x=B.q(d.j(0,"permission_id"))
if(x==null)x=""
w=B.q(d.j(0,"name"))
if(w==null)w=""
v=B.q(d.j(0,"description"))
return new A.bI(x,w,v==null?"":v)},
$S:z+2}
A.n2.prototype={
$1(d){return this.a.A(B.r(this.b.responseText))},
$S:5}
A.n3.prototype={
$1(d){return this.a.A(null)},
$S:5}
A.n4.prototype={
$1(d){return this.a.A(B.r(this.b.responseText))},
$S:5}
A.n5.prototype={
$1(d){return this.a.A(null)},
$S:5}
A.n0.prototype={
$1(d){return this.a.A(B.r(this.b.responseText))},
$S:5}
A.n1.prototype={
$1(d){return this.a.A(null)},
$S:5};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.l_,B.ar)
w(B.I,[A.ao,A.av,A.bI,A.eQ,A.eM,A.eO,A.eK,A.eG,A.eJ,A.eH,A.kZ])
w(B.a0,[A.n9,A.n8,A.n6,A.n7,A.n2,A.n3,A.n4,A.n5,A.n0,A.n1])
w(A.eQ,[A.i5,A.dw])
w(A.eM,[A.i3,A.du])
w(A.eO,[A.i4,A.dv])
w(A.eK,[A.i2,A.dt])
w(A.eG,[A.hZ,A.cY])
w(A.eJ,[A.i0,A.ds])
w(A.eH,[A.i_,A.dr])})()
B.X(b.typeUniverse,JSON.parse('{"i5":{"eQ":[]},"dw":{"eQ":[]},"i3":{"eM":[]},"du":{"eM":[]},"i4":{"eO":[]},"dv":{"eO":[]},"i2":{"eK":[]},"dt":{"eK":[]},"hZ":{"eG":[]},"cY":{"eG":[]},"i0":{"eJ":[]},"ds":{"eJ":[]},"i_":{"eH":[]},"dr":{"eH":[]}}'))
var y=(function rtii(){var x=B.i
return{Q:x("bI"),b:x("av"),I:x("eG"),f:x("eH"),c:x("eJ"),k:x("eK"),i:x("ao"),e:x("eM"),X:x("eO"),F:x("eQ"),a:x("H<d>"),j:x("H<@>"),P:x("z<d,@>"),N:x("d"),C:x("a3<d?>"),s:x("M<d?>"),z:x("@"),g:x("H<@>?"),T:x("d?")}})();(function constants(){C.ci=new A.cY("Network error")
C.cj=new A.cY("Failed to parse new role")
C.ck=new A.cY("Unexpected server response")
C.cl=new A.dr("Network error")
C.cm=new A.dr("Unexpected server response")
C.cn=new A.ds("Unexpected server response")
C.co=new A.ds("Network error")
C.cp=new A.dt("Network error")
C.cq=new A.dt("Failed to parse roles data")
C.cr=new A.dt("Unexpected server response")
C.cu=new A.du("Network error")
C.cv=new A.du("Unexpected server response")
C.cw=new A.dv("Unexpected server response")
C.cx=new A.dv("Network error")
C.a8=new A.l_(0,"active")
C.a9=new A.l_(1,"inactive")
C.cy=new A.dw("Unexpected server response")
C.cz=new A.dw("Network error")
C.cA=new A.dw("Failed to parse user data")
C.cK=new A.i_()
C.cL=new A.i0()
C.cM=new A.i3()
C.cN=new A.i4()})()};
(a=>{a["owft7iiL3pourNtm/Tq9xm06yss="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_5.part.js.map
