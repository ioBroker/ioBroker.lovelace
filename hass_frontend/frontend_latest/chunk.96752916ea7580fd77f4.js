/*! For license information please see chunk.96752916ea7580fd77f4.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9001,7130],{99257:(e,t,r)=>{"use strict";r(65233);var n=r(15112),i=r(9672),a=r(87156);(0,i.k)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new n.P({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var r=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(r){var n=(0,a.vz)(e.root||e);return n.insertBefore(r,n.childNodes[0]),e._svgIcon=r}return null},removeIcon:function(e){e._svgIcon&&((0,a.vz)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return(0,a.vz)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,r){if(e){var n=e.cloneNode(!0),i=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=n.getAttribute("viewBox")||"0 0 "+t+" "+t,o="pointer-events: none; display: block; width: 100%; height: 100%;";return r&&n.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),i.setAttribute("viewBox",a),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.setAttribute("focusable","false"),i.style.cssText=o,i.appendChild(n).removeAttribute("id"),i}return null}})},25856:(e,t,r)=>{"use strict";r(65233),r(65660);var n=r(26110),i=r(98235),a=r(9672),o=r(87156),l=r(50856);(0,a.k)({_template:l.d`
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
      <textarea id="textarea" name\$="[[name]]" aria-label\$="[[label]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" disabled\$="[[disabled]]" rows\$="[[rows]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[i.x,n.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=i.x.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=(0,o.vz)(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});r(2178),r(98121),r(65911);var s=r(21006),c=r(66668);(0,a.k)({_template:l.d`
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
`,is:"paper-textarea",behaviors:[c.d0,s.V],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}})},4268:(e,t,r)=>{"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function*l(e,t){!0===e||(!1===e?yield t.fail():yield*e)}function s(e){const{done:t,value:r}=e.next();return t?void 0:r}r.d(t,{DD:()=>u,Yj:()=>y,IX:()=>b,hu:()=>p,O7:()=>v,D8:()=>m,kE:()=>g,i0:()=>_,Rx:()=>x,Ry:()=>$,jt:()=>k,Z_:()=>O,n_:()=>j,dt:()=>S,G0:()=>E});class c{constructor(e){const{type:t,schema:r,coercer:n=(e=>e),validator:i=(()=>[]),refiner:a=(()=>[])}=e;this.type=t,this.schema=r,this.coercer=n,this.validator=i,this.refiner=a}}class u extends TypeError{constructor(e,t){const{path:r,value:n,type:i,branch:a}=e,l=o(e,["path","value","type","branch"]);let s;super(`Expected a value of type \`${i}\`${r.length?` for \`${r.join(".")}\``:""} but received \`${JSON.stringify(n)}\`.`),this.value=n,Object.assign(this,l),this.type=i,this.path=r,this.branch=a,this.failures=function(){return s||(s=[e,...t]),s},this.stack=(new Error).stack,this.__proto__=u.prototype}}function p(e,t){const r=h(e,t);if(r[0])throw r[0]}function d(e,t){const r=t.coercer(e);return p(r,t),r}function h(e,t,r=!1){r&&(e=t.coercer(e));const n=f(e,t),i=s(n);if(i){return[new u(i,n),void 0]}return[void 0,e]}function*f(e,t,r=[],n=[]){const{type:i}=t,o={value:e,type:i,branch:n,path:r,fail:(t={})=>a({value:e,type:i,path:r,branch:[...n,e]},t),check:(e,t,i,a)=>f(e,t,void 0!==i?[...r,a]:r,void 0!==i?[...n,i]:n)},c=l(t.validator(e,o),o),u=s(c);u?(yield u,yield*c):yield*l(t.refiner(e,o),o)}function y(){return j("any",(()=>!0))}function b(e){return new c({type:`Array<${e?e.type:"unknown"}>`,schema:e,coercer:t=>e&&Array.isArray(t)?t.map((t=>d(t,e))):t,*validator(t,r){if(Array.isArray(t)){if(e)for(const[n,i]of t.entries())yield*r.check(i,e,t,n)}else yield r.fail()}})}function v(){return j("boolean",(e=>"boolean"==typeof e))}function m(e){return j("Dynamic<...>",((t,r)=>r.check(t,e(t,r))))}function g(e){return j(`Enum<${e.map(I)}>`,(t=>e.includes(t)))}function _(e){return j(`Literal<${I(e)}>`,(t=>t===e))}function w(){return j("never",(()=>!1))}function x(){return j("number",(e=>"number"==typeof e&&!isNaN(e)))}function $(e){const t=e?Object.keys(e):[],r=w();return new c({type:e?`Object<{${t.join(",")}}>`:"Object",schema:e||null,coercer:e?C(e):e=>e,*validator(n,i){if("object"==typeof n&&null!=n){if(e){const a=new Set(Object.keys(n));for(const r of t){a.delete(r);const t=e[r],o=n[r];yield*i.check(o,t,n,r)}for(const e of a){const t=n[e];yield*i.check(t,r,n,e)}}}else yield i.fail()}})}function k(e){return new c({type:`${e.type}?`,schema:e.schema,validator:(t,r)=>void 0===t||r.check(t,e)})}function O(){return j("string",(e=>"string"==typeof e))}function j(e,t){return new c({type:e,validator:t,schema:null})}function S(e){const t=Object.keys(e);return j(`Type<{${t.join(",")}}>`,(function*(r,n){if("object"==typeof r&&null!=r)for(const i of t){const t=e[i],a=r[i];yield*n.check(a,t,r,i)}else yield n.fail()}))}function E(e){return j(`${e.map((e=>e.type)).join(" | ")}`,(function*(t,r){for(const n of e){const[...e]=r.check(t,n);if(0===e.length)return}yield r.fail()}))}function I(e){return"string"==typeof e?`"${e.replace(/"/g,'"')}"`:`${e}`}function C(e){const t=Object.keys(e);return r=>{if("object"!=typeof r||null==r)return r;const n={},i=new Set(Object.keys(r));for(const a of t){i.delete(a);const t=e[a],o=r[a];n[a]=d(o,t)}for(const e of i)n[e]=r[e];return n}}}}]);
//# sourceMappingURL=chunk.96752916ea7580fd77f4.js.map