"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["39027"],{46467:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{D_:()=>w,NC:()=>_,Nh:()=>y,U8:()=>x,WB:()=>h,mn:()=>m,p6:()=>c,ud:()=>f,yQ:()=>k});i(63434),i(9359),i(1331),i(96829);var n=i(16485),o=i(27486),l=i(20382),d=i(11104),r=e([n,d]);[n,d]=r.then?(await r)():r;(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)})));const c=(e,t,i)=>s(t,i.time_zone).format(e),s=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),m=(e,t,i)=>u(t,i.time_zone).format(e),u=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),h=(e,t,i)=>{var a,n,o,d;const r=g(t,i.time_zone);if(t.date_format===l.t6.language||t.date_format===l.t6.system)return r.format(e);const c=r.formatToParts(e),s=null===(a=c.find((e=>"literal"===e.type)))||void 0===a?void 0:a.value,m=null===(n=c.find((e=>"day"===e.type)))||void 0===n?void 0:n.value,u=null===(o=c.find((e=>"month"===e.type)))||void 0===o?void 0:o.value,h=null===(d=c.find((e=>"year"===e.type)))||void 0===d?void 0:d.value,f=c.at(c.length-1);let p="literal"===(null==f?void 0:f.type)?null==f?void 0:f.value:"";"bg"===t.language&&t.date_format===l.t6.YMD&&(p="");return{[l.t6.DMY]:`${m}${s}${u}${s}${h}${p}`,[l.t6.MDY]:`${u}${s}${m}${s}${h}${p}`,[l.t6.YMD]:`${h}${s}${u}${s}${m}${p}`}[t.date_format]},g=(0,o.Z)(((e,t)=>{const i=e.date_format===l.t6.system?void 0:e.language;return e.date_format===l.t6.language||(e.date_format,l.t6.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)})})),f=(e,t,i)=>p(t,i.time_zone).format(e),p=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,d.f)(e.time_zone,t)}))),_=(e,t,i)=>v(t,i.time_zone).format(e),v=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),y=(e,t,i)=>b(t,i.time_zone).format(e),b=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,d.f)(e.time_zone,t)}))),k=(e,t,i)=>z(t,i.time_zone).format(e),z=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),w=(e,t,i)=>Z(t,i.time_zone).format(e),Z=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,d.f)(e.time_zone,t)}))),x=(e,t,i)=>$(t,i.time_zone).format(e),$=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,d.f)(e.time_zone,t)})));a()}catch(c){a(c)}}))},64214:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{DG:()=>f,E8:()=>b,Fu:()=>y,NR:()=>z,W0:()=>h,o0:()=>m,yD:()=>_});var n=i(16485),o=i(27486),l=i(46467),d=i(33570),r=i(11104),c=i(16922),s=e([n,r,l,d]);[n,r,l,d]=s.then?(await s)():s;const m=(e,t,i)=>u(t,i.time_zone).format(e),u=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,c.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,c.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),h=e=>g().format(e),g=(0,o.Z)((()=>new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))),f=(e,t,i)=>p(t,i.time_zone).format(e),p=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,c.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,c.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),_=(e,t,i)=>v(t,i.time_zone).format(e),v=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,c.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,c.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),y=(e,t,i)=>(new Date).getFullYear()===e.getFullYear()?_(e,t,i):f(e,t,i),b=(e,t,i)=>k(t,i.time_zone).format(e),k=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,c.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,c.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),z=(e,t,i)=>`${(0,l.WB)(e,t,i)}, ${(0,d.mr)(e,t,i)}`;a()}catch(m){a(m)}}))},33570:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Vu:()=>m,Zs:()=>f,mr:()=>c,xO:()=>h});var n=i(16485),o=i(27486),l=i(11104),d=i(16922),r=e([n,l]);[n,l]=r.then?(await r)():r;const c=(e,t,i)=>s(t,i.time_zone).format(e),s=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,d.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),m=(e,t,i)=>u(t,i.time_zone).format(e),u=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,d.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,d.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),h=(e,t,i)=>g(t,i.time_zone).format(e),g=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,d.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),f=(e,t,i)=>p(t,i.time_zone).format(e),p=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,l.f)(e.time_zone,t)})));a()}catch(c){a(c)}}))},11104:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Q:()=>m,f:()=>u});var n,o,l,d=i(16485),r=i(20382),c=e([d]);d=(c.then?(await c)():c)[0];const s=null===(n=Intl.DateTimeFormat)||void 0===n||null===(o=(l=n.call(Intl)).resolvedOptions)||void 0===o?void 0:o.call(l).timeZone,m=null!=s?s:"UTC",u=(e,t)=>e===r.c_.local&&s?m:t;a()}catch(s){a(s)}}))},16922:function(e,t,i){i.d(t,{y:()=>o});i(19083),i(61006);var a=i(27486),n=i(20382);const o=(0,a.Z)((e=>{if(e.time_format===n.zt.language||e.time_format===n.zt.system){const t=e.time_format===n.zt.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===n.zt.am_pm}))},73729:function(e,t,i){i.d(t,{i:()=>f});var a=i(61701),n=i(72621),o=(i(22152),i(71695),i(47021),i(74966)),l=i(51408),d=i(57243),r=i(50778),c=i(76525);i(23334);let s,m,u,h=e=>e;const g=["button","ha-list-item"],f=(e,t)=>{var i;return(0,d.dy)(s||(s=h` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(i=null==e?void 0:e.localize("ui.common.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",t)};(0,a.Z)([(0,r.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,d.dy)(m||(m=h`<slot name="heading"> ${0} </slot>`),(0,n.Z)(i,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,n.Z)(i,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,g].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)(i,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,d.iv)(u||(u=h`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))]}}]}}),o.M)},94223:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t);var n=i(61701),o=(i(71695),i(47021),i(57243)),l=i(50778),d=i(64214),r=i(36522),c=(i(99426),i(59826),i(23334),i(73729)),s=i(28008),m=i(11225),u=e([d]);d=(u.then?(await u)():u)[0];let h,g,f,p,_=e=>e;const v="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",y="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";(0,n.Z)([(0,l.Mo)("dialog-cloud-already-connected")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_obfuscateIp",value(){return!0}},{kind:"method",key:"showDialog",value:function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){var e,t;null===(e=this._params)||void 0===e||null===(t=e.closeDialog)||void 0===t||t.call(e),this._params=void 0,this._obfuscateIp=!0,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return o.Ld;const{details:e}=this._params;return(0,o.dy)(h||(h=_` <ha-dialog open @closed="${0}" .heading="${0}"> <div class="intro"> <span> ${0} </span> <b> ${0} </b> </div> <div class="instance-details"> ${0} ${0} <div class="instance-detail"> <span> ${0}: </span> <div class="obfuscated"> <span> ${0} </span> <ha-icon-button class="toggle-unmasked-url" .label="${0}" @click="${0}" .path="${0}"></ha-icon-button> </div> </div> <div class="instance-detail"> <span> ${0}: </span> <span> ${0} </span> </div> </div> <ha-alert alert-type="info" .title="${0}"> ${0} </ha-alert> <ha-button @click="${0}" slot="secondaryAction"> ${0} </ha-button> <ha-button @click="${0}" slot="primaryAction"> ${0} </ha-button> </ha-dialog> `),this.closeDialog,(0,c.i)(this.hass,this.hass.localize("ui.panel.config.cloud.dialog_already_connected.heading")),this.hass.localize("ui.panel.config.cloud.dialog_already_connected.description"),this.hass.localize("ui.panel.config.cloud.dialog_already_connected.other_home_assistant"),e.name?(0,o.dy)(g||(g=_`<div class="instance-detail"> <span> ${0}: </span> <span>${0}</span> </div>`),this.hass.localize("ui.panel.config.cloud.dialog_already_connected.instance_name"),e.name):o.Ld,e.version?(0,o.dy)(f||(f=_`<div class="instance-detail"> <span> ${0}: </span> <span>${0}</span> </div>`),this.hass.localize("ui.panel.config.cloud.dialog_already_connected.instance_version"),e.version):o.Ld,this.hass.localize("ui.panel.config.cloud.dialog_already_connected.ip_address"),this._obfuscateIp?(0,m.t)(e.remote_ip_address):e.remote_ip_address,this.hass.localize("ui.panel.config.cloud.dialog_already_connected.obfuscated_ip."+(this._obfuscateIp?"hide":"show")),this._toggleObfuscateIp,this._obfuscateIp?v:y,this.hass.localize("ui.panel.config.cloud.dialog_already_connected.connected_at"),(0,d.o0)(new Date(e.connected_at),this.hass.locale,this.hass.config),this.hass.localize("ui.panel.config.cloud.dialog_already_connected.info_backups.title"),this.hass.localize("ui.panel.config.cloud.dialog_already_connected.info_backups.description"),this.closeDialog,this.hass.localize("ui.common.cancel"),this._logInHere,this.hass.localize("ui.panel.config.cloud.dialog_already_connected.login_here"))}},{kind:"method",key:"_toggleObfuscateIp",value:function(){this._obfuscateIp=!this._obfuscateIp}},{kind:"method",key:"_logInHere",value:function(){var e,t;null===(e=this._params)||void 0===e||null===(t=e.logInHereAction)||void 0===t||t.call(e),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[s.yu,(0,o.iv)(p||(p=_`ha-dialog{--mdc-dialog-max-width:535px}.intro b{display:block;margin-top:16px}.instance-details{display:flex;flex-direction:column;margin-bottom:16px}.instance-detail{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.obfuscated{align-items:center;display:flex;flex-direction:row}`))]}}]}}),o.oi);a()}catch(h){a(h)}}))},11225:function(e,t,i){i.d(t,{t:()=>a});i(19134),i(97499),i(97003);function a(e){return e.endsWith(".ui.nabu.casa")?"https://•••••••••••••••••.ui.nabu.casa":e.replace(/(?<=:\/\/)[\w-]+|(?<=\.)[\w-]+/g,(e=>"•".repeat(e.length)))}},63434:function(e,t,i){var a=i(40810),n=i(12360),o=i(13053),l=i(88045),d=i(35709);a({target:"Array",proto:!0},{at:function(e){var t=n(this),i=o(t),a=l(e),d=a>=0?a:i+a;return d<0||d>=i?void 0:t[d]}}),d("at")},96829:function(e,t,i){var a=i(40810),n=i(72878),o=i(95011),l=i(88045),d=i(72616),r=i(29660),c=n("".charAt);a({target:"String",proto:!0,forced:r((function(){return"\ud842"!=="𠮷".at(-2)}))},{at:function(e){var t=d(o(this)),i=t.length,a=l(e),n=a>=0?a:i+a;return n<0||n>=i?void 0:c(t,n)}})}}]);
//# sourceMappingURL=39027.ee755099aea6be56.js.map