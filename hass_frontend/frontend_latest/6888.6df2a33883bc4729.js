export const __webpack_ids__=["6888"];export const __webpack_modules__={49976:function(e,t,i){i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},22381:function(e,t,i){i.d(t,{D:()=>n});const n=(e,t,i=!1)=>{let n;const a=(...a)=>{const d=i&&!n;clearTimeout(n),n=window.setTimeout((()=>{n=void 0,e(...a)}),t),d&&e(...a)};return a.cancel=()=>{clearTimeout(n)},a}},76320:function(e,t,i){i.d(t,{T:()=>n,y:()=>a});const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{n(e)}))},7285:function(e,t,i){i.d(t,{M:()=>r});var n=i(44249),a=i(72621),d=i(65703),s=i(46289),l=i(57243),o=i(15093);let r=(0,n.Z)([(0,o.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,l.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?l.iv`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:l.iv``]}}]}}),d.K)},92824:function(e,t,i){var n=i(44249),a=i(72621),d=i(60930),s=i(9714),l=i(57243),o=i(15093),r=i(22381),c=i(76320);i(23334);(0,n.Z)([(0,o.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value:()=>!1},{kind:"method",key:"render",value:function(){return l.dy` ${(0,a.Z)(i,"render",this,3)([])} ${this.clearable&&!this.required&&!this.disabled&&this.value?l.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:l.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?l.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:l.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){(0,a.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow&&this.shadowRoot?.querySelector(".mdc-select__selected-text-container")?.classList.add("inline-arrow")}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){const e=this.shadowRoot?.querySelector(".mdc-select__selected-text-container");this.inlineArrow?e?.classList.add("inline-arrow"):e?.classList.remove("inline-arrow")}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,r.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,l.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`]}]}}),d.K)},51974:function(e,t,i){i.r(t),i.d(t,{HaSTTSelector:()=>v});var n=i(44249),a=i(57243),d=i(15093),s=i(72621),l=(i(9359),i(1331),i(70104),i(36522)),o=i(49976),r=i(47194),c=i(22381),u=i(57627),h=(i(7285),i(92824),i(73850));const p="__NONE_OPTION__";(0,n.Z)([(0,d.Mo)("ha-stt-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_engines",value:void 0},{kind:"method",key:"render",value:function(){if(!this._engines)return a.Ld;let e=this.value;if(!e&&this.required){for(const t of Object.values(this.hass.entities))if("cloud"===t.platform&&"stt"===(0,h.M)(t.entity_id)){e=t.entity_id;break}if(!e)for(const t of this._engines)if(0!==t?.supported_languages?.length){e=t.engine_id;break}}return e||(e=p),a.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.stt-picker.stt")}" .value="${e}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${o.U}" fixedMenuPosition naturalMenuWidth> ${this.required?a.Ld:a.dy`<ha-list-item .value="${p}"> ${this.hass.localize("ui.components.stt-picker.none")} </ha-list-item>`} ${this._engines.map((t=>{if(t.deprecated&&t.engine_id!==e)return a.Ld;let i;if(t.engine_id.includes(".")){const e=this.hass.states[t.engine_id];i=e?(0,r.C)(e):t.engine_id}else i=t.name||t.engine_id;return a.dy`<ha-list-item .value="${t.engine_id}" .disabled="${0===t.supported_languages?.length}"> ${i} </ha-list-item>`}))} </ha-select> `}},{kind:"method",key:"willUpdate",value:function(e){(0,s.Z)(i,"willUpdate",this,3)([e]),this.hasUpdated?e.has("language")&&this._debouncedUpdateEngines():this._updateEngines()}},{kind:"field",key:"_debouncedUpdateEngines",value(){return(0,c.D)((()=>this._updateEngines()),500)}},{kind:"method",key:"_updateEngines",value:async function(){if(this._engines=(await(0,u.m)(this.hass,this.language,this.hass.config.country||void 0)).providers,!this.value)return;const e=this._engines.find((e=>e.engine_id===this.value));(0,l.B)(this,"supported-languages-changed",{value:e?.supported_languages}),e&&0!==e.supported_languages?.length||(this.value=void 0,(0,l.B)(this,"value-changed",{value:this.value}))}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`ha-select{width:100%}`},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===p||(this.value=t.value===p?void 0:t.value,(0,l.B)(this,"value-changed",{value:this.value}),(0,l.B)(this,"supported-languages-changed",{value:this._engines.find((e=>e.engine_id===this.value))?.supported_languages}))}}]}}),a.oi);let v=(0,n.Z)([(0,d.Mo)("ha-selector-stt")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){return a.dy`<ha-stt-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .language="${this.selector.stt?.language||this.context?.language}" .disabled="${this.disabled}" .required="${this.required}"></ha-stt-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`ha-stt-picker{width:100%}`}]}}),a.oi)},57627:function(e,t,i){i.d(t,{m:()=>n});const n=(e,t,i)=>e.callWS({type:"stt/engine/list",language:t,country:i})}};
//# sourceMappingURL=6888.6df2a33883bc4729.js.map