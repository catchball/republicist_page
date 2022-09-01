(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{6559:function(n,e,r){"use strict";r.d(e,{xN:function(){return s},Id:function(){return a},$I:function(){return d}});var t=r(7261),i=r(3121);function c(){var n=(0,t.Z)(["\n  mutation ($id: Int!) {\n    deleteAuthor(id: $id) {\n      status\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=(0,t.Z)(["\n  mutation ($id: Int!, $name: String!, $description: String, $genreIds: [Int]) {\n    updateAuthor(\n      id: $id\n      name: $name\n      description: $description\n      genreIds: $genreIds\n    ) {\n      author {\n        id\n        name\n        description\n      }\n    }\n  }\n"]);return o=function(){return n},n}function u(){var n=(0,t.Z)(["\n  mutation ($name: String!, $description: String, $genreIds: [Int]) {\n    createAuthor(name: $name, description: $description, genreIds: $genreIds) {\n      author {\n        id\n        name\n        description\n      }\n    }\n  }\n"]);return u=function(){return n},n}var s=(0,i.ZP)(u()),a=(0,i.ZP)(o()),d=(0,i.ZP)(c())},6513:function(n,e,r){"use strict";r.d(e,{Y:function(){return c}});var t=r(7261);function i(){var n=(0,t.Z)(["\n  query genres($name: String, $limit: Int, $offset: Int) {\n    genres(name: $name, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n"]);return i=function(){return n},n}var c=(0,r(3121).ZP)(i())},3050:function(n,e,r){"use strict";r.d(e,{Z:function(){return h}});var t=r(5893),i=r(6265),c=r(7294),o=r(6829),u=r(5887),s=r(6513),a=r(9999),d=function(n){var e=n.name,r=n.items,i=n.state,c=n.onChange;return(0,t.jsx)(t.Fragment,{children:r.map((function(n,r){var o=n.value,u=n.label;return(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"checkbox",name:e,value:o,checked:i.includes(o),onChange:function(n){return c(n.target.checked?[].concat((0,a.Z)(i),[o]):i.filter((function(n){return n!=o})))}}),"\xa0",u]},r)}))})};function f(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){(0,i.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var h=function(n){var e=n.id,r=n.author,i=n.onChange,a=(0,c.useState)([]),f=a[0],h=a[1],p=(0,o.useQuery)(s.Y).data;return(0,c.useEffect)((function(){p&&p.genres&&h(p.genres)}),[p]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(u.iA,{children:(0,t.jsxs)(u.RM,{children:[e&&(0,t.jsxs)(u.SC,{children:[(0,t.jsx)(u.xD,{children:"ID"}),(0,t.jsx)(u.C5,{children:e})]}),(0,t.jsxs)(u.SC,{children:[(0,t.jsx)(u.xD,{children:"\u540d\u524d"}),(0,t.jsx)(u.C5,{children:(0,t.jsx)(u.gN,{children:(0,t.jsx)(u.II,{value:r.name||"",onChange:function(n){return i(l(l({},r),{},{name:n.target.value}))}})})})]}),(0,t.jsxs)(u.SC,{children:[(0,t.jsx)(u.xD,{children:"\u8aac\u660e"}),(0,t.jsx)(u.C5,{children:(0,t.jsx)(u.gN,{children:(0,t.jsx)(u.II,{value:r.description||"",onChange:function(n){return i(l(l({},r),{},{description:n.target.value}))}})})})]}),(0,t.jsxs)(u.SC,{children:[(0,t.jsx)(u.xD,{children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),(0,t.jsx)(u.C5,{children:(0,t.jsx)(u.gN,{children:(0,t.jsx)(d,{items:f.map((function(n){return{value:n.id,label:n.name}})),name:"genre-id",onChange:function(n){i(l(l({},r),{},{genreIds:n}))},state:r.genreIds||[]})})})]})]})})})}},1759:function(n,e,r){"use strict";r.r(e);var t=r(5893),i=r(809),c=r.n(i),o=r(6265),u=r(2447),s=r(4121),a=r(7294),d=r(1163),f=r(5887),l=r(6829),h=r(6559),p=r(3050),j=r(6146),g=r(9249);function m(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function x(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){(0,o.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}e.default=function(){var n=(0,a.useContext)(j.w).setError,e=(0,d.useRouter)(),r=(0,a.useState)({name:""}),i=r[0],o=r[1],m=(0,l.useMutation)(h.xN),b=(0,s.Z)(m,1)[0],v=function(){var r=(0,u.Z)(c().mark((function r(){var t,u,s,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b({variables:x({},i)});case 2:if(t=r.sent,u=t.data,!(s=t.errors)||!s[0]){r.next=9;break}return console.log(s),n({message:s[0].message}),r.abrupt("return");case 9:u&&(a=u.createAuthor.author,o(a),e.push("/authors/".concat(a.id))),g.Am.success("\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u306e\u767b\u9332\u306b\u6210\u529f\u3057\u307e\u3057\u305f");case 11:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("main",{children:(0,t.jsxs)(f.W2,{children:[(0,t.jsxs)(f.$0,{children:[(0,t.jsx)("h1",{children:"\u65b0\u898f\u767b\u9332"}),(0,t.jsx)("div",{children:(0,t.jsx)(p.Z,{author:i,onChange:function(n){return o(x({},n))}})})]}),(0,t.jsx)(f.$0,{children:(0,t.jsx)(f.EK,{children:(0,t.jsx)(f.zx,{onClick:v,children:"\u767b\u9332"})})})]})})})}},4726:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/new",function(){return r(1759)}])},9999:function(n,e,r){"use strict";r.d(e,{Z:function(){return c}});var t=r(5093);var i=r(355);function c(n){return function(n){if(Array.isArray(n))return(0,t.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(n){n.O(0,[774,888,179],(function(){return e=4726,n(n.s=e);var e}));var e=n.O();_N_E=e}]);