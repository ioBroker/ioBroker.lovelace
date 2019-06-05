(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{193:function(e,t,a){"use strict";var s=a(189);t.a=function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()?(e,t)=>e.toLocaleString(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):e=>s.a.format(e,"haDateTime")},663:function(e,t,a){"use strict";a.r(t);a(181),a(201),a(140),a(77),a(167),a(204),a(173),a(135),a(234),a(263);var s=a(3),i=a(21),n=(a(117),a(88),a(193)),r=a(110),o=a(73);let l=!1;customElements.define("ha-panel-mailbox",class extends(Object(o.a)(Object(r.a)(i.a))){static get template(){return s.a`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        paper-card {
          display: block;
        }

        paper-item {
          cursor: pointer;
        }

        .empty {
          text-align: center;
          color: var(--secondary-text-color);
        }

        .header {
          @apply --paper-font-title;
        }

        .row {
          display: flex;
          justify-content: space-between;
        }

        @media all and (max-width: 450px) {
          .content {
            width: auto;
            padding: 0;
          }
        }

        .tip {
          color: var(--secondary-text-color);
          font-size: 14px;
        }
        .date {
          color: var(--primary-text-color);
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button></ha-menu-button>
            <div main-title>[[localize('panel.mailbox')]]</div>
          </app-toolbar>
          <div sticky hidden$="[[areTabsHidden(platforms)]]">
            <paper-tabs
              scrollable
              selected="[[_currentPlatform]]"
              on-iron-activate="handlePlatformSelected"
            >
              <template is="dom-repeat" items="[[platforms]]">
                <paper-tab data-entity="[[item]]">
                  [[getPlatformName(item)]]
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>
        <div class="content">
          <paper-card>
            <template is="dom-if" if="[[!_messages.length]]">
              <div class="card-content empty">
                [[localize('ui.panel.mailbox.empty')]]
              </div>
            </template>
            <template is="dom-repeat" items="[[_messages]]">
              <paper-item on-click="openMP3Dialog">
                <paper-item-body style="width:100%" two-line>
                  <div class="row">
                    <div>[[item.caller]]</div>
                    <div class="tip">
                      [[localize('ui.duration.second', 'count', item.duration)]]
                    </div>
                  </div>
                  <div secondary>
                    <span class="date">[[item.timestamp]]</span> -
                    [[item.message]]
                  </div>
                </paper-item-body>
              </paper-item>
            </template>
          </paper-card>
        </div>
      </app-header-layout>
    `}static get properties(){return{hass:{type:Object},platforms:{type:Array},_messages:{type:Array},_currentPlatform:{type:Number,value:0}}}connectedCallback(){super.connectedCallback(),l||(l=!0,this.fire("register-dialog",{dialogShowEvent:"show-audio-message-dialog",dialogTag:"ha-dialog-show-audio-message",dialogImport:()=>Promise.all([a.e(1),a.e(26)]).then(a.bind(null,636))})),this.hassChanged=this.hassChanged.bind(this),this.hass.connection.subscribeEvents(this.hassChanged,"mailbox_updated").then(function(e){this._unsubEvents=e}.bind(this)),this.computePlatforms().then(function(e){this.platforms=e,this.hassChanged()}.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents()}hassChanged(){this._messages||(this._messages=[]),this.getMessages().then(function(e){this._messages=e}.bind(this))}openMP3Dialog(e){this.fire("show-audio-message-dialog",{hass:this.hass,message:e.model.item})}getMessages(){const e=this.platforms[this._currentPlatform];return this.hass.callApi("GET",`mailbox/messages/${e.name}`).then(t=>{const a=[],s=t.length;for(let i=0;i<s;i++){const s=Object(n.a)(new Date(1e3*t[i].info.origtime),this.hass.language);a.push({timestamp:s,caller:t[i].info.callerid,message:t[i].text,sha:t[i].sha,duration:t[i].info.duration,platform:e})}return a.sort(function(e,t){return new Date(t.timestamp)-new Date(e.timestamp)})})}computePlatforms(){return this.hass.callApi("GET","mailbox/platforms")}handlePlatformSelected(e){const t=e.detail.selected;t!==this._currentPlatform&&(this._currentPlatform=t,this.hassChanged())}areTabsHidden(e){return!e||e.length<2}getPlatformName(e){const t=`mailbox.${e.name}`;return this.hass.states[t.toLowerCase()].attributes.friendly_name}})}}]);