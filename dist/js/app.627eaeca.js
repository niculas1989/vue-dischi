(function(t){function e(e){for(var r,a,l=e[0],c=e[1],u=e[2],f=0,p=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);i&&i(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var i=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2cb3":function(t,e,n){"use strict";n("5ffe")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"generics"}},[n("header",[n("Navbar")],1),n("main",[n("Albums")],1)])},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("svg",{staticClass:"spotify-logo p-1 ms-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 167.5 167.5"}},[n("title",[t._v("Spotify")]),n("path",{attrs:{fill:"#ffffff",d:"M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"}})])])},l=[],c={name:"Navbar"},u=c,i=(n("2cb3"),n("2877")),f=Object(i["a"])(u,a,l,!1,null,"356c4220",null),p=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3 gx-4"},t._l(t.listOfAlbums,(function(t){return n("div",{key:t.title,staticClass:"col"},[n("SingleAlbum",{attrs:{album:t}})],1)})),0)])},d=[],m=n("bc3a"),v=n.n(m),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-disc text-center",attrs:{role:"button"}},[n("img",{attrs:{src:t.album.poster,alt:t.album.author}}),n("h4",{staticClass:"text-white mt-3"},[t._v(t._s(t.album.title.toUpperCase()))]),n("p",{staticClass:"text-secondary m-0 pt-2"},[t._v(t._s(t.album.author))]),n("p",{staticClass:"text-secondary"},[t._v(t._s(t.album.year))])])},g=[],y={name:"SingleAlbum",props:["album"]},w=y,_=(n("eb28"),Object(i["a"])(w,h,g,!1,null,"337651e0",null)),x=_.exports,O={name:"Albums",components:{SingleAlbum:x},data:function(){return{listOfAlbums:[],url:"https://flynn.boolean.careers/exercises/api/array/music"}},methods:{getAlbums:function(){var t=this;v.a.get(this.url).then((function(e){t.listOfAlbums=e.data.response}))}},mounted:function(){this.getAlbums()}},j=O,A=Object(i["a"])(j,b,d,!1,null,"03f498dd",null),C=A.exports,S={name:"App",components:{Navbar:p,Albums:C}},M=S,P=(n("5c0b"),Object(i["a"])(M,s,o,!1,null,null,null)),$=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ffe":function(t,e,n){},"9c0c":function(t,e,n){},"9ce1":function(t,e,n){},eb28:function(t,e,n){"use strict";n("9ce1")}});
//# sourceMappingURL=app.627eaeca.js.map