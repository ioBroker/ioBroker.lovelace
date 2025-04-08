"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["22118"],{19631:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Bt:()=>d,T8:()=>c});i(19083);var o=i(16485),r=i(88977),n=i(20382),s=e([o]);o=(s.then?(await s)():s)[0];const l=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],d=e=>e.first_weekday===n.FS.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,r.L)(e.language)%7:l.includes(e.first_weekday)?l.indexOf(e.first_weekday):1,c=e=>{const t=d(e);return l[t]};a()}catch(l){a(l)}}))},33570:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Vu:()=>h,Zs:()=>v,mr:()=>d,xO:()=>f});var o=i(16485),r=i(27486),n=i(11104),s=i(16922),l=e([o,n]);[o,n]=l.then?(await l)():l;const d=(e,t,i)=>c(t,i.time_zone).format(e),c=(0,r.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,n.f)(e.time_zone,t)}))),h=(e,t,i)=>u(t,i.time_zone).format(e),u=(0,r.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,n.f)(e.time_zone,t)}))),f=(e,t,i)=>p(t,i.time_zone).format(e),p=(0,r.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,n.f)(e.time_zone,t)}))),v=(e,t,i)=>b(t,i.time_zone).format(e),b=(0,r.Z)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,n.f)(e.time_zone,t)})));a()}catch(d){a(d)}}))},11104:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{f:()=>u});var o,r,n,s=i(16485),l=i(20382),d=e([s]);s=(d.then?(await d)():d)[0];const c=null===(o=Intl.DateTimeFormat)||void 0===o||null===(r=(n=o.call(Intl)).resolvedOptions)||void 0===r?void 0:r.call(n).timeZone,h=null!=c?c:"UTC",u=(e,t)=>e===l.c_.local&&c?h:t;a()}catch(c){a(c)}}))},16922:function(e,t,i){i.d(t,{y:()=>r});i(19083),i(61006);var a=i(27486),o=i(20382);const r=(0,a.Z)((e=>{if(e.time_format===o.zt.language||e.time_format===o.zt.system){const t=e.time_format===o.zt.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===o.zt.am_pm}))},31146:function(e,t,i){i.d(t,{i:()=>o});const a=(0,i(93826).P)((e=>{history.replaceState({scrollPosition:e},"")}),300),o=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){a(e),this[`__${String(t.key)}`]=e},get(){var e;return this[`__${String(t.key)}`]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher(i){const a=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){a.call(this);const i=this[t.key];i&&this.updateComplete.then((()=>{const t=this.renderRoot.querySelector(e);t&&setTimeout((()=>{t.scrollTop=i}),0)}))}}})},50602:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{SL:()=>l,l4:()=>u,sJ:()=>d,uf:()=>h});var o=i(16485),r=(i(19083),i(19423),i(11740),i(61006),i(20382)),n=i(34618),s=e([o]);o=(s.then?(await s)():s)[0];const l=e=>d(e.attributes),d=(e,t)=>!!e.unit_of_measurement||!!e.state_class||(t||[]).includes(e.device_class||""),c=e=>{switch(e.number_format){case r.y4.comma_decimal:return["en-US","en"];case r.y4.decimal_comma:return["de","es","it"];case r.y4.space_comma:return["fr","sv","cs"];case r.y4.system:return;default:return e.language}},h=(e,t,i)=>{const a=t?c(t):void 0;return Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)===r.y4.none||Number.isNaN(Number(e))?Number.isNaN(Number(e))||""===e||(null==t?void 0:t.number_format)!==r.y4.none?"string"==typeof e?e:`${(0,n.N)(e,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`:new Intl.NumberFormat("en-US",f(e,Object.assign(Object.assign({},i),{},{useGrouping:!1}))).format(Number(e)):new Intl.NumberFormat(a,f(e,i)).format(Number(e))},u=(e,t)=>{var i;const a=null==t?void 0:t.display_precision;return null!=a?{maximumFractionDigits:a,minimumFractionDigits:a}:Number.isInteger(Number(null==e||null===(i=e.attributes)||void 0===i?void 0:i.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},f=(e,t)=>{const i=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};a()}catch(l){a(l)}}))},34618:function(e,t,i){i.d(t,{N:()=>a});const a=(e,t=2)=>Math.round(e*10**t)/10**t},93826:function(e,t,i){i.d(t,{P:()=>a});i(71695),i(47021);const a=(e,t,i=!0,a=!0)=>{let o,r=0;const n=(...n)=>{const s=()=>{r=!1===i?0:Date.now(),o=void 0,e(...n)},l=Date.now();r||!1!==i||(r=l);const d=t-(l-r);d<=0||d>t?(o&&(clearTimeout(o),o=void 0),r=l,e(...n)):o||!1===a||(o=window.setTimeout(s,d))};return n.cancel=()=>{clearTimeout(o),o=void 0,r=0},n}},54202:function(e,t,i){i.r(t),i.d(t,{HaIconButtonArrowPrev:()=>d});var a=i(61701),o=(i(71695),i(47021),i(57243)),r=i(50778),n=i(5111);i(23334);let s,l=e=>e;let d=(0,a.Z)([(0,r.Mo)("ha-icon-button-arrow-prev")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_icon",value(){return"rtl"===n.E.document.dir?"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},{kind:"method",key:"render",value:function(){var e;return(0,o.dy)(s||(s=l` <ha-icon-button .disabled="${0}" .label="${0}" .path="${0}"></ha-icon-button> `),this.disabled,this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))||"Back",this._icon)}}]}}),o.oi)},23334:function(e,t,i){i.r(t),i.d(t,{HaIconButton:()=>u});var a=i(61701),o=(i(71695),i(47021),i(74269),i(57243)),r=i(50778),n=i(20552);i(37583);let s,l,d,c,h=e=>e,u=(0,a.Z)([(0,r.Mo)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"hide-title",type:Boolean})],key:"hideTitle",value(){return!1}},{kind:"field",decorators:[(0,r.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._button)||void 0===e||e.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value(){return{mode:"open",delegatesFocus:!0}}},{kind:"method",key:"render",value:function(){return(0,o.dy)(s||(s=h` <mwc-icon-button aria-label="${0}" title="${0}" aria-haspopup="${0}" .disabled="${0}"> ${0} </mwc-icon-button> `),(0,n.o)(this.label),(0,n.o)(this.hideTitle?void 0:this.label),(0,n.o)(this.ariaHasPopup),this.disabled,this.path?(0,o.dy)(l||(l=h`<ha-svg-icon .path="${0}"></ha-svg-icon>`),this.path):(0,o.dy)(d||(d=h`<slot></slot>`)))}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(c||(c=h`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`))}}]}}),o.oi)},43344:function(e,t,i){var a=i(61701),o=i(72621),r=(i(52247),i(71695),i(47021),i(57243)),n=i(50778),s=i(36522),l=i(83716);i(23334);let d,c,h,u=e=>e;(0,a.Z)([(0,n.Mo)("ha-menu-button")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"hassio",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_hasNotifications",value(){return!1}},{kind:"field",decorators:[(0,n.SB)()],key:"_show",value(){return!1}},{kind:"field",key:"_alwaysVisible",value(){return!1}},{kind:"field",key:"_attachNotifOnConnect",value(){return!1}},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){if(!this._show)return r.Ld;const e=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return(0,r.dy)(d||(d=u` <ha-icon-button .label="${0}" .path="${0}" @click="${0}"></ha-icon-button> ${0} `),this.hass.localize("ui.sidebar.sidebar_toggle"),"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",this._toggleMenu,e?(0,r.dy)(c||(c=u`<div class="dot"></div>`)):"")}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)(i,"firstUpdated",this,3)([e]),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"willUpdate",value:function(e){if((0,o.Z)(i,"willUpdate",this,3)([e]),!e.has("narrow")&&!e.has("hass"))return;const t=e.has("hass")?e.get("hass"):this.hass,a=(e.has("narrow")?e.get("narrow"):this.narrow)||"always_hidden"===(null==t?void 0:t.dockedSidebar),r=this.narrow||"always_hidden"===this.hass.dockedSidebar;this.hasUpdated&&a===r||(this._show=r||this._alwaysVisible,r?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){if(this._unsubNotifications)throw new Error("Already subscribed");this._unsubNotifications=(0,l.r)(this.hass.connection,(e=>{this._hasNotifications=e.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,s.B)(this,"hass-toggle-menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(h||(h=u`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;inset-inline-end:7px;inset-inline-start:initial;border-radius:50%;border:2px solid var(--app-header-background-color)}`))}}]}}),r.oi)},17170:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t),i.d(t,{HaSpinner:()=>f});var o=i(61701),r=i(72621),n=(i(71695),i(47021),i(97677)),s=i(43580),l=i(57243),d=i(50778),c=e([n]);n=(c.then?(await c)():c)[0];let h,u=e=>e,f=(0,o.Z)([(0,d.Mo)("ha-spinner")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(e){if((0,r.Z)(i,"updated",this,3)([e]),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}},{kind:"field",static:!0,key:"styles",value(){return[s.Z,(0,l.iv)(h||(h=u`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`))]}}]}}),n.Z);a()}catch(h){a(h)}}))},37583:function(e,t,i){i.r(t),i.d(t,{HaSvgIcon:()=>h});var a=i(61701),o=(i(71695),i(47021),i(57243)),r=i(50778);let n,s,l,d,c=e=>e,h=(0,a.Z)([(0,r.Mo)("ha-svg-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"secondaryPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return(0,o.YP)(n||(n=c` <svg viewBox="${0}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${0} ${0} </g> </svg>`),this.viewBox||"0 0 24 24",this.path?(0,o.YP)(s||(s=c`<path class="primary-path" d="${0}"></path>`),this.path):o.Ld,this.secondaryPath?(0,o.YP)(l||(l=c`<path class="secondary-path" d="${0}"></path>`),this.secondaryPath):o.Ld)}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(d||(d=c`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:var(--icon-primary-color,currentcolor);width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}path.primary-path{opacity:var(--icon-primary-opactity, 1)}path.secondary-path{fill:var(--icon-secondary-color,currentcolor);opacity:var(--icon-secondary-opactity, .5)}`))}}]}}),o.oi)},83716:function(e,t,i){i.d(t,{r:()=>a});i(71695),i(19423),i(47021);const a=(e,t)=>{const i=new o,a=e.subscribeMessage((e=>t(i.processMessage(e))),{type:"persistent_notification/subscribe"});return()=>{a.then((e=>null==e?void 0:e()))}};class o{constructor(){this.notifications=void 0,this.notifications={}}processMessage(e){if("removed"===e.type)for(const t of Object.keys(e.notifications))delete this.notifications[t];else this.notifications=Object.assign(Object.assign({},this.notifications),e.notifications);return Object.values(this.notifications)}}},34515:function(e,t,i){i.r(t);var a=i(61701),o=(i(71695),i(47021),i(31622),i(57243)),r=i(50778);i(54202),i(43344),i(99426);let n,s,l,d,c,h=e=>e;(0,a.Z)([(0,r.Mo)("hass-error-screen")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"toolbar",value(){return!0}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"rootnav",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)()],key:"error",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return(0,o.dy)(n||(n=h` ${0} <div class="content"> <ha-alert alert-type="error">${0}</ha-alert> <slot> <mwc-button @click="${0}"> ${0} </mwc-button> </slot> </div> `),this.toolbar?(0,o.dy)(s||(s=h`<div class="toolbar"> ${0} </div>`),this.rootnav||null!==(e=history.state)&&void 0!==e&&e.root?(0,o.dy)(l||(l=h` <ha-menu-button .hass="${0}" .narrow="${0}"></ha-menu-button> `),this.hass,this.narrow):(0,o.dy)(d||(d=h` <ha-icon-button-arrow-prev .hass="${0}" @click="${0}"></ha-icon-button-arrow-prev> `),this.hass,this._handleBack)):"",this.error,this._handleBack,null===(t=this.hass)||void 0===t?void 0:t.localize("ui.common.back"))}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,o.iv)(c||(c=h`:host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev{pointer-events:auto}.content{color:var(--primary-text-color);height:calc(100% - var(--header-height));display:flex;padding:16px;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}a{color:var(--primary-color)}ha-alert{margin-bottom:16px}`))]}}]}}),o.oi)},75375:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t);var o=i(61701),r=(i(71695),i(47021),i(57243)),n=i(50778),s=i(17170),l=(i(54202),i(43344),i(28008)),d=e([s]);s=(d.then?(await d)():d)[0];let c,h,u,f,p,v,b=e=>e;(0,o.Z)([(0,n.Mo)("hass-loading-screen")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-toolbar"})],key:"noToolbar",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"rootnav",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)()],key:"message",value:void 0},{kind:"method",key:"render",value:function(){var e;return(0,r.dy)(c||(c=b` ${0} <div class="content"> <ha-spinner></ha-spinner> ${0} </div> `),this.noToolbar?"":(0,r.dy)(h||(h=b`<div class="toolbar"> ${0} </div>`),this.rootnav||null!==(e=history.state)&&void 0!==e&&e.root?(0,r.dy)(u||(u=b` <ha-menu-button .hass="${0}" .narrow="${0}"></ha-menu-button> `),this.hass,this.narrow):(0,r.dy)(f||(f=b` <ha-icon-button-arrow-prev .hass="${0}" @click="${0}"></ha-icon-button-arrow-prev> `),this.hass,this._handleBack)),this.message?(0,r.dy)(p||(p=b`<div id="loading-text">${0}</div>`),this.message):r.Ld)}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,(0,r.iv)(v||(v=b`:host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto}.content{height:calc(100% - var(--header-height));display:flex;flex-direction:column;align-items:center;justify-content:center}#loading-text{max-width:350px;margin-top:16px}`))]}}]}}),r.oi);a()}catch(c){a(c)}}))},87979:function(e,t,i){var a=i(61701),o=(i(71695),i(47021),i(57243)),r=i(50778),n=i(31146),s=(i(54202),i(43344),i(28008));let l,d,c,h,u,f=e=>e;(0,a.Z)([(0,r.Mo)("hass-subpage")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"supervisor",value(){return!1}},{kind:"field",decorators:[(0,n.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){var e;return(0,o.dy)(l||(l=f` <div class="toolbar"> ${0} <div class="main-title"><slot name="header">${0}</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="${0}"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> `),this.mainPage||null!==(e=history.state)&&void 0!==e&&e.root?(0,o.dy)(d||(d=f` <ha-menu-button .hassio="${0}" .hass="${0}" .narrow="${0}"></ha-menu-button> `),this.supervisor,this.hass,this.narrow):this.backPath?(0,o.dy)(c||(c=f` <a href="${0}"> <ha-icon-button-arrow-prev .hass="${0}"></ha-icon-button-arrow-prev> </a> `),this.backPath,this.hass):(0,o.dy)(h||(h=f` <ha-icon-button-arrow-prev .hass="${0}" @click="${0}"></ha-icon-button-arrow-prev> `),this.hass,this._backTapped),this.header,this._saveScrollPos)}},{kind:"method",decorators:[(0,r.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[s.$c,(0,o.iv)(u||(u=f`:host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:var(--margin-title);line-height:20px;min-width:0;flex-grow:1;overflow-wrap:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;padding-bottom:1px}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;bottom:calc(16px + env(safe-area-inset-bottom));z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px;inset-inline-end:24px;inset-inline-start:initial}`))]}}]}}),o.oi)},76600:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t);var o=i(61701),r=(i(71695),i(9359),i(31526),i(40251),i(19134),i(47706),i(47021),i(71513),i(75656),i(50100),i(18084),i(34515),i(57243)),n=i(50778),s=i(1118),l=i(17705),d=i(75375),c=(i(87979),i(28008)),h=(i(99426),i(98445)),u=i(98237),f=i(76539),p=i(3409),v=i(68646),b=i(43672),y=e([d,h,u,f,p,v,b,s]);[d,h,u,f,p,v,b,s]=y.then?(await y)():y;let m,g,k,w,_=e=>e;const x={energy_sources:[],device_consumption:[]};(0,o.Z)([(0,n.Mo)("ha-config-energy")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:"is-wide",type:Boolean})],key:"isWide",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"showAdvanced",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_searchParms",value(){return new URLSearchParams(window.location.search)}},{kind:"field",decorators:[(0,n.SB)()],key:"_info",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_preferences",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_validationResult",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_statsMetadata",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._fetchConfig()}},{kind:"method",key:"render",value:function(){return this._preferences||this._error?this._error?(0,r.dy)(g||(g=_`<hass-error-screen .hass="${0}" .narrow="${0}" .error="${0}"></hass-error-screen>`),this.hass,this.narrow,this._error):(0,r.dy)(k||(k=_` <hass-subpage .hass="${0}" .narrow="${0}" .backPath="${0}" .header="${0}"> <ha-alert> ${0} </ha-alert> <div class="container"> <ha-energy-grid-settings .hass="${0}" .preferences="${0}" .statsMetadata="${0}" .validationResult="${0}" @value-changed="${0}"></ha-energy-grid-settings> <ha-energy-solar-settings .hass="${0}" .preferences="${0}" .statsMetadata="${0}" .validationResult="${0}" .info="${0}" @value-changed="${0}"></ha-energy-solar-settings> <ha-energy-battery-settings .hass="${0}" .preferences="${0}" .statsMetadata="${0}" .validationResult="${0}" @value-changed="${0}"></ha-energy-battery-settings> <ha-energy-gas-settings .hass="${0}" .preferences="${0}" .statsMetadata="${0}" .validationResult="${0}" @value-changed="${0}"></ha-energy-gas-settings> <ha-energy-water-settings .hass="${0}" .preferences="${0}" .statsMetadata="${0}" .validationResult="${0}" @value-changed="${0}"></ha-energy-water-settings> <ha-energy-device-settings .hass="${0}" .preferences="${0}" .statsMetadata="${0}" .validationResult="${0}" @value-changed="${0}"></ha-energy-device-settings> </div> </hass-subpage> `),this.hass,this.narrow,this._searchParms.has("historyBack")?void 0:"/config/lovelace/dashboards",this.hass.localize("ui.panel.config.energy.caption"),this.hass.localize("ui.panel.config.energy.new_device_info"),this.hass,this._preferences,this._statsMetadata,this._validationResult,this._prefsChanged,this.hass,this._preferences,this._statsMetadata,this._validationResult,this._info,this._prefsChanged,this.hass,this._preferences,this._statsMetadata,this._validationResult,this._prefsChanged,this.hass,this._preferences,this._statsMetadata,this._validationResult,this._prefsChanged,this.hass,this._preferences,this._statsMetadata,this._validationResult,this._prefsChanged,this.hass,this._preferences,this._statsMetadata,this._validationResult,this._prefsChanged):(0,r.dy)(m||(m=_`<hass-loading-screen .hass="${0}" .narrow="${0}"></hass-loading-screen>`),this.hass,this.narrow)}},{kind:"method",key:"_fetchConfig",value:async function(){this._error=void 0;const e=(0,s.gy)(this.hass),t=await(0,s.xZ)(this.hass);try{this._preferences=await(0,s.ZC)(this.hass)}catch(i){"not_found"===i.code?this._preferences=x:this._error=i.message}try{this._validationResult=await e}catch(i){this._error=i.message}this._info=await t,await this._fetchMetaData()}},{kind:"method",key:"_prefsChanged",value:async function(e){this._preferences=e.detail.value,this._validationResult=void 0;try{this._validationResult=await(0,s.gy)(this.hass)}catch(t){this._error=t.message}this._info=await(0,s.xZ)(this.hass),await this._fetchMetaData()}},{kind:"method",key:"_fetchMetaData",value:async function(){if(!this._preferences||!this._info)return;const e=(0,s.yH)(this._preferences,this._info),t=await(0,l.Py)(this.hass,e),i={};t.forEach((e=>{i[e.statistic_id]=e})),this._statsMetadata=i}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,(0,r.iv)(w||(w=_`ha-alert{display:block;margin:8px}.container{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:8px 8px;margin:8px}`))]}}]}}),r.oi);a()}catch(m){a(m)}}))},16485:function(e,t,i){i.a(e,(async function(e,t){try{i(71695),i(92745),i(40251),i(47021);var a=i(61449),o=i(40574),r=i(30532),n=i(41674),s=i(49722),l=i(76632),d=i(7884),c=i(35185),h=i(65401),u=i(44180),f=i(49447);const e=async()=>{const e=(0,u.sS)(),t=[];(0,r.shouldPolyfill)()&&await Promise.all([i.e("80210"),i.e("74055")]).then(i.bind(i,98133)),(0,s.shouldPolyfill)()&&await Promise.all([i.e("2142"),i.e("75297"),i.e("80210"),i.e("60251")]).then(i.bind(i,59095)),(0,a.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("68250")]).then(i.bind(i,80561)).then((()=>(0,f.H)()))),(0,h.shouldPolyfill)()&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("65578")]).then(i.bind(i,97995))),(0,o.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("59826")]).then(i.bind(i,31514))),(0,n.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("23649")]).then(i.bind(i,93840))),(0,l.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("42831")]).then(i.bind(i,29559))),(0,d.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("57377")]).then(i.bind(i,39030)).then((()=>i.e("61236").then(i.t.bind(i,4121,23))))),(0,c.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("13870")]).then(i.bind(i,74546))),0!==t.length&&await Promise.all(t).then((()=>(0,f.n)(e)))};await e(),t()}catch(p){t(p)}}),1)},28008:function(e,t,i){i.d(t,{$c:()=>f,Qx:()=>h,k1:()=>c,yu:()=>u});var a=i(57243);let o,r,n,s,l,d=e=>e;const c=(0,a.iv)(o||(o=d`button.link{background:0 0;color:inherit;border:none;padding:0;font:inherit;text-align:left;text-decoration:underline;cursor:pointer;outline:0}`)),h=(0,a.iv)(r||(r=d`:host{font-family:var(--paper-font-body1_-_font-family);-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height)}app-header div[sticky]{height:48px}app-toolbar [main-title]{margin-left:20px;margin-inline-start:20px;margin-inline-end:initial}h1{font-family:var(--paper-font-headline_-_font-family);-webkit-font-smoothing:var(--paper-font-headline_-_-webkit-font-smoothing);white-space:var(--paper-font-headline_-_white-space);overflow:var(--paper-font-headline_-_overflow);text-overflow:var(--paper-font-headline_-_text-overflow);font-size:var(--paper-font-headline_-_font-size);font-weight:var(--paper-font-headline_-_font-weight);line-height:var(--paper-font-headline_-_line-height)}h2{font-family:var(--paper-font-title_-_font-family);-webkit-font-smoothing:var(--paper-font-title_-_-webkit-font-smoothing);white-space:var(--paper-font-title_-_white-space);overflow:var(--paper-font-title_-_overflow);text-overflow:var(--paper-font-title_-_text-overflow);font-size:var(--paper-font-title_-_font-size);font-weight:var(--paper-font-title_-_font-weight);line-height:var(--paper-font-title_-_line-height)}h3{font-family:var(--paper-font-subhead_-_font-family);-webkit-font-smoothing:var(--paper-font-subhead_-_-webkit-font-smoothing);white-space:var(--paper-font-subhead_-_white-space);overflow:var(--paper-font-subhead_-_overflow);text-overflow:var(--paper-font-subhead_-_text-overflow);font-size:var(--paper-font-subhead_-_font-size);font-weight:var(--paper-font-subhead_-_font-weight);line-height:var(--paper-font-subhead_-_line-height)}a{color:var(--primary-color)}.secondary{color:var(--secondary-text-color)}.error{color:var(--error-color)}.warning{color:var(--error-color)}ha-button.warning,mwc-button.warning{--mdc-theme-primary:var(--error-color)}${0} .card-actions a{text-decoration:none}.card-actions .warning{--mdc-theme-primary:var(--error-color)}.layout.horizontal,.layout.vertical{display:flex}.layout.inline{display:inline-flex}.layout.horizontal{flex-direction:row}.layout.vertical{flex-direction:column}.layout.wrap{flex-wrap:wrap}.layout.no-wrap{flex-wrap:nowrap}.layout.center,.layout.center-center{align-items:center}.layout.bottom{align-items:flex-end}.layout.center-center,.layout.center-justified{justify-content:center}.flex{flex:1;flex-basis:0.000000001px}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.layout.justified{justify-content:space-between}`),c),u=(0,a.iv)(n||(n=d`ha-dialog{--mdc-dialog-min-width:400px;--mdc-dialog-max-width:600px;--mdc-dialog-max-width:min(600px, 95vw);--justify-action-buttons:space-between}ha-dialog .form{color:var(--primary-text-color)}a{color:var(--primary-color)}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-min-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-max-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-min-height:100%;--mdc-dialog-max-height:100%;--vertical-align-dialog:flex-end;--ha-dialog-border-radius:0}}ha-button.warning,mwc-button.warning{--mdc-theme-primary:var(--error-color)}.error{color:var(--error-color)}`)),f=(0,a.iv)(s||(s=d`.ha-scrollbar::-webkit-scrollbar{width:.4rem;height:.4rem}.ha-scrollbar::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.ha-scrollbar{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}`));(0,a.iv)(l||(l=d`body{background-color:var(--primary-background-color);color:var(--primary-text-color);height:calc(100vh - 32px);width:100vw}`))}}]);
//# sourceMappingURL=22118.31494aec119e0cac.js.map