"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[18239],{55020:(e,t,n)=>{n.d(t,{j:()=>o});var r={};function o(){return r}},5763:(e,t,n)=>{function r(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}n.d(t,{Z:()=>r})},23682:(e,t,n)=>{function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:()=>r})},86102:(e,t,n)=>{n.d(t,{u:()=>a});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},o="trunc";function a(e){return e?r[e]:r[o]}},90394:(e,t,n)=>{function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:()=>r})},24112:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(34327),o=n(5763),a=n(59429),u=n(23682),s=864e5;function i(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function l(e,t){(0,u.Z)(2,arguments);var n=(0,r.Z)(e),l=(0,r.Z)(t),c=i(n,l),d=Math.abs(function(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t),i=n.getTime()-(0,o.Z)(n),l=r.getTime()-(0,o.Z)(r);return Math.round((i-l)/s)}(n,l));n.setDate(n.getDate()-c*d);var g=c*(d-Number(i(n,l)===-c));return 0===g?0:g}},35040:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(24112),o=n(23682),a=n(86102);function u(e,t,n){(0,o.Z)(2,arguments);var u=(0,r.Z)(e,t)/7;return(0,a.u)(null==n?void 0:n.roundingMethod)(u)}},59429:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(34327),o=n(23682);function a(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}},59401:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(34327),o=n(90394),a=n(23682),u=n(55020);function s(e,t){var n,s,i,l,c,d,g,f;(0,a.Z)(1,arguments);var v=(0,u.j)(),h=(0,o.Z)(null!==(n=null!==(s=null!==(i=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t||null===(c=t.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==i?i:v.weekStartsOn)&&void 0!==s?s:null===(g=v.locale)||void 0===g||null===(f=g.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var Z=(0,r.Z)(e),w=Z.getDay(),b=(w<h?7:0)+w-h;return Z.setDate(Z.getDate()-b),Z.setHours(0,0,0,0),Z}},34327:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(76775),o=n(23682);function a(e){(0,o.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},82160:(e,t,n)=>{function r(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function o(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const o=r(n);return(e,n)=>o.then((r=>n(r.transaction(t,e).objectStore(t))))}let a;function u(){return a||(a=o("keyval-store","keyval")),a}function s(e,t=u()){return t("readonly",(t=>r(t.get(e))))}function i(e,t,n=u()){return n("readwrite",(n=>(n.put(t,e),r(n.transaction))))}function l(e=u()){return e("readwrite",(e=>(e.clear(),r(e.transaction))))}n.d(t,{MT:()=>o,RV:()=>r,U2:()=>s,ZH:()=>l,t8:()=>i})}}]);
//# sourceMappingURL=18239-yWt_ELxYhSU.js.map