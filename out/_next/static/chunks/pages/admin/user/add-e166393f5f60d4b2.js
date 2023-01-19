(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{2023:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(3366),i=t(7462),a=t(7294),s=t(6010),l=t(4780),o=t(1496),d=t(7623),u=t(1588),c=t(4867);function p(e){return(0,c.Z)("MuiCardActions",e)}(0,u.Z)("MuiCardActions",["root","spacing"]);var m=t(5893);let h=["disableSpacing","className"],x=e=>{let{classes:n,disableSpacing:t}=e;return(0,l.Z)({root:["root",!t&&"spacing"]},p,n)},j=(0,o.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})(({ownerState:e})=>(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),f=a.forwardRef(function(e,n){let t=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:l}=t,o=(0,r.Z)(t,h),u=(0,i.Z)({},t,{disableSpacing:a}),c=x(u);return(0,m.jsx)(j,(0,i.Z)({className:(0,s.Z)(c.root,l),ownerState:u,ref:n},o))});var g=f},4593:function(e,n,t){"use strict";t.d(n,{n:function(){return o}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var r=function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>n.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t}var a=t(7294),s=t(1903),l=t(2175);function o(e){var n,t,o,d,u,c,p,m,h,x,j,f,g,Z=e.children,v=i(e,["children"]);return a.createElement(s.Z,r({},(n=v.disabled,o=(t=v.field).onBlur,d=i(t,["onBlur"]),c=(u=v.form).isSubmitting,p=u.touched,m=u.errors,h=v.onBlur,x=v.helperText,j=i(v,["disabled","field","form","onBlur","helperText"]),f=(0,l.u9)(m,d.name),r(r({error:g=(0,l.u9)(p,d.name)&&!!f,helperText:g?f:x,disabled:null!=n?n:c,onBlur:null!=h?h:function(e){o(null!=e?e:d.name)}},d),j))),Z)}o.displayName="FormikMaterialUITextField"},8432:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/user/add",function(){return t(9752)}])},5078:function(e,n,t){"use strict";t.d(n,{Z:function(){return B}});var r=t(5893),i=t(7294),a=t(1496),s=t(7357),l=t(6720),o=t(2293),d=t(155),u=t(3946),c=t(326),p=t(1988),m=t(5294),h=t(8972),x=t(7027),j=t(2686);let f=(0,a.ZP)(o.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{transition:n.transitions.create(["margin","width"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),...t&&{width:"calc(100% - ".concat(240,"px)"),marginLeft:"".concat(240,"px"),transition:n.transitions.create(["margin","width"],{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen})}}});function g(e){let{open:n,onDrawerOpen:t}=e,[a,l]=i.useState(!1),o=()=>{l(!1)},g=(0,j.t)(),[Z,v]=i.useState(null),b=i.useRef(null);return i.useEffect(()=>{v(b.current)},[b]),(0,r.jsx)(f,{position:"fixed",open:n,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(u.Z,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",sx:{mr:2,...n&&{display:"none"}},children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)(s.Z,{sx:{flexGrow:1}}),(0,r.jsxs)(s.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,r.jsx)(u.Z,{ref:b,"aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:()=>l(!a),children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(m.Z,{anchorEl:Z,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:o,children:(0,r.jsx)(h.Z,{onClick:()=>g((0,x.kS)()),children:"Logout"})})]})]})})}var Z=t(2734),v=t(7533),b=t(8462),w=t(7720),y=t(9572),S=t(6215),P=t(7594),E=t(9334),C=t(6447),N=t(891),O=t(7922),k=t(1664),M=t.n(k),W=t(1718),_=t(1163),A=t(5398),D=t(5675),I=t.n(D),U=t(9473);let L=(0,a.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",padding:n.spacing(0,1),...n.mixins.toolbar,justifyContent:"flex-end"}});function R(e){let{open:n,onDrawerClose:t}=e,a=(0,Z.Z)(),s=(0,_.useRouter)();(0,U.v9)(e=>e.admin);let[l,o]=i.useState(!1),[d,c]=i.useState(!1);return(0,r.jsxs)(v.ZP,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:n,children:[(0,r.jsx)(L,{children:(0,r.jsxs)(C.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(I(),{width:200,height:68,unoptimized:!0,alt:"logo",src:"/static/images/logo.png"}),(0,r.jsx)(u.Z,{onClick:t,children:"ltr"===a.direction?(0,r.jsx)(y.Z,{}):(0,r.jsx)(S.Z,{})})]})}),(0,r.jsx)(w.Z,{}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(M(),{href:"/admin/user",style:{textDecoration:"none",color:"#000000DE"},passHref:!0,children:(0,r.jsxs)(N.ZP,{button:!0,onClick:()=>o(!l),className:"/admin/user"===s.pathname?"Mui-selected":"/admin/user/edit"===s.pathname?"Mui-selected":"/admin/user/add"===s.pathname?"Mui-selected":"",children:[(0,r.jsx)(P.Z,{children:(0,r.jsx)(A.Z,{})}),(0,r.jsx)(E.Z,{primary:"User"})]})})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(M(),{href:"#",style:{textDecoration:"none",color:"#000000DE"},passHref:!0,children:[(0,r.jsxs)(N.ZP,{onClick:()=>c(!d),className:"/admin/news/jp"===s.pathname?"Mui-selected":"/admin/news/jp/edit"===s.pathname?"Mui-selected":"/admin/news/jp/add"===s.pathname?"Mui-selected":"",children:[(0,r.jsx)(P.Z,{children:(0,r.jsx)(W.Z,{})}),(0,r.jsx)(E.Z,{primary:"News"})]}),(0,r.jsx)(O.Z,{in:"/admin/news/jp"===s.pathname||"/admin/news/jp/edit"===s.pathname||"/admin/news/jp/add"===s.pathname||d,timeout:"auto",unmountOnExit:!0,children:(0,r.jsx)(b.Z,{component:"li",disablePadding:!0,style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(M(),{href:"/admin/news/jp",style:{textDecoration:"/admin/news/jp"==s.pathname?"":"/admin/news/jp/add"==s.pathname?"":"/admin/news/jp/edit"==s.pathname?"":"none",color:"#000000DE"},passHref:!0,children:(0,r.jsxs)(N.ZP,{children:[(0,r.jsx)(P.Z,{children:(0,r.jsx)(W.Z,{fontSize:"small"})}),(0,r.jsx)(E.Z,{primary:"JP"},0)]},0)})},0)},0)]})})]})}let T=(0,a.ZP)("main",{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{flexGrow:1,padding:n.spacing(3),transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px"),...t&&{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen}),marginLeft:0}}}),F=(0,a.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",padding:n.spacing(0,1),...n.mixins.toolbar,justifyContent:"flex-end"}});function B(e){let{children:n}=e,[t,a]=i.useState(!0),o=()=>{a(!0)},d=()=>{a(!1)};return(0,r.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,r.jsx)(l.ZP,{}),(0,r.jsx)(g,{open:t,onDrawerOpen:o}),(0,r.jsx)(R,{open:t,onDrawerClose:d}),(0,r.jsxs)(T,{open:t,children:[(0,r.jsx)(F,{}),n]})]})}},6477:function(e,n,t){"use strict";var r=t(5893);t(7294);var i=t(1163),a=t(2686),s=t(7027);let l=e=>n=>{let t=(0,i.useRouter)(),{route:l}=t,{data:o,isAuthenticated:d,isAuthenticating:u}=(0,a.W)(e=>e.login),c=(0,a.t)();if(u)return c((0,s.Gg)()),null;if("/admin/login"!==l&&"/admin/register"!==l){if(!d)return t.push("/admin/login"),null}else if(d)return t.push("/admin/news/jp"),null;return"/admin"==l?d?(t.push("/admin/news/jp"),null):(t.push("/admin/login"),null):(0,r.jsx)(e,{...n})};n.Z=l},9752:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(5078),a=t(6477),s=t(7294),l=t(7357),o=t(4593),d=t(2175),u=t(6242),c=t(4267),p=t(2023),m=t(3321),h=t(5861),x=t(315),j=t(8972),f=t(3841),g=t(4054),Z=t(6455),v=t.n(Z),b=t(2686),w=t(9485),y=t(1163),S=t.n(y);let P={username:"",fullname:"",email:"",status:"active",level:"Normal User"};n.default=(0,a.Z)(function(){let e=(0,b.t)();(0,s.useRef)(null);let[n,t]=s.useState("active"),[a,Z]=s.useState("Normal User"),y=e=>{let{values:i,setFieldValue:s,isValid:l}=e;return(0,r.jsx)(d.l0,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(c.Z,{sx:{padding:4},children:[(0,r.jsx)(h.Z,{gutterBottom:!0,variant:"h4",children:"Add User"}),(0,r.jsx)(d.gN,{fullWidth:!0,component:o.n,name:"username",type:"text",label:"Username"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.gN,{fullWidth:!0,component:o.n,name:"password",type:"text",label:"Password"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.gN,{fullWidth:!0,component:o.n,name:"fullname",type:"text",label:"Fullname"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.gN,{fullWidth:!0,component:o.n,name:"email",type:"email",label:"Email"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.gN,{name:"status",style:{marginTop:16},component:()=>(0,r.jsxs)(g.Z,{fullWidth:!0,children:[(0,r.jsx)(f.Z,{children:"Status"}),(0,r.jsxs)(x.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Status",onChange:e=>{t(e.target.value)},value:n,fullWidth:!0,children:[(0,r.jsx)(j.Z,{value:"active",children:"Active"}),(0,r.jsx)(j.Z,{value:"inactive",children:"In Active"})]})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.gN,{name:"level",style:{marginTop:16},component:()=>(0,r.jsxs)(g.Z,{fullWidth:!0,children:[(0,r.jsx)(f.Z,{children:"Level"}),(0,r.jsxs)(x.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Level",onChange:e=>{Z(e.target.value)},value:a,fullWidth:!0,children:[(0,r.jsx)(j.Z,{value:"Normal User",children:"Normal User"}),(0,r.jsx)(j.Z,{value:"Administrator",children:"Administrator"})]})]})})]}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{disabled:!l,fullWidth:!0,variant:"contained",color:"primary",type:"submit",sx:{marginRight:1},children:"Add"}),(0,r.jsx)(m.Z,{variant:"contained",color:"error",fullWidth:!0,onClick:()=>S().push("/admin/user"),children:"Cancel"})]})]})})};return(0,r.jsx)(i.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(l.Z,{sx:{width:"100%",maxWidth:"100%"},children:(0,r.jsx)(d.J9,{validate:e=>{let n={};return e.username||(n.username="Enter Username"),e.password||(n.password="Enter Password"),e.fullname||(n.fullname="Enter Fullname"),e.email||(n.email="Enter Email"),e.status||(n.status="Enter Status"),e.level||(n.level="Enter Level"),n},initialValues:P,onSubmit:async(t,r)=>{let{setSubmitting:i}=r,s=new FormData;s.append("username",t.username),s.append("password",t.password),s.append("fullname",t.fullname),s.append("email",t.email),s.append("status",String(n)),s.append("level",String(a)),e((0,w.cn)(s)).then(e=>{"success"==e.payload.data.status?v().fire("Success!","Your data has been added","success").then(function(){S().push("/admin/user")}):v().fire("Error!","Please check your input","error").then(function(){return!1})}),i(!1)},children:e=>y(e)})})})})})}},function(e){e.O(0,[350,616,903,25,774,888,179],function(){return e(e.s=8432)}),_N_E=e.O()}]);
//# sourceMappingURL=add-e166393f5f60d4b2.js.map