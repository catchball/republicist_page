(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{9827:function(n,t,e){"use strict";e.d(t,{l:function(){return i}});var r=e(513),i={topics:function(n){var t=n.texts,e=n.topicCount;return r.x.post("/analyses/topics",{texts:t,topic_count:e})},sentiments:function(n){var t=n.texts;return r.x.post("/analyses/sentiments",{texts:t})},bertSentiments:function(n){var t=n.texts;return r.x.post("/analyses/bert/sentiments",{texts:t})},morphologic:function(n){var t=n.text,e=n.language;return r.x.post("/analyses/morphologic",{text:t,language:e})}}},8691:function(n,t,e){"use strict";e.d(t,{W:function(){return d}});var r=e(513),i={index:function(n){var t=n.name,e=n.tagName,i=n.annotationId,s=n.classificationOptionId,c=n.offset,o=n.limit;return r.x.get("/authors",{params:{name:t,tag_name:e,annotation_id:i,classification_option_id:s,offset:c,limit:o}})},show:function(n){var t=n.id;return r.x.get("/authors/".concat(t),{})},addTag:function(n){var t=n.id,e=n.name;return r.x.post("/authors/".concat(t,"/tag"),{name:e})}},s={index:function(n){var t=n.limit,e=n.offset,i=n.name;return r.x.get("/tags",{params:{limit:t,offset:e,name:i}})}},c={index:function(n){var t=n.limit,e=n.offset;return r.x.get("/annotations",{params:{limit:t,offset:e}})},show:function(n){var t=n.id;return r.x.get("/annotations/".concat(t),{})},update:function(n){var t=n.id,e=n.name,i=n.description,s=n.hint;return r.x.patch("/annotations/".concat(t),{name:e,description:i,hint:s})},delete:function(n){var t=n.id;return r.x.delete("/annotations/".concat(t),{})},check:function(n){var t=n.id,e=n.withDescription;return r.x.get("/annotations/".concat(t,"/check"),{params:{with_description:e}})},count:function(n){var t=n.id;return r.x.get("/annotations/".concat(t,"/count"),{})}},o={index:function(){return r.x.get("/classifications")}},a=e(9827),u=e(1680),l={index:function(n){var t=n.offset,e=n.limit,i=n.publisherId;return r.x.get("/articles",{params:{offset:t,limit:e,publisher_id:i}})},import:function(n){var t=n.url,e=n.baseUrl,i=n.publishDate,s=n.isCommit;return r.x.post("/articles/import",{url:t,base_url:e,publish_date:i,is_commit:s})}},d={annotation:c,author:i,classifications:o,tag:s,analysis:a.l,publishers:u.X,articles:l}},1680:function(n,t,e){"use strict";e.d(t,{X:function(){return c}});var r=e(6265),i=e(513);function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}var c={create:function(n){return i.x.post("/publishers",function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},n))},fetchArticles:function(n){var t=n.id,e=n.isCommit;return i.x.get("/publishers/".concat(t,"/articles/new"),{params:{is_commit:e}})}}},3040:function(n,t,e){"use strict";e.d(t,{Z:function(){return h}});var r=e(5893),i=e(6265),s=e(809),c=e.n(s),o=e(2447),a=e(7294),u=e(5887),l=e(8691),d=function(n){if(n)return{version:1,list:n.split("\n").filter((function(n){return n.length>1}))}};function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var h=function(n){var t,e,i=n.id,s=n.annotation,f=n.onChange,h=(0,a.useState)([]),x=h[0],j=h[1],m=function(){var n=(0,o.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.W.classifications.index();case 2:t=n.sent,(e=t.data.classifications)&&j(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,a.useEffect)((function(){m()}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.iA,{children:(0,r.jsxs)(u.RM,{children:[i&&(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.xD,{children:"ID"}),(0,r.jsx)(u.C5,{children:i})]}),(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.xD,{children:"\u540d\u524d"}),(0,r.jsx)(u.C5,{children:(0,r.jsx)(u.gN,{children:(0,r.jsx)(u.II,{value:s.name||"",onChange:function(n){return f(p(p({},s),{},{name:n.target.value}))}})})})]}),(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.xD,{children:"\u8aac\u660e"}),(0,r.jsx)(u.C5,{children:(0,r.jsx)(u.gN,{children:(0,r.jsx)(u.II,{value:s.description||"",onChange:function(n){return f(p(p({},s),{},{description:n.target.value}))}})})})]}),(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.xD,{children:"\u5206\u985e\u65b9\u6cd5"}),(0,r.jsx)(u.C5,{children:(0,r.jsxs)(u.gN,{children:[(0,r.jsx)("div",{style:{flex:"auto"},children:x.map((function(n,t){return(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:n.name,value:n.id,checked:n.id===s.classificationId,onChange:function(){return f(p(p({},s),{},{classificationId:n.id}))}}),"\xa0",n.name]},t)}))}),(0,r.jsx)(u.$0,{style:{flex:1,minHeight:"21rem",textAlign:"center"},children:(0,r.jsx)(u.iA,{children:(0,r.jsxs)(u.RM,{children:[(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.xD,{children:"ID"}),(0,r.jsx)(u.xD,{style:{minWidth:"7rem"},children:"\u540d\u79f0"}),(0,r.jsx)(u.xD,{children:"\u5024"})]}),null===(t=x.find((function(n){return n.id===s.classificationId})))||void 0===t?void 0:t.options.map((function(n){return(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.C5,{children:n.id}),(0,r.jsx)(u.C5,{children:n.name}),(0,r.jsx)(u.C5,{children:n.value})]},n.id)}))]})})})]})})]}),(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.xD,{children:"\u30d2\u30f3\u30c8"}),(0,r.jsx)(u.C5,{children:(0,r.jsxs)(u.gN,{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)("div",{style:{overflow:"scroll",width:"50%"},children:[(0,r.jsx)("label",{htmlFor:"hint-list",children:"\u4e00\u89a7"}),(0,r.jsx)(u.iA,{children:(0,r.jsx)(u.RM,{style:{maxHeight:"20rem",overflow:"scroll",display:"block"},children:null===(e=s.hint)||void 0===e?void 0:e.list.map((function(n,t){return(0,r.jsx)(u.SC,{children:(0,r.jsx)(u.C5,{children:n})},t)}))})})]}),(0,r.jsxs)("div",{style:{width:"50%"},children:[(0,r.jsx)("label",{htmlFor:"hint-textarea",children:"\u5165\u529b\u6b04"}),(0,r.jsx)(u.Kx,{id:"hint-textarea",onChange:function(n){return f(p(p({},s),{},{hint:d(n.target.value)}))},style:{width:"100%"}})]})]})})]})]})})})}},5512:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return P}});var r=e(5893),i=e(809),s=e.n(i),c=e(6265),o=e(2447),a=e(4121),u=e(7294),l=e(1163),d=e(5887),f=e(6829),p=e(7261),h=e(3121);function x(){var n=(0,p.Z)(["\n  mutation ($id: Int!) {\n    deleteAnnotation(id: $id) {\n      status\n    }\n  }\n"]);return x=function(){return n},n}function j(){var n=(0,p.Z)(["\n  mutation (\n    $id: Int!\n    $name: String!\n    $description: String\n    $classificationId: Int!\n  ) {\n    updateAnnotation(\n      id: $id\n      name: $name\n      description: $description\n      classificationId: $classificationId\n    ) {\n      annotation {\n        id\n        name\n        description\n        classificationId\n      }\n    }\n  }\n"]);return j=function(){return n},n}function m(){var n=(0,p.Z)(["\n  mutation ($name: String!, $description: String, $classificationId: Int!) {\n    createAnnotation(\n      name: $name\n      description: $description\n      classificationId: $classificationId\n    ) {\n      annotation {\n        id\n      }\n    }\n  }\n"]);return m=function(){return n},n}var b=(0,h.ZP)(m()),v=((0,h.ZP)(j()),(0,h.ZP)(x()),e(3040)),g=e(6146),O=e(9249);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function w(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){(0,c.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var P=function(){var n=(0,u.useContext)(g.w).setError,t=(0,l.useRouter)(),e=(0,u.useState)({name:"",description:void 0,classificationId:void 0}),i=e[0],c=e[1],p=(0,f.useMutation)(b),h=(0,a.Z)(p,1)[0],x=function(){var e=(0,o.Z)(s().mark((function e(){var r,c,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({variables:w({},i)});case 2:if(r=e.sent,c=r.data,!(o=r.errors)||!o[0]){e.next=9;break}return console.log(o),n({message:o[0].message}),e.abrupt("return");case 9:c&&(a=c.createAnnotation.annotation,t.push("/annotations/".concat(a.id))),O.Am.success("\u30d5\u30e9\u30b0\u306e\u767b\u9332\u306b\u6210\u529f\u3057\u307e\u3057\u305f");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{children:(0,r.jsxs)(d.W2,{children:[(0,r.jsxs)(d.$0,{children:[(0,r.jsx)("h1",{children:"\u30d5\u30e9\u30b0\u65b0\u898f\u767b\u9332"}),(0,r.jsx)("div",{children:(0,r.jsx)(v.Z,{annotation:i,onChange:function(n){return c(w({},n))}})})]}),(0,r.jsx)(d.$0,{children:(0,r.jsx)(d.EK,{children:(0,r.jsx)(d.zx,{onClick:x,children:"\u767b\u9332"})})})]})})})}},513:function(n,t,e){"use strict";e.d(t,{x:function(){return u}});var r=e(6265),i=e(9669),s=e.n(i),c=e(1745);function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var u=s().create({baseURL:"".concat("https://republicist-api.reload.co.jp","/api/v1/"),responseType:"json",headers:{"Content-Type":"application/json"}});u.interceptors.request.use((function(n){return a(a({},n),{},{data:(0,c.toSnake)(n.data)})})),u.interceptors.response.use((function(n){return a(a({},n),{},{data:(0,c.toCamel)(n.data)})}),(function(n){return Promise.reject(n)}))},2648:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/annotations/new",function(){return e(5512)}])}},function(n){n.O(0,[637,774,888,179],(function(){return t=2648,n(n.s=t);var t}));var t=n.O();_N_E=t}]);