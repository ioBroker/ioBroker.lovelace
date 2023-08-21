"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6514],{32594:(e,t,i)=>{i.d(t,{U:()=>a});const a=e=>e.stopPropagation()},31811:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(17463),n=i(68144),s=i(79932),o=i(95664),r=i(70843),d=i(11654),l=(i(46583),e([o]));o=(l.then?(await l)():l)[0];(0,a.Z)([(0,s.Mo)("ha-attributes")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"extra-filters"})],key:"extraFilters",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_expanded",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.stateObj)return n.Ld;const e=this.computeDisplayAttributes(r.w.concat(this.extraFilters?this.extraFilters.split(","):[]));return 0===e.length?n.Ld:n.dy` <ha-expansion-panel .header="${this.hass.localize("ui.components.attributes.expansion_header")}" outlined @expanded-will-change="${this.expandedChanged}"> <div class="attribute-container"> ${this._expanded?n.dy` ${e.map((e=>n.dy` <div class="data-entry"> <div class="key"> ${(0,o.S)(this.hass.localize,this.stateObj,this.hass.entities,e)} </div> <div class="value"> ${(0,o.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities,e)} </div> </div> `))} `:""} </div> </ha-expansion-panel> ${this.stateObj.attributes.attribution?n.dy` <div class="attribution"> ${this.stateObj.attributes.attribution} </div> `:""} `}},{kind:"get",static:!0,key:"styles",value:function(){return[d.Qx,n.iv`.attribute-container{margin-bottom:8px;direction:ltr}.data-entry{display:flex;flex-direction:row;justify-content:space-between}.data-entry .value{max-width:60%;overflow-wrap:break-word;text-align:right}.key{flex-grow:1}.attribution{color:var(--secondary-text-color);text-align:center;margin-top:16px}pre{font-family:inherit;font-size:inherit;margin:0px;overflow-wrap:break-word;white-space:pre-line}hr{border-color:var(--divider-color);border-bottom:none;margin:16px 0}`]}},{kind:"method",key:"computeDisplayAttributes",value:function(e){return this.stateObj?Object.keys(this.stateObj.attributes).filter((t=>-1===e.indexOf(t))):[]}},{kind:"method",key:"expandedChanged",value:function(e){this._expanded=e.detail.expanded}}]}}),n.oi);t()}catch(e){t(e)}}))},46583:(e,t,i)=>{var a=i(17463),n=i(34541),s=i(47838),o=i(68144),r=i(79932),d=i(83448),l=i(47181),h=i(96151);i(52039);const c="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";(0,a.Z)([(0,r.Mo)("ha-expansion-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"leftChevron",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[(0,r.IO)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return o.dy` <div class="top ${(0,d.$)({expanded:this.expanded})}"> <div id="summary" @click="${this._toggleContainer}" @keydown="${this._toggleContainer}" @focus="${this._focusChanged}" @blur="${this._focusChanged}" role="button" tabindex="0" aria-expanded="${this.expanded}" aria-controls="sect1"> ${this.leftChevron?o.dy` <ha-svg-icon .path="${c}" class="summary-icon ${(0,d.$)({expanded:this.expanded})}"></ha-svg-icon> `:""} <slot name="header"> <div class="header"> ${this.header} <slot class="secondary" name="secondary">${this.secondary}</slot> </div> </slot> ${this.leftChevron?"":o.dy` <ha-svg-icon .path="${c}" class="summary-icon ${(0,d.$)({expanded:this.expanded})}"></ha-svg-icon> `} </div> <slot name="icons"></slot> </div> <div class="container ${(0,d.$)({expanded:this.expanded})}" @transitionend="${this._handleTransitionEnd}" role="region" aria-labelledby="summary" aria-hidden="${!this.expanded}" tabindex="-1"> ${this._showContent?o.dy`<slot></slot>`:""} </div> `}},{kind:"method",key:"willUpdate",value:function(e){(0,n.Z)((0,s.Z)(i.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((()=>{this.expanded&&(this._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const t=!this.expanded;(0,l.B)(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",t&&(this._showContent=!0,await(0,h.y)());const i=this._container.scrollHeight;this._container.style.height=`${i}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,(0,l.B)(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:block}.top{display:flex;align-items:center;border-radius:var(--ha-card-border-radius,12px)}.top.expanded{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.top.focused{background:var(--input-fill-color)}:host([outlined]){box-shadow:none;border-width:1px;border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));border-radius:var(--ha-card-border-radius,12px)}.summary-icon{margin-left:8px}:host([leftchevron]) .summary-icon{margin-left:0;margin-right:8px}#summary{flex:1;display:flex;padding:var(--expansion-panel-summary-padding,0 8px);min-height:48px;align-items:center;cursor:pointer;overflow:hidden;font-weight:500;outline:0}.summary-icon{transition:transform 150ms cubic-bezier(.4,0,.2,1);direction:var(--direction)}.summary-icon.expanded{transform:rotate(180deg)}.header,::slotted([slot=header]){flex:1}.container{padding:var(--expansion-panel-content-padding,0 8px);overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);height:0px}.container.expanded{height:auto}.secondary{display:block;color:var(--secondary-text-color);font-size:12px}`}}]}}),o.oi)},70843:(e,t,i)=>{i.d(t,{w:()=>a});const a=["entity_id","assumed_state","attribution","custom_ui_more_info","custom_ui_state_card","device_class","editable","emulated_hue_name","emulated_hue","entity_picture","friendly_name","haaska_hidden","haaska_name","icon","initial_state","last_reset","restored","state_class","supported_features","unit_of_measurement"]},12952:(e,t,i)=>{i.d(t,{qh:()=>a});const a=4},6514:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t);var n=i(17463),s=(i(63436),i(44577),i(68144)),o=i(79932),r=i(95664),d=i(32594),l=i(40095),h=i(31811),c=i(12952),u=e([r,h]);[r,h]=u.then?(await u)():u;const p="activity_list,current_activity";(0,n.Z)([(0,o.Mo)("more-info-remote")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return s.Ld;const e=this.stateObj;return s.dy` ${(0,l.e)(e,c.qh)?s.dy` <mwc-list .label="${this.hass.localize("ui.dialogs.more_info_control.remote.activity")}" .value="${e.attributes.current_activity}" @selected="${this.handleActivityChanged}" fixedMenuPosition naturalMenuWidth @closed="${d.U}"> ${e.attributes.activity_list.map((t=>s.dy` <mwc-list-item .value="${t}"> ${(0,r.a)(this.hass.localize,e,this.hass.locale,this.hass.entities,"activity",t)} </mwc-list-item> `))} </mwc-list> `:""} <ha-attributes .hass="${this.hass}" .stateObj="${this.stateObj}" .extraFilters="${p}"></ha-attributes> `}},{kind:"method",key:"handleActivityChanged",value:function(e){const t=this.stateObj.attributes.current_activity,i=e.target.value;i&&t!==i&&this.hass.callService("remote","turn_on",{entity_id:this.stateObj.entity_id,activity:i})}}]}}),s.oi);a()}catch(e){a(e)}}))}}]);
//# sourceMappingURL=6514-UCHQW6eckVI.js.map