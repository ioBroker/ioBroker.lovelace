"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["47908"],{64556:function(e,t,s){s.r(t),s.d(t,{HuiAlarmModesCardFeatureEditor:()=>m});var i=s(58814),o=s(61701),a=(s(71695),s(9359),s(70104),s(19423),s(47021),s(57243)),d=s(50778),n=s(27486),l=s(36522),c=(s(29073),s(377));const u=["customize_modes"];let r,h=e=>e,m=(0,o.Z)([(0,d.Mo)("hui-alarm-modes-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value(){return(0,n.Z)(((e,t,s)=>[{name:"customize_modes",selector:{boolean:{}}},...s?[{name:"modes",selector:{select:{multiple:!0,reorder:!0,options:t?(0,c.wl)(t).map((t=>({value:t,label:`${e(`ui.panel.lovelace.editor.features.types.alarm-modes.modes_list.${t}`)}`}))):[]}}}]:[]]))}},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this._config)return a.Ld;const s=Object.assign(Object.assign({},this._config),{},{customize_modes:void 0!==this._config.modes}),i=null!==(e=this.context)&&void 0!==e&&e.entity_id?this.hass.states[null===(t=this.context)||void 0===t?void 0:t.entity_id]:void 0,o=this._schema(this.hass.localize,i,s.customize_modes);return(0,a.dy)(r||(r=h` <ha-form .hass="${0}" .data="${0}" .schema="${0}" .computeLabel="${0}" @value-changed="${0}"></ha-form> `),this.hass,s,o,this._computeLabelCallback,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(e){var t,s;const o=e.detail.value,{customize_modes:a}=o,d=(0,i.Z)(o,u),n=null!==(t=this.context)&&void 0!==t&&t.entity_id?this.hass.states[null===(s=this.context)||void 0===s?void 0:s.entity_id]:void 0;a&&!d.modes&&(d.modes=n?(0,c.wl)(n):[]),!a&&d.modes&&delete d.modes,(0,l.B)(this,"config-changed",{config:d})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"modes":case"customize_modes":return this.hass.localize(`ui.panel.lovelace.editor.features.types.alarm-modes.${e.name}`);default:return""}}}}]}}),a.oi)}}]);
//# sourceMappingURL=47908.91963f5537a31144.js.map