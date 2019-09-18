/*! For license information please see chunk.ef221a1340a3525602c5.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[27],{186:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));n(5);var a=n(87),i=n(2);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(i.a)(e).path,n=0,a=t.indexOf(this);n<a;n++){var o=t[n];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[a.a,o]},191:function(e,t,n){"use strict";n(5),n(45),n(42),n(54),n(86);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},193:function(e,t,n){"use strict";n(5),n(191);var a=n(122),i=n(186),o=n(6),s=n(4);Object(o.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[i.a,a.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(e,t,n){"use strict";var a=n(0),i=(n(193),n(72)),o=n(2),s=n(127);const r={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?s.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!s.a._isVisible(e))return!1;var n,a=e,i=s.a._normalizedTabIndex(a),r=i>0;i>=0&&t.push(a),n="content"===a.localName||"slot"===a.localName?Object(o.a)(a).getDistributedNodes():Object(o.a)(a.shadowRoot||a.root||a).children;for(var l=0;l<n.length;l++)r=this._collectTabbableNodes(n[l],t)||r;return r}};var l=customElements.get("paper-dialog"),c={get _focusableNodes(){return r.getTabbableNodes(this)}},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.d)(t,e),t}(Object(i.b)([c],l));customElements.define("ha-paper-dialog",p)},208:function(e,t,n){"use strict";n(5),n(45),n(42);var a=n(186),i=n(6),o=n(4);Object(i.a)({_template:o.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},472:function(e,t,n){"use strict";n.r(t);var a,i,o,s,r,l=n(0),c=n(1),p=(n(208),n(93),n(144),n(146),n(143),n(85),n(194),n(56)),d=n(227);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(l.d)(t,e),t.prototype.showDialog=function(e){return Object(l.b)(this,void 0,void 0,(function(){return Object(l.e)(this,(function(t){switch(t.label){case 0:return this._params=e,this._error=void 0,this._nameByUser=this._params.device.name_by_user||"",this._areaId=this._params.device.area_id,[4,this.updateComplete];case 1:return t.sent(),[2]}}))}))},t.prototype.connectedCallback=function(){var t=this;e.prototype.connectedCallback.call(this),this._unsubAreas=Object(d.c)(this.hass.connection,(function(e){t._areas=e}))},t.prototype.disconnectedCallback=function(){e.prototype.disconnectedCallback.call(this),this._unsubAreas&&this._unsubAreas()},t.prototype.render=function(){if(!this._params)return Object(c.f)(a||(a=Object(l.f)([""],[""])));var e=this._params.device;return Object(c.f)(o||(o=Object(l.f)(['\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed="','"\n      >\n        <h2>',"</h2>\n        <paper-dialog-scrollable>\n          ",'\n          <div class="form">\n            <paper-input\n              .value=',"\n              @value-changed=","\n              .label=","\n              .placeholder=","\n              .disabled=",'\n            ></paper-input>\n            <div class="area">\n              <paper-dropdown-menu label="Area" class="flex">\n                <paper-listbox\n                  slot="dropdown-content"\n                  .selected="','"\n                  @iron-select="','"\n                >\n                  <paper-item>\n                    ',"\n                  </paper-item>\n                  ",'\n                </paper-listbox>\n              </paper-dropdown-menu>\n            </div>\n          </div>\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          <mwc-button @click="','">\n            ',"\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    "],['\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed="','"\n      >\n        <h2>',"</h2>\n        <paper-dialog-scrollable>\n          ",'\n          <div class="form">\n            <paper-input\n              .value=',"\n              @value-changed=","\n              .label=","\n              .placeholder=","\n              .disabled=",'\n            ></paper-input>\n            <div class="area">\n              <paper-dropdown-menu label="Area" class="flex">\n                <paper-listbox\n                  slot="dropdown-content"\n                  .selected="','"\n                  @iron-select="','"\n                >\n                  <paper-item>\n                    ',"\n                  </paper-item>\n                  ",'\n                </paper-listbox>\n              </paper-dropdown-menu>\n            </div>\n          </div>\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          <mwc-button @click="','">\n            ',"\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    "])),this._openedChanged,e.name||"Unnamed device",this._error?Object(c.f)(i||(i=Object(l.f)(['\n                <div class="error">',"</div>\n              "],['\n                <div class="error">',"</div>\n              "])),this._error):"",this._nameByUser,this._nameChanged,this.hass.localize("ui.dialogs.more_info_settings.name"),e.name||"",this._submitting,this._computeSelectedArea(),this._areaIndexChanged,this.hass.localize("ui.panel.config.integrations.config_entry.no_area"),this._renderAreas(),this._updateEntry,this.hass.localize("ui.panel.config.entity_registry.editor.update"))},t.prototype._nameChanged=function(e){this._error=void 0,this._nameByUser=e.detail.value},t.prototype._renderAreas=function(){if(this._areas)return this._areas.map((function(e){return Object(c.f)(s||(s=Object(l.f)(["\n        <paper-item>","</paper-item>\n      "],["\n        <paper-item>","</paper-item>\n      "])),e.name)}))},t.prototype._computeSelectedArea=function(){if(!this._params||!this._areas)return-1;var e=this._params.device;return e.area_id?this._areas.findIndex((function(t){return t.area_id===e.area_id}))+1:0},t.prototype._areaIndexChanged=function(e){var t=e.target.selected;this._areaId=t<1?void 0:this._areas[t-1].area_id},t.prototype._updateEntry=function(){return Object(l.b)(this,void 0,void 0,(function(){var e;return Object(l.e)(this,(function(t){switch(t.label){case 0:this._submitting=!0,t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,this._params.updateEntry({name_by_user:this._nameByUser.trim()||null,area_id:this._areaId||null})];case 2:return t.sent(),this._params=void 0,[3,5];case 3:return e=t.sent(),this._error=e.message||"Unknown error",[3,5];case 4:return this._submitting=!1,[7];case 5:return[2]}}))}))},t.prototype._openedChanged=function(e){e.detail.value||(this._params=void 0)},Object.defineProperty(t,"styles",{get:function(){return[p.b,Object(c.c)(r||(r=Object(l.f)(["\n        ha-paper-dialog {\n          min-width: 400px;\n        }\n        .form {\n          padding-bottom: 24px;\n        }\n        mwc-button.warning {\n          margin-right: auto;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n      "],["\n        ha-paper-dialog {\n          min-width: 400px;\n        }\n        .form {\n          padding-bottom: 24px;\n        }\n        mwc-button.warning {\n          margin-right: auto;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n      "])))]},enumerable:!0,configurable:!0}),Object(l.c)([Object(c.g)()],t.prototype,"hass",void 0),Object(l.c)([Object(c.g)()],t.prototype,"_nameByUser",void 0),Object(l.c)([Object(c.g)()],t.prototype,"_error",void 0),Object(l.c)([Object(c.g)()],t.prototype,"_params",void 0),Object(l.c)([Object(c.g)()],t.prototype,"_areas",void 0),Object(l.c)([Object(c.g)()],t.prototype,"_areaId",void 0),t=Object(l.c)([Object(c.d)("dialog-device-registry-detail")],t)}(c.a)}}]);
//# sourceMappingURL=chunk.ef221a1340a3525602c5.js.map