(function(t){function e(e){for(var r,l,u=e[0],i=e[1],c=e[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);o&&o(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==s[i]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},s={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var o=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03da":function(t,e,n){},"2cb3":function(t,e,n){"use strict";n("5ffe")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"generics"}},[n("header",[n("Navbar")],1),n("main",[n("Albums")],1)])},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("svg",{staticClass:"spotify-logo p-1 ms-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 167.5 167.5"}},[n("title",[t._v("Spotify")]),n("path",{attrs:{fill:"#ffffff",d:"M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"}})])])},u=[],i={name:"Navbar"},c=i,o=(n("2cb3"),n("2877")),f=Object(o["a"])(c,l,u,!1,null,"356c4220",null),p=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"albums"}},[n("ul",{staticClass:"d-flex flex-wrap container"},t._l(t.listOfAlbums,(function(t){return n("li",{key:t.title,staticClass:"row pb-3 album text-center"},[n("SingleAlbum",{attrs:{album:t}})],1)})),0)])},m=[],d=n("bc3a"),v=n.n(d),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    single-album\n    d-flex\n    flex-column\n    justify-content-center\n    align-items-center\n  "},[n("img",{attrs:{src:t.album.poster,alt:t.album.poster}}),n("span",{staticClass:"title"},[t._v(t._s(t.album.title))]),n("span",{staticClass:"text-muted"},[t._v(t._s(t.album.author))]),n("span",{staticClass:"text-muted"},[t._v(t._s(t.album.year))])])},g=[],y={name:"SingleAlbum",props:["album"]},_=y,x=(n("59d6"),Object(o["a"])(_,h,g,!1,null,"7e5e525f",null)),w=x.exports,O={name:"Albums",components:{SingleAlbum:w},data:function(){return{listOfAlbums:[],url:"https://flynn.boolean.careers/exercises/api/array/music"}},methods:{getAlbums:function(){var t=this;v.a.get(this.url).then((function(e){t.listOfAlbums=e.data.response}))}},mounted:function(){this.getAlbums()}},j=O,A=(n("b281"),Object(o["a"])(j,b,m,!1,null,"4357f507",null)),S=A.exports,C={name:"App",components:{Navbar:p,Albums:S}},M=C,P=(n("5c0b"),Object(o["a"])(M,s,a,!1,null,null,null)),$=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"59d6":function(t,e,n){"use strict";n("9ff4")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ffe":function(t,e,n){},"9c0c":function(t,e,n){},"9ff4":function(t,e,n){},b281:function(t,e,n){"use strict";n("03da")}});
//# sourceMappingURL=app.882d0b8a.js.map