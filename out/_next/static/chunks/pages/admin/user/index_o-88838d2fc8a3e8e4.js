(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{7866:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/user/index_o",function(){return i(1763)}])},5078:function(n,e,i){"use strict";i.d(e,{Z:function(){return T}});var r=i(5893),t=i(7294),s=i(1496),a=i(7357),o=i(6720),l=i(2293),d=i(155),u=i(3946),c=i(326),x=i(1988),h=i(5294),p=i(8972),f=i(7027),g=i(2686);let m=(0,s.ZP)(l.Z,{shouldForwardProp:n=>"open"!==n})(n=>{let{theme:e,open:i}=n;return{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),...i&&{width:"calc(100% - ".concat(240,"px)"),marginLeft:"".concat(240,"px"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})}}});function j(n){let{open:e,onDrawerOpen:i}=n,[s,o]=t.useState(!1),l=()=>{o(!1)},j=(0,g.t)(),[Z,w]=t.useState(null),v=t.useRef(null);return t.useEffect(()=>{w(v.current)},[v]),(0,r.jsx)(m,{position:"fixed",open:e,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(u.Z,{color:"inherit","aria-label":"open drawer",onClick:i,edge:"start",sx:{mr:2,...e&&{display:"none"}},children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)(a.Z,{sx:{flexGrow:1}}),(0,r.jsxs)(a.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,r.jsx)(u.Z,{ref:v,"aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:()=>o(!s),children:(0,r.jsx)(x.Z,{})}),(0,r.jsx)(h.Z,{anchorEl:Z,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:l,children:(0,r.jsx)(p.Z,{onClick:()=>j((0,f.kS)()),children:"Logout"})})]})]})})}var Z=i(2734),w=i(7533),v=i(8462),_=i(7720),k=i(9572),y=i(6215),P=i(8885),S=i(9334),b=i(6447),C=i(891),N=i(1664),E=i.n(N),M=i(1718),O=i(1163),D=i(5398),G=i(5675),z=i.n(G),L=i(9473);let I=(0,s.ZP)("div")(n=>{let{theme:e}=n;return{display:"flex",alignItems:"center",padding:e.spacing(0,1),...e.mixins.toolbar,justifyContent:"flex-end"}});function R(n){let{open:e,onDrawerClose:i}=n,t=(0,Z.Z)(),s=(0,O.useRouter)();return(0,L.v9)(n=>n.admin),(0,r.jsxs)(w.ZP,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:e,children:[(0,r.jsx)(I,{children:(0,r.jsxs)(b.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(z(),{width:200,height:68,unoptimized:!0,alt:"logo",src:"/static/images/logo.png"}),(0,r.jsx)(u.Z,{onClick:i,children:"ltr"===t.direction?(0,r.jsx)(k.Z,{}):(0,r.jsx)(y.Z,{})})]})}),(0,r.jsx)(_.Z,{}),(0,r.jsx)(v.Z,{children:(0,r.jsx)(E(),{href:"/admin/user",style:{textDecoration:"none",color:"#000000DE"},passHref:!0,children:(0,r.jsxs)(C.ZP,{button:!0,className:"/admin/user"===s.pathname?"Mui-selected":"/admin/user/edit"===s.pathname?"Mui-selected":"/admin/user/add"===s.pathname?"Mui-selected":"",children:[(0,r.jsx)(P.Z,{children:(0,r.jsx)(D.Z,{})}),(0,r.jsx)(S.Z,{primary:"User"})]})})}),(0,r.jsx)(v.Z,{children:(0,r.jsx)(E(),{href:"/admin/news",style:{textDecoration:"none",color:"#000000DE"},passHref:!0,children:(0,r.jsxs)(C.ZP,{button:!0,className:"/admin/news"===s.pathname?"Mui-selected":"/admin/user/edit"===s.pathname?"Mui-selected":"/admin/user/add"===s.pathname?"Mui-selected":"",children:[(0,r.jsx)(P.Z,{children:(0,r.jsx)(M.Z,{})}),(0,r.jsx)(S.Z,{primary:"News"})]})})})]})}let F=(0,s.ZP)("main",{shouldForwardProp:n=>"open"!==n})(n=>{let{theme:e,open:i}=n;return{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px"),...i&&{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),H=(0,s.ZP)("div")(n=>{let{theme:e}=n;return{display:"flex",alignItems:"center",padding:e.spacing(0,1),...e.mixins.toolbar,justifyContent:"flex-end"}});function T(n){let{children:e}=n,[i,s]=t.useState(!0),l=()=>{s(!0)},d=()=>{s(!1)};return(0,r.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,r.jsx)(o.ZP,{}),(0,r.jsx)(j,{open:i,onDrawerOpen:l}),(0,r.jsx)(R,{open:i,onDrawerClose:d}),(0,r.jsxs)(F,{open:i,children:[(0,r.jsx)(H,{}),e]})]})}},6477:function(n,e,i){"use strict";var r=i(5893);i(7294);var t=i(1163),s=i(2686),a=i(7027);let o=n=>e=>{let i=(0,t.useRouter)(),{route:o}=i,{data:l,isAuthenticated:d,isAuthenticating:u}=(0,s.W)(n=>n.login),c=(0,s.t)();if(u)return c((0,a.Gg)()),null;if("/admin/login"!==o&&"/admin/register"!==o){if(!d)return i.push("/admin/login"),null}else if(d)return i.push("/admin/user"),null;return"/admin"==o?d?(i.push("/admin/user"),null):(i.push("/admin/login"),null):(0,r.jsx)(n,{...e})};e.Z=o},1763:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return u}});var r=i(5893),t=i(6477);i(7294);var s=i(2686),a=i(5078),o=i(1664),l=i.n(o);let d=n=>{let{message:e}=n;(0,s.t)();let{data:i,pending:t,error:o}=(0,s.W)(n=>n.kanyeQuote);return(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"User"}),(0,r.jsx)("p",{children:e}),(0,r.jsx)(l(),{href:"/admin/news",children:"GO News"})]})})};var u=!0;e.default=(0,t.Z)(d)}},function(n){n.O(0,[759,133,774,888,179],function(){return n(n.s=7866)}),_N_E=n.O()}]);
//# sourceMappingURL=index_o-88838d2fc8a3e8e4.js.map