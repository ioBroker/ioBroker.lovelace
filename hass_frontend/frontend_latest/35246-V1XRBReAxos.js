"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[35246],{35246:(t,i,e)=>{e.a(t,(async(t,n)=>{try{e.r(i);var s=e(17463),a=e(68144),o=e(79932),h=e(94653),r=e(56007),u=e(89291),c=e(53658),d=e(91476),f=e(75502),l=(e(85066),t([h,d]));[h,d]=l.then?(await l)():l;(0,s.Z)([(0,o.Mo)("hui-time-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,c.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return a.Ld;const t=this.hass.states[this._config.entity];if(!t)return a.dy` <hui-warning> ${(0,f.i)(this.hass,this._config.entity)} </hui-warning> `;const i=(0,r.rk)(t.state);return a.dy` <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}"> <ha-time-input .value="${i?"":t.state}" .locale="${this.hass.locale}" .disabled="${i}" @value-changed="${this._timeChanged}" @click="${this._stopEventPropagation}"></ha-time-input> </hui-generic-entity-row> `}},{kind:"method",key:"_stopEventPropagation",value:function(t){t.stopPropagation()}},{kind:"method",key:"_timeChanged",value:function(t){const i=this.hass.states[this._config.entity];(0,u.a)(this.hass,i.entity_id,t.detail.value)}}]}}),a.oi);n()}catch(t){n(t)}}))}}]);
//# sourceMappingURL=35246-V1XRBReAxos.js.map