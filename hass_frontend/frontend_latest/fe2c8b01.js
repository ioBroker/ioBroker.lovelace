/*! For license information please see fe2c8b01.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[24007],{18601:(e,t,n)=>{n.d(t,{qN:()=>r.q,Wg:()=>f});var l,i,s=n(87480),o=n(33310),r=n(78220);const a=null!==(i=null===(l=window.ShadyDOM)||void 0===l?void 0:l.inUse)&&void 0!==i&&i;class f extends r.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||a)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}f.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.__decorate)([(0,o.Cb)({type:Boolean})],f.prototype,"disabled",void 0)},14114:(e,t,n)=>{n.d(t,{P:()=>l});const l=e=>(t,n)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,n)=>t.constructor._observers.set(n,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const n=this.constructor._observers.get(t);void 0!==n&&n.call(this,this[t],e)}))}}t.constructor._observers.set(n,e)}},21157:(e,t,n)=>{n(48175);const l=n(50856).d`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;l.setAttribute("style","display: none;"),document.head.appendChild(l.content)},21560:(e,t,n)=>{n.d(t,{ZH:()=>c,MT:()=>s,U2:()=>a,RV:()=>i,t8:()=>f});const l=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const n=()=>indexedDB.databases().finally(t);e=setInterval(n,100),n()})).finally((()=>clearInterval(e)))};function i(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function s(e,t){const n=l().then((()=>{const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),i(n)}));return(e,l)=>n.then((n=>l(n.transaction(t,e).objectStore(t))))}let o;function r(){return o||(o=s("keyval-store","keyval")),o}function a(e,t=r()){return t("readonly",(t=>i(t.get(e))))}function f(e,t,n=r()){return n("readwrite",(n=>(n.put(t,e),i(n.transaction))))}function c(e=r()){return e("readwrite",(e=>(e.clear(),i(e.transaction))))}},81563:(e,t,n)=>{n.d(t,{E_:()=>p,i9:()=>x,_Y:()=>f,pt:()=>s,OR:()=>r,hN:()=>o,ws:()=>m,fk:()=>c,hl:()=>u});var l=n(15304);const{H:i}=l.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,o=(e,t)=>{var n,l;return void 0===t?void 0!==(null===(n=e)||void 0===n?void 0:n._$litType$):(null===(l=e)||void 0===l?void 0:l._$litType$)===t},r=e=>void 0===e.strings,a=()=>document.createComment(""),f=(e,t,n)=>{var l;const s=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=s.insertBefore(a(),o),l=s.insertBefore(a(),o);n=new i(t,l,e,e.options)}else{const t=n._$AB.nextSibling,i=n._$AM,r=i!==e;if(r){let t;null===(l=n._$AQ)||void 0===l||l.call(n,e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==i._$AU&&n._$AP(t)}if(t!==o||r){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,o),e=t}}}return n},c=(e,t,n=e)=>(e._$AI(t,n),e),d={},u=(e,t=d)=>e._$AH=t,x=e=>e._$AH,m=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let n=e._$AA;const l=e._$AB.nextSibling;for(;n!==l;){const e=n.nextSibling;n.remove(),n=e}},p=e=>{e._$AR()}},57835:(e,t,n)=>{n.d(t,{Xe:()=>l.Xe,pX:()=>l.pX,XM:()=>l.XM});var l=n(38941)},86230:(e,t,n)=>{n.d(t,{r:()=>r});var l=n(15304),i=n(38941),s=n(81563);const o=(e,t,n)=>{const l=new Map;for(let i=t;i<=n;i++)l.set(e[i],i);return l},r=(0,i.XM)(class extends i.Xe{constructor(e){if(super(e),e.type!==i.pX.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let l;void 0===n?n=t:void 0!==t&&(l=t);const i=[],s=[];let o=0;for(const t of e)i[o]=l?l(t,o):o,s[o]=n(t,o),o++;return{values:s,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){var r;const a=(0,s.i9)(e),{values:f,keys:c}=this.dt(t,n,i);if(!Array.isArray(a))return this.at=c,f;const d=null!==(r=this.at)&&void 0!==r?r:this.at=[],u=[];let x,m,p=0,b=a.length-1,w=0,y=f.length-1;for(;p<=b&&w<=y;)if(null===a[p])p++;else if(null===a[b])b--;else if(d[p]===c[w])u[w]=(0,s.fk)(a[p],f[w]),p++,w++;else if(d[b]===c[y])u[y]=(0,s.fk)(a[b],f[y]),b--,y--;else if(d[p]===c[y])u[y]=(0,s.fk)(a[p],f[y]),(0,s._Y)(e,u[y+1],a[p]),p++,y--;else if(d[b]===c[w])u[w]=(0,s.fk)(a[b],f[w]),(0,s._Y)(e,a[p],a[b]),b--,w++;else if(void 0===x&&(x=o(c,w,y),m=o(d,p,b)),x.has(d[p]))if(x.has(d[b])){const t=m.get(c[w]),n=void 0!==t?a[t]:null;if(null===n){const t=(0,s._Y)(e,a[p]);(0,s.fk)(t,f[w]),u[w]=t}else u[w]=(0,s.fk)(n,f[w]),(0,s._Y)(e,a[p],n),a[t]=null;w++}else(0,s.ws)(a[b]),b--;else(0,s.ws)(a[p]),p++;for(;w<=y;){const t=(0,s._Y)(e,u[y+1]);(0,s.fk)(t,f[w]),u[w++]=t}for(;p<=b;){const e=a[p++];null!==e&&(0,s.ws)(e)}return this.at=c,(0,s.hl)(e,u),l.Jb}})}}]);
//# sourceMappingURL=fe2c8b01.js.map