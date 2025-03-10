"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["20875"],{29567:function(e,t,i){i.d(t,{h:()=>s});i(52247),i(71695),i(9359),i(31526),i(47021);var a=i(57243),o=i(92903);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==o.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),a.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},59826:function(e,t,i){var a=i(61701),o=(i(71695),i(47021),i(31622)),s=i(57243),d=i(50778),n=i(22344);let l,r=e=>e;(0,a.Z)([(0,d.Mo)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[n.W,(0,s.iv)(l||(l=r`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}:host([destructive]){--mdc-theme-primary:var(--error-color)}`))]}}]}}),o.Button)},95198:function(e,t,i){var a=i(61701),o=(i(71695),i(47021),i(57243)),s=i(50778);let d,n,l=e=>e;(0,a.Z)([(0,s.Mo)("ha-dialog-header")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return(0,o.dy)(d||(d=l` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-content"> <div class="header-title"> <slot name="title"></slot> </div> <div class="header-subtitle"> <slot name="subtitle"></slot> </div> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,o.iv)(n||(n=l`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`))]}}]}}),o.oi)},73729:function(e,t,i){i.d(t,{i:()=>g});var a=i(61701),o=i(72621),s=(i(22152),i(71695),i(47021),i(74966)),d=i(51408),n=i(57243),l=i(50778),r=i(76525);i(23334);let c,h,p,u=e=>e;const m=["button","ha-list-item"],g=(e,t)=>{var i;return(0,n.dy)(c||(c=u` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(i=null==e?void 0:e.localize("ui.common.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",t)};(0,a.Z)([(0,l.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,n.dy)(h||(h=u`<slot name="heading"> ${0} </slot>`),(0,o.Z)(i,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,o.Z)(i,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,m].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value(){return[d.W,(0,n.iv)(p||(p=u`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))]}}]}}),s.M)},13928:function(e,t,i){i.r(t),i.d(t,{HaIconNext:()=>n});var a=i(61701),o=(i(71695),i(47021),i(50778)),s=i(5111),d=i(37583);let n=(0,a.Z)([(0,o.Mo)("ha-icon-next")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"path",value(){return"rtl"===s.E.document.dir?"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}}]}}),d.HaSvgIcon)},74633:function(e,t,i){var a=i(61701),o=i(72621),s=(i(71695),i(47021),i(78755)),d=i(57243),n=i(50778);let l,r=e=>e;(0,a.Z)([(0,n.Mo)("ha-md-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(i,"styles",this),(0,d.iv)(l||(l=r`:host{--ha-icon-display:block;--md-sys-color-primary:var(--primary-text-color);--md-sys-color-secondary:var(--secondary-text-color);--md-sys-color-surface:var(--card-background-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--secondary-text-color)}md-item{overflow:var(--md-item-overflow,hidden);align-items:var(--md-item-align-items,center)}`))]}}]}}),s.g)},19993:function(e,t,i){var a=i(61701),o=i(72621),s=(i(71695),i(47021),i(623)),d=i(57243),n=i(50778);let l,r=e=>e;(0,a.Z)([(0,n.Mo)("ha-md-list")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(i,"styles",this),(0,d.iv)(l||(l=r`:host{--md-sys-color-surface:var(--card-background-color)}`))]}}]}}),s.j)},88935:function(e,t,i){i.d(t,{Cu:()=>k,Ex:()=>l,R9:()=>c,_T:()=>h,fC:()=>r,gK:()=>p,lN:()=>_,nJ:()=>f,tB:()=>m,td:()=>n,uV:()=>g,xO:()=>v,xr:()=>u});i(71695),i(9359),i(56475),i(1331),i(70104),i(40251),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(47021);var a=i(83523),o=i(71857),s=i(72344),d=i(22274);let n=function(e){return e.THREAD="thread",e.WIFI="wifi",e.ETHERNET="ethernet",e.UNKNOWN="unknown",e}({});const l=e=>{var t;return null===(t=e.auth.external)||void 0===t?void 0:t.config.canCommissionMatter},r=async e=>{if((0,s.p)(e,"thread")){const t=(await(0,d.r9)(e)).datasets.find((e=>e.preferred));if(t)return e.auth.external.fireMessage({type:"matter/commission",payload:{active_operational_dataset:(await(0,d.EM)(e,t.dataset_id)).tlv,border_agent_id:t.preferred_border_agent_id,mac_extended_address:t.preferred_extended_address,extended_pan_id:t.extended_pan_id}})}return e.auth.external.fireMessage({type:"matter/commission"})},c=(e,t)=>{let i;const s=(0,o.q4)(e.connection,(e=>{if(!i)return void(i=new Set(Object.values(e).filter((e=>e.identifiers.find((e=>"matter"===e[0])))).map((e=>e.id))));const o=Object.values(e).filter((e=>e.identifiers.find((e=>"matter"===e[0]))&&!i.has(e.id)));o.length&&(s(),i=void 0,null==t||t(),(0,a.c)(`/config/devices/device/${o[0].id}`))}));return()=>{s(),i=void 0}},h=(e,t)=>e.callWS({type:"matter/commission",code:t}),p=(e,t)=>e.callWS({type:"matter/commission_on_network",pin:t}),u=(e,t,i)=>e.callWS({type:"matter/set_wifi_credentials",network_name:t,password:i}),m=(e,t)=>e.callWS({type:"matter/set_thread",thread_operation_dataset:t}),g=(e,t)=>e.callWS({type:"matter/node_diagnostics",device_id:t}),v=(e,t)=>e.callWS({type:"matter/ping_node",device_id:t}),_=(e,t)=>e.callWS({type:"matter/open_commissioning_window",device_id:t}),f=(e,t,i)=>e.callWS({type:"matter/remove_matter_fabric",device_id:t,fabric_index:i}),k=(e,t)=>e.callWS({type:"matter/interview_node",device_id:t})},22274:function(e,t,i){i.d(t,{EM:()=>d,NO:()=>c,Xt:()=>l,h:()=>o,jK:()=>n,lR:()=>r,r9:()=>s});class a{constructor(){this.routers=void 0,this.routers={}}processEvent(e){return"router_discovered"===e.type?this.routers[e.key]=e.data:"router_removed"===e.type&&delete this.routers[e.key],Object.values(this.routers)}}const o=(e,t)=>{const i=new a;return e.connection.subscribeMessage((e=>t(i.processEvent(e))),{type:"thread/discover_routers"})},s=e=>e.callWS({type:"thread/list_datasets"}),d=(e,t)=>e.callWS({type:"thread/get_dataset_tlv",dataset_id:t}),n=(e,t,i)=>e.callWS({type:"thread/add_dataset_tlv",source:t,tlv:i}),l=(e,t)=>e.callWS({type:"thread/delete_dataset",dataset_id:t}),r=(e,t)=>e.callWS({type:"thread/set_preferred_dataset",dataset_id:t}),c=(e,t,i,a)=>e.callWS({type:"thread/set_preferred_border_agent",dataset_id:t,border_agent_id:i,extended_address:a})},45944:function(e,t,i){var a=i(61701),o=(i(71695),i(40251),i(19134),i(97003),i(69797),i(47021),i(57243)),s=i(50778),d=i(29567),n=i(36522),l=(i(95198),i(23334),i(54202),i(59826),i(73729),i(88935)),r=i(28008);i(13928),i(74633),i(19993),i(83166);let c;const h=(0,o.iv)(c||(c=(e=>e)`.content{padding:16px var(--horizontal-padding,16px)}p{margin:0}p:not(:last-child){margin-bottom:8px}ol{padding-inline-start:20px;margin-block-start:0;margin-block-end:8px}li{margin-bottom:8px}.link{color:var(--primary-color);cursor:pointer;text-decoration:underline}ha-md-list{padding:0;--md-list-item-leading-space:var(--horizontal-padding, 16px);--md-list-item-trailing-space:var(--horizontal-padding, 16px);margin-bottom:16px}ha-textfield{width:100%}`));let p,u,m,g,v,_=e=>e,f=((0,a.Z)([(0,s.Mo)("matter-add-device-apple-home")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_code",value(){return""}},{kind:"method",key:"render",value:function(){return(0,o.dy)(p||(p=_` <div class="content"> <ol> <li> ${0} </li> <li> ${0} </li> <li> ${0} </li> </ol> <br> <p> ${0} </p> <ha-textfield label="${0}" .value="${0}" @input="${0}"></ha-textfield> </div> `),this.hass.localize("ui.dialogs.matter-add-device.apple_home.step_1",{accessory_settings:(0,o.dy)(u||(u=_`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.apple_home.accessory_settings"))}),this.hass.localize("ui.dialogs.matter-add-device.apple_home.step_2",{turn_on_pairing_mode:(0,o.dy)(m||(m=_`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.apple_home.turn_on_pairing_mode"))}),this.hass.localize("ui.dialogs.matter-add-device.apple_home.step_3"),this.hass.localize("ui.dialogs.matter-add-device.apple_home.code_instructions"),this.hass.localize("ui.dialogs.matter-add-device.apple_home.setup_code"),this._code,this._onCodeChanged)}},{kind:"method",key:"_onCodeChanged",value:function(e){const t=e.currentTarget.value;this._code=t,(0,n.B)(this,"pairing-code-changed",{code:t})}},{kind:"field",static:!0,key:"styles",value(){return[h]}}]}}),o.oi),e=>e);(0,a.Z)([(0,s.Mo)("matter-add-device-existing")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return(0,o.dy)(g||(g=f` <div class="content"> <p> ${0} </p> </div> <ha-md-list> <ha-md-list-item interactive type="button" .step="${0}" @click="${0}" @keydown="${0}"> <img src="/static/images/logo_google_home.png" alt="" class="logo" slot="start"> <span slot="headline"> ${0} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> <ha-md-list-item interactive type="button" .step="${0}" @click="${0}" @keydown="${0}"> <img src="/static/images/logo_apple_home.png" alt="" class="logo" slot="start"> <span slot="headline"> ${0} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> <ha-md-list-item interactive type="button" .step="${0}" @click="${0}" @keydown="${0}"> <div class="logo" slot="start"> <ha-svg-icon path="${0}"></ha-svg-icon> </div> <span slot="headline"> ${0} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> </ha-md-list> `),this.hass.localize("ui.dialogs.matter-add-device.existing.question"),"google_home",this._onItemClick,this._onItemClick,this.hass.localize("ui.dialogs.matter-add-device.existing.answer_google_home"),"apple_home",this._onItemClick,this._onItemClick,this.hass.localize("ui.dialogs.matter-add-device.existing.answer_apple_home"),"generic",this._onItemClick,this._onItemClick,"M12,3L2,12H5V20H19V12H22L12,3M12,8.5C14.34,8.5 16.46,9.43 18,10.94L16.8,12.12C15.58,10.91 13.88,10.17 12,10.17C10.12,10.17 8.42,10.91 7.2,12.12L6,10.94C7.54,9.43 9.66,8.5 12,8.5M12,11.83C13.4,11.83 14.67,12.39 15.6,13.3L14.4,14.47C13.79,13.87 12.94,13.5 12,13.5C11.06,13.5 10.21,13.87 9.6,14.47L8.4,13.3C9.33,12.39 10.6,11.83 12,11.83M12,15.17C12.94,15.17 13.7,15.91 13.7,16.83C13.7,17.75 12.94,18.5 12,18.5C11.06,18.5 10.3,17.75 10.3,16.83C10.3,15.91 11.06,15.17 12,15.17Z",this.hass.localize("ui.dialogs.matter-add-device.existing.answer_generic"))}},{kind:"method",key:"_onItemClick",value:function(e){if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;const t=e.currentTarget.step;(0,n.B)(this,"step-selected",{step:t})}},{kind:"field",static:!0,key:"styles",value(){return[h,(0,o.iv)(v||(v=f`.logo{width:48px;height:48px;border-radius:12px;border:1px solid var(--divider-color);padding:10px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;object-fit:contain}.logo ha-svg-icon{--mdc-icon-size:36px}`))]}}]}}),o.oi);let k,y,x,b,$,w,C,z,L,S,M=e=>e,E=((0,a.Z)([(0,s.Mo)("matter-add-device-generic")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_code",value(){return""}},{kind:"method",key:"render",value:function(){return(0,o.dy)(k||(k=M` <div class="content"> <p> ${0} </p> <ha-textfield label="${0}" .value="${0}" @input="${0}"></ha-textfield> </div> `),this.hass.localize("ui.dialogs.matter-add-device.generic.code_instructions"),this.hass.localize("ui.dialogs.matter-add-device.generic.setup_code"),this._code,this._onCodeChanged)}},{kind:"method",key:"_onCodeChanged",value:function(e){const t=e.currentTarget.value;this._code=t,(0,n.B)(this,"pairing-code-changed",{code:t})}},{kind:"field",static:!0,key:"styles",value(){return[h]}}]}}),o.oi),e=>e),Z=((0,a.Z)([(0,s.Mo)("matter-add-device-google-home")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return(0,o.dy)(y||(y=E` <div class="content"> <ol> <li> ${0} </li> <li> ${0} </li> <li> ${0} <span class="link" type="button" tabindex="0" @keydown="${0}" @click="${0}"> ${0} </span> </li> <li> ${0} </li> </ol> <br> </div> `),this.hass.localize("ui.dialogs.matter-add-device.google_home.step_1"),this.hass.localize("ui.dialogs.matter-add-device.google_home.step_2",{linked_matter_apps_services:(0,o.dy)(x||(x=E`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.google_home.linked_matter_apps_services"))}),this.hass.localize("ui.dialogs.matter-add-device.google_home.step_3",{link_apps_services:(0,o.dy)(b||(b=E`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.google_home.link_apps_services")),home_assistant:(0,o.dy)($||($=E`<b>ioBroker</b>`))}),this._nextStep,this._nextStep,this.hass.localize("ui.dialogs.matter-add-device.google_home.no_home_assistant"),this.hass.localize("ui.dialogs.matter-add-device.google_home.redirect"))}},{kind:"method",key:"_nextStep",value:function(){(0,n.B)(this,"step-selected",{step:"google_home_fallback"})}},{kind:"field",static:!0,key:"styles",value(){return[h]}}]}}),o.oi),e=>e),I=((0,a.Z)([(0,s.Mo)("matter-add-device-google-home-fallback")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_code",value(){return""}},{kind:"method",key:"render",value:function(){return(0,o.dy)(w||(w=Z` <div class="content"> <ol> <li> ${0} </li> <li> ${0} </li> <li> ${0} </li> </ol> <br> <p> ${0} </p> <ha-textfield label="${0}" .value="${0}" @input="${0}"></ha-textfield> </div> `),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.step_1"),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.step_2",{linked_matter_apps_services:(0,o.dy)(C||(C=Z`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.linked_matter_apps_services"))}),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.step_3",{link_apps_services:(0,o.dy)(z||(z=Z`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.link_apps_services")),use_pairing_code:(0,o.dy)(L||(L=Z`<b>${0}</b>`),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.use_pairing_code"))}),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.code_instructions"),this.hass.localize("ui.dialogs.matter-add-device.google_home_fallback.pairing_code"),this._code,this._onCodeChanged)}},{kind:"method",key:"_onCodeChanged",value:function(e){const t=e.currentTarget.value;this._code=t,(0,n.B)(this,"pairing-code-changed",{code:t})}},{kind:"field",static:!0,key:"styles",value(){return[h]}}]}}),o.oi),e=>e);(0,a.Z)([(0,s.Mo)("matter-add-device-main")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return(0,o.dy)(S||(S=I` <div class="content"> <p class="text"> ${0} </p> </div> <ha-md-list> <ha-md-list-item interactive type="button" .step="${0}" @click="${0}" @keydown="${0}"> <span slot="headline"> ${0} </span> <span slot="supporting-text"> ${0} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> <ha-md-list-item interactive type="button" .step="${0}" @click="${0}" @keydown="${0}"> <span slot="headline"> ${0} </span> <span slot="supporting-text"> ${0} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> </ha-md-list> `),this.hass.localize("ui.dialogs.matter-add-device.main.question"),"new",this._onItemClick,this._onItemClick,this.hass.localize("ui.dialogs.matter-add-device.main.answer_new"),this.hass.localize("ui.dialogs.matter-add-device.main.answer_new_description"),"existing",this._onItemClick,this._onItemClick,this.hass.localize("ui.dialogs.matter-add-device.main.answer_existing"),this.hass.localize("ui.dialogs.matter-add-device.main.answer_existing_description"))}},{kind:"method",key:"_onItemClick",value:function(e){if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;const t=e.currentTarget.step;(0,n.B)(this,"step-selected",{step:t})}},{kind:"field",static:!0,key:"styles",value(){return[h]}}]}}),o.oi);i(97206);let W,A,F,B,j,T=e=>e,D=((0,a.Z)([(0,s.Mo)("matter-add-device-new")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"firstUpdated",value:function(){(0,l.Ex)(this.hass)&&(0,l.fC)(this.hass)}},{kind:"method",key:"render",value:function(){return(0,l.Ex)(this.hass)?(0,o.dy)(W||(W=T` <div class="content"> <ha-circular-progress size="medium" indeterminate></ha-circular-progress> </div> `)):(0,o.dy)(A||(A=T` <div class="content"> <p>${0}</p> <p> ${0} </p> <div class="app-qr"> <a target="_blank" rel="noreferrer noopener" href="https://apps.apple.com/app/home-assistant/id1099568401?mt=8"> <img loading="lazy" src="/static/images/appstore.svg" alt="${0}" class="icon"> <img loading="lazy" src="/static/images/qr-appstore.svg" alt="${0}"> </a> <a target="_blank" rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android"> <img loading="lazy" src="/static/images/playstore.svg" alt="${0}" class="icon"> <img loading="lazy" src="/static/images/qr-playstore.svg" alt="${0}"> </a> </div> </div> `),this.hass.localize("ui.dialogs.matter-add-device.new.note"),this.hass.localize("ui.dialogs.matter-add-device.new.download_app"),this.hass.localize("ui.dialogs.matter-add-device.new.appstore"),this.hass.localize("ui.dialogs.matter-add-device.new.appstore"),this.hass.localize("ui.dialogs.matter-add-device.new.playstore"),this.hass.localize("ui.dialogs.matter-add-device.new.playstore"))}},{kind:"field",static:!0,key:"styles",value(){return[h,(0,o.iv)(F||(F=T`.app-qr{margin:24px auto 0 auto;display:flex;justify-content:space-between;padding:0 24px;box-sizing:border-box;gap:16px;width:100%;max-width:400px}.app-qr a,.app-qr img{flex:1}`))]}}]}}),o.oi),e=>e);(0,a.Z)([(0,s.Mo)("matter-add-device-commissioning")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return(0,o.dy)(B||(B=D` <div class="content"> <ha-circular-progress size="medium" indeterminate></ha-circular-progress> <p> ${0} </p> </div> `),this.hass.localize("ui.dialogs.matter-add-device.commissioning.note"))}},{kind:"field",static:!0,key:"styles",value(){return[h,(0,o.iv)(j||(j=D`.content{display:flex;align-items:center;flex-direction:column;text-align:center}ha-circular-progress{margin-bottom:24px}`))]}}]}}),o.oi);var H=i(72473);let q,N,O,P,R,K,U,X=e=>e;const V={main:void 0,new:"main",existing:"main",google_home:"existing",google_home_fallback:"google_home",apple_home:"existing",generic:"existing",commissioning:void 0};(0,a.Z)([(0,s.Mo)("dialog-matter-add-device")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_open",value(){return!1}},{kind:"field",decorators:[(0,s.SB)()],key:"_pairingCode",value(){return""}},{kind:"field",decorators:[(0,s.SB)()],key:"_step",value(){return"main"}},{kind:"field",key:"_unsub",value:void 0},{kind:"method",key:"showDialog",value:function(){this._open=!0,this._unsub=(0,l.R9)(this.hass,(()=>this.closeDialog()))}},{kind:"method",key:"closeDialog",value:function(){var e;this._open=!1,this._step="main",this._pairingCode="",null===(e=this._unsub)||void 0===e||e.call(this),this._unsub=void 0,(0,n.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"_handleStepSelected",value:function(e){this._step=e.detail.step,this._pairingCode=""}},{kind:"method",key:"_handlePairingCodeChanged",value:function(e){this._pairingCode=e.detail.code}},{kind:"method",key:"_back",value:function(){const e=V[this._step];e&&(this._step=e)}},{kind:"method",key:"_renderStep",value:function(){return(0,o.dy)(q||(q=X` <div @pairing-code-changed="${0}" @step-selected="${0}" .hass="${0}"> ${0} </div> `),this._handlePairingCodeChanged,this._handleStepSelected,this.hass,(0,d.h)(`matter-add-device-${this._step.replaceAll("_","-")}`,{hass:this.hass}))}},{kind:"method",key:"_addDevice",value:async function(){const e=this._pairingCode,t=this._step;try{this._step="commissioning",await(0,l._T)(this.hass,e)}catch(i){(0,H.C)(this,{message:this.hass.localize("ui.dialogs.matter-add-device.add_device_failed"),duration:2e3})}this._step=t}},{kind:"method",key:"_renderActions",value:function(){return"apple_home"===this._step||"google_home_fallback"===this._step||"generic"===this._step?(0,o.dy)(N||(N=X` <ha-button slot="primaryAction" @click="${0}" .disabled="${0}"> ${0} </ha-button> `),this._addDevice,!this._pairingCode,this.hass.localize("ui.dialogs.matter-add-device.add_device")):"new"===this._step?(0,o.dy)(O||(O=X` <ha-button slot="primaryAction" @click="${0}"> ${0} </ha-button> `),this.closeDialog,this.hass.localize("ui.common.ok")):o.Ld}},{kind:"method",key:"render",value:function(){if(!this._open)return o.Ld;const e=this.hass.localize(`ui.dialogs.matter-add-device.${this._step}.header`),t=V[this._step],i=this._renderActions();return(0,o.dy)(P||(P=X` <ha-dialog open @closed="${0}" .heading="${0}" ?hideActions="${0}" scrimClickAction escapeKeyAction> <ha-dialog-header slot="heading"> ${0} <span slot="title">${0}</span> </ha-dialog-header> ${0} ${0} </ha-dialog> `),this.closeDialog,e,i===o.Ld,t?(0,o.dy)(R||(R=X` <ha-icon-button-arrow-prev slot="navigationIcon" .hass="${0}" @click="${0}"></ha-icon-button-arrow-prev> `),this.hass,this._back):(0,o.dy)(K||(K=X` <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${0}" .path="${0}"></ha-icon-button> `),this.hass.localize("ui.common.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"),e,this._renderStep(),i)}},{kind:"field",static:!0,key:"styles",value(){return[r.yu,(0,o.iv)(U||(U=X`:host{--horizontal-padding:24px}ha-dialog{--dialog-content-padding:0}ha-dialog{--mdc-dialog-min-width:450px;--mdc-dialog-max-width:450px}@media all and (max-width:450px),all and (max-height:500px){:host{--horizontal-padding:16px}ha-dialog{--mdc-dialog-min-width:calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );--mdc-dialog-max-width:calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          )}}.loading{padding:24px;display:flex;align-items:center;justify-content:center}`))]}}]}}),o.oi)}}]);
//# sourceMappingURL=20875.9ed07072eca03d36.js.map