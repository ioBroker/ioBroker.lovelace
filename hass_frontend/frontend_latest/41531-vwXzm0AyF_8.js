/*! For license information please see 41531-vwXzm0AyF_8.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[41531],{61092:(t,e,i)=>{i.d(e,{K:()=>n});var a=i(87480),r=(i(27763),i(14114)),o=i(98734),c=i(68144),s=i(79932),d=i(83448);class n extends c.oi{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new o.A((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():c.dy``,i=this.hasMeta?this.renderMeta():c.dy``;return c.dy` ${this.renderRipple()} ${e} ${t} ${i}`}renderRipple(){return this.shouldRenderRipple?c.dy` <mwc-ripple .activated="${this.activated}"> </mwc-ripple>`:this.activated?c.dy`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const t={multi:this.multipleGraphics};return c.dy` <span class="mdc-deprecated-list-item__graphic material-icons ${(0,d.$)(t)}"> <slot name="graphic"></slot> </span>`}renderMeta(){return c.dy` <span class="mdc-deprecated-list-item__meta material-icons"> <slot name="meta"></slot> </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return c.dy` <span class="mdc-deprecated-list-item__text"> ${t} </span>`}renderSingleLine(){return c.dy`<slot></slot>`}renderTwoline(){return c.dy` <span class="mdc-deprecated-list-item__primary-text"> <slot></slot> </span> <span class="mdc-deprecated-list-item__secondary-text"> <slot name="secondary"></slot> </span> `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const i=()=>{window.removeEventListener(t,i),this.rippleHandlers.endPress()};window.addEventListener(t,i),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}(0,a.__decorate)([(0,s.IO)("slot")],n.prototype,"slotElement",void 0),(0,a.__decorate)([(0,s.GC)("mwc-ripple")],n.prototype,"ripple",void 0),(0,a.__decorate)([(0,s.Cb)({type:String})],n.prototype,"value",void 0),(0,a.__decorate)([(0,s.Cb)({type:String,reflect:!0})],n.prototype,"group",void 0),(0,a.__decorate)([(0,s.Cb)({type:Number,reflect:!0})],n.prototype,"tabindex",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],n.prototype,"disabled",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],n.prototype,"twoline",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],n.prototype,"activated",void 0),(0,a.__decorate)([(0,s.Cb)({type:String,reflect:!0})],n.prototype,"graphic",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean})],n.prototype,"multipleGraphics",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean})],n.prototype,"hasMeta",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],n.prototype,"noninteractive",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(t){const e=this.getAttribute("role"),i="gridcell"===e||"option"===e||"row"===e||"tab"===e;i&&t?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],n.prototype,"selected",void 0),(0,a.__decorate)([(0,s.SB)()],n.prototype,"shouldRenderRipple",void 0),(0,a.__decorate)([(0,s.SB)()],n.prototype,"_managingList",void 0)},96762:(t,e,i)=>{i.d(e,{W:()=>a});const a=i(68144).iv`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding,16px);padding-right:var(--mdc-list-side-padding,16px);outline:0;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host:focus{outline:0}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary,#6200ee);--mdc-ripple-color:var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:.12;opacity:var(--mdc-ripple-activated-opacity,.12);background-color:#6200ee;background-color:var(--mdc-ripple-color,var(--mdc-theme-primary,#6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size,24px);height:var(--mdc-list-item-meta-size,24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size,24px);line-height:var(--mdc-list-item-meta-size,24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size,24px)!important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size,.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight,400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing,.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform,inherit)}.mdc-deprecated-list-item__meta[dir=rtl],[dir=rtl] .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,40px);height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,40px);line-height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,40px)!important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,16px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,24px);height:var(--mdc-list-item-graphic-size,24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,24px);line-height:var(--mdc-list-item-graphic-size,24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,24px)!important}:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=large]:not([twoLine])),:host([graphic=medium]:not([twoLine])){height:72px}:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,56px);height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,56px);line-height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,56px)!important}:host([graphic=large]){padding-left:0px}`},45890:(t,e,i)=>{i.d(e,{A:()=>a});const a=i(68144).iv`.card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}`},87071:(t,e,i)=>{i.r(e),i.d(e,{HuiGraphFooterEditor:()=>h});var a=i(17463),r=i(68144),o=i(79932),c=i(38768),s=i(47181),d=(i(74535),i(83927),i(43709),i(3555),i(61173)),n=i(45890);const l=["sensor"];let h=(0,a.Z)([(0,o.Mo)("hui-graph-footer-editor")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){(0,c.hu)(t,d.gg),this._config=t}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_detail",value:function(){var t;return null!==(t=this._config.detail)&&void 0!==t?t:1}},{kind:"get",key:"_hours_to_show",value:function(){return this._config.hours_to_show||24}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?r.dy` <div class="card-config"> <ha-entity-picker allow-custom-entity .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}" .hass="${this.hass}" .value="${this._entity}" .configValue="${"entity"}" .includeDomains="${l}" .required="${!0}" @change="${this._valueChanged}"></ha-entity-picker> <div class="side-by-side"> <ha-formfield label="${this.hass.localize("ui.panel.lovelace.editor.card.sensor.show_more_detail")}"> <ha-switch .checked="${2===this._detail}" .configValue="${"detail"}" @change="${this._change}"></ha-switch> </ha-formfield> <ha-textfield type="number" .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hours_to_show")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})" .value="${this._hours_to_show}" min="1" .configValue="${"hours_to_show"}" @input="${this._valueChanged}"></ha-textfield> </div> </div> `:r.Ld}},{kind:"method",key:"_change",value:function(t){if(!this._config||!this.hass)return;const e=t.target.checked?2:1;this._detail!==e&&(this._config={...this._config,detail:e},(0,s.B)(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_valueChanged",value:function(t){if(!this._config||!this.hass)return;const e=t.target;if(this[`_${e.configValue}`]!==e.value){if(e.configValue)if(""===e.value||"number"===e.type&&isNaN(Number(e.value)))this._config={...this._config},delete this._config[e.configValue];else{let t=e.value;"number"===e.type&&(t=Number(t)),this._config={...this._config,[e.configValue]:t}}(0,s.B)(this,"config-changed",{config:this._config})}}},{kind:"get",static:!0,key:"styles",value:function(){return n.A}}]}}),r.oi)},85677:(t,e,i)=>{i.d(e,{C:()=>h});var a=i(38768);const r=(0,a.Ry)({user:(0,a.Z_)()}),o=(0,a.G0)([(0,a.O7)(),(0,a.Ry)({text:(0,a.jt)((0,a.Z_)()),excemptions:(0,a.jt)((0,a.IX)(r))})]),c=(0,a.Ry)({action:(0,a.i0)("url"),url_path:(0,a.Z_)(),confirmation:(0,a.jt)(o)}),s=(0,a.Ry)({action:(0,a.i0)("call-service"),service:(0,a.Z_)(),service_data:(0,a.jt)((0,a.Ry)()),data:(0,a.jt)((0,a.Ry)()),target:(0,a.jt)((0,a.Ry)({entity_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),device_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),area_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())]))})),confirmation:(0,a.jt)(o)}),d=(0,a.Ry)({action:(0,a.i0)("navigate"),navigation_path:(0,a.Z_)(),confirmation:(0,a.jt)(o)}),n=(0,a.dt)({action:(0,a.i0)("fire-dom-event")}),l=(0,a.Ry)({action:(0,a.kE)(["none","toggle","more-info","call-service","url","navigate"]),confirmation:(0,a.jt)(o)}),h=(0,a.D8)((t=>{if(t&&"object"==typeof t&&"action"in t)switch(t.action){case"call-service":return s;case"fire-dom-event":return n;case"navigate":return d;case"url":return c}return l}))},53939:(t,e,i)=>{i.d(e,{k:()=>o});var a=i(38768),r=i(85677);const o=(0,a.Ry)({entity:(0,a.Z_)(),name:(0,a.jt)((0,a.Z_)()),icon:(0,a.jt)((0,a.Z_)()),image:(0,a.jt)((0,a.Z_)()),show_name:(0,a.jt)((0,a.O7)()),show_icon:(0,a.jt)((0,a.O7)()),tap_action:(0,a.jt)(r.C),hold_action:(0,a.jt)(r.C),double_tap_action:(0,a.jt)(r.C)})},61173:(t,e,i)=>{i.d(e,{ds:()=>n,gg:()=>d});var a=i(38768),r=i(85677),o=i(53939);const c=(0,a.Ry)({type:(0,a.Z_)(),image:(0,a.Z_)(),tap_action:(0,a.jt)(r.C),hold_action:(0,a.jt)(r.C),double_tap_action:(0,a.jt)(r.C),alt_text:(0,a.jt)((0,a.Z_)())}),s=(0,a.Ry)({type:(0,a.Z_)(),entities:(0,a.IX)(o.k)}),d=(0,a.Ry)({type:(0,a.Z_)(),entity:(0,a.Z_)(),detail:(0,a.jt)((0,a.Rx)()),hours_to_show:(0,a.jt)((0,a.Rx)())}),n=(0,a.D8)((t=>{if(t&&"object"==typeof t&&"type"in t)switch(t.type){case"buttons":return s;case"graph":return d;case"picture":return c}return(0,a.G0)([s,d,c])}))}}]);
//# sourceMappingURL=41531-vwXzm0AyF_8.js.map