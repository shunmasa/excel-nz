_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"11/B":function(e,t,r){"use strict";r.r(t);var a=r("o0o1"),n=r.n(a),o=r("HaE+"),i=r("rePB"),c=r("ODXe"),l=r("q1tI"),s=r.n(l),u=r("wx14"),d=r("Ff2n"),p=(r("17x9"),r("iuhU")),m=r("H2TA"),f=r("5AJ6"),g=Object(f.a)(l.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var b=l.forwardRef((function(e,t){var r=e.alt,a=e.children,n=e.classes,o=e.className,i=e.component,c=void 0===i?"div":i,s=e.imgProps,m=e.sizes,f=e.src,b=e.srcSet,h=e.variant,v=void 0===h?"circle":h,w=Object(d.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,O=function(e){var t=e.src,r=e.srcSet,a=l.useState(!1),n=a[0],o=a[1];return l.useEffect((function(){if(t||r){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=r,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,r]),n}({src:f,srcSet:b}),j=f||b,k=j&&"error"!==O;return y=k?l.createElement("img",Object(u.a)({alt:r,src:f,srcSet:b,sizes:m,className:n.img},s)):null!=a?a:j&&r?r[0]:l.createElement(g,{className:n.fallback}),l.createElement(c,Object(u.a)({className:Object(p.a)(n.root,n.system,n[v],o,!k&&n.colorDefault),ref:t},w),y)})),h=Object(m.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(b),v=r("5CWz"),w=r("r9w1"),y=r("hlie"),O=r("kKAo"),j=r("hlFM"),k=r("tRbT"),x=r("w4+p"),S=r.n(x),E=r("ofer"),P=r("R/WZ"),z=r("h4VS"),C=r("lTCR");function N(){var e=Object(z.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      userId\n    }\n  }\n"]);return N=function(){return e},e}var _=r.n(C)()(N()),F=r("2D7x"),I=r("p46w"),D=r.n(I),R=r("Z3vd"),W=r("FGyW"),H=r("nOHt"),M=r.n(H),T=r("VX74"),q=r("vaDH"),A=s.a.createElement;function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(){return A(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",A(y.a,{color:"inherit",href:"https://material-ui.com/"},"developer masa")," ",(new Date).getFullYear(),".")}var X=Object(P.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));t.default=Object(q.a)({ssr:!0})((function(){var e=Object(l.useState)({email:"",password:""}),t=e[0],r=e[1],a=Object(T.useMutation)(_),s=Object(c.a)(a,2),u=s[0],d=s[1],p=d.data,m=d.error;console.log("data:",p);var f=function(e){var t=e.target,a=t.name,n=t.value;console.log("value:",n),r((function(e){return B(B({},e),{},Object(i.a)({},a,n))}))};Object(l.useEffect)((function(){(function(){var e=Object(o.a)(n.a.mark((function e(){var t,r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p&&(t=p.login,r=t.token,a=t.userId,console.log("token",r),Object(F.c)(r),D.a.set("userId",a,{expires:7}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);var g=function(){var e=Object(o.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("email",t,"email",t.email),r.preventDefault(),e.prev=2,a=t.email,!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)||m){e.next=9;break}return e.next=6,u({variables:B({},t)});case 6:M.a.replace("/dashboard"),e.next=10;break;case 9:W.b.error("Invalid Email");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),W.b.error(e.t0);case 15:case"end":return e.stop()}var a}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),b=X();return A(k.a,{container:!0,component:"main",className:b.root},A(v.a,null),A(k.a,{item:!0,xs:!1,sm:4,md:7,className:b.image}),A(k.a,{item:!0,xs:12,sm:8,md:5,component:O.a,elevation:6,square:!0},A("div",{className:b.paper},A(h,{className:b.avatar},A(S.a,null)),A(E.a,{component:"h1",variant:"h5"},"\u3054\u62c5\u5f53\u8005\u69d8\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8"),A("form",{className:b.form,noValidate:!0,onSubmit:g},A(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:t.email,onChange:f,autoComplete:"email",autoFocus:!0}),A(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:t.password,onChange:f,id:"password",autoComplete:"current-password"}),A(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:b.submit,value:"Submit"},"Sign In"),A(j.a,{mt:5},A($,null))))))}))},"5CWz":function(e,t,r){"use strict";var a=r("wx14"),n=r("q1tI"),o=(r("17x9"),r("H2TA")),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,n.createElement(n.Fragment,null,r)}))},oFgj:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r("11/B")}])},"w4+p":function(e,t,r){"use strict";var a=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),i=(0,a(r("8/g6")).default)(o.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.default=i}},[["oFgj",1,0,2,3,4,5,6,7,9,8,18]]]);