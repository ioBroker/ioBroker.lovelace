"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[65867,48811],{25516:(t,e,o)=>{o.d(e,{i:()=>a});const i=(0,o(8330).P)((t=>{history.replaceState({scrollPosition:t},"")}),300),a=t=>e=>({kind:"method",placement:"prototype",key:e.key,descriptor:{set(t){i(t),this[`__${String(e.key)}`]=t},get(){var t;return this[`__${String(e.key)}`]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher(o){const i=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){i.call(this);const o=this[e.key];o&&this.updateComplete.then((()=>{const e=this.renderRoot.querySelector(t);e&&setTimeout((()=>{e.scrollTop=o}),0)}))}}})},8330:(t,e,o)=>{o.d(e,{P:()=>i});const i=(t,e,o=!0,i=!0)=>{let a,s=0;const n=(...n)=>{const r=()=>{s=!1===o?0:Date.now(),a=void 0,t(...n)},l=Date.now();s||!1!==o||(s=l);const d=e-(l-s);d<=0||d>e?(a&&(clearTimeout(a),a=void 0),s=l,t(...n)):a||!1===i||(a=window.setTimeout(r,d))};return n.cancel=()=>{clearTimeout(a),a=void 0,s=0},n}},9381:(t,e,o)=>{var i=o(17463),a=o(68144),s=o(79932),n=o(83448),r=o(47181);o(10983),o(52039);const l={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,i.Z)([(0,s.Mo)("ha-alert")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"title",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <div class="issue-type ${(0,n.$)({[this.alertType]:!0})}" role="alert"> <div class="icon ${this.title?"":"no-title"}"> <slot name="icon"> <ha-svg-icon .path="${l[this.alertType]}"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ${this.title?a.dy`<div class="title">${this.title}</div>`:""} <slot></slot> </div> <div class="action"> <slot name="action"> ${this.dismissable?a.dy`<ha-icon-button @click="${this._dismiss_clicked}" label="Dismiss alert" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:""} </slot> </div> </div> </div> `}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,r.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}`}]}}),a.oi)},2315:(t,e,o)=>{var i=o(17463),a=o(34541),s=o(47838),n=o(68144),r=o(79932);o(10983);const l="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";(0,i.Z)([(0,r.Mo)("ha-icon-button-arrow-prev")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_icon",value:()=>l},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(o.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?l:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}),100)}},{kind:"method",key:"render",value:function(){var t;return n.dy` <ha-icon-button .disabled="${this.disabled}" .label="${this.label||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.common.back"))||"Back"}" .path="${this._icon}"></ha-icon-button> `}}]}}),n.oi)},10983:(t,e,o)=>{var i=o(17463),a=(o(20210),o(68144)),s=o(79932),n=o(30153);o(52039);(0,i.Z)([(0,s.Mo)("ha-icon-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var t;null===(t=this._button)||void 0===t||t.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return a.dy` <mwc-icon-button aria-label="${(0,n.o)(this.label)}" title="${(0,n.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,n.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?a.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:a.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),a.oi)},48932:(t,e,o)=>{var i=o(17463),a=o(34541),s=o(47838),n=o(68144),r=o(79932),l=o(47181),d=o(6936);o(10983);(0,i.Z)([(0,r.Mo)("ha-menu-button")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hasNotifications",value:()=>!1},{kind:"field",key:"_alwaysVisible",value:()=>!1},{kind:"field",key:"_attachNotifOnConnect",value:()=>!1},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(o.prototype),"connectedCallback",this).call(this),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(o.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){const t=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return n.dy` <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> ${t?n.dy`<div class="dot"></div>`:""} `}},{kind:"method",key:"firstUpdated",value:function(t){(0,a.Z)((0,s.Z)(o.prototype),"firstUpdated",this).call(this,t),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"updated",value:function(t){if((0,a.Z)((0,s.Z)(o.prototype),"updated",this).call(this,t),!t.has("narrow")&&!t.has("hass"))return;const e=t.get("hass"),i=t.get("narrow")||e&&"always_hidden"===e.dockedSidebar,n=this.narrow||"always_hidden"===this.hass.dockedSidebar;i!==n&&(this.style.display=n||this._alwaysVisible?"initial":"none",n?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){this._unsubNotifications=(0,d.r)(this.hass.connection,(t=>{this._hasNotifications=t.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,l.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;border-radius:50%;border:2px solid var(--app-header-background-color)}`}}]}}),n.oi)},52039:(t,e,o)=>{o.d(e,{C:()=>n});var i=o(17463),a=o(68144),s=o(79932);let n=(0,i.Z)([(0,s.Mo)("ha-svg-icon")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return a.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?a.YP`<path d="${this.path}"></path>`:""} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:currentcolor;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}`}}]}}),a.oi)},6936:(t,e,o)=>{o.d(e,{r:()=>i});const i=(t,e)=>{const o=new a,i=t.subscribeMessage((t=>e(o.processMessage(t))),{type:"persistent_notification/subscribe"});return()=>{i.then((t=>null==t?void 0:t()))}};class a{constructor(){this.notifications=void 0,this.notifications={}}processMessage(t){if("removed"===t.type)for(const e of Object.keys(t.notifications))delete this.notifications[e];else this.notifications={...this.notifications,...t.notifications};return Object.values(this.notifications)}}},48811:(t,e,o)=>{o.r(e);var i=o(17463),a=(o(14271),o(68144)),s=o(79932);o(2315),o(48932),o(9381);(0,i.Z)([(0,s.Mo)("hass-error-screen")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"toolbar",value:()=>!0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"rootnav",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"error",value:void 0},{kind:"method",key:"render",value:function(){var t,e;return a.dy` ${this.toolbar?a.dy`<div class="toolbar"> ${this.rootnav||null!==(t=history.state)&&void 0!==t&&t.root?a.dy` <ha-menu-button .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:a.dy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._handleBack}"></ha-icon-button-arrow-prev> `} </div>`:""} <div class="content"> <ha-alert alert-type="error">${this.error}</ha-alert> <slot> <mwc-button @click="${this._handleBack}"> ${null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back")} </mwc-button> </slot> </div> `}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[a.iv`:host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev{pointer-events:auto}.content{color:var(--primary-text-color);height:calc(100% - var(--header-height));display:flex;padding:16px;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}a{color:var(--primary-color)}ha-alert{margin-bottom:16px}`]}}]}}),a.oi)},60010:(t,e,o)=>{var i=o(17463),a=o(34541),s=o(47838),n=o(68144),r=o(79932),l=o(25516),d=o(70518),c=o(87744);o(2315),o(48932);(0,i.Z)([(0,r.Mo)("hass-subpage")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,l.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)((0,s.Z)(o.prototype),"willUpdate",this).call(this,t),!t.has("hass"))return;const e=t.get("hass");e&&e.locale===this.hass.locale||(0,d.X)(this,"rtl",(0,c.HE)(this.hass))}},{kind:"method",key:"render",value:function(){var t;return n.dy` <div class="toolbar"> ${this.mainPage||null!==(t=history.state)&&void 0!==t&&t.root?n.dy` <ha-menu-button .hassio="${this.supervisor}" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:this.backPath?n.dy` <a href="${this.backPath}"> <ha-icon-button-arrow-prev .hass="${this.hass}"></ha-icon-button-arrow-prev> </a> `:n.dy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._backTapped}"></ha-icon-button-arrow-prev> `} <div class="main-title"><slot name="header">${this.header}</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content" @scroll="${this._saveScrollPos}"><slot></slot></div> <div id="fab"> <slot name="fab"></slot> </div> `}},{kind:"method",decorators:[(0,r.hO)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px}:host([rtl]) #fab{right:auto;left:calc(16px + env(safe-area-inset-left))}:host([rtl][is-wide]) #fab{bottom:24px;left:24px;right:auto}`}}]}}),n.oi)},65867:(t,e,o)=>{o.r(e);var i=o(17463),a=o(68144),s=o(79932),n=o(30153);o(48811),o(60010);(0,i.Z)([(0,s.Mo)("ha-panel-iframe")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"panel",value:void 0},{kind:"method",key:"render",value:function(){return"https:"===location.protocol&&"https:"!==new URL(this.panel.config.url,location.toString()).protocol?a.dy` <hass-error-screen .hass="${this.hass}" .narrow="${this.narrow}" error="Unable to load iframes that load websites over http:// if ioBroker is served over https://." rootnav></hass-error-screen> `:a.dy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.panel.title}" main-page> <iframe title="${(0,n.o)(null===this.panel.title?void 0:this.panel.title)}" src="${this.panel.config.url}" sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts allow-modals allow-downloads" allow="fullscreen"></iframe> </hass-subpage> `}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`iframe{border:0;width:100%;position:absolute;height:100%;background-color:var(--primary-background-color)}`}]}}),a.oi)}}]);
//# sourceMappingURL=65867-qzvbahPVh4U.js.map