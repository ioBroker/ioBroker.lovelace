"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["80515"],{49976:function(e,i,t){t.d(i,{U:()=>n});const n=e=>e.stopPropagation()},76320:function(e,i,t){t.d(i,{T:()=>n,y:()=>a});t(40251);const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{n(e)}))},7285:function(e,i,t){t.d(i,{M:()=>v});var n=t(61701),a=t(72621),d=(t(71695),t(47021),t(65703)),l=t(46289),s=t(57243),o=t(50778);let r,c,u,h=e=>e,v=(0,n.Z)([(0,o.Mo)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(t,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[l.W,(0,s.iv)(r||(r=h`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,s.iv)(c||(c=h`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,s.iv)(u||(u=h``))]}}]}}),d.K)},92824:function(e,i,t){var n=t(61701),a=t(72621),d=(t(71695),t(40251),t(47021),t(60930)),l=t(9714),s=t(57243),o=t(50778),r=t(22381),c=t(76320);t(23334);let u,h,v,p,m=e=>e;(0,n.Z)([(0,o.Mo)("ha-select")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"clearable",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)()],key:"options",value:void 0},{kind:"method",key:"render",value:function(){return(0,s.dy)(u||(u=m` ${0} ${0} `),(0,a.Z)(t,"render",this,3)([]),this.clearable&&!this.required&&!this.disabled&&this.value?(0,s.dy)(h||(h=m`<ha-icon-button label="clear" @click="${0}" .path="${0}"></ha-icon-button>`),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):s.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,s.dy)(v||(v=m`<span class="mdc-select__icon"><slot name="icon"></slot></span>`)):s.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(t,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){var e;((0,a.Z)(t,"firstUpdated",this,3)([]),this.inlineArrow)&&(null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector(".mdc-select__selected-text-container"))||void 0===e||e.classList.add("inline-arrow"))}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(t,"updated",this,3)([e]),e.has("inlineArrow")){var i;const e=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".mdc-select__selected-text-container");this.inlineArrow?null==e||e.classList.add("inline-arrow"):null==e||e.classList.remove("inline-arrow")}e.get("options")&&(this.layoutOptions(),this.selectByValue(this.value))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(t,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,r.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,s.iv)(p||(p=m`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`))]}}]}}),d.K)},12596:function(e,i,t){t.r(i),t.d(i,{HaTTSVoiceSelector:()=>r});var n=t(61701),a=(t(71695),t(47021),t(57243)),d=t(50778);t(20901);let l,s,o=e=>e,r=(0,n.Z)([(0,d.Mo)("ha-selector-tts_voice")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,i,t,n;return(0,a.dy)(l||(l=o`<ha-tts-voice-picker .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" .language="${0}" .engineId="${0}" .disabled="${0}" .required="${0}"></ha-tts-voice-picker>`),this.hass,this.value,this.label,this.helper,(null===(e=this.selector.tts_voice)||void 0===e?void 0:e.language)||(null===(i=this.context)||void 0===i?void 0:i.language),(null===(t=this.selector.tts_voice)||void 0===t?void 0:t.engineId)||(null===(n=this.context)||void 0===n?void 0:n.engineId),this.disabled,this.required)}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(s||(s=o`ha-tts-picker{width:100%}`))}}]}}),a.oi)},20901:function(e,i,t){var n=t(61701),a=t(72621),d=(t(71695),t(9359),t(1331),t(70104),t(40251),t(47021),t(57243)),l=t(50778),s=t(36522),o=t(49976),r=t(22381),c=t(58968);t(7285),t(92824);let u,h,v,p,m=e=>e;const k="__NONE_OPTION__";(0,n.Z)([(0,l.Mo)("ha-tts-voice-picker")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"engineId",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"_voices",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-select")],key:"_select",value:void 0},{kind:"method",key:"render",value:function(){var e,i;if(!this._voices)return d.Ld;const t=null!==(e=this.value)&&void 0!==e?e:this.required?null===(i=this._voices[0])||void 0===i?void 0:i.voice_id:k;return(0,d.dy)(u||(u=m` <ha-select .label="${0}" .value="${0}" .required="${0}" .disabled="${0}" @selected="${0}" @closed="${0}" fixedMenuPosition naturalMenuWidth> ${0} ${0} </ha-select> `),this.label||this.hass.localize("ui.components.tts-voice-picker.voice"),t,this.required,this.disabled,this._changed,o.U,this.required?d.Ld:(0,d.dy)(h||(h=m`<ha-list-item .value="${0}"> ${0} </ha-list-item>`),k,this.hass.localize("ui.components.tts-voice-picker.none")),this._voices.map((e=>(0,d.dy)(v||(v=m`<ha-list-item .value="${0}"> ${0} </ha-list-item>`),e.voice_id,e.name))))}},{kind:"method",key:"willUpdate",value:function(e){(0,a.Z)(t,"willUpdate",this,3)([e]),this.hasUpdated?(e.has("language")||e.has("engineId"))&&this._debouncedUpdateVoices():this._updateVoices()}},{kind:"field",key:"_debouncedUpdateVoices",value(){return(0,r.D)((()=>this._updateVoices()),500)}},{kind:"method",key:"_updateVoices",value:async function(){this.engineId&&this.language?(this._voices=(await(0,c.MV)(this.hass,this.engineId,this.language)).voices,this.value&&(this._voices&&this._voices.find((e=>e.voice_id===this.value))||(this.value=void 0,(0,s.B)(this,"value-changed",{value:this.value})))):this._voices=void 0}},{kind:"method",key:"updated",value:function(e){var i,n,d;((0,a.Z)(t,"updated",this,3)([e]),e.has("_voices")&&(null===(i=this._select)||void 0===i?void 0:i.value)!==this.value)&&(null===(n=this._select)||void 0===n||n.layoutOptions(),(0,s.B)(this,"value-changed",{value:null===(d=this._select)||void 0===d?void 0:d.value}))}},{kind:"field",static:!0,key:"styles",value(){return(0,d.iv)(p||(p=m`ha-select{width:100%}`))}},{kind:"method",key:"_changed",value:function(e){const i=e.target;!this.hass||""===i.value||i.value===this.value||void 0===this.value&&i.value===k||(this.value=i.value===k?void 0:i.value,(0,s.B)(this,"value-changed",{value:this.value}))}}]}}),d.oi)},58968:function(e,i,t){t.d(i,{MV:()=>r,Wg:()=>s,Xk:()=>l,aT:()=>n,b_:()=>d,yP:()=>o});t(88044);const n=(e,i)=>e.callApi("POST","tts_get_url",i),a="media-source://tts/",d=e=>e.startsWith(a),l=e=>e.substring(19),s=(e,i,t)=>e.callWS({type:"tts/engine/list",language:i,country:t}),o=(e,i)=>e.callWS({type:"tts/engine/get",engine_id:i}),r=(e,i,t)=>e.callWS({type:"tts/engine/voices",engine_id:i,language:t})}}]);
//# sourceMappingURL=80515.6049fa13d48b5895.js.map