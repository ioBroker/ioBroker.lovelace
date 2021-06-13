(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[947],{24381:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});const a=(e,t)=>e?t.map((t=>t in e.attributes?"has-"+t:"")).filter((e=>""!==e)).join(" "):""},73139:(e,t,i)=>{"use strict";var a=i(50856),s=i(28426);i(16509),i(46998);class r extends s.H3{static get template(){return a.d`
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
    `}static get properties(){return{caption:String,disabled:Boolean,min:Number,max:Number,pin:Boolean,step:Number,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}}customElements.define("ha-labeled-slider",r)},81303:(e,t,i)=>{"use strict";i(8878);const a=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends a{ready(){super.ready(),setTimeout((()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")}),100)}})},947:(e,t,i)=>{"use strict";i.r(t);i(21157),i(53973),i(51095);var a=i(50856),s=i(28426),r=i(24381),n=i(40095);i(31811),i(10983),i(73139),i(81303),i(43709);var o=i(11052),c=i(1265);class l extends((0,c.Z)((0,o.I)(s.H3))){static get template(){return a.d`
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
              icon="hass:rotate-left"
              on-click="onDirectionReverse"
              title="[[localize('ui.card.fan.reverse')]]"
              disabled="[[computeIsRotatingReverse(stateObj)]]"
            ></ha-icon-button>
            <ha-icon-button
              icon="hass:rotate-right"
              on-click="onDirectionForward"
              title="[[localize('ui.card.fan.forward')]]"
              disabled="[[computeIsRotatingForward(stateObj)]]"
            ></ha-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        extra-filters="percentage_step,speed,preset_mode,preset_modes,speed_list,percentage,oscillating,direction"
      ></ha-attributes>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},oscillationToggleChecked:{type:Boolean},percentageSliderValue:{type:Number}}}stateObjChanged(e,t){e&&this.setProperties({oscillationToggleChecked:e.attributes.oscillating,percentageSliderValue:e.attributes.percentage}),t&&setTimeout((()=>{this.fire("iron-resize")}),500)}computePercentageStepSize(e){return e.attributes.percentage_step?e.attributes.percentage_step:1}computeClassNames(e){return"more-info-fan "+((0,n.e)(e,1)?"has-percentage ":"")+(e.attributes.preset_modes&&e.attributes.preset_modes.length?"has-preset_modes ":"")+(0,r.Q)(e,["oscillating","direction"])}presetModeChanged(e){const t=this.stateObj.attributes.preset_mode,i=e.detail.value;i&&t!==i&&this.hass.callService("fan","set_preset_mode",{entity_id:this.stateObj.entity_id,preset_mode:i})}percentageChanged(e){const t=parseInt(this.stateObj.attributes.percentage,10),i=e.target.value;isNaN(i)||t===i||this.hass.callService("fan","set_percentage",{entity_id:this.stateObj.entity_id,percentage:i})}oscillationToggleChanged(e){const t=this.stateObj.attributes.oscillating,i=e.target.checked;t!==i&&this.hass.callService("fan","oscillate",{entity_id:this.stateObj.entity_id,oscillating:i})}onDirectionReverse(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"reverse"})}onDirectionForward(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"forward"})}computeIsRotatingReverse(e){return"reverse"===e.attributes.direction}computeIsRotatingForward(e){return"forward"===e.attributes.direction}}customElements.define("more-info-fan",l)}}]);
//# sourceMappingURL=chunk.2b6f525b3417b243f384.js.map