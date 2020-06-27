/*! For license information please see chunk.885751008c98e5130661.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[196],{161:function(e,a,r){"use strict";r.d(a,"a",(function(){return d}));r(4);var t=r(65),c=r(66);const o={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},i=[t.a,c.a,o];var n=r(98),l=r(122);const s={_checkedChanged:function(){o._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[n.a,i,s]},162:function(e,a,r){"use strict";r(4),r(51);var t=r(161),c=r(98),o=r(5),i=r(3),n=r(77);const l=i.a`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),Object(o.a)({_template:l,is:"paper-checkbox",behaviors:[t.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(n.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),a="px",r=e.match(/[A-Za-z]+$/);null!==r&&(a=r[0]);var t=parseFloat(e),c=8/3*t;"px"===a&&(c=Math.floor(c))%2!=t%2&&c++,this.updateStyles({"--paper-checkbox-ink-size":c+a})}}))},_computeCheckboxClass:function(e,a){var r="";return e&&(r+="checked "),a&&(r+="invalid"),r},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,c.b._createRipple.call(this)}})},847:function(e,a,r){"use strict";r.d(a,"a",(function(){return h}));var t=r(9);const c=(e,a)=>{const r=e.startNode.parentNode,c=void 0===a?e.endNode:a.startNode,o=r.insertBefore(Object(t.e)(),c);r.insertBefore(Object(t.e)(),c);const i=new t.b(e.options);return i.insertAfterNode(o),i},o=(e,a)=>(e.setValue(a),e.commit(),e),i=(e,a,r)=>{const c=e.startNode.parentNode,o=r?r.startNode:e.endNode,i=a.endNode.nextSibling;i!==o&&Object(t.j)(c,a.startNode,i,o)},n=e=>{Object(t.i)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},l=(e,a,r)=>{const t=new Map;for(let c=a;c<=r;c++)t.set(e[c],c);return t},s=new WeakMap,d=new WeakMap,h=Object(t.f)((e,a,r)=>{let h;return void 0===r?r=a:void 0!==a&&(h=a),a=>{if(!(a instanceof t.b))throw new Error("repeat can only be used in text bindings");const p=s.get(a)||[],b=d.get(a)||[],k=[],u=[],v=[];let x,m,f=0;for(const t of e)v[f]=h?h(t,f):f,u[f]=r(t,f),f++;let g=0,y=p.length-1,w=0,C=u.length-1;for(;g<=y&&w<=C;)if(null===p[g])g++;else if(null===p[y])y--;else if(b[g]===v[w])k[w]=o(p[g],u[w]),g++,w++;else if(b[y]===v[C])k[C]=o(p[y],u[C]),y--,C--;else if(b[g]===v[C])k[C]=o(p[g],u[C]),i(a,p[g],k[C+1]),g++,C--;else if(b[y]===v[w])k[w]=o(p[y],u[w]),i(a,p[y],p[g]),y--,w++;else if(void 0===x&&(x=l(v,w,C),m=l(b,g,y)),x.has(b[g]))if(x.has(b[y])){const e=m.get(v[w]),r=void 0!==e?p[e]:null;if(null===r){const e=c(a,p[g]);o(e,u[w]),k[w]=e}else k[w]=o(r,u[w]),i(a,r,p[g]),p[e]=null;w++}else n(p[y]),y--;else n(p[g]),g++;for(;w<=C;){const e=c(a,k[C+1]);o(e,u[w]),k[w++]=e}for(;g<=y;){const e=p[g++];null!==e&&n(e)}s.set(a,k),d.set(a,v)}})}}]);
//# sourceMappingURL=chunk.885751008c98e5130661.js.map