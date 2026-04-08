((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
GB(d){var x
A:{if("inactive"===d){x=C.aa
break A}x=C.a9
break A}return x},
zQ(d){var x,w,v,u,t=B.r(d.j(0,"role_id"))
if(t==null)t=""
x=B.r(d.j(0,"name"))
if(x==null)x=""
w=B.r(d.j(0,"description"))
if(w==null)w=""
v=B.dA(d.j(0,"member_count"))
if(v==null)v=0
u=y.g.a(d.j(0,"permissions"))
if(u==null)u=[]
u=J.bR(u,new A.nJ(),y.N)
u=B.A(u,u.$ti.h("M.E"))
return new A.az(t,x,w,v,u)},
ly:function ly(d,e){this.a=d
this.b=e},
ap:function ap(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
az:function az(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
nJ:function nJ(){},
bS:function bS(d,e,f){this.a=d
this.b=e
this.c=f},
f4:function f4(){},
ix:function ix(d){this.a=d},
dJ:function dJ(d){this.a=d},
f0:function f0(){},
iv:function iv(){},
dH:function dH(d){this.a=d},
f2:function f2(){},
iw:function iw(){},
dI:function dI(d){this.a=d},
eZ:function eZ(){},
iu:function iu(d,e){this.a=d
this.b=e},
dG:function dG(d){this.a=d},
eV:function eV(){},
iq:function iq(d){this.a=d},
d7:function d7(d){this.a=d},
eY:function eY(){},
is:function is(){},
dF:function dF(d){this.a=d},
eW:function eW(){},
ir:function ir(){},
dE:function dE(d){this.a=d},
lx:function lx(){},
nI:function nI(){},
nG:function nG(){},
nH:function nH(){},
nC:function nC(d,e){this.a=d
this.b=e},
nD:function nD(d){this.a=d},
nE:function nE(d,e){this.a=d
this.b=e},
nF:function nF(d){this.a=d},
nA:function nA(d,e){this.a=d
this.b=e},
nB:function nB(d){this.a=d}},C
J=c[1]
B=c[0]
D=c[2]
E=c[37]
A=a.updateHolder(c[29],A)
C=c[73]
A.ly.prototype={
B(){return"AdminUserStatus."+this.b}}
A.ap.prototype={}
A.az.prototype={}
A.bS.prototype={}
A.f4.prototype={}
A.ix.prototype={}
A.dJ.prototype={}
A.f0.prototype={}
A.iv.prototype={}
A.dH.prototype={}
A.f2.prototype={}
A.iw.prototype={}
A.dI.prototype={}
A.eZ.prototype={}
A.iu.prototype={}
A.dG.prototype={}
A.eV.prototype={}
A.iq.prototype={}
A.d7.prototype={}
A.eY.prototype={}
A.is.prototype={}
A.dF.prototype={}
A.eW.prototype={}
A.ir.prototype={}
A.dE.prototype={}
A.lx.prototype={
b6(){var x=0,w=B.n(y.F),v,u=this,t,s,r,q,p,o
var $async$b6=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.cT("/api/admin/users"),$async$b6)
case 3:o=e
if(o==null){v=C.cI
x=1
break}t=null
try{t=y.P.a(D.c.q(o,null))}catch(n){v=C.cH
x=1
break}try{q=J.bR(y.j.a(J.w(t,"users")),new A.nI(),y.i)
p=B.A(q,q.$ti.h("M.E"))
s=p
v=new A.ix(s)
x=1
break}catch(n){v=C.cJ
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$b6,w)},
aX(d,e){var x=0,w=B.n(y.e),v,u=this,t,s,r,q
var $async$aX=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bu("/api/admin/users/"+e+"/deactivate","{}",d),$async$aX)
case 3:q=g
if(q==null){v=C.cD
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cE
x=1
break}r=B.au(J.w(t,"ok"))
if(r!==!0){r=B.r(J.w(t,"error"))
v=new A.dH(r==null?"Deactivation failed":r)
x=1
break}v=C.cV
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aX,w)},
aS(d,e,f){var x=0,w=B.n(y.X),v,u=this,t,s,r,q
var $async$aS=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bu("/api/admin/users/"+f+"/role",D.c.P(B.p(["role",E.zD(e)],y.N,y.z),null),d),$async$aS)
case 3:q=h
if(q==null){v=C.cG
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cF
x=1
break}r=B.au(J.w(t,"ok"))
if(r!==!0){r=B.r(J.w(t,"error"))
v=new A.dI(r==null?"Role change failed":r)
x=1
break}v=C.cW
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aS,w)},
b3(){var x=0,w=B.n(y.k),v,u=this,t,s,r,q,p,o,n,m,l
var $async$b3=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.cT("/api/admin/roles"),$async$b3)
case 3:l=e
if(l==null){v=C.cy
x=1
break}t=null
try{t=y.P.a(D.c.q(l,null))}catch(k){v=C.cA
x=1
break}try{p=y.j
o=J.bR(p.a(J.w(t,"roles")),new A.nG(),y.b)
n=B.A(o,o.$ti.h("M.E"))
s=n
p=J.bR(p.a(J.w(t,"permissions")),new A.nH(),y.Q)
m=B.A(p,p.$ti.h("M.E"))
r=m
v=new A.iu(s,r)
x=1
break}catch(k){v=C.cz
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$b3,w)},
aV(d,e,f,g){return this.qU(d,e,f,y.a.a(g))},
qU(d,e,f,g){var x=0,w=B.n(y.I),v,u=this,t,s,r,q,p
var $async$aV=B.o(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bu("/api/admin/roles",D.c.P(B.p(["name",f,"description",e,"permissions",g],y.N,y.z),null),d),$async$aV)
case 3:p=i
if(p==null){v=C.cr
x=1
break}t=null
try{t=y.P.a(D.c.q(p,null))}catch(o){v=C.ct
x=1
break}q=B.au(J.w(t,"ok"))
if(q!==!0){q=B.r(J.w(t,"error"))
v=new A.d7(q==null?"Role creation failed":q)
x=1
break}try{s=A.zQ(y.P.a(J.w(t,"role")))
v=new A.iq(s)
x=1
break}catch(o){v=C.cs
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$aV,w)},
e7(d,e,f){return this.tc(d,y.a.a(e),f)},
tc(d,e,f){var x=0,w=B.n(y.c),v,u=this,t,s,r,q
var $async$e7=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:x=3
return B.j(u.bu("/api/admin/roles/"+f,D.c.P(B.p(["permissions",e],y.N,y.z),null),d),$async$e7)
case 3:q=h
if(q==null){v=C.cx
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cw
x=1
break}r=B.au(J.w(t,"ok"))
if(r!==!0){r=B.r(J.w(t,"error"))
v=new A.dF(r==null?"Role update failed":r)
x=1
break}v=C.cU
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$e7,w)},
aZ(d,e){var x=0,w=B.n(y.f),v,u=this,t,s,r,q
var $async$aZ=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.j(u.eo("/api/admin/roles/"+e,d),$async$aZ)
case 3:q=g
if(q==null){v=C.cu
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.cv
x=1
break}r=B.au(J.w(t,"ok"))
if(r!==!0){r=B.r(J.w(t,"error"))
v=new A.dE(r==null?"Role deletion failed":r)
x=1
break}v=C.cT
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aZ,w)},
cT(d){var x=0,w=B.n(y.T),v,u,t,s
var $async$cT=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=new B.N($.Q,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("GET",d)
s.onload=B.X(new A.nC(t,s))
s.onerror=B.X(new A.nD(t))
s.send()
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$cT,w)},
bu(d,e,f){var x=0,w=B.n(y.T),v,u,t,s
var $async$bu=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=new B.N($.Q,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("POST",d)
s.setRequestHeader("Content-Type","application/json")
s.setRequestHeader("X-CSRF-Token",f)
s.onload=B.X(new A.nE(t,s))
s.onerror=B.X(new A.nF(t))
s.send(e)
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$bu,w)},
eo(d,e){var x=0,w=B.n(y.T),v,u,t,s
var $async$eo=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:u=new B.N($.Q,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("DELETE",d)
s.setRequestHeader("Content-Type","application/json")
s.setRequestHeader("X-CSRF-Token",e)
s.onload=B.X(new A.nA(t,s))
s.onerror=B.X(new A.nB(t))
s.send("{}")
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$eo,w)}}
var z=a.updateTypes(["ap(@)","az(@)","bS(@)"])
A.nJ.prototype={
$1(d){return B.q(d)},
$S:68}
A.nI.prototype={
$1(d){var x,w,v,u,t,s,r
y.P.a(d)
x=B.r(d.j(0,"user_id"))
if(x==null)x=""
w=B.r(d.j(0,"first_name"))
if(w==null)w=""
v=B.r(d.j(0,"last_name"))
if(v==null)v=""
u=B.r(d.j(0,"email"))
if(u==null)u=""
t=B.r(d.j(0,"role"))
t=E.zC(t==null?"member":t)
s=B.r(d.j(0,"status"))
s=A.GB(s==null?"active":s)
r=B.r(d.j(0,"last_login_at"))
return new A.ap(x,w,v,u,t,s,r==null?"":r)},
$S:z+0}
A.nG.prototype={
$1(d){return A.zQ(y.P.a(d))},
$S:z+1}
A.nH.prototype={
$1(d){var x,w,v
y.P.a(d)
x=B.r(d.j(0,"permission_id"))
if(x==null)x=""
w=B.r(d.j(0,"name"))
if(w==null)w=""
v=B.r(d.j(0,"description"))
return new A.bS(x,w,v==null?"":v)},
$S:z+2}
A.nC.prototype={
$1(d){return this.a.A(B.q(this.b.responseText))},
$S:4}
A.nD.prototype={
$1(d){return this.a.A(null)},
$S:4}
A.nE.prototype={
$1(d){return this.a.A(B.q(this.b.responseText))},
$S:4}
A.nF.prototype={
$1(d){return this.a.A(null)},
$S:4}
A.nA.prototype={
$1(d){return this.a.A(B.q(this.b.responseText))},
$S:4}
A.nB.prototype={
$1(d){return this.a.A(null)},
$S:4};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ly,B.ao)
w(B.J,[A.ap,A.az,A.bS,A.f4,A.f0,A.f2,A.eZ,A.eV,A.eY,A.eW,A.lx])
w(B.Z,[A.nJ,A.nI,A.nG,A.nH,A.nC,A.nD,A.nE,A.nF,A.nA,A.nB])
w(A.f4,[A.ix,A.dJ])
w(A.f0,[A.iv,A.dH])
w(A.f2,[A.iw,A.dI])
w(A.eZ,[A.iu,A.dG])
w(A.eV,[A.iq,A.d7])
w(A.eY,[A.is,A.dF])
w(A.eW,[A.ir,A.dE])})()
B.W(b.typeUniverse,JSON.parse('{"ix":{"f4":[]},"dJ":{"f4":[]},"iv":{"f0":[]},"dH":{"f0":[]},"iw":{"f2":[]},"dI":{"f2":[]},"iu":{"eZ":[]},"dG":{"eZ":[]},"iq":{"eV":[]},"d7":{"eV":[]},"is":{"eY":[]},"dF":{"eY":[]},"ir":{"eW":[]},"dE":{"eW":[]}}'))
var y=(function rtii(){var x=B.h
return{Q:x("bS"),b:x("az"),I:x("eV"),f:x("eW"),c:x("eY"),k:x("eZ"),i:x("ap"),e:x("f0"),X:x("f2"),F:x("f4"),a:x("I<d>"),j:x("I<@>"),P:x("z<d,@>"),N:x("d"),C:x("a3<d?>"),s:x("N<d?>"),z:x("@"),g:x("I<@>?"),T:x("d?")}})();(function constants(){C.cr=new A.d7("Network error")
C.cs=new A.d7("Failed to parse new role")
C.ct=new A.d7("Unexpected server response")
C.cu=new A.dE("Network error")
C.cv=new A.dE("Unexpected server response")
C.cw=new A.dF("Unexpected server response")
C.cx=new A.dF("Network error")
C.cy=new A.dG("Network error")
C.cz=new A.dG("Failed to parse roles data")
C.cA=new A.dG("Unexpected server response")
C.cD=new A.dH("Network error")
C.cE=new A.dH("Unexpected server response")
C.cF=new A.dI("Unexpected server response")
C.cG=new A.dI("Network error")
C.a9=new A.ly(0,"active")
C.aa=new A.ly(1,"inactive")
C.cH=new A.dJ("Unexpected server response")
C.cI=new A.dJ("Network error")
C.cJ=new A.dJ("Failed to parse user data")
C.cT=new A.ir()
C.cU=new A.is()
C.cV=new A.iv()
C.cW=new A.iw()})()};
(a=>{a["lvq7ez6oMAyyhO0V9HaJG7mnAC0="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_5.part.js.map
