(self.webpackJsonp=self.webpackJsonp||[]).push([[64],{190:function(t,e,i){"use strict";var n=i(4),a=(i(108),i(93),i(185),i(181),i(211),i(124)),s=(i(184),i(176)),o=i(0),c=i(18);const l=(t,e,i)=>{t.firstElementChild||(t.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),t.querySelector("state-badge").stateObj=i.item,t.querySelector(".name").textContent=Object(s.a)(i.item),t.querySelector("[secondary]").textContent=i.item.entity_id};class r extends o.a{constructor(){super(...arguments),this._getStates=Object(a.a)((t,e,i)=>{let n=[];if(!t)return[];let a=Object.keys(t.states);return e&&(a=a.filter(t=>t.substr(0,t.indexOf("."))===e)),n=a.sort().map(e=>t.states[e]),i&&(n=n.filter(t=>t.entity_id===this.value||i(t))),n})}updated(t){super.updated(t),t.has("hass")&&!this._opened&&(this._hass=this.hass)}render(){const t=this._getStates(this._hass,this.domainFilter,this.entityFilter);return o.f`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${t}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${l}
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
          ${this.value?o.f`
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
          ${t.length>0?o.f`
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
    `}get _value(){return this.value||""}_openedChanged(t){this._opened=t.detail.value}_valueChanged(t){t.detail.value!==this._value&&(this.value=t.detail.value,setTimeout(()=>{Object(c.a)(this,"value-changed",{value:this.value}),Object(c.a)(this,"change")},0))}static get styles(){return o.c`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `}}Object(n.b)([Object(o.g)({type:Boolean})],r.prototype,"autofocus",void 0),Object(n.b)([Object(o.g)({type:Boolean})],r.prototype,"disabled",void 0),Object(n.b)([Object(o.g)({type:Boolean,attribute:"allow-custom-entity"})],r.prototype,"allowCustomEntity",void 0),Object(n.b)([Object(o.g)()],r.prototype,"hass",void 0),Object(n.b)([Object(o.g)()],r.prototype,"label",void 0),Object(n.b)([Object(o.g)()],r.prototype,"value",void 0),Object(n.b)([Object(o.g)({attribute:"domain-filter"})],r.prototype,"domainFilter",void 0),Object(n.b)([Object(o.g)()],r.prototype,"entityFilter",void 0),Object(n.b)([Object(o.g)({type:Boolean})],r.prototype,"_opened",void 0),Object(n.b)([Object(o.g)()],r.prototype,"_hass",void 0),customElements.define("ha-entity-picker",r)},199:function(t,e,i){"use strict";var n=i(203);i.d(e,"a",(function(){return a}));const a=Object(n.a)({types:{"entity-id":function(t){return"string"!=typeof t?"entity id should be a string":!!t.includes(".")||"entity id should be in the format 'domain.entity'"},icon:function(t){return"string"!=typeof t?"icon should be a string":!!t.includes(":")||"icon should be in the format 'mdi:icon'"}}})},205:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n=i(0).f`
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
`},697:function(t,e,i){"use strict";i.r(e),i.d(e,"HuiWeatherForecastCardEditor",(function(){return r}));var n=i(4),a=i(0),s=(i(190),i(199)),o=i(18),c=i(205);const l=Object(s.a)({type:"string",entity:"string?",name:"string?"});let r=class extends a.a{setConfig(t){t=l(t),this._config=t}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}render(){return this.hass?a.f`
      ${c.a}
      <div class="card-config">
        <div class="side-by-side">
          <paper-input
            label="Name"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <ha-entity-picker
            .hass="${this.hass}"
            .value="${this._entity}"
            .configValue=${"entity"}
            domain-filter="weather"
            @change="${this._valueChanged}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>
      </div>
    `:a.f``}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:e.value})),Object(o.a)(this,"config-changed",{config:this._config}))}};Object(n.b)([Object(a.g)()],r.prototype,"hass",void 0),Object(n.b)([Object(a.g)()],r.prototype,"_config",void 0),r=Object(n.b)([Object(a.d)("hui-weather-forecast-card-editor")],r)}}]);
//# sourceMappingURL=chunk.95ad1522c8da01de66e4.js.map