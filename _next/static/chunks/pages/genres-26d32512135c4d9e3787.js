(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{6513:function(n,e,r){"use strict";r.d(e,{Y:function(){return s}});var t=r(7261);function i(){var n=(0,t.Z)(["\n  query genres($name: String, $limit: Int, $offset: Int) {\n    genres(name: $name, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n"]);return i=function(){return n},n}var s=(0,r(3121).ZP)(i())},867:function(n,e,r){"use strict";var t=r(5893),i=(r(7294),r(5887));e.Z=function(n){var e=n.showButton,r=n.onClick;return(0,t.jsx)(t.Fragment,{children:e&&(0,t.jsx)(i.zx,{onClick:r,children:"\u7d9a\u304d\u3092\u8aad\u307f\u8fbc\u3080"})})}},4516:function(n,e,r){"use strict";r.r(e);var t=r(5893),i=r(8140),s=r(2292),c=r(7294),u=r(1664),a=r(5887),o=r(6829),f=r(6513),l=r(6146),d=r(867);e.default=function(){var n=(0,c.useState)([]),e=n[0],r=n[1],h=(0,c.useState)(0),x=h[0],m=h[1],j=(0,c.useState)(!0),g=j[0],v=j[1],y=(0,o.useQuery)(f.Y,{variables:{limit:20}}).data;(0,c.useEffect)((function(){y&&y.genres&&(r(y.genres),m(y.genres.length),v(20===y.genres.length))}),[y]);var b=(0,o.useLazyQuery)(f.Y),w=(0,s.Z)(b,2),Z=w[0],_=w[1],E=_.data,C=_.called,p=_.loading;(0,c.useEffect)((function(){if(C&&E)try{var n=[].concat((0,i.Z)(e),(0,i.Z)(E.genres));r(n),m(n.length),v(20===E.genres.length)}catch(t){return}}),[C,E]);var S=(0,c.useContext)(l.w).setIsLoading;return(0,c.useEffect)((function(){S(p)}),[p,S]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("main",{children:(0,t.jsx)(a.W2,{children:(0,t.jsxs)(a.$0,{children:[(0,t.jsx)("h1",{children:"\u30ab\u30c6\u30b4\u30ea\u30fc\u4e00\u89a7"}),(0,t.jsx)(a.EK,{children:(0,t.jsx)(u.default,{href:"/genres/new",children:(0,t.jsx)(a.zx,{children:"\u65b0\u898f\u767b\u9332"})})}),(0,t.jsx)(a.iA,{children:(0,t.jsx)(a.RM,{children:e.map((function(n){return(0,t.jsxs)(a.SC,{children:[(0,t.jsx)(a.C5,{children:n.id}),(0,t.jsx)(a.C5,{children:n.name}),(0,t.jsx)(a.C5,{children:(0,t.jsx)(u.default,{href:"/genres/".concat(n.id),children:(0,t.jsx)(a.zx,{className:"is-small",children:"\u8a73\u7d30"})})})]},n.id)}))})}),(0,t.jsx)(a.EK,{children:(0,t.jsx)(d.Z,{showButton:g,onClick:function(){p||Z({variables:{offset:x,limit:20}})}})})]})})})})}},5002:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/genres",function(){return r(4516)}])},9391:function(n,e,r){"use strict";function t(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}r.d(e,{Z:function(){return t}})},8140:function(n,e,r){"use strict";r.d(e,{Z:function(){return c}});var t=r(5093);var i=r(9391),s=r(355);function c(n){return function(n){if(Array.isArray(n))return(0,t.Z)(n)}(n)||(0,i.Z)(n)||(0,s.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(n){n.O(0,[774,888,179],(function(){return e=5002,n(n.s=e);var e}));var e=n.O();_N_E=e}]);