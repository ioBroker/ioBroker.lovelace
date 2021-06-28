(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2862],{49684:(e,t,r)=>{"use strict";r.d(t,{mr:()=>l,Vu:()=>d,xO:()=>u});var i=r(68928),n=r(14516),o=r(43274),s=r(65810);const a=(0,n.Z)((e=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:(0,s.y)(e)}))),l=o.BF?(e,t)=>a(t).format(e):(e,t)=>(0,i.WU)(e,((0,s.y)(t)," A")),c=(0,n.Z)((e=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:(0,s.y)(e)}))),d=o.BF?(e,t)=>c(t).format(e):(e,t)=>(0,i.WU)(e,((0,s.y)(t)," A")),h=(0,n.Z)((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:"numeric",minute:"2-digit",hour12:(0,s.y)(e)}))),u=o.BF?(e,t)=>h(t).format(e):(e,t)=>(0,i.WU)(e,((0,s.y)(t)," A"))},5435:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const i=[60,60,24,7],n=["second","minute","hour","day"];function o(e,t,r={}){let o=((r.compareTime||new Date).getTime()-e.getTime())/1e3;const s=o>=0?"past":"future";o=Math.abs(o);let a=Math.round(o);if(0===a)return t("ui.components.relative_time.just_now");let l="week";for(let e=0;e<i.length;e++){if(a<i[e]){l=n[e];break}o/=i[e],a=Math.round(o)}return t(!1===r.includeTense?`ui.components.relative_time.duration.${l}`:`ui.components.relative_time.${s}_duration.${l}`,"count",a)}},91168:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const i=e=>e<10?`0${e}`:e;function n(e){const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return t>0?`${t}:${i(r)}:${i(n)}`:r>0?`${r}:${i(n)}`:n>0?""+n:null}},29171:(e,t,r)=>{"use strict";r.d(t,{D:()=>c});var i=r(56007),n=r(12198),o=r(44583),s=r(49684),a=r(45524),l=r(22311);const c=(e,t,r,c)=>{const d=void 0!==c?c:t.state;if(d===i.lz||d===i.nZ)return e(`state.default.${d}`);if(t.attributes.unit_of_measurement)return`${(0,a.u)(d,r)} ${t.attributes.unit_of_measurement}`;const h=(0,l.N)(t);if("input_datetime"===h){let e;if(!t.attributes.has_time)return e=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),(0,n.p)(e,r);if(!t.attributes.has_date){const i=new Date;return e=new Date(i.getFullYear(),i.getMonth(),i.getDay(),t.attributes.hour,t.attributes.minute),(0,s.mr)(e,r)}return e=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),(0,o.o)(e,r)}return"humidifier"===h&&"on"===d&&t.attributes.humidity?`${t.attributes.humidity} %`:"counter"===h||"number"===h||"input_number"===h?(0,a.u)(d,r):t.attributes.device_class&&e(`component.${h}.state.${t.attributes.device_class}.${d}`)||e(`component.${h}.state._.${d}`)||d}},45524:(e,t,r)=>{"use strict";r.d(t,{u:()=>n});var i=r(66477);const n=(e,t,r)=>{let n;switch(null==t?void 0:t.number_format){case i.y4.comma_decimal:n=["en-US","en"];break;case i.y4.decimal_comma:n=["de","es","it"];break;case i.y4.space_comma:n=["fr","sv","cs"];break;case i.y4.system:n=void 0;break;default:n=null==t?void 0:t.language}if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},!Number.isNaN(Number(e))&&Intl&&(null==t?void 0:t.number_format)!==i.y4.none)try{return new Intl.NumberFormat(n,o(e,r)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,o(e,r)).format(Number(e))}return e.toString()},o=(e,t)=>{const r=t||{};if("string"!=typeof e)return r;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;r.minimumFractionDigits=t,r.maximumFractionDigits=t}return r}},43793:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});const i=(e,t)=>e.substring(0,t.length)===t},42952:(e,t,r)=>{"use strict";var i=r(50424),n=r(55358),o=r(5435);function s(){s=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:h(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=h(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function a(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=s();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var h=t((function(e){n.initializeInstanceElements(e,u.elements)}),r),u=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(d(o.descriptor)||d(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(h.d.map(a)),e);n.initializeClassElements(h.F,u.elements),n.runClassFinishers(h.F,u.finishers)}([(0,n.Mo)("ha-relative-time")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"datetime",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){f(m(r.prototype),"disconnectedCallback",this).call(this),this._clearInterval()}},{kind:"method",key:"connectedCallback",value:function(){f(m(r.prototype),"connectedCallback",this).call(this),this.datetime&&this._startInterval()}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"firstUpdated",value:function(e){f(m(r.prototype),"firstUpdated",this).call(this,e),this._updateRelative()}},{kind:"method",key:"update",value:function(e){f(m(r.prototype),"update",this).call(this,e),this._updateRelative()}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_startInterval",value:function(){this._clearInterval(),this._interval=window.setInterval((()=>this._updateRelative()),6e4)}},{kind:"method",key:"_updateRelative",value:function(){this.datetime?this.innerHTML=(0,o.Z)(new Date(this.datetime),this.hass.localize):this.innerHTML=this.hass.localize("ui.components.relative_time.never")}}]}}),i.fl)},97389:(e,t,r)=>{"use strict";r.d(t,{mA:()=>n,lj:()=>o,U_:()=>s,nV:()=>a,Zm:()=>l});var i=r(43793);const n=(e,t,r,i)=>e.callWS({type:"trace/get",domain:t,item_id:r,run_id:i}),o=(e,t,r)=>e.callWS({type:"trace/list",domain:t,item_id:r}),s=(e,t,r)=>e.callWS({type:"trace/contexts",domain:t,item_id:r}),a=(e,t)=>{const r=t.split("/").reverse();let i=e;for(;r.length;){const e=r.pop(),t=Number(e);if(isNaN(t))i=i[e];else if(Array.isArray(i))i=i[t];else if(0!==t)throw new Error("If config is not an array, can only return index 0")}return i},l=e=>"trigger"===e||(0,i.x)(e,"trigger/")},45578:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HaAutomationTrace:()=>Nt});var i=r(68546),n=r(50424),o=r(55358),s=r(76666),a=r(13690),l=r(7323),c=r(44583),d=(r(25230),r(47181)),h=r(42141);r(52039);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function p(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}const g=10,w=30,E={fromAttribute:e=>e.split(",").map((e=>parseInt(e))),toAttribute:e=>e instanceof Array?e.join(","):`${e}`};!function(e,t,r,i){var n=u();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(m(o)||m(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(m(o)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}f(o,n)}else t.push(o)}return t}(s.d.map(p)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hat-graph")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"_num_items",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"branching",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,converter:E})],key:"track_start",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,converter:E})],key:"track_end",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"selected",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"short",value:()=>!1},{kind:"method",key:"updateChildren",value:async function(){this._num_items=this.children.length}},{kind:"method",key:"render",value:function(){const e=[];let t=0,r=0,i=Number.POSITIVE_INFINITY;if(this.branching)for(const n of Array.from(this.children)){if("head"===n.slot)continue;const o=n.getBoundingClientRect();e.push({x:o.width/2+t,height:o.height,start:null!=n.getAttribute("graphStart"),end:null!=n.getAttribute("graphEnd")}),t+=o.width,r=Math.max(r,o.height),i=Math.min(i,o.height)}return n.dy`
      <slot name="head" @slotchange=${this.updateChildren}> </slot>
      ${this.branching?n.YP`
            <svg
              id="top"
              width="${t}"
              height="${20}"
            >
              ${e.map(((e,r)=>{var i,o,a;return e.start?"":n.YP`
                  <path
                    class="${(0,s.$)({line:!0,track:null!==(i=null===(o=this.track_start)||void 0===o?void 0:o.includes(r))&&void 0!==i&&i})}"
                    id="${null!==(a=this.track_start)&&void 0!==a&&a.includes(r)?"track-start":""}"
                    index=${r}
                    d="
                      M ${t/2} 0
                      L ${e.x} ${20}
                      "/>
                `}))}
              <use xlink:href="#track-start" />
            </svg>
          `:""}
      <div id="branches">
        ${this.branching?n.YP`
              <svg
                id="lines"
                width="${t}"
                height="${r}"
              >
                ${e.map(((e,t)=>{var i,o;return e.end?"":n.YP`
                    <path
                      class="${(0,s.$)({line:!0,track:null!==(i=null===(o=this.track_end)||void 0===o?void 0:o.includes(t))&&void 0!==i&&i})}"
                      index=${t}
                      d="
                        M ${e.x} ${e.height}
                        l 0 ${r-e.height}
                        "/>
                  `}))}
              </svg>
            `:""}
        <slot @slotchange=${this.updateChildren}></slot>
      </div>

      ${this.branching&&!this.short?n.YP`
            <svg
              id="bottom"
              width="${t}"
              height="${30}"
            >
              ${e.map(((e,r)=>{var i,o,a;return e.end?"":n.YP`
                  <path
                    class="${(0,s.$)({line:!0,track:null!==(i=null===(o=this.track_end)||void 0===o?void 0:o.includes(r))&&void 0!==i&&i})}"
                    id="${null!==(a=this.track_end)&&void 0!==a&&a.includes(r)?"track-end":""}"
                    index=${r}
                    d="
                      M ${e.x} 0
                      L ${e.x} ${g}
                      L ${t/2} ${30}
                      "/>
                `}))}
              <use xlink:href="#track-end" />
            </svg>
          `:""}
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        --stroke-clr: var(--stroke-color, var(--secondary-text-color));
        --active-clr: var(--active-color, var(--primary-color));
        --track-clr: var(--track-color, var(--accent-color));
        --hover-clr: var(--hover-color, var(--primary-color));
        --disabled-clr: var(--disabled-color, var(--disabled-text-color));
        --default-trigger-color: 3, 169, 244;
        --rgb-trigger-color: var(--trigger-color, var(--default-trigger-color));
        --background-clr: var(--background-color, white);
        --default-icon-clr: var(--icon-color, black);
        --icon-clr: var(--stroke-clr);
      }
      :host(:focus) {
        outline: none;
      }
      #branches {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      :host([branching]) #branches {
        flex-direction: row;
        align-items: start;
      }
      :host([branching]) ::slotted(*) {
        z-index: 1;
      }
      :host([branching]) ::slotted([slot="head"]) {
        margin-bottom: ${-10}px;
      }

      #lines {
        position: absolute;
      }

      path.line {
        stroke: var(--stroke-clr);
        stroke-width: 2;
        fill: none;
      }
      path.line.track {
        stroke: var(--track-clr);
      }
      :host([disabled]) path.line {
        stroke: var(--disabled-clr);
      }
    `}}]}}),n.oi);function $(){$=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!_(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=A(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:C(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=C(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function P(e){var t,r=A(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function D(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function C(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function A(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function S(e,t,r){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=$();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(D(o.descriptor)||D(n.descriptor)){if(_(o)||_(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(_(o)){if(_(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}x(o,n)}else t.push(o)}return t}(s.d.map(P)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hat-graph-node")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)()],key:"iconPath",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"graphstart",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"nofocus",value:void 0},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Number})],key:"badge",value:void 0},{kind:"method",key:"connectedCallback",value:function(){S(O(r.prototype),"connectedCallback",this).call(this),this.hasAttribute("tabindex")||this.nofocus||this.setAttribute("tabindex","0")}},{kind:"method",key:"render",value:function(){const e=w+(this.graphstart?2:11);return n.YP`
    <svg
    width="${40}px"
    height="${e}px"
    viewBox="-${Math.ceil(20)} -${this.graphstart?Math.ceil(e/2):Math.ceil(25)} ${40} ${e}"
    >
      ${this.graphstart?"":n.YP`
          <path
            class="connector"
            d="
              M 0 ${-25}
              L 0 0
            "
            line-caps="round"
          />
          `}
    <g class="node">
      <circle
        cx="0"
        cy="0"
        r="${15}"
      />
      }
      ${this.badge?n.YP`
        <g class="number">
          <circle
            cx="8"
            cy="${-15}"
            r="8"
          ></circle>
          <text
            x="8"
            y="${-15}"
            text-anchor="middle"
            alignment-baseline="middle"
          >${this.badge>9?"9+":this.badge}</text>
        </g>
      `:""}
      <g
        style="pointer-events: none"
        transform="translate(${-12} ${-12})"
      >
        ${this.iconPath?n.YP`<path class="icon" d="${this.iconPath}"/>`:""}
      </g>
    </g>
      </svg>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      :host {
        display: flex;
        flex-direction: column;
      }
      :host(.track) {
        --stroke-clr: var(--track-clr);
        --icon-clr: var(--default-icon-clr);
      }
      :host(.active) circle {
        --stroke-clr: var(--active-clr);
        --icon-clr: var(--default-icon-clr);
      }
      :host(:focus) {
        outline: none;
      }
      :host(:hover) circle {
        --stroke-clr: var(--hover-clr);
        --icon-clr: var(--default-icon-clr);
      }
      :host([disabled]) circle {
        stroke: var(--disabled-clr);
      }
      :host-context([disabled]) {
        --stroke-clr: var(--disabled-clr);
      }
      :host([nofocus]):host-context(.active),
      :host([nofocus]):host-context(:focus) {
        --circle-clr: var(--active-clr);
        --icon-clr: var(--default-icon-clr);
      }
      circle,
      path.connector {
        stroke: var(--stroke-clr);
        stroke-width: 2;
        fill: none;
      }
      circle {
        fill: var(--background-clr);
        stroke: var(--circle-clr, var(--stroke-clr));
      }
      .number circle {
        fill: var(--track-clr);
        stroke: none;
        stroke-width: 0;
      }
      .number text {
        font-size: smaller;
      }
      path.icon {
        fill: var(--icon-clr);
      }

      :host(.triggered) svg {
        overflow: visible;
      }
      :host(.triggered) circle {
        animation: glow 10s;
      }
      @keyframes glow {
        0% {
          filter: drop-shadow(0px 0px 5px rgba(var(--rgb-trigger-color), 0));
        }
        10% {
          filter: drop-shadow(0px 0px 10px rgba(var(--rgb-trigger-color), 1));
        }
        100% {
          filter: drop-shadow(0px 0px 5px rgba(var(--rgb-trigger-color), 0));
        }
      }
    `}}]}}),n.oi);function I(){I=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!F(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=M(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:R(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=R(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function j(e){var t,r=M(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function z(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function F(e){return e.decorators&&e.decorators.length}function N(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function M(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=I();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(N(o.descriptor)||N(n.descriptor)){if(F(o)||F(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(F(o)){if(F(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}z(o,n)}else t.push(o)}return t}(s.d.map(j)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hat-graph-spacer")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"disabled",value:void 0},{kind:"method",key:"render",value:function(){return n.YP`
    <svg
    width="${g}px"
    height="${41}px"
    viewBox="-${5} 0 10 ${41}"
    >
          <path
            class="connector"
            d="
              M 0 ${41}
              L 0 0
            "
            line-caps="round"
          />
      }
      </svg>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      :host {
        display: flex;
        flex-direction: column;
      }
      :host(.track) {
        --stroke-clr: var(--track-clr);
        --icon-clr: var(--default-icon-clr);
      }
      :host-context([disabled]) {
        --stroke-clr: var(--disabled-clr);
      }
      path.connector {
        stroke: var(--stroke-clr);
        stroke-width: 2;
        fill: none;
      }
    `}}]}}),n.oi);function L(){L=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!W(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=V(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Z(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Z(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function U(e){var t,r=V(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function q(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function W(e){return e.decorators&&e.decorators.length}function Y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Z(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function V(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function J(e,t,r){return(J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=L();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Y(o.descriptor)||Y(n.descriptor)){if(W(o)||W(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(W(o)){if(W(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}q(o,n)}else t.push(o)}return t}(s.d.map(U)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hat-script-graph")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"trace",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"selected",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"renderedNodes",value:()=>({})},{kind:"field",decorators:[(0,o.Cb)()],key:"trackedNodes",value:()=>({})},{kind:"method",key:"selectNode",value:function(e,t){return()=>{(0,d.B)(this,"graph-node-selected",{config:e,path:t})}}},{kind:"method",key:"render_trigger",value:function(e,t){const r=`trigger/${t}`,o=this.trace&&r in this.trace.trace;return this.renderedNodes[r]={config:e,path:r},o&&(this.trackedNodes[r]=this.renderedNodes[r]),n.dy`
      <hat-graph-node
        graphStart
        @focus=${this.selectNode(e,r)}
        class=${(0,s.$)({track:o,active:this.selected===r})}
        .iconPath=${i.AD$}
        tabindex=${o?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_condition",value:function(e,t){const r=`condition/${t}`,o=this.trace.trace[r],a=void 0===(null==o?void 0:o[0].result)?0:o[0].result.result?1:2;return this.renderedNodes[r]={config:e,path:r},o&&(this.trackedNodes[r]=this.renderedNodes[r]),n.dy`
      <hat-graph
        branching
        @focus=${this.selectNode(e,r)}
        class=${(0,s.$)({track:a,active:this.selected===r})}
        .track_start=${[a]}
        .track_end=${[a]}
        tabindex=${o?"-1":"0"}
        short
      >
        <hat-graph-node
          slot="head"
          class=${(0,s.$)({track:void 0!==o})}
          .iconPath=${i._wd}
          nofocus
          graphEnd
        ></hat-graph-node>
        <div
          style=${"width: 40px;"}
          graphStart
          graphEnd
        ></div>
        <div></div>
        <hat-graph-node
          .iconPath=${i.r5M}
          graphEnd
          nofocus
          class=${(0,s.$)({track:2===a})}
        ></hat-graph-node>
      </hat-graph>
    `}},{kind:"method",key:"render_choose_node",value:function(e,t){var r,o,a;const l=this.trace.trace[t],c=null!=l&&l[0].result?"default"===l[0].result.choice?[Array.isArray(e.choose)?e.choose.length:0]:[l[0].result.choice]:[];return n.dy`
      <hat-graph
        tabindex=${void 0===l?"-1":"0"}
        branching
        .track_start=${c}
        .track_end=${c}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:void 0!==l,active:this.selected===t})}
      >
        <hat-graph-node
          .iconPath=${i.g$R}
          class=${(0,s.$)({track:void 0!==l})}
          slot="head"
          nofocus
        ></hat-graph-node>

        ${e.choose?null===(r=(0,h.r)(e.choose))||void 0===r?void 0:r.map(((r,o)=>{var a;const c=`${t}/choose/${o}`,d=void 0!==l&&(null===(a=l[0].result)||void 0===a?void 0:a.choice)===o;return this.renderedNodes[c]={config:e,path:c},d&&(this.trackedNodes[c]=this.renderedNodes[c]),n.dy`
                <hat-graph>
                  <hat-graph-node
                    .iconPath=${!l||d?i.Eut:i.Ii0}
                    @focus=${this.selectNode(e,c)}
                    class=${(0,s.$)({active:this.selected===c,track:d})}
                  ></hat-graph-node>
                  ${(0,h.r)(r.sequence).map(((e,t)=>this.render_node(e,`${c}/sequence/${t}`)))}
                </hat-graph>
              `})):""}
        <hat-graph>
          <hat-graph-spacer
            class=${(0,s.$)({track:void 0!==l&&"default"===(null===(o=l[0].result)||void 0===o?void 0:o.choice)})}
          ></hat-graph-spacer>
          ${null===(a=(0,h.r)(e.default))||void 0===a?void 0:a.map(((e,r)=>this.render_node(e,`${t}/default/${r}`)))}
        </hat-graph>
      </hat-graph>
    `}},{kind:"method",key:"render_condition_node",value:function(e,t){const r=this.trace.trace[t]||void 0,o=void 0===(null==r?void 0:r[0].result)?0:r[0].result.result?1:2;return n.dy`
      <hat-graph
        branching
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:o,active:this.selected===t})}
        .track_start=${[o]}
        .track_end=${[o]}
        tabindex=${void 0===r?"-1":"0"}
        short
      >
        <hat-graph-node
          slot="head"
          class=${(0,s.$)({track:Boolean(r)})}
          .iconPath=${i._wd}
          nofocus
          graphEnd
        ></hat-graph-node>
        <div
          style=${"width: 40px;"}
          graphStart
          graphEnd
        ></div>
        <div></div>
        <hat-graph-node
          .iconPath=${i.r5M}
          graphEnd
          nofocus
          class=${(0,s.$)({track:2===o})}
        ></hat-graph-node>
      </hat-graph>
    `}},{kind:"method",key:"render_delay_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i.clR}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
        tabindex=${this.trace&&t in this.trace.trace?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_device_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i.p0g}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
        tabindex=${this.trace&&t in this.trace.trace?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_event_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i.XW6}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
        tabindex=${this.trace&&t in this.trace.trace?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_repeat_node",value:function(e,t){var r,o;const a=this.trace.trace[t],l=a?[0,1]:[],c=null===(r=this.trace)||void 0===r||null===(o=r.trace[`${t}/repeat/sequence/0`])||void 0===o?void 0:o.length;return n.dy`
      <hat-graph
        .track_start=${l}
        .track_end=${l}
        tabindex=${void 0===a?"-1":"0"}
        branching
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
      >
        <hat-graph-node
          .iconPath=${i.jcD}
          class=${(0,s.$)({track:a})}
          slot="head"
          nofocus
        ></hat-graph-node>
        <hat-graph-node
          .iconPath=${i.XHH}
          nofocus
          class=${(0,s.$)({track:l.includes(1)})}
          .badge=${c}
        ></hat-graph-node>
        <hat-graph>
          ${(0,h.r)(e.repeat.sequence).map(((e,r)=>this.render_node(e,`${t}/repeat/sequence/${r}`)))}
        </hat-graph>
      </hat-graph>
    `}},{kind:"method",key:"render_scene_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i.XW6}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
        tabindex=${this.trace&&t in this.trace.trace?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_service_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i.zrb}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
        tabindex=${this.trace&&t in this.trace.trace?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_wait_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i._yq}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
        tabindex=${this.trace&&t in this.trace.trace?"0":"-1"}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_other_node",value:function(e,t){return n.dy`
      <hat-graph-node
        .iconPath=${i.Nqu}
        @focus=${this.selectNode(e,t)}
        class=${(0,s.$)({track:t in this.trace.trace,active:this.selected===t})}
      ></hat-graph-node>
    `}},{kind:"method",key:"render_node",value:function(e,t){const r={choose:this.render_choose_node,condition:this.render_condition_node,delay:this.render_delay_node,device_id:this.render_device_node,event:this.render_event_node,repeat:this.render_repeat_node,scene:this.render_scene_node,service:this.render_service_node,wait_template:this.render_wait_node,wait_for_trigger:this.render_wait_node,other:this.render_other_node},i=r[Object.keys(r).find((t=>t in e))||"other"].bind(this)(e,t);return this.renderedNodes[t]={config:e,path:t},this.trace&&t in this.trace.trace&&(this.trackedNodes[t]=this.renderedNodes[t]),i}},{kind:"method",key:"render",value:function(){const e=Object.keys(this.trackedNodes);let t=this.trace&&"trigger"in this.trace.trace?void 0:[0];const r=(0,h.r)(this.trace.config.trigger).map(((e,r)=>(this.trace&&`trigger/${r}`in this.trace.trace&&(t=[r]),this.render_trigger(e,r))));try{var o;return n.dy`
        <hat-graph class="parent">
          <div></div>
          <hat-graph
            branching
            id="trigger"
            .short=${r.length<2}
            .track_start=${t}
            .track_end=${t}
          >
            ${r}
          </hat-graph>
          <hat-graph id="condition">
            ${null===(o=(0,h.r)(this.trace.config.condition))||void 0===o?void 0:o.map(((e,t)=>this.render_condition(e,t)))}
          </hat-graph>
          ${(0,h.r)(this.trace.config.action).map(((e,t)=>this.render_node(e,`action/${t}`)))}
        </hat-graph>
        <div class="actions">
          <mwc-icon-button
            .disabled=${0===e.length||e[0]===this.selected}
            @click=${this.previousTrackedNode}
          >
            <ha-svg-icon .path=${i.Waq}></ha-svg-icon>
          </mwc-icon-button>
          <mwc-icon-button
            .disabled=${0===e.length||e[e.length-1]===this.selected}
            @click=${this.nextTrackedNode}
          >
            <ha-svg-icon .path=${i.CW}></ha-svg-icon>
          </mwc-icon-button>
        </div>
      `}catch(e){return n.dy`
        <div class="error">
          Error rendering graph. Please download trace and share with the
          developers.
        </div>
      `}}},{kind:"method",key:"update",value:function(e){e.has("trace")&&(this.renderedNodes={},this.trackedNodes={}),J(X(r.prototype),"update",this).call(this,e)}},{kind:"method",key:"updated",value:function(e){if(J(X(r.prototype),"updated",this).call(this,e),e.has("trace")){const e=this.trackedNodes,t=Object.keys(e);if(""===this.selected||!(this.selected in t))for(const r of t)if(e[r]){(0,d.B)(this,"graph-node-selected",e[r]);break}if(this.trace){const e=Object.keys(this.trace.trace),t=Object.keys(this.renderedNodes).sort(((t,r)=>e.indexOf(t)-e.indexOf(r))),r={},i={};for(const e of t)i[e]=this.renderedNodes[e],e in this.trackedNodes&&(r[e]=this.trackedNodes[e]);this.renderedNodes=i,this.trackedNodes=r}}}},{kind:"method",key:"previousTrackedNode",value:function(){const e=Object.keys(this.trackedNodes),t=e.indexOf(this.selected)-1;t>=0&&(0,d.B)(this,"graph-node-selected",this.trackedNodes[e[t]])}},{kind:"method",key:"nextTrackedNode",value:function(){const e=Object.keys(this.trackedNodes),t=e.indexOf(this.selected)+1;t<e.length&&(0,d.B)(this,"graph-node-selected",this.trackedNodes[e[t]])}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      :host {
        display: flex;
      }
      .actions {
        display: flex;
        flex-direction: column;
      }
      .parent {
        margin-left: 8px;
      }
      .error {
        padding: 16px;
        max-width: 300px;
      }
    `}}]}}),n.oi);var K=r(55422),G=r(97389),Q=r(26765),ee=r(11654),te=r(29311),re=r(98595);r(53822),r(10983);function ie(){ie=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!se(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return de(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?de(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ce(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:le(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=le(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ne(e){var t,r=ce(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function oe(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function se(e){return e.decorators&&e.decorators.length}function ae(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function le(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ce(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=ie();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(ae(o.descriptor)||ae(n.descriptor)){if(se(o)||se(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(se(o)){if(se(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}oe(o,n)}else t.push(o)}return t}(s.d.map(ne)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-automation-trace-blueprint-config")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"trace",value:void 0},{kind:"method",key:"render",value:function(){return n.dy`
      <ha-code-editor
        .value=${(0,re.$w)(this.trace.blueprint_inputs||"").trimRight()}
        readOnly
      ></ha-code-editor>
    `}}]}}),n.oi);function he(){he=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!fe(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ke(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ke(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ye(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ve(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=ve(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ue(e){var t,r=ye(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function pe(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function fe(e){return e.decorators&&e.decorators.length}function me(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ve(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ye(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=he();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(me(o.descriptor)||me(n.descriptor)){if(fe(o)||fe(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(fe(o)){if(fe(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}pe(o,n)}else t.push(o)}return t}(s.d.map(ue)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-automation-trace-config")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"trace",value:void 0},{kind:"method",key:"render",value:function(){return n.dy`
      <ha-code-editor
        .value=${(0,re.$w)(this.trace.config).trimRight()}
        readOnly
      ></ha-code-editor>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv``]}}]}}),n.oi);function be(){be=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Ee(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_e(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=xe(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Pe(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Pe(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ge(e){var t,r=xe(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function we(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Ee(e){return e.decorators&&e.decorators.length}function $e(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Pe(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function xe(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=be();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if($e(o.descriptor)||$e(n.descriptor)){if(Ee(o)||Ee(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Ee(o)){if(Ee(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}we(o,n)}else t.push(o)}return t}(s.d.map(ge)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hat-logbook-note")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return n.dy`
      Not all shown logbook entries might be related to this automation.
    `}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`
    :host {
      display: block;
      text-align: center;
      font-style: italic;
      padding: 16px;
      margin-top: 8px;
    }
  `}]}}),n.oi);r(97740);function De(){De=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Te(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?je(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Ie(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Oe(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Oe(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Ce(e){var t,r=Ie(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Ae(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Te(e){return e.decorators&&e.decorators.length}function Se(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Oe(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Ie(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=De();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Se(o.descriptor)||Se(n.descriptor)){if(Te(o)||Te(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Te(o)){if(Te(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Ae(o,n)}else t.push(o)}return t}(s.d.map(Ce)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-automation-trace-logbook")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"logbookEntries",value:void 0},{kind:"method",key:"render",value:function(){return this.logbookEntries.length?n.dy`
          <ha-logbook
            relative-time
            .hass=${this.hass}
            .entries=${this.logbookEntries}
            .narrow=${this.narrow}
          ></ha-logbook>
          <hat-logbook-note></hat-logbook-note>
        `:n.dy`<div class="padded-box">
          No Logbook entries found for this step.
        </div>`}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`
        .padded-box {
          padding: 16px;
        }
      `]}}]}}),n.oi);const ze=n.iv`
  .tabs {
    background-color: var(--primary-background-color);
    border-top: 1px solid var(--divider-color);
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    padding-left: 4px;
  }

  .tabs.top {
    border-top: none;
  }

  .tabs > * {
    padding: 2px 16px;
    cursor: pointer;
    position: relative;
    bottom: -1px;
    border: none;
    border-bottom: 2px solid transparent;
    user-select: none;
    background: none;
    color: var(--primary-text-color);
    outline: none;
    transition: background 15ms linear;
  }

  .tabs > *.active {
    border-bottom-color: var(--accent-color);
  }

  .tabs > *:focus,
  .tabs > *:hover {
    background: var(--secondary-background-color);
  }
`;function Fe(){Fe=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Me(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return qe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?qe(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Ue(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Le(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Le(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Ne(e){var t,r=Ue(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Re(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Me(e){return e.decorators&&e.decorators.length}function Be(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Le(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Ue(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=Fe();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Be(o.descriptor)||Be(n.descriptor)){if(Me(o)||Me(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Me(o)){if(Me(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Re(o,n)}else t.push(o)}return t}(s.d.map(Ne)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-automation-trace-path-details")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"selected",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"trace",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"logbookEntries",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"renderedNodes",value:()=>({})},{kind:"field",decorators:[(0,o.Cb)()],key:"trackedNodes",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_view",value:()=>"config"},{kind:"method",key:"render",value:function(){return n.dy`
      <div class="padded-box trace-info">
        ${this._renderSelectedTraceInfo()}
      </div>

      <div class="tabs top">
        ${[["config","Step Config"],["changed_variables","Changed Variables"],["logbook","Related logbook entries"]].map((([e,t])=>n.dy`
            <button
              .view=${e}
              class=${(0,s.$)({active:this._view===e})}
              @click=${this._showTab}
            >
              ${t}
            </button>
          `))}
      </div>
      ${"config"===this._view?this._renderSelectedConfig():"changed_variables"===this._view?this._renderChangedVars():this._renderLogbook()}
    `}},{kind:"method",key:"_renderSelectedTraceInfo",value:function(){var e;const t=this.trace.trace;if(null===(e=this.selected)||void 0===e||!e.path)return"Select a node on the left for more information.";const r=this.selected.path.split("/");if("default"===r[r.length-1]){var i,o;const e=t[r.slice(0,r.length-1).join("/")];if(e&&"default"===(null===(i=e[0])||void 0===i||null===(o=i.result)||void 0===o?void 0:o.choice))return"The default node was executed because no choices matched."}if(!(this.selected.path in t))return"This node was not executed and so no further trace information is available.";const s=[];let a=!1;for(const e of Object.keys(this.trace.trace)){if(a){if(e in this.renderedNodes)break}else{if(e!==this.selected.path)continue;a=!0}const r=t[e];s.push(r.map(((t,i)=>{const{path:o,timestamp:s,result:a,error:l,changed_variables:d,...h}=t;return n.dy`
            ${e===this.selected.path?"":n.dy`<h2>${e.substr(this.selected.path.length+1)}</h2>`}
            ${1===r.length?"":n.dy`<h3>Iteration ${i+1}</h3>`}
            Executed:
            ${(0,c.E)(new Date(s),this.hass.locale)}<br />
            ${a?n.dy`Result:
                  <pre>${(0,re.$w)(a)}</pre>`:l?n.dy`<div class="error">Error: ${l}</div>`:""}
            ${0===Object.keys(h).length?"":n.dy`<pre>${(0,re.$w)(h)}</pre>`}
          `})))}return s}},{kind:"method",key:"_renderSelectedConfig",value:function(){var e;if(null===(e=this.selected)||void 0===e||!e.path)return"";const t=(0,G.nV)(this.trace.config,this.selected.path);return t?n.dy`<ha-code-editor
          .value=${(0,re.$w)(t).trimRight()}
          readOnly
        ></ha-code-editor>`:"Unable to find config"}},{kind:"method",key:"_renderChangedVars",value:function(){const e=this.trace.trace[this.selected.path];return n.dy`
      <div class="padded-box">
        ${e.map(((e,t)=>n.dy`
            ${t>0?n.dy`<p>Iteration ${t+1}</p>`:""}
            ${0===Object.keys(e.changed_variables||{}).length?"No variables changed":n.dy`<pre>${(0,re.$w)(e.changed_variables).trimRight()}</pre>`}
          `))}
      </div>
    `}},{kind:"method",key:"_renderLogbook",value:function(){const e=this.trace.trace,t=e[this.selected.path],r=Object.keys(this.trackedNodes),i=r.indexOf(this.selected.path);if(-1===i)return n.dy`<div class="padded-box">Node not tracked.</div>`;let o;if(i===r.length-1){const e=new Date(t[0].timestamp),r=this.logbookEntries.findIndex((t=>new Date(t.when)>=e));o=-1===r?[]:this.logbookEntries.slice(r)}else{const n=e[r[i+1]],s=new Date(t[0].timestamp),a=new Date(n[0].timestamp);o=[];for(const e of this.logbookEntries||[]){const t=new Date(e.when);if(t>=s){if(!(t<a))break;o.push(e)}}}return o.length?n.dy`
          <ha-logbook
            relative-time
            .hass=${this.hass}
            .entries=${o}
            .narrow=${this.narrow}
          ></ha-logbook>
          <hat-logbook-note></hat-logbook-note>
        `:n.dy`<div class="padded-box">
          No Logbook entries found for this step.
        </div>`}},{kind:"method",key:"_showTab",value:function(e){this._view=e.target.view}},{kind:"get",static:!0,key:"styles",value:function(){return[ze,n.iv`
        .padded-box {
          margin: 16px;
        }

        :host(:not([narrow])) .trace-info {
          min-height: 250px;
        }

        pre {
          margin: 0;
        }

        .error {
          color: var(--error-color);
        }
      `]}}]}}),n.oi);var We=r(82816),Ye=r(5435),Ze=r(44547),Ve=r(91168),He=r(91741),Je=r(61761);function Xe(){Xe=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Qe(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return it(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?it(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=rt(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:tt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=tt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Ke(e){var t,r=rt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Ge(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Qe(e){return e.decorators&&e.decorators.length}function et(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function tt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function rt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function it(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=Xe();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(et(o.descriptor)||et(n.descriptor)){if(Qe(o)||Qe(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Qe(o)){if(Qe(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Ge(o,n)}else t.push(o)}return t}(s.d.map(Ke)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-timeline")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"label",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"lastItem",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"icon",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"moreItems",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_showMore",value:()=>!1},{kind:"method",key:"render",value:function(){return n.dy`
      <div class="timeline-start">
        ${this.label?"":n.dy`
              <ha-svg-icon .path=${this.icon||i.KS$}></ha-svg-icon>
            `}
        ${this.lastItem?"":n.dy`<div class="line"></div>`}
      </div>
      <div class="content">
        <slot></slot>
        ${this.moreItems?n.dy`
              <div>
                ${this._showMore||1===this.moreItems.length?this.moreItems:n.dy`
                      <button class="link" @click=${this._handleShowMore}>
                        Show ${this.moreItems.length} more items
                      </button>
                    `}
              </div>
            `:""}
      </div>
    `}},{kind:"method",key:"_handleShowMore",value:function(){this._showMore=!0}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`
        :host {
          display: flex;
          flex-direction: row;
        }
        :host(:not([lastItem])) {
          min-height: 50px;
        }
        :host([label]) {
          margin-top: -8px;
          font-style: italic;
          color: var(--timeline-label-color, var(--secondary-text-color));
        }
        .timeline-start {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 8px;
          width: 24px;
        }
        ha-svg-icon {
          color: var(
            --timeline-ball-color,
            var(--timeline-color, var(--secondary-text-color))
          );
          border-radius: 50%;
        }
        :host([raised]) ha-svg-icon {
          transform: scale(1.3);
        }
        .line {
          flex: 1;
          width: 2px;
          background-color: var(
            --timeline-line-color,
            var(--timeline-color, var(--secondary-text-color))
          );
          margin: 4px 0;
        }
        .content {
          margin-top: 2px;
        }
        :host(:not([lastItem])) .content {
          padding-bottom: 16px;
        }
        :host([label]) .content {
          margin-top: 0;
          padding-top: 6px;
        }
      `,ee.k1]}}]}}),n.oi);function nt(){nt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!at(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ht(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ht(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=dt(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ct(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=ct(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ot(e){var t,r=dt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function st(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function at(e){return e.decorators&&e.decorators.length}function lt(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ct(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function dt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function ht(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function ut(e,t,r){return(ut="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=pt(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function pt(e){return(pt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ft(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const mt=(e,t)=>Math.abs(t.getTime()-e.getTime())>1e3;class vt{constructor(e,t,r){this.hass=e,this.entries=t,ft(this,"lastReportedTime",void 0),this.lastReportedTime=new Date(r.timestamp.start)}setLastReportedTime(e){this.lastReportedTime=e}renderTime(e,t){this.entries.push(n.dy`
      <ha-timeline label>
        ${(0,Ye.Z)(e,this.hass.localize,{compareTime:t,includeTense:!1})}
        later
      </ha-timeline>
    `),this.lastReportedTime=t}maybeRenderTime(e){return mt(e,this.lastReportedTime)?(this.renderTime(this.lastReportedTime,e),!0):(this.lastReportedTime=e,!1)}}class yt{constructor(e,t,r){this.entries=e,this.timeTracker=t,this.logbookEntries=r,ft(this,"curIndex",void 0),ft(this,"pendingItems",[]),this.curIndex=r.length>0&&"automation"===r[0].domain?1:0}get curItem(){return this.logbookEntries[this.curIndex]}get hasNext(){return this.curIndex!==this.logbookEntries.length}maybeRenderItem(){const e=this.curItem;this.curIndex++;const t=new Date(e.when);if(0===this.pendingItems.length)return void this.pendingItems.push([t,e]);const r=this.pendingItems[this.pendingItems.length-1][0];mt(r,t)&&(this._renderLogbookEntries(),this.timeTracker.renderTime(r,t)),this.pendingItems.push([t,e])}flush(){this.pendingItems.length>0&&this._renderLogbookEntries()}_renderLogbookEntries(){this.timeTracker.maybeRenderTime(this.pendingItems[0][0]);const e=[];let t,r;for(t=0;t<Math.min(this.pendingItems.length,2);t++)e.push(this._renderLogbookEntryHelper(this.pendingItems[t][1]));if(t<this.pendingItems.length)for(r=[];t<this.pendingItems.length;t++)r.push(this._renderLogbookEntryHelper(this.pendingItems[t][1]));this.entries.push(n.dy`
      <ha-timeline .icon=${i.KS$} .moreItems=${r}>
        ${e}
      </ha-timeline>
    `),this.timeTracker.setLastReportedTime(this.pendingItems[this.pendingItems.length-1][0]),this.pendingItems=[]}_renderLogbookEntryHelper(e){return n.dy`${e.name} (${e.entity_id})
      ${e.message||`turned ${e.state}`}<br />`}}class kt{constructor(e,t,r,i,n){this.hass=e,this.entries=t,this.trace=r,this.logbookRenderer=i,this.timeTracker=n,ft(this,"curIndex",0),ft(this,"keys",void 0),this.keys=Object.keys(r.trace)}get curItem(){return this._getItem(this.curIndex)}get hasNext(){return this.curIndex!==this.keys.length}renderItem(){this.curIndex=this._renderItem(this.curIndex)}_getItem(e){return this.trace.trace[this.keys[e]]}_renderItem(e,t){const r=this._getItem(e);if((0,G.Zm)(r[0].path))return this._handleTrigger(e,r[0]);const i=new Date(r[0].timestamp);for(;this.logbookRenderer.hasNext&&new Date(this.logbookRenderer.curItem.when)<i;)this.logbookRenderer.maybeRenderItem();this.logbookRenderer.flush(),this.timeTracker.maybeRenderTime(i);const n=r[0].path;let o;try{o=(0,G.nV)(this.trace.config,n)}catch(t){return this._renderEntry(n,`Unable to extract path ${n}. Download trace and report as bug`),e+1}const s=n.split("/");if(!(2===s.length)&&!t)return this._renderEntry(n,n.replace(/\//g," ")),e+1;if(t||(t=(0,Ze.Pw)(o)),"choose"===t)return this._handleChoose(e);this._renderEntry(n,((e,t,r)=>{if(t.alias)return t.alias;if(r||(r=(0,Ze.Pw)(t)),"service"===r){const e=t;let i;if(e.service_template||e.service&&(0,Je.J)(e.service))i="Call a service based on a template";else{if(!e.service)return r;i=`Call service ${e.service}`}if(e.target){const t=[];for(const[r,i]of Object.entries({area_id:"areas",device_id:"devices",entity_id:"entities"})){if(!(r in e.target))continue;const n=Array.isArray(e.target[r])?e.target[r]:[e.target[r]],o=[];let s=!0;for(const e of n){if((0,Je.J)(e)){t.push(`templated ${i}`),s=!1;break}o.push(e)}s&&t.push(`${i} ${o.join(", ")}`)}t.length>0&&(i+=` on ${t.join(", ")}`)}return i}if("delay"===r){const e=t;let r;return r="number"==typeof e.delay?`for ${(0,Ve.Z)(e.delay)}`:"string"==typeof e.delay?(0,Je.J)(e.delay)?"based on a template":`for ${e.delay}`:`for ${JSON.stringify(e.delay)}`,`Delay ${r}`}if("activate_scene"===r){const r=t,i=e.states[r.scene];return`Activate scene ${i?(0,He.C)(i):r.scene}`}if("wait_for_trigger"===r){const e=t;return`Wait for ${(0,h.r)(e.wait_for_trigger).map((e=>(e=>`${e.platform} trigger`)(e))).join(", ")}`}if("variables"===r){const e=t;return`Define variables ${Object.keys(e.variables).join(", ")}`}if("fire_event"===r){const e=t;return(0,Je.J)(e.event)?"Fire event based on a template":`Fire event ${e.event}`}return"wait_template"===r?"Wait for a template to render true":"check_condition"===r?`Test ${i=t,i.alias?i.alias:["or","and","not"].includes(i.condition)?`multiple conditions using "${i.condition}"`:`${i.condition} condition`}`:r;var i})(this.hass,o,t));let a=e+1;for(;a<this.keys.length&&this.keys[a].split("/").length!==s.length;a++);return a}_handleTrigger(e,t){return this._renderEntry(t.path,`Triggered ${"trigger"===t.path?"manually":`by the ${this.trace.trigger}`} at\n    ${(0,c.E)(new Date(t.timestamp),this.hass.locale)}`,i.mdD),e+1}_handleChoose(e){var t;const r=this.keys[e],i=r.split("/").length,n=this._getItem(e)[0],o="default"===(null===(t=n.result)||void 0===t?void 0:t.choice),s=this._getDataFromPath(this.keys[e]).alias||"Choose";if(o)this._renderEntry(r,`${s}: Default action executed`);else if(n.result){const t=this._getDataFromPath(`${this.keys[e]}/choose/${n.result.choice}`),i=t?`${t.alias||`Choice ${n.result.choice}`} executed`:`Error: ${n.error}`;this._renderEntry(r,`${s}: ${i}`)}else this._renderEntry(r,`${s}: No action taken`);let a;for(a=e+1;a<this.keys.length;a++){const e=this.keys[a].split("/");if(e.length<=i)return a;if(o&&"default"===e[i+1]||!o&&"sequence"===e[i+3])break}for(;a<this.keys.length;){const e=this.keys[a];if(e.split("/").length<=i)return a;a=this._renderItem(a,(0,Ze.Pw)(this._getDataFromPath(e)))}return a}_renderEntry(e,t,r=i.U3w){this.entries.push(n.dy`
      <ha-timeline .icon=${r} data-path=${e}>
        ${t}
      </ha-timeline>
    `)}_getDataFromPath(e){return(0,G.nV)(this.trace.config,e)}}!function(e,t,r,i){var n=nt();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(lt(o.descriptor)||lt(n.descriptor)){if(at(o)||at(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(at(o)){if(at(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}st(o,n)}else t.push(o)}return t}(s.d.map(ot)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hat-trace-timeline")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"trace",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"logbookEntries",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"selectedPath",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"allowPick",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.trace)return n.dy``;const e=[],t=new vt(this.hass,e,this.trace),r=new yt(e,t,this.logbookEntries||[]),o=new kt(this.hass,e,this.trace,r,t);for(;o.hasNext;)o.renderItem();for(;r.hasNext;)r.maybeRenderItem();r.flush();const s=()=>(0,c.E)(new Date(this.trace.timestamp.finish),this.hass.locale),a=()=>`(runtime:\n      ${((new Date(this.trace.timestamp.finish).getTime()-new Date(this.trace.timestamp.start).getTime())/1e3).toFixed(2)}\n      seconds)`;let l;if("running"===this.trace.state)l={description:"Still running",icon:i.plV};else if("debugged"===this.trace.state)l={description:"Debugged",icon:i.Oy8};else if("finished"===this.trace.script_execution)l={description:`Finished at ${s()} ${a()}`,icon:i.mdD};else if("aborted"===this.trace.script_execution)l={description:`Aborted at ${s()} ${a()}`,icon:i.fr4};else if("cancelled"===this.trace.script_execution)l={description:`Cancelled at ${s()} ${a()}`,icon:i.fr4};else{let e,t,r=!1;switch(this.trace.script_execution){case"failed_conditions":e="a condition failed";break;case"failed_single":e="only a single execution is allowed";break;case"failed_max_runs":e="maximum number of parallel runs reached";break;case"error":e="an error was encountered",r=!0,t=n.dy`<br /><br />${this.trace.error}`;break;default:e=`of unknown reason "${this.trace.script_execution}"`,r=!0}l={description:n.dy`Stopped because ${e} at ${s()}
        ${a()}${t||""}`,icon:i.fr4,className:r?"error":void 0}}return l&&e.push(n.dy`
        <ha-timeline
          lastItem
          .icon=${l.icon}
          class=${(0,We.o)(l.className)}
        >
          ${l.description}
        </ha-timeline>
      `),n.dy`${e}`}},{kind:"method",key:"updated",value:function(e){if(ut(pt(r.prototype),"updated",this).call(this,e),this.allowPick&&e.has("trace")&&this.trace&&this.selectedPath&&!(this.selectedPath in this.trace.trace)){const e=this.shadowRoot.querySelector("ha-timeline[data-path]");e&&((0,d.B)(this,"value-changed",{value:e.dataset.path}),this.selectedPath=e.dataset.path)}(e.has("trace")||e.has("selectedPath"))&&this.shadowRoot.querySelectorAll("ha-timeline[data-path]").forEach((e=>{if(e.toggleAttribute("selected",this.selectedPath===e.dataset.path),!this.allowPick||0===e.tabIndex)return;e.tabIndex=0;const t=()=>{this.selectedPath=e.dataset.path,(0,d.B)(this,"value-changed",{value:e.dataset.path})};e.addEventListener("click",t),e.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||t()})),e.addEventListener("mouseover",(()=>{e.raised=!0})),e.addEventListener("mouseout",(()=>{e.raised=!1}))}))}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`
        ha-timeline[lastItem].condition {
          --timeline-ball-color: var(--error-color);
        }
        ha-timeline[data-path] {
          cursor: pointer;
        }
        ha-timeline[selected] {
          --timeline-ball-color: var(--primary-color);
        }
        ha-timeline:focus {
          outline: none;
          --timeline-ball-color: var(--accent-color);
        }
        .error {
          --timeline-ball-color: var(--error-color);
          color: var(--error-color);
        }
      `]}}]}}),n.oi);function bt(){bt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Et(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _t(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_t(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=xt(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Pt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Pt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function gt(e){var t,r=xt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function wt(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Et(e){return e.decorators&&e.decorators.length}function $t(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Pt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function xt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=bt();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if($t(o.descriptor)||$t(n.descriptor)){if(Et(o)||Et(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Et(o)){if(Et(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}wt(o,n)}else t.push(o)}return t}(s.d.map(gt)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-automation-trace-timeline")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"trace",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"logbookEntries",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"selected",value:void 0},{kind:"method",key:"render",value:function(){return n.dy`
      <hat-trace-timeline
        .hass=${this.hass}
        .trace=${this.trace}
        .logbookEntries=${this.logbookEntries}
        .selectedPath=${this.selected.path}
        allowPick
      >
      </hat-trace-timeline>
      <hat-logbook-note></hat-logbook-note>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`
        :host {
          display: block;
          padding: 16px;
        }
      `]}}]}}),n.oi);function Dt(){Dt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Tt(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return jt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?jt(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=It(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Ot(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Ot(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Ct(e){var t,r=It(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function At(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Tt(e){return e.decorators&&e.decorators.length}function St(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Ot(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function It(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function zt(e,t,r){return(zt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ft(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Ft(e){return(Ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let Nt=function(e,t,r,i){var n=Dt();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(St(o.descriptor)||St(n.descriptor)){if(Tt(o)||Tt(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Tt(o)){if(Tt(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}At(o,n)}else t.push(o)}return t}(s.d.map(Ct)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-automation-trace")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"automationId",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"automations",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_traces",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_runId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_selected",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_trace",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_view",value:()=>"details"},{kind:"method",key:"render",value:function(){var e;const t=this._entityId?this.hass.states[this._entityId]:void 0,r=this.shadowRoot.querySelector("hat-script-graph"),o=null==r?void 0:r.trackedNodes,l=null==r?void 0:r.renderedNodes,d=(null==t?void 0:t.attributes.friendly_name)||this._entityId;const h=n.dy`
      <mwc-icon-button label="Refresh" @click=${()=>this._loadTraces()}>
        <ha-svg-icon .path=${i.jcD}></ha-svg-icon>
      </mwc-icon-button>
      <mwc-icon-button
        .disabled=${!this._trace}
        label="Download Trace"
        @click=${this._downloadTrace}
      >
        <ha-svg-icon .path=${i.OGU}></ha-svg-icon>
      </mwc-icon-button>
    `;return n.dy`
      ${""}
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .tabs=${te.configSections.automation}
      >
        ${this.narrow?n.dy`<span slot="header"> ${d} </span>
              <div slot="toolbar-icon">${h}</div>`:""}
        <div class="toolbar">
          ${this.narrow?"":n.dy`<div>
                ${d}
                <a
                  class="linkButton"
                  href="/config/automation/edit/${this.automationId}"
                >
                  <mwc-icon-button label="Edit Automation" tabindex="-1">
                    <ha-svg-icon .path=${i.r9}></ha-svg-icon>
                  </mwc-icon-button>
                </a>
              </div>`}
          ${this._traces&&this._traces.length>0?n.dy`
                <div>
                  <mwc-icon-button
                    .disabled=${this._traces[this._traces.length-1].run_id===this._runId}
                    label="Older trace"
                    @click=${this._pickOlderTrace}
                  >
                    <ha-svg-icon .path=${i.JXK}></ha-svg-icon>
                  </mwc-icon-button>
                  <select .value=${this._runId} @change=${this._pickTrace}>
                    ${(0,a.r)(this._traces,(e=>e.run_id),(e=>n.dy`<option value=${e.run_id}>
                          ${(0,c.E)(new Date(e.timestamp.start),this.hass.locale)}
                        </option>`))}
                  </select>
                  <mwc-icon-button
                    .disabled=${this._traces[0].run_id===this._runId}
                    label="Newer trace"
                    @click=${this._pickNewerTrace}
                  >
                    <ha-svg-icon .path=${i.RWP}></ha-svg-icon>
                  </mwc-icon-button>
                </div>
              `:""}
          ${this.narrow?"":n.dy`<div>${h}</div>`}
        </div>

        ${void 0===this._traces?n.dy`<div class="container">Loading…</div>`:0===this._traces.length?n.dy`<div class="container">No traces found</div>`:void 0===this._trace?"":n.dy`
              <div class="main">
                <div class="graph">
                  <hat-script-graph
                    .trace=${this._trace}
                    .selected=${null===(e=this._selected)||void 0===e?void 0:e.path}
                    @graph-node-selected=${this._pickNode}
                  ></hat-script-graph>
                </div>

                <div class="info">
                  <div class="tabs top">
                    ${[["details","Step Details"],["timeline","Trace Timeline"],["logbook","Related logbook entries"],["config","Automation Config"]].map((([e,t])=>n.dy`
                        <button
                          tabindex="0"
                          .view=${e}
                          class=${(0,s.$)({active:this._view===e})}
                          @click=${this._showTab}
                        >
                          ${t}
                        </button>
                      `))}
                    ${this._trace.blueprint_inputs?n.dy`
                          <button
                            tabindex="0"
                            .view=${"blueprint"}
                            class=${(0,s.$)({active:"blueprint"===this._view})}
                            @click=${this._showTab}
                          >
                            Blueprint Config
                          </div>
                        `:""}
                  </div>
                  ${void 0===this._selected||void 0===this._logbookEntries||void 0===o?"":"details"===this._view?n.dy`
                        <ha-automation-trace-path-details
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                          .trace=${this._trace}
                          .selected=${this._selected}
                          .logbookEntries=${this._logbookEntries}
                          .trackedNodes=${o}
                          .renderedNodes=${l}
                        ></ha-automation-trace-path-details>
                      `:"config"===this._view?n.dy`
                        <ha-automation-trace-config
                          .hass=${this.hass}
                          .trace=${this._trace}
                        ></ha-automation-trace-config>
                      `:"logbook"===this._view?n.dy`
                        <ha-automation-trace-logbook
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                          .logbookEntries=${this._logbookEntries}
                        ></ha-automation-trace-logbook>
                      `:"blueprint"===this._view?n.dy`
                        <ha-automation-trace-blueprint-config
                          .hass=${this.hass}
                          .trace=${this._trace}
                        ></ha-automation-trace-blueprint-config>
                      `:n.dy`
                        <ha-automation-trace-timeline
                          .hass=${this.hass}
                          .trace=${this._trace}
                          .logbookEntries=${this._logbookEntries}
                          .selected=${this._selected}
                          @value-changed=${this._timelinePathPicked}
                        ></ha-automation-trace-timeline>
                      `}
                </div>
              </div>
            `}
      </hass-tabs-subpage>
    `}},{kind:"method",key:"firstUpdated",value:function(e){if(zt(Ft(r.prototype),"firstUpdated",this).call(this,e),!this.automationId)return;const t=new URLSearchParams(location.search);this._loadTraces(t.get("run_id")||void 0)}},{kind:"method",key:"updated",value:function(e){if(zt(Ft(r.prototype),"updated",this).call(this,e),e.get("automationId")&&(this._traces=void 0,this._entityId=void 0,this._runId=void 0,this._trace=void 0,this._logbookEntries=void 0,this.automationId&&this._loadTraces()),e.has("_runId")&&this._runId&&(this._trace=void 0,this._logbookEntries=void 0,this.shadowRoot.querySelector("select").value=this._runId,this._loadTrace()),e.has("automations")&&this.automationId&&!this._entityId){const e=this.automations.find((e=>e.attributes.id===this.automationId));this._entityId=null==e?void 0:e.entity_id}}},{kind:"method",key:"_pickOlderTrace",value:function(){const e=this._traces.findIndex((e=>e.run_id===this._runId));this._runId=this._traces[e+1].run_id,this._selected=void 0}},{kind:"method",key:"_pickNewerTrace",value:function(){const e=this._traces.findIndex((e=>e.run_id===this._runId));this._runId=this._traces[e-1].run_id,this._selected=void 0}},{kind:"method",key:"_pickTrace",value:function(e){this._runId=e.target.value,this._selected=void 0}},{kind:"method",key:"_pickNode",value:function(e){this._selected=e.detail}},{kind:"method",key:"_loadTraces",value:async function(e){if(this._traces=await(0,G.lj)(this.hass,"automation",this.automationId),this._traces.reverse(),e&&(this._runId=e),this._runId&&!this._traces.some((e=>e.run_id===this._runId))){if(this._runId=void 0,this._selected=void 0,e){const e=new URLSearchParams(location.search);e.delete("run_id"),history.replaceState(null,"",`${location.pathname}?${e.toString()}`)}await(0,Q.Ys)(this,{text:"Chosen trace is no longer available"})}!this._runId&&this._traces.length>0&&(this._runId=this._traces[0].run_id)}},{kind:"method",key:"_loadTrace",value:async function(){const e=await(0,G.mA)(this.hass,"automation",this.automationId,this._runId);this._logbookEntries=(0,l.p)(this.hass,"logbook")?await(0,K.sS)(this.hass,e.timestamp.start,e.context.id):[],this._trace=e}},{kind:"method",key:"_downloadTrace",value:function(){const e=document.createElement("a");e.download=`trace ${this._entityId} ${this._trace.timestamp.start}.json`,e.href=`data:application/json;charset=utf-8,${encodeURI(JSON.stringify({trace:this._trace,logbookEntries:this._logbookEntries},void 0,2))}`,e.click()}},{kind:"method",key:"_importTrace",value:function(){const e=prompt("Enter downloaded trace");e&&(localStorage.devTrace=e,this._loadLocalTrace(e))}},{kind:"method",key:"_loadLocalStorageTrace",value:function(){localStorage.devTrace&&this._loadLocalTrace(localStorage.devTrace)}},{kind:"method",key:"_loadLocalTrace",value:function(e){const t=JSON.parse(e);this._trace=t.trace,this._logbookEntries=t.logbookEntries}},{kind:"method",key:"_showTab",value:function(e){this._view=e.target.view}},{kind:"method",key:"_timelinePathPicked",value:function(e){const t=e.detail.value,r=this.shadowRoot.querySelector("hat-script-graph").trackedNodes;r[t]&&(this._selected=r[t])}},{kind:"get",static:!0,key:"styles",value:function(){return[ee.Qx,ze,n.iv`
        .toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 20px;
          height: var(--header-height);
          padding: 0 16px;
          background-color: var(--primary-background-color);
          font-weight: 400;
          color: var(--app-header-text-color, white);
          border-bottom: var(--app-header-border-bottom, none);
          box-sizing: border-box;
        }

        .toolbar > * {
          display: flex;
          align-items: center;
        }

        :host([narrow]) .toolbar > * {
          display: contents;
        }

        .main {
          height: calc(100% - 56px);
          display: flex;
          background-color: var(--card-background-color);
        }

        :host([narrow]) .main {
          height: auto;
          flex-direction: column;
        }

        .container {
          padding: 16px;
        }

        .graph {
          border-right: 1px solid var(--divider-color);
          overflow-x: auto;
          max-width: 50%;
        }
        :host([narrow]) .graph {
          max-width: 100%;
        }

        .info {
          flex: 1;
          background-color: var(--card-background-color);
        }

        .linkButton {
          color: var(--primary-text-color);
        }
      `]}}]}}),n.oi)}}]);
//# sourceMappingURL=chunk.00348cd4c2b7c960b780.js.map