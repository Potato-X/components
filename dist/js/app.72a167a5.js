(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2126dfa1","chunk-2d0b6ce6":"c805b993","chunk-2d2077a9":"7b6a32f5","chunk-2d21b365":"6624887f","chunk-2d225f95":"a6d11b85","chunk-2d229481":"357b56af","chunk-44c2c07a":"49444e2b","chunk-b37511cc":"48263810","chunk-be7578de":"9a5265c5","chunk-d2a7ee36":"91a20c22","chunk-e559aee6":"12014f77"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-b37511cc":1,"chunk-be7578de":1,"chunk-d2a7ee36":1,"chunk-e559aee6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0b6ce6":"31d6cfe0","chunk-2d2077a9":"31d6cfe0","chunk-2d21b365":"31d6cfe0","chunk-2d225f95":"31d6cfe0","chunk-2d229481":"31d6cfe0","chunk-44c2c07a":"31d6cfe0","chunk-b37511cc":"fb8c6610","chunk-be7578de":"a07602f9","chunk-d2a7ee36":"2ce1bfdd","chunk-e559aee6":"0129aea6"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a56":function(e,t,n){},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"router"}},[n("router-view")],1)],1)},a=[],u=(n("5c0b"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("b0c0"),n("8c4f")),p=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("4ffd")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),e._v(" "+e._s(e.appName)+" this is "+e._s(e.username)+" "),r("h1",[e._v("the firstLetter is "+e._s(e.firstLetter))]),r("button",{on:{click:e.changeAppName}},[e._v("修改appname")]),r("button",{on:{click:e.asyncChangeAppName}},[e._v("修改异步appname")])],1)}),f=[],h=n("5530"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],v={name:"HelloWorld",props:{msg:String}},b=v,g=(n("6f12"),Object(u["a"])(b,d,m,!1,null,"5cc7f8f0",null)),_=g.exports,k=n("2f62"),j=n("d4ec"),y=n("bee2"),w=n("bc3a"),N=n.n(w),O="http://prodoction.com",E=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;Object(j["a"])(this,e),this.baseurl=t,this.queue={}}return Object(y["a"])(e,[{key:"getInsideConfig",value:function(){var e={baseurl:this.baseurl,headers:{}};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)}))}},{key:"request",value:function(e){e=Object.assign(this.getInsideConfig(),e),console.log(e);var t=N.a.create();return console.log(t),this.interceptors(t),t(e)}}]),e}(),P=E,A=new P;console.log(A);var x=A,C=function(e){return x.request({url:"api/getUserInfo",method:"post",data:e})},S={name:"Home",components:{HelloWorld:_},computed:Object(h["a"])(Object(h["a"])({},Object(k["e"])({appName:function(e){return e.appName},username:function(e){return e.user.userName}})),Object(k["c"])("user",{firstLetter:"firstLetter"})),methods:Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(k["d"])({setappname:"SET_APP_NAME"})),Object(k["b"])({updateAppName:"updateAppName"})),{},{changeAppName:function(){this.setappname(222222)},asyncChangeAppName:function(){this.updateAppName()},getInfo1:function(){return new Promise((function(e,t){C({id:3}).then((function(t){console.log("res:",t.data),e(t.data)}))}))},getInfo2:function(){return new Promise((function(e,t){C({id:3}).then((function(t){console.log("res:",t.data),e(t.data)}))}))},getInfo3:function(){return new Promise((function(e,t){C({id:3}).then((function(t){console.log("res:",t.data),e(t.data)}))}))}}),created:function(){Promise.all([C({id:3}),C({id:3}),C({id:3})]).then((function(e){console.log("all reses:",e)}))},beforeRouteLeave:function(e,t,n){var r=confirm("你还有内容为保存，确定离开当前页面嘛？");r?n():n(!1)}},L=S,T=Object(u["a"])(L,p,f,!1,null,null,null),$=T.exports,I=[{path:"/",name:"Home",component:$,meta:{title:"主页"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/argu/:name?",name:"argu",component:function(){return n.e("chunk-2d0b6ce6").then(n.bind(null,"1f72"))},props:!0},{path:"/count2",name:"count2",component:function(){return n.e("chunk-44c2c07a").then(n.bind(null,"a0d7"))}},{path:"/layout",name:"layout",component:function(){return n.e("chunk-e559aee6").then(n.bind(null,"ed3a"))}},{path:"/menu",name:"menu_page",component:function(){return n.e("chunk-be7578de").then(n.bind(null,"ec4a"))}},{path:"/splitspane",name:"splitspane",component:function(){return n.e("chunk-d2a7ee36").then(n.bind(null,"bf0d"))}},{path:"/parent",name:"parent",component:function(){return n.e("chunk-b37511cc").then(n.bind(null,"135b"))},children:[{path:"child",name:"child",component:function(){return n.e("chunk-2d2077a9").then(n.bind(null,"a169"))}},{path:"child2",name:"child2",component:function(){return n.e("chunk-2d225f95").then(n.bind(null,"e74a"))}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-2d229481").then(n.bind(null,"dd7b"))}},{path:"*",component:function(){return n.e("chunk-2d21b365").then(n.bind(null,"bf8c"))}}],H=function(e){window.document.title=e||"admin"};r["a"].use(l["a"]);var M=new l["a"]({mode:"history",routes:I}),q=!0;M.beforeEach((function(e,t,n){e.meta&&H(e.meta.title),"login"!==e.name?q?n():n({name:"login"}):q?n({name:"Home"}):n()}));var W=M,B={appName:"admin"},D=B,F={SET_APP_NAME:function(e,t){e.appName=t}},R=F,J=n("1da1"),U=(n("96cf"),function(){return new Promise((function(e,t){var n=null;setTimeout((function(){n?t(n):e({code:200,info:{appName:"newAppName"}})}),0)}))}),V={updateAppName:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:n=e.sent,200===n.code&&n.info&&n.info.appName&&t.commit("SET_APP_NAME",n.info.appName),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},z=V,K={userName:"potato"},Y={firstLetter:function(e){return e.userName.substr(0,1)}},G={},Q={},X={namespaced:!0,state:K,getters:Y,mutations:G,actions:Q};r["a"].use(k["a"]);var Z=new k["a"].Store({state:D,mutations:R,actions:z,modules:{user:X}}),ee=new r["a"],te=ee;r["a"].config.productionTip=!1,r["a"].prototype.$bus=te,console.log(r["a"].prototype.$bus),new r["a"]({router:W,store:Z,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6f12":function(e,t,n){"use strict";n("2a56")},"9c0c":function(e,t,n){}});