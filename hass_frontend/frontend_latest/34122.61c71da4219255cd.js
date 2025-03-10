export const __webpack_ids__=["34122"];export const __webpack_modules__={87865:function(e,i,t){t.d(i,{v:()=>a});const a=async(e,i)=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=i??document.body,a=document.createElement("textarea");a.value=e,t.appendChild(a),a.select(),document.execCommand("copy"),t.removeChild(a)}},95198:function(e,i,t){var a=t(44249),o=t(57243),n=t(15093);(0,a.Z)([(0,n.Mo)("ha-dialog-header")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"render",value:function(){return o.dy` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-content"> <div class="header-title"> <slot name="title"></slot> </div> <div class="header-subtitle"> <slot name="subtitle"></slot> </div> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `}},{kind:"get",static:!0,key:"styles",value:function(){return[o.iv`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`]}}]}}),o.oi)},73729:function(e,i,t){t.d(i,{i:()=>h});var a=t(44249),o=t(72621),n=t(74966),s=t(51408),l=t(57243),d=t(15093),r=t(76525);t(23334);const c=["button","ha-list-item"],h=(e,i)=>l.dy` <div class="header_title"> <ha-icon-button .label="${e?.localize("ui.common.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> <span>${i}</span> </div> `;(0,a.Z)([(0,d.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){this.contentElement?.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return l.dy`<slot name="heading"> ${(0,o.Z)(t,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,o.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,l.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},67555:function(e,i,t){t.a(e,(async function(e,a){try{t.r(i);var o=t(44249),n=t(72621),s=(t(9359),t(70104),t(57243)),l=t(15093),d=t(36522),r=t(87865),c=(t(99426),t(73729),t(95198),t(23334),t(37583),t(57816)),h=t(92672),p=t(28008),g=t(73192),u=t(72473),m=t(63133),f=e([m]);m=(f.then?(await f)():f)[0];const v="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",_="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";let b=(0,o.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_manifest",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._params=e,this._manifest=void 0,await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,d.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)(t,"updated",this,3)([e]),!e.has("_params")||!this._params)return;const i=(0,h.j0)(this._params.item);i&&this._fetchManifest(i)}},{kind:"method",key:"render",value:function(){if(!this._params)return s.Ld;const e=this._params.item,i=(0,h.j0)(e),t=this._manifest&&(this._manifest.is_built_in||!this._manifest.documentation.includes("://www.home-assistant.io")),a=this.hass.localize("ui.panel.config.logs.details",{level:s.dy`<span class="${e.level}">${this.hass.localize(`ui.panel.config.logs.level.${e.level}`)}</span>`});return s.dy` <ha-dialog open @closed="${this.closeDialog}" hideActions .heading="${a}"> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${v}"></ha-icon-button> <span slot="title">${a}</span> <ha-icon-button id="copy" @click="${this._copyLog}" slot="actionItems" .label="${this.hass.localize("ui.panel.config.logs.copy")}" .path="${_}"></ha-icon-button> </ha-dialog-header> ${this.isCustomIntegration?s.dy`<ha-alert alert-type="warning"> ${this.hass.localize("ui.panel.config.logs.error_from_custom_integration")} </ha-alert>`:""} <div class="contents" tabindex="-1" dialogInitialFocus> <p> ${this.hass.localize("ui.panel.config.logs.detail.logger")}: ${e.name}<br> ${this.hass.localize("ui.panel.config.logs.detail.source")}: ${e.source.join(":")} ${i?s.dy` <br> ${this.hass.localize("ui.panel.config.logs.detail.integration")}: ${(0,c.Lh)(this.hass.localize,i)} ${this._manifest&&t?s.dy` (<a href="${this._manifest.is_built_in?(0,g.R)(this.hass,`/integrations/${this._manifest.domain}`):this._manifest.documentation}" target="_blank" rel="noreferrer">${this.hass.localize("ui.panel.config.logs.detail.documentation")}</a>${this._manifest.is_built_in||this._manifest.issue_tracker?s.dy`, <a href="${(0,c.H0)(i,this._manifest)}" target="_blank" rel="noreferrer">${this.hass.localize("ui.panel.config.logs.detail.issues")}</a>`:""}) `:""} `:""} <br> ${e.count>0?s.dy` ${this.hass.localize("ui.panel.config.logs.detail.first_occurred")}: ${(0,m.Q)(e.first_occurred,this.hass.locale,this.hass.config)} (${e.count} ${this.hass.localize("ui.panel.config.logs.detail.occurrences")}) <br> `:""} ${this.hass.localize("ui.panel.config.logs.detail.last_logged")}: ${(0,m.Q)(e.timestamp,this.hass.locale,this.hass.config)} </p> ${e.message.length>1?s.dy` <ul> ${e.message.map((e=>s.dy` <li>${e}</li> `))} </ul> `:e.message[0]} ${e.exception?s.dy` <pre>${e.exception}</pre> `:s.Ld} </div> </ha-dialog> `}},{kind:"get",key:"isCustomIntegration",value:function(){return this._manifest?!this._manifest.is_built_in:(0,h.bm)(this._params.item)}},{kind:"method",key:"_fetchManifest",value:async function(e){try{this._manifest=await(0,c.t4)(this.hass,e)}catch(e){}}},{kind:"method",key:"_copyLog",value:async function(){const e=this.shadowRoot?.querySelector(".contents");let i=e.innerText;this.isCustomIntegration&&(i=this.hass.localize("ui.panel.config.logs.error_from_custom_integration")+"\n\n"+i),await(0,r.v)(i),(0,u.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")})}},{kind:"get",static:!0,key:"styles",value:function(){return[p.yu,s.iv`ha-dialog{--dialog-content-padding:0px}a{color:var(--primary-color)}p{margin-top:0}pre{margin-bottom:0;font-family:var(--code-font-family, monospace)}ha-alert{display:block;margin:-4px 0}.contents{padding:16px;outline:0;direction:ltr}.error{color:var(--error-color)}.warning{color:var(--warning-color)}@media all and (min-width:451px) and (min-height:501px){ha-dialog{--mdc-dialog-max-width:90vw}}`]}}]}}),s.oi);customElements.define("dialog-system-log-detail",b),a()}catch(e){a(e)}}))},73192:function(e,i,t){t.d(i,{R:()=>a});const a=(e,i)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md#`}};
//# sourceMappingURL=34122.61c71da4219255cd.js.map