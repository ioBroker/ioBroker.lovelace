export const id=39857;export const ids=[39857];export const modules={55642:(e,t,a)=>{a.d(t,{h:()=>s});var i=a(68144),n=a(57835);const s=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==n.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,a]){return this._element&&this._element.localName===t?(a&&Object.entries(a).forEach((([e,t])=>{this._element[e]=t})),i.Jb):this.render(t,a)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},59658:(e,t,a)=>{a.r(t),a.d(t,{HuiOriginalStatesDashboarStrategyEditor:()=>d});var i=a(17463),n=a(68144),s=a(79932),r=a(47181);a(68331);const o=[{name:"areas",selector:{area_filter:{}}},{name:"",type:"grid",schema:[{name:"hide_entities_without_area",selector:{boolean:{}}},{name:"hide_energy",selector:{boolean:{}}}]}];let d=(0,i.Z)([(0,s.Mo)("hui-original-states-dashboard-strategy-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?n.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${o}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `:n.Ld}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;(0,r.B)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{var t;switch(e.name){case"areas":case"hide_energy":case"hide_entities_without_area":return null===(t=this.hass)||void 0===t?void 0:t.localize(`ui.panel.lovelace.editor.strategy.original-states.${e.name}`);default:return""}}}}]}}),n.oi)}};
//# sourceMappingURL=39857.Eps3Fv_9bz0.js.map