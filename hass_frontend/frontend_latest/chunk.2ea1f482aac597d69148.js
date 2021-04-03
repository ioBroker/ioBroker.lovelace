/*! For license information please see chunk.2ea1f482aac597d69148.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8825],{35854:(e,r,a)=>{"use strict";a.d(r,{G:()=>o,R:()=>i});a(65233);var t=a(21006),c=a(98235);const o={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},i=[t.V,c.x,o]},62132:(e,r,a)=>{"use strict";a.d(r,{K:()=>n});a(65233);var t=a(35854),c=a(49075),o=a(84938);const i={_checkedChanged:function(){t.G._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){o.o._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},n=[c.B,t.R,i]},32296:(e,r,a)=>{"use strict";a(65233),a(1656);var t=a(62132),c=a(49075),o=a(9672),i=a(50856),n=a(87529);const l=i.d`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),(0,o.k)({_template:l,is:"paper-checkbox",behaviors:[t.K],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){(0,n.T8)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),r="px",a=e.match(/[A-Za-z]+$/);null!==a&&(r=a[0]);var t=parseFloat(e),c=8/3*t;"px"===r&&(c=Math.floor(c))%2!=t%2&&c++,this.updateStyles({"--paper-checkbox-ink-size":c+r})}}))},_computeCheckboxClass:function(e,r){var a="";return e&&(a+="checked "),r&&(a+="invalid"),a},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,c.S._createRipple.call(this)}})},1275:(e,r,a)=>{"use strict";a.d(r,{l:()=>o});var t=a(94707);const c=new WeakMap,o=(0,t.XM)(((e,r)=>a=>{const t=c.get(a);if(Array.isArray(e)){if(Array.isArray(t)&&t.length===e.length&&e.every(((e,r)=>e===t[r])))return}else if(t===e&&(void 0!==e||c.has(a)))return;a.setValue(r()),c.set(a,Array.isArray(e)?Array.from(e):e)}))},83278:(e,r,a)=>{"use strict";a.d(r,{r:()=>h});var t=a(94707);const c=(e,r)=>{const a=e.startNode.parentNode,c=void 0===r?e.endNode:r.startNode,o=a.insertBefore((0,t.IW)(),c);a.insertBefore((0,t.IW)(),c);const i=new t.nt(e.options);return i.insertAfterNode(o),i},o=(e,r)=>(e.setValue(r),e.commit(),e),i=(e,r,a)=>{const c=e.startNode.parentNode,o=a?a.startNode:e.endNode,i=r.endNode.nextSibling;i!==o&&(0,t.V)(c,r.startNode,i,o)},n=e=>{(0,t.r4)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},l=(e,r,a)=>{const t=new Map;for(let c=r;c<=a;c++)t.set(e[c],c);return t},s=new WeakMap,d=new WeakMap,h=(0,t.XM)(((e,r,a)=>{let h;return void 0===a?a=r:void 0!==r&&(h=r),r=>{if(!(r instanceof t.nt))throw new Error("repeat can only be used in text bindings");const p=s.get(r)||[],k=d.get(r)||[],b=[],u=[],v=[];let x,m,g=0;for(const r of e)v[g]=h?h(r,g):g,u[g]=a(r,g),g++;let f=0,y=p.length-1,w=0,C=u.length-1;for(;f<=y&&w<=C;)if(null===p[f])f++;else if(null===p[y])y--;else if(k[f]===v[w])b[w]=o(p[f],u[w]),f++,w++;else if(k[y]===v[C])b[C]=o(p[y],u[C]),y--,C--;else if(k[f]===v[C])b[C]=o(p[f],u[C]),i(r,p[f],b[C+1]),f++,C--;else if(k[y]===v[w])b[w]=o(p[y],u[w]),i(r,p[y],p[f]),y--,w++;else if(void 0===x&&(x=l(v,w,C),m=l(k,f,y)),x.has(k[f]))if(x.has(k[y])){const e=m.get(v[w]),a=void 0!==e?p[e]:null;if(null===a){const e=c(r,p[f]);o(e,u[w]),b[w]=e}else b[w]=o(a,u[w]),i(r,a,p[f]),p[e]=null;w++}else n(p[y]),y--;else n(p[f]),f++;for(;w<=C;){const e=c(r,b[C+1]);o(e,u[w]),b[w++]=e}for(;f<=y;){const e=p[f++];null!==e&&n(e)}s.set(r,b),d.set(r,v)}}))}}]);
//# sourceMappingURL=chunk.2ea1f482aac597d69148.js.map