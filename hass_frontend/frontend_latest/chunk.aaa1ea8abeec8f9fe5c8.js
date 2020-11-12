(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4570],{24381:(e,t,a)=>{"use strict";a.d(t,{Q:()=>i});const i=(e,t)=>e?t.map((t=>t in e.attributes?"has-"+t:"")).filter((e=>""!==e)).join(" "):""},1090:(e,t,a)=>{"use strict";a(8878),a(30879),a(53973),a(51095);var i=a(50856),n=a(28426);class r extends n.H3{static get template(){return i.d`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
          color: var(
            --paper-input-container-color,
            var(--secondary-text-color)
          );
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          label="[[hourLabel]]"
          on-change="_shouldFormatHour"
          on-focus="_onFocus"
          required
          prevent-invalid-input
          auto-validate="[[autoValidate]]"
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          label="[[minLabel]]"
          on-change="_formatMin"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span hidden$="[[!enableSecond]]" suffix slot="suffix">:</span>
        </paper-input>

        <!-- Sec Input -->
        <paper-input
          id="sec"
          type="number"
          value="{{sec}}"
          label="[[secLabel]]"
          on-change="_formatSec"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
          hidden$="[[!enableSecond]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},floatInputLabels:{type:Boolean,value:!1},alwaysFloatInputLabels:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},sec:{type:String,notify:!0},hourLabel:{type:String,value:""},minLabel:{type:String,value:":"},secLabel:{type:String,value:""},enableSecond:{type:Boolean,value:!1},noHoursLimit:{type:Boolean,value:!1},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, sec, amPm)"}}}validate(){let e=!0;return this.$.hour.validate()&&this.$.min.validate()||(e=!1),this.enableSecond&&!this.$.sec.validate()&&(e=!1),12!==this.format||this.$.dropdown.validate()||(e=!1),e}_computeTime(e,t,a,i){let n;return(t||e||a&&this.enableSecond)&&(a=a||"00",n=(t=t||"00")+":"+(e=e||"00"),this.enableSecond&&a&&(n=n+":"+a),12===this.format&&(n=n+" "+i)),n}_onFocus(e){e.target.inputElement.inputElement.select()}_formatSec(){1===this.sec.toString().length&&(this.sec=this.sec.toString().padStart(2,"0"))}_formatMin(){1===this.min.toString().length&&(this.min=this.min.toString().padStart(2,"0"))}_shouldFormatHour(){24===this.format&&1===this.hour.toString().length&&(this.hour=this.hour.toString().padStart(2,"0"))}_computeHourMax(e){return this.noHoursLimit?null:12===e?e:23}_equal(e,t){return e===t}}customElements.define("paper-time-input",r)},24570:(e,t,a)=>{"use strict";a.r(t);a(21157),a(30879);var i=a(50856),n=a(28426),r=(a(37576),a(24381));a(32075),a(1090);class s extends n.H3{static get template(){return i.d`
      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
          <div>
            <vaadin-date-picker
              id="dateInput"
              on-value-changed="dateTimeChanged"
              label="Date"
              value="{{selectedDate}}"
            ></vaadin-date-picker>
          </div>
        </template>
        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
          <div>
            <paper-time-input
              hour="{{selectedHour}}"
              min="{{selectedMinute}}"
              format="24"
            ></paper-time-input>
          </div>
        </template>
      </div>
    `}constructor(){super(),this.is_ready=!1}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},selectedDate:{type:String,observer:"dateTimeChanged"},selectedHour:{type:Number,observer:"dateTimeChanged"},selectedMinute:{type:Number,observer:"dateTimeChanged"}}}ready(){super.ready(),this.is_ready=!0}getDateString(e){if("unknown"===e.state)return"";let t,a;return t=e.attributes.month<10?"0":"",a=e.attributes.day<10?"0":"",e.attributes.year+"-"+t+e.attributes.month+"-"+a+e.attributes.day}dateTimeChanged(){if(!this.is_ready)return;let e,t=!1;const a={entity_id:this.stateObj.entity_id};if(this.stateObj.attributes.has_time){t=t||parseInt(this.selectedMinute)!==this.stateObj.attributes.minute,t=t||parseInt(this.selectedHour)!==this.stateObj.attributes.hour,e=this.selectedMinute<10?"0":"";const i=this.selectedHour+":"+e+this.selectedMinute;a.time=i}if(this.stateObj.attributes.has_date){if(0===this.selectedDate.length)return;const e=new Date(this.selectedDate),i=new Date(this.stateObj.attributes.year,this.stateObj.attributes.month-1,this.stateObj.attributes.day);t=t||i!==e,a.date=this.selectedDate}t&&this.hass.callService("input_datetime","set_datetime",a)}stateObjChanged(e){this.is_ready=!1,e.attributes.has_time&&(this.selectedHour=e.attributes.hour,this.selectedMinute=e.attributes.minute),e.attributes.has_date&&(this.selectedDate=this.getDateString(e)),this.is_ready=!0}doesHaveDate(e){return e.attributes.has_date}doesHaveTime(e){return e.attributes.has_time}computeClassNames(e){return"more-info-input_datetime "+(0,r.Q)(e,["has_time","has_date"])}}customElements.define("more-info-input_datetime",s)}}]);
//# sourceMappingURL=chunk.aaa1ea8abeec8f9fe5c8.js.map