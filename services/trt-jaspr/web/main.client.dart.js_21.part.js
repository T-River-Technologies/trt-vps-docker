((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
DO(d){switch(d.a){case 0:return A.a4(59500)
case 1:return A.a4(57344)
case 2:return A.a4(57346)
case 3:return A.a4(59534)}},
Av(d){switch(d.a){case 0:return"success"
case 1:return"error"
case 2:return"warning"
case 3:return"info"}},
kn:function kn(d,e){this.a=d
this.b=e},
a2:function a2(d,e,f){this.a=d
this.b=e
this.c=f},
aS:function aS(d,e,f){this.c=d
this.d=e
this.a=f},
qG:function qG(d,e){this.a=d
this.b=e},
cd(d,e,f,g,h,i,j,k){return new B.eF(e,f,d,i,j,h,g,null,k.h("eF<0>"))},
DI(d,e){if(e>0)return"width: "+C.f.a3(d.d/e*100,1)+"%; min-width: 100px;"
return"min-width: 100px;"},
At(d){var x
switch(d.a){case 0:x="tr-table__align--left"
break
case 1:x="tr-table__align--center"
break
case 2:x="tr-table__align--right"
break
default:x=null}return x},
eF:function eF(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.as=j
_.a=k
_.$ti=l},
i1:function i1(d,e){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null
_.$ti=e},
qz:function qz(d){this.a=d},
qy:function qy(d,e){this.a=d
this.b=e},
qw:function qw(){},
qx:function qx(){},
qv:function qv(d,e){this.a=d
this.b=e},
qu:function qu(d,e){this.a=d
this.b=e},
qt:function qt(d,e){this.a=d
this.b=e},
qA:function qA(d,e){this.a=d
this.b=e},
a_:function a_(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.r=g}},D,F
J=c[1]
A=c[0]
C=c[2]
E=c[65]
B=a.updateHolder(c[53],B)
D=c[69]
F=c[63]
B.kn.prototype={
B(){return"TRToastVariant."+this.b}}
B.a2.prototype={}
B.aS.prototype={
p(d){var x,w,v,u=null,t=y.w
t=A.p(["aria-live","polite","aria-atomic","false"],t,t)
x=this.c
w=A.L(x)
v=w.h("G<1,e>")
x=A.A(new A.G(x,w.h("e(1)").a(this.gk_()),v),v.h("M.E"))
return new A.b("div",u,"tr-toast-container",u,t,u,x,u)},
k0(d){var x,w,v,u=null
y.s.a(d)
x=d.c
w=y.w
v=y.F
return new A.b("div",u,"tr-toast tr-toast--"+B.Av(x),u,A.p(["role","status"],w,w),u,A.a([new A.b("span",u,"tr-toast__icon tr-toast__icon--"+B.Av(x),u,A.p(["aria-hidden","true"],w,w),u,A.a([new A.c(B.DO(x),u)],v),u),new A.b("p",u,"tr-toast__message",u,u,u,A.a([new A.c(d.b,u)],v),u),new A.b("button",u,"tr-toast__close",u,A.p(["type","button","aria-label","Close notification"],w,w),A.p(["click",new B.qG(this,d.a)],w,y.a),A.a([new A.c(A.a4(58829),u)],v),u)],v),u)}}
B.eF.prototype={
C(){var x=this.$ti
return new B.i1(A.e6(x.c),x.h("i1<1>"))}}
B.i1.prototype={
gp5(){var x,w=this
if(w.e==null||w.$ti.h("am<@>?(1,d)?").a(w.a.y)==null)return w.a.d
x=A.z3(w.a.d,!0,w.$ti.c)
C.b.cO(x,new B.qz(w))
return x},
nt(d){this.k(new B.qy(this,d))},
p(d){var x,w=null,v=this.a
if(v.d.length===0){x=y.F
return new A.b("div",w,"tr-table__state",w,w,w,y.z.a(A.a([new A.b("span",w,"tr-table__state-text",w,w,w,A.a([new A.c(v.as,w)],x),w)],x)),w)}return this.py()},
py(){var x,w,v=this,u=null,t=v.a.c,s=A.L(t),r=y.F
s=A.a([v.jT(new A.T(t,s.h("F(1)").a(new B.qw()),s.h("T<1>")).dM(0,0,new B.qx(),y.e))],r)
t=v.gp5()
x=A.L(t)
w=x.h("G<1,e>")
t=A.A(new A.G(t,x.h("e(1)").a(v.gjC()),w),w.h("M.E"))
return new A.b("div",u,"tr-table-wrapper",u,u,u,A.a([new A.b("table",u,"tr-table",u,u,u,A.a([new A.b("thead",u,u,u,u,u,s,u),new A.b("tbody",u,u,u,u,u,t,u)],r),u)],r),u)},
jT(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=y.F,j=A.a([],k),i=m.a
for(i=i.c,x=i.length,w=y.w,v=y.a,u=y.x,t=0;t<x;++t){s=i[t]
r=m.e===s.a
q=A.a([new A.c(s.b,l)],k)
p=s.r
if(p){o=A.a(["tr-table__sort-icon"],u)
if(r)o.push("tr-table__sort-icon--active")
o=C.b.a_(o," ")
if(r)n=m.f?"\u2191":"\u2193"
else n="\u2195"
C.b.n(q,new A.b("span",l,o,l,l,l,A.a([new A.c(n,l)],k),l))}o=A.a(["tr-table__th"],u)
if(p)o.push("tr-table__th--sortable")
o.push(B.At(D.cf))
o=C.b.a_(o," ")
n=A.p(["style",B.DI(s,d)],w,w)
C.b.n(j,new A.b("th",l,o,l,n,p?A.p(["click",new B.qv(m,s)],w,v):A.a5(w,v),q,l))}m.$ti.h("e(1)?").a(m.a.x)
C.b.n(j,new A.b("th",l,"tr-table__th",l,l,l,A.a([new A.c("Actions",l)],k),l))
return new A.b("tr",l,l,l,l,l,j,l)},
jD(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.$ti
m.c.a(d)
o.d.W(0,d)
o.a.toString
x=y.F
w=A.a([],x)
v=o.a
for(v=v.c,u=v.length,t=y.x,s=m.h("e(1,d)"),r=0;r<u;++r){q=v[r]
C.b.n(w,new A.b("td",n,C.b.a_(A.a(["tr-table__td",B.At(D.cf)],t)," "),n,n,n,A.a([s.a(o.a.e).$2(d,q.a)],x),n))}C.b.n(w,new A.b("td",n,"tr-table__td",n,n,n,A.a([m.h("e(1)?").a(o.a.x).$1(d)],x),n))
p=A.a5(y.w,y.a)
m=m.h("~(1)?")
if(m.a(o.a.z)!=null)p.l(0,"click",new B.qu(o,d))
m=m.a(o.a.z)
t=A.a(["tr-table__row"],t)
if(m!=null)t.push("tr-table__row--clickable")
return new A.b("tr",n,C.b.a_(t," "),n,n,p,w,n)}}
B.qt.prototype={
B(){return"TRTableSortType."+this.b}}
B.qA.prototype={
B(){return"TRTextAlignment."+this.b}}
B.a_.prototype={}
var z=a.updateTypes(["e(a2)","e(J?)","F(a_)","t(t,a_)"])
B.qG.prototype={
$1(d){A.f(d)
return this.a.d.$1(this.b)},
$S:1}
B.qz.prototype={
$2(d,e){var x,w,v,u,t=this.a,s=t.$ti,r=s.c
r.a(d)
r.a(e)
s=s.h("am<@>?(1,d)?")
r=s.a(t.a.y)
r.toString
x=t.e
x.toString
w=r.$2(d,x)
s=s.a(t.a.y)
s.toString
x=t.e
x.toString
v=s.$2(e,x)
s=w==null
if(s&&v==null)return 0
if(s)return 1
if(v==null)return-1
u=J.zN(w,v)
return t.f?u:-u},
$S(){return this.a.$ti.h("t(1,1)")}}
B.qy.prototype={
$0(){var x=this.a,w=this.b
if(x.e===w)x.f=!x.f
else{x.e=w
x.f=!0}},
$S:0}
B.qw.prototype={
$1(d){y.y.a(d)
return!0},
$S:z+2}
B.qx.prototype={
$2(d,e){return A.E(d)+y.y.a(e).d},
$S:z+3}
B.qv.prototype={
$1(d){A.f(d)
return this.a.nt(this.b.a)},
$S:1}
B.qu.prototype={
$1(d){var x
A.f(d)
x=this.a
return x.$ti.h("~(1)?").a(x.a.z).$1(this.b)},
$S:1};(function installTearOffs(){var x=a._instance_1u
x(B.aS.prototype,"gk_","k0",0)
x(B.i1.prototype,"gjC","jD",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ao,[B.kn,B.qt,B.qA])
x(A.J,[B.a2,B.a_])
w(B.aS,F.a8)
x(A.Z,[B.qG,B.qw,B.qv,B.qu])
w(B.eF,E.x)
w(B.i1,E.u)
x(A.ah,[B.qz,B.qx])
w(B.qy,A.aa)})()
A.W(b.typeUniverse,JSON.parse('{"aS":{"a8":[],"e":[]},"eF":{"x":[],"e":[]},"i1":{"u":["eF<1>"],"u.T":"eF<1>"}}'))
var y={F:A.h("v<e>"),x:A.h("v<d>"),z:A.h("I<e>"),w:A.h("d"),y:A.h("a_"),s:A.h("a2"),e:A.h("t"),a:A.h("~(H)")};(function constants(){D.e5=new A.bz(4e6)
D.cf=new B.qA(0,"left")
D.jk=new B.qt(0,"string")
D.j=new B.kn(0,"success")
D.h=new B.kn(1,"error")
D.aA=new B.kn(3,"info")})()};
(a=>{a["IJUQXj43muekO7AeB8IxXpnflmw="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_21.part.js.map
