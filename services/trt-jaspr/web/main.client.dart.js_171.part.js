((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
AN(){return new B.ch(null)},
ch:function ch(d){this.a=d},
k_:function k_(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=_.r=null},
qT:function qT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
r0:function r0(d,e){this.a=d
this.b=e},
r_:function r_(d){this.a=d},
r1:function r1(d,e){this.a=d
this.b=e},
r2:function r2(d){this.a=d},
r3:function r3(d){this.a=d},
qV:function qV(d){this.a=d},
qU:function qU(d){this.a=d},
qW:function qW(){},
qZ:function qZ(d,e){this.a=d
this.b=e},
qX:function qX(d,e){this.a=d
this.b=e},
qY:function qY(d,e){this.a=d
this.b=e}},C,G,D,H,F,I,M,K,L,N,O,P
A=c[0]
E=c[2]
B=a.updateHolder(c[21],B)
C=c[93]
G=c[41]
D=c[92]
H=c[58]
F=c[48]
I=c[62]
M=c[49]
K=c[56]
L=c[61]
N=c[63]
O=c[68]
P=c[57]
B.ch.prototype={
B(){return new B.k_(A.a([],y.B))}}
B.k_.prototype={
F(){this.G()
var x=G.oX(new G.hn())
this.d=x
x.bB()},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
fH(d,e){this.k(new B.qT(this,E.d.m(1000*Date.now()),d,e))},
kz(d){this.k(new B.r0(this,A.r(d)))},
mZ(d){this.k(new B.r1(this,d))},
d8(){var x=0,w=A.n(y.v),v,u=this,t,s,r
var $async$d8=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.r
if(r==null){x=1
break}u.k(new B.r2(u))
t=u.d
t===$&&A.h()
x=3
return A.j(t.aI(r.b),$async$d8)
case 3:s=u.d.c
if(s.ay===D.a0&&s.ch!=null){u.fH("Refund request failed: "+A.V(s.ch),I.h)
t=u.d
t.i(t.c.eS(D.au))}else u.fH("Refund requested successfully",I.i)
case 1:return A.l(v,w)}})
return A.m($async$d8,w)},
n(d){var x=this.d
x===$&&A.h()
return new P.S(x,new B.r3(this),null,y.l)},
iM(d){var x=this,w="Request Refund",v=null,u=x.jn(),t=x.iN(d),s=x.r
s=s!=null?'Request a refund for "'+s.d+'"? Refunds are reviewed within 5\u20137 business days.':"Request a refund for this payment?"
s=A.a([u,t,M.cK("Cancel",w,!1,x.f,s,new B.qV(x),x.gn8(),w)],y.F)
u=x.e
if(u.length!==0)s.push(new F.aO(u,x.gky(),v))
return new A.b("div",v,"hs-billing-history",v,v,v,s,v)},
jn(){var x=null,w=y.F
return new A.b("div",x,"hs-billing-history__header",x,x,x,A.a([new A.b("div",x,"hs-billing-history__title-row",x,x,x,A.a([new A.b("h1",x,"hs-billing-history__title",x,x,x,A.a([new A.c("Billing History",x)],w),x),new K.C("Back to Subscription",L.e,new B.qW(),!1,!1,x)],w),x),new A.b("p",x,"hs-billing-history__subtitle",x,x,x,A.a([new A.c("View your past payments and download receipts.",x)],w),x)],w),x)},
iN(d){var x,w,v=null,u=d.as
if(u===D.G||u===D.O){u=y.F
return new A.b("div",v,"hs-billing-history__loading",v,v,v,A.a([new A.b("p",v,v,v,v,v,A.a([new A.c("Loading billing history\u2026",v)],u),v)],u),v)}if(u===D.H){u=d.ax
if(u==null)u="Failed to load billing history"
x=y.F
u=A.a([new A.c(u,v)],x)
w=this.d
w===$&&A.h()
return new A.b("div",v,"hs-billing-history__error",v,v,v,A.a([new A.b("p",v,v,v,v,v,u,v),new K.C("Try again",L.e,w.gqx(),!1,!1,v)],x),v)}if(d.at.length===0){u=y.F
return new A.b("div",v,"hs-billing-history__empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-billing-history__empty-icon",v,v,v,A.a([new A.c("receipt_long",v)],u),v),new A.b("p",v,"hs-billing-history__empty-text",v,v,v,A.a([new A.c("No billing history yet.",v)],u),v)],u),v)}return this.k5(d)},
k5(d){var x=null
return new A.b("div",x,"hs-billing-history__table-wrapper",x,x,x,A.a([F.c7(this.gj0(),C.ee,d.at,"No invoices found",x,new B.qZ(this,d),this.goi(),y.f)],y.F),x)},
j1(d,e){var x,w=null
y.f.a(d)
A:{if("date"===e){x=new A.c(d.c,w)
break A}if("description"===e){x=new A.b("span",w,"hs-billing-history__description",w,w,w,A.a([new A.c(d.d,w)],y.F),w)
break A}if("amount"===e){x=new A.c(this.iO(d.e,d.f),w)
break A}if("status"===e){x=this.jY(d.r)
break A}x=new A.c("",w)
break A}return x},
oj(d,e){var x
y.f.a(d)
A:{if("date"===e){x=d.c
break A}if("amount"===e){x=d.e
break A}x=null
break A}return x},
jU(d,e){var x,w,v,u,t,s,r,q=null,p="button",o="hs-billing-history__action-btn",n="material-icons"
if(e.ay===D.a_){x=this.r
x=x==null?q:x.a
w=x===d.a}else w=!1
x=y.w
v=y.a
u=y.F
t=A.a([new A.b(p,q,o,q,A.p(["type","button","title","Download receipt"],x,x),A.p(["click",new B.qX(this,d)],x,v),A.a([new A.b("span",q,n,q,q,q,A.a([new A.c("download",q)],u),q)],u),q)],u)
if(d.w){s=w?"hs-billing-history__action-btn hs-billing-history__action-btn--disabled":o
r=A.a8(x,x)
r.l(0,"type",p)
r.l(0,"title","Request refund")
if(w)r.l(0,"disabled","")
x=A.a8(x,v)
if(!w)x.l(0,"click",new B.qY(this,d))
t.push(new A.b(p,q,s,q,r,x,A.a([new A.b("span",q,n,q,q,q,A.a([new A.c("undo",q)],u),q)],u),q))}return new A.b("div",q,"hs-billing-history__row-actions",q,q,q,t,q)},
jY(d){var x,w,v=null
switch(d.a){case 0:x=C.fF
break
case 1:x=C.fJ
break
case 2:x=C.fG
break
default:x=v}w=x.a
return new A.b("span",v,x.b,v,v,v,A.a([new A.c(w,v)],y.F),v)},
iO(d,e){if(d===0)return"\u20ac0.00"
return"\u20ac"+E.d.S(d,100)+"."+E.a.bo(E.d.m(E.d.bF(d,100)),2,"0")}}
var z=a.updateTypes(["~(d)","Y<~>()","e(aR,d)","am<@>?(aR,d)","G(a1)","e(O,aq)","e(aR)"])
B.qT.prototype={
$0(){var x=this,w=x.a,v=A.B(w.e,y.s)
v.push(new F.a1(x.b,x.c,x.d))
w.e=v},
$S:0}
B.r0.prototype={
$0(){var x=this.a,w=x.e,v=A.L(w),u=v.h("U<1>")
w=A.B(new A.U(w,v.h("G(1)").a(new B.r_(this.b)),u),u.h("x.E"))
x.e=w},
$S:0}
B.r_.prototype={
$1(d){return y.s.a(d).a!==this.a},
$S:z+4}
B.r1.prototype={
$0(){var x=this.a
x.r=this.b
x.f=!0},
$S:0}
B.r2.prototype={
$0(){return this.a.f=!1},
$S:0}
B.r3.prototype={
$2(d,e){return this.a.iM(y.y.a(e))},
$S:z+5}
B.qV.prototype={
$0(){var x=this.a
return x.k(new B.qU(x))},
$S:0}
B.qU.prototype={
$0(){return this.a.f=!1},
$S:0}
B.qW.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription"
return null},
$S:0}
B.qZ.prototype={
$1(d){return this.a.jU(y.f.a(d),this.b)},
$S:z+6}
B.qX.prototype={
$1(d){A.f(d)
A.Z(A.f(b.G.window).open("/api/subscription/receipt/"+this.b.a,"_blank"))
return null},
$S:1}
B.qY.prototype={
$1(d){A.f(d)
return this.a.mZ(this.b)},
$S:1};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u,v=a._instance_2u
var u
x(u=B.k_.prototype,"gky","kz",0)
w(u,"gn8","d8",1)
v(u,"gj0","j1",2)
v(u,"goi","oj",3)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ch,H.y)
x(B.k_,H.u)
w(A.ab,[B.qT,B.r0,B.r1,B.r2,B.qV,B.qU,B.qW])
w(A.a0,[B.r_,B.qZ,B.qX,B.qY])
x(B.r3,A.ai)})()
A.X(b.typeUniverse,JSON.parse('{"ch":{"y":[],"e":[]},"k_":{"u":["ch"],"u.T":"ch"}}'))
var y={l:A.i("S<cH,aq>"),f:A.i("aR"),F:A.i("v<e>"),B:A.i("v<a1>"),w:A.i("d"),y:A.i("aq"),s:A.i("a1"),v:A.i("~"),a:A.i("~(F)")};(function constants(){var x=a.makeConstList
C.hS=new F.W("date","Date",2,!0)
C.hP=new F.W("amount","Amount",2,!0)
C.ee=x([C.hS,N.c3,C.hP,O.c6],A.i("v<W>"))
C.fF=new A.aD("Paid","hs-billing-history__status-badge hs-billing-history__status-badge--paid")
C.fG=new A.aD("Refunded","hs-billing-history__status-badge hs-billing-history__status-badge--refunded")
C.fJ=new A.aD("Pending","hs-billing-history__status-badge hs-billing-history__status-badge--pending")})()};
(a=>{a["xPoRVqb+u8lCeMYm88Cc5x7AO2k="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_171.part.js.map
