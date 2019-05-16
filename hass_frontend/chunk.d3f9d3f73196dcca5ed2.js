(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{187:function(e,t,a){"use strict";var i=a(3),o=a(21);a(88);customElements.define("ha-config-section",class extends o.a{static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},207:function(e,t,a){"use strict";var i=a(3),o=a(21),s=(a(218),a(73));customElements.define("ha-call-service-button",class extends(Object(s.a)(o.a)){static get template(){return i.a`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}}}}buttonTapped(){this.progress=!0;var e=this,t={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then(function(){e.progress=!1,e.$.progress.actionSuccess(),t.success=!0},function(){e.progress=!1,e.$.progress.actionError(),t.success=!1}).then(function(){e.fire("hass-service-called",t)})}})},218:function(e,t,a){"use strict";a(77),a(176);var i=a(3),o=a(21);customElements.define("ha-progress-button",class extends o.a{static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(e){var t=this.$.container.classList;t.add(e),setTimeout(()=>{t.remove(e)},1e3)}ready(){super.ready(),this.addEventListener("click",e=>this.buttonTapped(e))}buttonTapped(e){this.progress&&e.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(e,t){return e||t}})},652:function(e,t,a){"use strict";a.r(t);a(201),a(140),a(100);var i=a(3),o=a(21),s=(a(145),a(88),a(77),a(167),a(86),a(207),a(187),a(211)),n=a(110);customElements.define("ha-config-section-core",class extends(Object(n.a)(o.a)){static get template(){return i.a`
      <style include="iron-flex ha-style">
        .validate-container {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 140px;
        }

        .validate-result {
          color: var(--google-green-500);
          font-weight: 500;
          margin-bottom: 1em;
        }

        .config-invalid {
          margin: 1em 0;
        }

        .config-invalid .text {
          color: var(--google-red-500);
          font-weight: 500;
        }

        .config-invalid mwc-button {
          float: right;
        }

        .validate-log {
          white-space: pre-wrap;
          direction: ltr;
        }
      </style>
      <ha-config-section is-wide="[[isWide]]">
        <span slot="header"
          >[[localize('ui.panel.config.core.section.core.header')]]</span
        >
        <span slot="introduction"
          >[[localize('ui.panel.config.core.section.core.introduction')]]</span
        >

        <paper-card
          heading="[[localize('ui.panel.config.core.section.core.validation.heading')]]"
        >
          <div class="card-content">
            [[localize('ui.panel.config.core.section.core.validation.introduction')]]
            <template is="dom-if" if="[[!validateLog]]">
              <div class="validate-container">
                <template is="dom-if" if="[[!validating]]">
                  <template is="dom-if" if="[[isValid]]">
                    <div class="validate-result" id="result">
                      [[localize('ui.panel.config.core.section.core.validation.valid')]]
                    </div>
                  </template>
                  <mwc-button raised="" on-click="validateConfig">
                    [[localize('ui.panel.config.core.section.core.validation.check_config')]]
                  </mwc-button>
                </template>
                <template is="dom-if" if="[[validating]]">
                  <paper-spinner active=""></paper-spinner>
                </template>
              </div>
            </template>
            <template is="dom-if" if="[[validateLog]]">
              <div class="config-invalid">
                <span class="text">
                  [[localize('ui.panel.config.core.section.core.validation.invalid')]]
                </span>
                <mwc-button raised="" on-click="validateConfig">
                  [[localize('ui.panel.config.core.section.core.validation.check_config')]]
                </mwc-button>
              </div>
              <div id="configLog" class="validate-log">[[validateLog]]</div>
            </template>
          </div>
        </paper-card>

        <paper-card
          heading="[[localize('ui.panel.config.core.section.core.reloading.heading')]]"
        >
          <div class="card-content">
            [[localize('ui.panel.config.core.section.core.reloading.introduction')]]
          </div>
          <div class="card-actions">
            <ha-call-service-button
              hass="[[hass]]"
              domain="homeassistant"
              service="reload_core_config"
              >[[localize('ui.panel.config.core.section.core.reloading.core')]]
            </ha-call-service-button>
            <ha-call-service-button
              hass="[[hass]]"
              domain="group"
              service="reload"
              hidden$="[[!groupLoaded(hass)]]"
              >[[localize('ui.panel.config.core.section.core.reloading.group')]]
            </ha-call-service-button>
            <ha-call-service-button
              hass="[[hass]]"
              domain="automation"
              service="reload"
              hidden$="[[!automationLoaded(hass)]]"
              >[[localize('ui.panel.config.core.section.core.reloading.automation')]]
            </ha-call-service-button>
            <ha-call-service-button
              hass="[[hass]]"
              domain="script"
              service="reload"
              hidden$="[[!scriptLoaded(hass)]]"
              >[[localize('ui.panel.config.core.section.core.reloading.script')]]
            </ha-call-service-button>
          </div>
        </paper-card>

        <paper-card
          heading="[[localize('ui.panel.config.core.section.core.server_management.heading')]]"
        >
          <div class="card-content">
            [[localize('ui.panel.config.core.section.core.server_management.introduction')]]
          </div>
          <div class="card-actions warning">
            <ha-call-service-button
              class="warning"
              hass="[[hass]]"
              domain="homeassistant"
              service="restart"
              >[[localize('ui.panel.config.core.section.core.server_management.restart')]]
            </ha-call-service-button>
            <ha-call-service-button
              class="warning"
              hass="[[hass]]"
              domain="homeassistant"
              service="stop"
              >[[localize('ui.panel.config.core.section.core.server_management.stop')]]
            </ha-call-service-button>
          </div>
        </paper-card>
      </ha-config-section>
    `}static get properties(){return{hass:{type:Object},isWide:{type:Boolean,value:!1},validating:{type:Boolean,value:!1},isValid:{type:Boolean,value:null},validateLog:{type:String,value:""}}}groupLoaded(e){return Object(s.a)(e,"group")}automationLoaded(e){return Object(s.a)(e,"automation")}scriptLoaded(e){return Object(s.a)(e,"script")}validateConfig(){this.validating=!0,this.validateLog="",this.isValid=null,this.hass.callApi("POST","config/core/check_config").then(e=>{this.validating=!1,this.isValid="valid"===e.result,this.isValid||(this.validateLog=e.errors)})}});customElements.define("ha-config-core",class extends(Object(n.a)(o.a)){static get template(){return i.a`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 32px;
        }

        .border {
          margin: 32px auto 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          max-width: 1040px;
        }

        .narrow .border {
          max-width: 640px;
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.core.caption')]]">
        <div class$="[[computeClasses(isWide)]]">
          <ha-config-section-core
            is-wide="[[isWide]]"
            hass="[[hass]]"
          ></ha-config-section-core>
        </div>
      </hass-subpage>
    `}static get properties(){return{hass:Object,isWide:Boolean}}computeClasses(e){return e?"content":"content narrow"}})}}]);