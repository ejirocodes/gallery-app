(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[1],{67:function(e,t,n){e.exports=n(96)},73:function(e,t,n){var r={"./ion-action-sheet.entry.js":[98,7],"./ion-alert.entry.js":[99,8],"./ion-app_8.entry.js":[100,9],"./ion-avatar_3.entry.js":[101,20],"./ion-back-button.entry.js":[102,21],"./ion-backdrop.entry.js":[103,45],"./ion-button_2.entry.js":[104,22],"./ion-card_5.entry.js":[105,23],"./ion-checkbox.entry.js":[106,24],"./ion-chip.entry.js":[107,25],"./ion-col_3.entry.js":[108,46],"./ion-datetime_3.entry.js":[109,12],"./ion-fab_3.entry.js":[110,26],"./ion-img.entry.js":[111,47],"./ion-infinite-scroll_2.entry.js":[112,48],"./ion-input.entry.js":[113,27],"./ion-item-option_3.entry.js":[114,28],"./ion-item_8.entry.js":[115,29],"./ion-loading.entry.js":[116,30],"./ion-menu_3.entry.js":[117,31],"./ion-modal.entry.js":[118,10],"./ion-nav_2.entry.js":[119,17],"./ion-popover.entry.js":[120,11],"./ion-progress-bar.entry.js":[121,32],"./ion-radio_2.entry.js":[122,33],"./ion-range.entry.js":[123,34],"./ion-refresher_2.entry.js":[124,13],"./ion-reorder_2.entry.js":[125,19],"./ion-ripple-effect.entry.js":[126,49],"./ion-route_4.entry.js":[127,35],"./ion-searchbar.entry.js":[128,36],"./ion-segment_2.entry.js":[129,37],"./ion-select_3.entry.js":[130,38],"./ion-slide_2.entry.js":[131,50],"./ion-spinner.entry.js":[132,15],"./ion-split-pane.entry.js":[133,51],"./ion-tab-bar_2.entry.js":[134,39],"./ion-tab_2.entry.js":[135,18],"./ion-text.entry.js":[136,40],"./ion-textarea.entry.js":[137,41],"./ion-toast.entry.js":[138,42],"./ion-toggle.entry.js":[139,14],"./ion-virtual-scroll.entry.js":[140,52]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=73,e.exports=a},75:function(e,t,n){var r={"./ion-icon.entry.js":[144,67]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=75,e.exports=a},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){var r={"./pwa-action-sheet.entry.js":[148,59],"./pwa-camera-modal-instance.entry.js":[149,60],"./pwa-camera-modal.entry.js":[150,61],"./pwa-camera.entry.js":[151,62],"./pwa-toast.entry.js":[152,63]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=95,e.exports=a},96:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),c=n.n(o),i=n(22),l=n(2),s=n(57),u=n(13),m=(n(80),function(e){var t=e.name;return a.a.createElement("div",{className:"container"},a.a.createElement("strong",null,t),a.a.createElement("p",null,"Explore ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ionicframework.com/docs/components"},"UI Components")))}),b=(n(81),function(){return a.a.createElement(l.k,null,a.a.createElement(l.g,null,a.a.createElement(l.s,null,a.a.createElement(l.r,null,"Tab 1"))),a.a.createElement(l.c,{fullscreen:!0},a.a.createElement(l.g,{collapse:"condense"},a.a.createElement(l.s,null,a.a.createElement(l.r,{size:"large"},"Tab 1"))),a.a.createElement(m,{name:"Tab 10 page"})))}),p=n(59),f=n(39),j=n(3),y=n.n(j),h=n(60),E=n(11),d=n(26),v=n(64),w=n(48),g=n(65),O=n(15);n(82);var k=function(){var e=function(){var e=Object(v.a)().getPhoto,t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],o=n[1],c=Object(w.b)(),i=(c.deleteFile,c.getUri,c.readFile),s=c.writeFile,u=Object(g.a)(),m=u.get,b=u.set;Object(r.useEffect)((function(){(function(){var e=Object(E.a)(y.a.mark((function e(){var t,n,r,a,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("photos");case 2:if(t=e.sent,n=t?JSON.parse(t):[],Object(l.B)("hybrid")){e.next=24;break}r=Object(h.a)(n),e.prev=6,r.s();case 8:if((a=r.n()).done){e.next=16;break}return c=a.value,e.next=12,i({path:c.filepath,directory:O.d.Data});case 12:s=e.sent,c.base64="data:image/jpeg;base64,".concat(s.data);case 14:e.next=8;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:o(n);case 25:case"end":return e.stop()}}),e,null,[[6,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[m,i]);var j=function(){var t=Object(E.a)(y.a.mark((function t(){var n,r,c,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({resultType:O.a.Uri,source:O.b.Camera,quality:100});case 2:return n=t.sent,r=(new Date).getTime()+".jpeg",t.next=6,k(n,r);case 6:c=t.sent,i=[c].concat(Object(f.a)(a)),o(i),b("photos",Object(l.B)("hybrid")?JSON.stringify(i):JSON.stringify(i.map((function(e){var t=Object(p.a)({},e);return delete t.base64,t}))));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(y.a.mark((function e(t,n){var r,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(l.B)("hybrid")){e.next=7;break}return e.next=3,i({path:t.path});case 3:a=e.sent,r=a.data,e.next=10;break;case 7:return e.next=9,Object(w.a)(t.webPath);case 9:r=e.sent;case 10:return e.next=12,s({path:n,data:r,directory:O.d.Data});case 12:if(o=e.sent,!Object(l.B)("hybrid")){e.next=17;break}return e.abrupt("return",{filepath:o.uri,webviewPath:O.c.convertFileSrc(o.uri)});case 17:return e.abrupt("return",{filepath:n,webviewPath:t.webPath});case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{photos:a,takePhoto:j}}(),t=e.takePhoto,n=e.photos;return a.a.createElement(l.k,null,a.a.createElement(l.g,null,a.a.createElement(l.s,null,a.a.createElement(l.r,null,"Photo Gallery"))),a.a.createElement(l.c,{fullscreen:!0},a.a.createElement(l.g,{collapse:"condense"},a.a.createElement(l.s,null,a.a.createElement(l.r,{size:"large"},"Tab 2"))),a.a.createElement(l.f,null,a.a.createElement(l.n,null,n.map((function(e,t){var n;return a.a.createElement(l.b,{size:"6",key:t},a.a.createElement(l.i,{src:null!==(n=e.base64)&&void 0!==n?n:e.webviewPath}))})))),a.a.createElement(l.d,{vertical:"bottom",horizontal:"end",slot:"fixed"},a.a.createElement(l.e,{onClick:function(){return t()}},a.a.createElement(l.h,{icon:u.b})))))},x=(n(83),function(){return a.a.createElement(l.k,null,a.a.createElement(l.g,null,a.a.createElement(l.s,null,a.a.createElement(l.r,null,"Tab 3"))),a.a.createElement(l.c,{fullscreen:!0},a.a.createElement(l.g,{collapse:"condense"},a.a.createElement(l.s,null,a.a.createElement(l.r,{size:"large"},"Tab 3"))),a.a.createElement(m,{name:"Tab 3 page"})))}),_=(n(84),n(85),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94),function(){return a.a.createElement(l.a,null,a.a.createElement(s.a,null,a.a.createElement(l.q,null,a.a.createElement(l.m,null,a.a.createElement(i.b,{path:"/tab1",component:b,exact:!0}),a.a.createElement(i.b,{path:"/tab2",component:k,exact:!0}),a.a.createElement(i.b,{path:"/tab3",component:x}),a.a.createElement(i.b,{path:"/",render:function(){return a.a.createElement(i.a,{to:"/tab1"})},exact:!0})),a.a.createElement(l.o,{slot:"bottom"},a.a.createElement(l.p,{tab:"tab1",href:"/tab1"},a.a.createElement(l.h,{icon:u.q}),a.a.createElement(l.j,null,"Tab 1")),a.a.createElement(l.p,{tab:"tab2",href:"/tab2"},a.a.createElement(l.h,{icon:u.i}),a.a.createElement(l.j,null,"Photos")),a.a.createElement(l.p,{tab:"tab3",href:"/tab3"},a.a.createElement(l.h,{icon:u.p}),a.a.createElement(l.j,null,"Tab 3"))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(62);Object(T.a)(window),c.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,3,6]]]);
//# sourceMappingURL=main.ee1291e6.chunk.js.map