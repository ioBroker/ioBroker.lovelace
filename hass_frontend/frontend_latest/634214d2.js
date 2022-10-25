/*! For license information please see 634214d2.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[17109],{18601:(e,t,i)=>{i.d(t,{qN:()=>s.q,Wg:()=>d});var a,n,r=i(87480),o=i(33310),s=i(78220);const l=null!==(n=null===(a=window.ShadyDOM)||void 0===a?void 0:a.inUse)&&void 0!==n&&n;class d extends s.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||l)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}d.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,r.__decorate)([(0,o.Cb)({type:Boolean})],d.prototype,"disabled",void 0)},14114:(e,t,i)=>{i.d(t,{P:()=>a});const a=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)}},63207:(e,t,i)=>{i(65660),i(15112);var a=i(9672),n=i(87156),r=i(50856),o=i(48175);(0,a.k)({_template:r.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:o.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,n.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,n.vz)(this.root).appendChild(this._img))}})},25856:(e,t,i)=>{i(48175),i(65660);var a=i(26110),n=i(98235),r=i(9672),o=i(87156),s=i(50856);(0,r.k)({_template:s.d`
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
`,is:"iron-autogrow-textarea",behaviors:[n.x,a.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=n.x.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=(0,o.vz)(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});i(2178),i(98121),i(65911);var l=i(21006),d=i(66668);(0,r.k)({_template:s.d`
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
`,is:"paper-textarea",behaviors:[d.d0,l.V],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}})},21560:(e,t,i)=>{i.d(t,{ZH:()=>c,MT:()=>r,U2:()=>l,RV:()=>n,t8:()=>d});const a=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const i=()=>indexedDB.databases().finally(t);e=setInterval(i,100),i()})).finally((()=>clearInterval(e)))};function n(e){return new Promise(((t,i)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>i(e.error)}))}function r(e,t){const i=a().then((()=>{const i=indexedDB.open(e);return i.onupgradeneeded=()=>i.result.createObjectStore(t),n(i)}));return(e,a)=>i.then((i=>a(i.transaction(t,e).objectStore(t))))}let o;function s(){return o||(o=r("keyval-store","keyval")),o}function l(e,t=s()){return t("readonly",(t=>n(t.get(e))))}function d(e,t,i=s()){return i("readwrite",(i=>(i.put(t,e),n(i.transaction))))}function c(e=s()){return e("readwrite",(e=>(e.clear(),n(e.transaction))))}},19596:(e,t,i)=>{i.d(t,{s:()=>h});var a=i(81563),n=i(38941);const r=(e,t)=>{var i,a;const n=e._$AN;if(void 0===n)return!1;for(const e of n)null===(a=(i=e)._$AO)||void 0===a||a.call(i,t,!1),r(e,t);return!0},o=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},s=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),c(t)}};function l(e){void 0!==this._$AN?(o(this),this._$AM=e,s(this)):this._$AM=e}function d(e,t=!1,i=0){const a=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(a))for(let e=i;e<a.length;e++)r(a[e],!1),o(a[e]);else null!=a&&(r(a,!1),o(a));else r(this,e)}const c=e=>{var t,i,a,r;e.type==n.pX.CHILD&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=d),null!==(i=(r=e)._$AQ)&&void 0!==i||(r._$AQ=l))};class h extends n.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),s(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,a;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),t&&(r(this,e),o(this))}setValue(e){if((0,a.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},81563:(e,t,i)=>{i.d(t,{E_:()=>m,i9:()=>p,_Y:()=>d,pt:()=>r,OR:()=>s,hN:()=>o,ws:()=>v,fk:()=>c,hl:()=>u});var a=i(15304);const{H:n}=a.Al,r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,o=(e,t)=>{var i,a;return void 0===t?void 0!==(null===(i=e)||void 0===i?void 0:i._$litType$):(null===(a=e)||void 0===a?void 0:a._$litType$)===t},s=e=>void 0===e.strings,l=()=>document.createComment(""),d=(e,t,i)=>{var a;const r=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=r.insertBefore(l(),o),a=r.insertBefore(l(),o);i=new n(t,a,e,e.options)}else{const t=i._$AB.nextSibling,n=i._$AM,s=n!==e;if(s){let t;null===(a=i._$AQ)||void 0===a||a.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==n._$AU&&i._$AP(t)}if(t!==o||s){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;r.insertBefore(e,o),e=t}}}return i},c=(e,t,i=e)=>(e._$AI(t,i),e),h={},u=(e,t=h)=>e._$AH=t,p=e=>e._$AH,v=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const a=e._$AB.nextSibling;for(;i!==a;){const e=i.nextSibling;i.remove(),i=e}},m=e=>{e._$AR()}},57835:(e,t,i)=>{i.d(t,{Xe:()=>a.Xe,pX:()=>a.pX,XM:()=>a.XM});var a=i(38941)}}]);
//# sourceMappingURL=634214d2.js.map