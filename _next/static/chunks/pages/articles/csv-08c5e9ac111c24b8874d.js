(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{9827:function(t,e,r){"use strict";r.d(e,{l:function(){return i}});var n=r(513),i={topics:function(t){var e=t.texts,r=t.topicCount;return n.x.post("/analyses/topics",{texts:e,topic_count:r})},sentiments:function(t){var e=t.texts;return n.x.post("/analyses/sentiments",{texts:e})},bertSentiments:function(t){var e=t.texts;return n.x.post("/analyses/bert/sentiments",{texts:e})},morphologic:function(t){var e=t.text,r=t.language;return n.x.post("/analyses/morphologic",{text:e,language:r})}}},5558:function(t,e,r){"use strict";r.d(e,{e:function(){return i}});var n=r(513),i={index:function(t){var e=t.offset,r=t.limit,i=t.publisherId;return n.x.get("/articles",{params:{offset:e,limit:r,publisher_id:i}})},word:{count:function(t){var e=t.word;return n.x.get("/articles/word/count",{params:{word:e}})},ids:function(t){var e=t.word;return n.x.get("/articles/word/ids",{params:{word:e}})}},import:function(t){var e=t.url,r=t.publisherId,i=t.baseUrl,c=t.publishDate,s=t.isCommit;return n.x.post("/articles/import",{url:e,publisher_id:r,base_url:i,publish_date:c,is_commit:s})}}},2031:function(t,e,r){"use strict";r.d(e,{W:function(){return l}});var n=r(513),i={index:function(t){var e=t.name,r=t.tagName,i=t.annotationId,c=t.classificationOptionId,s=t.offset,o=t.limit;return n.x.get("/authors",{params:{name:e,tag_name:r,annotation_id:i,classification_option_id:c,offset:s,limit:o}})},show:function(t){var e=t.id;return n.x.get("/authors/".concat(e),{})},addTag:function(t){var e=t.id,r=t.name;return n.x.post("/authors/".concat(e,"/tag"),{name:r})}},c={index:function(t){var e=t.limit,r=t.offset,i=t.name;return n.x.get("/tags",{params:{limit:e,offset:r,name:i}})}},s={index:function(t){var e=t.limit,r=t.offset;return n.x.get("/annotations",{params:{limit:e,offset:r}})},show:function(t){var e=t.id;return n.x.get("/annotations/".concat(e),{})},update:function(t){var e=t.id,r=t.name,i=t.description,c=t.hint;return n.x.patch("/annotations/".concat(e),{name:r,description:i,hint:c})},delete:function(t){var e=t.id;return n.x.delete("/annotations/".concat(e),{})},check:function(t){var e=t.id,r=t.withDescription;return n.x.get("/annotations/".concat(e,"/check"),{params:{with_description:r}})},count:function(t){var e=t.id;return n.x.get("/annotations/".concat(e,"/count"),{})}},o={index:function(){return n.x.get("/classifications")}},a=r(9827),u=r(1680),p=r(5558),l={annotation:s,author:i,classifications:o,tag:c,analysis:a.l,publishers:u.X,articles:p.e}},1680:function(t,e,r){"use strict";r.d(e,{X:function(){return s}});var n=r(6265),i=r(513);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var s={create:function(t){return i.x.post("/publishers",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t))},fetchArticles:function(t){var e=t.id,r=t.isCommit;return i.x.get("/publishers/".concat(e,"/articles/new"),{params:{is_commit:r}})}}},3506:function(t,e,r){"use strict";r.r(e);var n=r(5893),i=r(8140),c=r(809),s=r.n(c),o=r(6265),a=r(2447),u=r(7294),p=r(5887),l=r(2031),f=r(9249),d=r(9112),x=r(6146);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t=(0,u.useContext)(x.w).setIsLoading,e=(0,u.useState)([]),r=e[0],c=e[1],o=function(){var t=(0,a.Z)(s().mark((function t(e){var n,i,a,u,p,f;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.index,i=e.isCommit,a=r[n]){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,l.W.articles.import(m({},a));case 7:u=t.sent,p=u.data.article,a.article=p,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),(f=t.t0).response?a.error="".concat(f.response.data.detail):a.error="".concat(t.t0);case 16:if(r[n]=a,c(r),!(n<r.length-1)){t.next=21;break}return t.next=21,o({index:n+1,isCommit:i});case 21:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.isCommit,t(!0),e.prev=2,e.next=5,o({index:0,isCommit:n});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:return e.prev=10,t(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var t=(0,a.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r=e.target.files)&&0!==r.length){t.next=4;break}return f.Am.error("CSV\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),t.abrupt("return");case 4:return t.prev=4,t.t0=i.Z,t.t1=d.Q,t.next=9,r[0].text();case 9:t.t2=t.sent,t.t3={from:2},t.t4=(0,t.t1)(t.t2,t.t3),(n=(0,t.t0)(t.t4)).length>1e3&&f.Am.warn("\u30d5\u30a1\u30a4\u30eb\u304c\u5927\u304d\u3059\u304e\u307e\u3059\u3002\u306f\u3058\u3081\u306e1000\u884c\u306e\u307f\u5229\u7528\u3057\u307e\u3059"),c(n.filter((function(t){return t[1]})).slice(0,1e3).map((function(t,e){return{index:e,id:t[0]?Number(t[0]):void 0,url:t[1],publishDate:t[2]}}))),t.next=21;break;case 17:return t.prev=17,t.t5=t.catch(4),f.Am.error("\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f: ".concat(t.t5)),t.abrupt("return");case 21:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{children:(0,n.jsxs)(p.W2,{children:[(0,n.jsx)(p.$0,{children:(0,n.jsx)("h1",{children:"\u8a18\u4e8bCSV\u53d6\u308a\u8fbc\u307f"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(p.$0,{children:[(0,n.jsx)("h2",{children:"\u5165\u529b"}),(0,n.jsx)(p.gN,{children:(0,n.jsx)(p.II,{type:"file",accept:".csv",onChange:b})}),(0,n.jsxs)(p.EK,{children:[(0,n.jsx)(p.zx,{onClick:(0,a.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h({isCommit:!1});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"\u53d6\u308a\u8fbc\u307f\u30c6\u30b9\u30c8"}),(0,n.jsx)(p.zx,{onClick:(0,a.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h({isCommit:!0});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"\u53d6\u308a\u8fbc\u307f"})]}),(0,n.jsx)("h3",{children:"\u4e00\u89a7"}),(0,n.jsxs)(p.iA,{className:"is-x-scrollable",children:[(0,n.jsx)(p.ss,{children:(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.xD,{children:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),(0,n.jsx)(p.xD,{children:"URL"}),(0,n.jsx)(p.xD,{children:"\u8a18\u4e8b\u30bf\u30a4\u30c8\u30eb"})]})}),(0,n.jsx)(p.RM,{children:r.map((function(t,e){var r;return(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.C5,{children:t.article?"\u53d6\u308a\u8fbc\u307f\u6210\u529f":t.error}),(0,n.jsx)(p.C5,{children:t.url}),(0,n.jsx)(p.C5,{children:null===(r=t.article)||void 0===r?void 0:r.title})]},e)}))})]})]})})]})})})}},513:function(t,e,r){"use strict";r.d(e,{x:function(){return u}});var n=r(6265),i=r(9669),c=r.n(i),s=r(1745);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=c().create({baseURL:"".concat("https://republicist-api.reload.co.jp","/api/v1/"),responseType:"json",headers:{"Content-Type":"application/json"}});u.interceptors.request.use((function(t){return a(a({},t),{},{data:(0,s.toSnake)(t.data)})})),u.interceptors.response.use((function(t){return a(a({},t),{},{data:(0,s.toCamel)(t.data)})}),(function(t){return Promise.reject(t)}))},1732:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/csv",function(){return r(3506)}])}},function(t){t.O(0,[637,675,774,888,179],(function(){return e=1732,t(t.s=e);var e}));var e=t.O();_N_E=e}]);