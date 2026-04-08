((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
Ck(d){var x=Math.abs(d),w=d<0?"-":""
if(x>=1000)return""+d
if(x>=100)return w+"0"+x
if(x>=10)return w+"00"+x
return w+"000"+x},
zX(d){if(d>=100)return""+d
if(d>=10)return"0"+d
return"00"+d},
lN(d){if(d>=10)return""+d
return"0"+d},
aP:function aP(d,e,f){this.a=d
this.b=e
this.c=f},
bo(d){if(d.date===void 0)d.date=new Date(d.a)
return d.date},
c_(d){return d.c?A.bo(d).getUTCFullYear()+0:A.bo(d).getFullYear()+0},
bZ(d){return d.c?A.bo(d).getUTCMonth()+1:A.bo(d).getMonth()+1},
bY(d){return d.c?A.bo(d).getUTCDate()+0:A.bo(d).getDate()+0},
D1(d){return d.c?A.bo(d).getUTCHours()+0:A.bo(d).getHours()+0},
D3(d){return d.c?A.bo(d).getUTCMinutes()+0:A.bo(d).getMinutes()+0},
D4(d){return d.c?A.bo(d).getUTCSeconds()+0:A.bo(d).getSeconds()+0},
D2(d){return d.c?A.bo(d).getUTCMilliseconds()+0:A.bo(d).getMilliseconds()+0}}
B=c[0]
C=c[2]
A=a.updateHolder(c[60],A)
A.aP.prototype={
bF(d){return new B.bz(this.b-d.b+1000*(this.a-d.a))},
a2(d,e){if(e==null)return!1
return e instanceof A.aP&&this.a===e.a&&this.b===e.b&&this.c===e.c},
gS(d){return B.jy(this.a,this.b,C.r,C.r)},
an(d,e){var x
y.b.a(e)
x=C.d.an(this.a,e.a)
if(x!==0)return x
return C.d.an(this.b,e.b)},
fP(){var x=this
if(x.c)return new A.aP(x.a,x.b,!1)
return x},
cD(){var x=this
if(x.c)return x
return new A.aP(x.a,x.b,!0)},
m(d){var x=this,w=A.Ck(A.c_(x)),v=A.lN(A.bZ(x)),u=A.lN(A.bY(x)),t=A.lN(A.D1(x)),s=A.lN(A.D3(x)),r=A.lN(A.D4(x)),q=A.zX(A.D2(x)),p=x.b,o=p===0?"":A.zX(p)
p=w+"-"+v
if(x.c)return p+"-"+u+" "+t+":"+s+":"+r+"."+q+o+"Z"
else return p+"-"+u+" "+t+":"+s+":"+r+"."+q+o},
$iam:1}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.aP,B.J)})()
B.W(b.typeUniverse,JSON.parse('{"aP":{"am":["aP"]}}'))
var y={b:B.h("aP")}};
(a=>{a["2v8XPcz04NIwNLIuB9Sur6eIedo="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_22.part.js.map
