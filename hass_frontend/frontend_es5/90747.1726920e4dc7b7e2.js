"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["90747"],{63837:function(e,i,t){t.a(e,(async function(e,n){try{t.r(i),t.d(i,{HuiConditionalElementEditor:()=>b});var o=t(61701),s=(t(71695),t(19423),t(47021),t(57243)),a=t(50778),d=t(62900),l=t(36522),c=(t(29073),t(32145),t(13420)),h=t(50357),g=e([c,h]);[c,h]=g.then?(await g)():g;let u,f,r=e=>e;const m=(0,d.Ry)({type:(0,d.i0)("conditional"),conditions:(0,d.jt)((0,d.IX)((0,d.Yj)())),elements:(0,d.jt)((0,d.IX)((0,d.Yj)())),title:(0,d.jt)((0,d.Z_)())}),_=[{name:"title",selector:{text:{}}}];let b=(0,o.Z)([(0,a.Mo)("hui-conditional-element-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_subElementEditorConfig",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,d.hu)(e,m),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?this._subElementEditorConfig?(0,s.dy)(u||(u=r` <hui-sub-element-editor .hass="${0}" .config="${0}" @go-back="${0}" @config-changed="${0}"> </hui-sub-element-editor> `),this.hass,this._subElementEditorConfig,this._goBack,this._handleSubElementChanged):(0,s.dy)(f||(f=r` <ha-form .hass="${0}" .data="${0}" .schema="${0}" .computeLabel="${0}" @value-changed="${0}"></ha-form> <ha-card-conditions-editor .hass="${0}" .conditions="${0}" @value-changed="${0}"> </ha-card-conditions-editor> <hui-picture-elements-card-row-editor .hass="${0}" .elements="${0}" @elements-changed="${0}" @edit-detail-element="${0}"></hui-picture-elements-card-row-editor> `),this.hass,this._config,_,this._computeLabelCallback,this._formChanged,this.hass,this._config.conditions||[],this._conditionChanged,this.hass,this._config.elements||[],this._elementsChanged,this._editDetailElement):s.Ld}},{kind:"method",key:"_formChanged",value:function(e){(0,l.B)(this,"config-changed",{config:e.detail.value})}},{kind:"method",key:"_conditionChanged",value:function(e){if(e.stopPropagation(),!this._config)return;const i=e.detail.value;this._config=Object.assign(Object.assign({},this._config),{},{conditions:i}),(0,l.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_elementsChanged",value:function(e){var i,t;e.stopPropagation();const n=(null===(i=this._config)||void 0===i||null===(i=i.elements)||void 0===i?void 0:i.length)||0,o=Object.assign(Object.assign({},this._config),{},{elements:e.detail.elements});(0,l.B)(this,"config-changed",{config:o});const s=(null===(t=e.detail.elements)||void 0===t?void 0:t.length)||0;if(s===n+1){const i=s-1;this._subElementEditorConfig={index:i,type:"element",elementConfig:Object.assign({},e.detail.elements[i])}}}},{kind:"method",key:"_handleSubElementChanged",value:function(e){var i;if(e.stopPropagation(),!this._config||!this.hass)return;const t=null===(i=this._subElementEditorConfig)||void 0===i?void 0:i.type,n=e.detail.config;if("element"===t){const e=this._config.elements.concat();n?e[this._subElementEditorConfig.index]=n:(e.splice(this._subElementEditorConfig.index,1),this._goBack()),this._config=Object.assign(Object.assign({},this._config),{},{elements:e})}this._subElementEditorConfig=Object.assign(Object.assign({},this._subElementEditorConfig),{},{elementConfig:n}),(0,l.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_editDetailElement",value:function(e){this._subElementEditorConfig=e.detail.subElementConfig}},{kind:"method",key:"_goBack",value:function(e){null==e||e.stopPropagation(),this._subElementEditorConfig=void 0}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.elements.${e.name}`)||e.name}}]}}),s.oi);n()}catch(u){n(u)}}))}}]);
//# sourceMappingURL=90747.1726920e4dc7b7e2.js.map