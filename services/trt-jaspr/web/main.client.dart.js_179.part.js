((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,I,G,D,B={
C0(){return new B.cI(null)},
cI:function cI(d){this.a=d},
kK:function kK(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
wz:function wz(d){this.a=d},
wx:function wx(d){this.a=d},
ww:function ww(d){this.a=d},
wt:function wt(){},
wu:function wu(){},
wv:function wv(d){this.a=d},
ws:function ws(d){this.a=d},
wy:function wy(d){this.a=d}},H,K,E,F,L,M
A=c[0]
C=c[2]
I=c[39]
G=c[41]
D=c[92]
B=a.updateHolder(c[24],B)
H=c[58]
K=c[49]
E=c[56]
F=c[61]
L=c[57]
M=c[54]
B.cI.prototype={
B(){return new B.kK()}}
B.kK.prototype={
F(){this.G()
var x=G.oX(new G.hn())
this.d=x
x.bC()},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
n(d){var x=this.d
x===$&&A.h()
return new L.S(x,new B.wz(this),null,y.l)},
iR(d){var x=this,w=null,v="Cancel Subscription",u=y.p
return new A.b("div",w,"hs-subscription-overview",w,w,w,A.a([new A.b("div",w,"hs-subscription-overview__header",w,w,w,A.a([new A.b("h1",w,"hs-subscription-overview__title",w,w,w,A.a([new A.c("Subscription",w)],u),w)],u),w),x.iT(d),K.cK("Keep Subscription",v,!0,x.e,"Are you sure you want to cancel your subscription? You will keep access until the end of your current billing period. Your files will remain intact.",new B.wx(x),x.gn5(),v)],u),w)},
iT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="div",i="span",h=d.a
if(h===D.G||h===D.O){h=y.p
return new A.b(j,k,"hs-subscription-overview__loading",k,k,k,A.a([new A.b("p",k,k,k,k,k,A.a([new A.c("Loading subscription\u2026",k)],h),k)],h),k)}if(h===D.H)return l.fK(d.d)
x=d.y
if(x==null)return l.fK("No subscription data")
h=x.b
w=y.p
h=A.a([new A.b(j,k,"hs-subscription-overview__plan-name-row",k,k,k,A.a([new A.b("h2",k,"hs-subscription-overview__plan-name",k,k,k,A.a([new A.c(h,k)],w),k),new A.b(i,k,"hs-subscription-overview__plan-tier-badge",k,k,k,A.a([new A.c(h,k)],w),k)],w),k),new A.b("p",k,"hs-subscription-overview__storage-label",k,k,k,A.a([new A.c(x.c,k)],w),k)],w)
v=l.h2(x.d)
u=l.h2(x.e)
t=A.a([new A.b(j,k,"hs-subscription-overview__storage-labels",k,k,k,A.a([new A.b(i,k,"hs-subscription-overview__storage-used",k,k,k,A.a([new A.c(v+" used",k)],w),k),new A.b(i,k,"hs-subscription-overview__storage-total",k,k,k,A.a([new A.c(u,k)],w),k)],w),k),new I.de(x.gbK(),8,k)],w)
s=x.x
r=s?x.r:x.f
q=l.kT(r,x.w)
p=l.ed("Price",q+(s?"/year":"/month"))
o=x.Q
n=o?"Access until":"Renews on"
m=x.y
n=l.ed(n,m)
h=A.a([new A.b(j,k,"hs-subscription-overview__plan-header",k,k,k,h,k),new A.b(j,k,"hs-subscription-overview__storage",k,k,k,t,k),new A.b("dl",k,"hs-subscription-overview__details",k,k,k,A.a([p,n,l.ed("Billing",s?"Yearly":"Monthly")],w),k)],w)
if(o)h.push(new A.b(j,k,"hs-subscription-overview__cancelled-banner",k,k,k,A.a([new A.b(i,k,"material-icons hs-subscription-overview__cancelled-icon",k,k,k,A.a([new A.c("info",k)],w),k),new A.b(i,k,k,k,k,k,A.a([new A.c("Your subscription has been cancelled. You retain access until "+m+".",k)],w),k)],w),k))
h.push(new A.b("hr",k,"hs-subscription-overview__divider",k,k,k,A.a([],w),k))
t=x.z
s=t.$ti
p=s.h("J<P.E,e>")
t=A.B(new A.J(t,s.h("e(P.E)").a(l.gjj()),p),p.h("N.E"))
h.push(new A.b("ul",k,"hs-subscription-overview__features",k,k,k,t,k))
if(d.z===D.a0&&d.Q!=null){t=d.Q
t.toString
h.push(new A.b(j,k,"hs-subscription-overview__action-error",k,k,k,A.a([new A.b(i,k,"material-icons hs-subscription-overview__action-error-icon",k,k,k,A.a([new A.c("error_outline",k)],w),k),new A.c(t,k)],w),k))}return new A.b(j,k,"hs-subscription-overview__content",k,k,k,A.a([new M.as(new A.b(j,k,"hs-subscription-overview__plan-card",k,k,k,h,k),k),l.iQ(x,d)],w),k)},
ed(d,e){var x=null,w=y.p
return new A.b("div",x,"hs-subscription-overview__detail-row",x,x,x,A.a([new A.b("dt",x,"hs-subscription-overview__detail-label",x,x,x,A.a([new A.c(d,x)],w),x),new A.b("dd",x,"hs-subscription-overview__detail-value",x,x,x,A.a([new A.c(e,x)],w),x)],w),x)},
jk(d){var x,w=null
A.r(d)
x=y.p
return new A.b("li",w,"hs-subscription-overview__feature",w,w,w,A.a([new A.b("span",w,"material-icons hs-subscription-overview__feature-icon",w,w,w,A.a([new A.c("check_circle",w)],x),w),new A.c(d,w)],x),w)},
iQ(d,e){var x=null,w=e.z===D.a_,v=A.a([],y.p),u=!d.Q
if(u&&d.a!=="business")v.push(new E.C("Upgrade Plan",F.k,w?x:new B.wt(),!1,!1,x))
v.push(new E.C("View Billing History",F.e,new B.wu(),!1,!1,x))
if(u&&d.a!=="free"){u=w?"Cancelling\u2026":"Cancel Subscription"
v.push(new E.C(u,F.e,w?x:new B.wv(this),!1,!1,x))}return new A.b("div",x,"hs-subscription-overview__actions",x,x,x,v,x)},
fK(d){var x,w=null,v=d==null?"Failed to load subscription":d,u=y.p
v=A.a([new A.c(v,w)],u)
x=this.d
x===$&&A.h()
return new A.b("div",w,"hs-subscription-overview__error",w,w,w,A.a([new A.b("p",w,w,w,w,w,v,w),new E.C("Try again",F.e,x.gqD(),!1,!1,w)],u),w)},
d7(){var x=0,w=A.n(y.f),v=this,u
var $async$d7=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.k(new B.wy(v))
u=v.d
u===$&&A.h()
x=2
return A.j(u.ar(),$async$d7)
case 2:return A.l(null,w)}})
return A.m($async$d7,w)},
h2(d){if(d<1024)return""+d+" B"
if(d<1048576)return C.f.a0(d/1024,1)+" KB"
if(d<1073741824)return C.f.a0(d/1048576,1)+" MB"
return C.f.a0(d/1073741824,1)+" GB"},
kT(d,e){if(d===0)return"\u20ac0"
return"\u20ac"+C.d.S(d,100)+"."+C.a.bo(C.d.m(C.d.bF(d,100)),2,"0")}}
var z=a.updateTypes(["e(d)","Y<~>()","e(O,aq)"])
B.wz.prototype={
$2(d,e){return this.a.iR(y.i.a(e))},
$S:z+2}
B.wx.prototype={
$0(){var x=this.a
return x.k(new B.ww(x))},
$S:0}
B.ww.prototype={
$0(){return this.a.e=!1},
$S:0}
B.wt.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/plans"
return null},
$S:0}
B.wu.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription/billing"
return null},
$S:0}
B.wv.prototype={
$0(){var x=this.a
return x.k(new B.ws(x))},
$S:0}
B.ws.prototype={
$0(){return this.a.e=!0},
$S:0}
B.wy.prototype={
$0(){return this.a.e=!1},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.kK.prototype,"gjj","jk",0)
w(v,"gn5","d7",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cI,H.y)
x(B.kK,H.u)
x(B.wz,A.ai)
w(A.ab,[B.wx,B.ww,B.wt,B.wu,B.wv,B.ws,B.wy])})()
A.X(b.typeUniverse,JSON.parse('{"cI":{"y":[],"e":[]},"kK":{"u":["cI"],"u.T":"cI"}}'))
var y={l:A.i("S<cH,aq>"),p:A.i("v<e>"),i:A.i("aq"),f:A.i("~")}};
(a=>{a["kh0RYuy+GbE3BmUZw7iRnMurPP8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_179.part.js.map
