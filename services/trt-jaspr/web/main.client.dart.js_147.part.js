((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,F,B={jw:function jw(d,e,f){var _=this
_.x=d
_.a=e
_.b=$
_.c=f
_.d=!1},hk:function hk(d,e){this.a=d
this.b=e},bb:function bb(d,e,f){this.a=d
this.b=e
this.c=f},db:function db(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},kH:function kH(d,e){var _=this
_.d=$
_.e=d
_.f=""
_.r=e
_.w=""
_.c=_.a=null},wh:function wh(d){this.a=d},wg:function wg(d,e){this.a=d
this.b=e},wf:function wf(d,e){this.a=d
this.b=e},wi:function wi(d){this.a=d},we:function we(d,e){this.a=d
this.b=e},wd:function wd(d,e){this.a=d
this.b=e},wc:function wc(d,e){this.a=d
this.b=e},wb:function wb(d,e){this.a=d
this.b=e},wa:function wa(d,e){this.a=d
this.b=e},w9:function w9(d,e){this.a=d
this.b=e},bS:function bS(d,e){this.a=d
this.b=e},ca:function ca(d,e){this.a=d
this.b=e},
za(d,e,f,g,h){return new B.hu(e,h,g,f,d,null)},
C9(d,e,f){if(d.length===0)return null
if(f!=null&&D.a.al(d,f)<0)return"Date must be on or after "+f
return null},
hu:function hu(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
jG:function jG(){var _=this
_.d=""
_.c=_.a=_.e=null},
pb:function pb(d,e){this.a=d
this.b=e}},C,G,E,H,I,M,K,N,L
A=c[0]
D=c[2]
F=c[40]
B=a.updateHolder(c[32],B)
C=c[98]
G=c[58]
E=c[50]
H=c[56]
I=c[61]
M=c[55]
K=c[57]
N=c[60]
L=c[73]
B.jw.prototype={
aV(d,e,f,g,h,i,j){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$aV=A.o(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:v.i(C.ha)
x=2
return A.j(v.x.aV(d,e,f,g,h,i,j),$async$aV)
case 2:u=l
A:{t=u instanceof F.ju
s=t?u.a:null
if(t){v.i(new B.bb(C.c_,null,s))
break A}t=u instanceof F.ej
r=t?u.a:null
if(t)v.i(new B.bb(C.c0,r,null))}return A.l(null,w)}})
return A.m($async$aV,w)}}
B.hk.prototype={
C(){return"SharingStatus."+this.b}}
B.bb.prototype={}
B.db.prototype={
B(){return new B.kH(C.aE,C.aD)},
hR(){return this.f.$0()},
fg(d){return this.r.$1(d)}}
B.kH.prototype={
F(){this.G()
this.d=new B.jw(new F.ek(),N.m,C.bZ)},
c6(d){y.w.a(d)
this.e6(d)
if(this.a.e&&!d.e)this.nH()},
R(){var x=this.d
x===$&&A.h()
x.M()
this.U()},
nH(){this.k(new B.wh(this))
var x=this.d
x===$&&A.h()
x.i(C.bZ)},
o1(){var x,w,v,u,t
for(x=A.r(A.f(b.G.document).cookie).split(";"),w=x.length,v=0;v<w;++v){u=x[v]
t=D.a.Y(u,"=")
if(t<0)continue
if(D.a.u(D.a.L(u,0,t))==="hs_csrf")return D.a.u(D.a.P(u,t+1))}return""},
d2(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$d2=A.o(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:m=D.a.u(u.f)
if(m.length===0){x=1
break}t=u.d
t===$&&A.h()
s=u.a.c
r=u.e
q=r.gih()
r=r.gi4()
p=u.r.grf()
o=u.w
o=o.length!==0?o:null
x=3
return A.j(t.aV(u.o1(),o,m,r,s,p,q),$async$d2)
case 3:q=u.d.c
n=q.c
if(q.a===C.c_&&n!=null){u.a.fg(n)
u.a.hR()}case 1:return A.l(v,w)}})
return A.m($async$d2,w)},
o5(d){var x
A.f(d)
x=this.d
x===$&&A.h()
if(x.c.a!==C.F)this.a.hR()},
o3(d){A.f(d).stopPropagation()},
m1(d){var x=A.Z(A.f(d).target)
this.k(new B.wg(this,x==null?A.f(x):x))},
ly(d){this.k(new B.wf(this,d))},
n(d){var x
if(!this.a.e)return new A.c("",null)
x=this.d
x===$&&A.h()
return new K.S(x,new B.wi(this),null,y.z)},
jW(d){var x=null,w=y.i,v=A.a([new A.c("Share with",x)],w),u=y.n
u=A.B(new A.J(C.e8,y.Z.a(new B.we(this,d.a===C.F)),u),u.h("N.E"))
return new A.b("div",x,"hs-share-dialog__section",x,x,x,A.a([new A.b("p",x,"hs-share-dialog__label",x,x,x,v,x),new A.b("div",x,"hs-share-dialog__radio-group",x,x,x,u,x)],w),x)},
jR(d){var x,w,v,u,t,s=null
switch(this.e.a){case 0:x="User ID"
break
case 1:x="Organization ID"
break
case 2:x="Email address"
break
default:x=s}w=y.i
v=A.a([new A.c("Recipient",s)],w)
u=y.N
t=A.a8(u,u)
t.l(0,"type","text")
t.l(0,"placeholder",x)
t.l(0,"value",this.f)
if(d.a===C.F)t.l(0,"disabled","")
return new A.b("div",s,"hs-share-dialog__section",s,s,s,A.a([new A.b("label",s,"hs-share-dialog__label",s,s,s,v,s),new A.b("input",s,"hs-share-dialog__text-input",s,t,A.p(["input",this.gm0()],u,y.v),L.l,s)],w),s)},
jO(d){var x=null,w=y.i,v=A.a([new A.c("Permission",x)],w),u=y.G
u=A.B(new A.J(C.eg,y.S.a(new B.wb(this,d.a===C.F)),u),u.h("N.E"))
return new A.b("div",x,"hs-share-dialog__section",x,x,x,A.a([new A.b("p",x,"hs-share-dialog__label",x,x,x,v,x),new A.b("div",x,"hs-share-dialog__radio-group",x,x,x,u,x)],w),x)},
fN(d,e,f,g,h,i){var x,w,v=null
y.y.a(h)
x=y.N
w=A.p(["type","radio","name",g,"value",i],x,x)
if(d)w.l(0,"checked","")
if(e)w.l(0,"disabled","")
return new A.b("label",v,"hs-share-dialog__radio-label",v,v,v,A.a([new A.b("input",v,"hs-share-dialog__radio",v,w,h!=null?A.p(["change",h],x,y.v):C.eF,L.l,v),new A.c(f,v)],y.i),v)}}
B.bS.prototype={
C(){return"_ShareTypeOption."+this.b},
gfa(){switch(this.a){case 0:var x="Internal user"
break
case 1:x="Organization"
break
case 2:x="Email invite"
break
default:x=null}return x},
gih(){var x="internal"
switch(this.a){case 0:break
case 1:x="cross_org"
break
case 2:break
default:x=null}return x},
gi4(){switch(this.a){case 0:var x="user"
break
case 1:x="org"
break
case 2:x="email"
break
default:x=null}return x}}
B.ca.prototype={
C(){return"_PermissionOption."+this.b},
gfa(){switch(this.a){case 0:var x="View"
break
case 1:x="Edit"
break
default:x=null}return x},
grf(){switch(this.a){case 0:var x="view"
break
case 1:x="edit"
break
default:x=null}return x}}
B.hu.prototype={
B(){return new B.jG()}}
B.jG.prototype={
F(){this.G()
var x=this.a.e
this.d=x==null?"":x},
kZ(d){var x,w,v=A.Z(A.f(d).target)
if(v==null)v=A.f(v)
x=A.r(v.value)
this.k(new B.pb(this,x))
w=this.a.f
if(w!=null)w.$1(x)},
n(d){var x,w,v,u=this,t=null,s=u.e!=null,r=y.i,q=A.a([],r),p=u.a.c
if(p!=null)q.push(new A.b("label",t,"tr-field__label",t,t,t,A.a([new A.c(p,t)],r),t))
p=M.y0(s,u.a.x)
x=y.N
w=A.p(["type","date"],x,x)
v=u.d
if(v.length!==0)w.l(0,"value",v)
v=u.a.r
if(v!=null)w.l(0,"min",v)
v=u.a
if(v.x)w.l(0,"disabled","")
q.push(new A.b("div",t,p,t,t,t,A.a([new A.b("input",t,"tr-field__input",t,w,A.p(["change",u.gkY()],x,y.v),A.a([],r),t)],r),t))
if(s){p=u.e
p.toString
q.push(new A.b("span",t,"tr-field__error",t,t,t,A.a([new A.c(p,t)],r),t))}else u.a.toString
return new A.b("div",t,"tr-field tr-date-picker",t,t,t,q,t)}}
var z=a.updateTypes(["~(F)","Y<~>()","~(d)","e(O,bb)","e(bS)","e(ca)"])
B.wh.prototype={
$0(){var x=this.a
x.e=C.aE
x.f=""
x.r=C.aD
x.w=""},
$S:0}
B.wg.prototype={
$0(){return this.a.f=A.r(this.b.value)},
$S:0}
B.wf.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.wi.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="div"
y.t.a(a0)
x=this.a
w=y.N
v=y.v
u=A.p(["click",x.go4()],w,v)
t=A.p(["role","dialog","aria-modal","true"],w,w)
v=A.p(["click",x.go2()],w,v)
w=y.i
s=A.a([new A.c('Share "'+x.a.d+'"',f)],w)
r=x.jW(a0)
q=x.jR(a0)
p=x.jO(a0)
o=a0.a
n=o===C.F
m=new E.aU(Date.now(),0,!1)
l=D.a.bo(D.d.m(E.c0(m)),4,"0")
k=D.a.bo(D.d.m(E.c_(m)),2,"0")
j=D.a.bo(D.d.m(E.bZ(m)),2,"0")
i=x.w
i=i.length!==0?i:f
h=n?f:x.glx()
i=A.a([new A.b("h2",f,"hs-share-dialog__title",f,f,f,s,f),r,q,p,new A.b(e,f,"hs-share-dialog__section",f,f,f,A.a([B.za(n,"Expires (optional)",l+"-"+k+"-"+j,h,i)],w),f)],w)
if(o===C.c0&&a0.b!=null){s=a0.b
s.toString
i.push(new A.b("p",f,"hs-share-dialog__error",f,f,f,A.a([new A.c(s,f)],w),f))}g=n||D.a.u(x.f).length===0
s=n?f:x.a.f
r=n?"Sharing\u2026":"Share"
x=g?f:x.gmc()
i.push(new A.b(e,f,"hs-share-dialog__actions",f,f,f,A.a([new H.C("Cancel",I.q,s,!1,!1,f),new H.C(r,I.p,x,!1,!1,f)],w),f))
return new A.b(e,f,"hs-share-dialog-overlay",f,f,u,A.a([new A.b(e,f,"hs-share-dialog",f,t,v,i,f)],w),f)},
$S:z+3}
B.we.prototype={
$1(d){var x,w,v,u,t
y.s.a(d)
x=this.a
w=d.gfa()
v=x.e
u=this.b
t=u?null:new B.wd(x,d)
return x.fN(v===d,u,w,"share-type",t,d.b)},
$S:z+4}
B.wd.prototype={
$1(d){var x
A.f(d)
x=this.a
return x.k(new B.wc(x,this.b))},
$S:1}
B.wc.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.wb.prototype={
$1(d){var x,w,v,u,t
y.V.a(d)
x=this.a
w=d.gfa()
v=x.r
u=this.b
t=u?null:new B.wa(x,d)
return x.fN(v===d,u,w,"permission",t,d.b)},
$S:z+5}
B.wa.prototype={
$1(d){var x
A.f(d)
x=this.a
return x.k(new B.w9(x,this.b))},
$S:1}
B.w9.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.pb.prototype={
$0(){var x=this.a,w=this.b
x.d=w
x.e=B.C9(w,null,x.a.r)},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.kH.prototype,"gmc","d2",1)
w(v,"go4","o5",0)
w(v,"go2","o3",0)
w(v,"gm0","m1",0)
w(v,"glx","ly",2)
w(B.jG.prototype,"gkY","kZ",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jw,K.ae)
w(A.ar,[B.hk,B.bS,B.ca])
x(B.bb,A.I)
w(G.y,[B.db,B.hu])
w(G.u,[B.kH,B.jG])
w(A.ab,[B.wh,B.wg,B.wf,B.wc,B.w9,B.pb])
x(B.wi,A.ai)
w(A.a0,[B.we,B.wd,B.wb,B.wa])})()
A.X(b.typeUniverse,JSON.parse('{"jw":{"ae":["bb"],"a2":["bb"],"aK":["bb"],"a2.0":"bb"},"db":{"y":[],"e":[]},"kH":{"u":["db"],"u.T":"db"},"hu":{"y":[],"e":[]},"jG":{"u":["hu"],"u.T":"hu"}}'))
var y=(function rtii(){var x=A.i
return{z:x("S<jw,bb>"),S:x("e(ca)"),Z:x("e(bS)"),i:x("v<e>"),G:x("J<ca,e>"),n:x("J<bS,e>"),w:x("db"),t:x("bb"),N:x("d"),V:x("ca"),s:x("bS"),y:x("~(F)?"),H:x("~"),v:x("~(F)")}})();(function constants(){var x=a.makeConstList
C.aE=new B.bS(0,"internalUser")
C.iD=new B.bS(1,"organization")
C.iE=new B.bS(2,"emailInvite")
C.e8=x([C.aE,C.iD,C.iE],A.i("v<bS>"))
C.aD=new B.ca(0,"view")
C.iC=new B.ca(1,"edit")
C.eg=x([C.aD,C.iC],A.i("v<ca>"))
C.eF=new A.ac(D.bk,[],A.i("ac<d,~(F)>"))
C.hb=new B.hk(0,"idle")
C.bZ=new B.bb(C.hb,null,null)
C.F=new B.hk(1,"submitting")
C.ha=new B.bb(C.F,null,null)
C.c_=new B.hk(2,"success")
C.c0=new B.hk(3,"error")})()};
(a=>{a["UR0ZQxpC2owBHFESUJfn0uIeinI="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_147.part.js.map
