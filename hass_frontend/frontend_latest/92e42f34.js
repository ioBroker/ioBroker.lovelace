/*! For license information please see 92e42f34.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[63528],{1819:(e,t,i)=>{"use strict";var r=i(87480),n=i(33310),s=i(92685),o=i(92038);let a=class extends s.a{};a.styles=[o.W],a=(0,r.__decorate)([(0,n.Mo)("mwc-formfield")],a)},63207:(e,t,i)=>{"use strict";i(65660),i(15112);var r=i(9672),n=i(87156),s=i(50856),o=i(48175);(0,r.k)({_template:s.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:o.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,n.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,n.vz)(this.root).appendChild(this._img))}})},15112:(e,t,i)=>{"use strict";i.d(t,{P:()=>n});i(48175);var r=i(9672);class n{constructor(e){n[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return n.types[e]&&n.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=n.types[t]=n.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=n.types[this.type];return e?Object.keys(e).map((function(e){return s[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}n[" "]=function(){},n.types={};var s=n.types;(0,r.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new n({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new n({type:this.type,key:e}).value}})},21560:(e,t,i)=>{"use strict";i.d(t,{ZH:()=>c,MT:()=>s,U2:()=>l,RV:()=>n,t8:()=>d});const r=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const i=()=>indexedDB.databases().finally(t);e=setInterval(i,100),i()})).finally((()=>clearInterval(e)))};function n(e){return new Promise(((t,i)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>i(e.error)}))}function s(e,t){const i=r().then((()=>{const i=indexedDB.open(e);return i.onupgradeneeded=()=>i.result.createObjectStore(t),n(i)}));return(e,r)=>i.then((i=>r(i.transaction(t,e).objectStore(t))))}let o;function a(){return o||(o=s("keyval-store","keyval")),o}function l(e,t=a()){return t("readonly",(t=>n(t.get(e))))}function d(e,t,i=a()){return i("readwrite",(i=>(i.put(t,e),n(i.transaction))))}function c(e=a()){return e("readwrite",(e=>(e.clear(),n(e.transaction))))}},55642:(e,t,i)=>{"use strict";i.d(t,{h:()=>s});var r=i(37500),n=i(57835);const s=(0,n.XM)(class extends n.Xe{constructor(e){var t,i,r;if(super(e),r=void 0,(i="_element")in(t=this)?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r,e.type!==n.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),r.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},32594:(e,t,i)=>{"use strict";i.d(t,{U:()=>r});const r=e=>e.stopPropagation()},43426:(e,t,i)=>{"use strict";i.d(t,{U:()=>r});const r=async(e,t,i,r,n,...s)=>{let o=r[e];o||(o=r[e]={});const a=o[n];if(a)return a;const l=i(r,n,...s);return o[n]=l,l.then((()=>setTimeout((()=>{o[n]=void 0}),t)),(()=>{o[n]=void 0})),l}},34821:(e,t,i)=>{"use strict";i.d(t,{i:()=>_});var r=i(41085),n=i(91632),s=i(37500),o=i(33310),a=i(74265);i(10983);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!h(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function d(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function y(e,t,i){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},y(e,t,i||e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}const _=(e,t)=>s.dy`
  <span class="header_title">${t}</span>
  <ha-icon-button
    .label=${e.localize("ui.dialogs.generic.close")}
    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
    dialogAction="close"
    class="header_button"
  ></ha-icon-button>
`;!function(e,t,i,r){var n=l();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var o=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=t.find(i)))if(u(s.descriptor)||u(n.descriptor)){if(h(s)||h(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(h(s)){if(h(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}c(s,n)}else t.push(s)}return t}(o.d.map(d)),e);n.initializeClassElements(o.F,a.elements),n.runClassFinishers(o.F,a.finishers)}([(0,o.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:a.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${y(v(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,s.iv`
      .mdc-dialog {
        --mdc-dialog-scroll-divider-color: var(--divider-color);
        z-index: var(--dialog-z-index, 7);
        -webkit-backdrop-filter: var(--dialog-backdrop-filter, none);
        backdrop-filter: var(--dialog-backdrop-filter, none);
      }
      .mdc-dialog__actions {
        justify-content: var(--justify-action-buttons, flex-end);
        padding-bottom: max(env(safe-area-inset-bottom), 8px);
      }
      .mdc-dialog__actions span:nth-child(1) {
        flex: var(--secondary-action-button-flex, unset);
      }
      .mdc-dialog__actions span:nth-child(2) {
        flex: var(--primary-action-button-flex, unset);
      }
      .mdc-dialog__container {
        align-items: var(--vertial-align-dialog, center);
      }
      .mdc-dialog__title::before {
        display: block;
        height: 20px;
      }
      .mdc-dialog .mdc-dialog__content {
        position: var(--dialog-content-position, relative);
        padding: var(--dialog-content-padding, 20px 24px);
      }
      :host([hideactions]) .mdc-dialog .mdc-dialog__content {
        padding-bottom: max(
          var(--dialog-content-padding, 20px),
          env(safe-area-inset-bottom)
        );
      }
      .mdc-dialog .mdc-dialog__surface {
        position: var(--dialog-surface-position, relative);
        top: var(--dialog-surface-top);
        min-height: var(--mdc-dialog-min-height, auto);
        border-radius: var(
          --ha-dialog-border-radius,
          var(--ha-card-border-radius, 4px)
        );
      }
      :host([flexContent]) .mdc-dialog .mdc-dialog__content {
        display: flex;
        flex-direction: column;
      }
      .header_button {
        position: absolute;
        right: 16px;
        top: 10px;
        text-decoration: none;
        color: inherit;
      }
      .header_title {
        margin-right: 40px;
        margin-inline-end: 40px;
        margin-inline-start: initial;
        direction: var(--direction);
      }
      .header_button {
        inset-inline-start: initial;
        inset-inline-end: 16px;
        direction: var(--direction);
      }
      .dialog-actions {
        inset-inline-start: initial !important;
        inset-inline-end: 0px !important;
        direction: var(--direction);
      }
    `]}]}}),r.M)},640:(e,t,i)=>{"use strict";var r=i(37500),n=i(33310),s=i(47181),o=i(47271);i(77576),i(29925);function a(){a=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=p(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:u(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=u(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function l(e){var t,i=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}let m=[];const y=e=>r.dy`<mwc-list-item
  graphic="avatar"
>
  <ha-icon .icon=${e.icon} slot="graphic"></ha-icon>
  ${e.icon}
</mwc-list-item>`;!function(e,t,i,r){var n=a();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var o=t((function(e){n.initializeInstanceElements(e,u.elements)}),i),u=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=t.find(i)))if(h(s.descriptor)||h(n.descriptor)){if(c(s)||c(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(c(s)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}d(s,n)}else t.push(s)}return t}(o.d.map(l)),e);n.initializeClassElements(o.F,u.elements),n.runClassFinishers(o.F,u.finishers)}([(0,n.Mo)("ha-icon-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"fallbackPath",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,n.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"render",value:function(){return r.dy`
      <ha-combo-box
        .hass=${this.hass}
        item-value-path="icon"
        item-label-path="icon"
        .value=${this._value}
        allow-custom-value
        .filteredItems=${m}
        .label=${this.label}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
        .placeholder=${this.placeholder}
        .errorMessage=${this.errorMessage}
        .invalid=${this.invalid}
        .renderer=${y}
        icon
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
        @filter-changed=${this._filterChanged}
      >
        ${this._value||this.placeholder?r.dy`
              <ha-icon .icon=${this._value||this.placeholder} slot="icon">
              </ha-icon>
            `:this.fallbackPath?r.dy`<ha-svg-icon
              .path=${this.fallbackPath}
              slot="icon"
            ></ha-svg-icon>`:""}
      </ha-combo-box>
    `}},{kind:"method",key:"_openedChanged",value:async function(e){if(this._opened=e.detail.value,this._opened&&!m.length){const e=await i.e(71639).then(i.t.bind(i,71639,19));m=e.default.map((e=>({icon:`mdi:${e.name}`,keywords:e.keywords}))),this.comboBox.filteredItems=m,Object.keys(o.g).forEach((e=>{this._loadCustomIconItems(e)}))}}},{kind:"method",key:"_loadCustomIconItems",value:async function(e){try{const t=o.g[e].getIconList;if("function"!=typeof t)return;const i=(await t()).map((t=>{var i;return{icon:`${e}:${t.name}`,keywords:null!==(i=t.keywords)&&void 0!==i?i:[]}}));m.push(...i),this.comboBox.filteredItems=m}catch(t){console.warn(`Unable to load icon list for ${e} iconset`)}}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this._setValue(e.detail.value)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,(0,s.B)(this,"value-changed",{value:this._value},{bubbles:!1,composed:!1})}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.detail.value.toLowerCase();if(t.length>=2){const e=[],i=[];m.forEach((r=>{r.icon.includes(t)?e.push(r):r.keywords.some((e=>e.includes(t)))&&i.push(r)})),e.push(...i),e.length>0?this.comboBox.filteredItems=e:this.comboBox.filteredItems=[{icon:t,keywords:[]}]}else this.comboBox.filteredItems=m}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-icon,
      ha-svg-icon {
        color: var(--primary-text-color);
        position: relative;
        bottom: 2px;
      }
      *[slot="prefix"] {
        margin-right: 8px;
      }
    `}}]}}),r.oi)},86630:(e,t,i)=>{"use strict";var r=i(45285),n=i(3762),s=i(37500),o=i(33310),a=i(38346),l=i(96151);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!u(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=m(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:f(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=f(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function c(e){var t,i=m(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function v(e,t,i){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},v(e,t,i||e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}!function(e,t,i,r){var n=d();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var o=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=t.find(i)))if(p(s.descriptor)||p(n.descriptor)){if(u(s)||u(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(u(s)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}h(s,n)}else t.push(s)}return t}(o.d.map(c)),e);n.initializeClassElements(o.F,a.elements),n.runClassFinishers(o.F,a.finishers)}([(0,o.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?s.dy`<span class="mdc-select__icon"
      ><slot name="icon"></slot
    ></span>`:s.Ld}},{kind:"method",key:"connectedCallback",value:function(){v(_(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){v(_(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value(){return(0,a.D)((async()=>{await(0,l.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,s.iv`
      .mdc-select:not(.mdc-select--disabled) .mdc-select__icon {
        color: var(--secondary-text-color);
      }
      .mdc-select__anchor {
        width: var(--ha-select-min-width, 200px);
      }
      .mdc-select--filled .mdc-floating-label {
        inset-inline-start: 12px;
        inset-inline-end: initial;
        direction: var(--direction);
      }
      .mdc-select .mdc-select__anchor {
        padding-inline-start: 12px;
        padding-inline-end: 0px;
        direction: var(--direction);
      }
      .mdc-select__anchor .mdc-floating-label--float-above {
        transform-origin: var(--float-start);
      }
    `]}]}}),r.K)},22814:(e,t,i)=>{"use strict";i.d(t,{uw:()=>r,iI:()=>n,W2:()=>s,TZ:()=>o});const r=`${location.protocol}//${location.host}`,n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),s=async(e,t,i,r)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:i,password:r}),o=async(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:i})},89439:(e,t,i)=>{"use strict";i.d(t,{qW:()=>s,kU:()=>o,jU:()=>a,Ch:()=>l,nk:()=>d,i4:()=>c,Lr:()=>u,tb:()=>p,Xn:()=>f,Mw:()=>m,B:()=>v,zj:()=>_});var r=i(43426),n=i(22814);const s=2,o="hls",a="web_rtc",l=(e,t,i)=>`${e}&width=${t}&height=${i}`,d=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,c=async(e,t,i,n)=>{const s=await(0,r.U)("_cameraTmbUrl",9e3,h,e,t);return l(s,i,n)},h=async(e,t)=>{const i=await(0,n.iI)(e,`/api/camera_proxy/${t}`);return e.hassUrl(i.path)},u=async(e,t,i)=>{const r={type:"camera/stream",entity_id:t};i&&(r.format=i);const n=await e.callWS(r);return n.url=e.hassUrl(n.url),n},p=(e,t,i)=>e.callWS({type:"camera/web_rtc_offer",entity_id:t,offer:i}),f=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),m=(e,t,i)=>e.callWS({type:"camera/update_prefs",entity_id:t,...i}),y="media-source://camera/",v=e=>e.startsWith(y),_=e=>e.substring(y.length)},73728:(e,t,i)=>{"use strict";i.d(t,{pV:()=>o,P3:()=>a,Ky:()=>d,D4:()=>c,XO:()=>h,zO:()=>u,oi:()=>p,d4:()=>f,D7:()=>m,ZJ:()=>v,V3:()=>_,WW:()=>g});var r=i(97330),n=i(38346),s=i(5986);const o=32143==i.j?["usb","unignore","dhcp","homekit","ssdp","zeroconf","discovery","integration_discovery","mqtt","hassio"]:null,a=32143==i.j?["reauth"]:null,l={"HA-Frontend-Base":`${location.protocol}//${location.host}`},d=(e,t)=>{var i;return e.callApi("POST","config/config_entries/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)},l)},c=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`,void 0,l),h=(e,t,i)=>e.callApi("POST",`config/config_entries/flow/${t}`,i,l),u=(e,t,i)=>e.callWS({type:"config_entries/ignore_flow",flow_id:t,title:i}),p=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),f=(e,t)=>e.callApi("GET","config/config_entries/flow_handlers"+(t?`?type=${t}`:"")),m=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),y=(e,t)=>e.subscribeEvents((0,n.D)((()=>m(e).then((e=>t.setState(e,!0)))),500,!0),"config_entry_discovered"),v=e=>(0,r._)(e,"_configFlowProgress",m,y),_=(e,t)=>v(e.connection).subscribe(t),g=(e,t)=>t.context.title_placeholders&&0!==Object.keys(t.context.title_placeholders).length?e(`component.${t.handler}.config.flow_title`,t.context.title_placeholders)||("name"in t.context.title_placeholders?t.context.title_placeholders.name:(0,s.Lh)(e,t.handler)):(0,s.Lh)(e,t.handler)},24833:(e,t,i)=>{"use strict";i.d(t,{oF:()=>c,kK:()=>h,k6:()=>u,zG:()=>p,BD:()=>f,Sk:()=>y,X4:()=>v,UJ:()=>_,Fj:()=>b,M$:()=>k});var r=i(49706);if(32143==i.j)var n=i(58831);if(32143==i.j)var s=i(22311);var o=i(40095);if(32143==i.j)var a=i(85415);if(32143==i.j)var l=i(26765);if(32143==i.j)var d=i(81796);const c=1,h=2,u=4,p=8,f=16,m=e=>(0,o.f)(e,u)&&"number"==typeof e.in_progress,y=e=>(e=>m(e.attributes))(e)||!!e.attributes.in_progress,v=e=>m(e)||!!e.in_progress,_=(e,t)=>e.callWS({type:"update/release_notes",entity_id:t}),g=e=>Object.values(e).filter((e=>"update"===(0,s.N)(e))).sort(((e,t)=>"ioBroker Core"===e.attributes.title?-3:"ioBroker Core"===t.attributes.title?3:"ioBroker Operating System"===e.attributes.title?-2:"ioBroker Operating System"===t.attributes.title?2:"ioBroker Supervisor"===e.attributes.title?-1:"ioBroker Supervisor"===t.attributes.title?1:(0,a.f)(e.attributes.title||e.attributes.friendly_name||"",t.attributes.title||t.attributes.friendly_name||""))),b=(e,t=!1)=>g(e).filter((e=>((e,t=!1)=>(e.state===r.uo||t&&Boolean(e.attributes.skipped_version))&&(0,o.e)(e,c))(e,t))),k=async(e,t)=>{const i=g(t.states).map((e=>e.entity_id));if(!i.length)return void(0,l.Ys)(e,{title:t.localize("ui.panel.config.updates.no_update_entities.title"),text:t.localize("ui.panel.config.updates.no_update_entities.description"),warning:!0});let r=0;const s=await t.connection.subscribeEvents((i=>{"update"===(0,n.M)(i.data.entity_id)&&(r++,(0,d.C)(e,{message:t.localize("ui.panel.config.updates.updates_refreshed",{count:r})}))}),"state_changed");await t.callService("homeassistant","update_entity",{entity_id:i}),await new Promise((e=>setTimeout(e,1e4))),s(),0===r&&(0,d.C)(e,{message:t.localize("ui.panel.config.updates.no_new_updates")})}},52871:(e,t,i)=>{"use strict";i.d(t,{G:()=>n,w:()=>s});var r=i(47181);const n=()=>Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(88278),i.e(59799),i.e(6294),i.e(41985),i.e(85084),i.e(45507),i.e(44281),i.e(51644),i.e(49842),i.e(1548),i.e(49075),i.e(81480),i.e(55149),i.e(96980),i.e(12545),i.e(13701),i.e(77576),i.e(29925),i.e(65040),i.e(68101),i.e(4940),i.e(82797),i.e(76408)]).then(i.bind(i,81585)),s=(e,t,i)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:n,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}},17416:(e,t,i)=>{"use strict";i.d(t,{c:()=>c});var r=i(37500),n=i(5986);const s=(e,t)=>{var i;return e.callApi("POST","config/config_entries/options/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)})},o=(e,t)=>e.callApi("GET",`config/config_entries/options/flow/${t}`),a=(e,t,i)=>e.callApi("POST",`config/config_entries/options/flow/${t}`,i),l=(e,t)=>e.callApi("DELETE",`config/config_entries/options/flow/${t}`);var d=i(52871);const c=(e,t,i)=>(0,d.w)(e,{startFlowHandler:t.entry_id,domain:t.domain,manifest:i},{loadDevicesAndAreas:!1,createFlow:async(e,i)=>{const[r]=await Promise.all([s(e,i),e.loadBackendTranslation("options",t.domain)]);return r},fetchFlow:async(e,i)=>{const[r]=await Promise.all([o(e,i),e.loadBackendTranslation("options",t.domain)]);return r},handleFlowStep:a,deleteFlow:l,renderAbortDescription(e,i){const n=e.localize(`component.${t.domain}.options.abort.${i.reason}`,i.description_placeholders);return n?r.dy`
              <ha-markdown
                breaks
                allowsvg
                .content=${n}
              ></ha-markdown>
            `:""},renderShowFormStepHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize("ui.dialogs.options_flow.form.header"),renderShowFormStepDescription(e,i){const n=e.localize(`component.${t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return n?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${n}
              ></ha-markdown>
            `:""},renderShowFormStepFieldLabel:(e,i,r)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.data.${r.name}`),renderShowFormStepFieldHelper:(e,i,r)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.data_description.${r.name}`),renderShowFormStepFieldError:(e,i,r)=>e.localize(`component.${t.domain}.options.error.${r}`,i.description_placeholders),renderExternalStepHeader:(e,t)=>"",renderExternalStepDescription:(e,t)=>"",renderCreateEntryDescription:(e,t)=>r.dy`
          <p>${e.localize("ui.dialogs.options_flow.success.description")}</p>
        `,renderShowFormProgressHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderShowFormProgressDescription(e,i){const n=e.localize(`component.${t.domain}.options.progress.${i.progress_action}`,i.description_placeholders);return n?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${n}
              ></ha-markdown>
            `:""},renderMenuHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderMenuDescription(e,i){const n=e.localize(`component.${t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return n?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${n}
              ></ha-markdown>
            `:""},renderMenuOption:(e,i,r)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.menu_options.${r}`,i.description_placeholders),renderLoadingDescription:(e,i)=>e.localize(`component.${t.domain}.options.loading`)||e.localize(`ui.dialogs.options_flow.loading.${i}`,{integration:(0,n.Lh)(e.localize,t.domain)})})},97058:(e,t,i)=>{"use strict";i.d(t,{O:()=>n,r:()=>s});var r=i(47181);const n=()=>Promise.all([i.e(85084),i.e(44281),i.e(77576),i.e(68101),i.e(10586)]).then(i.bind(i,10586)),s=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-device-registry-detail",dialogImport:n,dialogParams:t})}},49070:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DialogEntityEditor:()=>Q});i(27303),i(22001);var r=i(37500),n=i(33310),s=i(40015),o=i(55642),a=i(47181),l=i(91741),d=(i(34821),i(90806),i(10983),i(95081),i(74186)),c=i(74265),h=i(11654),u=i(27322);const p={input_number:"entity-settings-helper-tab",input_select:"entity-settings-helper-tab",input_text:"entity-settings-helper-tab",input_boolean:"entity-settings-helper-tab",input_datetime:"entity-settings-helper-tab",counter:"entity-settings-helper-tab",timer:"entity-settings-helper-tab",input_button:"entity-settings-helper-tab"};i(51187),i(1819),i(44577);var f=i(14516),m=i(7323),y=i(32594),v=i(58831),_=i(16023),g=i(40095),b=i(85415),k=(i(9381),i(68101),i(46583),i(640),i(33220),i(86630),i(14089),i(43709),i(3555),i(89439)),w=i(81582),E=i(73728),$=i(57292),C=i(5986),x=i(17416),P=i(26765),S=i(73826),D=i(97058),z=i(94458);function A(){A=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!B(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?M(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=F(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:j(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=j(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function T(e){var t,i=F(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function O(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function I(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function j(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function F(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function L(e,t,i){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},L(e,t,i||e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}const H={cover:[["awning","blind","curtain","damper","door","garage","gate","shade","shutter","window"]],binary_sensor:[["lock"],["window","door","garage_door","opening"],["battery","battery_charging"],["cold","gas","heat"],["running","motion","moving","occupancy","presence","vibration"],["power","plug","light"],["smoke","safety","sound","problem","tamper","carbon_monoxide","moisture"]]},R={temperature:["°C","°F","K"],pressure:["hPa","Pa","kPa","bar","cbar","mbar","mmHg","inHg","psi"]},W={precipitation:["mm","in"],pressure:["hPa","mbar","mmHg","inHg"],temperature:["°C","°F"],visibility:["km","mi"],wind_speed:["ft/s","km/h","kn","mph","m/s"]},V=["cover","fan","light","lock","siren"];!function(e,t,i,r){var n=A();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var o=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=t.find(i)))if(I(s.descriptor)||I(n.descriptor)){if(B(s)||B(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(B(s)){if(B(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}O(s,n)}else t.push(s)}return t}(o.d.map(T)),e);n.initializeClassElements(o.F,a.elements),n.runClassFinishers(o.F,a.finishers)}([(0,n.Mo)("entity-registry-settings")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_deviceClass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_switchAs",value:()=>"switch"},{kind:"field",decorators:[(0,n.SB)()],key:"_areaId",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_disabledBy",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_hiddenBy",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_device",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_helperConfigEntry",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_unit_of_measurement",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_precipitation_unit",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_pressure_unit",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_temperature_unit",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_visibility_unit",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_wind_speed_unit",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_submitting",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_cameraPrefs",value:void 0},{kind:"field",key:"_origEntityId",value:void 0},{kind:"field",key:"_deviceLookup",value:void 0},{kind:"field",key:"_deviceClassOptions",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[(0,$.q4)(this.hass.connection,(e=>{this._deviceLookup={};for(const t of e)this._deviceLookup[t.id]=t;this.entry.device_id&&(this._device=this._deviceLookup[this.entry.device_id])}))]}},{kind:"method",key:"firstUpdated",value:function(e){L(U(i.prototype),"firstUpdated",this).call(this,e),this.entry.config_entry_id&&(0,w.pB)(this.hass,{type:"helper",domain:this.entry.platform}).then((e=>{this._helperConfigEntry=e.find((e=>e.entry_id===this.entry.config_entry_id))}))}},{kind:"method",key:"willUpdate",value:function(e){if(L(U(i.prototype),"willUpdate",this).call(this,e),!e.has("entry"))return;this._error=void 0,this._name=this.entry.name||"",this._icon=this.entry.icon||"",this._deviceClass=this.entry.device_class||this.entry.original_device_class,this._origEntityId=this.entry.entity_id,this._areaId=this.entry.area_id,this._entityId=this.entry.entity_id,this._disabledBy=this.entry.disabled_by,this._hiddenBy=this.entry.hidden_by,this._device=this.entry.device_id&&this._deviceLookup?this._deviceLookup[this.entry.device_id]:void 0;const t=(0,v.M)(this.entry.entity_id);if("camera"===t&&(0,m.p)(this.hass,"stream")){const e=this.hass.states[this.entry.entity_id];e&&(0,g.e)(e,k.qW)&&e.attributes.frontend_stream_type===k.kU&&this._fetchCameraPrefs()}if("sensor"===t){var r;const e=this.hass.states[this.entry.entity_id];this._unit_of_measurement=null==e||null===(r=e.attributes)||void 0===r?void 0:r.unit_of_measurement}if("weather"===t){var n,s,o,a,l;const e=this.hass.states[this.entry.entity_id];this._precipitation_unit=null==e||null===(n=e.attributes)||void 0===n?void 0:n.precipitation_unit,this._pressure_unit=null==e||null===(s=e.attributes)||void 0===s?void 0:s.pressure_unit,this._temperature_unit=null==e||null===(o=e.attributes)||void 0===o?void 0:o.temperature_unit,this._visibility_unit=null==e||null===(a=e.attributes)||void 0===a?void 0:a.visibility_unit,this._wind_speed_unit=null==e||null===(l=e.attributes)||void 0===l?void 0:l.wind_speed_unit}const d=H[t];if(d){this._deviceClassOptions=[[],[]];for(const e of d)e.includes(this.entry.original_device_class)?this._deviceClassOptions[0]=e:this._deviceClassOptions[1].push(...e)}}},{kind:"method",key:"render",value:function(){var e,t,i,n,s,o;if(this.entry.entity_id!==this._origEntityId)return r.dy``;const a=this.hass.states[this.entry.entity_id],l=(0,v.M)(this.entry.entity_id),d=(0,v.M)(this._entityId.trim())!==l;return r.dy`
      ${a?"":r.dy`
            <div class="container warning">
              ${this.hass.localize("ui.dialogs.entity_registry.editor.unavailable")}
              ${null!==(e=this._device)&&void 0!==e&&e.disabled_by?r.dy`<br />${this.hass.localize("ui.dialogs.entity_registry.editor.device_disabled")}<br /><mwc-button @click=${this._openDeviceSettings}>
                      ${this.hass.localize("ui.dialogs.entity_registry.editor.open_device_settings")}
                    </mwc-button>`:""}
            </div>
          `}
      ${this._error?r.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""}
      <div class="form container">
        <ha-textfield
          .value=${this._name}
          .label=${this.hass.localize("ui.dialogs.entity_registry.editor.name")}
          .invalid=${d}
          .disabled=${this._submitting}
          .placeholder=${this.entry.original_name}
          @input=${this._nameChanged}
        ></ha-textfield>
        <ha-icon-picker
          .value=${this._icon}
          @value-changed=${this._iconChanged}
          .label=${this.hass.localize("ui.dialogs.entity_registry.editor.icon")}
          .placeholder=${this.entry.original_icon||(null==a?void 0:a.attributes.icon)}
          .fallbackPath=${this._icon||null!=a&&a.attributes.icon||!a?void 0:(0,_.K)((0,v.M)(a.entity_id),a)}
          .disabled=${this._submitting}
        ></ha-icon-picker>
        ${this._deviceClassOptions?r.dy`
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.device_class")}
                .value=${this._deviceClass}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._deviceClassChanged}
                @closed=${y.U}
              >
                <mwc-list-item></mwc-list-item>
                ${this._deviceClassesSorted(l,this._deviceClassOptions[0],this.hass.localize).map((e=>r.dy`
                    <mwc-list-item .value=${e.deviceClass}>
                      ${e.label}
                    </mwc-list-item>
                  `))}
                ${this._deviceClassOptions[0].length&&this._deviceClassOptions[1].length?r.dy`<li divider role="separator"></li>`:""}
                ${this._deviceClassesSorted(l,this._deviceClassOptions[1],this.hass.localize).map((e=>r.dy`
                    <mwc-list-item .value=${e.deviceClass}>
                      ${e.label}
                    </mwc-list-item>
                  `))}
              </ha-select>
            `:""}
        ${"sensor"===l&&this._deviceClass&&null!=a&&a.attributes.unit_of_measurement&&null!==(t=R[this._deviceClass])&&void 0!==t&&t.includes(null==a?void 0:a.attributes.unit_of_measurement)?r.dy`
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.unit_of_measurement")}
                .value=${a.attributes.unit_of_measurement}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._unitChanged}
                @closed=${y.U}
              >
                ${R[this._deviceClass].map((e=>r.dy`
                    <mwc-list-item .value=${e}>${e}</mwc-list-item>
                  `))}
              </ha-select>
            `:""}
        ${"weather"===l?r.dy`
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.precipitation_unit")}
                .value=${this._precipitation_unit}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._precipitationUnitChanged}
                @closed=${y.U}
              >
                ${W.precipitation.map((e=>r.dy`
                    <mwc-list-item .value=${e}>${e}</mwc-list-item>
                  `))}
              </ha-select>
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.pressure_unit")}
                .value=${this._pressure_unit}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._pressureUnitChanged}
                @closed=${y.U}
              >
                ${W.pressure.map((e=>r.dy`
                    <mwc-list-item .value=${e}>${e}</mwc-list-item>
                  `))}
              </ha-select>
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.temperature_unit")}
                .value=${this._temperature_unit}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._temperatureUnitChanged}
                @closed=${y.U}
              >
                ${W.temperature.map((e=>r.dy`
                    <mwc-list-item .value=${e}>${e}</mwc-list-item>
                  `))}
              </ha-select>
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.visibility_unit")}
                .value=${this._visibility_unit}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._visibilityUnitChanged}
                @closed=${y.U}
              >
                ${W.visibility.map((e=>r.dy`
                    <mwc-list-item .value=${e}>${e}</mwc-list-item>
                  `))}
              </ha-select>
              <ha-select
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.wind_speed_unit")}
                .value=${this._wind_speed_unit}
                naturalMenuWidth
                fixedMenuPosition
                @selected=${this._windSpeedUnitChanged}
                @closed=${y.U}
              >
                ${W.wind_speed.map((e=>r.dy`
                    <mwc-list-item .value=${e}>${e}</mwc-list-item>
                  `))}
              </ha-select>
            `:""}
        ${"switch"===l?r.dy`<ha-select
              .label=${this.hass.localize("ui.dialogs.entity_registry.editor.device_class")}
              naturalMenuWidth
              fixedMenuPosition
              @selected=${this._switchAsChanged}
              @closed=${y.U}
            >
              <mwc-list-item
                value="switch"
                .selected=${!this._deviceClass||"switch"===this._deviceClass}
              >
                ${this.hass.localize("ui.dialogs.entity_registry.editor.device_classes.switch.switch")}
              </mwc-list-item>
              <mwc-list-item
                value="outlet"
                .selected=${"outlet"===this._deviceClass}
              >
                ${this.hass.localize("ui.dialogs.entity_registry.editor.device_classes.switch.outlet")}
              </mwc-list-item>
              <li divider role="separator"></li>
              ${this._switchAsDomainsSorted(V,this.hass.localize).map((e=>r.dy`
                  <mwc-list-item .value=${e.domain}>
                    ${e.label}
                  </mwc-list-item>
                `))}
            </ha-select>`:""}
        ${this._helperConfigEntry?r.dy`
              <div class="row">
                <mwc-button
                  @click=${this._showOptionsFlow}
                  .disabled=${this._submitting}
                >
                  ${this.hass.localize("ui.dialogs.entity_registry.editor.configure_state","integration",(0,C.Lh)(this.hass.localize,this._helperConfigEntry.domain))}
                </mwc-button>
              </div>
            `:""}
        <ha-textfield
          error-message="Domain needs to stay the same"
          .value=${this._entityId}
          .label=${this.hass.localize("ui.dialogs.entity_registry.editor.entity_id")}
          .invalid=${d}
          .disabled=${this._submitting}
          @input=${this._entityIdChanged}
        ></ha-textfield>
        ${this.entry.device_id?"":r.dy`<ha-area-picker
              .hass=${this.hass}
              .value=${this._areaId}
              @value-changed=${this._areaPicked}
            ></ha-area-picker>`}
        ${this._cameraPrefs?r.dy`
              <ha-settings-row>
                <span slot="heading"
                  >${this.hass.localize("ui.dialogs.entity_registry.editor.preload_stream")}</span
                >
                <span slot="description"
                  >${this.hass.localize("ui.dialogs.entity_registry.editor.preload_stream_description")}</span
                >
                <ha-switch
                  .checked=${this._cameraPrefs.preload_stream}
                  @change=${this._handleCameraPrefsChanged}
                >
                </ha-switch>
              </ha-settings-row>
            `:""}
        <ha-expansion-panel
          .header=${this.hass.localize("ui.dialogs.entity_registry.editor.advanced")}
          outlined
        >
          <div class="label">
            ${this.hass.localize("ui.dialogs.entity_registry.editor.entity_status")}:
          </div>
          <div class="secondary">
            ${this._disabledBy&&"user"!==this._disabledBy&&"integration"!==this._disabledBy?this.hass.localize("ui.dialogs.entity_registry.editor.enabled_cause","cause",this.hass.localize(`config_entry.disabled_by.${this._disabledBy}`)):""}
          </div>
          <div class="row">
            <mwc-formfield
              .label=${this.hass.localize("ui.dialogs.entity_registry.editor.enabled_label")}
            >
              <ha-radio
                name="hiddendisabled"
                value="enabled"
                .checked=${!this._hiddenBy&&!this._disabledBy}
                .disabled=${this._hiddenBy&&"user"!==this._hiddenBy||(null===(i=this._device)||void 0===i?void 0:i.disabled_by)||this._disabledBy&&"user"!==this._disabledBy&&"integration"!==this._disabledBy}
                @change=${this._viewStatusChanged}
              ></ha-radio>
            </mwc-formfield>
            <mwc-formfield
              .label=${this.hass.localize("ui.dialogs.entity_registry.editor.hidden_label")}
            >
              <ha-radio
                name="hiddendisabled"
                value="hidden"
                .checked=${null!==this._hiddenBy}
                .disabled=${this._hiddenBy&&"user"!==this._hiddenBy||Boolean(null===(n=this._device)||void 0===n?void 0:n.disabled_by)||this._disabledBy&&"user"!==this._disabledBy&&"integration"!==this._disabledBy}
                @change=${this._viewStatusChanged}
              ></ha-radio>
            </mwc-formfield>
            <mwc-formfield
              .label=${this.hass.localize("ui.dialogs.entity_registry.editor.disabled_label")}
            >
              <ha-radio
                name="hiddendisabled"
                value="disabled"
                .checked=${null!==this._disabledBy}
                .disabled=${this._hiddenBy&&"user"!==this._hiddenBy||Boolean(null===(s=this._device)||void 0===s?void 0:s.disabled_by)||this._disabledBy&&"user"!==this._disabledBy&&"integration"!==this._disabledBy}
                @change=${this._viewStatusChanged}
              ></ha-radio>
            </mwc-formfield>
          </div>

          ${null!==this._disabledBy?r.dy`
                <div class="secondary">
                  ${this.hass.localize("ui.dialogs.entity_registry.editor.enabled_description")}
                </div>
              `:null!==this._hiddenBy?r.dy`
                <div class="secondary">
                  ${this.hass.localize("ui.dialogs.entity_registry.editor.hidden_description")}
                </div>
              `:""}
          ${this.entry.device_id?r.dy`
                <div class="label">
                  ${this.hass.localize("ui.dialogs.entity_registry.editor.change_area")}:
                </div>
                <ha-area-picker
                  .hass=${this.hass}
                  .value=${this._areaId}
                  .placeholder=${null===(o=this._device)||void 0===o?void 0:o.area_id}
                  .label=${this.hass.localize("ui.dialogs.entity_registry.editor.area")}
                  @value-changed=${this._areaPicked}
                ></ha-area-picker>
                <div class="secondary">
                  ${this.hass.localize("ui.dialogs.entity_registry.editor.area_note")}
                  ${this._device?r.dy`
                        <button class="link" @click=${this._openDeviceSettings}>
                          ${this.hass.localize("ui.dialogs.entity_registry.editor.change_device_area")}
                        </button>
                      `:""}
                </div>
              `:""}
        </ha-expansion-panel>
      </div>
      <div class="buttons">
        <mwc-button
          class="warning"
          @click=${this._confirmDeleteEntry}
          .disabled=${this._submitting||!this._helperConfigEntry&&!(null!=a&&a.attributes.restored)}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.delete")}
        </mwc-button>
        <mwc-button
          @click=${this._updateEntry}
          .disabled=${d||this._submitting}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.update")}
        </mwc-button>
      </div>
    `}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_iconChanged",value:function(e){this._error=void 0,this._icon=e.detail.value}},{kind:"method",key:"_entityIdChanged",value:function(e){this._error=void 0,this._entityId=e.target.value}},{kind:"method",key:"_deviceClassChanged",value:function(e){this._error=void 0,this._deviceClass=e.target.value}},{kind:"method",key:"_unitChanged",value:function(e){this._error=void 0,this._unit_of_measurement=e.target.value}},{kind:"method",key:"_precipitationUnitChanged",value:function(e){this._error=void 0,this._precipitation_unit=e.target.value}},{kind:"method",key:"_pressureUnitChanged",value:function(e){this._error=void 0,this._pressure_unit=e.target.value}},{kind:"method",key:"_temperatureUnitChanged",value:function(e){this._error=void 0,this._temperature_unit=e.target.value}},{kind:"method",key:"_visibilityUnitChanged",value:function(e){this._error=void 0,this._visibility_unit=e.target.value}},{kind:"method",key:"_windSpeedUnitChanged",value:function(e){this._error=void 0,this._wind_speed_unit=e.target.value}},{kind:"method",key:"_switchAsChanged",value:function(e){if(""===e.target.value)return;const t="outlet"===e.target.value?"switch":e.target.value;this._switchAs=t,"outlet"!==e.target.value&&"switch"!==e.target.value||(this._deviceClass=e.target.value)}},{kind:"method",key:"_areaPicked",value:function(e){this._error=void 0,this._areaId=e.detail.value}},{kind:"method",key:"_fetchCameraPrefs",value:async function(){this._cameraPrefs=await(0,k.Xn)(this.hass,this.entry.entity_id)}},{kind:"method",key:"_handleCameraPrefsChanged",value:async function(e){const t=e.currentTarget;try{this._cameraPrefs=await(0,k.Mw)(this.hass,this.entry.entity_id,{preload_stream:t.checked})}catch(e){(0,P.Ys)(this,{text:e.message}),t.checked=!t.checked}}},{kind:"method",key:"_viewStatusChanged",value:function(e){switch(e.target.value){case"enabled":this._disabledBy=null,this._hiddenBy=null;break;case"disabled":this._disabledBy="user",this._hiddenBy=null;break;case"hidden":this._hiddenBy="user",this._disabledBy=null}}},{kind:"method",key:"_openDeviceSettings",value:function(){(0,D.r)(this,{device:this._device,updateEntry:async e=>{await(0,$.t1)(this.hass,this._device.id,e)}})}},{kind:"method",key:"_updateEntry",value:async function(){var e,t,i,r,n,s;this._submitting=!0;const o=this.getRootNode().host,l={name:this._name.trim()||null,icon:this._icon.trim()||null,area_id:this._areaId||null,device_class:this._deviceClass||null,new_entity_id:this._entityId.trim()},c=this.hass.states[this.entry.entity_id],h=(0,v.M)(this.entry.entity_id);this.entry.disabled_by===this._disabledBy||null!==this._disabledBy&&"user"!==this._disabledBy||(l.disabled_by=this._disabledBy),this.entry.hidden_by===this._hiddenBy||null!==this._hiddenBy&&"user"!==this._hiddenBy||(l.hidden_by=this._hiddenBy),"sensor"===h&&(null==c||null===(e=c.attributes)||void 0===e?void 0:e.unit_of_measurement)!==this._unit_of_measurement&&(l.options_domain="sensor",l.options={unit_of_measurement:this._unit_of_measurement}),"weather"!==h||(null==c||null===(t=c.attributes)||void 0===t?void 0:t.precipitation_unit)===this._precipitation_unit&&(null==c||null===(i=c.attributes)||void 0===i?void 0:i.pressure_unit)===this._pressure_unit&&(null==c||null===(r=c.attributes)||void 0===r?void 0:r.temperature_unit)===this._temperature_unit&&(null==c||null===(n=c.attributes)||void 0===n?void 0:n.visbility_unit)===this._visibility_unit&&(null==c||null===(s=c.attributes)||void 0===s?void 0:s.wind_speed_unit)===this._wind_speed_unit||(l.options_domain="weather",l.options={precipitation_unit:this._precipitation_unit,pressure_unit:this._pressure_unit,temperature_unit:this._temperature_unit,visibility_unit:this._visibility_unit,wind_speed_unit:this._wind_speed_unit});try{const e=await(0,d.Nv)(this.hass,this._origEntityId,l);e.require_restart&&(0,P.Ys)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.enabled_restart_confirm")}),e.reload_delay&&(0,P.Ys)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.enabled_delay_confirm","delay",e.reload_delay)}),(0,a.B)(this,"close-dialog")}catch(e){this._error=e.message||"Unknown error"}finally{this._submitting=!1}if("switch"!==this._switchAs){var u;if(!await(0,P.g7)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.switch_as_x_confirm","domain",this._switchAs)}))return;const e=await(0,E.Ky)(this.hass,"switch_as_x"),t=await(0,E.XO)(this.hass,e.flow_id,{entity_id:this._entityId.trim(),target_domain:this._switchAs});if(null===(u=t.result)||void 0===u||!u.entry_id)return;const i=await this.hass.connection.subscribeEvents((()=>{i(),(0,d.hg)(this.hass.connection).then((e=>{const i=e.find((e=>e.config_entry_id===t.result.entry_id));i&&(0,z.R)(o,{entity_id:i.entity_id})}))}),"entity_registry_updated")}}},{kind:"method",key:"_confirmDeleteEntry",value:async function(){if(await(0,P.g7)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")})){this._submitting=!0;try{this._helperConfigEntry?await(0,w.iJ)(this.hass,this._helperConfigEntry.entry_id):await(0,d.z3)(this.hass,this._origEntityId),(0,a.B)(this,"close-dialog")}finally{this._submitting=!1}}}},{kind:"method",key:"_showOptionsFlow",value:async function(){(0,x.c)(this,this._helperConfigEntry,null)}},{kind:"field",key:"_switchAsDomainsSorted",value:()=>(0,f.Z)(((e,t)=>e.map((e=>({domain:e,label:(0,C.Lh)(t,e)}))).sort(((e,t)=>(0,b.$)(e.label,t.label)))))},{kind:"field",key:"_deviceClassesSorted",value:()=>(0,f.Z)(((e,t,i)=>t.map((t=>({deviceClass:t,label:i(`ui.dialogs.entity_registry.editor.device_classes.${e}.${t}`)}))).sort(((e,t)=>(0,b.$)(e.label,t.label)))))},{kind:"get",static:!0,key:"styles",value:function(){return[h.Qx,r.iv`
        :host {
          display: block;
        }
        .container {
          padding: 20px 24px;
        }
        .form {
          margin-bottom: 53px;
        }
        .buttons {
          position: absolute;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
          display: flex;
          justify-content: space-between;
          padding: 8px;
          padding-bottom: max(env(safe-area-inset-bottom), 8px);
          background-color: var(--mdc-theme-surface, #fff);
        }
        ha-select {
          width: 100%;
          margin: 8px 0;
        }
        ha-switch {
          margin-right: 16px;
        }
        ha-settings-row {
          padding: 0;
        }
        ha-settings-row ha-switch {
          margin-right: 0;
        }
        ha-textfield {
          display: block;
          margin: 8px 0;
        }
        ha-area-picker {
          margin: 8px 0;
          display: block;
        }
        .row {
          margin: 8px 0;
          color: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        .label {
          margin-top: 16px;
        }
        .secondary {
          margin: 8px 0;
          width: 340px;
        }
        li[divider] {
          border-bottom-color: var(--divider-color);
        }
      `]}}]}}),(0,S.f)(r.oi));function N(){N=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!X(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?J(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=Y(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:G(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=G(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function q(e){var t,i=Y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function K(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function X(e){return e.decorators&&e.decorators.length}function Z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function G(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function Y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}let Q=function(e,t,i,r){var n=N();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var o=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=t.find(i)))if(Z(s.descriptor)||Z(n.descriptor)){if(X(s)||X(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(X(s)){if(X(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}K(s,n)}else t.push(s)}return t}(o.d.map(q)),e);return n.initializeClassElements(o.F,a.elements),n.runClassFinishers(o.F,a.finishers)}([(0,n.Mo)("dialog-entity-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_entry",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_curTab",value:()=>"tab-settings"},{kind:"field",decorators:[(0,n.SB)()],key:"_extraTabs",value:()=>({})},{kind:"field",decorators:[(0,n.SB)()],key:"_settingsElementTag",value:void 0},{kind:"field",key:"_curTabIndex",value:()=>0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._entry=void 0,this._settingsElementTag=void 0,this._extraTabs={},this._getEntityReg()}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,a.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params||void 0===this._entry)return r.dy``;const e=this._params.entity_id,t=this._entry,i=this.hass.states[e];return r.dy`
      <ha-dialog
        open
        .heading=${i?(0,l.C)(i):(null==t?void 0:t.name)||e}
        hideActions
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              .label=${this.hass.localize("ui.dialogs.entity_registry.dismiss")}
              .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
              dialogAction="cancel"
            ></ha-icon-button>
            <span slot="title">
              ${i?(0,l.C)(i):(null==t?void 0:t.name)||e}
            </span>
            ${i?r.dy`
                  <ha-icon-button
                    slot="actionItems"
                    .label=${this.hass.localize("ui.dialogs.entity_registry.control")}
                    .path=${"M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"}
                    @click=${this._openMoreInfo}
                  ></ha-icon-button>
                `:""}
          </ha-header-bar>
          <mwc-tab-bar
            .activeIndex=${this._curTabIndex}
            @MDCTabBar:activated=${this._handleTabActivated}
            @MDCTab:interacted=${this._handleTabInteracted}
          >
            <mwc-tab
              id="tab-settings"
              .label=${this.hass.localize("ui.dialogs.entity_registry.settings")}
              dialogInitialFocus
            >
            </mwc-tab>
            ${Object.entries(this._extraTabs).map((([e,t])=>r.dy`
                <mwc-tab
                  id=${e}
                  .label=${this.hass.localize(t.translationKey)||e}
                >
                </mwc-tab>
              `))}
            <mwc-tab
              id="tab-related"
              .label=${this.hass.localize("ui.dialogs.entity_registry.related")}
            >
            </mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="wrapper">${(0,s.F)(this._renderTab())}</div>
      </ha-dialog>
    `}},{kind:"method",key:"_renderTab",value:function(){switch(this._curTab){case"tab-settings":return this._entry?this._settingsElementTag?r.dy`
              ${(0,o.h)(this._settingsElementTag,{hass:this.hass,entry:this._entry,entityId:this._params.entity_id})}
            `:r.dy``:r.dy`
          <div class="content">
            ${this.hass.localize("ui.dialogs.entity_registry.no_unique_id","entity_id",this._params.entity_id,"faq_link",r.dy`<a
                href=${(0,u.R)(this.hass,"/faq/unique_id")}
                target="_blank"
                rel="noreferrer"
                >${this.hass.localize("ui.dialogs.entity_registry.faq")}</a
              >`)}
          </div>
        `;case"tab-related":return r.dy`
          <ha-related-items
            class="content"
            .hass=${this.hass}
            .itemId=${this._params.entity_id}
            itemType="entity"
          ></ha-related-items>
        `;default:return r.dy``}}},{kind:"method",key:"_getEntityReg",value:async function(){try{this._entry=await(0,d.L3)(this.hass,this._params.entity_id),this._loadPlatformSettingTabs()}catch{this._entry=null}}},{kind:"method",key:"_handleTabActivated",value:function(e){this._curTabIndex=e.detail.index}},{kind:"method",key:"_handleTabInteracted",value:function(e){this._curTab=e.detail.tabId}},{kind:"method",key:"_loadPlatformSettingTabs",value:async function(){if(!this._entry)return;if(!Object.keys(p).includes(this._entry.platform))return void(this._settingsElementTag="entity-registry-settings");const e=p[this._entry.platform];await i(86853)(`./${e}`),this._settingsElementTag=e}},{kind:"method",key:"_openMoreInfo",value:function(){(0,c.ku)(this),(0,a.B)(this,"hass-more-info",{entityId:this._params.entity_id}),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[h.yu,r.iv`
        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
        }

        mwc-tab-bar {
          border-bottom: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-dialog {
          --dialog-content-position: static;
          --dialog-content-padding: 0;
          --dialog-z-index: 6;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .wrapper {
            min-width: 400px;
          }
        }

        .content {
          display: block;
          padding: 20px 24px;
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
          }
        }

        mwc-button.warning {
          --mdc-theme-primary: var(--error-color);
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      `]}}]}}),r.oi)},27322:(e,t,i)=>{"use strict";i.d(t,{R:()=>r});const r=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`},86853:(e,t,i)=>{var r={"./entity-settings-helper-tab":[85511,41985,51644,49842,1548,49075,8167,12545,13701,31683,18393],"./entity-settings-helper-tab.ts":[85511,41985,51644,49842,1548,49075,8167,12545,13701,31683,18393]};function n(e){if(!i.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(1).map(i.e)).then((()=>i(n)))}n.keys=()=>Object.keys(r),n.id=86853,e.exports=n}}]);
//# sourceMappingURL=92e42f34.js.map