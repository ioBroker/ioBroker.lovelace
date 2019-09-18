/*! For license information please see chunk.e469a93c0d761bec8199.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[83],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(5);var o=a(55),i=a(35);const n=[o.a,i.a,{hostAttributes:{role:"option",tabindex:"0"}}]},143:function(e,t,a){"use strict";a(5),a(45),a(145);var o=a(6),i=a(3),n=a(120);Object(o.a)({_template:i.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[n.a]})},145:function(e,t,a){"use strict";a(45),a(68),a(42),a(54);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(o.content)},175:function(e,t,a){"use strict";var o=a(9);t.a=Object(o.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,a){"use strict";var o=a(4),i=a(0);class n extends i.a{static get styles(){return i.c`
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
    `}render(){return i.f`
      ${this.header?i.f`
            <div class="card-header">${this.header}</div>
          `:i.f``}
      <slot></slot>
    `}}Object(o.b)([Object(i.g)()],n.prototype,"header",void 0),customElements.define("ha-card",n)},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(109);const o=customElements.get("iron-icon");let i=!1;class n extends o{listen(e,t,o){super.listen(e,t,o),i||"mdi"!==this._iconsetName||(i=!0,a.e(70).then(a.bind(null,216)))}}customElements.define("ha-icon",n)},181:function(e,t,a){"use strict";a(5),a(45),a(42),a(54);var o=a(6),i=a(3);Object(o.a)({_template:i.a`
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
`,is:"paper-item-body"})},195:function(e,t,a){"use strict";var o=a(3),i=a(30);a(95);customElements.define("ha-config-section",class extends i.a{static get template(){return o.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},206:function(e,t,a){"use strict";a(5),a(45);var o=a(6),i=a(1),n=a(3),r=a(128);Object(o.a)({_template:n.a`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[r.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(i.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),a=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=a+"px"}.bind(this));var a=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(a.marginTop=t+"px",a.paddingTop=""):(a.paddingTop=t+"px",a.marginTop="")}}})},241:function(e,t,a){"use strict";a(109);var o=a(179);customElements.define("ha-icon-next",class extends o.a{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left"},100)}})},250:function(e,t,a){"use strict";var o=a(9),i=a(99);t.a=Object(o.a)(e=>(class extends e{navigate(...e){Object(i.a)(this,...e)}}))},749:function(e,t,a){"use strict";a.r(t);a(206),a(220),a(150),a(109),a(181),a(143);var o=a(3),i=a(30),n=(a(177),a(129),a(241),a(195),a(4)),r=a(221),s=a(0);const l=[{page:"core",core:!0},{page:"server_control",core:!0},{page:"person"},{page:"entity_registry",core:!0},{page:"area_registry",core:!0},{page:"automation"},{page:"script"},{page:"zha"},{page:"zwave"},{page:"customize",core:!0,advanced:!0}];let p=class extends s.a{render(){return s.f`
      <ha-card>
        ${l.map(({page:e,core:t,advanced:a})=>!t&&!Object(r.a)(this.hass,e)||a&&!this.showAdvanced?"":s.f`
                <a href=${`/config/${e}`}>
                  <paper-item>
                    <paper-item-body two-line="">
                      ${this.hass.localize(`ui.panel.config.${e}.caption`)}
                      <div secondary>
                        ${this.hass.localize(`ui.panel.config.${e}.description`)}
                      </div>
                    </paper-item-body>
                    <ha-icon-next></ha-icon-next>
                  </paper-item>
                </a>
              `)}
      </ha-card>
    `}static get styles(){return s.c`
      a {
        text-decoration: none;
        color: var(--primary-text-color);
      }
    `}};Object(n.b)([Object(s.g)()],p.prototype,"hass",void 0),Object(n.b)([Object(s.g)()],p.prototype,"showAdvanced",void 0),p=Object(n.b)([Object(s.d)("ha-config-navigation")],p);var c=a(175),d=a(250);customElements.define("ha-config-dashboard",class extends(Object(d.a)(Object(c.a)(i.a))){static get template(){return o.a`
    <style include="iron-flex ha-style">
      ha-card {
        overflow: hidden;
      }
      .content {
        padding-bottom: 32px;
      }
      ha-card a {
        text-decoration: none;
        color: var(--primary-text-color);
      }
      .promo-advanced {
        text-align: center;
        color: var(--secondary-text-color);
      }
      .promo-advanced a {
        color: var(--secondary-text-color);
      }
    </style>

    <app-header-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <ha-menu-button hass='[[hass]]' narrow='[[narrow]]'></ha-menu-button>
          <div main-title="">[[localize('panel.config')]]</div>
        </app-toolbar>
      </app-header>

      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">[[localize('ui.panel.config.header')]]</span>
          <span slot="introduction">[[localize('ui.panel.config.introduction')]]</span>

          <template is="dom-if" if="[[computeIsLoaded(hass, 'cloud')]]">
            <ha-card>
              <a href='/config/cloud' tabindex="-1">
                <paper-item>
                  <paper-item-body two-line="">
                    [[localize('ui.panel.config.cloud.caption')]]
                    <template is="dom-if" if="[[cloudStatus.logged_in]]">
                      <div secondary="">
                        [[localize('ui.panel.config.cloud.description_login', 'email', cloudStatus.email)]]
                      </div>
                    </template>
                    <template is="dom-if" if="[[!cloudStatus.logged_in]]">
                      <div secondary="">
                        [[localize('ui.panel.config.cloud.description_features')]]
                      </div>
                    </template>
                  </paper-item-body>
                  <ha-icon-next></ha-icon-next>
                </paper-item>
              </ha-card>
            </a>
          </template>

          <ha-card>
            <a href='/config/integrations/dashboard' tabindex="-1">
              <paper-item>
                <paper-item-body two-line>
                  [[localize('ui.panel.config.integrations.caption')]]
                  <div secondary>
                    [[localize('ui.panel.config.integrations.description')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
            <a href='/config/devices/dashboard' tabindex="-1">
              <paper-item>
                <paper-item-body two-line>
                  [[localize('ui.panel.config.devices.caption')]]
                  <div secondary>
                    [[localize('ui.panel.config.devices.description')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>

            <a href='/config/users' tabindex="-1">
              <paper-item>
                <paper-item-body two-line>
                  [[localize('ui.panel.config.users.caption')]]
                  <div secondary>
                    [[localize('ui.panel.config.users.description')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </ha-card>

          <ha-config-navigation
            hass="[[hass]]"
            show-advanced="[[showAdvanced]]"
          ></ha-config-navigation>

          <template is='dom-if' if='[[!showAdvanced]]'>
            <div class='promo-advanced'>
              Missing config options? Enable advanced mode on <a href="/profile">your profile page.</a>
            </div>
          </template>
        </ha-config-section>
      </div>
    </app-header-layout>
`}static get properties(){return{hass:Object,narrow:Boolean,isWide:Boolean,cloudStatus:Object,showAdvanced:Boolean}}computeIsLoaded(e,t){return Object(r.a)(e,t)}})}}]);
//# sourceMappingURL=chunk.e469a93c0d761bec8199.js.map