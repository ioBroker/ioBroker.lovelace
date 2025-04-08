export const __webpack_ids__=["17863"];export const __webpack_modules__={55600:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t),a.d(t,{HuiPictureEntityCardEditor:()=>g});var n=a(44249),o=(a(9359),a(70104),a(57243)),c=a(15093),s=a(62900),l=a(36522),r=a(73850),_=(a(29073),a(54529)),d=a(30571),m=a(18200),h=a(10991),u=e([_]);_=(u.then?(await u)():u)[0];const f="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",p=(0,s.f0)(m.I,(0,s.Ry)({entity:(0,s.jt)((0,s.Z_)()),image:(0,s.jt)((0,s.Z_)()),name:(0,s.jt)((0,s.Z_)()),camera_image:(0,s.jt)((0,s.Z_)()),camera_view:(0,s.jt)((0,s.Z_)()),aspect_ratio:(0,s.jt)((0,s.Z_)()),tap_action:(0,s.jt)(d.fJ),hold_action:(0,s.jt)(d.fJ),double_tap_action:(0,s.jt)(d.fJ),show_name:(0,s.jt)((0,s.O7)()),show_state:(0,s.jt)((0,s.O7)()),theme:(0,s.jt)((0,s.Z_)()),fit_mode:(0,s.jt)((0,s.Z_)())})),y=[{name:"entity",required:!0,selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"image",selector:{image:{}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"aspect_ratio",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}}]},{name:"theme",selector:{theme:{}}},{name:"interactions",type:"expandable",flatten:!0,iconPath:f,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map((e=>({name:e,selector:{ui_action:{default_action:"none"}}})))}]}];let g=(0,n.Z)([(0,c.Mo)("hui-picture-entity-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,s.hu)(e,p),this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o.Ld;const e={show_state:!0,show_name:!0,camera_view:"auto",...this._config};return o.dy` <ha-form .hass="${this.hass}" .data="${e}" .schema="${y}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;t.entity&&t.entity!==this._config?.entity&&("image"===(0,r.M)(t.entity)||"person"===(0,r.M)(t.entity)&&this.hass?.states[t.entity]?.attributes.entity_picture)&&t.image===_.STUB_IMAGE&&delete t.image,(0,l.B)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":case"tap_action":case"hold_action":case"double_tap_action":return`${this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}},{kind:"field",static:!0,key:"styles",value:()=>h.A}]}}),o.oi);i()}catch(e){i(e)}}))},18200:function(e,t,a){a.d(t,{I:()=>n});var i=a(62900);const n=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)(),layout_options:(0,i.Yj)(),grid_options:(0,i.Yj)(),visibility:(0,i.Yj)()})}};
//# sourceMappingURL=17863.cc96894bb4266393.js.map