((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,C,E,B={
an(d,e,f,g,h,i,j,k,l){return new B.hE(i,e,l,h,j,f,k,g,d,null)},
hE:function hE(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.a=m},
jP:function jP(){var _=this
_.d=!1
_.e=null
_.f=""
_.c=_.a=null},
pM:function pM(d){this.a=d},
pN:function pN(d){this.a=d},
pL:function pL(d){this.a=d}}
A=c[0]
D=c[2]
C=c[58]
E=c[55]
B=a.updateHolder(c[52],B)
B.hE.prototype={
B(){return new B.jP()}}
B.jP.prototype={
F(){this.G()
var x=this.a.x
this.f=x==null?"":x},
oR(d){var x,w=this,v=A.Z(A.f(d).target)
if(v==null)v=A.f(v)
w.f=A.r(v.value)
w.k(new B.pM(w))
x=w.a.w
if(x!=null)x.$1(w.f)},
or(){this.k(new B.pN(this))},
oY(d){var x,w=this.a.e
if(w==null)return null
x=w.aj(d)
return x.a?null:x.b},
n(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.e!=null
o.a.toString
x=A.a(["tr-field"],y.h)
x=D.b.V(x," ")
w=y.p
v=A.a([],w)
u=o.a.c
if(u!=null)v.push(new A.b("label",n,"tr-field__label",n,n,n,A.a([new A.c(u,n)],w),n))
u=E.y0(m,o.a.z)
t=A.a([],w)
s=o.a
r=s.f&&!o.d?"password":"text"
s=y.g
q=A.p(["type",r],s,s)
if(o.a.z)q.l(0,"disabled","")
p=o.a.y
if(p!=null)q.l(0,"placeholder",p)
p=o.a.x
if(p!=null)q.l(0,"value",p)
if(o.a.f)q.l(0,"autocomplete","current-password")
if(o.a.Q)q.l(0,"autofocus","")
t.push(new A.b("input",n,"tr-field__input",n,q,A.p(["input",o.goQ()],s,y.a),A.a([],w),n))
if(o.a.f)t.push(o.k6())
v.push(new A.b("div",n,u,n,n,n,t,n))
if(m){u=o.e
u.toString
v.push(new A.b("span",n,"tr-field__error",n,n,n,A.a([new A.c(u,n)],w),n))}else{u=o.a.d
if(u!=null)v.push(new A.b("span",n,"tr-field__helper",n,n,n,A.a([new A.c(u,n)],w),n))}return new A.b("div",n,x,n,n,n,v,n)},
k6(){var x=null,w=this.d?"Hide":"Show",v=y.g
return new A.b("button",x,"tr-field__toggle-btn",x,A.p(["type","button"],v,v),A.p(["click",new B.pL(this)],v,y.a),A.a([new A.c(w,x)],y.p),x)}}
var z=a.updateTypes(["~(F)"])
B.pM.prototype={
$0(){var x=this.a
x.e=x.oY(x.f)},
$S:0}
B.pN.prototype={
$0(){var x=this.a
x.d=!x.d},
$S:0}
B.pL.prototype={
$1(d){A.f(d)
return this.a.or()},
$S:1};(function installTearOffs(){var x=a._instance_1u
x(B.jP.prototype,"goQ","oR",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hE,C.y)
x(B.jP,C.u)
w(A.ab,[B.pM,B.pN])
x(B.pL,A.a0)})()
A.X(b.typeUniverse,JSON.parse('{"hE":{"y":[],"e":[]},"jP":{"u":["hE"],"u.T":"hE"}}'))
var y={p:A.i("v<e>"),h:A.i("v<d>"),g:A.i("d"),a:A.i("~(F)")}};
(a=>{a["79zM77AzT+tHM8fuYReteA5wA+Q="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_45.part.js.map
