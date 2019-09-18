/*! For license information please see chunk.aa6a7a7412b8fcc80602.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[85],{120:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(5);var a=s(55),n=s(35);const r=[a.a,n.a,{hostAttributes:{role:"option",tabindex:"0"}}]},145:function(e,t,s){"use strict";s(45),s(68),s(42),s(54);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},176:function(e,t,s){"use strict";var a=s(188);t.a=e=>void 0===e.attributes.friendly_name?Object(a.a)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""},177:function(e,t,s){"use strict";var a=s(4),n=s(0);class r extends n.a{static get styles(){return n.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `}render(){return n.f`
      ${this.header?n.f`
            <div class="card-header">${this.header}</div>
          `:n.f``}
      <slot></slot>
    `}}Object(a.b)([Object(n.g)()],r.prototype,"header",void 0),customElements.define("ha-card",r)},178:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(119);const n={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function r(e,t){if(e in n)return n[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),a.a}}},179:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(109);const a=customElements.get("iron-icon");let n=!1;class r extends a{listen(e,t,a){super.listen(e,t,a),n||"mdi"!==this._iconsetName||(n=!0,s.e(70).then(s.bind(null,216)))}}customElements.define("ha-icon",r)},181:function(e,t,s){"use strict";s(5),s(45),s(42),s(54);var a=s(6),n=s(3);Object(a.a)({_template:n.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},185:function(e,t,s){"use strict";s(5),s(45),s(54),s(145);var a=s(6),n=s(3),r=s(120);Object(a.a)({_template:n.a`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[r.a]})},188:function(e,t,s){"use strict";function a(e){return e.substr(e.indexOf(".")+1)}s.d(t,"a",(function(){return a}))},192:function(e,t,s){"use strict";var a=s(119),n=s(121),r=s(178);const i={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};s.d(t,"a",(function(){return c}));const o={binary_sensor:function(e){const t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){const t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Object(r.a)("cover",e.state)}},sensor:function(e){const t=e.attributes.device_class;if(t&&t in i)return i[t];if("battery"===t){const t=Number(e.state);if(isNaN(t))return"hass:battery-unknown";const s=10*Math.round(t/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":`hass:battery-${s}`}const s=e.attributes.unit_of_measurement;return s===a.j||s===a.k?"hass:thermometer":Object(r.a)("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Object(r.a)("input_datetime"):"hass:calendar":"hass:clock"}};function c(e){if(!e)return a.a;if(e.attributes.icon)return e.attributes.icon;const t=Object(n.a)(e.entity_id);return t in o?o[t](e):Object(r.a)(t,e.state)}},195:function(e,t,s){"use strict";var a=s(3),n=s(30);s(95);customElements.define("ha-config-section",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},196:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=(e,t,s=!1)=>{let a;return function(...n){const r=this,i=s&&!a;clearTimeout(a),a=setTimeout(()=>{a=null,s||e.apply(r,n)},t),i&&e.apply(r,n)}}},198:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return n}));const a=(e,t)=>e<t?-1:e>t?1:0,n=(e,t)=>a(e.toLowerCase(),t.toLowerCase())},265:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"d",(function(){return o})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return p}));var a=s(13),n=s(176),r=s(196);const i=(e,t)=>{if(t.name)return t.name;const s=e.states[t.entity_id];return s?Object(n.a)(s):null},o=(e,t,s)=>e.callWS(Object.assign({type:"config/entity_registry/update",entity_id:t},s)),c=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),l=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),d=(e,t)=>e.subscribeEvents(Object(r.a)(()=>l(e).then(e=>t.setState(e,!0)),500,!0),"entity_registry_updated"),p=(e,t)=>Object(a.d)("_entityRegistry",l,d,e,t)},748:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s(0),r=(s(185),s(181),s(265)),i=(s(152),s(159),s(177),s(179),s(178)),o=s(192),c=s(121),l=(s(195),s(18));const d=()=>Promise.all([s.e(0),s.e(1),s.e(8),s.e(32)]).then(s.bind(null,709)),p=(e,t)=>{Object(l.a)(e,"show-dialog",{dialogTag:"dialog-entity-registry-detail",dialogImport:d,dialogParams:t})};var h=s(198),u=s(73);class m extends n.a{disconnectedCallback(){super.disconnectedCallback(),this._unsubEntities&&this._unsubEntities()}render(){return this.hass&&void 0!==this._entities?n.f`
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
          <ha-card>
            ${this._entities.map(e=>{const t=this.hass.states[e.entity_id];return n.f`
                <paper-icon-item
                  @click=${this._openEditEntry}
                  .entry=${e}
                  class=${Object(u.a)({"disabled-entry":!!e.disabled_by})}
                >
                  <ha-icon
                    slot="item-icon"
                    .icon=${t?Object(o.a)(t):Object(i.a)(Object(c.a)(e.entity_id))}
                  ></ha-icon>
                  <paper-item-body two-line>
                    <div class="name">
                      ${Object(r.a)(this.hass,e)||`(${this.hass.localize("state.default.unavailable")})`}
                    </div>
                    <div class="secondary entity-id">
                      ${e.entity_id}
                    </div>
                  </paper-item-body>
                  <div class="platform">
                    ${e.platform}
                    ${e.disabled_by?n.f`
                          <br />(disabled)
                        `:""}
                  </div>
                </paper-icon-item>
              `})}
          </ha-card>
        </ha-config-section>
      </hass-subpage>
    `:n.f`
        <hass-loading-screen></hass-loading-screen>
      `}firstUpdated(e){super.firstUpdated(e),d()}updated(e){super.updated(e),this._unsubEntities||(this._unsubEntities=Object(r.c)(this.hass.connection,e=>{this._entities=e.sort((e,t)=>Object(h.b)(e.entity_id,t.entity_id))}))}_openEditEntry(e){const t=e.currentTarget.entry;p(this,{entry:t,updateEntry:async e=>{const s=await Object(r.d)(this.hass,t.entity_id,e);this._entities=this._entities.map(e=>e===t?s:e)},removeEntry:async()=>{if(!confirm(`Are you sure you want to delete this entry?\n\nDeleting an entry will not remove the entity from ioBroker. To do this, you will need to remove the integration "${t.platform}" from ioBroker.`))return!1;try{return await Object(r.b)(this.hass,t.entity_id),this._entities=this._entities.filter(e=>e!==t),!0}catch(e){return!1}}})}static get styles(){return n.c`
      a {
        color: var(--primary-color);
      }
      ha-card {
        margin-bottom: 24px;
        direction: ltr;
      }
      paper-icon-item {
        cursor: pointer;
        color: var(--primary-text-color);
      }
      ha-icon {
        margin-left: 8px;
      }
      .platform {
        text-align: right;
        margin: 0 0 0 8px;
      }
      .disabled-entry {
        color: var(--secondary-text-color);
      }
    `}}Object(a.b)([Object(n.g)()],m.prototype,"hass",void 0),Object(a.b)([Object(n.g)()],m.prototype,"isWide",void 0),Object(a.b)([Object(n.g)()],m.prototype,"_entities",void 0),customElements.define("ha-config-entity-registry",m)}}]);
//# sourceMappingURL=chunk.aa6a7a7412b8fcc80602.js.map