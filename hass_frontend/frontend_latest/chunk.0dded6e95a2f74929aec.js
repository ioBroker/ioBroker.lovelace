/*! For license information please see chunk.0dded6e95a2f74929aec.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2481,8352,1223,7130],{39841:(e,t,n)=>{"use strict";n(65233),n(65660);var o=n(9672),i=n(87156),r=n(50856),s=n(44181);(0,o.k)({_template:r.d`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[s.Y],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return(0,i.vz)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),n=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=n+"px"}.bind(this));var n=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(n.marginTop=t+"px",n.paddingTop=""):(n.paddingTop=t+"px",n.marginTop="")}}})},99257:(e,t,n)=>{"use strict";n(65233);var o=n(15112),i=n(9672),r=n(87156);(0,i.k)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new o.P({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var n=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(n){var o=(0,r.vz)(e.root||e);return o.insertBefore(n,o.childNodes[0]),e._svgIcon=n}return null},removeIcon:function(e){e._svgIcon&&((0,r.vz)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return(0,r.vz)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,n){if(e){var o=e.cloneNode(!0),i=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=o.getAttribute("viewBox")||"0 0 "+t+" "+t,s="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&o.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),i.setAttribute("viewBox",r),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.setAttribute("focusable","false"),i.style.cssText=s,i.appendChild(o).removeAttribute("id"),i}return null}})},85753:(e,t,n)=>{"use strict";n.d(t,{I:()=>i,E:()=>r});n(65233);var o=n(78161);const i={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(e){this._isRTL?this._focusNext():this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onRightKey:function(e){this._isRTL?this._focusPrevious():this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down left right esc")||this._focusWithKeyboardEvent(e)}},r=[o.i,i]},8878:(e,t,n)=>{"use strict";n(65233),n(8621),n(63207),n(30879),n(78814),n(60748),n(1656),n(57548),n(73962);var o=n(51644),i=n(26110),r=n(21006),s=n(98235),a=n(9672),l=n(87156),c=n(81668),u=n(50856);(0,a.k)({_template:u.d`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[o.P,i.a,r.V,s.x],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=(0,l.vz)(this.$.content).getDistributedNodes(),t=0,n=e.length;t<n;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){c.nJ(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},25782:(e,t,n)=>{"use strict";n(65233),n(65660),n(47686),n(97968);var o=n(9672),i=n(50856),r=n(33760);(0,o.k)({_template:i.d`
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
`,is:"paper-icon-item",behaviors:[r.U]})},51095:(e,t,n)=>{"use strict";n(65233),n(1656);var o=n(78161),i=n(9672),r=n(50856);(0,i.k)({_template:r.d`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[o.i],hostAttributes:{role:"listbox"}})},4268:(e,t,n)=>{"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function*a(e,t){!0===e||(!1===e?yield t.fail():yield*e)}function l(e){const{done:t,value:n}=e.next();return t?void 0:n}n.d(t,{DD:()=>u,Yj:()=>y,IX:()=>v,hu:()=>p,O7:()=>b,D8:()=>g,kE:()=>m,i0:()=>_,Rx:()=>k,Ry:()=>O,jt:()=>x,Z_:()=>I,n_:()=>S,dt:()=>j,G0:()=>A});class c{constructor(e){const{type:t,schema:n,coercer:o=(e=>e),validator:i=(()=>[]),refiner:r=(()=>[])}=e;this.type=t,this.schema=n,this.coercer=o,this.validator=i,this.refiner=r}}class u extends TypeError{constructor(e,t){const{path:n,value:o,type:i,branch:r}=e,a=s(e,["path","value","type","branch"]);let l;super(`Expected a value of type \`${i}\`${n.length?` for \`${n.join(".")}\``:""} but received \`${JSON.stringify(o)}\`.`),this.value=o,Object.assign(this,a),this.type=i,this.path=n,this.branch=r,this.failures=function(){return l||(l=[e,...t]),l},this.stack=(new Error).stack,this.__proto__=u.prototype}}function p(e,t){const n=h(e,t);if(n[0])throw n[0]}function d(e,t){const n=t.coercer(e);return p(n,t),n}function h(e,t,n=!1){n&&(e=t.coercer(e));const o=f(e,t),i=l(o);if(i){return[new u(i,o),void 0]}return[void 0,e]}function*f(e,t,n=[],o=[]){const{type:i}=t,s={value:e,type:i,branch:o,path:n,fail:(t={})=>r({value:e,type:i,path:n,branch:[...o,e]},t),check:(e,t,i,r)=>f(e,t,void 0!==i?[...n,r]:n,void 0!==i?[...o,i]:o)},c=a(t.validator(e,s),s),u=l(c);u?(yield u,yield*c):yield*a(t.refiner(e,s),s)}function y(){return S("any",(()=>!0))}function v(e){return new c({type:`Array<${e?e.type:"unknown"}>`,schema:e,coercer:t=>e&&Array.isArray(t)?t.map((t=>d(t,e))):t,*validator(t,n){if(Array.isArray(t)){if(e)for(const[o,i]of t.entries())yield*n.check(i,e,t,o)}else yield n.fail()}})}function b(){return S("boolean",(e=>"boolean"==typeof e))}function g(e){return S("Dynamic<...>",((t,n)=>n.check(t,e(t,n))))}function m(e){return S(`Enum<${e.map(E)}>`,(t=>e.includes(t)))}function _(e){return S(`Literal<${E(e)}>`,(t=>t===e))}function w(){return S("never",(()=>!1))}function k(){return S("number",(e=>"number"==typeof e&&!isNaN(e)))}function O(e){const t=e?Object.keys(e):[],n=w();return new c({type:e?`Object<{${t.join(",")}}>`:"Object",schema:e||null,coercer:e?C(e):e=>e,*validator(o,i){if("object"==typeof o&&null!=o){if(e){const r=new Set(Object.keys(o));for(const n of t){r.delete(n);const t=e[n],s=o[n];yield*i.check(s,t,o,n)}for(const e of r){const t=o[e];yield*i.check(t,n,o,e)}}}else yield i.fail()}})}function x(e){return new c({type:`${e.type}?`,schema:e.schema,validator:(t,n)=>void 0===t||n.check(t,e)})}function I(){return S("string",(e=>"string"==typeof e))}function S(e,t){return new c({type:e,validator:t,schema:null})}function j(e){const t=Object.keys(e);return S(`Type<{${t.join(",")}}>`,(function*(n,o){if("object"==typeof n&&null!=n)for(const i of t){const t=e[i],r=n[i];yield*o.check(r,t,n,i)}else yield o.fail()}))}function A(e){return S(`${e.map((e=>e.type)).join(" | ")}`,(function*(t,n){for(const o of e){const[...e]=n.check(t,o);if(0===e.length)return}yield n.fail()}))}function E(e){return"string"==typeof e?`"${e.replace(/"/g,'"')}"`:`${e}`}function C(e){const t=Object.keys(e);return n=>{if("object"!=typeof n||null==n)return n;const o={},i=new Set(Object.keys(n));for(const r of t){i.delete(r);const t=e[r],s=n[r];o[r]=d(s,t)}for(const e of i)o[e]=n[e];return o}}}}]);
//# sourceMappingURL=chunk.0dded6e95a2f74929aec.js.map