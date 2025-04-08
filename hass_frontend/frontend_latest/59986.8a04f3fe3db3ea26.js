export const __webpack_ids__=["59986"];export const __webpack_modules__={49976:function(e,i,t){t.d(i,{U:()=>a});const a=e=>e.stopPropagation()},73729:function(e,i,t){t.d(i,{i:()=>h});var a=t(44249),o=t(72621),n=t(74966),s=t(51408),d=t(57243),l=t(15093),r=t(76525);t(23334);const c=["button","ha-list-item"],h=(e,i)=>d.dy` <div class="header_title"> <ha-icon-button .label="${e?.localize("ui.common.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> <span>${i}</span> </div> `;(0,a.Z)([(0,l.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){this.contentElement?.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return d.dy`<slot name="heading"> ${(0,o.Z)(t,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,o.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,d.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},92824:function(e,i,t){var a=t(44249),o=t(72621),n=t(60930),s=t(9714),d=t(57243),l=t(15093),r=t(22381),c=t(76320);t(23334);(0,a.Z)([(0,l.Mo)("ha-select")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)()],key:"options",value:void 0},{kind:"method",key:"render",value:function(){return d.dy` ${(0,o.Z)(t,"render",this,3)([])} ${this.clearable&&!this.required&&!this.disabled&&this.value?d.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:d.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?d.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:d.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(t,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){(0,o.Z)(t,"firstUpdated",this,3)([]),this.inlineArrow&&this.shadowRoot?.querySelector(".mdc-select__selected-text-container")?.classList.add("inline-arrow")}},{kind:"method",key:"updated",value:function(e){if((0,o.Z)(t,"updated",this,3)([e]),e.has("inlineArrow")){const e=this.shadowRoot?.querySelector(".mdc-select__selected-text-container");this.inlineArrow?e?.classList.add("inline-arrow"):e?.classList.remove("inline-arrow")}e.get("options")&&(this.layoutOptions(),this.selectByValue(this.value))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(t,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,r.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,d.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`]}]}}),n.K)},17170:function(e,i,t){t.a(e,(async function(e,a){try{t.r(i),t.d(i,{HaSpinner:()=>h});var o=t(44249),n=t(72621),s=t(97677),d=t(43580),l=t(57243),r=t(15093),c=e([s]);s=(c.then?(await c)():c)[0];let h=(0,o.Z)([(0,r.Mo)("ha-spinner")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(e){if((0,n.Z)(t,"updated",this,3)([e]),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}},{kind:"field",static:!0,key:"styles",value:()=>[d.Z,l.iv`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`]}]}}),s.Z);a()}catch(e){a(e)}}))},63251:function(e,i,t){t.a(e,(async function(e,a){try{t.r(i);var o=t(44249),n=(t(9359),t(70104),t(87319),t(57243)),s=t(15093),d=t(27486),l=t(36522),r=t(49976),c=t(17170),h=(t(92824),t(73729),t(56785)),p=t(67044),u=t(76131),v=t(28008),g=t(90698),m=e([c]);c=(m.then?(await m)():m)[0];const f=(0,d.Z)((e=>{const i=""!==e.disk_life_time?30:10,t=1e3*e.disk_used/60/i,a=4*e.startup_time/60;return 10*Math.ceil((t+a)/10)}));(0,o.Z)([(0,s.Mo)("dialog-move-datadisk")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_hostInfo",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_selectedDevice",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_disks",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_osInfo",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_moving",value:()=>!1},{kind:"method",key:"showDialog",value:async function(e){this._hostInfo=e.hostInfo;try{this._osInfo=await(0,p.AP)(this.hass);const e=await(0,p.ou)(this.hass);e.devices.length>0?this._disks=e.disks:(this.closeDialog(),await(0,u.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.storage.datadisk.no_devices_title"),text:this.hass.localize("ui.panel.config.storage.datadisk.no_devices_text")}))}catch(e){this.closeDialog(),await(0,u.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.hardware.available_hardware.failed_to_get"),text:(0,h.js)(e)})}}},{kind:"method",key:"closeDialog",value:function(){this._selectedDevice=void 0,this._disks=void 0,this._moving=!1,this._hostInfo=void 0,this._osInfo=void 0,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._hostInfo&&this._osInfo&&this._disks?n.dy` <ha-dialog open scrimClickAction escapeKeyAction .heading="${this._moving?this.hass.localize("ui.panel.config.storage.datadisk.moving"):this.hass.localize("ui.panel.config.storage.datadisk.title")}" @closed="${this.closeDialog}" ?hideActions="${this._moving}"> ${this._moving?n.dy` <ha-spinner aria-label="Moving" size="large"> </ha-spinner> <p class="progress-text"> ${this.hass.localize("ui.panel.config.storage.datadisk.moving_desc")} </p> `:n.dy` ${this.hass.localize("ui.panel.config.storage.datadisk.description",{current_path:this._osInfo.data_disk,time:f(this._hostInfo)})} <br><br> <ha-select .label="${this.hass.localize("ui.panel.config.storage.datadisk.select_device")}" @selected="${this._selectDevice}" @closed="${r.U}" dialogInitialFocus fixedMenuPosition> ${this._disks.map((e=>n.dy`<mwc-list-item twoline .value="${e.id}"> <span>${e.vendor} ${e.model}</span> <span slot="secondary"> ${this.hass.localize("ui.panel.config.storage.datadisk.extra_information",{size:(0,g.d)(e.size),serial:e.serial})} </span> </mwc-list-item>`))} </ha-select> <mwc-button slot="secondaryAction" @click="${this.closeDialog}" dialogInitialFocus> ${this.hass.localize("ui.panel.config.storage.datadisk.cancel")} </mwc-button> <mwc-button .disabled="${!this._selectedDevice}" slot="primaryAction" @click="${this._moveDatadisk}"> ${this.hass.localize("ui.panel.config.storage.datadisk.move")} </mwc-button> `} </ha-dialog> `:n.Ld}},{kind:"method",key:"_selectDevice",value:function(e){this._selectedDevice=e.target.value}},{kind:"method",key:"_moveDatadisk",value:async function(){this._moving=!0;try{await(0,p.Sx)(this.hass,this._selectedDevice)}catch(e){this.hass.connection.connected&&!(0,h.yz)(e)&&(0,u.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.storage.datadisk.failed_to_move"),text:(0,h.js)(e)})}finally{this.closeDialog()}}},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,v.yu,n.iv`ha-select{width:100%}ha-spinner{display:block;margin:32px;text-align:center}.progress-text{text-align:center}`]}}]}}),n.oi);a()}catch(e){a(e)}}))},90698:function(e,i,t){t.d(i,{d:()=>a});const a=(e=0,i=2)=>{if(0===e)return"0 Bytes";i=i<0?0:i;const t=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**t).toFixed(i))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`}},68783:function(e,i,t){t.a(e,(async function(e,a){try{t.d(i,{A:()=>c});var o=t(64699),n=t(15073),s=t(81048),d=t(31027),l=t(57243),r=e([n]);n=(r.then?(await r)():r)[0];var c=class extends d.P{constructor(){super(...arguments),this.localize=new n.V(this)}render(){return l.dy` <svg part="base" class="spinner" role="progressbar" aria-label="${this.localize.term("loading")}"> <circle class="spinner__track"></circle> <circle class="spinner__indicator"></circle> </svg> `}};c.styles=[s.N,o.D],a()}catch(e){a(e)}}))},64699:function(e,i,t){t.d(i,{D:()=>a});var a=t(57243).iv`:host{--track-width:2px;--track-color:rgb(128 128 128 / 25%);--indicator-color:var(--sl-color-primary-600);--speed:2s;display:inline-flex;width:1em;height:1em;flex:none}.spinner{flex:1 1 auto;height:100%;width:100%}.spinner__indicator,.spinner__track{fill:none;stroke-width:var(--track-width);r:calc(0.5em - var(--track-width)/ 2);cx:0.5em;cy:0.5em;transform-origin:50% 50%}.spinner__track{stroke:var(--track-color);transform-origin:0% 0%}.spinner__indicator{stroke:var(--indicator-color);stroke-linecap:round;stroke-dasharray:150% 75%;animation:spin var(--speed) linear infinite}@keyframes spin{0%{transform:rotate(0deg);stroke-dasharray:0.05em,3em}50%{transform:rotate(450deg);stroke-dasharray:1.375em,1.375em}100%{transform:rotate(1080deg);stroke-dasharray:0.05em,3em}}`},97677:function(e,i,t){t.a(e,(async function(e,a){try{t.d(i,{Z:()=>o.A});var o=t(68783),n=(t(64699),t(15073)),s=t(21262),d=(t(81048),t(31027),t(52812),e([n,s,o]));[n,s,o]=d.then?(await d)():d,a()}catch(e){a(e)}}))},43580:function(e,i,t){t.d(i,{Z:()=>a.D});var a=t(64699);t(52812)}};
//# sourceMappingURL=59986.8a04f3fe3db3ea26.js.map