"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[39375],{60228:(e,t,i)=>{i.d(t,{j:()=>n});var r=i(7323);const n=(e,t)=>(a(t)||o(e,t))&&!s(e,t),o=(e,t)=>t.component?(0,r.p)(e,t.component):!t.components||t.components.some((t=>(0,r.p)(e,t))),a=e=>e.core,s=(e,t)=>(e=>e.advancedOnly)(t)&&!(e=>{var t;return null===(t=e.userData)||void 0===t?void 0:t.showAdvanced})(e)},96305:(e,t,i)=>{i.d(t,{v:()=>r});const r=(e,t)=>e&&Object.keys(e.services).filter((i=>t in e.services[i]))},63864:(e,t,i)=>{i.d(t,{I:()=>r});const r=(e,t,i,r)=>{const[n,o,a]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===r?Number(o)>=i:Number(o)>i)||void 0!==r&&Number(n)===t&&Number(o)===i&&Number(a)>=r}},58831:(e,t,i)=>{i.d(t,{M:()=>r});const r=e=>e.substr(0,e.indexOf("."))},27269:(e,t,i)=>{i.d(t,{p:()=>r});const r=e=>e.substr(e.indexOf(".")+1)},91741:(e,t,i)=>{i.d(t,{a:()=>n,C:()=>o});var r=i(27269);const n=(e,t)=>void 0===t.friendly_name?(0,r.p)(e).replace(/_/g," "):t.friendly_name||"",o=e=>n(e.entity_id,e.attributes)},85415:(e,t,i)=>{i.d(t,{$:()=>r,f:()=>n});const r=(e,t)=>e<t?-1:e>t?1:0,n=(e,t)=>r(e.toLowerCase(),t.toLowerCase())},88324:(e,t,i)=>{var r=i(67182),n=i(37500),o=i(33310);function a(){a=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=u(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function s(e){var t,i=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=a();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var p=t((function(e){n.initializeInstanceElements(e,u.elements)}),i),u=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(d(o.descriptor)||d(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(p.d.map(s)),e);n.initializeClassElements(p.F,u.elements),n.runClassFinishers(p.F,u.finishers)}([(0,o.Mo)("ha-chip")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hasIcon",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hasTrailingIcon",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"noText",value:()=>!1},{kind:"method",key:"render",value:function(){return n.dy`
      <div class="mdc-chip ${this.noText?"no-text":""}">
        ${this.hasIcon?n.dy`<div class="mdc-chip__icon mdc-chip__icon--leading">
              <slot name="icon"></slot>
            </div>`:null}
        <div class="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabindex="0" class="mdc-chip__primary-action">
            <span class="mdc-chip__text"><slot></slot></span>
          </span>
        </span>
        ${this.hasTrailingIcon?n.dy`<div class="mdc-chip__icon mdc-chip__icon--trailing">
              <slot name="trailing-icon"></slot>
            </div>`:null}
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ${(0,n.$m)(r)}
      .mdc-chip {
        background-color: var(
          --ha-chip-background-color,
          rgba(var(--rgb-primary-text-color), 0.15)
        );
        color: var(--ha-chip-text-color, var(--primary-text-color));
      }

      .mdc-chip.no-text {
        padding: 0 10px;
      }

      .mdc-chip:hover {
        color: var(--ha-chip-text-color, var(--primary-text-color));
      }

      .mdc-chip__icon--leading,
      .mdc-chip__icon--trailing {
        --mdc-icon-size: 18px;
        line-height: 14px;
        color: var(--ha-chip-icon-color, var(--ha-chip-text-color));
      }
      .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,
      .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
        margin-right: -4px;
        margin-inline-start: -4px;
        margin-inline-end: 4px;
        direction: var(--direction);
      }

      span[role="gridcell"] {
        line-height: 14px;
      }
    `}}]}}),n.oi)},90806:(e,t,i)=>{var r=i(44636),n=i(37500);function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=p(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function a(e){var t,i=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=o();if(r)for(var d=0;d<r.length;d++)n=r[d](n);var p=t((function(e){n.initializeInstanceElements(e,u.elements)}),i),u=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(p.d.map(a)),e);n.initializeClassElements(p.F,u.elements),n.runClassFinishers(p.F,u.finishers)}([(0,i(33310).Mo)("ha-header-bar")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return n.dy`<header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
          id="navigation"
        >
          <slot name="navigationIcon"></slot>
          <span class="mdc-top-app-bar__title">
            <slot name="title"></slot>
          </span>
        </section>
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
          id="actions"
          role="toolbar"
        >
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>`}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.$m)(r),n.iv`
        .mdc-top-app-bar {
          position: static;
          color: var(--mdc-theme-on-primary, #fff);
        }
      `]}}]}}),n.oi)},3555:(e,t,i)=>{var r=i(86251),n=i(31338),o=i(37500),a=i(33310);function s(){s=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!d(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=h(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:u(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=u(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function l(e){var t,i=h(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function d(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function m(e,t,i){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},m(e,t,i||e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}!function(e,t,i,r){var n=s();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,u.elements)}),i),u=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(p(o.descriptor)||p(n.descriptor)){if(d(o)||d(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(d(o)){if(d(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else t.push(o)}return t}(a.d.map(l)),e);n.initializeClassElements(a.F,u.elements),n.runClassFinishers(a.F,u.finishers)}([(0,a.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"method",key:"updated",value:function(e){m(y(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity())}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return o.dy`
      <span
        class="mdc-text-field__icon mdc-text-field__icon--${i}"
        tabindex=${t?1:-1}
      >
        <slot name="${i}Icon"></slot>
      </span>
    `}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,o.iv`
      .mdc-text-field__input {
        width: var(--ha-textfield-input-width, 100%);
      }
      .mdc-text-field:not(.mdc-text-field--with-leading-icon) {
        padding: var(--text-field-padding, 0px 16px);
      }
      .mdc-text-field__affix--suffix {
        padding-left: var(--text-field-suffix-padding-left, 12px);
        padding-right: var(--text-field-suffix-padding-right, 0px);
        padding-inline-start: var(--text-field-suffix-padding-left, 12px);
        padding-inline-end: var(--text-field-suffix-padding-right, 0px);
        direction: var(--direction);
      }
      .mdc-text-field--with-leading-icon {
        padding-inline-start: var(--text-field-suffix-padding-left, 0px);
        padding-inline-end: var(--text-field-suffix-padding-right, 16px);
        direction: var(--direction);
      }

      .mdc-text-field:not(.mdc-text-field--disabled)
        .mdc-text-field__affix--suffix {
        color: var(--secondary-text-color);
      }

      .mdc-text-field__icon {
        color: var(--secondary-text-color);
      }

      .mdc-text-field__icon--leading {
        margin-inline-start: 16px;
        margin-inline-end: 8px;
        direction: var(--direction);
      }

      input {
        text-align: var(--text-field-text-align);
      }

      /* Chrome, Safari, Edge, Opera */
      :host([no-spinner]) input::-webkit-outer-spin-button,
      :host([no-spinner]) input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      :host([no-spinner]) input[type="number"] {
        -moz-appearance: textfield;
      }

      .mdc-text-field__ripple {
        overflow: hidden;
      }

      .mdc-text-field {
        overflow: var(--text-field-overflow);
      }

      .mdc-floating-label {
        inset-inline-start: 16px !important;
        inset-inline-end: initial !important;
        transform-origin: var(--float-start);
        direction: var(--direction);
        transform-origin: var(--float-start);
      }

      .mdc-text-field--with-leading-icon.mdc-text-field--filled
        .mdc-floating-label {
        max-width: calc(100% - 48px);
        inset-inline-start: 48px !important;
        inset-inline-end: initial !important;
        direction: var(--direction);
      }

      .mdc-text-field__input[type="number"] {
        direction: var(--direction);
      }
    `,"rtl"===document.dir?o.iv`
          .mdc-text-field__affix--suffix,
          .mdc-text-field--with-leading-icon,
          .mdc-text-field__icon--leading,
          .mdc-floating-label,
          .mdc-text-field--with-leading-icon.mdc-text-field--filled
            .mdc-floating-label,
          .mdc-text-field__input[type="number"] {
            direction: rtl;
          }
        `:o.iv``]}]}}),r.P)},12350:(e,t,i)=>{i.d(t,{yt:()=>o});var r=i(63864),n=i(41682);const o=async e=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}):(0,n.rY)(await e.callApi("GET","hassio/addons"))},41682:(e,t,i)=>{i.d(t,{rY:()=>n,js:()=>o,yz:()=>s,yd:()=>l});var r=i(63864);const n=e=>e.data,o=e=>"object"==typeof e?"object"==typeof e.body?e.body.message||"Unknown error, see supervisor logs":e.body||e.message||"Unknown error, see supervisor logs":e,a=new Set([502,503,504]),s=e=>!!(e&&e.status_code&&a.has(e.status_code))||!(!e||!e.message||!e.message.includes("ERR_CONNECTION_CLOSED")&&!e.message.includes("ERR_CONNECTION_RESET")),l=async(e,t)=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:`/${t}/stats`,method:"get"}):n(await e.callApi("GET",`hassio/${t}/stats`))},24833:(e,t,i)=>{i.d(t,{oF:()=>d,kK:()=>p,k6:()=>u,zG:()=>h,BD:()=>f,Sk:()=>y,X4:()=>v,UJ:()=>g,Fj:()=>b,M$:()=>w});var r=i(49706),n=i(58831),o=i(22311),a=i(40095),s=i(85415),l=i(26765),c=i(81796);const d=1,p=2,u=4,h=8,f=16,m=e=>(0,a.f)(e,u)&&"number"==typeof e.in_progress,y=e=>(e=>m(e.attributes))(e)||!!e.attributes.in_progress,v=e=>m(e)||!!e.in_progress,g=(e,t)=>e.callWS({type:"update/release_notes",entity_id:t}),k=e=>Object.values(e).filter((e=>"update"===(0,o.N)(e))).sort(((e,t)=>"ioBroker Core"===e.attributes.title?-3:"ioBroker Core"===t.attributes.title?3:"ioBroker Operating System"===e.attributes.title?-2:"ioBroker Operating System"===t.attributes.title?2:"ioBroker Supervisor"===e.attributes.title?-1:"ioBroker Supervisor"===t.attributes.title?1:(0,s.f)(e.attributes.title||e.attributes.friendly_name||"",t.attributes.title||t.attributes.friendly_name||""))),b=(e,t=!1)=>k(e).filter((e=>((e,t=!1)=>(e.state===r.uo||t&&Boolean(e.attributes.skipped_version))&&(0,a.e)(e,d))(e,t))),w=async(e,t)=>{const i=k(t.states).map((e=>e.entity_id));if(!i.length)return void(0,l.Ys)(e,{title:t.localize("ui.panel.config.updates.no_update_entities.title"),text:t.localize("ui.panel.config.updates.no_update_entities.description"),warning:!0});let r=0;const o=await t.connection.subscribeEvents((i=>{"update"===(0,n.M)(i.data.entity_id)&&(r++,(0,c.C)(e,{message:t.localize("ui.panel.config.updates.updates_refreshed",{count:r})}))}),"state_changed");await t.callService("homeassistant","update_entity",{entity_id:i}),await new Promise((e=>setTimeout(e,1e4))),o(),0===r&&(0,c.C)(e,{message:t.localize("ui.panel.config.updates.no_new_updates")})}},26765:(e,t,i)=>{i.d(t,{Ys:()=>a,g7:()=>s,D9:()=>l});var r=i(47181);const n=()=>Promise.all([i.e(85084),i.e(1281)]).then(i.bind(i,1281)),o=(e,t,i)=>new Promise((o=>{const a=t.cancel,s=t.confirm;(0,r.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:n,dialogParams:{...t,...i,cancel:()=>{o(!(null==i||!i.prompt)&&null),a&&a()},confirm:e=>{o(null==i||!i.prompt||e),s&&s(e)}}})})),a=(e,t)=>o(e,t),s=(e,t)=>o(e,t,{confirmation:!0}),l=(e,t)=>o(e,t,{prompt:!0})},46176:(e,t,i)=>{i.r(t),i.d(t,{QuickBar:()=>Z});i(9874),i(24103),i(44577);var r=i(37500),n=i(33310),o=i(51346),a=i(70483),s=i(14516),l=i(60228),c=i(96305),d=i(7323),p=i(47181),u=i(58831),h=i(91741),f=i(16023),m=i(83849),y=i(85415);let v;!function(e){e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde"}(v||(v={}));const g=128;function k(){const e=[],t=[];for(let e=0;e<=g;e++)t[e]=0;for(let i=0;i<=g;i++)e.push(t.slice(0));return e}function b(e,t){if(t<0||t>=e.length)return!1;const i=e.codePointAt(t);switch(i){case v.Underline:case v.Dash:case v.Period:case v.Space:case v.Slash:case v.Backslash:case v.SingleQuote:case v.DoubleQuote:case v.Colon:case v.DollarSign:case v.LessThan:case v.OpenParen:case v.OpenSquareBracket:return!0;case void 0:return!1;default:return(r=i)>=127462&&r<=127487||8986===r||8987===r||9200===r||9203===r||r>=9728&&r<=10175||11088===r||11093===r||r>=127744&&r<=128591||r>=128640&&r<=128764||r>=128992&&r<=129003||r>=129280&&r<=129535||r>=129648&&r<=129750?!0:!1}var r}function w(e,t){if(t<0||t>=e.length)return!1;switch(e.charCodeAt(t)){case v.Space:case v.Tab:return!0;default:return!1}}function _(e,t,i){return t[e]!==i[e]}var x;function E(e,t,i,r,n,o,a){const s=e.length>g?g:e.length,l=r.length>g?g:r.length;if(i>=s||o>=l||s-i>l-o)return;if(!function(e,t,i,r,n,o,a=!1){for(;t<i&&n<o;)e[t]===r[n]&&(a&&(A[t]=n),t+=1),n+=1;return t===i}(t,i,s,n,o,l,!0))return;let c;!function(e,t,i,r,n,o){let a=e-1,s=t-1;for(;a>=i&&s>=r;)n[a]===o[s]&&(S[a]=s,a--),s--}(s,l,i,o,t,n);let d,p,u=1;const h=[!1];for(c=1,d=i;d<s;c++,d++){const a=A[d],f=S[d],m=d+1<s?S[d+1]:l;for(u=a-o+1,p=a;p<m;u++,p++){let s=Number.MIN_SAFE_INTEGER,m=!1;p<=f&&(s=C(e,t,d,i,r,n,p,l,o,0===D[c-1][u-1],h));let y=0;s!==Number.MAX_SAFE_INTEGER&&(m=!0,y=s+T[c-1][u-1]);const v=p>a,g=v?T[c][u-1]+(D[c][u-1]>0?-5:0):0,k=p>a+1&&D[c][u-1]>0,b=k?T[c][u-2]+(D[c][u-2]>0?-5:0):0;if(k&&(!v||b>=g)&&(!m||b>=y))T[c][u]=b,I[c][u]=x.LeftLeft,D[c][u]=0;else if(v&&(!m||g>=y))T[c][u]=g,I[c][u]=x.Left,D[c][u]=0;else{if(!m)throw new Error("not possible");T[c][u]=y,I[c][u]=x.Diag,D[c][u]=D[c-1][u-1]+1}}}if(!h[0]&&!a)return;c--,u--;const f=[T[c][u],o];let m=0,y=0;for(;c>=1;){let e=u;do{const t=I[c][e];if(t===x.LeftLeft)e-=2;else{if(t!==x.Left)break;e-=1}}while(e>=1);m>1&&t[i+c-1]===n[o+u-1]&&!_(e+o-1,r,n)&&m+1>D[c][e]&&(e=u),e===u?m++:m=1,y||(y=e),c--,u=e-1,f.push(u)}l===s&&(f[0]+=2);const v=y-s;return f[0]-=v,f}function C(e,t,i,r,n,o,a,s,l,c,d){if(t[i]!==o[a])return Number.MIN_SAFE_INTEGER;let p=1,u=!1;return a===i-r?p=e[i]===n[a]?7:5:!_(a,n,o)||0!==a&&_(a-1,n,o)?!b(o,a)||0!==a&&b(o,a-1)?(b(o,a-1)||w(o,a-1))&&(p=5,u=!0):p=5:(p=e[i]===n[a]?7:5,u=!0),p>1&&i===r&&(d[0]=!0),u||(u=_(a,n,o)||b(o,a-1)||w(o,a-1)),i===r?a>l&&(p-=u?3:5):p+=c?u?2:0:u?0:1,a+1===s&&(p-=u?3:5),p}!function(e){e[e.Diag=1]="Diag",e[e.Left=2]="Left",e[e.LeftLeft=3]="LeftLeft"}(x||(x={}));const A=P(256),S=P(256),D=k(),T=k(),I=k();function P(e){const t=[];for(let i=0;i<=e;i++)t[i]=0;return t}const z=(e,t)=>t.map((t=>(t.score=((e,t)=>{let i=Number.NEGATIVE_INFINITY;for(const r of t.strings){const t=E(e,e.toLowerCase(),0,r,r.toLowerCase(),0,!0);if(!t)continue;const n=0===t[0]?1:t[0];n>i&&(i=n)}if(i!==Number.NEGATIVE_INFINITY)return i})(e,t),t))).filter((e=>void 0!==e.score)).sort((({score:e=0},{score:t=0})=>e>t?-1:e<t?1:0));var $=i(38346),O=(i(88324),i(31206),i(90806),i(10983),i(3555),i(12350)),L=i(5986),F=i(1887),j=i(29311),N=i(11654),M=i(26765);function H(){H=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!q(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?G(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=U(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:K(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=K(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function B(e){var t,i=U(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function V(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function q(e){return e.decorators&&e.decorators.length}function R(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function K(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function U(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const Q="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z";let Z=function(e,t,i,r){var n=H();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(R(o.descriptor)||R(n.descriptor)){if(q(o)||q(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(q(o)){if(q(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}V(o,n)}else t.push(o)}return t}(a.d.map(B)),e);return n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("ha-quick-bar")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_commandItems",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_entityItems",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_filter",value:()=>""},{kind:"field",decorators:[(0,n.SB)()],key:"_search",value:()=>""},{kind:"field",decorators:[(0,n.SB)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_commandMode",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_hint",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-textfield",!1)],key:"_filterInputField",value:void 0},{kind:"field",key:"_focusSet",value:()=>!1},{kind:"field",key:"_focusListElement",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._commandMode=e.commandMode||this._toggleIfAlreadyOpened(),this._hint=e.hint,this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,this._initializeItemsIfNeeded(),this._open=!0}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._opened=!1,this._focusSet=!1,this._filter="",this._search="",(0,p.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"field",key:"_getItems",value(){return(0,s.Z)(((e,t,i,r)=>{const n=e?t:i;return n&&r&&" "!==r?this._filterItems(n,r):n}))}},{kind:"method",key:"render",value:function(){if(!this._open)return r.dy``;const e=this._getItems(this._commandMode,this._commandItems,this._entityItems,this._filter);return r.dy`
      <ha-dialog
        .heading=${this.hass.localize("ui.dialogs.quick-bar.title")}
        open
        @opened=${this._handleOpened}
        @closed=${this.closeDialog}
        hideActions
      >
        <div slot="heading" class="heading">
          <ha-textfield
            dialogInitialFocus
            .placeholder=${this.hass.localize("ui.dialogs.quick-bar.filter_placeholder")}
            aria-label=${this.hass.localize("ui.dialogs.quick-bar.filter_placeholder")}
            .value=${this._commandMode?`>${this._search}`:this._search}
            icon
            .iconTrailing=${void 0!==this._search||this._narrow}
            @input=${this._handleSearchChange}
            @keydown=${this._handleInputKeyDown}
            @focus=${this._setFocusFirstListItem}
          >
            ${this._commandMode?r.dy`
                  <ha-svg-icon
                    slot="leadingIcon"
                    class="prefix"
                    .path=${"M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z"}
                  ></ha-svg-icon>
                `:r.dy`
                  <ha-svg-icon
                    slot="leadingIcon"
                    class="prefix"
                    .path=${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}
                  ></ha-svg-icon>
                `}
            ${this._search||this._narrow?r.dy`
                  <div slot="trailingIcon">
                    ${this._search&&r.dy`<ha-icon-button
                      @click=${this._clearSearch}
                      .label=${this.hass.localize("ui.common.clear")}
                      .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                    ></ha-icon-button>`}
                    ${this._narrow?r.dy`
                          <mwc-button
                            .label=${this.hass.localize("ui.common.close")}
                            @click=${this.closeDialog}
                          ></mwc-button>
                        `:""}
                  </div>
                `:""}
          </ha-textfield>
        </div>
        ${e?0===e.length?r.dy`
              <div class="nothing-found">
                ${this.hass.localize("ui.dialogs.quick-bar.nothing_found")}
              </div>
            `:r.dy`
              <mwc-list>
                ${this._opened?r.dy`<lit-virtualizer
                      scroller
                      @keydown=${this._handleListItemKeyDown}
                      @rangechange=${this._handleRangeChanged}
                      @click=${this._handleItemClick}
                      class="ha-scrollbar"
                      style=${(0,a.V)({height:this._narrow?"calc(100vh - 56px)":`${Math.min(e.length*(this._commandMode?56:72)+26,500)}px`})}
                      .items=${e}
                      .renderItem=${this._renderItem}
                    >
                    </lit-virtualizer>`:""}
              </mwc-list>
            `:r.dy`<ha-circular-progress
              size="small"
              active
            ></ha-circular-progress>`}
        ${this._hint?r.dy`<ha-tip>${this._hint}</ha-tip>`:""}
      </ha-dialog>
    `}},{kind:"method",key:"_initializeItemsIfNeeded",value:async function(){this._commandMode?this._commandItems=this._commandItems||await this._generateCommandItems():this._entityItems=this._entityItems||this._generateEntityItems()}},{kind:"method",key:"_handleOpened",value:function(){this._opened=!0}},{kind:"method",key:"_handleRangeChanged",value:async function(e){this._focusSet||e.firstVisible>-1&&(this._focusSet=!0,await this.updateComplete,this._setFocusFirstListItem())}},{kind:"field",key:"_renderItem",value(){return(e,t)=>e?(e=>void 0!==e.categoryKey)(e)?this._renderCommandItem(e,t):this._renderEntityItem(e,t):r.dy``}},{kind:"method",key:"_renderEntityItem",value:function(e,t){return r.dy`
      <mwc-list-item
        .twoline=${Boolean(e.altText)}
        .item=${e}
        index=${(0,o.o)(t)}
        graphic="icon"
      >
        ${e.iconPath?r.dy`<ha-svg-icon
              .path=${e.iconPath}
              class="entity"
              slot="graphic"
            ></ha-svg-icon>`:r.dy`<ha-icon
              .icon=${e.icon}
              class="entity"
              slot="graphic"
            ></ha-icon>`}
        <span>${e.primaryText}</span>
        ${e.altText?r.dy`
              <span slot="secondary" class="item-text secondary"
                >${e.altText}</span
              >
            `:null}
      </mwc-list-item>
    `}},{kind:"method",key:"_renderCommandItem",value:function(e,t){return r.dy`
      <mwc-list-item
        .item=${e}
        index=${(0,o.o)(t)}
        class="command-item"
        hasMeta
      >
        <span>
          <ha-chip
            .label=${e.categoryText}
            hasIcon
            class="command-category ${e.categoryKey}"
          >
            ${e.iconPath?r.dy`<ha-svg-icon
                  .path=${e.iconPath}
                  slot="icon"
                ></ha-svg-icon>`:""}
            ${e.categoryText}</ha-chip
          >
        </span>

        <span class="command-text">${e.primaryText}</span>
      </mwc-list-item>
    `}},{kind:"method",key:"processItemAndCloseDialog",value:async function(e,t){this._addSpinnerToCommandItem(t),await e.action(),this.closeDialog()}},{kind:"method",key:"_handleInputKeyDown",value:function(e){if("Enter"===e.code){const e=this._getItemAtIndex(0);if(!e||"none"===e.style.display)return;this.processItemAndCloseDialog(e.item,0)}else if("ArrowDown"===e.code){var t;e.preventDefault(),null===(t=this._getItemAtIndex(0))||void 0===t||t.focus(),this._focusSet=!0,this._focusListElement=this._getItemAtIndex(0)}}},{kind:"method",key:"_getItemAtIndex",value:function(e){return this.renderRoot.querySelector(`mwc-list-item[index="${e}"]`)}},{kind:"method",key:"_addSpinnerToCommandItem",value:function(e){var t;const i=document.createElement("ha-circular-progress");i.size="small",i.slot="meta",i.active=!0,null===(t=this._getItemAtIndex(e))||void 0===t||t.appendChild(i)}},{kind:"method",key:"_handleSearchChange",value:function(e){const t=e.currentTarget.value,i=this._commandMode,r=this._search;let n,o;t.startsWith(">")?(n=!0,o=t.substring(1)):(n=!1,o=t),i===n&&r===o||(this._commandMode=n,this._search=o,this._hint&&(this._hint=void 0),i!==this._commandMode?(this._focusSet=!1,this._initializeItemsIfNeeded(),this._filter=this._search):(this._focusSet&&this._focusListElement&&(this._focusSet=!1,this._focusListElement.rippleHandlers.endFocus()),this._debouncedSetFilter(this._search)))}},{kind:"method",key:"_clearSearch",value:function(){this._search="",this._filter=""}},{kind:"field",key:"_debouncedSetFilter",value(){return(0,$.D)((e=>{this._filter=e}),100)}},{kind:"method",key:"_setFocusFirstListItem",value:function(){var e;null===(e=this._getItemAtIndex(0))||void 0===e||e.rippleHandlers.startFocus(),this._focusListElement=this._getItemAtIndex(0)}},{kind:"method",key:"_handleListItemKeyDown",value:function(e){const t=1===e.key.length,i=e.target.getAttribute("index"),r="0"===i;var n,o,a,s;(this._focusListElement=e.target,"ArrowDown"===e.key)&&(null===(n=this._getItemAtIndex(Number(i)+1))||void 0===n||n.focus());"ArrowUp"===e.key&&(r?null===(o=this._filterInputField)||void 0===o||o.focus():null===(a=this._getItemAtIndex(Number(i)-1))||void 0===a||a.focus());("Enter"!==e.key&&" "!==e.key||this.processItemAndCloseDialog(e.target.item,Number(e.target.getAttribute("index"))),"Backspace"===e.key||t)&&(e.currentTarget.scrollTop=0,null===(s=this._filterInputField)||void 0===s||s.focus())}},{kind:"method",key:"_handleItemClick",value:function(e){const t=e.target.closest("mwc-list-item");this.processItemAndCloseDialog(t.item,Number(t.getAttribute("index")))}},{kind:"method",key:"_generateEntityItems",value:function(){return Object.keys(this.hass.states).map((e=>{const t=this.hass.states[e],i={primaryText:(0,h.C)(t),altText:e,icon:t.attributes.icon,iconPath:t.attributes.icon?void 0:(0,f.K)((0,u.M)(e),t),action:()=>(0,p.B)(this,"hass-more-info",{entityId:e})};return{...i,strings:[i.primaryText,i.altText]}})).sort(((e,t)=>(0,y.f)(e.primaryText,t.primaryText)))}},{kind:"method",key:"_generateCommandItems",value:async function(){return[...this._generateReloadCommands(),...this._generateServerControlCommands(),...await this._generateNavigationCommands()].sort(((e,t)=>(0,y.f)(e.strings.join(" "),t.strings.join(" "))))}},{kind:"method",key:"_generateReloadCommands",value:function(){const e=(0,c.v)(this.hass,"reload").map((e=>({primaryText:this.hass.localize(`ui.dialogs.quick-bar.commands.reload.${e}`)||this.hass.localize("ui.dialogs.quick-bar.commands.reload.reload","domain",(0,L.Lh)(this.hass.localize,e)),action:()=>this.hass.callService(e,"reload"),iconPath:Q,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")})));return e.push({primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.reload.themes"),action:()=>this.hass.callService("frontend","reload_themes"),iconPath:Q,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")}),e.push({primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.reload.core"),action:()=>this.hass.callService("homeassistant","reload_core_config"),iconPath:Q,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")}),e.map((e=>({...e,categoryKey:"reload",strings:[`${e.categoryText} ${e.primaryText}`]})))}},{kind:"method",key:"_generateServerControlCommands",value:function(){return["restart","stop"].map((e=>{const t="server_control",i={primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.server_control.perform_action","action",this.hass.localize(`ui.dialogs.quick-bar.commands.server_control.${e}`)),iconPath:"M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z",categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.server_control"),categoryKey:t,action:()=>this.hass.callService("homeassistant",e)};return this._generateConfirmationCommand({...i,strings:[`${i.categoryText} ${i.primaryText}`]},this.hass.localize("ui.dialogs.generic.ok"))}))}},{kind:"method",key:"_generateNavigationCommands",value:async function(){const e=this._generateNavigationPanelCommands(),t=this._generateNavigationConfigSectionCommands(),i=[];if((0,d.p)(this.hass,"hassio")){const e=await(0,O.yt)(this.hass);i.push({path:"/hassio/store",primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.navigation.addon_store")}),i.push({path:"/hassio/dashboard",primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.navigation.addon_dashboard")});for(const t of e.addons.filter((e=>e.version)))i.push({path:`/hassio/addon/${t.slug}`,primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.navigation.addon_info",{addon:t.name})})}return this._finalizeNavigationCommands([...e,...t,...i])}},{kind:"method",key:"_generateNavigationPanelCommands",value:function(){return Object.keys(this.hass.panels).filter((e=>"_my_redirect"!==e)).map((e=>{const t=this.hass.panels[e],i=(0,F.ct)(t);return{primaryText:this.hass.localize(i)||t.title||t.url_path,path:`/${t.url_path}`}}))}},{kind:"method",key:"_generateNavigationConfigSectionCommands",value:function(){const e=[];for(const t of Object.keys(j.configSections))for(const i of j.configSections[t]){if(!(0,l.j)(this.hass,i))continue;const t=this._getNavigationInfoFromConfig(i);t&&(e.some((e=>e.path===t.path))||e.push(t))}return e}},{kind:"method",key:"_getNavigationInfoFromConfig",value:function(e){const t=e.path.substring(1);let i=t.substring(t.indexOf("/")+1);i=i.indexOf("/")>-1?i.substring(0,i.indexOf("/")):i;const r=i&&this.hass.localize(`ui.dialogs.quick-bar.commands.navigation.${i}`)||e.translationKey&&this.hass.localize(e.translationKey);if(r)return{...e,primaryText:r}}},{kind:"method",key:"_generateConfirmationCommand",value:function(e,t){return{...e,action:()=>(0,M.g7)(this,{confirmText:t,confirm:e.action})}}},{kind:"method",key:"_finalizeNavigationCommands",value:function(e){return e.map((e=>{const t="navigation",i={...e,iconPath:"M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.navigation"),action:()=>(0,m.c)(e.path)};return{...i,strings:[`${i.categoryText} ${i.primaryText}`],categoryKey:t}}))}},{kind:"method",key:"_toggleIfAlreadyOpened",value:function(){return!!this._opened&&!this._commandMode}},{kind:"field",key:"_filterItems",value:()=>(0,s.Z)(((e,t)=>z(t.trimLeft(),e)))},{kind:"get",static:!0,key:"styles",value:function(){return[N.$c,N.yu,r.iv`
        .heading {
          display: flex;
          align-items: center;
          --mdc-theme-primary: var(--primary-text-color);
        }

        .heading ha-textfield {
          flex-grow: 1;
        }

        ha-dialog {
          --dialog-z-index: 8;
          --dialog-content-padding: 0;
        }

        @media (min-width: 800px) {
          ha-dialog {
            --mdc-dialog-max-width: 800px;
            --mdc-dialog-min-width: 500px;
            --dialog-surface-position: fixed;
            --dialog-surface-top: 40px;
            --mdc-dialog-max-height: calc(100% - 72px);
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-textfield {
            --mdc-shape-small: 0;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 690px) {
          .hint {
            display: none;
          }
        }

        ha-icon.entity,
        ha-svg-icon.entity {
          margin-left: 20px;
        }

        ha-svg-icon.prefix {
          color: var(--primary-text-color);
        }

        ha-textfield ha-icon-button {
          --mdc-icon-button-size: 24px;
          color: var(--primary-text-color);
        }

        .command-category {
          --ha-chip-icon-color: #585858;
          --ha-chip-text-color: #212121;
        }

        .command-category.reload {
          --ha-chip-background-color: #cddc39;
        }

        .command-category.navigation {
          --ha-chip-background-color: var(--light-primary-color);
        }

        .command-category.server_control {
          --ha-chip-background-color: var(--warning-color);
        }

        span.command-text {
          margin-left: 8px;
          margin-inline-start: 8px;
          margin-inline-end: initial;
          direction: var(--direction);
        }

        mwc-list-item {
          width: 100%;
        }

        mwc-list-item.command-item {
          text-transform: capitalize;
        }

        ha-tip {
          padding: 20px;
        }

        .nothing-found {
          padding: 16px 0px;
          text-align: center;
        }

        div[slot="trailingIcon"] {
          display: flex;
          align-items: center;
        }

        lit-virtualizer {
          contain: size layout !important;
        }
      `]}}]}}),r.oi)}}]);
//# sourceMappingURL=ced3e007.js.map