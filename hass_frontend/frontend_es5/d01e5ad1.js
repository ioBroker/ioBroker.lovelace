/*! For license information please see d01e5ad1.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5540],{21157:function(n,e,t){var r;t(94604);var l,i,a=(0,t(50856).d)(r||(l=['\n/* Most common used flex styles*/\n<dom-module id="iron-flex">\n  <template>\n    <style>\n      .layout.horizontal,\n      .layout.vertical {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.inline {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      }\n\n      .layout.horizontal {\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .layout.vertical {\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      .layout.wrap {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      }\n\n      .layout.no-wrap {\n        -ms-flex-wrap: nowrap;\n        -webkit-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .flex {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-auto {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      }\n\n      .flex-none {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Basic flexbox reverse styles */\n<dom-module id="iron-flex-reverse">\n  <template>\n    <style>\n      .layout.horizontal-reverse,\n      .layout.vertical-reverse {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.horizontal-reverse {\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      }\n\n      .layout.vertical-reverse {\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      }\n\n      .layout.wrap-reverse {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Flexbox alignment */\n<dom-module id="iron-flex-alignment">\n  <template>\n    <style>\n      /**\n       * Alignment in cross axis.\n       */\n      .layout.start {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.end {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      }\n\n      .layout.baseline {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      }\n\n      /**\n       * Alignment in main axis.\n       */\n      .layout.start-justified {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .layout.end-justified {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      }\n\n      .layout.around-justified {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      }\n\n      .layout.justified {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      }\n\n      /**\n       * Self alignment.\n       */\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-center {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n\n      .self-stretch {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      }\n\n      .self-baseline {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      }\n\n      /**\n       * multi-line alignment in main axis.\n       */\n      .layout.start-aligned {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      }\n\n      .layout.end-aligned {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      }\n\n      .layout.center-aligned {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      }\n\n      .layout.between-aligned {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      }\n\n      .layout.around-aligned {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Non-flexbox positioning helper styles */\n<dom-module id="iron-flex-factors">\n  <template>\n    <style>\n      .flex,\n      .flex-1 {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-2 {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      }\n\n      .flex-3 {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      }\n\n      .flex-4 {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      }\n\n      .flex-5 {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      }\n\n      .flex-6 {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      }\n\n      .flex-7 {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      }\n\n      .flex-8 {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      }\n\n      .flex-9 {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      }\n\n      .flex-10 {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      }\n\n      .flex-11 {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      }\n\n      .flex-12 {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id="iron-positioning">\n  <template>\n    <style>\n      .block {\n        display: block;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .invisible {\n        visibility: hidden !important;\n      }\n\n      .relative {\n        position: relative;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      body.fullbleed {\n        margin: 0;\n        height: 100vh;\n      }\n\n      .scroll {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      }\n\n      /* fixed position */\n      .fixed-bottom,\n      .fixed-left,\n      .fixed-right,\n      .fixed-top {\n        position: fixed;\n      }\n\n      .fixed-top {\n        top: 0;\n        left: 0;\n        right: 0;\n      }\n\n      .fixed-right {\n        top: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      .fixed-bottom {\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .fixed-left {\n        top: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>\n'],i||(i=l.slice(0)),r=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(i)}}))));a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},93217:function(n,e,t){function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,l,i=[],a=!0,o=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(s){o=!0,l=s}finally{try{a||null==t.return||t.return()}finally{if(o)throw l}}return i}(n,e)||f(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e,t){return i=a()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var l=new(Function.bind.apply(n,r));return t&&o(l,t.prototype),l},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function o(n,e){return o=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},o(n,e)}function s(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||f(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,e){if(n){if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,e):void 0}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}t.d(e,{Ud:function(){return v}});var m=Symbol("Comlink.proxy"),p=Symbol("Comlink.endpoint"),d=Symbol("Comlink.releaseProxy"),x=Symbol("Comlink.thrown"),y=function(n){return"object"===c(n)&&null!==n||"function"==typeof n},b=new Map([["proxy",{canHandle:function(n){return y(n)&&n[m]},serialize:function(n){var e=new MessageChannel,t=e.port1,r=e.port2;return w(n,t),[r,[r]]},deserialize:function(n){return n.start(),v(n)}}],["throw",{canHandle:function(n){return y(n)&&x in n},serialize:function(n){var e=n.value;return[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]]},deserialize:function(n){if(n.isError)throw Object.assign(new Error(n.value.message),n.value);throw n.value}}]]);function w(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;e.addEventListener("message",(function t(a){if(a&&a.data){var o,f=Object.assign({path:[]},a.data),u=f.id,c=f.type,m=f.path,p=(a.data.argumentList||[]).map(P);try{var d=m.slice(0,-1).reduce((function(n,e){return n[e]}),n),y=m.reduce((function(n,e){return n[e]}),n);switch(c){case"GET":o=y;break;case"SET":d[m.slice(-1)[0]]=P(a.data.value),o=!0;break;case"APPLY":o=y.apply(d,p);break;case"CONSTRUCT":var b;o=A(i(y,s(p)));break;case"ENDPOINT":var v=new MessageChannel,h=v.port1,k=v.port2;w(n,k),o=S(h,[h]);break;case"RELEASE":o=void 0;break;default:return}}catch(b){o=l({value:b},x,0)}Promise.resolve(o).catch((function(n){return l({value:n},x,0)})).then((function(n){var l=r(O(n),2),i=l[0],a=l[1];e.postMessage(Object.assign(Object.assign({},i),{id:u}),a),"RELEASE"===c&&(e.removeEventListener("message",t),g(e))}))}})),e.start&&e.start()}function g(n){(function(n){return"MessagePort"===n.constructor.name})(n)&&n.close()}function v(n,e){return k(n,[],e)}function h(n){if(n)throw new Error("Proxy has been released and is not useable")}function k(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},l=!1,i=new Proxy(t,{get:function(t,r){if(h(l),r===d)return function(){return I(n,{type:"RELEASE",path:e.map((function(n){return n.toString()}))}).then((function(){g(n),l=!0}))};if("then"===r){if(0===e.length)return{then:function(){return i}};var a=I(n,{type:"GET",path:e.map((function(n){return n.toString()}))}).then(P);return a.then.bind(a)}return k(n,[].concat(s(e),[r]))},set:function(t,i,a){h(l);var o=r(O(a),2),f=o[0],u=o[1];return I(n,{type:"SET",path:[].concat(s(e),[i]).map((function(n){return n.toString()})),value:f},u).then(P)},apply:function(t,i,a){h(l);var o=e[e.length-1];if(o===p)return I(n,{type:"ENDPOINT"}).then(P);if("bind"===o)return k(n,e.slice(0,-1));var s=r(j(a),2),f=s[0],u=s[1];return I(n,{type:"APPLY",path:e.map((function(n){return n.toString()})),argumentList:f},u).then(P)},construct:function(t,i){h(l);var a=r(j(i),2),o=a[0],s=a[1];return I(n,{type:"CONSTRUCT",path:e.map((function(n){return n.toString()})),argumentList:o},s).then(P)}});return i}function j(n){var e,t=n.map(O);return[t.map((function(n){return n[0]})),(e=t.map((function(n){return n[1]})),Array.prototype.concat.apply([],e))]}var E=new WeakMap;function S(n,e){return E.set(n,e),n}function A(n){return Object.assign(n,l({},m,!0))}function O(n){var e,t=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=f(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,l=function(){};return{s:l,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){o=!0,i=n},f:function(){try{a||null==t.return||t.return()}finally{if(o)throw i}}}}(b);try{for(t.s();!(e=t.n()).done;){var l=r(e.value,2),i=l[0],a=l[1];if(a.canHandle(n)){var o=r(a.serialize(n),2);return[{type:"HANDLER",name:i,value:o[0]},o[1]]}}}catch(s){t.e(s)}finally{t.f()}return[{type:"RAW",value:n},E.get(n)||[]]}function P(n){switch(n.type){case"HANDLER":return b.get(n.name).deserialize(n.value);case"RAW":return n.value}}function I(n,e,t){return new Promise((function(r){var l=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");n.addEventListener("message",(function e(t){t.data&&t.data.id&&t.data.id===l&&(n.removeEventListener("message",e),r(t.data))})),n.start&&n.start(),n.postMessage(Object.assign({id:l},e),t)}))}}}]);