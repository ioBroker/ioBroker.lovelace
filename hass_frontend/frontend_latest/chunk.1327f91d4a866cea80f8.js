/*! For license information please see chunk.1327f91d4a866cea80f8.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[22],{175:function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=i(0).e`
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
`},179:function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return s});i(5);var a=i(86),o=i(2);const n={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=Object(o.a)(t).path,i=0,a=e.indexOf(this);i<a;i++){var n=e[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},s=[a.a,n]},181:function(t,e,i){"use strict";i(5),i(45),i(42),i(54),i(85);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},186:function(t,e,i){"use strict";i(5),i(181);var a=i(123),o=i(179),n=i(6),s=i(4);Object(n.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[o.a,a.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}});var l=i(72),r=i(2),c=i(122);const d={getTabbableNodes:function(t){var e=[];return this._collectTabbableNodes(t,e)?c.a._sortByTabIndex(e):e},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!c.a._isVisible(t))return!1;var i,a=t,o=c.a._normalizedTabIndex(a),n=o>0;o>=0&&e.push(a),i="content"===a.localName||"slot"===a.localName?Object(r.a)(a).getDistributedNodes():Object(r.a)(a.shadowRoot||a.root||a).children;for(var s=0;s<i.length;s++)n=this._collectTabbableNodes(i[s],e)||n;return n}},h=customElements.get("paper-dialog"),p={get _focusableNodes(){return d.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(l.b)([p],h)){})},196:function(t,e,i){"use strict";i(5),i(45),i(42);var a=i(179),o=i(6),n=i(4);Object(o.a)({_template:n.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},375:function(t,e,i){"use strict";i.r(e);var a=i(3),o=i(0),n=(i(191),i(186),i(84),i(196),i(56)),s=(i(92),i(18)),l=i(175);let r=class extends o.a{get _title(){return this.config&&this.config.title||""}render(){return o.e`
      ${l.a}
      <div class="card-config">
        <paper-input
          label="Title"
          .value="${this._title}"
          .configValue="${"title"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
      </div>
    `}_valueChanged(t){if(!this.config)return;const e=t.currentTarget;if(this[`_${e.configValue}`]===e.value)return;let i;e.configValue&&(i=Object.assign({},this.config,{[e.configValue]:e.value})),Object(s.a)(this,"lovelace-config-changed",{config:i})}};a.b([Object(o.f)()],r.prototype,"hass",void 0),a.b([Object(o.f)()],r.prototype,"config",void 0),r=a.b([Object(o.d)("hui-lovelace-editor")],r),i.d(e,"HuiDialogEditLovelace",function(){return c});let c=class extends o.a{constructor(){super(),this._saving=!1}async showDialog(t){this._lovelace=t,null==this._dialog&&await this.updateComplete;const e=this._lovelace.config,{views:i}=e,o=a.d(e,["views"]);this._config=o,this._dialog.open()}get _dialog(){return this.shadowRoot.querySelector("ha-paper-dialog")}render(){return o.e`
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
    `}_closeDialog(){this._config=void 0,this._dialog.close()}async _save(){if(!this._config)return;if(!this._isConfigChanged())return void this._closeDialog();this._saving=!0;const t=this._lovelace,e=Object.assign({},t.config,this._config);try{await t.saveConfig(e),this._closeDialog()}catch(i){alert(`Saving failed: ${i.message}`)}finally{this._saving=!1}}_ConfigChanged(t){t.detail&&t.detail.config&&(this._config=t.detail.config)}_isConfigChanged(){const t=this._lovelace.config,{views:e}=t,i=a.d(t,["views"]);return JSON.stringify(this._config)!==JSON.stringify(i)}static get styles(){return[n.b,o.c`
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
      `]}};a.b([Object(o.f)()],c.prototype,"hass",void 0),a.b([Object(o.f)()],c.prototype,"_lovelace",void 0),c=a.b([Object(o.d)("hui-dialog-edit-lovelace")],c)}}]);
//# sourceMappingURL=chunk.1327f91d4a866cea80f8.js.map