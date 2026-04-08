((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,F,C,G,B={
C8(d,e){return new B.cp(e,d,null)},
cp:function cp(d,e,f){this.c=d
this.d=e
this.a=f},
mV:function mV(){this.d=$
this.c=this.a=null},
t4:function t4(d){this.a=d},
t2:function t2(){},
t3:function t3(){},
t0:function t0(){},
t1:function t1(){},
t_:function t_(){}},D,E,H,I
A=c[0]
F=c[47]
C=c[102]
G=c[65]
B=a.updateHolder(c[25],B)
D=c[62]
E=c[68]
H=c[64]
I=c[59]
B.cp.prototype={
C(){return new B.mV()}}
B.mV.prototype={
F(){var x,w,v
this.G()
x=F.pM(new F.hM())
this.d=x
w=this.a
v=w.c
x.eb(w.d,v)},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
p(d){var x=this.d
x===$&&A.i()
return new H.P(x,new B.t4(this),null,y.l)},
kI(d){var x,w=null,v=d.e
A:{if(C.b0===v||C.b1===v){x=y.p
x=new A.b("div",w,"hs-checkout-callback__verifying",w,w,w,A.a([new A.b("span",w,"material-icons hs-checkout-callback__spinner-icon",w,w,w,A.a([new A.c("hourglass_empty",w)],x),w),new A.b("p",w,"hs-checkout-callback__message",w,w,w,A.a([new A.c("Verifying your payment\u2026",w)],x),w)],x),w)
break A}if(C.b2===v){x=this.kw(d)
break A}if(C.b3===v){x=this.jM(d)
break A}if(C.ad===v){x=this.js()
break A}x=w}return new A.b("div",w,"hs-checkout-callback",w,w,w,A.a([x],y.p),w)},
kw(d){var x,w,v,u=null,t=d.f
if(t==null)t=""
x=d.r
if(x==null)x=""
w=d.w
if(w==null)w=""
v=y.p
return new A.b("div",u,"hs-checkout-callback__result hs-checkout-callback__result--success",u,u,u,A.a([new A.b("span",u,"material-icons hs-checkout-callback__result-icon hs-checkout-callback__result-icon--success",u,u,u,A.a([new A.c("check_circle",u)],v),u),new A.b("h2",u,"hs-checkout-callback__title",u,u,u,A.a([new A.c("Payment successful",u)],v),u),new I.aw(new A.b("dl",u,"hs-checkout-callback__details",u,u,u,A.a([this.ey("Plan",t),this.ey("Storage",x),this.ey("Renews on",w)],v),u),u),new D.D("Go to My Files",E.l,new B.t2(),!1,!1,u),new D.D("View Subscription",E.e,new B.t3(),!1,!1,u)],v),u)},
jM(d){var x,w=null,v=d.x
if(v==null)v="Payment could not be processed."
x=y.p
return new A.b("div",w,"hs-checkout-callback__result hs-checkout-callback__result--failed",w,w,w,A.a([new A.b("span",w,"material-icons hs-checkout-callback__result-icon hs-checkout-callback__result-icon--failed",w,w,w,A.a([new A.c("cancel",w)],x),w),new A.b("h2",w,"hs-checkout-callback__title",w,w,w,A.a([new A.c("Payment failed",w)],x),w),new A.b("p",w,"hs-checkout-callback__message",w,w,w,A.a([new A.c(v,w)],x),w),new D.D("Try again",E.l,new B.t0(),!1,!1,w),new D.D("Go to My Files",E.e,new B.t1(),!1,!1,w)],x),w)},
js(){var x=null,w=y.p
return new A.b("div",x,"hs-checkout-callback__result hs-checkout-callback__result--cancelled",x,x,x,A.a([new A.b("span",x,"material-icons hs-checkout-callback__result-icon hs-checkout-callback__result-icon--cancelled",x,x,x,A.a([new A.c("info",x)],w),x),new A.b("h2",x,"hs-checkout-callback__title",x,x,x,A.a([new A.c("Payment cancelled",x)],w),x),new A.b("p",x,"hs-checkout-callback__message",x,x,x,A.a([new A.c("Your subscription has not been changed.",x)],w),x),new D.D("Back to plans",E.l,new B.t_(),!1,!1,x)],w),x)},
ey(d,e){var x=null,w=y.p
return new A.b("div",x,"hs-checkout-callback__detail-row",x,x,x,A.a([new A.b("dt",x,"hs-checkout-callback__detail-label",x,x,x,A.a([new A.c(d,x)],w),x),new A.b("dd",x,"hs-checkout-callback__detail-value",x,x,x,A.a([new A.c(e,x)],w),x)],w),x)}}
var z=a.updateTypes(["e(O,at)"])
B.t4.prototype={
$2(d,e){return this.a.kI(y.i.a(e))},
$S:z+0}
B.t2.prototype={
$0(){A.f(A.f(b.G.window).location).href="/files"
return null},
$S:0}
B.t3.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription"
return null},
$S:0}
B.t0.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/plans"
return null},
$S:0}
B.t1.prototype={
$0(){A.f(A.f(b.G.window).location).href="/files"
return null},
$S:0}
B.t_.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/plans"
return null},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cp,G.x)
x(B.mV,G.u)
x(B.t4,A.ah)
w(A.aa,[B.t2,B.t3,B.t0,B.t1,B.t_])})()
A.W(b.typeUniverse,JSON.parse('{"cp":{"x":[],"e":[]},"mV":{"u":["cp"],"u.T":"cp"}}'))
var y={l:A.h("P<cP,at>"),p:A.h("v<e>"),i:A.h("at")}};
(a=>{a["JKP0cG9LgPokHfwVPgRTSY8KcVk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_201.part.js.map
