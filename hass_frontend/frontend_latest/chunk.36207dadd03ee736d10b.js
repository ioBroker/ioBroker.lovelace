/*! For license information please see chunk.36207dadd03ee736d10b.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[27],{186:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));a(5);var i=a(87),s=a(1);const n={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(s.a)(e).path,a=0,i=t.indexOf(this);a<i;a++){var n=t[a];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},o=[i.a,n]},191:function(e,t,a){"use strict";a(5),a(45),a(42),a(54),a(86);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},193:function(e,t,a){"use strict";a(5),a(191);var i=a(122),s=a(186),n=a(6),o=a(3);Object(n.a)({_template:o.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[s.a,i.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(e,t,a){"use strict";a(193);var i=a(72),s=a(1),n=a(127);const o={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?n.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!n.a._isVisible(e))return!1;var a,i=e,o=n.a._normalizedTabIndex(i),r=o>0;o>=0&&t.push(i),a="content"===i.localName||"slot"===i.localName?Object(s.a)(i).getDistributedNodes():Object(s.a)(i.shadowRoot||i.root||i).children;for(var l=0;l<a.length;l++)r=this._collectTabbableNodes(a[l],t)||r;return r}},r=customElements.get("paper-dialog"),l={get _focusableNodes(){return o.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(i.b)([l],r)){})},208:function(e,t,a){"use strict";a(5),a(45),a(42);var i=a(186),s=a(6),n=a(3);Object(s.a)({_template:n.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(i.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},472:function(e,t,a){"use strict";a.r(t);var i=a(4),s=a(0),n=(a(208),a(93),a(144),a(146),a(143),a(85),a(194),a(56)),o=a(227);let r=class extends s.a{async showDialog(e){this._params=e,this._error=void 0,this._nameByUser=this._params.device.name_by_user||"",this._areaId=this._params.device.area_id,await this.updateComplete}connectedCallback(){super.connectedCallback(),this._unsubAreas=Object(o.c)(this.hass.connection,e=>{this._areas=e})}disconnectedCallback(){super.disconnectedCallback(),this._unsubAreas&&this._unsubAreas()}render(){if(!this._params)return s.f``;const e=this._params.device;return s.f`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>${e.name||"Unnamed device"}</h2>
        <paper-dialog-scrollable>
          ${this._error?s.f`
                <div class="error">${this._error}</div>
              `:""}
          <div class="form">
            <paper-input
              .value=${this._nameByUser}
              @value-changed=${this._nameChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.name")}
              .placeholder=${e.name||""}
              .disabled=${this._submitting}
            ></paper-input>
            <div class="area">
              <paper-dropdown-menu label="Area" class="flex">
                <paper-listbox
                  slot="dropdown-content"
                  .selected="${this._computeSelectedArea()}"
                  @iron-select="${this._areaIndexChanged}"
                >
                  <paper-item>
                    ${this.hass.localize("ui.panel.config.integrations.config_entry.no_area")}
                  </paper-item>
                  ${this._renderAreas()}
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
          </div>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._updateEntry}">
            ${this.hass.localize("ui.panel.config.entity_registry.editor.update")}
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `}_nameChanged(e){this._error=void 0,this._nameByUser=e.detail.value}_renderAreas(){if(this._areas)return this._areas.map(e=>s.f`
        <paper-item>${e.name}</paper-item>
      `)}_computeSelectedArea(){if(!this._params||!this._areas)return-1;const e=this._params.device;return e.area_id?this._areas.findIndex(t=>t.area_id===e.area_id)+1:0}_areaIndexChanged(e){const t=e.target.selected;this._areaId=t<1?void 0:this._areas[t-1].area_id}async _updateEntry(){this._submitting=!0;try{await this._params.updateEntry({name_by_user:this._nameByUser.trim()||null,area_id:this._areaId||null}),this._params=void 0}catch(e){this._error=e.message||"Unknown error"}finally{this._submitting=!1}}_openedChanged(e){e.detail.value||(this._params=void 0)}static get styles(){return[n.b,s.c`
        ha-paper-dialog {
          min-width: 400px;
        }
        .form {
          padding-bottom: 24px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        .error {
          color: var(--google-red-500);
        }
      `]}};Object(i.b)([Object(s.g)()],r.prototype,"hass",void 0),Object(i.b)([Object(s.g)()],r.prototype,"_nameByUser",void 0),Object(i.b)([Object(s.g)()],r.prototype,"_error",void 0),Object(i.b)([Object(s.g)()],r.prototype,"_params",void 0),Object(i.b)([Object(s.g)()],r.prototype,"_areas",void 0),Object(i.b)([Object(s.g)()],r.prototype,"_areaId",void 0),r=Object(i.b)([Object(s.d)("dialog-device-registry-detail")],r)}}]);
//# sourceMappingURL=chunk.36207dadd03ee736d10b.js.map