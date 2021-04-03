/*! For license information please see chunk.8aed44fd4cd2233261c0.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9692,3098,1139],{18601:(t,e,i)=>{"use strict";i.d(e,{qN:()=>n.q,Wg:()=>o});var n=i(78220);class o extends n.H{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",(t=>{this.dispatchEvent(new Event("change",t))}))}}},14114:(t,e,i)=>{"use strict";i.d(e,{P:()=>n});const n=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,i)=>e.constructor._observers.set(i,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)}))}}e.constructor._observers.set(i,t)}},43453:(t,e,i)=>{"use strict";i.d(e,{Y:()=>r});i(65233);var n=/\.splices$/,o=/\.length$/,a=/\.?#?([0-9]+)$/;const r={properties:{data:{type:Object,notify:!0,value:function(){return this.zeroValue}},sequentialTransactions:{type:Boolean,value:!1},log:{type:Boolean,value:!1}},observers:["__dataChanged(data.*)"],created:function(){this.__initialized=!1,this.__syncingToMemory=!1,this.__initializingStoredValue=null,this.__transactionQueueAdvances=Promise.resolve()},ready:function(){this._initializeStoredValue()},get isNew(){return!0},get transactionsComplete(){return this.__transactionQueueAdvances},get zeroValue(){},saveValue:function(t){return Promise.resolve()},reset:function(){},destroy:function(){return this.data=this.zeroValue,this.saveValue()},initializeStoredValue:function(){return this.isNew?Promise.resolve():this._getStoredValue("data").then(function(t){if(this._log("Got stored value!",t,this.data),null==t)return this._setStoredValue("data",this.data||this.zeroValue);this.syncToMemory((function(){this.set("data",t)}))}.bind(this))},getStoredValue:function(t){return Promise.resolve()},setStoredValue:function(t,e){return Promise.resolve(e)},memoryPathToStoragePath:function(t){return t},storagePathToMemoryPath:function(t){return t},syncToMemory:function(t){this.__syncingToMemory||(this._group("Sync to memory."),this.__syncingToMemory=!0,t.call(this),this.__syncingToMemory=!1,this._groupEnd("Sync to memory."))},valueIsEmpty:function(t){return Array.isArray(t)?0===t.length:Object.prototype.isPrototypeOf(t)?0===Object.keys(t).length:null==t},_getStoredValue:function(t){return this.getStoredValue(this.memoryPathToStoragePath(t))},_setStoredValue:function(t,e){return this.setStoredValue(this.memoryPathToStoragePath(t),e)},_enqueueTransaction:function(t){if(this.sequentialTransactions)t=t.bind(this);else{var e=t.call(this);t=function(){return e}}return this.__transactionQueueAdvances=this.__transactionQueueAdvances.then(t).catch(function(t){this._error("Error performing queued transaction.",t)}.bind(this))},_log:function(...t){this.log&&console.log.apply(console,t)},_error:function(...t){this.log&&console.error.apply(console,t)},_group:function(...t){this.log&&console.group.apply(console,t)},_groupEnd:function(...t){this.log&&console.groupEnd.apply(console,t)},_initializeStoredValue:function(){if(!this.__initializingStoredValue){this._group("Initializing stored value.");var t=this.__initializingStoredValue=this.initializeStoredValue().then(function(){this.__initialized=!0,this.__initializingStoredValue=null,this._groupEnd("Initializing stored value.")}.bind(this)).catch(function(t){this.__initializingStoredValue=null,this._groupEnd("Initializing stored value.")}.bind(this));return this._enqueueTransaction((function(){return t}))}},__dataChanged:function(t){if(!this.isNew&&!this.__syncingToMemory&&this.__initialized&&!this.__pathCanBeIgnored(t.path)){var e=this.__normalizeMemoryPath(t.path),i=t.value,n=i&&i.indexSplices;this._enqueueTransaction((function(){return this._log("Setting",e+":",n||i),n&&this.__pathIsSplices(e)&&(e=this.__parentPath(e),i=this.get(e)),this._setStoredValue(e,i)}))}},__normalizeMemoryPath:function(t){for(var e=t.split("."),i=[],n=[],o=[],a=0;a<e.length;++a)n.push(e[a]),/^#/.test(e[a])?o.push(this.get(i).indexOf(this.get(n))):o.push(e[a]),i.push(e[a]);return o.join(".")},__parentPath:function(t){var e=t.split(".");return e.slice(0,e.length-1).join(".")},__pathCanBeIgnored:function(t){return o.test(t)&&Array.isArray(this.get(this.__parentPath(t)))},__pathIsSplices:function(t){return n.test(t)&&Array.isArray(this.get(this.__parentPath(t)))},__pathRefersToArray:function(t){return(n.test(t)||o.test(t))&&Array.isArray(this.get(this.__parentPath(t)))},__pathTailToIndex:function(t){var e=t.split(".").pop();return window.parseInt(e.replace(a,"$1"),10)}}},8878:(t,e,i)=>{"use strict";i(65233),i(8621),i(63207),i(30879),i(78814),i(60748),i(1656),i(57548),i(73962);var n=i(51644),o=i(26110),a=i(21006),r=i(98235),s=i(9672),l=i(87156),p=i(81668),c=i(50856);(0,s.k)({_template:c.d`
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
`,is:"paper-dropdown-menu",behaviors:[n.P,o.a,a.V,r.x],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=(0,l.vz)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){p.nJ(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}})},25782:(t,e,i)=>{"use strict";i(65233),i(65660),i(47686),i(97968);var n=i(9672),o=i(50856),a=i(33760);(0,n.k)({_template:o.d`
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
`,is:"paper-icon-item",behaviors:[a.U]})},33760:(t,e,i)=>{"use strict";i.d(e,{U:()=>a});i(65233);var n=i(51644),o=i(26110);const a=[n.P,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},89194:(t,e,i)=>{"use strict";i(65233),i(65660),i(1656),i(47686);var n=i(9672),o=i(50856);(0,n.k)({_template:o.d`
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
`,is:"paper-item-body"})},97968:(t,e,i)=>{"use strict";i(65660),i(15495),i(1656),i(47686);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(n.content)},53973:(t,e,i)=>{"use strict";i(65233),i(65660),i(97968);var n=i(9672),o=i(50856),a=i(33760);(0,n.k)({_template:o.d`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[a.U]})},51095:(t,e,i)=>{"use strict";i(65233),i(1656);var n=i(78161),o=i(9672),a=i(50856);(0,o.k)({_template:a.d`
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
`,is:"paper-listbox",behaviors:[n.i],hostAttributes:{role:"listbox"}})},54444:(t,e,i)=>{"use strict";i(65233);var n=i(9672),o=i(87156),a=i(50856);(0,n.k)({_template:a.d`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=(0,o.vz)(this).parentNode,e=(0,o.vz)(this).getOwnerRoot();return this.for?(0,o.vz)(e).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===(0,o.vz)(this).textContent.trim()){for(var t=!0,e=(0,o.vz)(this).getEffectiveChildNodes(),i=0;i<e.length;i++)if(""!==e[i].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var e,i,n=this.offsetParent.getBoundingClientRect(),o=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),r=(o.width-a.width)/2,s=(o.height-a.height)/2,l=o.left-n.left,p=o.top-n.top;switch(this.position){case"top":e=l+r,i=p-a.height-t;break;case"bottom":e=l+r,i=p+o.height+t;break;case"left":e=l-a.width-t,i=p+s;break;case"right":e=l+o.width+t,i=p+s}this.fitToVisibleBounds?(n.left+e+a.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,e)+"px",this.style.right="auto"),n.top+i+a.height>window.innerHeight?(this.style.bottom=n.height-p+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,i)+"px",this.style.bottom="auto")):(this.style.left=e+"px",this.style.top=i+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var e=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":e+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":e+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},4268:(t,e,i)=>{"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function*s(t,e){!0===t||(!1===t?yield e.fail():yield*t)}function l(t){const{done:e,value:i}=t.next();return e?void 0:i}i.d(e,{DD:()=>c,Yj:()=>y,IX:()=>f,hu:()=>u,O7:()=>g,D8:()=>v,kE:()=>_,i0:()=>b,Rx:()=>k,Ry:()=>x,jt:()=>O,Z_:()=>S,n_:()=>A,dt:()=>E,G0:()=>T});class p{constructor(t){const{type:e,schema:i,coercer:n=(t=>t),validator:o=(()=>[]),refiner:a=(()=>[])}=t;this.type=e,this.schema=i,this.coercer=n,this.validator=o,this.refiner=a}}class c extends TypeError{constructor(t,e){const{path:i,value:n,type:o,branch:a}=t,s=r(t,["path","value","type","branch"]);let l;super(`Expected a value of type \`${o}\`${i.length?` for \`${i.join(".")}\``:""} but received \`${JSON.stringify(n)}\`.`),this.value=n,Object.assign(this,s),this.type=o,this.path=i,this.branch=a,this.failures=function(){return l||(l=[t,...e]),l},this.stack=(new Error).stack,this.__proto__=c.prototype}}function u(t,e){const i=d(t,e);if(i[0])throw i[0]}function h(t,e){const i=e.coercer(t);return u(i,e),i}function d(t,e,i=!1){i&&(t=e.coercer(t));const n=m(t,e),o=l(n);if(o){return[new c(o,n),void 0]}return[void 0,t]}function*m(t,e,i=[],n=[]){const{type:o}=e,r={value:t,type:o,branch:n,path:i,fail:(e={})=>a({value:t,type:o,path:i,branch:[...n,t]},e),check:(t,e,o,a)=>m(t,e,void 0!==o?[...i,a]:i,void 0!==o?[...n,o]:n)},p=s(e.validator(t,r),r),c=l(p);c?(yield c,yield*p):yield*s(e.refiner(t,r),r)}function y(){return A("any",(()=>!0))}function f(t){return new p({type:`Array<${t?t.type:"unknown"}>`,schema:t,coercer:e=>t&&Array.isArray(e)?e.map((e=>h(e,t))):e,*validator(e,i){if(Array.isArray(e)){if(t)for(const[n,o]of e.entries())yield*i.check(o,t,e,n)}else yield i.fail()}})}function g(){return A("boolean",(t=>"boolean"==typeof t))}function v(t){return A("Dynamic<...>",((e,i)=>i.check(e,t(e,i))))}function _(t){return A(`Enum<${t.map(P)}>`,(e=>t.includes(e)))}function b(t){return A(`Literal<${P(t)}>`,(e=>e===t))}function w(){return A("never",(()=>!1))}function k(){return A("number",(t=>"number"==typeof t&&!isNaN(t)))}function x(t){const e=t?Object.keys(t):[],i=w();return new p({type:t?`Object<{${e.join(",")}}>`:"Object",schema:t||null,coercer:t?j(t):t=>t,*validator(n,o){if("object"==typeof n&&null!=n){if(t){const a=new Set(Object.keys(n));for(const i of e){a.delete(i);const e=t[i],r=n[i];yield*o.check(r,e,n,i)}for(const t of a){const e=n[t];yield*o.check(e,i,n,t)}}}else yield o.fail()}})}function O(t){return new p({type:`${t.type}?`,schema:t.schema,validator:(e,i)=>void 0===e||i.check(e,t)})}function S(){return A("string",(t=>"string"==typeof t))}function A(t,e){return new p({type:t,validator:e,schema:null})}function E(t){const e=Object.keys(t);return A(`Type<{${e.join(",")}}>`,(function*(i,n){if("object"==typeof i&&null!=i)for(const o of e){const e=t[o],a=i[o];yield*n.check(a,e,i,o)}else yield n.fail()}))}function T(t){return A(`${t.map((t=>t.type)).join(" | ")}`,(function*(e,i){for(const n of t){const[...t]=i.check(e,n);if(0===t.length)return}yield i.fail()}))}function P(t){return"string"==typeof t?`"${t.replace(/"/g,'"')}"`:`${t}`}function j(t){const e=Object.keys(t);return i=>{if("object"!=typeof i||null==i)return i;const n={},o=new Set(Object.keys(i));for(const a of e){o.delete(a);const e=t[a],r=i[a];n[a]=h(r,e)}for(const t of o)n[t]=i[t];return n}}}}]);
//# sourceMappingURL=chunk.8aed44fd4cd2233261c0.js.map