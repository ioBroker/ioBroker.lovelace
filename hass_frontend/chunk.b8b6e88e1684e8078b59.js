(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{166:function(e,t,s){"use strict";var a=s(183);t.a=(e=>void 0===e.attributes.friendly_name?Object(a.a)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||"")},169:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var a=s(111);const r={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function i(e,t){if(e in r)return r[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),a.a}}},171:function(e,t,s){"use strict";s.d(t,"a",function(){return i});s(101);const a=customElements.get("iron-icon");let r=!1;class i extends a{constructor(...e){super(...e),this._iconsetName=void 0}listen(e,t,a){super.listen(e,t,a),r||"mdi"!==this._iconsetName||(r=!0,s.e(61).then(s.bind(null,214)))}}customElements.define("ha-icon",i)},172:function(e,t,s){"use strict";function a(e){return e.substr(0,e.indexOf("."))}s.d(t,"a",function(){return a})},183:function(e,t,s){"use strict";function a(e){return e.substr(e.indexOf(".")+1)}s.d(t,"a",function(){return a})},184:function(e,t,s){"use strict";var a=s(111),r=s(172),i=s(169);const n={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};s.d(t,"a",function(){return c});const o={binary_sensor:function(e){const t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){const t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";default:return Object(i.a)("cover",e.state)}},sensor:function(e){const t=e.attributes.device_class;if(t&&t in n)return n[t];if("battery"===t){const t=Number(e.state);if(isNaN(t))return"hass:battery-unknown";const s=10*Math.round(t/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":`hass:battery-${s}`}const s=e.attributes.unit_of_measurement;return s===a.j||s===a.k?"hass:thermometer":Object(i.a)("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Object(i.a)("input_datetime"):"hass:calendar":"hass:clock"}};function c(e){if(!e)return a.a;if(e.attributes.icon)return e.attributes.icon;const t=Object(r.a)(e.entity_id);return t in o?o[t](e):Object(i.a)(t,e.state)}},187:function(e,t,s){"use strict";var a=s(3),r=s(21);s(88);customElements.define("ha-config-section",class extends r.a{static get template(){return a.a`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},227:function(e,t,s){"use strict";t.a=((e,t)=>e<t?-1:e>t?1:0)},311:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return i}),s.d(t,"d",function(){return n}),s.d(t,"c",function(){return o});var a=s(166);const r=(e,t)=>{if(t.name)return t.name;const s=e.states[t.entity_id];return s?Object(a.a)(s):null},i=e=>e.callWS({type:"config/entity_registry/list"}),n=(e,t,s)=>e.callWS(Object.assign({type:"config/entity_registry/update",entity_id:t},s)),o=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t})},651:function(e,t,s){"use strict";s.r(t);var a=s(5),r=(s(178),s(173),s(167),s(311)),i=(s(145),s(150),s(171),s(227)),n=s(169),o=s(184),c=s(172),h=(s(187),s(33));const l=()=>Promise.all([s.e(0),s.e(1),s.e(104),s.e(23)]).then(s.bind(null,694)),u=(e,t)=>{Object(h.a)(e,"show-dialog",{dialogTag:"dialog-entity-registry-detail",dialogImport:l,dialogParams:t})};customElements.define("ha-config-entity-registry",class extends a.a{constructor(...e){super(...e),this.hass=void 0,this.isWide=void 0,this._items=void 0}static get properties(){return{hass:{},isWide:{},_items:{}}}render(){return this.hass&&void 0!==this._items?a.e`
      <hass-subpage
        header="${this.hass.localize("ui.panel.config.entity_registry.caption")}"
      >
        <ha-config-section .isWide=${this.isWide}>
          <span slot="header">
            ${this.hass.localize("ui.panel.config.entity_registry.picker.header")}
          </span>
          <span slot="introduction">
            ${this.hass.localize("ui.panel.config.entity_registry.picker.introduction")}
            <p>
              ${this.hass.localize("ui.panel.config.entity_registry.picker.introduction2")}
            </p>
            <a href="/config/integrations">
              ${this.hass.localize("ui.panel.config.entity_registry.picker.integrations_page")}
            </a>
          </span>
          <paper-card>
            ${this._items.map(e=>{const t=this.hass.states[e.entity_id];return a.e`
                <paper-icon-item @click=${this._openEditEntry} .entry=${e}>
                  <ha-icon
                    slot="item-icon"
                    .icon=${t?Object(o.a)(t):Object(n.a)(Object(c.a)(e.entity_id))}
                  ></ha-icon>
                  <paper-item-body two-line>
                    <div class="name">
                      ${Object(r.a)(this.hass,e)||this.hass.localize("ui.panel.config.entity_registry.picker.unavailable")}
                    </div>
                    <div class="secondary entity-id">
                      ${e.entity_id}
                    </div>
                  </paper-item-body>
                  <div class="platform">${e.platform}</div>
                </paper-icon-item>
              `})}
          </paper-card>
        </ha-config-section>
      </hass-subpage>
    `:a.e`
        <hass-loading-screen></hass-loading-screen>
      `}firstUpdated(e){super.firstUpdated(e),this._fetchData(),l()}async _fetchData(){this._items=(await Object(r.b)(this.hass)).sort((e,t)=>Object(i.a)(e.entity_id,t.entity_id))}_openEditEntry(e){const t=e.currentTarget.entry;u(this,{entry:t,updateEntry:async e=>{const s=await Object(r.d)(this.hass,t.entity_id,e);this._items=this._items.map(e=>e===t?s:e)},removeEntry:async()=>{if(!confirm(`Are you sure you want to delete this entry?\n\nDeleting an entry will not remove the entity from Home Assistant. To do this, you will need to remove the integration "${t.platform}" from Home Assistant.`))return!1;try{return await Object(r.c)(this.hass,t.entity_id),this._items=this._items.filter(e=>e!==t),!0}catch(e){return!1}}})}static get styles(){return a.c`
      a {
        color: var(--primary-color);
      }
      paper-card {
        display: block;
        direction: ltr;
      }
      paper-icon-item {
        cursor: pointer;
      }
      ha-icon {
        margin-left: 8px;
      }
    `}})}}]);