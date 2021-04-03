/*! For license information please see chunk.7a518e41ba7d7f216f14.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4507],{67810:(t,e,r)=>{"use strict";r.d(e,{o:()=>n});r(65233);var o=r(87156);const n={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var r=this.domHost;this.scrollTarget=r&&r.$?r.$[t]:(0,o.vz)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var r;"object"==typeof t?(r=t.left,e=t.top):r=t,r=r||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(r,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=r,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var r=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),r.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(r.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}}},25782:(t,e,r)=>{"use strict";r(65233),r(65660),r(47686),r(97968);var o=r(9672),n=r(50856),l=r(33760);(0,o.k)({_template:n.d`
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
`,is:"paper-icon-item",behaviors:[l.U]})},89194:(t,e,r)=>{"use strict";r(65233),r(65660),r(1656),r(47686);var o=r(9672),n=r(50856);(0,o.k)({_template:n.d`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},4268:(t,e,r)=>{"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function*s(t,e){!0===t||(!1===t?yield e.fail():yield*t)}function c(t){const{done:e,value:r}=t.next();return e?void 0:r}r.d(e,{DD:()=>h,Yj:()=>y,IX:()=>g,hu:()=>u,O7:()=>b,D8:()=>_,kE:()=>v,i0:()=>w,Rx:()=>m,Ry:()=>O,jt:()=>j,Z_:()=>S,n_:()=>k,dt:()=>L,G0:()=>H});class a{constructor(t){const{type:e,schema:r,coercer:o=(t=>t),validator:n=(()=>[]),refiner:l=(()=>[])}=t;this.type=e,this.schema=r,this.coercer=o,this.validator=n,this.refiner=l}}class h extends TypeError{constructor(t,e){const{path:r,value:o,type:n,branch:l}=t,s=i(t,["path","value","type","branch"]);let c;super(`Expected a value of type \`${n}\`${r.length?` for \`${r.join(".")}\``:""} but received \`${JSON.stringify(o)}\`.`),this.value=o,Object.assign(this,s),this.type=n,this.path=r,this.branch=l,this.failures=function(){return c||(c=[t,...e]),c},this.stack=(new Error).stack,this.__proto__=h.prototype}}function u(t,e){const r=p(t,e);if(r[0])throw r[0]}function f(t,e){const r=e.coercer(t);return u(r,e),r}function p(t,e,r=!1){r&&(t=e.coercer(t));const o=d(t,e),n=c(o);if(n){return[new h(n,o),void 0]}return[void 0,t]}function*d(t,e,r=[],o=[]){const{type:n}=e,i={value:t,type:n,branch:o,path:r,fail:(e={})=>l({value:t,type:n,path:r,branch:[...o,t]},e),check:(t,e,n,l)=>d(t,e,void 0!==n?[...r,l]:r,void 0!==n?[...o,n]:o)},a=s(e.validator(t,i),i),h=c(a);h?(yield h,yield*a):yield*s(e.refiner(t,i),i)}function y(){return k("any",(()=>!0))}function g(t){return new a({type:`Array<${t?t.type:"unknown"}>`,schema:t,coercer:e=>t&&Array.isArray(e)?e.map((e=>f(e,t))):e,*validator(e,r){if(Array.isArray(e)){if(t)for(const[o,n]of e.entries())yield*r.check(n,t,e,o)}else yield r.fail()}})}function b(){return k("boolean",(t=>"boolean"==typeof t))}function _(t){return k("Dynamic<...>",((e,r)=>r.check(e,t(e,r))))}function v(t){return k(`Enum<${t.map($)}>`,(e=>t.includes(e)))}function w(t){return k(`Literal<${$(t)}>`,(e=>e===t))}function T(){return k("never",(()=>!1))}function m(){return k("number",(t=>"number"==typeof t&&!isNaN(t)))}function O(t){const e=t?Object.keys(t):[],r=T();return new a({type:t?`Object<{${e.join(",")}}>`:"Object",schema:t||null,coercer:t?x(t):t=>t,*validator(o,n){if("object"==typeof o&&null!=o){if(t){const l=new Set(Object.keys(o));for(const r of e){l.delete(r);const e=t[r],i=o[r];yield*n.check(i,e,o,r)}for(const t of l){const e=o[t];yield*n.check(e,r,o,t)}}}else yield n.fail()}})}function j(t){return new a({type:`${t.type}?`,schema:t.schema,validator:(e,r)=>void 0===e||r.check(e,t)})}function S(){return k("string",(t=>"string"==typeof t))}function k(t,e){return new a({type:t,validator:e,schema:null})}function L(t){const e=Object.keys(t);return k(`Type<{${e.join(",")}}>`,(function*(r,o){if("object"==typeof r&&null!=r)for(const n of e){const e=t[n],l=r[n];yield*o.check(l,e,r,n)}else yield o.fail()}))}function H(t){return k(`${t.map((t=>t.type)).join(" | ")}`,(function*(e,r){for(const o of t){const[...t]=r.check(e,o);if(0===t.length)return}yield r.fail()}))}function $(t){return"string"==typeof t?`"${t.replace(/"/g,'"')}"`:`${t}`}function x(t){const e=Object.keys(t);return r=>{if("object"!=typeof r||null==r)return r;const o={},n=new Set(Object.keys(r));for(const l of e){n.delete(l);const e=t[l],i=r[l];o[l]=f(i,e)}for(const t of n)o[t]=r[t];return o}}}}]);
//# sourceMappingURL=chunk.7a518e41ba7d7f216f14.js.map