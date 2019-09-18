/*! For license information please see chunk.f90cd879c47b93218457.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[45],{186:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return s}));t(5);var i=t(87),a=t(2);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(n,e){e&&(n?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(n){this.closingReason=this.closingReason||{},this.closingReason.confirmed=n},_onDialogClick:function(n){for(var e=Object(a.a)(n).path,t=0,i=e.indexOf(this);t<i;t++){var o=e[t];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),n.stopPropagation();break}}}},s=[i.a,o]},191:function(n,e,t){"use strict";t(5),t(45),t(42),t(54),t(86);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},193:function(n,e,t){"use strict";t(5),t(191);var i=t(122),a=t(186),o=t(6),s=t(4);Object(o.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[a.a,i.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(n,e,t){"use strict";var i=t(0),a=(t(193),t(72)),o=t(2),s=t(127);const l={getTabbableNodes:function(n){var e=[];return this._collectTabbableNodes(n,e)?s.a._sortByTabIndex(e):e},_collectTabbableNodes:function(n,e){if(n.nodeType!==Node.ELEMENT_NODE||!s.a._isVisible(n))return!1;var t,i=n,a=s.a._normalizedTabIndex(i),l=a>0;a>=0&&e.push(i),t="content"===i.localName||"slot"===i.localName?Object(o.a)(i).getDistributedNodes():Object(o.a)(i.shadowRoot||i.root||i).children;for(var r=0;r<t.length;r++)l=this._collectTabbableNodes(t[r],e)||l;return l}};var r=customElements.get("paper-dialog"),p={get _focusableNodes(){return l.getTabbableNodes(this)}},c=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return Object(i.d)(e,n),e}(Object(a.b)([p],r));customElements.define("ha-paper-dialog",c)},699:function(n,e,t){"use strict";t.r(e),t.d(e,"HuiSaveConfig",(function(){return r}));var i,a,o=t(0),s=t(1),l=(t(187),t(194),t(85),t(56)),r=function(n){function e(){var e=n.call(this)||this;return e._saving=!1,e}return Object(o.d)(e,n),e.prototype.showDialog=function(n){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.e)(this,(function(e){switch(e.label){case 0:return this._params=n,[4,this.updateComplete];case 1:return e.sent(),this._dialog.open(),[2]}}))}))},Object.defineProperty(e.prototype,"_dialog",{get:function(){return this.shadowRoot.querySelector("ha-paper-dialog")},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(s.f)(i||(i=Object(o.f)(["\n      <ha-paper-dialog with-backdrop>\n        <h2>\n          ","\n        </h2>\n        <paper-dialog-scrollable>\n          <p>\n            ","\n          </p>\n          <p>\n            ",'\n          </p>\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          <mwc-button @click="','"\n            >','</mwc-button\n          >\n          <mwc-button ?disabled="','" @click="','">\n            <paper-spinner\n              ?active="','"\n              alt="Saving"\n            ></paper-spinner>\n            ',"</mwc-button\n          >\n        </div>\n      </ha-paper-dialog>\n    "],["\n      <ha-paper-dialog with-backdrop>\n        <h2>\n          ","\n        </h2>\n        <paper-dialog-scrollable>\n          <p>\n            ","\n          </p>\n          <p>\n            ",'\n          </p>\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          <mwc-button @click="','"\n            >','</mwc-button\n          >\n          <mwc-button ?disabled="','" @click="','">\n            <paper-spinner\n              ?active="','"\n              alt="Saving"\n            ></paper-spinner>\n            ',"</mwc-button\n          >\n        </div>\n      </ha-paper-dialog>\n    "])),this.hass.localize("ui.panel.lovelace.editor.save_config.header"),this.hass.localize("ui.panel.lovelace.editor.save_config.para"),this.hass.localize("ui.panel.lovelace.editor.save_config.para_sure"),this._closeDialog,this.hass.localize("ui.panel.lovelace.editor.save_config.cancel"),this._saving,this._saveConfig,this._saving,this.hass.localize("ui.panel.lovelace.editor.save_config.save"))},e.prototype._closeDialog=function(){this._dialog.close()},e.prototype._saveConfig=function(){return Object(o.b)(this,void 0,void 0,(function(){var n,e;return Object(o.e)(this,(function(t){switch(t.label){case 0:if(!this.hass||!this._params)return[2];this._saving=!0,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,(n=this._params.lovelace).saveConfig(n.config)];case 2:return t.sent(),n.setEditMode(!0),this._saving=!1,this._closeDialog(),[3,4];case 3:return e=t.sent(),alert("Saving failed: "+e.message),this._saving=!1,[3,4];case 4:return[2]}}))}))},Object.defineProperty(e,"styles",{get:function(){return[l.b,Object(s.c)(a||(a=Object(o.f)(["\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 650px;\n          }\n        }\n        ha-paper-dialog {\n          max-width: 650px;\n        }\n        paper-spinner {\n          display: none;\n        }\n        paper-spinner[active] {\n          display: block;\n        }\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n      "],["\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 650px;\n          }\n        }\n        ha-paper-dialog {\n          max-width: 650px;\n        }\n        paper-spinner {\n          display: none;\n        }\n        paper-spinner[active] {\n          display: block;\n        }\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n      "])))]},enumerable:!0,configurable:!0}),Object(o.c)([Object(s.g)()],e.prototype,"hass",void 0),Object(o.c)([Object(s.g)()],e.prototype,"_params",void 0),Object(o.c)([Object(s.g)()],e.prototype,"_saving",void 0),e=Object(o.c)([Object(s.d)("hui-dialog-save-config")],e)}(s.a)}}]);
//# sourceMappingURL=chunk.f90cd879c47b93218457.js.map