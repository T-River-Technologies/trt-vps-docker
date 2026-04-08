((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,B={cf:function cf(d){this.a=d},mL:function mL(){this.d=!1
this.c=this.a=null},qL:function qL(d,e){this.a=d
this.b=e},qM:function qM(d){this.a=d}},E
A=c[0]
C=c[2]
D=c[65]
B=a.updateHolder(c[31],B)
E=c[96]
B.cf.prototype={
C(){return new B.mL()}}
B.mL.prototype={
F(){this.G()
var x=A.r(A.f(A.f(b.G.window).localStorage).getItem("trtui-theme"))
if(x!=null&&E.L.Y(x)){this.d=C.a.fq(x,"-dark")
this.hU(x)}},
p8(){var x,w,v=this,u="default-light",t=A.r(A.f(A.f(b.G.window).localStorage).getItem("trtui-theme"))
if(t==null)t=u
x=v.d?C.a.ir(t,"-dark","-light"):C.a.ir(t,"-light","-dark")
w=E.L.Y(x)?x:u
v.hU(w)
v.k(new B.qL(v,w))},
hU(d){var x=b.G,w=A.a0(A.f(x.document).documentElement)
if(w==null)return
if(d==="default-light")w.removeAttribute("data-theme")
else w.setAttribute("data-theme",d)
A.f(A.f(x.window).localStorage).setItem("trtui-theme",d)},
p(d){var x,w=null,v=this.d,u=v?"\ue518":"\ue51c",t=v?"Switch to light mode":"Switch to dark mode"
v=y.g
x=y.p
return new A.b("button",w,"tr-icon-btn",w,A.p(["type","button","title",t],v,v),A.p(["click",new B.qM(this)],v,y.a),A.a([new A.b("span",w,"tr-icon-btn__icon",w,w,w,A.a([new A.c(u,w)],x),w)],x),w)}}
var z=a.updateTypes([])
B.qL.prototype={
$0(){this.a.d=C.a.fq(this.b,"-dark")},
$S:0}
B.qM.prototype={
$1(d){A.f(d)
return this.a.p8()},
$S:1};(function inheritance(){var x=a.inherit
x(B.cf,D.x)
x(B.mL,D.u)
x(B.qL,A.aa)
x(B.qM,A.Z)})()
A.W(b.typeUniverse,JSON.parse('{"cf":{"x":[],"e":[]},"mL":{"u":["cf"],"u.T":"cf"}}'))
var y={p:A.h("v<e>"),g:A.h("d"),a:A.h("~(H)")}};
(a=>{a["U1zeeIGtY/zhK51x+r5/OddSAP8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_80.part.js.map
