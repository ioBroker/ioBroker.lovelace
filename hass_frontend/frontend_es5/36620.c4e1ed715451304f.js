/*! For license information please see 36620.c4e1ed715451304f.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["36620"],{88618:function(e,t,i){"use strict";i.d(t,{Wg:()=>s,qN:()=>r.q});i(71695),i(47021);var n,d,o=i(9065),a=i(50778),r=i(11911);const l=null!==(d=null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&void 0!==d&&d;class s extends r.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||l)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}s.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,o.__decorate)([(0,a.Cb)({type:Boolean})],s.prototype,"disabled",void 0)},8327:function(e,t,i){"use strict";i.r(t),i.d(t,{HaFormString:()=>h});var n=i(61701),d=(i(22152),i(63721),i(19083),i(71695),i(61006),i(47021),i(57243)),o=i(50778),a=i(36522);i(23334),i(83166);let r,l,s,c,u=e=>e;const f=["password","secret","token"];let h=(0,n.Z)([(0,o.Mo)("ha-form-string")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"localizeBaseKey",value(){return"ui.components.selectors.text"}},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"data",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"unmaskedPassword",value(){return!1}},{kind:"field",decorators:[(0,o.IO)("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e,t;return(0,d.dy)(r||(r=u` <ha-textfield .type="${0}" .label="${0}" .value="${0}" .helper="${0}" helperPersistent .disabled="${0}" .required="${0}" .autoValidate="${0}" .name="${0}" .autocomplete="${0}" .suffix="${0}" .validationMessage="${0}" @input="${0}" @change="${0}"></ha-textfield> ${0} `),this.isPassword?this.unmaskedPassword?"text":"password":this.stringType,this.label,this.data||"",this.helper,this.disabled,this.schema.required,this.schema.required,this.schema.name,this.schema.autocomplete,this.isPassword?(0,d.dy)(l||(l=u`<div style="width:24px"></div>`)):null===(e=this.schema.description)||void 0===e?void 0:e.suffix,this.schema.required?null===(t=this.localize)||void 0===t?void 0:t.call(this,"ui.common.error_required"):void 0,this._valueChanged,this._valueChanged,this.renderIcon())}},{kind:"method",key:"renderIcon",value:function(){var e;return this.isPassword?(0,d.dy)(s||(s=u` <ha-icon-button .label="${0}" @click="${0}" .path="${0}"></ha-icon-button> `),null===(e=this.localize)||void 0===e?void 0:e.call(this,`${this.localizeBaseKey}.${this.unmaskedPassword?"hide_password":"show_password"}`),this.toggleUnmaskedPassword,this.unmaskedPassword?"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z":"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"):d.Ld}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}},{kind:"method",key:"toggleUnmaskedPassword",value:function(){this.unmaskedPassword=!this.unmaskedPassword}},{kind:"method",key:"_valueChanged",value:function(e){let t=e.target.value;this.data!==t&&(""!==t||this.schema.required||(t=void 0),(0,a.B)(this,"value-changed",{value:t}))}},{kind:"get",key:"stringType",value:function(){if(this.schema.format){if(["email","url"].includes(this.schema.format))return this.schema.format;if("fqdnurl"===this.schema.format)return"url"}return"text"}},{kind:"get",key:"isPassword",value:function(){return f.some((e=>this.schema.name.includes(e)))}},{kind:"field",static:!0,key:"styles",value(){return(0,d.iv)(c||(c=u`:host{display:block;position:relative}:host([own-margin]){margin-bottom:5px}ha-textfield{display:block}ha-icon-button{position:absolute;top:8px;right:8px;inset-inline-start:initial;inset-inline-end:8px;--mdc-icon-button-size:40px;--mdc-icon-size:20px;color:var(--secondary-text-color);direction:var(--direction)}`))}}]}}),d.oi)},83166:function(e,t,i){"use strict";i.d(t,{f:()=>m});var n=i(61701),d=i(72621),o=(i(71695),i(47021),i(1105)),a=i(33990),r=i(57243),l=i(50778),s=i(5111);let c,u,f,h,p=e=>e,m=(0,n.Z)([(0,l.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"iconTrailing",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,l.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,d.Z)(i,"updated",this,3)([e]),(e.has("invalid")||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||this.validationMessage||"Invalid":""),(this.invalid||this.validateOnInitialRender||e.has("invalid")&&void 0!==e.get("invalid"))&&this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return(0,r.dy)(c||(c=p` <span class="mdc-text-field__icon mdc-text-field__icon--${0}" tabindex="${0}"> <slot name="${0}Icon"></slot> </span> `),i,t?1:-1,i)}},{kind:"field",static:!0,key:"styles",value(){return[a.W,(0,r.iv)(u||(u=p`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:ltr}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}input[type=color]{height:20px}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=color]::-webkit-color-swatch-wrapper{padding:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px);padding-inline-end:var(--text-field-prefix-padding-right,2px);padding-inline-start:initial}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}#helper-text ha-markdown{display:inline-block}`)),"rtl"===s.E.document.dir?(0,r.iv)(f||(f=p`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl;--direction:rtl}`)):(0,r.iv)(h||(h=p``))]}}]}}),o.P)},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)})},53232:function(e,t,i){"use strict";i.d(t,{E_:()=>v,OR:()=>l,_Y:()=>c,dZ:()=>r,fk:()=>u,hN:()=>a,hl:()=>h,i9:()=>p,pt:()=>o,ws:()=>m});var n=i(2841);const{I:d}=n.Al,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,r=e=>{var t;return null!=(null===(t=null==e?void 0:e._$litType$)||void 0===t?void 0:t.h)},l=e=>void 0===e.strings,s=()=>document.createComment(""),c=(e,t,i)=>{var n;const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(s(),a),n=o.insertBefore(s(),a);i=new d(t,n,e,e.options)}else{const t=i._$AB.nextSibling,d=i._$AM,r=d!==e;if(r){let t;null===(n=i._$AQ)||void 0===n||n.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==d._$AU&&i._$AP(t)}if(t!==a||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,a),e=t}}}return i},u=(e,t,i=e)=>(e._$AI(t,i),e),f={},h=(e,t=f)=>e._$AH=t,p=e=>e._$AH,m=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const n=e._$AB.nextSibling;for(;i!==n;){const e=i.nextSibling;i.remove(),i=e}},v=e=>{e._$AR()}}}]);
//# sourceMappingURL=36620.c4e1ed715451304f.js.map