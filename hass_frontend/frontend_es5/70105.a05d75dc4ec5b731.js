(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["70105"],{73729:function(i,t,e){"use strict";e.d(t,{i:()=>p});var s=e(61701),o=e(72621),a=(e(22152),e(71695),e(47021),e(74966)),n=e(51408),r=e(57243),l=e(50778),d=e(76525);e(23334);let c,u,h,_=i=>i;const g=["button","ha-list-item"],p=(i,t)=>{var e;return(0,r.dy)(c||(c=_` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(e=null==i?void 0:i.localize("ui.common.close"))&&void 0!==e?e:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",t)};(0,s.Z)([(0,l.Mo)("ha-dialog")],(function(i,t){class e extends t{constructor(...t){super(...t),i(this)}}return{F:e,d:[{kind:"field",key:d.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,t){var e;null===(e=this.contentElement)||void 0===e||e.scrollTo(i,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,r.dy)(u||(u=_`<slot name="heading"> ${0} </slot>`),(0,o.Z)(e,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,o.Z)(e,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,g].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(e,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value(){return[n.W,(0,r.iv)(h||(h=_`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))]}}]}}),a.M)},81410:function(i,t,e){"use strict";e.a(i,(async function(i,s){try{e.r(t);var o=e(61701),a=(e(19083),e(71695),e(40251),e(47021),e(31622),e(87515)),n=e(57243),r=e(50778),l=e(36522),d=e(73729),c=e(79011),u=e(28008),h=i([a]);a=(h.then?(await h)():h)[0];let _,g,p,v,f,b,m,k,y,w=i=>i;const x="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",$="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",L="M19,8C19.56,8 20,8.43 20,9A1,1 0 0,1 19,10C18.43,10 18,9.55 18,9C18,8.43 18.43,8 19,8M2,2V11C2,13.96 4.19,16.5 7.14,16.91C7.76,19.92 10.42,22 13.5,22A6.5,6.5 0 0,0 20,15.5V11.81C21.16,11.39 22,10.29 22,9A3,3 0 0,0 19,6A3,3 0 0,0 16,9C16,10.29 16.84,11.4 18,11.81V15.41C18,17.91 16,19.91 13.5,19.91C11.5,19.91 9.82,18.7 9.22,16.9C12,16.3 14,13.8 14,11V2H10V5H12V11A4,4 0 0,1 8,15A4,4 0 0,1 4,11V5H6V2H2Z";(0,o.Z)([(0,r.Mo)("dialog-zwave_js-rebuild-network-routes")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"entry_id",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_status",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_progress_total",value(){return 0}},{kind:"field",decorators:[(0,r.SB)()],key:"_progress_finished",value(){return 0}},{kind:"field",decorators:[(0,r.SB)()],key:"_progress_in_progress",value(){return 0}},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._progress_total=0,this.entry_id=i.entry_id,this._fetchData()}},{kind:"method",key:"closeDialog",value:function(){this.entry_id=void 0,this._status=void 0,this._progress_total=0,this._unsubscribe(),(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this.entry_id?(0,n.dy)(_||(_=w` <ha-dialog open @closed="${0}" .heading="${0}"> ${0} ${0} ${0} ${0} ${0} ${0} </ha-dialog> `),this.closeDialog,(0,d.i)(this.hass,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.title")),this._status?"":(0,n.dy)(g||(g=w` <div class="flex-container"> <ha-svg-icon .path="${0}" class="introduction"></ha-svg-icon> <div class="status"> <p> ${0} </p> </div> </div> <p> <em> ${0} </em> </p> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),L,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.introduction"),this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.traffic_warning"),this._startRebuildingRoutes,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.start_rebuilding_routes")),"started"===this._status?(0,n.dy)(p||(p=w` <div class="status"> <p> <b> ${0} </b> </p> <p> ${0} </p> </div> ${0} <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.in_progress"),this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.run_in_background"),this._progress_total?"":(0,n.dy)(v||(v=w` <mwc-linear-progress indeterminate> </mwc-linear-progress> `)),this._stopRebuildingRoutes,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.stop_rebuilding_routes"),this.closeDialog,this.hass.localize("ui.common.close")):"","failed"===this._status?(0,n.dy)(f||(f=w` <div class="flex-container"> <ha-svg-icon .path="${0}" class="failed"></ha-svg-icon> <div class="status"> <p> ${0} </p> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),$,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.rebuilding_routes_failed"),this.closeDialog,this.hass.localize("ui.common.close")):"","finished"===this._status?(0,n.dy)(b||(b=w` <div class="flex-container"> <ha-svg-icon .path="${0}" class="success"></ha-svg-icon> <div class="status"> <p> ${0} </p> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),x,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.rebuilding_routes_complete"),this.closeDialog,this.hass.localize("ui.common.close")):"","cancelled"===this._status?(0,n.dy)(m||(m=w` <div class="flex-container"> <ha-svg-icon .path="${0}" class="failed"></ha-svg-icon> <div class="status"> <p> ${0} </p> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),$,this.hass.localize("ui.panel.config.zwave_js.rebuild_network_routes.rebuilding_routes_cancelled"),this.closeDialog,this.hass.localize("ui.common.close")):"",this._progress_total&&"finished"!==this._status?(0,n.dy)(k||(k=w` <mwc-linear-progress determinate .progress="${0}" .buffer="${0}"> </mwc-linear-progress> `),this._progress_finished,this._progress_in_progress):""):n.Ld}},{kind:"method",key:"_fetchData",value:async function(){if(!this.hass)return;(await(0,c.OV)(this.hass,{entry_id:this.entry_id})).controller.is_rebuilding_routes&&(this._status="started",this._subscribed=(0,c.OE)(this.hass,this.entry_id,this._handleMessage.bind(this)))}},{kind:"method",key:"_startRebuildingRoutes",value:function(){this.hass&&((0,c.nk)(this.hass,this.entry_id),this._status="started",this._subscribed=(0,c.OE)(this.hass,this.entry_id,this._handleMessage.bind(this)))}},{kind:"method",key:"_stopRebuildingRoutes",value:function(){this.hass&&((0,c.rD)(this.hass,this.entry_id),this._unsubscribe(),this._status="cancelled")}},{kind:"method",key:"_handleMessage",value:function(i){if("rebuild routes progress"===i.event){let t=0,e=0;for(const s of Object.values(i.rebuild_routes_status))"pending"===s&&e++,["skipped","failed","done"].includes(s)&&t++;this._progress_total=Object.keys(i.rebuild_routes_status).length,this._progress_finished=t/this._progress_total,this._progress_in_progress=e/this._progress_total}"rebuild routes done"===i.event&&(this._unsubscribe(),this._status="finished")}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((i=>i())),this._subscribed=void 0)}},{kind:"get",static:!0,key:"styles",value:function(){return[u.yu,(0,n.iv)(y||(y=w`.success{color:var(--success-color)}.failed{color:var(--error-color)}.flex-container{display:flex;align-items:center}ha-svg-icon{width:68px;height:48px}ha-svg-icon.introduction{color:var(--primary-color)}.flex-container ha-svg-icon{margin-right:20px;margin-inline-end:20px;margin-inline-start:initial}mwc-linear-progress{margin-top:8px}`))]}}]}}),n.oi);s()}catch(_){s(_)}}))},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(i,t){return void 0!==t&&(t=!!t),this.hasAttribute(i)?!!t||(this.removeAttribute(i),!1):!1!==t&&(this.setAttribute(i,""),!0)})},31948:function(i,t,e){"use strict";e.a(i,(async function(i,t){try{e(71695),e(40251),e(47021);"function"!=typeof window.ResizeObserver&&(window.ResizeObserver=(await e.e("73378").then(e.bind(e,88198))).default),t()}catch(s){t(s)}}),1)}}]);
//# sourceMappingURL=70105.a05d75dc4ec5b731.js.map