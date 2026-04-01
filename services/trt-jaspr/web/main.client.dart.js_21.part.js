((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
Co(d){switch(d.a){case 0:return A.a7(59500)
case 1:return A.a7(57344)
case 2:return A.a7(57346)
case 3:return A.a7(59534)}},
zj(d){switch(d.a){case 0:return"success"
case 1:return"error"
case 2:return"warning"
case 3:return"info"}},
jQ:function jQ(d,e){this.a=d
this.b=e},
a1:function a1(d,e,f){this.a=d
this.b=e
this.c=f},
aO:function aO(d,e,f){this.c=d
this.d=e
this.a=f},
pQ:function pQ(d,e){this.a=d
this.b=e},
c7(d,e,f,g,h,i,j,k){return new B.es(e,f,d,i,j,h,g,null,k.h("es<0>"))},
Ci(d,e){if(e>0)return"width: "+C.f.a0(d.d/e*100,1)+"%; min-width: 100px;"
return"min-width: 100px;"},
zh(d){var x
switch(d.a){case 0:x="tr-table__align--left"
break
case 1:x="tr-table__align--center"
break
case 2:x="tr-table__align--right"
break
default:x=null}return x},
es:function es(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.as=j
_.a=k
_.$ti=l},
hD:function hD(d,e){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null
_.$ti=e},
pJ:function pJ(d){this.a=d},
pI:function pI(d,e){this.a=d
this.b=e},
pG:function pG(){},
pH:function pH(){},
pF:function pF(d,e){this.a=d
this.b=e},
pE:function pE(d,e){this.a=d
this.b=e},
pD:function pD(d,e){this.a=d
this.b=e},
pK:function pK(d,e){this.a=d
this.b=e},
W:function W(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.r=g}},D,F
J=c[1]
A=c[0]
C=c[2]
E=c[58]
B=a.updateHolder(c[48],B)
D=c[62]
F=c[57]
B.jQ.prototype={
C(){return"TRToastVariant."+this.b}}
B.a1.prototype={}
B.aO.prototype={
n(d){var x,w,v,u=null,t=y.w
t=A.p(["aria-live","polite","aria-atomic","false"],t,t)
x=this.c
w=A.L(x)
v=w.h("J<1,e>")
x=A.B(new A.J(x,w.h("e(1)").a(this.gjv()),v),v.h("N.E"))
return new A.b("div",u,"tr-toast-container",u,t,u,x,u)},
jw(d){var x,w,v,u=null
y.s.a(d)
x=d.c
w=y.w
v=y.F
return new A.b("div",u,"tr-toast tr-toast--"+B.zj(x),u,A.p(["role","status"],w,w),u,A.a([new A.b("span",u,"tr-toast__icon tr-toast__icon--"+B.zj(x),u,A.p(["aria-hidden","true"],w,w),u,A.a([new A.c(B.Co(x),u)],v),u),new A.b("p",u,"tr-toast__message",u,u,u,A.a([new A.c(d.b,u)],v),u),new A.b("button",u,"tr-toast__close",u,A.p(["type","button","aria-label","Close notification"],w,w),A.p(["click",new B.pQ(this,d.a)],w,y.a),A.a([new A.c(A.a7(58829),u)],v),u)],v),u)}}
B.es.prototype={
B(){var x=this.$ti
return new B.hD(A.dV(x.c),x.h("hD<1>"))}}
B.hD.prototype={
gol(){var x,w=this
if(w.e==null||w.$ti.h("am<@>?(1,d)?").a(w.a.y)==null)return w.a.d
x=A.xS(w.a.d,!0,w.$ti.c)
C.b.cA(x,new B.pJ(w))
return x},
mR(d){this.k(new B.pI(this,d))},
n(d){var x,w=null,v=this.a
if(v.d.length===0){x=y.F
return new A.b("div",w,"tr-table__state",w,w,w,y.z.a(A.a([new A.b("span",w,"tr-table__state-text",w,w,w,A.a([new A.c(v.as,w)],x),w)],x)),w)}return this.oP()},
oP(){var x,w,v=this,u=null,t=v.a.c,s=A.L(t),r=y.F
s=A.a([v.jo(new A.U(t,s.h("G(1)").a(new B.pG()),s.h("U<1>")).hL(0,0,new B.pH(),y.e))],r)
t=v.gol()
x=A.L(t)
w=x.h("J<1,e>")
t=A.B(new A.J(t,x.h("e(1)").a(v.gj7()),w),w.h("N.E"))
return new A.b("div",u,"tr-table-wrapper",u,u,u,A.a([new A.b("table",u,"tr-table",u,u,u,A.a([new A.b("thead",u,u,u,u,u,s,u),new A.b("tbody",u,u,u,u,u,t,u)],r),u)],r),u)},
jo(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=y.F,j=A.a([],k),i=m.a
for(i=i.c,x=i.length,w=y.w,v=y.a,u=y.x,t=0;t<x;++t){s=i[t]
r=m.e===s.a
q=A.a([new A.c(s.b,l)],k)
p=s.r
if(p){o=A.a(["tr-table__sort-icon"],u)
if(r)o.push("tr-table__sort-icon--active")
o=C.b.V(o," ")
if(r)n=m.f?"\u2191":"\u2193"
else n="\u2195"
C.b.p(q,new A.b("span",l,o,l,l,l,A.a([new A.c(n,l)],k),l))}o=A.a(["tr-table__th"],u)
if(p)o.push("tr-table__th--sortable")
o.push(B.zh(D.c7))
o=C.b.V(o," ")
n=A.p(["style",B.Ci(s,d)],w,w)
C.b.p(j,new A.b("th",l,o,l,n,p?A.p(["click",new B.pF(m,s)],w,v):A.a8(w,v),q,l))}m.$ti.h("e(1)?").a(m.a.x)
C.b.p(j,new A.b("th",l,"tr-table__th",l,l,l,A.a([new A.c("Actions",l)],k),l))
return new A.b("tr",l,l,l,l,l,j,l)},
j8(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.$ti
m.c.a(d)
o.d.a1(0,d)
o.a.toString
x=y.F
w=A.a([],x)
v=o.a
for(v=v.c,u=v.length,t=y.x,s=m.h("e(1,d)"),r=0;r<u;++r){q=v[r]
C.b.p(w,new A.b("td",n,C.b.V(A.a(["tr-table__td",B.zh(D.c7)],t)," "),n,n,n,A.a([s.a(o.a.e).$2(d,q.a)],x),n))}C.b.p(w,new A.b("td",n,"tr-table__td",n,n,n,A.a([m.h("e(1)?").a(o.a.x).$1(d)],x),n))
p=A.a8(y.w,y.a)
m=m.h("~(1)?")
if(m.a(o.a.z)!=null)p.l(0,"click",new B.pE(o,d))
m=m.a(o.a.z)
t=A.a(["tr-table__row"],t)
if(m!=null)t.push("tr-table__row--clickable")
return new A.b("tr",n,C.b.V(t," "),n,n,p,w,n)}}
B.pD.prototype={
C(){return"TRTableSortType."+this.b}}
B.pK.prototype={
C(){return"TRTextAlignment."+this.b}}
B.W.prototype={}
var z=a.updateTypes(["e(a1)","e(I?)","G(W)","t(t,W)"])
B.pQ.prototype={
$1(d){A.f(d)
return this.a.d.$1(this.b)},
$S:1}
B.pJ.prototype={
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
u=J.yA(w,v)
return t.f?u:-u},
$S(){return this.a.$ti.h("t(1,1)")}}
B.pI.prototype={
$0(){var x=this.a,w=this.b
if(x.e===w)x.f=!x.f
else{x.e=w
x.f=!0}},
$S:0}
B.pG.prototype={
$1(d){y.y.a(d)
return!0},
$S:z+2}
B.pH.prototype={
$2(d,e){return A.A(d)+y.y.a(e).d},
$S:z+3}
B.pF.prototype={
$1(d){A.f(d)
return this.a.mR(this.b.a)},
$S:1}
B.pE.prototype={
$1(d){var x
A.f(d)
x=this.a
return x.$ti.h("~(1)?").a(x.a.z).$1(this.b)},
$S:1};(function installTearOffs(){var x=a._instance_1u
x(B.aO.prototype,"gjv","jw",0)
x(B.hD.prototype,"gj7","j8",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ar,[B.jQ,B.pD,B.pK])
x(A.I,[B.a1,B.W])
w(B.aO,F.a5)
x(A.a0,[B.pQ,B.pG,B.pF,B.pE])
w(B.es,E.y)
w(B.hD,E.u)
x(A.ai,[B.pJ,B.pH])
w(B.pI,A.ab)})()
A.X(b.typeUniverse,JSON.parse('{"aO":{"a5":[],"e":[]},"es":{"y":[],"e":[]},"hD":{"u":["es<1>"],"u.T":"es<1>"}}'))
var y={F:A.i("v<e>"),x:A.i("v<d>"),z:A.i("H<e>"),w:A.i("d"),y:A.i("W"),s:A.i("a1"),e:A.i("t"),a:A.i("~(F)")};(function constants(){D.dQ=new A.bN(4e6)
D.c7=new B.pK(0,"left")
D.iG=new B.pD(0,"string")
D.i=new B.jQ(0,"success")
D.h=new B.jQ(1,"error")
D.az=new B.jQ(3,"info")})()};
(a=>{a["u+Hr6F6PHShidZc/tj+ATUlVIHw="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_21.part.js.map
