"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[79685],{78866:(e,t,i)=>{i.d(t,{D:()=>f});var r=i(37500),n=i(81582),o=i(5986),a=i(75580),s=i(2852),l=i(26765),d=i(70332),c=i(27322),p=i(7323),h=i(83849);const f=async(e,t,i,f)=>{if(null!=f&&f.domain){const e=await t.loadBackendTranslation("title",f.domain);f.domain=(0,o.Lh)(e,f.domain)}if(null!=f&&f.brand){var u;const e=await(0,a.G)(t);f.brand=(null===(u=e.core.integration[f.brand])||void 0===u?void 0:u.name)||f.brand}if("zwave_js"===i){const o=await(0,n.pB)(t,{domain:i});if(!(0,p.p)(t,"zwave_js")||!o.length)return void(0,l.g7)(e,{title:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Z-Wave"}),text:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Z-Wave",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Z-Wave",supported_hardware_link:r.dy`<a
              href=${(0,c.R)(t,"/docs/z-wave/controllers")}
              target="_blank"
              rel="noreferrer"
              >${t.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a
            >`}),confirmText:t.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zwave_js"})}});(0,d.B)(e,{entry_id:o[0].entry_id})}else if("zha"===i){const o=await(0,n.pB)(t,{domain:i});if(!(0,p.p)(t,"zha")||!o.length)return void(0,l.g7)(e,{title:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Zigbee"}),text:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Zigbee",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Z-Wave",supported_hardware_link:r.dy`<a
              href=${(0,c.R)(t,"/integrations/zha/#known-working-zigbee-radio-modules")}
              target="_blank"
              rel="noreferrer"
              >${t.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a
            >`}),confirmText:t.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zha"})}});(0,h.c)("/config/zha/add")}}},86977:(e,t,i)=>{i.d(t,{Q:()=>r});const r=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},34821:(e,t,i)=>{i.d(t,{i:()=>y});var r=i(41085),n=i(91632),o=i(37500),a=i(33310),s=i(74265);i(10983);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!p(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=u(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:f(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=f(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function d(e){var t,i=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function g(e,t,i){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},g(e,t,i||e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}const y=(e,t)=>o.dy`
  <div class="header_title">${t}</div>
  <ha-icon-button
    .label=${e.localize("ui.dialogs.generic.close")}
    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
    dialogAction="close"
    class="header_button"
  ></ha-icon-button>
