((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
B1(d){var x=Math.abs(d),w=d<0?"-":""
if(x>=1000)return""+d
if(x>=100)return w+"0"+x
if(x>=10)return w+"00"+x
return w+"000"+x},
yK(d){if(d>=100)return""+d
if(d>=10)return"0"+d
return"00"+d},
lf(d){if(d>=10)return""+d
return"0"+d},
aU:function aU(d,e,f){this.a=d
this.b=e
this.c=f},
bj(d){if(d.date===void 0)d.date=new Date(d.a)
return d.date},
c0(d){return d.c?A.bj(d).getUTCFullYear()+0:A.bj(d).getFullYear()+0},
c_(d){return d.c?A.bj(d).getUTCMonth()+1:A.bj(d).getMonth()+1},
bZ(d){return d.c?A.bj(d).getUTCDate()+0:A.bj(d).getDate()+0},
BF(d){return d.c?A.bj(d).getUTCHours()+0:A.bj(d).getHours()+0},
BH(d){return d.c?A.bj(d).getUTCMinutes()+0:A.bj(d).getMinutes()+0},
BI(d){return d.c?A.bj(d).getUTCSeconds()+0:A.bj(d).getSeconds()+0},
BG(d){return d.c?A.bj(d).getUTCMilliseconds()+0:A.bj(d).getMilliseconds()+0}}
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
A.aU.prototype={
c7(d){return new B.bN(this.b-d.b+1000*(this.a-d.a))},
a_(d,e){if(e==null)return!1
return e instanceof A.aU&&this.a===e.a&&this.b===e.b&&this.c===e.c},
gN(d){return B.j2(this.a,this.b,C.r,C.r)},
al(d,e){var x
y.b.a(e)
x=C.d.al(this.a,e.a)
if(x!==0)return x
return C.d.al(this.b,e.b)},
fs(){var x=this
if(x.c)return new A.aU(x.a,x.b,!1)
return x},
hY(){var x=this
if(x.c)return x
return new A.aU(x.a,x.b,!0)},
m(d){var x=this,w=A.B1(A.c0(x)),v=A.lf(A.c_(x)),u=A.lf(A.bZ(x)),t=A.lf(A.BF(x)),s=A.lf(A.BH(x)),r=A.lf(A.BI(x)),q=A.yK(A.BG(x)),p=x.b,o=p===0?"":A.yK(p)
p=w+"-"+v
if(x.c)return p+"-"+u+" "+t+":"+s+":"+r+"."+q+o+"Z"
else return p+"-"+u+" "+t+":"+s+":"+r+"."+q+o},
$iam:1}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.aU,B.I)})()
B.X(b.typeUniverse,JSON.parse('{"aU":{"am":["aU"]}}'))
var y={b:B.i("aU")}};
(a=>{a["vH+PzRjmEmWh9sBuBJ1xDG3h/rM="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_22.part.js.map
