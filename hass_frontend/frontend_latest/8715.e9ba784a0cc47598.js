export const __webpack_ids__=["8715"];export const __webpack_modules__={22194:function(e,i,t){t.r(i);var n=t(44249),s=t(72621),o=t(15093),d=t(36522),a=t(81833),r=t(34939);(0,n.Z)([(0,o.Mo)("hui-conditional-card")],(function(e,i){class n extends i{constructor(...i){super(...i),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([t.e("46379"),t.e("15722"),t.e("82600"),t.e("52874"),t.e("53403"),t.e("12622")]).then(t.bind(t,38327)),document.createElement("hui-conditional-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"conditional",conditions:[],card:{}}}},{kind:"method",key:"setConfig",value:function(e){if(this.validateConfig(e),!e.card)throw new Error("No card configured");this._element=this._createCardElement(e.card)}},{kind:"method",key:"getCardSize",value:function(){return(0,a.N)(this._element)}},{kind:"method",key:"_createCardElement",value:function(e){const i=document.createElement("hui-card");return i.hass=this.hass,i.preview=this.preview,i.config=e,i.load(),i}},{kind:"method",key:"setVisibility",value:function(e){const i=this.preview||e,t=this.hidden;(0,s.Z)(n,"setVisibility",this,3)([e]),t!==this.hidden&&(0,d.B)(this,"card-visibility-changed",{value:i})}}]}}),r.g)},34939:function(e,i,t){t.d(i,{g:()=>h});var n=t(44249),s=t(72621),o=(t(9359),t(56475),t(31526),t(57243)),d=t(15093),a=t(48045),r=t(94264);let h=(0,n.Z)([(0,d.Mo)("hui-conditional-base")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"preview",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",key:"_element",value:void 0},{kind:"field",key:"_listeners",value:()=>[]},{kind:"field",key:"_mediaQueries",value:()=>[]},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"validateConfig",value:function(e){if(!e.conditions)throw new Error("No conditions configured");if(!Array.isArray(e.conditions))throw new Error("Conditions need to be an array");if(!(0,r.s_)(e.conditions))throw new Error("Conditions are invalid");this.lastChild&&this.removeChild(this.lastChild),this._config=e}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)(t,"disconnectedCallback",this,3)([]),this._clearMediaQueries()}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(t,"connectedCallback",this,3)([]),this._listenMediaQueries(),this._updateVisibility()}},{kind:"method",key:"_clearMediaQueries",value:function(){this._listeners.forEach((e=>e())),this._listeners=[]}},{kind:"method",key:"_listenMediaQueries",value:function(){if(!this._config||!this.hass)return;const e=this._config.conditions.filter((e=>"condition"in e)),i=(0,r.Oj)(e);if((0,a.v)(i,this._mediaQueries))return;this._clearMediaQueries();const t=this._config.conditions,n=1===t.length&&"condition"in t[0]&&"screen"===t[0].condition&&!!t[0].media_query;this._listeners=(0,r.av)(e,(e=>{n?this.setVisibility(e):this._updateVisibility()}))}},{kind:"method",key:"update",value:function(e){(0,s.Z)(t,"update",this,3)([e]),(e.has("_element")||e.has("_config")||e.has("hass")||e.has("preview"))&&(this._listenMediaQueries(),this._updateVisibility())}},{kind:"method",key:"_updateVisibility",value:function(){if(!this._element||!this.hass||!this._config)return;this._element.preview=this.preview;const e=(0,r.Ec)(this._config.conditions,this.hass);this.setVisibility(e)}},{kind:"method",key:"setVisibility",value:function(e){if(!this._element||!this.hass)return;const i=this.preview||e;this.hidden!==!i&&(this.toggleAttribute("hidden",!i),this.style.setProperty("display",i?"":"none")),i?(this._element.hass=this.hass,this._element.parentElement||this.appendChild(this._element)):this._element.parentElement&&this.removeChild(this._element)}}]}}),o.fl)}};
//# sourceMappingURL=8715.e9ba784a0cc47598.js.map