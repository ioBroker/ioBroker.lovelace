export const id=26156;export const ids=[26156];export const modules={55642:(e,t,n)=>{n.d(t,{h:()=>o});var a=n(68144),i=n(57835);const o=(0,i.XM)(class extends i.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==i.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,n]){return this._element&&this._element.localName===t?(n&&Object.entries(n).forEach((([e,t])=>{this._element[e]=t})),a.Jb):this.render(t,n)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},54102:(e,t,n)=>{n.r(t),n.d(t,{HuiMarkdownCardEditor:()=>h});var a=n(17463),i=n(68144),o=n(79932),r=n(38768),s=n(47181),c=(n(68331),n(98346));const l=(0,r.f0)(c.I,(0,r.Ry)({title:(0,r.jt)((0,r.Z_)()),content:(0,r.Z_)(),theme:(0,r.jt)((0,r.Z_)())})),d=[{name:"title",selector:{text:{}}},{name:"content",required:!0,selector:{template:{}}},{name:"theme",selector:{theme:{}}}];let h=(0,a.Z)([(0,o.Mo)("hui-markdown-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,r.hu)(e,l),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?i.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${d}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `:i.Ld}},{kind:"method",key:"_valueChanged",value:function(e){(0,s.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;case"content":return this.hass.localize(`ui.panel.lovelace.editor.card.markdown.${e.name}`);default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}}]}}),i.oi)},98346:(e,t,n)=>{n.d(t,{I:()=>i});var a=n(38768);const i=(0,a.Ry)({type:(0,a.Z_)(),view_layout:(0,a.Yj)()})}};
//# sourceMappingURL=26156.15rO89Ks10E.js.map