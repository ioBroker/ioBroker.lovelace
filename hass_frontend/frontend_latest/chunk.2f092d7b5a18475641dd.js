/*! For license information please see chunk.2f092d7b5a18475641dd.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[32],{122:function(t,i,e){"use strict";e(5);const n={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,i){for(var e in i)t[e]=i[e]},_cloneConfig:function(t){var i={isClone:!0};return this._copyProperties(i,t),i},_getAnimationConfigRecursive:function(t,i,e){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=t?this.animationConfig[t]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var a,o=0;a=n[o];o++)if(a.animatable)a.animatable._getAnimationConfigRecursive(a.type||t,i,e);else if(a.id){var s=i[a.id];s?(s.isClone||(i[a.id]=this._cloneConfig(s),s=i[a.id]),this._copyProperties(s,a)):i[a.id]=a}else e.push(a)},getAnimationConfig:function(t){var i={},e=[];for(var n in this._getAnimationConfigRecursive(t,i,e),i)e.push(i[n]);return e}};e.d(i,"a",(function(){return a}));const a=[n,{_configureAnimations:function(t){var i=[],e=[];if(t.length>0)for(let o,s=0;o=t[s];s++){let t=document.createElement(o.name);if(t.isNeonAnimation){let i=null;t.configure||(t.configure=function(t){return null}),i=t.configure(o),e.push({result:i,config:o,neonAnimation:t})}else console.warn(this.is+":",o.name,"not found!")}for(var n=0;n<e.length;n++){let t=e[n].result,o=e[n].config,s=e[n].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(a){t=null,console.warn("Couldnt play","(",o.name,").",a)}t&&i.push({neonAnimation:s,config:o,animation:t})}return i},_shouldComplete:function(t){for(var i=!0,e=0;e<t.length;e++)if("finished"!=t[e].animation.playState){i=!1;break}return i},_complete:function(t){for(var i=0;i<t.length;i++)t[i].neonAnimation.complete(t[i].config);for(i=0;i<t.length;i++)t[i].animation.cancel()},playAnimation:function(t,i){var e=this.getAnimationConfig(t);if(e){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(e);if(0!=n.length){this._active[t]=n;for(var a=0;a<n.length;a++)n[a].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",i,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",i,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var i=this._active[t];for(var e in i)i[e].animation.cancel()}this._active={}}}]},186:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"a",(function(){return s}));e(5);var n=e(87),a=e(1);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,i){i&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var i=Object(a.a)(t).path,e=0,n=i.indexOf(this);e<n;e++){var o=i[e];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},s=[n.a,o]},191:function(t,i,e){"use strict";e(5),e(45),e(42),e(54),e(86);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},193:function(t,i,e){"use strict";e(5),e(191);var n=e(122),a=e(186),o=e(6),s=e(3);Object(o.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[a.a,n.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(t,i,e){"use strict";e(193);var n=e(72),a=e(1),o=e(127);const s={getTabbableNodes:function(t){var i=[];return this._collectTabbableNodes(t,i)?o.a._sortByTabIndex(i):i},_collectTabbableNodes:function(t,i){if(t.nodeType!==Node.ELEMENT_NODE||!o.a._isVisible(t))return!1;var e,n=t,s=o.a._normalizedTabIndex(n),l=s>0;s>=0&&i.push(n),e="content"===n.localName||"slot"===n.localName?Object(a.a)(n).getDistributedNodes():Object(a.a)(n.shadowRoot||n.root||n).children;for(var r=0;r<e.length;r++)l=this._collectTabbableNodes(e[r],i)||l;return l}},l=customElements.get("paper-dialog"),r={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(n.b)([r],l)){})},208:function(t,i,e){"use strict";e(5),e(45),e(42);var n=e(186),a=e(6),o=e(3);Object(a.a)({_template:o.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(n.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},709:function(t,i,e){"use strict";e.r(i);var n=e(4),a=e(0),o=(e(208),e(93),e(207),e(194),e(56)),s=e(121),l=e(176);class r extends a.a{async showDialog(t){this._params=t,this._error=void 0,this._name=this._params.entry.name||"",this._entityId=this._params.entry.entity_id,this._disabledBy=this._params.entry.disabled_by,await this.updateComplete}render(){if(!this._params)return a.f``;const t=this._params.entry,i=this.hass.states[t.entity_id],e=Object(s.a)(this._entityId.trim())!==Object(s.a)(this._params.entry.entity_id);return a.f`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${i?Object(l.a)(i):t.name||t.entity_id}
        </h2>
        <paper-dialog-scrollable>
          ${i?"":a.f`
                <div>
                  ${this.hass.localize("ui.panel.config.entity_registry.editor.unavailable")}
                </div>
              `}
          ${this._error?a.f`
                <div class="error">${this._error}</div>
              `:""}
          <div class="form">
            <paper-input
              .value=${this._name}
              @value-changed=${this._nameChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.name")}
              .placeholder=${i?Object(l.a)(i):""}
              .disabled=${this._submitting}
            ></paper-input>
            <paper-input
              .value=${this._entityId}
              @value-changed=${this._entityIdChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.entity_id")}
              error-message="Domain needs to stay the same"
              .invalid=${e}
              .disabled=${this._submitting}
            ></paper-input>
            <div class="row">
              <paper-toggle-button
                .checked=${!this._disabledBy}
                @checked-changed=${this._disabledByChanged}
              >
                <div>
                  <div>
                    ${this.hass.localize("ui.panel.config.entity_registry.editor.enabled_label")}
                  </div>
                  <div class="secondary">
                    ${this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.panel.config.entity_registry.editor.enabled_cause","cause",this.hass.localize(`config_entry.disabled_by.${this._disabledBy}`)):""}
                    ${this.hass.localize("ui.panel.config.entity_registry.editor.enabled_description")}
                    <br />Note: this might not work yet with all integrations.
                  </div>
                </div>
              </paper-toggle-button>
            </div>
          </div>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button
            class="warning"
            @click="${this._deleteEntry}"
            .disabled=${this._submitting}
          >
            ${this.hass.localize("ui.panel.config.entity_registry.editor.delete")}
          </mwc-button>
          <mwc-button
            @click="${this._updateEntry}"
            .disabled=${e||this._submitting}
          >
            ${this.hass.localize("ui.panel.config.entity_registry.editor.update")}
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `}_nameChanged(t){this._error=void 0,this._name=t.detail.value}_entityIdChanged(t){this._error=void 0,this._entityId=t.detail.value}async _updateEntry(){this._submitting=!0;try{await this._params.updateEntry({name:this._name.trim()||null,disabled_by:this._disabledBy,new_entity_id:this._entityId.trim()}),this._params=void 0}catch(t){this._error=t.message||"Unknown error"}finally{this._submitting=!1}}async _deleteEntry(){this._submitting=!0;try{await this._params.removeEntry()&&(this._params=void 0)}finally{this._submitting=!1}}_openedChanged(t){t.detail.value||(this._params=void 0)}_disabledByChanged(t){this._disabledBy=t.detail.value?null:"user"}static get styles(){return[o.b,a.c`
        ha-paper-dialog {
          min-width: 400px;
          max-width: 450px;
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
        .row {
          margin-top: 8px;
          color: var(--primary-text-color);
        }
        .secondary {
          color: var(--secondary-text-color);
        }
      `]}}Object(n.b)([Object(a.g)()],r.prototype,"hass",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_name",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_entityId",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_disabledBy",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_error",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_params",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_submitting",void 0),customElements.define("dialog-entity-registry-detail",r)}}]);
//# sourceMappingURL=chunk.2f092d7b5a18475641dd.js.map