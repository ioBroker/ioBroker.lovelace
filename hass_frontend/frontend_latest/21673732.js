/*! For license information please see 21673732.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[41417],{18601:(e,t,i)=>{i.d(t,{qN:()=>s.q,Wg:()=>c});var r,n,o=i(87480),a=i(33310),s=i(78220);const l=null!==(n=null===(r=window.ShadyDOM)||void 0===r?void 0:r.inUse)&&void 0!==n&&n;class c extends s.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||l)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}c.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,o.__decorate)([(0,a.Cb)({type:Boolean})],c.prototype,"disabled",void 0)},14114:(e,t,i)=>{i.d(t,{P:()=>r});const r=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)}},78866:(e,t,i)=>{i.d(t,{D:()=>f});var r=i(37500),n=i(81582),o=i(5986),a=i(75580),s=i(2852),l=i(26765),c=i(70332),d=i(27322),h=i(7323),p=i(83849);const f=async(e,t,i,f)=>{if(null!=f&&f.domain){const e=await t.loadBackendTranslation("title",f.domain);f.domain=(0,o.Lh)(e,f.domain)}if(null!=f&&f.brand){var u;const e=await(0,a.G)(t);f.brand=(null===(u=e.core.integration[f.brand])||void 0===u?void 0:u.name)||f.brand}if("zwave_js"===i){const o=await(0,n.pB)(t,{domain:i});if(!(0,h.p)(t,"zwave_js")||!o.length)return void(0,l.g7)(e,{title:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Z-Wave"}),text:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Z-Wave",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Z-Wave",supported_hardware_link:r.dy`<a
              href=${(0,d.R)(t,"/docs/z-wave/controllers")}
              target="_blank"
              rel="noreferrer"
              >${t.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a
            >`}),confirmText:t.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zwave_js"})}});(0,c.B)(e,{entry_id:o[0].entry_id})}else if("zha"===i){const o=await(0,n.pB)(t,{domain:i});if(!(0,h.p)(t,"zha")||!o.length)return void(0,l.g7)(e,{title:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Zigbee"}),text:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Zigbee",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Z-Wave",supported_hardware_link:r.dy`<a
              href=${(0,d.R)(t,"/integrations/zha/#known-working-zigbee-radio-modules")}
              target="_blank"
              rel="noreferrer"
              >${t.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a
            >`}),confirmText:t.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zha"})}});(0,p.c)("/config/zha/add")}}},86977:(e,t,i)=>{i.d(t,{Q:()=>r});const r=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},15493:(e,t,i)=>{i.d(t,{Q2:()=>r,io:()=>n,ou:()=>o,j4:()=>a,pc:()=>s});const r=()=>{const e={},t=new URLSearchParams(location.search);for(const[i,r]of t.entries())e[i]=r;return e},n=e=>new URLSearchParams(window.location.search).get(e),o=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,i])=>{t.append(e,i)})),t.toString()},a=e=>{const t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,i])=>{t.set(e,i)})),t.toString()},s=e=>{const t=new URLSearchParams(window.location.search);return t.delete(e),t.toString()}},84431:(e,t,i)=>{var r=i(37500),n=i(56887),o=i(21270),a=i(96762);function s(){s=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!d(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function l(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function d(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=s();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,p.elements)}),i),p=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(h(o.descriptor)||h(n.descriptor)){if(d(o)||d(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(d(o)){if(d(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else t.push(o)}return t}(a.d.map(l)),e);n.initializeClassElements(a.F,p.elements),n.runClassFinishers(a.F,p.finishers)}([(0,i(33310).Mo)("ha-check-list-item")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[a.W,o.W,r.iv`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `]}]}}),n.F)},32511:(e,t,i)=>{var r=i(58417),n=i(39274),o=i(37500);function a(){a=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=p(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:h(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=h(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function s(e){var t,i=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=a();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var h=t((function(e){n.initializeInstanceElements(e,p.elements)}),i),p=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(d(o.descriptor)||d(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(h.d.map(s)),e);n.initializeClassElements(h.F,p.elements),n.runClassFinishers(h.F,p.finishers)}([(0,i(33310).Mo)("ha-checkbox")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[n.W,o.iv`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `]}]}}),r.A)},99282:(e,t,i)=>{var r=i(52039);class n extends r.C{connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.path="ltr"===window.getComputedStyle(this).direction?"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z":"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}),100)}}customElements.define("ha-icon-next",n)},48091:(e,t,i)=>{i.d(t,{A8:()=>r,Ax:()=>n,Fc:()=>o,G$:()=>a,zq:()=>s});const r=async e=>e.callWS({type:"application_credentials/config"}),n=async(e,t)=>e.callWS({type:"application_credentials/config_entry",config_entry_id:t}),o=async e=>e.callWS({type:"application_credentials/list"}),a=async(e,t,i,r,n)=>e.callWS({type:"application_credentials/create",domain:t,client_id:i,client_secret:r,name:n}),s=async(e,t)=>e.callWS({type:"application_credentials/delete",application_credentials_id:t})},22814:(e,t,i)=>{i.d(t,{oT:()=>r,iI:()=>n,W2:()=>o,TZ:()=>a});location.protocol,location.host;const r=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username"};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code"};default:return e}})),n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=async(e,t,i,r)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:i,password:r}),a=async(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:i})},73728:(e,t,i)=>{i.d(t,{pV:()=>a,P3:()=>s,Ky:()=>c,D4:()=>d,XO:()=>h,zO:()=>p,oi:()=>f,d4:()=>u,D7:()=>m,ZJ:()=>y,V3:()=>v,WW:()=>b});var r=i(97330),n=i(38346),o=i(5986);const a=32143==i.j?["bluetooth","dhcp","discovery","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"]:null,s=32143==i.j?["reauth"]:null,l={"HA-Frontend-Base":`${location.protocol}//${location.host}`},c=(e,t)=>{var i;return e.callApi("POST","config/config_entries/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)},l)},d=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`,void 0,l),h=(e,t,i)=>e.callApi("POST",`config/config_entries/flow/${t}`,i,l),p=(e,t,i)=>e.callWS({type:"config_entries/ignore_flow",flow_id:t,title:i}),f=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),u=(e,t)=>e.callApi("GET","config/config_entries/flow_handlers"+(t?`?type=${t}`:"")),m=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),g=(e,t)=>e.subscribeEvents((0,n.D)((()=>m(e).then((e=>t.setState(e,!0)))),500,!0),"config_entry_discovered"),y=e=>(0,r._)(e,"_configFlowProgress",m,g),v=(e,t)=>y(e.connection).subscribe(t),b=(e,t)=>t.context.title_placeholders&&0!==Object.keys(t.context.title_placeholders).length?e(`component.${t.handler}.config.flow_title`,t.context.title_placeholders)||("name"in t.context.title_placeholders?t.context.title_placeholders.name:(0,o.Lh)(e,t.handler)):(0,o.Lh)(e,t.handler)},42916:(e,t,i)=>{i.d(t,{pD:()=>r,lf:()=>n,iP:()=>o,ZK:()=>a});const r=e=>e.callWS({type:"diagnostics/list"}),n=(e,t)=>e.callWS({type:"diagnostics/get",domain:t}),o=e=>`/api/diagnostics/config_entry/${e}`,a=(e,t)=>`/api/diagnostics/config_entry/${e}/device/${t}`},75580:(e,t,i)=>{i.d(t,{G:()=>r,p:()=>n});const r=e=>e.callWS({type:"integration/descriptions"}),n=(e,t)=>{if(e){if(t in e){const i=e[t];if("integration_type"in i)return i}for(const i of Object.values(e))if("integrations"in i&&i.integrations&&t in i.integrations)return i.integrations[t]}}},2852:(e,t,i)=>{i.d(t,{t:()=>s});var r=i(37500),n=i(73728),o=i(5986),a=i(52871);const s=(e,t)=>(0,a.w)(e,t,{loadDevicesAndAreas:!0,createFlow:async(e,t)=>{const[i]=await Promise.all([(0,n.Ky)(e,t),e.loadBackendTranslation("config",t),e.loadBackendTranslation("title",t)]);return i},fetchFlow:async(e,t)=>{const i=await(0,n.D4)(e,t);return await e.loadBackendTranslation("config",i.handler),i},handleFlowStep:n.XO,deleteFlow:n.oi,renderAbortDescription(e,t){const i=e.localize(`component.${t.handler}.config.abort.${t.reason}`,t.description_placeholders);return i?r.dy`
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
          `:""},renderMenuOption:(e,t,i)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.menu_options.${i}`,t.description_placeholders),renderLoadingDescription(e,t,i,r){if("loading_flow"!==t&&"loading_step"!==t)return"";const n=(null==r?void 0:r.handler)||i;return e.localize(`ui.panel.config.integrations.config_flow.loading.${t}`,{integration:n?(0,o.Lh)(e.localize,n):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},52871:(e,t,i)=>{i.d(t,{w:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(88278),i.e(6294),i.e(41985),i.e(85084),i.e(78874),i.e(45507),i.e(49842),i.e(51644),i.e(1548),i.e(49075),i.e(82789),i.e(77135),i.e(77576),i.e(12545),i.e(26272),i.e(13701),i.e(29925),i.e(4940),i.e(68101),i.e(48536)]).then(i.bind(i,93990)),o=(e,t,i)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:n,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}},22314:(e,t,i)=>{i.d(t,{y:()=>r});const r=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"]},47090:(e,t,i)=>{i.r(t);var r=i(81480),n=i(37500),o=i(33310),a=i(51346),s=i(14516),l=i(7323),c=i(78866),d=i(83849),h=i(85415),p=i(15493),f=i(96151),u=(i(81545),i(84431),i(32511),i(36125),i(10983),i(52039),i(65040),i(81582)),m=i(73728),g=i(57292),y=i(42916),v=i(74186),b=i(5986),w=i(75580);var k=i(2852),_=i(26765),E=(i(15291),i(1359),i(73826)),C=i(11654),$=i(29311),x=i(22314),z=i(8636),A=i(47181),D=i(86977),P=(i(54444),i(11254));function S(){S=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!M(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?j(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=H(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:O(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=O(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function L(e){var t,i=H(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function T(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function M(e){return e.decorators&&e.decorators.length}function F(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function O(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function H(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=S();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(F(o.descriptor)||F(n.descriptor)){if(M(o)||M(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(M(o)){if(M(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}T(o,n)}else t.push(o)}return t}(a.d.map(L)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-integration-header")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"banner",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"localizedDomainName",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"manifest",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"configEntry",value:void 0},{kind:"method",key:"render",value:function(){var e;let t,i;const r=this.localizedDomainName||(0,b.Lh)(this.hass.localize,this.domain,this.manifest);this.label?(t=this.label,i=t.toLowerCase()===r.toLowerCase()?void 0:r):t=r;const o=[];var a;this.manifest&&(this.manifest.is_built_in||o.push(["M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z",this.hass.localize("ui.panel.config.integrations.config_entry.provided_by_custom_integration")]),this.manifest.iot_class&&this.manifest.iot_class.startsWith("cloud_")&&o.push(["M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z",this.hass.localize("ui.panel.config.integrations.config_entry.depends_on_cloud")]),null!==(a=this.configEntry)&&void 0!==a&&a.pref_disable_polling&&o.push(["M20,4H14V10L16.24,7.76C17.32,8.85 18,10.34 18,12C18,13 17.75,13.94 17.32,14.77L18.78,16.23C19.55,15 20,13.56 20,12C20,9.79 19.09,7.8 17.64,6.36L20,4M2.86,5.41L5.22,7.77C4.45,9 4,10.44 4,12C4,14.21 4.91,16.2 6.36,17.64L4,20H10V14L7.76,16.24C6.68,15.15 6,13.66 6,12C6,11 6.25,10.06 6.68,9.23L14.76,17.31C14.5,17.44 14.26,17.56 14,17.65V19.74C14.79,19.53 15.54,19.2 16.22,18.78L18.58,21.14L19.85,19.87L4.14,4.14L2.86,5.41M10,6.35V4.26C9.2,4.47 8.45,4.8 7.77,5.22L9.23,6.68C9.5,6.56 9.73,6.44 10,6.35Z",this.hass.localize("ui.panel.config.integrations.config_entry.disabled_polling")]));return n.dy`
      ${this.banner?n.dy`<div class="banner">${this.banner}</div>`:""}
      <slot name="above-header"></slot>
      <div class="header">
        <img
          src=${(0,P.X1)({domain:this.domain,type:"icon",darkOptimized:null===(e=this.hass.themes)||void 0===e?void 0:e.darkMode})}
          referrerpolicy="no-referrer"
          @error=${this._onImageError}
          @load=${this._onImageLoad}
        />
        <div class="info">
          <div class="primary" role="heading">${t}</div>
          ${i?n.dy`<div class="secondary">${i}</div>`:""}
        </div>

        ${0===o.length?"":n.dy`
              <div class="icons">
                ${o.map((([e,t])=>n.dy`
                    <span>
                      <ha-svg-icon .path=${e}></ha-svg-icon>
                      <paper-tooltip animation-delay="0"
                        >${t}</paper-tooltip
                      >
                    </span>
                  `))}
              </div>
            `}
      </div>
    `}},{kind:"method",key:"_onImageLoad",value:function(e){e.target.style.visibility="initial"}},{kind:"method",key:"_onImageError",value:function(e){e.target.style.visibility="hidden"}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`
    .banner {
      background-color: var(--state-color);
      color: var(--text-on-state-color);
      text-align: center;
      padding: 2px;
      border-top-left-radius: var(--ha-card-border-radius, 12px);
      border-top-right-radius: var(--ha-card-border-radius, 12px);
    }
    .header {
      display: flex;
      position: relative;
      padding-top: 0px;
      padding-bottom: 8px;
      padding-inline-start: 16px;
      padding-inline-end: 8px;
      direction: var(--direction);
    }
    .header img {
      margin-top: 16px;
      margin-inline-start: initial;
      margin-inline-end: 16px;
      width: 40px;
      height: 40px;
      direction: var(--direction);
    }
    .header .info {
      flex: 1;
      align-self: center;
    }
    .header .info div {
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .primary {
      font-size: 16px;
      margin-top: 16px;
      margin-right: 2px;
      font-weight: 400;
      word-break: break-word;
      color: var(--primary-text-color);
    }
    .secondary {
      font-size: 14px;
      color: var(--secondary-text-color);
    }
    .icons {
      margin-right: 8px;
      margin-left: auto;
      height: 28px;
      color: var(--text-on-state-color, var(--secondary-text-color));
      background-color: var(--state-color, #e0e0e0);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      display: flex;
      float: right;
    }
    .icons ha-svg-icon {
      width: 20px;
      height: 20px;
      margin: 4px;
    }
    paper-tooltip {
      white-space: nowrap;
    }
  `}]}}),n.oi);function I(){I=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!B(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?N(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=W(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:U(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=U(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function V(e){var t,i=W(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function R(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function Z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function U(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function W(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=I();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(Z(o.descriptor)||Z(n.descriptor)){if(B(o)||B(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(B(o)){if(B(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}R(o,n)}else t.push(o)}return t}(a.d.map(V)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-integration-action-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"banner",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"localizedDomainName",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"manifest",value:void 0},{kind:"method",key:"render",value:function(){return n.dy`
      <ha-card outlined>
        <ha-integration-header
          .hass=${this.hass}
          .banner=${this.banner}
          .domain=${this.domain}
          .label=${this.label}
          .localizedDomainName=${this.localizedDomainName}
          .manifest=${this.manifest}
        ></ha-integration-header>
        <div class="filler"></div>
        <div class="actions"><slot></slot></div>
      </ha-card>
    `}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`
    ha-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      --ha-card-border-color: var(--state-color);
      --mdc-theme-primary: var(--state-color);
    }
    .filler {
      flex: 1;
    }
    .attention {
      --state-color: var(--error-color);
      --text-on-state-color: var(--text-primary-color);
    }
    .discovered {
      --state-color: var(--primary-color);
      --text-on-state-color: var(--text-primary-color);
    }
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 6px 0;
      height: 48px;
    }
  `}]}}),n.oi);var q=i(27322);function Q(){Q=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Y(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?te(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=ee(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:K(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=K(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function G(e){var t,i=ee(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function X(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Y(e){return e.decorators&&e.decorators.length}function J(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function K(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function ee(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const ie="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z";!function(e,t,i,r){var n=Q();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(J(o.descriptor)||J(n.descriptor)){if(Y(o)||Y(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Y(o)){if(Y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}X(o,n)}else t.push(o)}return t}(a.d.map(G)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-config-flow-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"flow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"manifest",value:void 0},{kind:"method",key:"render",value:function(){const e=m.P3.includes(this.flow.context.source);return n.dy`
      <ha-integration-action-card
        class=${(0,z.$)({discovered:!e,attention:e})}
        .hass=${this.hass}
        .manifest=${this.manifest}
        .banner=${this.hass.localize("ui.panel.config.integrations."+(e?"attention":"discovered"))}
        .domain=${this.flow.handler}
        .label=${this.flow.localized_title}
      >
        <mwc-button
          unelevated
          @click=${this._continueFlow}
          .label=${this.hass.localize("ui.panel.config.integrations."+(e?"reconfigure":"configure"))}
        ></mwc-button>
        <ha-button-menu corner="BOTTOM_START">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.menu")}
            .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
          ></ha-icon-button>
          ${this.flow.context.configuration_url?n.dy`<a
                href=${this.flow.context.configuration_url.replace(/^homeassistant:\/\//,"")}
                rel="noreferrer"
                target=${this.flow.context.configuration_url.startsWith("homeassistant://")?"_self":"_blank"}
              >
                <mwc-list-item graphic="icon" hasMeta>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.open_configuration_url")}
                  <ha-svg-icon slot="graphic" .path=${"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}></ha-svg-icon>
                  <ha-svg-icon slot="meta" .path=${ie}></ha-svg-icon>
                </mwc-list-item>
              </a>`:""}
          ${this.manifest?n.dy`<a
                href=${this.manifest.is_built_in?(0,q.R)(this.hass,`/integrations/${this.manifest.domain}`):this.manifest.documentation}
                rel="noreferrer"
                target="_blank"
              >
                <mwc-list-item graphic="icon" hasMeta>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.documentation")}
                  <ha-svg-icon
                    slot="graphic"
                    .path=${"M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"}
                  ></ha-svg-icon>
                  <ha-svg-icon slot="meta" .path=${ie}></ha-svg-icon>
                </mwc-list-item>
              </a>`:""}
          ${m.pV.includes(this.flow.context.source)&&this.flow.context.unique_id?n.dy`
                <mwc-list-item
                  graphic="icon"
                  @request-selected=${this._ignoreFlow}
                >
                  ${this.hass.localize("ui.panel.config.integrations.ignore.ignore")}
                  <ha-svg-icon slot="graphic" .path=${"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"}></ha-svg-icon>
                </mwc-list-item>
              `:""}
        </ha-button-menu>
      </ha-integration-action-card>
    `}},{kind:"method",key:"_continueFlow",value:function(){(0,k.t)(this,{continueFlowId:this.flow.flow_id,dialogClosedCallback:()=>{this._handleFlowUpdated()}})}},{kind:"method",key:"_ignoreFlow",value:async function(e){if(!(0,D.Q)(e))return;await(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.integrations.ignore.confirm_ignore_title","name",(0,m.WW)(this.hass.localize,this.flow)),text:this.hass.localize("ui.panel.config.integrations.ignore.confirm_ignore"),confirmText:this.hass.localize("ui.panel.config.integrations.ignore.ignore")})&&(await(0,m.zO)(this.hass,this.flow.flow_id,(0,m.WW)(this.hass.localize,this.flow)),this._handleFlowUpdated())}},{kind:"method",key:"_handleFlowUpdated",value:function(){(0,A.B)(this,"change",void 0,{bubbles:!1})}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`
    .attention {
      --state-color: var(--error-color);
      --text-on-state-color: var(--text-primary-color);
    }
    .discovered {
      --state-color: var(--primary-color);
      --text-on-state-color: var(--text-primary-color);
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    ha-svg-icon[slot="meta"] {
      width: 18px;
      height: 18px;
    }
  `}]}}),n.oi);function re(){re=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ae(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return de(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?de(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=ce(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:le(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=le(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function ne(e){var t,i=ce(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function oe(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ae(e){return e.decorators&&e.decorators.length}function se(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function le(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function ce(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=re();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(se(o.descriptor)||se(n.descriptor)){if(ae(o)||ae(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ae(o)){if(ae(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}oe(o,n)}else t.push(o)}return t}(a.d.map(ne)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-ignored-config-entry-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"manifest",value:void 0},{kind:"method",key:"render",value:function(){return n.dy`
      <ha-integration-action-card
        .hass=${this.hass}
        .manifest=${this.manifest}
        .banner=${this.hass.localize("ui.panel.config.integrations.ignore.ignored")}
        .domain=${this.entry.domain}
        .localizedDomainName=${this.entry.localized_domain_name}
        .label=${"Ignored"===this.entry.title?this.entry.localized_domain_name:this.entry.title}
      >
        <mwc-button
          @click=${this._removeIgnoredIntegration}
          .label=${this.hass.localize("ui.panel.config.integrations.ignore.stop_ignore")}
        ></mwc-button>
      </ha-integration-action-card>
    `}},{kind:"method",key:"_removeIgnoredIntegration",value:async function(){(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.integrations.ignore.confirm_delete_ignore_title","name",this.hass.localize(`component.${this.entry.domain}.title`)),text:this.hass.localize("ui.panel.config.integrations.ignore.confirm_delete_ignore"),confirmText:this.hass.localize("ui.panel.config.integrations.ignore.stop_ignore"),confirm:async()=>{(await(0,u.iJ)(this.hass,this.entry.entry_id)).require_restart&&alert(this.hass.localize("ui.panel.config.integrations.config_entry.restart_confirm")),(0,A.B)(this,"change",void 0,{bubbles:!1})}})}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`
    :host {
      --state-color: var(--divider-color, #e0e0e0);
    }

    mwc-button {
      --mdc-theme-primary: var(--primary-color);
    }
  `}]}}),n.oi);i(51187),i(44577),i(53973),i(51095),i(22098),i(99282);var he=i(48091),pe=i(22814);const fe=()=>Promise.all([i.e(85084),i.e(31588),i.e(23466)]).then(i.bind(i,23466));var ue=i(17416),me=i(25936);function ge(){ge=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!be(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Ee(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Ee(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=_e(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ke(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=ke(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function ye(e){var t,i=_e(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function ve(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function be(e){return e.decorators&&e.decorators.length}function we(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ke(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function _e(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const Ce="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",$e="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",xe="M2 12C2 17 6 21 11 21C13.4 21 15.7 20.1 17.4 18.4L15.9 16.9C14.6 18.3 12.9 19 11 19C4.8 19 1.6 11.5 6.1 7.1S18 5.8 18 12H15L19 16H19.1L23 12H20C20 7 16 3 11 3S2 7 2 12M10 15H12V17H10V15M10 7H12V13H10V7",ze="M13 2V4C17.39 4.54 20.5 8.53 19.96 12.92C19.5 16.56 16.64 19.43 13 19.88V21.88C18.5 21.28 22.45 16.34 21.85 10.85C21.33 6.19 17.66 2.5 13 2M11 2C9.04 2.18 7.19 2.95 5.67 4.2L7.1 5.74C8.22 4.84 9.57 4.26 11 4.06V2M4.26 5.67C3 7.19 2.24 9.04 2.05 11H4.05C4.24 9.58 4.8 8.23 5.69 7.1L4.26 5.67M2.06 13C2.26 14.96 3.03 16.81 4.27 18.33L5.69 16.9C4.81 15.77 4.24 14.42 4.06 13H2.06M7.06 18.37L5.67 19.74C7.18 21 9.04 21.79 11 22V20C9.58 19.82 8.23 19.25 7.1 18.37H7.06Z",Ae={mqtt:"/config/mqtt",zha:"/config/zha/dashboard",zwave_js:"/config/zwave_js/dashboard"};!function(e,t,i,r){var n=ge();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(we(o.descriptor)||we(n.descriptor)){if(be(o)||be(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(be(o)){if(be(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}ve(o,n)}else t.push(o)}return t}(a.d.map(ye)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-integration-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"manifest",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"entityRegistryEntries",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"deviceRegistryEntries",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"selectedConfigEntryId",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"supportsDiagnostics",value:()=>!1},{kind:"method",key:"render",value:function(){let e=this._selectededConfigEntry;1===this.items.length?e=this.items[0]:this.selectedConfigEntryId&&(e=this.items.find((e=>e.entry_id===this.selectedConfigEntryId)));const t=void 0!==e;return n.dy`
      <ha-card
        outlined
        class=${(0,z.$)({single:t,group:!t,hasMultiple:this.items.length>1,disabled:this.disabled,"state-not-loaded":t&&"not_loaded"===e.state,"state-failed-unload":t&&"failed_unload"===e.state,"state-setup":t&&"setup_in_progress"===e.state,"state-error":t&&u.LZ.includes(e.state)})}
        .configEntry=${e}
      >
        <ha-integration-header
          .hass=${this.hass}
          .banner=${this.disabled?this.hass.localize("ui.panel.config.integrations.config_entry.disable.disabled"):void 0}
          .domain=${this.domain}
          .label=${e?e.title||e.localized_domain_name||this.domain:void 0}
          .localizedDomainName=${e?e.localized_domain_name:void 0}
          .manifest=${this.manifest}
          .configEntry=${e}
        >
          ${this.items.length>1?n.dy`
                <div class="back-btn" slot="above-header">
                  <ha-icon-button
                    .path=${"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}
                    @click=${this._back}
                    .label=${this.hass.localize("ui.common.back")}
                  ></ha-icon-button>
                </div>
              `:""}
        </ha-integration-header>

        ${e?this._renderSingleEntry(e):this._renderGroupedIntegration()}
      </ha-card>
    `}},{kind:"method",key:"_renderGroupedIntegration",value:function(){return n.dy`
      <paper-listbox class="ha-scrollbar">
        ${this.items.map((e=>n.dy`<paper-item
              .entryId=${e.entry_id}
              @click=${this._selectConfigEntry}
              ><paper-item-body
                >${e.title||this.hass.localize("ui.panel.config.integrations.config_entry.unnamed_entry")}</paper-item-body
              >
              ${"setup_in_progress"===e.state?n.dy`<span>
                    <ha-svg-icon
                      class="info"
                      .path=${ze}
                    ></ha-svg-icon
                    ><paper-tooltip animation-delay="0" position="left">
                      ${this.hass.localize("ui.panel.config.integrations.config_entry.state.setup_in_progress")}
                    </paper-tooltip>
                  </span>`:""}
              ${u.LZ.includes(e.state)?n.dy`<span>
                    <ha-svg-icon
                      class="error"
                      .path=${"setup_retry"===e.state?xe:Ce}
                    ></ha-svg-icon
                    ><paper-tooltip animation-delay="0" position="left">
                      ${this.hass.localize(`ui.panel.config.integrations.config_entry.state.${e.state}`)}
                    </paper-tooltip>
                  </span>`:""}
              <ha-icon-next></ha-icon-next>
            </paper-item>`))}
      </paper-listbox>
    `}},{kind:"method",key:"_renderSingleEntry",value:function(e){const t=this._getDevices(e,this.deviceRegistryEntries),i=this._getServices(e,this.deviceRegistryEntries),r=this._getEntities(e,this.entityRegistryEntries);let o,a,s=Ce;e.disabled_by?(o=["ui.panel.config.integrations.config_entry.disable.disabled_cause","cause",this.hass.localize(`ui.panel.config.integrations.config_entry.disable.disabled_by.${e.disabled_by}`)||e.disabled_by],"failed_unload"===e.state&&(a=n.dy`.
        ${this.hass.localize("ui.panel.config.integrations.config_entry.disable_restart_confirm")}.`)):"not_loaded"===e.state?o=["ui.panel.config.integrations.config_entry.not_loaded"]:"setup_in_progress"===e.state?(s=ze,o=["ui.panel.config.integrations.config_entry.setup_in_progress"]):u.LZ.includes(e.state)&&("setup_retry"===e.state&&(s=xe),o=[`ui.panel.config.integrations.config_entry.state.${e.state}`],e.reason?(this.hass.loadBackendTranslation("config",e.domain),a=n.dy`:
        ${this.hass.localize(`component.${e.domain}.config.error.${e.reason}`)||e.reason}`):a=n.dy`
          <br />
          <a href=${`/config/logs/?filter=${e.domain}`}>
            ${this.hass.localize("ui.panel.config.integrations.config_entry.check_the_logs")}
          </a>
        `);let l=[];for(const[r,o]of[[t,"devices"],[i,"services"]]){if(0===r.length)continue;const t=1===r.length?`/config/devices/device/${r[0].id}`:`/config/devices/dashboard?historyBack=1&config_entry=${e.entry_id}`;l.push(n.dy`<a href=${t}
          >${this.hass.localize(`ui.panel.config.integrations.config_entry.${o}`,"count",r.length)}</a
        >`)}return r.length&&l.push(n.dy`<a
          href=${`/config/entities?historyBack=1&config_entry=${e.entry_id}`}
          >${this.hass.localize("ui.panel.config.integrations.config_entry.entities","count",r.length)}</a
        >`),2===l.length?l=[l[0],` ${this.hass.localize("ui.common.and")} `,l[1]]:3===l.length&&(l=[l[0],", ",l[1],` ${this.hass.localize("ui.common.and")} `,l[2]]),n.dy`
      ${o?n.dy`
            <div class="message">
              <ha-svg-icon .path=${s}></ha-svg-icon>
              <div>${this.hass.localize(...o)}${a}</div>
            </div>
          `:""}
      <div class="content">${l}</div>
      <div class="actions">
        <div>
          ${"user"===e.disabled_by?n.dy`<mwc-button unelevated @click=${this._handleEnable}>
                ${this.hass.localize("ui.common.enable")}
              </mwc-button>`:e.domain in Ae?n.dy`<a
                href=${`${Ae[e.domain]}?config_entry=${e.entry_id}`}
                ><mwc-button>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.configure")}
                </mwc-button></a
              >`:e.supports_options?n.dy`
                <mwc-button @click=${this._showOptions}>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.configure")}
                </mwc-button>
              `:""}
        </div>
        <ha-button-menu corner="BOTTOM_START">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.menu")}
            .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
          ></ha-icon-button>
          ${!e.disabled_by&&u.Q4.includes(e.state)&&e.supports_unload&&"system"!==e.source?n.dy`<mwc-list-item
                @request-selected=${this._handleReload}
                graphic="icon"
              >
                ${this.hass.localize("ui.panel.config.integrations.config_entry.reload")}
                <ha-svg-icon slot="graphic" .path=${"M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z"}></ha-svg-icon>
              </mwc-list-item>`:""}

          <mwc-list-item @request-selected=${this._handleRename} graphic="icon">
            ${this.hass.localize("ui.panel.config.integrations.config_entry.rename")}
            <ha-svg-icon slot="graphic" .path=${"M18,17H10.5L12.5,15H18M6,17V14.5L13.88,6.65C14.07,6.45 14.39,6.45 14.59,6.65L16.35,8.41C16.55,8.61 16.55,8.92 16.35,9.12L8.47,17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}></ha-svg-icon>
          </mwc-list-item>
          ${this.supportsDiagnostics&&"loaded"===e.state?n.dy`<a
                href=${(0,y.iP)(e.entry_id)}
                target="_blank"
                @click=${this._signUrl}
              >
                <mwc-list-item graphic="icon">
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.download_diagnostics")}
                  <ha-svg-icon
                    slot="graphic"
                    .path=${"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}
                  ></ha-svg-icon>
                </mwc-list-item>
              </a>`:""}
          ${this.manifest&&(this.manifest.is_built_in||this.manifest.issue_tracker||this.manifest.documentation)?n.dy`<li divider role="separator"></li>`:""}
          ${this.manifest?n.dy` <a
                href=${this.manifest.is_built_in?(0,q.R)(this.hass,`/integrations/${this.manifest.domain}`):this.manifest.documentation}
                rel="noreferrer"
                target="_blank"
              >
                <mwc-list-item graphic="icon" hasMeta>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.documentation")}
                  <ha-svg-icon
                    slot="graphic"
                    .path=${"M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"}
                  ></ha-svg-icon>
                  <ha-svg-icon slot="meta" .path=${$e}></ha-svg-icon>
                </mwc-list-item>
              </a>`:""}
          ${this.manifest&&(this.manifest.is_built_in||this.manifest.issue_tracker)?n.dy`<a
                href=${(0,b.H0)(e.domain,this.manifest)}
                rel="noreferrer"
                target="_blank"
              >
                <mwc-list-item graphic="icon" hasMeta>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.known_issues")}
                  <ha-svg-icon slot="graphic" .path=${"M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"}></ha-svg-icon>
                  <ha-svg-icon slot="meta" .path=${$e}></ha-svg-icon>
                </mwc-list-item>
              </a>`:""}

          <li divider role="separator"></li>

          <mwc-list-item
            @request-selected=${this._handleSystemOptions}
            graphic="icon"
          >
            ${this.hass.localize("ui.panel.config.integrations.config_entry.system_options")}
            <ha-svg-icon slot="graphic" .path=${"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}></ha-svg-icon>
          </mwc-list-item>
          ${"user"===e.disabled_by?n.dy`<mwc-list-item
                @request-selected=${this._handleEnable}
                graphic="icon"
              >
                ${this.hass.localize("ui.common.enable")}
                <ha-svg-icon
                  slot="graphic"
                  .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}
                ></ha-svg-icon>
              </mwc-list-item>`:"system"!==e.source?n.dy`<mwc-list-item
                class="warning"
                @request-selected=${this._handleDisable}
                graphic="icon"
              >
                ${this.hass.localize("ui.common.disable")}
                <ha-svg-icon
                  slot="graphic"
                  class="warning"
                  .path=${"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9"}
                ></ha-svg-icon>
              </mwc-list-item>`:""}
          ${"system"!==e.source?n.dy`<mwc-list-item
                class="warning"
                @request-selected=${this._handleDelete}
                graphic="icon"
              >
                ${this.hass.localize("ui.panel.config.integrations.config_entry.delete")}
                <ha-svg-icon
                  slot="graphic"
                  class="warning"
                  .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                ></ha-svg-icon>
              </mwc-list-item>`:""}
        </ha-button-menu>
      </div>
    `}},{kind:"get",key:"_selectededConfigEntry",value:function(){return 1===this.items.length?this.items[0]:this.selectedConfigEntryId?this.items.find((e=>e.entry_id===this.selectedConfigEntryId)):void 0}},{kind:"method",key:"_selectConfigEntry",value:function(e){this.selectedConfigEntryId=e.currentTarget.entryId}},{kind:"method",key:"_back",value:function(){this.selectedConfigEntryId=void 0,this.classList.remove("highlight")}},{kind:"field",key:"_getEntities",value:()=>(0,s.Z)(((e,t)=>t?t.filter((t=>t.config_entry_id===e.entry_id)):[]))},{kind:"field",key:"_getDevices",value:()=>(0,s.Z)(((e,t)=>t?t.filter((t=>t.config_entries.includes(e.entry_id)&&"service"!==t.entry_type)):[]))},{kind:"field",key:"_getServices",value:()=>(0,s.Z)(((e,t)=>t?t.filter((t=>t.config_entries.includes(e.entry_id)&&"service"===t.entry_type)):[]))},{kind:"method",key:"_showOptions",value:function(e){(0,ue.c)(this,e.target.closest("ha-card").configEntry,this.manifest)}},{kind:"method",key:"_handleRename",value:function(e){(0,D.Q)(e)&&this._editEntryName(e.target.closest("ha-card").configEntry)}},{kind:"method",key:"_handleReload",value:function(e){(0,D.Q)(e)&&this._reloadIntegration(e.target.closest("ha-card").configEntry)}},{kind:"method",key:"_handleDelete",value:function(e){(0,D.Q)(e)&&this._removeIntegration(e.target.closest("ha-card").configEntry)}},{kind:"method",key:"_handleDisable",value:function(e){(0,D.Q)(e)&&this._disableIntegration(e.target.closest("ha-card").configEntry)}},{kind:"method",key:"_handleEnable",value:function(e){e.detail.source&&!(0,D.Q)(e)||this._enableIntegration(e.target.closest("ha-card").configEntry)}},{kind:"method",key:"_handleSystemOptions",value:function(e){(0,D.Q)(e)&&this._showSystemOptions(e.target.closest("ha-card").configEntry)}},{kind:"method",key:"_showSystemOptions",value:function(e){var t,i;t=this,i={entry:e,manifest:this.manifest},(0,A.B)(t,"show-dialog",{dialogTag:"dialog-config-entry-system-options",dialogImport:fe,dialogParams:i})}},{kind:"method",key:"_disableIntegration",value:async function(e){const t=e.entry_id;if(!await(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.integrations.config_entry.disable_confirm_title",{title:e.title}),text:this.hass.localize("ui.panel.config.integrations.config_entry.disable_confirm_text"),confirmText:this.hass.localize("ui.common.disable"),dismissText:this.hass.localize("ui.common.cancel"),destructive:!0}))return;let i;try{i=await(0,u.Ny)(this.hass,t)}catch(e){return void(0,_.Ys)(this,{title:this.hass.localize("ui.panel.config.integrations.config_entry.disable_error"),text:e.message})}i.require_restart&&(0,_.Ys)(this,{text:this.hass.localize("ui.panel.config.integrations.config_entry.disable_restart_confirm")})}},{kind:"method",key:"_enableIntegration",value:async function(e){const t=e.entry_id;let i;try{i=await(0,u.T0)(this.hass,t)}catch(e){return void(0,_.Ys)(this,{title:this.hass.localize("ui.panel.config.integrations.config_entry.disable_error"),text:e.message})}i.require_restart&&(0,_.Ys)(this,{text:this.hass.localize("ui.panel.config.integrations.config_entry.enable_restart_confirm")})}},{kind:"method",key:"_removeIntegration",value:async function(e){const t=e.entry_id,i=await this._applicationCredentialForRemove(t);if(!await(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.integrations.config_entry.delete_confirm_title",{title:e.title}),text:this.hass.localize("ui.panel.config.integrations.config_entry.delete_confirm_text"),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),destructive:!0}))return;(await(0,u.iJ)(this.hass,t)).require_restart&&(0,_.Ys)(this,{text:this.hass.localize("ui.panel.config.integrations.config_entry.restart_confirm")}),i&&this._removeApplicationCredential(i)}},{kind:"method",key:"_applicationCredentialForRemove",value:async function(e){try{return(await(0,he.Ax)(this.hass,e)).application_credentials_id}catch(e){return null}}},{kind:"method",key:"_removeApplicationCredential",value:async function(e){if(await(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.integrations.config_entry.application_credentials.delete_title"),text:n.dy`${this.hass.localize("ui.panel.config.integrations.config_entry.application_credentials.delete_prompt")},
        <br />
        <br />
        ${this.hass.localize("ui.panel.config.integrations.config_entry.application_credentials.delete_detail")}
        <br />
        <br />
        <a
          href=${(0,q.R)(this.hass,"/integrations/application_credentials/")}
          target="_blank"
          rel="noreferrer"
        >
          ${this.hass.localize("ui.panel.config.integrations.config_entry.application_credentials.learn_more")}
        </a>`,destructive:!0,confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.panel.config.integrations.config_entry.application_credentials.dismiss")}))try{await(0,he.zq)(this.hass,e)}catch(e){(0,_.Ys)(this,{title:this.hass.localize("ui.panel.config.integrations.config_entry.application_credentials.delete_error_title"),text:e.message})}}},{kind:"method",key:"_reloadIntegration",value:async function(e){const t=e.entry_id,i=(await(0,u.Nn)(this.hass,t)).require_restart?"reload_restart_confirm":"reload_confirm";(0,_.Ys)(this,{text:this.hass.localize(`ui.panel.config.integrations.config_entry.${i}`)})}},{kind:"method",key:"_editEntryName",value:async function(e){const t=await(0,_.D9)(this,{title:this.hass.localize("ui.panel.config.integrations.rename_dialog"),defaultValue:e.title,inputLabel:this.hass.localize("ui.panel.config.integrations.rename_input_label")});null!==t&&await(0,u.SO)(this.hass,e.entry_id,{title:t})}},{kind:"method",key:"_signUrl",value:async function(e){const t=e.target.closest("a");e.preventDefault();const i=await(0,pe.iI)(this.hass,t.getAttribute("href"));(0,me.N)(i.path)}},{kind:"get",static:!0,key:"styles",value:function(){return[C.Qx,C.$c,n.iv`
        ha-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          --state-color: var(--divider-color, #e0e0e0);
          --ha-card-border-color: var(--state-color);
          --state-message-color: var(--state-color);
        }
        .state-error {
          --state-color: var(--error-color);
          --text-on-state-color: var(--text-primary-color);
        }
        .state-failed-unload {
          --state-color: var(--warning-color);
          --text-on-state-color: var(--primary-text-color);
        }
        .state-not-loaded {
          --state-message-color: var(--primary-text-color);
        }
        .state-setup {
          --state-message-color: var(--secondary-text-color);
        }
        :host(.highlight) ha-card {
          --state-color: var(--primary-color);
          --text-on-state-color: var(--text-primary-color);
        }

        .back-btn {
          background-color: var(--state-color);
          color: var(--text-on-state-color);
          --mdc-icon-button-size: 32px;
          transition: height 0.1s;
          overflow: hidden;
          border-top-left-radius: var(--ha-card-border-radius, 12px);
          border-top-right-radius: var(--ha-card-border-radius, 12px);
        }
        .hasMultiple.single .back-btn {
          height: 24px;
          display: flex;
          align-items: center;
        }
        .hasMultiple.group .back-btn {
          height: 0px;
        }

        .message {
          font-weight: bold;
          padding-bottom: 16px;
          display: flex;
          margin-left: 40px;
        }
        .message ha-svg-icon {
          color: var(--state-message-color);
        }
        .message div {
          flex: 1;
          margin-left: 8px;
          padding-top: 2px;
          padding-right: 2px;
          overflow-wrap: break-word;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .content {
          flex: 1;
          padding: 0px 16px 0 72px;
        }

        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0 0 8px;
          height: 48px;
        }
        .actions a {
          text-decoration: none;
        }
        a {
          color: var(--primary-color);
        }
        ha-button-menu {
          color: var(--secondary-text-color);
          --mdc-menu-min-width: 200px;
        }
        paper-listbox {
          border-radius: 0 0 var(--ha-card-border-radius, 16px)
            var(--ha-card-border-radius, 16px);
        }
        @media (min-width: 563px) {
          ha-card.group {
            position: relative;
            min-height: 164px;
          }
          paper-listbox {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
          }
          .disabled paper-listbox {
            top: 88px;
          }
        }
        paper-item {
          cursor: pointer;
          min-height: 35px;
        }
        paper-item-body {
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        mwc-list-item ha-svg-icon {
          color: var(--secondary-text-color);
        }
        ha-svg-icon[slot="meta"] {
          width: 18px;
          height: 18px;
        }
      `]}}]}}),n.oi);i(36269);var De=i(72160);function Pe(){Pe=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Te(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return He(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?He(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=Oe(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Fe(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=Fe(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function Se(e){var t,i=Oe(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function Le(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Te(e){return e.decorators&&e.decorators.length}function Me(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Fe(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function Oe(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function He(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function je(e,t,i){return je="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ie(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},je(e,t,i||e)}function Ie(e){return Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ie(e)}const Ve=e=>{const t=new Map;return e.forEach((e=>{t.has(e.domain)?t.get(e.domain).push(e):t.set(e.domain,[e])})),t};!function(e,t,i,r){var n=Pe();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(Me(o.descriptor)||Me(n.descriptor)){if(Te(o)||Te(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Te(o)){if(Te(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Le(o,n)}else t.push(o)}return t}(a.d.map(Se)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-config-integrations")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"showAdvanced",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_configEntries",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"_configEntriesInProgress",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_entityRegistryEntries",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_deviceRegistryEntries",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_manifests",value:()=>({})},{kind:"field",key:"_extraFetchedManifests",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_showIgnored",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_showDisabled",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_searchParms",value:()=>new URLSearchParams(window.location.hash.substring(1))},{kind:"field",decorators:[(0,o.SB)()],key:"_filter",value(){var e;return(null===(e=history.state)||void 0===e?void 0:e.filter)||""}},{kind:"field",decorators:[(0,o.SB)()],key:"_diagnosticHandlers",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[(0,v.LM)(this.hass.connection,(e=>{this._entityRegistryEntries=e})),(0,g.q4)(this.hass.connection,(e=>{this._deviceRegistryEntries=e})),(0,m.V3)(this.hass,(async e=>{const t=new Set,i=new Set;e.forEach((e=>{e.context.title_placeholders&&t.add(e.handler),i.add(e.handler)})),await this.hass.loadBackendTranslation("config",Array.from(t)),this._fetchIntegrationManifests(i),await(0,f.y)(),this._configEntriesInProgress=e.map((e=>({...e,localized_title:(0,m.WW)(this.hass.localize,e)})))})),(0,u.DJ)(this.hass,(e=>{let t=!1;const i=[];if(e.forEach((e=>{if(null===e.type||"added"===e.type)i.push({...e.entry,localized_domain_name:(0,b.Lh)(this.hass.localize,e.entry.domain)}),null===e.type&&(t=!0);else if("removed"===e.type)this._configEntries=this._configEntries.filter((t=>t.entry_id!==e.entry.entry_id));else if("updated"===e.type){const t=e.entry;this._configEntries=this._configEntries.map((e=>e.entry_id===t.entry_id?{...t,localized_domain_name:e.localized_domain_name}:e))}})),!i.length&&!t)return;const r=t?[]:this._configEntries;this._configEntries=[...r,...i].sort(((e,t)=>(0,h.f)(e.localized_domain_name+e.title,t.localized_domain_name+t.title)))}),{type:["device","hub","service"]})]}},{kind:"field",key:"_filterConfigEntries",value:()=>(0,s.Z)(((e,t)=>{if(!t)return[...e];return new r.Z(e,{keys:["domain","localized_domain_name","title"],isCaseSensitive:!1,minMatchCharLength:2,threshold:.2}).search(t).map((e=>e.item))}))},{kind:"field",key:"_filterGroupConfigEntries",value(){return(0,s.Z)(((e,t)=>{const i=this._filterConfigEntries(e,t),r=[],n=[];for(let e=i.length-1;e>=0;e--)"ignore"===i[e].source?r.push(i.splice(e,1)[0]):null!==i[e].disabled_by&&n.push(i.splice(e,1)[0]);return[Ve(i),r,Ve(n),n.length]}))}},{kind:"field",key:"_filterConfigEntriesInProgress",value:()=>(0,s.Z)(((e,t)=>{if(!t)return e;return new r.Z(e,{keys:["handler","localized_title"],isCaseSensitive:!1,minMatchCharLength:2,threshold:.2}).search(t).map((e=>e.item))}))},{kind:"method",key:"firstUpdated",value:function(e){je(Ie(i.prototype),"firstUpdated",this).call(this,e);const t=this.hass.loadBackendTranslation("title",void 0,!0);this._fetchManifests(),"/add"===this.route.path&&this._handleAdd(t),this._scanUSBDevices(),(0,l.p)(this.hass,"diagnostics")&&(0,y.pD)(this.hass).then((e=>{const t={};for(const i of e)t[i.domain]=i.handlers.config_entry;this._diagnosticHandlers=t}))}},{kind:"method",key:"updated",value:function(e){je(Ie(i.prototype),"updated",this).call(this,e),this._searchParms.has("config_entry")&&e.has("_configEntries")&&!e.get("_configEntries")&&this._configEntries&&this._highlightEntry()}},{kind:"method",key:"render",value:function(){if(!this._configEntries)return n.dy`<hass-loading-screen
        .hass=${this.hass}
        .narrow=${this.narrow}
      ></hass-loading-screen>`;const[e,t,i,r]=this._filterGroupConfigEntries(this._configEntries,this._filter),o=this._filterConfigEntriesInProgress(this._configEntriesInProgress,this._filter),s=n.dy`
      <div slot=${(0,a.o)(this.narrow?"toolbar-icon":"suffix")}>
        <div class="menu-badge-container">
          ${!this._showDisabled&&this.narrow&&r?n.dy`<span class="badge">${r}</span>`:""}
          <ha-button-menu
            corner="BOTTOM_START"
            multi
            @action=${this._handleMenuAction}
            @click=${this._preventDefault}
          >
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${"M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"}
            >
            </ha-icon-button>
            <ha-check-list-item left .selected=${this._showIgnored}>
              ${this.hass.localize("ui.panel.config.integrations.ignore.show_ignored")}
            </ha-check-list-item>
            <ha-check-list-item left .selected=${this._showDisabled}>
              ${this.hass.localize("ui.panel.config.integrations.disable.show_disabled")}
            </ha-check-list-item>
          </ha-button-menu>
        </div>
        ${this.narrow?n.dy`
              <ha-integration-overflow-menu
                .hass=${this.hass}
                slot="toolbar-icon"
              ></ha-integration-overflow-menu>
            `:""}
      </div>
    `;return n.dy`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${$.configSections.devices}
      >
        ${this.narrow?n.dy`
              <div slot="header">
                <search-input
                  .hass=${this.hass}
                  .filter=${this._filter}
                  class="header"
                  @value-changed=${this._handleSearchChange}
                  .label=${this.hass.localize("ui.panel.config.integrations.search")}
                ></search-input>
              </div>
              ${s}
            `:n.dy`
              <ha-integration-overflow-menu
                .hass=${this.hass}
                slot="toolbar-icon"
              ></ha-integration-overflow-menu>
              <div class="search">
                <search-input
                  .hass=${this.hass}
                  suffix
                  .filter=${this._filter}
                  @value-changed=${this._handleSearchChange}
                  .label=${this.hass.localize("ui.panel.config.integrations.search")}
                >
                  ${!this._showDisabled&&r?n.dy`<div
                        class="active-filters"
                        slot="suffix"
                        @click=${this._preventDefault}
                      >
                        ${this.hass.localize("ui.panel.config.integrations.disable.disabled_integrations",{number:r})}
                        <mwc-button
                          @click=${this._toggleShowDisabled}
                          .label=${this.hass.localize("ui.panel.config.integrations.disable.show")}
                        ></mwc-button>
                      </div>`:""}
                  ${s}
                </search-input>
              </div>
            `}

        <div class="container">
          ${this._showIgnored?t.map((e=>n.dy`
                  <ha-ignored-config-entry-card
                    .hass=${this.hass}
                    .manifest=${this._manifests[e.domain]}
                    .entry=${e}
                    @change=${this._handleFlowUpdated}
                  ></ha-ignored-config-entry-card>
                `)):""}
          ${o.length?o.map((e=>n.dy`
                  <ha-config-flow-card
                    .hass=${this.hass}
                    .manifest=${this._manifests[e.handler]}
                    .flow=${e}
                    @change=${this._handleFlowUpdated}
                  ></ha-config-flow-card>
                `)):""}
          ${this._showDisabled?Array.from(i.entries()).map((([e,t])=>n.dy`<ha-integration-card
                    data-domain=${e}
                    disabled
                    .hass=${this.hass}
                    .domain=${e}
                    .items=${t}
                    .manifest=${this._manifests[e]}
                    .entityRegistryEntries=${this._entityRegistryEntries}
                    .deviceRegistryEntries=${this._deviceRegistryEntries}
                  ></ha-integration-card> `)):""}
          ${e.size?Array.from(e.entries()).map((([e,t])=>n.dy`<ha-integration-card
                    data-domain=${e}
                    .hass=${this.hass}
                    .domain=${e}
                    .items=${t}
                    .manifest=${this._manifests[e]}
                    .entityRegistryEntries=${this._entityRegistryEntries}
                    .deviceRegistryEntries=${this._deviceRegistryEntries}
                    .supportsDiagnostics=${!!this._diagnosticHandlers&&this._diagnosticHandlers[e]}
                  ></ha-integration-card>`)):this._filter&&!o.length&&!e.size&&this._configEntries.length?n.dy`
                <div class="empty-message">
                  <h1>
                    ${this.hass.localize("ui.panel.config.integrations.none_found")}
                  </h1>
                  <p>
                    ${this.hass.localize("ui.panel.config.integrations.none_found_detail")}
                  </p>
                  <mwc-button
                    @click=${this._createFlow}
                    unelevated
                    .label=${this.hass.localize("ui.panel.config.integrations.add_integration")}
                  ></mwc-button>
                </div>
              `:this._filter||this._showIgnored&&0!==t.length||this._showDisabled&&0!==i.size||0!==e.size?"":n.dy`
                <div class="empty-message">
                  <h1>
                    ${this.hass.localize("ui.panel.config.integrations.none")}
                  </h1>
                  <p>
                    ${this.hass.localize("ui.panel.config.integrations.no_integrations")}
                  </p>
                  <mwc-button
                    @click=${this._createFlow}
                    unelevated
                    .label=${this.hass.localize("ui.panel.config.integrations.add_integration")}
                  ></mwc-button>
                </div>
              `}
        </div>
        <ha-fab
          slot="fab"
          .label=${this.hass.localize("ui.panel.config.integrations.add_integration")}
          extended
          @click=${this._createFlow}
        >
          <ha-svg-icon slot="icon" .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
        </ha-fab>
      </hass-tabs-subpage>
    `}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_scanUSBDevices",value:async function(){var e;(0,l.p)(this.hass,"usb")&&await(e=this.hass,e.callWS({type:"usb/scan"}))}},{kind:"method",key:"_fetchManifests",value:async function(e){const t=await(0,b.F3)(this.hass,e),i={...this._manifests};for(const e of t)i[e.domain]=e;this._manifests=i}},{kind:"method",key:"_fetchIntegrationManifests",value:async function(e){const t=[];for(const i of e)if(!(i in this._manifests)){if(this._extraFetchedManifests){if(this._extraFetchedManifests.has(i))continue}else this._extraFetchedManifests=new Set;this._extraFetchedManifests.add(i),t.push(i)}t.length&&await this._fetchManifests(t)}},{kind:"method",key:"_handleFlowUpdated",value:function(){(0,m.ZJ)(this.hass.connection).refresh(),this._fetchManifests()}},{kind:"method",key:"_createFlow",value:function(){(0,De.E)(this,{initialFilter:this._filter})}},{kind:"method",key:"_handleMenuAction",value:function(e){switch(e.detail.index){case 0:this._showIgnored=!this._showIgnored;break;case 1:this._toggleShowDisabled()}}},{kind:"method",key:"_toggleShowDisabled",value:function(){this._showDisabled=!this._showDisabled}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value,history.replaceState({filter:this._filter},"")}},{kind:"method",key:"_highlightEntry",value:async function(){await(0,f.y)();const e=this._searchParms.get("config_entry"),t=this._configEntries.find((t=>t.entry_id===e));if(!t)return;const i=this.shadowRoot.querySelector(`[data-domain=${null==t?void 0:t.domain}]`);i&&(i.scrollIntoView({block:"center"}),i.classList.add("highlight"),i.selectedConfigEntryId=e)}},{kind:"method",key:"_handleAdd",value:async function(e){const t=(0,p.io)("brand"),i=(0,p.io)("domain");if((0,d.c)("/config/integrations",{replace:!0}),t)return void(0,De.E)(this,{brand:t});if(!i)return;const r=await(0,w.G)(this.hass),n={...r.core.integration,...r.custom.integration},o=(0,w.p)(n,i);if(null!=o&&o.config_flow){const t=await e;var a;if(await(0,_.g7)(this,{title:t("ui.panel.config.integrations.confirm_new",{integration:o.name||(0,b.Lh)(t,i)})}))(0,k.t)(this,{dialogClosedCallback:()=>{this._handleFlowUpdated()},startFlowHandler:i,manifest:await(0,b.t4)(this.hass,i),showAdvanced:null===(a=this.hass.userData)||void 0===a?void 0:a.showAdvanced});return}if(null!=o&&o.supported_by){const t=await e,r=(0,w.p)(n,o.supported_by);if(!r)return;return void(0,_.g7)(this,{text:this.hass.localize("ui.panel.config.integrations.config_flow.supported_brand_flow",{supported_brand:o.name||(0,b.Lh)(t,i),flow_domain_name:r.name||(0,b.Lh)(t,o.supported_by)}),confirm:async()=>{var e;["zha","zwave_js"].includes(o.supported_by)?(0,c.D)(this,this.hass,o.supported_by):(0,k.t)(this,{dialogClosedCallback:()=>{this._handleFlowUpdated()},startFlowHandler:o.supported_by,manifest:await(0,b.t4)(this.hass,o.supported_by),showAdvanced:null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced})}})}if(x.y.includes(i))return void(0,d.c)(`/config/helpers/add?domain=${i}`,{replace:!0});const s={...r.core.helper,...r.custom.helper};(0,w.p)(s,i)?(0,d.c)(`/config/helpers/add?domain=${i}`,{replace:!0}):(0,_.Ys)(this,{title:this.hass.localize("ui.panel.config.integrations.config_flow.error"),text:this.hass.localize("ui.panel.config.integrations.config_flow.no_config_flow")})}},{kind:"get",static:!0,key:"styles",value:function(){return[C.Qx,n.iv`
        :host([narrow]) hass-tabs-subpage {
          --main-title-margin: 0;
        }
        ha-button-menu {
          margin-left: 8px;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 16px 16px;
          padding: 8px 16px 16px;
          margin-bottom: 64px;
        }
        .container > * {
          max-width: 500px;
        }

        .empty-message {
          margin: auto;
          text-align: center;
        }
        .empty-message h1 {
          margin-bottom: 0;
        }
        search-input {
          --mdc-text-field-fill-color: var(--sidebar-background-color);
          --mdc-text-field-idle-line-color: var(--divider-color);
          --text-field-overflow: visible;
        }
        search-input.header {
          display: block;
          color: var(--secondary-text-color);
          margin-left: 8px;
          --mdc-ripple-color: transparant;
        }
        .search {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          align-items: center;
          height: 56px;
          position: sticky;
          top: 0;
          z-index: 2;
        }
        .search search-input {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
        }
        .active-filters {
          color: var(--primary-text-color);
          position: relative;
          display: flex;
          align-items: center;
          padding: 2px 2px 2px 8px;
          font-size: 14px;
          width: max-content;
          cursor: initial;
        }
        .active-filters mwc-button {
          margin-left: 8px;
        }
        .active-filters::before {
          background-color: var(--primary-color);
          opacity: 0.12;
          border-radius: 4px;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          content: "";
        }
        .badge {
          min-width: 20px;
          box-sizing: border-box;
          border-radius: 50%;
          font-weight: 400;
          background-color: var(--primary-color);
          line-height: 20px;
          text-align: center;
          padding: 0px 4px;
          color: var(--text-primary-color);
          position: absolute;
          right: 0px;
          top: 4px;
          font-size: 0.65em;
        }
        .menu-badge-container {
          position: relative;
        }
        ha-button-menu {
          color: var(--primary-text-color);
        }
      `]}}]}}),(0,E.f)(n.oi))},70332:(e,t,i)=>{i.d(t,{B:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(6294),i.e(85084),i.e(45507),i.e(32657),i.e(81751)]).then(i.bind(i,81751)),o=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-add-node",dialogImport:n,dialogParams:t})}},72160:(e,t,i)=>{i.d(t,{E:()=>n,u:()=>o});var r=i(47181);const n=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-add-integration",dialogImport:()=>Promise.all([i.e(85084),i.e(81480),i.e(79685)]).then(i.bind(i,79685)),dialogParams:t})},o=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-yaml-integration",dialogImport:()=>i.e(64348).then(i.bind(i,64348)),dialogParams:t})}},11254:(e,t,i)=>{i.d(t,{X1:()=>r,RU:()=>n,u4:()=>o,zC:()=>a});const r=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,n=e=>`https://brands.home-assistant.io/hardware/${e.category}/${e.darkOptimized?"dark_":""}${e.manufacturer}${e.model?`_${e.model}`:""}.png`,o=e=>e.split("/")[4],a=e=>e.startsWith("https://brands.home-assistant.io/")},27322:(e,t,i)=>{i.d(t,{R:()=>r});const r=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`},25936:(e,t,i)=>{i.d(t,{N:()=>r});const r=(e,t="")=>{const i=document.createElement("a");i.target="_blank",i.href=e,i.download=t,document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click")),document.body.removeChild(i)}},81563:(e,t,i)=>{i.d(t,{E_:()=>m,i9:()=>f,_Y:()=>c,pt:()=>o,OR:()=>s,hN:()=>a,ws:()=>u,fk:()=>d,hl:()=>p});var r=i(15304);const{H:n}=r.Al,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=(e,t)=>{var i,r;return void 0===t?void 0!==(null===(i=e)||void 0===i?void 0:i._$litType$):(null===(r=e)||void 0===r?void 0:r._$litType$)===t},s=e=>void 0===e.strings,l=()=>document.createComment(""),c=(e,t,i)=>{var r;const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(l(),a),r=o.insertBefore(l(),a);i=new n(t,r,e,e.options)}else{const t=i._$AB.nextSibling,n=i._$AM,s=n!==e;if(s){let t;null===(r=i._$AQ)||void 0===r||r.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==n._$AU&&i._$AP(t)}if(t!==a||s){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,a),e=t}}}return i},d=(e,t,i=e)=>(e._$AI(t,i),e),h={},p=(e,t=h)=>e._$AH=t,f=e=>e._$AH,u=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const r=e._$AB.nextSibling;for(;i!==r;){const e=i.nextSibling;i.remove(),i=e}},m=e=>{e._$AR()}},57835:(e,t,i)=>{i.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=i(38941)}}]);
//# sourceMappingURL=21673732.js.map