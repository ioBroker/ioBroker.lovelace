"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["25813"],{66831:function(e,t,a){a.r(t),a.d(t,{HuiStateLabelElementEditor:()=>f});var n=a(61701),i=(a(71695),a(9359),a(70104),a(47021),a(57243)),o=a(50778),l=a(62900),s=a(36522),c=(a(29073),a(30571));let r,u=e=>e;const d=(0,l.Ry)({type:(0,l.i0)("state-label"),entity:(0,l.jt)((0,l.Z_)()),attribute:(0,l.jt)((0,l.Z_)()),prefix:(0,l.jt)((0,l.Z_)()),suffix:(0,l.jt)((0,l.Z_)()),style:(0,l.jt)((0,l.Yj)()),title:(0,l.jt)((0,l.Z_)()),tap_action:(0,l.jt)(c.fJ),hold_action:(0,l.jt)(c.fJ),double_tap_action:(0,l.jt)(c.fJ)}),h=[{name:"entity",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{}},context:{filter_entity:"entity"}},{name:"prefix",selector:{text:{}}},{name:"suffix",selector:{text:{}}},{name:"title",selector:{text:{}}},{name:"interactions",type:"expandable",flatten:!0,iconPath:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map((e=>({name:e,selector:{ui_action:{default_action:"none"}}})))}]},{name:"style",selector:{object:{}}}];let f=(0,n.Z)([(0,o.Mo)("hui-state-label-element-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,l.hu)(e,d),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,i.dy)(r||(r=u` <ha-form .hass="${0}" .data="${0}" .schema="${0}" .computeLabel="${0}" @value-changed="${0}"></ha-form> `),this.hass,this._config,h,this._computeLabelCallback,this._valueChanged):i.Ld}},{kind:"method",key:"_valueChanged",value:function(e){(0,s.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.elements.${e.name}`)||e.name}}]}}),i.oi)}}]);
//# sourceMappingURL=25813.ae3b44e39ed0c290.js.map