/*! For license information please see chunk.f0df5fc2f87c4a90b2db.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[80],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(9),o=n(18);const s=Object(a.a)(e=>(class extends e{fire(e,t,n){return n=n||{},Object(o.a)(n.node||this,e,t,n)}}))},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(5);var a=n(55),o=n(35);const s=[a.a,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},143:function(e,t,n){"use strict";n(5),n(45),n(145);var a=n(6),o=n(4),s=n(120);Object(a.a)({_template:o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[s.a]})},145:function(e,t,n){"use strict";n(45),n(68),n(42),n(54);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},175:function(e,t,n){"use strict";var a=n(9);t.a=Object(a.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,n){"use strict";var a,o,s,r,i=n(0),c=n(1),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.d)(t,e),Object.defineProperty(t,"styles",{get:function(){return Object(c.c)(a||(a=Object(i.f)(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "],["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])))},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(c.f)(r||(r=Object(i.f)(["\n      ","\n      <slot></slot>\n    "],["\n      ","\n      <slot></slot>\n    "])),this.header?Object(c.f)(o||(o=Object(i.f)(['\n            <div class="card-header">',"</div>\n          "],['\n            <div class="card-header">',"</div>\n          "])),this.header):Object(c.f)(s||(s=Object(i.f)([""],[""]))))},Object(i.c)([Object(c.g)()],t.prototype,"header",void 0),t}(c.a);customElements.define("ha-card",l)},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=(n(109),customElements.get("iron-icon")),s=!1,r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.d)(t,e),t.prototype.listen=function(t,a,o){e.prototype.listen.call(this,t,a,o),s||"mdi"!==this._iconsetName||(s=!0,n.e(70).then(n.bind(null,215)))},t}(o);customElements.define("ha-icon",r)},181:function(e,t,n){"use strict";n(5),n(45),n(42),n(54);var a=n(6),o=n(4);Object(a.a)({_template:o.a`
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
`,is:"paper-item-body"})},187:function(e,t,n){"use strict";n(5),n(68),n(151);var a=n(6),o=n(4),s=n(126);const r=o.a`
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
`;r.setAttribute("strip-whitespace",""),Object(a.a)({_template:r,is:"paper-spinner",behaviors:[s.a]})},195:function(e,t,n){"use strict";var a=n(4),o=n(30);n(95);customElements.define("ha-config-section",class extends o.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},197:function(e,t,n){"use strict";var a={},o=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,s="[^\\s]+",r=/\[([^]*?)\]/gm,i=function(){};function c(e,t){for(var n=[],a=0,o=e.length;a<o;a++)n.push(e[a].substr(0,t));return n}function l(e){return function(t,n,a){var o=a[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~o&&(t.month=o)}}function d(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],h=c(p,3),g=c(u,3);a.i18n={dayNamesShort:g,dayNames:u,monthNamesShort:h,monthNames:p,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var b={D:function(e){return e.getDate()},DD:function(e){return d(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return d(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return d(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return d(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return d(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return d(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return d(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return d(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return d(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return d(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return d(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+d(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},f={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+s,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var n=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?n-1:n)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",i],ddd:[s,i],MMM:[s,l("monthNamesShort")],MMMM:[s,l("monthNames")],a:[s,function(e,t,n){var a=t.toLowerCase();a===n.amPm[0]?e.isPm=!1:a===n.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var n,a=(t+"").match(/([+-]|\d\d)/gi);a&&(n=60*a[1]+parseInt(a[2],10),e.timezoneOffset="+"===a[0]?n:-n)}]};f.dd=f.d,f.dddd=f.ddd,f.DD=f.D,f.mm=f.m,f.hh=f.H=f.HH=f.h,f.MM=f.M,f.ss=f.s,f.A=f.a,a.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},a.format=function(e,t,n){var s=n||a.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=a.masks[t]||t||a.masks.default;var i=[];return(t=(t=t.replace(r,(function(e,t){return i.push(t),"@@@"}))).replace(o,(function(t){return t in b?b[t](e,s):t.slice(1,t.length-1)}))).replace(/@@@/g,(function(){return i.shift()}))},a.parse=function(e,t,n){var s=n||a.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=a.masks[t]||t,e.length>1e3)return null;var i={},c=[],l=[];t=t.replace(r,(function(e,t){return l.push(t),"@@@"}));var d,u=(d=t,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(o,(function(e){if(f[e]){var t=f[e];return c.push(t[1]),"("+t[0]+")"}return e}));u=u.replace(/@@@/g,(function(){return l.shift()}));var p=e.match(new RegExp(u,"i"));if(!p)return null;for(var h=1;h<p.length;h++)c[h-1](i,p[h],s);var g,b=new Date;return!0===i.isPm&&null!=i.hour&&12!=+i.hour?i.hour=+i.hour+12:!1===i.isPm&&12==+i.hour&&(i.hour=0),null!=i.timezoneOffset?(i.minute=+(i.minute||0)-+i.timezoneOffset,g=new Date(Date.UTC(i.year||b.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0))):g=new Date(i.year||b.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0),g},t.a=a},200:function(e,t,n){"use strict";var a=n(197);t.a=function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleString(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(e){return a.a.format(e,"haDateTime")}},218:function(e,t,n){"use strict";n(85),n(187);var a=n(4),o=n(30);customElements.define("ha-progress-button",class extends o.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(e){var t=this.$.container.classList;t.add(e),setTimeout(()=>{t.remove(e)},1e3)}ready(){super.ready(),this.addEventListener("click",e=>this.buttonTapped(e))}buttonTapped(e){this.progress&&e.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(e,t){return e||t}})},241:function(e,t,n){"use strict";var a=n(0),o=(n(109),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.d)(t,e),t.prototype.connectedCallback=function(){var t=this;e.prototype.connectedCallback.call(this),setTimeout((function(){t.icon="ltr"===window.getComputedStyle(t).direction?"hass:chevron-right":"hass:chevron-left"}),100)},t}(n(179).a));customElements.define("ha-icon-next",o)},250:function(e,t,n){"use strict";var a=n(9),o=n(99);t.a=Object(a.a)(e=>(class extends e{navigate(...e){Object(o.a)(this,...e)}}))},335:function(e,t,n){"use strict";var a=n(1),o=(n(218),n(18));customElements.define("ha-call-api-button",class extends a.a{render(){return a.f`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
        ><slot></slot
      ></ha-progress-button>
    `}constructor(){super(),this.method="POST",this.data={},this.disabled=!1,this.progress=!1}static get properties(){return{hass:{},progress:Boolean,path:String,method:String,data:{},disabled:Boolean}}get progressButton(){return this.renderRoot.querySelector("ha-progress-button")}async _buttonTapped(){this.progress=!0;const e={method:this.method,path:this.path,data:this.data};try{const t=await this.hass.callApi(this.method,this.path,this.data);this.progress=!1,this.progressButton.actionSuccess(),e.success=!0,e.response=t}catch(t){this.progress=!1,this.progressButton.actionError(),e.success=!1,e.response=t}Object(o.a)(this,"hass-api-called",e)}})},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(48),o=function(e,t){return Object(a.a)(e,{message:t.localize("ui.common.successfully_saved")})}},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(e){return e.callWS({type:"cloud/alexa/entities"})},o=function(e){return e.callWS({type:"cloud/alexa/sync"})}},721:function(e,t,n){"use strict";n.r(t);var a,o,s,r,i,c,l,d,u=n(0),p=(n(85),n(181),n(207),n(4)),h=n(30),g=(n(177),n(335),n(152),n(95),n(195),n(1)),b=(n(143),n(187),n(279)),f=n(18),m=function(e){function t(){var t=e.call(this)||this;return t._progress=[],t}return Object(u.d)(t,e),Object.defineProperty(t,"properties",{get:function(){return{hass:{},cloudStatus:{},_cloudHooks:{},_localHooks:{},_progress:{}}},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),this._fetchData()},t.prototype.render=function(){return Object(g.f)(a||(a=Object(u.f)(["\n      ",'\n      <ha-card header="Webhooks">\n        <div class="card-content">\n          Anything that is configured to be triggered by a webhook can be given\n          a publicly accessible URL to allow you to send data back to Home\n          Assistant from anywhere, without exposing your instance to the\n          internet. ','\n\n          <div class="footer">\n            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">\n              Learn more about creating webhook-powered automations.\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    '],["\n      ",'\n      <ha-card header="Webhooks">\n        <div class="card-content">\n          Anything that is configured to be triggered by a webhook can be given\n          a publicly accessible URL to allow you to send data back to Home\n          Assistant from anywhere, without exposing your instance to the\n          internet. ','\n\n          <div class="footer">\n            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">\n              Learn more about creating webhook-powered automations.\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    '])),this.renderStyle(),this._renderBody())},t.prototype.updated=function(t){e.prototype.updated.call(this,t),t.has("cloudStatus")&&this.cloudStatus&&(this._cloudHooks=this.cloudStatus.prefs.cloudhooks||{})},t.prototype._renderBody=function(){var e=this;return this.cloudStatus&&this._localHooks&&this._cloudHooks?0===this._localHooks.length?Object(g.f)(s||(s=Object(u.f)(['\n        <div class="body-text">\n          Looks like you have no webhooks yet. Get started by configuring a\n          <a href="/config/integrations">webhook-based integration</a> or by\n          creating a <a href="/config/automation/new">webhook automation</a>.\n        </div>\n      '],['\n        <div class="body-text">\n          Looks like you have no webhooks yet. Get started by configuring a\n          <a href="/config/integrations">webhook-based integration</a> or by\n          creating a <a href="/config/automation/new">webhook automation</a>.\n        </div>\n      ']))):this._localHooks.map((function(t){return Object(g.f)(l||(l=Object(u.f)(['\n        <div class="webhook" .entry="','">\n          <paper-item-body two-line>\n            <div>\n              ',"\n              ","\n            </div>\n            <div secondary>","</div>\n          </paper-item-body>\n          ","\n        </div>\n      "],['\n        <div class="webhook" .entry="','">\n          <paper-item-body two-line>\n            <div>\n              ',"\n              ","\n            </div>\n            <div secondary>","</div>\n          </paper-item-body>\n          ","\n        </div>\n      "])),t,t.name,t.domain===t.name.toLowerCase()?"":" ("+t.domain+")",t.webhook_id,e._progress.includes(t.webhook_id)?Object(g.f)(r||(r=Object(u.f)(['\n                <div class="progress">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              '],['\n                <div class="progress">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              ']))):e._cloudHooks[t.webhook_id]?Object(g.f)(i||(i=Object(u.f)(['\n                <mwc-button @click="','">\n                  Manage\n                </mwc-button>\n              '],['\n                <mwc-button @click="','">\n                  Manage\n                </mwc-button>\n              '])),e._handleManageButton):Object(g.f)(c||(c=Object(u.f)(['\n                <paper-toggle-button\n                  @click="','"\n                ></paper-toggle-button>\n              '],['\n                <paper-toggle-button\n                  @click="','"\n                ></paper-toggle-button>\n              '])),e._enableWebhook))})):Object(g.f)(o||(o=Object(u.f)(['\n        <div class="body-text">Loading…</div>\n      '],['\n        <div class="body-text">Loading…</div>\n      '])))},t.prototype._showDialog=function(e){var t,a,o=this,s=this._localHooks.find((function(t){return t.webhook_id===e})),r=this._cloudHooks[e];t=this,a={webhook:s,cloudhook:r,disableHook:function(){return o._disableWebhook(e)}},Object(f.a)(t,"show-dialog",{dialogTag:"dialog-manage-cloudhook",dialogImport:function(){return Promise.all([n.e(1),n.e(21)]).then(n.bind(null,707))},dialogParams:a})},t.prototype._handleManageButton=function(e){var t=e.currentTarget.parentElement.entry;this._showDialog(t.webhook_id)},t.prototype._enableWebhook=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t,n,a,o;return Object(u.e)(this,(function(s){switch(s.label){case 0:t=e.currentTarget.parentElement.entry,this._progress=Object(u.h)(this._progress,[t.webhook_id]),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,Object(b.c)(this.hass,t.webhook_id)];case 2:return n=s.sent(),[3,5];case 3:return a=s.sent(),alert(a.message),[2];case 4:return this._progress=this._progress.filter((function(e){return e!==t.webhook_id})),[7];case 5:return this._cloudHooks=Object(u.a)(Object(u.a)({},this._cloudHooks),((o={})[t.webhook_id]=n,o)),0===this._progress.length&&this._showDialog(t.webhook_id),[2]}}))}))},t.prototype._disableWebhook=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t,n,a,o;return Object(u.e)(this,(function(s){switch(s.label){case 0:this._progress=Object(u.h)(this._progress,[e]),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,Object(b.d)(this.hass,e)];case 2:return s.sent(),[3,5];case 3:return t=s.sent(),alert("Failed to disable webhook: "+t.message),[2];case 4:return this._progress=this._progress.filter((function(t){return t!==e})),[7];case 5:return n=this._cloudHooks,n[a=e],o=Object(u.g)(n,["symbol"==typeof a?a:a+""]),this._cloudHooks=o,[2]}}))}))},t.prototype._fetchData=function(){return Object(u.b)(this,void 0,void 0,(function(){var e,t;return Object(u.e)(this,(function(n){switch(n.label){case 0:return e=this,this.hass.config.components.includes("webhook")?[4,(a=this.hass,a.callWS({type:"webhook/list"}))]:[3,2];case 1:return t=n.sent(),[3,3];case 2:t=[],n.label=3;case 3:return e._localHooks=t,[2]}var a}))}))},t.prototype.renderStyle=function(){return Object(g.f)(d||(d=Object(u.f)(["\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    "],["\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    "])))},t}(g.a);customElements.define("cloud-webhooks",m);var v,y,w,x,_=n(200),k=n(118),j=n(175),O=n(465),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._syncing=!1,t}return Object(u.d)(t,e),t.prototype.render=function(){if(!this.cloudStatus)return Object(g.f)(v||(v=Object(u.f)([""],[""])));var e=this.cloudStatus.prefs,t=e.alexa_enabled,n=e.alexa_report_state;return Object(g.f)(w||(w=Object(u.f)(['\n      <ha-card header="Alexa">\n        <paper-toggle-button\n          .checked=',"\n          @change=",'\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Alexa integration for ioBroker Cloud you\'ll be able to\n          control all your ioBroker devices via any Alexa-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"\n                target="_blank"\n              >\n                Enable the ioBroker skill for Alexa\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/amazon_alexa/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires an Alexa-enabled device like the Amazon\n            Echo.</em\n          >\n          ','\n        </div>\n        <div class="card-actions">\n          <mwc-button @click='," .disabled=",'>\n            Sync Entities\n          </mwc-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/alexa">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    '],['\n      <ha-card header="Alexa">\n        <paper-toggle-button\n          .checked=',"\n          @change=",'\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Alexa integration for ioBroker Cloud you\'ll be able to\n          control all your ioBroker devices via any Alexa-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"\n                target="_blank"\n              >\n                Enable the ioBroker skill for Alexa\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/amazon_alexa/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires an Alexa-enabled device like the Amazon\n            Echo.</em\n          >\n          ','\n        </div>\n        <div class="card-actions">\n          <mwc-button @click='," .disabled=",'>\n            Sync Entities\n          </mwc-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/alexa">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    '])),t,this._enabledToggleChanged,t?Object(g.f)(y||(y=Object(u.f)(["\n                <h3>Enable State Reporting</h3>\n                <p>\n                  If you enable state reporting, ioBroker will send\n                  <b>all</b> state changes of exposed entities to Amazon. This\n                  allows you to always see the latest states in the Alexa app\n                  and use the state changes to create routines.\n                </p>\n                <paper-toggle-button\n                  .checked=","\n                  @change=","\n                ></paper-toggle-button>\n              "],["\n                <h3>Enable State Reporting</h3>\n                <p>\n                  If you enable state reporting, ioBroker will send\n                  <b>all</b> state changes of exposed entities to Amazon. This\n                  allows you to always see the latest states in the Alexa app\n                  and use the state changes to create routines.\n                </p>\n                <paper-toggle-button\n                  .checked=","\n                  @change=","\n                ></paper-toggle-button>\n              "])),n,this._reportToggleChanged):"",this._handleSync,this._syncing)},t.prototype._handleSync=function(){return Object(u.b)(this,void 0,void 0,(function(){var e;return Object(u.e)(this,(function(t){switch(t.label){case 0:this._syncing=!0,t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,Object(O.b)(this.hass)];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),alert("Failed to sync entities: "+e.body.message),[3,5];case 4:return this._syncing=!1,[7];case 5:return[2]}}))}))},t.prototype._enabledToggleChanged=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t;return Object(u.e)(this,(function(n){switch(n.label){case 0:t=e.target,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Object(b.j)(this.hass,{alexa_enabled:t.checked})];case 2:return n.sent(),Object(f.a)(this,"ha-refresh-cloud-status"),[3,4];case 3:return n.sent(),t.checked=!t.checked,[3,4];case 4:return[2]}}))}))},t.prototype._reportToggleChanged=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t,n;return Object(u.e)(this,(function(a){switch(a.label){case 0:t=e.target,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(b.j)(this.hass,{alexa_report_state:t.checked})];case 2:return a.sent(),Object(f.a)(this,"ha-refresh-cloud-status"),[3,4];case 3:return n=a.sent(),alert("Unable to "+(t.checked?"enable":"disable")+" report state. "+n.message),t.checked=!t.checked,[3,4];case 4:return[2]}}))}))},Object.defineProperty(t,"styles",{get:function(){return Object(g.c)(x||(x=Object(u.f)(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      h3 {\n        margin-bottom: 0;\n      }\n      h3 + p {\n        margin-top: 0.5em;\n      }\n    "],["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      h3 {\n        margin-bottom: 0;\n      }\n      h3 + p {\n        margin-top: 0.5em;\n      }\n    "])))},enumerable:!0,configurable:!0}),Object(u.c)([Object(g.g)()],t.prototype,"hass",void 0),Object(u.c)([Object(g.g)()],t.prototype,"cloudStatus",void 0),Object(u.c)([Object(g.g)()],t.prototype,"_syncing",void 0),t}(g.a);customElements.define("cloud-alexa-pref",S);var A,M,C,H,D=n(411),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(u.d)(t,e),Object.defineProperty(t,"properties",{get:function(){return{hass:{},cloudStatus:{}}},enumerable:!0,configurable:!0}),t.prototype.render=function(){if(!this.cloudStatus)return Object(g.f)(A||(A=Object(u.f)([""],[""])));var e=this.cloudStatus.prefs,t=e.google_enabled,n=e.google_secure_devices_pin;return Object(g.f)(C||(C=Object(u.f)(['\n      <ha-card header="Google Assistant">\n        <paper-toggle-button\n          id="google_enabled"\n          .checked="','"\n          @change="','"\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Google Assistant integration for ioBroker Cloud you\'ll\n          be able to control all your ioBroker devices via any Google\n          Assistant-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"\n                target="_blank"\n              >\n                Activate the ioBroker skill for Google Assistant\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/google_assistant/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires a Google Assistant-enabled device like\n            the Google Home or Android phone.</em\n          >\n          ','\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button\n            .hass="','"\n            .disabled="','"\n            path="cloud/google_actions/sync"\n          >\n            Sync entities to Google\n          </ha-call-api-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/google-assistant">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    '],['\n      <ha-card header="Google Assistant">\n        <paper-toggle-button\n          id="google_enabled"\n          .checked="','"\n          @change="','"\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Google Assistant integration for ioBroker Cloud you\'ll\n          be able to control all your ioBroker devices via any Google\n          Assistant-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"\n                target="_blank"\n              >\n                Activate the ioBroker skill for Google Assistant\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/google_assistant/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires a Google Assistant-enabled device like\n            the Google Home or Android phone.</em\n          >\n          ','\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button\n            .hass="','"\n            .disabled="','"\n            path="cloud/google_actions/sync"\n          >\n            Sync entities to Google\n          </ha-call-api-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/google-assistant">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    '])),t,this._toggleChanged,t?Object(g.f)(M||(M=Object(u.f)(['\n                <div class="secure_devices">\n                  Please enter a pin to interact with security devices. Security\n                  devices are doors, garage doors and locks. You will be asked\n                  to say/enter this pin when interacting with such devices via\n                  Google Assistant.\n                  <paper-input\n                    label="Secure Devices Pin"\n                    id="google_secure_devices_pin"\n                    placeholder="Enter a PIN to use secure devices"\n                    .value=','\n                    @change="','"\n                  ></paper-input>\n                </div>\n              '],['\n                <div class="secure_devices">\n                  Please enter a pin to interact with security devices. Security\n                  devices are doors, garage doors and locks. You will be asked\n                  to say/enter this pin when interacting with such devices via\n                  Google Assistant.\n                  <paper-input\n                    label="Secure Devices Pin"\n                    id="google_secure_devices_pin"\n                    placeholder="Enter a PIN to use secure devices"\n                    .value=','\n                    @change="','"\n                  ></paper-input>\n                </div>\n              '])),n||"",this._pinChanged):"",this.hass,!t)},t.prototype._toggleChanged=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t,n;return Object(u.e)(this,(function(a){switch(a.label){case 0:t=e.target,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(b.j)(this.hass,(n={},n[t.id]=t.checked,n))];case 2:return a.sent(),Object(f.a)(this,"ha-refresh-cloud-status"),[3,4];case 3:return a.sent(),t.checked=!t.checked,[3,4];case 4:return[2]}}))}))},t.prototype._pinChanged=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t,n,a;return Object(u.e)(this,(function(o){switch(o.label){case 0:t=e.target,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(b.j)(this.hass,(a={},a[t.id]=t.value||null,a))];case 2:return o.sent(),Object(D.a)(this,this.hass),Object(f.a)(this,"ha-refresh-cloud-status"),[3,4];case 3:return n=o.sent(),alert("Unable to store pin: "+n.message),t.value=this.cloudStatus.prefs.google_secure_devices_pin,[3,4];case 4:return[2]}}))}))},Object.defineProperty(t,"styles",{get:function(){return Object(g.c)(H||(H=Object(u.f)(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 16px;\n      }\n      paper-input {\n        width: 250px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "],["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 16px;\n      }\n      paper-input {\n        width: 250px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "])))},enumerable:!0,configurable:!0}),t}(g.a);customElements.define("cloud-google-pref",E);var P,Y,T,L,W;!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(u.d)(t,e),Object.defineProperty(t,"properties",{get:function(){return{hass:{},cloudStatus:{}}},enumerable:!0,configurable:!0}),t.prototype.render=function(){if(!this.cloudStatus)return Object(g.f)(P||(P=Object(u.f)([""],[""])));var e=this.cloudStatus,t=e.remote_connected,n=e.remote_domain,a=e.remote_certificate;return a?Object(g.f)(L||(L=Object(u.f)(['\n      <ha-card header="Remote Control">\n        <paper-toggle-button\n          .checked="','"\n          @change="','"\n        ></paper-toggle-button>\n        <div class="card-content">\n          ioBroker Cloud provides a secure remote connection to your\n          instance while away from home. Your instance\n          ',' available at\n          <a href="https://','" target="_blank">\n            https://','</a\n          >.\n        </div>\n        <div class="card-actions">\n          <a href="https://www.nabucasa.com/config/remote/" target="_blank">\n            <mwc-button>Learn how it works</mwc-button>\n          </a>\n          ',"\n        </div>\n      </ha-card>\n    "],['\n      <ha-card header="Remote Control">\n        <paper-toggle-button\n          .checked="','"\n          @change="','"\n        ></paper-toggle-button>\n        <div class="card-content">\n          ioBroker Cloud provides a secure remote connection to your\n          instance while away from home. Your instance\n          ',' available at\n          <a href="https://','" target="_blank">\n            https://','</a\n          >.\n        </div>\n        <div class="card-actions">\n          <a href="https://www.nabucasa.com/config/remote/" target="_blank">\n            <mwc-button>Learn how it works</mwc-button>\n          </a>\n          ',"\n        </div>\n      </ha-card>\n    "])),t,this._toggleChanged,t?"is":"will be",n,n,a?Object(g.f)(T||(T=Object(u.f)(['\n                <div class="spacer"></div>\n                <mwc-button @click=',">\n                  Certificate Info\n                </mwc-button>\n              "],['\n                <div class="spacer"></div>\n                <mwc-button @click=',">\n                  Certificate Info\n                </mwc-button>\n              "])),this._openCertInfo):""):Object(g.f)(Y||(Y=Object(u.f)(['\n        <ha-card header="Remote Control">\n          <div class="preparing">\n            Remote access is being prepared. We will notify you when it\'s ready.\n          </div>\n        </ha-card>\n      '],['\n        <ha-card header="Remote Control">\n          <div class="preparing">\n            Remote access is being prepared. We will notify you when it\'s ready.\n          </div>\n        </ha-card>\n      '])))},t.prototype._openCertInfo=function(){var e,t;e=this,t={certificateInfo:this.cloudStatus.remote_certificate},Object(f.a)(e,"show-dialog",{dialogTag:"dialog-cloud-certificate",dialogImport:function(){return Promise.all([n.e(1),n.e(28)]).then(n.bind(null,708))},dialogParams:t})},t.prototype._toggleChanged=function(e){return Object(u.b)(this,void 0,void 0,(function(){var t,n;return Object(u.e)(this,(function(a){switch(a.label){case 0:t=e.target,a.label=1;case 1:return a.trys.push([1,6,,7]),t.checked?[4,Object(b.b)(this.hass)]:[3,3];case 2:return a.sent(),[3,5];case 3:return[4,Object(b.e)(this.hass)];case 4:a.sent(),a.label=5;case 5:return Object(f.a)(this,"ha-refresh-cloud-status"),[3,7];case 6:return n=a.sent(),alert(n.message),t.checked=!t.checked,[3,7];case 7:return[2]}}))}))},Object.defineProperty(t,"styles",{get:function(){return Object(g.c)(W||(W=Object(u.f)(["\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "],["\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "])))},enumerable:!0,configurable:!0}),t=Object(u.c)([Object(g.d)("cloud-remote-pref")],t)}(g.a);customElements.define("cloud-account",class extends(Object(k.a)(Object(j.a)(h.a))){static get template(){return p.a`
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
    `}static get properties(){return{hass:Object,isWide:Boolean,cloudStatus:Object,_subscription:{type:Object,value:null}}}ready(){super.ready(),this._fetchSubscriptionInfo()}_computeRemoteConnected(e){return e?"Connected":"Not Connected"}async _fetchSubscriptionInfo(){this._subscription=await Object(b.g)(this.hass),this._subscription.provider&&this.cloudStatus&&"connected"!==this.cloudStatus.cloud&&this.fire("ha-refresh-cloud-status")}handleLogout(){this.hass.callApi("post","cloud/logout").then(()=>this.fire("ha-refresh-cloud-status"))}_formatSubscription(e){if(null===e)return"Fetching subscription…";let t=e.human_description;return e.plan_renewal_date&&(t=t.replace("{periodEnd}",Object(_.a)(new Date(1e3*e.plan_renewal_date),this.hass.language))),t}});n(108),n(93),n(110),n(218);var I=n(250);n(241);customElements.define("cloud-login",class extends(Object(I.a)(Object(k.a)(h.a))){static get template(){return p.a`
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
    `}static get properties(){return{hass:Object,isWide:Boolean,email:{type:String,notify:!0},_password:{type:String,value:""},_requestInProgress:{type:Boolean,value:!1},flashMessage:{type:String,notify:!0},_error:String}}static get observers(){return["_inputChanged(email, _password)"]}connectedCallback(){super.connectedCallback(),this.flashMessage&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.$.flashRipple.simulatedRipple()))}_inputChanged(){this.$.email.invalid=!1,this.$.password.invalid=!1,this._error=!1}_keyDown(e){13===e.keyCode&&(this._handleLogin(),e.preventDefault())}_handleLogin(){let e=!1;this.email&&this.email.includes("@")||(this.$.email.invalid=!0,this.$.email.focus(),e=!0),this._password.length<8&&(this.$.password.invalid=!0,e||(e=!0,this.$.password.focus())),e||(this._requestInProgress=!0,this.hass.callApi("post","cloud/login",{email:this.email,password:this._password}).then(()=>{this.fire("ha-refresh-cloud-status"),this.setProperties({email:"",_password:""})},e=>{this._password="";const t=e&&e.body&&e.body.code;if("PasswordChangeRequired"===t)return alert("You need to change your password before logging in."),void this.navigate("/config/cloud/forgot-password");const n={_requestInProgress:!1,_error:e&&e.body&&e.body.message?e.body.message:"Unknown error"};"UserNotConfirmed"===t&&(n._error="You need to confirm your email before logging in."),this.setProperties(n),this.$.email.focus()}))}_handleRegister(){this.flashMessage="",this.navigate("/config/cloud/register")}_handleForgotPassword(){this.flashMessage="",this.navigate("/config/cloud/forgot-password")}_dismissFlash(){setTimeout(()=>{this.flashMessage=""},200)}});var z=n(133),N=n(99),R=["account","google-assistant","alexa"],B=["login","register","forgot-password"];!function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.routerOptions={defaultPage:"login",showLoading:!0,initialLoad:function(){return t._cloudStatusLoaded},beforeRender:function(e){if(t.cloudStatus.logged_in){if(!R.includes(e))return"account"}else if(!B.includes(e))return"login"},routes:{login:{tag:"cloud-login"},register:{tag:"cloud-register",load:function(){return n.e(20).then(n.bind(null,704))}},"forgot-password":{tag:"cloud-forgot-password",load:function(){return n.e(18).then(n.bind(null,705))}},account:{tag:"cloud-account"},"google-assistant":{tag:"cloud-google-assistant",load:function(){return n.e(19).then(n.bind(null,743))}},alexa:{tag:"cloud-alexa",load:function(){return n.e(17).then(n.bind(null,706))}}}},t._flashMessage="",t._loginEmail="",t._cloudStatusLoaded=new Promise((function(e){t._resolveCloudStatusLoaded=e})),t}Object(u.d)(t,e),t.prototype.firstUpdated=function(t){var n=this;e.prototype.firstUpdated.call(this,t),this.addEventListener("cloud-done",(function(e){n._flashMessage=e.detail.flashMessage,Object(N.a)(n,"/config/cloud/login")}))},t.prototype.updated=function(t){if(e.prototype.updated.call(this,t),t.has("cloudStatus")){var n=t.get("cloudStatus");void 0===n?this._resolveCloudStatusLoaded():n.logged_in!==this.cloudStatus.logged_in&&Object(N.a)(this,this.route.prefix,!0)}},t.prototype.createElement=function(t){var n=this,a=e.prototype.createElement.call(this,t);return a.addEventListener("email-changed",(function(e){n._loginEmail=e.detail.value})),a.addEventListener("flash-message-changed",(function(e){n._flashMessage=e.detail.value})),a},t.prototype.updatePageEl=function(e){this.cloudStatus&&!this.cloudStatus.logged_in&&R.includes(this._currentPage)||("setProperties"in e?e.setProperties({hass:this.hass,email:this._loginEmail,isWide:this.isWide,cloudStatus:this.cloudStatus,flashMessage:this._flashMessage}):(e.hass=this.hass,e.email=this._loginEmail,e.isWide=this.isWide,e.narrow=this.narrow,e.cloudStatus=this.cloudStatus,e.flashMessage=this._flashMessage))},Object(u.c)([Object(g.g)()],t.prototype,"hass",void 0),Object(u.c)([Object(g.g)()],t.prototype,"isWide",void 0),Object(u.c)([Object(g.g)()],t.prototype,"narrow",void 0),Object(u.c)([Object(g.g)()],t.prototype,"route",void 0),Object(u.c)([Object(g.g)()],t.prototype,"cloudStatus",void 0),Object(u.c)([Object(g.g)()],t.prototype,"_flashMessage",void 0),Object(u.c)([Object(g.g)()],t.prototype,"_loginEmail",void 0),t=Object(u.c)([Object(g.d)("ha-config-cloud")],t)}(z.a)}}]);
//# sourceMappingURL=chunk.f0df5fc2f87c4a90b2db.js.map