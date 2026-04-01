((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
y_(d){var x,w,v,u=$.Ai()
u=u.b.test(d)
x=$.Af()
x=x.b.test(d)
w=$.Ag()
w=w.b.test(d)
v=$.Ah()
return A.a([new B.bl("At least 16 characters",d.length>=16),new B.bl("Uppercase letter",u),new B.bl("Lowercase letter",x),new B.bl("Number",w),new B.bl("Special character",v.b.test(d))],y.f)},
Cd(d){var x,w,v
if(d.length===0)return C.hB
x=B.y_(d)
w=A.L(x)
v=new A.U(x,w.h("G(1)").a(new B.pm()),w.h("U<1>")).gt(0)
if(v<=2)return C.hC
if(v<=4)return C.hD
return C.hE},
Cc(d){var x=B.y_(d),w=A.L(x)
return"width: "+D.f.a0(new A.U(x,w.h("G(1)").a(new B.pk()),w.h("U<1>")).gt(0)/5*100,1)+"%;"},
Cb(d){switch(d.a){case 0:return"empty"
case 1:return"error"
case 2:return"warning"
case 3:return"success"}},
bl:function bl(d,e){this.a=d
this.b=e},
hy:function hy(d,e){this.a=d
this.b=e},
jK:function jK(d,e,f){this.c=d
this.d=e
this.a=f},
pm:function pm(){},
pk:function pk(){},
pl:function pl(){}},C,E
A=c[0]
D=c[2]
B=a.updateHolder(c[31],B)
C=c[97]
E=c[57]
B.bl.prototype={}
B.hy.prototype={
C(){return"TRPasswordStrengthLevel."+this.b}}
B.jK.prototype={
n(d){var x,w,v=null,u=this.c,t=y.g,s=y.p,r=A.a([new A.b("div",v,"tr-password-strength-bar__fill tr-password-strength-bar__fill--"+B.Cb(B.Cd(u)),v,A.p(["style",B.Cc(u)],t,t),v,A.a([],s),v)],s),q=B.y_(u)
u=A.L(q)
x=u.h("J<1,e>")
w=A.B(new A.J(q,u.h("e(1)").a(new B.pl()),x),x.h("N.E"))
return new A.b("div",v,"tr-password-strength-bar",v,v,v,A.a([new A.b("div",v,"tr-password-strength-bar__track",v,v,v,r,v),new A.b("ul",v,"tr-password-strength-bar__criteria",v,A.p(["aria-label","Password requirements"],t,t),v,w,v)],s),v)}}
var z=a.updateTypes(["G(bl)","e(bl)"])
B.pm.prototype={
$1(d){return y.i.a(d).b},
$S:z+0}
B.pk.prototype={
$1(d){return y.i.a(d).b},
$S:z+0}
B.pl.prototype={
$1(d){var x,w,v,u,t,s=null
y.i.a(d)
x=d.b
w=x?A.a7(59510):A.a7(58829)
v=x?"met":"unmet"
u=x?"met":"unmet"
x=y.g
t=y.p
return new A.b("li",s,"tr-password-strength-bar__criterion",s,s,s,A.a([new A.b("span",s,"tr-password-strength-bar__criterion-icon tr-password-strength-bar__criterion-icon--"+v,s,A.p(["aria-hidden","true"],x,x),s,A.a([new A.c(w,s)],t),s),new A.b("span",s,"tr-password-strength-bar__criterion-label tr-password-strength-bar__criterion-label--"+u,s,s,s,A.a([new A.c(d.a,s)],t),s)],t),s)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bl,A.I)
x(B.hy,A.ar)
x(B.jK,E.a5)
w(A.a0,[B.pm,B.pk,B.pl])})()
A.X(b.typeUniverse,JSON.parse('{"jK":{"a5":[],"e":[]}}'))
var y={p:A.i("v<e>"),f:A.i("v<bl>"),g:A.i("d"),i:A.i("bl")};(function constants(){C.hB=new B.hy(0,"empty")
C.hC=new B.hy(1,"error")
C.hD=new B.hy(2,"warning")
C.hE=new B.hy(3,"success")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"Hc","Ai",()=>A.b9("[A-Z]"))
x($,"H9","Af",()=>A.b9("[a-z]"))
x($,"Ha","Ag",()=>A.b9("[0-9]"))
x($,"Hb","Ah",()=>A.b9('[!@#$%^&*(),.?":{}|<>_\\-+=\\[\\]\\\\;/~`]'))})()};
(a=>{a["c/QRmZhZtbpWQGLGk6zQi7JiKFE="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_119.part.js.map
