((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,F,H,I,K,D,P,Q,B={hh:function hh(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},em:function em(d,e){this.a=d
this.b=e},aZ:function aZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},oT:function oT(d){this.a=d},
BX(){return new B.cC(null)},
cC:function cC(d){this.a=d},
kI:function kI(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
wj:function wj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wo:function wo(d,e){this.a=d
this.b=e},
wn:function wn(d){this.a=d},
wp:function wp(d){this.a=d},
wk:function wk(d,e){this.a=d
this.b=e},
wl:function wl(d,e){this.a=d
this.b=e},
wm:function wm(d,e){this.a=d
this.b=e}},C,L,E,R,G,M,N,S,O,T
A=c[0]
F=c[2]
H=c[51]
I=c[76]
K=c[81]
D=c[40]
P=c[83]
Q=c[88]
B=a.updateHolder(c[20],B)
C=c[91]
L=c[58]
E=c[48]
R=c[62]
G=c[50]
M=c[56]
N=c[61]
S=c[43]
O=c[57]
T=c[60]
B.hh.prototype={
ao(){var x=0,w=A.n(y.v),v=this,u,t,s,r,q
var $async$ao=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(C.h9)
x=2
return A.j(v.x.qt(),$async$ao)
case 2:u=e
A:{t=u instanceof D.hj
if(t){s=u.a
r=u.b}else{s=null
r=null}if(t){v.i(new B.aZ(C.bY,s,r,"",null))
break A}t=u instanceof D.dc
q=t?u.a:null
if(t)v.i(new B.aZ(C.at,C.af,"","",q))}return A.l(null,w)}})
return A.m($async$ao,w)},
ad(){var x=0,w=A.n(y.v),v,u=this,t,s,r,q,p,o,n
var $async$ad=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.c
n=o.c
if(n.length===0){x=1
break}u.i(o.a2(C.as))
x=3
return A.j(u.x.cc(n),$async$ad)
case 3:t=e
A:{o=t instanceof D.hj
if(o){s=t.a
r=t.b}else{s=null
r=null}if(o){o=u.c
q=A.B(o.b,y.x)
F.b.a5(q,s)
u.i(o.c2(q,r,C.bY))
break A}o=t instanceof D.dc
p=o?t.a:null
if(o)u.i(u.c.W(p,C.at))}case 1:return A.l(v,w)}})
return A.m($async$ad,w)},
bH(d){this.i(this.c.c_(d))}}
B.em.prototype={
C(){return"SharedWithMeStatus."+this.b}}
B.aZ.prototype={
gc8(){var x,w,v,u=this.d
if(u.length===0)return this.b
x=this.b
w=A.L(x)
v=w.h("U<1>")
u=A.B(new A.U(x,w.h("G(1)").a(new B.oT(u.toLowerCase())),v),v.h("x.E"))
return u},
dm(d,e,f,g,h){var x,w,v,u,t=this
y.d.a(f)
x=h==null?t.a:h
w=f==null?t.b:f
v=g==null?t.c:g
u=e==null?t.d:e
return new B.aZ(x,w,v,u,d==null?t.e:d)},
a2(d){var x=null
return this.dm(x,x,x,x,d)},
W(d,e){return this.dm(d,null,null,null,e)},
c_(d){var x=null
return this.dm(x,d,x,x,x)},
c2(d,e,f){return this.dm(null,null,d,e,f)}}
B.cC.prototype={
B(){return new B.kI(A.a([],y.B))}}
B.kI.prototype={
F(){this.G()
var x=new B.hh(new D.ek(),T.m,C.h8)
this.d=x
x.ao()},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
o6(d,e){this.k(new B.wj(this,F.d.m(1000*Date.now()),d,e))},
od(d){this.k(new B.wo(this,A.r(d)))},
hf(d){if(d.d==="directory")A.f(A.f(b.G.window).location).href="/files?dir="+H.aw(2,d.b,I.j,!1)},
kB(d){var x
if(d.d!=="file")return
x=H.aw(2,d.b,I.j,!1)
A.Z(A.f(b.G.window).open("/api/files/download?file="+x,"_blank"))
this.o6("Downloading "+d.c+"\u2026",R.az)},
n(d){var x=this.d
x===$&&A.h()
return new O.S(x,new B.wp(this),null,y.b)},
o7(d){var x,w,v,u,t=this,s=null,r="div",q="hs-shared-with-me__load-more",p=d.a
if(p===C.bX||p===C.bW){p=y.F
return new A.b(r,s,"hs-shared-with-me__loading",s,s,s,A.a([new A.b("p",s,s,s,s,s,A.a([new A.c("Loading shared items\u2026",s)],p),s)],p),s)}if(p===C.at){p=d.e
if(p==null)p="Failed to load shared items"
x=y.F
p=A.a([new A.c(p,s)],x)
w=t.d
w===$&&A.h()
return new A.b(r,s,"hs-shared-with-me__error",s,s,s,A.a([new A.b("p",s,s,s,s,s,p,s),new M.C("Try again",N.e,w.gfc(),!1,!1,s)],x),s)}v=d.gc8()
if(v.length===0&&d.d.length===0){p=y.F
return new A.b(r,s,"hs-shared-with-me__empty",s,s,s,A.a([new A.b("span",s,"material-icons hs-shared-with-me__empty-icon",s,s,s,A.a([new A.c("folder_shared",s)],p),s),new A.b("p",s,"hs-shared-with-me__empty-text",s,s,s,A.a([new A.c("Nothing has been shared with you yet.",s)],p),s),new A.b("p",s,"hs-shared-with-me__empty-hint",s,s,s,A.a([new A.c("When colleagues share files or folders with you, they will appear here.",s)],p),s)],p),s)}x=y.F
w=A.a([E.c7(t.go8(),C.ed,v,"No shared items match your search",s,t.goa(),t.goe(),y.x)],x)
if(d.c.length!==0&&p!==C.as){u=t.d
u===$&&A.h()
w.push(new A.b(r,s,q,s,s,s,A.a([new M.C("Load more",N.q,u.gcg(),!1,!1,s)],x),s))}if(p===C.as)w.push(new A.b(r,s,q,s,s,s,A.a([new A.b("p",s,s,s,s,s,A.a([new A.c("Loading\u2026",s)],x),s)],x),s))
return new A.b(r,s,"hs-shared-with-me__table-wrapper",s,s,s,w,s)},
o9(d,e){var x,w,v,u,t,s=null
y.x.a(d)
A:{if("name"===e){x=d.d==="directory"
w=y.w
v=y.a
v=x?A.p(["click",new B.wk(this,d)],w,v):A.a8(w,v)
w=x?A.p(["title","Open "+d.c],w,w):A.a8(w,w)
u=x?"folder":"insert_drive_file"
t=y.F
u=A.a([new A.c(u,s)],t)
x=x?"hs-shared-with-me__name-text hs-shared-with-me__name-text--link":"hs-shared-with-me__name-text"
t=new A.b("div",s,"hs-shared-with-me__name-cell",s,w,v,A.a([new A.b("span",s,"material-icons hs-shared-with-me__type-icon",s,s,s,u,s),new A.b("span",s,x,s,s,s,A.a([new A.c(d.c,s)],t),s)],t),s)
x=t
break A}if("shared_by"===e){x=new A.c(d.e,s)
break A}if("permission"===e){x=new A.c(d.gfi(),s)
break A}if("shared_at"===e){x=d.r
w=G.c_(x)-1
if(!(w>=0&&w<12))return A.E(K.o,w)
x=new A.c(K.o[w]+" "+G.bZ(x)+", "+G.c0(x),s)
break A}x=new A.c("",s)
break A}return x},
of(d,e){var x
y.x.a(d)
A:{if("name"===e){x=d.c.toLowerCase()
break A}if("shared_at"===e){x=d.r.a
break A}x=null
break A}return x},
ob(d){var x,w,v,u,t="hs-shared-with-me__action-btn",s="material-icons",r=null
y.x.a(d)
x=y.F
w=A.a([],x)
v=d.d
if(v==="directory"){u=y.w
w.push(new A.b("button",r,t,r,A.p(["type","button","title","Open"],u,u),A.p(["click",new B.wl(this,d)],u,y.a),A.a([new A.b("span",r,s,r,r,r,A.a([new A.c("folder_open",r)],x),r)],x),r))}if(v==="file"){v=y.w
w.push(new A.b("button",r,t,r,A.p(["type","button","title","Download"],v,v),A.p(["click",new B.wm(this,d)],v,y.a),A.a([new A.b("span",r,s,r,r,r,A.a([new A.c("download",r)],x),r)],x),r))}return new A.b("div",r,"hs-shared-with-me__row-actions",r,r,r,w,r)}}
var z=a.updateTypes(["Y<~>()","~(d)","G(aI)","e(aI,d)","am<@>?(aI,d)","e(aI)","G(a1)","e(O,aZ)"])
B.oT.prototype={
$1(d){var x
y.x.a(d)
x=this.a
return F.a.a1(d.c.toLowerCase(),x)||F.a.a1(d.e.toLowerCase(),x)},
$S:z+2}
B.wj.prototype={
$0(){var x=this,w=x.a,v=A.B(w.e,y.s)
v.push(new E.a1(x.b,x.c,x.d))
w.e=v},
$S:0}
B.wo.prototype={
$0(){var x=this.a,w=x.e,v=A.L(w),u=v.h("U<1>")
w=A.B(new A.U(w,v.h("G(1)").a(new B.wn(this.b)),u),u.h("x.E"))
x.e=w},
$S:0}
B.wn.prototype={
$1(d){return y.s.a(d).a!==this.a},
$S:z+6}
B.wp.prototype={
$2(d,e){var x,w,v,u=null
y.o.a(e)
x=this.a
w=x.d
w===$&&A.h()
v=y.F
v=A.a([new A.b("div",u,"hs-shared-with-me__toolbar",u,u,u,A.a([S.m5(u,!0,w.gbG(),"Search by name or sender\u2026")],v),u),x.o7(e)],v)
w=x.e
if(w.length!==0)v.push(new E.aO(w,x.goc(),u))
return new A.b("div",u,"hs-shared-with-me",u,u,u,v,u)},
$S:z+7}
B.wk.prototype={
$1(d){A.f(d)
return this.a.hf(this.b)},
$S:1}
B.wl.prototype={
$1(d){A.f(d)
return this.a.hf(this.b)},
$S:1}
B.wm.prototype={
$1(d){A.f(d)
return this.a.kB(this.b)},
$S:1};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a._instance_2u
var u
x(u=B.hh.prototype,"gfc","ao",0)
x(u,"gcg","ad",0)
w(u,"gbG","bH",1)
w(u=B.kI.prototype,"goc","od",1)
v(u,"go8","o9",3)
v(u,"goe","of",4)
w(u,"goa","ob",5)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hh,O.ae)
x(B.em,A.ar)
x(B.aZ,A.I)
w(A.a0,[B.oT,B.wn,B.wk,B.wl,B.wm])
x(B.cC,L.y)
x(B.kI,L.u)
w(A.ab,[B.wj,B.wo])
x(B.wp,A.ai)})()
A.X(b.typeUniverse,JSON.parse('{"hh":{"ae":["aZ"],"a2":["aZ"],"aK":["aZ"],"a2.0":"aZ"},"cC":{"y":[],"e":[]},"kI":{"u":["cC"],"u.T":"cC"}}'))
var y=(function rtii(){var x=A.i
return{b:x("S<hh,aZ>"),F:x("v<e>"),B:x("v<a1>"),x:x("aI"),o:x("aZ"),w:x("d"),s:x("a1"),d:x("H<aI>?"),v:x("~"),a:x("~(F)")}})();(function constants(){var x=a.makeConstList
C.hM=new E.W("shared_by","Shared By",2,!1)
C.i6=new E.W("shared_at","Shared",2,!0)
C.ed=x([P.a2,C.hM,Q.c5,C.i6],A.i("v<W>"))
C.af=x([],A.i("v<aI>"))
C.bW=new B.em(0,"idle")
C.h8=new B.aZ(C.bW,C.af,"","",null)
C.bX=new B.em(1,"loading")
C.h9=new B.aZ(C.bX,C.af,"","",null)
C.bY=new B.em(2,"loaded")
C.as=new B.em(3,"loadingMore")
C.at=new B.em(4,"error")})()};
(a=>{a["g8sq88FtZu8RZjwLlbiu9ZP95qA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_170.part.js.map
