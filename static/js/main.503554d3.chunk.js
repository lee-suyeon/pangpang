(this.webpackJsonppangpang=this.webpackJsonppangpang||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(1),a=n.n(s),r=n(22),i=n.n(r),o=(n(29),n(30),n(13)),u=n(20),j=Object(s.memo)((function(e){var t,n=e.number;return t=n<=10?"#FFC312":n<=20?"#A3CB38":n<=30?"#1e90ff":n<=40?"#ff4757":"#5758BB",Object(c.jsx)("div",{className:"ball",style:{background:t},children:n})})),b=n(15),l=(n(31),function(){for(var e=Array(45).fill().map((function(e,t){return t+1})),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);var n=t[t.length-1],c=t.slice(0,6).sort((function(e,t){return e-t}));return[].concat(Object(u.a)(c),[n])});var O=function(){var e=Object(s.useMemo)((function(){return l()}),[]),t=Object(s.useState)([]),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(e),O=Object(o.a)(i,2),f=O[0],d=O[1],h=Object(s.useState)(null),m=Object(o.a)(h,2),p=m[0],x=m[1],g=Object(s.useState)(!1),v=Object(o.a)(g,2),N=v[0],T=v[1],C=Object(s.useRef)([]);Object(s.useEffect)((function(){for(var e=function(e){C.current[e]=setTimeout((function(){r((function(t){return[].concat(Object(u.a)(t),[f[e]])}))}),1e3*(e+1))},t=0;t<f.length-1;t++)e(t);return C.current[6]=setTimeout((function(){x(f[6])}),7e3),C.current[7]=setTimeout((function(){T(!0)}),8500),function(){C.current.forEach((function(e){clearTimeout(e)}))}}),[C.current]);var S=Object(s.useCallback)((function(){d(l()),r([]),x(null),T(!1),C.current=[]}),[f]);return Object(c.jsxs)("div",{className:"lotto",children:[Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsx)("span",{children:"\ud83d\udcb8 \ub2f9\ucca8 \uc22b\uc790 \ud83d\udcb8"}),Object(c.jsx)("div",{className:"result",children:a.map((function(e){return Object(c.jsx)(j,{number:e},e)}))})]}),p&&Object(c.jsxs)("div",{className:"bonus",children:[Object(c.jsx)("span",{children:"\ubcf4\ub108\uc2a4 \ud83c\udf88"}),Object(c.jsx)(j,{number:p})]}),N&&Object(c.jsx)("button",{className:"redo",onClick:S,children:"\ud55c \ubc88 \ub354!"}),Object(c.jsx)(b.a,{type:"color",config:{position:"center"},bg:!0})]})},f=(n(32),n(10));var d=function(){return Object(c.jsxs)("div",{className:"main-page",children:[Object(c.jsx)("span",{className:"new-year",children:"\ud83d\udc2e 2021 \ud83d\udc2e"}),Object(c.jsxs)("h1",{className:"main-text",children:["\ud604\ub514\ud321",Object(c.jsx)("br",{}),"\ub85c\ub610\ud321"]}),Object(c.jsxs)("div",{className:"start",children:[Object(c.jsx)("span",{className:"pang",children:"\ud83c\udf8a"}),Object(c.jsx)("p",{children:"\ud83d\udc47 \ub85c\ub610 \ub2f9\ucca8\ub418\uba74 10% \uc904 \uc0ac\ub78c\ub9cc \ud83d\udc47"}),Object(c.jsx)(f.b,{to:"/lotto",children:Object(c.jsx)("button",{className:"start-button",children:"START"})})]}),Object(c.jsx)(b.a,{type:"fountain",config:{position:"center"},bg:!0})]})},h=n(4);var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(h.a,{exact:!0,path:"/lotto",component:O})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f.a,{basename:"/pangpang",children:Object(c.jsx)(m,{})})}),document.getElementById("root")),p()}},[[38,1,2]]]);
//# sourceMappingURL=main.503554d3.chunk.js.map