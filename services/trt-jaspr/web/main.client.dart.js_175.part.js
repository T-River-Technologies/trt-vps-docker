((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,F,C,B={
AR(d,e){return new B.cj(e,d,null)},
cj:function cj(d,e,f){this.c=d
this.d=e
this.a=f},
mm:function mm(){this.d=$
this.c=this.a=null},
rc:function rc(d){this.a=d},
ra:function ra(){},
rb:function rb(){},
r8:function r8(){},
r9:function r9(){},
r7:function r7(){}},G,D,E,H,I
A=c[0]
F=c[41]
C=c[92]
B=a.updateHolder(c[22],B)
G=c[58]
D=c[56]
E=c[61]
H=c[57]
I=c[54]
B.cj.prototype={
B(){return new B.mm()}}
B.mm.prototype={
F(){var x,w,v
this.G()
x=F.oX(new F.hn())
this.d=x
w=this.a
v=w.c
x.dW(w.d,v)},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
n(d){var x=this.d
x===$&&A.h()
return new H.S(x,new B.rc(this),null,y.l)},
ke(d){var x,w=null,v=d.e
A:{if(C.aY===v||C.aZ===v){x=y.p
x=new A.b("div",w,"hs-checkout-callback__verifying",w,w,w,A.a([new A.b("span",w,"material-icons hs-checkout-callback__spinner-icon",w,w,w,A.a([new A.c("hourglass_empty",w)],x),w),new A.b("p",w,"hs-checkout-callback__message",w,w,w,A.a([new A.c("Verifying your payment\u2026",w)],x),w)],x),w)
break A}if(C.b_===v){x=this.jZ(d)
break A}if(C.b0===v){x=this.jh(d)
break A}if(C.ac===v){x=this.iY()
break A}x=w}return new A.b("div",w,"hs-checkout-callback",w,w,w,A.a([x],y.p),w)},
jZ(d){var x,w,v,u=null,t=d.f
if(t==null)t=""
x=d.r
if(x==null)x=""
w=d.w
if(w==null)w=""
v=y.p
return new A.b("div",u,"hs-checkout-callback__result hs-checkout-callback__result--success",u,u,u,A.a([new A.b("span",u,"material-icons hs-checkout-callback__result-icon hs-checkout-callback__result-icon--success",u,u,u,A.a([new A.c("check_circle",u)],v),u),new A.b("h2",u,"hs-checkout-callback__title",u,u,u,A.a([new A.c("Payment successful",u)],v),u),new I.as(new A.b("dl",u,"hs-checkout-callback__details",u,u,u,A.a([this.eh("Plan",t),this.eh("Storage",x),this.eh("Renews on",w)],v),u),u),new D.C("Go to My Files",E.k,new B.ra(),!1,!1,u),new D.C("View Subscription",E.e,new B.rb(),!1,!1,u)],v),u)},
jh(d){var x,w=null,v=d.x
if(v==null)v="Payment could not be processed."
x=y.p
return new A.b("div",w,"hs-checkout-callback__result hs-checkout-callback__result--failed",w,w,w,A.a([new A.b("span",w,"material-icons hs-checkout-callback__result-icon hs-checkout-callback__result-icon--failed",w,w,w,A.a([new A.c("cancel",w)],x),w),new A.b("h2",w,"hs-checkout-callback__title",w,w,w,A.a([new A.c("Payment failed",w)],x),w),new A.b("p",w,"hs-checkout-callback__message",w,w,w,A.a([new A.c(v,w)],x),w),new D.C("Try again",E.k,new B.r8(),!1,!1,w),new D.C("Go to My Files",E.e,new B.r9(),!1,!1,w)],x),w)},
iY(){var x=null,w=y.p
return new A.b("div",x,"hs-checkout-callback__result hs-checkout-callback__result--cancelled",x,x,x,A.a([new A.b("span",x,"material-icons hs-checkout-callback__result-icon hs-checkout-callback__result-icon--cancelled",x,x,x,A.a([new A.c("info",x)],w),x),new A.b("h2",x,"hs-checkout-callback__title",x,x,x,A.a([new A.c("Payment cancelled",x)],w),x),new A.b("p",x,"hs-checkout-callback__message",x,x,x,A.a([new A.c("Your subscription has not been changed.",x)],w),x),new D.C("Back to plans",E.k,new B.r7(),!1,!1,x)],w),x)},
eh(d,e){var x=null,w=y.p
return new A.b("div",x,"hs-checkout-callback__detail-row",x,x,x,A.a([new A.b("dt",x,"hs-checkout-callback__detail-label",x,x,x,A.a([new A.c(d,x)],w),x),new A.b("dd",x,"hs-checkout-callback__detail-value",x,x,x,A.a([new A.c(e,x)],w),x)],w),x)}}
var z=a.updateTypes(["e(O,aq)"])
B.rc.prototype={
$2(d,e){return this.a.ke(y.i.a(e))},
$S:z+0}
B.ra.prototype={
$0(){A.f(A.f(b.G.window).location).href="/files"
return null},
$S:0}
B.rb.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription"
return null},
$S:0}
B.r8.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/plans"
return null},
$S:0}
B.r9.prototype={
$0(){A.f(A.f(b.G.window).location).href="/files"
return null},
$S:0}
B.r7.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/plans"
return null},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cj,G.y)
x(B.mm,G.u)
x(B.rc,A.ai)
w(A.ab,[B.ra,B.rb,B.r8,B.r9,B.r7])})()
A.X(b.typeUniverse,JSON.parse('{"cj":{"y":[],"e":[]},"mm":{"u":["cj"],"u.T":"cj"}}'))
var y={l:A.i("S<cH,aq>"),p:A.i("v<e>"),i:A.i("aq")}};
(a=>{a["tETRNnBayzV2H0qiWfGo9etuc9g="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_175.part.js.map
