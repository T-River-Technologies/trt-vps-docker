((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
Am(d,e,f){return new B.hR(f,e,d,null)},
hR:function hR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ka:function ka(){this.c=this.a=null},
Aq(){var x=A.a(["16-128 characters"],y.h)
E.b.n(x,"uppercase")
E.b.n(x,"lowercase")
E.b.n(x,"number")
E.b.n(x,"special character")
E.b.a_(x,", ")
return new B.mC()},
mC:function mC(){}},C,F,D,G
A=c[0]
E=c[2]
B=a.updateHolder(c[33],B)
C=c[106]
F=c[65]
D=c[39]
G=c[79]
B.hR.prototype={
C(){return new B.ka()}}
B.ka.prototype={
lD(d){var x,w
A.f(d)
this.a.toString
d.preventDefault()
x=this.a
w=x.d
x=x.c
w.$1(!x)},
p(d){var x,w,v=this,u=null,t=v.a.c,s=y.g,r=A.a5(s,s)
r.l(0,"type","checkbox")
r.l(0,"checked",t?"true":"false")
v.a.toString
x=A.a(["tr-checkbox"],y.h)
x=E.b.a_(x," ")
s=A.p(["click",v.glC()],s,y.a)
w=y.p
r=A.a([new A.b("input",u,"tr-checkbox__input",u,r,u,A.a([],w),u)],w)
r.push(new A.b("div",u,"tr-checkbox__labels",u,u,u,A.a([new A.b("span",u,"tr-checkbox__label",u,u,u,A.a([new A.c(v.a.e,u)],w),u)],w),u))
return new A.b("div",u,x,u,u,s,r,u)}}
B.mC.prototype={
al(d){var x=d.length
if(x===0)return new D.aT(!1,"Password is required")
if(x<16)return new D.aT(!1,"Password must be at least 16 characters")
if(x>128)return new D.aT(!1,"Password must be at most 128 characters")
x=$.BB()
x=!x.b.test(d)
if(x)return C.iN
x=$.By()
x=!x.b.test(d)
if(x)return C.iO
x=$.Bz()
x=!x.b.test(d)
if(x)return C.iP
x=$.BA()
x=!x.b.test(d)
if(x)return C.iR
return G.a3}}
var z=a.updateTypes(["~(H)"]);(function installTearOffs(){var x=a._instance_1u
x(B.ka.prototype,"glC","lD",0)})();(function inheritance(){var x=a.inherit
x(B.hR,F.x)
x(B.ka,F.u)
x(B.mC,D.cU)})()
A.W(b.typeUniverse,JSON.parse('{"hR":{"x":[],"e":[]},"ka":{"u":["hR"],"u.T":"hR"},"mC":{"cU":[]}}'))
var y={p:A.h("v<e>"),h:A.h("v<d>"),g:A.h("d"),a:A.h("~(H)")};(function constants(){C.iN=new D.aT(!1,"Password must contain at least one uppercase letter")
C.iO=new D.aT(!1,"Password must contain at least one lowercase letter")
C.iP=new D.aT(!1,"Password must contain at least one number")
C.iR=new D.aT(!1,"Password must contain at least one special character")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"IU","BB",()=>A.bd("[A-Z]"))
x($,"IR","By",()=>A.bd("[a-z]"))
x($,"IS","Bz",()=>A.bd("[0-9]"))
x($,"IT","BA",()=>A.bd('[!@#$%^&*(),.?":{}|<>_\\-+=\\[\\]\\\\;/~`]'))})()};
(a=>{a["pS+EwrHf9nDGFFXduAg37wZh5Qw="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_108.part.js.map
