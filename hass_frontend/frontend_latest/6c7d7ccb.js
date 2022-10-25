"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62270],{69470:(e,t,i)=>{i.d(t,{j:()=>o,fs:()=>n,$y:()=>a});const r=(e,t,i)=>new Promise(((r,o)=>{const n=document.createElement(e);let a="src",s="body";switch(n.onload=()=>r(t),n.onerror=()=>o(t),e){case"script":n.async=!0,i&&(n.type=i);break;case"link":n.type="text/css",n.rel="stylesheet",a="href",s="head"}n[a]=t,document[s].appendChild(n)})),o=e=>r("link",e),n=e=>r("script",e),a=e=>r("script",e,"module")},69375:(e,t,i)=>{function r(e,t){const i=t,r=Math.random(),o=Date.now(),n=i.scrollTop,a=0-n;e._currentAnimationId=r,function t(){const s=Date.now()-o;var l;s>200?i.scrollTop=0:e._currentAnimationId===r&&(i.scrollTop=(l=s,-a*(l/=200)*(l-2)+n),requestAnimationFrame(t.bind(e)))}.call(e)}i.d(t,{Z:()=>r})},86977:(e,t,i)=>{i.d(t,{Q:()=>r});const r=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},69934:(e,t,i)=>{i.d(t,{q:()=>r});const r=e=>{const t=window.location.pathname;return e?t+"?"+e:t}},15493:(e,t,i)=>{i.d(t,{Q2:()=>r,io:()=>o,ou:()=>n,j4:()=>a,pc:()=>s});const r=()=>{const e={},t=new URLSearchParams(location.search);for(const[i,r]of t.entries())e[i]=r;return e},o=e=>new URLSearchParams(window.location.search).get(e),n=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,i])=>{t.append(e,i)})),t.toString()},a=e=>{const t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,i])=>{t.set(e,i)})),t.toString()},s=e=>{const t=new URLSearchParams(window.location.search);return t.delete(e),t.toString()}},81545:(e,t,i)=>{i(6294);var r=i(37500),o=i(33310),n=i(74265);function a(){a=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!c(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=u(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:h(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=h(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function s(e){var t,i=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function f(e,t,i){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},f(e,t,i||e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}!function(e,t,i,r){var o=a();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var h=t((function(e){o.initializeInstanceElements(e,u.elements)}),i),u=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(d(n.descriptor)||d(o.descriptor)){if(c(n)||c(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(c(n)){if(c(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}l(n,o)}else t.push(n)}return t}(h.d.map(s)),e);o.initializeClassElements(h.F,u.elements),o.runClassFinishers(h.F,u.finishers)}([(0,o.Mo)("ha-button-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:n.gA,value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"corner",value:()=>"TOP_START"},{kind:"field",decorators:[(0,o.Cb)()],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"x",value:()=>null},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"y",value:()=>null},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return r.dy`
      <div @click=${this._handleClick}>
        <slot name="trigger" @slotchange=${this._setTriggerAria}></slot>
      </div>
      <mwc-menu
        .corner=${this.corner}
        .menuCorner=${this.menuCorner}
        .fixed=${this.fixed}
        .multi=${this.multi}
        .activatable=${this.activatable}
        .y=${this.y}
        .x=${this.x}
      >
        <slot></slot>
      </mwc-menu>
    `}},{kind:"method",key:"firstUpdated",value:function(e){f(m(i.prototype),"firstUpdated",this).call(this,e),"rtl"===document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
    `}}]}}),r.oi)},63830:(e,t,i)=>{var r=i(37500),o=i(33310);i(10983);function n(){n=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!l(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=h(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function a(e){var t,i=h(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function p(e,t,i){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},p(e,t,i||e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}const m="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";!function(e,t,i,r){var o=n();if(r)for(var d=0;d<r.length;d++)o=r[d](o);var h=t((function(e){o.initializeInstanceElements(e,u.elements)}),i),u=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(c(n.descriptor)||c(o.descriptor)){if(l(n)||l(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(l(n)){if(l(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}s(n,o)}else t.push(n)}return t}(h.d.map(a)),e);o.initializeClassElements(h.F,u.elements),o.runClassFinishers(h.F,u.finishers)}([(0,o.Mo)("ha-icon-button-arrow-next")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_icon",value:()=>m},{kind:"method",key:"connectedCallback",value:function(){p(f(i.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?m:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}),100)}},{kind:"method",key:"render",value:function(){var e;return r.dy`
      <ha-icon-button
        .disabled=${this.disabled}
        .label=${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.next"))||"Next"}
        .path=${this._icon}
      ></ha-icon-button>
    `}}]}}),r.oi)},15327:(e,t,i)=>{i.d(t,{eL:()=>r,SN:()=>o,id:()=>n,fg:()=>a,j2:()=>s,JR:()=>l,Y:()=>c,iM:()=>d,Q2:()=>h,Oh:()=>u,vj:()=>p,Gc:()=>f});const r=e=>e.sendMessagePromise({type:"lovelace/resources"}),o=(e,t)=>e.callWS({type:"lovelace/resources/create",...t}),n=(e,t,i)=>e.callWS({type:"lovelace/resources/update",resource_id:t,...i}),a=(e,t)=>e.callWS({type:"lovelace/resources/delete",resource_id:t}),s=e=>e.callWS({type:"lovelace/dashboards/list"}),l=(e,t)=>e.callWS({type:"lovelace/dashboards/create",...t}),c=(e,t,i)=>e.callWS({type:"lovelace/dashboards/update",dashboard_id:t,...i}),d=(e,t)=>e.callWS({type:"lovelace/dashboards/delete",dashboard_id:t}),h=(e,t,i)=>e.sendMessagePromise({type:"lovelace/config",url_path:t,force:i}),u=(e,t,i)=>e.callWS({type:"lovelace/config/save",url_path:t,config:i}),p=(e,t)=>e.callWS({type:"lovelace/config/delete",url_path:t}),f=(e,t,i)=>e.subscribeEvents((e=>{e.data.url_path===t&&i()}),"lovelace_updated")},51444:(e,t,i)=>{i.d(t,{_:()=>n});var r=i(47181);const o=()=>Promise.all([i.e(29563),i.e(98985),i.e(85084),i.e(72420)]).then(i.bind(i,72420)),n=e=>{(0,r.B)(e,"show-dialog",{dialogTag:"ha-voice-command-dialog",dialogImport:o,dialogParams:{}})}},68500:(e,t,i)=>{i.d(t,{k:()=>a});var r=i(69470);const o={},n={},a=(e,t)=>e.forEach((e=>{const i=new URL(e.url,t).toString();switch(e.type){case"css":if(i in o)break;o[i]=(0,r.j)(i);break;case"js":if(i in n)break;n[i]=(0,r.fs)(i);break;case"module":(0,r.$y)(i);break;default:console.warn(`Unknown resource type specified: ${e.type}`)}}))},21638:(e,t,i)=>{i.d(t,{n:()=>a});var r=i(47181);let o=!1;const n="show-edit-lovelace",a=(e,t)=>{o||(o=!0,(e=>{(0,r.B)(e,"register-dialog",{dialogShowEvent:n,dialogTag:"hui-dialog-edit-lovelace",dialogImport:()=>Promise.all([i.e(29563),i.e(98985),i.e(85084),i.e(74764)]).then(i.bind(i,74764))})})(e)),(0,r.B)(e,n,t)}},47500:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(47181);const o="show-save-config";let n=!1;const a=(e,t)=>{n||(n=!0,(0,r.B)(e,"register-dialog",{dialogShowEvent:o,dialogTag:"hui-dialog-save-config",dialogImport:()=>Promise.all([i.e(85084),i.e(77426),i.e(53822),i.e(78082)]).then(i.bind(i,78082))})),(0,r.B)(e,o,t)}},84217:(e,t,i)=>{i.d(t,{k:()=>a});var r=i(47181);let o=!1;const n="show-edit-view",a=(e,t)=>{o||(o=!0,(e=>{(0,r.B)(e,"register-dialog",{dialogShowEvent:n,dialogTag:"hui-dialog-edit-view",dialogImport:()=>Promise.all([i.e(29563),i.e(98985),i.e(88278),i.e(41985),i.e(85084),i.e(45507),i.e(78874),i.e(17129),i.e(12545),i.e(26272),i.e(13701),i.e(77576),i.e(74535),i.e(83708),i.e(58457)]).then(i.bind(i,71636))})})(e)),(0,r.B)(e,n,t)}},62270:(e,t,i)=>{i.a(e,(async e=>{i.r(t);i(51187);var r=i(60461),o=i.n(r),n=i(37500),a=i(33310),s=i(69934),l=i(15493),c=i(5986),d=i(15327),h=(i(48811),i(15291),i(81796)),u=i(68500),p=i(47500),f=i(53854),m=i(12042),v=e([f]);function y(){y=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!b(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=E(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=_(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function g(e){var t,i=E(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function k(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function E(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function $(e,t,i){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},$(e,t,i||e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}f=(v.then?await v:v)[0],window.loadCardHelpers=()=>Promise.all([i.e(97282),i.e(99810),i.e(49686)]).then(i.bind(i,49686));const P="original-states";let x=!1,S=!1,V=function(e,t,i,r){var o=y();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(k(n.descriptor)||k(o.descriptor)){if(b(n)||b(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(b(n)){if(b(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}w(n,o)}else t.push(n)}return t}(a.d.map(g)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}(null,(function(e,t){class r extends t{constructor(){super(),e(this),this._closeEditor=this._closeEditor.bind(this)}}return{F:r,d:[{kind:"field",decorators:[(0,a.Cb)()],key:"panel",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"_panelState",value:()=>"loading"},{kind:"field",decorators:[(0,a.SB)()],key:"_errorMsg",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"lovelace",value:void 0},{kind:"field",key:"_ignoreNextUpdateEvent",value:()=>!1},{kind:"field",key:"_fetchConfigOnConnect",value:()=>!1},{kind:"field",key:"_unsubUpdates",value:void 0},{kind:"method",key:"connectedCallback",value:function(){$(A(r.prototype),"connectedCallback",this).call(this),this.lovelace&&this.hass&&this.lovelace.locale!==this.hass.locale?this._setLovelaceConfig(this.lovelace.config,this.lovelace.rawConfig,this.lovelace.mode):this.lovelace&&"generated"===this.lovelace.mode?(this._panelState="loading",this._regenerateConfig()):this._fetchConfigOnConnect&&this._fetchConfig(!1)}},{kind:"method",key:"disconnectedCallback",value:function(){$(A(r.prototype),"disconnectedCallback",this).call(this),null!==this.urlPath&&this._unsubUpdates&&this._unsubUpdates()}},{kind:"method",key:"render",value:function(){const e=this._panelState;return"loaded"===e?n.dy`
        <hui-root
          .hass=${this.hass}
          .lovelace=${this.lovelace}
          .route=${this.route}
          .narrow=${this.narrow}
          @config-refresh=${this._forceFetchConfig}
        ></hui-root>
      `:"error"===e?n.dy`
        <hass-error-screen
          .hass=${this.hass}
          title=${(0,c.Lh)(this.hass.localize,"lovelace")}
          .error=${this._errorMsg}
        >
          <mwc-button raised @click=${this._forceFetchConfig}>
            ${this.hass.localize("ui.panel.lovelace.reload_lovelace")}
          </mwc-button>
        </hass-error-screen>
      `:"yaml-editor"===e?n.dy`
        <hui-editor
          .hass=${this.hass}
          .lovelace=${this.lovelace}
          .closeEditor=${this._closeEditor}
        ></hui-editor>
      `:n.dy`
      <hass-loading-screen
        rootnav
        .hass=${this.hass}
        .narrow=${this.narrow}
      ></hass-loading-screen>
    `}},{kind:"method",key:"firstUpdated",value:function(e){$(A(r.prototype),"firstUpdated",this).call(this,e),this._fetchConfig(!1),this._unsubUpdates||this._subscribeUpdates(),window.addEventListener("connection-status",(e=>{"connected"===e.detail&&this._fetchConfig(!1)}))}},{kind:"method",key:"_regenerateConfig",value:async function(){const e=await(0,m.to)({hass:this.hass,narrow:this.narrow},P);this._setLovelaceConfig(e,void 0,"generated"),this._panelState="loaded"}},{kind:"method",key:"_subscribeUpdates",value:async function(){this._unsubUpdates=await(0,d.Gc)(this.hass.connection,this.urlPath,(()=>this._lovelaceChanged()))}},{kind:"method",key:"_closeEditor",value:function(){this._panelState="loaded"}},{kind:"method",key:"_lovelaceChanged",value:function(){this._ignoreNextUpdateEvent?this._ignoreNextUpdateEvent=!1:this.isConnected?(0,h.C)(this,{message:this.hass.localize("ui.panel.lovelace.changed_toast.message"),action:{action:()=>this._fetchConfig(!1),text:this.hass.localize("ui.common.refresh")},duration:0,dismissable:!1}):this._fetchConfigOnConnect=!0}},{kind:"get",key:"urlPath",value:function(){return"lovelace"===this.panel.url_path?null:this.panel.url_path}},{kind:"method",key:"_forceFetchConfig",value:function(){this._fetchConfig(!0)}},{kind:"method",key:"_fetchConfig",value:async function(e){let t,i,r,o=this.panel.config.mode;const n=window;n.llConfProm&&(r=n.llConfProm,n.llConfProm=void 0),S||(S=!0,(n.llConfProm||(0,d.eL)(this.hass.connection)).then((e=>(0,u.k)(e,this.hass.auth.data.hassUrl)))),null===this.urlPath&&r||(this.lovelace&&"yaml"===this.lovelace.mode&&(this._ignoreNextUpdateEvent=!0),r=(0,d.Q2)(this.hass.connection,this.urlPath,e));try{i=await r,t=i.strategy?await(0,m.to)({config:i,hass:this.hass,narrow:this.narrow}):i}catch(e){if("config_not_found"!==e.code)return console.log(e),this._panelState="error",void(this._errorMsg=e.message);t=await(0,m.to)({hass:this.hass,narrow:this.narrow},P),o="generated"}finally{this.lovelace&&"yaml"===this.lovelace.mode&&setTimeout((()=>{this._ignoreNextUpdateEvent=!1}),2e3)}this._panelState="yaml-editor"===this._panelState?this._panelState:"loaded",this._setLovelaceConfig(t,i,o)}},{kind:"method",key:"_checkLovelaceConfig",value:function(e){let t=Object.isFrozen(e)?void 0:e;return e.views.forEach(((i,r)=>{i.badges&&!i.badges.every(Boolean)&&(t=t||{...e,views:[...e.views]},t.views[r]={...i},t.views[r].badges=i.badges.filter(Boolean))})),t?o()(t):e}},{kind:"method",key:"_setLovelaceConfig",value:function(e,t,r){e=this._checkLovelaceConfig(e);const o=this.urlPath;this.lovelace={config:e,rawConfig:t,mode:r,urlPath:this.urlPath,editMode:!!this.lovelace&&this.lovelace.editMode,locale:this.hass.locale,enableFullEditMode:()=>{x||(x=!0,Promise.all([i.e(77426),i.e(74506),i.e(53822),i.e(95912)]).then(i.bind(i,95912))),this._panelState="yaml-editor"},setEditMode:e=>{this.lovelace.rawConfig&&this.lovelace.rawConfig!==this.lovelace.config?this.lovelace.enableFullEditMode():e&&"generated"===this.lovelace.mode?(0,p.Z)(this,{lovelace:this.lovelace,mode:this.panel.config.mode,narrow:this.narrow}):this._updateLovelace({editMode:e})},saveConfig:async e=>{const{config:t,rawConfig:i,mode:r}=this.lovelace;let n;n=(e=this._checkLovelaceConfig(e)).strategy?await(0,m.to)({config:e,hass:this.hass,narrow:this.narrow}):e;try{this._updateLovelace({config:n,rawConfig:e,mode:"storage"}),this._ignoreNextUpdateEvent=!0,await(0,d.Oh)(this.hass,o,e)}catch(e){throw console.error(e),this._updateLovelace({config:t,rawConfig:i,mode:r}),e}},deleteConfig:async()=>{const{config:e,rawConfig:t,mode:i}=this.lovelace;try{const e=await(0,m.to)({hass:this.hass,narrow:this.narrow},P);this._updateLovelace({config:e,rawConfig:void 0,mode:"generated",editMode:!1}),this._ignoreNextUpdateEvent=!0,await(0,d.vj)(this.hass,o)}catch(r){throw console.error(r),this._updateLovelace({config:e,rawConfig:t,mode:i}),r}}}}},{kind:"method",key:"_updateLovelace",value:function(e){this.lovelace={...this.lovelace,...e},"editMode"in e&&window.history.replaceState(null,"",(0,s.q)(e.editMode?(0,l.j4)({edit:"1"}):(0,l.pc)("edit")))}}]}}),n.oi);customElements.define("ha-panel-lovelace",V)}))},53854:(e,t,i)=>{i.a(e,(async e=>{i(51187),i(44577),i(53268),i(11767),i(12730),i(91441),i(17931);var t=i(37500),r=i(33310),o=i(8636),n=i(51346),a=i(14516),s=i(7323),l=i(47181),c=i(69375),d=i(86977),h=i(83849),u=i(15493),p=i(87744),f=i(38346),m=i(96151),v=(i(81545),i(29925),i(10983),i(63830),i(2315),i(48932),i(52039),i(46167),i(26765)),y=i(52415),g=i(51444),w=(i(27849),i(11654)),b=i(27322),k=i(54324),_=i(21638),E=i(84217),C=i(10009),$=i(6936),A=i(79888),P=i(32957),x=e([A,C]);function S(){S=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!D(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?L(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=O(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:z(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=z(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function V(e){var t,i=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function T(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function M(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function z(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function O(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function j(e,t,i){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},j(e,t,i||e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}[A,C]=x.then?await x:x;const R="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",B="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",I="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",F="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",U="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";let N=function(e,t,i,r){var o=S();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(M(n.descriptor)||M(o.descriptor)){if(D(n)||D(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(D(n)){if(D(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}T(n,o)}else t.push(n)}return t}(a.d.map(V)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}(null,(function(e,C){class A extends C{constructor(){super(),e(this),this._debouncedConfigChanged=(0,f.D)((()=>this._selectView(this._curView,!0)),100,!1)}}return{F:A,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_curView",value:void 0},{kind:"field",decorators:[(0,r.IO)("ha-app-layout",!0)],key:"_appLayout",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"_persistentNotifications",value:void 0},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"field",key:"_viewCache",value:void 0},{kind:"field",key:"_debouncedConfigChanged",value:void 0},{kind:"field",key:"_conversation",value(){return(0,a.Z)((e=>(0,s.p)(this.hass,"conversation")))}},{kind:"method",key:"connectedCallback",value:function(){j(H(A.prototype),"connectedCallback",this).call(this),this._unsubNotifications=(0,$.r)(this.hass.connection,(e=>{this._persistentNotifications=e?e.length:0}))}},{kind:"method",key:"disconnectedCallback",value:function(){j(H(A.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&this._unsubNotifications()}},{kind:"method",key:"render",value:function(){var e,i,r,a,s,l;const c=null!==(e=null===(i=this.lovelace)||void 0===i?void 0:i.config.views)&&void 0!==e?e:[],d="number"==typeof this._curView?c[this._curView]:void 0;return t.dy`
      <!-- Inserted for IoB -->
      <notification-drawer .hass="${this.hass}"></notification-drawer>

      <ha-app-layout
        class=${(0,o.$)({"edit-mode":this._editMode})}
        id="layout"
      >
        <app-header slot="header" effects="waterfall" fixed condenses>
          ${this._editMode?t.dy`
                <app-toolbar class="edit-mode">
                  <div main-title>
                    ${this.config.title||this.hass.localize("ui.panel.lovelace.editor.header")}
                    <ha-icon-button
                      .label=${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.edit_title")}
                      .path=${F}
                      class="edit-icon"
                      @click=${this._editLovelace}
                    ></ha-icon-button>
                  </div>
                  <mwc-button
                    outlined
                    class="exit-edit-mode"
                    .label=${this.hass.localize("ui.panel.lovelace.menu.exit_edit_mode")}
                    @click=${this._editModeDisable}
                  ></mwc-button>
                  <a
                    href=${(0,b.R)(this.hass,"/lovelace/")}
                    rel="noreferrer"
                    class="menu-link"
                    target="_blank"
                  >
                    <ha-icon-button
                      .label=${this.hass.localize("ui.panel.lovelace.menu.help")}
                      .path=${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}
                    ></ha-icon-button>
                  </a>
                  <ha-button-menu corner="BOTTOM_START">
                    <ha-icon-button
                      slot="trigger"
                      .label=${this.hass.localize("ui.panel.lovelace.editor.menu.open")}
                      .path=${R}
                    ></ha-icon-button>
                    ${t.dy`
                          <mwc-list-item
                            graphic="icon"
                            aria-label=${this.hass.localize("ui.panel.lovelace.unused_entities.title")}
                            @request-selected=${this._handleUnusedEntities}
                          >
                            <ha-svg-icon
                              slot="graphic"
                              .path=${"M5,15.5L7.5,20H2.5L5,15.5M9,19H21V17H9V19M5,9.5L7.5,14H2.5L5,9.5M9,13H21V11H9V13M5,3.5L7.5,8H2.5L5,3.5M9,7H21V5H9V7Z"}
                            >
                            </ha-svg-icon>
                            ${this.hass.localize("ui.panel.lovelace.unused_entities.title")}
                          </mwc-list-item>
                        `}
                    <mwc-list-item
                      graphic="icon"
                      @request-selected=${this._handleRawEditor}
                    >
                      <ha-svg-icon
                        slot="graphic"
                        .path=${"M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"}
                      ></ha-svg-icon>
                      ${this.hass.localize("ui.panel.lovelace.editor.menu.raw_editor")}
                    </mwc-list-item>
                    ${t.dy`<mwc-list-item
                            graphic="icon"
                            @request-selected=${this._handleManageDashboards}
                          >
                            <ha-svg-icon
                              slot="graphic"
                              .path=${"M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"}
                            ></ha-svg-icon>
                            ${this.hass.localize("ui.panel.lovelace.editor.menu.manage_dashboards")}
                          </mwc-list-item>
                          ${null!==(r=this.hass.userData)&&void 0!==r&&r.showAdvanced?t.dy`<mwc-list-item
                                graphic="icon"
                                @request-selected=${this._handleManageResources}
                              >
                                <ha-svg-icon
                                  slot="graphic"
                                  .path=${"M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z"}
                                ></ha-svg-icon>
                                ${this.hass.localize("ui.panel.lovelace.editor.menu.manage_resources")}
                              </mwc-list-item>`:""} `}
                  </ha-button-menu>
                </app-toolbar>
              `:t.dy`
                <app-toolbar>
                  ${null!=d&&d.subview?t.dy`
                        <ha-icon-button-arrow-prev
                          @click=${this._goBack}
                        ></ha-icon-button-arrow-prev>
                      `:t.dy`
                        <!-- Disabled for IoB -->
                        <!-- ha-menu-button
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                        ></ha-menu-button -->
                      `}
                  ${null!=d&&d.subview?t.dy`<div main-title>${d.title}</div>`:c.filter((e=>!e.subview)).length>1?t.dy`
                        <ha-tabs
                          scrollable
                          .selected=${this._curView}
                          @iron-activate=${this._handleViewSelected}
                          dir=${(0,p.Zu)(this.hass)}
                        >
                          ${c.map((e=>t.dy`
                              <paper-tab
                                aria-label=${(0,n.o)(e.title)}
                                class=${(0,o.$)({"hide-tab":Boolean(e.subview||void 0!==e.visible&&(Array.isArray(e.visible)&&!e.visible.some((e=>e.user===this.hass.user.id))||!1===e.visible))})}
                              >
                                ${e.icon?t.dy`
                                      <ha-icon
                                        title=${(0,n.o)(e.title)}
                                        .icon=${e.icon}
                                      ></ha-icon>
                                    `:e.title||"Unnamed view"}
                              </paper-tab>
                            `))}
                        </ha-tabs>
                      `:t.dy`<div main-title>${this.config.title}</div>`}
                  ${this._hideToolbar?this.renderNotificationButton(!0):t.dy`
                      <!-- Enabled for IoB - if toolbar, all is normal, but we still need notification button here -->
                      ${this.renderNotificationButton(!1)}
                  ${this.narrow?"":t.dy`
                        <ha-icon-button
                          .label=${this.hass.localize("ui.panel.lovelace.menu.search")}
                          .path=${B}
                          @click=${this._showQuickBar}
                        ></ha-icon-button>
                      `}
                  ${!this.narrow&&this._conversation(this.hass.config.components)?t.dy`
                        <ha-icon-button
                          .label=${this.hass.localize("ui.panel.lovelace.menu.start_conversation")}
                          .path=${I}
                          @click=${this._showVoiceCommandDialog}
                        ></ha-icon-button>
                      `:""}
                  ${this._showButtonMenu?t.dy`
                        <ha-button-menu corner="BOTTOM_START">
                          <ha-icon-button
                            slot="trigger"
                            .label=${this.hass.localize("ui.panel.lovelace.editor.menu.open")}
                            .path=${R}
                          ></ha-icon-button>

                          ${this.narrow?t.dy`
                                <mwc-list-item
                                  .label=${this.hass.localize("ui.panel.lovelace.menu.search")}
                                  graphic="icon"
                                  @request-selected=${this._showQuickBar}
                                >
                                  <span
                                    >${this.hass.localize("ui.panel.lovelace.menu.search")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${B}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${this.narrow&&this._conversation(this.hass.config.components)?t.dy`
                                <mwc-list-item
                                  .label=${this.hass.localize("ui.panel.lovelace.menu.start_conversation")}
                                  graphic="icon"
                                  @request-selected=${this._showVoiceCommandDialog}
                                >
                                  <span
                                    >${this.hass.localize("ui.panel.lovelace.menu.start_conversation")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${I}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${this._yamlMode?t.dy`
                                <mwc-list-item
                                  aria-label=${this.hass.localize("ui.common.refresh")}
                                  graphic="icon"
                                  @request-selected=${this._handleRefresh}
                                >
                                  <span
                                    >${this.hass.localize("ui.common.refresh")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${U}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                                <mwc-list-item
                                  aria-label=${this.hass.localize("ui.panel.lovelace.unused_entities.title")}
                                  graphic="icon"
                                  @request-selected=${this._handleUnusedEntities}
                                >
                                  <span
                                    >${this.hass.localize("ui.panel.lovelace.unused_entities.title")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${"M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z"}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${"yaml"===(null===(a=this.hass.panels.lovelace)||void 0===a||null===(s=a.config)||void 0===s?void 0:s.mode)?t.dy`
                                <mwc-list-item
                                  graphic="icon"
                                  aria-label=${this.hass.localize("ui.panel.lovelace.menu.reload_resources")}
                                  @request-selected=${this._handleReloadResources}
                                >
                                  ${this.hass.localize("ui.panel.lovelace.menu.reload_resources")}
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${U}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${null!==(l=this.hass.user)&&void 0!==l&&l.is_admin&&!this.hass.config.safe_mode?t.dy`
                                <mwc-list-item
                                  graphic="icon"
                                  aria-label=${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                                  @request-selected=${this._handleEnableEditMode}
                                >
                                  ${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${F}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${this._editMode?t.dy`
                                <a
                                  href=${(0,b.R)(this.hass,"/lovelace/")}
                                  rel="noreferrer"
                                  class="menu-link"
                                  target="_blank"
                                >
                                  <mwc-list-item
                                    graphic="icon"
                                    aria-label=${this.hass.localize("ui.panel.lovelace.menu.help")}
                                  >
                                    ${this.hass.localize("ui.panel.lovelace.menu.help")}
                                    <ha-svg-icon
                                      slot="graphic"
                                      .path=${"M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"}
                                    ></ha-svg-icon>
                                  </mwc-list-item>
                                </a>
                              `:""}
                        </ha-button-menu>
                      `:""}
                `}      
                </app-toolbar>
              `}
          ${this._editMode?t.dy`
                <div sticky>
                  <paper-tabs
                    scrollable
                    .selected=${this._curView}
                    @iron-activate=${this._handleViewSelected}
                    dir=${(0,p.Zu)(this.hass)}
                  >
                    ${c.map((e=>t.dy`
                        <paper-tab
                          aria-label=${(0,n.o)(e.title)}
                          class=${(0,o.$)({"hide-tab":Boolean(!this._editMode&&void 0!==e.visible&&(Array.isArray(e.visible)&&!e.visible.some((e=>e.user===this.hass.user.id))||!1===e.visible))})}
                        >
                          ${this._editMode?t.dy`
                                <ha-icon-button-arrow-prev
                                  .hass=${this.hass}
                                  .label=${this.hass.localize("ui.panel.lovelace.editor.edit_view.move_left")}
                                  class="edit-icon view"
                                  @click=${this._moveViewLeft}
                                  ?disabled=${0===this._curView}
                                ></ha-icon-button-arrow-prev>
                              `:""}
                          ${e.icon?t.dy`
                                <ha-icon
                                  class=${(0,o.$)({"child-view-icon":Boolean(e.subview)})}
                                  title=${(0,n.o)(e.title)}
                                  .icon=${e.icon}
                                ></ha-icon>
                              `:e.title||"Unnamed view"}
                          ${this._editMode?t.dy`
                                <ha-svg-icon
                                  title=${this.hass.localize("ui.panel.lovelace.editor.edit_view.edit")}
                                  class="edit-icon view"
                                  .path=${F}
                                  @click=${this._editView}
                                ></ha-svg-icon>
                                <ha-icon-button-arrow-next
                                  .hass=${this.hass}
                                  .label=${this.hass.localize("ui.panel.lovelace.editor.edit_view.move_right")}
                                  class="edit-icon view"
                                  @click=${this._moveViewRight}
                                  ?disabled=${this._curView+1===c.length}
                                ></ha-icon-button-arrow-next>
                              `:""}
                        </paper-tab>
                      `))}
                    ${this._editMode?t.dy`
                          <ha-icon-button
                            id="add-view"
                            @click=${this._addView}
                            .label=${this.hass.localize("ui.panel.lovelace.editor.edit_view.add")}
                            .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
                          ></ha-icon-button>
                        `:""}
                  </paper-tabs>
                </div>
              `:""}
        </app-header>
        <div id="view" @ll-rebuild=${this._debouncedConfigChanged}></div>
      </ha-app-layout>
    `}},{kind:"field",key:"_isVisible",value(){return e=>Boolean(this._editMode||void 0===e.visible||!0===e.visible||Array.isArray(e.visible)&&e.visible.some((e=>{var t;return e.user===(null===(t=this.hass.user)||void 0===t?void 0:t.id)})))}},{kind:"method",key:"firstUpdated",value:function(){"1"===(0,u.io)("edit")&&this.lovelace.setEditMode(!0)}},{kind:"method",key:"updated",value:function(e){j(H(A.prototype),"updated",this).call(this,e);const t=this._viewRoot.lastChild;let i;e.has("hass")&&t&&(t.hass=this.hass),e.has("narrow")&&t&&(t.narrow=this.narrow);let r=!1,o=this.route.path.split("/")[1];if(o=o?decodeURI(o):void 0,e.has("route")){const e=this.config.views;if(!o&&e.length)i=e.findIndex(this._isVisible),this._navigateToView(e[i].path||i,!0);else if("hass-unused-entities"===o)i="hass-unused-entities";else if(o){const t=o,r=Number(t);let n=0;for(let i=0;i<e.length;i++)if(e[i].path===t||i===r){n=i;break}i=n}}if(e.has("lovelace")){const n=e.get("lovelace");if(n&&n.config===this.lovelace.config||(r=!0),!n||n.editMode!==this.lovelace.editMode){const e=this.config&&this.config.views;(0,l.B)(this,"iron-resize"),"storage"===this.lovelace.mode&&"hass-unused-entities"===o&&(i=e.findIndex(this._isVisible),this._navigateToView(e[i].path||i,!0))}!r&&t&&(t.lovelace=this.lovelace)}(void 0!==i||r)&&(r&&void 0===i&&(i=this._curView),(0,m.T)((()=>this._selectView(i,r))))}},{kind:"method",key:"renderNotificationButton",value:function(e){return t.dy`
      <mwc-icon-button
        style="cursor: pointer; position: relative;"
        label="${this.hass.localize("ui.notification_drawer.title")}"
        @click=${this._handleShowNotificationDrawer}
      >
        <ha-svg-icon path=${"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"}></ha-svg-icon>
        ${this._notificationsCount>0?t.dy`
              <span
                style="top: -4px; right: -6px; font-size: 1.0rem; position: absolute; min-width: 20px; box-sizing: border-box; border-radius: 50%; font-weight: 400; background-color: var(--accent-color); line-height: 24px; text-align: center; padding: 0 6px; color: var(--text-primary-color);"
              >
                ${this._notificationsCount}
              </span>
            `:""}
      </mwc-icon-button>
      ${e&&this._conversation(this.hass.config.components)?t.dy`
            <mwc-icon-button
              label="Start conversation"
              @click=${this._showVoiceCommandDialog}
            >
              <ha-svg-icon path=${I}></ha-svg-icon>
            </mwc-icon-button>
          `:""}
    `}},{kind:"get",key:"_notificationsCount",value:function(){const e=this.hass.states,t=Object.keys(e).filter((e=>"configurator"===e.substr(0,e.indexOf(".")))).map((t=>e[t])).length;return(this._persistentNotifications||0)+t}},{kind:"get",key:"_hideToolbar",value:function(){return!0===this.config.hideToolbar&&-1===window.location.search.indexOf("toolbar")}},{kind:"method",key:"_handleShowNotificationDrawer",value:function(){(0,P.d)(this,{narrow:this.narrow})}},{kind:"get",key:"config",value:function(){return this.lovelace.config}},{kind:"get",key:"_yamlMode",value:function(){return"yaml"===this.lovelace.mode}},{kind:"get",key:"_editMode",value:function(){return this.lovelace.editMode}},{kind:"get",key:"_layout",value:function(){return this.shadowRoot.getElementById("layout")}},{kind:"get",key:"_viewRoot",value:function(){return this.shadowRoot.getElementById("view")}},{kind:"get",key:"_showButtonMenu",value:function(){var e,t,i;return this.narrow&&this._conversation(this.hass.config.components)||this._editMode||(null===(e=this.hass.user)||void 0===e?void 0:e.is_admin)&&!this.hass.config.safe_mode||"yaml"===(null===(t=this.hass.panels.lovelace)||void 0===t||null===(i=t.config)||void 0===i?void 0:i.mode)||this._yamlMode}},{kind:"method",key:"_handleRefresh",value:function(e){(0,d.Q)(e)&&(0,l.B)(this,"config-refresh")}},{kind:"method",key:"_handleReloadResources",value:function(e){(0,d.Q)(e)&&(this.hass.callService("lovelace","reload_resources"),(0,v.g7)(this,{title:this.hass.localize("ui.panel.lovelace.reload_resources.refresh_header"),text:this.hass.localize("ui.panel.lovelace.reload_resources.refresh_body"),confirmText:this.hass.localize("ui.common.refresh"),dismissText:this.hass.localize("ui.common.not_now"),confirm:()=>location.reload()}))}},{kind:"method",key:"_showQuickBar",value:function(){(0,y.H)(this,{commandMode:!1,hint:this.hass.localize("ui.tips.key_e_hint")})}},{kind:"method",key:"_goBack",value:function(){var e,t;const i=null!==(e=null===(t=this.lovelace)||void 0===t?void 0:t.config.views)&&void 0!==e?e:[],r="number"==typeof this._curView?i[this._curView]:void 0;null!=r&&r.back_path?(0,h.c)(r.back_path):history.length>0?history.back():(0,h.c)(i[0].path)}},{kind:"method",key:"_handleRawEditor",value:function(e){(0,d.Q)(e)&&this.lovelace.enableFullEditMode()}},{kind:"method",key:"_handleManageDashboards",value:function(e){(0,d.Q)(e)&&(0,h.c)("/config/lovelace/dashboards")}},{kind:"method",key:"_handleManageResources",value:function(e){(0,d.Q)(e)&&(0,h.c)("/config/lovelace/resources")}},{kind:"method",key:"_handleUnusedEntities",value:function(e){var t;(0,d.Q)(e)&&(0,h.c)(`${null===(t=this.route)||void 0===t?void 0:t.prefix}/hass-unused-entities`)}},{kind:"method",key:"_showVoiceCommandDialog",value:function(){(0,g._)(this)}},{kind:"method",key:"_handleEnableEditMode",value:function(e){(0,d.Q)(e)&&(this._yamlMode?(0,v.Ys)(this,{text:"The edit UI is not available when in YAML mode."}):this.lovelace.setEditMode(!0))}},{kind:"method",key:"_editModeDisable",value:function(){this.lovelace.setEditMode(!1)}},{kind:"method",key:"_editLovelace",value:function(){(0,_.n)(this,this.lovelace)}},{kind:"method",key:"_navigateToView",value:function(e,t){this.lovelace.editMode?(0,h.c)(`${this.route.prefix}/${e}?${(0,u.j4)({edit:"1"})}`,{replace:t}):(0,h.c)(`${this.route.prefix}/${e}${location.search}`,{replace:t})}},{kind:"method",key:"_editView",value:function(){(0,E.k)(this,{lovelace:this.lovelace,viewIndex:this._curView})}},{kind:"method",key:"_moveViewLeft",value:function(e){if(e.stopPropagation(),0===this._curView)return;const t=this.lovelace,i=this._curView,r=this._curView-1;this._curView=r,t.saveConfig((0,k.mA)(t.config,i,r))}},{kind:"method",key:"_moveViewRight",value:function(e){if(e.stopPropagation(),this._curView+1===this.lovelace.config.views.length)return;const t=this.lovelace,i=this._curView,r=this._curView+1;this._curView=r,t.saveConfig((0,k.mA)(t.config,i,r))}},{kind:"method",key:"_addView",value:function(){(0,E.k)(this,{lovelace:this.lovelace,saveCallback:(e,t)=>{const i=t.path||e;this._navigateToView(i)}})}},{kind:"method",key:"_handleViewSelected",value:function(e){const t=e.detail.selected;if(t!==this._curView){const e=this.config.views[t].path||t;this._navigateToView(e)}(0,c.Z)(this,this._layout.header.scrollTarget)}},{kind:"method",key:"_selectView",value:function(e,t){if(!t&&this._curView===e)return;e=void 0===e?0:e,this._curView=e,t&&(this._viewCache={});const r=this._viewRoot;if(r.lastChild&&r.removeChild(r.lastChild),"hass-unused-entities"===e){const e=document.createElement("hui-unused-entities");return Promise.all([i.e(29563),i.e(98985),i.e(41985),i.e(9874),i.e(90345),i.e(65040),i.e(67065),i.e(437)]).then(i.bind(i,28279)).then((()=>{e.hass=this.hass,e.lovelace=this.lovelace,e.narrow=this.narrow})),void r.appendChild(e)}let o;const n=this.config.views[e];if(!n)return void this.lovelace.setEditMode(!0);!t&&this._viewCache[e]?o=this._viewCache[e]:(o=document.createElement("hui-view"),o.index=e,this._viewCache[e]=o),o.lovelace=this.lovelace,o.hass=this.hass,o.narrow=this.narrow;const a=n.background||this.config.background;a?this._appLayout.style.setProperty("--lovelace-background",a):this._appLayout.style.removeProperty("--lovelace-background"),r.appendChild(o),(0,l.B)(this,"iron-resize")}},{kind:"get",static:!0,key:"styles",value:function(){return[w.Qx,t.iv`
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
        }
        ha-tabs {
          width: 100%;
          height: 100%;
          margin-left: 4px;
        }
        paper-tabs {
          margin-left: 12px;
          margin-left: max(env(safe-area-inset-left), 12px);
          margin-right: env(safe-area-inset-right);
        }
        ha-tabs,
        paper-tabs {
          --paper-tabs-selection-bar-color: var(
            --app-header-selection-bar-color,
            var(--app-header-text-color, #fff)
          );
          text-transform: uppercase;
        }

        .edit-mode app-header,
        .edit-mode app-toolbar {
          background-color: var(--app-header-edit-background-color, #455a64);
          color: var(--app-header-edit-text-color, #fff);
        }
        .edit-mode div[main-title] {
          pointer-events: auto;
        }
        paper-tab.iron-selected .edit-icon {
          display: inline-flex;
        }
        .edit-icon {
          color: var(--accent-color);
          padding-left: 8px;
          padding-inline-start: 8px;
          vertical-align: middle;
          --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
          direction: var(--direction);
        }
        .edit-icon.view {
          display: none;
        }
        #add-view {
          position: absolute;
          height: 44px;
        }
        #add-view ha-svg-icon {
          background-color: var(--accent-color);
          border-radius: 4px;
        }
        app-toolbar a {
          color: var(--text-primary-color, white);
        }
        mwc-button.warning:not([disabled]) {
          color: var(--error-color);
        }
        #view {
          min-height: calc(100vh - var(--header-height));
          /**
          * Since we only set min-height, if child nodes need percentage
          * heights they must use absolute positioning so we need relative
          * positioning here.
          *
          * https://www.w3.org/TR/CSS2/visudet.html#the-height-property
          */
          position: relative;
          display: flex;
        }
        /**
         * In edit mode we have the tab bar on a new line *
         */
        .edit-mode #view {
          min-height: calc(100vh - var(--header-height) - 48px);
        }
        #view > * {
          /**
          * The view could get larger than the window in Firefox
          * to prevent that we set the max-width to 100%
          * flex-grow: 1 and flex-basis: 100% should make sure the view
          * stays full width.
          *
          * https://github.com/home-assistant/home-assistant-polymer/pull/3806
          */
          flex: 1 1 100%;
          max-width: 100%;
        }
        .hide-tab {
          display: none;
        }
        .menu-link {
          text-decoration: none;
        }
        hui-view {
          background: var(
            --lovelace-background,
            var(--primary-background-color)
          );
        }
        .exit-edit-mode {
          --mdc-theme-primary: var(--app-header-edit-text-color, #fff);
          --mdc-button-outline-color: var(--app-header-edit-text-color, #fff);
          --mdc-typography-button-font-size: 14px;
        }
        .child-view-icon {
          opacity: 0.5;
        }
      `]}}]}}),t.oi);customElements.define("hui-root",N)}))},27322:(e,t,i)=>{i.d(t,{R:()=>r});const r=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=6c7d7ccb.js.map