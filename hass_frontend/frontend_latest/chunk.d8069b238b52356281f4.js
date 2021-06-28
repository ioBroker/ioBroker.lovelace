/*! For license information please see chunk.d8069b238b52356281f4.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[975],{51654:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r,n:()=>a});i(65233);var o=i(75009),n=i(87156);const r={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=(0,n.vz)(e).path,i=0,o=t.indexOf(this);i<o;i++){var r=t[i];if(r.hasAttribute&&(r.hasAttribute("dialog-dismiss")||r.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(r.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},a=[o.$,r]},22626:(e,t,i)=>{"use strict";i(65233),i(65660),i(1656);var o=i(51654),n=i(9672),r=i(50856);(0,n.k)({_template:r.d`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(o.Z)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},50808:(e,t,i)=>{"use strict";i(65233),i(65660),i(1656),i(47686),i(54242);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content);var n=i(96540),r=i(51654),a=i(9672),s=i(50856);(0,a.k)({_template:s.d`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[r.n,n.t],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},28417:(e,t,i)=>{"use strict";i(50808);var o=i(33367),n=i(93592),r=i(87156);const a={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?n.H._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!n.H._isVisible(e))return!1;const i=e,o=n.H._normalizedTabIndex(i);let a,s=o>0;o>=0&&t.push(i),a="content"===i.localName||"slot"===i.localName?(0,r.vz)(i).getDistributedNodes():(0,r.vz)(i.shadowRoot||i.root||i).children;for(let e=0;e<a.length;e++)s=this._collectTabbableNodes(a[e],t)||s;return s}},s=customElements.get("paper-dialog"),l={get _focusableNodes(){return a.getTabbableNodes(this)}};class c extends((0,o.P)([l],s)){}customElements.define("ha-paper-dialog",c)},70975:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DialogManageCloudhook:()=>y});i(53918),i(22626),i(30879);var o=i(50424),n=i(55358),r=(i(28417),i(26765)),a=i(11654),s=i(27322);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var n=t.placement;if(t.kind===o&&("static"===n||"prototype"===n)){var r="static"===n?e:i;this.defineClassElement(r,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var o=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],o=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!p(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:i,finishers:o};var r=this.decorateConstructor(i,t);return o.push.apply(o,r.finishers),r.finishers=o,r},addElementPlacement:function(e,t,i){var o=t[e.placement];if(!i&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var i=[],o=[],n=e.decorators,r=n.length-1;r>=0;r--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[r])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:o,extras:i}},decorateConstructor:function(e,t){for(var i=[],o=t.length-1;o>=0;o--){var n=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[o])(n)||n);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){e=r.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var r={kind:t,key:i,placement:o,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:u(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=u(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var o=(0,t[i])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}const g="Public URL – Click to copy to clipboard";let y=function(e,t,i,o){var n=l();if(o)for(var r=0;r<o.length;r++)n=o[r](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===r.key&&e.placement===r.placement},o=0;o<e.length;o++){var n,r=e[o];if("method"===r.kind&&(n=t.find(i)))if(h(r.descriptor)||h(n.descriptor)){if(p(r)||p(n))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");n.descriptor=r.descriptor}else{if(p(r)){if(p(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");n.decorators=r.decorators}d(r,n)}else t.push(r)}return t}(a.d.map(c)),e);return n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._params=e,await this.updateComplete,this._dialog.open()}},{kind:"method",key:"render",value:function(){if(!this._params)return o.dy``;const{webhook:e,cloudhook:t}=this._params,i="automation"===e.domain?(0,s.R)(this.hass,"/docs/automation/trigger/#webhook-trigger"):(0,s.R)(this.hass,`/integrations/${e.domain}/`);return o.dy`
      <ha-paper-dialog with-backdrop>
        <h2>
          ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.webhook_for","name",e.name)}
        </h2>
        <div>
          <p>
            ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.available_at")}
          </p>
          <paper-input
            label="${g}"
            value="${t.cloudhook_url}"
            @click="${this._copyClipboard}"
            @blur="${this._restoreLabel}"
          ></paper-input>
          <p>
            ${t.managed?o.dy`
                  ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.managed_by_integration")}
                `:o.dy`
                  ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook")}
                  <button class="link" @click="${this._disableWebhook}">
                    ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook")}</button
                  >.
                `}
          </p>
        </div>

        <div class="paper-dialog-buttons">
          <a href="${i}" target="_blank" rel="noreferrer">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation")}</mwc-button
            >
          </a>
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.close")}</mwc-button
          >
        </div>
      </ha-paper-dialog>
    `}},{kind:"get",key:"_dialog",value:function(){return this.shadowRoot.querySelector("ha-paper-dialog")}},{kind:"get",key:"_paperInput",value:function(){return this.shadowRoot.querySelector("paper-input")}},{kind:"method",key:"_closeDialog",value:function(){this._dialog.close()}},{kind:"method",key:"_disableWebhook",value:async function(){(0,r.g7)(this,{text:this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.disable"),confirm:()=>{this._params.disableHook(),this._closeDialog()}})}},{kind:"method",key:"_copyClipboard",value:function(e){const t=e.currentTarget,i=t.inputElement.inputElement;i.setSelectionRange(0,i.value.length);try{document.execCommand("copy"),t.label=this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard")}catch(e){}}},{kind:"method",key:"_restoreLabel",value:function(){this._paperInput.label=g}},{kind:"get",static:!0,key:"styles",value:function(){return[a.Qx,o.iv`
        ha-paper-dialog {
          width: 650px;
        }
        paper-input {
          margin-top: -8px;
        }
        button.link {
          color: var(--primary-color);
        }
        .paper-dialog-buttons a {
          text-decoration: none;
        }
      `]}}]}}),o.oi);customElements.define("dialog-manage-cloudhook",y)},27322:(e,t,i)=>{"use strict";i.d(t,{R:()=>o});const o=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=chunk.d8069b238b52356281f4.js.map