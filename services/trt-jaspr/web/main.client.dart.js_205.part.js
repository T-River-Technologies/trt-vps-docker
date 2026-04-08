((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,I,G,D,H,B={
Dq(){return new B.cQ(null)},
cQ:function cQ(d){this.a=d},
lj:function lj(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
xD:function xD(d){this.a=d},
xB:function xB(d){this.a=d},
xA:function xA(d){this.a=d},
xx:function xx(){},
xy:function xy(){},
xz:function xz(d){this.a=d},
xw:function xw(d){this.a=d},
xC:function xC(d){this.a=d}},K,E,F,L,M
A=c[0]
C=c[2]
I=c[44]
G=c[47]
D=c[102]
H=c[65]
B=a.updateHolder(c[27],B)
K=c[54]
E=c[62]
F=c[68]
L=c[64]
M=c[59]
B.cQ.prototype={
C(){return new B.lj()}}
B.lj.prototype={
F(){this.G()
var x=G.pM(new G.hM())
this.d=x
x.bJ()},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
p(d){var x=this.d
x===$&&A.i()
return new L.P(x,new B.xD(this),null,y.l)},
jl(d){var x=this,w=null,v="Cancel Subscription",u=y.p
return new A.b("div",w,"hs-subscription-overview",w,w,w,A.a([new A.b("div",w,"hs-subscription-overview__header",w,w,w,A.a([new A.b("h1",w,"hs-subscription-overview__title",w,w,w,A.a([new A.c("Subscription",w)],u),w)],u),w),x.jn(d),K.cS("Keep Subscription",v,!0,x.e,"Are you sure you want to cancel your subscription? You will keep access until the end of your current billing period. Your files will remain intact.",new B.xB(x),x.gnI(),v)],u),w)},
jn(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="div",i="span",h=d.a
if(h===D.G||h===D.O){h=y.p
return new A.b(j,k,"hs-subscription-overview__loading",k,k,k,A.a([new A.b("p",k,k,k,k,k,A.a([new A.c("Loading subscription\u2026",k)],h),k)],h),k)}if(h===D.H)return l.h6(d.d)
x=d.y
if(x==null)return l.h6("No subscription data")
h=x.b
w=y.p
h=A.a([new A.b(j,k,"hs-subscription-overview__plan-name-row",k,k,k,A.a([new A.b("h2",k,"hs-subscription-overview__plan-name",k,k,k,A.a([new A.c(h,k)],w),k),new A.b(i,k,"hs-subscription-overview__plan-tier-badge",k,k,k,A.a([new A.c(h,k)],w),k)],w),k),new A.b("p",k,"hs-subscription-overview__storage-label",k,k,k,A.a([new A.c(x.c,k)],w),k)],w)
v=l.hr(x.d)
u=l.hr(x.e)
t=A.a([new A.b(j,k,"hs-subscription-overview__storage-labels",k,k,k,A.a([new A.b(i,k,"hs-subscription-overview__storage-used",k,k,k,A.a([new A.c(v+" used",k)],w),k),new A.b(i,k,"hs-subscription-overview__storage-total",k,k,k,A.a([new A.c(u,k)],w),k)],w),k),new I.ds(x.gbR(),8,k)],w)
s=x.x
r=s?x.r:x.f
q=l.ln(r,x.w)
p=l.eu("Price",q+(s?"/year":"/month"))
o=x.Q
n=o?"Access until":"Renews on"
m=x.y
n=l.eu(n,m)
h=A.a([new A.b(j,k,"hs-subscription-overview__plan-header",k,k,k,h,k),new A.b(j,k,"hs-subscription-overview__storage",k,k,k,t,k),new A.b("dl",k,"hs-subscription-overview__details",k,k,k,A.a([p,n,l.eu("Billing",s?"Yearly":"Monthly")],w),k)],w)
if(o)h.push(new A.b(j,k,"hs-subscription-overview__cancelled-banner",k,k,k,A.a([new A.b(i,k,"material-icons hs-subscription-overview__cancelled-icon",k,k,k,A.a([new A.c("info",k)],w),k),new A.b(i,k,k,k,k,k,A.a([new A.c("Your subscription has been cancelled. You retain access until "+m+".",k)],w),k)],w),k))
h.push(new A.b("hr",k,"hs-subscription-overview__divider",k,k,k,A.a([],w),k))
t=x.z
s=t.$ti
p=s.h("G<R.E,e>")
t=A.A(new A.G(t,s.h("e(R.E)").a(l.gjO()),p),p.h("M.E"))
h.push(new A.b("ul",k,"hs-subscription-overview__features",k,k,k,t,k))
if(d.z===D.a0&&d.Q!=null){t=d.Q
t.toString
h.push(new A.b(j,k,"hs-subscription-overview__action-error",k,k,k,A.a([new A.b(i,k,"material-icons hs-subscription-overview__action-error-icon",k,k,k,A.a([new A.c("error_outline",k)],w),k),new A.c(t,k)],w),k))}return new A.b(j,k,"hs-subscription-overview__content",k,k,k,A.a([new M.aw(new A.b(j,k,"hs-subscription-overview__plan-card",k,k,k,h,k),k),l.jk(x,d)],w),k)},
eu(d,e){var x=null,w=y.p
return new A.b("div",x,"hs-subscription-overview__detail-row",x,x,x,A.a([new A.b("dt",x,"hs-subscription-overview__detail-label",x,x,x,A.a([new A.c(d,x)],w),x),new A.b("dd",x,"hs-subscription-overview__detail-value",x,x,x,A.a([new A.c(e,x)],w),x)],w),x)},
jP(d){var x,w=null
A.q(d)
x=y.p
return new A.b("li",w,"hs-subscription-overview__feature",w,w,w,A.a([new A.b("span",w,"material-icons hs-subscription-overview__feature-icon",w,w,w,A.a([new A.c("check_circle",w)],x),w),new A.c(d,w)],x),w)},
jk(d,e){var x=null,w=e.z===D.a_,v=A.a([],y.p),u=!d.Q
if(u&&d.a!=="business")v.push(new E.D("Upgrade Plan",F.l,w?x:new B.xx(),!1,!1,x))
v.push(new E.D("View Billing History",F.e,new B.xy(),!1,!1,x))
if(u&&d.a!=="free"){u=w?"Cancelling\u2026":"Cancel Subscription"
v.push(new E.D(u,F.e,w?x:new B.xz(this),!1,!1,x))}return new A.b("div",x,"hs-subscription-overview__actions",x,x,x,v,x)},
h6(d){var x,w=null,v=d==null?"Failed to load subscription":d,u=y.p
v=A.a([new A.c(v,w)],u)
x=this.d
x===$&&A.i()
return new A.b("div",w,"hs-subscription-overview__error",w,w,w,A.a([new A.b("p",w,w,w,w,w,v,w),new E.D("Try again",F.e,x.grC(),!1,!1,w)],u),w)},
dm(){var x=0,w=A.n(y.f),v=this,u
var $async$dm=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.k(new B.xC(v))
u=v.d
u===$&&A.i()
x=2
return A.j(u.aw(),$async$dm)
case 2:return A.l(null,w)}})
return A.m($async$dm,w)},
hr(d){if(d<1024)return""+d+" B"
if(d<1048576)return C.f.a3(d/1024,1)+" KB"
if(d<1073741824)return C.f.a3(d/1048576,1)+" MB"
return C.f.a3(d/1073741824,1)+" GB"},
ln(d,e){if(d===0)return"\u20ac0"
return"\u20ac"+C.d.O(d,100)+"."+C.a.bb(C.d.m(C.d.bM(d,100)),2,"0")}}
var z=a.updateTypes(["e(d)","Y<~>()","e(O,at)"])
B.xD.prototype={
$2(d,e){return this.a.jl(y.i.a(e))},
$S:z+2}
B.xB.prototype={
$0(){var x=this.a
return x.k(new B.xA(x))},
$S:0}
B.xA.prototype={
$0(){return this.a.e=!1},
$S:0}
B.xx.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/plans"
return null},
$S:0}
B.xy.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/billing"
return null},
$S:0}
B.xz.prototype={
$0(){var x=this.a
return x.k(new B.xw(x))},
$S:0}
B.xw.prototype={
$0(){return this.a.e=!0},
$S:0}
B.xC.prototype={
$0(){return this.a.e=!1},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.lj.prototype,"gjO","jP",0)
w(v,"gnI","dm",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cQ,H.x)
x(B.lj,H.u)
x(B.xD,A.ah)
w(A.aa,[B.xB,B.xA,B.xx,B.xy,B.xz,B.xw,B.xC])})()
A.W(b.typeUniverse,JSON.parse('{"cQ":{"x":[],"e":[]},"lj":{"u":["cQ"],"u.T":"cQ"}}'))
var y={l:A.h("P<cP,at>"),p:A.h("v<e>"),i:A.h("at"),f:A.h("~")}};
(a=>{a["TEAYDmBdK2cQMgxVAj3cMVUcFXA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_205.part.js.map
