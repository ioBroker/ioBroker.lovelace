/*! For license information please see chunk.8ebe3e84166f2bc0a27e.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2678],{82678:(e,t,r)=>{"use strict";r.r(t);var o=r(15652);function n(){n=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var n=t.placement;if(t.kind===o&&("static"===n||"prototype"===n)){var i="static"===n?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var o=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],o=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!s(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:r,finishers:o};var i=this.decorateConstructor(r,t);return o.push.apply(o,i.finishers),i.finishers=o,i},addElementPlacement:function(e,t,r){var o=t[e.placement];if(!r&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var r=[],o=[],n=e.decorators,i=n.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[i])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:o,extras:r}},decorateConstructor:function(e,t){for(var r=[],o=t.length-1;o>=0;o--){var n=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[o])(n)||n);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=d(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:o,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var o=(0,t[r])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function i(e){var t,r=d(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}!function(e,t,r,o){var c=n();if(o)for(var d=0;d<o.length;d++)c=o[d](c);var f=t((function(e){c.initializeInstanceElements(e,p.elements)}),r),p=c.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},o=0;o<e.length;o++){var n,i=e[o];if("method"===i.kind&&(n=t.find(r)))if(l(i.descriptor)||l(n.descriptor)){if(s(i)||s(n))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");n.descriptor=i.descriptor}else{if(s(i)){if(s(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");n.decorators=i.decorators}a(i,n)}else t.push(i)}return t}(f.d.map(i)),e);c.initializeClassElements(f.F,p.elements),c.runClassFinishers(f.F,p.finishers)}([(0,o.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
      :host {
        background: var(
          --ha-card-background,
          var(--card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 4px);
        box-shadow: var(
          --ha-card-box-shadow,
          0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 48px;
        padding: 12px 16px 16px;
        display: block;
        margin-block-start: 0px;
        margin-block-end: 0px;
        font-weight: normal;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid var(--divider-color, #e8e8e8);
        padding: 5px 16px;
      }
    `}},{kind:"method",key:"render",value:function(){return o.dy`
      ${this.header?o.dy`<h1 class="card-header">${this.header}</h1>`:o.dy``}
      <slot></slot>
    `}}]}}),o.oi);r(53918);var p=r(81471);const h=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){this[`__${String(t.key)}`]=e},get(){return this[`__${String(t.key)}`]},enumerable:!0,configurable:!0},finisher(r){const o=r.prototype.connectedCallback;r.prototype.connectedCallback=function(){if(o.call(this),this[t.key]){const r=this.renderRoot.querySelector(e);if(!r)return;r.scrollTop=this[t.key]}}}});r(2315),r(48932);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var n=t.placement;if(t.kind===o&&("static"===n||"prototype"===n)){var i="static"===n?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var o=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],o=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!b(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:r,finishers:o};var i=this.decorateConstructor(r,t);return o.push.apply(o,i.finishers),i.finishers=o,i},addElementPlacement:function(e,t,r){var o=t[e.placement];if(!r&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var r=[],o=[],n=e.decorators,i=n.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[i])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:o,extras:r}},decorateConstructor:function(e,t){for(var r=[],o=t.length-1;o>=0;o--){var n=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[o])(n)||n);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:o,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var o=(0,t[r])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function m(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}!function(e,t,r,o){var n=u();if(o)for(var i=0;i<o.length;i++)n=o[i](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},o=0;o<e.length;o++){var n,i=e[o];if("method"===i.kind&&(n=t.find(r)))if(v(i.descriptor)||v(n.descriptor)){if(b(i)||b(n))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");n.descriptor=i.descriptor}else{if(b(i)){if(b(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");n.decorators=i.decorators}y(i,n)}else t.push(i)}return t}(a.d.map(m)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("hass-subpage")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"showBackButton",value:()=>!0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[h(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){return o.dy`
      <div class="toolbar">
        <ha-icon-button-arrow-prev
          .hass=${this.hass}
          @click=${this._backTapped}
          class=${(0,p.$)({hidden:!this.showBackButton})}
        ></ha-icon-button-arrow-prev>

        <div class="main-title">${this.header}</div>
        <slot name="toolbar-icon"></slot>
      </div>
      <div class="content" @scroll=${this._saveScrollPos}><slot></slot></div>
    `}},{kind:"method",decorators:[(0,o.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      :host([narrow]) {
        width: 100%;
        position: fixed;
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: var(--header-height);
        padding: 0 16px;
        pointer-events: none;
        background-color: var(--app-header-background-color);
        font-weight: 400;
        color: var(--app-header-text-color, white);
        border-bottom: var(--app-header-border-bottom, none);
        box-sizing: border-box;
      }

      ha-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        pointer-events: auto;
      }

      ha-icon-button-arrow-prev.hidden {
        visibility: hidden;
      }

      .main-title {
        margin: 0 0 0 24px;
        line-height: 20px;
        flex-grow: 1;
      }

      .content {
        position: relative;
        width: 100%;
        height: calc(100% - 1px - var(--header-height));
        overflow-y: auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
    `}}]}}),o.oi);r(43835),r(5618);var E=r(11654);const x=document.createElement("template");x.setAttribute("style","display: none;"),x.innerHTML=`<custom-style>\n  <style>\n    /*\n      ioBroker default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --text-light-primary-color: #212121;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      --error-color: #db4437;\n      --warning-color: #FF9800;\n      --success-color: #0f9d58;\n      --info-color: #4285f4;\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* for header */\n      --header-height: 56px;\n\n      /* for label-badge */\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n\n      /*\n        Paper-styles color.html dependency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --mwc-switch-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* set our slider style */\n      --ha-slider-pin-font-size: 15px;\n\n      /* rgb */\n      --rgb-primary-color: 3, 169, 244;\n      --rgb-accent-color: 255, 152, 0;\n      --rgb-primary-text-color: 33, 33, 33;\n      --rgb-secondary-text-color: 114, 114, 114;\n      --rgb-text-primary-color: 255, 255, 255;\n      --rgb-card-background-color: 255, 255, 255;\n\n      ${Object.entries(E.q0).map((([e,t])=>`--${e}: ${t};`)).join("")}\n    }\n\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) > .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll > .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n\n    /* for paper-dialog */\n    iron-overlay-backdrop {\n      backdrop-filter: var(--dialog-backdrop-filter, none);\n    }\n  </style>\n</custom-style>`,document.head.appendChild(x.content);r(64702);const C=e=>{if(6===(e=e.replace("#","")).length)return e;let t="";for(const r of e)t+=r+r;return t},P=e=>{const t=Math.round(Math.min(Math.max(e,0),255)).toString(16);return 1===t.length?`0${t}`:t},S=e=>(e=C(e),[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)]),D=e=>`#${P(e[0])}${P(e[1])}${P(e[2])}`,T=.95047,R=1.08883,A=.137931034,z=.12841855,O=e=>(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4,_=e=>e>.008856452?e**(1/3):e/z+A,j=e=>255*(e<=.00304?12.92*e:1.055*e**(1/2.4)-.055),I=e=>e>.206896552?e*e*e:z*(e-A),$=e=>{const[t,r,o]=(e=>{let[t,r,o]=e;return t=O(t),r=O(r),o=O(o),[_((.4124564*t+.3575761*r+.1804375*o)/T),_((.2126729*t+.7151522*r+.072175*o)/1),_((.0193339*t+.119192*r+.9503041*o)/R)]})(e),n=116*r-16;return[n<0?0:n,500*(t-r),200*(r-o)]},F=e=>{const[t,r,o]=e;let n=(t+16)/116,i=isNaN(r)?n:n+r/500,a=isNaN(o)?n:n-o/200;n=1*I(n),i=T*I(i),a=R*I(a);return[j(3.2404542*i-1.5371385*n-.4985314*a),j(-.969266*i+1.8760108*n+.041556*a),j(.0556434*i-.2040259*n+1.0572252*a)]},B=(e,t=1)=>[e[0]-18*t,e[1],e[2]],M=e=>{const t=[0,0,0];for(let r=0;r<e.length;r++){const o=e[r]/255;t[r]=o<=.03928?o/12.92:((o+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},N=(e,t)=>{const r=M(e),o=M(t);return r>o?(r+.05)/(o+.05):(o+.05)/(r+.05)};let L={};const U=(e,t,r,o)=>{let n=r,i={};if("default"===r&&o){if(o.dark&&(n=`${n}__dark`,i=E._l,o.primaryColor&&(i["app-header-background-color"]=((e,t,r=50)=>{let o="";e=C(e),t=C(t);for(let n=0;n<=5;n+=2){const i=parseInt(e.substr(n,2),16),a=parseInt(t.substr(n,2),16);let s=Math.floor(a+r/100*(i-a)).toString(16);for(;s.length<2;)s="0"+s;o+=s}return`#${o}`})(o.primaryColor,"#121212",8))),o.primaryColor){n=`${n}__primary_${o.primaryColor}`;const e=S(o.primaryColor),t=$(e);i["primary-color"]=o.primaryColor;const r=F(((e,t=1)=>B(e,-t))(t));i["light-primary-color"]=D(r),i["dark-primary-color"]=(e=>{const t=F(e);return D(t)})(B(t)),i["text-primary-color"]=N(e,[33,33,33])<6?"#fff":"#212121",i["text-light-primary-color"]=N(r,[33,33,33])<6?"#fff":"#212121",i["state-icon-color"]=i["dark-primary-color"]}if(o.accentColor){n=`${n}__accent_${o.accentColor}`,i["accent-color"]=o.accentColor;const e=S(o.accentColor);i["text-accent-color"]=N(e,[33,33,33])<6?"#fff":"#212121"}}if(r&&t.themes[r]&&(i=t.themes[r]),!e._themes&&!Object.keys(i).length)return;const a=i&&n?L[n]||q(n,i):void 0,s={...e._themes,...null==a?void 0:a.styles};e._themes=null==a?void 0:a.keys,e.updateStyles?e.updateStyles(s):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,s)},q=(e,t)=>{if(!t||!Object.keys(t).length)return;const r={...E.q0,...t},o={},n={};for(const e of Object.keys(r)){const t=`--${e}`,i=String(r[e]);if(o[t]=i,n[t]="",!i.startsWith("#"))continue;const a=`rgb-${e}`;if(void 0===r[a])try{const e=S(i).join(","),t=`--${a}`;o[t]=e,n[t]=""}catch(e){continue}}return L[e]={styles:o,keys:n},{styles:o,keys:n}};function H(){H=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var n=t.placement;if(t.kind===o&&("static"===n||"prototype"===n)){var i="static"===n?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var o=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],o=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!G(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:r,finishers:o};var i=this.decorateConstructor(r,t);return o.push.apply(o,i.finishers),i.finishers=o,i},addElementPlacement:function(e,t,r){var o=t[e.placement];if(!r&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var r=[],o=[],n=e.decorators,i=n.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[i])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:o,extras:r}},decorateConstructor:function(e,t){for(var r=[],o=t.length-1;o>=0;o--){var n=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[o])(n)||n);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=V(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:o,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:K(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=K(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var o=(0,t[r])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function W(e){var t,r=V(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function Q(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function G(e){return e.decorators&&e.decorators.length}function J(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function K(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function V(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function Y(e,t,r){return(Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Z(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,o){var n=H();if(o)for(var i=0;i<o.length;i++)n=o[i](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},o=0;o<e.length;o++){var n,i=e[o];if("method"===i.kind&&(n=t.find(r)))if(J(i.descriptor)||J(n.descriptor)){if(G(i)||G(n))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");n.descriptor=i.descriptor}else{if(G(i)){if(G(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");n.decorators=i.decorators}Q(i,n)}else t.push(i)}return t}(a.d.map(W)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("supervisor-error-screen")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){Y(Z(r.prototype),"firstUpdated",this).call(this,e),this._applyTheme()}},{kind:"method",key:"updated",value:function(e){Y(Z(r.prototype),"updated",this).call(this,e);const t=e.get("hass");t&&t.themes!==this.hass.themes&&this._applyTheme()}},{kind:"method",key:"render",value:function(){return o.dy`
      <div class="toolbar">
        <ha-icon-button-arrow-prev
          .hass=${this.hass}
          @click=${this._handleBack}
        ></ha-icon-button-arrow-prev>
      </div>
      <div class="content">
        <div class="title">
          ${this.hass.localize("ui.panel.error.supervisor.title")}
        </div>
        <ha-card header="Troubleshooting">
          <div class="card-content">
            <ol>
              <li>
                ${this.hass.localize("ui.panel.error.supervisor.wait")}
              </li>
              <li>
                <a
                  class="supervisor_error-link"
                  href="http://homeassistant.local:4357"
                  target="_blank"
                  rel="noreferrer"
                >
                  ${this.hass.localize("ui.panel.error.supervisor.observer")}
                </a>
              </li>
              <li>
                ${this.hass.localize("ui.panel.error.supervisor.reboot")}
              </li>
              <li>
                <a href="/config/info" target="_parent">
                  ${this.hass.localize("ui.panel.error.supervisor.system_health")}
                </a>
              </li>
              <li>
                <a
                  href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/help/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ${this.hass.localize("ui.panel.error.supervisor.ask")}
                </a>
              </li>
            </ol>
          </div>
        </ha-card>
      </div>
    `}},{kind:"method",key:"_applyTheme",value:function(){let e,t;var r,o;((e,t,r,o)=>{const[n,i,a]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===o?Number(i)>=r:Number(i)>r)||void 0!==o&&Number(n)===t&&Number(i)===r&&Number(a)>=o})(this.hass.config.version,0,114)?(e=(null===(r=this.hass.selectedTheme)||void 0===r?void 0:r.theme)||(this.hass.themes.darkMode&&this.hass.themes.default_dark_theme?this.hass.themes.default_dark_theme:this.hass.themes.default_theme),t=this.hass.selectedTheme,"default"===e&&void 0===(null===(o=t)||void 0===o?void 0:o.dark)&&(t={...this.hass.selectedTheme,dark:this.hass.themes.darkMode})):e=this.hass.selectedTheme||this.hass.themes.default_theme;U(this.parentElement,this.hass.themes,e,t)}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[E.Qx,o.iv`
        .toolbar {
          display: flex;
          align-items: center;
          font-size: 20px;
          height: var(--header-height);
          padding: 0 16px;
          pointer-events: none;
          background-color: var(--app-header-background-color);
          font-weight: 400;
          box-sizing: border-box;
        }
        ha-icon-button-arrow-prev {
          pointer-events: auto;
        }
        .content {
          color: var(--primary-text-color);
          display: flex;
          padding: 16px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .title {
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          padding-bottom: 16px;
        }

        a {
          color: var(--mdc-theme-primary);
        }

        ha-card {
          width: 600px;
          margin: 16px;
          padding: 8px;
        }
        @media all and (max-width: 500px) {
          ha-card {
            width: calc(100vw - 32px);
          }
        }
      `]}}]}}),o.oi)},64702:()=>{const e=document.createElement("template");e.setAttribute("style","display: none;"),e.innerHTML='<style>\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin"),\n  local("Roboto-Thin"),\n  url(/static/fonts/roboto/Roboto-Thin.woff2) format("woff2");\nfont-weight: 100;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin Italic"),\n  local("Roboto-ThinItalic"),\n  url(/static/fonts/roboto/Roboto-ThinItalic.woff2) format("woff2");\nfont-weight: 100;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light"),\n  local("Roboto-Light"),\n  url(/static/fonts/roboto/Roboto-Light.woff2) format("woff2");\nfont-weight: 300;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light Italic"),\n  local("Roboto-LightItalic"),\n  url(/static/fonts/roboto/Roboto-LightItalic.woff2) format("woff2");\nfont-weight: 300;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Regular"),\n  local("Roboto-Regular"),\n  url(/static/fonts/roboto/Roboto-Regular.woff2) format("woff2");\nfont-weight: 400;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Italic"),\n  local("Roboto-Italic"),\n  url(/static/fonts/roboto/Roboto-RegularItalic.woff2) format("woff2");\nfont-weight: 400;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium"),\n  local("Roboto-Medium"),\n  url(/static/fonts/roboto/Roboto-Medium.woff2) format("woff2");\nfont-weight: 500;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium Italic"),\n  local("Roboto-MediumItalic"),\n  url(/static/fonts/roboto/Roboto-MediumItalic.woff2) format("woff2");\nfont-weight: 500;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold"),\n  local("Roboto-Bold"),\n  url(/static/fonts/roboto/Roboto-Bold.woff2) format("woff2");\nfont-weight: 700;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold Italic"),\n  local("Roboto-BoldItalic"),\n  url(/static/fonts/roboto/Roboto-BoldItalic.woff2) format("woff2");\nfont-weight: 700;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black"),\n  local("Roboto-Black"),\n  url(/static/fonts/roboto/Roboto-Black.woff2) format("woff2");\nfont-weight: 900;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black Italic"),\n  local("Roboto-BlackItalic"),\n  url(/static/fonts/roboto/Roboto-BlackItalic.woff2) format("woff2");\nfont-weight: 900;\nfont-style: italic;\n}\n</style>',document.head.appendChild(e.content)}}]);
//# sourceMappingURL=chunk.8ebe3e84166f2bc0a27e.js.map