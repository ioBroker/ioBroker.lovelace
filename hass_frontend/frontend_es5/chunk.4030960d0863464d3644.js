/*! For license information please see chunk.4030960d0863464d3644.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[19],{202:function(n,t,e){"use strict";e(3),e(44);var o=e(5),i=e(2),a=e(4),s=e(124);function l(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n'],['\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n']);return l=function(){return n},n}Object(o.a)({_template:Object(a.a)(l()),is:"app-header-layout",behaviors:[s.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(i.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var n=this.header;if(this.isAttached&&n){this.$.wrapper.classList.remove("initializing"),n.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=n.offsetHeight;this.hasScrollingRegion?(n.style.left="",n.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),e=document.documentElement.clientWidth-t.right;n.style.left=t.left+"px",n.style.right=e+"px"}.bind(this));var e=this.$.contentContainer.style;n.fixed&&!n.condenses&&this.hasScrollingRegion?(e.marginTop=t+"px",e.paddingTop=""):(e.paddingTop=t+"px",e.marginTop="")}}})},253:function(n,t,e){"use strict";e(3),e(44);var o=e(53),i=e(34),a=e(66),s=e(5),l=e(2),r=e(4);function c(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center;\n        @apply --layout-center-justified;\n        @apply --layout-flex-auto;\n\n        position: relative;\n        padding: 0 12px;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n\n        @apply --paper-font-common-base;\n        @apply --paper-tab;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([link]) {\n        padding: 0;\n      }\n\n      .tab-content {\n        height: 100%;\n        transform: translateZ(0);\n          -webkit-transform: translateZ(0);\n        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        @apply --layout-flex-auto;\n        @apply --paper-tab-content;\n      }\n\n      :host(:not(.iron-selected)) > .tab-content {\n        opacity: 0.8;\n\n        @apply --paper-tab-content-unselected;\n      }\n\n      :host(:focus) .tab-content {\n        opacity: 1;\n        font-weight: 700;\n\n        @apply --paper-tab-content-focused;\n      }\n\n      paper-ripple {\n        color: var(--paper-tab-ink, var(--paper-yellow-a100));\n      }\n\n      .tab-content > ::slotted(a) {\n        @apply --layout-flex-auto;\n\n        height: 100%;\n      }\n    </style>\n\n    <div class="tab-content">\n      <slot></slot>\n    </div>\n']);return c=function(){return n},n}Object(s.a)({_template:Object(r.a)(c()),is:"paper-tab",behaviors:[i.a,o.a,a.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var n=Object(l.a)(this).parentNode;return!!n&&!!n.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(n){if(this.link){var t=this.queryEffectiveChildren("a");if(!t)return;if(n.target===t)return;t.click()}}})},254:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return a}));e(3);var o=e(120),i={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(n){this.focusedItem.click(),n.detail.keyboardEvent.preventDefault()},_onDownKey:function(n){this.focusedItem.click(),n.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(n){this._isRTL?this._focusNext():this._focusPrevious(),n.detail.keyboardEvent.preventDefault()},_onRightKey:function(n){this._isRTL?this._focusPrevious():this._focusNext(),n.detail.keyboardEvent.preventDefault()},_onKeydown:function(n){this.keyboardEventMatchesKeys(n,"up down left right esc")||this._focusWithKeyboardEvent(n)}},a=[o.a,i]},298:function(n,t,e){"use strict";e(3),e(44),e(106),e(105),e(65),e(86);var o=e(4);function i(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['<iron-iconset-svg name="paper-tabs" size="24">\n<svg><defs>\n<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>\n<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>\n</defs></svg>\n</iron-iconset-svg>']);return i=function(){return n},n}var a=Object(o.a)(i());document.head.appendChild(a.content);e(253);var s=e(120),l=e(254),r=e(95),c=e(5),p=e(2);function h(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be `transparent`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>\n\n    <div id="tabsContainer" on-track="_scroll" on-down="_down">\n      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">\n        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>\n'],['\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be \\`transparent\\`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>\n\n    <div id="tabsContainer" on-track="_scroll" on-down="_down">\n      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">\n        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>\n']);return h=function(){return n},n}Object(c.a)({_template:Object(o.a)(h()),is:"paper-tabs",behaviors:[r.a,l.a],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(n){Object(p.a)(this).querySelectorAll("paper-tab").forEach(n?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(n){n.setAttribute("noink","")},_removeNoinkAttribute:function(n){n.removeAttribute("noink")},_computeScrollButtonClass:function(n,t,e){return!t||e?"hidden":n?"not-visible":""},_computeTabsContentClass:function(n,t){return n?"scrollable"+(t?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(n,t){return n?"hidden":t?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(n){this._tabChanged(n.detail.item,this._previousTab),this._previousTab=n.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(n){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),s.b._activateHandler.apply(this,arguments)},_scheduleActivation:function(n,t){this._pendingActivationItem=n,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,t)},_delayedActivationHandler:function(){var n=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,n.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(n){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(n){n.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(n,t){if(this.scrollable){var e=t&&-t.ddx||0;this._affectScroll(e)}},_down:function(n){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(n){this.$.tabsContainer.scrollLeft+=n;var t=this.$.tabsContainer.scrollLeft;this._leftHidden=0===t,this._rightHidden=t===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(n,t){if(!n)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var e=this.$.tabsContent.getBoundingClientRect(),o=e.width,i=n.getBoundingClientRect(),a=i.left-e.left;if(this._pos={width:this._calcPercent(i.width,o),left:this._calcPercent(a,o)},this.noSlide||null==t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var s=t.getBoundingClientRect(),l=this.items.indexOf(t),r=this.items.indexOf(n);this.$.selectionBar.classList.add("expand");var c=l<r;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(i.left+i.width-s.left,o)-5,this._left):this._positionBar(this._calcPercent(s.left+s.width-i.left,o)-5,this._calcPercent(a,o)+5),this.scrollable&&this._scrollToSelectedIfNeeded(i.width,a)},_scrollToSelectedIfNeeded:function(n,t){var e=t-this.$.tabsContainer.scrollLeft;e<0?this.$.tabsContainer.scrollLeft+=e:(e+=n-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=e)},_calcPercent:function(n,t){return 100*n/t},_positionBar:function(n,t){n=n||0,t=t||0,this._width=n,this._left=t,this.transform("translateX("+t+"%) scaleX("+n/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(n){var t=this.$.selectionBar.classList;t.contains("expand")?(t.remove("expand"),t.add("contract"),this._positionBar(this._pos.width,this._pos.left)):t.contains("contract")&&t.remove("contract")}})}}]);
//# sourceMappingURL=chunk.4030960d0863464d3644.js.map