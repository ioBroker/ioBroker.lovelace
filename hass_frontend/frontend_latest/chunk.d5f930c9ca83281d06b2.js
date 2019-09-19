(self.webpackJsonp=self.webpackJsonp||[]).push([[30],{170:function(e,t,i){"use strict";var n=i(172);i.d(t,"a",function(){return a});const a=Object(n.a)({types:{"entity-id":function(e){return"string"!=typeof e?"entity id should be a string":!!e.includes(".")||"entity id should be in the format 'domain.entity'"},icon:function(e){return"string"!=typeof e?"icon should be a string":!!e.includes(":")||"icon should be in the format 'mdi:icon'"}}})},175:function(e,t,i){"use strict";i.d(t,"a",function(){return n});const n=i(0).e`
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
`},178:function(e,t,i){"use strict";var n=i(3),a=(i(107),i(92),i(173),i(174),i(185),i(121)),s=(i(176),i(167)),o=i(0),r=i(18);const c=(e,t,i)=>{e.firstElementChild||(e.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),e.querySelector("state-badge").stateObj=i.item,e.querySelector(".name").textContent=Object(s.a)(i.item),e.querySelector("[secondary]").textContent=i.item.entity_id};class l extends o.a{constructor(){super(...arguments),this._getStates=Object(a.a)((e,t,i)=>{let n=[];if(!e)return[];let a=Object.keys(e.states);return t&&(a=a.filter(e=>e.substr(0,e.indexOf("."))===t)),n=a.sort().map(t=>e.states[t]),i&&(n=n.filter(e=>e.entity_id===this.value||i(e))),n})}updated(e){super.updated(e),e.has("hass")&&!this._opened&&(this._hass=this.hass)}render(){const e=this._getStates(this._hass,this.domainFilter,this.entityFilter);return o.e`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${e}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${c}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${void 0===this.label&&this._hass?this._hass.localize("ui.components.entity.entity-picker.entity"):this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value?o.e`
                <paper-icon-button
                  aria-label="Clear"
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              `:""}
          ${e.length>0?o.e`
                <paper-icon-button
                  aria-label="Show entities"
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened?"hass:menu-up":"hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              `:""}
        </paper-input>
      </vaadin-combo-box-light>
    `}get _value(){return this.value||""}_openedChanged(e){this._opened=e.detail.value}_valueChanged(e){e.detail.value!==this._value&&(this.value=e.detail.value,setTimeout(()=>{Object(r.a)(this,"value-changed",{value:this.value}),Object(r.a)(this,"change")},0))}static get styles(){return o.c`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `}}n.b([Object(o.f)({type:Boolean})],l.prototype,"autofocus",void 0),n.b([Object(o.f)({type:Boolean})],l.prototype,"disabled",void 0),n.b([Object(o.f)({type:Boolean,attribute:"allow-custom-entity"})],l.prototype,"allowCustomEntity",void 0),n.b([Object(o.f)()],l.prototype,"hass",void 0),n.b([Object(o.f)()],l.prototype,"label",void 0),n.b([Object(o.f)()],l.prototype,"value",void 0),n.b([Object(o.f)({attribute:"domain-filter"})],l.prototype,"domainFilter",void 0),n.b([Object(o.f)()],l.prototype,"entityFilter",void 0),n.b([Object(o.f)({type:Boolean})],l.prototype,"_opened",void 0),n.b([Object(o.f)()],l.prototype,"_hass",void 0),customElements.define("ha-entity-picker",l)},184:function(e,t,i){"use strict";var n=i(3),a=i(0),s=(i(84),i(18));let o=class extends a.a{render(){const e=["Backend-selected","default"].concat(Object.keys(this.hass.themes.themes).sort());return a.e`
      <paper-dropdown-menu
        label="Theme"
        dynamic-align
        @value-changed="${this._changed}"
      >
        <paper-listbox
          slot="dropdown-content"
          .selected="${this.value}"
          attr-for-selected="theme"
        >
          ${e.map(e=>a.e`
              <paper-item theme="${e}">${e}</paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `}static get styles(){return a.c`
      paper-dropdown-menu {
        width: 100%;
      }
    `}_changed(e){this.hass&&""!==e.target.value&&(this.value=e.target.value,Object(s.a)(this,"theme-changed"))}};n.b([Object(a.f)()],o.prototype,"value",void 0),n.b([Object(a.f)()],o.prototype,"hass",void 0),o=n.b([Object(a.d)("hui-theme-select-editor")],o)},189:function(e,t,i){"use strict";var n=i(3),a=i(0),s=(i(107),i(18));i(178);let o=class extends a.a{render(){return this.entities?a.e`
      <h3>Entities</h3>
      <div class="entities">
        ${this.entities.map((e,t)=>a.e`
            <div class="entity">
              <ha-entity-picker
                .hass="${this.hass}"
                .value="${e.entity}"
                .index="${t}"
                @change="${this._valueChanged}"
                allow-custom-entity
              ></ha-entity-picker>
              <paper-icon-button
                title="Move entity down"
                icon="hass:arrow-down"
                .index="${t}"
                @click="${this._entityDown}"
                ?disabled="${t===this.entities.length-1}"
              ></paper-icon-button>
              <paper-icon-button
                title="Move entity up"
                icon="hass:arrow-up"
                .index="${t}"
                @click="${this._entityUp}"
                ?disabled="${0===t}"
              ></paper-icon-button>
            </div>
          `)}
        <ha-entity-picker
          .hass="${this.hass}"
          @change="${this._addEntity}"
        ></ha-entity-picker>
      </div>
    `:a.e``}_addEntity(e){const t=e.target;if(""===t.value)return;const i=this.entities.concat({entity:t.value});t.value="",Object(s.a)(this,"entities-changed",{entities:i})}_entityUp(e){const t=e.target,i=this.entities.concat();[i[t.index-1],i[t.index]]=[i[t.index],i[t.index-1]],Object(s.a)(this,"entities-changed",{entities:i})}_entityDown(e){const t=e.target,i=this.entities.concat();[i[t.index+1],i[t.index]]=[i[t.index],i[t.index+1]],Object(s.a)(this,"entities-changed",{entities:i})}_valueChanged(e){const t=e.target,i=this.entities.concat();""===t.value?i.splice(t.index,1):i[t.index]=Object.assign({},i[t.index],{entity:t.value}),Object(s.a)(this,"entities-changed",{entities:i})}static get styles(){return a.c`
      .entities {
        padding-left: 20px;
      }
      .entity {
        display: flex;
        align-items: flex-end;
      }
      .entity ha-entity-picker {
        flex-grow: 1;
      }
    `}};n.b([Object(a.f)()],o.prototype,"hass",void 0),n.b([Object(a.f)()],o.prototype,"entities",void 0),o=n.b([Object(a.d)("hui-entity-editor")],o)},358:function(e,t,i){"use strict";i.r(t),i.d(t,"HuiGaugeCardEditor",function(){return l});var n=i(3),a=i(0),s=(i(92),i(192),i(184),i(189),i(170)),o=i(18),r=i(175);const c=Object(s.a)({type:"string",name:"string?",entity:"string?",unit:"string?",min:"number?",max:"number?",severity:"object?",theme:"string?"});let l=class extends a.a{setConfig(e){e=c(e),this._useSeverity=!!e.severity,this._config=e}get _name(){return this._config.name||""}get _entity(){return this._config.entity||""}get _unit(){return this._config.unit||""}get _theme(){return this._config.theme||"default"}get _min(){return this._config.number||0}get _max(){return this._config.max||100}get _severity(){return this._config.severity||void 0}render(){return this.hass?a.e`
      ${r.a}
      <div class="card-config">
        <div class="side-by-side">
          <paper-input
            label="Name"
            .value="${this._name}"
            .configValue=${"name"}
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <ha-entity-picker
            .hass="${this.hass}"
            .value="${this._entity}"
            .configValue=${"entity"}
            domain-filter="sensor"
            @change="${this._valueChanged}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>
        <div class="side-by-side">
          <paper-input
            label="Unit"
            .value="${this._unit}"
            .configValue=${"unit"}
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <hui-theme-select-editor
            .hass="${this.hass}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
        </div>
        <div class="side-by-side">
          <paper-input
            type="number"
            label="Minimum"
            .value="${this._min}"
            .configValue=${"min"}
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            type="number"
            label="Maximum"
            .value="${this._max}"
            .configValue=${"max"}
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
        <div class="side-by-side">
          <paper-toggle-button
            ?checked="${!1!==this._useSeverity}"
            @change="${this._toggleSeverity}"
            >Define Severity?</paper-toggle-button
          >
          <div class="severity">
            <paper-input
              type="number"
              label="Green"
              .value="${this._severity?this._severity.green:0}"
              .configValue=${"green"}
              @value-changed="${this._severityChanged}"
            ></paper-input>
            <paper-input
              type="number"
              label="Yellow"
              .value="${this._severity?this._severity.yellow:0}"
              .configValue=${"yellow"}
              @value-changed="${this._severityChanged}"
            ></paper-input>
            <paper-input
              type="number"
              label="Red"
              .value="${this._severity?this._severity.red:0}"
              .configValue=${"red"}
              @value-changed="${this._severityChanged}"
            ></paper-input>
          </div>
        </div>
      </div>
    `:a.e``}static get styles(){return a.c`
      .severity {
        display: none;
        width: 100%;
        padding-left: 16px;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .severity > * {
        flex: 1 0 30%;
        padding-right: 4px;
      }
      paper-toggle-button[checked] ~ .severity {
        display: flex;
      }
    `}_toggleSeverity(e){if(!this._config||!this.hass)return;const t=e.target;this._config.severity=t.checked?{green:0,yellow:0,red:0}:void 0,Object(o.a)(this,"config-changed",{config:this._config})}_severityChanged(e){if(!this._config||!this.hass)return;const t=e.target,i=Object.assign({},this._config.severity,{[t.configValue]:Number(t.value)});this._config=Object.assign({},this._config,{severity:i}),Object(o.a)(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(t.configValue)if(""===t.value||"number"===t.type&&isNaN(Number(t.value)))delete this._config[t.configValue];else{let e=t.value;"number"===t.type&&(e=Number(e)),this._config=Object.assign({},this._config,{[t.configValue]:e})}Object(o.a)(this,"config-changed",{config:this._config})}};n.b([Object(a.f)()],l.prototype,"hass",void 0),n.b([Object(a.f)()],l.prototype,"_config",void 0),l=n.b([Object(a.d)("hui-gauge-card-editor")],l)}}]);
//# sourceMappingURL=chunk.d5f930c9ca83281d06b2.js.map