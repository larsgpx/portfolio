(function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],s=0,p=[];s<c.length;s++)a=c[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return c.p+"js/"+({about:"about",contact:"contact"}[t]||t)+"."+{about:"a10523fd",contact:"06edbdd8"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(t),u=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:i})},12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a2e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("Nosotros")]),t._v(" | \n    "),n("router-link",{attrs:{to:"/contact"}},[t._v("Contáctanos")])],1),n("router-view")],1)},u=[],a=(n("5c0b"),n("2877")),c={},i=Object(a["a"])(c,o,u,!1,null,null,null),l=i.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Vue + webpack"}}),r("p",[t._v("tre")])],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("h2",[t._v(t._s(t.test))]),n("test"),n("foot")],1)},v=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("test 2")])])}],h={},_=h,g=Object(a["a"])(_,m,b,!1,null,null,null),y=g.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Foooooooooooter")])])}],O={},x=O,E=Object(a["a"])(x,w,j,!1,null,null,null),k=E.exports,P={props:{msg:String,test:String},components:{Test:y,Foot:k}},$=P,S=(n("f3db"),Object(a["a"])($,d,v,!1,null,"d31a2922",null)),T=S.exports,C={name:"home",components:{HelloWorld:T}},M=C,H=Object(a["a"])(M,f,p,!1,null,null,null),F=H.exports;r["a"].use(s["a"]);var J=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contacto",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:J,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},f3db:function(t,e,n){"use strict";var r=n("2a2e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9d3cdca7.js.map