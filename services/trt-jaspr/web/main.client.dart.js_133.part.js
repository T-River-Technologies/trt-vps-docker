((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,I,B={
C1(d){var x
y.P.a(d)
x=A.q(d.j(0,"type"))
return new B.bu(A.q(d.j(0,"description")),F.aQ(A.q(d.j(0,"timestamp"))),x)},
bu:function bu(d,e,f){this.a=d
this.b=e
this.c=f},
eU:function eU(){},
ip:function ip(d){this.a=d},
dD:function dD(d){this.a=d},
Ci(d){var x,w,v=y.h.a(d.j(0,"usage_by_type"))
if(v==null)v=A.a5(y.N,y.z)
x=v.fB(0,new B.o_(),y.N,y.S)
w=A.E(d.j(0,"file_count"))
A.E(d.j(0,"directory_count"))
return new B.nZ(w,A.E(d.j(0,"storage_used_bytes")),A.E(d.j(0,"storage_total_bytes")),A.E(d.j(0,"active_share_count")),A.q(d.j(0,"plan_name")),x)},
nZ:function nZ(d,e,f,g,h,i){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
o_:function o_(){},
ft:function ft(){},
iS:function iS(d){this.a=d},
dX:function dX(d){this.a=d},
Dj(d){var x,w,v,u,t
y.P.a(d)
x=A.r(d.j(0,"expires_at"))
w=A.q(d.j(0,"name"))
v=A.E(d.j(0,"download_count"))
u=A.al(d.j(0,"is_public_link"))
t=A.q(d.j(0,"status"))
if(x!=null)F.aQ(x)
return new B.bK(w,v,u,t)},
Ch(d){y.P.a(d)
A.q(d.j(0,"type"))
return new B.bx(A.q(d.j(0,"message")),A.q(d.j(0,"action_path")),A.q(d.j(0,"action_label")),A.q(d.j(0,"severity")))},
bK:function bK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bx:function bx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hF:function hF(){},
k2:function k2(d,e){this.a=d
this.b=e},
ey:function ey(d){this.a=d},
nW:function nW(){},
nX:function nX(d,e){this.a=d
this.b=e},
nY:function nY(d){this.a=d},
fs:function fs(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},
fu:function fu(d,e){this.a=d
this.b=e},
by:function by(d,e,f,g,h,i,j,k,l,m){var _=this
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
Cg(){return new B.cq(null)},
cq:function cq(d){this.a=d},
n0:function n0(){this.d=$
this.c=this.a=null},
tf:function tf(d){this.a=d},
tc:function tc(){},
td:function td(d,e){this.a=d
this.b=e},
te:function te(d,e){this.a=d
this.b=e},
EV(d){var x,w,v=null,u=d.c
if(u===C.A||u===C.z)return B.AY("Loading activity\u2026")
if(u===C.D)return B.AY("Failed to load activity")
u=d.a
if(u.length===0){u=y.i
return new A.b("div",v,"hs-dashboard__activity-empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-dashboard__activity-empty-icon",v,v,v,A.a([new A.c("history",v)],u),v),new A.b("p",v,"hs-dashboard__activity-empty-text",v,v,v,A.a([new A.c("No recent activity",v)],u),v)],u),v)}x=A.L(u)
w=x.h("G<1,e>")
u=A.A(new A.G(u,x.h("e(1)").a(B.GA()),w),w.h("M.E"))
return new A.b("ul",v,"hs-dashboard__activity-list",v,v,v,u,v)},
AY(d){var x=null,w=y.i
return new A.b("div",x,"hs-dashboard__activity-placeholder",x,x,x,A.a([new A.b("p",x,"hs-dashboard__activity-empty-text",x,x,x,A.a([new A.c(d,x)],w),x)],w),x)},
EW(d){var x,w="span",v=null
y.c.a(d)
x=y.i
return new A.b("li",v,"hs-dashboard__activity-item",v,v,v,A.a([new A.b(w,v,"material-icons hs-dashboard__activity-icon hs-dashboard__activity-icon--"+d.c,v,v,v,A.a([new A.c(d.grh(),v)],x),v),new A.b("div",v,"hs-dashboard__activity-info",v,v,v,A.a([new A.b(w,v,"hs-dashboard__activity-description",v,v,v,A.a([new A.c(d.a,v)],x),v),new A.b(w,v,"hs-dashboard__activity-time",v,v,v,A.a([new A.c(B.Gn(d.b),v)],x),v)],x),v)],x),v)},
Gn(d){var x,w,v=new K.aP(Date.now(),0,!1).cD().bF(d.cD()).a
if(D.d.O(v,1e6)<60)return"just now"
x=D.d.O(v,6e7)
if(x<60){v=x===1?"minute":"minutes"
return""+x+" "+v+" ago"}x=D.d.O(v,36e8)
if(x<24){v=x===1?"hour":"hours"
return""+x+" "+v+" ago"}w=D.d.O(v,864e8)
v=w===1?"day":"days"
return""+w+" "+v+" ago"},
EZ(d){var x,w,v=null,u=d.x
if(u===C.A||u===C.z)return B.AZ("Loading shares\u2026")
if(u===C.D)return B.AZ("Failed to load shares")
u=d.w
if(u.length===0){u=y.i
return new A.b("div",v,"hs-dashboard__shares-empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-dashboard__shares-empty-icon",v,v,v,A.a([new A.c("share",v)],u),v),new A.b("p",v,"hs-dashboard__shares-empty-text",v,v,v,A.a([new A.c("No active shares",v)],u),v)],u),v)}x=A.L(u)
w=x.h("G<1,e>")
u=A.A(new A.G(u,x.h("e(1)").a(B.Ir()),w),w.h("M.E"))
return new A.b("ul",v,"hs-dashboard__shares-list",v,v,v,u,v)},
AZ(d){var x=null,w=y.i
return new A.b("div",x,"hs-dashboard__shares-placeholder",x,x,x,A.a([new A.b("p",x,"hs-dashboard__shares-empty-text",x,x,x,A.a([new A.c(d,x)],w),x)],w),x)},
EY(d){var x,w,v,u,t,s="span",r=null
y.d.a(d)
x=d.c?"link":"share"
w=d.d
v=d.b
u=v===1?"":"s"
t=y.i
return new A.b("li",r,"hs-dashboard__share-item",r,r,r,A.a([new A.b(s,r,"material-icons hs-dashboard__share-icon",r,r,r,A.a([new A.c(x,r)],t),r),new A.b("div",r,"hs-dashboard__share-info",r,r,r,A.a([new A.b(s,r,"hs-dashboard__share-name",r,r,r,A.a([new A.c(d.a,r)],t),r),new A.b(s,r,"hs-dashboard__share-downloads",r,r,r,A.a([new A.c(""+v+" download"+u,r)],t),r)],t),r),new A.b(s,r,"hs-dashboard__share-badge "+("hs-dashboard__share-badge--"+w),r,r,r,A.a([new A.c(B.Gt(w),r)],t),r)],t),r)},
Gt(d){var x
A:{if("active"===d){x="Active"
break A}if("expiring"===d){x="Expiring"
break A}if("expired"===d){x="Expired"
break A}x=d
break A}return x},
GI(d){var x,w,v=null,u="hs-dashboard__notifications-empty-text",t=d.x
if(t===C.A||t===C.z){t=y.i
return B.zm(A.a([new A.b("div",v,"hs-dashboard__notifications-placeholder",v,v,v,A.a([new A.b("p",v,u,v,v,v,A.a([new A.c("Loading notifications\u2026",v)],t),v)],t),v)],t))}t=d.y
if(t.length===0){t=y.i
return B.zm(A.a([new A.b("div",v,"hs-dashboard__notifications-empty",v,v,v,A.a([new A.b("span",v,"material-icons hs-dashboard__notifications-empty-icon",v,v,v,A.a([new A.c("notifications_none",v)],t),v),new A.b("p",v,u,v,v,v,A.a([new A.c("No notifications",v)],t),v)],t),v)],t))}x=A.L(t)
w=x.h("G<1,e>")
t=A.A(new A.G(t,x.h("e(1)").a(B.Iq()),w),w.h("M.E"))
return B.zm(A.a([new A.b("ul",v,"hs-dashboard__notifications-list",v,v,v,t,v)],y.i))},
zm(d){var x=null,w=y.i
w=A.a([new A.b("h2",x,"hs-dashboard__section-title",x,x,x,A.a([new A.c("Notifications",x)],w),x)],w)
D.b.a4(w,d)
return new E.aw(new A.b("div",x,"hs-dashboard__notifications-section",x,x,x,w,x),x)},
EX(d){var x,w,v,u,t=null
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
I=c[44]
B=a.updateHolder(c[14],B)
C=c[86]
F=c[56]
G=c[65]
K=c[60]
L=c[62]
M=c[68]
H=c[64]
N=c[67]
E=c[59]
B.bu.prototype={
grh(){var x,w=this.c
A:{if("file_uploaded"===w){x="upload"
break A}if("file_downloaded"===w){x="download"
break A}if("file_deleted"===w){x="delete"
break A}if("share_created"===w){x="share"
break A}if("share_revoked"===w){x="link_off"
break A}if("login_new_device"===w){x="login"
break A}x="info"
break A}return x}}
B.eU.prototype={}
B.ip.prototype={}
B.dD.prototype={}
B.nZ.prototype={
gbR(){var x=this.d
if(x===0)return 0
return D.f.bp(this.c/x,0,1)},
grW(){var x=this.gbR()*100
if(x>=90)return"critical"
if(x>=80)return"warning"
return"normal"}}
B.ft.prototype={}
B.iS.prototype={}
B.dX.prototype={}
B.bK.prototype={}
B.bx.prototype={}
B.hF.prototype={}
B.k2.prototype={}
B.ey.prototype={}
B.nW.prototype={
b1(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$b1=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.j(u.bY("/api/dashboard/activity"),$async$b1)
case 3:k=e
if(k==null){v=C.co
x=1
break}t=null
try{t=y.P.a(D.c.q(k,null))}catch(j){v=C.cp
x=1
break}try{p=y.g.a(J.w(t,"items"))
s=p==null?[]:p
o=J.bt(s,y.P)
n=o.$ti
m=n.h("G<R.E,bu>")
l=A.A(new A.G(o,n.h("bu(R.E)").a(B.Gz()),m),m.h("M.E"))
r=l
v=new B.ip(r)
x=1
break}catch(j){v=C.cq
x=1
break}case 1:return A.l(v,w)}})
return A.m($async$b1,w)},
b5(){var x=0,w=A.n(y.q),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$b5=A.o(function(a0,a1){if(a0===1)return A.k(a1,w)
for(;;)switch(x){case 0:x=3
return A.j(u.bY("/api/dashboard/shares"),$async$b5)
case 3:e=a1
if(e==null){v=C.hD
x=1
break}t=null
try{t=y.P.a(D.c.q(e,null))}catch(d){v=C.hF
x=1
break}try{n=y.g
m=n.a(J.w(t,"top_shares"))
s=m==null?[]:m
l=y.P
k=J.bt(s,l)
j=k.$ti
i=j.h("G<R.E,bK>")
h=A.A(new A.G(k,j.h("bK(R.E)").a(B.Io()),i),i.h("M.E"))
r=h
g=n.a(J.w(t,"notifications"))
q=g==null?[]:g
n=J.bt(q,l)
l=n.$ti
k=l.h("G<R.E,bx>")
f=A.A(new A.G(n,l.h("bx(R.E)").a(B.In()),k),k.h("M.E"))
p=f
v=new B.k2(r,p)
x=1
break}catch(d){v=C.hE
x=1
break}case 1:return A.l(v,w)}})
return A.m($async$b5,w)},
ab(){var x=0,w=A.n(y.F),v,u=this,t,s,r,q
var $async$ab=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.j(u.bY("/api/dashboard/stats"),$async$ab)
case 3:q=e
if(q==null){v=C.dT
x=1
break}t=null
try{t=y.P.a(D.c.q(q,null))}catch(p){v=C.dV
x=1
break}try{s=B.Ci(t)
v=new B.iS(s)
x=1
break}catch(p){v=C.dU
x=1
break}case 1:return A.l(v,w)}})
return A.m($async$ab,w)},
bY(d){var x=0,w=A.n(y.T),v,u,t,s
var $async$bY=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=new A.N($.Q,y.s)
t=new A.a3(u,y.C)
s=A.f(new b.G.XMLHttpRequest())
s.open("GET",d)
s.onload=A.X(new B.nX(t,s))
s.onerror=A.X(new B.nY(t))
s.send()
v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$bY,w)}}
B.fs.prototype={
b1(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$b1=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.pU(C.A))
x=2
return A.j(v.x.b1(),$async$b1)
case 2:u=e
A:{t=u instanceof B.ip
s=t?u.a:null
if(t){v.i(v.c.q9(s,C.ae))
break A}t=u instanceof B.dD
r=t?u.a:null
if(t)v.i(v.c.q8(r,C.D))}return A.l(null,w)}})
return A.m($async$b1,w)},
b5(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q
var $async$b5=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.q3(C.A))
x=2
return A.j(v.x.b5(),$async$b5)
case 2:u=e
A:{t=u instanceof B.k2
if(t){s=u.a
r=u.b}else{s=null
r=null}if(t){v.i(v.c.qE(r,s,C.ae))
break A}t=u instanceof B.ey
q=t?u.a:null
if(t)v.i(v.c.qt(q,C.D))}return A.l(null,w)}})
return A.m($async$b5,w)},
ab(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$ab=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.i(v.c.Z(C.A))
x=2
return A.j(v.x.ab(),$async$ab)
case 2:u=e
A:{t=u instanceof B.iS
s=t?u.a:null
if(t){v.i(v.c.qu(s,C.ae))
break A}t=u instanceof B.dX
r=t?u.a:null
if(t)v.i(v.c.U(r,C.D))}return A.l(null,w)}})
return A.m($async$ab,w)}}
B.fu.prototype={
B(){return"DashboardStatus."+this.b}}
B.by.prototype={
aT(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r,q,p,o=this
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
return new B.by(t,s,u,v,w,x,p,q,r,h==null?o.y:h)},
Z(d){var x=null
return this.aT(x,x,x,x,x,x,x,x,x,d)},
U(d,e){var x=null
return this.aT(x,x,x,d,x,x,x,x,x,e)},
q3(d){var x=null
return this.aT(x,x,x,x,x,x,x,d,x,x)},
qE(d,e,f){var x=null
return this.aT(x,x,x,x,d,x,e,f,x,x)},
qt(d,e){var x=null
return this.aT(x,x,x,x,x,d,x,e,x,x)},
pU(d){var x=null
return this.aT(x,x,d,x,x,x,x,x,x,x)},
q9(d,e){var x=null
return this.aT(x,d,e,x,x,x,x,x,x,x)},
q8(d,e){var x=null
return this.aT(d,x,e,x,x,x,x,x,x,x)},
qu(d,e){var x=null
return this.aT(x,x,x,x,x,x,x,x,d,e)}}
B.cq.prototype={
C(){return new B.n0()}}
B.n0.prototype={
F(){var x,w=this
w.G()
x=new B.fs(new B.nW(),N.k,C.dW)
w.d=x
x.ab()
w.d.b1()
w.d.b5()},
R(){var x=this.d
x===$&&A.i()
x.L()
this.T()},
p(d){var x=this.d
x===$&&A.i()
return new H.P(x,new B.tf(this),null,y.m)},
l0(d){var x,w,v,u,t,s,r,q=this,p=null,o="div",n="Active Shares",m="hs-dashboard__section-title",l="span",k=d.f
if(k===C.A||k===C.z){k=y.i
return new A.b(o,p,"hs-dashboard__loading",p,p,p,A.a([new A.b("p",p,p,p,p,p,A.a([new A.c("Loading dashboard\u2026",p)],k),p)],k),p)}if(k===C.D)return q.hn(d.d)
x=d.e
if(x==null)return q.hn("No dashboard data available")
k=x.c
w=q.bX(k)
v=x.d
u=q.bX(v)
t=y.i
s=A.a([q.cW(D.f.a3(x.gbR()*100,0)+"%","storage","Storage Used",w+" / "+u),q.cW("files","insert_drive_file","Total Files",q.hs(x.a)),q.cW("shares","share",n,q.hs(x.e)),q.cW("subscription","workspace_premium","Current Plan",x.f)],t)
r=A.a([new A.c("Storage",p)],t)
w=q.bX(k)
u=q.bX(v)
v=x.grW()
k=y.N
return new A.b(o,p,"hs-dashboard__content",p,p,p,A.a([new A.b(o,p,"hs-dashboard__stats-row",p,p,p,s,p),new E.aw(new A.b(o,p,"hs-dashboard__storage-section",p,p,p,A.a([new A.b("h2",p,m,p,p,p,r,p),new A.b(o,p,"hs-dashboard__quota",p,p,p,A.a([new A.b(o,p,"hs-dashboard__quota-labels",p,p,p,A.a([new A.b(l,p,"hs-dashboard__quota-used",p,p,p,A.a([new A.c(w+" used",p)],t),p),new A.b(l,p,"hs-dashboard__quota-total",p,p,p,A.a([new A.c(u,p)],t),p)],t),p),new A.b(o,p,"hs-dashboard__quota-bar "+("hs-dashboard__quota-bar--"+v),p,p,p,A.a([new I.ds(x.gbR(),8,p)],t),p)],t),p),q.jq(x),q.jr(x)],t),p),p),new E.aw(new A.b(o,p,"hs-dashboard__activity-section",p,p,p,A.a([new A.b(o,p,"hs-dashboard__activity-header",p,p,p,A.a([new A.b("h2",p,"hs-dashboard__activity-title",p,p,p,A.a([new A.c("Recent Activity",p)],t),p),new A.b(l,p,"hs-dashboard__activity-view-all",p,p,p,A.a([new A.c("View all",p)],t),p)],t),p),B.EV(d)],t),p),p),new E.aw(new A.b(o,p,"hs-dashboard__shares-section",p,p,p,A.a([new A.b(o,p,"hs-dashboard__shares-header",p,p,p,A.a([new A.b("h2",p,m,p,p,p,A.a([new A.c(n,p)],t),p),new A.b("a",p,"hs-dashboard__shares-view-all",p,A.p(["href","/shares"],k,k),p,A.a([new A.c("View all shares",p)],t),p)],t),p),B.EZ(d)],t),p),p),B.GI(d)],t),p)},
cW(d,e,f,g){var x="div",w=null,v=y.i
return new E.aw(new A.b(x,w,"hs-dashboard__stat-card",w,w,w,A.a([new A.b(x,w,"hs-dashboard__stat-icon-row",w,w,w,A.a([new A.b("span",w,"material-icons hs-dashboard__stat-icon",w,w,w,A.a([new A.c(e,w)],v),w)],v),w),new A.b(x,w,"hs-dashboard__stat-value",w,w,w,A.a([new A.c(g,w)],v),w),new A.b(x,w,"hs-dashboard__stat-label",w,w,w,A.a([new A.c(f,w)],v),w),new A.b(x,w,"hs-dashboard__stat-detail",w,w,w,A.a([new A.c(d,w)],v),w)],v),w),w)},
jq(d){var x,w=null,v="hs-dashboard__breakdown-bar",u=d.r,t=new A.ji(u,A.K(u).h("ji<2>")).dM(0,0,new B.tc(),y.S)
if(t===0)return new A.b("div",w,v,w,w,w,A.a([],y.i),w)
u=y.Y
x=A.A(new A.G(C.bd,y.M.a(new B.td(d,t)),u),u.h("M.E"))
return new A.b("div",w,v,w,w,w,x,w)},
jr(d){var x=null,w=y.Y,v=A.A(new A.G(C.bd,y.M.a(new B.te(this,d)),w),w.h("M.E"))
return new A.b("div",x,"hs-dashboard__breakdown-legend",x,x,x,v,x)},
hn(d){var x,w=null,v=d==null?"Failed to load dashboard":d,u=y.i
v=A.a([new A.c(v,w)],u)
x=this.d
x===$&&A.i()
return new A.b("div",w,"hs-dashboard__error",w,w,w,A.a([new A.b("p",w,w,w,w,w,v,w),new L.D("Try again",M.e,x.grB(),!1,!1,w)],u),w)},
bX(d){if(d<1024)return""+d+" B"
if(d<1048576)return D.f.a3(d/1024,1)+" KB"
if(d<1073741824)return D.f.a3(d/1048576,1)+" MB"
return D.f.a3(d/1073741824,1)+" GB"},
hs(d){if(d>=1e6)return D.f.a3(d/1e6,1)+"M"
if(d>=1000)return D.f.a3(d/1000,1)+"K"
return D.d.m(d)}}
var z=a.updateTypes(["Y<~>()","e(O,by)","bu(z<d,@>)","bK(z<d,@>)","bx(z<d,@>)","e(bu)","e(bK)","e(bx)"])
B.o_.prototype={
$2(d,e){return new A.ab(A.q(d),A.E(e),y.O)},
$S:72}
B.nX.prototype={
$1(d){return this.a.A(A.q(this.b.responseText))},
$S:4}
B.nY.prototype={
$1(d){return this.a.A(null)},
$S:4}
B.tf.prototype={
$2(d,e){var x,w=null
y.b.a(e)
x=y.i
return new A.b("div",w,"hs-dashboard",w,w,w,A.a([new A.b("div",w,"hs-dashboard__header",w,w,w,A.a([new A.b("h1",w,"hs-dashboard__title",w,w,w,A.a([new A.c("Dashboard",w)],x),w)],x),w),this.a.l0(e)],x),w)},
$S:z+1}
B.tc.prototype={
$2(d,e){return A.E(d)+A.E(e)},
$S:12}
B.td.prototype={
$1(d){var x,w,v=null
A.q(d)
x=this.a.r.j(0,d)
if(x==null)x=0
w=y.N
return new A.b("div",v,"hs-dashboard__breakdown-segment hs-dashboard__breakdown-segment--"+d,v,A.p(["style","width: "+D.f.a3(x/this.b*100,2)+"%"],w,w),v,A.a([],y.i),v)},
$S:13}
B.te.prototype={
$1(d){var x,w,v,u=null,t="span"
A.q(d)
x=this.b.r.j(0,d)
if(x==null)x=0
w=C.f_.j(0,d)
if(w==null)w=d
v=y.i
return new A.b("div",u,"hs-dashboard__legend-item",u,u,u,A.a([new A.b(t,u,"hs-dashboard__legend-dot hs-dashboard__legend-dot--"+d,u,u,u,A.a([],v),u),new A.b(t,u,"hs-dashboard__legend-label",u,u,u,A.a([new A.c(w,u)],v),u),new A.b(t,u,"hs-dashboard__legend-value",u,u,u,A.a([new A.c(this.a.bX(x),u)],v),u)],v),u)},
$S:13};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(B,"Gz","C1",2)
x(B,"Io","Dj",3)
x(B,"In","Ch",4)
w(B.fs.prototype,"grB","ab",0)
x(B,"GA","EW",5)
x(B,"Ir","EY",6)
x(B,"Iq","EX",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.bu,B.eU,B.nZ,B.ft,B.bK,B.bx,B.hF,B.nW,B.by])
x(B.eU,[B.ip,B.dD])
x(A.ah,[B.o_,B.tf,B.tc])
x(B.ft,[B.iS,B.dX])
x(B.hF,[B.k2,B.ey])
x(A.Z,[B.nX,B.nY,B.td,B.te])
w(B.fs,H.a7)
w(B.fu,A.ao)
w(B.cq,G.x)
w(B.n0,G.u)})()
A.W(b.typeUniverse,JSON.parse('{"ip":{"eU":[]},"dD":{"eU":[]},"iS":{"ft":[]},"dX":{"ft":[]},"k2":{"hF":[]},"ey":{"hF":[]},"fs":{"a7":["by"],"a1":["by"],"aG":["by"],"a1.0":"by"},"cq":{"x":[],"e":[]},"n0":{"u":["cq"],"u.T":"cq"}}'))
var y=(function rtii(){var x=A.h
return{c:x("bu"),_:x("eU"),m:x("P<fs,by>"),M:x("e(d)"),u:x("bx"),F:x("ft"),b:x("by"),i:x("v<e>"),O:x("ab<d,t>"),P:x("z<d,@>"),Y:x("G<d,e>"),d:x("bK"),q:x("hF"),N:x("d"),C:x("a3<d?>"),s:x("N<d?>"),z:x("@"),S:x("t"),R:x("I<bu>?"),e:x("I<bx>?"),n:x("I<bK>?"),g:x("I<@>?"),h:x("z<d,@>?"),T:x("d?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.co=new B.dD("Network error")
C.cp=new B.dD("Unexpected server response")
C.cq=new B.dD("Failed to parse activity data")
C.dT=new B.dX("Network error")
C.dU=new B.dX("Failed to parse dashboard data")
C.dV=new B.dX("Unexpected server response")
C.eK=x([],A.h("v<bu>"))
C.z=new B.fu(0,"idle")
C.eL=x([],A.h("v<bK>"))
C.eM=x([],A.h("v<bx>"))
C.dW=new B.by(C.eK,null,C.z,null,null,C.z,null,C.eL,C.z,C.eM)
C.A=new B.fu(1,"loading")
C.ae=new B.fu(2,"loaded")
C.D=new B.fu(3,"error")
C.bd=x(["documents","images","videos","audio","archives","other"],A.h("v<d>"))
C.fn={documents:0,images:1,videos:2,audio:3,archives:4,other:5}
C.f_=new A.ad(C.fn,["Documents","Images","Videos","Audio","Archives","Other"],A.h("ad<d,d>"))
C.hD=new B.ey("Network error")
C.hE=new B.ey("Failed to parse share summary data")
C.hF=new B.ey("Unexpected server response")})()};
(a=>{a["5AhbYYQrcL6KeOyNuzn4gjccGC4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_133.part.js.map