`;!function(e,t,i,r){var n=l();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(h(o.descriptor)||h(n.descriptor)){if(p(o)||p(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(p(o)){if(p(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else t.push(o)}return t}(a.d.map(d)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,a.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:s.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return o.dy`<slot name="heading"> ${g(v(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,o.iv`
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
    `]}]}}),r.M)},17623:(e,t,i)=>{var r=i(37500),n=i(33310);i(10983);function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=p(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function a(e){var t,i=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function f(e,t,i){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},f(e,t,i||e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}const m="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";!function(e,t,i,r){var n=o();if(r)for(var c=0;c<r.length;c++)n=r[c](n);var p=t((function(e){n.initializeInstanceElements(e,h.elements)}),i),h=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(d(o.descriptor)||d(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(p.d.map(a)),e);n.initializeClassElements(p.F,h.elements),n.runClassFinishers(p.F,h.finishers)}([(0,n.Mo)("ha-icon-button-prev")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_icon",value:()=>m},{kind:"method",key:"connectedCallback",value:function(){f(u(i.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?m:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}),100)}},{kind:"method",key:"render",value:function(){var e;return r.dy`
      <ha-icon-button
        .disabled=${this.disabled}
        .label=${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))||"Back"}
        .path=${this._icon}
      ></ha-icon-button>
    `}}]}}),r.oi)},73728:(e,t,i)=>{i.d(t,{pV:()=>a,P3:()=>s,Ky:()=>d,D4:()=>c,XO:()=>p,zO:()=>h,oi:()=>f,d4:()=>u,D7:()=>m,ZJ:()=>v,V3:()=>y,WW:()=>w});var r=i(97330),n=i(38346),o=i(5986);const a=32143==i.j?["bluetooth","dhcp","discovery","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"]:null,s=32143==i.j?["reauth"]:null,l={"HA-Frontend-Base":`${location.protocol}//${location.host}`},d=(e,t)=>{var i;return e.callApi("POST","config/config_entries/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)},l)},c=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`,void 0,l),p=(e,t,i)=>e.callApi("POST",`config/config_entries/flow/${t}`,i,l),h=(e,t,i)=>e.callWS({type:"config_entries/ignore_flow",flow_id:t,title:i}),f=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),u=(e,t)=>e.callApi("GET","config/config_entries/flow_handlers"+(t?`?type=${t}`:"")),m=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),g=(e,t)=>e.subscribeEvents((0,n.D)((()=>m(e).then((e=>t.setState(e,!0)))),500,!0),"config_entry_discovered"),v=e=>(0,r._)(e,"_configFlowProgress",m,g),y=(e,t)=>v(e.connection).subscribe(t),w=(e,t)=>t.context.title_placeholders&&0!==Object.keys(t.context.title_placeholders).length?e(`component.${t.handler}.config.flow_title`,t.context.title_placeholders)||("name"in t.context.title_placeholders?t.context.title_placeholders.name:(0,o.Lh)(e,t.handler)):(0,o.Lh)(e,t.handler)},75580:(e,t,i)=>{i.d(t,{G:()=>r,p:()=>n});const r=e=>e.callWS({type:"integration/descriptions"}),n=(e,t)=>{if(e){if(t in e){const i=e[t];if("integration_type"in i)return i}for(const i of Object.values(e))if("integrations"in i&&i.integrations&&t in i.integrations)return i.integrations[t]}}},2852:(e,t,i)=>{i.d(t,{t:()=>s});var r=i(37500),n=i(73728),o=i(5986),a=i(52871);const s=(e,t)=>(0,a.w)(e,t,{loadDevicesAndAreas:!0,createFlow:async(e,t)=>{const[i]=await Promise.all([(0,n.Ky)(e,t),e.loadBackendTranslation("config",t),e.loadBackendTranslation("title",t)]);return i},fetchFlow:async(e,t)=>{const i=await(0,n.D4)(e,t);return await e.loadBackendTranslation("config",i.handler),i},handleFlowStep:n.XO,deleteFlow:n.oi,renderAbortDescription(e,t){const i=e.localize(`component.${t.handler}.config.abort.${t.reason}`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""},renderShowFormStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderShowFormStepDescription(e,t){const i=e.localize(`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""},renderShowFormStepFieldLabel:(e,t,i)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.data.${i.name}`),renderShowFormStepFieldHelper(e,t,i){const n=e.localize(`component.${t.handler}.config.step.${t.step_id}.data_description.${i.name}`,t.description_placeholders);return n?r.dy`<ha-markdown breaks .content=${n}></ha-markdown>`:""},renderShowFormStepFieldError:(e,t,i)=>e.localize(`component.${t.handler}.config.error.${i}`,t.description_placeholders),renderExternalStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,t){const i=e.localize(`component.${t.handler}.config.${t.step_id}.description`,t.description_placeholders);return r.dy`
        <p>
          ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${i?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""}
      `},renderCreateEntryDescription(e,t){const i=e.localize(`component.${t.handler}.config.create_entry.${t.description||"default"}`,t.description_placeholders);return r.dy`
        ${i?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""}
        <p>
          ${e.localize("ui.panel.config.integrations.config_flow.created_config","name",t.title)}
        </p>
      `},renderShowFormProgressHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderShowFormProgressDescription(e,t){const i=e.localize(`component.${t.handler}.config.progress.${t.progress_action}`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""},renderMenuHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderMenuDescription(e,t){const i=e.localize(`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""},renderMenuOption:(e,t,i)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.menu_options.${i}`,t.description_placeholders),renderLoadingDescription(e,t,i,r){if("loading_flow"!==t&&"loading_step"!==t)return"";const n=(null==r?void 0:r.handler)||i;return e.localize(`ui.panel.config.integrations.config_flow.loading.${t}`,{integration:n?(0,o.Lh)(e.localize,n):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},52871:(e,t,i)=>{i.d(t,{w:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(88278),i.e(6294),i.e(41985),i.e(85084),i.e(78874),i.e(45507),i.e(49842),i.e(51644),i.e(1548),i.e(49075),i.e(82789),i.e(77135),i.e(77576),i.e(12545),i.e(26272),i.e(13701),i.e(29925),i.e(4940),i.e(68101),i.e(48536)]).then(i.bind(i,93990)),o=(e,t,i)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:n,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}},79685:(e,t,i)=>{i.r(t);i(51187),i(24103);var r=i(81480),n=i(37500),o=i(33310),a=i(70483),s=i(14516),l=i(7323),d=i(47181),c=i(78866),p=i(83849),h=i(85415),f=i(34821),u=(i(17623),i(65040),i(73728)),m=i(5986),g=i(75580),v=i(2852),y=i(26765),w=i(11654),k=i(86977),b=i(11254),_=i(61092),E=i(96762),x=i(8636);function P(){P=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!D(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=S(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:C(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=C(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function z(e){var t,i=S(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function $(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function C(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function S(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=P();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(A(o.descriptor)||A(n.descriptor)){if(D(o)||D(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(D(o)){if(D(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}$(o,n)}else t.push(o)}return t}(a.d.map(z)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-integration-list-item")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"integration",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String,reflect:!0})],key:"graphic",value:()=>"medium"},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hasMeta",value:()=>!0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"brand",value:()=>!1},{kind:"method",key:"renderSingleLine",value:function(){return this.integration?n.dy`${this.integration.name||(0,m.Lh)(this.hass.localize,this.integration.domain)}
    ${this.integration.is_helper?" (helper)":""}`:n.dy``}},{kind:"method",key:"renderGraphic",value:function(){var e;if(!this.integration)return n.dy``;const t={multi:this.multipleGraphics};return n.dy` <span
      class="mdc-deprecated-list-item__graphic material-icons ${(0,x.$)(t)}"
    >
      <img
        loading="lazy"
        src=${(0,b.X1)({domain:this.integration.domain,type:"icon",useFallback:!0,darkOptimized:null===(e=this.hass.themes)||void 0===e?void 0:e.darkMode,brand:this.brand})}
        referrerpolicy="no-referrer"
      />
    </span>`}},{kind:"method",key:"renderMeta",value:function(){return this.integration?n.dy`<span class="mdc-deprecated-list-item__meta material-icons">
      ${this.integration.cloud?n.dy`<span
            ><ha-svg-icon .path=${"M19,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10H6.71C7.37,7.69 9.5,6 12,6A5.5,5.5 0 0,1 17.5,11.5V12H19A3,3 0 0,1 22,15A3,3 0 0,1 19,18M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"}></ha-svg-icon
            ><paper-tooltip animation-delay="0" position="left"
              >${this.hass.localize("ui.panel.config.integrations.config_entry.depends_on_cloud")}</paper-tooltip
            ></span
          >`:""}
      ${this.integration.is_built_in?"":n.dy`<span
            ><ha-svg-icon .path=${"M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"}></ha-svg-icon
            ><paper-tooltip animation-delay="0" position="left"
              >${this.hass.localize("ui.panel.config.integrations.config_entry.provided_by_custom_integration")}</paper-tooltip
            ></span
          >`}
      ${this.integration.config_flow||this.integration.integrations||this.integration.iot_standards?n.dy`<ha-icon-next></ha-icon-next>`:n.dy`<span
            ><paper-tooltip animation-delay="0" position="left"
              >${this.hass.localize("ui.panel.config.integrations.config_entry.yaml_only")}</paper-tooltip
            ><ha-svg-icon
              .path=${"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}
              class="open-in-new"
            ></ha-svg-icon
          ></span>`}
    </span>`:n.dy``}},{kind:"get",static:!0,key:"styles",value:function(){return[E.W,n.iv`
        :host {
          --mdc-list-side-padding: 24px;
          --mdc-list-item-graphic-size: 40px;
        }
        :host([graphic="avatar"]:not([twoLine])),
        :host([graphic="icon"]:not([twoLine])) {
          height: 48px;
        }
        span.material-icons:first-of-type {
          margin-inline-start: 0px !important;
          margin-inline-end: var(
            --mdc-list-item-graphic-margin,
            16px
          ) !important;
          direction: var(--direction);
        }
        span.material-icons:last-of-type {
          margin-inline-start: auto !important;
          margin-inline-end: 0px !important;
          direction: var(--direction);
        }
        img {
          width: 40px;
          height: 40px;
        }
        .mdc-deprecated-list-item__meta {
          width: auto;
          white-space: nowrap;
        }
        .mdc-deprecated-list-item__meta > * {
          margin-right: 8px;
        }
        .mdc-deprecated-list-item__meta > *:last-child {
          margin-right: 0px;
        }
        ha-icon-next {
          margin-right: 8px;
        }
        .open-in-new {
          --mdc-icon-size: 22px;
          padding: 1px;
        }
      `]}}]}}),_.K);var O=i(72160);function j(){j=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!B(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?H(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=R(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:M(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=M(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function F(e){var t,i=R(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function L(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function I(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function M(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function R(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const V={zigbee:"zha",zwave:"zwave_js"};!function(e,t,i,r){var n=j();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(I(o.descriptor)||I(n.descriptor)){if(B(o)||B(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(B(o)){if(B(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}L(o,n)}else t.push(o)}return t}(a.d.map(F)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-domain-integrations")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"integration",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"flowsInProgress",value:void 0},{kind:"method",key:"render",value:function(){var e,t,i,r,o;return n.dy`<mwc-list>
      ${null!==(e=this.flowsInProgress)&&void 0!==e&&e.length?n.dy`<h3>
              ${this.hass.localize("ui.panel.config.integrations.discovered")}
            </h3>
            ${this.flowsInProgress.map((e=>{var t;return n.dy`<mwc-list-item
                graphic="medium"
                .flow=${e}
                @request-selected=${this._flowInProgressPicked}
                hasMeta
              >
                <img
                  slot="graphic"
                  loading="lazy"
                  src=${(0,b.X1)({domain:e.handler,type:"icon",useFallback:!0,darkOptimized:null===(t=this.hass.themes)||void 0===t?void 0:t.darkMode})}
                  referrerpolicy="no-referrer"
                />
                <span
                  >${(0,u.WW)(this.hass.localize,e)}</span
                >
                <ha-icon-next slot="meta"></ha-icon-next>
              </mwc-list-item>`}))}
            <li divider role="separator"></li>
            ${this.integration&&"integrations"in this.integration&&this.integration.integrations?n.dy`<h3>
                  ${this.hass.localize("ui.panel.config.integrations.available_integrations")}
                </h3>`:""}`:""}
      ${null!==(t=this.integration)&&void 0!==t&&t.iot_standards?this.integration.iot_standards.filter((e=>e in V)).map((e=>{var t;const i=V[e];return n.dy`<mwc-list-item
              graphic="medium"
              .domain=${i}
              @request-selected=${this._standardPicked}
              hasMeta
            >
              <img
                slot="graphic"
                loading="lazy"
                src=${(0,b.X1)({domain:i,type:"icon",useFallback:!0,darkOptimized:null===(t=this.hass.themes)||void 0===t?void 0:t.darkMode})}
                referrerpolicy="no-referrer"
              />
              <span
                >${this.hass.localize(`ui.panel.config.integrations.add_${i}_device`)}</span
              >
              <ha-icon-next slot="meta"></ha-icon-next>
            </mwc-list-item>`})):""}
      ${this.integration&&"integrations"in this.integration&&this.integration.integrations?Object.entries(this.integration.integrations).sort(((e,t)=>e[1].config_flow&&!t[1].config_flow?-1:t[1].config_flow&&!e[1].config_flow?0:(0,h.f)(e[1].name||(0,m.Lh)(this.hass.localize,e[0]),t[1].name||(0,m.Lh)(this.hass.localize,t[0])))).map((([e,t])=>{var i;return n.dy`<ha-integration-list-item
                  .hass=${this.hass}
                  .domain=${e}
                  .integration=${{...t,domain:e,name:t.name||(0,m.Lh)(this.hass.localize,e),is_built_in:!1!==t.is_built_in,cloud:null===(i=t.iot_class)||void 0===i?void 0:i.startsWith("cloud_")}}
                  @request-selected=${this._integrationPicked}
                >
                </ha-integration-list-item>`})):""}
      ${"zha"===this.domain||"zwave_js"===this.domain?n.dy`<mwc-list-item
            graphic="medium"
            .domain=${this.domain}
            @request-selected=${this._standardPicked}
            hasMeta
          >
            <img
              slot="graphic"
              loading="lazy"
              src=${(0,b.X1)({domain:this.domain,type:"icon",useFallback:!0,darkOptimized:null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode})}
              referrerpolicy="no-referrer"
            />
            <span
              >${this.hass.localize(`ui.panel.config.integrations.add_${this.domain}_device`)}</span
            >
            <ha-icon-next slot="meta"></ha-icon-next>
          </mwc-list-item>`:""}
      ${this.integration&&"config_flow"in this.integration&&this.integration.config_flow?n.dy`${null!==(r=this.flowsInProgress)&&void 0!==r&&r.length?n.dy`<mwc-list-item
                .domain=${this.domain}
                @request-selected=${this._integrationPicked}
                hasMeta
              >
                ${this.hass.localize("ui.panel.config.integrations.new_flow",{integration:this.integration.name||(0,m.Lh)(this.hass.localize,this.domain)})}
                <ha-icon-next slot="meta"></ha-icon-next>
              </mwc-list-item>`:n.dy`<ha-integration-list-item
                .hass=${this.hass}
                .domain=${this.domain}
                .integration=${{...this.integration,domain:this.domain,name:this.integration.name||(0,m.Lh)(this.hass.localize,this.domain),is_built_in:!1!==this.integration.is_built_in,cloud:null===(o=this.integration.iot_class)||void 0===o?void 0:o.startsWith("cloud_")}}
                @request-selected=${this._integrationPicked}
              >
              </ha-integration-list-item>`}`:""}
    </mwc-list> `}},{kind:"method",key:"_integrationPicked",value:async function(e){var t,i,r;if(!(0,k.Q)(e))return;const n=e.currentTarget.domain;if(["cloud","google_assistant","alexa"].includes(n)&&(0,l.p)(this.hass,"cloud"))return(0,d.B)(this,"close-dialog"),void(0,p.c)("/config/cloud");const o=e.currentTarget.integration;if(o.supported_by)return void(0,d.B)(this,"supported-by",{integration:o});if(o.iot_standards)return void(0,d.B)(this,"select-brand",{brand:o.domain});if(n===this.domain&&("integration_type"in this.integration&&!this.integration.config_flow||!("integration_type"in this.integration)&&(!this.integration.integrations||!(n in this.integration.integrations)))||!1===(null===(t=this.integration.integrations)||void 0===t||null===(i=t[n])||void 0===i?void 0:i.config_flow)){const e=await(0,m.t4)(this.hass,n);return void(0,O.u)(this,{manifest:e})}const a=this.getRootNode();(0,v.t)(a instanceof ShadowRoot?a.host:this,{startFlowHandler:n,showAdvanced:null===(r=this.hass.userData)||void 0===r?void 0:r.showAdvanced,manifest:await(0,m.t4)(this.hass,n)}),(0,d.B)(this,"close-dialog")}},{kind:"method",key:"_flowInProgressPicked",value:async function(e){var t;if(!(0,k.Q)(e))return;const i=e.currentTarget.flow,r=this.getRootNode();(0,v.t)(r instanceof ShadowRoot?r.host:this,{continueFlowId:i.flow_id,showAdvanced:null===(t=this.hass.userData)||void 0===t?void 0:t.showAdvanced,manifest:await(0,m.t4)(this.hass,i.handler)}),(0,d.B)(this,"close-dialog")}},{kind:"method",key:"_standardPicked",value:function(e){if(!(0,k.Q)(e))return;const t=e.currentTarget.domain,i=this.getRootNode();(0,d.B)(this,"close-dialog"),(0,c.D)(i instanceof ShadowRoot?i.host:this,this.hass,t,{brand:this.domain})}},{kind:"field",static:!0,key:"styles",value:()=>[w.Qx,n.iv`
      :host {
        display: block;
        --mdc-list-item-graphic-size: 40px;
        --mdc-list-side-padding: 24px;
      }
      h3 {
        margin: 8px 24px 0;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 500;
      }
      h3:first-of-type {
        margin-top: 0;
      }
      img {
        width: 40px;
        height: 40px;
      }
      li[divider] {
        margin-top: 8px;
      }
    `]}]}}),n.oi);function W(){W=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!q(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Q(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=X(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:G(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=G(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function Z(e){var t,i=X(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function N(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function q(e){return e.decorators&&e.decorators.length}function U(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function G(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function X(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function K(e,t,i){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},K(e,t,i||e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}!function(e,t,i,r){var n=W();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(U(o.descriptor)||U(n.descriptor)){if(q(o)||q(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(q(o)){if(q(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}N(o,n)}else t.push(o)}return t}(a.d.map(Z)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("dialog-add-integration")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_integrations",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_helpers",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_initialFilter",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_filter",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_pickedBrand",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_prevPickedBrand",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_flowsInProgress",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_narrow",value:()=>!1},{kind:"field",key:"_width",value:void 0},{kind:"field",key:"_height",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._load(),this._open=!0,this._pickedBrand=null==e?void 0:e.brand,this._initialFilter=null==e?void 0:e.initialFilter,this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._integrations=void 0,this._helpers=void 0,this._pickedBrand=void 0,this._prevPickedBrand=void 0,this._flowsInProgress=void 0,this._filter=void 0,this._width=void 0,this._height=void 0,(0,d.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"willUpdate",value:function(e){if(K(J(i.prototype),"willUpdate",this).call(this,e),void 0===this._filter&&void 0!==this._initialFilter&&(this._filter=this._initialFilter),void 0!==this._initialFilter&&""===this._filter)this._initialFilter=void 0,this._filter="",this._width=void 0,this._height=void 0;else if(this.hasUpdated&&e.has("_filter")&&(!this._width||!this._height)){var t;const e=null===(t=this.shadowRoot.querySelector("mwc-list"))||void 0===t?void 0:t.getBoundingClientRect();this._width=null==e?void 0:e.width,this._height=null==e?void 0:e.height}}},{kind:"field",key:"_filterIntegrations",value(){return(0,s.Z)(((e,t,i,n,o)=>{const a=["zha","zwave_js"].filter((e=>i.includes(e))).map((e=>({name:n(`ui.panel.config.integrations.add_${e}_device`),domain:e,config_flow:!0,is_built_in:!0,is_add:!0}))).sort(((e,t)=>(0,h.f)(e.name,t.name))),s=[],l=[];if(Object.entries(e).forEach((([e,t])=>{if("integration_type"in t&&(t.config_flow||t.iot_standards||t.supported_by)){var i;const r=t.supported_by?(0,g.p)(this._integrations,t.supported_by):t;if(!r)return;s.push({domain:e,name:t.name||(0,m.Lh)(n,e),config_flow:r.config_flow,iot_standards:r.iot_standards,supported_by:t.supported_by,is_built_in:!1!==r.is_built_in,cloud:null===(i=r.iot_class)||void 0===i?void 0:i.startsWith("cloud_")})}else if("integration_type"in t||!("iot_standards"in t)&&!("integrations"in t)){if(o&&"integration_type"in t){var r;l.push({domain:e,name:t.name||(0,m.Lh)(n,e),config_flow:t.config_flow,is_built_in:!1!==t.is_built_in,cloud:null===(r=t.iot_class)||void 0===r?void 0:r.startsWith("cloud_")})}}else s.push({domain:e,name:t.name||(0,m.Lh)(n,e),iot_standards:t.iot_standards,integrations:t.integrations?Object.entries(t.integrations).map((([e,t])=>t.name||(0,m.Lh)(n,e))):void 0,is_built_in:!1!==t.is_built_in})})),o){const e={keys:["name","domain","supported_by","integrations","iot_standards"],isCaseSensitive:!1,minMatchCharLength:2,threshold:.2},i=Object.entries(t).map((([e,t])=>{var i;return{domain:e,name:t.name||(0,m.Lh)(n,e),config_flow:t.config_flow,is_helper:!0,is_built_in:!1!==t.is_built_in,cloud:null===(i=t.iot_class)||void 0===i?void 0:i.startsWith("cloud_")}}));return[...new r.Z(s,e).search(o).map((e=>e.item)),...new r.Z(l,e).search(o).map((e=>e.item)),...new r.Z(i,e).search(o).map((e=>e.item))]}return[...a,...s.sort(((e,t)=>(0,h.f)(e.name||"",t.name||"")))]}))}},{kind:"method",key:"_getIntegrations",value:function(){return this._filterIntegrations(this._integrations,this._helpers,this.hass.config.components,this.hass.localize,this._filter)}},{kind:"method",key:"render",value:function(){var e;if(!this._open)return n.dy``;const t=this._integrations?this._getIntegrations():void 0,i=this._pickedBrand?(null===(e=this._integrations)||void 0===e?void 0:e[this._pickedBrand])||(0,g.p)(this._integrations,this._pickedBrand):void 0;return n.dy`<ha-dialog
      open
      @closed=${this.closeDialog}
      scrimClickAction
      escapeKeyAction
      hideActions
      .heading=${(0,f.i)(this.hass,this.hass.localize("ui.panel.config.integrations.new"))}
    >
      ${!this._pickedBrand||this._integrations&&!i?this._renderAll(t):n.dy`<div slot="heading">
              <ha-icon-button-prev
                @click=${this._prevClicked}
              ></ha-icon-button-prev>
              <h2 class="mdc-dialog__title">
                ${this._calculateBrandHeading(i)}
              </h2>
            </div>
            ${this._renderIntegration(i)}`}
    </ha-dialog>`}},{kind:"method",key:"_calculateBrandHeading",value:function(e){var t,i;return null==e||!e.iot_standards||"integrations"in e||null!==(t=this._flowsInProgress)&&void 0!==t&&t.length?!e||null!=e&&e.iot_standards||"integrations"in e||null===(i=this._flowsInProgress)||void 0===i||!i.length?"What do you want to add?":"Want to add these discovered devices?":"What type of device is it?"}},{kind:"method",key:"_renderIntegration",value:function(e){return n.dy`<ha-domain-integrations
      .hass=${this.hass}
      .domain=${this._pickedBrand}
      .integration=${e}
      .flowsInProgress=${this._flowsInProgress}
      style=${(0,a.V)({minWidth:`${this._width}px`,minHeight:"581px"})}
      @close-dialog=${this.closeDialog}
      @supported-by=${this._handleSupportedByEvent}
      @select-brand=${this._handleSelectBrandEvent}
    ></ha-domain-integrations>`}},{kind:"method",key:"_handleSelectBrandEvent",value:function(e){this._prevPickedBrand=this._pickedBrand,this._pickedBrand=e.detail.brand}},{kind:"method",key:"_handleSupportedByEvent",value:function(e){this._supportedBy(e.detail.integration)}},{kind:"method",key:"_supportedBy",value:function(e){const t=(0,g.p)(this._integrations,e.supported_by);(0,y.g7)(this,{text:this.hass.localize("ui.panel.config.integrations.config_flow.supported_brand_flow",{supported_brand:e.name||(0,m.Lh)(this.hass.localize,e.domain),flow_domain_name:(null==t?void 0:t.name)||(0,m.Lh)(this.hass.localize,e.supported_by)}),confirm:()=>{this.closeDialog(),["zha","zwave_js"].includes(e.supported_by)?(0,c.D)(this,this.hass,e.supported_by):t?this._handleIntegrationPicked({domain:e.supported_by,name:t.name||(0,m.Lh)(this.hass.localize,e.supported_by),config_flow:t.config_flow,iot_standards:t.iot_standards}):(0,y.Ys)(this,{text:"Integration not found",warning:!0})}})}},{kind:"method",key:"_renderAll",value:function(e){return n.dy`<search-input
        .hass=${this.hass}
        autofocus
        dialogInitialFocus
        .filter=${this._filter}
        @value-changed=${this._filterChanged}
        .label=${this.hass.localize("ui.panel.config.integrations.search_brand")}
        @keypress=${this._maybeSubmit}
      ></search-input>
      ${e?n.dy`<mwc-list>
            <lit-virtualizer
              scroller
              class="ha-scrollbar"
              style=${(0,a.V)({width:`${this._width}px`,height:this._narrow?"calc(100vh - 184px)":"500px"})}
              @click=${this._integrationPicked}
              .items=${e}
              .renderItem=${this._renderRow}
            >
            </lit-virtualizer>
          </mwc-list>`:n.dy`<ha-circular-progress active></ha-circular-progress>`} `}},{kind:"field",key:"_renderRow",value(){return e=>e?n.dy`
      <ha-integration-list-item
        brand
        .hass=${this.hass}
        .integration=${e}
      >
      </ha-integration-list-item>
    `:n.dy``}},{kind:"method",key:"_load",value:async function(){const e=await(0,g.G)(this.hass);for(const t in e.custom.integration)Object.prototype.hasOwnProperty.call(e.custom.integration,t)&&(e.custom.integration[t].is_built_in=!1);this._integrations={...e.core.integration,...e.custom.integration};for(const t in e.custom.helper)Object.prototype.hasOwnProperty.call(e.custom.helper,t)&&(e.custom.helper[t].is_built_in=!1);this._helpers={...e.core.helper,...e.custom.helper},this.hass.loadBackendTranslation("title",e.core.translated_name,!0)}},{kind:"method",key:"_filterChanged",value:async function(e){this._filter=e.detail.value}},{kind:"method",key:"_integrationPicked",value:function(e){const t=e.target.closest("ha-integration-list-item");t&&this._handleIntegrationPicked(t.integration)}},{kind:"method",key:"_handleIntegrationPicked",value:async function(e){if(e.supported_by)return void this._supportedBy(e);if(e.is_add)return(0,c.D)(this,this.hass,e.domain),void this.closeDialog();if(e.is_helper)return this.closeDialog(),void(0,p.c)(`/config/helpers/add?domain=${e.domain}`);if(e.integrations){let t=e.integrations;return"apple"===e.domain&&(t=t.filter((e=>"homekit_controller"!==e))),this._fetchFlowsInProgress(t),void(this._pickedBrand=e.domain)}if(["zha","zwave_js"].includes(e.domain)&&(0,l.p)(this.hass,e.domain))return void(this._pickedBrand=e.domain);if(e.iot_standards)return void(this._pickedBrand=e.domain);if(e.config_flow)return void this._createFlow(e);if(["cloud","google_assistant","alexa"].includes(e.domain)&&(0,l.p)(this.hass,"cloud"))return this.closeDialog(),void(0,p.c)("/config/cloud");const t=await(0,m.t4)(this.hass,e.domain);(0,O.u)(this,{manifest:t})}},{kind:"method",key:"_createFlow",value:async function(e){var t;const i=await this._fetchFlowsInProgress([e.domain]);if(null!=i&&i.length)return void(this._pickedBrand=e.domain);const r=await(0,m.t4)(this.hass,e.domain);this.closeDialog(),(0,v.t)(this,{startFlowHandler:e.domain,showAdvanced:null===(t=this.hass.userData)||void 0===t?void 0:t.showAdvanced,manifest:r})}},{kind:"method",key:"_fetchFlowsInProgress",value:async function(e){const t=(await(0,u.D7)(this.hass.connection)).filter((t=>e.includes(t.handler)||"alternative_domain"in t.context&&e.includes(t.context.alternative_domain)));return t.length&&(this._flowsInProgress=t),t}},{kind:"method",key:"_maybeSubmit",value:function(e){if("Enter"!==e.key)return;const t=this._getIntegrations();t.length>0&&this._handleIntegrationPicked(t[0])}},{kind:"method",key:"_prevClicked",value:function(){this._pickedBrand=this._prevPickedBrand,this._prevPickedBrand||(this._flowsInProgress=void 0),this._prevPickedBrand=void 0}},{kind:"field",static:!0,key:"styles",value:()=>[w.$c,w.yu,n.iv`
      @media all and (min-width: 550px) {
        ha-dialog {
          --mdc-dialog-min-width: 500px;
        }
      }
      ha-dialog {
        --dialog-content-padding: 0;
      }
      search-input {
        display: block;
        margin: 16px 16px 0;
      }
      .divider {
        border-bottom-color: var(--divider-color);
      }
      h2 {
        padding-inline-end: 66px;
        direction: var(--direction);
      }
      p {
        text-align: center;
        padding: 16px;
        margin: 0;
      }
      p > a {
        color: var(--primary-color);
      }
      ha-circular-progress {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 24px 0;
      }
      lit-virtualizer {
        contain: size layout !important;
      }
      ha-integration-list-item {
        width: 100%;
      }
      ha-icon-button-prev {
        color: var(--secondary-text-color);
        position: absolute;
        left: 16px;
        top: 14px;
        inset-inline-end: initial;
        inset-inline-start: 16px;
        direction: var(--direction);
      }
      .mdc-dialog__title {
        margin: 0;
        margin-bottom: 8px;
        margin-left: 48px;
        padding: 24px 24px 0 24px;
        color: var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87));
        font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
        line-height: var(--mdc-typography-headline6-line-height, 2rem);
        font-weight: var(--mdc-typography-headline6-font-weight, 500);
        letter-spacing: var(
          --mdc-typography-headline6-letter-spacing,
          0.0125em
        );
        text-decoration: var(
          --mdc-typography-headline6-text-decoration,
          inherit
        );
        text-transform: var(--mdc-typography-headline6-text-transform, inherit);
      }
    `]}]}}),n.oi)},27322:(e,t,i)=>{i.d(t,{R:()=>r});const r=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=adc3c215.js.map