(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9827:function(t,e,n){"use strict";n.d(e,{l:function(){return i}});var r=n(513),i={topics:function(t){var e=t.texts,n=t.topicCount;return r.x.post("/analyses/topics",{texts:e,topic_count:n})},sentiments:function(t){var e=t.texts;return r.x.post("/analyses/sentiments",{texts:e})},bertSentiments:function(t){var e=t.texts;return r.x.post("/analyses/bert/sentiments",{texts:e})},morphologic:function(t){var e=t.text,n=t.language;return r.x.post("/analyses/morphologic",{text:e,language:n})}}},5558:function(t,e,n){"use strict";n.d(e,{e:function(){return i}});var r=n(513),i={index:function(t){var e=t.offset,n=t.limit,i=t.publisherId;return r.x.get("/articles",{params:{offset:e,limit:n,publisher_id:i}})},count:function(t){var e=t.word;return r.x.get("/articles/count",{params:{word:e}})},import:function(t){var e=t.url,n=t.publisherId,i=t.baseUrl,s=t.publishDate,a=t.isCommit;return r.x.post("/articles/import",{url:e,publisher_id:n,base_url:i,publish_date:s,is_commit:a})}}},2031:function(t,e,n){"use strict";n.d(e,{W:function(){return f}});var r=n(513),i={index:function(t){var e=t.name,n=t.tagName,i=t.annotationId,s=t.classificationOptionId,a=t.offset,c=t.limit;return r.x.get("/authors",{params:{name:e,tag_name:n,annotation_id:i,classification_option_id:s,offset:a,limit:c}})},show:function(t){var e=t.id;return r.x.get("/authors/".concat(e),{})},addTag:function(t){var e=t.id,n=t.name;return r.x.post("/authors/".concat(e,"/tag"),{name:n})}},s={index:function(t){var e=t.limit,n=t.offset,i=t.name;return r.x.get("/tags",{params:{limit:e,offset:n,name:i}})}},a={index:function(t){var e=t.limit,n=t.offset;return r.x.get("/annotations",{params:{limit:e,offset:n}})},show:function(t){var e=t.id;return r.x.get("/annotations/".concat(e),{})},update:function(t){var e=t.id,n=t.name,i=t.description,s=t.hint;return r.x.patch("/annotations/".concat(e),{name:n,description:i,hint:s})},delete:function(t){var e=t.id;return r.x.delete("/annotations/".concat(e),{})},check:function(t){var e=t.id,n=t.withDescription;return r.x.get("/annotations/".concat(e,"/check"),{params:{with_description:n}})},count:function(t){var e=t.id;return r.x.get("/annotations/".concat(e,"/count"),{})}},c={index:function(){return r.x.get("/classifications")}},o=n(9827),u=n(1680),p=n(5558),f={annotation:a,author:i,classifications:c,tag:s,analysis:o.l,publishers:u.X,articles:p.e}},1680:function(t,e,n){"use strict";n.d(e,{X:function(){return a}});var r=n(6265),i=n(513);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var a={create:function(t){return i.x.post("/publishers",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t))},fetchArticles:function(t){var e=t.id,n=t.isCommit;return i.x.get("/publishers/".concat(e,"/articles/new"),{params:{is_commit:n}})}}},1744:function(t,e,n){"use strict";n.r(e);var r=n(5893),i=n(8140),s=n(809),a=n.n(s),c=n(2447),o=n(7294),u=n(5887),p=n(2031),f=n(9249),l=n(9112),d=n(6146);e.default=function(){var t=(0,o.useContext)(d.w).setIsLoading,e=(0,o.useState)([]),n=e[0],s=e[1],h=(0,o.useState)(3),x=h[0],m=h[1],b=(0,o.useState)(),g=b[0],v=b[1],j=function(){var e=(0,c.Z)(a().mark((function e(){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,p.W.analysis.topics({texts:n,topicCount:x});case 3:r=e.sent,i=r.data.topics,v(i),t(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=(0,c.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=e.target.files)&&0!==n.length){t.next=4;break}return f.Am.error("CSV\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),t.abrupt("return");case 4:return t.prev=4,t.t0=i.Z,t.t1=l.Q,t.next=9,n[0].text();case 9:t.t2=t.sent,t.t3={},t.t4=(0,t.t1)(t.t2,t.t3),(r=(0,t.t0)(t.t4).map((function(t){return t.join(" ")})).filter((function(t){return!t.match(/^(RT|@)/)})).map((function(t){return t.replace(/(https?:\/\/[-_.!~*'()a-zA-Z;0-9/?:@&=+$,%#]+)/g,"")})).filter((function(t){return t.length>10}))).length>1e4&&f.Am.warn("\u30d5\u30a1\u30a4\u30eb\u304c\u5927\u304d\u3059\u304e\u307e\u3059\u3002\u306f\u3058\u3081\u306e10000\u884c\u306e\u307f\u5229\u7528\u3057\u307e\u3059"),s(r.slice(0,1e4)),t.next=21;break;case 17:return t.prev=17,t.t5=t.catch(4),f.Am.error("\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f: ".concat(t.t5)),t.abrupt("return");case 21:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{children:(0,r.jsxs)(u.W2,{children:[(0,r.jsx)(u.$0,{children:(0,r.jsx)("h1",{children:"\u30c8\u30d4\u30c3\u30af\u5206\u6790"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(u.$0,{children:[(0,r.jsx)("h2",{children:"\u5165\u529b"}),(0,r.jsx)(u.gN,{children:(0,r.jsx)(u.II,{type:"file",accept:".csv",onChange:O})}),(0,r.jsx)(u.gN,{children:(0,r.jsx)(u.Kx,{disabled:!0,value:n,style:{fontSize:".5rem"},rows:12})}),(0,r.jsx)(u.gN,{children:(0,r.jsx)(u.II,{type:"number",value:x,onChange:function(t){return m(Number(t.target.value))}})}),(0,r.jsx)(u.EK,{children:(0,r.jsx)(u.zx,{onClick:j,children:"\u5206\u6790"})}),g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u5206\u6790\u7d50\u679c"}),(0,r.jsx)(u.iA,{children:(0,r.jsx)(u.RM,{children:g.map((function(t,e){return(0,r.jsxs)(u.SC,{children:[(0,r.jsxs)(u.C5,{children:["#",e+1]}),t.map((function(t,e){return(0,r.jsx)(u.C5,{children:t},e)}))]},e)}))})})]})]})})]})})})}},513:function(t,e,n){"use strict";n.d(e,{x:function(){return u}});var r=n(6265),i=n(9669),s=n.n(i),a=n(1745);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=s().create({baseURL:"".concat("https://republicist-api.reload.co.jp","/api/v1/"),responseType:"json",headers:{"Content-Type":"application/json"}});u.interceptors.request.use((function(t){return o(o({},t),{},{data:(0,a.toSnake)(t.data)})})),u.interceptors.response.use((function(t){return o(o({},t),{},{data:(0,a.toCamel)(t.data)})}),(function(t){return Promise.reject(t)}))},9497:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analyses/topics",function(){return n(1744)}])}},function(t){t.O(0,[637,675,774,888,179],(function(){return e=9497,t(t.s=e);var e}));var e=t.O();_N_E=e}]);