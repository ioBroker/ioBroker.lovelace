(self.webpackJsonp=self.webpackJsonp||[]).push([[39],{170:function(e,t,i){"use strict";var a=i(172);i.d(t,"a",function(){return n});const n=Object(a.a)({types:{"entity-id":function(e){return"string"!=typeof e?"entity id should be a string":!!e.includes(".")||"entity id should be in the format 'domain.entity'"},icon:function(e){return"string"!=typeof e?"icon should be a string":!!e.includes(":")||"icon should be in the format 'mdi:icon'"}}})},175:function(e,t,i){"use strict";i.d(t,"a",function(){return a});const a=i(0).e`
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
`},178:function(e,t,i){"use strict";var a=i(3),n=(i(107),i(92),i(173),i(174),i(185),i(121)),s=(i(176),i(167)),o=i(0),r=i(18);const l=(e,t,i)=>{e.firstElementChild||(e.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),e.querySelector("state-badge").stateObj=i.item,e.querySelector(".name").textContent=Object(s.a)(i.item),e.querySelector("[secondary]").textContent=i.item.entity_id};class u extends o.a{constructor(){super(...arguments),this._getStates=Object(n.a)((e,t,i)=>{let a=[];if(!e)return[];let n=Object.keys(e.states);return t&&(n=n.filter(e=>e.substr(0,e.indexOf("."))===t)),a=n.sort().map(t=>e.states[t]),i&&(a=a.filter(e=>e.entity_id===this.value||i(e))),a})}updated(e){super.updated(e),e.has("hass")&&!this._opened&&(this._hass=this.hass)}render(){const e=this._getStates(this._hass,this.domainFilter,this.entityFilter);return o.e`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${e}
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
    `}}a.b([Object(o.f)({type:Boolean})],u.prototype,"autofocus",void 0),a.b([Object(o.f)({type:Boolean})],u.prototype,"disabled",void 0),a.b([Object(o.f)({type:Boolean,attribute:"allow-custom-entity"})],u.prototype,"allowCustomEntity",void 0),a.b([Object(o.f)()],u.prototype,"hass",void 0),a.b([Object(o.f)()],u.prototype,"label",void 0),a.b([Object(o.f)()],u.prototype,"value",void 0),a.b([Object(o.f)({attribute:"domain-filter"})],u.prototype,"domainFilter",void 0),a.b([Object(o.f)()],u.prototype,"entityFilter",void 0),a.b([Object(o.f)({type:Boolean})],u.prototype,"_opened",void 0),a.b([Object(o.f)()],u.prototype,"_hass",void 0),customElements.define("ha-entity-picker",u)},184:function(e,t,i){"use strict";var a=i(3),n=i(0),s=(i(84),i(18));let o=class extends n.a{render(){const e=["Backend-selected","default"].concat(Object.keys(this.hass.themes.themes).sort());return n.e`
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
          ${e.map(e=>n.e`
              <paper-item theme="${e}">${e}</paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `}static get styles(){return n.c`
      paper-dropdown-menu {
        width: 100%;
      }
    `}_changed(e){this.hass&&""!==e.target.value&&(this.value=e.target.value,Object(s.a)(this,"theme-changed"))}};a.b([Object(n.f)()],o.prototype,"value",void 0),a.b([Object(n.f)()],o.prototype,"hass",void 0),o=a.b([Object(n.d)("hui-theme-select-editor")],o)},354:function(e,t,i){"use strict";i.r(t),i.d(t,"HuiSensorCardEditor",function(){return u});var a=i(3),n=i(0),s=(i(92),i(140),i(137),i(138),i(184),i(178),i(170)),o=i(18),r=i(175);const l=Object(s.a)({type:"string",entity:"string?",name:"string?",icon:"string?",graph:"string?",unit:"string?",detail:"number?",theme:"string?",hours_to_show:"number?"});let u=class extends n.a{setConfig(e){e=l(e),this._config=e}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _graph(){return this._config.graph||"none"}get _unit(){return this._config.unit||""}get _detail(){return this._config.number||"1"}get _theme(){return this._config.theme||"default"}get _hours_to_show(){return this._config.hours_to_show||"24"}render(){if(!this.hass)return n.e``;const e=["line","none"];return n.e`
      ${r.a}
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
            domain-filter="sensor"
            @change="${this._valueChanged}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>
        <div class="side-by-side">
          <paper-input
            label="Icon"
            .value="${this._icon}"
            .configValue="${"icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-dropdown-menu
            label="Graph Type"
            .configValue="${"graph"}"
            @value-changed="${this._valueChanged}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${e.indexOf(this._graph)}"
            >
              ${e.map(e=>n.e`
                  <paper-item>${e}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div class="side-by-side">
          <paper-input
            label="Units"
            .value="${this._unit}"
            .configValue="${"unit"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            label="Graph Detail"
            type="number"
            .value="${this._detail}"
            .configValue="${"detail"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
        <div class="side-by-side">
          <hui-theme-select-editor
            .hass="${this.hass}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
          <paper-input
            label="Hours To Show"
            type="number"
            .value="${this._hours_to_show}"
            .configValue="${"hours_to_show"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
      </div>
    `}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(this[`_${t.configValue}`]!==t.value){if(t.configValue)if(""===t.value||"number"===t.type&&isNaN(Number(t.value)))delete this._config[t.configValue];else{let e=t.value;"number"===t.type&&(e=Number(e)),this._config=Object.assign({},this._config,{[t.configValue]:e})}Object(o.a)(this,"config-changed",{config:this._config})}}};a.b([Object(n.f)()],u.prototype,"hass",void 0),a.b([Object(n.f)()],u.prototype,"_config",void 0),u=a.b([Object(n.d)("hui-sensor-card-editor")],u)}}]);
//# sourceMappingURL=chunk.8ff058b99bd8b18ed42d.js.map