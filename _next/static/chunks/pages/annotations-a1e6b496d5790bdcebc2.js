(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[315],{9827:function(t,n,e){"use strict";e.d(n,{l:function(){return i}});var r=e(513),i={topics:function(t){var n=t.texts,e=t.topicCount;return r.x.post("/analyses/topics",{texts:n,topic_count:e})},sentiments:function(t){var n=t.texts;return r.x.post("/analyses/sentiments",{texts:n})},bertSentiments:function(t){var n=t.texts;return r.x.post("/analyses/bert/sentiments",{texts:n})},morphologic:function(t){var n=t.text,e=t.language;return r.x.post("/analyses/morphologic",{text:n,language:e})}}},8691:function(t,n,e){"use strict";e.d(n,{W:function(){return l}});var r=e(513),i={index:function(t){var n=t.name,e=t.tagName,i=t.annotationId,o=t.classificationOptionId,a=t.offset,s=t.limit;return r.x.get("/authors",{params:{name:n,tag_name:e,annotation_id:i,classification_option_id:o,offset:a,limit:s}})},show:function(t){var n=t.id;return r.x.get("/authors/".concat(n),{})},addTag:function(t){var n=t.id,e=t.name;return r.x.post("/authors/".concat(n,"/tag"),{name:e})}},o={index:function(t){var n=t.limit,e=t.offset,i=t.name;return r.x.get("/tags",{params:{limit:n,offset:e,name:i}})}},a={index:function(t){var n=t.limit,e=t.offset;return r.x.get("/annotations",{params:{limit:n,offset:e}})},show:function(t){var n=t.id;return r.x.get("/annotations/".concat(n),{})},update:function(t){var n=t.id,e=t.name,i=t.description,o=t.hint;return r.x.patch("/annotations/".concat(n),{name:e,description:i,hint:o})},delete:function(t){var n=t.id;return r.x.delete("/annotations/".concat(n),{})},check:function(t){var n=t.id,e=t.withDescription;return r.x.get("/annotations/".concat(n,"/check"),{params:{with_description:e}})},count:function(t){var n=t.id;return r.x.get("/annotations/".concat(n,"/count"),{})}},s={index:function(){return r.x.get("/classifications")}},c=e(9827),u=e(1680),f={index:function(t){var n=t.offset,e=t.limit,i=t.publisherId;return r.x.get("/articles",{params:{offset:n,limit:e,publisher_id:i}})},import:function(t){var n=t.url,e=t.baseUrl,i=t.publishDate,o=t.isCommit;return r.x.post("/articles/import",{url:n,base_url:e,publish_date:i,is_commit:o})}},l={annotation:a,author:i,classifications:s,tag:o,analysis:c.l,publishers:u.X,articles:f}},1680:function(t,n,e){"use strict";e.d(n,{X:function(){return a}});var r=e(6265),i=e(513);function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var a={create:function(t){return i.x.post("/publishers",function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t))},fetchArticles:function(t){var n=t.id,e=t.isCommit;return i.x.get("/publishers/".concat(n,"/articles/new"),{params:{is_commit:e}})}}},867:function(t,n,e){"use strict";var r=e(5893),i=(e(7294),e(5887));n.Z=function(t){var n=t.showButton,e=t.onClick;return(0,r.jsx)(r.Fragment,{children:n&&(0,r.jsx)(i.zx,{onClick:e,children:"\u7d9a\u304d\u3092\u8aad\u307f\u8fbc\u3080"})})}},1762:function(t,n,e){"use strict";e.r(n);var r=e(5893),i=e(9999),o=e(809),a=e.n(o),s=e(2447),c=e(7294),u=e(1664),f=e(5887),l=e(6146),d=e(867),p=e(8691);n.default=function(){var t=(0,c.useState)([]),n=t[0],e=t[1],o=(0,c.useState)({}),h=o[0],x=o[1],m=(0,c.useState)(0),j=m[0],b=m[1],v=(0,c.useState)(!0),g=v[0],y=v[1],O=function(){var t=(0,s.Z)(a().mark((function t(){var n,r,i,o,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.next=3,p.W.annotation.index({limit:20});case 3:return n=t.sent,(r=n.data.annotations)&&(e(r),b(r.length),y(20===r.length)),t.next=8,p.W.classifications.index();case 8:i=t.sent,(o=i.data.classifications)&&(s={},o.forEach((function(t){s[t.id]=t})),x(s)),C(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,c.useEffect)((function(){O()}),[]);var w=function(){var t=(0,s.Z)(a().mark((function t(r){var o,s,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.next=3,p.W.annotation.index(r);case 3:if(o=t.sent,(s=o.data).annotations&&0!=s.annotations.length){t.next=7;break}return t.abrupt("return",C(!1));case 7:c=[].concat((0,i.Z)(n),(0,i.Z)(s.annotations)),e(c),b(c.length),y(20===s.annotations.length),C(!1);case 12:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),_=(0,c.useContext)(l.w),P=_.isLoading,C=_.setIsLoading;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{children:(0,r.jsx)(f.W2,{children:(0,r.jsxs)(f.$0,{children:[(0,r.jsx)("h1",{children:"\u30d5\u30e9\u30b0\u4e00\u89a7"}),(0,r.jsx)(f.EK,{children:(0,r.jsx)(u.default,{href:"/annotations/new",children:(0,r.jsx)(f.zx,{children:"\u65b0\u898f\u767b\u9332"})})}),(0,r.jsxs)(f.iA,{children:[(0,r.jsx)(f.ss,{children:(0,r.jsxs)(f.SC,{children:[(0,r.jsx)(f.xD,{children:"ID"}),(0,r.jsx)(f.xD,{children:"\u540d\u524d"}),(0,r.jsx)(f.xD,{children:"\u8aac\u660e"}),(0,r.jsx)(f.xD,{children:"\u5206\u985e"}),(0,r.jsx)(f.xD,{children:"\u30ea\u30f3\u30af"})]})}),(0,r.jsx)(f.RM,{children:n.map((function(t){var n;return(0,r.jsxs)(f.SC,{children:[(0,r.jsx)(f.C5,{children:t.id}),(0,r.jsx)(f.C5,{children:t.name}),(0,r.jsx)(f.C5,{children:t.description}),(0,r.jsx)(f.C5,{children:t.classificationId?null===(n=h[t.classificationId])||void 0===n?void 0:n.name:""}),(0,r.jsx)(f.C5,{children:(0,r.jsx)(u.default,{href:"/annotations/".concat(t.id),children:(0,r.jsx)(f.zx,{className:"is-small",children:"\u8a73\u7d30"})})})]},t.id)}))})]}),(0,r.jsx)(f.EK,{children:(0,r.jsx)(d.Z,{showButton:g,onClick:function(){P||w({offset:j,limit:20})}})})]})})})})}},513:function(t,n,e){"use strict";e.d(n,{x:function(){return u}});var r=e(6265),i=e(9669),o=e.n(i),a=e(1745);function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u=o().create({baseURL:"".concat("https://republicist-api.reload.co.jp","/api/v1/"),responseType:"json",headers:{"Content-Type":"application/json"}});u.interceptors.request.use((function(t){return c(c({},t),{},{data:(0,a.toSnake)(t.data)})})),u.interceptors.response.use((function(t){return c(c({},t),{},{data:(0,a.toCamel)(t.data)})}),(function(t){return Promise.reject(t)}))},3023:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/annotations",function(){return e(1762)}])},9999:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(5093);var i=e(355);function o(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(t){t.O(0,[637,774,888,179],(function(){return n=3023,t(t.s=n);var n}));var n=t.O();_N_E=n}]);