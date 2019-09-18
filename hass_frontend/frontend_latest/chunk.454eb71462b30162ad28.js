/*! For license information please see chunk.454eb71462b30162ad28.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[24],{186:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}));i(5);var o=i(87),s=i(1);const n={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=Object(s.a)(t).path,i=0,o=e.indexOf(this);i<o;i++){var n=e[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},a=[o.a,n]},191:function(t,e,i){"use strict";i(5),i(45),i(42),i(54),i(86);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},193:function(t,e,i){"use strict";i(5),i(191);var o=i(122),s=i(186),n=i(6),a=i(3);Object(n.a)({_template:a.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[s.a,o.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(t,e,i){"use strict";i(193);var o=i(72),s=i(1),n=i(127);const a={getTabbableNodes:function(t){var e=[];return this._collectTabbableNodes(t,e)?n.a._sortByTabIndex(e):e},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!n.a._isVisible(t))return!1;var i,o=t,a=n.a._normalizedTabIndex(o),l=a>0;a>=0&&e.push(o),i="content"===o.localName||"slot"===o.localName?Object(s.a)(o).getDistributedNodes():Object(s.a)(o.shadowRoot||o.root||o).children;for(var r=0;r<i.length;r++)l=this._collectTabbableNodes(i[r],e)||l;return l}},l=customElements.get("paper-dialog"),r={get _focusableNodes(){return a.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(o.b)([r],l)){})},208:function(t,e,i){"use strict";i(5),i(45),i(42);var o=i(186),s=i(6),n=i(3);Object(s.a)({_template:n.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(o.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},710:function(t,e,i){"use strict";i.r(e);var o=i(4),s=i(0),n=(i(208),i(93),i(194),i(299)),a=i(56);let l=class extends s.a{async showDialog(t){this._params=t,this._error=void 0,this._loading=!0;const e=await Object(n.c)(this.hass,t.entry.entry_id);this._loading=!1,this._disableNewEntities=e.disable_new_entities,await this.updateComplete}render(){return this._params?s.f`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${this.hass.localize("ui.dialogs.config_entry_system_options.title")}
        </h2>
        <paper-dialog-scrollable>
          ${this._loading?s.f`
                <div class="init-spinner">
                  <paper-spinner-lite active></paper-spinner-lite>
                </div>
              `:s.f`
                ${this._error?s.f`
                      <div class="error">${this._error}</div>
                    `:""}
                <div class="form">
                  <paper-toggle-button
                    .checked=${!this._disableNewEntities}
                    @checked-changed=${this._disableNewEntitiesChanged}
                    .disabled=${this._submitting}
                  >
                    <div>
                      ${this.hass.localize("ui.dialogs.config_entry_system_options.enable_new_entities_label")}
                    </div>
                    <div class="secondary">
                      ${this.hass.localize("ui.dialogs.config_entry_system_options.enable_new_entities_description")}
                    </div>
                  </paper-toggle-button>
                </div>
              `}
        </paper-dialog-scrollable>
        ${this._loading?"":s.f`
              <div class="paper-dialog-buttons">
                <mwc-button
                  @click="${this._updateEntry}"
                  .disabled=${this._submitting}
                >
                  ${this.hass.localize("ui.panel.config.entity_registry.editor.update")}
                </mwc-button>
              </div>
            `}
      </ha-paper-dialog>
    `:s.f``}_disableNewEntitiesChanged(t){this._error=void 0,this._disableNewEntities=!t.detail.value}async _updateEntry(){this._submitting=!0;try{await Object(n.d)(this.hass,this._params.entry.entry_id,{disable_new_entities:this._disableNewEntities}),this._params=void 0}catch(t){this._error=t.message||"Unknown error"}finally{this._submitting=!1}}_openedChanged(t){t.detail.value||(this._params=void 0)}static get styles(){return[a.b,s.c`
        ha-paper-dialog {
          min-width: 400px;
          max-width: 500px;
        }
        .init-spinner {
          padding: 50px 100px;
          text-align: center;
        }

        .form {
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }

        .secondary {
          color: var(--secondary-text-color);
        }

        .error {
          color: var(--google-red-500);
        }
      `]}};Object(o.b)([Object(s.g)()],l.prototype,"hass",void 0),Object(o.b)([Object(s.g)()],l.prototype,"_disableNewEntities",void 0),Object(o.b)([Object(s.g)()],l.prototype,"_error",void 0),Object(o.b)([Object(s.g)()],l.prototype,"_params",void 0),Object(o.b)([Object(s.g)()],l.prototype,"_loading",void 0),Object(o.b)([Object(s.g)()],l.prototype,"_submitting",void 0),l=Object(o.b)([Object(s.d)("dialog-config-entry-system-options")],l)}}]);
//# sourceMappingURL=chunk.454eb71462b30162ad28.js.map