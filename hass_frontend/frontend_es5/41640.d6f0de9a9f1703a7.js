"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["41640"],{65562:function(e,i,t){t.d(i,{m:()=>n});t(71695),t(40251),t(47021);var o=t(36522);const a=()=>Promise.all([t.e("97983"),t.e("15722"),t.e("9281")]).then(t.bind(t,23437)),n=(e,i)=>{(0,o.B)(e,"show-dialog",{dialogTag:"hui-dialog-edit-section",dialogImport:a,dialogParams:i})}},47905:function(e,i,t){t.a(e,(async function(e,o){try{t.r(i),t.d(i,{DEFAULT_MAX_COLUMNS:()=>I,SectionsView:()=>A});var a=t(61701),n=t(72621),d=(t(71695),t(52805),t(9359),t(56475),t(70104),t(48136),t(23669),t(40251),t(19134),t(11740),t(97003),t(46692),t(47021),t(18672)),s=t(57243),r=t(50778),l=t(35359),c=t(91583),h=t(69634),u=t(27486),v=t(34593),p=(t(23334),t(30043),t(62801),t(37583),t(76131)),g=(t(6331),t(60074),t(27353)),m=t(2593),f=t(65562),b=e([d]);d=(b.then?(await b)():b)[0];let x,y,k,C,w,_,$,H=e=>e;const V="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",M="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",L="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z",z="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",S="M13 3V11H21V3H13M3 21H11V13H3V21M3 3V11H11V3H3M13 16H16V13H18V16H21V18H18V21H16V18H13V16Z",I=4,Z=e=>parseInt(e.replace("px",""));let A=(0,a.Z)([(0,r.Mo)("hui-sections-view")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"isStrategy",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"sections",value(){return[]}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"cards",value(){return[]}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"badges",value(){return[]}},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_sectionColumnCount",value(){return 0}},{kind:"field",decorators:[(0,r.SB)()],key:"_dragging",value(){return!1}},{kind:"field",key:"_columnsController",value(){return new d.Z(this,{callback:e=>{var i,t,o;const a=null===(i=e[0])||void 0===i?void 0:i.contentRect.width;if(!a)return 1;const n=getComputedStyle(this),d=this.shadowRoot.querySelector(".container"),s=getComputedStyle(d),r=Z(s.paddingLeft)+Z(s.paddingRight),l=Z(n.getPropertyValue("--column-min-width")),c=Z(s.columnGap),h=Math.floor((a-r+c)/(l+c)),u=null!==(t=null===(o=this._config)||void 0===o?void 0:o.max_columns)&&void 0!==t?t:I;return(0,v.u)(h,1,u)}})}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_sectionConfigKeys",value(){return new WeakMap}},{kind:"method",key:"_getSectionKey",value:function(e){return this._sectionConfigKeys.has(e)||this._sectionConfigKeys.set(e,Math.random().toString()),this._sectionConfigKeys.get(e)}},{kind:"method",key:"_computeSectionsCount",value:function(){this._sectionColumnCount=this.sections.filter((e=>!e.hidden)).map((e=>{var i;return null!==(i=e.config.column_span)&&void 0!==i?i:1})).reduce(((e,i)=>e+i),0)}},{kind:"field",key:"_sectionVisibilityChanged",value(){return()=>{this._computeSectionsCount()}}},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)(t,"connectedCallback",this,3)([]),this.addEventListener("section-visibility-changed",this._sectionVisibilityChanged)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)(t,"disconnectedCallback",this,3)([]),this.removeEventListener("section-visibility-changed",this._sectionVisibilityChanged)}},{kind:"method",key:"willUpdate",value:function(e){e.has("sections")&&this._computeSectionsCount()}},{kind:"method",key:"render",value:function(){var e,i,t,o,a,n;if(!this.lovelace)return s.Ld;const d=this.sections,r=this._sectionColumnCount+(null!==(e=this.lovelace)&&void 0!==e&&e.editMode?1:0),u=this.lovelace.editMode,v=null!==(i=this._columnsController.value)&&void 0!==i?i:1;return(0,s.dy)(x||(x=H` <div class="wrapper ${0}"> <hui-view-header .hass="${0}" .badges="${0}" .lovelace="${0}" .viewIndex="${0}" .config="${0}" style="${0}"></hui-view-header> <ha-sortable .disabled="${0}" @item-moved="${0}" group="section" handle-selector=".handle" draggable-selector=".section" .rollback="${0}"> <div class="container ${0}" style="${0}"> ${0} ${0} ${0} </div> </ha-sortable> </div> `),(0,l.$)({"top-margin":Boolean(null===(t=this._config)||void 0===t?void 0:t.top_margin)}),this.hass,this.badges,this.lovelace,this.index,null===(o=this._config)||void 0===o?void 0:o.header,(0,h.V)({"--max-column-count":v}),!u,this._sectionMoved,!1,(0,l.$)({dense:Boolean(null===(a=this._config)||void 0===a?void 0:a.dense_section_placement)}),(0,h.V)({"--total-section-count":r,"--max-column-count":v}),(0,c.r)(d,(e=>this._getSectionKey(e)),((e,i)=>{var t;const o=Math.min(e.config.column_span||1,v),a=e.config.row_span||1;return(0,s.dy)(y||(y=H` <div class="section" style="${0}"> ${0} ${0} </div> `),(0,h.V)({"--column-span":o,"--row-span":a}),null!==(t=this.lovelace)&&void 0!==t&&t.editMode?(0,s.dy)(k||(k=H` <div class="section-header"> ${0} </div> `),u?(0,s.dy)(C||(C=H` <div class="section-actions"> <ha-svg-icon aria-hidden="true" class="handle" .path="${0}"></ha-svg-icon> <ha-icon-button .label="${0}" @click="${0}" .index="${0}" .path="${0}"></ha-icon-button> <ha-icon-button .label="${0}" @click="${0}" .index="${0}" .path="${0}"></ha-icon-button> </div> `),M,this.hass.localize("ui.common.edit"),this._editSection,i,z,this.hass.localize("ui.common.delete"),this._deleteSection,i,V):s.Ld):s.Ld,e)})),u?(0,s.dy)(w||(w=H` <ha-sortable group="card" @item-added="${0}" draggable-selector=".card" .rollback="${0}"> <div class="create-section-container"> <div class="drop-helper" aria-hidden="true"> <p> ${0} </p> </div> <button class="create-section" @click="${0}" aria-label="${0}" .title="${0}"> <ha-ripple></ha-ripple> <ha-svg-icon .path="${0}"></ha-svg-icon> </button> </div> </ha-sortable> `),this._handleCardAdded,!1,this.hass.localize("ui.panel.lovelace.editor.section.drop_card_create_section"),this._createSection,this.hass.localize("ui.panel.lovelace.editor.section.create_section"),this.hass.localize("ui.panel.lovelace.editor.section.create_section"),S):s.Ld,u&&null!==(n=this._config)&&void 0!==n&&null!==(n=n.cards)&&void 0!==n&&n.length?(0,s.dy)(_||(_=H` <div class="section imported-cards"> <div class="imported-card-header"> <p class="title"> <ha-svg-icon .path="${0}"></ha-svg-icon> ${0} </p> <p class="subtitle"> ${0} </p> </div> <hui-section .lovelace="${0}" .hass="${0}" .config="${0}" .viewIndex="${0}" preview import-only></hui-section> </div> `),L,this.hass.localize("ui.panel.lovelace.editor.section.imported_cards_title"),this.hass.localize("ui.panel.lovelace.editor.section.imported_cards_description"),this.lovelace,this.hass,this._importedCardSectionConfig(this._config.cards),this.index):s.Ld)}},{kind:"method",key:"_defaultSection",value:function(e){return{type:"grid",cards:e?[{type:"heading",heading:this.hass.localize("ui.panel.lovelace.editor.section.default_section_title")}]:[]}}},{kind:"method",key:"_handleCardAdded",value:function(e){const{data:i}=e.detail,t=i,{cardIndex:o}=(0,m.lJ)(t),a=(0,m.Kx)(t),n=(0,m.Cs)("cards",this.lovelace.config,a)[o],d=(0,g.qG)(this.lovelace.config,this.index,this._defaultSection("heading"!==n.type)),s=d.views[this.index],r=[this.index,s.sections.length-1,1],l=(0,g.wI)(d,t,r);this.lovelace.saveConfig(l)}},{kind:"field",key:"_importedCardSectionConfig",value(){return(0,u.Z)((e=>({type:"grid",cards:e})))}},{kind:"method",key:"_createSection",value:function(){const e=(0,g.qG)(this.lovelace.config,this.index,this._defaultSection(!0));this.lovelace.saveConfig(e)}},{kind:"method",key:"_editSection",value:async function(e){const i=e.currentTarget.index;(0,f.m)(this,{lovelaceConfig:this.lovelace.config,saveConfig:e=>{this.lovelace.saveConfig(e)},viewIndex:this.index,sectionIndex:i})}},{kind:"method",key:"_deleteSection",value:async function(e){var i;const t=e.currentTarget.index,o=[this.index,t],a=(0,m.an)(this.lovelace.config,o);if("cards"in a&&(null===(i=a.cards)||void 0===i?void 0:i.length)){if(!(await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.delete_section.title"),text:this.hass.localize("ui.panel.lovelace.editor.delete_section.text"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0})))return}const n=(0,g.F$)(this.lovelace.config,this.index,t);this.lovelace.saveConfig(n)}},{kind:"method",key:"_sectionMoved",value:function(e){e.stopPropagation();const{oldIndex:i,newIndex:t}=e.detail,o=(0,g.Rw)(this.lovelace.config,[this.index,i],[this.index,t]);this.lovelace.saveConfig(o)}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)($||($=H`:host{--row-height:var(--ha-view-sections-row-height, 56px);--row-gap:var(--ha-view-sections-row-gap, 8px);--column-gap:var(--ha-view-sections-column-gap, 32px);--column-max-width:var(--ha-view-sections-column-max-width, 500px);--column-min-width:var(--ha-view-sections-column-min-width, 320px);--top-margin:var(--ha-view-sections-extra-top-margin, 80px);display:block}@media (max-width:600px){:host{--column-gap:var(--row-gap)}}.wrapper.top-margin{display:block;margin-top:var(--top-margin)}.container>*{position:relative;width:100%}.section{border-radius:var(--ha-card-border-radius,12px);grid-column:span var(--column-span);grid-row:span var(--row-span)}.section:has(hui-section[hidden]){display:none}.container{--column-count:min(var(--max-column-count), var(--total-section-count));display:grid;align-items:start;justify-content:center;grid-template-columns:repeat(var(--column-count),1fr);grid-auto-flow:row;gap:var(--row-gap) var(--column-gap);padding:var(--row-gap) var(--column-gap);box-sizing:content-box;margin:0 auto;max-width:calc(var(--column-count) * var(--column-max-width) + (var(--column-count) - 1) * var(--column-gap))}.container.dense{grid-auto-flow:row dense}.handle{cursor:grab;padding:8px}.create-section-container{position:relative;display:flex;flex-direction:column;margin-top:36px}.create-section-container .card{display:none}.create-section-container:has(.card) .drop-helper{display:flex}.create-section-container:has(.card) .create-section{display:none}.drop-helper{display:none;flex-direction:column;align-items:center;justify-content:center;position:relative;outline:0;background:0 0;cursor:pointer;border-radius:var(--ha-card-border-radius,12px);border:2px dashed var(--primary-color);height:calc(var(--row-height) + 2 * (var(--row-gap) + 2px));padding:8px;box-sizing:border-box;width:100%;--ha-ripple-color:var(--primary-color);--ha-ripple-hover-opacity:0.04;--ha-ripple-pressed-opacity:0.12}.drop-helper p{color:var(--primary-text-color);font-size:16px;font-weight:400;line-height:24px;text-align:center}.create-section{display:block;position:relative;outline:0;background:0 0;cursor:pointer;border-radius:var(--ha-card-border-radius,12px);border:2px dashed var(--primary-color);order:1;height:calc(var(--row-height) + 2 * (var(--row-gap) + 2px));padding:8px;box-sizing:border-box;width:100%;--ha-ripple-color:var(--primary-color);--ha-ripple-hover-opacity:0.04;--ha-ripple-pressed-opacity:0.12}.create-section:focus{border:2px solid var(--primary-color)}.sortable-ghost{border-radius:var(--ha-card-border-radius,12px)}hui-view-header{display:block;padding:0 var(--column-gap);padding-top:var(--row-gap);margin:auto;max-width:calc(var(--max-column-count) * var(--column-max-width) + (var(--max-column-count) - 1) * var(--column-gap))}.section-header{position:relative;height:34px;display:flex;flex-direction:column;justify-content:flex-end}.section-actions{position:absolute;height:36px;bottom:-2px;right:0;inset-inline-end:0;inset-inline-start:initial;opacity:1;display:flex;align-items:center;justify-content:center;transition:opacity .2s ease-in-out;border-radius:var(--ha-card-border-radius,12px);border-bottom-left-radius:0px;border-bottom-right-radius:0px;background:var(--secondary-background-color);--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--primary-text-color)}.imported-cards{--column-span:var(--column-count);--row-span:1;order:2}.imported-card-header{margin-top:36px;padding:32px 0 16px 0;border-top:4px dotted var(--divider-color)}.imported-card-header .title{margin:0;color:var(--primary-text-color);font-size:16px;font-weight:400;line-height:24px;--mdc-icon-size:18px;display:flex;align-items:center;gap:12px;margin-bottom:8px}.imported-card-header .subtitle{margin:0;color:var(--secondary-text-color);font-size:14px;font-weight:400;line-height:20px}`))}}]}}),s.oi);o()}catch(x){o(x)}}))},6331:function(e,i,t){t.d(i,{D$:()=>y,AU:()=>x});var o=t(61701),a=t(72621),n=(t(22152),t(71695),t(9359),t(68107),t(19423),t(47021),t(57243)),d=t(50778),s=t(35359),r=(t(30043),t(62801),t(37583),t(52293),t(60074),t(27353)),l=(t(40251),t(36522));var c=t(77711);let h,u,v,p,g,m,f,b=e=>e;const x="center",y="bottom";(0,o.Z)([(0,d.Mo)("hui-view-header")],(function(e,i){class o extends i{constructor(...i){super(...i),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"card",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"badges",value(){return[]}},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"viewIndex",value:void 0},{kind:"method",key:"_checkHidden",value:function(){const e=!this.card&&!this.lovelace.editMode&&this.badges.every((e=>e.hidden));this.toggleAttribute("hidden",e)}},{kind:"field",key:"_badgeVisibilityChanged",value(){return()=>{this._checkHidden()}}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(o,"connectedCallback",this,3)([]),this.addEventListener("badge-visibility-changed",this._badgeVisibilityChanged)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(o,"disconnectedCallback",this,3)([]),this.removeEventListener("badge-visibility-changed",this._badgeVisibilityChanged)}},{kind:"method",key:"willUpdate",value:function(e){var i;if((e.has("badges")||e.has("lovelace")||e.has("card"))&&this._checkHidden(),e.has("config"))return null!==(i=this.config)&&void 0!==i&&i.card?this.card=this._createCardElement(this.config.card):this.card=void 0,void this._checkHidden();this.card&&(e.has("hass")&&(this.card.hass=this.hass),e.has("lovelace")&&(this.card.preview=this.lovelace.editMode))}},{kind:"method",key:"_createCardElement",value:function(e){const i=document.createElement("hui-card");return i.hass=this.hass,i.preview=this.lovelace.editMode,i.config=e,i.load(),i}},{kind:"method",key:"_addCard",value:function(){const e={type:"markdown",text_only:!0,content:this.hass.localize("ui.panel.lovelace.editor.edit_view_header.default_title",{user:"{{ user }}"})};(0,c.x)(this,{cardConfig:e,lovelaceConfig:this.lovelace.config,saveCardConfig:e=>{const i=Object.assign({},this.config);i.card=e,this._saveHeaderConfig(i)},isNew:!0})}},{kind:"method",key:"_deleteCard",value:function(e){e.stopPropagation();const i=Object.assign({},this.config);delete i.card,this._saveHeaderConfig(i)}},{kind:"method",key:"_editCard",value:function(e){e.stopPropagation();const i=this.config.card;i&&(0,c.x)(this,{cardConfig:i,lovelaceConfig:this.lovelace.config,saveCardConfig:e=>{const i=Object.assign({},this.config);i.card=e,this._saveHeaderConfig(i)}})}},{kind:"method",key:"_saveHeaderConfig",value:function(e){const i=this.lovelace.config.views[this.viewIndex],t=Object.assign({},i);t.header=e;const o=(0,r.YI)(this.hass,this.lovelace.config,this.viewIndex,t);this.lovelace.saveConfig(o)}},{kind:"field",key:"_configure",value(){return()=>{var e,i;e=this,i={config:this.config,saveConfig:e=>{this._saveHeaderConfig(e)}},(0,l.B)(e,"show-dialog",{dialogTag:"hui-dialog-edit-view-header",dialogImport:()=>Promise.all([t.e("97983"),t.e("16643")]).then(t.bind(t,36170)),dialogParams:i})}}},{kind:"method",key:"render",value:function(){var e,i,t,o,a;if(!this.lovelace)return n.Ld;const d=Boolean(null===(e=this.lovelace)||void 0===e?void 0:e.editMode),r=this.card,l=null!==(i=null===(t=this.config)||void 0===t?void 0:t.layout)&&void 0!==i?i:x,c=null!==(o=null===(a=this.config)||void 0===a?void 0:a.badges_position)&&void 0!==o?o:y,f=void 0!==r,k=this.badges.length>0;return(0,n.dy)(h||(h=b` ${0} <div class="container ${0}"> <div class="layout ${0}"> ${0} ${0} </div> </div> `),d?(0,n.dy)(u||(u=b` <div class="actions-container"> <div class="actions"> <ha-icon-button .label="${0}" @click="${0}" .path="${0}"></ha-icon-button> </div> </div> `),this.hass.localize("ui.common.edit"),this._configure,"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"):n.Ld,d?"edit-mode":"",(0,s.$)({[l]:!0,[`badges-${c}`]:!0,"has-heading":f,"has-badges":k}),r||d?(0,n.dy)(v||(v=b` <div class="heading"> ${0} </div> `),d?r?(0,n.dy)(p||(p=b` <hui-card-edit-mode @ll-edit-card="${0}" @ll-delete-card="${0}" .hass="${0}" .lovelace="${0}" .path="${0}" no-duplicate no-move> ${0} </hui-card-edit-mode> `),this._editCard,this._deleteCard,this.hass,this.lovelace,[0],r):(0,n.dy)(g||(g=b` <button class="add" @click="${0}"> <ha-ripple></ha-ripple> <ha-svg-icon .path="${0}"></ha-svg-icon> ${0} </button> `),this._addCard,"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",this.hass.localize("ui.panel.lovelace.editor.edit_view_header.add_title")):r):n.Ld,this.lovelace&&(d||this.badges.length>0)?(0,n.dy)(m||(m=b` <div class="badges ${0}"> <hui-view-badges .badges="${0}" .hass="${0}" .lovelace="${0}" .viewIndex="${0}" .showAddLabel="${0}"></hui-view-badges> </div> `),c,this.badges,this.hass,this.lovelace,this.viewIndex,0===this.badges.length):n.Ld)}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(f||(f=b`:host([hidden]){display:none!important}.container{position:relative}.actions-container{position:relative;height:34px;display:flex;flex-direction:column;justify-content:flex-end}.actions{z-index:1;position:absolute;height:36px;bottom:-2px;right:0;inset-inline-end:0;inset-inline-start:initial;opacity:1;display:flex;align-items:center;justify-content:center;transition:opacity .2s ease-in-out;border-radius:var(--ha-card-border-radius,12px);border-bottom-left-radius:0px;border-bottom-right-radius:0px;background:var(--secondary-background-color);--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--primary-text-color)}.layout{position:relative;display:flex;flex-direction:column;gap:24px 8px;--spacing:24px}.layout.has-heading{margin-top:var(--spacing)}.heading{position:relative;flex:1;width:100%;max-width:700px;display:flex}.heading>*{width:100%;height:100%}.badges{position:relative;flex:1;display:flex}hui-view-badges{width:100%;display:flex;flex-direction:column;justify-content:flex-end;--badges-aligmnent:flex-start}.layout{align-items:flex-start}.layout.center{align-items:center}.layout .heading{--card-text-align:start}.layout.center .heading{--card-text-align:center;display:flex;flex-direction:column;align-items:center}.layout.center hui-view-badges{--badges-aligmnent:center}@media (min-width:768px){.layout.responsive.has-heading{flex-direction:row;align-items:flex-end}.layout.responsive.has-heading hui-view-badges{--badges-aligmnent:flex-end}}.layout.badges-top{flex-direction:column-reverse}.layout.badges-top.has-badges{margin-top:0}@media (min-width:768px){.layout.responsive.badges-top.has-heading{flex-direction:row;align-items:flex-start;margin-top:var(--spacing)}}.container.edit-mode{padding:8px;border-radius:var(--ha-card-border-radius,12px);border:2px dashed var(--divider-color);border-start-end-radius:0}.container.edit-mode .content{min-height:36px}.add{position:relative;display:flex;flex-direction:row;align-items:center;outline:0;gap:8px;height:36px;padding:6px 20px 6px 20px;box-sizing:border-box;width:auto;border-radius:var(--ha-card-border-radius,12px);background-color:transparent;border-width:2px;border-style:dashed;border-color:var(--primary-color);--mdc-icon-size:18px;cursor:pointer;font-size:14px;color:var(--primary-text-color);--ha-ripple-color:var(--primary-color);--ha-ripple-hover-opacity:0.04;--ha-ripple-pressed-opacity:0.12}.add:focus{border-style:solid}`))}}]}}),n.oi)}}]);
//# sourceMappingURL=41640.d6f0de9a9f1703a7.js.map