(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{6177:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/login",function(){return r(3145)}])},6477:function(e,n,r){"use strict";var t=r(5893);r(7294);var i=r(1163),l=r(2686),u=r(7027);let a=e=>n=>{let r=(0,i.useRouter)(),{route:a}=r,{data:s,isAuthenticated:o,isAuthenticating:d}=(0,l.W)(e=>e.login),m=(0,l.t)();if(d)return m((0,u.Gg)()),null;if("/admin/login"!==a&&"/admin/register"!==a){if(!o)return r.push("/admin/login"),null}else if(o)return r.push("/admin/user"),null;return"/admin"==a?o?(r.push("/admin/user"),null):(r.push("/admin/login"),null):(0,t.jsx)(e,{...n})};n.Z=a},3145:function(e,n,r){"use strict";r.r(n);var t=r(5893);r(7294);var i=r(2175),l=r(6242),u=r(4267),a=r(3321),s=r(1496),o=r(5861),d=r(4593),m=r(1163),c=r(7357),h=r(4518),p=r(2686),g=r(7027),f=r(6477);let x=e=>{let{}=e,n=(0,m.useRouter)(),r=(0,p.t)();(0,s.ZP)(a.Z)(e=>{let{theme:n}=e;return{color:n.palette.getContrastText(h.Z[500]),marginTop:5,backgroundColor:h.Z[500],"&:hover":{backgroundColor:h.Z[700]}}});let f=e=>{let{values:n,setFieldValue:r,isValid:l,dirty:u,handleSubmit:s}=e;return(0,t.jsxs)(i.l0,{onSubmit:s,children:[(0,t.jsx)(o.Z,{variant:"h4",component:"h4",children:"Login"}),(0,t.jsx)(i.gN,{component:d.n,name:"username",id:"username",margin:"normal",required:!0,fullWidth:!0,label:"Username",autoComplete:"email",autoFocus:!0}),(0,t.jsx)(i.gN,{component:d.n,name:"password",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,t.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Login"})]})};return(0,t.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,t.jsx)(l.Z,{sx:{maxWidth:450,textAlign:"center"},children:(0,t.jsx)(u.Z,{children:(0,t.jsx)(i.J9,{initialValues:{username:"",password:""},onSubmit:async e=>{let t=await r((0,g.x4)(e));"rejected"===t.meta.requestStatus?alert("Login Failed!"):n.push("/admin/user")},children:e=>f(e)})})})})};n.default=(0,f.Z)(x)}},function(e){e.O(0,[759,903,28,774,888,179],function(){return e(e.s=6177)}),_N_E=e.O()}]);
//# sourceMappingURL=login-ded13ba78d256d42.js.map