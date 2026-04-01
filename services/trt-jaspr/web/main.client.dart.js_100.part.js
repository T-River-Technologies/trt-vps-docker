((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
z9(d,e,f){return new B.hs(f,e,d,null)},
hs:function hs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
jD:function jD(){this.c=this.a=null},
zd(){var x=A.a(["16-128 characters"],y.h)
E.b.p(x,"uppercase")
E.b.p(x,"lowercase")
E.b.p(x,"number")
E.b.p(x,"special character")
E.b.V(x,", ")
return new B.m4()},
m4:function m4(){}},C,F,D,G
A=c[0]
E=c[2]
B=a.updateHolder(c[30],B)
C=c[96]
F=c[58]
D=c[36]
G=c[72]
B.hs.prototype={
B(){return new B.jD()}}
B.jD.prototype={
l8(d){var x,w
A.f(d)
this.a.toString
d.preventDefault()
x=this.a
w=x.d
x=x.c
w.$1(!x)},
n(d){var x,w,v=this,u=null,t=v.a.c,s=y.g,r=A.a8(s,s)
r.l(0,"type","checkbox")
r.l(0,"checked",t?"true":"false")
v.a.toString
x=A.a(["tr-checkbox"],y.h)
x=E.b.V(x," ")
s=A.p(["click",v.gl7()],s,y.a)
w=y.p
r=A.a([new A.b("input",u,"tr-checkbox__input",u,r,u,A.a([],w),u)],w)
r.push(new A.b("div",u,"tr-checkbox__labels",u,u,u,A.a([new A.b("span",u,"tr-checkbox__label",u,u,u,A.a([new A.c(v.a.e,u)],w),u)],w),u))
return new A.b("div",u,x,u,u,s,r,u)}}
B.m4.prototype={
aj(d){var x=d.length
if(x===0)return new D.aP(!1,"Password is required")
if(x<16)return new D.aP(!1,"Password must be at least 16 characters")
if(x>128)return new D.aP(!1,"Password must be at most 128 characters")
x=$.Am()
x=!x.b.test(d)
if(x)return C.ib
x=$.Aj()
x=!x.b.test(d)
if(x)return C.ic
x=$.Ak()
x=!x.b.test(d)
if(x)return C.id
x=$.Al()
x=!x.b.test(d)
if(x)return C.ig
return G.a3}}
var z=a.updateTypes(["~(F)"]);(function installTearOffs(){var x=a._instance_1u
x(B.jD.prototype,"gl7","l8",0)})();(function inheritance(){var x=a.inherit
x(B.hs,F.y)
x(B.jD,F.u)
x(B.m4,D.cM)})()
A.X(b.typeUniverse,JSON.parse('{"hs":{"y":[],"e":[]},"jD":{"u":["hs"],"u.T":"hs"},"m4":{"cM":[]}}'))
var y={p:A.i("v<e>"),h:A.i("v<d>"),g:A.i("d"),a:A.i("~(F)")};(function constants(){C.ib=new D.aP(!1,"Password must contain at least one uppercase letter")
C.ic=new D.aP(!1,"Password must contain at least one lowercase letter")
C.id=new D.aP(!1,"Password must contain at least one number")
C.ig=new D.aP(!1,"Password must contain at least one special character")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"Hg","Am",()=>A.b9("[A-Z]"))
x($,"Hd","Aj",()=>A.b9("[a-z]"))
x($,"He","Ak",()=>A.b9("[0-9]"))
x($,"Hf","Al",()=>A.b9('[!@#$%^&*(),.?":{}|<>_\\-+=\\[\\]\\\\;/~`]'))})()};
(a=>{a["6PqLBwLiZs8gXMh7v9D7BNT0eRA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_100.part.js.map
