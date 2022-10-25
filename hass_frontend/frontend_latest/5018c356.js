/*! For license information please see 5018c356.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[28922],{89194:(e,t,i)=>{i(48175),i(65660),i(70019);var r=i(9672),o=i(50856);(0,r.k)({_template:o.d`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},63864:(e,t,i)=>{i.d(t,{I:()=>r});const r=(e,t,i,r)=>{const[o,n,s]=e.split(".",3);return Number(o)>t||Number(o)===t&&(void 0===r?Number(n)>=i:Number(n)>i)||void 0!==r&&Number(o)===t&&Number(n)===i&&Number(s)>=r}},44583:(e,t,i)=>{i.a(e,(async e=>{i.d(t,{o0:()=>s,yD:()=>l,E8:()=>d});var r=i(14516),o=i(54121),n=i(65810);o.Xp&&await o.Xp;const s=(e,t)=>a(t).format(e),a=(0,r.Z)((e=>new Intl.DateTimeFormat("en"!==e.language||(0,n.y)(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:(0,n.y)(e)?"numeric":"2-digit",minute:"2-digit",hour12:(0,n.y)(e)}))),l=(e,t)=>c(t).format(e),c=(0,r.Z)((e=>new Intl.DateTimeFormat("en"!==e.language||(0,n.y)(e)?e.language:"en-u-hc-h23",{month:"short",day:"numeric",hour:(0,n.y)(e)?"numeric":"2-digit",minute:"2-digit",hour12:(0,n.y)(e)}))),d=(e,t)=>h(t).format(e),h=(0,r.Z)((e=>new Intl.DateTimeFormat("en"!==e.language||(0,n.y)(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:(0,n.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:(0,n.y)(e)})));(0,r.Z)((e=>new Intl.DateTimeFormat("en"!==e.language||(0,n.y)(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:(0,n.y)(e)})));e()}),1)},65810:(e,t,i)=>{i.d(t,{y:()=>n});var r=i(14516),o=i(66477);const n=(0,r.Z)((e=>{if(e.time_format===o.zt.language||e.time_format===o.zt.system){const t=e.time_format===o.zt.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===o.zt.am_pm}))},50577:(e,t,i)=>{i.d(t,{v:()=>r});const r=async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},60893:(e,t,i)=>{i.d(t,{T:()=>r});const r=(e,t,i)=>{let r;const o=async()=>{try{await t(e)}finally{r=setTimeout((()=>o()),i)}};return o(),()=>clearTimeout(r)}},34821:(e,t,i)=>{i.d(t,{i:()=>g});var r=i(41085),o=i(91632),n=i(37500),s=i(33310),a=i(74265);i(10983);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!h(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function y(e,t,i){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},y(e,t,i||e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}const g=(e,t)=>n.dy`
  <div class="header_title">${t}</div>
  <ha-icon-button
    .label=${e.localize("ui.dialogs.generic.close")}
    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
    dialogAction="close"
    class="header_button"
  ></ha-icon-button>
`;!function(e,t,i,r){var o=l();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(u(n.descriptor)||u(o.descriptor)){if(h(n)||h(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(h(n)){if(h(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}d(n,o)}else t.push(n)}return t}(s.d.map(c)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,s.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:a.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return n.dy`<slot name="heading"> ${y(v(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"field",static:!0,key:"styles",value:()=>[o.W,n.iv`
      .mdc-dialog {
        --mdc-dialog-scroll-divider-color: var(--divider-color);
        z-index: var(--dialog-z-index, 7);
        -webkit-backdrop-filter: var(--dialog-backdrop-filter, none);
        backdrop-filter: var(--dialog-backdrop-filter, none);
        --mdc-dialog-box-shadow: var(--dialog-box-shadow, none);
        --mdc-typography-headline6-font-weight: 400;
        --mdc-typography-headline6-font-size: 1.574rem;
      }
      .mdc-dialog__actions {
        justify-content: var(--justify-action-buttons, flex-end);
        padding-bottom: max(env(safe-area-inset-bottom), 24px);
      }
      .mdc-dialog__actions span:nth-child(1) {
        flex: var(--secondary-action-button-flex, unset);
      }
      .mdc-dialog__actions span:nth-child(2) {
        flex: var(--primary-action-button-flex, unset);
      }
      .mdc-dialog__container {
        align-items: var(--vertical-align-dialog, center);
      }
      .mdc-dialog__title {
        padding: 24px 24px 0 24px;
      }
      .mdc-dialog__actions {
        padding: 0 24px 24px 24px;
      }
      .mdc-dialog__title::before {
        display: block;
        height: 0px;
      }
      .mdc-dialog .mdc-dialog__content {
        position: var(--dialog-content-position, relative);
        padding: var(--dialog-content-padding, 24px);
      }
      :host([hideactions]) .mdc-dialog .mdc-dialog__content {
        padding-bottom: max(
          var(--dialog-content-padding, 24px),
          env(safe-area-inset-bottom)
        );
      }
      .mdc-dialog .mdc-dialog__surface {
        position: var(--dialog-surface-position, relative);
        top: var(--dialog-surface-top);
        margin-top: var(--dialog-surface-margin-top);
        min-height: var(--mdc-dialog-min-height, auto);
        border-radius: var(--ha-dialog-border-radius, 28px);
      }
      :host([flexContent]) .mdc-dialog .mdc-dialog__content {
        display: flex;
        flex-direction: column;
      }
      .header_button {
        position: absolute;
        right: 16px;
        top: 14px;
        text-decoration: none;
        color: inherit;
      }
      .header_title {
        margin-right: 32px;
        margin-inline-end: 32px;
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
    `]}]}}),r.M)},41682:(e,t,i)=>{i.d(t,{rY:()=>o,js:()=>n,yz:()=>a,yd:()=>l});var r=i(63864);const o=e=>e.data,n=e=>"object"==typeof e?"object"==typeof e.body?e.body.message||"Unknown error, see supervisor logs":e.body||e.message||"Unknown error, see supervisor logs":e,s=new Set([502,503,504]),a=e=>!!(e&&e.status_code&&s.has(e.status_code))||!(!e||!e.message||!e.message.includes("ERR_CONNECTION_CLOSED")&&!e.message.includes("ERR_CONNECTION_RESET")),l=async(e,t)=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:`/${t}/stats`,method:"get"}):o(await e.callApi("GET",`hassio/${t}/stats`))},28257:(e,t,i)=>{i.d(t,{p:()=>n});var r=i(63864),o=i(41682);const n=async e=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/resolution/info",method:"get"}):(0,o.rY)(await e.callApi("GET","hassio/resolution/info"))},56799:(e,t,i)=>{i.d(t,{V:()=>r});const r=(e,t)=>{let i={};const r=e.connection.subscribeMessage((e=>{if("initial"===e.type)return i=e.data,void t(i);"finish"!==e.type?(i={...i,[e.domain]:{...i[e.domain],info:{...i[e.domain].info,[e.key]:e.success?e.data:{error:!0,value:e.error.msg}}}},t(i)):r.then((e=>e()))}),{type:"system_health/info"});return r}},26765:(e,t,i)=>{i.d(t,{Ys:()=>s,g7:()=>a,D9:()=>l});var r=i(47181);const o=()=>Promise.all([i.e(85084),i.e(1281)]).then(i.bind(i,1281)),n=(e,t,i)=>new Promise((n=>{const s=t.cancel,a=t.confirm;(0,r.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:o,dialogParams:{...t,...i,cancel:()=>{n(!(null==i||!i.prompt)&&null),s&&s()},confirm:e=>{n(null==i||!i.prompt||e),a&&a(e)}}})})),s=(e,t)=>n(e,t),a=(e,t)=>n(e,t,{confirmation:!0}),l=(e,t)=>n(e,t,{prompt:!0})},49426:(e,t,i)=>{i.a(e,(async e=>{i.r(t),i.d(t,{UNSUPPORTED_REASON_URL:()=>P,UNHEALTHY_REASON_URL:()=>T});i(51187);var r=i(37500),o=i(33310),n=i(7323),s=i(44583),a=i(47181),l=i(50577),c=i(60893),d=(i(9381),i(22098),i(34821)),h=(i(2130),i(41682)),u=i(28257),p=i(5986),f=i(56799),m=i(26765),y=i(11654),v=i(27322),g=i(81796),b=(i(31206),e([s]));function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!E(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=S(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:$(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=$(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function k(e){var t,i=S(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function _(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function E(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function $(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function S(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}s=(b.then?await b:b)[0];const z=(e,t)=>"homeassistant"===e?-1:"homeassistant"===t?1:e<t?-1:t<e?1:0,P={},T={privileged:"/more-info/unsupported/privileged"};!function(e,t,i,r){var o=w();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(x(n.descriptor)||x(o.descriptor)){if(E(n)||E(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(E(n)){if(E(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}_(n,o)}else t.push(n)}return t}(s.d.map(k)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("dialog-system-information")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_systemInfo",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_resolutionInfo",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_supervisorStats",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_coreStats",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:()=>!1},{kind:"field",key:"_subscriptions",value:void 0},{kind:"method",key:"showDialog",value:function(){this._opened=!0,this.hass.loadBackendTranslation("system_health"),this._subscribe()}},{kind:"method",key:"closeDialog",value:function(){this._opened=!1,this._unsubscribe(),(0,a.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"_subscribe",value:function(){const e=[];(0,n.p)(this.hass,"system_health")&&e.push((0,f.V)(this.hass,(e=>{this._systemInfo=e}))),(0,n.p)(this.hass,"hassio")&&(e.push((0,c.T)(this.hass,(async()=>{this._supervisorStats=await(0,h.yd)(this.hass,"supervisor"),this._coreStats=await(0,h.yd)(this.hass,"core")}),1e4)),(0,u.p)(this.hass).then((e=>{this._resolutionInfo=e}))),this._subscriptions=e}},{kind:"method",key:"_unsubscribe",value:function(){for(;null!==(e=this._subscriptions)&&void 0!==e&&e.length;){var e;const t=this._subscriptions.pop();t instanceof Promise?t.then((e=>e())):t()}this._subscriptions=void 0,this._systemInfo=void 0,this._resolutionInfo=void 0,this._coreStats=void 0,this._supervisorStats=void 0}},{kind:"method",key:"render",value:function(){if(!this._opened)return r.dy``;const e=this._getSections();return r.dy`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        scrimClickAction
        escapeKeyAction
        .heading=${(0,d.i)(this.hass,this.hass.localize("ui.panel.config.repairs.system_information"))}
      >
        <div>
          ${this._resolutionInfo?r.dy`${this._resolutionInfo.unhealthy.length?r.dy`<ha-alert alert-type="error">
                    ${this.hass.localize("ui.dialogs.unhealthy.title")}
                    <mwc-button
                      slot="action"
                      .label=${this.hass.localize("ui.panel.config.common.learn_more")}
                      @click=${this._unhealthyDialog}
                    >
                    </mwc-button
                  ></ha-alert>`:""}
              ${this._resolutionInfo.unsupported.length?r.dy`<ha-alert alert-type="warning">
                    ${this.hass.localize("ui.dialogs.unsupported.title")}
                    <mwc-button
                      slot="action"
                      .label=${this.hass.localize("ui.panel.config.common.learn_more")}
                      @click=${this._unsupportedDialog}
                    >
                    </mwc-button>
                  </ha-alert>`:""} `:""}

          <div>${e}</div>

          ${this._coreStats||this._supervisorStats?r.dy`
                <div>
                  ${this._coreStats?r.dy`
                        <h3>
                          ${this.hass.localize("ui.panel.config.system_health.core_stats")}
                        </h3>
                        <ha-metric
                          .heading=${this.hass.localize("ui.panel.config.system_health.cpu_usage")}
                          .value=${this._coreStats.cpu_percent}
                        ></ha-metric>
                        <ha-metric
                          .heading=${this.hass.localize("ui.panel.config.system_health.ram_usage")}
                          .value=${this._coreStats.memory_percent}
                        ></ha-metric>
                      `:""}
                  ${this._supervisorStats?r.dy`
                        <h3>
                          ${this.hass.localize("ui.panel.config.system_health.supervisor_stats")}
                        </h3>
                        <ha-metric
                          .heading=${this.hass.localize("ui.panel.config.system_health.cpu_usage")}
                          .value=${this._supervisorStats.cpu_percent}
                        ></ha-metric>
                        <ha-metric
                          .heading=${this.hass.localize("ui.panel.config.system_health.ram_usage")}
                          .value=${this._supervisorStats.memory_percent}
                        ></ha-metric>
                      `:""}
                </div>
              `:""}
        </div>
        <mwc-button
          slot="primaryAction"
          .label=${this.hass.localize("ui.panel.config.repairs.copy")}
          @click=${this._copyInfo}
        ></mwc-button>
      </ha-dialog>
    `}},{kind:"method",key:"_unsupportedDialog",value:async function(){await(0,m.Ys)(this,{title:this.hass.localize("ui.dialogs.unsupported.title"),text:r.dy`${this.hass.localize("ui.dialogs.unsupported.description")}
        <br /><br />
        <ul>
          ${this._resolutionInfo.unsupported.map((e=>r.dy`
              <li>
                <a
                  href=${(0,v.R)(this.hass,P[e]||`/more-info/unsupported/${e}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  ${this.hass.localize(`ui.dialogs.unsupported.reason.${e}`)||e}
                </a>
              </li>
            `))}
        </ul>`})}},{kind:"method",key:"_unhealthyDialog",value:async function(){await(0,m.Ys)(this,{title:this.hass.localize("ui.dialogs.unhealthy.title"),text:r.dy`${this.hass.localize("ui.dialogs.unhealthy.description")}
        <br /><br />
        <ul>
          ${this._resolutionInfo.unhealthy.map((e=>r.dy`
              <li>
                <a
                  href=${(0,v.R)(this.hass,T[e]||`/more-info/unhealthy/${e}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  ${this.hass.localize(`ui.dialogs.unhealthy.reason.${e}`)||e}
                </a>
              </li>
            `))}
        </ul>`})}},{kind:"method",key:"_getSections",value:function(){const e=[];if(this._systemInfo){const t=Object.keys(this._systemInfo).sort(z);for(const i of t){const t=this._systemInfo[i],o=[];for(const e of Object.keys(t.info)){let n;if(t.info[e]&&"object"==typeof t.info[e]){const i=t.info[e];"pending"===i.type?n=r.dy`
                <ha-circular-progress active size="tiny"></ha-circular-progress>
              `:"failed"===i.type?n=r.dy`
                <span class="error">${i.error}</span>${i.more_info?r.dy`
                      –
                      <a
                        href=${i.more_info}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        ${this.hass.localize("ui.panel.config.info.system_health.more_info")}
                      </a>
                    `:""}
              `:"date"===i.type&&(n=(0,s.o0)(new Date(i.value),this.hass.locale))}else n=t.info[e];o.push(r.dy`
            <tr>
              <td>
                ${this.hass.localize(`component.${i}.system_health.info.${e}`)||e}
              </td>
              <td>${n}</td>
            </tr>
          `)}"homeassistant"!==i&&e.push(r.dy`
              <div class="card-header">
                <h3>${(0,p.Lh)(this.hass.localize,i)}</h3>
                ${t.manage_url?r.dy`
                      <a class="manage" href=${t.manage_url}>
                        <mwc-button>
                          ${this.hass.localize("ui.panel.config.info.system_health.manage")}
                        </mwc-button>
                      </a>
                    `:""}
              </div>
            `),e.push(r.dy`
          <table>
            ${o}
          </table>
        `)}}else e.push(r.dy`
          <div class="loading-container">
            <ha-circular-progress active></ha-circular-progress>
          </div>
        `);return e}},{kind:"method",key:"_copyInfo",value:async function(){let e;const t=[];for(const i of Object.keys(this._systemInfo).sort(z)){const r=this._systemInfo[i];let o=!0;const n=[""+("homeassistant"!==i?`<details><summary>${(0,p.Lh)(this.hass.localize,i)}</summary>\n`:"")];for(const e of Object.keys(r.info)){let t;if(r.info[e]&&"object"==typeof r.info[e]){const i=r.info[e];"pending"===i.type?t="pending":"failed"===i.type?t=`failed to load: ${i.error}`:"date"===i.type&&(t=(0,s.o0)(new Date(i.value),this.hass.locale))}else t=r.info[e];o?(n.push(`${e} | ${t}\n-- | --`),o=!1):n.push(`${e} | ${t}`)}"homeassistant"===i?e=n.join("\n"):(t.push(n.join("\n")),"homeassistant"!==i&&t.push("</details>"))}await(0,l.v)(`## System Information\n${e}\n\n${t.join("\n\n")}`),(0,g.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")})}},{kind:"field",static:!0,key:"styles",value:()=>[y.yu,r.iv`
      ha-alert {
        margin-bottom: 16px;
        display: block;
      }
      table {
        width: 100%;
      }

      td:first-child {
        width: 45%;
      }

      td:last-child {
        direction: ltr;
      }

      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-header {
        justify-content: space-between;
        display: flex;
        align-items: center;
      }

      .error {
        color: var(--error-color);
      }

      a.manage {
        text-decoration: none;
      }
    `]}]}}),r.oi)}))}}]);
//# sourceMappingURL=5018c356.js.map