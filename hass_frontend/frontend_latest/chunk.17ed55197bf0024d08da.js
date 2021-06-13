/*! For license information please see chunk.17ed55197bf0024d08da.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1041],{16777:(e,t,o)=>{"use strict";o.d(t,{f:()=>i});var n=o(36608),a=o(76389);const r="disable-upgrade",i=(0,a.o)((e=>{const t=(0,n.SH)(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat(r)}attributeChangedCallback(e,t,o,n){e==r?!this.__dataEnabled&&null==o&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,o,n)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute(r)||super.connectedCallback()}_enableProperties(){this.hasAttribute(r)||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}}))},85466:(e,t,o)=>{"use strict";o(22726),o(5618),o(21384);const n=document.createElement("template");n.innerHTML='<dom-module id="material-color-light">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n        --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n        --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n        /* Primary colors */\n        --material-primary-color: var(--primary-color, #6200ee);\n        --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n        --material-primary-text-color: var(--material-primary-color);\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #b00020);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--light-theme-background-color, #fff);\n        --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n        --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n        /* Divider colors */\n        --material-divider-color: rgba(0, 0, 0, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: initial;\n        --_material-text-field-input-line-opacity: initial;\n        --_material-text-field-input-line-hover-opacity: initial;\n        --_material-text-field-focused-label-opacity: initial;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: initial;\n        --_material-button-outline-color: initial;\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: initial;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: initial;\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      [theme~="dark"] {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      a {\n        color: inherit;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="material-color-dark">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    :root {\n      /* Text colors */\n      --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n      --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n      --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n      /* Primary colors */\n      --material-primary-color: var(--primary-color, #6200ee);\n      --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n      --material-primary-text-color: var(--material-primary-color);\n\n      /* Error colors */\n      --material-error-color: var(--error-color, #b00020);\n      --material-error-text-color: var(--material-error-color);\n\n      /* Background colors */\n      --material-background-color: var(--light-theme-background-color, #fff);\n      --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n      --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n      /* Divider colors */\n      --material-divider-color: rgba(0, 0, 0, 0.12);\n    }\n  </style>\n</custom-style>',document.head.appendChild(n.content)},23799:(e,t,o)=>{"use strict";o(5618),o(22726);const n=document.createElement("template");n.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'material-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: "\\ea01";\n      --material-icons-arrow-upward: "\\ea02";\n      --material-icons-calendar: "\\ea03";\n      --material-icons-check: "\\ea04";\n      --material-icons-chevron-left: "\\ea05";\n      --material-icons-chevron-right: "\\ea06";\n      --material-icons-clear: "\\ea07";\n      --material-icons-clock: "\\ea08";\n      --material-icons-dropdown: "\\ea09";\n      --material-icons-error: "\\ea0a";\n      --material-icons-eye-disabled: "\\ea0b";\n      --material-icons-eye: "\\ea0c";\n      --material-icons-play: "\\ea0d";\n      --material-icons-reload: "\\ea0e";\n      --material-icons-upload: "\\ea0f";\n    }\n  </style>\n</custom-style>',document.head.appendChild(n.content)},38715:()=>{const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)},85408:(e,t,o)=>{"use strict";o(85466),o(8542),o(37365);const n=document.createElement("template");n.innerHTML='<dom-module id="material-overlay">\n  <template>\n    <style>\n      :host {\n        top: 16px;\n        right: 16px;\n        /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */\n        bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);\n        left: 16px;\n      }\n\n      [part="overlay"] {\n        background-color: var(--material-background-color);\n        border-radius: 4px;\n        box-shadow: var(--material-shadow-elevation-4dp);\n        color: var(--material-body-text-color);\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        font-weight: 400;\n      }\n\n      [part="content"] {\n        padding: 8px 0;\n      }\n\n      [part="backdrop"] {\n        opacity: 0.2;\n        animation: 0.2s vaadin-overlay-backdrop-enter;\n        will-change: opacity;\n      }\n\n      @keyframes vaadin-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},37365:(e,t,o)=>{"use strict";o(22726),o(5618);const n=document.createElement("template");n.innerHTML='<custom-style>\n  <style is="custom-style">\n    html {\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n      --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);\n    }\n  </style>\n</custom-style>',document.head.appendChild(n.content)},8542:(e,t,o)=>{"use strict";o(22726),o(5618),o(21384);var n=o(50856);o(38715);const a=n.d`<custom-style>
  <style>
    html {
      /* Font family */
      --material-font-family: 'Roboto', sans-serif;

      /* Font sizes */
      --material-h1-font-size: 6rem;
      --material-h2-font-size: 3.75rem;
      --material-h3-font-size: 3rem;
      --material-h4-font-size: 2.125rem;
      --material-h5-font-size: 1.5rem;
      --material-h6-font-size: 1.25rem;
      --material-body-font-size: 1rem;
      --material-small-font-size: 0.875rem;
      --material-button-font-size: 0.875rem;
      --material-caption-font-size: 0.75rem;

      /* Icon size */
      --material-icon-font-size: 20px;
    }
  </style>
</custom-style><dom-module id="material-typography">
  <template>
    <style>
      body {
        font-family: var(--material-font-family);
        font-size: var(--material-body-font-size);
        line-height: 1.4;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: inherit;
        line-height: 1.1;
        margin-top: 1.5em;
      }

      h1 {
        font-size: var(--material-h3-font-size);
        font-weight: 300;
        letter-spacing: -0.015em;
        margin-bottom: 1em;
        text-indent: -0.07em;
      }

      h2 {
        font-size: var(--material-h4-font-size);
        font-weight: 300;
        letter-spacing: -0.01em;
        margin-bottom: 0.75em;
        text-indent: -0.07em;
      }

      h3 {
        font-size: var(--material-h5-font-size);
        font-weight: 400;
        margin-bottom: 0.75em;
        text-indent: -0.05em;
      }

      h4 {
        font-size: var(--material-h6-font-size);
        font-weight: 400;
        letter-spacing: 0.01em;
        margin-bottom: 0.75em;
        text-indent: -0.05em;
      }

      h5 {
        font-size: var(--material-body-font-size);
        font-weight: 500;
        margin-bottom: 0.5em;
        text-indent: -0.025em;
      }

      h6 {
        font-size: var(--material-small-font-size);
        font-weight: 500;
        letter-spacing: 0.01em;
        margin-bottom: 0.25em;
        text-indent: -0.025em;
      }

      a,
      b,
      strong {
        font-weight: 500;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content)},22726:(e,t,o)=>{"use strict";class n extends HTMLElement{static get version(){return"1.2.3"}}customElements.define("vaadin-material-styles",n)},1335:(e,t,o)=>{"use strict";o.d(t,{G:()=>b});var n=o(28426),a=o(52521),r=o(87529),i=o(20723),s=o(15520);const l=Element.prototype,d=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,c={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return d.call(e,"input, select, textarea, button, object")?d.call(e,":not([disabled])"):d.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&d.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const o=e,n=this._normalizedTabIndex(o);let a,r=n>0;if(n>=0&&t.push(o),a="slot"===o.localName?o.assignedNodes({flatten:!0}):(o.shadowRoot||o).children,a)for(let e=0;e<a.length;e++)r=this._collectTabbableNodes(a[e],t)||r;return r},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const o=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,o)),a=this._sortByTabIndex(e.slice(o));return this._mergeSortByTabIndex(n,a)},_mergeSortByTabIndex:function(e,t){const o=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?o.push(t.shift()):o.push(e.shift());return o.concat(e,t)},_hasLowerTabOrder:function(e,t){const o=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===o||0===n?n>o:o>n}};var h=o(50856);let m=0;const p={},u=e=>{m++;const t=`vaadin-overlay-content-${m}`,o=document.createElement("template"),n=document.createElement("style");n.textContent=":host { display: block; }"+e,o.content.appendChild(n),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(o,t);const a=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(o.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(a.is,a),p[e]=t,t};class b extends((0,s.T)(n.H3)){static get template(){return h.d`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new i.o(this,(e=>{this._setTemplateFromNodes(e.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{}))}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,o=document.documentElement.clientHeight;t&&o>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",o-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter((e=>e.localName&&"template"===e.localName))[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),(0,r.T8)(this,(()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)})),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const o=`__${e}Handler`,n=()=>{t(),this.removeEventListener("animationend",n),delete this[o]};this[o]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.setAttribute("opening","");const e=()=>{this.removeAttribute("opening"),document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.modeless||this._enterModalState()};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this.setAttribute("closing","");const e=()=>{if(this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this._exitModalState(),document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.removeAttribute("closing"),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof b))}get _last(){return this===b.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),b.__attachedInstances.forEach((e=>{e===this||e.hasAttribute("opening")||e.hasAttribute("closing")||(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=b.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((e=>{e.parentNode===this.content&&this.content.removeChild(e)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=(0,a.Uv)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const o=e._templateRoot||(e._templateRoot=e.getRootNode());if(o!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(o.querySelectorAll("style")).reduce(((e,t)=>e+t.textContent),"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(o.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=p[e]||u(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,o,n){e!==t?this.template=void 0:o!==n&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,o,n,a,r){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const i=this._oldOwner!==o||this._oldModel!==n;this._oldModel=n,this._oldOwner=o;const s=this._oldInstanceProps!==a||this._oldTemplate!==e;this._oldInstanceProps=a,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==r;if(this._oldOpened=r,e&&s)this._stampOverlayTemplate(e,a);else if(t&&(l||d||i)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);r&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const o=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(o)),(t+=e)>=o.length?t=0:t<0&&(t=o.length-1),o[t].focus()}_getFocusableElements(){return c.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const o=e.ownerDocument;for(;t&&t!==o&&t!==this;)t=t.parentNode||t.host;return t===this}}customElements.define(b.is,b)},15520:(e,t,o)=>{"use strict";o.d(t,{T:()=>r});var n=o(21384),a=o(62305);const r=e=>class extends((0,a.I)(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,o=Object.getPrototypeOf(this.prototype)._template;o&&!t&&Array.from(o.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e)})),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=n.t.prototype.modules;let o=!1;const a=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const o=0===e.indexOf("vaadin-"),n=0===t.indexOf("vaadin-"),a=["lumo-","material-"],r=a.filter((t=>0===e.indexOf(t))).length>0,i=a.filter((e=>0===t.indexOf(e))).length>0;return o!==n?o?-1:1:r!==i?r?-1:1:0})).forEach((n=>{if(n!==a){const a=t[n].getAttribute("theme-for");a&&a.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(o=!0,this._includeStyle(n,e))}))}})),!o&&t[a]&&this._includeStyle(a,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const o=document.createElement("style");o.setAttribute("include",e),t.content.appendChild(o)}}}},62305:(e,t,o)=>{"use strict";o.d(t,{I:()=>n});const n=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"theme"===e&&this._setTheme(o)}}}}]);
//# sourceMappingURL=chunk.17ed55197bf0024d08da.js.map