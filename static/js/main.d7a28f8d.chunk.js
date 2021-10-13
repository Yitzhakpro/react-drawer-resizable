(this["webpackJsonpreact-drawer-resizable-example"]=this["webpackJsonpreact-drawer-resizable-example"]||[]).push([[0],{139:function(e,t,a){e.exports=a(220)},140:function(e,t,a){},145:function(e,t,a){},218:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);a(140);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=a(35),i=a(68),s=a(22),u=a(223),m=a(229),h=function(){return r.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h1",null,"Under Construction"),r.a.createElement(m.a,{style:{fontSize:"16px",marginLeft:"5px",marginBottom:"5px",color:"orange"}}))},d=a(65),p=a(71),f=a(62),v=function(e){return"left"===e||"right"===e?"100%":"20%"},g=function(e){return"left"===e||"right"===e?"30%":"100%"},E=function(e){var t=e.className,a=e.style,r=e.open,l=void 0!==r&&r,c=e.direction,o=void 0===c?"left":c,i=e.speed,s=void 0===i?.3:i,u=e.height,m=void 0===u?v(o):u,h=e.width,d=void 0===h?g(o):h,E=e.children,b=l?"drawer open":"drawer close",O="left"===o||"right"===o?"width":"height";return Object(n.createElement)("div",{className:Object(f.a)(b,t),style:Object(p.a)(Object(p.a)({},a),{},{height:m,width:d,transition:"".concat(O," ").concat(s,"s ease-out, padding ").concat(s/4,"s ease-out, box-shadow ").concat(s,"s ease-out")})},Object(n.createElement)("div",{className:"drawer-content"},E))};E.displayName="Drawer";var b=function(e){var t=e.className,a=e.height,r=e.width,l=e.rotate;return Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:Object(f.a)(t,"h-6 w-6"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",height:a,width:r,style:{transform:"rotate(".concat(l,"deg)")}},Object(n.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"}))},O=function(e){var t=e.className,a=e.size,r=void 0===a?"short":a,l=e.open,c=e.onModeChange;return Object(n.createElement)("button",{className:Object(f.a)(t,"react-drawer-wrapper-mode-btn",r),onClick:function(){return c(!l)}},Object(n.createElement)(b,{height:"20px",width:"20px"}))},j=function(e){var t,a=e.className,r=e.style,l=e.buttonSize,c=void 0===l?"short":l,o=e.open,i=void 0!==o&&o,s=e.onModeChange,u=void 0===s?function(){}:s,m=e.direction,h=void 0===m?"left":m,E=e.speed,b=void 0===E?.3:E,j=e.height,y=void 0===j?v(h):j,w=e.width,x=void 0===w?g(h):w,C=e.children,z="drawer-wrapper-content ".concat(i?"open":"close"),S="left"===h||"right"===h?"width":"height";return Object(n.createElement)("div",{className:Object(f.a)(z,a),style:Object(p.a)(Object(p.a)({},r),{},(t={},Object(d.a)(t,S,"calc(100% - ".concat("width"===S?x:y,")")),Object(d.a)(t,"transition","".concat(S," ").concat(b,"s ease-out")),t))},Object(n.createElement)(O,{size:c,open:i,onModeChange:u}),C)};j.displayName="Content";var y=function(e){var t=e.className,a=e.style,r=e.buttonSize,l=e.open,c=void 0!==l&&l,o=e.onModeChange,i=e.direction,s=void 0===i?"left":i,u=e.height,m=void 0===u?v(s):u,h=e.width,d=void 0===h?g(s):h,p=e.speed,E=void 0===p?.3:p,b=e.children,O="left"===s||"right"===s?"short":"long";return Object(n.createElement)("div",{className:Object(f.a)("react-drawer-wrapper","drawer-".concat(s,"-mode"),t),style:a},n.Children.map(b,(function(e){switch(e.type.displayName){case"Drawer":return Object(n.cloneElement)(e,{open:c,direction:s,height:m,width:d,speed:E});case"Content":return Object(n.cloneElement)(e,{buttonSize:r||O,open:c,onModeChange:o,direction:s,height:m,width:d,speed:E});default:return e}})))};y.Drawer=E,y.Content=j;var w,x=function(e){var t=e.direction,a=e.buttonSize,n=e.speed,l=e.height,c=e.width,o=e.open,i=e.onModeChange;return r.a.createElement(y,{className:"sample-drawer-wrapper",style:{height:"500px"},direction:t,buttonSize:a,speed:n,height:l,width:c,open:o,onModeChange:i},r.a.createElement(y.Drawer,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",null,"sample drawer")),r.a.createElement(y.Content,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",null,"sample content")))},C=a(227),z=a(222),S=a(225),N=a(224),M=a(226),k=(a(145),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("left"),i=Object(o.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)("short"),h=Object(o.a)(m,2),d=h[0],p=h[1];Object(n.useEffect)((function(){p("left"===s||"right"===s?"short":"long")}),[s]);var f=Object(n.useState)(!1),v=Object(o.a)(f,2),g=v[0],E=v[1],b=Object(n.useState)(.3),O=Object(o.a)(b,2),j=O[0],y=O[1],w=Object(n.useState)(!1),k=Object(o.a)(w,2),I=k[0],D=k[1],B=Object(n.useState)(100),L=Object(o.a)(B,2),R=L[0],W=L[1],H=Object(n.useState)("%"),P=Object(o.a)(H,2),A=P[0],F=P[1],G=Object(n.useState)(30),J=Object(o.a)(G,2),K=J[0],V=J[1],T=Object(n.useState)("%"),U=Object(o.a)(T,2),Y=U[0],q=U[1];return r.a.createElement("div",{className:"examples-page",style:{margin:"1% 5%"}},r.a.createElement("div",{className:"example-section"},r.a.createElement("h1",null,"Change direction & Button Size"),r.a.createElement("h4",null,'When direction is: left / right, the default button size is "short"'),r.a.createElement("h4",null,'When direction is: top / bottom, the default button size is "long"'),r.a.createElement(C.a.Group,{value:s,onChange:function(e){u(e.target.value)}},r.a.createElement(C.a,{value:"top"},"Top"),r.a.createElement(C.a,{value:"bottom"},"Bottom"),r.a.createElement(C.a,{value:"left"},"Left"),r.a.createElement(C.a,{value:"right"},"Right")),r.a.createElement(z.a,{type:"vertical",style:{margin:"0 0.5%",background:"#333"}}),r.a.createElement(C.a.Group,{value:d,onChange:function(e){p(e.target.value)}},r.a.createElement(C.a,{value:"long"},"Long"),r.a.createElement(C.a,{value:"short"},"Short")),r.a.createElement(x,{direction:s,buttonSize:d,open:a,onModeChange:function(e){l(e)}})),r.a.createElement("div",{className:"example-section"},r.a.createElement("h1",null,"Change Speed"),r.a.createElement(S.a,{value:j,onChange:function(e){y(e)},max:5,step:.1}),r.a.createElement(x,{speed:j,open:g,onModeChange:function(e){E(e)}})),r.a.createElement("div",{className:"example-section"},r.a.createElement("h1",null,"Change Height & Width"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("span",null,"Height: "),r.a.createElement(N.a,{style:{width:"15%"},placeholder:"Input a number",type:"number",value:R,onChange:function(e){W(parseInt(e.target.value))}}),r.a.createElement(M.a,{value:A,onChange:function(e){F(e)}},r.a.createElement(M.a.Option,{value:"px"},"px"),r.a.createElement(M.a.Option,{value:"%"},"%"),r.a.createElement(M.a.Option,{value:"vh"},"vh"))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("span",null,"Width: "),r.a.createElement(N.a,{style:{width:"15%"},placeholder:"Input a number",type:"number",value:K,onChange:function(e){V(parseInt(e.target.value))}}),r.a.createElement(M.a,{value:Y,onChange:function(e){q(e)}},r.a.createElement(M.a.Option,{value:"px"},"px"),r.a.createElement(M.a.Option,{value:"%"},"%"),r.a.createElement(M.a.Option,{value:"vh"},"vh"))),r.a.createElement(x,{height:R+A,width:K+Y,open:I,onModeChange:function(e){D(e)}})))}),I=a(228),D=a(230),B=a(231),L=["svgRef","title"];function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=function(e){var t=e.svgRef,a=e.title,n=W(e,L);return r.a.createElement("svg",R({viewBox:"0 0 841.9 595.3",ref:t},n),a?r.a.createElement("title",null,a):null,w||(w=r.a.createElement("g",{fill:"#61DAFB"},r.a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),r.a.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),r.a.createElement("path",{d:"M520.5 78.1z"}))))},P=r.a.forwardRef((function(e,t){return r.a.createElement(H,R({svgRef:t},e))})),A=(a.p,u.a.Sider),F=function(e){var t=e.collapsed,a=e.onCollapse,n=Object(s.f)();return r.a.createElement(A,{theme:"light",style:{overflow:"auto",height:"100vh",position:"sticky",top:0,left:0},collapsible:!0,collapsed:t,onCollapse:a},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(P,{height:"50px",width:"100%"})),r.a.createElement(I.a,{theme:"light",mode:"inline",defaultSelectedKeys:["/"],selectedKeys:[n.pathname]},r.a.createElement(I.a.Item,{key:"/",icon:r.a.createElement(D.a,null)},r.a.createElement(i.b,{to:"/"}),"Docs"),r.a.createElement(I.a.Item,{key:"/examples",icon:r.a.createElement(B.a,null)},r.a.createElement(i.b,{to:"/examples"}),"Examples")))},G=u.a.Footer,J=function(){return r.a.createElement(G,{style:{textAlign:"center"}},r.a.createElement("h1",null,"created by Yitzhakpro"))},K=(a(218),a(219),u.a.Content),V=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(i.a,null,r.a.createElement(u.a,{style:{minHeight:"100vh"}},r.a.createElement(F,{collapsed:a,onCollapse:function(e){l(e)}}),r.a.createElement(u.a,null,r.a.createElement(K,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:h}),r.a.createElement(s.a,{path:"/examples",component:k}))),r.a.createElement(J,null))))};c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.d7a28f8d.chunk.js.map