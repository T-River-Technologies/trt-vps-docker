((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
zb(d){var x,w,v,u=$.Bx()
u=u.b.test(d)
x=$.Bu()
x=x.b.test(d)
w=$.Bv()
w=w.b.test(d)
v=$.Bw()
return A.a([new B.bq("At least 16 characters",d.length>=16),new B.bq("Uppercase letter",u),new B.bq("Lowercase letter",x),new B.bq("Number",w),new B.bq("Special character",v.b.test(d))],y.f)},
DD(d){var x,w,v
if(d.length===0)return C.ia
x=B.zb(d)
w=A.L(x)
v=new A.T(x,w.h("F(1)").a(new B.qb()),w.h("T<1>")).gu(0)
if(v<=2)return C.ib
if(v<=4)return C.ic
return C.id},
DC(d){var x=B.zb(d),w=A.L(x)
return"width: "+D.f.a3(new A.T(x,w.h("F(1)").a(new B.q9()),w.h("T<1>")).gu(0)/5*100,1)+"%;"},
DB(d){switch(d.a){case 0:return"empty"
case 1:return"error"
case 2:return"warning"
case 3:return"success"}},
bq:function bq(d,e){this.a=d
this.b=e},
hX:function hX(d,e){this.a=d
this.b=e},
kh:function kh(d,e,f){this.c=d
this.d=e
this.a=f},
qb:function qb(){},
q9:function q9(){},
qa:function qa(){}},C,E
A=c[0]
D=c[2]
B=a.updateHolder(c[34],B)
C=c[107]
E=c[63]
B.bq.prototype={}
B.hX.prototype={
B(){return"TRPasswordStrengthLevel."+this.b}}
B.kh.prototype={
p(d){var x,w,v=null,u=this.c,t=y.g,s=y.p,r=A.a([new A.b("div",v,"tr-password-strength-bar__fill tr-password-strength-bar__fill--"+B.DB(B.DD(u)),v,A.p(["style",B.DC(u)],t,t),v,A.a([],s),v)],s),q=B.zb(u)
u=A.L(q)
x=u.h("G<1,e>")
w=A.A(new A.G(q,u.h("e(1)").a(new B.qa()),x),x.h("M.E"))
return new A.b("div",v,"tr-password-strength-bar",v,v,v,A.a([new A.b("div",v,"tr-password-strength-bar__track",v,v,v,r,v),new A.b("ul",v,"tr-password-strength-bar__criteria",v,A.p(["aria-label","Password requirements"],t,t),v,w,v)],s),v)}}
var z=a.updateTypes(["F(bq)","e(bq)"])
B.qb.prototype={
$1(d){return y.i.a(d).b},
$S:z+0}
B.q9.prototype={
$1(d){return y.i.a(d).b},
$S:z+0}
B.qa.prototype={
$1(d){var x,w,v,u,t,s=null
y.i.a(d)
x=d.b
w=x?A.a4(59510):A.a4(58829)
v=x?"met":"unmet"
u=x?"met":"unmet"
x=y.g
t=y.p
return new A.b("li",s,"tr-password-strength-bar__criterion",s,s,s,A.a([new A.b("span",s,"tr-password-strength-bar__criterion-icon tr-password-strength-bar__criterion-icon--"+v,s,A.p(["aria-hidden","true"],x,x),s,A.a([new A.c(w,s)],t),s),new A.b("span",s,"tr-password-strength-bar__criterion-label tr-password-strength-bar__criterion-label--"+u,s,s,s,A.a([new A.c(d.a,s)],t),s)],t),s)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bq,A.J)
x(B.hX,A.ao)
x(B.kh,E.a8)
w(A.Z,[B.qb,B.q9,B.qa])})()
A.W(b.typeUniverse,JSON.parse('{"kh":{"a8":[],"e":[]}}'))
var y={p:A.h("v<e>"),f:A.h("v<bq>"),g:A.h("d"),i:A.h("bq")};(function constants(){C.ia=new B.hX(0,"empty")
C.ib=new B.hX(1,"error")
C.ic=new B.hX(2,"warning")
C.id=new B.hX(3,"success")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"IQ","Bx",()=>A.bd("[A-Z]"))
x($,"IN","Bu",()=>A.bd("[a-z]"))
x($,"IO","Bv",()=>A.bd("[0-9]"))
x($,"IP","Bw",()=>A.bd('[!@#$%^&*(),.?":{}|<>_\\-+=\\[\\]\\\\;/~`]'))})()};
(a=>{a["8ex1uJl6gSbdt0OJn/8kZxhzlh0="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_127.part.js.map
