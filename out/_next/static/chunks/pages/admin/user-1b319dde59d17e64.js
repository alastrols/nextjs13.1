(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{5542:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/user",function(){return t(1091)}])},5078:function(e,n,t){"use strict";t.d(n,{Z:function(){return G}});var i=t(5893),r=t(7294),a=t(1496),s=t(7357),o=t(6720),l=t(2293),c=t(155),d=t(3946),u=t(326),h=t(1988),x=t(5294),p=t(8972),g=t(7027),m=t(2686);let f=(0,a.ZP)(l.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{transition:n.transitions.create(["margin","width"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),...t&&{width:"calc(100% - ".concat(240,"px)"),marginLeft:"".concat(240,"px"),transition:n.transitions.create(["margin","width"],{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen})}}});function Z(e){let{open:n,onDrawerOpen:t}=e,[a,o]=r.useState(!1),l=()=>{o(!1)},Z=(0,m.t)(),[j,b]=r.useState(null),v=r.useRef(null);return r.useEffect(()=>{b(v.current)},[v]),(0,i.jsx)(f,{position:"fixed",open:n,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",sx:{mr:2,...n&&{display:"none"}},children:(0,i.jsx)(u.Z,{})}),(0,i.jsx)(s.Z,{sx:{flexGrow:1}}),(0,i.jsxs)(s.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,i.jsx)(d.Z,{ref:v,"aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:()=>o(!a),children:(0,i.jsx)(h.Z,{})}),(0,i.jsx)(x.Z,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:l,children:(0,i.jsx)(p.Z,{onClick:()=>Z((0,g.kS)()),children:"Logout"})})]})]})})}var j=t(2734),b=t(7533),v=t(8462),w=t(7720),S=t(9572),y=t(6215),P=t(8885),C=t(9334),k=t(6447),D=t(891),M=t(1664),_=t.n(M),N=t(1718),L=t(1163),O=t(5398),E=t(5675),R=t.n(E),I=t(9473);let T=(0,a.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",padding:n.spacing(0,1),...n.mixins.toolbar,justifyContent:"flex-end"}});function z(e){let{open:n,onDrawerClose:t}=e,r=(0,j.Z)(),a=(0,L.useRouter)();return(0,I.v9)(e=>e.admin),(0,i.jsxs)(b.ZP,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:n,children:[(0,i.jsx)(T,{children:(0,i.jsxs)(k.Z,{direction:"row",alignItems:"center",children:[(0,i.jsx)(R(),{width:200,height:68,unoptimized:!0,alt:"logo",src:"/static/images/logo.png"}),(0,i.jsx)(d.Z,{onClick:t,children:"ltr"===r.direction?(0,i.jsx)(S.Z,{}):(0,i.jsx)(y.Z,{})})]})}),(0,i.jsx)(w.Z,{}),(0,i.jsx)(v.Z,{children:(0,i.jsx)(_(),{href:"/admin/user",style:{textDecoration:"none",color:"#000000DE"},passHref:!0,children:(0,i.jsxs)(D.ZP,{button:!0,className:"/admin/user"===a.pathname?"Mui-selected":"/admin/user/edit"===a.pathname?"Mui-selected":"/admin/user/add"===a.pathname?"Mui-selected":"",children:[(0,i.jsx)(P.Z,{children:(0,i.jsx)(O.Z,{})}),(0,i.jsx)(C.Z,{primary:"User"})]})})}),(0,i.jsx)(v.Z,{children:(0,i.jsx)(_(),{href:"/admin/news",style:{textDecoration:"none",color:"#000000DE"},passHref:!0,children:(0,i.jsxs)(D.ZP,{button:!0,className:"/admin/news"===a.pathname?"Mui-selected":"/admin/user/edit"===a.pathname?"Mui-selected":"/admin/user/add"===a.pathname?"Mui-selected":"",children:[(0,i.jsx)(P.Z,{children:(0,i.jsx)(N.Z,{})}),(0,i.jsx)(C.Z,{primary:"News"})]})})})]})}let B=(0,a.ZP)("main",{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{flexGrow:1,padding:n.spacing(3),transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px"),...t&&{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen}),marginLeft:0}}}),F=(0,a.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",padding:n.spacing(0,1),...n.mixins.toolbar,justifyContent:"flex-end"}});function G(e){let{children:n}=e,[t,a]=r.useState(!0),l=()=>{a(!0)},c=()=>{a(!1)};return(0,i.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,i.jsx)(o.ZP,{}),(0,i.jsx)(Z,{open:t,onDrawerOpen:l}),(0,i.jsx)(z,{open:t,onDrawerClose:c}),(0,i.jsxs)(B,{open:t,children:[(0,i.jsx)(F,{}),n]})]})}},6477:function(e,n,t){"use strict";var i=t(5893);t(7294);var r=t(1163),a=t(2686),s=t(7027);let o=e=>n=>{let t=(0,r.useRouter)(),{route:o}=t,{data:l,isAuthenticated:c,isAuthenticating:d}=(0,a.W)(e=>e.login),u=(0,a.t)();if(d)return u((0,s.Gg)()),null;if("/admin/login"!==o&&"/admin/register"!==o){if(!c)return t.push("/admin/login"),null}else if(c)return t.push("/admin/user"),null;return"/admin"==o?c?(t.push("/admin/user"),null):(t.push("/admin/login"),null):(0,i.jsx)(e,{...n})};n.Z=o},1091:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return V},default:function(){return Q}});var i=t(5893),r=t(6477),a=t(7294),s=t(2686),o=t(5078),l=t(1903),c=t(7357),d=t(7906),u=t(295),h=t(3252),x=t(2882),p=t(5347),g=t(3816),m=t(629),f=t(9368),Z=t(155),j=t(1796),b=t(5861),v=t(1733),w=t(3946),S=t(9332),y=t(6455),P=t.n(y);function C(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function k(e,n,t,i,r){return{name:e,calories:n,fat:t,carbs:i,protein:r}}let D=[k("Cupcake",305,3.7,67,4.3),k("Donut",452,25,51,4.9),k("Eclair",262,16,24,6),k("Frozen yoghurt",159,6,24,4),k("Gingerbread",356,16,49,3.9),k("Honeycomb",408,3.2,87,6.5),k("Ice cream sandwich",237,9,37,4.3),k("Jelly Bean",375,0,94,0),k("KitKat",518,26,65,7),k("Lollipop",392,.2,98,0),k("Marshmallow",318,0,81,2),k("Nougat",360,19,9,37),k("Oreo",437,18,63,4)],M=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];var _={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},N=t(3184),L=t(3366),O=t(7462),E=t(4780),R=t(6010),I=t(7739),T=(0,t(8169).Z)((0,i.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),z=t(1496),B=t(7623),F=t(8216),G=t(1588),$=t(4867);function A(e){return(0,$.Z)("MuiTableSortLabel",e)}let H=(0,G.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),W=["active","children","className","direction","hideSortIcon","IconComponent"],Y=e=>{let{classes:n,direction:t,active:i}=e,r={root:["root",i&&"active"],icon:["icon",`iconDirection${(0,F.Z)(t)}`]};return(0,E.Z)(r,A,n)},q=(0,z.ZP)(I.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,t.active&&n.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${H.icon}`]:{opacity:.5}},[`&.${H.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${H.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),K=(0,z.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.icon,n[`iconDirection${(0,F.Z)(t.direction)}`]]}})(({theme:e,ownerState:n})=>(0,O.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})),X=a.forwardRef(function(e,n){let t=(0,B.Z)({props:e,name:"MuiTableSortLabel"}),{active:r=!1,children:a,className:s,direction:o="asc",hideSortIcon:l=!1,IconComponent:c=T}=t,d=(0,L.Z)(t,W),u=(0,O.Z)({},t,{active:r,direction:o,hideSortIcon:l,IconComponent:c}),h=Y(u);return(0,i.jsxs)(q,(0,O.Z)({className:(0,R.Z)(h.root,s),component:"span",disableRipple:!0,ownerState:u,ref:n},d,{children:[a,l&&!r?null:(0,i.jsx)(K,{as:c,className:(0,R.Z)(h.icon),ownerState:u})]}))});function J(e){let{onSelectAllClick:n,order:t,orderBy:r,numSelected:a,rowCount:s,onRequestSort:o}=e,l=e=>n=>{o(n,e)};return(0,i.jsx)(N.Z,{children:(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(h.Z,{padding:"checkbox",children:(0,i.jsx)(f.Z,{color:"primary",indeterminate:a>0&&a<s,checked:s>0&&a===s,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),M.map(e=>(0,i.jsx)(h.Z,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,i.jsxs)(X,{active:r===e.id,direction:r===e.id?t:"asc",onClick:l(e.id),children:[e.label,r===e.id?(0,i.jsx)(c.Z,{component:"span",sx:_,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id))]})})}let U=e=>{let{message:n}=e,t=(0,s.t)(),[r,y]=a.useState(""),[k,M]=(0,a.useState)("asc"),[_,N]=(0,a.useState)(""),[L,O]=(0,a.useState)([]),[E,R]=(0,a.useState)(0),[I,T]=(0,a.useState)(!1),[z,B]=(0,a.useState)(5),F=(e,n)=>{M(_===n&&"asc"===k?"desc":"asc"),N(n)},G=e=>{if(e.target.checked){let n=D.map(e=>e.name);O(n);return}O([])},$=(e,n)=>{let t=L.indexOf(n),i=[];-1===t?i=i.concat(L,n):0===t?i=i.concat(L.slice(1)):t===L.length-1?i=i.concat(L.slice(0,-1)):t>0&&(i=i.concat(L.slice(0,t),L.slice(t+1))),O(i)},A=(e,n)=>{R(n)},H=e=>{B(parseInt(e.target.value,10)),R(0)},W=e=>-1!==L.indexOf(e);E>0&&D.length;let Y=e=>{P().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(n=>{n.isConfirmed&&P().fire("Deleted!","Your data has been deleted.","success").then(function(){console.log(e),O([])})})};return a.useEffect(()=>{},[t,r]),(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(l.Z,{fullWidth:!0,value:r,label:"Search...",onChange:e=>{e.preventDefault(),console.log(e.target.value),y(e.target.value)}}),(0,i.jsx)(c.Z,{sx:{width:"100%",mt:3},children:(0,i.jsxs)(m.Z,{sx:{width:"100%",mb:2},children:[(0,i.jsx)(function(e){let{numSelected:n,valSelected:t}=e;return(0,i.jsxs)(Z.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...n>0&&{bgcolor:e=>(0,j.Fq)(e.palette.primary.main,e.palette.action.activatedOpacity)}},children:[n>0?(0,i.jsxs)(b.Z,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):(0,i.jsx)(b.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),n>0?(0,i.jsx)(S.Z,{title:"Delete",children:(0,i.jsx)(w.Z,{color:"error",onClick:()=>Y(t),children:(0,i.jsx)(v.Z,{})})}):(0,i.jsx)(S.Z,{title:"",children:(0,i.jsx)(w.Z,{})})]})},{numSelected:L.length,valSelected:L}),(0,i.jsx)(x.Z,{children:(0,i.jsxs)(d.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:I?"small":"medium",children:[(0,i.jsx)(J,{numSelected:L.length,order:k,orderBy:_,onSelectAllClick:G,onRequestSort:F,rowCount:D.length}),(0,i.jsx)(u.Z,{children:(function(e,n){let t=e.map((e,n)=>[e,n]);return t.sort((e,t)=>{let i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]}),t.map(e=>e[0])})(D,"desc"===k?(e,n)=>C(e,n,_):(e,n)=>-C(e,n,_)).slice(E*z,E*z+z).map((e,n)=>{let t=W(e.name),r="enhanced-table-checkbox-".concat(n);return(0,i.jsxs)(g.Z,{hover:!0,onClick:n=>$(n,e.name),role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,children:[(0,i.jsx)(h.Z,{padding:"checkbox",children:(0,i.jsx)(f.Z,{color:"primary",checked:t,inputProps:{"aria-labelledby":r}})}),(0,i.jsx)(h.Z,{component:"th",id:r,scope:"row",padding:"none",children:e.name}),(0,i.jsx)(h.Z,{align:"right",children:e.calories}),(0,i.jsx)(h.Z,{align:"right",children:e.fat}),(0,i.jsx)(h.Z,{align:"right",children:e.carbs}),(0,i.jsx)(h.Z,{align:"right",children:e.protein})]},e.name)})})]})}),(0,i.jsx)(p.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:D.length,rowsPerPage:z,page:E,onPageChange:A,onRowsPerPageChange:H})]})})]})};var V=!0,Q=(0,r.Z)(U)}},function(e){e.O(0,[759,133,903,89,774,888,179],function(){return e(e.s=5542)}),_N_E=e.O()}]);
//# sourceMappingURL=user-1b319dde59d17e64.js.map