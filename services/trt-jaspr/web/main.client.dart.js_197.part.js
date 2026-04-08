((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,F,H,I,D,P,K,Q,B={hG:function hG(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},ez:function ez(d,e){this.a=d
this.b=e},b3:function b3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},pI:function pI(d){this.a=d},
Dk(){return new B.cL(null)},
cL:function cL(d){this.a=d},
lh:function lh(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
xn:function xn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xs:function xs(d,e){this.a=d
this.b=e},
xr:function xr(d){this.a=d},
xt:function xt(d){this.a=d},
xo:function xo(d,e){this.a=d
this.b=e},
xp:function xp(d,e){this.a=d
this.b=e},
xq:function xq(d,e){this.a=d
this.b=e}},C,L,E,R,G,M,N,S,O,T
A=c[0]
F=c[2]
H=c[55]
I=c[83]
D=c[45]
P=c[90]
K=c[88]
Q=c[98]
B=a.updateHolder(c[23],B)
C=c[101]
L=c[65]
E=c[53]
R=c[69]
G=c[60]
M=c[62]
N=c[68]
S=c[49]
O=c[64]
T=c[67]
B.hG.prototype={
aq(){var x=0,w=A.n(y.v),v=this,u,t,s,r,q
var $async$aq=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(C.hJ)
x=2
return A.j(v.x.rn(),$async$aq)
case 2:u=e
A:{t=u instanceof D.hI
if(t){s=u.a
r=u.b}else{s=null
r=null}if(t){v.i(new B.b3(C.c5,s,r,"",null))
break A}t=u instanceof D.dq
q=t?u.a:null
if(t)v.i(new B.b3(C.au,C.ag,"","",q))}return A.l(null,w)}})
return A.m($async$aq,w)},
ae(){var x=0,w=A.n(y.v),v,u=this,t,s,r,q,p,o,n
var $async$ae=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.c
n=o.c
if(n.length===0){x=1
break}u.i(o.Z(C.at))
x=3
return A.j(u.x.cl(n),$async$ae)
case 3:t=e
A:{o=t instanceof D.hI
if(o){s=t.a
r=t.b}else{s=null
r=null}if(o){o=u.c
q=A.A(o.b,y.x)
F.b.a4(q,s)
u.i(o.cb(q,r,C.c5))
break A}o=t instanceof D.dq
p=o?t.a:null
if(o)u.i(u.c.U(p,C.au))}case 1:return A.l(v,w)}})
return A.m($async$ae,w)},
bO(d){this.i(this.c.c8(d))}}
B.ez.prototype={
B(){return"SharedWithMeStatus."+this.b}}
B.b3.prototype={
gcg(){var x,w,v,u=this.d
if(u.length===0)return this.b
x=this.b
w=A.L(x)
v=w.h("T<1>")
u=A.A(new A.T(x,w.h("F(1)").a(new B.pI(u.toLowerCase())),v),v.h("y.E"))
return u},
dE(d,e,f,g,h){var x,w,v,u,t=this
y.d.a(f)
x=h==null?t.a:h
w=f==null?t.b:f
v=g==null?t.c:g
u=e==null?t.d:e
return new B.b3(x,w,v,u,d==null?t.e:d)},
Z(d){var x=null
return this.dE(x,x,x,x,d)},
U(d,e){return this.dE(d,null,null,null,e)},
c8(d){var x=null
return this.dE(x,d,x,x,x)},
cb(d,e,f){return this.dE(null,null,d,e,f)}}
B.cL.prototype={
C(){return new B.lh(A.a([],y.B))}}
B.lh.prototype={
F(){this.G()
var x=new B.hG(new D.ex(),T.k,C.hI)
this.d=x
x.aq()},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
oO(d,e){this.k(new B.xn(this,F.d.m(1000*Date.now()),d,e))},
oV(d){this.k(new B.xs(this,A.q(d)))},
hG(d){if(d.d==="directory")A.f(A.f(b.G.window).location).href="/files?dir="+H.aB(2,d.b,I.i,!1)},
l5(d){var x
if(d.d!=="file")return
x=H.aB(2,d.b,I.i,!1)
A.a0(A.f(b.G.window).open("/api/files/download?file="+x,"_blank"))
this.oO("Downloading "+d.c+"\u2026",R.aA)},
p(d){var x=this.d
x===$&&A.i()
return new O.P(x,new B.xt(this),null,y.b)},
oP(d){var x,w,v,u,t=this,s=null,r="div",q="hs-shared-with-me__load-more",p=d.a
if(p===C.c4||p===C.c3){p=y.F
return new A.b(r,s,"hs-shared-with-me__loading",s,s,s,A.a([new A.b("p",s,s,s,s,s,A.a([new A.c("Loading shared items\u2026",s)],p),s)],p),s)}if(p===C.au){p=d.e
if(p==null)p="Failed to load shared items"
x=y.F
p=A.a([new A.c(p,s)],x)
w=t.d
w===$&&A.i()
return new A.b(r,s,"hs-shared-with-me__error",s,s,s,A.a([new A.b("p",s,s,s,s,s,p,s),new M.D("Try again",N.e,w.gfA(),!1,!1,s)],x),s)}v=d.gcg()
if(v.length===0&&d.d.length===0){p=y.F
return new A.b(r,s,"hs-shared-with-me__empty",s,s,s,A.a([new A.b("span",s,"material-icons hs-shared-with-me__empty-icon",s,s,s,A.a([new A.c("folder_shared",s)],p),s),new A.b("p",s,"hs-shared-with-me__empty-text",s,s,s,A.a([new A.c("Nothing has been shared with you yet.",s)],p),s),new A.b("p",s,"hs-shared-with-me__empty-hint",s,s,s,A.a([new A.c("When colleagues share files or folders with you, they will appear here.",s)],p),s)],p),s)}x=y.F
w=A.a([E.cd(t.goQ(),C.et,v,"No shared items match your search",s,t.goS(),t.goW(),y.x)],x)
if(d.c.length!==0&&p!==C.at){u=t.d
u===$&&A.i()
w.push(new A.b(r,s,q,s,s,s,A.a([new M.D("Load more",N.q,u.gcp(),!1,!1,s)],x),s))}if(p===C.at)w.push(new A.b(r,s,q,s,s,s,A.a([new A.b("p",s,s,s,s,s,A.a([new A.c("Loading\u2026",s)],x),s)],x),s))
return new A.b(r,s,"hs-shared-with-me__table-wrapper",s,s,s,w,s)},
oR(d,e){var x,w,v,u,t,s=null
y.x.a(d)
A:{if("name"===e){x=d.d==="directory"
w=y.w
v=y.a
v=x?A.p(["click",new B.xo(this,d)],w,v):A.a5(w,v)
w=x?A.p(["title","Open "+d.c],w,w):A.a5(w,w)
u=x?"folder":"insert_drive_file"
t=y.F
u=A.a([new A.c(u,s)],t)
x=x?"hs-shared-with-me__name-text hs-shared-with-me__name-text--link":"hs-shared-with-me__name-text"
t=new A.b("div",s,"hs-shared-with-me__name-cell",s,w,v,A.a([new A.b("span",s,"material-icons hs-shared-with-me__type-icon",s,s,s,u,s),new A.b("span",s,x,s,s,s,A.a([new A.c(d.c,s)],t),s)],t),s)
x=t
break A}if("shared_by"===e){x=new A.c(d.e,s)
break A}if("permission"===e){x=new A.c(d.gfG(),s)
break A}if("shared_at"===e){x=d.r
w=G.bZ(x)-1
if(!(w>=0&&w<12))return A.B(K.o,w)
x=new A.c(K.o[w]+" "+G.bY(x)+", "+G.c_(x),s)
break A}x=new A.c("",s)
break A}return x},
oX(d,e){var x
y.x.a(d)
A:{if("name"===e){x=d.c.toLowerCase()
break A}if("shared_at"===e){x=d.r.a
break A}x=null
break A}return x},
oT(d){var x,w,v,u,t="hs-shared-with-me__action-btn",s="material-icons",r=null
y.x.a(d)
x=y.F
w=A.a([],x)
v=d.d
if(v==="directory"){u=y.w
w.push(new A.b("button",r,t,r,A.p(["type","button","title","Open"],u,u),A.p(["click",new B.xp(this,d)],u,y.a),A.a([new A.b("span",r,s,r,r,r,A.a([new A.c("folder_open",r)],x),r)],x),r))}if(v==="file"){v=y.w
w.push(new A.b("button",r,t,r,A.p(["type","button","title","Download"],v,v),A.p(["click",new B.xq(this,d)],v,y.a),A.a([new A.b("span",r,s,r,r,r,A.a([new A.c("download",r)],x),r)],x),r))}return new A.b("div",r,"hs-shared-with-me__row-actions",r,r,r,w,r)}}
var z=a.updateTypes(["Y<~>()","~(d)","F(aL)","e(aL,d)","am<@>?(aL,d)","e(aL)","F(a2)","e(O,b3)"])
B.pI.prototype={
$1(d){var x
y.x.a(d)
x=this.a
return F.a.W(d.c.toLowerCase(),x)||F.a.W(d.e.toLowerCase(),x)},
$S:z+2}
B.xn.prototype={
$0(){var x=this,w=x.a,v=A.A(w.e,y.s)
v.push(new E.a2(x.b,x.c,x.d))
w.e=v},
$S:0}
B.xs.prototype={
$0(){var x=this.a,w=x.e,v=A.L(w),u=v.h("T<1>")
w=A.A(new A.T(w,v.h("F(1)").a(new B.xr(this.b)),u),u.h("y.E"))
x.e=w},
$S:0}
B.xr.prototype={
$1(d){return y.s.a(d).a!==this.a},
$S:z+6}
B.xt.prototype={
$2(d,e){var x,w,v,u=null
y.o.a(e)
x=this.a
w=x.d
w===$&&A.i()
v=y.F
v=A.a([new A.b("div",u,"hs-shared-with-me__toolbar",u,u,u,A.a([S.mD(u,!0,w.gbN(),"Search by name or sender\u2026")],v),u),x.oP(e)],v)
w=x.e
if(w.length!==0)v.push(new E.aS(w,x.goU(),u))
return new A.b("div",u,"hs-shared-with-me",u,u,u,v,u)},
$S:z+7}
B.xo.prototype={
$1(d){A.f(d)
return this.a.hG(this.b)},
$S:1}
B.xp.prototype={
$1(d){A.f(d)
return this.a.hG(this.b)},
$S:1}
B.xq.prototype={
$1(d){A.f(d)
return this.a.l5(this.b)},
$S:1};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a._instance_2u
var u
x(u=B.hG.prototype,"gfA","aq",0)
x(u,"gcp","ae",0)
w(u,"gbN","bO",1)
w(u=B.lh.prototype,"goU","oV",1)
v(u,"goQ","oR",3)
v(u,"goW","oX",4)
w(u,"goS","oT",5)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hG,O.a7)
x(B.ez,A.ao)
x(B.b3,A.J)
w(A.Z,[B.pI,B.xr,B.xo,B.xp,B.xq])
x(B.cL,L.x)
x(B.lh,L.u)
w(A.aa,[B.xn,B.xs])
x(B.xt,A.ah)})()
A.W(b.typeUniverse,JSON.parse('{"hG":{"a7":["b3"],"a1":["b3"],"aG":["b3"],"a1.0":"b3"},"cL":{"x":[],"e":[]},"lh":{"u":["cL"],"u.T":"cL"}}'))
var y=(function rtii(){var x=A.h
return{b:x("P<hG,b3>"),F:x("v<e>"),B:x("v<a2>"),x:x("aL"),o:x("b3"),w:x("d"),s:x("a2"),d:x("I<aL>?"),v:x("~"),a:x("~(H)")}})();(function constants(){var x=a.makeConstList
C.im=new E.a_("shared_by","Shared By",2,!1)
C.iI=new E.a_("shared_at","Shared",2,!0)
C.et=x([P.a2,C.im,Q.cd,C.iI],A.h("v<a_>"))
C.ag=x([],A.h("v<aL>"))
C.c3=new B.ez(0,"idle")
C.hI=new B.b3(C.c3,C.ag,"","",null)
C.c4=new B.ez(1,"loading")
C.hJ=new B.b3(C.c4,C.ag,"","",null)
C.c5=new B.ez(2,"loaded")
C.at=new B.ez(3,"loadingMore")
C.au=new B.ez(4,"error")})()};
(a=>{a["IAxvzLJZzJmQdxfNCJ3/UmYYzoc="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_197.part.js.map
