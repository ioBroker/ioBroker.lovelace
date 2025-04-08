"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["39341"],{20130:function(e,i,t){var a=t(61701),o=t(72621),s=(t(71695),t(47021),t(39785)),l=t(52876),n=t(50778),c=t(57243),d=t(5111);let r,h,u,v=e=>e;(0,a.Z)([(0,n.Mo)("ha-fab")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)(t,"firstUpdated",this,3)([e]),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,c.iv)(r||(r=v`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}:disabled{--mdc-theme-secondary:var(--disabled-text-color);pointer-events:none}`)),"rtl"===d.E.document.dir?(0,c.iv)(h||(h=v`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`)):(0,c.iv)(u||(u=v``))]}}]}}),s._)},74941:function(e,i,t){t.d(i,{i:()=>o});t(71695),t(40251),t(47021);var a=t(36522);const o=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"hui-dialog-select-view",dialogImport:()=>Promise.all([t.e("97983"),t.e("41258"),t.e("35671"),t.e("7010"),t.e("5851")]).then(t.bind(t,67271)),dialogParams:i})}},14370:function(e,i,t){t(20130);var a=t(61701),o=(t(71695),t(23669),t(40251),t(47021),t(31622),t(57243)),s=t(50778),l=t(68958),n=t(36522),c=(t(34273),t(54977),t(23334),t(7285),t(48977)),d=t(10571),r=t(76131),h=t(28008),u=t(81833),v=t(27353),p=t(2593),g=t(74941);let m,f,b,k=e=>e;(0,a.Z)([(0,s.Mo)("hui-card-options")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array})],key:"path",value:void 0},{kind:"field",decorators:[(0,s.vZ)()],key:"_assignedNodes",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"hide-position",type:Boolean})],key:"hidePosition",value(){return!1}},{kind:"field",decorators:[(0,l.t)({key:"dashboardCardClipboard",state:!1,subscribe:!1,storage:"sessionStorage"})],key:"_clipboard",value:void 0},{kind:"method",key:"getCardSize",value:function(){return this._assignedNodes?(0,u.N)(this._assignedNodes[0]):1}},{kind:"method",key:"updated",value:function(e){if(!e.has("path")||!this.path)return;const{viewIndex:i}=(0,p.lJ)(this.path);this.classList.toggle("panel",this.lovelace.config.views[i].panel)}},{kind:"get",key:"_cards",value:function(){const e=(0,p.Kx)(this.path);return(0,p.Cs)("cards",this.lovelace.config,e)}},{kind:"method",key:"render",value:function(){const{cardIndex:e}=(0,p.lJ)(this.path);return(0,o.dy)(m||(m=k` <div class="card"><slot></slot></div> <ha-card> <div class="card-actions"> <mwc-button @click="${0}">${0}</mwc-button> <div class="right"> <slot name="buttons"></slot> ${0} <ha-button-menu @action="${0}"> <ha-icon-button slot="trigger" .label="${0}" .path="${0}"></ha-icon-button> <ha-list-item graphic="icon"> <ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon> ${0} </ha-list-item> <ha-list-item graphic="icon"> <ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon> ${0} </ha-list-item> <ha-list-item graphic="icon"> <ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon> ${0} </ha-list-item> <ha-list-item graphic="icon"> <ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon> ${0} </ha-list-item> <li divider role="separator"></li> <ha-list-item class="warning" graphic="icon"> <ha-svg-icon class="warning" slot="graphic" .path="${0}"></ha-svg-icon> ${0} </ha-list-item> </ha-button-menu> </div> </div> </ha-card> `),this._editCard,this.hass.localize("ui.panel.lovelace.editor.edit_card.edit"),this.hidePosition?o.Ld:(0,o.dy)(f||(f=k` <ha-icon-button .label="${0}" .path="${0}" class="move-arrow" @click="${0}" ?disabled="${0}"></ha-icon-button> <ha-icon-button @click="${0}" .label="${0}"> <div class="position-badge">${0}</div> </ha-icon-button> <ha-icon-button .label="${0}" .path="${0}" class="move-arrow" @click="${0}" .disabled="${0}"></ha-icon-button> `),this.hass.localize("ui.panel.lovelace.editor.edit_card.decrease_position"),"M19,13H5V11H19V13Z",this._decreaseCardPosiion,0===e,this._changeCardPosition,this.hass.localize("ui.panel.lovelace.editor.edit_card.change_position"),e+1,this.hass.localize("ui.panel.lovelace.editor.edit_card.increase_position"),"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",this._increaseCardPosition,this._cards.length===e+1),this._handleAction,this.hass.localize("ui.panel.lovelace.editor.edit_card.options"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z",this.hass.localize("ui.panel.lovelace.editor.edit_card.move"),"M16,8H14V11H11V13H14V16H16V13H19V11H16M2,12C2,9.21 3.64,6.8 6,5.68V3.5C2.5,4.76 0,8.09 0,12C0,15.91 2.5,19.24 6,20.5V18.32C3.64,17.2 2,14.79 2,12M15,3C10.04,3 6,7.04 6,12C6,16.96 10.04,21 15,21C19.96,21 24,16.96 24,12C24,7.04 19.96,3 15,3M15,19C11.14,19 8,15.86 8,12C8,8.14 11.14,5 15,5C18.86,5 22,8.14 22,12C22,15.86 18.86,19 15,19Z",this.hass.localize("ui.panel.lovelace.editor.edit_card.duplicate"),"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",this.hass.localize("ui.panel.lovelace.editor.edit_card.copy"),"M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",this.hass.localize("ui.panel.lovelace.editor.edit_card.cut"),"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",this.hass.localize("ui.panel.lovelace.editor.edit_card.delete"))}},{kind:"get",static:!0,key:"styles",value:function(){return[h.Qx,(0,o.iv)(b||(b=k`:host(:hover){outline:2px solid var(--primary-color)}:host(:not(.panel)) ::slotted(*){display:block}:host(.panel) .card{height:calc(100% - 59px)}ha-card{border-top-right-radius:0;border-top-left-radius:0}.card-actions{display:flex;justify-content:space-between;align-items:center}.right{display:flex;align-items:center}.position-badge{display:block;width:24px;line-height:24px;box-sizing:border-box;border-radius:50%;font-weight:500;text-align:center;font-size:14px;background-color:var(--app-header-edit-background-color,#455a64);color:var(--app-header-edit-text-color,#fff)}ha-icon-button{color:var(--primary-text-color)}ha-icon-button.move-arrow[disabled]{color:var(--disabled-text-color)}ha-list-item{cursor:pointer;white-space:nowrap}`))]}},{kind:"method",key:"_handleAction",value:function(e){switch(e.detail.index){case 0:this._moveCard();break;case 1:this._duplicateCard();break;case 2:this._copyCard();break;case 3:this._cutCard();break;case 4:this._deleteCard()}}},{kind:"method",key:"_duplicateCard",value:function(){(0,n.B)(this,"ll-duplicate-card",{path:this.path})}},{kind:"method",key:"_editCard",value:function(){(0,n.B)(this,"ll-edit-card",{path:this.path})}},{kind:"method",key:"_cutCard",value:function(){(0,n.B)(this,"ll-copy-card",{path:this.path}),(0,n.B)(this,"ll-delete-card",{path:this.path,silent:!0})}},{kind:"method",key:"_copyCard",value:function(){(0,n.B)(this,"ll-copy-card",{path:this.path})}},{kind:"method",key:"_deleteCard",value:function(){(0,n.B)(this,"ll-delete-card",{path:this.path,silent:!1})}},{kind:"method",key:"_decreaseCardPosiion",value:function(){const e=this.lovelace,i=this.path,{cardIndex:t}=(0,p.lJ)(i);e.saveConfig((0,v.vl)(e.config,i,t-1))}},{kind:"method",key:"_increaseCardPosition",value:function(){const e=this.lovelace,i=this.path,{cardIndex:t}=(0,p.lJ)(i);e.saveConfig((0,v.vl)(e.config,i,t+1))}},{kind:"method",key:"_changeCardPosition",value:async function(){const e=this.lovelace,i=this.path,{cardIndex:t}=(0,p.lJ)(i),a=await(0,r.showPromptDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.change_position.title"),text:this.hass.localize("ui.panel.lovelace.editor.change_position.text"),inputType:"number",inputMin:"1",placeholder:String(t+1)});if(!a)return;const o=parseInt(a);if(isNaN(o))return;const s=o-1;e.saveConfig((0,v.vl)(e.config,i,s))}},{kind:"method",key:"_moveCard",value:function(){(0,g.i)(this,{lovelaceConfig:this.lovelace.config,urlPath:this.lovelace.urlPath,allowDashboardChange:!0,header:this.hass.localize("ui.panel.lovelace.editor.move_card.header"),viewSelectedCallback:async(e,i,t)=>{if(!this.lovelace)return;const a=i.views[t],o=i,s=async()=>{this.lovelace.saveConfig(i)};if((0,d.s)(a))return void(0,r.showAlertDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.move_card.error_title"),text:this.hass.localize("ui.panel.lovelace.editor.move_card.error_text_strategy"),warning:!0});const l=[t];if(e===this.lovelace.urlPath)return this.lovelace.saveConfig((0,v.TJ)(o,this.path,l)),void this.lovelace.showToast({message:this.hass.localize("ui.panel.lovelace.editor.move_card.success"),duration:4e3,action:{action:s,text:this.hass.localize("ui.common.undo")}});try{const{cardIndex:i}=(0,p.lJ)(this.path),t=this._cards[i];await(0,c.Oh)(this.hass,e,(0,v.Z0)(o,l,t)),this.lovelace.saveConfig((0,v.f1)(this.lovelace.config,this.path)),this.lovelace.showToast({message:this.hass.localize("ui.panel.lovelace.editor.move_card.success"),duration:4e3,action:{action:s,text:this.hass.localize("ui.common.undo")}})}catch(n){this.lovelace.showToast({message:this.hass.localize("ui.panel.lovelace.editor.move_card.error")})}}})}}]}}),o.oi);var C=t(41391);const _=()=>t.e("96250").then(t.bind(t,37284));var y=t(77711);(0,C.L)(),_(),(0,y.I)()}}]);
//# sourceMappingURL=39341.af0ef48e2860f93a.js.map