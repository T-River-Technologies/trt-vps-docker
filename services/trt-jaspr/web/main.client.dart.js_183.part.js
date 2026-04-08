((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,I,D,K,B={
CX(){return new B.cD(null)},
cD:function cD(d){this.a=d},
l0:function l0(){this.d=$
this.c=this.a=null},
v6:function v6(d){this.a=d},
v4:function v4(){},
v2:function v2(){},
v3:function v3(){},
v5:function v5(d,e){this.a=d
this.b=e}},H,E,F,G,L
A=c[0]
C=c[2]
I=c[36]
D=c[93]
K=c[42]
B=a.updateHolder(c[18],B)
H=c[65]
E=c[60]
F=c[62]
G=c[68]
L=c[64]
B.cD.prototype={
C(){return new B.l0()}}
B.l0.prototype={
F(){this.G()
var x=I.A6(new K.jw())
this.d=x
x.cq()},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
hE(){var x,w,v,u,t
for(x=A.q(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=C.a.V(u,"=")
if(t<0)continue
if(C.a.t(C.a.H(u,0,t))==="hs_csrf")return C.a.t(C.a.N(u,t+1))}return""},
no(){var x=this.d
x===$&&A.i()
x.b8(this.hE())},
ni(d){var x,w=d.b
A:{x="/shares"
if("file.uploaded"===w||"file.downloaded"===w||"file.deleted"===w){x="/files"
break A}if("file.shared"===w||"share.received"===w){x="/shared-with-me"
break A}if("share.created"===w)break A
if("share.revoked"===w)break A
if("user.invited"===w){x="/admin/users"
break A}if("storage.quota_warning"===w){x="/subscription"
break A}if("payment.succeeded"===w||"payment.failed"===w){x="/subscription/billing"
break A}x=""
break A}return x},
p(d){var x=this.d
x===$&&A.i()
return new L.P(x,new B.v6(this),null,y.u)},
nm(d){var x,w=null,v=C.b.f1(d.e,new B.v4()),u=y.F
u=A.a([new A.b("h1",w,"hs-notification-wall__title",w,w,w,A.a([new A.c("Notifications",w)],u),w)],u)
if(v){x=d.d
x=x!==D.a4&&x!==D.aE}else x=!1
if(x)u.push(new F.D("Mark all as read",G.e,this.gnn(),!1,!1,w))
return new A.b("div",w,"hs-notification-wall__header",w,w,w,u,w)},
nl(d){var x,w,v=null,u=d.d
if(u===D.aE||u===D.a4){u=y.F
return new A.b("div",v,"hs-notification-wall__loading",v,v,v,A.a([new A.b("p",v,v,v,v,v,A.a([new A.c("Loading notifications\u2026",v)],u),v)],u),v)}if(u===D.cn&&d.e.length===0){u=d.w
if(u==null)u="Failed to load notifications"
x=y.F
u=A.a([new A.c(u,v)],x)
w=this.d
w===$&&A.i()
return new A.b("div",v,"hs-notification-wall__error",v,v,v,A.a([new A.b("p",v,v,v,v,v,u,v),new F.D("Try again",G.e,w.gru(),!1,!1,v)],x),v)}if(d.e.length===0){u=y.F
return new A.b("div",v,"hs-notification-wall__empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-notification-wall__empty-icon",v,v,v,A.a([new A.c("notifications_none",v)],u),v),new A.b("p",v,"hs-notification-wall__empty-text",v,v,v,A.a([new A.c("You have no notifications yet.",v)],u),v)],u),v)}return this.jz(d)},
jz(d){var x,w,v,u,t,s=null,r="div",q="hs-notification-wall__section-label",p=d.e,o=A.L(p),n=o.h("F(1)")
o=o.h("T<1>")
x=o.h("y.E")
w=A.A(new A.T(p,n.a(new B.v2()),o),x)
v=A.A(new A.T(p,n.a(new B.v3()),o),x)
o=y.F
n=A.a([],o)
if(w.length!==0){x=A.a([new A.b(r,s,q,s,s,s,A.a([new A.c("Unread",s)],o),s)],o)
for(u=w.length,t=0;t<w.length;w.length===u||(0,A.bl)(w),++t)x.push(this.hD(w[t],!0))
C.b.a4(n,x)}if(v.length!==0){x=A.a([new A.b(r,s,q,s,s,s,A.a([new A.c("Earlier",s)],o),s)],o)
for(u=v.length,t=0;t<v.length;v.length===u||(0,A.bl)(v),++t)x.push(this.hD(v[t],!1))
C.b.a4(n,x)}x=d.d===D.aF
if(x)n.push(new A.b(r,s,"hs-notification-wall__loading-more",s,s,s,A.a([new A.b("p",s,s,s,s,s,A.a([new A.c("Loading\u2026",s)],o),s)],o),s))
if(p.length<d.r&&!x){p=this.d
p===$&&A.i()
n.push(new A.b(r,s,"hs-notification-wall__load-more",s,s,s,A.a([new F.D("Load more",G.e,p.grt(),!1,!1,s)],o),s))}return new A.b(r,s,"hs-notification-wall__content",s,s,s,n,s)},
hD(d,e){var x=null,w="div",v=e?"hs-notification-wall__item hs-notification-wall__item--unread":"hs-notification-wall__item",u=y.w,t=A.p(["click",new B.v5(this,d)],u,y.a),s=e?" hs-notification-wall__item-icon--unread":"",r=y.F
s=A.a([new A.b("span",x,"material-icons hs-notification-wall__item-icon"+s,x,x,x,A.a([new A.c(d.grg(),x)],r),x),new A.b(w,x,"hs-notification-wall__item-body",x,x,x,A.a([new A.b(w,x,"hs-notification-wall__item-title",x,x,x,A.a([new A.c(d.gt7(),x)],r),x),new A.b(w,x,"hs-notification-wall__item-description",x,x,x,A.a([new A.c(d.gr_(),x)],r),x),new A.b(w,x,"hs-notification-wall__item-time",x,x,x,A.a([new A.c(this.oi(d.e),x)],r),x)],r),x)],r)
if(e)s.push(new A.b("span",x,"hs-notification-wall__item-dot",x,A.p(["aria-hidden","true"],u,u),x,A.a([],r),x))
return new A.b("button",x,v,x,x,t,s,x)},
oi(d){var x,w=new E.aP(Date.now(),0,!1).cD().bF(d.cD()).a
if(C.d.O(w,1e6)<60)return"just now"
x=C.d.O(w,6e7)
if(x<60){w=x===1?"minute":"minutes"
return""+x+" "+w+" ago"}x=C.d.O(w,36e8)
if(x<24){w=x===1?"hour":"hours"
return""+x+" "+w+" ago"}w=C.d.O(w,864e8)
if(w<7){x=w===1?"day":"days"
return""+w+" "+x+" ago"}return""+E.c_(d)+"-"+C.a.bb(C.d.m(E.bZ(d)),2,"0")+"-"+C.a.bb(C.d.m(E.bY(d)),2,"0")}}
var z=a.updateTypes(["F(av)","~()","e(O,aV)"])
B.v6.prototype={
$2(d,e){var x,w=null
y.e.a(e)
x=this.a
return new A.b("div",w,"hs-notification-wall",w,w,w,A.a([x.nm(e),x.nl(e)],y.F),w)},
$S:z+2}
B.v4.prototype={
$1(d){return!y.b.a(d).d},
$S:z+0}
B.v2.prototype={
$1(d){return!y.b.a(d).d},
$S:z+0}
B.v3.prototype={
$1(d){return y.b.a(d).d},
$S:z+0}
B.v5.prototype={
$1(d){var x,w,v,u
A.f(d)
x=this.a
w=this.b
if(!w.d){v=x.d
v===$&&A.i()
v.b9(w.a,x.hE())}u=x.ni(w)
if(u.length!==0)A.f(A.f(b.G.window).location).href=u
return null},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(B.l0.prototype,"gnn","no",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cD,H.x)
x(B.l0,H.u)
x(B.v6,A.ah)
w(A.Z,[B.v4,B.v2,B.v3,B.v5])})()
A.W(b.typeUniverse,JSON.parse('{"cD":{"x":[],"e":[]},"l0":{"u":["cD"],"u.T":"cD"}}'))
var y={u:A.h("P<ed,aV>"),F:A.h("v<e>"),b:A.h("av"),e:A.h("aV"),w:A.h("d"),a:A.h("~(H)")}};
(a=>{a["3nM4VpE4qI1+scuuG+sGv3uBYPE="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_183.part.js.map
