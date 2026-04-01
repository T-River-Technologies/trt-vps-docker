((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,B={c9:function c9(d){this.a=d},md:function md(){this.d=!1
this.c=this.a=null},pV:function pV(d,e){this.a=d
this.b=e},pW:function pW(d){this.a=d}},E
A=c[0]
C=c[2]
D=c[58]
B=a.updateHolder(c[28],B)
E=c[86]
B.c9.prototype={
B(){return new B.md()}}
B.md.prototype={
F(){this.G()
var x=A.q(A.f(A.f(b.G.window).localStorage).getItem("trtui-theme"))
if(x!=null&&E.L.aA(x)){this.d=C.a.f5(x,"-dark")
this.ht(x)}},
op(){var x,w,v=this,u="default-light",t=A.q(A.f(A.f(b.G.window).localStorage).getItem("trtui-theme"))
if(t==null)t=u
x=v.d?C.a.hV(t,"-dark","-light"):C.a.hV(t,"-light","-dark")
w=E.L.aA(x)?x:u
v.ht(w)
v.k(new B.pV(v,w))},
ht(d){var x=b.G,w=A.Z(A.f(x.document).documentElement)
if(w==null)return
if(d==="default-light")w.removeAttribute("data-theme")
else w.setAttribute("data-theme",d)
A.f(A.f(x.window).localStorage).setItem("trtui-theme",d)},
n(d){var x,w=null,v=this.d,u=v?"\ue518":"\ue51c",t=v?"Switch to light mode":"Switch to dark mode"
v=y.g
x=y.p
return new A.b("button",w,"tr-icon-btn",w,A.p(["type","button","title",t],v,v),A.p(["click",new B.pW(this)],v,y.a),A.a([new A.b("span",w,"tr-icon-btn__icon",w,w,w,A.a([new A.c(u,w)],x),w)],x),w)}}
var z=a.updateTypes([])
B.pV.prototype={
$0(){this.a.d=C.a.f5(this.b,"-dark")},
$S:0}
B.pW.prototype={
$1(d){A.f(d)
return this.a.op()},
$S:1};(function inheritance(){var x=a.inherit
x(B.c9,D.y)
x(B.md,D.u)
x(B.pV,A.ab)
x(B.pW,A.a0)})()
A.X(b.typeUniverse,JSON.parse('{"c9":{"y":[],"e":[]},"md":{"u":["c9"],"u.T":"c9"}}'))
var y={p:A.i("v<e>"),g:A.i("d"),a:A.i("~(F)")}};
(a=>{a["g0qysI9lPgQFeQnUE5/M255M3A8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_74.part.js.map
