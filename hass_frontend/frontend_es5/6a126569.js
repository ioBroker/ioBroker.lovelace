"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[99443],{22098:function(e,r,t){var n,o,i,a,s=t(37500),c=t(33310);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function f(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function d(e,r){return d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},d(e,r)}function p(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=y(e);if(r){var o=y(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)}}function h(e,r){if(r&&("object"===l(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(){v=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(n){r.forEach((function(r){var o=r.placement;if(r.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:t;this.defineClassElement(i,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var n=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!g(e))return t.push(e);var r=this.decorateElement(e,o);t.push(r.element),t.push.apply(t,r.extras),n.push.apply(n,r.finishers)}),this),!r)return{elements:t,finishers:n};var i=this.decorateConstructor(t,r);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,r,t){var n=r[e.placement];if(!t&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,r){for(var t=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[i])(s)||s);e=c.element,this.addElementPlacement(e,r),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],r);t.push.apply(t,l)}}return{element:e,finishers:n,extras:t}},decorateConstructor:function(e,r){for(var t=[],n=r.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,r[n])(o)||o);if(void 0!==i.finisher&&t.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return P(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=E(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:r,key:t,placement:n,descriptor:Object.assign({},o)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:x(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=x(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var n=(0,r[t])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function b(e){var r,t=E(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function w(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function g(e){return e.decorators&&e.decorators.length}function k(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function E(e){var r=function(e,r){if("object"!==l(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===l(r)?r:String(r)}function P(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}!function(e,r,t,n){var o=v();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var a=r((function(e){o.initializeInstanceElements(e,s.elements)}),t),s=o.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=r.find(t)))if(k(i.descriptor)||k(o.descriptor)){if(g(i)||g(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(g(i)){if(g(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}w(i,o)}else r.push(i)}return r}(a.d.map(b)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,c.Mo)("ha-card")],(function(e,r){var t=function(r){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}(n,r);var t=p(n);function n(){var r;f(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),e(m(r)),r}return n}(r);return{F:t,d:[{kind:"field",decorators:[(0,c.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,reflect:!0})],key:"raised",value:function(){return!1}},{kind:"get",static:!0,key:"styles",value:function(){return(0,s.iv)(n||(n=u(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--card-background-color, white)\n        );\n        box-shadow: var(--ha-card-box-shadow, none);\n        box-sizing: border-box;\n        border-radius: var(--ha-card-border-radius, 12px);\n        border-width: var(--ha-card-border-width, 1px);\n        border-style: solid;\n        border-color: var(\n          --ha-card-border-color,\n          var(--divider-color, #e0e0e0)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      :host([raised]) {\n        border: none;\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n          0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n          0px 1px 3px 0px rgba(0, 0, 0, 0.12)\n        );\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 48px;\n        padding: 12px 16px 16px;\n        display: block;\n        margin-block-start: 0px;\n        margin-block-end: 0px;\n        font-weight: normal;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid var(--divider-color, #e8e8e8);\n        padding: 5px 16px;\n      }\n    "])))}},{kind:"method",key:"render",value:function(){return(0,s.dy)(o||(o=u(["\n      ","\n      <slot></slot>\n    "])),this.header?(0,s.dy)(i||(i=u(['<h1 class="card-header">',"</h1>"])),this.header):(0,s.dy)(a||(a=u([""]))))}}]}}),s.oi)},724:function(e,r,t){t.d(r,{n8:function(){return l},BG:function(){return u},kf:function(){return f}});var n=t(85415),o=t(50921);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}(e,r)||s(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=s(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function s(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=function(e){return e.callWS({type:"cloud/tts/info"})},u=function(e){var r=[];if(!e)return r;var t,s=new Set,c=a(e.languages);try{for(c.s();!(t=c.n()).done;){var l=i(t.value,1)[0];if(!s.has(l)){s.add(l);var u=l;if(l in o.o.translations)u=o.o.translations[l].nativeName;else{var f=i(l.split("-"),2),d=f[0],p=f[1];d in o.o.translations&&(u="".concat(o.o.translations[d].nativeName),d.toLowerCase()!==p.toLowerCase()&&(u+=" (".concat(p,")")))}r.push([l,u])}}}catch(h){c.e(h)}finally{c.f()}return r.sort((function(e,r){return(0,n.f)(e[1],r[1])}))},f=function(e,r,t){var o=[];if(!r)return o;var s,c=a(r.languages);try{for(c.s();!(s=c.n()).done;){var l=i(s.value,2),u=l[0],f=l[1];u===e&&o.push([f,"male"===f||"female"===f?t("ui.panel.config.cloud.account.tts.".concat(f)):f])}}catch(d){c.e(d)}finally{c.f()}return o.sort((function(e,r){return(0,n.f)(e[1],r[1])}))}},26765:function(e,r,t){t.d(r,{Ys:function(){return a},g7:function(){return s},D9:function(){return c}});var n=t(47181),o=function(){return Promise.all([t.e(85084),t.e(82361),t.e(34821),t.e(72432)]).then(t.bind(t,1281))},i=function(e,r,t){return new Promise((function(i){var a=r.cancel,s=r.confirm;(0,n.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:o,dialogParams:Object.assign({},r,t,{cancel:function(){i(!(null==t||!t.prompt)&&null),a&&a()},confirm:function(e){i(null==t||!t.prompt||e),s&&s(e)}})})}))},a=function(e,r){return i(e,r)},s=function(e,r){return i(e,r,{confirmation:!0})},c=function(e,r){return i(e,r,{prompt:!0})}}}]);