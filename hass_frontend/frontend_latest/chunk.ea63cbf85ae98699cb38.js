/*! For license information please see chunk.ea63cbf85ae98699cb38.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9001,5422,7130],{99257:(e,t,r)=>{"use strict";r(43437);var n=r(15112),a=r(9672),i=r(87156);(0,a.k)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new n.P({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var r=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(r){var n=(0,i.vz)(e.root||e);return n.insertBefore(r,n.childNodes[0]),e._svgIcon=r}return null},removeIcon:function(e){e._svgIcon&&((0,i.vz)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return(0,i.vz)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,r){if(e){var n=e.cloneNode(!0),a=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=n.getAttribute("viewBox")||"0 0 "+t+" "+t,o="pointer-events: none; display: block; width: 100%; height: 100%;";return r&&n.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),a.setAttribute("viewBox",i),a.setAttribute("preserveAspectRatio","xMidYMid meet"),a.setAttribute("focusable","false"),a.style.cssText=o,a.appendChild(n).removeAttribute("id"),a}return null}})},25856:(e,t,r)=>{"use strict";r(43437),r(65660);var n=r(26110),a=r(98235),i=r(9672),o=r(87156),l=r(50856);(0,i.k)({_template:l.d`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" autocapitalize$="[[autocapitalize]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[a.x,n.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=a.x.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=(0,o.vz)(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});r(2178),r(98121),r(65911);var s=r(21006),c=r(66668);(0,i.k)({_template:l.d`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[c.d0,s.V],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}})},4268:(e,t,r)=>{"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e,t){return!0===e?[]:!1===e?[t.fail()]:e}r.d(t,{DD:()=>c,Yj:()=>f,IX:()=>y,hu:()=>u,O7:()=>b,Rx:()=>m,Ry:()=>g,jt:()=>_,Z_:()=>w,n_:()=>x,dt:()=>$,G0:()=>O});class s{constructor(e){const{type:t,schema:r,coercer:n=(e=>e),validator:a=(()=>[]),refiner:i=(()=>[])}=e;this.type=t,this.schema=r,this.coercer=n,this.validator=a,this.refiner=i}}class c extends TypeError{constructor(e,t){const{path:r,value:n,type:a,branch:i}=e,l=o(e,["path","value","type","branch"]);super(`Expected a value of type \`${a}\`${r.length?` for \`${r.join(".")}\``:""} but received \`${JSON.stringify(n)}\`.`),this.value=n,Object.assign(this,l),this.type=a,this.path=r,this.branch=i,this.failures=function*(){yield e,yield*t},this.stack=(new Error).stack,this.__proto__=c.prototype}}function u(e,t){const r=d(e,t);if(r[0])throw r[0]}function p(e,t){const r=t.coercer(e);return u(r,t),r}function d(e,t,r=!1){r&&(e=t.coercer(e));const n=h(e,t),[a]=n;if(a){return[new c(a,n),void 0]}return[void 0,e]}function*h(e,t,r=[],n=[]){const{type:a}=t,o={value:e,type:a,branch:n,path:r,fail:(t={})=>i({value:e,type:a,path:r,branch:[...n,e]},t),check:(e,t,a,i)=>h(e,t,void 0!==a?[...r,i]:r,void 0!==a?[...n,a]:n)},s=l(t.validator(e,o),o),[c]=s;c?(yield c,yield*s):yield*l(t.refiner(e,o),o)}function f(){return x("any",(()=>!0))}function y(e){return new s({type:`Array<${e?e.type:"unknown"}>`,schema:e,coercer:t=>e&&Array.isArray(t)?t.map((t=>p(t,e))):t,*validator(t,r){if(Array.isArray(t)){if(e)for(const[n,a]of t.entries())yield*r.check(a,e,t,n)}else yield r.fail()}})}function b(){return x("boolean",(e=>"boolean"==typeof e))}function v(){return x("never",(()=>!1))}function m(){return x("number",(e=>"number"==typeof e&&!isNaN(e)))}function g(e){const t=e?Object.keys(e):[],r=v();return new s({type:e?`Object<{${t.join(",")}}>`:"Object",schema:e||null,coercer:e?k(e):e=>e,*validator(n,a){if("object"==typeof n&&null!=n){if(e){const i=new Set(Object.keys(n));for(const r of t){i.delete(r);const t=e[r],o=n[r];yield*a.check(o,t,n,r)}for(const e of i){const t=n[e];yield*a.check(t,r,n,e)}}}else yield a.fail()}})}function _(e){return new s({type:e.type+"?",schema:e.schema,validator:(t,r)=>void 0===t||r.check(t,e)})}function w(){return x("string",(e=>"string"==typeof e))}function x(e,t){return new s({type:e,validator:t,schema:null})}function $(e){const t=Object.keys(e);return x(`Type<{${t.join(",")}}>`,(function*(r,n){if("object"==typeof r&&null!=r)for(const a of t){const t=e[a],i=r[a];yield*n.check(i,t,r,a)}else yield n.fail()}))}function O(e){return x(""+e.map((e=>e.type)).join(" | "),(function*(t,r){for(const n of e){const[...e]=r.check(t,n);if(0===e.length)return}yield r.fail()}))}function k(e){const t=Object.keys(e);return r=>{if("object"!=typeof r||null==r)return r;const n={},a=new Set(Object.keys(r));for(const i of t){a.delete(i);const t=e[i],o=r[i];n[i]=p(o,t)}for(const e of a)n[e]=r[e];return n}}}}]);
//# sourceMappingURL=chunk.ea63cbf85ae98699cb38.js.map