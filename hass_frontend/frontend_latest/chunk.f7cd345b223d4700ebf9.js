/*! For license information please see chunk.f7cd345b223d4700ebf9.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2996],{35854:(e,t,r)=>{"use strict";r.d(t,{G:()=>i,R:()=>c});r(43437);var a=r(21006),o=r(98235);const i={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},c=[a.V,o.x,i]},62132:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});r(43437);var a=r(35854),o=r(49075),i=r(84938);const c={_checkedChanged:function(){a.G._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){i.o._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},n=[o.B,a.R,c]},32296:(e,t,r)=>{"use strict";r(43437),r(1656);var a=r(62132),o=r(49075),i=r(9672),c=r(50856),n=r(87529);const s=c.d`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;s.setAttribute("strip-whitespace",""),(0,i.k)({_template:s,is:"paper-checkbox",behaviors:[a.K],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){(0,n.T8)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),t="px",r=e.match(/[A-Za-z]+$/);null!==r&&(t=r[0]);var a=parseFloat(e),o=8/3*a;"px"===t&&(o=Math.floor(o))%2!=a%2&&o++,this.updateStyles({"--paper-checkbox-ink-size":o+t})}}))},_computeCheckboxClass:function(e,t){var r="";return e&&(r+="checked "),t&&(r+="invalid"),r},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,o.S._createRipple.call(this)}})},22626:(e,t,r)=>{"use strict";r(43437),r(65660),r(1656);var a=r(51654),o=r(9672),i=r(50856);(0,o.k)({_template:i.d`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.Z)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},25782:(e,t,r)=>{"use strict";r(43437),r(65660),r(47686),r(97968);var a=r(9672),o=r(50856),i=r(33760);(0,a.k)({_template:o.d`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[i.U]})},91107:(e,t,r)=>{"use strict";r.d(t,{Ud:()=>h});const a=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),i=Symbol("Comlink.releaseProxy"),c=Symbol("Comlink.thrown"),n=e=>"object"==typeof e&&null!==e||"function"==typeof e,s=new Map([["proxy",{canHandle:e=>n(e)&&e[a],serialize(e){const{port1:t,port2:r}=new MessageChannel;return l(e,t),[r,[r]]},deserialize:e=>(e.start(),h(e))}],["throw",{canHandle:e=>n(e)&&c in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener("message",(function r(o){if(!o||!o.data)return;const{id:i,type:n,path:s}=Object.assign({path:[]},o.data),h=(o.data.argumentList||[]).map(g);let d;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),r=s.reduce(((e,t)=>e[t]),e);switch(n){case 0:d=r;break;case 1:t[s.slice(-1)[0]]=g(o.data.value),d=!0;break;case 2:d=r.apply(t,h);break;case 3:d=function(e){return Object.assign(e,{[a]:!0})}(new r(...h));break;case 4:{const{port1:t,port2:r}=new MessageChannel;l(e,r),d=function(e,t){return k.set(e,t),e}(t,[t])}break;case 5:d=void 0}}catch(u){d={value:u,[c]:0}}Promise.resolve(d).catch((e=>({value:e,[c]:0}))).then((e=>{const[a,o]=m(e);t.postMessage(Object.assign(Object.assign({},a),{id:i}),o),5===n&&(t.removeEventListener("message",r),p(t))}))})),t.start&&t.start()}function p(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){return u(e,[],t)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function u(e,t=[],r=function(){}){let a=!1;const c=new Proxy(r,{get(r,o){if(d(a),o===i)return()=>v(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{p(e),a=!0}));if("then"===o){if(0===t.length)return{then:()=>c};const r=v(e,{type:0,path:t.map((e=>e.toString()))}).then(g);return r.then.bind(r)}return u(e,[...t,o])},set(r,o,i){d(a);const[c,n]=m(i);return v(e,{type:1,path:[...t,o].map((e=>e.toString())),value:c},n).then(g)},apply(r,i,c){d(a);const n=t[t.length-1];if(n===o)return v(e,{type:4}).then(g);if("bind"===n)return u(e,t.slice(0,-1));const[s,l]=b(c);return v(e,{type:2,path:t.map((e=>e.toString())),argumentList:s},l).then(g)},construct(r,o){d(a);const[i,c]=b(o);return v(e,{type:3,path:t.map((e=>e.toString())),argumentList:i},c).then(g)}});return c}function b(e){const t=e.map(m);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const k=new WeakMap;function m(e){for(const[t,r]of s)if(r.canHandle(e)){const[a,o]=r.serialize(e);return[{type:3,name:t,value:a},o]}return[{type:0,value:e},k.get(e)||[]]}function g(e){switch(e.type){case 3:return s.get(e.name).deserialize(e.value);case 0:return e.value}}function v(e,t,r){return new Promise((a=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===o&&(e.removeEventListener("message",t),a(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),r)}))}},58993:(e,t,r)=>{"use strict";r.d(t,{yh:()=>a,U2:()=>c,t8:()=>n,ZH:()=>s});class a{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise(((r,a)=>{const o=indexedDB.open(e,1);o.onerror=()=>a(o.error),o.onsuccess=()=>r(o.result),o.onupgradeneeded=()=>{o.result.createObjectStore(t)}}))}_withIDBStore(e,t){return this._dbp.then((r=>new Promise(((a,o)=>{const i=r.transaction(this.storeName,e);i.oncomplete=()=>a(),i.onabort=i.onerror=()=>o(i.error),t(i.objectStore(this.storeName))}))))}}let o;function i(){return o||(o=new a),o}function c(e,t=i()){let r;return t._withIDBStore("readonly",(t=>{r=t.get(e)})).then((()=>r.result))}function n(e,t,r=i()){return r._withIDBStore("readwrite",(r=>{r.put(t,e)}))}function s(e=i()){return e._withIDBStore("readwrite",(e=>{e.clear()}))}}}]);
//# sourceMappingURL=chunk.f7cd345b223d4700ebf9.js.map