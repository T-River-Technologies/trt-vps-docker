((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={av:function av(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},i5:function i5(){},ko:function ko(d){this.a=d},eJ:function eJ(d){this.a=d},h1:function h1(){},jv:function jv(d,e,f){this.a=d
this.b=e
this.c=f},dk:function dk(d){this.a=d},fM:function fM(){},jl:function jl(){},fL:function fL(){},fK:function fK(){},jk:function jk(){},fJ:function fJ(){},hg:function hg(){},jF:function jF(d){this.a=d},dl:function dl(d){this.a=d},hj:function hj(){},jG:function jG(d){this.a=d},dm:function dm(d){this.a=d},
A9(d){var x=B.q(d.j(0,"event_type")),w=B.au(d.j(0,"channel_ws")),v=B.au(d.j(0,"channel_email"))
return new A.aA(x,w!==!1,v!==!1)},
aA:function aA(d,e,f){this.a=d
this.b=e
this.c=f},
jw:function jw(){},
oW:function oW(){},
oV:function oV(){},
oP:function oP(d,e){this.a=d
this.b=e},
oQ:function oQ(d){this.a=d},
oR:function oR(d,e){this.a=d
this.b=e},
oS:function oS(d){this.a=d},
oT:function oT(d,e){this.a=d
this.b=e},
oU:function oU(d){this.a=d}},C,F,G
J=c[1]
B=c[0]
D=c[2]
E=c[56]
A=a.updateHolder(c[42],A)
C=c[110]
F=c[46]
G=c[60]
A.av.prototype={
grg(){var x,w=this.b
A:{if("file.uploaded"===w){x="upload_file"
break A}if("file.downloaded"===w){x="download"
break A}if("file.deleted"===w){x="delete"
break A}if("file.shared"===w){x="folder_shared"
break A}if("share.created"===w){x="share"
break A}if("share.received"===w){x="inbox"
break A}if("share.revoked"===w){x="link_off"
break A}if("user.invited"===w){x="person_add"
break A}if("storage.quota_warning"===w){x="warning"
break A}if("payment.succeeded"===w){x="check_circle"
break A}if("payment.failed"===w){x="error"
break A}x="notifications"
break A}return x},
gt7(){var x,w=this.b
A:{if("file.uploaded"===w){x="File uploaded"
break A}if("file.downloaded"===w){x="File downloaded"
break A}if("file.deleted"===w){x="File deleted"
break A}if("file.shared"===w){x="File shared with you"
break A}if("share.created"===w){x="Share created"
break A}if("share.received"===w){x="Share received"
break A}if("share.revoked"===w){x="Share revoked"
break A}if("user.invited"===w){x="User invitation"
break A}if("storage.quota_warning"===w){x="Storage quota warning"
break A}if("payment.succeeded"===w){x="Payment succeeded"
break A}if("payment.failed"===w){x="Payment failed"
break A}x="Notification"
break A}return x},
gr_(){var x=this.c,w=B.r(x.j(0,"file_name")),v=B.r(x.j(0,"user_name")),u=B.r(x.j(0,"message"))
if(u!=null&&u.length!==0)return u
if(w!=null&&w.length!==0)return w
if(v!=null&&v.length!==0)return v
return B.Iv(this.b,"."," ")},
ic(){var x=this
new G.aP(Date.now(),0,!1).cD()
return new A.av(x.a,x.b,x.c,!0,x.e)}}
A.i5.prototype={}
A.ko.prototype={}
A.eJ.prototype={}
A.h1.prototype={}
A.jv.prototype={}
A.dk.prototype={}
A.fM.prototype={}
A.jl.prototype={}
A.fL.prototype={}
A.fK.prototype={}
A.jk.prototype={}
A.fJ.prototype={}
A.hg.prototype={}
A.jF.prototype={}
A.dl.prototype={}
A.hj.prototype={}
A.jG.prototype={}
A.dm.prototype={}
A.aA.prototype={
gr3(){var x,w=this.a
A:{if("file.uploaded"===w){x="File uploaded"
break A}if("file.downloaded"===w){x="File downloaded"
break A}if("file.deleted"===w){x="File deleted"
break A}if("file.shared"===w){x="File shared"
break A}if("share.received"===w){x="Share received"
break A}if("share.created"===w){x="Share created"
break A}if("share.revoked"===w){x="Share revoked"
break A}if("user.invited"===w){x="User invited"
break A}if("storage.quota_warning"===w){x="Storage quota warning"
break A}if("payment.succeeded"===w){x="Payment succeeded"
break A}if("payment.failed"===w){x="Payment failed"
break A}x=w
break A}return x}}
A.jw.prototype={
cM(){var x=0,w=B.n(y.X),v,u=this,t,s,r,q,p
var $async$cM=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.c0("/api/notifications/unread-count"),$async$cM)
case 3:p=e
if(p==null){v=C.j7
x=1
break}t=null
try{t=y.P.a(D.c.q(p,null))}catch(o){v=C.j5
x=1
break}try{q=B.dA(J.w(t,"count"))
s=q==null?0:q
v=new A.ko(s)
x=1
break}catch(o){v=C.j6
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$cM,w)},
cj(d){return this.rl(d)},
rl(d){var x=0,w=B.n(y.d),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$cj=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.j(u.c0("/api/notifications/list?page="+d+"&per_page=20&status=all"),$async$cj)
case 3:k=f
if(k==null){v=C.fe
x=1
break}t=null
try{t=y.P.a(D.c.q(k,null))}catch(j){v=C.fc
x=1
break}if(t.Y("error")){o=B.r(J.w(t,"error"))
v=new A.dk(o==null?"Failed to load notifications":o)
x=1
break}try{n=B.dA(J.w(t,"total"))
s=n==null?0:n
m=y.g.a(J.w(t,"notifications"))
r=m==null?[]:m
o=J.bR(r,new A.oW(),y.p)
l=B.A(o,o.$ti.h("M.E"))
q=l
v=new A.jv(q,s,d)
x=1
break}catch(j){v=C.fd
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$cj,w)},
b9(d,e){var x=0,w=B.n(y.B),v,u=this,t,s,r
var $async$b9=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.j(u.dl("/api/notifications/mark-read",B.p(["id",d],y.N,y.z),e),$async$b9)
case 3:r=g
if(r==null){v=C.dg
x=1
break}t=null
try{t=y.P.a(D.c.q(r,null))}catch(q){v=C.dh
x=1
break}if(t.Y("error")){B.r(J.w(t,"error"))
v=new A.fL()
x=1
break}v=C.di
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$b9,w)},
b8(d){var x=0,w=B.n(y.j),v,u=this,t,s,r
var $async$b8=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.j(u.dl("/api/notifications/mark-all-read",B.a5(y.N,y.z),d),$async$b8)
case 3:r=f
if(r==null){v=C.dd
x=1
break}t=null
try{t=y.P.a(D.c.q(r,null))}catch(q){v=C.de
x=1
break}if(t.Y("error")){B.r(J.w(t,"error"))
v=new A.fJ()
x=1
break}v=C.df
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$b8,w)},
cJ(){var x=0,w=B.n(y.m),v,u=this,t,s,r,q,p,o,n,m
var $async$cJ=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:x=3
return B.j(u.c0("/api/notifications/preferences"),$async$cJ)
case 3:m=e
if(m==null){v=C.fL
x=1
break}t=null
try{t=y.P.a(D.c.q(m,null))}catch(l){v=C.fM
x=1
break}if(t.Y("error")){p=B.r(J.w(t,"error"))
v=new A.dl(p==null?"Failed to load preferences":p)
x=1
break}try{o=y.g.a(J.w(t,"preferences"))
s=o==null?[]:o
p=J.bR(s,new A.oV(),y.Z)
n=B.A(p,p.$ti.h("M.E"))
r=n
v=new A.jF(r)
x=1
break}catch(l){v=C.fK
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$cJ,w)},
aL(d,e,f,g){var x=0,w=B.n(y.o),v,u=this,t,s,r,q,p
var $async$aL=B.o(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:x=3
return B.j(u.eS("/api/notifications/preferences",B.p(["event_type",d,"channel_ws",g,"channel_email",f,"channel_push",!1],y.N,y.z),e),$async$aL)
case 3:p=i
if(p==null){v=C.fS
x=1
break}t=null
try{t=y.P.a(D.c.q(p,null))}catch(o){v=C.fT
x=1
break}if(t.Y("error")){q=B.r(J.w(t,"error"))
v=new A.dm(q==null?"Failed to save preference":q)
x=1
break}try{s=A.A9(t)
v=new A.jG(s)
x=1
break}catch(o){v=C.fU
x=1
break}case 1:return B.l(v,w)}})
return B.m($async$aL,w)},
c0(d){var x=0,w=B.n(y.T),v,u,t,s
var $async$c0=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=new B.N($.Q,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("GET",d)
s.onload=B.X(new A.oP(t,s))
s.onerror=B.X(new A.oQ(t))
s.send()
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$c0,w)},
dl(d,e,f){return this.nS(d,y.P.a(e),f)},
nS(d,e,f){var x=0,w=B.n(y.T),v,u,t,s
var $async$dl=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=new B.N($.Q,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("POST",d)
s.setRequestHeader("Content-Type","application/json")
s.setRequestHeader("X-CSRF-Token",f)
s.onload=B.X(new A.oR(t,s))
s.onerror=B.X(new A.oS(t))
s.send(D.c.P(e,null))
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$dl,w)},
eS(d,e,f){return this.ob(d,y.P.a(e),f)},
ob(d,e,f){var x=0,w=B.n(y.T),v,u,t,s
var $async$eS=B.o(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=new B.N($.Q,y.s)
t=new B.a3(u,y.C)
s=B.f(new b.G.XMLHttpRequest())
s.open("PUT",d)
s.setRequestHeader("Content-Type","application/json")
s.setRequestHeader("X-CSRF-Token",f)
s.onload=B.X(new A.oT(t,s))
s.onerror=B.X(new A.oU(t))
s.send(D.c.P(e,null))
v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$eS,w)}}
var z=a.updateTypes(["av(@)","aA(@)"])
A.oW.prototype={
$1(d){var x,w,v,u,t
y.P.a(d)
x=B.q(d.j(0,"id"))
w=B.q(d.j(0,"event_type"))
v=y.h.a(d.j(0,"payload"))
if(v==null)v=B.a5(y.N,y.z)
u=B.au(d.j(0,"is_read"))
t=E.aQ(B.q(d.j(0,"created_at")))
if(d.j(0,"read_at")!=null)F.yW(B.q(d.j(0,"read_at")))
return new A.av(x,w,v,u===!0,t)},
$S:z+0}
A.oV.prototype={
$1(d){return A.A9(y.P.a(d))},
$S:z+1}
A.oP.prototype={
$1(d){return this.a.A(B.q(this.b.responseText))},
$S:4}
A.oQ.prototype={
$1(d){return this.a.A(null)},
$S:4}
A.oR.prototype={
$1(d){return this.a.A(B.q(this.b.responseText))},
$S:4}
A.oS.prototype={
$1(d){return this.a.A(null)},
$S:4}
A.oT.prototype={
$1(d){return this.a.A(B.q(this.b.responseText))},
$S:4}
A.oU.prototype={
$1(d){return this.a.A(null)},
$S:4};(function inheritance(){var x=a.inheritMany
x(B.J,[A.av,A.i5,A.h1,A.fM,A.fK,A.hg,A.hj,A.aA,A.jw])
x(A.i5,[A.ko,A.eJ])
x(A.h1,[A.jv,A.dk])
x(A.fM,[A.jl,A.fL])
x(A.fK,[A.jk,A.fJ])
x(A.hg,[A.jF,A.dl])
x(A.hj,[A.jG,A.dm])
x(B.Z,[A.oW,A.oV,A.oP,A.oQ,A.oR,A.oS,A.oT,A.oU])})()
B.W(b.typeUniverse,JSON.parse('{"ko":{"i5":[]},"eJ":{"i5":[]},"jv":{"h1":[]},"dk":{"h1":[]},"jl":{"fM":[]},"fL":{"fM":[]},"jk":{"fK":[]},"fJ":{"fK":[]},"jF":{"hg":[]},"dl":{"hg":[]},"jG":{"hj":[]},"dm":{"hj":[]}}'))
var y=(function rtii(){var x=B.h
return{P:x("z<d,@>"),j:x("fK"),B:x("fM"),p:x("av"),d:x("h1"),Z:x("aA"),m:x("hg"),o:x("hj"),N:x("d"),X:x("i5"),C:x("a3<d?>"),s:x("N<d?>"),z:x("@"),g:x("I<@>?"),h:x("z<d,@>?"),T:x("d?")}})();(function constants(){C.dd=new A.fJ()
C.de=new A.fJ()
C.df=new A.jk()
C.dg=new A.fL()
C.dh=new A.fL()
C.di=new A.jl()
C.fc=new A.dk("Unexpected server response")
C.fd=new A.dk("Failed to parse notifications")
C.fe=new A.dk("Network error")
C.fK=new A.dl("Failed to parse preferences")
C.fL=new A.dl("Network error")
C.fM=new A.dl("Unexpected server response")
C.fS=new A.dm("Network error")
C.fT=new A.dm("Unexpected server response")
C.fU=new A.dm("Failed to parse updated preference")
C.j5=new A.eJ("Unexpected server response")
C.j6=new A.eJ("Failed to parse unread count")
C.j7=new A.eJ("Network error")})()};
(a=>{a["jtvriukhE+w4mSyp73eRFvE4Tc4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_175.part.js.map
