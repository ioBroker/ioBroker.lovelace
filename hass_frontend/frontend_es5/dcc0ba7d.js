"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[56738],{56738:function(e,t,r){r.r(t);var n,i,o,s,a,c,l=r(37500),f=r(33310),u=r(7323),d=(r(9381),r(81545),r(2130),r(35460)),p=(r(60010),r(88027)),h=(r(33968),r(47181));function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t,r,n,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,i)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var i=C(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){E=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!x(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var f=0;f<l.length;f++)this.addElementPlacement(l[f],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=j(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:S(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=S(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function P(e){var t,r=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function A(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function x(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function S(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function j(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t,r){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},T(e,t,r||e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}!function(e,t,r,n){var i=E();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(O(o.descriptor)||O(i.descriptor)){if(x(o)||x(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(x(o)){if(x(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}A(o,i)}else t.push(o)}return t}(s.d.map(P)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,f.Mo)("ha-config-section-storage")],(function(e,t){var m,w,E=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,t);var r=g(n);function n(){var t;b(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),e(_(t)),t}return n}(t);return{F:E,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_hostInfo",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){T(C(E.prototype),"firstUpdated",this).call(this,e),(0,u.p)(this.hass,"hassio")&&this._load()}},{kind:"method",key:"render",value:function(){var e,t;return(0,l.dy)(n||(n=v(['\n      <hass-subpage\n        back-path="/config/system"\n        .hass=',"\n        .narrow=","\n        .header=","\n      >\n        ",'\n        <div class="content">\n          ',"\n          ","\n        </div>\n      </hass-subpage>\n    "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.storage.caption"),this._hostInfo?(0,l.dy)(i||(i=v(['\n              <ha-button-menu corner="BOTTOM_START" slot="toolbar-icon">\n                <ha-icon-button\n                  slot="trigger"\n                  .label=',"\n                  .path=","\n                ></ha-icon-button>\n                <mwc-list-item @click=",">\n                  ","\n                </mwc-list-item>\n              </ha-button-menu>\n            "])),this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this._moveDatadisk,this.hass.localize("ui.panel.config.storage.datadisk.title")):"",this._error?(0,l.dy)(o||(o=v(['\n                <ha-alert alert-type="error"\n                  >',"</ha-alert\n                >\n              "])),this._error.message||this._error.code):"",this._hostInfo?(0,l.dy)(s||(s=v(['\n                <ha-card outlined>\n                  <div class="card-content">\n                    <ha-metric\n                      .heading=',"\n                      .value=","\n                      .tooltip=","\n                    ></ha-metric>\n                    ","\n                  </div>\n                </ha-card>\n              "])),this.hass.localize("ui.panel.config.storage.used_space"),this._getUsedSpace(null===(e=this._hostInfo)||void 0===e?void 0:e.disk_used,null===(t=this._hostInfo)||void 0===t?void 0:t.disk_total),"".concat(this._hostInfo.disk_used," GB/").concat(this._hostInfo.disk_total," GB"),""!==this._hostInfo.disk_life_time&&this._hostInfo.disk_life_time>=10?(0,l.dy)(a||(a=v(["\n                          <ha-metric\n                            .heading=","\n                            .value=","\n                            .tooltip=",'\n                            class="emmc"\n                          ></ha-metric>\n                        '])),this.hass.localize("ui.panel.config.storage.emmc_lifetime_used"),this._hostInfo.disk_life_time,"".concat(this._hostInfo.disk_life_time-10," % -\n                          ").concat(this._hostInfo.disk_life_time," %")):""):"")}},{kind:"method",key:"_load",value:(m=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Sj)(this.hass);case 3:this._hostInfo=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this._error=e.t0.message||e.t0;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})),w=function(){var e=this,t=arguments;return new Promise((function(r,n){var i=m.apply(e,t);function o(e){y(i,r,n,o,s,"next",e)}function s(e){y(i,r,n,o,s,"throw",e)}o(void 0)}))},function(){return w.apply(this,arguments)})},{kind:"method",key:"_moveDatadisk",value:function(){var e,t;e=this,t={hostInfo:this._hostInfo},(0,h.B)(e,"show-dialog",{dialogTag:"dialog-move-datadisk",dialogImport:function(){return Promise.all([r.e(29563),r.e(88278),r.e(43717),r.e(86630),r.e(29925),r.e(4940),r.e(59891)]).then(r.bind(r,59891))},dialogParams:t})}},{kind:"field",key:"_getUsedSpace",value:function(){return function(e,t){return(0,p.IU)((0,p.Ff)(e,0,t))}}},{kind:"field",static:!0,key:"styles",value:function(){return(0,l.iv)(c||(c=v(["\n    .content {\n      padding: 28px 20px 0;\n      max-width: 1040px;\n      margin: 0 auto;\n    }\n    ha-card {\n      max-width: 600px;\n      margin: 0 auto;\n      justify-content: space-between;\n      flex-direction: column;\n      display: flex;\n    }\n    .card-content {\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  "])))}}]}}),l.oi)}}]);