"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[69626],{24381:(e,t,a)=>{a.d(t,{Q:()=>i});const i=(e,t)=>e?t.map((t=>t in e.attributes?"has-"+t:"")).filter((e=>""!==e)).join(" "):""},73139:(e,t,a)=>{var i=a(50856),s=a(28426);a(28007),a(46998);class n extends s.H3{static get template(){return i.d`
      <style>
        :host {
          display: block;
        }

        .title {
          margin: 5px 0 8px;
          color: var(--primary-text-color);
        }

        .slider-container {
          display: flex;
        }

        ha-icon {
          margin-top: 4px;
          color: var(--secondary-text-color);
        }

        ha-slider {
          flex-grow: 1;
          background-image: var(--ha-slider-background);
          border-radius: 4px;
        }
      </style>

      <div class="title">[[caption]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-slider>
      </div>
    `}static get properties(){return{caption:String,disabled:Boolean,min:Number,max:Number,pin:Boolean,step:Number,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}}customElements.define("ha-labeled-slider",n)},81303:(e,t,a)=>{a(8878);const i=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends i{ready(){super.ready(),setTimeout((()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")}),100)}})},79915:(e,t,a)=>{a.d(t,{Kb:()=>i});const i=1},69626:(e,t,a)=>{a.a(e,(async e=>{a.r(t);a(21157),a(53973),a(51095);var i=a(50856),s=a(28426),n=a(24381),r=a(40095),o=a(31811),c=(a(28007),a(10983),a(73139),a(81303),a(43709),a(79915)),l=a(11052),d=a(1265),p=e([o]);o=(p.then?await p:p)[0];class h extends((0,d.Z)((0,l.I)(s.H3))){static get template(){return i.d`
      <style include="iron-flex"></style>
      <style>
        .container-preset_modes,
        .container-direction,
        .container-percentage,
        .container-oscillating {
          display: none;
        }

        .has-percentage .container-percentage,
        .has-preset_modes .container-preset_modes,
        .has-direction .container-direction,
        .has-oscillating .container-oscillating {
          display: block;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-percentage">
          <ha-labeled-slider
            caption="[[localize('ui.card.fan.speed')]]"
            min="0"
            max="100"
            step="[[computePercentageStepSize(stateObj)]]"
            value="{{percentageSliderValue}}"
            on-change="percentageChanged"
            pin=""
            extra=""
          ></ha-labeled-slider>
        </div>

        <div class="container-preset_modes">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.fan.preset_mode')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.preset_mode]]"
              on-selected-changed="presetModeChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.preset_modes]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <div class="container-oscillating">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
            <ha-switch
              checked="[[oscillationToggleChecked]]"
              on-change="oscillationToggleChanged"
            >
            </ha-switch>
          </div>
        </div>

        <div class="container-direction">
          <div class="direction">
            <div>[[localize('ui.card.fan.direction')]]</div>
            <ha-icon-button
              on-click="onDirectionReverse"
              title="[[localize('ui.card.fan.reverse')]]"
              disabled="[[computeIsRotatingReverse(stateObj)]]"
            >
              <ha-icon icon="hass:rotate-left"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              on-click="onDirectionForward"
              title="[[localize('ui.card.fan.forward')]]"
              disabled="[[computeIsRotatingForward(stateObj)]]"
            >
              <ha-icon icon="hass:rotate-right"></ha-icon>
            </ha-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        extra-filters="percentage_step,speed,preset_mode,preset_modes,speed_list,percentage,oscillating,direction"
      ></ha-attributes>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},oscillationToggleChecked:{type:Boolean},percentageSliderValue:{type:Number}}}stateObjChanged(e,t){e&&this.setProperties({oscillationToggleChecked:e.attributes.oscillating,percentageSliderValue:e.attributes.percentage}),t&&setTimeout((()=>{this.fire("iron-resize")}),500)}computePercentageStepSize(e){return e.attributes.percentage_step?e.attributes.percentage_step:1}computeClassNames(e){return"more-info-fan "+((0,r.e)(e,c.Kb)?"has-percentage ":"")+(e.attributes.preset_modes&&e.attributes.preset_modes.length?"has-preset_modes ":"")+(0,n.Q)(e,["oscillating","direction"])}presetModeChanged(e){const t=this.stateObj.attributes.preset_mode,a=e.detail.value;a&&t!==a&&this.hass.callService("fan","set_preset_mode",{entity_id:this.stateObj.entity_id,preset_mode:a})}percentageChanged(e){const t=parseInt(this.stateObj.attributes.percentage,10),a=e.target.value;isNaN(a)||t===a||this.hass.callService("fan","set_percentage",{entity_id:this.stateObj.entity_id,percentage:a})}oscillationToggleChanged(e){const t=this.stateObj.attributes.oscillating,a=e.target.checked;t!==a&&this.hass.callService("fan","oscillate",{entity_id:this.stateObj.entity_id,oscillating:a})}onDirectionReverse(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"reverse"})}onDirectionForward(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"forward"})}computeIsRotatingReverse(e){return"reverse"===e.attributes.direction}computeIsRotatingForward(e){return"forward"===e.attributes.direction}}customElements.define("more-info-fan",h)}))}}]);
//# sourceMappingURL=b0be28e9.js.map