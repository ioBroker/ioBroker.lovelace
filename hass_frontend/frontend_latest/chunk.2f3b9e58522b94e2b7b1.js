/*! For license information please see chunk.2f3b9e58522b94e2b7b1.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[37],{120:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o(5);var i=o(55),a=o(35);const n=[i.a,a.a,{hostAttributes:{role:"option",tabindex:"0"}}]},143:function(e,t,o){"use strict";o(5),o(45),o(145);var i=o(6),a=o(3),n=o(120);Object(i.a)({_template:a.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[n.a]})},144:function(e,t,o){"use strict";o(5),o(42);var i=o(125),a=o(6),n=o(3);Object(a.a)({_template:n.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[i.a],hostAttributes:{role:"listbox"}})},145:function(e,t,o){"use strict";o(45),o(68),o(42),o(54);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},179:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o(109);const i=customElements.get("iron-icon");let a=!1;class n extends i{listen(e,t,i){super.listen(e,t,i),a||"mdi"!==this._iconsetName||(a=!0,o.e(70).then(o.bind(null,216)))}}customElements.define("ha-icon",n)},185:function(e,t,o){"use strict";o(5),o(45),o(54),o(145);var i=o(6),a=o(3),n=o(120);Object(i.a)({_template:a.a`
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
`,is:"paper-icon-item",behaviors:[n.a]})},738:function(e,t,o){"use strict";o.r(t);var i=o(4),a=o(0),n=(o(150),o(108),o(185),o(143),o(144),o(179),o(134));const s=e=>e?e.trim().split(" ").slice(0,3).map(e=>e.substr(0,1)).join(""):"user";let r=class extends a.a{render(){const e=this.user,t=e?s(e.name):"?";return a.f`
      ${t}
    `}updated(e){super.updated(e),Object(n.a)(this,"long",(this.user?s(this.user.name):"?").length>2)}static get styles(){return a.c`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--primary-text-color);
        overflow: hidden;
      }

      :host([long]) {
        font-size: 80%;
      }
    `}};Object(i.b)([Object(a.g)()],r.prototype,"user",void 0),r=Object(i.b)([Object(a.d)("ha-user-badge")],r);o(129);var l=o(18),p=o(119);const c=e=>(e.cache.cfg||(e.cache.cfg=e.sendMessage({type:"config/get"})),e.cache.cfg);var d=o(137),h=o(121),u=o(73),b=o(96);const m=["config","developer-tools","hassio"],x="scrollIntoViewIfNeeded"in document.body,f={map:1,logbook:2,history:3,"developer-tools":9,hassio:10,config:11},g=(e,t)=>{const o=e.url_path in f,i=t.url_path in f;return o&&i?f[e.url_path]-f[t.url_path]:o?-1:i?1:e.title<t.title?-1:e.title>t.title?1:0},y=e=>{const t=e.panels;if(!t)return[[],[]];const o=[],i=[];return Object.values(t).forEach(e=>{e.title&&(m.includes(e.url_path)?i:o).push(e)}),o.sort(g),i.sort(g),[o,i]};class v extends a.a{constructor(){super(...arguments),this.alwaysExpand=!1,this.expanded=!1,this._defaultPage=localStorage.defaultPage||p.b,this._rtl=!1,this._recentKeydownActiveUntil=0}render(){const e=this.hass;if(!e)return a.f``;const[t,o]=y(e);let i=this._notifications?this._notifications.length:0;for(const a in e.states)"configurator"===Object(h.a)(a)&&i++;return a.f`
      <div class="menu">
        ${this.narrow?"":a.f`
              <paper-icon-button
                aria-label="Sidebar Toggle"
                .icon=${"docked"===e.dockedSidebar?"hass:menu-open":"hass:menu"}
                @click=${this._toggleSidebar}
              ></paper-icon-button>
            `}
        <span class="title">ioBroker</span>
      </div>
      <paper-listbox
        attr-for-selected="data-panel"
        .selected=${e.panelUrl}
        @focusin=${this._listboxFocusIn}
        @focusout=${this._listboxFocusOut}
        @scroll=${this._listboxScroll}
        @keydown=${this._listboxKeydown}
      >
        ${this._renderPanel(this._defaultPage,"hass:apps",e.localize("panel.states"))}
        ${t.map(t=>this._renderPanel(t.url_path,t.icon,e.localize(`panel.${t.title}`)||t.title))}
        <div class="spacer" disabled></div>

        ${o.map(t=>this._renderPanel(t.url_path,t.icon,e.localize(`panel.${t.title}`)||t.title))}
        ${this._externalConfig&&this._externalConfig.hasSettingsScreen?a.f`
              <a
                aria-role="option"
                aria-label="App Configuration"
                href="#external-app-configuration"
                tabindex="-1"
                @click=${this._handleExternalAppConfiguration}
              >
                <paper-icon-item
                  @mouseenter=${this._itemMouseEnter}
                  @mouseleave=${this._itemMouseLeave}
                >
                  <ha-icon
                    slot="item-icon"
                    icon="hass:cellphone-settings-variant"
                  ></ha-icon>
                  <span class="item-text">
                    ${e.localize("ui.sidebar.external_app_configuration")}
                  </span>
                </paper-icon-item>
              </a>
            `:""}
      </paper-listbox>

      <div class="divider"></div>

      <paper-icon-item
        class="notifications"
        aria-role="option"
        @click=${this._handleShowNotificationDrawer}
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <ha-icon slot="item-icon" icon="hass:bell"></ha-icon>
        ${!this.expanded&&i>0?a.f`
              <span class="notification-badge" slot="item-icon">
                ${i}
              </span>
            `:""}
        <span class="item-text">
          ${e.localize("ui.notification_drawer.title")}
        </span>
        ${this.expanded&&i>0?a.f`
              <span class="notification-badge">${i}</span>
            `:""}
      </paper-icon-item>

      <a
        class=${Object(u.a)({profile:!0,"iron-selected":"profile"===e.panelUrl})}
        href="/profile"
        data-panel="panel"
        tabindex="-1"
        aria-role="option"
        aria-label=${e.localize("panel.profile")}
      >
        <paper-icon-item
          @mouseenter=${this._itemMouseEnter}
          @mouseleave=${this._itemMouseLeave}
        >
          <ha-user-badge slot="item-icon" .user=${e.user}></ha-user-badge>

          <span class="item-text">
            ${e.user?e.user.name:""}
          </span>
        </paper-icon-item>
      </a>
      <div disabled class="bottom-spacer"></div>
      <div class="tooltip"></div>
    `}shouldUpdate(e){if(e.has("expanded")||e.has("narrow")||e.has("alwaysExpand")||e.has("_externalConfig")||e.has("_notifications"))return!0;if(!this.hass||!e.has("hass"))return!1;const t=e.get("hass");if(!t)return!0;const o=this.hass;return o.panels!==t.panels||o.panelUrl!==t.panelUrl||o.user!==t.user||o.localize!==t.localize||o.states!==t.states}firstUpdated(e){super.firstUpdated(e),this.hass&&this.hass.auth.external&&c(this.hass.auth.external).then(e=>{this._externalConfig=e}),Object(d.a)(this.hass.connection,e=>{this._notifications=e})}updated(e){if(super.updated(e),e.has("alwaysExpand")&&(this.expanded=this.alwaysExpand),!e.has("hass"))return;if(this._rtl=Object(b.a)(this.hass),!x)return;const t=e.get("hass");if(!t||t.panelUrl!==this.hass.panelUrl){const e=this.shadowRoot.querySelector(".iron-selected");e&&e.scrollIntoViewIfNeeded()}}get _tooltip(){return this.shadowRoot.querySelector(".tooltip")}_itemMouseEnter(e){this.expanded||(new Date).getTime()<this._recentKeydownActiveUntil||(this._mouseLeaveTimeout&&(clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=void 0),this._showTooltip(e.currentTarget))}_itemMouseLeave(){this._mouseLeaveTimeout&&clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=window.setTimeout(()=>{this._hideTooltip()},500)}_listboxFocusIn(e){this.expanded||"A"!==e.target.nodeName||this._showTooltip(e.target.querySelector("paper-icon-item"))}_listboxFocusOut(){this._hideTooltip()}_listboxScroll(){(new Date).getTime()<this._recentKeydownActiveUntil||this._hideTooltip()}_listboxKeydown(){this._recentKeydownActiveUntil=(new Date).getTime()+100}_showTooltip(e){this._tooltipHideTimeout&&(clearTimeout(this._tooltipHideTimeout),this._tooltipHideTimeout=void 0);const t=this._tooltip,o=this.shadowRoot.querySelector("paper-listbox");let i=e.offsetTop+7;o.contains(e)&&(i-=o.scrollTop),t.innerHTML=e.querySelector(".item-text").innerHTML,t.style.display="block",t.style.top=`${i}px`,t.style.left=`${e.offsetLeft+e.clientWidth+12}px`}_hideTooltip(){this._tooltipHideTimeout||(this._tooltipHideTimeout=window.setTimeout(()=>{this._tooltipHideTimeout=void 0,this._tooltip.style.display="none"},10))}_handleShowNotificationDrawer(){Object(l.a)(this,"hass-show-notifications")}_handleExternalAppConfiguration(e){e.preventDefault(),this.hass.auth.external.fireMessage({type:"config_screen/show"})}_toggleSidebar(){Object(l.a)(this,"hass-toggle-menu")}_renderPanel(e,t,o){return a.f`
      <a
        aria-role="option"
        href="${`/${e}`}"
        data-panel="${e}"
        tabindex="-1"
      >
        <paper-icon-item
          @mouseenter=${this._itemMouseEnter}
          @mouseleave=${this._itemMouseLeave}
        >
          <ha-icon slot="item-icon" .icon="${t}"></ha-icon>
          <span class="item-text">${o}</span>
        </paper-icon-item>
      </a>
    `}static get styles(){return a.c`
      :host {
        height: 100%;
        display: block;
        overflow: hidden;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(--sidebar-background-color);
        width: 64px;
      }
      :host([expanded]) {
        width: 256px;
      }

      .menu {
        box-sizing: border-box;
        height: 65px;
        display: flex;
        padding: 0 12px;
        border-bottom: 1px solid transparent;
        white-space: nowrap;
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        font-size: 20px;
        align-items: center;
      }
      :host([expanded]) .menu {
        width: 256px;
      }

      .menu paper-icon-button {
        color: var(--sidebar-icon-color);
      }
      :host([expanded]) .menu paper-icon-button {
        margin-right: 23px;
      }
      :host([expanded][_rtl]) .menu paper-icon-button {
        margin-right: 0px;
        margin-left: 23px;
      }

      .title {
        display: none;
      }
      :host([expanded]) .title {
        display: initial;
      }

      paper-listbox::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }

      paper-listbox::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: var(--scrollbar-thumb-color);
      }

      paper-listbox {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: calc(100% - 196px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: var(--scrollbar-thumb-color) transparent;
        scrollbar-width: thin;
      }

      a {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
      }

      paper-icon-item {
        box-sizing: border-box;
        margin: 4px 8px;
        padding-left: 12px;
        border-radius: 4px;
        --paper-item-min-height: 40px;
        width: 48px;
      }
      :host([expanded]) paper-icon-item {
        width: 240px;
      }
      :host([_rtl]) paper-icon-item {
        padding-left: auto;
        padding-right: 12px;
      }

      ha-icon[slot="item-icon"] {
        color: var(--sidebar-icon-color);
      }

      .iron-selected paper-icon-item:before {
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
        transition: opacity 15ms linear;
        will-change: opacity;
      }

      .iron-selected paper-icon-item[pressed]:before {
        opacity: 0.37;
      }

      paper-icon-item span {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
      }

      a.iron-selected paper-icon-item ha-icon {
        color: var(--sidebar-selected-icon-color);
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item .item-text {
        display: none;
      }
      :host([expanded]) paper-icon-item .item-text {
        display: block;
      }

      .divider {
        bottom: 112px;
        padding: 10px 0;
      }
      .divider::before {
        content: " ";
        display: block;
        height: 1px;
        background-color: var(--divider-color);
      }

      .notifications {
        cursor: pointer;
      }
      .notifications .item-text {
        flex: 1;
      }
      .profile {
      }
      .profile paper-icon-item {
        padding-left: 4px;
      }
      :host([_rtl]) .profile paper-icon-item {
        padding-left: auto;
        padding-right: 4px;
      }
      .profile .item-text {
        margin-left: 8px;
      }
      :host([_rtl]) .profile .item-text {
        margin-right: 8px;
      }

      .notification-badge {
        min-width: 20px;
        box-sizing: border-box;
        border-radius: 50%;
        font-weight: 400;
        background-color: var(--accent-color);
        line-height: 20px;
        text-align: center;
        padding: 0px 6px;
        color: var(--text-primary-color);
      }
      ha-icon + .notification-badge {
        position: absolute;
        bottom: 14px;
        left: 26px;
        font-size: 0.65em;
      }

      .spacer {
        flex: 1;
        pointer-events: none;
      }

      .subheader {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
        white-space: nowrap;
      }

      .dev-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
        width: 256px;
        box-sizing: border-box;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }

      .tooltip {
        display: none;
        position: absolute;
        opacity: 0.9;
        border-radius: 2px;
        white-space: nowrap;
        color: var(--sidebar-background-color);
        background-color: var(--sidebar-text-color);
        padding: 4px;
        font-weight: 500;
      }

      :host([_rtl]) .menu paper-icon-button {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    `}}Object(i.b)([Object(a.g)()],v.prototype,"hass",void 0),Object(i.b)([Object(a.g)()],v.prototype,"narrow",void 0),Object(i.b)([Object(a.g)({type:Boolean})],v.prototype,"alwaysExpand",void 0),Object(i.b)([Object(a.g)({type:Boolean,reflect:!0})],v.prototype,"expanded",void 0),Object(i.b)([Object(a.g)()],v.prototype,"_defaultPage",void 0),Object(i.b)([Object(a.g)()],v.prototype,"_externalConfig",void 0),Object(i.b)([Object(a.g)()],v.prototype,"_notifications",void 0),Object(i.b)([Object(a.g)({type:Boolean,reflect:!0})],v.prototype,"_rtl",void 0),Object(i.b)([Object(a.e)({passive:!0})],v.prototype,"_listboxScroll",null),customElements.define("ha-sidebar",v)}}]);
//# sourceMappingURL=chunk.2f3b9e58522b94e2b7b1.js.map