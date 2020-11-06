/*! For license information please see chunk.77104da68841c79f4ae0.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2002],{43453:(t,e,n)=>{"use strict";n.d(e,{Y:()=>r});n(43437);var i=/\.splices$/,o=/\.length$/,a=/\.?#?([0-9]+)$/;const r={properties:{data:{type:Object,notify:!0,value:function(){return this.zeroValue}},sequentialTransactions:{type:Boolean,value:!1},log:{type:Boolean,value:!1}},observers:["__dataChanged(data.*)"],created:function(){this.__initialized=!1,this.__syncingToMemory=!1,this.__initializingStoredValue=null,this.__transactionQueueAdvances=Promise.resolve()},ready:function(){this._initializeStoredValue()},get isNew(){return!0},get transactionsComplete(){return this.__transactionQueueAdvances},get zeroValue(){},saveValue:function(t){return Promise.resolve()},reset:function(){},destroy:function(){return this.data=this.zeroValue,this.saveValue()},initializeStoredValue:function(){return this.isNew?Promise.resolve():this._getStoredValue("data").then(function(t){if(this._log("Got stored value!",t,this.data),null==t)return this._setStoredValue("data",this.data||this.zeroValue);this.syncToMemory((function(){this.set("data",t)}))}.bind(this))},getStoredValue:function(t){return Promise.resolve()},setStoredValue:function(t,e){return Promise.resolve(e)},memoryPathToStoragePath:function(t){return t},storagePathToMemoryPath:function(t){return t},syncToMemory:function(t){this.__syncingToMemory||(this._group("Sync to memory."),this.__syncingToMemory=!0,t.call(this),this.__syncingToMemory=!1,this._groupEnd("Sync to memory."))},valueIsEmpty:function(t){return Array.isArray(t)?0===t.length:Object.prototype.isPrototypeOf(t)?0===Object.keys(t).length:null==t},_getStoredValue:function(t){return this.getStoredValue(this.memoryPathToStoragePath(t))},_setStoredValue:function(t,e){return this.setStoredValue(this.memoryPathToStoragePath(t),e)},_enqueueTransaction:function(t){if(this.sequentialTransactions)t=t.bind(this);else{var e=t.call(this);t=function(){return e}}return this.__transactionQueueAdvances=this.__transactionQueueAdvances.then(t).catch(function(t){this._error("Error performing queued transaction.",t)}.bind(this))},_log:function(...t){this.log&&console.log.apply(console,t)},_error:function(...t){this.log&&console.error.apply(console,t)},_group:function(...t){this.log&&console.group.apply(console,t)},_groupEnd:function(...t){this.log&&console.groupEnd.apply(console,t)},_initializeStoredValue:function(){if(this.__initializingStoredValue)return null;this._group("Initializing stored value.");var t=this.__initializingStoredValue=this.initializeStoredValue().then(function(){this.__initialized=!0,this.__initializingStoredValue=null,this._groupEnd("Initializing stored value.")}.bind(this)).catch(function(t){this.__initializingStoredValue=null,this._groupEnd("Initializing stored value.")}.bind(this));return this._enqueueTransaction((function(){return t}))},__dataChanged:function(t){if(!this.isNew&&!this.__syncingToMemory&&this.__initialized&&!this.__pathCanBeIgnored(t.path)){var e=this.__normalizeMemoryPath(t.path),n=t.value,i=n&&n.indexSplices;this._enqueueTransaction((function(){return this._log("Setting",e+":",i||n),i&&this.__pathIsSplices(e)&&(e=this.__parentPath(e),n=this.get(e)),this._setStoredValue(e,n)}))}},__normalizeMemoryPath:function(t){for(var e=t.split("."),n=[],i=[],o=[],a=0;a<e.length;++a)i.push(e[a]),/^#/.test(e[a])?o.push(this.get(n).indexOf(this.get(i))):o.push(e[a]),n.push(e[a]);return o.join(".")},__parentPath:function(t){var e=t.split(".");return e.slice(0,e.length-1).join(".")},__pathCanBeIgnored:function(t){return o.test(t)&&Array.isArray(this.get(this.__parentPath(t)))},__pathIsSplices:function(t){return i.test(t)&&Array.isArray(this.get(this.__parentPath(t)))},__pathRefersToArray:function(t){return(i.test(t)||o.test(t))&&Array.isArray(this.get(this.__parentPath(t)))},__pathTailToIndex:function(t){var e=t.split(".").pop();return window.parseInt(e.replace(a,"$1"),10)}}},25782:(t,e,n)=>{"use strict";n(43437),n(65660),n(47686),n(97968);var i=n(9672),o=n(50856),a=n(33760);(0,i.k)({_template:o.d`
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
`,is:"paper-icon-item",behaviors:[a.U]})},33760:(t,e,n)=>{"use strict";n.d(e,{U:()=>a});n(43437);var i=n(51644),o=n(26110);const a=[i.P,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},89194:(t,e,n)=>{"use strict";n(43437),n(65660),n(1656),n(47686);var i=n(9672),o=n(50856);(0,i.k)({_template:o.d`
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
`,is:"paper-item-body"})},97968:(t,e,n)=>{"use strict";n(65660),n(15495),n(1656),n(47686);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},53973:(t,e,n)=>{"use strict";n(43437),n(65660),n(97968);var i=n(9672),o=n(50856),a=n(33760);(0,i.k)({_template:o.d`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[a.U]})}}]);
//# sourceMappingURL=chunk.77104da68841c79f4ae0.js.map