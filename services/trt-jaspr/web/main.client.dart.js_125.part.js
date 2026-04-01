((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,I,B={
AK(d){var x
y.P.a(d)
x=A.r(d.j(0,"type"))
return new B.bp(A.r(d.j(0,"description")),F.aQ(A.r(d.j(0,"timestamp"))),x)},
bp:function bp(d,e,f){this.a=d
this.b=e
this.c=f},
eF:function eF(){},
hY:function hY(d){this.a=d},
dq:function dq(d){this.a=d},
B_(d){var x,w,v=y.h.a(d.j(0,"usage_by_type"))
if(v==null)v=A.a8(y.N,y.z)
x=v.fd(0,new B.nq(),y.N,y.S)
w=A.A(d.j(0,"file_count"))
A.A(d.j(0,"directory_count"))
return new B.np(w,A.A(d.j(0,"storage_used_bytes")),A.A(d.j(0,"storage_total_bytes")),A.A(d.j(0,"active_share_count")),A.r(d.j(0,"plan_name")),x)},
np:function np(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
nq:function nq(){},
ff:function ff(){},
ir:function ir(d){this.a=d},
dK:function dK(d){this.a=d},
BW(d){var x,w,v,u,t
y.P.a(d)
x=A.q(d.j(0,"expires_at"))
w=A.r(d.j(0,"name"))
v=A.A(d.j(0,"download_count"))
u=A.ak(d.j(0,"is_public_link"))
t=A.r(d.j(0,"status"))
if(x!=null)F.aQ(x)
return new B.bD(w,v,u,t)},
AZ(d){y.P.a(d)
A.r(d.j(0,"type"))
return new B.bs(A.r(d.j(0,"message")),A.r(d.j(0,"action_path")),A.r(d.j(0,"action_label")),A.r(d.j(0,"severity")))},
bD:function bD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bs:function bs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hg:function hg(){},
jv:function jv(d,e){this.a=d
this.b=e},
el:function el(d){this.a=d},
nm:function nm(){},
nn:function nn(d,e){this.a=d
this.b=e},
no:function no(d){this.a=d},
fe:function fe(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
fg:function fg(d,e){this.a=d
this.b=e},
bt:function bt(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
AY(){return new B.ck(null)},
ck:function ck(d){this.a=d},
ms:function ms(){this.d=$
this.c=this.a=null},
rn:function rn(d){this.a=d},
rk:function rk(){},
rl:function rl(d,e){this.a=d
this.b=e},
rm:function rm(d,e){this.a=d
this.b=e},
Dm(d){var x,w,v=null,u=d.c
if(u===C.A||u===C.z)return B.zK("Loading activity\u2026")
if(u===C.D)return B.zK("Failed to load activity")
u=d.a
if(u.length===0){u=y.i
return new A.b("div",v,"hs-dashboard__activity-empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-dashboard__activity-empty-icon",v,v,v,A.a([new A.c("history",v)],u),v),new A.b("p",v,"hs-dashboard__activity-empty-text",v,v,v,A.a([new A.c("No recent activity",v)],u),v)],u),v)}x=A.L(u)
w=x.h("J<1,e>")
u=A.B(new A.J(u,x.h("e(1)").a(B.F1()),w),w.h("N.E"))
return new A.b("ul",v,"hs-dashboard__activity-list",v,v,v,u,v)},
zK(d){var x=null,w=y.i
return new A.b("div",x,"hs-dashboard__activity-placeholder",x,x,x,A.a([new A.b("p",x,"hs-dashboard__activity-empty-text",x,x,x,A.a([new A.c(d,x)],w),x)],w),x)},
Dn(d){var x,w="span",v=null
y.c.a(d)
x=y.i
return new A.b("li",v,"hs-dashboard__activity-item",v,v,v,A.a([new A.b(w,v,"material-icons hs-dashboard__activity-icon hs-dashboard__activity-icon--"+d.c,v,v,v,A.a([new A.c(d.gqo(),v)],x),v),new A.b("div",v,"hs-dashboard__activity-info",v,v,v,A.a([new A.b(w,v,"hs-dashboard__activity-description",v,v,v,A.a([new A.c(d.a,v)],x),v),new A.b(w,v,"hs-dashboard__activity-time",v,v,v,A.a([new A.c(B.EP(d.b),v)],x),v)],x),v)],x),v)},
EP(d){var x,w,v=new K.aU(Date.now(),0,!1).hY().c7(d.hY()).a
if(D.d.S(v,1e6)<60)return"just now"
x=D.d.S(v,6e7)
if(x<60){v=x===1?"minute":"minutes"
return""+x+" "+v+" ago"}x=D.d.S(v,36e8)
if(x<24){v=x===1?"hour":"hours"
return""+x+" "+v+" ago"}w=D.d.S(v,864e8)
v=w===1?"day":"days"
return""+w+" "+v+" ago"},
Dq(d){var x,w,v=null,u=d.x
if(u===C.A||u===C.z)return B.zL("Loading shares\u2026")
if(u===C.D)return B.zL("Failed to load shares")
u=d.w
if(u.length===0){u=y.i
return new A.b("div",v,"hs-dashboard__shares-empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-dashboard__shares-empty-icon",v,v,v,A.a([new A.c("share",v)],u),v),new A.b("p",v,"hs-dashboard__shares-empty-text",v,v,v,A.a([new A.c("No active shares",v)],u),v)],u),v)}x=A.L(u)
w=x.h("J<1,e>")
u=A.B(new A.J(u,x.h("e(1)").a(B.GQ()),w),w.h("N.E"))
return new A.b("ul",v,"hs-dashboard__shares-list",v,v,v,u,v)},
zL(d){var x=null,w=y.i
return new A.b("div",x,"hs-dashboard__shares-placeholder",x,x,x,A.a([new A.b("p",x,"hs-dashboard__shares-empty-text",x,x,x,A.a([new A.c(d,x)],w),x)],w),x)},
Dp(d){var x,w,v,u,t,s="span",r=null
y.d.a(d)
x=d.c?"link":"share"
w=d.d
v=d.b
u=v===1?"":"s"
t=y.i
return new A.b("li",r,"hs-dashboard__share-item",r,r,r,A.a([new A.b(s,r,"material-icons hs-dashboard__share-icon",r,r,r,A.a([new A.c(x,r)],t),r),new A.b("div",r,"hs-dashboard__share-info",r,r,r,A.a([new A.b(s,r,"hs-dashboard__share-name",r,r,r,A.a([new A.c(d.a,r)],t),r),new A.b(s,r,"hs-dashboard__share-downloads",r,r,r,A.a([new A.c(""+v+" download"+u,r)],t),r)],t),r),new A.b(s,r,"hs-dashboard__share-badge "+("hs-dashboard__share-badge--"+w),r,r,r,A.a([new A.c(B.EV(w),r)],t),r)],t),r)},
EV(d){var x
A:{if("active"===d){x="Active"
break A}if("expiring"===d){x="Expiring"
break A}if("expired"===d){x="Expired"
break A}x=d
break A}return x},
F9(d){var x,w,v=null,u="hs-dashboard__notifications-empty-text",t=d.x
if(t===C.A||t===C.z){t=y.i
return B.y9(A.a([new A.b("div",v,"hs-dashboard__notifications-placeholder",v,v,v,A.a([new A.b("p",v,u,v,v,v,A.a([new A.c("Loading notifications\u2026",v)],t),v)],t),v)],t))}t=d.y
if(t.length===0){t=y.i
return B.y9(A.a([new A.b("div",v,"hs-dashboard__notifications-empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-dashboard__notifications-empty-icon",v,v,v,A.a([new A.c("notifications_none",v)],t),v),new A.b("p",v,u,v,v,v,A.a([new A.c("No notifications",v)],t),v)],t),v)],t))}x=A.L(t)
w=x.h("J<1,e>")
t=A.B(new A.J(t,x.h("e(1)").a(B.GP()),w),w.h("N.E"))
return B.y9(A.a([new A.b("ul",v,"hs-dashboard__notifications-list",v,v,v,t,v)],y.i))},
y9(d){var x=null,w=y.i
w=A.a([new A.b("h2",x,"hs-dashboard__section-title",x,x,x,A.a([new A.c("Notifications",x)],w),x)],w)
D.b.a5(w,d)
return new E.as(new A.b("div",x,"hs-dashboard__notifications-section",x,x,x,w,x),x)},
Do(d){var x,w,v,u,t=null
y.u.a(d)
x=d.e
A:{if("error"===x){w="error"
break A}if("warning"===x){w="warning"
break A}w="info"
break A}v=y.i
u=y.N
return new A.b("li",t,"hs-dashboard__notification "+("hs-dashboard__notification--"+x),t,t,t,A.a([new A.b("span",t,"material-icons hs-dashboard__notification-icon",t,t,t,A.a([new A.c(w,t)],v),t),new A.b("div",t,"hs-dashboard__notification-info",t,t,t,A.a([new A.b("span",t,"hs-dashboard__notification-message",t,t,t,A.a([new A.c(d.b,t)],v),t),new A.b("a",t,"hs-dashboard__notification-action",t,A.p(["href",d.c],u,u),t,A.a([new A.c(d.d,t)],v),t)],v),t)],v),t)}},C,F,G,K,L,M,H,N,E
J=c[1]
A=c[0]
D=c[2]
I=c[39]
B=a.updateHolder(c[14],B)
C=c[79]
F=c[47]
G=c[58]
K=c[50]
L=c[56]
M=c[61]
H=c[57]
N=c[60]
E=c[54]
B.bp.prototype={
gqo(){var x,w=this.c
A:{if("file_uploaded"===w){x="upload"
break A}if("file_downloaded"===w){x="download"
break A}if("file_deleted"===w){x="delete"
break A}if("share_created"===w){x="share"
break A}if("share_revoked"===w){x="link_off"
break A}if("login_new_device"===w){x="login"
break A}x="info"
break A}return x}}
B.eF.prototype={}
B.hY.prototype={}
B.dq.prototype={}
B.np.prototype={
gbK(){var x=this.d
if(x===0)return 0
return D.f.bv(this.c/x,0,1)},
gqX(){var x=this.gbK()*100
if(x>=90)return"critical"
if(x>=80)return"warning"
return"normal"}}
B.ff.prototype={}
B.ir.prototype={}
B.dK.prototype={}
B.bD.prototype={}
B.bs.prototype={}
B.hg.prototype={}
B.jv.prototype={}
B.el.prototype={}
B.nm.prototype={
b0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$b0=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.j(u.bQ("/api/dashboard/activity"),$async$b0)
case 3:k=e
if(k==null){v=C.cf
x=1
break}t=null
try{t=y.P.a(D.c.q(k,null))}catch(j){v=C.cg
x=1
break}try{p=y.g.a(J.w(t,"items"))
s=p==null?[]:p
o=J.bo(s,y.P)
n=o.$ti
m=n.h("J<P.E,bp>")
l=A.B(new A.J(o,n.h("bp(P.E)").a(B.F0()),m),m.h("N.E"))
r=l
v=new B.hY(r)
x=1
break}catch(j){v=C.ch
x=1
break}case 1:return A.l(v,w)}})
return A.m($async$b0,w)},
b4(){var x=0,w=A.n(y.q),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$b4=A.o(function(a0,a1){if(a0===1)return A.k(a1,w)
for(;;)switch(x){case 0:x=3
return A.j(u.bQ("/api/dashboard/shares"),$async$b4)
case 3:e=a1
if(e==null){v=C.h3
x=1
break}t=null
try{t=y.P.a(D.c.q(e,null))}catch(d){v=C.h5
x=1
break}try{n=y.g
m=n.a(J.w(t,"top_shares"))
s=m==null?[]:m
l=y.P
k=J.bo(s,l)
j=k.$ti
i=j.h("J<P.E,bD>")
h=A.B(new A.J(k,j.h("bD(P.E)").a(B.GN()),i),i.h("N.E"))
r=h
g=n.a(J.w(t,"notifications"))
q=g==null?[]:g
n=J.bo(q,l)
l=n.$ti
k=l.h("J<P.E,bs>")
f=A.B(new A.J(n,l.h("bs(P.E)").a(B.GM()),k),k.h("N.E"))
p=f
v=new B.jv(r,p)
x=1
break}catch(d){v=C.h4
x=1
break}case 1:return A.l(v,w)}})
return A.m($async$b4,w)},
a9(){var x=0,w=A.n(y.F),v,u=this,t,s,r,q
var $async$a9=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.j(u.bQ("/api/dashboard/stats"),$async$a9)
case 3:q=e
if(q==null){v=C.dE
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.dG
x=1
break}try{s=B.B_(t)
v=new B.ir(s)
x=1
break}catch(p){v=C.dF
x=1
break}case 1:return A.l(v,w)}})
return A.m($async$a9,w)},
bQ(d){var x=0,w=A.n(y.T),v,u,t,s
var $async$bQ=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=new A.M($.R,y.s)
t=new A.a3(u,y.C)
s=A.f(new b.G.XMLHttpRequest())
s.open("GET",d)
s.onload=A.a_(new B.nn(t,s))
s.onerror=A.a_(new B.no(t))
s.send()
v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$bQ,w)}}
B.fe.prototype={
b0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$b0=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.pe(C.A))
x=2
return A.j(v.x.b0(),$async$b0)
case 2:u=e
A:{t=u instanceof B.hY
s=t?u.a:null
if(t){v.i(v.c.pt(s,C.ad))
break A}t=u instanceof B.dq
r=t?u.a:null
if(t)v.i(v.c.ps(r,C.D))}return A.l(null,w)}})
return A.m($async$b0,w)},
b4(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q
var $async$b4=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.po(C.A))
x=2
return A.j(v.x.b4(),$async$b4)
case 2:u=e
A:{t=u instanceof B.jv
if(t){s=u.a
r=u.b}else{s=null
r=null}if(t){v.i(v.c.pU(r,s,C.ad))
break A}t=u instanceof B.el
q=t?u.a:null
if(t)v.i(v.c.pM(q,C.D))}return A.l(null,w)}})
return A.m($async$b4,w)},
a9(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$a9=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.a2(C.A))
x=2
return A.j(v.x.a9(),$async$a9)
case 2:u=e
A:{t=u instanceof B.ir
s=t?u.a:null
if(t){v.i(v.c.pN(s,C.ad))
break A}t=u instanceof B.dK
r=t?u.a:null
if(t)v.i(v.c.W(r,C.D))}return A.l(null,w)}})
return A.m($async$a9,w)}}
B.fg.prototype={
C(){return"DashboardStatus."+this.b}}
B.bt.prototype={
aS(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r,q,p,o=this
y.R.a(e)
y.n.a(j)
y.e.a(h)
x=m==null?o.f:m
w=l==null?o.e:l
v=g==null?o.d:g
u=f==null?o.c:f
t=e==null?o.a:e
s=d==null?o.b:d
r=k==null?o.x:k
q=j==null?o.w:j
p=i==null?o.r:i
return new B.bt(t,s,u,v,w,x,p,q,r,h==null?o.y:h)},
a2(d){var x=null
return this.aS(x,x,x,x,x,x,x,x,x,d)},
W(d,e){var x=null
return this.aS(x,x,x,d,x,x,x,x,x,e)},
po(d){var x=null
return this.aS(x,x,x,x,x,x,x,d,x,x)},
pU(d,e,f){var x=null
return this.aS(x,x,x,x,d,x,e,f,x,x)},
pM(d,e){var x=null
return this.aS(x,x,x,x,x,d,x,e,x,x)},
pe(d){var x=null
return this.aS(x,x,d,x,x,x,x,x,x,x)},
pt(d,e){var x=null
return this.aS(x,d,e,x,x,x,x,x,x,x)},
ps(d,e){var x=null
return this.aS(d,x,e,x,x,x,x,x,x,x)},
pN(d,e){var x=null
return this.aS(x,x,x,x,x,x,x,x,d,e)}}
B.ck.prototype={
B(){return new B.ms()}}
B.ms.prototype={
F(){var x,w=this
w.G()
x=new B.fe(new B.nm(),N.m,C.dH)
w.d=x
x.a9()
w.d.b0()
w.d.b4()},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
n(d){var x=this.d
x===$&&A.h()
return new H.S(x,new B.rn(this),null,y.m)},
kw(d){var x,w,v,u,t,s,r,q=this,p=null,o="div",n="Active Shares",m="hs-dashboard__section-title",l="span",k=d.f
if(k===C.A||k===C.z){k=y.i
return new A.b(o,p,"hs-dashboard__loading",p,p,p,A.a([new A.b("p",p,p,p,p,p,A.a([new A.c("Loading dashboard\u2026",p)],k),p)],k),p)}if(k===C.D)return q.fZ(d.d)
x=d.e
if(x==null)return q.fZ("No dashboard data available")
k=x.c
w=q.bP(k)
v=x.d
u=q.bP(v)
t=y.i
s=A.a([q.cI(D.f.a0(x.gbK()*100,0)+"%","storage","Storage Used",w+" / "+u),q.cI("files","insert_drive_file","Total Files",q.h3(x.a)),q.cI("shares","share",n,q.h3(x.e)),q.cI("subscription","workspace_premium","Current Plan",x.f)],t)
r=A.a([new A.c("Storage",p)],t)
w=q.bP(k)
u=q.bP(v)
v=x.gqX()
k=y.N
return new A.b(o,p,"hs-dashboard__content",p,p,p,A.a([new A.b(o,p,"hs-dashboard__stats-row",p,p,p,s,p),new E.as(new A.b(o,p,"hs-dashboard__storage-section",p,p,p,A.a([new A.b("h2",p,m,p,p,p,r,p),new A.b(o,p,"hs-dashboard__quota",p,p,p,A.a([new A.b(o,p,"hs-dashboard__quota-labels",p,p,p,A.a([new A.b(l,p,"hs-dashboard__quota-used",p,p,p,A.a([new A.c(w+" used",p)],t),p),new A.b(l,p,"hs-dashboard__quota-total",p,p,p,A.a([new A.c(u,p)],t),p)],t),p),new A.b(o,p,"hs-dashboard__quota-bar "+("hs-dashboard__quota-bar--"+v),p,p,p,A.a([new I.de(x.gbK(),8,p)],t),p)],t),p),q.iW(x),q.iX(x)],t),p),p),new E.as(new A.b(o,p,"hs-dashboard__activity-section",p,p,p,A.a([new A.b(o,p,"hs-dashboard__activity-header",p,p,p,A.a([new A.b("h2",p,"hs-dashboard__activity-title",p,p,p,A.a([new A.c("Recent Activity",p)],t),p),new A.b(l,p,"hs-dashboard__activity-view-all",p,p,p,A.a([new A.c("View all",p)],t),p)],t),p),B.Dm(d)],t),p),p),new E.as(new A.b(o,p,"hs-dashboard__shares-section",p,p,p,A.a([new A.b(o,p,"hs-dashboard__shares-header",p,p,p,A.a([new A.b("h2",p,m,p,p,p,A.a([new A.c(n,p)],t),p),new A.b("a",p,"hs-dashboard__shares-view-all",p,A.p(["href","/shares"],k,k),p,A.a([new A.c("View all shares",p)],t),p)],t),p),B.Dq(d)],t),p),p),B.F9(d)],t),p)},
cI(d,e,f,g){var x="div",w=null,v=y.i
return new E.as(new A.b(x,w,"hs-dashboard__stat-card",w,w,w,A.a([new A.b(x,w,"hs-dashboard__stat-icon-row",w,w,w,A.a([new A.b("span",w,"material-icons hs-dashboard__stat-icon",w,w,w,A.a([new A.c(e,w)],v),w)],v),w),new A.b(x,w,"hs-dashboard__stat-value",w,w,w,A.a([new A.c(g,w)],v),w),new A.b(x,w,"hs-dashboard__stat-label",w,w,w,A.a([new A.c(f,w)],v),w),new A.b(x,w,"hs-dashboard__stat-detail",w,w,w,A.a([new A.c(d,w)],v),w)],v),w),w)},
iW(d){var x,w=null,v="hs-dashboard__breakdown-bar",u=d.r,t=new A.iR(u,A.K(u).h("iR<2>")).hL(0,0,new B.rk(),y.S)
if(t===0)return new A.b("div",w,v,w,w,w,A.a([],y.i),w)
u=y.Y
x=A.B(new A.J(C.b9,y.M.a(new B.rl(d,t)),u),u.h("N.E"))
return new A.b("div",w,v,w,w,w,x,w)},
iX(d){var x=null,w=y.Y,v=A.B(new A.J(C.b9,y.M.a(new B.rm(this,d)),w),w.h("N.E"))
return new A.b("div",x,"hs-dashboard__breakdown-legend",x,x,x,v,x)},
fZ(d){var x,w=null,v=d==null?"Failed to load dashboard":d,u=y.i
v=A.a([new A.c(v,w)],u)
x=this.d
x===$&&A.h()
return new A.b("div",w,"hs-dashboard__error",w,w,w,A.a([new A.b("p",w,w,w,w,w,v,w),new L.C("Try again",M.e,x.gqC(),!1,!1,w)],u),w)},
bP(d){if(d<1024)return""+d+" B"
if(d<1048576)return D.f.a0(d/1024,1)+" KB"
if(d<1073741824)return D.f.a0(d/1048576,1)+" MB"
return D.f.a0(d/1073741824,1)+" GB"},
h3(d){if(d>=1e6)return D.f.a0(d/1e6,1)+"M"
if(d>=1000)return D.f.a0(d/1000,1)+"K"
return D.d.m(d)}}
var z=a.updateTypes(["Y<~>()","e(O,bt)","bp(z<d,@>)","bD(z<d,@>)","bs(z<d,@>)","e(bp)","e(bD)","e(bs)"])
B.nq.prototype={
$2(d,e){return new A.a9(A.r(d),A.A(e),y.O)},
$S:63}
B.nn.prototype={
$1(d){return this.a.A(A.r(this.b.responseText))},
$S:5}
B.no.prototype={
$1(d){return this.a.A(null)},
$S:5}
B.rn.prototype={
$2(d,e){var x,w=null
y.b.a(e)
x=y.i
return new A.b("div",w,"hs-dashboard",w,w,w,A.a([new A.b("div",w,"hs-dashboard__header",w,w,w,A.a([new A.b("h1",w,"hs-dashboard__title",w,w,w,A.a([new A.c("Dashboard",w)],x),w)],x),w),this.a.kw(e)],x),w)},
$S:z+1}
B.rk.prototype={
$2(d,e){return A.A(d)+A.A(e)},
$S:11}
B.rl.prototype={
$1(d){var x,w,v=null
A.r(d)
x=this.a.r.j(0,d)
if(x==null)x=0
w=y.N
return new A.b("div",v,"hs-dashboard__breakdown-segment hs-dashboard__breakdown-segment--"+d,v,A.p(["style","width: "+D.f.a0(x/this.b*100,2)+"%"],w,w),v,A.a([],y.i),v)},
$S:20}
B.rm.prototype={
$1(d){var x,w,v,u=null,t="span"
A.r(d)
x=this.b.r.j(0,d)
if(x==null)x=0
w=C.eJ.j(0,d)
if(w==null)w=d
v=y.i
return new A.b("div",u,"hs-dashboard__legend-item",u,u,u,A.a([new A.b(t,u,"hs-dashboard__legend-dot hs-dashboard__legend-dot--"+d,u,u,u,A.a([],v),u),new A.b(t,u,"hs-dashboard__legend-label",u,u,u,A.a([new A.c(w,u)],v),u),new A.b(t,u,"hs-dashboard__legend-value",u,u,u,A.a([new A.c(this.a.bP(x),u)],v),u)],v),u)},
$S:20};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(B,"F0","AK",2)
x(B,"GN","BW",3)
x(B,"GM","AZ",4)
w(B.fe.prototype,"gqC","a9",0)
x(B,"F1","Dn",5)
x(B,"GQ","Dp",6)
x(B,"GP","Do",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.bp,B.eF,B.np,B.ff,B.bD,B.bs,B.hg,B.nm,B.bt])
x(B.eF,[B.hY,B.dq])
x(A.ai,[B.nq,B.rn,B.rk])
x(B.ff,[B.ir,B.dK])
x(B.hg,[B.jv,B.el])
x(A.a0,[B.nn,B.no,B.rl,B.rm])
w(B.fe,H.ae)
w(B.fg,A.ar)
w(B.ck,G.y)
w(B.ms,G.u)})()
A.X(b.typeUniverse,JSON.parse('{"hY":{"eF":[]},"dq":{"eF":[]},"ir":{"ff":[]},"dK":{"ff":[]},"jv":{"hg":[]},"el":{"hg":[]},"fe":{"ae":["bt"],"a2":["bt"],"aK":["bt"],"a2.0":"bt"},"ck":{"y":[],"e":[]},"ms":{"u":["ck"],"u.T":"ck"}}'))
var y=(function rtii(){var x=A.i
return{c:x("bp"),_:x("eF"),m:x("S<fe,bt>"),M:x("e(d)"),u:x("bs"),F:x("ff"),b:x("bt"),i:x("v<e>"),O:x("a9<d,t>"),P:x("z<d,@>"),Y:x("J<d,e>"),d:x("bD"),q:x("hg"),N:x("d"),C:x("a3<d?>"),s:x("M<d?>"),z:x("@"),S:x("t"),R:x("H<bp>?"),e:x("H<bs>?"),n:x("H<bD>?"),g:x("H<@>?"),h:x("z<d,@>?"),T:x("d?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.cf=new B.dq("Network error")
C.cg=new B.dq("Unexpected server response")
C.ch=new B.dq("Failed to parse activity data")
C.dE=new B.dK("Network error")
C.dF=new B.dK("Failed to parse dashboard data")
C.dG=new B.dK("Unexpected server response")
C.es=x([],A.i("v<bp>"))
C.z=new B.fg(0,"idle")
C.et=x([],A.i("v<bD>"))
C.eu=x([],A.i("v<bs>"))
C.dH=new B.bt(C.es,null,C.z,null,null,C.z,null,C.et,C.z,C.eu)
C.A=new B.fg(1,"loading")
C.ad=new B.fg(2,"loaded")
C.D=new B.fg(3,"error")
C.b9=x(["documents","images","videos","audio","archives","other"],A.i("v<d>"))
C.eZ={documents:0,images:1,videos:2,audio:3,archives:4,other:5}
C.eJ=new A.ac(C.eZ,["Documents","Images","Videos","Audio","Archives","Other"],A.i("ac<d,d>"))
C.h3=new B.el("Network error")
C.h4=new B.el("Failed to parse share summary data")
C.h5=new B.el("Unexpected server response")})()};
(a=>{a["WE6tX+QakKLByACiK1NQd3o7fxc="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_125.part.js.map
