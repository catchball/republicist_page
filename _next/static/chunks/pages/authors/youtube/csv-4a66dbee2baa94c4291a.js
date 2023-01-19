(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{6559:function(n,t,e){"use strict";e.d(t,{xN:function(){return s},Id:function(){return c},$I:function(){return l}});var r=e(7261),i=e(3121);function a(){var n=(0,r.Z)(["\n  mutation ($id: Int!) {\n    deleteAuthor(id: $id) {\n      status\n    }\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  mutation ($id: Int!, $name: String!, $description: String, $genreIds: [Int]) {\n    updateAuthor(\n      id: $id\n      name: $name\n      description: $description\n      genreIds: $genreIds\n    ) {\n      author {\n        id\n        name\n        description\n      }\n    }\n  }\n"]);return u=function(){return n},n}function o(){var n=(0,r.Z)(["\n  mutation ($name: String!, $description: String, $genreIds: [Int]) {\n    createAuthor(name: $name, description: $description, genreIds: $genreIds) {\n      author {\n        id\n        name\n        description\n      }\n    }\n  }\n"]);return o=function(){return n},n}var s=(0,i.ZP)(o()),c=(0,i.ZP)(u()),l=(0,i.ZP)(a())},7115:function(n,t,e){"use strict";e.d(t,{Q:function(){return o},y:function(){return s}});var r=e(7261),i=e(3121);function a(){var n=(0,r.Z)(["\n  mutation ($id: Int!) {\n    deleteAuthorPublisher(id: $id) {\n      status\n    }\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  mutation (\n    $baseUrl: String\n    $authorId: Int!\n    $publisherId: Int!\n    $idOnPublisher: String!\n    $nameOnPublisher: String!\n    $description: String\n    $hasUpdateRequest: Boolean\n    $payload: String\n  ) {\n    createAuthorPublisher(\n      baseUrl: $baseUrl\n      authorId: $authorId\n      publisherId: $publisherId\n      idOnPublisher: $idOnPublisher\n      nameOnPublisher: $nameOnPublisher\n      description: $description\n      hasUpdateRequest: $hasUpdateRequest\n      payload: $payload\n    ) {\n      authorPublisher {\n        id\n        authorId\n        publisherId\n        payload\n        idOnPublisher\n        nameOnPublisher\n        numOfSubscribers\n        description\n        registrationDate\n        numOfArticles\n        totalView\n      }\n    }\n  }\n"]);return u=function(){return n},n}var o=(0,i.ZP)(u()),s=(0,i.ZP)(a())},6466:function(n,t,e){"use strict";e.d(t,{U:function(){return o},r:function(){return s}});var r=e(7261),i=e(3121);function a(){var n=(0,r.Z)(["\n  query publishers(\n    $baseUrl: String\n    $limit: Int\n    $offset: Int\n    $hasRssUrl: Boolean\n    $hasArticleListUrl: Boolean\n  ) {\n    publishers(\n      baseUrl: $baseUrl\n      limit: $limit\n      offset: $offset\n      hasRssUrl: $hasRssUrl\n      hasArticleListUrl: $hasArticleListUrl\n    ) {\n      id\n      name\n      description\n      baseUrl\n      crawlingRuleId\n      articleListUrl\n      rssUrl\n    }\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  query publisher($id: Int!) {\n    publisher(id: $id) {\n      id\n      name\n      description\n      baseUrl\n      rssUrl\n      crawlingRuleId\n      articleListUrl\n      articleLinkXpath\n      articleUrlPattern\n      isLived\n      scrapings {\n        id\n        processor\n        publisherId\n        titleXpath\n        contentXpath\n        descriptionXpath\n        authorXpath\n        authorPattern\n        publishDateXpath\n        publishDatePattern\n        updateDateXpath\n        updateDatePattern\n        genreXpath\n        genrePattern\n        tagXpath\n        tagPattern\n        pagerXpath\n        testUrl\n      }\n    }\n  }\n"]);return u=function(){return n},n}var o=(0,i.ZP)(u()),s=(0,i.ZP)(a())},3295:function(n,t,e){"use strict";e.d(t,{j:function(){return o},$:function(){return s}});var r=e(7261),i=e(3121);function a(){var n=(0,r.Z)(["\n  mutation (\n    $authorPublisherId: Int!\n    $maxResults: Int\n    $publishedAfter: String\n    $publishedBefore: String\n  ) {\n    fetchVideoInfosOfChannel(\n      authorPublisherId: $authorPublisherId\n      maxResults: $maxResults\n      publishedAfter: $publishedAfter\n      publishedBefore: $publishedBefore\n    ) {\n      articles {\n        id\n        url\n        title\n        content\n        description\n        publishDate\n        updateDate\n        genre\n        tag\n        viewCount\n      }\n    }\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  mutation ($idOnPublisher: String!) {\n    fetchChannelInfo(idOnPublisher: $idOnPublisher) {\n      authorPublisher {\n        publisherId\n        payload\n        nameOnPublisher\n        numOfSubscribers\n        description\n        registrationDate\n        numOfArticles\n        totalView\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n"]);return u=function(){return n},n}var o=(0,i.ZP)(u()),s=(0,i.ZP)(a())},9827:function(n,t,e){"use strict";e.d(t,{l:function(){return i}});var r=e(513),i={topics:function(n){var t=n.texts,e=n.topicCount;return r.x.post("/analyses/topics",{texts:t,topic_count:e})},sentiments:function(n){var t=n.texts;return r.x.post("/analyses/sentiments",{texts:t})},bertSentiments:function(n){var t=n.texts;return r.x.post("/analyses/bert/sentiments",{texts:t})},morphologic:function(n){var t=n.text,e=n.language;return r.x.post("/analyses/morphologic",{text:t,language:e})}}},5558:function(n,t,e){"use strict";e.d(t,{e:function(){return i}});var r=e(513),i={index:function(n){var t=n.offset,e=n.limit,i=n.publisherId;return r.x.get("/articles",{params:{offset:t,limit:e,publisher_id:i}})},count:function(n){var t=n.word;return r.x.get("/articles/count",{params:{word:t}})},import:function(n){var t=n.url,e=n.publisherId,i=n.baseUrl,a=n.publishDate,u=n.isCommit;return r.x.post("/articles/import",{url:t,publisher_id:e,base_url:i,publish_date:a,is_commit:u})}}},2031:function(n,t,e){"use strict";e.d(t,{W:function(){return d}});var r=e(513),i={index:function(n){var t=n.name,e=n.tagName,i=n.annotationId,a=n.classificationOptionId,u=n.offset,o=n.limit;return r.x.get("/authors",{params:{name:t,tag_name:e,annotation_id:i,classification_option_id:a,offset:u,limit:o}})},show:function(n){var t=n.id;return r.x.get("/authors/".concat(t),{})},addTag:function(n){var t=n.id,e=n.name;return r.x.post("/authors/".concat(t,"/tag"),{name:e})}},a={index:function(n){var t=n.limit,e=n.offset,i=n.name;return r.x.get("/tags",{params:{limit:t,offset:e,name:i}})}},u={index:function(n){var t=n.limit,e=n.offset;return r.x.get("/annotations",{params:{limit:t,offset:e}})},show:function(n){var t=n.id;return r.x.get("/annotations/".concat(t),{})},update:function(n){var t=n.id,e=n.name,i=n.description,a=n.hint;return r.x.patch("/annotations/".concat(t),{name:e,description:i,hint:a})},delete:function(n){var t=n.id;return r.x.delete("/annotations/".concat(t),{})},check:function(n){var t=n.id,e=n.withDescription;return r.x.get("/annotations/".concat(t,"/check"),{params:{with_description:e}})},count:function(n){var t=n.id;return r.x.get("/annotations/".concat(t,"/count"),{})}},o={index:function(){return r.x.get("/classifications")}},s=e(9827),c=e(1680),l=e(5558),d={annotation:u,author:i,classifications:o,tag:a,analysis:s.l,publishers:c.X,articles:l.e}},1680:function(n,t,e){"use strict";e.d(t,{X:function(){return u}});var r=e(6265),i=e(513);function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}var u={create:function(n){return i.x.post("/publishers",function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},n))},fetchArticles:function(n){var t=n.id,e=n.isCommit;return i.x.get("/publishers/".concat(t,"/articles/new"),{params:{is_commit:e}})}}},7912:function(n,t,e){"use strict";var r=e(5893),i=e(809),a=e.n(i),u=e(2447),o=e(7294),s=e(9412),c=e(2031);t.Z=function(n){var t,e,i=n.annotation,l=n.option,d=n.onChange,f=n.onChangeOption,p=(0,o.useState)([]),h=p[0],b=p[1],v=function(){var n=(0,u.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.W.annotation.index({limit:100});case 2:t=n.sent,(e=t.data.annotations)&&b(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){v()}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{items:h.map((function(n){return{label:n.name,value:n.id}})),state:null===i||void 0===i?void 0:i.id,onChange:function(n){d(h.find((function(t){return t.id==Number(n)}))),l&&f&&f(void 0)},blankable:!0}),f&&i&&(0,r.jsx)(s.Z,{items:null!==(t=null===(e=i.classification)||void 0===e?void 0:e.options.map((function(n){return{label:n.name,value:n.id}})))&&void 0!==t?t:[],state:null===l||void 0===l?void 0:l.id,onChange:function(n){var t;return f(null===(t=i.classification)||void 0===t?void 0:t.options.find((function(t){return t.id==Number(n)})))},blankable:!0})]})}},2200:function(n,t,e){"use strict";e.d(t,{A:function(){return f}});var r=e(5893),i=e(809),a=e.n(i),u=e(2447),o=e(7294),s=e(5887),c=e(2031),l=e(8808),d=e.n(l),f=function(n){var t=n.tagName,e=n.onChange,i=(0,o.useState)([]),l=i[0],f=i[1],p=function(){var n=(0,u.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.value){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,c.W.tag.index({name:e});case 5:r=n.sent,i=r.data.tags,f(i);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,r.jsxs)(s.gN,{className:"auto-suggest",children:[(0,r.jsx)("label",{htmlFor:"tagName",children:"\u30c1\u30e3\u30f3\u30cd\u30eb\u30bf\u30b0"}),(0,r.jsx)(d(),{suggestions:l,getSuggestionValue:function(n){return n.name},renderSuggestion:function(n){return(0,r.jsx)("span",{children:n.name})},inputProps:{value:t,onChange:function(n,t){var r=t.newValue;return e(r)},placeholder:"\u30c1\u30e3\u30f3\u30cd\u30eb\u30bf\u30b0"},onSuggestionsFetchRequested:p,onSuggestionsClearRequested:function(){return f([])}})]})}},9412:function(n,t,e){"use strict";var r=e(5893),i=(e(7294),e(5887));t.Z=function(n){var t=n.items,e=n.state,a=n.onChange,u=n.blankable;return(0,r.jsx)(i.gN,{children:(0,r.jsxs)("select",{value:e,onChange:function(n){return a(n.target.value)},onBlur:function(n){return a(n.target.value)},children:[u&&(0,r.jsx)("option",{value:void 0,selected:void 0==e,children:"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"},0),t.map((function(n,t){var e=n.value,i=n.label;return(0,r.jsx)("option",{value:e,children:i},t)}))]})})}},6884:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return R}});var r=e(5893),i=e(6265),a=e(809),u=e.n(a),o=e(8140),s=e(2447),c=e(2292),l=e(7294),d=e(5887),f=e(1664),p=e(6829),h=e(9249),b=e(3461),v=e(6146),m=e(8739),g=e(6559),x=e(3295),j=e(7115),y=e(7261);function O(){var n=(0,y.Z)(["\n  mutation (\n    $authorId: Int!\n    $annotationId: Int!\n    $optionId: Int!\n    $reason: String\n  ) {\n    createAuthorAnnotation(\n      authorId: $authorId\n      annotationId: $annotationId\n      optionId: $optionId\n      reason: $reason\n    ) {\n      authorAnnotation {\n        id\n        authorId\n        annotationId\n        optionId\n        reason\n      }\n    }\n  }\n"]);return O=function(){return n},n}var w=(0,e(3121).ZP)(O()),$=e(6466),I=e(7912),P=function(n){try{var t=new URL(n).pathname.split("/").pop();if(t&&(null===t||void 0===t?void 0:t.length)>0)return t}catch(r){var e=n.split("/").pop();if(e&&(null===e||void 0===e?void 0:e.length)>0)return e}},S=e(2031),C=e(2200);function k(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Z(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?k(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function U(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"===typeof n)return A(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A(n,t)}(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,o=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return u=n.done,n},e:function(n){o=!0,a=n},f:function(){try{u||null==e.return||e.return()}finally{if(o)throw a}}}}function A(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var R=function(){var n=(0,l.useContext)(v.w).setIsLoading,t=(0,l.useState)(void 0),e=t[0],i=t[1],a=(0,l.useState)([]),y=a[0],O=a[1],k=(0,l.useState)(void 0),A=k[0],R=k[1],N=(0,l.useState)(!1),_=N[0],D=N[1],E=(0,l.useState)(void 0),L=E[0],X=E[1],q=(0,l.useState)(""),V=q[0],T=q[1],M=(0,p.useQuery)($.r,{variables:{baseUrl:m.ti}}).data;(0,l.useEffect)((function(){M&&M.publishers&&i(M.publishers.find((function(n){return n.baseUrl==m.ti})))}),[M]);var B=(0,p.useMutation)(x.j),F=(0,c.Z)(B,2),W=F[0],Q=F[1].loading,z=(0,p.useMutation)(g.xN),Y=(0,c.Z)(z,1)[0],G=(0,p.useMutation)(j.Q),H=(0,c.Z)(G,1)[0],J=(0,p.useMutation)(w),K=(0,c.Z)(J,1)[0];(0,l.useEffect)((function(){n(Q)}),[Q,n]);var nn=function(){var n=(0,s.Z)(u().mark((function n(){var t,e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=U(y),n.prev=1,r=u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.value,n.next=3,tn(t);case 3:(r=n.sent)&&O([].concat((0,o.Z)(y.filter((function(n){return n.url!==(null===r||void 0===r?void 0:r.url)}))),[r]));case 5:case"end":return n.stop()}}),n)})),t.s();case 4:if((e=t.n()).done){n.next=8;break}return n.delegateYield(r(),"t0",6);case 6:n.next=4;break;case 8:n.next=13;break;case 10:n.prev=10,n.t1=n.catch(1),t.e(n.t1);case 13:return n.prev=13,t.f(),n.finish(13);case 16:y.every((function(n){return n.succeeded}))?h.Am.success("CSV\u30d5\u30a1\u30a4\u30eb\u306e\u767b\u9332\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f"):h.Am.error("CSV\u30d5\u30a1\u30a4\u30eb\u306e\u767b\u9332\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f");case 17:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(){return n.apply(this,arguments)}}(),tn=function(){var n=(0,s.Z)(u().mark((function n(t){var r,i,a,o,s,c,l;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.succeeded){n.next=2;break}return n.abrupt("return");case 2:if(n.prev=2,t.url){n.next=5;break}throw new Error("URL\u304c\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f");case 5:if(r=P(t.url)){n.next=8;break}throw new Error("URL\u306e\u5f62\u5f0f\u304c\u9593\u9055\u3063\u3066\u3044\u308b\u3088\u3046\u3067\u3059");case 8:return n.next=10,W({variables:{idOnPublisher:r}});case 10:if(i=n.sent.data){n.next=13;break}throw new Error("\u7121\u52b9\u306aURL\u3067\u3059");case 13:if(a=null===i||void 0===i?void 0:i.fetchChannelInfo.authorPublisher){n.next=16;break}throw new Error("\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f");case 16:if(!a.author){n.next=28;break}return t.succeeded=!0,t.message="\u767b\u9332\u6e08\u307f",t.author=a.author,n.next=22,en(t.author);case 22:return n.next=24,rn(t.author);case 24:if(!_){n.next=27;break}return n.next=27,H({variables:Z(Z({},a),{},{authorId:t.author.id,publisherId:null===e||void 0===e?void 0:e.id,idOnPublisher:r,hasUpdateRequest:_})});case 27:return n.abrupt("return",t);case 28:return o=JSON.parse(a.payload||""),n.next=31,Y({variables:{name:o.snippet.title,description:o.snippet.description}});case 31:if(s=n.sent,c=s.data,!(l=s.errors)){n.next=38;break}throw new Error(l.join(", "));case 38:if(c){n.next=40;break}throw new Error("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f");case 40:return t.message="\u767b\u9332\u6210\u529f",t.author=c.createAuthor.author,n.next=44,H({variables:Z(Z({},a),{},{authorId:t.author.id,publisherId:null===e||void 0===e?void 0:e.id,idOnPublisher:r,hasUpdateRequest:_})});case 44:return n.next=46,en(t.author);case 46:return n.next=48,rn(t.author);case 48:t.succeeded=!0,t.message="\u767b\u9332\u6210\u529f",n.next=56;break;case 52:n.prev=52,n.t0=n.catch(2),t.succeeded=!1,n.t0 instanceof Error?t.message=n.t0.message:t.message=n.t0;case 56:return n.abrupt("return",t);case 57:case"end":return n.stop()}}),n,null,[[2,52]])})));return function(t){return n.apply(this,arguments)}}(),en=function(){var n=(0,s.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(V.length>0)){n.next=3;break}return n.next=3,S.W.author.addTag({id:t.id,name:V});case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),rn=function(){var n=(0,s.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!A||!L){n.next=3;break}return n.next=3,K({variables:{authorId:t.id,annotationId:A.id,optionId:L.id}});case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),an=function(){var n=(0,s.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((e=t.target.files)&&0!==e.length){n.next=4;break}return h.Am.error("CSV\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),n.abrupt("return");case 4:return n.next=6,e[0].text();case 6:r=n.sent.split("\n"),O(r.map((function(n){return n.split(",")})).filter((function(n){return!!n[0]})).map((function(n){return{url:n[0].replace(/"/g,"")}})));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{children:(0,r.jsxs)(d.W2,{children:[(0,r.jsxs)(d.$0,{children:[(0,r.jsx)("h1",{children:"YouTube CSV\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),(0,r.jsx)(d.iA,{children:(0,r.jsx)(d.RM,{children:(0,r.jsxs)(d.SC,{children:[(0,r.jsx)(d.xD,{children:"CSV\u30d5\u30a1\u30a4\u30eb"}),(0,r.jsx)(d.C5,{children:(0,r.jsx)(d.gN,{children:(0,r.jsx)(d.II,{type:"file",accept:".csv",onChange:an})})})]})})})]}),e&&(0,r.jsxs)(d.$0,{children:[(0,r.jsxs)(d.gN,{children:[(0,r.jsx)("label",{htmlFor:"annotation",children:"\u8a2d\u5b9a\u3059\u308b\u30d5\u30e9\u30b0"}),(0,r.jsx)("div",{style:{display:"flex",flexGrow:1,justifyContent:"flex-end",gap:"1rem"},children:(0,r.jsx)(I.Z,{annotation:A,onChange:function(n){return R(n)},option:L,onChangeOption:function(n){return X(n)}})})]}),(0,r.jsx)(d.gN,{children:(0,r.jsxs)("label",{htmlFor:"hasUpdateRequest",children:[(0,r.jsx)("input",{id:"hasUpdateRequest",type:"checkbox",checked:_,onChange:function(n){var t=n.target.checked;return D(t)}}),"\xa0 \u53d6\u8fbc\u512a\u5148"]})}),(0,r.jsx)(C.A,{tagName:V,onChange:function(n){return T(n)}}),(0,r.jsxs)(d.EK,{children:[(0,r.jsx)(d.zx,{onClick:nn,disabled:Q||0==y.length,children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),(0,r.jsx)(b.CSVLink,{filename:"youtube.csv",data:y.filter((function(n){return!n.succeeded})).map((function(n){return[n.url]})),children:(0,r.jsx)(d.zx,{children:"\u672a\u6210\u529f\u30c7\u30fc\u30bf\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})})]})]}),(0,r.jsxs)(d.$0,{children:[(0,r.jsx)("h2",{children:"\u30c1\u30e3\u30f3\u30cd\u30eb\u30ea\u30b9\u30c8"}),(0,r.jsxs)(d.$0,{children:[y.length,"\u4ef6\u4e2d\xa0",y.filter((function(n){return n.succeeded})).length,"\u4ef6\u6210\u529f\xa0",y.filter((function(n){return 0==n.succeeded})).length,"\u4ef6\u5931\u6557"]}),(0,r.jsxs)(d.iA,{className:"is-x-scrollable",children:[(0,r.jsx)(d.ss,{children:(0,r.jsxs)(d.SC,{children:[(0,r.jsx)(d.C5,{children:"#"}),(0,r.jsx)(d.C5,{children:"\u7d50\u679c"}),(0,r.jsx)(d.C5,{children:"URL"})]})}),(0,r.jsx)(d.RM,{children:y.map((function(n,t){return(0,r.jsxs)(d.SC,{children:[(0,r.jsx)(d.C5,{children:n.author&&(0,r.jsx)(f.default,{href:"/authors/".concat(n.author.id),replace:!1,children:(0,r.jsx)(d.zx,{className:"is-small",children:n.author.name})})}),(0,r.jsx)(d.C5,{className:n.succeeded?"is-success":0==n.succeeded?"is-danger":"",children:n.message}),(0,r.jsx)(d.C5,{children:n.url})]},t)}))})]})]})]})})})}},513:function(n,t,e){"use strict";e.d(t,{x:function(){return c}});var r=e(6265),i=e(9669),a=e.n(i),u=e(1745);function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var c=a().create({baseURL:"".concat("https://republicist-api.reload.co.jp","/api/v1/"),responseType:"json",headers:{"Content-Type":"application/json"}});c.interceptors.request.use((function(n){return s(s({},n),{},{data:(0,u.toSnake)(n.data)})})),c.interceptors.response.use((function(n){return s(s({},n),{},{data:(0,u.toCamel)(n.data)})}),(function(n){return Promise.reject(n)}))},8739:function(n,t,e){"use strict";e.d(t,{LQ:function(){return i},ro:function(){return a},eC:function(){return u},ti:function(){return o}});var r=e(2292),i={1:"\u901a\u5e38",2:"\u8457\u8005\u5225"},a=Object.entries(i).map((function(n){var t=(0,r.Z)(n,2),e=t[0],i=t[1];return{value:Number(e),label:i}})),u=Object.entries({lxml:"HTML\u89e3\u6790",selenium:"\u30d6\u30e9\u30a6\u30b6\u5229\u7528"}).map((function(n){var t=(0,r.Z)(n,2);return{value:t[0],label:t[1]}})),o="www.youtube.com"},4775:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/youtube/csv",function(){return e(6884)}])}},function(n){n.O(0,[774,637,253,888,179],(function(){return t=4775,n(n.s=t);var t}));var t=n.O();_N_E=t}]);