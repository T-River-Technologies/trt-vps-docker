((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
C4(){return new B.cn(null)},
cn:function cn(d){this.a=d},
ky:function ky(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=_.r=null},
rL:function rL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
rT:function rT(d,e){this.a=d
this.b=e},
rS:function rS(d){this.a=d},
rU:function rU(d,e){this.a=d
this.b=e},
rV:function rV(d){this.a=d},
rW:function rW(d){this.a=d},
rN:function rN(d){this.a=d},
rM:function rM(d){this.a=d},
rO:function rO(){},
rR:function rR(d,e){this.a=d
this.b=e},
rP:function rP(d,e){this.a=d
this.b=e},
rQ:function rQ(d,e){this.a=d
this.b=e}},C,G,D,H,F,I,M,K,L,N,O,P
A=c[0]
E=c[2]
B=a.updateHolder(c[24],B)
C=c[103]
G=c[47]
D=c[102]
H=c[65]
F=c[53]
I=c[69]
M=c[54]
K=c[62]
L=c[68]
N=c[70]
O=c[64]
P=c[75]
B.cn.prototype={
C(){return new B.ky(A.a([],y.B))}}
B.ky.prototype={
F(){this.G()
var x=G.pM(new G.hM())
this.d=x
x.bI()},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
h2(d,e){this.k(new B.rL(this,E.d.m(1000*Date.now()),d,e))},
l3(d){this.k(new B.rT(this,A.q(d)))},
nB(d){this.k(new B.rU(this,d))},
dn(){var x=0,w=A.n(y.v),v,u=this,t,s,r
var $async$dn=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.r
if(r==null){x=1
break}u.k(new B.rV(u))
t=u.d
t===$&&A.i()
x=3
return A.j(t.aJ(r.b),$async$dn)
case 3:s=u.d.c
if(s.ay===D.a0&&s.ch!=null){u.h2("Refund request failed: "+A.V(s.ch),I.h)
t=u.d
t.i(t.c.fc(D.av))}else u.h2("Refund requested successfully",I.j)
case 1:return A.l(v,w)}})
return A.m($async$dn,w)},
p(d){var x=this.d
x===$&&A.i()
return new O.P(x,new B.rW(this),null,y.l)},
jg(d){var x=this,w="Request Refund",v=null,u=x.jS(),t=x.jh(d),s=x.r
s=s!=null?'Request a refund for "'+s.d+'"? Refunds are reviewed within 5\u20137 business days.':"Request a refund for this payment?"
s=A.a([u,t,M.cS("Cancel",w,!1,x.f,s,new B.rN(x),x.gnL(),w)],y.F)
u=x.e
if(u.length!==0)s.push(new F.aS(u,x.gl2(),v))
return new A.b("div",v,"hs-billing-history",v,v,v,s,v)},
jS(){var x=null,w=y.F
return new A.b("div",x,"hs-billing-history__header",x,x,x,A.a([new A.b("div",x,"hs-billing-history__title-row",x,x,x,A.a([new A.b("h1",x,"hs-billing-history__title",x,x,x,A.a([new A.c("Billing History",x)],w),x),new K.D("Back to Subscription",L.e,new B.rO(),!1,!1,x)],w),x),new A.b("p",x,"hs-billing-history__subtitle",x,x,x,A.a([new A.c("View your past payments and download receipts.",x)],w),x)],w),x)},
jh(d){var x,w,v=null,u=d.as
if(u===D.G||u===D.O){u=y.F
return new A.b("div",v,"hs-billing-history__loading",v,v,v,A.a([new A.b("p",v,v,v,v,v,A.a([new A.c("Loading billing history\u2026",v)],u),v)],u),v)}if(u===D.H){u=d.ax
if(u==null)u="Failed to load billing history"
x=y.F
u=A.a([new A.c(u,v)],x)
w=this.d
w===$&&A.i()
return new A.b("div",v,"hs-billing-history__error",v,v,v,A.a([new A.b("p",v,v,v,v,v,u,v),new K.D("Try again",L.e,w.grr(),!1,!1,v)],x),v)}if(d.at.length===0){u=y.F
return new A.b("div",v,"hs-billing-history__empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-billing-history__empty-icon",v,v,v,A.a([new A.c("receipt_long",v)],u),v),new A.b("p",v,"hs-billing-history__empty-text",v,v,v,A.a([new A.c("No billing history yet.",v)],u),v)],u),v)}return this.kz(d)},
kz(d){var x=null
return new A.b("div",x,"hs-billing-history__table-wrapper",x,x,x,A.a([F.cd(this.gjv(),C.eu,d.at,"No invoices found",x,new B.rR(this,d),this.gp_(),y.f)],y.F),x)},
jw(d,e){var x,w=null
y.f.a(d)
A:{if("date"===e){x=new A.c(d.c,w)
break A}if("description"===e){x=new A.b("span",w,"hs-billing-history__description",w,w,w,A.a([new A.c(d.d,w)],y.F),w)
break A}if("amount"===e){x=new A.c(this.ji(d.e,d.f),w)
break A}if("status"===e){x=this.kv(d.r)
break A}x=new A.c("",w)
break A}return x},
p0(d,e){var x
y.f.a(d)
A:{if("date"===e){x=d.c
break A}if("amount"===e){x=d.e
break A}x=null
break A}return x},
kr(d,e){var x,w,v,u,t,s,r,q=null,p="button",o="hs-billing-history__action-btn",n="material-icons"
if(e.ay===D.a_){x=this.r
x=x==null?q:x.a
w=x===d.a}else w=!1
x=y.w
v=y.a
u=y.F
t=A.a([new A.b(p,q,o,q,A.p(["type","button","title","Download receipt"],x,x),A.p(["click",new B.rP(this,d)],x,v),A.a([new A.b("span",q,n,q,q,q,A.a([new A.c("download",q)],u),q)],u),q)],u)
if(d.w){s=w?"hs-billing-history__action-btn hs-billing-history__action-btn--disabled":o
r=A.a5(x,x)
r.l(0,"type",p)
r.l(0,"title","Request refund")
if(w)r.l(0,"disabled","")
x=A.a5(x,v)
if(!w)x.l(0,"click",new B.rQ(this,d))
t.push(new A.b(p,q,s,q,r,x,A.a([new A.b("span",q,n,q,q,q,A.a([new A.c("undo",q)],u),q)],u),q))}return new A.b("div",q,"hs-billing-history__row-actions",q,q,q,t,q)},
kv(d){var x,w,v=null
switch(d.a){case 0:x=C.he
break
case 1:x=C.hi
break
case 2:x=C.hf
break
default:x=v}w=x.a
return new A.b("span",v,x.b,v,v,v,A.a([new A.c(w,v)],y.F),v)},
ji(d,e){if(d===0)return"\u20ac0.00"
return"\u20ac"+E.d.O(d,100)+"."+E.a.bb(E.d.m(E.d.bM(d,100)),2,"0")}}
var z=a.updateTypes(["~(d)","Y<~>()","e(aU,d)","am<@>?(aU,d)","F(a2)","e(O,at)","e(aU)"])
B.rL.prototype={
$0(){var x=this,w=x.a,v=A.A(w.e,y.s)
v.push(new F.a2(x.b,x.c,x.d))
w.e=v},
$S:0}
B.rT.prototype={
$0(){var x=this.a,w=x.e,v=A.L(w),u=v.h("T<1>")
w=A.A(new A.T(w,v.h("F(1)").a(new B.rS(this.b)),u),u.h("y.E"))
x.e=w},
$S:0}
B.rS.prototype={
$1(d){return y.s.a(d).a!==this.a},
$S:z+4}
B.rU.prototype={
$0(){var x=this.a
x.r=this.b
x.f=!0},
$S:0}
B.rV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.rW.prototype={
$2(d,e){return this.a.jg(y.y.a(e))},
$S:z+5}
B.rN.prototype={
$0(){var x=this.a
return x.k(new B.rM(x))},
$S:0}
B.rM.prototype={
$0(){return this.a.f=!1},
$S:0}
B.rO.prototype={
$0(){A.f(A.f(b.G.window).location).href="/subscription"
return null},
$S:0}
B.rR.prototype={
$1(d){return this.a.kr(y.f.a(d),this.b)},
$S:z+6}
B.rP.prototype={
$1(d){A.f(d)
A.a0(A.f(b.G.window).open("/api/subscription/receipt/"+this.b.a,"_blank"))
return null},
$S:1}
B.rQ.prototype={
$1(d){A.f(d)
return this.a.nB(this.b)},
$S:1};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u,v=a._instance_2u
var u
x(u=B.ky.prototype,"gl2","l3",0)
w(u,"gnL","dn",1)
v(u,"gjv","jw",2)
v(u,"gp_","p0",3)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cn,H.x)
x(B.ky,H.u)
w(A.aa,[B.rL,B.rT,B.rU,B.rV,B.rN,B.rM,B.rO])
w(A.Z,[B.rS,B.rR,B.rP,B.rQ])
x(B.rW,A.ah)})()
A.W(b.typeUniverse,JSON.parse('{"cn":{"x":[],"e":[]},"ky":{"u":["cn"],"u.T":"cn"}}'))
var y={l:A.h("P<cP,at>"),f:A.h("aU"),F:A.h("v<e>"),B:A.h("v<a2>"),w:A.h("d"),y:A.h("at"),s:A.h("a2"),v:A.h("~"),a:A.h("~(H)")};(function constants(){var x=a.makeConstList
C.it=new F.a_("date","Date",2,!0)
C.iq=new F.a_("amount","Amount",2,!0)
C.eu=x([C.it,N.cb,C.iq,P.ce],A.h("v<a_>"))
C.he=new A.aH("Paid","hs-billing-history__status-badge hs-billing-history__status-badge--paid")
C.hf=new A.aH("Refunded","hs-billing-history__status-badge hs-billing-history__status-badge--refunded")
C.hi=new A.aH("Pending","hs-billing-history__status-badge hs-billing-history__status-badge--pending")})()};
(a=>{a["e7iFAZFGDm7C8OXyWxzSLd9G9Nw="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_198.part.js.map
