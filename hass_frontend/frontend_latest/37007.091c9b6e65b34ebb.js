export const __webpack_ids__=["37007"];export const __webpack_modules__={96814:function(i,e,t){t(9359),t(31526),i.exports=function i(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!=typeof e[t]&&"function"!=typeof e[t]||Object.isFrozen(e[t])||i(e[t])})),e}},95198:function(i,e,t){var a=t(44249),o=t(57243),n=t(15093);(0,a.Z)([(0,n.Mo)("ha-dialog-header")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"method",key:"render",value:function(){return o.dy` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-content"> <div class="header-title"> <slot name="title"></slot> </div> <div class="header-subtitle"> <slot name="subtitle"></slot> </div> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `}},{kind:"get",static:!0,key:"styles",value:function(){return[o.iv`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`]}}]}}),o.oi)},73729:function(i,e,t){t.d(e,{i:()=>h});var a=t(44249),o=t(72621),n=t(74966),d=t(51408),s=t(57243),l=t(15093),r=t(76525);t(23334);const c=["button","ha-list-item"],h=(i,e)=>s.dy` <div class="header_title"> <ha-icon-button .label="${i?.localize("ui.common.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> <span>${e}</span> </div> `;(0,a.Z)([(0,l.Mo)("ha-dialog")],(function(i,e){class t extends e{constructor(...e){super(...e),i(this)}}return{F:t,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,e){this.contentElement?.scrollTo(i,e)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${(0,o.Z)(t,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,o.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,s.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},8502:function(i,e,t){t.a(i,(async function(i,a){try{t.r(e),t.d(e,{HuiDialogEditCard:()=>$});var o=t(44249),n=t(96814),d=t.n(n),s=t(57243),l=t(15093),r=t(27486),c=t(36522),h=t(20172),g=t(17170),u=(t(73729),t(95198),t(23334),t(17951)),p=t(76131),m=t(28008),f=t(72473),v=t(58885),_=t(11734),x=t(80373),b=t(26197),y=t(91728),k=i([g,_,x,y]);[g,_,x,y]=k.then?(await k)():k;const w="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",C="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";let $=(0,o.Z)([(0,l.Mo)("hui-dialog-edit-card")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"large",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_cardConfig",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_sectionConfig",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_saving",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_guiModeAvailable",value:()=>!0},{kind:"field",decorators:[(0,l.IO)("hui-card-element-editor")],key:"_cardEditorEl",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_GUImode",value:()=>!0},{kind:"field",decorators:[(0,l.SB)()],key:"_documentationURL",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_dirty",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_isEscapeEnabled",value:()=>!0},{kind:"method",key:"showDialog",value:async function(i){this._params=i,this._GUImode=!0,this._guiModeAvailable=!0,this._sectionConfig=this._params.sectionConfig,this._cardConfig=i.cardConfig,this._dirty=Boolean(this._params.isNew),this.large=!1,this._cardConfig&&!Object.isFrozen(this._cardConfig)&&(this._cardConfig=d()(this._cardConfig))}},{kind:"method",key:"closeDialog",value:function(){return this._isEscapeEnabled=!0,window.removeEventListener("dialog-closed",this._enableEscapeKeyClose),window.removeEventListener("hass-more-info",this._disableEscapeKeyClose),this._dirty?(this._confirmCancel(),!1):(this._params=void 0,this._cardConfig=void 0,this._error=void 0,this._documentationURL=void 0,this._dirty=!1,(0,c.B)(this,"dialog-closed",{dialog:this.localName}),!0)}},{kind:"method",key:"updated",value:function(i){if(!this._cardConfig||void 0!==this._documentationURL||!i.has("_cardConfig"))return;const e=i.get("_cardConfig");e?.type!==this._cardConfig.type&&(this._documentationURL=(0,b.Q)(this.hass,this._cardConfig.type))}},{kind:"field",key:"_enableEscapeKeyClose",value(){return i=>{"ha-more-info-dialog"===i.detail.dialog&&(this._isEscapeEnabled=!0)}}},{kind:"field",key:"_disableEscapeKeyClose",value(){return()=>{this._isEscapeEnabled=!1}}},{kind:"method",key:"render",value:function(){if(!this._params||!this._cardConfig)return s.Ld;let i;if(this._cardConfig.type){let e;(0,u.IT)(this._cardConfig.type)?(e=(0,u.cs)((0,u.V0)(this._cardConfig.type))?.name,e?.toLowerCase().endsWith(" card")&&(e=e.substring(0,e.length-5))):e=this.hass.localize(`ui.panel.lovelace.editor.card.${this._cardConfig.type}.name`),i=this.hass.localize("ui.panel.lovelace.editor.edit_card.typed_header",{type:e})}else i=this.hass.localize("ui.panel.lovelace.editor.edit_card.header");return s.dy` <ha-dialog open scrimClickAction .escapeKeyAction="${this._isEscapeEnabled?void 0:""}" @keydown="${this._ignoreKeydown}" @closed="${this._cancel}" @opened="${this._opened}" .heading="${i}"> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${w}"></ha-icon-button> <span slot="title" @click="${this._enlarge}">${i}</span> ${void 0!==this._documentationURL?s.dy` <a slot="actionItems" href="${this._documentationURL}" title="${this.hass.localize("ui.panel.lovelace.menu.help")}" target="_blank" rel="noreferrer" dir="${(0,h.Zu)(this.hass)}"> <ha-icon-button .path="${C}"></ha-icon-button> </a> `:s.Ld} </ha-dialog-header> <div class="content"> <div class="element-editor"> <hui-card-element-editor .showVisibilityTab="${"conditional"!==this._cardConfig.type}" .sectionConfig="${this._sectionConfig}" .hass="${this.hass}" .lovelace="${this._params.lovelaceConfig}" .value="${this._cardConfig}" @config-changed="${this._handleConfigChanged}" @GUImode-changed="${this._handleGUIModeChanged}" @editor-save="${this._save}" dialogInitialFocus></hui-card-element-editor> </div> <div class="element-preview"> ${this._sectionConfig?s.dy` <hui-section .hass="${this.hass}" .config="${this._cardConfigInSection(this._cardConfig)}" preview class="${this._error?"blur":""}"></hui-section> `:s.dy` <hui-card .hass="${this.hass}" .config="${this._cardConfig}" preview class="${this._error?"blur":""}"></hui-card> `} ${this._error?s.dy` <ha-spinner aria-label="Can't update card"></ha-spinner> `:""} </div> </div> ${void 0!==this._cardConfig?s.dy` <mwc-button slot="secondaryAction" @click="${this._toggleMode}" .disabled="${!this._guiModeAvailable}" class="gui-mode-button"> ${this.hass.localize(!this._cardEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")} </mwc-button> `:""} <div slot="primaryAction" @click="${this._save}"> <mwc-button @click="${this._cancel}" dialogInitialFocus> ${this.hass.localize("ui.common.cancel")} </mwc-button> ${void 0!==this._cardConfig&&this._dirty?s.dy` <mwc-button ?disabled="${!this._canSave||this._saving}" @click="${this._save}"> ${this._saving?s.dy` <ha-spinner aria-label="Saving" size="small"></ha-spinner> `:this.hass.localize("ui.common.save")} </mwc-button> `:""} </div> </ha-dialog> `}},{kind:"method",key:"_enlarge",value:function(){this.large=!this.large}},{kind:"method",key:"_ignoreKeydown",value:function(i){i.stopPropagation()}},{kind:"method",key:"_handleConfigChanged",value:function(i){this._cardConfig=d()(i.detail.config),this._error=i.detail.error,this._guiModeAvailable=i.detail.guiModeAvailable,this._dirty=!0}},{kind:"method",key:"_handleGUIModeChanged",value:function(i){i.stopPropagation(),this._GUImode=i.detail.guiMode,this._guiModeAvailable=i.detail.guiModeAvailable}},{kind:"method",key:"_toggleMode",value:function(){this._cardEditorEl?.toggleMode()}},{kind:"method",key:"_opened",value:function(){window.addEventListener("dialog-closed",this._enableEscapeKeyClose),window.addEventListener("hass-more-info",this._disableEscapeKeyClose),this._cardEditorEl?.focusYamlEditor()}},{kind:"field",key:"_cardConfigInSection",value(){return(0,r.Z)((i=>{const{cards:e,title:t,...a}=this._sectionConfig;return{...a,cards:i?[i]:[]}}))}},{kind:"get",key:"_canSave",value:function(){return!this._saving&&(void 0!==this._cardConfig&&(!this._cardEditorEl||!this._cardEditorEl.hasError))}},{kind:"method",key:"_confirmCancel",value:async function(){await new Promise((i=>{setTimeout(i,0)}));await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.edit_card.unsaved_changes"),text:this.hass.localize("ui.panel.lovelace.editor.edit_card.confirm_cancel"),dismissText:this.hass.localize("ui.common.stay"),confirmText:this.hass.localize("ui.common.leave")})&&this._cancel()}},{kind:"method",key:"_cancel",value:function(i){i&&i.stopPropagation(),this._dirty=!1,this.closeDialog()}},{kind:"method",key:"_save",value:async function(){if(this._canSave)if(this._dirty){this._saving=!0;try{await this._params.saveCardConfig(this._cardConfig),this._saving=!1,this._dirty=!1,(0,v.f)(this,this.hass),this.closeDialog()}catch(i){(0,f.C)(this,{message:i.message}),this._saving=!1}}else this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[m.yu,s.iv`:host{--code-mirror-max-height:calc(100vh - 176px)}ha-dialog{--mdc-dialog-max-width:100px;--dialog-z-index:6;--dialog-surface-position:fixed;--dialog-surface-top:40px;--mdc-dialog-max-width:90vw;--dialog-content-padding:24px 12px}.content{width:calc(90vw - 48px);max-width:1000px}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{height:100%;--mdc-dialog-max-height:100%;--dialog-surface-top:0px;--mdc-dialog-max-width:100vw}.content{width:100%;max-width:100%}}@media all and (min-width:451px) and (min-height:501px){:host([large]) .content{max-width:none}}.center{margin-left:auto;margin-right:auto}.content{display:flex;flex-direction:column}.content hui-card{display:block;padding:4px;margin:0 auto;max-width:390px}.content hui-section{display:block;padding:4px;margin:0 auto;max-width:var(--ha-view-sections-column-max-width,500px)}.content .element-editor{margin:0 10px}@media (min-width:1000px){.content{flex-direction:row}.content>*{flex-basis:0;flex-grow:1;flex-shrink:1;min-width:0}.content hui-card{padding:8px 10px;margin:auto 0px;max-width:500px}.content hui-section{padding:8px 10px;margin:auto 0px;max-width:var(--ha-view-sections-column-max-width,500px)}}.hidden{display:none}.element-editor{margin-bottom:8px}.blur{filter:blur(2px) grayscale(100%)}.element-preview{position:relative;height:max-content;background:var(--primary-background-color);padding:4px;border-radius:4px;position:sticky;top:0}.element-preview ha-spinner{top:calc(50% - 24px);left:calc(50% - 24px);position:absolute;z-index:10}hui-card{padding-top:8px;margin-bottom:4px;display:block;width:100%;box-sizing:border-box}.gui-mode-button{margin-right:auto;margin-inline-end:auto;margin-inline-start:initial}.header{display:flex;align-items:center;justify-content:space-between}ha-dialog-header a{color:inherit;text-decoration:none}`]}}]}}),s.oi);a()}catch(i){a(i)}}))},26197:function(i,e,t){t.d(e,{$:()=>d,Q:()=>n});var a=t(17951),o=t(73192);const n=(i,e)=>(0,a.IT)(e)?(0,a.cs)((0,a.V0)(e))?.documentationURL:`${(0,o.R)(i,"/dashboards/")}${e}`,d=(i,e)=>(0,a.IT)(e)?(0,a.bm)((0,a.V0)(e))?.documentationURL:`${(0,o.R)(i,"/dashboards/badges")}`},73192:function(i,e,t){t.d(e,{R:()=>a});const a=(i,e)=>`https://www.iobroker.net/#${i.language&&i.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md#`},58885:function(i,e,t){t.d(e,{f:()=>o});var a=t(72473);const o=(i,e)=>(0,a.C)(i,{message:e.localize("ui.common.successfully_saved")})}};
//# sourceMappingURL=37007.091c9b6e65b34ebb.js.map