/*! For license information please see chunk.c8cec1f6ee4012189d01.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[25],{179:function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return s});i(5);var a=i(86),n=i(2);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(n.a)(e).path,i=0,a=t.indexOf(this);i<a;i++){var o=t[i];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[a.a,o]},181:function(e,t,i){"use strict";i(5),i(45),i(42),i(54),i(85);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},186:function(e,t,i){"use strict";i(5),i(181);var a=i(123),n=i(179),o=i(6),s=i(4);Object(o.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[n.a,a.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}});var l=i(72),r=i(2),p=i(122);const c={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?p.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!p.a._isVisible(e))return!1;var i,a=e,n=p.a._normalizedTabIndex(a),o=n>0;n>=0&&t.push(a),i="content"===a.localName||"slot"===a.localName?Object(r.a)(a).getDistributedNodes():Object(r.a)(a.shadowRoot||a.root||a).children;for(var s=0;s<i.length;s++)o=this._collectTabbableNodes(i[s],t)||o;return o}},d=customElements.get("paper-dialog"),h={get _focusableNodes(){return c.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(l.b)([h],d)){})},359:function(e,t,i){"use strict";i.r(t),i.d(t,"HuiSaveConfig",function(){return s});var a=i(3),n=i(0),o=(i(191),i(186),i(84),i(56));let s=class extends n.a{constructor(){super(),this._saving=!1}async showDialog(e){this._params=e,await this.updateComplete,this._dialog.open()}get _dialog(){return this.shadowRoot.querySelector("ha-paper-dialog")}render(){return n.e`
      <ha-paper-dialog with-backdrop>
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.save_config.header")}
        </h2>
        <paper-dialog-scrollable>
          <p>
            ${this.hass.localize("ui.panel.lovelace.editor.save_config.para")}
          </p>
          <p>
            ${this.hass.localize("ui.panel.lovelace.editor.save_config.para_sure")}
          </p>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize("ui.panel.lovelace.editor.save_config.cancel")}</mwc-button
          >
          <mwc-button ?disabled="${this._saving}" @click="${this._saveConfig}">
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.hass.localize("ui.panel.lovelace.editor.save_config.save")}</mwc-button
          >
        </div>
      </ha-paper-dialog>
    `}_closeDialog(){this._dialog.close()}async _saveConfig(){if(this.hass&&this._params){this._saving=!0;try{const t=this._params.lovelace;await t.saveConfig(t.config),t.setEditMode(!0),this._saving=!1,this._closeDialog()}catch(e){alert(`Saving failed: ${e.message}`),this._saving=!1}}}static get styles(){return[o.b,n.c`
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
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
      `]}};a.b([Object(n.f)()],s.prototype,"hass",void 0),a.b([Object(n.f)()],s.prototype,"_params",void 0),a.b([Object(n.f)()],s.prototype,"_saving",void 0),s=a.b([Object(n.d)("hui-dialog-save-config")],s)}}]);
//# sourceMappingURL=chunk.c8cec1f6ee4012189d01.js.map