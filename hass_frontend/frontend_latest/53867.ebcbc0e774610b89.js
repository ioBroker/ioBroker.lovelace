export const __webpack_ids__=["53867"];export const __webpack_modules__={96978:function(e,t,a){a.r(t),a.d(t,{HuiTodoListEditor:()=>m});var i=a(44249),o=(a(9359),a(70104),a(57243)),s=a(15093),l=a(27486),n=a(62900),d=a(72344),c=a(36522),r=(a(99426),a(29073),a(18200)),h=a(10991),u=a(95276),_=a(75278);const p=(0,n.f0)(r.I,(0,n.Ry)({title:(0,n.jt)((0,n.Z_)()),theme:(0,n.jt)((0,n.Z_)()),entity:(0,n.jt)((0,n.Z_)()),hide_completed:(0,n.jt)((0,n.O7)()),hide_create:(0,n.jt)((0,n.O7)()),display_order:(0,n.jt)((0,n.Z_)())}));let m=(0,i.Z)([(0,s.Mo)("hui-todo-list-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",key:"_schema",value:()=>(0,l.Z)(((e,t)=>[{name:"title",selector:{text:{}}},{name:"entity",selector:{entity:{domain:"todo"}}},{name:"theme",selector:{theme:{}}},{name:"hide_completed",selector:{boolean:{}}},{name:"hide_create",selector:{boolean:{}}},{name:"display_order",selector:{select:{options:Object.values(u.LO).map((a=>({value:a,label:e(`ui.panel.lovelace.editor.card.todo-list.sort_modes.${a===u.LO.NONE&&t?"manual":a}`)})))}}}]))},{kind:"field",key:"_data",value:()=>(0,l.Z)((e=>({display_order:"none",...e})))},{kind:"method",key:"setConfig",value:function(e){(0,n.hu)(e,p),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o.dy` ${(0,d.p)(this.hass,"todo")?"":o.dy` <ha-alert alert-type="error"> ${this.hass.localize("ui.panel.lovelace.editor.card.shopping-list.integration_not_loaded")} </ha-alert> `} <ha-form .hass="${this.hass}" .data="${this._data(this._config)}" .schema="${this._schema(this.hass.localize,this._todoListSupportsFeature(u.$g.MOVE_TODO_ITEM))}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `:o.Ld}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;(0,c.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_todoListSupportsFeature",value:function(e){const t=this._config?.entity?this.hass.states[this._config?.entity]:void 0;return!!t&&(0,_.e)(t,e)}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;case"hide_completed":case"hide_create":case"display_order":return this.hass.localize(`ui.panel.lovelace.editor.card.todo-list.${e.name}`);default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}},{kind:"get",static:!0,key:"styles",value:function(){return h.A}}]}}),o.oi)},18200:function(e,t,a){a.d(t,{I:()=>o});var i=a(62900);const o=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)(),layout_options:(0,i.Yj)(),grid_options:(0,i.Yj)(),visibility:(0,i.Yj)()})}};
//# sourceMappingURL=53867.ebcbc0e774610b89.js.map