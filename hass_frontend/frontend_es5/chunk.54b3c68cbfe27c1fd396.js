/*! For license information please see chunk.54b3c68cbfe27c1fd396.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[83],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(5);var a=n(55),o=n(35);const i=[a.a,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},143:function(e,t,n){"use strict";n(5),n(45),n(145);var a=n(6),o=n(4),i=n(120);Object(a.a)({_template:o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[i.a]})},145:function(e,t,n){"use strict";n(45),n(68),n(42),n(54);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},175:function(e,t,n){"use strict";var a=n(9);t.a=Object(a.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,n){"use strict";var a,o,i,r,s=n(0),p=n(1),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s.d)(t,e),Object.defineProperty(t,"styles",{get:function(){return Object(p.c)(a||(a=Object(s.f)(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "],["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])))},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(p.f)(r||(r=Object(s.f)(["\n      ","\n      <slot></slot>\n    "],["\n      ","\n      <slot></slot>\n    "])),this.header?Object(p.f)(o||(o=Object(s.f)(['\n            <div class="card-header">',"</div>\n          "],['\n            <div class="card-header">',"</div>\n          "])),this.header):Object(p.f)(i||(i=Object(s.f)([""],[""]))))},Object(s.c)([Object(p.g)()],t.prototype,"header",void 0),t}(p.a);customElements.define("ha-card",l)},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=(n(109),customElements.get("iron-icon")),i=!1,r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.d)(t,e),t.prototype.listen=function(t,a,o){e.prototype.listen.call(this,t,a,o),i||"mdi"!==this._iconsetName||(i=!0,n.e(70).then(n.bind(null,215)))},t}(o);customElements.define("ha-icon",r)},181:function(e,t,n){"use strict";n(5),n(45),n(42),n(54);var a=n(6),o=n(4);Object(a.a)({_template:o.a`
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
`,is:"paper-item-body"})},195:function(e,t,n){"use strict";var a=n(4),o=n(30);n(95);customElements.define("ha-config-section",class extends o.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},206:function(e,t,n){"use strict";n(5),n(45);var a=n(6),o=n(2),i=n(4),r=n(128);Object(a.a)({_template:i.a`
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
`,is:"app-header-layout",behaviors:[r.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),n=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=n+"px"}.bind(this));var n=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(n.marginTop=t+"px",n.paddingTop=""):(n.paddingTop=t+"px",n.marginTop="")}}})},241:function(e,t,n){"use strict";var a=n(0),o=(n(109),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.d)(t,e),t.prototype.connectedCallback=function(){var t=this;e.prototype.connectedCallback.call(this),setTimeout((function(){t.icon="ltr"===window.getComputedStyle(t).direction?"hass:chevron-right":"hass:chevron-left"}),100)},t}(n(179).a));customElements.define("ha-icon-next",o)},250:function(e,t,n){"use strict";var a=n(9),o=n(99);t.a=Object(a.a)(e=>(class extends e{navigate(...e){Object(o.a)(this,...e)}}))},750:function(e,t,n){"use strict";n.r(t);n(206),n(220),n(150),n(109),n(181),n(143);var a,o,i,r=n(4),s=n(30),p=(n(177),n(129),n(241),n(195),n(0)),l=n(221),c=n(1),d=[{page:"core",core:!0},{page:"server_control",core:!0},{page:"person"},{page:"entity_registry",core:!0},{page:"area_registry",core:!0},{page:"automation"},{page:"script"},{page:"zha"},{page:"zwave"},{page:"customize",core:!0,advanced:!0}],h=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(p.d)(t,e),t.prototype.render=function(){var e=this;return Object(c.f)(o||(o=Object(p.f)(["\n      <ha-card>\n        ","\n      </ha-card>\n    "],["\n      <ha-card>\n        ","\n      </ha-card>\n    "])),d.map((function(t){var n=t.page,o=t.core,i=t.advanced;return!o&&!Object(l.a)(e.hass,n)||i&&!e.showAdvanced?"":Object(c.f)(a||(a=Object(p.f)(["\n                <a href=",'>\n                  <paper-item>\n                    <paper-item-body two-line="">\n                      ',"\n                      <div secondary>\n                        ","\n                      </div>\n                    </paper-item-body>\n                    <ha-icon-next></ha-icon-next>\n                  </paper-item>\n                </a>\n              "],["\n                <a href=",'>\n                  <paper-item>\n                    <paper-item-body two-line="">\n                      ',"\n                      <div secondary>\n                        ","\n                      </div>\n                    </paper-item-body>\n                    <ha-icon-next></ha-icon-next>\n                  </paper-item>\n                </a>\n              "])),"/config/"+n,e.hass.localize("ui.panel.config."+n+".caption"),e.hass.localize("ui.panel.config."+n+".description"))})))},Object.defineProperty(t,"styles",{get:function(){return Object(c.c)(i||(i=Object(p.f)(["\n      a {\n        text-decoration: none;\n        color: var(--primary-text-color);\n      }\n    "],["\n      a {\n        text-decoration: none;\n        color: var(--primary-text-color);\n      }\n    "])))},enumerable:!0,configurable:!0}),Object(p.c)([Object(c.g)()],t.prototype,"hass",void 0),Object(p.c)([Object(c.g)()],t.prototype,"showAdvanced",void 0),t=Object(p.c)([Object(c.d)("ha-config-navigation")],t)}(c.a),n(175)),u=n(250);customElements.define("ha-config-dashboard",class extends(Object(u.a)(Object(h.a)(s.a))){static get template(){return r.a`
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
`}static get properties(){return{hass:Object,narrow:Boolean,isWide:Boolean,cloudStatus:Object,showAdvanced:Boolean}}computeIsLoaded(e,t){return Object(l.a)(e,t)}})}}]);
//# sourceMappingURL=chunk.54b3c68cbfe27c1fd396.js.map