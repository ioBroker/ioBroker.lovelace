export const __webpack_ids__=["40"];export const __webpack_modules__={585:function(e,t,s){s.r(t),s.d(t,{HuiClimateHvacModesCardFeatureEditor:()=>l});var a=s(44249),o=(s(9359),s(70104),s(57243)),i=s(15093),c=s(27486),d=s(36522),n=(s(29073),s(350));let l=(0,a.Z)([(0,i.Mo)("hui-climate-hvac-modes-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,i.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value:()=>(0,c.Z)(((e,t,s,a)=>[{name:"style",selector:{select:{multiple:!1,mode:"list",options:["dropdown","icons"].map((t=>({value:t,label:e(`ui.panel.lovelace.editor.features.types.climate-preset-modes.style_list.${t}`)})))}}},{name:"customize_modes",selector:{boolean:{}}},...a?[{name:"hvac_modes",selector:{select:{reorder:!0,multiple:!0,options:(s?.attributes.hvac_modes||[]).concat().sort(n.ZS).map((e=>({value:e,label:s?t(s,e):e})))}}}]:[]]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o.Ld;const e=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0,t={style:"icons",...this._config,customize_modes:void 0!==this._config.hvac_modes},s=this._schema(this.hass.localize,this.hass.formatEntityState,e,t.customize_modes);return o.dy` <ha-form .hass="${this.hass}" .data="${t}" .schema="${s}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const{customize_modes:t,...s}=e.detail.value,a=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0;if(t&&!s.hvac_modes){const e=(a?.attributes.hvac_modes||[]).concat().sort(n.ZS);s.hvac_modes=e}!t&&s.hvac_modes&&delete s.hvac_modes,(0,d.B)(this,"config-changed",{config:s})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"hvac_modes":case"style":case"customize_modes":return this.hass.localize(`ui.panel.lovelace.editor.features.types.climate-hvac-modes.${e.name}`);default:return""}}}}]}}),o.oi)}};
//# sourceMappingURL=40.fbe3a7f35c0d0ca7.js.map