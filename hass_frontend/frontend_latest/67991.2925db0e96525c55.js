/*! For license information please see 67991.2925db0e96525c55.js.LICENSE.txt */
export const __webpack_ids__=["67991"];export const __webpack_modules__={96814:function(e,i,t){t(9359),t(31526),e.exports=function e(i){return Object.freeze(i),Object.getOwnPropertyNames(i).forEach((function(t){!i.hasOwnProperty(t)||null===i[t]||"object"!=typeof i[t]&&"function"!=typeof i[t]||Object.isFrozen(i[t])||e(i[t])})),i}},97206:function(e,i,t){t.r(i),t.d(i,{HaCircularProgress:()=>d});var o=t(44249),a=t(72621),r=t(58795),n=t(57243),s=t(15093);let d=(0,o.Z)([(0,s.Mo)("ha-circular-progress")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:()=>"Loading"},{kind:"field",decorators:[(0,s.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(t,"updated",this,3)([e]),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(t,"styles",this),n.iv`:host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}`]}}]}}),r.B)},95198:function(e,i,t){var o=t(44249),a=t(57243),r=t(15093);(0,o.Z)([(0,r.Mo)("ha-dialog-header")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"render",value:function(){return a.dy` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-content"> <div class="header-title"> <slot name="title"></slot> </div> <div class="header-subtitle"> <slot name="subtitle"></slot> </div> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `}},{kind:"get",static:!0,key:"styles",value:function(){return[a.iv`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`]}}]}}),a.oi)},73729:function(e,i,t){t.d(i,{i:()=>h});var o=t(44249),a=t(72621),r=t(74966),n=t(51408),s=t(57243),d=t(15093),l=t(76525);t(23334);const c=["button","ha-list-item"],h=(e,i)=>s.dy` <div class="header_title"> <ha-icon-button .label="${e?.localize("ui.common.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> <span>${i}</span> </div> `;(0,o.Z)([(0,d.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:l.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){this.contentElement?.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${(0,a.Z)(t,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,a.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,s.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),r.M)},16611:function(e,i,t){t.a(e,(async function(e,i){try{var o=t(44249),a=t(72621),r=(t(56820),t(99619),t(57243)),n=t(15093),s=t(27934),d=t(6973),l=(t(94409),e([s]));s=(l.then?(await l)():l)[0];const c=["config","visibility"];(0,o.Z)([(0,n.Mo)("hui-badge-element-editor")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.SB)()],key:"_currTab",value:()=>c[0]},{kind:"method",key:"getConfigElement",value:async function(){const e=await(0,s.Sm)(this.configElementType);if(e&&e.getConfigElement)return e.getConfigElement()}},{kind:"method",key:"getConfigForm",value:async function(){const e=await(0,s.Sm)(this.configElementType);if(e&&e.getConfigForm)return e.getConfigForm()}},{kind:"method",key:"_handleTabChanged",value:function(e){const i=c[e.detail.index];i!==this._currTab&&(this._currTab=i)}},{kind:"method",key:"_configChanged",value:function(e){e.stopPropagation(),this.value=e.detail.value}},{kind:"method",key:"renderConfigElement",value:function(){let e=r.Ld;switch(this._currTab){case"config":e=r.dy`${(0,a.Z)(t,"renderConfigElement",this,3)([])}`;break;case"visibility":e=r.dy` <hui-badge-visibility-editor .hass="${this.hass}" .config="${this.value}" @value-changed="${this._configChanged}"></hui-badge-visibility-editor> `}return r.dy` <mwc-tab-bar .activeIndex="${c.indexOf(this._currTab)}" @MDCTabBar:activated="${this._handleTabChanged}"> ${c.map((e=>r.dy` <mwc-tab .label="${this.hass.localize(`ui.panel.lovelace.editor.edit_badge.tab_${e}`)}"> </mwc-tab> `))} </mwc-tab-bar> ${e} `}},{kind:"get",static:!0,key:"styles",value:function(){return[d.k.styles,r.iv`mwc-tab-bar{text-transform:uppercase;margin-bottom:16px;border-bottom:1px solid var(--divider-color)}`]}}]}}),d.k);i()}catch(e){i(e)}}))},94409:function(e,i,t){var o=t(44249),a=t(57243),r=t(15093),n=t(36522);t(99426),t(32145);(0,o.Z)([(0,r.Mo)("hui-badge-visibility-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"method",key:"render",value:function(){const e=this.config.visibility??[];return a.dy` <p class="intro"> ${this.hass.localize("ui.panel.lovelace.editor.edit_badge.visibility.explanation")} </p> <ha-card-conditions-editor .hass="${this.hass}" .conditions="${e}" @value-changed="${this._valueChanged}"> </ha-card-conditions-editor> `}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const i=e.detail.value,t={...this.config,visibility:i};0===t.visibility?.length&&delete t.visibility,(0,n.B)(this,"value-changed",{value:t})}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`.intro{margin:0;color:var(--secondary-text-color);margin-bottom:8px}`}]}}),a.oi)},71586:function(e,i,t){t.a(e,(async function(e,o){try{t.r(i),t.d(i,{HuiDialogEditBadge:()=>w});var a=t(44249),r=t(96814),n=t.n(r),s=t(57243),d=t(15093),l=t(36522),c=t(20172),h=(t(97206),t(73729),t(95198),t(23334),t(6671)),u=t(17951),g=t(76131),f=t(28008),v=t(58885),m=t(69040),p=t(80373),_=t(27353),b=t(26197),y=t(2593),k=t(16611),x=e([m,p,k]);[m,p,k]=x.then?(await x)():x;const C="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",E="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";let w=(0,a.Z)([(0,d.Mo)("hui-dialog-edit-badge")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"large",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_badgeConfig",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_containerConfig",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_saving",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_guiModeAvailable",value:()=>!0},{kind:"field",decorators:[(0,d.IO)("hui-badge-element-editor")],key:"_badgeEditorEl",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_GUImode",value:()=>!0},{kind:"field",decorators:[(0,d.SB)()],key:"_documentationURL",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_dirty",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_isEscapeEnabled",value:()=>!0},{kind:"method",key:"showDialog",value:async function(e){this._params=e,this._GUImode=!0,this._guiModeAvailable=!0;const i=(0,y.an)(e.lovelaceConfig,e.path);if("strategy"in i)throw new Error("Can't edit strategy");if(this._containerConfig=i,"badgeConfig"in e)this._badgeConfig=e.badgeConfig,this._dirty=!0;else{const i=this._containerConfig.badges?.[e.badgeIndex];this._badgeConfig=null!=i?(0,h.d)(i):i}this.large=!1,this._badgeConfig&&!Object.isFrozen(this._badgeConfig)&&(this._badgeConfig=n()(this._badgeConfig))}},{kind:"method",key:"closeDialog",value:function(){return this._isEscapeEnabled=!0,window.removeEventListener("dialog-closed",this._enableEscapeKeyClose),window.removeEventListener("hass-more-info",this._disableEscapeKeyClose),this._dirty?(this._confirmCancel(),!1):(this._params=void 0,this._badgeConfig=void 0,this._error=void 0,this._documentationURL=void 0,this._dirty=!1,(0,l.B)(this,"dialog-closed",{dialog:this.localName}),!0)}},{kind:"method",key:"updated",value:function(e){if(!this._badgeConfig||void 0!==this._documentationURL||!e.has("_badgeConfig"))return;const i=e.get("_badgeConfig");i?.type!==this._badgeConfig.type&&(this._documentationURL=this._badgeConfig.type?(0,b.$)(this.hass,this._badgeConfig.type):void 0)}},{kind:"field",key:"_enableEscapeKeyClose",value(){return e=>{"ha-more-info-dialog"===e.detail.dialog&&(this._isEscapeEnabled=!0)}}},{kind:"field",key:"_disableEscapeKeyClose",value(){return()=>{this._isEscapeEnabled=!1}}},{kind:"method",key:"render",value:function(){if(!this._params)return s.Ld;let e;if(this._badgeConfig&&this._badgeConfig.type){let i;(0,u.IT)(this._badgeConfig.type)?(i=(0,u.bm)((0,u.V0)(this._badgeConfig.type))?.name,i?.toLowerCase().endsWith(" badge")&&(i=i.substring(0,i.length-6))):i=this.hass.localize(`ui.panel.lovelace.editor.badge.${this._badgeConfig.type}.name`),e=this.hass.localize("ui.panel.lovelace.editor.edit_badge.typed_header",{type:i})}else e=this._badgeConfig?this.hass.localize("ui.panel.lovelace.editor.edit_badge.header"):this._containerConfig.title?this.hass.localize("ui.panel.lovelace.editor.edit_badge.pick_badge_view_title",{name:this._containerConfig.title}):this.hass.localize("ui.panel.lovelace.editor.edit_badge.pick_badge");return s.dy` <ha-dialog open scrimClickAction .escapeKeyAction="${this._isEscapeEnabled?void 0:""}" @keydown="${this._ignoreKeydown}" @closed="${this._cancel}" @opened="${this._opened}" .heading="${e}"> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${C}"></ha-icon-button> <span slot="title" @click="${this._enlarge}">${e}</span> ${void 0!==this._documentationURL?s.dy` <a slot="actionItems" href="${this._documentationURL}" title="${this.hass.localize("ui.panel.lovelace.menu.help")}" target="_blank" rel="noreferrer" dir="${(0,c.Zu)(this.hass)}"> <ha-icon-button .path="${E}"></ha-icon-button> </a> `:s.Ld} </ha-dialog-header> <div class="content"> <div class="element-editor"> <hui-badge-element-editor .hass="${this.hass}" .lovelace="${this._params.lovelaceConfig}" .value="${this._badgeConfig}" @config-changed="${this._handleConfigChanged}" @GUImode-changed="${this._handleGUIModeChanged}" @editor-save="${this._save}" dialogInitialFocus></hui-badge-element-editor> </div> <div class="element-preview"> <hui-badge .hass="${this.hass}" .config="${this._badgeConfig}" preview class="${this._error?"blur":""}"></hui-badge> ${this._error?s.dy` <ha-circular-progress indeterminate aria-label="Can't update badge"></ha-circular-progress> `:""} </div> </div> ${void 0!==this._badgeConfig?s.dy` <mwc-button slot="secondaryAction" @click="${this._toggleMode}" .disabled="${!this._guiModeAvailable}" class="gui-mode-button"> ${this.hass.localize(!this._badgeEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_badge.show_code_editor":"ui.panel.lovelace.editor.edit_badge.show_visual_editor")} </mwc-button> `:""} <div slot="primaryAction" @click="${this._save}"> <mwc-button @click="${this._cancel}" dialogInitialFocus> ${this.hass.localize("ui.common.cancel")} </mwc-button> ${void 0!==this._badgeConfig&&this._dirty?s.dy` <mwc-button ?disabled="${!this._canSave||this._saving}" @click="${this._save}"> ${this._saving?s.dy` <ha-circular-progress indeterminate aria-label="Saving" size="small"></ha-circular-progress> `:this.hass.localize("ui.common.save")} </mwc-button> `:""} </div> </ha-dialog> `}},{kind:"method",key:"_enlarge",value:function(){this.large=!this.large}},{kind:"method",key:"_ignoreKeydown",value:function(e){e.stopPropagation()}},{kind:"method",key:"_handleConfigChanged",value:function(e){this._badgeConfig=n()(e.detail.config),this._error=e.detail.error,this._guiModeAvailable=e.detail.guiModeAvailable,this._dirty=!0}},{kind:"method",key:"_handleGUIModeChanged",value:function(e){e.stopPropagation(),this._GUImode=e.detail.guiMode,this._guiModeAvailable=e.detail.guiModeAvailable}},{kind:"method",key:"_toggleMode",value:function(){this._badgeEditorEl?.toggleMode()}},{kind:"method",key:"_opened",value:function(){window.addEventListener("dialog-closed",this._enableEscapeKeyClose),window.addEventListener("hass-more-info",this._disableEscapeKeyClose),this._badgeEditorEl?.focusYamlEditor()}},{kind:"get",key:"_canSave",value:function(){return!this._saving&&(void 0!==this._badgeConfig&&(!this._badgeEditorEl||!this._badgeEditorEl.hasError))}},{kind:"method",key:"_confirmCancel",value:async function(){await new Promise((e=>{setTimeout(e,0)}));await(0,g.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.edit_badge.unsaved_changes"),text:this.hass.localize("ui.panel.lovelace.editor.edit_badge.confirm_cancel"),dismissText:this.hass.localize("ui.common.stay"),confirmText:this.hass.localize("ui.common.leave")})&&this._cancel()}},{kind:"method",key:"_cancel",value:function(e){e&&e.stopPropagation(),this._dirty=!1,this.closeDialog()}},{kind:"method",key:"_save",value:async function(){if(!this._canSave)return;if(!this._dirty)return void this.closeDialog();this._saving=!0;const e=this._params.path;await this._params.saveConfig("badgeConfig"in this._params?(0,_.ll)(this._params.lovelaceConfig,e,this._badgeConfig):(0,_.kg)(this._params.lovelaceConfig,[...e,this._params.badgeIndex],this._badgeConfig)),this._saving=!1,this._dirty=!1,(0,v.f)(this,this.hass),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[f.yu,s.iv`:host{--code-mirror-max-height:calc(100vh - 176px)}ha-dialog{--mdc-dialog-max-width:100px;--dialog-z-index:6;--dialog-surface-position:fixed;--dialog-surface-top:40px;--mdc-dialog-max-width:90vw;--dialog-content-padding:24px 12px}.content{width:calc(90vw - 48px);max-width:1000px}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{height:100%;--mdc-dialog-max-height:100%;--dialog-surface-top:0px;--mdc-dialog-max-width:100vw}.content{width:100%;max-width:100%}}@media all and (min-width:451px) and (min-height:501px){:host([large]) .content{max-width:none}}.center{margin-left:auto;margin-right:auto}.content{display:flex;flex-direction:column}.content .element-editor{margin:0 10px}@media (min-width:1000px){.content{flex-direction:row}.content>*{flex-basis:0;flex-grow:1;flex-shrink:1;min-width:0}}.hidden{display:none}.element-editor{margin-bottom:8px}.blur{filter:blur(2px) grayscale(100%)}.element-preview{position:relative;height:max-content;background:var(--primary-background-color);padding:10px;border-radius:4px;display:flex;flex-direction:column;justify-content:center;align-items:center}.element-preview ha-circular-progress{top:50%;left:50%;position:absolute;z-index:10}.gui-mode-button{margin-right:auto;margin-inline-end:auto;margin-inline-start:initial}.header{display:flex;align-items:center;justify-content:space-between}ha-dialog-header a{color:inherit;text-decoration:none}`]}}]}}),s.oi);o()}catch(e){o(e)}}))},26197:function(e,i,t){t.d(i,{$:()=>n,Q:()=>r});var o=t(17951),a=t(73192);const r=(e,i)=>(0,o.IT)(i)?(0,o.cs)((0,o.V0)(i))?.documentationURL:`${(0,a.R)(e,"/dashboards/")}${i}`,n=(e,i)=>(0,o.IT)(i)?(0,o.bm)((0,o.V0)(i))?.documentationURL:`${(0,a.R)(e,"/dashboards/badges")}`},81821:function(e,i,t){t.d(i,{O:()=>g});var o=t(44249),a=t(72621),r=(t(9359),t(31526),t(70104),t(57243)),n=t(15093),s=t(67064),d=t(36522),l=t(22381),c=t(41680),h=t(48045);t(99426),t(97206),t(64889);class u extends Error{constructor(e,i,t){super(e),this.warnings=void 0,this.errors=void 0,this.name="GUISupportError",this.warnings=i,this.errors=t}}let g=(0,o.Z)(null,(function(e,i){class o extends i{constructor(...i){super(...i),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_configElement",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_subElementEditorConfig",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_guiMode",value:()=>!0},{kind:"field",decorators:[(0,n.SB)()],key:"_errors",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_pendingYamlError",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_yamlError",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_warnings",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_guiSupported",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_loading",value:()=>!1},{kind:"field",decorators:[(0,n.IO)("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"get",key:"value",value:function(){return this._config}},{kind:"set",key:"value",value:function(e){this._config&&(0,h.v)(e,this._config)||(this._config=e,this._errors=void 0,this._setConfig())}},{kind:"method",key:"_setConfig",value:function(){if(!this._errors)try{this._updateConfigElement()}catch(e){this._errors=[e.message]}this.updateComplete.then((()=>{(0,d.B)(this,"config-changed",{config:this.value,error:this._errors?.join(", "),guiModeAvailable:!(this.hasWarning||this.hasError||!1===this._guiSupported)})}))}},{kind:"get",key:"hasWarning",value:function(){return void 0!==this._warnings&&this._warnings.length>0}},{kind:"get",key:"hasError",value:function(){return void 0!==this._errors&&this._errors.length>0}},{kind:"get",key:"GUImode",value:function(){return this._guiMode}},{kind:"set",key:"GUImode",value:function(e){this._guiMode=e,this.updateComplete.then((()=>{(0,d.B)(this,"GUImode-changed",{guiMode:e,guiModeAvailable:!(this.hasWarning||this.hasError||!1===this._guiSupported)})}))}},{kind:"method",key:"toggleMode",value:function(){this.GUImode=!this.GUImode}},{kind:"method",key:"focusYamlEditor",value:function(){this._configElement?.focusYamlEditor&&this._configElement.focusYamlEditor(),this._yamlEditor&&this._yamlEditor.focus()}},{kind:"method",key:"getConfigElement",value:async function(){}},{kind:"method",key:"getConfigForm",value:async function(){}},{kind:"method",key:"renderConfigElement",value:function(){return r.dy`${this._configElement}`}},{kind:"method",key:"_renderSubElement",value:function(){return r.dy` <hui-sub-element-editor .hass="${this.hass}" .config="${this._subElementEditorConfig}" @go-back="${this._goBack}" @config-changed="${this._subElementChanged}"> </hui-sub-element-editor> `}},{kind:"method",key:"_subElementChanged",value:function(e){e.stopPropagation();const i=e.detail.config;this._subElementEditorConfig={...this._subElementEditorConfig,elementConfig:i},this._subElementEditorConfig.saveElementConfig?.(i)}},{kind:"method",key:"_goBack",value:function(e){e.stopPropagation(),this._subElementEditorConfig=void 0}},{kind:"method",key:"_editSubElement",value:async function(e){e.stopPropagation(),await Promise.all([t.e("91552"),t.e("78456"),t.e("56898"),t.e("35671"),t.e("92139"),t.e("16003"),t.e("32146"),t.e("37602"),t.e("68825"),t.e("44959"),t.e("79931"),t.e("44251"),t.e("3371"),t.e("63556"),t.e("38326"),t.e("10745"),t.e("16912"),t.e("20924"),t.e("95444"),t.e("90162"),t.e("56649")]).then(t.bind(t,50357)),this._subElementEditorConfig={type:e.detail.type,elementConfig:e.detail.config,context:e.detail.context,saveElementConfig:e.detail.saveConfig}}},{kind:"method",key:"render",value:function(){return r.dy` <div class="wrapper"> ${this.GUImode?r.dy` <div class="gui-editor" @edit-sub-element="${this._editSubElement}"> ${this._loading?r.dy` <ha-circular-progress indeterminate class="center margin-bot"></ha-circular-progress> `:(0,s.F)(this._subElementEditorConfig?this._renderSubElement():this.renderConfigElement())} </div> `:r.dy` <div class="yaml-editor"> <ha-yaml-editor .defaultValue="${this._config}" autofocus .hass="${this.hass}" @value-changed="${this._handleYAMLChanged}" @blur="${this._onBlurYaml}" @keydown="${this._ignoreKeydown}" dir="ltr"></ha-yaml-editor> </div> `} ${!1===this._guiSupported&&!1===this._loading?r.dy` <ha-alert alert-type="info" .title="${this.hass.localize("ui.errors.config.visual_editor_not_supported")}"> ${this.hass.localize("ui.errors.config.visual_editor_not_supported_reason_type")} <br> ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")} </ha-alert> `:r.Ld} ${this.hasError?r.dy` <ha-alert alert-type="error" .title="${this.hass.localize("ui.errors.config.configuration_error")}"> <ul> ${this._errors.map((e=>r.dy`<li>${e}</li>`))} </ul> </ha-alert> `:r.Ld} ${this.hasWarning?r.dy` <ha-alert alert-type="warning" .title="${this.hass.localize("ui.errors.config.visual_editor_not_supported")}"> <ul> ${this._warnings.map((e=>r.dy`<li>${e}</li>`))} </ul> ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")} </ha-alert> `:r.Ld} </div> `}},{kind:"method",key:"updated",value:function(e){(0,a.Z)(o,"updated",this,3)([e]),this._configElement&&e.has("hass")&&(this._configElement.hass=this.hass),this._configElement&&"lovelace"in this._configElement&&e.has("lovelace")&&(this._configElement.lovelace=this.lovelace),this._configElement&&e.has("context")&&(this._configElement.context=this.context)}},{kind:"method",key:"_handleUIConfigChanged",value:function(e){if(e.stopPropagation(),!this.GUImode)return;const i=e.detail.config;Object.keys(i).forEach((e=>{void 0===i[e]&&delete i[e]})),this.value=i}},{kind:"method",key:"_handleYAMLChanged",value:function(e){e.stopPropagation();const i=e.detail.value;e.detail.isValid?(this._config=i,this._errors=void 0,this._pendingYamlError=void 0,this._yamlError=!1,this._debounceYamlError.cancel(),this._setConfig()):this._yamlError?this._errors=[e.detail.errorMsg]:(this._pendingYamlError=e.detail.errorMsg,this._debounceYamlError())}},{kind:"field",key:"_debounceYamlError",value(){return(0,l.D)((()=>{this._pendingYamlError&&(this._yamlError=!0,this._errors=[this._pendingYamlError],this._pendingYamlError=void 0,this._setConfig())}),2e3)}},{kind:"method",key:"_onBlurYaml",value:function(){this._debounceYamlError.cancel(),this._pendingYamlError&&(this._yamlError=!0,this._errors=[this._pendingYamlError],this._pendingYamlError=void 0,this._setConfig())}},{kind:"method",key:"unloadConfigElement",value:async function(){this._configElement=void 0,this._guiSupported=void 0}},{kind:"method",key:"loadConfigElement",value:async function(){if(this._configElement)return;let e=await this.getConfigElement();if(!e){const i=await this.getConfigForm();if(i){await t.e("10106").then(t.bind(t,66374)),e=document.createElement("hui-form-editor");const{schema:o,assertConfig:a,computeLabel:r,computeHelper:n}=i;e.schema=o,r&&(e.computeLabel=r),n&&(e.computeHelper=n),a&&(e.assertConfig=a)}}e?(e.hass=this.hass,"lovelace"in e&&(e.lovelace=this.lovelace),e.context=this.context,e.addEventListener("config-changed",(e=>this._handleUIConfigChanged(e))),this._guiSupported=!0):this._guiSupported=!1,this._configElement=e}},{kind:"method",key:"_updateConfigElement",value:async function(){if(this.value)try{if(this._errors=void 0,this._warnings=void 0,await this.loadConfigElement(),this._configElement)try{this._configElement.setConfig(this.value)}catch(e){const i=(0,c.p)(this.hass,e);throw new u("Config is not supported",i.warnings,i.errors)}else this._guiSupported=!1,this.GUImode=!1}catch(e){e instanceof u?(this._warnings=e.warnings??[e.message],this._errors=e.errors||void 0):this._errors=[e.message],this.GUImode=!1}finally{this._loading=!1}}},{kind:"method",key:"_ignoreKeydown",value:function(e){e.stopPropagation()}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`:host{display:flex}.wrapper{width:100%}.gui-editor,.yaml-editor{padding:8px 0px}ha-code-editor{--code-mirror-max-height:calc(100vh - 245px)}ha-circular-progress{display:block;margin:auto}`}]}}),r.oi)},6973:function(e,i,t){t.d(i,{k:()=>s});var o=t(44249),a=t(72621),r=t(15093),n=t(81821);let s=(0,o.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.SB)()],key:"_configElementType",value:void 0},{kind:"get",key:"configElementType",value:function(){return this.value?this.value.type:void 0}},{kind:"method",key:"loadConfigElement",value:async function(){if(this._configElementType!==this.configElementType){if(this.unloadConfigElement(),!this.configElementType)throw new Error(this.hass.localize("ui.errors.config.no_type_provided"));this._configElementType=this.configElementType}return(0,a.Z)(t,"loadConfigElement",this,3)([])}}]}}),n.O)},73192:function(e,i,t){t.d(i,{R:()=>o});const o=(e,i)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md#`},58885:function(e,i,t){t.d(i,{f:()=>a});var o=t(72473);const a=(e,i)=>(0,o.C)(e,{message:i.localize("ui.common.successfully_saved")})},58795:function(e,i,t){t.d(i,{B:()=>h});var o=t(9065),a=t(15093),r=t(57243),n=t(35359);const s=(0,t(13823).T)(r.oi);class d extends s{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return r.dy` <div class="progress ${(0,n.$)(this.getRenderClasses())}" role="progressbar" aria-label="${e||r.Ld}" aria-valuemin="0" aria-valuemax="${this.max}" aria-valuenow="${this.indeterminate?r.Ld:this.value}">${this.renderIndicator()}</div> `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}(0,o.__decorate)([(0,a.Cb)({type:Number})],d.prototype,"value",void 0),(0,o.__decorate)([(0,a.Cb)({type:Number})],d.prototype,"max",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean})],d.prototype,"indeterminate",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean,attribute:"four-color"})],d.prototype,"fourColor",void 0);class l extends d{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=100*(1-this.value/this.max);return r.dy` <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="${e}"></circle> </svg> `}renderIndeterminateContainer(){return r.dy` <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>`}}const c=r.iv`:host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}`;let h=class extends l{};h.styles=[c],h=(0,o.__decorate)([(0,a.Mo)("md-circular-progress")],h)},67064:function(e,i,t){t.d(i,{F:()=>s});var o=t(2841),a=t(45779),r=t(53232);const n=e=>(0,r.dZ)(e)?e._$litType$.h:e.strings,s=(0,a.XM)(class extends a.Xe{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[i]){const t=(0,r.hN)(this.et)?n(this.et):null,a=(0,r.hN)(i)?n(i):null;if(null!==t&&(null===a||t!==a)){const i=(0,r.i9)(e).pop();let a=this.tt.get(t);if(void 0===a){const e=document.createDocumentFragment();a=(0,o.sY)(o.Ld,e),a.setConnected(!1),this.tt.set(t,a)}(0,r.hl)(a,[i]),(0,r._Y)(a,void 0,i)}if(null!==a){if(null===t||t!==a){const i=this.tt.get(a);if(void 0!==i){const t=(0,r.i9)(i).pop();(0,r.E_)(e),(0,r._Y)(e,void 0,t),(0,r.hl)(e,[t])}}this.et=i}else this.et=void 0;return this.render(i)}})}};
//# sourceMappingURL=67991.2925db0e96525c55.js.map