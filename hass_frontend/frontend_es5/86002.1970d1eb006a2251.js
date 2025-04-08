/*! For license information please see 86002.1970d1eb006a2251.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["86002"],{53013:function(e,t,i){"use strict";var n=i(61701),r=i(72621),a=i(91179),o=(i(19083),i(71695),i(52805),i(9359),i(56475),i(70104),i(48136),i(40251),i(19134),i(61006),i(47021),i(57243)),l=i(50778),s=i(94886),d=i.n(s),c=i(36522),u=(i(72700),i(8038),i(71513),i(75656),i(50100),i(18084),i(75351));let f;const h=new(i(80262).L)(1e3),p={reType:(0,a.Z)(/((\[!(caution|important|note|tip|warning)\])(?:\s|\\n)?)/i,{input:1,type:3}),typeToHaAlert:{caution:"error",important:"info",note:"info",tip:"success",warning:"warning"}};(0,n.Z)([(0,l.Mo)("ha-markdown-element")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,l.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"allow-svg",type:Boolean})],key:"allowSvg",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"breaks",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"cache",value(){return!1}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,r.Z)(n,"disconnectedCallback",this,3)([]),this.cache){const e=this._computeCacheKey();h.set(e,this.innerHTML)}}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,r.Z)(n,"update",this,3)([e]),void 0!==this.content&&this._render()}},{kind:"method",key:"willUpdate",value:function(e){if(!this.innerHTML&&this.cache){const e=this._computeCacheKey();h.has(e)&&(this.innerHTML=h.get(e),this._resize())}}},{kind:"method",key:"_computeCacheKey",value:function(){return d()({content:this.content,allowSvg:this.allowSvg,breaks:this.breaks})}},{kind:"method",key:"_render",value:async function(){this.innerHTML=await(async(e,t,n)=>(f||(f=(0,u.Ud)(new Worker(new URL(i.p+i.u("45845"),i.b)))),f.renderMarkdown(e,t,n)))(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg}),this._resize();const e=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);for(;e.nextNode();){const n=e.currentNode;if(n instanceof HTMLAnchorElement&&n.host!==document.location.host)n.target="_blank",n.rel="noreferrer noopener";else if(n instanceof HTMLImageElement)this.lazyImages&&(n.loading="lazy"),n.addEventListener("load",this._resize);else if(n instanceof HTMLQuoteElement){var t;const i=(null===(t=n.firstElementChild)||void 0===t||null===(t=t.firstChild)||void 0===t?void 0:t.textContent)&&p.reType.exec(n.firstElementChild.firstChild.textContent);if(i){const{type:t}=i.groups,r=document.createElement("ha-alert");r.alertType=p.typeToHaAlert[t.toLowerCase()],r.append(...Array.from(n.childNodes).map((e=>{const t=Array.from(e.childNodes);if(!this.breaks&&t.length){var n;const e=t[0];e.nodeType===Node.TEXT_NODE&&e.textContent===i.input&&null!==(n=e.textContent)&&void 0!==n&&n.includes("\n")&&(e.textContent=e.textContent.split("\n").slice(1).join("\n"))}return t})).reduce(((e,t)=>e.concat(t)),[]).filter((e=>e.textContent&&e.textContent!==i.input))),e.parentNode().replaceChild(r,n)}}else n instanceof HTMLElement&&["ha-alert","ha-qr-code","ha-icon","ha-svg-icon"].includes(n.localName)&&i(23265)(`./${n.localName}`)}}},{kind:"field",key:"_resize",value(){return()=>(0,c.B)(this,"content-resize")}}]}}),o.fl)},99254:function(e,t,i){"use strict";var n=i(61701),r=(i(71695),i(47021),i(57243)),a=i(50778);i(53013);let o,l,s=e=>e;(0,n.Z)([(0,a.Mo)("ha-markdown")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"allow-svg",type:Boolean})],key:"allowSvg",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"breaks",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"cache",value(){return!1}},{kind:"method",key:"render",value:function(){return this.content?(0,r.dy)(o||(o=s`<ha-markdown-element .content="${0}" .allowSvg="${0}" .breaks="${0}" .lazyImages="${0}" .cache="${0}"></ha-markdown-element>`),this.content,this.allowSvg,this.breaks,this.lazyImages,this.cache):r.Ld}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(l||(l=s`:host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}ha-alert{display:block;margin:4px 0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family, monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}hr{border-color:var(--divider-color);border-bottom:none;margin:16px 0}`))}}]}}),r.oi)},83166:function(e,t,i){"use strict";var n=i(61701),r=i(72621),a=(i(71695),i(47021),i(1105)),o=i(33990),l=i(57243),s=i(50778),d=i(5111);let c,u,f,h,p=e=>e;(0,n.Z)([(0,s.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"iconTrailing",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,s.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,r.Z)(i,"updated",this,3)([e]),(e.has("invalid")||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||this.validationMessage||"Invalid":""),(this.invalid||this.validateOnInitialRender||e.has("invalid")&&void 0!==e.get("invalid"))&&this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return(0,l.dy)(c||(c=p` <span class="mdc-text-field__icon mdc-text-field__icon--${0}" tabindex="${0}"> <slot name="${0}Icon"></slot> </span> `),i,t?1:-1,i)}},{kind:"field",static:!0,key:"styles",value(){return[o.W,(0,l.iv)(u||(u=p`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:ltr}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}input[type=color]{height:20px}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=color]::-webkit-color-swatch-wrapper{padding:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px);padding-inline-end:var(--text-field-prefix-padding-right,2px);padding-inline-start:initial}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}#helper-text ha-markdown{display:inline-block}`)),"rtl"===d.E.document.dir?(0,l.iv)(f||(f=p`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl;--direction:rtl}`)):(0,l.iv)(h||(h=p``))]}}]}}),a.P)},10080:function(e,t,i){"use strict";i.a(e,(async function(e,n){try{i.r(t),i.d(t,{MoreInfoConfigurator:()=>g});var r=i(61701),a=(i(63721),i(71695),i(9359),i(70104),i(47021),i(31622),i(57243)),o=i(50778),l=(i(99426),i(17170)),s=(i(99254),i(83166),e([l]));l=(s.then?(await s)():s)[0];let d,c,u,f,h,p,m=e=>e,g=(0,r.Z)([(0,o.Mo)("more-info-configurator")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_isConfiguring",value(){return!1}},{kind:"field",key:"_fieldInput",value(){return{}}},{kind:"method",key:"render",value:function(){var e;return"configure"!==(null===(e=this.stateObj)||void 0===e?void 0:e.state)?a.Ld:(0,a.dy)(d||(d=m` <div class="container"> <ha-markdown breaks .content="${0}"></ha-markdown> ${0} ${0} ${0} </div> `),this.stateObj.attributes.description,this.stateObj.attributes.errors?(0,a.dy)(c||(c=m`<ha-alert alert-type="error"> ${0} </ha-alert>`),this.stateObj.attributes.errors):"",this.stateObj.attributes.fields.map((e=>(0,a.dy)(u||(u=m`<ha-textfield .label="${0}" .name="${0}" .type="${0}" @change="${0}"></ha-textfield>`),e.name,e.id,e.type,this._fieldChanged))),this.stateObj.attributes.submit_caption?(0,a.dy)(f||(f=m`<p class="submit"> <mwc-button raised .disabled="${0}" @click="${0}"> ${0} ${0} </mwc-button> </p>`),this._isConfiguring,this._submitClicked,this._isConfiguring?(0,a.dy)(h||(h=m`<ha-spinner size="tiny" aria-label="Configuring"></ha-spinner>`)):"",this.stateObj.attributes.submit_caption):"")}},{kind:"method",key:"_fieldChanged",value:function(e){const t=e.target;this._fieldInput[t.name]=t.value}},{kind:"method",key:"_submitClicked",value:function(){const e={configure_id:this.stateObj.attributes.configure_id,fields:this._fieldInput};this._isConfiguring=!0,this.hass.callService("configurator","configure",e).then((()=>{this._isConfiguring=!1}),(()=>{this._isConfiguring=!1}))}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(p||(p=m`.container{display:flex;flex-direction:column}p{margin:8px 0}a{color:var(--primary-color)}p>img{max-width:100%}p.center{text-align:center}p.submit{text-align:center;height:41px}ha-spinner{--ha-spinner-indicator-color:var(--primary-text-color);margin-right:auto;margin-left:auto}`))}}]}}),a.oi);n()}catch(d){n(d)}}))},80262:function(e,t,i){"use strict";i.d(t,{L:()=>n});i(71695),i(47021);class n{constructor(e){this._expiration=void 0,this._cache=new Map,this._expiration=e}get(e){return this._cache.get(e)}set(e,t){this._cache.set(e,t),this._expiration&&window.setTimeout((()=>this._cache.delete(e)),this._expiration)}has(e){return this._cache.has(e)}}},23265:function(e,t,i){var n={"./ha-icon":["65981","97406"],"./ha-icon-button-toggle":["79505","80175"],"./ha-svg-icon":["37583"],"./ha-icon-button-group":["45747","97792"],"./ha-svg-icon.ts":["37583"],"./ha-icon.ts":["65981","97406"],"./ha-icon-overflow-menu":["59959","91552","78456","56898","99287","14932"],"./ha-icon-next":["13928","99172"],"./ha-icon-picker":["21393","46379","66031","24199","78943","45760"],"./ha-qr-code.ts":["50634","53750","70472"],"./ha-icon-button-arrow-prev.ts":["54202","41069"],"./ha-icon-button-arrow-prev":["54202","41069"],"./ha-icon-overflow-menu.ts":["59959","91552","78456","56898","99287","14932"],"./ha-alert":["99426","4809"],"./ha-icon-button-next":["4635","51577"],"./ha-icon-button":["23334"],"./ha-icon-button-next.ts":["4635","51577"],"./ha-icon-picker.ts":["21393","46379","66031","24199","78943","45760"],"./ha-icon-button-group.ts":["45747","97792"],"./ha-icon-button-toggle.ts":["79505","80175"],"./ha-icon-button-arrow-next.ts":["54237","21559"],"./ha-icon-button-prev.ts":["5828","43537"],"./ha-icon-prev":["95499","87557"],"./ha-icon-prev.ts":["95499","87557"],"./ha-icon-button.ts":["23334"],"./ha-alert.ts":["99426","4809"],"./ha-icon-button-prev":["5828","43537"],"./ha-qr-code":["50634","53750","70472"],"./ha-icon-next.ts":["13928","99172"],"./ha-icon-button-arrow-next":["54237","21559"]};function r(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i(r)}))}r.keys=()=>Object.keys(n),r.id=23265,e.exports=r},68289:function(e,t,i){"use strict";var n=i(40810),r=i(1569),a=i(27803),o=i(85779),l=TypeError,s=Object.defineProperty,d=r.self!==r;try{if(o){var c=Object.getOwnPropertyDescriptor(r,"self");!d&&c&&c.get&&c.enumerable||a(r,"self",{get:function(){return r},set:function(e){if(this!==r)throw new l("Illegal invocation");s(r,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else n({global:!0,simple:!0,forced:d},{self:r})}catch(u){}},75351:function(e,t,i){"use strict";i.d(t,{Ud:()=>f});i(63721),i(52247),i(71695),i(52805),i(43451),i(9359),i(70104),i(48136),i(19423),i(40251),i(69235),i(12385),i(19134),i(5740),i(11740),i(46692),i(47021);const n=Symbol("Comlink.proxy"),r=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),l=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,d=new Map([["proxy",{canHandle:e=>s(e)&&e[n],serialize(e){const{port1:t,port2:i}=new MessageChannel;return c(e,t),[i,[i]]},deserialize(e){return e.start(),f(e)}}],["throw",{canHandle:e=>s(e)&&l in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(e,t=globalThis,i=["*"]){t.addEventListener("message",(function r(a){if(!a||!a.data)return;if(!function(e,t){for(const i of e){if(t===i||"*"===i)return!0;if(i instanceof RegExp&&i.test(t))return!0}return!1}(i,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:s,type:d,path:f}=Object.assign({path:[]},a.data),h=(a.data.argumentList||[]).map(y);let p;try{const t=f.slice(0,-1).reduce(((e,t)=>e[t]),e),i=f.reduce(((e,t)=>e[t]),e);switch(d){case"GET":p=i;break;case"SET":t[f.slice(-1)[0]]=y(a.data.value),p=!0;break;case"APPLY":p=i.apply(t,h);break;case"CONSTRUCT":p=function(e){return Object.assign(e,{[n]:!0})}(new i(...h));break;case"ENDPOINT":{const{port1:t,port2:i}=new MessageChannel;c(e,i),p=function(e,t){return x.set(e,t),e}(t,[t])}break;case"RELEASE":p=void 0;break;default:return}}catch(m){p={value:m,[l]:0}}Promise.resolve(p).catch((e=>({value:e,[l]:0}))).then((i=>{const[n,a]=k(i);t.postMessage(Object.assign(Object.assign({},n),{id:s}),a),"RELEASE"===d&&(t.removeEventListener("message",r),u(t),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[i,n]=k({value:new TypeError("Unserializable return value"),[l]:0});t.postMessage(Object.assign(Object.assign({},i),{id:s}),n)}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function f(e,t){const i=new Map;return e.addEventListener("message",(function(e){const{data:t}=e;if(!t||!t.id)return;const n=i.get(t.id);if(n)try{n(t)}finally{i.delete(t.id)}})),v(e,i,[],t)}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e){return w(e,new Map,{type:"RELEASE"}).then((()=>{u(e)}))}const m=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(m.get(e)||0)-1;m.set(e,t),0===t&&p(e)}));function v(e,t,i=[],n=function(){}){let o=!1;const l=new Proxy(n,{get(n,r){if(h(o),r===a)return()=>{!function(e){g&&g.unregister(e)}(l),p(e),t.clear(),o=!0};if("then"===r){if(0===i.length)return{then:()=>l};const n=w(e,t,{type:"GET",path:i.map((e=>e.toString()))}).then(y);return n.then.bind(n)}return v(e,t,[...i,r])},set(n,r,a){h(o);const[l,s]=k(a);return w(e,t,{type:"SET",path:[...i,r].map((e=>e.toString())),value:l},s).then(y)},apply(n,a,l){h(o);const s=i[i.length-1];if(s===r)return w(e,t,{type:"ENDPOINT"}).then(y);if("bind"===s)return v(e,t,i.slice(0,-1));const[d,c]=b(l);return w(e,t,{type:"APPLY",path:i.map((e=>e.toString())),argumentList:d},c).then(y)},construct(n,r){h(o);const[a,l]=b(r);return w(e,t,{type:"CONSTRUCT",path:i.map((e=>e.toString())),argumentList:a},l).then(y)}});return function(e,t){const i=(m.get(t)||0)+1;m.set(t,i),g&&g.register(e,t,e)}(l,e),l}function b(e){const t=e.map(k);return[t.map((e=>e[0])),(i=t.map((e=>e[1])),Array.prototype.concat.apply([],i))];var i}const x=new WeakMap;function k(e){for(const[t,i]of d)if(i.canHandle(e)){const[n,r]=i.serialize(e);return[{type:"HANDLER",name:t,value:n},r]}return[{type:"RAW",value:e},x.get(e)||[]]}function y(e){switch(e.type){case"HANDLER":return d.get(e.name).deserialize(e.value);case"RAW":return e.value}}function w(e,t,i,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.set(a,r),e.start&&e.start(),e.postMessage(Object.assign({id:a},i),n)}))}}}]);
//# sourceMappingURL=86002.1970d1eb006a2251.js.map