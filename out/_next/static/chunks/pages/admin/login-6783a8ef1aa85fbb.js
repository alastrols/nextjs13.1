(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{4593:function(e,n,r){"use strict";r.d(n,{n:function(){return u}});/*! *****************************************************************************
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
***************************************************************************** */var t=function(){return(t=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var l in n=arguments[r])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e}).apply(this,arguments)};function l(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)0>n.indexOf(t[l])&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]]);return r}var i=r(7294),o=r(1903),a=r(2175);function u(e){var n,r,u,s,c,d,m,p,f,h,g,x,b,j=e.children,w=l(e,["children"]);return i.createElement(o.Z,t({},(n=w.disabled,u=(r=w.field).onBlur,s=l(r,["onBlur"]),d=(c=w.form).isSubmitting,m=c.touched,p=c.errors,f=w.onBlur,h=w.helperText,g=l(w,["disabled","field","form","onBlur","helperText"]),x=(0,a.u9)(p,s.name),t(t({error:b=(0,a.u9)(m,s.name)&&!!x,helperText:b?x:h,disabled:null!=n?n:d,onBlur:null!=f?f:function(e){u(null!=e?e:s.name)}},s),g))),j)}u.displayName="FormikMaterialUITextField"},6177:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/login",function(){return r(3145)}])},6477:function(e,n,r){"use strict";var t=r(5893);r(7294);var l=r(1163),i=r(2686),o=r(7027);let a=e=>n=>{let r=(0,l.useRouter)(),{route:a}=r,{data:u,isAuthenticated:s,isAuthenticating:c}=(0,i.W)(e=>e.login),d=(0,i.t)();if(c)return d((0,o.Gg)()),null;if("/admin/login"!==a&&"/admin/register"!==a){if(!s)return r.push("/admin/login"),null}else if(s)return r.push("/admin/news/jp"),null;return"/admin"==a?s?(r.push("/admin/news/jp"),null):(r.push("/admin/login"),null):(0,t.jsx)(e,{...n})};n.Z=a},3145:function(e,n,r){"use strict";r.r(n);var t=r(5893);r(7294);var l=r(2175),i=r(6242),o=r(4267),a=r(3321),u=r(1496),s=r(5861),c=r(4593),d=r(1163),m=r(7357),p=r(4518),f=r(2686),h=r(7027),g=r(6477);let x=e=>{let{}=e,n=(0,d.useRouter)(),r=(0,f.t)();(0,u.ZP)(a.Z)(e=>{let{theme:n}=e;return{color:n.palette.getContrastText(p.Z[500]),marginTop:5,backgroundColor:p.Z[500],"&:hover":{backgroundColor:p.Z[700]}}});let g=e=>{let{values:n,setFieldValue:r,isValid:i,dirty:o,handleSubmit:u}=e;return(0,t.jsxs)(l.l0,{onSubmit:u,children:[(0,t.jsx)(s.Z,{variant:"h4",component:"h4",children:"Login"}),(0,t.jsx)(l.gN,{component:c.n,name:"username",id:"username",margin:"normal",required:!0,fullWidth:!0,label:"Username",autoComplete:"email",autoFocus:!0}),(0,t.jsx)(l.gN,{component:c.n,name:"password",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,t.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Login"})]})};return(0,t.jsx)(m.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,t.jsx)(i.Z,{sx:{maxWidth:450,textAlign:"center"},children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(l.J9,{initialValues:{username:"",password:""},onSubmit:async e=>{let t=await r((0,h.x4)(e));"rejected"===t.meta.requestStatus?alert("Login Failed!"):n.push("/admin/news/jp")},children:e=>g(e)})})})})};n.default=(0,g.Z)(x)}},function(e){e.O(0,[350,903,25,774,888,179],function(){return e(e.s=6177)}),_N_E=e.O()}]);
//# sourceMappingURL=login-6783a8ef1aa85fbb.js.map