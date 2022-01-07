/*! For license information please see de4d32b8.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[28055],{33076:(e,t,i)=>{var s=i(89229);i(85466),i(85408);const o=s.iv``;(0,s.hC)("",o,{moduleId:"material-menu-overlay",include:["material-overlay"]}),(0,s.hC)("vaadin-combo-box-overlay",s.iv`
    :host {
      /* TODO using a legacy mixin (unsupported) */
      --iron-list-items-container: {
        border-width: 8px 0;
        border-style: solid;
        border-color: transparent;
      }
    }

    [part='overlay'] {
      position: relative;
      overflow: visible;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    [part='content'] {
      padding: 0;
    }

    :host([loading]) [part='loader'] {
      height: 2px;
      position: absolute;
      z-index: 1;
      top: -2px;
      left: 0;
      right: 0;
      background: var(--material-background-color)
        linear-gradient(
          90deg,
          transparent 0%,
          transparent 20%,
          var(--material-primary-color) 20%,
          var(--material-primary-color) 40%,
          transparent 40%,
          transparent 60%,
          var(--material-primary-color) 60%,
          var(--material-primary-color) 80%,
          transparent 80%,
          transparent 100%
        )
        0 0 / 400% 100% repeat-x;
      opacity: 0;
      animation: 3s linear infinite material-combo-box-loader-progress, 0.3s 0.1s both material-combo-box-loader-fade-in;
    }

    [part='loader']::before {
      content: '';
      display: block;
      height: 100%;
      opacity: 0.16;
      background: var(--material-primary-color);
    }

    @keyframes material-combo-box-loader-fade-in {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes material-combo-box-loader-progress {
      0% {
        background-position: 0 0;
        background-size: 300% 100%;
      }

      33% {
        background-position: -100% 0;
        background-size: 400% 100%;
      }

      67% {
        background-position: -200% 0;
        background-size: 250% 100%;
      }

      100% {
        background-position: -300% 0;
        background-size: 300% 100%;
      }
    }

    /* RTL specific styles */

    @keyframes material-combo-box-loader-progress-rtl {
      0% {
        background-position: 100% 0;
        background-size: 300% 100%;
      }

      33% {
        background-position: 200% 0;
        background-size: 400% 100%;
      }

      67% {
        background-position: 300% 0;
        background-size: 250% 100%;
      }

      100% {
        background-position: 400% 0;
        background-size: 300% 100%;
      }
    }

    :host([loading][dir='rtl']) [part='loader'] {
      animation: 3s linear infinite material-combo-box-loader-progress-rtl,
        0.3s 0.1s both material-combo-box-loader-fade-in;
    }
  `,{moduleId:"material-combo-box-overlay",include:["material-menu-overlay"]});i(23799),i(8542);(0,s.hC)("vaadin-item",s.iv`
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
      font-family: var(--material-font-family);
      font-size: var(--material-body-font-size);
      line-height: 24px;
      padding: 4px 0;
    }

    /* It's the list-box's responsibility to add the focus style */
    :host([focused]) {
      outline: none;
    }

    /* Checkmark */
    :host::before {
      display: var(--_material-item-selected-icon-display, none);
      content: '';
      font-family: material-icons;
      font-size: 24px;
      line-height: 1;
      font-weight: 400;
      width: 24px;
      text-align: center;
      margin-right: 10px;
      color: var(--material-secondary-text-color);
      flex: none;
    }

    :host([selected])::before {
      content: var(--material-icons-check);
    }

    /* Disabled */
    :host([disabled]) {
      color: var(--material-disabled-text-color);
      cursor: default;
      pointer-events: none;
    }

    /* RTL specific styles */
    :host([dir='rtl'])::before {
      margin-right: 0;
      margin-left: 10px;
    }
  `,{moduleId:"material-item"});var n=i(28426),r=i(4358),l=i(59898);const a=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",(()=>this._setFocused(!0)),!0),this.addEventListener("blur",(()=>this._setFocused(!1)),!0),this.addEventListener("mousedown",(()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)})),this.addEventListener("keydown",(e=>this._onKeydown(e))),this.addEventListener("keyup",(e=>this._onKeyup(e)))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(){this.hasAttribute("active")&&(this._setActive(!1),this.click())}};class h extends(a((0,r.T)((0,l.U)(n.H3)))){static get template(){return n.dy`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}static get version(){return"21.0.2"}constructor(){super(),this.value}}customElements.define(h.is,h),(0,s.hC)("vaadin-combo-box-item",s.iv`
    :host {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      padding: 4px 10px;
      min-height: 36px;
      font-size: var(--material-small-font-size);
      --_material-item-selected-icon-display: block;
    }

    :host(:hover) {
      background-color: var(--material-secondary-background-color);
    }

    :host([focused]) {
      background-color: var(--material-divider-color);
    }

    @media (pointer: coarse) {
      :host(:hover),
      :host([focused]) {
        background-color: transparent;
      }
    }
  `,{moduleId:"material-combo-box-item",include:["material-item"]});var d=i(67130),c=i(21683),u=i(78956),_=i(93252),m=i(23916);const p=class{toString(){return""}},f=e=>class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnKeyDown=this._onKeyDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,m.N.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("keydown",this._boundOnKeyDown),this.addEventListener("click",this._boundOnClick),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{const e=this.$.overlay,t=e&&e.$.dropdown;t&&t.$&&requestAnimationFrame((()=>{t.$.overlay.bringToFront()}))};var t;this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),t=this,window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(t):t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/vaadin-template-renderer to enable compatibility (see https://vaad.in/template-renderer)`)}requestContentUpdate(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach((e=>{e.requestContentUpdate()}))}render(){console.warn("WARNING: Since Vaadin 21, render() is deprecated. Please use requestContentUpdate() instead."),this.requestContentUpdate()}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.hasAttribute("focused")||this.$.overlay.touchDevice||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();-1!==t.indexOf(this._clearElement)||"clear-button"===t[0].getAttribute("part")?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():(t.indexOf(this._toggleElement)>-1||!this.autoOpenDisabled)&&this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){40===e.keyCode?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):38===e.keyCode?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):13===e.keyCode?this._onEnter(e):27===e.keyCode&&this._onEscape(e)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout((()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()}),1))}_setSelectionRange(e,t){const i=this._nativeInput||this.inputElement;this.hasAttribute("focused")&&i&&i.setSelectionRange&&i.setSelectionRange(e,t)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){(this.opened||this.autoOpenDisabled)&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this._closeOrCommit(),e.preventDefault(),e.stopPropagation())}_onEscape(e){this.autoOpenDisabled?(this._focusedIndex=-1,this.cancel()):this.opened&&(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("click",(()=>{this.$.overlay.touchDevice&&!this.hasAttribute("focused")&&document.activeElement.blur()})))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){(0,_.y)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout((()=>this._resizeDropdown()),1),window.requestAnimationFrame((()=>this.$.overlay.adjustScrollPosition())),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){if(this.$.overlay._items&&this._focusedIndex>-1){const e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=e=>e&&e.toLowerCase&&e.toLowerCase(),t=this.filteredItems&&this.filteredItems.filter((t=>e(this._getItemLabel(t))===e(this._inputElementValue)))||[];if(this.allowCustomValue&&!t.length){const e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(e),!e.defaultPrevented){const e=this._inputElementValue;this._selectItemForValue(e),this.value=e}}else!this.allowCustomValue&&!this.opened&&t.length>0?this.value=this._getItemValue(t[0]):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput(e))}_filterFromInput(e){this.opened||e.__fromClearButton||this.autoOpenDisabled||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.$.overlay.filterChanged=!0,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){if(this._isValidValue(e)){let t;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):t=this.selectedItem,!t&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.items=t}))}_itemsOrPathsChanged(e){if("items"===e.path||"items.splices"===e.path){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);const e=this._indexOfValue(this.value,this.items);this._focusedIndex=e;const t=e>-1&&this.items[e];t&&(this.selectedItem=t)}this.__previousItems=e.value}_filteredItemsChanged(e){"filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened||this.autoOpenDisabled?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay())}_filterItems(e,t){if(!e)return e;return e.filter((e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)))}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e)}_repositionOverlay(){this.__repositionOverlayDebouncer=u.dx.debounce(this.__repositionOverlayDebouncer,c.Wc.after(500),(()=>{const e=this.$.overlay._selector;e._isClientFull()||e._resetScrollPosition(e._physicalTop),this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),e.notifyResize(),(0,_.y)()}))}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(let i=0;i<t.length;i++)if(this._getItemValue(t[i])===e)return i;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof p||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}_onFocusout(e){const t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this._closeOnBlurIsPrevented||this._closeOrCommit()}_onTouchend(e){this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}},v=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new p}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){!e||this.loading||!this.filter||t&&this.autoOpenDisabled&&i===this.filter||(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",(e=>{const t=e.detail.index,i=e.detail.currentScrollerPos,s=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,s,i)&&void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}}))}_dataProviderFilterChanged(){this._shouldFetchData()&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,i){return 0!==i&&e>=i-t&&e<=i+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof p:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(s,o)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,s.length,...s);else{const e=[];e.splice(t.page*t.pageSize,s.length,...s),this.filteredItems=e}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=o,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1),0===e&&this.__repositionOverlayDebouncer&&s.length>(this.__maxRenderedItems||0)&&(setTimeout((()=>this.__repositionOverlayDebouncer.flush())),this.__maxRenderedItems=s.length)}};this._pendingRequests[e]||(this._pendingRequests[e]=i,this.dataProvider(t,i))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.dataProvider=t}))}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize),i=Object.keys(this._pendingRequests);for(let s=0;s<i.length;s++){const o=parseInt(i[s]);o>=t&&this._pendingRequests[o]([],e)}}}};i(94604),i(8621);var g=i(72986),y=i(67810),b=i(72419),I=i(9672),x=i(87156),C=i(37692),w=i(50856),P=i(4059),S=(i(52521),navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)),V=S&&S[1]>=8,E="-10000px",R=-100;(0,I.k)({_template:w.d`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[C.F,g.z,y.o,b.x],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return(0,x.vz)((0,x.vz)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,s){t<this._scrollBottom&&(e=s),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,c.rs),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,c.rs)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var s=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+s,this._physicalStart=this._physicalStart+s,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var o=this._getReusables(i);i?(this._physicalTop=o.physicalTop,this._virtualStart=this._virtualStart+o.indexes.length,this._physicalStart=this._physicalStart+o.indexes.length):(this._virtualStart=this._virtualStart-o.indexes.length,this._physicalStart=this._physicalStart-o.indexes.length),this._update(o.indexes,i?null:o.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),c.YA)}},_getReusables:function(e){var t,i,s,o=[],n=this._hiddenContentSize*this._ratio,r=this._virtualStart,l=this._virtualEnd,a=this._physicalCount,h=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,c=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,i=c-h):(t=this._physicalEnd,this._physicalStart,i=d-u);i-=s=this._getPhysicalSizeIncrement(t),!(o.length>=a||i<=n);)if(e){if(l+o.length+1>=this._virtualCount)break;if(h+s>=c-this._scrollOffset)break;o.push(t),h+=s,t=(t+1)%a}else{if(r-o.length<=0)break;if(h+this._physicalSize-s<=u)break;o.push(t),h-=s,t=0===t?a-1:t-1}return{indexes:o,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,i;this._ensureTemplatized();var s=new Array(e);for(t=0;t<e;t++)i=this.stamp(null),s[t]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return s},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var s=t-this._physicalCount,o=Math.round(.5*this._physicalCount);if(!(s<0)){if(s>0){var n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(s));for(var r=0;r<s;r++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+s,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+s),this._update(),this._templateCost=(window.performance.now()-n)/s,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),c.t$):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),c.YA))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),(0,_.y)(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,c.rs);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some((function(e){return e.addedCount>0||e.removed.length>0}))){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some((function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,c.rs)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var i,s,o,n=(e=e.slice(6)).indexOf(".");-1===n&&(n=e.length);var r=this.modelForElement(this._offscreenFocusedItem),l=parseInt(e.substring(0,n),10);(i=this._isIndexRendered(l))?(s=this._getPhysicalIndex(l),o=this.modelForElement(this._physicalItems[s])):r&&(o=r),o&&o[this.indexAs]===l&&(e=e.substring(n+1),e=this.as+(e?"."+e:""),o._setPendingPropertyOrPath(e,t,!1,!0),o._flushProperties&&o._flushProperties(!0),i&&(this._updateMetrics([s]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach((function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}}),this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var i,s,o,n;if(2===arguments.length&&t){for(n=0;n<t.length;n++)if(i=t[n],s=this._computeVidx(i),null!=(o=e.call(this,i,s)))return o}else{for(i=this._physicalStart,s=this._virtualStart;i<this._physicalCount;i++,s++)if(null!=(o=e.call(this,i,s)))return o;for(i=0;i<this._physicalStart;i++,s++)if(null!=(o=e.call(this,i,s)))return o}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems((function(e,t){var i=this._physicalItems[e],s=this.items&&this.items[t];if(null!=s){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,s),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(s)),this._forwardProperty(o,this.indexAs,t),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[o.__key__]=e,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),e)},_updateMetrics:function(e){(0,_.y)();var t=0,i=0,s=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((function(e,s){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((o*s+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems((function(t,s){var o=s%this._itemsPerRow,n=Math.floor(o*this._itemWidth+i);this._isRTL&&(n*=-1),this.translate3d(n+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(s)&&(e+=this._rowHeight)}))}else this._iterateItems((function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!V&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&((0,_.y)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,s=0,o=this._hiddenContentSize;i<e&&s<=o;)s+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),c.rs)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems((function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var i,s,o=(0,x.vz)(e).path[0],n=this._getActiveElement(),r=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==o.localName&&"button"!==o.localName&&"select"!==o.localName&&(i=t.tabIndex,t.tabIndex=R,s=n?n.tabIndex:-1,t.tabIndex=i,n&&r!==n&&r.contains(n)&&s!==R||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,i=this._physicalItems[this._getPhysicalIndex(e)],s=this.modelForElement(i);s.tabIndex=R,i.tabIndex===R&&(t=i),t||(t=(0,x.vz)(i).querySelector('[tabindex="-100"]')),s.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,E,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var i=this.modelForElement(t),s=this.modelForElement(this._offscreenFocusedItem);i[this.as]===s[this.as]?(this._focusBackfillItem=t,i.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,E,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),i=this.modelForElement(this._focusedItem),s=null!==this._offscreenFocusedItem,o=this._focusedVirtualIndex;t&&(i===t?this._isIndexVisible(o)||this.scrollToIndex(o):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),t.tabIndex=0,o=t[this.indexAs],this._focusedVirtualIndex=o,this._focusedPhysicalIndex=this._getPhysicalIndex(o),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],s&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=u.dx.debounce(this._debouncers[e],i,t.bind(this)),(0,_.E)(this._debouncers[e])},_forwardProperty:function(e,t,i){e._setPendingProperty(t,i)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(e,t)}),this)},_notifyInstancePropV2:function(e,t,i){if((0,P.wB)(this.as,t)){var s=e[this.indexAs];t==this.as&&(this.items[s]=i),this.notifyPath((0,P.Iu)(this.as,"items."+s,t),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,i){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),i)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(e,t,!0)}),this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[e]=t)}),this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return(0,x.vz)(e?e.root:document).activeElement}});class A extends((0,r.T)((0,l.U)(n.H3))){static get template(){return n.dy`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <div part="content" id="content"></div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback();const e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host;const t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this.$.content,this._comboBox,e)}__rendererOrItemChanged(e,t,i,s,o){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML="",delete this.$.content._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||this.$.content&&(this.$.content.textContent=e)}}customElements.define(A.is,A);var O=i(33367),k=i(16777),T=i(1335);(0,s.hC)("vaadin-combo-box-overlay",s.iv`
    :host {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class F extends T.G{static get is(){return"vaadin-combo-box-overlay"}connectedCallback(){super.connectedCallback();const e=this.__dataHost.getRootNode().host,t=e&&e.getRootNode().host,i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}}customElements.define(F.is,F);class L extends((0,k.f)((0,O.P)(g.z,n.H3))){static get template(){return n.dy`
      <style>
        :host {
          display: block;
        }

        :host > #overlay {
          display: none;
        }
      </style>
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[hidden]]"
        opened="[[opened]]"
        style="align-items: stretch; margin: 0;"
        theme$="[[theme]]"
      >
        <slot></slot>
      </vaadin-combo-box-overlay>
    `}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",(e=>{e.preventDefault()}))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):this.__emptyItems||(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(e){const t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(e){const t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;const t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignLeft(e){return(window.innerWidth-e.right)/window.innerWidth<.3}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_setOverlayWidth(){const e=this.positionTarget.clientWidth+"px",t=getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-width");this.$.overlay.style.setProperty("--_vaadin-combo-box-overlay-default-width",e),""===t?this.$.overlay.style.removeProperty("--vaadin-combo-box-overlay-width"):this.$.overlay.style.setProperty("--vaadin-combo-box-overlay-width",t)}_setPosition(e){if(this.hidden)return;if(e&&e.target){const t=e.target===document?document.body:e.target,i=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||i!==document.body)return}const t=this.positionTarget.getBoundingClientRect(),i=this._shouldAlignLeft(t);this.alignedAbove=this._shouldAlignAbove(t);const s=this.$.overlay.getBoundingClientRect();this._translateX=i?t.right-s.right+(this._translateX||0):t.left-s.left+(this._translateX||0),this._translateY=t.top-s.top+(this._translateY||0)+this._verticalOffset(s,t);const o=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*o)/o,this._translateY=Math.round(this._translateY*o)/o,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this._setOverlayWidth(),this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(L.is,L);const z=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class $ extends n.H3{static get template(){return n.dy`
      <vaadin-combo-box-dropdown
        id="dropdown"
        hidden="[[_hidden(_items.*, loading)]]"
        position-target="[[positionTarget]]"
        on-position-changed="_setOverlayHeight"
        disable-upgrade=""
        theme="[[theme]]"
      >
        <template>
          <style>
            #scroller {
              overflow: auto;

              /* Fixes item background from getting on top of scrollbars on Safari */
              transform: translate3d(0, 0, 0);

              /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
              -webkit-overflow-scrolling: touch;

              /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
              box-shadow: 0 0 0 white;
            }
          </style>
          <div id="scroller" on-click="_stopPropagation">
            <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
              <template>
                <vaadin-combo-box-item
                  on-click="_onItemClick"
                  index="[[__requestItemByIndex(item, index, _resetScrolling)]]"
                  item="[[item]]"
                  label="[[getItemLabel(item, _itemLabelPath)]]"
                  selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]"
                  renderer="[[renderer]]"
                  role$="[[_getAriaRole(index)]]"
                  aria-selected$="[[_getAriaSelected(_focusedIndex,index)]]"
                  focused="[[_isItemFocused(_focusedIndex,index)]]"
                  tabindex="-1"
                  theme$="[[theme]]"
                ></vaadin-combo-box-item>
              </template>
            </iron-list>
          </div>
        </template>
      </vaadin-combo-box-dropdown>
    `}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:z},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,filterChanged:{type:Boolean,value:!1},_resetScrolling:{type:Boolean,value:!1},_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String,_oldScrollerPosition:{type:Number,value:0}}}static get observers(){return["_loadingChanged(loading)","_openedChanged(opened, _items, loading)","_restoreScrollerPosition(_items)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){if(e){if(this._isNotEmpty(t)&&this._selector&&!this.filterChanged){const e=this._selector.firstVisibleIndex;0!==e&&(this._oldScrollerPosition=e,this._resetScrolling=!0)}return this.filterChanged=!1,t}return[]}_restoreScrollerPosition(e){this._isNotEmpty(e)&&this._selector&&0!==this._oldScrollerPosition&&(this._scrollIntoView(Math.min(e.length-1,this._oldScrollerPosition)),this._resetScrolling=!1,this._oldScrollerPosition=0)}_isNotEmpty(e){return!this._isEmpty(e)}_isEmpty(e){return!e||!e.length}_openedChanged(e,t,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this._isEmpty(t)&&(this.$.dropdown.__emptyItems=!0),this.$.dropdown.opened=!(!e||!i&&!this._isNotEmpty(t)),this.$.dropdown.__emptyItems=!1}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"),this._patchWheelOverScrolling(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",(e=>this._fireTouchAction(e))),this.$.dropdown.$.overlay.addEventListener("touchmove",(e=>this._fireTouchAction(e))),this.$.dropdown.$.overlay.addEventListener("mousedown",(e=>e.preventDefault()))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_setOverlayHeight(){if(!this.opened||!this.positionTarget)return;const e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height")||"65vh";const t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}_maxOverlayHeight(e){return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(document.documentElement.clientHeight-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,i){return!(e instanceof p)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}_onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t,i){return e instanceof p&&void 0!==t&&!i&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let i=e;e>this._selector.lastVisibleIndex-1?(this._selector.scrollToIndex(e),i=e-t+1):e>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));const s=this._selector._getPhysicalIndex(e),o=this._selector._physicalItems[s];if(!o)return;const n=o.getBoundingClientRect(),r=this._scroller.getBoundingClientRect(),l=n.bottom-r.bottom+this._viewportTotalPaddingBottom;l>0&&(this._scroller.scrollTop+=l)}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){const e=this._selector;e.addEventListener("wheel",(t=>{const i=e._scroller||e.scrollTarget,s=0===i.scrollTop,o=i.scrollHeight-i.scrollTop-i.clientHeight<=1;(s&&t.deltaY<0||o&&t.deltaY>0)&&t.preventDefault()}))}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map((e=>parseInt(e,10))).reduce(((e,t)=>e+t))}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){return this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_stopPropagation(e){e.stopPropagation()}_hidden(){return!this.loading&&this._isEmpty(this._items)}}customElements.define($.is,$);class B extends((0,r.T)(v(f(n.H3)))){static get template(){return n.dy`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-combo-box-dropdown-wrapper
        id="overlay"
        opened="[[opened]]"
        position-target="[[inputElement]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-combo-box-dropdown-wrapper>
    `}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this),this.__boundInputValueCommitted=this.__inputValueCommitted.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button"),this._clearElement&&this._clearElement.addEventListener("mousedown",(e=>{e.preventDefault(),(this.inputElement._focusableElement||this.inputElement).focus()}))}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this.inputElement.addEventListener("change",this.__boundInputValueCommitted),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this.inputElement.removeEventListener("change",this.__boundInputValueCommitted),this._restoreInputBlur()}__inputValueCommitted(e){e.__fromClearButton&&this._clear()}get _propertyForValue(){return(0,d.z)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}}customElements.define(B.is,B)},25209:(e,t,i)=>{i.d(t,{t7:()=>a});var s=i(37500),o=i(57835);const n={};class r extends o.Xe{constructor(e){if(super(e),this.previousValue=n,e.type!==o.pX.ELEMENT)throw new Error("renderer only supports binding to element")}render(e,t){return s.Ld}update(e,[t,i]){var o;const r=this.previousValue===n;if(!this.hasChanged(i))return s.Ld;this.previousValue=Array.isArray(i)?Array.from(i):i;const l=e.element;if(r){const i=null===(o=e.options)||void 0===o?void 0:o.host;this.addRenderer(l,t,{host:i})}else this.runRenderer(l);return s.Ld}hasChanged(e){let t=!0;return Array.isArray(e)?Array.isArray(this.previousValue)&&this.previousValue.length===e.length&&e.every(((e,t)=>e===this.previousValue[t]))&&(t=!1):this.previousValue===e&&(t=!1),t}}const l=(0,o.XM)(class extends r{addRenderer(e,t,i){e.renderer=(e,o,n)=>{(0,s.sY)(t.call(i.host,n.item,n,o),e,i)}}runRenderer(e){e.requestContentUpdate()}}),a=(e,t)=>l(e,t);(0,o.XM)(class extends r{addRenderer(e,t,i){e.renderer=(e,o,n)=>{(0,s.sY)(t.call(i.host,n,o),e,i)}}runRenderer(e){e.requestContentUpdate()}});(0,o.XM)(class extends r{addRenderer(e,t,i){e.renderer=(e,o)=>{(0,s.sY)(t.call(i.host,o),e,i)}}runRenderer(e){e.requestContentUpdate()}});var h=i(78956),d=i(21683);function c(e,t){const i=e;i._debounceLitRender=h.dx.debounce(i._debounceLitRender,d.YA,t)}class u extends r{runRenderer(e){const t=e._grid;t&&c(t,(()=>{t.requestContentUpdate()}))}}(0,o.XM)(class extends u{addRenderer(e,t,i){e.renderer=(e,o,n)=>{n&&(0,s.sY)(t.call(i.host,n.item,n,o),e,i)}}});(0,o.XM)(class extends u{addRenderer(e,t,i){e.headerRenderer=(e,o)=>{(0,s.sY)(t.call(i.host,o),e,i)}}});(0,o.XM)(class extends u{addRenderer(e,t,i){e.footerRenderer=(e,o)=>{(0,s.sY)(t.call(i.host,o),e,i)}}});(0,o.XM)(class extends r{addRenderer(e,t,i){e.rowDetailsRenderer=(e,o,n)=>{if(n){const r=n.item;(0,s.sY)(t.call(i.host,r,n,o),e,i)}}}runRenderer(e){c(e,(()=>{e.requestContentUpdate()}))}});(0,o.XM)(class extends r{addRenderer(e,t,i){e.renderer=(e,o)=>{(0,s.sY)(t.call(i.host,o),e,i)}}runRenderer(e){e.requestContentUpdate()}});(0,o.XM)(class extends r{addRenderer(e,t,i){e.renderer=(e,o)=>{(0,s.sY)(t.call(i.host,o),e,i)}}runRenderer(e){e.requestContentUpdate()}})}}]);
//# sourceMappingURL=de4d32b8.js.map