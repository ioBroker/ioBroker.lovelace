/*! For license information please see chunk.08a0d742ee925da73edc.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[42],{186:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s}));i(5);var a=i(87),o=i(1);const n={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=Object(o.a)(t).path,i=0,a=e.indexOf(this);i<a;i++){var n=e[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},s=[a.a,n]},191:function(t,e,i){"use strict";i(5),i(45),i(42),i(54),i(86);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},193:function(t,e,i){"use strict";i(5),i(191);var a=i(122),o=i(186),n=i(6),s=i(3);Object(n.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[o.a,a.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(t,e,i){"use strict";i(193);var a=i(72),o=i(1),n=i(127);const s={getTabbableNodes:function(t){var e=[];return this._collectTabbableNodes(t,e)?n.a._sortByTabIndex(e):e},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!n.a._isVisible(t))return!1;var i,a=t,s=n.a._normalizedTabIndex(a),l=s>0;s>=0&&e.push(a),i="content"===a.localName||"slot"===a.localName?Object(o.a)(a).getDistributedNodes():Object(o.a)(a.shadowRoot||a.root||a).children;for(var r=0;r<i.length;r++)l=this._collectTabbableNodes(i[r],e)||l;return l}},l=customElements.get("paper-dialog"),r={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(a.b)([r],l)){})},205:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=i(0).f`
  <style>
    paper-toggle-button {
      padding-top: 16px;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`},208:function(t,e,i){"use strict";i(5),i(45),i(42);var a=i(186),o=i(6),n=i(3);Object(o.a)({_template:n.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},746:function(t,e,i){"use strict";i.r(e);var a=i(4),o=i(0),n=(i(187),i(194),i(85),i(208),i(56)),s=(i(93),i(18)),l=i(205);let r=class extends o.a{get _title(){return this.config&&this.config.title||""}render(){return o.f`
      ${l.a}
      <div class="card-config">
        <paper-input
          label="Title"
          .value="${this._title}"
          .configValue="${"title"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
      </div>
    `}_valueChanged(t){if(!this.config)return;const e=t.currentTarget;if(this[`_${e.configValue}`]===e.value)return;let i;e.configValue&&(i=Object.assign(Object.assign({},this.config),{[e.configValue]:e.value})),Object(s.a)(this,"lovelace-config-changed",{config:i})}};Object(a.b)([Object(o.g)()],r.prototype,"hass",void 0),Object(a.b)([Object(o.g)()],r.prototype,"config",void 0),r=Object(a.b)([Object(o.d)("hui-lovelace-editor")],r),i.d(e,"HuiDialogEditLovelace",(function(){return c}));let c=class extends o.a{constructor(){super(),this._saving=!1}async showDialog(t){this._lovelace=t,null==this._dialog&&await this.updateComplete;const e=this._lovelace.config,{views:i}=e,o=Object(a.d)(e,["views"]);this._config=o,this._dialog.open()}get _dialog(){return this.shadowRoot.querySelector("ha-paper-dialog")}render(){return o.f`
      <ha-paper-dialog with-backdrop>
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.header")}
        </h2>
        <paper-dialog-scrollable>
          ${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.explanation")}
          <hui-lovelace-editor
            .hass="${this.hass}"
            .config="${this._config}"
            @lovelace-config-changed="${this._ConfigChanged}"
          ></hui-lovelace-editor
        ></paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize("ui.common.cancel")}</mwc-button
          >
          <mwc-button
            ?disabled="${!this._config||this._saving}"
            @click="${this._save}"
          >
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.hass.localize("ui.common.save")}</mwc-button
          >
        </div>
      </ha-paper-dialog>
    `}_closeDialog(){this._config=void 0,this._dialog.close()}async _save(){if(!this._config)return;if(!this._isConfigChanged())return void this._closeDialog();this._saving=!0;const t=this._lovelace,e=Object.assign(Object.assign({},t.config),this._config);try{await t.saveConfig(e),this._closeDialog()}catch(i){alert(`Saving failed: ${i.message}`)}finally{this._saving=!1}}_ConfigChanged(t){t.detail&&t.detail.config&&(this._config=t.detail.config)}_isConfigChanged(){const t=this._lovelace.config,{views:e}=t,i=Object(a.d)(t,["views"]);return JSON.stringify(this._config)!==JSON.stringify(i)}static get styles(){return[n.b,o.c`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 660px) {
          ha-paper-dialog {
            width: 650px;
          }
        }
        ha-paper-dialog {
          max-width: 650px;
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
      `]}};Object(a.b)([Object(o.g)()],c.prototype,"hass",void 0),Object(a.b)([Object(o.g)()],c.prototype,"_lovelace",void 0),c=Object(a.b)([Object(o.d)("hui-dialog-edit-lovelace")],c)}}]);
//# sourceMappingURL=chunk.08a0d742ee925da73edc.js.map