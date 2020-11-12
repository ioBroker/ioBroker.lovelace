(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8387],{11052:(t,e,i)=>{"use strict";i.d(e,{I:()=>a});var s=i(76389),o=i(47181);const a=(0,s.o)((t=>class extends t{fire(t,e,i){return i=i||{},(0,o.B)(i.node||this,t,e,i)}}))},93585:(t,e,i)=>{"use strict";i.r(e);var s=i(50856),o=i(28426),a=i(22311),r=i(91741),n=i(47266),l=(i(1359),i(1265));i(3426),i(88165),i(53918),i(8878),i(53973),i(51095),i(31206),i(22098);class c extends o.H3{static get template(){return s.d`
      <style include="iron-flex ha-style">
        ha-card {
          direction: ltr;
        }

        .device-picker {
          @apply --layout-horizontal;
          padding-bottom: 24px;
        }

        .form-placeholder {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 96px;
        }

        [hidden]: {
          display: none;
        }

        .card-actions {
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
      </style>
      <ha-card>
        <div class="card-content">
          <div class="device-picker">
            <paper-dropdown-menu
              label="[[label]]"
              class="flex"
              disabled="[[!entities.length]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{selectedEntity}}"
              >
                <template is="dom-repeat" items="[[entities]]" as="state">
                  <paper-item>[[computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="form-container">
            <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">
              <div class="form-placeholder">
                <template is="dom-if" if="[[computeShowNoDevices(formState)]]">
                  No entities found! :-(
                </template>

                <template is="dom-if" if="[[computeShowSpinner(formState)]]">
                  <ha-circular-progress
                    active=""
                    alt="[[formState]]"
                  ></ha-circular-progress>
                  [[formState]]
                </template>
              </div>
            </template>

            <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>
          </div>
        </div>
        <div class="card-actions">
          <mwc-button
            on-click="saveEntity"
            disabled="[[computeShowPlaceholder(formState)]]"
            >SAVE</mwc-button
          >
          <template is="dom-if" if="[[allowDelete]]">
            <mwc-button
              class="warning"
              on-click="deleteEntity"
              disabled="[[computeShowPlaceholder(formState)]]"
              >DELETE</mwc-button
            >
          </template>
        </div>
      </ha-card>
    `}static get properties(){return{hass:{type:Object,observer:"hassChanged"},label:{type:String,value:"Device"},entities:{type:Array,observer:"entitiesChanged"},allowDelete:{type:Boolean,value:!1},selectedEntity:{type:Number,value:-1,observer:"entityChanged"},formState:{type:String,value:"no-devices"},config:{type:Object}}}connectedCallback(){super.connectedCallback(),this.formEl=document.createElement(this.config.component),this.formEl.hass=this.hass,this.$.form.appendChild(this.formEl),this.entityChanged(this.selectedEntity)}computeSelectCaption(t){return this.config.computeSelectCaption?this.config.computeSelectCaption(t):(0,r.C)(t)}computeShowNoDevices(t){return"no-devices"===t}computeShowSpinner(t){return"loading"===t||"saving"===t}computeShowPlaceholder(t){return"editing"!==t}computeShowForm(t){return"editing"===t}hassChanged(t){this.formEl&&(this.formEl.hass=t)}entitiesChanged(t,e){if(0===t.length)return void(this.formState="no-devices");if(!e)return void(this.selectedEntity=0);const i=e[this.selectedEntity].entity_id,s=t.findIndex((function(t){return t.entity_id===i}));-1===s?this.selectedEntity=0:s!==this.selectedEntity&&(this.selectedEntity=s)}entityChanged(t){if(!this.entities||!this.formEl)return;const e=this.entities[t];if(!e)return;this.formState="loading";const i=this;this.formEl.loadEntity(e).then((function(){i.formState="editing"}))}saveEntity(){this.formState="saving";const t=this;this.formEl.saveEntity().then((function(){t.formState="editing"}))}}customElements.define("ha-entity-config",c);var u=i(29311),p=i(27322),m=i(29821),d=(i(40138),i(18691)),h=(i(10983),i(11052));class b extends((0,h.I)(o.H3)){static get template(){return s.d`
      <style>
        paper-dropdown-menu {
          margin: -9px 0;
        }
      </style>
      <paper-dropdown-menu
        label="[[item.description]]"
        disabled="[[item.secondary]]"
        selected-item-label="{{item.value}}"
        dynamic-align=""
      >
        <paper-listbox
          slot="dropdown-content"
          selected="[[computeSelected(item)]]"
        >
          <template is="dom-repeat" items="[[getOptions(item)]]" as="option">
            <paper-item>[[option]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    `}static get properties(){return{item:{type:Object,notifies:!0}}}getOptions(t){const e=t.domain||"*",i=t.options[e]||t.options["*"];return i?i.sort():(this.item.type="string",this.fire("item-changed"),[])}computeSelected(t){return this.getOptions(t).indexOf(t.value)}}customElements.define("ha-customize-array",b);i(32296);class g extends o.H3{static get template(){return s.d`
      <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">
        [[item.description]]
      </paper-checkbox>
    `}static get properties(){return{item:{type:Object,notifies:!0}}}}customElements.define("ha-customize-boolean",g);i(30879),i(16509);class f extends o.H3{static get template(){return s.d`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        .icon-image {
          border: 1px solid grey;
          padding: 8px;
          margin-right: 20px;
          margin-top: 10px;
        }
      </style>
      <ha-icon class="icon-image" icon="[[item.value]]"></ha-icon>
      <paper-input
        disabled="[[item.secondary]]"
        label="icon"
        value="{{item.value}}"
      >
      </paper-input>
    `}static get properties(){return{item:{type:Object,notifies:!0}}}}customElements.define("ha-customize-icon",f);class y extends o.H3{static get template(){return s.d`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        paper-input {
          @apply --layout-flex;
        }
        .key {
          padding-right: 20px;
        }
      </style>
      <paper-input
        disabled="[[item.secondary]]"
        class="key"
        label="Attribute name"
        value="{{item.attribute}}"
      >
      </paper-input>
      <paper-input
        disabled="[[item.secondary]]"
        label="Attribute value"
        value="{{item.value}}"
      >
      </paper-input>
    `}static get properties(){return{item:{type:Object,notifies:!0}}}}customElements.define("ha-customize-key-value",y);class A extends o.H3{static get template(){return s.d`
      <paper-input
        disabled="[[item.secondary]]"
        label="[[getLabel(item)]]"
        value="{{item.value}}"
      >
      </paper-input>
    `}static get properties(){return{item:{type:Object,notifies:!0}}}getLabel(t){return t.description+("json"===t.type?" (JSON formatted)":"")}}customElements.define("ha-customize-string",A);class v extends o.H3{static get template(){return s.d`
      <style include="ha-form-style">
        :host {
          display: block;
          position: relative;
          padding-right: 40px;
        }

        .button {
          position: absolute;
          margin-top: -20px;
          top: 50%;
          right: 0;
        }
      </style>
      <div id="wrapper" class="form-group"></div>
      <ha-icon-button
        class="button"
        icon="[[getIcon(item.secondary)]]"
        on-click="tapButton"
      ></ha-icon-button>
    `}static get properties(){return{item:{type:Object,notify:!0,observer:"itemObserver"}}}tapButton(){this.item.secondary?this.item={...this.item,secondary:!1}:this.item={...this.item,closed:!0}}getIcon(t){return t?"hass:pencil":"hass:close"}itemObserver(t){const e=this.$.wrapper,i=m.Z.TYPE_TO_TAG[t.type].toUpperCase();let s;e.lastChild&&e.lastChild.tagName===i?s=e.lastChild:(e.lastChild&&e.removeChild(e.lastChild),this.$.child=s=document.createElement(i.toLowerCase()),s.className="form-control",s.addEventListener("item-changed",(()=>{this.item={...s.item}}))),s.setProperties({item:this.item}),null===s.parentNode&&e.appendChild(s)}}customElements.define("ha-customize-attribute",v);class w extends((0,d.E)(o.H3)){static get template(){return s.d`
      <style>
        [hidden] {
          display: none;
        }
      </style>
      <template is="dom-repeat" items="{{attributes}}" mutable-data="">
        <ha-customize-attribute item="{{item}}" hidden$="[[item.closed]]">
        </ha-customize-attribute>
      </template>
    `}static get properties(){return{attributes:{type:Array,notify:!0}}}}customElements.define("ha-form-customize-attributes",w);class _ extends((0,l.Z)(o.H3)){static get template(){return s.d`
      <style include="iron-flex ha-style ha-form-style">
        .warning {
          color: red;
        }

        .attributes-text {
          padding-left: 20px;
        }
      </style>
      <template
        is="dom-if"
        if="[[computeShowWarning(localConfig, globalConfig)]]"
      >
        <div class="warning">
          [[localize('ui.panel.config.customize.warning.include_sentence')]]
          <a
            href="[[_computeDocumentationUrl(hass)]]"
            target="_blank"
            rel="noreferrer"
            >[[localize('ui.panel.config.customize.warning.include_link')]]</a
          >.<br />
          [[localize('ui.panel.config.customize.warning.not_applied')]]
        </div>
      </template>
      <template is="dom-if" if="[[hasLocalAttributes]]">
        <p class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_customize')]]<br />
        </p>
        <ha-form-customize-attributes
          attributes="{{localAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasGlobalAttributes]]">
        <p class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_outside')]]<br />
          [[localize('ui.panel.config.customize.different_include')]]
        </p>
        <ha-form-customize-attributes
          attributes="{{globalAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasExistingAttributes]]">
        <p class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_set')]]<br />
          [[localize('ui.panel.config.customize.attributes_override')]]
        </p>
        <ha-form-customize-attributes
          attributes="{{existingAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasNewAttributes]]">
        <p class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_not_set')]]
        </p>
        <ha-form-customize-attributes
          attributes="{{newAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <div class="form-group">
        <paper-dropdown-menu
          label="[[localize('ui.panel.config.customize.pick_attribute')]]"
          class="flex"
          dynamic-align=""
        >
          <paper-listbox
            slot="dropdown-content"
            selected="{{selectedNewAttribute}}"
          >
            <template
              is="dom-repeat"
              items="[[newAttributesOptions]]"
              as="option"
            >
              <paper-item>[[option]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}static get properties(){return{hass:{type:Object},entity:Object,localAttributes:{type:Array,computed:"computeLocalAttributes(localConfig)"},hasLocalAttributes:Boolean,globalAttributes:{type:Array,computed:"computeGlobalAttributes(localConfig, globalConfig)"},hasGlobalAttributes:Boolean,existingAttributes:{type:Array,computed:"computeExistingAttributes(localConfig, globalConfig, entity)"},hasExistingAttributes:Boolean,newAttributes:{type:Array,value:[]},hasNewAttributes:Boolean,newAttributesOptions:Array,selectedNewAttribute:{type:Number,value:-1,observer:"selectedNewAttributeObserver"},localConfig:Object,globalConfig:Object}}static get observers(){return["attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)"]}_initOpenObject(t,e,i,s){return{attribute:t,value:e,closed:!1,domain:(0,a.N)(this.entity),secondary:i,description:t,...s}}loadEntity(t){return this.entity=t,this.hass.callApi("GET","config/customize/config/"+t.entity_id).then((t=>{this.localConfig=t.local,this.globalConfig=t.global,this.newAttributes=[]}))}saveEntity(){const t={};this.localAttributes.concat(this.globalAttributes,this.existingAttributes,this.newAttributes).forEach((e=>{if(e.closed||e.secondary||!e.attribute||!e.value)return;const i="json"===e.type?JSON.parse(e.value):e.value;i&&(t[e.attribute]=i)}));const e=this.entity.entity_id;return this.hass.callApi("POST","config/customize/config/"+e,t)}_computeSingleAttribute(t,e,i){const s=m.Z.LOGIC_STATE_ATTRIBUTES[t]||{type:m.Z.UNKNOWN_TYPE};return this._initOpenObject(t,"json"===s.type?JSON.stringify(e):e,i,s)}_computeAttributes(t,e,i){return e.map((e=>this._computeSingleAttribute(e,t[e],i)))}_computeDocumentationUrl(t){return(0,p.R)(t,"/docs/configuration/customizing-devices/#customization-using-the-ui")}computeLocalAttributes(t){if(!t)return[];const e=Object.keys(t);return this._computeAttributes(t,e,!1)}computeGlobalAttributes(t,e){if(!t||!e)return[];const i=Object.keys(t),s=Object.keys(e).filter((t=>!i.includes(t)));return this._computeAttributes(e,s,!0)}computeExistingAttributes(t,e,i){if(!t||!e||!i)return[];const s=Object.keys(t),o=Object.keys(e),a=Object.keys(i.attributes).filter((t=>!s.includes(t)&&!o.includes(t)));return this._computeAttributes(i.attributes,a,!0)}computeShowWarning(t,e){return!(!t||!e)&&Object.keys(t).some((i=>JSON.stringify(e[i])!==JSON.stringify(t[i])))}filterFromAttributes(t){return e=>!t||t.every((t=>t.attribute!==e||t.closed))}getNewAttributesOptions(t,e,i,s){return Object.keys(m.Z.LOGIC_STATE_ATTRIBUTES).filter((t=>{const e=m.Z.LOGIC_STATE_ATTRIBUTES[t];return e&&(!e.domains||!this.entity||e.domains.includes((0,a.N)(this.entity)))})).filter(this.filterFromAttributes(t)).filter(this.filterFromAttributes(e)).filter(this.filterFromAttributes(i)).filter(this.filterFromAttributes(s)).sort().concat("Other")}selectedNewAttributeObserver(t){if(t<0)return;const e=this.newAttributesOptions[t];if(t===this.newAttributesOptions.length-1){const t=this._initOpenObject("","",!1,{type:m.Z.ADD_TYPE});return this.push("newAttributes",t),void(this.selectedNewAttribute=-1)}let i=this.localAttributes.findIndex((t=>t.attribute===e));if(i>=0)return this.set("localAttributes."+i+".closed",!1),void(this.selectedNewAttribute=-1);if(i=this.globalAttributes.findIndex((t=>t.attribute===e)),i>=0)return this.set("globalAttributes."+i+".closed",!1),void(this.selectedNewAttribute=-1);if(i=this.existingAttributes.findIndex((t=>t.attribute===e)),i>=0)return this.set("existingAttributes."+i+".closed",!1),void(this.selectedNewAttribute=-1);if(i=this.newAttributes.findIndex((t=>t.attribute===e)),i>=0)return this.set("newAttributes."+i+".closed",!1),void(this.selectedNewAttribute=-1);const s=this._computeSingleAttribute(e,"",!1);this.push("newAttributes",s),this.selectedNewAttribute=-1}attributesObserver(){this.hasLocalAttributes=this.localAttributes&&this.localAttributes.some((t=>!t.closed)),this.hasGlobalAttributes=this.globalAttributes&&this.globalAttributes.some((t=>!t.closed)),this.hasExistingAttributes=this.existingAttributes&&this.existingAttributes.some((t=>!t.closed)),this.hasNewAttributes=this.newAttributes&&this.newAttributes.some((t=>!t.closed)),this.newAttributesOptions=this.getNewAttributesOptions(this.localAttributes,this.globalAttributes,this.existingAttributes,this.newAttributes)}}customElements.define("ha-form-customize",_);class E extends((0,l.Z)(o.H3)){static get template(){return s.d`
      <style include="ha-style"></style>
      <hass-tabs-subpage
        hass="[[hass]]"
        narrow="[[narrow]]"
        route="[[route]]"
        back-path="/config"
        tabs="[[_computeTabs()]]"
        show-advanced="[[showAdvanced]]"
      >
        <div class$="[[computeClasses(isWide)]]">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">
              [[localize('ui.panel.config.customize.picker.header')]]
            </span>
            <span slot="introduction">
              [[localize('ui.panel.config.customize.picker.introduction')]]
              <br />
              <a
                href="[[_computeDocumentationUrl(hass)]]"
                target="_blank"
                rel="noreferrer"
              >
                [[localize("ui.panel.config.customize.picker.documentation")]]
              </a>
            </span>
            <ha-entity-config
              hass="[[hass]]"
              label="[[localize('ui.panel.config.customize.picker.entity')]]"
              entities="[[entities]]"
              config="[[entityConfig]]"
            >
            </ha-entity-config>
          </ha-config-section>
        </div>
      </hass-tabs-subpage>
    `}static get properties(){return{hass:Object,isWide:Boolean,narrow:Boolean,route:Object,showAdvanced:Boolean,entities:{type:Array,computed:"computeEntities(hass)"},entityConfig:{type:Object,value:{component:"ha-form-customize",computeSelectCaption:t=>(0,r.C)(t)+" ("+(0,a.N)(t)+")"}}}}computeClasses(t){return t?"content":"content narrow"}_backTapped(){history.back()}_computeTabs(){return u.configSections.general}computeEntities(t){return Object.keys(t.states).map((e=>t.states[e])).sort(n.y)}_computeDocumentationUrl(t){return(0,p.R)(t,"/docs/configuration/customizing-devices/#customization-using-the-ui")}}customElements.define("ha-config-customize",E)},29821:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const s={DOMAIN_DEVICE_CLASS:{binary_sensor:["battery","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","safety","smoke","sound","vibration","window"],cover:["awning","blind","curtain","damper","door","garage","shade","shutter","window"],humidifier:["dehumidifier","humidifier"],sensor:["battery","humidity","illuminance","temperature","pressure","power","signal_strength","timestamp"],switch:["switch","outlet"]},UNKNOWN_TYPE:"json",ADD_TYPE:"key-value",TYPE_TO_TAG:{string:"ha-customize-string",json:"ha-customize-string",icon:"ha-customize-icon",boolean:"ha-customize-boolean",array:"ha-customize-array","key-value":"ha-customize-key-value"}};s.LOGIC_STATE_ATTRIBUTES=s.LOGIC_STATE_ATTRIBUTES||{entity_picture:void 0,friendly_name:{type:"string",description:"Name"},icon:{type:"icon"},emulated_hue:{type:"boolean",domains:["emulated_hue"]},emulated_hue_name:{type:"string",domains:["emulated_hue"]},haaska_hidden:void 0,haaska_name:void 0,supported_features:void 0,attribution:void 0,restored:void 0,custom_ui_more_info:{type:"string"},custom_ui_state_card:{type:"string"},device_class:{type:"array",options:s.DOMAIN_DEVICE_CLASS,description:"Device class",domains:["binary_sensor","cover","humidifier","sensor","switch"]},assumed_state:{type:"boolean",domains:["switch","light","cover","climate","fan","humidifier","group","water_heater"]},initial_state:{type:"string",domains:["automation"]},unit_of_measurement:{type:"string"}};const o=s}}]);
//# sourceMappingURL=chunk.32269ca069dc9ded3dbd.js.map