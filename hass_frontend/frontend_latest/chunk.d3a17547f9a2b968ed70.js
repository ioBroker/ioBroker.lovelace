/*! For license information please see chunk.d3a17547f9a2b968ed70.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[120],{183:function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return s});i(3);var r=i(85),n=i(2);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(n.a)(e).path,i=0,r=t.indexOf(this);i<r;i++){var o=t[i];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[r.a,o]},184:function(e,t,i){"use strict";i(3),i(66),i(148);var r=i(5),n=i(4),o=i(121);const s=n.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;s.setAttribute("strip-whitespace",""),Object(r.a)({_template:s,is:"paper-spinner",behaviors:[o.a]})},192:function(e,t,i){"use strict";i(3),i(45),i(42),i(53),i(84);const r=document.createElement("template");r.setAttribute("style","display: none;"),r.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},193:function(e,t,i){"use strict";i(3),i(192);var r=i(118),n=i(183),o=i(5),s=i(4);Object(o.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[n.a,r.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},195:function(e,t,i){"use strict";i(193);var r=i(71),n=i(2),o=i(122);const s={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?o.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!o.a._isVisible(e))return!1;var i,r=e,s=o.a._normalizedTabIndex(r),a=s>0;s>=0&&t.push(r),i="content"===r.localName||"slot"===r.localName?Object(n.a)(r).getDistributedNodes():Object(n.a)(r.shadowRoot||r.root||r).children;for(var l=0;l<i.length;l++)a=this._collectTabbableNodes(i[l],t)||a;return a}},a=customElements.get("paper-dialog"),l={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(r.b)([l],a)){})},206:function(e,t,i){"use strict";i(3),i(45),i(42);var r=i(183),n=i(5),o=i(4);Object(n.a)({_template:o.a`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(r.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},765:function(e,t,i){"use strict";i.r(t);var r=i(0),n=(i(206),i(80),i(184),i(83),i(195),i(13)),o=i(55),s=i(346),a=i(232),l=i(115);const c=(e,t,i)=>{if(1!==t.length)return e[t[0]]||(e[t[0]]={}),c(e[t[0]],t.slice(1),i);e[t[0]]=i},d=(e,t)=>1===t.length?e[t[0]]:void 0!==e[t[0]]?d(e[t[0]],t.slice(1)):void 0;function p(e){var t,i=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}!function(e,t,i,r){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!u(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=v(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=m(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=m(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t(function(e){n.initializeInstanceElements(e,a.elements)},i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(f(o.descriptor)||f(n.descriptor)){if(u(o)||u(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(u(o)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}h(o,n)}else t.push(o)}return t}(s.d.map(p)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([Object(r.d)("ha-thingtalk-placeholders")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(r.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"opened",value:void 0},{kind:"field",key:"skip",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"placeholders",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_error",value:void 0},{kind:"field",key:"_deviceEntityLookup",value:()=>({})},{kind:"field",key:"_manualEntities",value:()=>({})},{kind:"field",decorators:[Object(r.f)()],key:"_placeholderValues",value:()=>({})},{kind:"field",decorators:[Object(r.g)("#device-entity-picker")],key:"_deviceEntityPicker",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[Object(a.c)(this.hass.connection,e=>{for(const t of e)t.device_id&&(t.device_id in this._deviceEntityLookup||(this._deviceEntityLookup[t.device_id]=[]),this._deviceEntityLookup[t.device_id].includes(t.entity_id)||this._deviceEntityLookup[t.device_id].push(t.entity_id))})]}},{kind:"method",key:"render",value:function(){return r.e`
      <ha-paper-dialog
        with-backdrop
        .opened=${this.opened}
        @opened-changed="${this._openedChanged}"
      >
        <h2>Great! Now we need to link some devices.</h2>
        <paper-dialog-scrollable>
          ${this._error?r.e`
                <div class="error">${this._error}</div>
              `:""}
          ${Object.entries(this.placeholders).map(([e,t])=>r.e`
                <h3>
                  ${this.hass.localize(`ui.panel.config.automation.editor.${e}s.name`)}:
                </h3>
                ${t.map(t=>t.fields.includes("device_id")?r.e`
                      <ha-device-picker
                        .type=${e}
                        .placeholder=${t}
                        @change=${this._devicePicked}
                        .hass=${this.hass}
                        .includeDomains=${t.domains}
                        .includeDeviceClasses=${t.device_classes}
                        .label=${this._getLabel(t.domains,t.device_classes)}
                      ></ha-device-picker>
                      ${d(this._placeholderValues,[e,t.index,"device_id"])&&t.fields.includes("entity_id")&&void 0===d(this._placeholderValues,[e,t.index,"entity_id"])||!0===d(this._manualEntities,[e,t.index,"manual"])?r.e`
                            <ha-entity-picker
                              id="device-entity-picker"
                              .type=${e}
                              .placeholder=${t}
                              @change=${this._entityPicked}
                              .includeDomains=${t.domains}
                              .includeDeviceClasses=${t.device_classes}
                              .hass=${this.hass}
                              .label=${this._getLabel(t.domains,t.device_classes)}
                              .entityFilter=${i=>this._deviceEntityLookup[this._placeholderValues[e][t.index].device_id].includes(i.entity_id)}
                            ></ha-entity-picker>
                          `:""}
                    `:t.fields.includes("entity_id")?r.e`
                      <ha-entity-picker
                        .type=${e}
                        .placeholder=${t}
                        @change=${this._entityPicked}
                        .includeDomains=${t.domains}
                        .includeDeviceClasses=${t.device_classes}
                        .hass=${this.hass}
                        .label=${this._getLabel(t.domains,t.device_classes)}
                      ></ha-entity-picker>
                    `:r.e`
                    <div class="error">
                      Unknown placeholder<br />
                      ${t.domains}<br />
                      ${t.fields.map(e=>r.e`
                            ${e}<br />
                          `)}
                    </div>
                  `)}
              `)}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button class="left" @click="${this.skip}">
            Skip
          </mwc-button>
          <mwc-button @click="${this._done}" .disabled=${!this._isDone}>
            Create automation
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `}},{kind:"get",key:"_isDone",value:function(){return Object.entries(this.placeholders).every(([e,t])=>t.every(t=>t.fields.every(i=>void 0!==d(this._placeholderValues,[e,t.index,i]))))}},{kind:"method",key:"_getLabel",value:function(e,t){return`${e.map(e=>this.hass.localize(`domain.${e}`)).join(", ")}${t?` of type ${t.join(", ")}`:""}`}},{kind:"method",key:"_devicePicked",value:function(e){const t=e.target,i=t.placeholder,r=t.value,n=t.type;if(c(this._placeholderValues,[n,i.index,"device_id"],r),!i.fields.includes("entity_id"))return;if(""===r)return delete this._placeholderValues[n][i.index].entity_id,this._deviceEntityPicker&&(this._deviceEntityPicker.value=void 0),c(this._manualEntities,[n,i.index,"manual"],!1),void this.requestUpdate("_placeholderValues");const o=this._deviceEntityLookup[r].filter(e=>{if(i.device_classes){const t=this.hass.states[e];return!!t&&(i.domains.includes(Object(l.a)(e))&&t.attributes.device_class&&i.device_classes.includes(t.attributes.device_class))}return i.domains.includes(Object(l.a)(e))});0===o.length?this._error=`No ${i.domains.map(e=>this.hass.localize(`domain.${e}`)).join(", ")} entities found in this device.`:1===o.length?(c(this._placeholderValues,[n,i.index,"entity_id"],o[0]),c(this._manualEntities,[n,i.index,"manual"],!1),this.requestUpdate("_placeholderValues")):(delete this._placeholderValues[n][i.index].entity_id,this._deviceEntityPicker&&(this._deviceEntityPicker.value=void 0),c(this._manualEntities,[n,i.index,"manual"],!0),this.requestUpdate("_placeholderValues"))}},{kind:"method",key:"_entityPicked",value:function(e){const t=e.target,i=t.placeholder,r=t.value,n=t.type;c(this._placeholderValues,[n,i.index,"entity_id"],r),this.requestUpdate("_placeholderValues")}},{kind:"method",key:"_done",value:function(){Object(n.a)(this,"placeholders-filled",{value:this._placeholderValues})}},{kind:"method",key:"_openedChanged",value:function(e){this.dispatchEvent(new CustomEvent(e.type,e))}},{kind:"get",static:!0,key:"styles",value:function(){return[o.b,r.c`
        ha-paper-dialog {
          max-width: 500px;
        }
        mwc-button.left {
          margin-right: auto;
        }
        paper-dialog-scrollable {
          margin-top: 10px;
        }
        h3 {
          margin: 10px 0 0 0;
          font-weight: 500;
        }
        .error {
          color: var(--google-red-500);
        }
      `]}}]}},Object(s.a)(r.a));var y=i(291);function g(e){var t,i=E(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function b(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function k(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function w(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function E(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}!function(e,t,i,r){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!k(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=E(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=w(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=w(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t(function(e){n.initializeInstanceElements(e,a.elements)},i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(_(o.descriptor)||_(n.descriptor)){if(k(o)||k(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(k(o)){if(k(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}b(o,n)}else t.push(o)}return t}(s.d.map(g)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([Object(r.d)("ha-dialog-thinktalk")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(r.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_error",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_params",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_submitting",value:()=>!1},{kind:"field",decorators:[Object(r.f)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[Object(r.f)()],key:"_placeholders",value:void 0},{kind:"field",decorators:[Object(r.g)("#input")],key:"_input",value:void 0},{kind:"field",key:"_value",value:void 0},{kind:"field",key:"_config",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._error=void 0,this._opened=!0}},{kind:"method",key:"render",value:function(){return this._params?this._placeholders?r.e`
        <ha-thingtalk-placeholders
          .hass=${this.hass}
          .placeholders=${this._placeholders}
          .opened=${this._opened}
          .skip=${()=>this._skip()}
          @opened-changed=${this._openedChanged}
          @placeholders-filled=${this._handlePlaceholders}
        >
        </ha-thingtalk-placeholders>
      `:r.e`
      <ha-paper-dialog
        with-backdrop
        .opened=${this._opened}
        @opened-changed=${this._openedChanged}
      >
        <h2>Create a new automation</h2>
        <paper-dialog-scrollable>
          ${this._error?r.e`
                <div class="error">${this._error}</div>
              `:""}
          Type below what this automation should do, and we will try to convert
          it into a ioBroker automation. (only English is supported for
          now)<br /><br />
          For example:
          <ul @click=${this._handleExampleClick}>
            <li>
              <button class="link">
                Turn off the lights when I leave home
              </button>
            </li>
            <li>
              <button class="link">
                Turn on the lights when the sun is set
              </button>
            </li>
            <li>
              <button class="link">
                Notify me if the door opens and I am not at home
              </button>
            </li>
            <li>
              <button class="link">
                Turn the light on when motion is detected
              </button>
            </li>
          </ul>
          <paper-input
            id="input"
            label="What should this automation do?"
            autofocus
            @keyup=${this._handleKeyUp}
          ></paper-input>
          <a
            href="https://almond.stanford.edu/"
            target="_blank"
            class="attribution"
            >Powered by Almond</a
          >
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button class="left" @click="${this._skip}">
            Skip
          </mwc-button>
          <mwc-button @click="${this._generate}" .disabled=${this._submitting}>
            <paper-spinner
              ?active="${this._submitting}"
              alt="Creating your automation..."
            ></paper-spinner>
            Create automation
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `:r.e``}},{kind:"method",key:"_generate",value:async function(){if(this._value=this._input.value,!this._value)return void(this._error="Enter a command or tap skip.");let e,t;this._submitting=!0;try{const r=await Object(y.c)(this.hass,this._value);e=r.config,t=r.placeholders}catch(i){return this._error=i.message,void(this._submitting=!1)}this._submitting=!1,Object.keys(e).length?Object.keys(t).length?(this._config=e,this._placeholders=t):this._sendConfig(this._value,e):this._error="We couldn't create an automation for that (yet?)."}},{kind:"method",key:"_handlePlaceholders",value:function(e){const t=e.detail.value;Object.entries(t).forEach(([e,t])=>{Object.entries(t).forEach(([t,i])=>{Object.entries(i).forEach(([i,r])=>{this._config[e][t][i]=r})})}),this._sendConfig(this._value,this._config)}},{kind:"method",key:"_sendConfig",value:function(e,t){this._params.callback(Object.assign({alias:e},t)),this._closeDialog()}},{kind:"method",key:"_skip",value:function(){this._params.callback(void 0),this._closeDialog()}},{kind:"method",key:"_closeDialog",value:function(){this._placeholders=void 0,this._input&&(this._input.value=null),this._opened=!1}},{kind:"method",key:"_openedChanged",value:function(e){e.detail.value||this._closeDialog()}},{kind:"method",key:"_handleKeyUp",value:function(e){13===e.keyCode&&this._generate()}},{kind:"method",key:"_handleExampleClick",value:function(e){this._input.value=e.target.innerText}},{kind:"get",static:!0,key:"styles",value:function(){return[o.a,o.b,r.c`
        ha-paper-dialog {
          max-width: 500px;
        }
        mwc-button.left {
          margin-right: auto;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .error {
          color: var(--google-red-500);
        }
        .attribution {
          color: var(--secondary-text-color);
        }
      `]}}]}},r.a)}}]);
//# sourceMappingURL=chunk.d3a17547f9a2b968ed70.js.map