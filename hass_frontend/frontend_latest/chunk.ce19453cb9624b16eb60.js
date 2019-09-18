/*! For license information please see chunk.ce19453cb9624b16eb60.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[80],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a(9),o=a(18);const i=Object(s.a)(e=>(class extends e{fire(e,t,a){return a=a||{},Object(o.a)(a.node||this,e,t,a)}}))},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(5);var s=a(55),o=a(35);const i=[s.a,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},143:function(e,t,a){"use strict";a(5),a(45),a(145);var s=a(6),o=a(3),i=a(120);Object(s.a)({_template:o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[i.a]})},145:function(e,t,a){"use strict";a(45),a(68),a(42),a(54);const s=document.createElement("template");s.setAttribute("style","display: none;"),s.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(s.content)},175:function(e,t,a){"use strict";var s=a(9);t.a=Object(s.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,a){"use strict";var s=a(4),o=a(0);class i extends o.a{static get styles(){return o.c`
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
    `}}Object(s.b)([Object(o.g)()],i.prototype,"header",void 0),customElements.define("ha-card",i)},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(109);const s=customElements.get("iron-icon");let o=!1;class i extends s{listen(e,t,s){super.listen(e,t,s),o||"mdi"!==this._iconsetName||(o=!0,a.e(70).then(a.bind(null,216)))}}customElements.define("ha-icon",i)},181:function(e,t,a){"use strict";a(5),a(45),a(42),a(54);var s=a(6),o=a(3);Object(s.a)({_template:o.a`
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
`,is:"paper-item-body"})},187:function(e,t,a){"use strict";a(5),a(68),a(151);var s=a(6),o=a(3),i=a(126);const n=o.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;n.setAttribute("strip-whitespace",""),Object(s.a)({_template:n,is:"paper-spinner",behaviors:[i.a]})},195:function(e,t,a){"use strict";var s=a(3),o=a(30);a(95);customElements.define("ha-config-section",class extends o.a{static get template(){return s.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},197:function(e,t,a){"use strict";var s={},o=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",n=/\[([^]*?)\]/gm,r=function(){};function c(e,t){for(var a=[],s=0,o=e.length;s<o;s++)a.push(e[s].substr(0,t));return a}function l(e){return function(t,a,s){var o=s[e].indexOf(a.charAt(0).toUpperCase()+a.substr(1).toLowerCase());~o&&(t.month=o)}}function d(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],h=c(p,3),g=c(u,3);s.i18n={dayNamesShort:g,dayNames:u,monthNamesShort:h,monthNames:p,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var m={D:function(e){return e.getDate()},DD:function(e){return d(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return d(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return d(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return d(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return d(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return d(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return d(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return d(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return d(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return d(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return d(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+d(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},b={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+i,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var a=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?a-1:a)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",r],ddd:[i,r],MMM:[i,l("monthNamesShort")],MMMM:[i,l("monthNames")],a:[i,function(e,t,a){var s=t.toLowerCase();s===a.amPm[0]?e.isPm=!1:s===a.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var a,s=(t+"").match(/([+-]|\d\d)/gi);s&&(a=60*s[1]+parseInt(s[2],10),e.timezoneOffset="+"===s[0]?a:-a)}]};b.dd=b.d,b.dddd=b.ddd,b.DD=b.D,b.mm=b.m,b.hh=b.H=b.HH=b.h,b.MM=b.M,b.ss=b.s,b.A=b.a,s.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},s.format=function(e,t,a){var i=a||s.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=s.masks[t]||t||s.masks.default;var r=[];return(t=(t=t.replace(n,(function(e,t){return r.push(t),"@@@"}))).replace(o,(function(t){return t in m?m[t](e,i):t.slice(1,t.length-1)}))).replace(/@@@/g,(function(){return r.shift()}))},s.parse=function(e,t,a){var i=a||s.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=s.masks[t]||t,e.length>1e3)return null;var r={},c=[],l=[];t=t.replace(n,(function(e,t){return l.push(t),"@@@"}));var d,u=(d=t,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(o,(function(e){if(b[e]){var t=b[e];return c.push(t[1]),"("+t[0]+")"}return e}));u=u.replace(/@@@/g,(function(){return l.shift()}));var p=e.match(new RegExp(u,"i"));if(!p)return null;for(var h=1;h<p.length;h++)c[h-1](r,p[h],i);var g,m=new Date;return!0===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:!1===r.isPm&&12==+r.hour&&(r.hour=0),null!=r.timezoneOffset?(r.minute=+(r.minute||0)-+r.timezoneOffset,g=new Date(Date.UTC(r.year||m.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0))):g=new Date(r.year||m.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0),g},t.a=s},200:function(e,t,a){"use strict";var s=a(197);t.a=function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()?(e,t)=>e.toLocaleString(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):e=>s.a.format(e,"haDateTime")},218:function(e,t,a){"use strict";a(85),a(187);var s=a(3),o=a(30);customElements.define("ha-progress-button",class extends o.a{static get template(){return s.a`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(e){var t=this.$.container.classList;t.add(e),setTimeout(()=>{t.remove(e)},1e3)}ready(){super.ready(),this.addEventListener("click",e=>this.buttonTapped(e))}buttonTapped(e){this.progress&&e.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(e,t){return e||t}})},241:function(e,t,a){"use strict";a(109);var s=a(179);customElements.define("ha-icon-next",class extends s.a{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left"},100)}})},250:function(e,t,a){"use strict";var s=a(9),o=a(99);t.a=Object(s.a)(e=>(class extends e{navigate(...e){Object(o.a)(this,...e)}}))},335:function(e,t,a){"use strict";var s=a(0),o=(a(218),a(18));customElements.define("ha-call-api-button",class extends s.a{render(){return s.f`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
        ><slot></slot
      ></ha-progress-button>
    `}constructor(){super(),this.method="POST",this.data={},this.disabled=!1,this.progress=!1}static get properties(){return{hass:{},progress:Boolean,path:String,method:String,data:{},disabled:Boolean}}get progressButton(){return this.renderRoot.querySelector("ha-progress-button")}async _buttonTapped(){this.progress=!0;const e={method:this.method,path:this.path,data:this.data};try{const t=await this.hass.callApi(this.method,this.path,this.data);this.progress=!1,this.progressButton.actionSuccess(),e.success=!0,e.response=t}catch(t){this.progress=!1,this.progressButton.actionError(),e.success=!1,e.response=t}Object(o.a)(this,"hass-api-called",e)}})},411:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(48);const o=(e,t)=>Object(s.a)(e,{message:t.localize("ui.common.successfully_saved")})},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o}));const s=e=>e.callWS({type:"cloud/alexa/entities"}),o=e=>e.callWS({type:"cloud/alexa/sync"})},721:function(e,t,a){"use strict";a.r(t);var s=a(4),o=(a(85),a(181),a(207),a(3)),i=a(30),n=(a(177),a(335),a(152),a(95),a(195),a(0));a(143),a(187);const r=e=>e.callWS({type:"webhook/list"});var c=a(279),l=a(18);const d=(e,t)=>{Object(l.a)(e,"show-dialog",{dialogTag:"dialog-manage-cloudhook",dialogImport:()=>Promise.all([a.e(1),a.e(21)]).then(a.bind(null,707)),dialogParams:t})};customElements.define("cloud-webhooks",class extends n.a{constructor(){super(),this._progress=[]}static get properties(){return{hass:{},cloudStatus:{},_cloudHooks:{},_localHooks:{},_progress:{}}}connectedCallback(){super.connectedCallback(),this._fetchData()}render(){return n.f`
      ${this.renderStyle()}
      <ha-card header="Webhooks">
        <div class="card-content">
          Anything that is configured to be triggered by a webhook can be given
          a publicly accessible URL to allow you to send data back to Home
          Assistant from anywhere, without exposing your instance to the
          internet. ${this._renderBody()}

          <div class="footer">
            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">
              Learn more about creating webhook-powered automations.
            </a>
          </div>
        </div>
      </ha-card>
    `}updated(e){super.updated(e),e.has("cloudStatus")&&this.cloudStatus&&(this._cloudHooks=this.cloudStatus.prefs.cloudhooks||{})}_renderBody(){return this.cloudStatus&&this._localHooks&&this._cloudHooks?0===this._localHooks.length?n.f`
        <div class="body-text">
          Looks like you have no webhooks yet. Get started by configuring a
          <a href="/config/integrations">webhook-based integration</a> or by
          creating a <a href="/config/automation/new">webhook automation</a>.
        </div>
      `:this._localHooks.map(e=>n.f`
        <div class="webhook" .entry="${e}">
          <paper-item-body two-line>
            <div>
              ${e.name}
              ${e.domain===e.name.toLowerCase()?"":` (${e.domain})`}
            </div>
            <div secondary>${e.webhook_id}</div>
          </paper-item-body>
          ${this._progress.includes(e.webhook_id)?n.f`
                <div class="progress">
                  <paper-spinner active></paper-spinner>
                </div>
              `:this._cloudHooks[e.webhook_id]?n.f`
                <mwc-button @click="${this._handleManageButton}">
                  Manage
                </mwc-button>
              `:n.f`
                <paper-toggle-button
                  @click="${this._enableWebhook}"
                ></paper-toggle-button>
              `}
        </div>
      `):n.f`
        <div class="body-text">Loading…</div>
      `}_showDialog(e){const t=this._localHooks.find(t=>t.webhook_id===e),a=this._cloudHooks[e];d(this,{webhook:t,cloudhook:a,disableHook:()=>this._disableWebhook(e)})}_handleManageButton(e){const t=e.currentTarget.parentElement.entry;this._showDialog(t.webhook_id)}async _enableWebhook(e){const t=e.currentTarget.parentElement.entry;let a;this._progress=[...this._progress,t.webhook_id];try{a=await Object(c.c)(this.hass,t.webhook_id)}catch(s){return void alert(s.message)}finally{this._progress=this._progress.filter(e=>e!==t.webhook_id)}this._cloudHooks=Object.assign(Object.assign({},this._cloudHooks),{[t.webhook_id]:a}),0===this._progress.length&&this._showDialog(t.webhook_id)}async _disableWebhook(e){this._progress=[...this._progress,e];try{await Object(c.d)(this.hass,e)}catch(i){return void alert(`Failed to disable webhook: ${i.message}`)}finally{this._progress=this._progress.filter(t=>t!==e)}const t=this._cloudHooks,a=e,o=(t[a],Object(s.d)(t,["symbol"==typeof a?a:a+""]));this._cloudHooks=o}async _fetchData(){this._localHooks=this.hass.config.components.includes("webhook")?await r(this.hass):[]}renderStyle(){return n.f`
      <style>
        .body-text {
          padding: 8px 0;
        }
        .webhook {
          display: flex;
          padding: 4px 0;
        }
        .progress {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer {
          padding-top: 16px;
        }
        .body-text a,
        .footer a {
          color: var(--primary-color);
        }
      </style>
    `}});var u=a(200),p=a(118),h=a(175),g=a(465);class m extends n.a{constructor(){super(...arguments),this._syncing=!1}render(){if(!this.cloudStatus)return n.f``;const{alexa_enabled:e,alexa_report_state:t}=this.cloudStatus.prefs;return n.f`
      <ha-card header="Alexa">
        <paper-toggle-button
          .checked=${e}
          @change=${this._enabledToggleChanged}
        ></paper-toggle-button>
        <div class="card-content">
          With the Alexa integration for ioBroker Cloud you'll be able to
          control all your ioBroker devices via any Alexa-enabled device.
          <ul>
            <li>
              <a
                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"
                target="_blank"
              >
                Enable the ioBroker skill for Alexa
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/amazon_alexa/"
                target="_blank"
              >
                Config documentation
              </a>
            </li>
          </ul>
          <em
            >This integration requires an Alexa-enabled device like the Amazon
            Echo.</em
          >
          ${e?n.f`
                <h3>Enable State Reporting</h3>
                <p>
                  If you enable state reporting, ioBroker will send
                  <b>all</b> state changes of exposed entities to Amazon. This
                  allows you to always see the latest states in the Alexa app
                  and use the state changes to create routines.
                </p>
                <paper-toggle-button
                  .checked=${t}
                  @change=${this._reportToggleChanged}
                ></paper-toggle-button>
              `:""}
        </div>
        <div class="card-actions">
          <mwc-button @click=${this._handleSync} .disabled=${this._syncing}>
            Sync Entities
          </mwc-button>
          <div class="spacer"></div>
          <a href="/config/cloud/alexa">
            <mwc-button>Manage Entities</mwc-button>
          </a>
        </div>
      </ha-card>
    `}async _handleSync(){this._syncing=!0;try{await Object(g.b)(this.hass)}catch(e){alert(`Failed to sync entities: ${e.body.message}`)}finally{this._syncing=!1}}async _enabledToggleChanged(e){const t=e.target;try{await Object(c.j)(this.hass,{alexa_enabled:t.checked}),Object(l.a)(this,"ha-refresh-cloud-status")}catch(a){t.checked=!t.checked}}async _reportToggleChanged(e){const t=e.target;try{await Object(c.j)(this.hass,{alexa_report_state:t.checked}),Object(l.a)(this,"ha-refresh-cloud-status")}catch(a){alert(`Unable to ${t.checked?"enable":"disable"} report state. ${a.message}`),t.checked=!t.checked}}static get styles(){return n.c`
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
      h3 {
        margin-bottom: 0;
      }
      h3 + p {
        margin-top: 0.5em;
      }
    `}}Object(s.b)([Object(n.g)()],m.prototype,"hass",void 0),Object(s.b)([Object(n.g)()],m.prototype,"cloudStatus",void 0),Object(s.b)([Object(n.g)()],m.prototype,"_syncing",void 0),customElements.define("cloud-alexa-pref",m);var b=a(411);customElements.define("cloud-google-pref",class extends n.a{static get properties(){return{hass:{},cloudStatus:{}}}render(){if(!this.cloudStatus)return n.f``;const{google_enabled:e,google_secure_devices_pin:t}=this.cloudStatus.prefs;return n.f`
      <ha-card header="Google Assistant">
        <paper-toggle-button
          id="google_enabled"
          .checked="${e}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          With the Google Assistant integration for ioBroker Cloud you'll
          be able to control all your ioBroker devices via any Google
          Assistant-enabled device.
          <ul>
            <li>
              <a
                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"
                target="_blank"
              >
                Activate the ioBroker skill for Google Assistant
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/google_assistant/"
                target="_blank"
              >
                Config documentation
              </a>
            </li>
          </ul>
          <em
            >This integration requires a Google Assistant-enabled device like
            the Google Home or Android phone.</em
          >
          ${e?n.f`
                <div class="secure_devices">
                  Please enter a pin to interact with security devices. Security
                  devices are doors, garage doors and locks. You will be asked
                  to say/enter this pin when interacting with such devices via
                  Google Assistant.
                  <paper-input
                    label="Secure Devices Pin"
                    id="google_secure_devices_pin"
                    placeholder="Enter a PIN to use secure devices"
                    .value=${t||""}
                    @change="${this._pinChanged}"
                  ></paper-input>
                </div>
              `:""}
        </div>
        <div class="card-actions">
          <ha-call-api-button
            .hass="${this.hass}"
            .disabled="${!e}"
            path="cloud/google_actions/sync"
          >
            Sync entities to Google
          </ha-call-api-button>
          <div class="spacer"></div>
          <a href="/config/cloud/google-assistant">
            <mwc-button>Manage Entities</mwc-button>
          </a>
        </div>
      </ha-card>
    `}async _toggleChanged(e){const t=e.target;try{await Object(c.j)(this.hass,{[t.id]:t.checked}),Object(l.a)(this,"ha-refresh-cloud-status")}catch(a){t.checked=!t.checked}}async _pinChanged(e){const t=e.target;try{await Object(c.j)(this.hass,{[t.id]:t.value||null}),Object(b.a)(this,this.hass),Object(l.a)(this,"ha-refresh-cloud-status")}catch(a){alert(`Unable to store pin: ${a.message}`),t.value=this.cloudStatus.prefs.google_secure_devices_pin}}static get styles(){return n.c`
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      ha-call-api-button {
        color: var(--primary-color);
        font-weight: 500;
      }
      .secure_devices {
        padding-top: 16px;
      }
      paper-input {
        width: 250px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `}});let f=class extends n.a{static get properties(){return{hass:{},cloudStatus:{}}}render(){if(!this.cloudStatus)return n.f``;const{remote_connected:e,remote_domain:t,remote_certificate:a}=this.cloudStatus;return a?n.f`
      <ha-card header="Remote Control">
        <paper-toggle-button
          .checked="${e}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          ioBroker Cloud provides a secure remote connection to your
          instance while away from home. Your instance
          ${e?"is":"will be"} available at
          <a href="https://${t}" target="_blank">
            https://${t}</a
          >.
        </div>
        <div class="card-actions">
          <a href="https://www.nabucasa.com/config/remote/" target="_blank">
            <mwc-button>Learn how it works</mwc-button>
          </a>
          ${a?n.f`
                <div class="spacer"></div>
                <mwc-button @click=${this._openCertInfo}>
                  Certificate Info
                </mwc-button>
              `:""}
        </div>
      </ha-card>
    `:n.f`
        <ha-card header="Remote Control">
          <div class="preparing">
            Remote access is being prepared. We will notify you when it's ready.
          </div>
        </ha-card>
      `}_openCertInfo(){var e,t;e=this,t={certificateInfo:this.cloudStatus.remote_certificate},Object(l.a)(e,"show-dialog",{dialogTag:"dialog-cloud-certificate",dialogImport:()=>Promise.all([a.e(1),a.e(28)]).then(a.bind(null,708)),dialogParams:t})}async _toggleChanged(e){const t=e.target;try{t.checked?await Object(c.b)(this.hass):await Object(c.e)(this.hass),Object(l.a)(this,"ha-refresh-cloud-status")}catch(a){alert(a.message),t.checked=!t.checked}}static get styles(){return n.c`
      .preparing {
        padding: 0 16px 16px;
      }
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `}};f=Object(s.b)([Object(n.d)("cloud-remote-pref")],f);customElements.define("cloud-account",class extends(Object(p.a)(Object(h.a)(i.a))){static get template(){return o.a`
      <style include="iron-flex ha-style">
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        .account-row {
          display: flex;
          padding: 0 16px;
        }
        mwc-button {
          align-self: center;
        }
        .soon {
          font-style: italic;
          margin-top: 24px;
          text-align: center;
        }
        .nowrap {
          white-space: nowrap;
        }
        .wrap {
          white-space: normal;
        }
        .status {
          text-transform: capitalize;
          padding: 16px;
        }
        a {
          color: var(--primary-color);
        }
      </style>
      <hass-subpage header="ioBroker Cloud">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">ioBroker Cloud</span>
            <div slot="introduction">
              <p>
                Thank you for being part of ioBroker Cloud. It's because
                of people like you that we are able to make a great home
                automation experience for everyone. Thank you!
              </p>
            </div>

            <ha-card header="Nabu Casa Account">
              <div class="account-row">
                <paper-item-body two-line="">
                  [[cloudStatus.email]]
                  <div secondary class="wrap">
                    [[_formatSubscription(_subscription)]]
                  </div>
                </paper-item-body>
              </div>

              <div class="account-row">
                <paper-item-body> Cloud connection status </paper-item-body>
                <div class="status">[[cloudStatus.cloud]]</div>
              </div>

              <div class="card-actions">
                <a href="https://account.nabucasa.com" target="_blank"
                  ><mwc-button>Manage Account</mwc-button></a
                >
                <mwc-button style="float: right" on-click="handleLogout"
                  >Sign out</mwc-button
                >
              </div>
            </ha-card>
          </ha-config-section>

          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">Integrations</span>
            <div slot="introduction">
              <p>
                Integrations for ioBroker Cloud allow you to connect with
                services in the cloud without having to expose your Home
                Assistant instance publicly on the internet.
              </p>
              <p>
                Check the website for
                <a href="https://www.nabucasa.com" target="_blank"
                  >all available features</a
                >.
              </p>
            </div>

            <cloud-remote-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-remote-pref>

            <cloud-alexa-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-alexa-pref>

            <cloud-google-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-google-pref>

            <cloud-webhooks
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-webhooks>
          </ha-config-section>
        </div>
      </hass-subpage>
    `}static get properties(){return{hass:Object,isWide:Boolean,cloudStatus:Object,_subscription:{type:Object,value:null}}}ready(){super.ready(),this._fetchSubscriptionInfo()}_computeRemoteConnected(e){return e?"Connected":"Not Connected"}async _fetchSubscriptionInfo(){this._subscription=await Object(c.g)(this.hass),this._subscription.provider&&this.cloudStatus&&"connected"!==this.cloudStatus.cloud&&this.fire("ha-refresh-cloud-status")}handleLogout(){this.hass.callApi("post","cloud/logout").then(()=>this.fire("ha-refresh-cloud-status"))}_formatSubscription(e){if(null===e)return"Fetching subscription…";let t=e.human_description;return e.plan_renewal_date&&(t=t.replace("{periodEnd}",Object(u.a)(new Date(1e3*e.plan_renewal_date),this.hass.language))),t}});a(108),a(93),a(110),a(218);var y=a(250);a(241);customElements.define("cloud-login",class extends(Object(y.a)(Object(p.a)(i.a))){static get template(){return o.a`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-item {
          cursor: pointer;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card .card-header {
          margin-bottom: -8px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        [hidden] {
          display: none;
        }
        .flash-msg {
          padding-right: 44px;
        }
        .flash-msg paper-icon-button {
          position: absolute;
          top: 8px;
          right: 8px;
          color: var(--secondary-text-color);
        }
      </style>
      <hass-subpage header="Cloud Login">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">ioBroker Cloud</span>
            <div slot="introduction">
              <p>
                ioBroker Cloud provides you with a secure remote
                connection to your instance while away from home. It also allows
                you to connect with cloud-only services: Amazon Alexa and Google
                Assistant.
              </p>
              <p>
                This service is run by our partner
                <a href="https://www.nabucasa.com" target="_blank"
                  >Nabu&nbsp;Casa,&nbsp;Inc</a
                >, a company founded by the founders of ioBroker and
                Hass.io.
              </p>
              <p>
                ioBroker Cloud is a subscription service with a free one
                month trial. No payment information necessary.
              </p>
              <p>
                <a href="https://www.nabucasa.com" target="_blank"
                  >Learn more about ioBroker Cloud</a
                >
              </p>
            </div>

            <ha-card hidden$="[[!flashMessage]]">
              <div class="card-content flash-msg">
                [[flashMessage]]
                <paper-icon-button icon="hass:close" on-click="_dismissFlash"
                  >Dismiss</paper-icon-button
                >
                <paper-ripple id="flashRipple" noink=""></paper-ripple>
              </div>
            </ha-card>

            <ha-card header="Sign in">
              <div class="card-content">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
                <paper-input
                  label="Email"
                  id="email"
                  type="email"
                  value="{{email}}"
                  on-keydown="_keyDown"
                  error-message="Invalid email"
                ></paper-input>
                <paper-input
                  id="password"
                  label="Password"
                  value="{{_password}}"
                  type="password"
                  on-keydown="_keyDown"
                  error-message="Passwords are at least 8 characters"
                ></paper-input>
              </div>
              <div class="card-actions">
                <ha-progress-button
                  on-click="_handleLogin"
                  progress="[[_requestInProgress]]"
                  >Sign in</ha-progress-button
                >
                <button
                  class="link"
                  hidden="[[_requestInProgress]]"
                  on-click="_handleForgotPassword"
                >
                  forgot password?
                </button>
              </div>
            </ha-card>

            <ha-card>
              <paper-item on-click="_handleRegister">
                <paper-item-body two-line="">
                  Start your free 1 month trial
                  <div secondary="">No payment information necessary</div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </ha-card>
          </ha-config-section>
        </div>
      </hass-subpage>
    `}static get properties(){return{hass:Object,isWide:Boolean,email:{type:String,notify:!0},_password:{type:String,value:""},_requestInProgress:{type:Boolean,value:!1},flashMessage:{type:String,notify:!0},_error:String}}static get observers(){return["_inputChanged(email, _password)"]}connectedCallback(){super.connectedCallback(),this.flashMessage&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.$.flashRipple.simulatedRipple()))}_inputChanged(){this.$.email.invalid=!1,this.$.password.invalid=!1,this._error=!1}_keyDown(e){13===e.keyCode&&(this._handleLogin(),e.preventDefault())}_handleLogin(){let e=!1;this.email&&this.email.includes("@")||(this.$.email.invalid=!0,this.$.email.focus(),e=!0),this._password.length<8&&(this.$.password.invalid=!0,e||(e=!0,this.$.password.focus())),e||(this._requestInProgress=!0,this.hass.callApi("post","cloud/login",{email:this.email,password:this._password}).then(()=>{this.fire("ha-refresh-cloud-status"),this.setProperties({email:"",_password:""})},e=>{this._password="";const t=e&&e.body&&e.body.code;if("PasswordChangeRequired"===t)return alert("You need to change your password before logging in."),void this.navigate("/config/cloud/forgot-password");const a={_requestInProgress:!1,_error:e&&e.body&&e.body.message?e.body.message:"Unknown error"};"UserNotConfirmed"===t&&(a._error="You need to confirm your email before logging in."),this.setProperties(a),this.$.email.focus()}))}_handleRegister(){this.flashMessage="",this.navigate("/config/cloud/register")}_handleForgotPassword(){this.flashMessage="",this.navigate("/config/cloud/forgot-password")}_dismissFlash(){setTimeout(()=>{this.flashMessage=""},200)}});var v=a(133),w=a(99);const _=["account","google-assistant","alexa"],x=["login","register","forgot-password"];let k=class extends v.a{constructor(){super(...arguments),this.routerOptions={defaultPage:"login",showLoading:!0,initialLoad:()=>this._cloudStatusLoaded,beforeRender:e=>{if(this.cloudStatus.logged_in){if(!_.includes(e))return"account"}else if(!x.includes(e))return"login"},routes:{login:{tag:"cloud-login"},register:{tag:"cloud-register",load:()=>a.e(20).then(a.bind(null,704))},"forgot-password":{tag:"cloud-forgot-password",load:()=>a.e(18).then(a.bind(null,705))},account:{tag:"cloud-account"},"google-assistant":{tag:"cloud-google-assistant",load:()=>a.e(19).then(a.bind(null,744))},alexa:{tag:"cloud-alexa",load:()=>a.e(17).then(a.bind(null,706))}}},this._flashMessage="",this._loginEmail="",this._cloudStatusLoaded=new Promise(e=>{this._resolveCloudStatusLoaded=e})}firstUpdated(e){super.firstUpdated(e),this.addEventListener("cloud-done",e=>{this._flashMessage=e.detail.flashMessage,Object(w.a)(this,"/config/cloud/login")})}updated(e){if(super.updated(e),e.has("cloudStatus")){const t=e.get("cloudStatus");void 0===t?this._resolveCloudStatusLoaded():t.logged_in!==this.cloudStatus.logged_in&&Object(w.a)(this,this.route.prefix,!0)}}createElement(e){const t=super.createElement(e);return t.addEventListener("email-changed",e=>{this._loginEmail=e.detail.value}),t.addEventListener("flash-message-changed",e=>{this._flashMessage=e.detail.value}),t}updatePageEl(e){this.cloudStatus&&!this.cloudStatus.logged_in&&_.includes(this._currentPage)||("setProperties"in e?e.setProperties({hass:this.hass,email:this._loginEmail,isWide:this.isWide,cloudStatus:this.cloudStatus,flashMessage:this._flashMessage}):(e.hass=this.hass,e.email=this._loginEmail,e.isWide=this.isWide,e.narrow=this.narrow,e.cloudStatus=this.cloudStatus,e.flashMessage=this._flashMessage))}};Object(s.b)([Object(n.g)()],k.prototype,"hass",void 0),Object(s.b)([Object(n.g)()],k.prototype,"isWide",void 0),Object(s.b)([Object(n.g)()],k.prototype,"narrow",void 0),Object(s.b)([Object(n.g)()],k.prototype,"route",void 0),Object(s.b)([Object(n.g)()],k.prototype,"cloudStatus",void 0),Object(s.b)([Object(n.g)()],k.prototype,"_flashMessage",void 0),Object(s.b)([Object(n.g)()],k.prototype,"_loginEmail",void 0),k=Object(s.b)([Object(n.d)("ha-config-cloud")],k)}}]);
//# sourceMappingURL=chunk.ce19453cb9624b16eb60.js.map