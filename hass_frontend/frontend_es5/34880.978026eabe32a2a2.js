"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["34880"],{20990:function(e,t,i){i.r(t),i.d(t,{HuiClimateSwingHorizontalModesCardFeatureEditor:()=>h});var o=i(58814),s=i(61701),n=(i(71695),i(9359),i(70104),i(19423),i(47021),i(57243)),a=i(50778),l=i(27486),d=i(36522);i(29073);const r=["customize_modes"];let u,c=e=>e,h=(0,s.Z)([(0,a.Mo)("hui-climate-swing-horizontal-modes-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value(){return(0,l.Z)(((e,t,i,o)=>{var s;return[{name:"style",selector:{select:{multiple:!1,mode:"list",options:["dropdown","icons"].map((t=>({value:t,label:e(`ui.panel.lovelace.editor.features.types.climate-swing-horizontal-modes.style_list.${t}`)})))}}},{name:"customize_modes",selector:{boolean:{}}},...o?[{name:"swing_horizontal_modes",selector:{select:{reorder:!0,multiple:!0,options:(null==i||null===(s=i.attributes.swing_horizontal_modes)||void 0===s?void 0:s.map((e=>({value:e,label:t(i,"swing_horizontal_mode",e)}))))||[]}}}]:[]]}))}},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this._config)return n.Ld;const i=null!==(e=this.context)&&void 0!==e&&e.entity_id?this.hass.states[null===(t=this.context)||void 0===t?void 0:t.entity_id]:void 0,o=Object.assign(Object.assign({style:"dropdown"},this._config),{},{customize_modes:void 0!==this._config.swing_horizontal_modes}),s=this._schema(this.hass.localize,this.hass.formatEntityAttributeValue,i,o.customize_modes);return(0,n.dy)(u||(u=c` <ha-form .hass="${0}" .data="${0}" .schema="${0}" .computeLabel="${0}" @value-changed="${0}"></ha-form> `),this.hass,o,s,this._computeLabelCallback,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(e){var t,i;const s=e.detail.value,{customize_modes:n}=s,a=(0,o.Z)(s,r),l=null!==(t=this.context)&&void 0!==t&&t.entity_id?this.hass.states[null===(i=this.context)||void 0===i?void 0:i.entity_id]:void 0;n&&!a.swing_horizontal_modes&&(a.swing_horizontal_modes=(null==l?void 0:l.attributes.swing_horizontal_modes)||[]),!n&&a.swing_horizontal_modes&&delete a.swing_horizontal_modes,(0,d.B)(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"style":case"swing_horizontal_modes":case"customize_modes":return this.hass.localize(`ui.panel.lovelace.editor.features.types.climate-swing-horizontal-modes.${e.name}`);default:return""}}}}]}}),n.oi)}}]);
//# sourceMappingURL=34880.978026eabe32a2a2.js.map