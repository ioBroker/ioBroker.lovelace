/*! For license information please see chunk.a79be3490423d48e3010.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2994,8946,9146,1492,4464],{21157:(e,t,n)=>{"use strict";n(43437);const a=n(50856).d`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},8878:(e,t,n)=>{"use strict";n(43437),n(8621),n(63207),n(30879),n(78814),n(60748),n(1656),n(57548),n(73962);var a=n(51644),i=n(26110),l=n(21006),o=n(98235),s=n(9672),r=n(87156),p=n(81668),d=n(50856);(0,s.k)({_template:d.d`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[a.P,i.a,l.V,o.x],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=(0,r.vz)(this.$.content).getDistributedNodes(),t=0,n=e.length;t<n;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){p.nJ(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},33760:(e,t,n)=>{"use strict";n.d(t,{U:()=>l});n(43437);var a=n(51644),i=n(26110);const l=[a.P,i.a,{hostAttributes:{role:"option",tabindex:"0"}}]},97968:(e,t,n)=>{"use strict";n(65660),n(15495),n(1656),n(47686);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},53973:(e,t,n)=>{"use strict";n(43437),n(65660),n(97968);var a=n(9672),i=n(50856),l=n(33760);(0,a.k)({_template:i.d`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[l.U]})},9146:(e,t,n)=>{"use strict";n.d(t,{d:()=>i});var a=n(40095);const i=(e,t)=>e&&e.attributes.supported_features?Object.keys(t).map((n=>(0,a.e)(e,Number(n))?t[n]:"")).filter((e=>""!==e)).join(" "):""},81303:(e,t,n)=>{"use strict";n(8878);const a=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends a{ready(){super.ready(),setTimeout((()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")}),100)}})},52994:(e,t,n)=>{"use strict";n.r(t);n(21157),n(53973),n(51095);var a=n(21683),i=n(78956),l=n(50856),o=n(28426),s=n(9146),r=n(40095),p=(n(81303),n(43709),n(10983),n(11052));class d extends((0,p.I)(o.H3)){static get template(){return l.d`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--error-color);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        ha-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <ha-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></ha-icon-button>
        </div>
        <div>
          <ha-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></ha-icon-button>
        </div>
      </div>
    `}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(e){this.$.target_temperature.classList.toggle("in-flux",e)}incrementValue(){const e=this.value+this.step;this.value<this.max&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e<=this.max?e<=this.min?this.value=this.min:this.value=e:this.value=this.max}decrementValue(){const e=this.value-this.step;this.value>this.min&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e>=this.min?this.value=e:this.value=this.min}valueChanged(){this.last_changed&&window.setTimeout((()=>{Date.now()-this.last_changed>=2e3&&(this.fire("change"),this.temperatureStateInFlux(!1),this.last_changed=null)}),2010)}}customElements.define("ha-water_heater-control",d);var c=n(1265);class u extends((0,c.Z)((0,p.I)(o.H3))){static get template(){return l.d`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-water_heater-control.range-control-left,
        ha-water_heater-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-water_heater-control.range-control-left {
          margin-right: 4%;
        }
        ha-water_heater-control.range-control-right {
          margin-left: 4%;
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.water_heater.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-water_heater-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-water_heater-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.water_heater.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">
                [[localize('ui.card.water_heater.away_mode')]]
              </div>
              <ha-switch
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </ha-switch>
            </div>
          </div>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},awayToggleChecked:Boolean}}stateObjChanged(e,t){e&&this.setProperties({awayToggleChecked:"on"===e.attributes.away_mode}),t&&(this._debouncer=i.d.debounce(this._debouncer,a.Wc.after(500),(()=>{this.fire("iron-resize")})))}computeTemperatureStepSize(e,t){return t.attributes.target_temp_step?t.attributes.target_temp_step:-1!==e.config.unit_system.temperature.indexOf("F")?1:.5}supportsTemperatureControls(e){return this.supportsTemperature(e)}supportsTemperature(e){return(0,r.e)(e,1)&&"number"==typeof e.attributes.temperature}supportsOperationMode(e){return(0,r.e)(e,2)}supportsAwayMode(e){return(0,r.e)(e,4)}computeClassNames(e){const t=[(0,s.d)(e,{1:"has-target_temperature",2:"has-operation_mode",4:"has-away_mode"})];return t.push("more-info-water_heater"),t.join(" ")}targetTemperatureChanged(e){const t=e.target.value;t!==this.stateObj.attributes.temperature&&this.callServiceHelper("set_temperature",{temperature:t})}awayToggleChanged(e){const t="on"===this.stateObj.attributes.away_mode,n=e.target.checked;t!==n&&this.callServiceHelper("set_away_mode",{away_mode:n})}handleOperationmodeChanged(e){const t=this.stateObj.attributes.operation_mode,n=e.detail.value;n&&t!==n&&this.callServiceHelper("set_operation_mode",{operation_mode:n})}callServiceHelper(e,t){t.entity_id=this.stateObj.entity_id,this.hass.callService("water_heater",e,t).then((()=>{this.stateObjChanged(this.stateObj)}))}_localizeOperationMode(e,t){return e("component.water_heater.state._."+t)||t}}customElements.define("more-info-water_heater",u)},11052:(e,t,n)=>{"use strict";n.d(t,{I:()=>l});var a=n(76389),i=n(47181);const l=(0,a.o)((e=>class extends e{fire(e,t,n){return n=n||{},(0,i.B)(n.node||this,e,t,n)}}))}}]);
//# sourceMappingURL=chunk.a79be3490423d48e3010.js.map