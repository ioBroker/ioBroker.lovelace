/*! For license information please see chunk.1d94778e23334215d3f3.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{191:function(t,e,i){"use strict";i(188);var a=i(70),s=i(2),n=i(123);const r={getTabbableNodes:function(t){var e=[];return this._collectTabbableNodes(t,e)?n.a._sortByTabIndex(e):e},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!n.a._isVisible(t))return!1;var i,a=t,r=n.a._normalizedTabIndex(a),o=r>0;r>=0&&e.push(a),i="content"===a.localName||"slot"===a.localName?Object(s.a)(a).getDistributedNodes():Object(s.a)(a.shadowRoot||a.root||a).children;for(var d=0;d<i.length;d++)o=this._collectTabbableNodes(i[d],e)||o;return o}},o=customElements.get("paper-dialog"),d={get _focusableNodes(){return r.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(a.b)([d],o)){})},704:function(t,e,i){"use strict";i.r(e);var a=i(1),s=(i(201),i(90),i(191),i(54)),n=i(173),r=i(168);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}customElements.define("dialog-entity-registry-detail",class extends a.a{constructor(...t){super(...t),o(this,"hass",void 0),o(this,"_name",void 0),o(this,"_entityId",void 0),o(this,"_error",void 0),o(this,"_params",void 0),o(this,"_submitting",void 0)}static get properties(){return{_error:{},_name:{},_entityId:{},_params:{}}}async showDialog(t){this._params=t,this._error=void 0,this._name=this._params.entry.name||"",this._entityId=this._params.entry.entity_id,await this.updateComplete}render(){if(!this._params)return a.e``;const t=this._params.entry,e=this.hass.states[t.entity_id],i=Object(n.a)(this._entityId.trim())!==Object(n.a)(this._params.entry.entity_id);return a.e`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>${t.entity_id}</h2>
        <paper-dialog-scrollable>
          ${e?"":a.e`
                <div>
                  ${this.hass.localize("ui.panel.config.entity_registry.editor.unavailable")}
                </div>
              `}
          ${this._error?a.e`
                <div class="error">${this._error}</div>
              `:""}
          <div class="form">
            <paper-input
              .value=${this._name}
              @value-changed=${this._nameChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.name")}
              .placeholder=${e?Object(r.a)(e):""}
              .disabled=${this._submitting}
            ></paper-input>
            <paper-input
              .value=${this._entityId}
              @value-changed=${this._entityIdChanged}
              .label=${this.hass.localize("ui.dialogs.more_info_settings.entity_id")}
              error-message="Domain needs to stay the same"
              .invalid=${i}
              .disabled=${this._submitting}
            ></paper-input>
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
            .disabled=${i||this._submitting}
          >
            ${this.hass.localize("ui.panel.config.entity_registry.editor.update")}
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `}_nameChanged(t){this._error=void 0,this._name=t.detail.value}_entityIdChanged(t){this._error=void 0,this._entityId=t.detail.value}async _updateEntry(){this._submitting=!0;try{await this._params.updateEntry({name:this._name.trim()||null,new_entity_id:this._entityId.trim()}),this._params=void 0}catch(t){this._error=t.message||"Unknown error"}finally{this._submitting=!1}}async _deleteEntry(){this._submitting=!0;try{await this._params.removeEntry()&&(this._params=void 0)}finally{this._submitting=!1}}_openedChanged(t){t.detail.value||(this._params=void 0)}static get styles(){return[s.b,a.c`
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
      `]}})}}]);
//# sourceMappingURL=chunk.1d94778e23334215d3f3.js.map