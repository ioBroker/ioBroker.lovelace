!function(e){function t(t){for(var n,o,c=t[0],a=t[1],i=0,u=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={33:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+"chunk."+{28:"1d2351e98ffdadb4d046",75:"eb3caea009aef76ba2cc",76:"b4c93763e8cb9373a43b",138:"d3b630ce0e4d2dea300c"}[e]+".js"}(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/frontend_latest/",o.oe=function(e){throw console.error(e),e};var c=self.webpackJsonp=self.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=a;o(o.s=168)}({136:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(90);const o={},c=e=>{if(e.html_url){const t=[n.e(75).then(n.bind(null,170))];return e.embed_iframe||t.push(Promise.all([n.e(138),n.e(76)]).then(n.bind(null,132))),Promise.all(t).then(([{importHrefPromise:t}])=>t(e.html_url))}return e.js_url?(e.js_url in o||(o[e.js_url]=Object(r.b)(e.js_url)),o[e.js_url]):e.module_url?Object(r.c)(e.module_url):Promise.reject("No valid url found in panel config.")}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{const t="html_url"in e?`ha-panel-${e.name}`:e.name;return document.createElement(t)}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>{"setProperties"in e?e.setProperties(t):Object.keys(t).forEach(n=>{e[n]=t[n]})}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t,n,r)=>{r=r||{},n=null==n?{}:n;const o=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=n,e.dispatchEvent(o),o}},168:function(e,t,n){"use strict";n.r(t);var r=n(90),o=n(136),c=n(137),a=n(138),i=n(14);const l="customElements"in window&&"content"in document.createElement("template");let u,s;function d(e){s&&Object(a.a)(s,e)}function p(e,t){const n=document.createElement("style");n.innerHTML="body{margin:0}",document.head.appendChild(n);const a=e.config._panel_custom;let p=Promise.resolve();l||(p=p.then(()=>Object(r.b)("/static/polyfills/webcomponents-bundle.js"))),p.then(()=>Object(o.a)(a)).then(()=>u||Promise.resolve()).then(()=>{(s=Object(c.a)(a)).addEventListener("hass-toggle-menu",e=>{window.parent.customPanel&&Object(i.a)(window.parent.customPanel,e.type,e.detail)}),window.addEventListener("location-changed",e=>{window.parent.customPanel&&window.parent.customPanel.navigate(window.location.pathname,!!e.detail&&e.detail.replace)}),d(Object.assign({panel:e},t)),document.body.appendChild(s)},t=>{console.error(t,e),alert(`Unable to load the panel source: ${t}.`)})}window.loadES5Adapter=()=>(u||(u=Promise.all([Object(r.b)("/static/polyfills/custom-elements-es5-adapter.js").catch(),n.e(28).then(n.bind(null,162))])),u),document.addEventListener("DOMContentLoaded",()=>window.parent.customPanel.registerIframe(p,d),{once:!0})},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));const r=(e,t,n)=>new Promise((r,o)=>{const c=document.createElement(e);let a="src",i="body";switch(c.onload=()=>r(t),c.onerror=()=>o(t),e){case"script":c.async=!0,n&&(c.type=n);break;case"link":c.type="text/css",c.rel="stylesheet",a="href",i="head"}c[a]=t,document[i].appendChild(c)}),o=e=>r("link",e),c=e=>r("script",e),a=e=>r("script",e,"module")}});
//# sourceMappingURL=custom-panel.8285be77.js.map