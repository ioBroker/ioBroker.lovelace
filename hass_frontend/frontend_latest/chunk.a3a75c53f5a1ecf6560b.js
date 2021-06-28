(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2575],{34821:(e,t,i)=>{"use strict";i.d(t,{i:()=>y});var r=i(13967),s=i(68546),n=i(50424),o=i(55358),a=i(87744);i(10983);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var s=t.placement;if(t.kind===r&&("static"===s||"prototype"===s)){var n="static"===s?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!u(e))return i.push(e);var t=this.decorateElement(e,s);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],s=e.decorators,n=s.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(s)||s);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function v(e,t,i){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var s=Object.getOwnPropertyDescriptor(r,t);return s.get?s.get.call(i):s.value}})(e,t,i||e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const y=(e,t)=>n.dy`
  <span class="header_title">${t}</span>
  <mwc-icon-button
    aria-label=${e.localize("ui.dialogs.generic.close")}
    dialogAction="close"
    class="header_button"
    dir=${(0,a.Zu)(e)}
  >
    <ha-svg-icon .path=${s.r5M}></ha-svg-icon>
  </mwc-icon-button>
`;!function(e,t,i,r){var s=l();if(r)for(var n=0;n<r.length;n++)s=r[n](s);var o=t((function(e){s.initializeInstanceElements(e,a.elements)}),i),a=s.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var s,n=e[r];if("method"===n.kind&&(s=t.find(i)))if(h(n.descriptor)||h(s.descriptor)){if(u(n)||u(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(u(n)){if(u(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}d(n,s)}else t.push(n)}return t}(o.d.map(c)),e);s.initializeClassElements(o.F,a.elements),s.runClassFinishers(o.F,a.finishers)}([(0,o.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"scrollToPos",value:function(e,t){this.contentElement.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return n.dy`<slot name="heading"> ${v(g(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"get",static:!0,key:"styles",value:function(){return[r.V.styles,n.iv`
        .mdc-dialog {
          --mdc-dialog-scroll-divider-color: var(--divider-color);
          z-index: var(--dialog-z-index, 7);
          backdrop-filter: var(--dialog-backdrop-filter, none);
        }
        .mdc-dialog__actions {
          justify-content: var(--justify-action-buttons, flex-end);
          padding-bottom: max(env(safe-area-inset-bottom), 8px);
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
        }
        [dir="rtl"].header_button {
          right: auto;
          left: 16px;
        }
        [dir="rtl"].header_title {
          margin-left: 40px;
          margin-right: 0px;
        }
      `]}}]}}),r.V)},62575:(e,t,i)=>{"use strict";i.r(t);i(53918);var r=i(68546),s=i(50424),n=i(55358),o=i(47181),a=(i(31206),i(34821)),l=(i(52039),i(22383)),c=i(11654);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var s=t.placement;if(t.kind===r&&("static"===s||"prototype"===s)){var n="static"===s?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!p(e))return i.push(e);var t=this.decorateElement(e,s);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],s=e.decorators,n=s.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(s)||s);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=v(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:m(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=m(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function u(e){var t,i=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var s=d();if(r)for(var n=0;n<r.length;n++)s=r[n](s);var o=t((function(e){s.initializeInstanceElements(e,a.elements)}),i),a=s.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var s,n=e[r];if("method"===n.kind&&(s=t.find(i)))if(f(n.descriptor)||f(s.descriptor)){if(p(n)||p(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(p(n)){if(p(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}h(n,s)}else t.push(n)}return t}(o.d.map(u)),e);s.initializeClassElements(o.F,a.elements),s.runClassFinishers(o.F,a.finishers)}([(0,n.Mo)("dialog-zha-reconfigure-device")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_status",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_stages",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_clusterConfigurationStatuses",value:()=>new Map},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value(){}},{kind:"field",decorators:[(0,n.SB)()],key:"_allSuccessful",value:()=>!0},{kind:"field",decorators:[(0,n.SB)()],key:"_showDetails",value:()=>!1},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._stages=void 0}},{kind:"method",key:"closeDialog",value:function(){this._unsubscribe(),this._params=void 0,this._status=void 0,this._stages=void 0,this._clusterConfigurationStatuses=void 0,(0,o.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t;return this._params?s.dy`
      <ha-dialog
        open
        @closed="${this.closeDialog}"
        .heading=${(0,a.i)(this.hass,this.hass.localize("ui.dialogs.zha_reconfigure_device.heading")+": "+((null===(e=this._params)||void 0===e?void 0:e.device.user_given_name)||(null===(t=this._params)||void 0===t?void 0:t.device.name)))}
      >
        ${this._status?"":s.dy`
              <p>
                ${this.hass.localize("ui.dialogs.zha_reconfigure_device.introduction")}
              </p>
              <p>
                <em>
                  ${this.hass.localize("ui.dialogs.zha_reconfigure_device.battery_device_warning")}
                </em>
              </p>
              <mwc-button
                slot="primaryAction"
                @click=${this._startReconfiguration}
              >
                ${this.hass.localize("ui.dialogs.zha_reconfigure_device.start_reconfiguration")}
              </mwc-button>
            `}
        ${"started"===this._status?s.dy`
              <div class="flex-container">
                <ha-circular-progress active></ha-circular-progress>
                <div class="status">
                  <p>
                    <b>
                      ${this.hass.localize("ui.dialogs.zha_reconfigure_device.in_progress")}
                    </b>
                  </p>
                  <p>
                    ${this.hass.localize("ui.dialogs.zha_reconfigure_device.run_in_background")}
                  </p>
                </div>
              </div>
              <mwc-button slot="primaryAction" @click=${this.closeDialog}>
                ${this.hass.localize("ui.dialogs.generic.close")}
              </mwc-button>
              <mwc-button slot="secondaryAction" @click=${this._toggleDetails}>
                ${this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")}
              </mwc-button>
            `:""}
        ${"failed"===this._status?s.dy`
              <div class="flex-container">
                <ha-svg-icon
                  .path=${r.lY3}
                  class="failed"
                ></ha-svg-icon>
                <div class="status">
                  <p>
                    ${this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_failed")}
                  </p>
                </div>
              </div>
              <mwc-button slot="primaryAction" @click=${this.closeDialog}>
                ${this.hass.localize("ui.dialogs.generic.close")}
              </mwc-button>
              <mwc-button slot="secondaryAction" @click=${this._toggleDetails}>
                ${this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")}
              </mwc-button>
            `:""}
        ${"finished"===this._status?s.dy`
              <div class="flex-container">
                <ha-svg-icon
                  .path=${r.OE9}
                  class="success"
                ></ha-svg-icon>
                <div class="status">
                  <p>
                    ${this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_complete")}
                  </p>
                </div>
              </div>
              <mwc-button slot="primaryAction" @click=${this.closeDialog}>
                ${this.hass.localize("ui.dialogs.generic.close")}
              </mwc-button>
              <mwc-button slot="secondaryAction" @click=${this._toggleDetails}>
                ${this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")}
              </mwc-button>
            `:""}
        ${this._stages?s.dy`
              <div class="stages">
                ${this._stages.map((e=>s.dy`
                    <span class="stage">
                      <ha-svg-icon
                        .path=${r.OE9}
                        class="success"
                      ></ha-svg-icon>
                      ${e}
                    </span>
                  `))}
              </div>
            `:""}
        ${this._showDetails?s.dy`
              <div class="wrapper">
                <h2 class="grid-item">
                  ${this.hass.localize("ui.dialogs.zha_reconfigure_device.cluster_header")}
                </h2>
                <h2 class="grid-item">
                  ${this.hass.localize("ui.dialogs.zha_reconfigure_device.bind_header")}
                </h2>
                <h2 class="grid-item">
                  ${this.hass.localize("ui.dialogs.zha_reconfigure_device.reporting_header")}
                </h2>

                ${this._clusterConfigurationStatuses.size>0?s.dy`
                      ${Array.from(this._clusterConfigurationStatuses.values()).map((e=>s.dy`
                          <div class="grid-item">
                            ${e.cluster.name}
                          </div>
                          <div class="grid-item">
                            ${void 0!==e.bindSuccess?e.bindSuccess?s.dy`
                                    <span class="stage">
                                      <ha-svg-icon
                                        .path=${r.OE9}
                                        class="success"
                                      ></ha-svg-icon>
                                    </span>
                                  `:s.dy`
                                    <span class="stage">
                                      <ha-svg-icon
                                        .path=${r.lY3}
                                        class="failed"
                                      ></ha-svg-icon>
                                    </span>
                                  `:""}
                          </div>
                          <div class="grid-item">
                            ${e.attributes.size>0?s.dy`
                                  <div class="attributes">
                                    <div class="grid-item">
                                      ${this.hass.localize("ui.dialogs.zha_reconfigure_device.attribute")}
                                    </div>
                                    <div class="grid-item">
                                      <div>
                                        ${this.hass.localize("ui.dialogs.zha_reconfigure_device.min_max_change")}
                                      </div>
                                    </div>
                                    ${Array.from(e.attributes.values()).map((e=>s.dy`
                                        <span class="grid-item">
                                          ${e.name}:
                                          ${e.success?s.dy`
                                                <span class="stage">
                                                  <ha-svg-icon
                                                    .path=${r.OE9}
                                                    class="success"
                                                  ></ha-svg-icon>
                                                </span>
                                              `:s.dy`
                                                <span class="stage">
                                                  <ha-svg-icon
                                                    .path=${r.lY3}
                                                    class="failed"
                                                  ></ha-svg-icon>
                                                </span>
                                              `}
                                        </span>
                                        <div class="grid-item">
                                          ${e.min}/${e.max}/${e.change}
                                        </div>
                                      `))}
                                  </div>
                                `:""}
                          </div>
                        `))}
                    `:""}
              </div>
            `:""}
      </ha-dialog>
    `:s.dy``}},{kind:"method",key:"_startReconfiguration",value:async function(){this.hass&&this._params&&(this._clusterConfigurationStatuses=new Map((await(0,l.qm)(this.hass,this._params.device.ieee)).map((e=>[e.id,{cluster:e,bindSuccess:void 0,attributes:new Map}]))),this._subscribe(this._params),this._status="started")}},{kind:"method",key:"_handleMessage",value:function(e){if(e.type===l.H4)this._unsubscribe(),this._status=this._allSuccessful?"finished":"failed";else{const t=this._clusterConfigurationStatuses.get(e.zha_channel_msg_data.cluster_id);if(e.type===l.mS){this._stages||(this._stages=["binding"]);const i=e.zha_channel_msg_data.success;t.bindSuccess=i,this._allSuccessful=this._allSuccessful&&i}if(e.type===l.lu){this._stages&&!this._stages.includes("reporting")&&this._stages.push("reporting");const i=e.zha_channel_msg_data.attributes;Object.keys(i).forEach((e=>{const r=i[e];t.attributes.set(r.id,r),this._allSuccessful=this._allSuccessful&&r.success}))}this.requestUpdate()}}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((e=>e())),this._subscribed=void 0)}},{kind:"method",key:"_subscribe",value:function(e){this.hass&&(this._subscribed=(0,l.$l)(this.hass,e.device.ieee,this._handleMessage.bind(this)))}},{kind:"method",key:"_toggleDetails",value:function(){this._showDetails=!this._showDetails}},{kind:"get",static:!0,key:"styles",value:function(){return[c.yu,s.iv`
        .wrapper {
          display: grid;
          grid-template-columns: 3fr 1fr 2fr;
        }
        .attributes {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .grid-item {
          border: 1px solid;
          padding: 7px;
        }
        .success {
          color: var(--success-color);
        }

        .failed {
          color: var(--warning-color);
        }

        .flex-container {
          display: flex;
          align-items: center;
        }

        .stages {
          margin-top: 16px;
        }

        .stage ha-svg-icon {
          width: 16px;
          height: 16px;
        }
        .stage {
          padding: 8px;
        }

        ha-svg-icon {
          width: 68px;
          height: 48px;
        }

        .flex-container ha-circular-progress,
        .flex-container ha-svg-icon {
          margin-right: 20px;
        }
      `]}}]}}),s.oi)}}]);
//# sourceMappingURL=chunk.a3a75c53f5a1ecf6560b.js.map