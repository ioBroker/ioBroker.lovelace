"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["5027"],{49976:function(e,t,i){i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},94369:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{u:()=>d});var s=i(16485),a=i(27486),l=e([s]);s=(l.then?(await l)():l)[0];const d=(e,t)=>{try{var i,n;return null!==(i=null===(n=r(t))||void 0===n?void 0:n.of(e))&&void 0!==i?i:e}catch(s){return e}},r=(0,a.Z)((e=>new Intl.DisplayNames(e.language,{type:"language",fallback:"code"})));n()}catch(d){n(d)}}))},76320:function(e,t,i){i.d(t,{T:()=>n,y:()=>s});i(40251);const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},s=()=>new Promise((e=>{n(e)}))},21293:function(e,t,i){i.a(e,(async function(e,t){try{var n=i(61701),s=i(72621),a=(i(71695),i(9359),i(1331),i(70104),i(47021),i(57243)),l=i(50778),d=i(36522),r=i(49976),o=i(94369),c=i(38495),p=(i(7285),i(92824),e([o]));o=(p.then?(await p)():p)[0];let u,h,v,m,y=e=>e;const g="preferred",b="last_used";(0,n.Z)([(0,l.Mo)("ha-assist-pipeline-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"includeLastUsed",value(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_preferredPipeline",value(){return null}},{kind:"get",key:"_default",value:function(){return this.includeLastUsed?b:g}},{kind:"method",key:"render",value:function(){var e,t;if(!this._pipelines)return a.Ld;const i=null!==(e=this.value)&&void 0!==e?e:this._default;return(0,a.dy)(u||(u=y` <ha-select .label="${0}" .value="${0}" .required="${0}" .disabled="${0}" @selected="${0}" @closed="${0}" fixedMenuPosition naturalMenuWidth> ${0} <ha-list-item .value="${0}"> ${0} </ha-list-item> ${0} </ha-select> `),this.label||this.hass.localize("ui.components.pipeline-picker.pipeline"),i,this.required,this.disabled,this._changed,r.U,this.includeLastUsed?(0,a.dy)(h||(h=y` <ha-list-item .value="${0}"> ${0} </ha-list-item> `),b,this.hass.localize("ui.components.pipeline-picker.last_used")):null,g,this.hass.localize("ui.components.pipeline-picker.preferred",{preferred:null===(t=this._pipelines.find((e=>e.id===this._preferredPipeline)))||void 0===t?void 0:t.name}),this._pipelines.map((e=>(0,a.dy)(v||(v=y`<ha-list-item .value="${0}"> ${0} (${0}) </ha-list-item>`),e.id,e.name,(0,o.u)(e.language,this.hass.locale)))))}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)(i,"firstUpdated",this,3)([e]),(0,c.SC)(this.hass).then((e=>{this._pipelines=e.pipelines,this._preferredPipeline=e.preferred_pipeline}))}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(m||(m=y`ha-select{width:100%}`))}},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===this._default||(this.value=t.value===this._default?void 0:t.value,(0,d.B)(this,"value-changed",{value:this.value}))}}]}}),a.oi);t()}catch(u){t(u)}}))},7285:function(e,t,i){i.d(t,{M:()=>h});var n=i(61701),s=i(72621),a=(i(71695),i(47021),i(65703)),l=i(46289),d=i(57243),r=i(50778);let o,c,p,u=e=>e,h=(0,n.Z)([(0,r.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,s.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[l.W,(0,d.iv)(o||(o=u`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,d.iv)(c||(c=u`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,d.iv)(p||(p=u``))]}}]}}),a.K)},92824:function(e,t,i){var n=i(61701),s=i(72621),a=(i(71695),i(40251),i(47021),i(60930)),l=i(9714),d=i(57243),r=i(50778),o=i(22381),c=i(76320);i(23334);let p,u,h,v,m=e=>e;(0,n.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"clearable",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,d.dy)(p||(p=m` ${0} ${0} `),(0,s.Z)(i,"render",this,3)([]),this.clearable&&!this.required&&!this.disabled&&this.value?(0,d.dy)(u||(u=m`<ha-icon-button label="clear" @click="${0}" .path="${0}"></ha-icon-button>`),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):d.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,d.dy)(h||(h=m`<span class="mdc-select__icon"><slot name="icon"></slot></span>`)):d.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){var e;((0,s.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow)&&(null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector(".mdc-select__selected-text-container"))||void 0===e||e.classList.add("inline-arrow"))}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".mdc-select__selected-text-container");this.inlineArrow?null==e||e.classList.add("inline-arrow"):null==e||e.classList.remove("inline-arrow")}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,o.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,d.iv)(v||(v=m`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`))]}}]}}),a.K)},30363:function(e,t,i){i.a(e,(async function(e,n){try{i.r(t),i.d(t,{HaAssistPipelineSelector:()=>u});var s=i(61701),a=(i(71695),i(47021),i(57243)),l=i(50778),d=i(21293),r=e([d]);d=(r.then?(await r)():r)[0];let o,c,p=e=>e,u=(0,s.Z)([(0,l.Mo)("ha-selector-assist_pipeline")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"method",key:"render",value:function(){var e;return(0,a.dy)(o||(o=p` <ha-assist-pipeline-picker .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" .disabled="${0}" .required="${0}" .includeLastUsed="${0}"></ha-assist-pipeline-picker> `),this.hass,this.value,this.label,this.helper,this.disabled,this.required,Boolean(null===(e=this.selector.assist_pipeline)||void 0===e?void 0:e.include_last_used))}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(c||(c=p`ha-conversation-agent-picker{width:100%}`))}}]}}),a.oi);n()}catch(o){n(o)}}))},38495:function(e,t,i){i.d(t,{AI:()=>l,Dy:()=>v,GV:()=>u,I2:()=>s,PA:()=>o,SC:()=>r,Vg:()=>m,XT:()=>h,Xp:()=>a,_v:()=>d,af:()=>p,eP:()=>n,jZ:()=>c});i(71695),i(19423),i(47021);const n=(e,t,i)=>"run-start"===t.type?e={init_options:i,stage:"ready",run:t.data,events:[t]}:e?((e="wake_word-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"wake_word",wake_word:Object.assign(Object.assign({},t.data),{},{done:!1})}):"wake_word-end"===t.type?Object.assign(Object.assign({},e),{},{wake_word:Object.assign(Object.assign(Object.assign({},e.wake_word),t.data),{},{done:!0})}):"stt-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"stt",stt:Object.assign(Object.assign({},t.data),{},{done:!1})}):"stt-end"===t.type?Object.assign(Object.assign({},e),{},{stt:Object.assign(Object.assign(Object.assign({},e.stt),t.data),{},{done:!0})}):"intent-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"intent",intent:Object.assign(Object.assign({},t.data),{},{done:!1})}):"intent-end"===t.type?Object.assign(Object.assign({},e),{},{intent:Object.assign(Object.assign(Object.assign({},e.intent),t.data),{},{done:!0})}):"tts-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"tts",tts:Object.assign(Object.assign({},t.data),{},{done:!1})}):"tts-end"===t.type?Object.assign(Object.assign({},e),{},{tts:Object.assign(Object.assign(Object.assign({},e.tts),t.data),{},{done:!0})}):"run-end"===t.type?Object.assign(Object.assign({},e),{},{stage:"done"}):"error"===t.type?Object.assign(Object.assign({},e),{},{stage:"error",error:t.data}):Object.assign({},e)).events=[...e.events,t],e):void console.warn("Received unexpected event before receiving session",t),s=(e,t,i)=>{let s;const l=a(e,(e=>{s=n(s,e,i),"run-end"!==e.type&&"error"!==e.type||l.then((e=>e())),s&&t(s)}),i);return l},a=(e,t,i)=>e.connection.subscribeMessage(t,Object.assign(Object.assign({},i),{},{type:"assist_pipeline/run"})),l=(e,t)=>e.callWS({type:"assist_pipeline/pipeline_debug/list",pipeline_id:t}),d=(e,t,i)=>e.callWS({type:"assist_pipeline/pipeline_debug/get",pipeline_id:t,pipeline_run_id:i}),r=e=>e.callWS({type:"assist_pipeline/pipeline/list"}),o=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/get",pipeline_id:t}),c=(e,t)=>e.callWS(Object.assign({type:"assist_pipeline/pipeline/create"},t)),p=(e,t,i)=>e.callWS(Object.assign({type:"assist_pipeline/pipeline/update",pipeline_id:t},i)),u=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/set_preferred",pipeline_id:t}),h=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/delete",pipeline_id:t}),v=e=>e.callWS({type:"assist_pipeline/language/list"}),m=e=>e.callWS({type:"assist_pipeline/device/list"})},16485:function(e,t,i){i.a(e,(async function(e,t){try{i(71695),i(92745),i(40251),i(47021);var n=i(61449),s=i(40574),a=i(30532),l=i(41674),d=i(49722),r=i(76632),o=i(7884),c=i(35185),p=i(65401),u=i(44180),h=i(49447);const e=async()=>{const e=(0,u.sS)(),t=[];(0,a.shouldPolyfill)()&&await Promise.all([i.e("80210"),i.e("74055")]).then(i.bind(i,98133)),(0,d.shouldPolyfill)()&&await Promise.all([i.e("79525"),i.e("75297"),i.e("80210"),i.e("60251")]).then(i.bind(i,59095)),(0,n.shouldPolyfill)(e)&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("68250")]).then(i.bind(i,80561)).then((()=>(0,h.H)()))),(0,p.shouldPolyfill)()&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("65578")]).then(i.bind(i,97995))),(0,s.shouldPolyfill)(e)&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("59826")]).then(i.bind(i,31514))),(0,l.shouldPolyfill)(e)&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("23649")]).then(i.bind(i,93840))),(0,r.shouldPolyfill)(e)&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("42831")]).then(i.bind(i,29559))),(0,o.shouldPolyfill)(e)&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("57377")]).then(i.bind(i,39030)).then((()=>i.e("61236").then(i.t.bind(i,4121,23))))),(0,c.shouldPolyfill)(e)&&t.push(Promise.all([i.e("79525"),i.e("75297"),i.e("13870")]).then(i.bind(i,74546))),0!==t.length&&await Promise.all(t).then((()=>(0,h.n)(e)))};await e(),t()}catch(v){t(v)}}),1)}}]);
//# sourceMappingURL=5027.22da8609f08d71e7.js.map