(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5840],{54049:function(e,t,n){"use strict";n.d(t,{Hq:function(){return i},$Q:function(){return o},py:function(){return a}});var r=n(66628),i=!1,o=i?r.N:"B12CE3CA",a="urn:x-cast:com.nabucasa.hast"},66628:function(e,t,n){"use strict";n.d(t,{N:function(){return r},M:function(){return i}});var r="5FE44367",i="http://192.168.1.234:8123"},91794:function(e,t,n){"use strict";n.d(t,{Ni:function(){return o},Il:function(){return a},W_:function(){return s}});var r=n(54049),i=n(66628),o=function(e,t){return e.sendMessage({type:"connect",refreshToken:t.data.refresh_token,clientId:t.data.clientId,hassUrl:r.Hq?i.M:t.data.hassUrl})},a=function(e,t,n){return e.sendMessage({type:"show_lovelace_view",viewPath:t,urlPath:n||null})},s=function(e,t){if(!e.castConnectedToOurHass)return new Promise((function(n){var r=e.addEventListener("connection-changed",(function(){e.castConnectedToOurHass&&(r(),n())}));o(e,t)}))}},25840:function(e,t,n){"use strict";n.r(t);n(53918);var r,i,o,a,s,c,l,u,f=n(50424),d=n(55358),p=n(76666),h=n(91794);n(16509);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var i=j(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!O(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=A(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:x(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=x(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function P(e){var t,n=A(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function S(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function O(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function A(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t,n){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,n,r){var i=_();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(C(o.descriptor)||C(i.descriptor)){if(O(o)||O(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(O(o)){if(O(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}S(o,i)}else t.push(o)}return t}(a.d.map(P)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,d.Mo)("hui-cast-row")],(function(e,t){var m,k,_=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(r,t);var n=b(r);function r(){var t;g(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(E(t)),t}return r}(t);return{F:_,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_castManager",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_noHTTPS",value:function(){return!1}},{kind:"method",key:"setConfig",value:function(e){if(!e||void 0===e.view||null===e.view)throw new Error("View required");this._config=Object.assign({icon:"hass:television",name:"ioBroker Cast"},e)}},{kind:"method",key:"shouldUpdate",value:function(e){return!(1===e.size&&e.has("hass"))}},{kind:"method",key:"render",value:function(){if(!this._config)return(0,f.dy)(r||(r=v([""])));var e=this._castManager&&this._castManager.status&&this._config.view===this._castManager.status.lovelacePath&&this._config.dashboard===this._castManager.status.urlPath;return(0,f.dy)(i||(i=v(['\n      <ha-icon .icon="','"></ha-icon>\n      <div class="flex">\n        <div class="name">',"</div>\n        ","\n      </div>\n    "])),this._config.icon,this._config.name,this._noHTTPS?(0,f.dy)(o||(o=v([" Cast requires HTTPS "]))):void 0===this._castManager?(0,f.dy)(a||(a=v([""]))):null===this._castManager?(0,f.dy)(s||(s=v([" Cast API unavailable "]))):"NO_DEVICES_AVAILABLE"===this._castManager.castState?(0,f.dy)(c||(c=v([" No devices found "]))):(0,f.dy)(l||(l=v(['\n              <div class="controls">\n                <google-cast-launcher></google-cast-launcher>\n                <mwc-button\n                  @click=',"\n                  class=","\n                  .unelevated=","\n                  .disabled=","\n                >\n                  SHOW\n                </mwc-button>\n              </div>\n            "])),this._sendLovelace,(0,p.$)({inactive:!e}),e,!this._castManager.status))}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;D(j(_.prototype),"firstUpdated",this).call(this,e),"http:"===location.protocol&&"localhost"!==location.hostname&&(this._noHTTPS=!0),n.e(6532).then(n.bind(n,66532)).then((function(e){return(0,e.getCastManager)(t.hass.auth).then((function(e){t._castManager=e,e.addEventListener("connection-changed",(function(){t.requestUpdate()})),e.addEventListener("state-changed",(function(){t.requestUpdate()}))}),(function(){t._castManager=null}))}))}},{kind:"method",key:"updated",value:function(e){D(j(_.prototype),"updated",this).call(this,e),this._config&&this._config.hide_if_unavailable&&(this.style.display=this._castManager&&"NO_DEVICES_AVAILABLE"!==this._castManager.castState?"":"none")}},{kind:"method",key:"_sendLovelace",value:(m=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.W_)(this._castManager,this.hass.auth);case 2:(0,h.Il)(this._castManager,this._config.view,this._config.dashboard);case 3:case"end":return e.stop()}}),e,this)})),k=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=m.apply(e,t);function o(e){y(i,n,r,o,a,"next",e)}function a(e){y(i,n,r,o,a,"throw",e)}o(void 0)}))},function(){return k.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,f.iv)(u||(u=v(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      .flex {\n        flex: 1;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .name {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .controls {\n        display: flex;\n        align-items: center;\n      }\n      google-cast-launcher {\n        margin-right: 0.57em;\n        cursor: pointer;\n        display: inline-block;\n        height: 24px;\n        width: 24px;\n      }\n      .inactive {\n        padding: 0 4px;\n      }\n    "])))}}]}}),f.oi)}}]);
//# sourceMappingURL=chunk.dab453ed213638cd2c57.js.map