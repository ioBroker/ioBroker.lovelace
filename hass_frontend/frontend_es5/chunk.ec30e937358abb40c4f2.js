/*! For license information please see chunk.ec30e937358abb40c4f2.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[136],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(9),s=a(18);const i=Object(n.a)(e=>(class extends e{fire(e,t,a){return a=a||{},Object(s.a)(a.node||this,e,t,a)}}))},175:function(e,t,a){"use strict";var n=a(9);t.a=Object(n.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},176:function(e,t,a){"use strict";var n=a(188);t.a=function(e){return void 0===e.attributes.friendly_name?Object(n.a)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""}},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(119),s={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function i(e,t){if(e in s)return s[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),n.a}}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),s=(a(109),customElements.get("iron-icon")),i=!1,o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n.d)(t,e),t.prototype.listen=function(t,n,s){e.prototype.listen.call(this,t,n,s),i||"mdi"!==this._iconsetName||(i=!0,a.e(70).then(a.bind(null,215)))},t}(s);customElements.define("ha-icon",o)},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(121);function s(e){return Object(n.a)(e.entity_id)}},184:function(e,t,a){"use strict";var n,s,i,o=a(0),r=a(1),c=(a(179),a(180)),l=a(192),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.d)(t,e),t.prototype.render=function(){var e=this.stateObj;return e?Object(r.f)(s||(s=Object(o.f)(['\n      <ha-icon\n        id="icon"\n        data-domain=',"\n        data-state=","\n        .icon=","\n      ></ha-icon>\n    "],['\n      <ha-icon\n        id="icon"\n        data-domain=',"\n        data-state=","\n        .icon=","\n      ></ha-icon>\n    "])),Object(c.a)(e),e.state,this.overrideIcon||Object(l.a)(e)):Object(r.f)(n||(n=Object(o.f)([""],[""])))},t.prototype.updated=function(e){if(e.has("stateObj")&&this.stateObj){var t=this.stateObj,a={color:"",filter:""},n={backgroundImage:""};if(t)if(t.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){var s=this.overrideImage||t.attributes.entity_picture;this.hass&&(s=this.hass.hassUrl(s)),n.backgroundImage="url("+s+")",a.display="none"}else{if(t.attributes.hs_color){var i=t.attributes.hs_color[0],o=t.attributes.hs_color[1];o>10&&(a.color="hsl("+i+", 100%, "+(100-o/2)+"%)")}if(t.attributes.brightness){var r=t.attributes.brightness;if("number"!=typeof r){var c="Type error: state-badge expected number, but type of "+t.entity_id+".attributes.brightness is "+typeof r+" ("+r+")";console.warn(c)}a.filter="brightness("+(r+245)/5+"%)"}}Object.assign(this._icon.style,a),Object.assign(this.style,n)}},Object.defineProperty(t,"styles",{get:function(){return Object(r.c)(i||(i=Object(o.f)(['\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    '],['\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    '])))},enumerable:!0,configurable:!0}),Object(o.c)([Object(r.g)()],t.prototype,"stateObj",void 0),Object(o.c)([Object(r.g)()],t.prototype,"overrideIcon",void 0),Object(o.c)([Object(r.g)()],t.prototype,"overrideImage",void 0),Object(o.c)([Object(r.h)("ha-icon")],t.prototype,"_icon",void 0),t}(r.a);customElements.define("state-badge",u)},188:function(e,t,a){"use strict";function n(e){return e.substr(e.indexOf(".")+1)}a.d(t,"a",(function(){return n}))},190:function(e,t,a){"use strict";var n,s,i,o,r=a(0),c=(a(108),a(93),a(185),a(181),a(211),a(124)),l=(a(184),a(176)),u=a(1),p=a(18),h=function(e,t,a){e.firstElementChild||(e.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),e.querySelector("state-badge").stateObj=a.item,e.querySelector(".name").textContent=Object(l.a)(a.item),e.querySelector("[secondary]").textContent=a.item.entity_id},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._getStates=Object(c.a)((function(e,a,n){var s=[];if(!e)return[];var i=Object.keys(e.states);return a&&(i=i.filter((function(e){return e.substr(0,e.indexOf("."))===a}))),s=i.sort().map((function(t){return e.states[t]})),n&&(s=s.filter((function(e){return e.entity_id===t.value||n(e)}))),s})),t}return Object(r.d)(t,e),t.prototype.updated=function(t){e.prototype.updated.call(this,t),t.has("hass")&&!this._opened&&(this._hass=this.hass)},t.prototype.render=function(){var e=this._getStates(this._hass,this.domainFilter,this.entityFilter);return Object(u.f)(i||(i=Object(r.f)(['\n      <vaadin-combo-box-light\n        item-value-path="entity_id"\n        item-label-path="entity_id"\n        .items=',"\n        .value=","\n        .allowCustomValue=","\n        .renderer=","\n        @opened-changed=","\n        @value-changed=","\n      >\n        <paper-input\n          .autofocus=","\n          .label=","\n          .value=","\n          .disabled=",'\n          class="input"\n          autocapitalize="none"\n          autocomplete="off"\n          autocorrect="off"\n          spellcheck="false"\n        >\n          ',"\n          ","\n        </paper-input>\n      </vaadin-combo-box-light>\n    "],['\n      <vaadin-combo-box-light\n        item-value-path="entity_id"\n        item-label-path="entity_id"\n        .items=',"\n        .value=","\n        .allowCustomValue=","\n        .renderer=","\n        @opened-changed=","\n        @value-changed=","\n      >\n        <paper-input\n          .autofocus=","\n          .label=","\n          .value=","\n          .disabled=",'\n          class="input"\n          autocapitalize="none"\n          autocomplete="off"\n          autocorrect="off"\n          spellcheck="false"\n        >\n          ',"\n          ","\n        </paper-input>\n      </vaadin-combo-box-light>\n    "])),e,this._value,this.allowCustomEntity,h,this._openedChanged,this._valueChanged,this.autofocus,void 0===this.label&&this._hass?this._hass.localize("ui.components.entity.entity-picker.entity"):this.label,this._value,this.disabled,this.value?Object(u.f)(n||(n=Object(r.f)(['\n                <paper-icon-button\n                  aria-label="Clear"\n                  slot="suffix"\n                  class="clear-button"\n                  icon="hass:close"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              '],['\n                <paper-icon-button\n                  aria-label="Clear"\n                  slot="suffix"\n                  class="clear-button"\n                  icon="hass:close"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              ']))):"",e.length>0?Object(u.f)(s||(s=Object(r.f)(['\n                <paper-icon-button\n                  aria-label="Show entities"\n                  slot="suffix"\n                  class="toggle-button"\n                  .icon=',"\n                >\n                  Toggle\n                </paper-icon-button>\n              "],['\n                <paper-icon-button\n                  aria-label="Show entities"\n                  slot="suffix"\n                  class="toggle-button"\n                  .icon=',"\n                >\n                  Toggle\n                </paper-icon-button>\n              "])),this._opened?"hass:menu-up":"hass:menu-down"):"")},Object.defineProperty(t.prototype,"_value",{get:function(){return this.value||""},enumerable:!0,configurable:!0}),t.prototype._openedChanged=function(e){this._opened=e.detail.value},t.prototype._valueChanged=function(e){var t=this;e.detail.value!==this._value&&(this.value=e.detail.value,setTimeout((function(){Object(p.a)(t,"value-changed",{value:t.value}),Object(p.a)(t,"change")}),0))},Object.defineProperty(t,"styles",{get:function(){return Object(u.c)(o||(o=Object(r.f)(["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "],["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "])))},enumerable:!0,configurable:!0}),Object(r.c)([Object(u.g)({type:Boolean})],t.prototype,"autofocus",void 0),Object(r.c)([Object(u.g)({type:Boolean})],t.prototype,"disabled",void 0),Object(r.c)([Object(u.g)({type:Boolean,attribute:"allow-custom-entity"})],t.prototype,"allowCustomEntity",void 0),Object(r.c)([Object(u.g)()],t.prototype,"hass",void 0),Object(r.c)([Object(u.g)()],t.prototype,"label",void 0),Object(r.c)([Object(u.g)()],t.prototype,"value",void 0),Object(r.c)([Object(u.g)({attribute:"domain-filter"})],t.prototype,"domainFilter",void 0),Object(r.c)([Object(u.g)()],t.prototype,"entityFilter",void 0),Object(r.c)([Object(u.g)({type:Boolean})],t.prototype,"_opened",void 0),Object(r.c)([Object(u.g)()],t.prototype,"_hass",void 0),t}(u.a);customElements.define("ha-entity-picker",d)},192:function(e,t,a){"use strict";var n=a(119),s=a(121),i=a(178);var o={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};a.d(t,"a",(function(){return c}));var r={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Object(i.a)("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in o)return o[t];if("battery"===t){var a=Number(e.state);if(isNaN(a))return"hass:battery-unknown";var s=10*Math.round(a/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":"hass:battery-"+s}var r=e.attributes.unit_of_measurement;return r===n.j||r===n.k?"hass:thermometer":Object(i.a)("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Object(i.a)("input_datetime"):"hass:calendar":"hass:clock"}};function c(e){if(!e)return n.a;if(e.attributes.icon)return e.attributes.icon;var t=Object(s.a)(e.entity_id);return t in r?r[t](e):Object(i.a)(t,e.state)}},276:function(e,t,a){"use strict";var n=a(4),s=a(30),i=(a(108),a(93),a(143),a(211),a(118));customElements.define("ha-combo-box",class extends(Object(i.a)(s.a)){static get template(){return n.a`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `}static get properties(){return{allowCustomValue:Boolean,items:{type:Object,observer:"_itemsChanged"},_items:Object,itemLabelPath:String,itemValuePath:String,autofocus:Boolean,label:String,opened:{type:Boolean,value:!1,observer:"_openedChanged"},value:{type:String,notify:!0}}}_openedChanged(e){e||(this._items=this.items)}_itemsChanged(e){this.opened||(this._items=e)}_computeToggleIcon(e){return e?"hass:menu-up":"hass:menu-down"}_computeItemLabel(e,t){return t?e[t]:e}_fireChanged(e){e.stopPropagation(),this.fire("change")}});var o=a(175);customElements.define("ha-service-picker",class extends(Object(o.a)(s.a)){static get template(){return n.a`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},_services:Array,value:{type:String,notify:!0}}}_hassChanged(e,t){if(!e)return void(this._services=[]);if(t&&e.services===t.services)return;const a=[];Object.keys(e.services).sort().forEach(t=>{const n=Object.keys(e.services[t]).sort();for(let e=0;e<n.length;e++)a.push(`${t}.${n[e]}`)}),this._services=a}})},403:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));var n="unavailable",s=["air_quality","alarm_control_panel","alert","automation","binary_sensor","calendar","camera","counter","cover","dominos","fan","geo_location","group","history_graph","image_processing","input_boolean","input_datetime","input_number","input_select","input_text","light","lock","mailbox","media_player","person","plant","remember_the_milk","remote","scene","script","sensor","switch","timer","utility_meter","vacuum","weather","wink","zha","zwave"]},746:function(e,t,a){"use strict";a.r(t);a(85),a(216);var n=a(4),s=a(30),i=a(403),o=(a(190),a(276),a(95),a(631)),r=a(6);a(5);Object(r.a)({is:"app-localstorage-document",behaviors:[o.a],properties:{key:{type:String,notify:!0},sessionOnly:{type:Boolean,value:!1},storage:{type:Object,computed:"__computeStorage(sessionOnly)"}},observers:["__storageSourceChanged(storage, key)"],attached:function(){this.listen(window,"storage","__onStorage"),this.listen(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")},detached:function(){this.unlisten(window,"storage","__onStorage"),this.unlisten(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")},get isNew(){return!this.key},saveValue:function(e){try{this.__setStorageValue(e,this.data)}catch(t){return Promise.reject(t)}return this.key=e,Promise.resolve()},reset:function(){this.key=null,this.data=this.zeroValue},destroy:function(){try{this.storage.removeItem(this.key),this.reset()}catch(e){return Promise.reject(e)}return Promise.resolve()},getStoredValue:function(e){var t;if(null!=this.key)try{t=null!=(t=this.__parseValueFromStorage())?this.get(e,{data:t}):void 0}catch(a){return Promise.reject(a)}return Promise.resolve(t)},setStoredValue:function(e,t){if(null!=this.key){try{this.__setStorageValue(this.key,this.data)}catch(a){return Promise.reject(a)}this.fire("app-local-storage-changed",this,{node:window.top})}return Promise.resolve(t)},__computeStorage:function(e){return e?window.sessionStorage:window.localStorage},__storageSourceChanged:function(e,t){this._initializeStoredValue()},__onStorage:function(e){e.key===this.key&&e.storageArea===this.storage&&this.syncToMemory((function(){this.set("data",this.__parseValueFromStorage())}))},__onAppLocalStorageChanged:function(e){e.detail!==this&&e.detail.key===this.key&&e.detail.storage===this.storage&&this.syncToMemory((function(){this.set("data",e.detail.data)}))},__parseValueFromStorage:function(){try{return JSON.parse(this.storage.getItem(this.key))}catch(e){console.error("Failed to parse value from storage for",this.key)}},__setStorageValue:function(e,t){void 0===t&&(t=null),this.storage.setItem(e,JSON.stringify(t))}});const c={};customElements.define("developer-tools-service",class extends s.a{static get template(){return n.a`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          display: block;
          padding: 16px;
          direction: ltr;
        }

        .ha-form {
          margin-right: 16px;
          max-width: 400px;
        }

        .description {
          margin-top: 24px;
          white-space: pre-wrap;
        }

        .header {
          @apply --paper-font-title;
        }

        .attributes th {
          text-align: left;
        }

        .attributes tr {
          vertical-align: top;
        }

        .attributes tr:nth-child(odd) {
          background-color: var(--table-row-background-color, #eee);
        }

        .attributes tr:nth-child(even) {
          background-color: var(--table-row-alternative-background-color, #eee);
        }

        .attributes td:nth-child(3) {
          white-space: pre-wrap;
          word-break: break-word;
        }

        pre {
          margin: 0;
        }

        h1 {
          white-space: normal;
        }

        td {
          padding: 4px;
        }

        .error {
          color: var(--google-red-500);
        }
      </style>

      <app-localstorage-document
        key="panel-dev-service-state-domain-service"
        data="{{domainService}}"
      >
      </app-localstorage-document>
      <app-localstorage-document
        key="[[_computeServicedataKey(domainService)]]"
        data="{{serviceData}}"
      >
      </app-localstorage-document>

      <div class="content">
        <p>
          The service dev tool allows you to call any available service in Home
          Assistant.
        </p>

        <div class="ha-form">
          <ha-service-picker
            hass="[[hass]]"
            value="{{domainService}}"
          ></ha-service-picker>
          <template is="dom-if" if="[[_computeHasEntity(_attributes)]]">
            <ha-entity-picker
              hass="[[hass]]"
              value="[[_computeEntityValue(parsedJSON)]]"
              on-change="_entityPicked"
              disabled="[[!validJSON]]"
              domain-filter="[[_computeEntityDomainFilter(_domain)]]"
              allow-custom-entity
            ></ha-entity-picker>
          </template>
          <paper-textarea
            always-float-label
            label="Service Data (JSON, optional)"
            value="{{serviceData}}"
            autocapitalize="none"
            autocomplete="off"
            spellcheck="false"
          ></paper-textarea>
          <mwc-button on-click="_callService" raised disabled="[[!validJSON]]">
            Call Service
          </mwc-button>
          <template is="dom-if" if="[[!validJSON]]">
            <span class="error">Invalid JSON</span>
          </template>
        </div>

        <template is="dom-if" if="[[!domainService]]">
          <h1>Select a service to see the description</h1>
        </template>

        <template is="dom-if" if="[[domainService]]">
          <template is="dom-if" if="[[!_description]]">
            <h1>No description is available</h1>
          </template>
          <template is="dom-if" if="[[_description]]">
            <h3>[[_description]]</h3>

            <table class="attributes">
              <tr>
                <th>Parameter</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
              <template is="dom-if" if="[[!_attributes.length]]">
                <tr>
                  <td colspan="3">This service takes no parameters.</td>
                </tr>
              </template>
              <template is="dom-repeat" items="[[_attributes]]" as="attribute">
                <tr>
                  <td><pre>[[attribute.key]]</pre></td>
                  <td>[[attribute.description]]</td>
                  <td>[[attribute.example]]</td>
                </tr>
              </template>
            </table>

            <template is="dom-if" if="[[_attributes.length]]">
              <mwc-button on-click="_fillExampleData">
                Fill Example Data
              </mwc-button>
            </template>
          </template>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},domainService:{type:String,observer:"_domainServiceChanged"},_domain:{type:String,computed:"_computeDomain(domainService)"},_service:{type:String,computed:"_computeService(domainService)"},serviceData:{type:String,value:""},parsedJSON:{type:Object,computed:"_computeParsedServiceData(serviceData)"},validJSON:{type:Boolean,computed:"_computeValidJSON(parsedJSON)"},_attributes:{type:Array,computed:"_computeAttributesArray(hass, _domain, _service)"},_description:{type:String,computed:"_computeDescription(hass, _domain, _service)"}}}_domainServiceChanged(){this.serviceData=""}_computeAttributesArray(e,t,a){const n=e.services;if(!(t in n))return[];if(!(a in n[t]))return[];const s=n[t][a].fields;return Object.keys(s).map((function(e){return{key:e,...s[e]}}))}_computeDescription(e,t,a){const n=e.services;if(t in n&&a in n[t])return n[t][a].description}_computeServicedataKey(e){return`panel-dev-service-state-servicedata.${e}`}_computeDomain(e){return e.split(".",1)[0]}_computeService(e){return e.split(".",2)[1]||null}_computeParsedServiceData(e){try{return e?JSON.parse(e):{}}catch(t){return c}}_computeValidJSON(e){return e!==c}_computeHasEntity(e){return e.some(e=>"entity_id"===e.key)}_computeEntityValue(e){return e===c?"":e.entity_id}_computeEntityDomainFilter(e){return i.a.includes(e)?e:null}_callService(){this.parsedJSON===c&&alert(`Error parsing JSON: ${this.serviceData}`),this.hass.callService(this._domain,this._service,this.parsedJSON)}_fillExampleData(){const e={};this._attributes.forEach(t=>{e[t.key]=t.example}),this.serviceData=JSON.stringify(e,null,2)}_entityPicked(e){this.serviceData=JSON.stringify({...this.parsedJSON,entity_id:e.target.value},null,2)}})}}]);
//# sourceMappingURL=chunk.ec30e937358abb40c4f2.js.map