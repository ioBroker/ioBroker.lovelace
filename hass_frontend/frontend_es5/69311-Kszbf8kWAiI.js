"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[69311],{18601:function(e,t,n){n.d(t,{Wg:function(){return f},qN:function(){return v.q}});var i,a,r=n(71650),o=n(33368),s=n(34541),l=n(47838),d=n(69205),c=n(70906),u=n(43204),h=n(79932),v=n(78220),p=null!==(a=null===(i=window.ShadyDOM)||void 0===i?void 0:i.inUse)&&void 0!==a&&a,f=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).disabled=!1,e.containingForm=null,e.formDataListener=function(t){e.disabled||e.setFormData(t.formData)},e}return(0,o.Z)(n,[{key:"findFormElement",value:function(){if(!this.shadowRoot||p)return null;for(var e=this.getRootNode().querySelectorAll("form"),t=0,n=Array.from(e);t<n.length;t++){var i=n[t];if(i.contains(this))return i}return null}},{key:"connectedCallback",value:function(){var e;(0,s.Z)((0,l.Z)(n.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var e;(0,s.Z)((0,l.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var e=this;(0,s.Z)((0,l.Z)(n.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(t){e.dispatchEvent(new Event("change",t))}))}}]),n}(v.H);f.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,u.__decorate)([(0,h.Cb)({type:Boolean})],f.prototype,"disabled",void 0)},75642:function(e,t,n){var i,a,r=n(88962),o=n(71650),s=n(33368),l=n(69205),d=n(70906),c=n(43204),u=n(68144),h=n(79932),v=(0,u.iv)(i||(i=(0,r.Z)([':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}']))),p=function(e){(0,l.Z)(n,e);var t=(0,d.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,u.dy)(a||(a=(0,r.Z)(["<span><slot></slot></span>"])))}}]),n}(u.oi);p.styles=[v],p=(0,c.__decorate)([(0,h.Mo)("mwc-icon")],p)},32594:function(e,t,n){n.d(t,{U:function(){return i}});var i=function(e){return e.stopPropagation()}},96151:function(e,t,n){n.d(t,{T:function(){return i},y:function(){return a}});var i=function(e){requestAnimationFrame((function(){return setTimeout(e,0)}))},a=function(){return new Promise((function(e){i(e)}))}},73366:function(e,t,n){n.d(t,{M:function(){return g}});var i,a=n(88962),r=n(33368),o=n(71650),s=n(82390),l=n(69205),d=n(70906),c=n(91808),u=n(34541),h=n(47838),v=n(61092),p=n(96762),f=n(68144),m=n(79932),g=(0,c.Z)([(0,m.Mo)("ha-list-item")],(function(e,t){var n=function(t){(0,l.Z)(i,t);var n=(0,d.Z)(i);function i(){var t;(0,o.Z)(this,i);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return t=n.call.apply(n,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(i)}(t);return{F:n,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,u.Z)((0,h.Z)(n.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.W,(0,f.iv)(i||(i=(0,a.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),v.K)},86630:function(e,t,n){var i,a,r=n(99312),o=n(81043),s=n(88962),l=n(33368),d=n(71650),c=n(82390),u=n(69205),h=n(70906),v=n(91808),p=n(34541),f=n(47838),m=n(49412),g=n(3762),y=n(68144),k=n(79932),_=n(38346),Z=n(96151);(0,v.Z)([(0,k.Mo)("ha-select")],(function(e,t){var n=function(t){(0,u.Z)(i,t);var n=(0,h.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),e((0,c.Z)(t)),t}return(0,l.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,y.dy)(i||(i=(0,s.Z)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):y.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,p.Z)((0,f.Z)(n.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.Z)((0,f.Z)(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value:function(){var e=this;return(0,_.D)((0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,Z.y)();case 2:e.layoutOptions();case 3:case"end":return t.stop()}}),t)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,y.iv)(a||(a=(0,s.Z)([".mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}"])))]}}]}}),m.K)},53978:function(e,t,n){n.r(t),n.d(t,{HaSTTSelector:function(){return F}});var i,a,r,o,s,l,d=n(88962),c=n(33368),u=n(71650),h=n(82390),v=n(69205),p=n(70906),f=n(91808),m=n(68144),g=n(79932),y=n(99312),k=n(81043),_=n(34541),Z=n(47838),b=n(47181),w=n(32594),x=n(91741),C=n(38346),E=(n(73366),n(86630),"__NONE_OPTION__"),L={cloud:"ioBroker Cloud"},F=((0,f.Z)([(0,g.Mo)("ha-stt-picker")],(function(e,t){var n,s=function(t){(0,v.Z)(i,t);var n=(0,p.Z)(i);function i(){var t;(0,u.Z)(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),e((0,h.Z)(t)),t}return(0,c.Z)(i)}(t);return{F:s,d:[{kind:"field",decorators:[(0,g.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,g.SB)()],key:"_engines",value:void 0},{kind:"method",key:"render",value:function(){var e,t=this;if(!this._engines)return m.Ld;var n=null!==(e=this.value)&&void 0!==e?e:this.required?this._engines.find((function(e){var t;return 0!==(null===(t=e.supported_languages)||void 0===t?void 0:t.length)})):E;return(0,m.dy)(i||(i=(0,d.Z)([' <ha-select .label="','" .value="','" .required="','" .disabled="','" @selected="','" @closed="','" fixedMenuPosition naturalMenuWidth> '," "," </ha-select> "])),this.label||this.hass.localize("ui.components.stt-picker.stt"),n,this.required,this.disabled,this._changed,w.U,this.required?m.Ld:(0,m.dy)(a||(a=(0,d.Z)(['<ha-list-item .value="','"> '," </ha-list-item>"])),E,this.hass.localize("ui.components.stt-picker.none")),this._engines.map((function(e){var n,i=e.engine_id;if(e.engine_id.includes(".")){var a=t.hass.states[e.engine_id];i=a?(0,x.C)(a):e.engine_id}else e.engine_id in L&&(i=L[e.engine_id]);return(0,m.dy)(r||(r=(0,d.Z)(['<ha-list-item .value="','" .disabled="','"> '," </ha-list-item>"])),e.engine_id,0===(null===(n=e.supported_languages)||void 0===n?void 0:n.length),i)})))}},{kind:"method",key:"willUpdate",value:function(e){(0,_.Z)((0,Z.Z)(s.prototype),"willUpdate",this).call(this,e),this.hasUpdated?e.has("language")&&this._debouncedUpdateEngines():this._updateEngines()}},{kind:"field",key:"_debouncedUpdateEngines",value:function(){var e=this;return(0,C.D)((function(){return e._updateEngines()}),500)}},{kind:"method",key:"_updateEngines",value:(n=(0,k.Z)((0,y.Z)().mark((function e(){var t,n,i=this;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.hass,r=this.language,o=this.hass.config.country||void 0,a.callWS({type:"stt/engine/list",language:r,country:o});case 2:if(this._engines=e.sent.providers,this.value){e.next=5;break}return e.abrupt("return");case 5:n=this._engines.find((function(e){return e.engine_id===i.value})),(0,b.B)(this,"supported-languages-changed",{value:null==n?void 0:n.supported_languages}),n&&0!==(null===(t=n.supported_languages)||void 0===t?void 0:t.length)||(this.value=void 0,(0,b.B)(this,"value-changed",{value:this.value}));case 8:case"end":return e.stop()}var a,r,o}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(o||(o=(0,d.Z)(["ha-select{width:100%}"])))}},{kind:"method",key:"_changed",value:function(e){var t,n=this,i=e.target;!this.hass||""===i.value||i.value===this.value||void 0===this.value&&i.value===E||(this.value=i.value===E?void 0:i.value,(0,b.B)(this,"value-changed",{value:this.value}),(0,b.B)(this,"supported-languages-changed",{value:null===(t=this._engines.find((function(e){return e.engine_id===n.value})))||void 0===t?void 0:t.supported_languages}))}}]}}),m.oi),(0,f.Z)([(0,g.Mo)("ha-selector-stt")],(function(e,t){var n=function(t){(0,v.Z)(i,t);var n=(0,p.Z)(i);function i(){var t;(0,u.Z)(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),e((0,h.Z)(t)),t}return(0,c.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,g.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return(0,m.dy)(s||(s=(0,d.Z)(['<ha-stt-picker .hass="','" .value="','" .label="','" .helper="','" .language="','" .disabled="','" .required="','"></ha-stt-picker>'])),this.hass,this.value,this.label,this.helper,(null===(e=this.selector.stt)||void 0===e?void 0:e.language)||(null===(t=this.context)||void 0===t?void 0:t.language),this.disabled,this.required)}},{kind:"field",static:!0,key:"styles",value:function(){return(0,m.iv)(l||(l=(0,d.Z)(["ha-stt-picker{width:100%}"])))}}]}}),m.oi))}}]);
//# sourceMappingURL=69311-Kszbf8kWAiI.js.map