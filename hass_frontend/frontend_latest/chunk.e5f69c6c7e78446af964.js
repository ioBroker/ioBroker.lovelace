/*! For license information please see chunk.e5f69c6c7e78446af964.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[84],{113:function(e,t,a){"use strict";a(5);var i=a(94),o=a(61),n=a(6),r=a(1),c=a(3);Object(n.a)({_template:c.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[o.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){i.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(r.a)(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(r.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,a=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&a)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var a=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(a)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+a+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=o.a.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}})},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(9),o=a(18);const n=Object(i.a)(e=>(class extends e{fire(e,t,a){return a=a||{},Object(o.a)(a.node||this,e,t,a)}}))},175:function(e,t,a){"use strict";var i=a(9);t.a=Object(i.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},176:function(e,t,a){"use strict";var i=a(188);t.a=e=>void 0===e.attributes.friendly_name?Object(i.a)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""},177:function(e,t,a){"use strict";var i=a(4),o=a(0);class n extends o.a{static get styles(){return o.c`
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
    `}render(){return o.f`
      ${this.header?o.f`
            <div class="card-header">${this.header}</div>
          `:o.f``}
      <slot></slot>
    `}}Object(i.b)([Object(o.g)()],n.prototype,"header",void 0),customElements.define("ha-card",n)},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(119);const o={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function n(e,t){if(e in o)return o[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),i.a}}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(109);const i=customElements.get("iron-icon");let o=!1;class n extends i{listen(e,t,i){super.listen(e,t,i),o||"mdi"!==this._iconsetName||(o=!0,a.e(70).then(a.bind(null,216)))}}customElements.define("ha-icon",n)},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(121);function o(e){return Object(i.a)(e.entity_id)}},181:function(e,t,a){"use strict";a(5),a(45),a(42),a(54);var i=a(6),o=a(3);Object(i.a)({_template:o.a`
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
`,is:"paper-item-body"})},184:function(e,t,a){"use strict";var i=a(4),o=a(0),n=(a(179),a(180)),r=a(192);class c extends o.a{render(){const e=this.stateObj;return e?o.f`
      <ha-icon
        id="icon"
        data-domain=${Object(n.a)(e)}
        data-state=${e.state}
        .icon=${this.overrideIcon||Object(r.a)(e)}
      ></ha-icon>
    `:o.f``}updated(e){if(!e.has("stateObj")||!this.stateObj)return;const t=this.stateObj,a={color:"",filter:""},i={backgroundImage:""};if(t)if(t.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){let e=this.overrideImage||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),i.backgroundImage=`url(${e})`,a.display="none"}else{if(t.attributes.hs_color){const e=t.attributes.hs_color[0],i=t.attributes.hs_color[1];i>10&&(a.color=`hsl(${e}, 100%, ${100-i/2}%)`)}if(t.attributes.brightness){const e=t.attributes.brightness;if("number"!=typeof e){const a=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(a)}a.filter=`brightness(${(e+245)/5}%)`}}Object.assign(this._icon.style,a),Object.assign(this.style,i)}static get styles(){return o.c`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
      }

      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Color the icon if light or sun is on */
      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      /* Color the icon if unavailable */
      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `}}Object(i.b)([Object(o.g)()],c.prototype,"stateObj",void 0),Object(i.b)([Object(o.g)()],c.prototype,"overrideIcon",void 0),Object(i.b)([Object(o.g)()],c.prototype,"overrideImage",void 0),Object(i.b)([Object(o.h)("ha-icon")],c.prototype,"_icon",void 0),customElements.define("state-badge",c)},185:function(e,t,a){"use strict";a(5),a(45),a(54),a(145);var i=a(6),o=a(3),n=a(120);Object(i.a)({_template:o.a`
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
`,is:"paper-icon-item",behaviors:[n.a]})},188:function(e,t,a){"use strict";function i(e){return e.substr(e.indexOf(".")+1)}a.d(t,"a",(function(){return i}))},192:function(e,t,a){"use strict";var i=a(119),o=a(121),n=a(178);const r={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};a.d(t,"a",(function(){return s}));const c={binary_sensor:function(e){const t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){const t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Object(n.a)("cover",e.state)}},sensor:function(e){const t=e.attributes.device_class;if(t&&t in r)return r[t];if("battery"===t){const t=Number(e.state);if(isNaN(t))return"hass:battery-unknown";const a=10*Math.round(t/10);return a>=100?"hass:battery":a<=0?"hass:battery-alert":`hass:battery-${a}`}const a=e.attributes.unit_of_measurement;return a===i.j||a===i.k?"hass:thermometer":Object(n.a)("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Object(n.a)("input_datetime"):"hass:calendar":"hass:clock"}};function s(e){if(!e)return i.a;if(e.attributes.icon)return e.attributes.icon;const t=Object(o.a)(e.entity_id);return t in c?c[t](e):Object(n.a)(t,e.state)}},195:function(e,t,a){"use strict";var i=a(3),o=a(30);a(95);customElements.define("ha-config-section",class extends o.a{static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const i=(e,t,a=!1)=>{let i;return function(...o){const n=this,r=a&&!i;clearTimeout(i),i=setTimeout(()=>{i=null,a||e.apply(n,o)},t),r&&e.apply(n,o)}}},198:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));const i=(e,t)=>e<t?-1:e>t?1:0,o=(e,t)=>i(e.toLowerCase(),t.toLowerCase())},222:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));var i=a(13),o=a(196);const n=(e,t,a)=>e.callWS(Object.assign({type:"config/device_registry/update",device_id:t},a)),r=e=>e.sendMessagePromise({type:"config/device_registry/list"}),c=(e,t)=>e.subscribeEvents(Object(o.a)(()=>r(e).then(e=>t.setState(e,!0)),500,!0),"device_registry_updated"),s=(e,t)=>Object(i.d)("_dr",r,c,e,t)},227:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return h}));var i=a(13),o=a(198),n=a(196);const r=(e,t)=>e.callWS(Object.assign({type:"config/area_registry/create"},t)),c=(e,t,a)=>e.callWS(Object.assign({type:"config/area_registry/update",area_id:t},a)),s=(e,t)=>e.callWS({type:"config/area_registry/delete",area_id:t}),d=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then(e=>e.sort((e,t)=>Object(o.b)(e.name,t.name))),l=(e,t)=>e.subscribeEvents(Object(n.a)(()=>d(e).then(e=>t.setState(e,!0)),500,!0),"area_registry_updated"),h=(e,t)=>Object(i.d)("_areaRegistry",d,l,e,t)},234:function(e,t,a){"use strict";a(5);var i=a(6);Object(i.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var t={},a=!1;for(var i in e)t[i]=e[i],!a&&this.queryParams&&e[i]===this.queryParams[i]||(a=!0);for(var i in this.queryParams)if(a||!(i in e)){a=!0;break}if(!a)return;this._queryParamsUpdating=!0,this.set("queryParams",t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){this.active&&!this._queryParamsUpdating&&this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(this.autoActivate&&""===e&&(e="/"),t)if(e){for(var a=e.split("/"),i=t.split("/"),o=[],n={},r=0;r<i.length;r++){var c=i[r];if(!c&&""!==c)break;var s=a.shift();if(!s&&""!==s)return void this.__resetProperties();if(o.push(s),":"==c.charAt(0))n[c.slice(1)]=s;else if(c!==s)return void this.__resetProperties()}this._matched=o.join("/");var d={};this.active||(d.active=!0);var l=this.route.prefix+this._matched,h=a.join("/");for(var p in a.length>0&&(h="/"+h),this.tail&&this.tail.prefix===l&&this.tail.path===h||(d.tail={prefix:l,path:h,__queryParams:this.route.__queryParams}),d.data=n,this._dataInUrl={},n)this._dataInUrl[p]=n[p];this.setProperties?this.setProperties(d,!0):this.__setMulti(d)}else this.__resetProperties()}},__tailPathChanged:function(e){if(this.active){var t=e,a=this._matched;t&&("/"!==t.charAt(0)&&(t="/"+t),a+=t),this.set("route.path",a)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({});e!==this.__getLink(this._dataInUrl)&&this.set("route.path",e)}},__getLink:function(e){var t={tail:null};for(var a in this.data)t[a]=this.data[a];for(var a in e)t[a]=e[a];var i=this.pattern.split("/").map((function(e){return":"==e[0]&&(e=t[e.slice(1)]),e}),this);return t.tail&&t.tail.path&&(i.length>0&&"/"===t.tail.path.charAt(0)?i.push(t.tail.path.slice(1)):i.push(t.tail.path)),i.join("/")},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);void 0!==e.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==e.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==e.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},241:function(e,t,a){"use strict";a(109);var i=a(179);customElements.define("ha-icon-next",class extends i.a{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left"},100)}})},251:function(e,t,a){"use strict";a(5);var i=a(6),o=a(1),n=a(3);Object(i.a)({_template:n.a`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var e=Object(o.a)(this).parentNode,t=Object(o.a)(this).getOwnerRoot();return this.for?Object(o.a)(t).querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(e){"entry"===e?this.show():"exit"===e&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===Object(o.a)(this).textContent.trim()){for(var e=!0,t=Object(o.a)(this).getEffectiveChildNodes(),a=0;a<t.length;a++)if(""!==t[a].textContent.trim()){e=!1;break}if(e)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var e=this.offset;14!=this.marginTop&&14==this.offset&&(e=this.marginTop);var t,a,i=this.offsetParent.getBoundingClientRect(),o=this._target.getBoundingClientRect(),n=this.getBoundingClientRect(),r=(o.width-n.width)/2,c=(o.height-n.height)/2,s=o.left-i.left,d=o.top-i.top;switch(this.position){case"top":t=s+r,a=d-n.height-e;break;case"bottom":t=s+r,a=d+o.height+e;break;case"left":t=s-n.width-e,a=d+c;break;case"right":t=s+o.width+e,a=d+c}this.fitToVisibleBounds?(i.left+t+n.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,t)+"px",this.style.right="auto"),i.top+a+n.height>window.innerHeight?(this.style.bottom=i.height-d+e+"px",this.style.top="auto"):(this.style.top=Math.max(-i.top,a)+"px",this.style.bottom="auto")):(this.style.left=t+"px",this.style.top=a+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(e){500!==e&&this.updateStyles({"--paper-tooltip-delay-in":e+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(e){if("entry"===e&&""!==this.animationEntry)return this.animationEntry;if("exit"===e&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[e]&&"string"==typeof this.animationConfig[e][0].name){if(this.animationConfig[e][0].timing&&this.animationConfig[e][0].timing.delay&&0!==this.animationConfig[e][0].timing.delay){var t=this.animationConfig[e][0].timing.delay;"entry"===e?this.updateStyles({"--paper-tooltip-delay-in":t+"ms"}):"exit"===e&&this.updateStyles({"--paper-tooltip-delay-out":t+"ms"})}return this.animationConfig[e][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},265:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return h}));var i=a(13),o=a(176),n=a(196);const r=(e,t)=>{if(t.name)return t.name;const a=e.states[t.entity_id];return a?Object(o.a)(a):null},c=(e,t,a)=>e.callWS(Object.assign({type:"config/entity_registry/update",entity_id:t},a)),s=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),d=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),l=(e,t)=>e.subscribeEvents(Object(n.a)(()=>d(e).then(e=>t.setState(e,!0)),500,!0),"entity_registry_updated"),h=(e,t)=>Object(i.d)("_entityRegistry",d,l,e,t)},299:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r}));const i=e=>e.callApi("GET","config/config_entries/entry"),o=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),n=(e,t)=>e.callWS({type:"config_entries/system_options/list",entry_id:t}),r=(e,t,a)=>e.callWS(Object.assign({type:"config_entries/system_options/update",entry_id:t},a))},336:function(e,t,a){"use strict";var i=a(4),o=a(11),n=a(0),r=a(18);a(109),a(93),a(108),a(85);let c=class extends n.a{render(){return o.g`
      <div class="search-container">
        <paper-input
          autofocus
          label="Search"
          .value=${this.filter}
          @value-changed=${this._filterInputChanged}
        >
          <iron-icon
            icon="hass:magnify"
            slot="prefix"
            class="prefix"
          ></iron-icon>
          ${this.filter&&o.g`
              <paper-icon-button
                slot="suffix"
                class="suffix"
                @click=${this._clearSearch}
                icon="hass:close"
                alt="Clear"
                title="Clear"
              ></paper-icon-button>
            `}
        </paper-input>
      </div>
    `}async _filterChanged(e){Object(r.a)(this,"value-changed",{value:String(e)})}async _filterInputChanged(e){this._filterChanged(e.target.value)}async _clearSearch(){this._filterChanged("")}static get styles(){return n.c`
      paper-input {
        flex: 1 1 auto;
        margin: 0 16px;
      }
      .search-container {
        display: inline-flex;
        width: 100%;
        align-items: center;
      }
      .prefix {
        margin: 8px;
      }
    `}};Object(i.b)([Object(n.g)()],c.prototype,"filter",void 0),c=Object(i.b)([Object(n.d)("search-input")],c)},337:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const i=a(14).e`@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox.mdc-checkbox--selected::before,.mdc-checkbox.mdc-checkbox--selected::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-checkbox--selected::before,.mdc-checkbox.mdc-checkbox--selected::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox.mdc-checkbox--selected:hover::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-u6ulq4g{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-u6ulq4g{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-u6ulq4g}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-u6ulq4g}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox__background .mdc-checkbox__background::before{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);padding:11px}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox .mdc-checkbox__background{left:11px;right:initial;top:11px}.mdc-checkbox[dir=rtl] .mdc-checkbox .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}:host{outline:none}`},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var i=a(11);const o=(e,t)=>{const a=e.startNode.parentNode,o=void 0===t?e.endNode:t.startNode,n=a.insertBefore(Object(i.e)(),o);a.insertBefore(Object(i.e)(),o);const r=new i.b(e.options);return r.insertAfterNode(n),r},n=(e,t)=>(e.setValue(t),e.commit(),e),r=(e,t,a)=>{const o=e.startNode.parentNode,n=a?a.startNode:e.endNode,r=t.endNode.nextSibling;r!==n&&Object(i.j)(o,t.startNode,r,n)},c=e=>{Object(i.i)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},s=(e,t,a)=>{const i=new Map;for(let o=t;o<=a;o++)i.set(e[o],o);return i},d=new WeakMap,l=new WeakMap,h=Object(i.f)((e,t,a)=>{let h;return void 0===a?a=t:void 0!==t&&(h=t),t=>{if(!(t instanceof i.b))throw new Error("repeat can only be used in text bindings");const p=d.get(t)||[],m=l.get(t)||[],u=[],b=[],_=[];let f,g,k=0;for(const i of e)_[k]=h?h(i,k):k,b[k]=a(i,k),k++;let y=0,v=p.length-1,x=0,w=b.length-1;for(;y<=v&&x<=w;)if(null===p[y])y++;else if(null===p[v])v--;else if(m[y]===_[x])u[x]=n(p[y],b[x]),y++,x++;else if(m[v]===_[w])u[w]=n(p[v],b[w]),v--,w--;else if(m[y]===_[w])u[w]=n(p[y],b[w]),r(t,p[y],u[w+1]),y++,w--;else if(m[v]===_[x])u[x]=n(p[v],b[x]),r(t,p[v],p[y]),v--,x++;else if(void 0===f&&(f=s(_,x,w),g=s(m,y,v)),f.has(m[y]))if(f.has(m[v])){const e=g.get(_[x]),a=void 0!==e?p[e]:null;if(null===a){const e=o(t,p[y]);n(e,b[x]),u[x]=e}else u[x]=n(a,b[x]),r(t,a,p[y]),p[e]=null;x++}else c(p[v]),v--;else c(p[y]),y++;for(;x<=w;){const e=o(t,u[w+1]);n(e,b[x]),u[x++]=e}for(;y<=v;){const e=p[y++];null!==e&&c(e)}d.set(t,u),l.set(t,_)}})},364:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return n}));var i=a(18);const o=()=>a.e(27).then(a.bind(null,472)),n=(e,t)=>{Object(i.a)(e,"show-dialog",{dialogTag:"dialog-device-registry-detail",dialogImport:o,dialogParams:t})}},412:function(e,t,a){"use strict";var i=a(3),o=a(30),n=(a(179),a(192));customElements.define("ha-state-icon",class extends o.a{static get template(){return i.a`
      <ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon>
    `}static get properties(){return{stateObj:{type:Object}}}computeIcon(e){return Object(n.a)(e)}})},413:function(e,t,a){"use strict";a(185),a(181),a(146),a(143),a(144);var i=a(3),o=a(30),n=(a(177),a(152),a(118)),r=a(175),c=a(176),s=(a(184),a(198)),d=a(222),l=a(227),h=a(364);function p(e,t){if(t.name)return t.name;const a=e.states[t.entity_id];return a?Object(c.a)(a):null}customElements.define("ha-device-card",class extends(Object(n.a)(Object(r.a)(o.a))){static get template(){return i.a`
      <style>
        :host(:not([narrow])) .device-entities {
          max-height: 225px;
          overflow: auto;
        }
        ha-card {
          flex: 1 0 100%;
          padding-bottom: 10px;
          min-width: 0;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
        }
        .card-header .name {
          width: 90%;
        }
        .device {
          width: 30%;
        }
        .device .name {
          font-weight: bold;
        }
        .device .model,
        .device .manuf,
        .device .area {
          color: var(--secondary-text-color);
        }
        .area .extra-info .name {
          color: var(--primary-text-color);
        }
        .extra-info {
          margin-top: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .manuf,
        .entity-id,
        .area {
          color: var(--secondary-text-color);
        }
      </style>
      <ha-card>
        <div class="card-header">
          <template is="dom-if" if="[[!hideSettings]]">
            <div class="name">[[_deviceName(device)]]</div>
            <paper-icon-button
              icon="hass:settings"
              on-click="_gotoSettings"
            ></paper-icon-button>
          </template>
        </div>
        <div class="card-content">
          <div class="info">
            <div class="model">[[device.model]]</div>
            <div class="manuf">
              [[localize('ui.panel.config.integrations.config_entry.manuf',
              'manufacturer', device.manufacturer)]]
            </div>
            <template is="dom-if" if="[[device.area_id]]">
              <div class="area">
                <div class="extra-info">
                  [[localize('ui.panel.config.integrations.device_registry.area')]]
                  <span class="name">{{_computeArea(areas, device)}}</span>
                </div>
              </div>
            </template>
          </div>
          <template is="dom-if" if="[[device.via_device_id]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.via')]]
              <span class="hub"
                >[[_computeDeviceName(devices, device.via_device_id)]]</span
              >
            </div>
          </template>
          <template is="dom-if" if="[[device.sw_version]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.firmware',
              'version', device.sw_version)]]
            </div>
          </template>
        </div>

        <div class="device-entities">
          <template
            is="dom-repeat"
            items="[[_computeDeviceEntities(hass, device, entities)]]"
            as="entity"
          >
            <paper-icon-item on-click="_openMoreInfo">
              <state-badge
                state-obj="[[_computeStateObj(entity, hass)]]"
                slot="item-icon"
              ></state-badge>
              <paper-item-body>
                <div class="name">[[_computeEntityName(entity, hass)]]</div>
                <div class="secondary entity-id">[[entity.entity_id]]</div>
              </paper-item-body>
            </paper-icon-item>
          </template>
        </div>
      </ha-card>
    `}static get properties(){return{device:Object,devices:Array,areas:Array,entities:Array,hass:Object,narrow:{type:Boolean,reflectToAttribute:!0},hideSettings:{type:Boolean,value:!1},_childDevices:{type:Array,computed:"_computeChildDevices(device, devices)"}}}firstUpdated(e){super.firstUpdated(e),Object(h.a)()}connectedCallback(){super.connectedCallback(),this._unsubAreas=Object(l.c)(this.hass.connection,e=>{this._areas=e}),this._unsubDevices=Object(d.a)(this.hass.connection,e=>{this.devices=e,this.device=e.find(e=>e.id===this.device.id)})}disconnectedCallback(){super.disconnectedCallback(),this._unsubAreas&&this._unsubAreas(),this._unsubDevices&&this._unsubDevices()}_computeArea(e,t){return e&&t&&t.area_id?e.find(e=>e.area_id===t.area_id).name:"No Area"}_computeChildDevices(e,t){return t.filter(t=>t.via_device_id===e.id).sort((e,t)=>Object(s.b)(e.name,t.name))}_computeDeviceEntities(e,t,a){return a.filter(e=>e.device_id===t.id).sort((t,a)=>Object(s.b)(p(e,t)||`zzz${t.entity_id}`,p(e,a)||`zzz${a.entity_id}`))}_computeStateObj(e,t){return t.states[e.entity_id]}_computeEntityName(e,t){return p(t,e)||`(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`}_deviceName(e){return e.name_by_user||e.name}_computeDeviceName(e,t){const a=e.find(e=>e.id===t);return a?this._deviceName(a):`(${this.localize("ui.panel.config.integrations.config_entry.device_unavailable")})`}_gotoSettings(){const e=this.device;Object(h.b)(this,{device:e,updateEntry:async t=>{await Object(d.b)(this.hass,e.id,t)}})}_openMoreInfo(e){this.fire("hass-more-info",{entityId:e.model.entity.entity_id})}})},426:function(e,t,a){"use strict";var i=a(4),o=a(14);class n extends o.a{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}var r=a(76),c={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},s={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},d={ANIM_END_LATCH_MS:250},l=function(e){function t(a){var o=e.call(this,i.a({},t.defaultAdapter,a))||this;return o.currentCheckState_=s.TRANSITION_STATE_INIT,o.currentAnimationClass_="",o.animEndLatchTimer_=0,o.enableAnimationEndHandler_=!1,o}return i.c(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(c.UPGRADED)},t.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},t.prototype.setDisabled=function(e){this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(c.DISABLED):this.adapter_.removeClass(c.DISABLED)},t.prototype.handleAnimationEnd=function(){var e=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){e.adapter_.removeClass(e.currentAnimationClass_),e.enableAnimationEndHandler_=!1}),d.ANIM_END_LATCH_MS))},t.prototype.handleChange=function(){this.transitionCheckState_()},t.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var e=this.currentCheckState_,t=this.determineCheckState_();if(e!==t){this.updateAriaChecked_();var a=s.TRANSITION_STATE_UNCHECKED,i=c.SELECTED;t===a?this.adapter_.removeClass(i):this.adapter_.addClass(i),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(e,t),this.currentCheckState_=t,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},t.prototype.determineCheckState_=function(){var e=s.TRANSITION_STATE_INDETERMINATE,t=s.TRANSITION_STATE_CHECKED,a=s.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?e:this.adapter_.isChecked()?t:a},t.prototype.getTransitionAnimationClass_=function(e,a){var i=s.TRANSITION_STATE_INIT,o=s.TRANSITION_STATE_CHECKED,n=s.TRANSITION_STATE_UNCHECKED,r=t.cssClasses,c=r.ANIM_UNCHECKED_CHECKED,d=r.ANIM_UNCHECKED_INDETERMINATE,l=r.ANIM_CHECKED_UNCHECKED,h=r.ANIM_CHECKED_INDETERMINATE,p=r.ANIM_INDETERMINATE_CHECKED,m=r.ANIM_INDETERMINATE_UNCHECKED;switch(e){case i:return a===n?"":a===o?p:m;case n:return a===o?c:d;case o:return a===n?l:h;default:return a===o?p:m}},t.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(s.ARIA_CHECKED_ATTR,s.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(s.ARIA_CHECKED_ATTR)},t}(r.a),h=a(74);class p extends n{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.mdcFoundationClass=l}get ripple(){return this.mdcRoot.ripple}createAdapter(){return Object.assign(Object.assign({},Object(o.c)(this.mdcRoot)),{forceLayout:()=>{this.mdcRoot.offsetWidth},isAttachedToDOM:()=>this.isConnected,isIndeterminate:()=>this.indeterminate,isChecked:()=>this.checked,hasNativeControl:()=>Boolean(this.formElement),setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,t)=>{this.formElement.setAttribute(e,t)},removeNativeControlAttr:e=>{this.formElement.removeAttribute(e)}})}render(){return o.g`
      <div class="mdc-checkbox"
           @animationend="${this._animationEndHandler}"
           .ripple="${Object(h.a)()}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>`}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate,this.mdcFoundation.handleChange()}_animationEndHandler(){this.mdcFoundation.handleAnimationEnd()}}Object(i.b)([Object(o.j)(".mdc-checkbox")],p.prototype,"mdcRoot",void 0),Object(i.b)([Object(o.j)("input")],p.prototype,"formElement",void 0),Object(i.b)([Object(o.i)({type:Boolean})],p.prototype,"checked",void 0),Object(i.b)([Object(o.i)({type:Boolean})],p.prototype,"indeterminate",void 0),Object(i.b)([Object(o.i)({type:Boolean}),Object(o.h)((function(e){this.mdcFoundation.setDisabled(e)}))],p.prototype,"disabled",void 0),Object(i.b)([Object(o.i)({type:String})],p.prototype,"value",void 0);var m=a(337);let u=class extends p{};u.styles=m.a,u=Object(i.b)([Object(o.f)("mwc-checkbox")],u)},427:function(e,t,a){"use strict";var i=a(4),o=a(359),n=a(76);const r={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected"},c={ARIA_SELECTED:"aria-selected",DATA_ROW_ID_ATTR:"data-row-id",HEADER_ROW_CHECKBOX_SELECTOR:`.${r.HEADER_ROW_CHECKBOX}`,ROW_CHECKBOX_SELECTOR:`.${r.ROW_CHECKBOX}`,ROW_SELECTED_SELECTOR:`.${r.ROW_SELECTED}`,ROW_SELECTOR:`.${r.ROW}`};class s extends n.a{static get defaultAdapter(){return{addClassAtRowIndex:()=>void 0,getRowCount:()=>0,getRowElements:()=>[],getRowIdAtIndex:()=>"",getRowIndexByChildElement:()=>0,getSelectedRowCount:()=>0,isCheckboxAtRowIndexChecked:()=>!1,isHeaderRowCheckboxChecked:()=>!1,isRowsSelectable:()=>!1,notifyRowSelectionChanged:()=>void 0,notifySelectedAll:()=>void 0,notifyUnselectedAll:()=>void 0,registerHeaderRowCheckbox:()=>void 0,registerRowCheckboxes:()=>void 0,removeClassAtRowIndex:()=>void 0,setAttributeAtRowIndex:()=>void 0,setHeaderRowCheckboxChecked:()=>void 0,setHeaderRowCheckboxIndeterminate:()=>void 0,setRowCheckboxCheckedAtIndex:()=>void 0}}constructor(e){super(Object.assign(Object.assign({},s.defaultAdapter),e))}layout(){this.adapter_.isRowsSelectable()&&(this.adapter_.registerHeaderRowCheckbox(),this.adapter_.registerRowCheckboxes(),this.setHeaderRowCheckboxState_())}async layoutAsync(){this.adapter_.isRowsSelectable()&&(await this.adapter_.registerHeaderRowCheckbox(),await this.adapter_.registerRowCheckboxes(),this.setHeaderRowCheckboxState_())}getRows(){return this.adapter_.getRowElements()}setSelectedRowIds(e){for(let t=0;t<this.adapter_.getRowCount();t++){const a=this.adapter_.getRowIdAtIndex(t);let i=!1;a&&e.indexOf(a)>=0&&(i=!0),this.adapter_.setRowCheckboxCheckedAtIndex(t,i),this.selectRowAtIndex_(t,i)}this.setHeaderRowCheckboxState_()}getSelectedRowIds(){const e=[];for(let t=0;t<this.adapter_.getRowCount();t++)this.adapter_.isCheckboxAtRowIndexChecked(t)&&e.push(this.adapter_.getRowIdAtIndex(t));return e}handleHeaderRowCheckboxChange(){const e=this.adapter_.isHeaderRowCheckboxChecked();for(let t=0;t<this.adapter_.getRowCount();t++)this.adapter_.setRowCheckboxCheckedAtIndex(t,e),this.selectRowAtIndex_(t,e);e?this.adapter_.notifySelectedAll():this.adapter_.notifyUnselectedAll()}handleRowCheckboxChange(e){const t=this.adapter_.getRowIndexByChildElement(e.target);if(-1===t)return;const a=this.adapter_.isCheckboxAtRowIndexChecked(t);this.selectRowAtIndex_(t,a),this.setHeaderRowCheckboxState_();const i=this.adapter_.getRowIdAtIndex(t);this.adapter_.notifyRowSelectionChanged({rowId:i,rowIndex:t,selected:a})}setHeaderRowCheckboxState_(){this.adapter_.getSelectedRowCount()===this.adapter_.getRowCount()?(this.adapter_.setHeaderRowCheckboxChecked(!0),this.adapter_.setHeaderRowCheckboxIndeterminate(!1)):0===this.adapter_.getSelectedRowCount()?(this.adapter_.setHeaderRowCheckboxIndeterminate(!1),this.adapter_.setHeaderRowCheckboxChecked(!1)):(this.adapter_.setHeaderRowCheckboxIndeterminate(!0),this.adapter_.setHeaderRowCheckboxChecked(!1))}selectRowAtIndex_(e,t){t?(this.adapter_.addClassAtRowIndex(e,r.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(e,c.ARIA_SELECTED,"true")):(this.adapter_.removeClassAtRowIndex(e,r.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(e,c.ARIA_SELECTED,"false"))}}var d=a(14),l=a(124),h=(a(179),a(336),a(0)),p=(a(426),a(337));const m=customElements.get("mwc-checkbox");let u=class extends m{firstUpdated(){super.firstUpdated(),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}static get styles(){return[p.a,h.c`
        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
          ~ .mdc-checkbox__background {
          border-color: rgba(var(--rgb-primary-text-color), 0.54);
        }
      `]}};u=Object(i.b)([Object(h.d)("ha-checkbox")],u);var b=a(18);let _=class extends d.a{constructor(){super(...arguments),this.columns={},this.data=[],this.selectable=!1,this.id="id",this.mdcFoundationClass=s,this._filterable=!1,this._headerChecked=!1,this._headerIndeterminate=!1,this._checkedRows=[],this._filter="",this._sortDirection=null,this._filterSortData=Object(l.a)((e,t,a,i,o)=>o?this._memSortData(this._memFilterData(e,t,a),t,i,o):this._memFilterData(e,t,a)),this._memFilterData=Object(l.a)((e,t,a)=>{if(!a)return e;const i=a.toUpperCase();return e.filter(e=>Object.entries(t).some(t=>{const[a,o]=t;return!(!o.filterable||!(o.filterKey?e[a][o.filterKey]:e[a]).toUpperCase().includes(i))}))}),this._memSortData=Object(l.a)((e,t,a,i)=>{const o=[...e],n=t[i];return o.sort((e,t)=>{let o=1;"desc"===a&&(o=-1);let r=n.filterKey?e[i][n.filterKey]:e[i],c=n.filterKey?t[i][n.filterKey]:t[i];return"string"==typeof r&&(r=r.toUpperCase()),"string"==typeof c&&(c=c.toUpperCase()),r<c?-1*o:r>c?1*o:0})})}updated(e){if(super.updated(e),e.has("columns")){this._filterable=Object.values(this.columns).some(e=>e.filterable);for(const e in this.columns)if(this.columns[e].direction){this._sortDirection=this.columns[e].direction,this._sortColumn=e;break}}}render(){return d.g`
      ${this._filterable?d.g`
            <search-input
              @value-changed=${this._handleSearchChange}
            ></search-input>
          `:""}
      <div class="mdc-data-table">
        <table class="mdc-data-table__table">
          <thead>
            <tr class="mdc-data-table__header-row">
              ${this.selectable?d.g`
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                      role="columnheader"
                      scope="col"
                    >
                      <ha-checkbox
                        id="header-checkbox"
                        class="mdc-data-table__row-checkbox"
                        @change=${this._handleHeaderRowCheckboxChange}
                        .indeterminate=${this._headerIndeterminate}
                        .checked=${this._headerChecked}
                      >
                      </ha-checkbox>
                    </th>
                  `:""}
              ${Object.entries(this.columns).map(e=>{const[t,a]=e,i=t===this._sortColumn,o={"mdc-data-table__cell--numeric":Boolean(a.type&&"numeric"===a.type),sortable:Boolean(a.sortable),"not-sorted":Boolean(a.sortable&&!i)};return d.g`
                  <th
                    class="mdc-data-table__header-cell ${Object(d.d)(o)}"
                    role="columnheader"
                    scope="col"
                    @click=${this._handleHeaderClick}
                    data-column-id="${t}"
                  >
                    ${a.sortable?d.g`
                          <ha-icon
                            .icon=${i&&"desc"===this._sortDirection?"hass:arrow-down":"hass:arrow-up"}
                          ></ha-icon>
                        `:""}
                    <span>${a.title}</span>
                  </th>
                `})}
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            ${Object(o.a)(this._filterSortData(this.data,this.columns,this._filter,this._sortDirection,this._sortColumn),e=>e[this.id],e=>d.g`
                <tr
                  data-row-id="${e[this.id]}"
                  @click=${this._handleRowClick}
                  class="mdc-data-table__row"
                >
                  ${this.selectable?d.g`
                        <td
                          class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                        >
                          <ha-checkbox
                            class="mdc-data-table__row-checkbox"
                            @change=${this._handleRowCheckboxChange}
                            .checked=${this._checkedRows.includes(e[this.id])}
                          >
                          </ha-checkbox>
                        </td>
                      `:""}
                  ${Object.entries(this.columns).map(t=>{const[a,i]=t;return d.g`
                      <td
                        class="mdc-data-table__cell ${Object(d.d)({"mdc-data-table__cell--numeric":Boolean(i.type&&"numeric"===i.type)})}"
                      >
                        ${i.template?i.template(e[a]):e[a]}
                      </td>
                    `})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}createAdapter(){return{addClassAtRowIndex:(e,t)=>{this.rowElements[e].classList.add(t)},getRowCount:()=>this.data.length,getRowElements:()=>this.rowElements,getRowIdAtIndex:e=>this._getRowIdAtIndex(e),getRowIndexByChildElement:e=>Array.prototype.indexOf.call(this.rowElements,e.closest("tr")),getSelectedRowCount:()=>this._checkedRows.length,isCheckboxAtRowIndexChecked:e=>this._checkedRows.includes(this._getRowIdAtIndex(e)),isHeaderRowCheckboxChecked:()=>this._headerChecked,isRowsSelectable:()=>!0,notifyRowSelectionChanged:()=>void 0,notifySelectedAll:()=>void 0,notifyUnselectedAll:()=>void 0,registerHeaderRowCheckbox:()=>void 0,registerRowCheckboxes:()=>void 0,removeClassAtRowIndex:(e,t)=>{this.rowElements[e].classList.remove(t)},setAttributeAtRowIndex:(e,t,a)=>{this.rowElements[e].setAttribute(t,a)},setHeaderRowCheckboxChecked:e=>{this._headerChecked=e},setHeaderRowCheckboxIndeterminate:e=>{this._headerIndeterminate=e},setRowCheckboxCheckedAtIndex:(e,t)=>{this._setRowChecked(this._getRowIdAtIndex(e),t)}}}_getRowIdAtIndex(e){return this.rowElements[e].getAttribute("data-row-id")}_handleHeaderClick(e){const t=e.target.closest("th").getAttribute("data-column-id");this.columns[t].sortable&&(this._sortDirection&&this._sortColumn===t?"asc"===this._sortDirection?this._sortDirection="desc":this._sortDirection=null:this._sortDirection="asc",this._sortColumn=null===this._sortDirection?void 0:t,Object(b.a)(this,"sorting-changed",{column:t,direction:this._sortDirection}))}_handleHeaderRowCheckboxChange(){this._headerChecked=this._headerCheckbox.checked,this._headerIndeterminate=this._headerCheckbox.indeterminate,this.mdcFoundation.handleHeaderRowCheckboxChange()}_handleRowCheckboxChange(e){const t=e.target,a=t.closest("tr").getAttribute("data-row-id");this._setRowChecked(a,t.checked),this.mdcFoundation.handleRowCheckboxChange(e)}_handleRowClick(e){const t=e.target.closest("tr").getAttribute("data-row-id");Object(b.a)(this,"row-click",{id:t},{bubbles:!1})}_setRowChecked(e,t){if(t&&!this._checkedRows.includes(e))this._checkedRows=[...this._checkedRows,e];else if(!t){const t=this._checkedRows.indexOf(e);-1!==t&&this._checkedRows.splice(t,1)}Object(b.a)(this,"selection-changed",{id:e,selected:t})}_handleSearchChange(e){this._filter=e.detail.value}static get styles(){return d.e`
      /* default mdc styles, colors changed, without checkbox styles */

      .mdc-data-table__content {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table {
        background-color: var(--card-background-color);
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(var(--rgb-primary-text-color), 0.12);
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-x: auto;
      }

      .mdc-data-table__row--selected {
        background-color: rgba(var(--rgb-primary-color), 0.04);
      }

      .mdc-data-table__row {
        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);
      }

      .mdc-data-table__row {
        border-top-width: 1px;
        border-top-style: solid;
      }

      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }

      .mdc-data-table__header-cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__header-row {
        height: 56px;
      }

      .mdc-data-table__row {
        height: 52px;
      }

      .mdc-data-table__cell,
      .mdc-data-table__header-cell {
        padding-right: 16px;
        padding-left: 16px;
      }

      .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__cell--checkbox {
        /* @noflip */
        padding-left: 16px;
        /* @noflip */
        padding-right: 0;
      }
      [dir="rtl"] .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__header-cell--checkbox[dir="rtl"],
      [dir="rtl"] .mdc-data-table__cell--checkbox,
      .mdc-data-table__cell--checkbox[dir="rtl"] {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 16px;
      }

      .mdc-data-table__table {
        width: 100%;
        border: 0;
        white-space: nowrap;
        border-collapse: collapse;
      }

      .mdc-data-table__cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table__cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__cell--numeric,
      .mdc-data-table__cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      .mdc-data-table__header-cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-weight: 500;
        letter-spacing: 0.0071428571em;
        text-decoration: inherit;
        text-transform: inherit;
        text-align: left;
      }
      [dir="rtl"] .mdc-data-table__header-cell,
      .mdc-data-table__header-cell[dir="rtl"] {
        /* @noflip */
        text-align: right;
      }

      .mdc-data-table__header-cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__header-cell--numeric,
      .mdc-data-table__header-cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      /* custom from here */

      .mdc-data-table {
        display: block;
      }
      .mdc-data-table__header-cell {
        overflow: hidden;
      }
      .mdc-data-table__header-cell.sortable {
        cursor: pointer;
      }
      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__cell--numeric)
        span {
        position: relative;
        left: -24px;
      }
      .mdc-data-table__header-cell.not-sorted > * {
        transition: left 0.2s ease 0s;
      }
      .mdc-data-table__header-cell.not-sorted ha-icon {
        left: -36px;
      }
      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__cell--numeric):hover
        span {
        left: 0px;
      }
      .mdc-data-table__header-cell:hover.not-sorted ha-icon {
        left: 0px;
      }
    `}};Object(i.b)([Object(d.i)({type:Object})],_.prototype,"columns",void 0),Object(i.b)([Object(d.i)({type:Array})],_.prototype,"data",void 0),Object(i.b)([Object(d.i)({type:Boolean})],_.prototype,"selectable",void 0),Object(i.b)([Object(d.i)({type:String})],_.prototype,"id",void 0),Object(i.b)([Object(d.j)(".mdc-data-table")],_.prototype,"mdcRoot",void 0),Object(i.b)([Object(d.k)(".mdc-data-table__row")],_.prototype,"rowElements",void 0),Object(i.b)([Object(d.j)("#header-checkbox")],_.prototype,"_headerCheckbox",void 0),Object(i.b)([Object(d.i)({type:Boolean})],_.prototype,"_filterable",void 0),Object(i.b)([Object(d.i)({type:Boolean})],_.prototype,"_headerChecked",void 0),Object(i.b)([Object(d.i)({type:Boolean})],_.prototype,"_headerIndeterminate",void 0),Object(i.b)([Object(d.i)({type:Array})],_.prototype,"_checkedRows",void 0),Object(i.b)([Object(d.i)({type:String})],_.prototype,"_filter",void 0),Object(i.b)([Object(d.i)({type:String})],_.prototype,"_sortColumn",void 0),Object(i.b)([Object(d.i)({type:String})],_.prototype,"_sortDirection",void 0),_=Object(i.b)([Object(d.f)("ha-data-table")],_)},739:function(e,t,a){"use strict";a.r(t);var i=a(4),o=(a(234),a(251),a(85),a(109),a(143),a(181),a(177),a(427),a(412),a(152),a(95),a(241),a(195),a(124)),n=a(0),r=a(99);let c=class extends n.a{constructor(){super(...arguments),this.narrow=!1,this._devices=Object(o.a)((e,t,a,i,o)=>{let n=e;return o&&(n=n.filter(e=>t.find(t=>e.config_entries.includes(t.entry_id)).domain===o)),n=n.map(e=>{const o=Object.assign({},e);return o.name=e.name_by_user||e.name||"No name",o.area=i&&e&&e.area_id?i.find(t=>t.area_id===e.area_id).name:"No area",o.integration=t&&e&&e.config_entries?t.find(t=>e.config_entries.includes(t.entry_id)).domain:"No integration",o.battery_entity=this._batteryEntity(e,a),o})}),this._columns=Object(o.a)(e=>e?{device:{title:"Device",sortable:!0,filterKey:"name",filterable:!0,direction:"asc",template:e=>{const t=e.battery_entity?this.hass.states[e.battery_entity]:void 0;return n.f`
                  ${e.name_by_user||e.name}<br />
                  ${e.area} | ${e.integration}<br />
                  ${t?n.f`
                        ${t.state}%
                        <ha-state-icon
                          .hass=${this.hass}
                          .stateObj=${t}
                        ></ha-state-icon>
                      `:""}
                `}}}:{device_name:{title:"Device",sortable:!0,filterable:!0,direction:"asc"},manufacturer:{title:"Manufacturer",sortable:!0,filterable:!0},model:{title:"Model",sortable:!0,filterable:!0},area:{title:"Area",sortable:!0,filterable:!0},integration:{title:"Integration",sortable:!0,filterable:!0},battery:{title:"Battery",sortable:!0,type:"numeric",template:e=>{const t=e?this.hass.states[e]:void 0;return t?n.f`
                      ${t.state}%
                      <ha-state-icon
                        .hass=${this.hass}
                        .stateObj=${t}
                      ></ha-state-icon>
                    `:n.f`
                      n/a
                    `}}})}render(){return n.f`
      <hass-subpage
        header=${this.hass.localize("ui.panel.config.devices.caption")}
      >
        <ha-data-table
          .columns=${this._columns(this.narrow)}
          .data=${this._devices(this.devices,this.entries,this.entities,this.areas,this.domain).map(e=>{const t={device_name:e.name,id:e.id,manufacturer:e.manufacturer,model:e.model,area:e.area,integration:e.integration};return this.narrow?(t.device=e,t):(t.battery=e.battery_entity,t)})}
          @row-click=${this._handleRowClicked}
        ></ha-data-table>
      </hass-subpage>
    `}_batteryEntity(e,t){const a=t.find(t=>t.device_id===e.id&&this.hass.states[t.entity_id]&&"battery"===this.hass.states[t.entity_id].attributes.device_class);return a?a.entity_id:void 0}_handleRowClicked(e){const t=e.detail.id;Object(r.a)(this,`/config/devices/device/${t}`)}};Object(i.b)([Object(n.g)()],c.prototype,"hass",void 0),Object(i.b)([Object(n.g)()],c.prototype,"narrow",void 0),Object(i.b)([Object(n.g)()],c.prototype,"devices",void 0),Object(i.b)([Object(n.g)()],c.prototype,"entries",void 0),Object(i.b)([Object(n.g)()],c.prototype,"entities",void 0),Object(i.b)([Object(n.g)()],c.prototype,"areas",void 0),Object(i.b)([Object(n.g)()],c.prototype,"domain",void 0),c=Object(i.b)([Object(n.d)("ha-config-devices-dashboard")],c);a(161),a(413);var s=a(222),d=a(364);let l=class extends n.a{constructor(){super(...arguments),this._device=Object(o.a)((e,t)=>t?t.find(t=>t.id===e):void 0)}firstUpdated(e){super.firstUpdated(e),Object(d.a)()}render(){const e=this._device(this.deviceId,this.devices);return e?n.f`
      <hass-subpage .header=${e.name_by_user||e.name}>
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:settings"
          @click=${this._showSettings}
        ></paper-icon-button>
        <ha-device-card
          .hass=${this.hass}
          .areas=${this.areas}
          .devices=${this.devices}
          .device=${e}
          .entities=${this.entities}
          hide-settings
        ></ha-device-card>
      </hass-subpage>
    `:n.f`
        <hass-error-screen error="Device not found."></hass-error-screen>
      `}_showSettings(){Object(d.b)(this,{device:this._device(this.deviceId,this.devices),updateEntry:async e=>{await Object(s.b)(this.hass,this.deviceId,e)}})}};Object(i.b)([Object(n.g)()],l.prototype,"hass",void 0),Object(i.b)([Object(n.g)()],l.prototype,"devices",void 0),Object(i.b)([Object(n.g)()],l.prototype,"entries",void 0),Object(i.b)([Object(n.g)()],l.prototype,"entities",void 0),Object(i.b)([Object(n.g)()],l.prototype,"areas",void 0),Object(i.b)([Object(n.g)()],l.prototype,"deviceId",void 0),l=Object(i.b)([Object(n.d)("ha-config-device-page")],l);var h=a(198),p=a(227),m=a(133),u=a(299),b=a(265);let _=class extends m.a{constructor(){super(...arguments),this.routerOptions={defaultPage:"dashboard",routes:{dashboard:{tag:"ha-config-devices-dashboard"},device:{tag:"ha-config-device-page"}}}}connectedCallback(){super.connectedCallback(),this.hass&&this._loadData()}disconnectedCallback(){if(super.disconnectedCallback(),this._unsubs){for(;this._unsubs.length;)this._unsubs.pop()();this._unsubs=void 0}}firstUpdated(e){super.firstUpdated(e),this.addEventListener("hass-reload-entries",()=>{this._loadData()})}updated(e){super.updated(e),!this._unsubs&&e.has("hass")&&this._loadData()}updatePageEl(e){e.hass=this.hass,"dashboard"===this._currentPage?e.domain=this.routeTail.path.substr(1):"device"===this._currentPage&&(e.deviceId=this.routeTail.path.substr(1)),e.entities=this._entityRegistryEntries,e.entries=this._configEntries,e.devices=this._deviceRegistryEntries,e.areas=this._areas,e.narrow=this.narrow}_loadData(){Object(u.b)(this.hass).then(e=>{this._configEntries=e.sort((e,t)=>Object(h.b)(e.title,t.title))}),this._unsubs||(this._unsubs=[Object(p.c)(this.hass.connection,e=>{this._areas=e}),Object(b.c)(this.hass.connection,e=>{this._entityRegistryEntries=e}),Object(s.a)(this.hass.connection,e=>{this._deviceRegistryEntries=e})])}};Object(i.b)([Object(n.g)()],_.prototype,"hass",void 0),Object(i.b)([Object(n.g)()],_.prototype,"narrow",void 0),Object(i.b)([Object(n.g)()],_.prototype,"_configEntries",void 0),Object(i.b)([Object(n.g)()],_.prototype,"_entityRegistryEntries",void 0),Object(i.b)([Object(n.g)()],_.prototype,"_deviceRegistryEntries",void 0),Object(i.b)([Object(n.g)()],_.prototype,"_areas",void 0),_=Object(i.b)([Object(n.d)("ha-config-devices")],_)},93:function(e,t,a){"use strict";a(5),a(113),a(114),a(115),a(116);var i=a(60),o=(a(41),a(6)),n=a(3),r=a(97);Object(o.a)({is:"paper-input",_template:n.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[r.a,i.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(5);var i=a(6),o=a(3);const n=Object(i.a)({_template:o.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){n.instance||(n.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});n.instance=null,n.requestAvailability=function(){n.instance||(n.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(n.instance)}}}]);
//# sourceMappingURL=chunk.e5f69c6c7e78446af964.js.map