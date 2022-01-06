/*! For license information please see d304e2f7.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[14409],{59898:(e,t,o)=>{o.d(t,{U:()=>l});class r{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,o){const{scrollLeft:r}=o;if("rtl"!==t||!e)return r;switch(e){case"negative":return o.scrollWidth-o.clientWidth+r;case"reverse":return o.scrollWidth-o.clientWidth-r}return r}static setNormalizedScrollLeft(e,t,o,r){if("rtl"===t&&e)switch(e){case"negative":o.scrollLeft=o.clientWidth-o.scrollWidth+r;break;case"reverse":o.scrollLeft=o.scrollWidth-o.clientWidth-r;break;default:o.scrollLeft=r}else o.scrollLeft=r}}const i=[];let a;new MutationObserver((function(){const e=s();i.forEach((t=>{n(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const n=function(e,t,o=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=o&&e.removeAttribute("dir")},s=function(){return document.documentElement.getAttribute("dir")},l=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),a||(a=r.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),n(this,s(),null))}attributeChangedCallback(e,t,o){if(super.attributeChangedCallback(e,t,o),"dir"!==e)return;const r=s(),a=o===r&&-1===i.indexOf(this),l=!o&&t&&-1===i.indexOf(this),d=o!==r&&t===r;a||l?(this.__subscribe(),n(this,r,o)):d&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,t,o){("dir"!==o||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,o)}_attributeToProperty(e,t,o){"dir"!==e||t?super._attributeToProperty(e,t,o):this.dir=""}__subscribe(e=!0){e?-1===i.indexOf(this)&&i.push(this):i.indexOf(this)>-1&&i.splice(i.indexOf(this),1)}__getNormalizedScrollLeft(e){return r.getNormalizedScrollLeft(a,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return r.setNormalizedScrollLeft(a,this.getAttribute("dir")||"ltr",e,t)}}},85466:(e,t,o)=>{var r=o(89229);o(22726);const i=r.iv`
  :host,
  #host-fix {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: initial;
    --_material-text-field-input-line-opacity: initial;
    --_material-text-field-input-line-hover-opacity: initial;
    --_material-text-field-focused-label-opacity: initial;

    /* Button tweaks */
    --_material-button-raised-background-color: initial;
    --_material-button-outline-color: initial;

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: initial;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: initial;

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  [theme~='dark'] {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  a {
    color: inherit;
  }
`;(0,r.hC)("",i,{moduleId:"material-color-light"});const a=r.iv`
  :host,
  #host-fix {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }
`;(0,r.hC)("",a,{moduleId:"material-color-dark"});const n=r.iv`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);
  }
`,s=document.createElement("template");s.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content)},23799:(e,t,o)=>{o(22726);const r=document.createElement("template");r.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'material-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: "\\ea01";\n      --material-icons-arrow-upward: "\\ea02";\n      --material-icons-calendar: "\\ea03";\n      --material-icons-check: "\\ea04";\n      --material-icons-chevron-left: "\\ea05";\n      --material-icons-chevron-right: "\\ea06";\n      --material-icons-clear: "\\ea07";\n      --material-icons-clock: "\\ea08";\n      --material-icons-dropdown: "\\ea09";\n      --material-icons-error: "\\ea0a";\n      --material-icons-eye: "\\ea0b";\n      --material-icons-eye-disabled: "\\ea0c";\n      --material-icons-play: "\\ea0d";\n      --material-icons-reload: "\\ea0e";\n      --material-icons-upload: "\\ea0f";\n    }\n  </style>\n',document.head.appendChild(r.content)},85408:(e,t,o)=>{var r=o(89229);o(85466),o(8542),o(37365);const i=r.iv`
  :host {
    top: 16px;
    right: 16px;
    /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */
    bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);
    left: 16px;
  }

  [part='overlay'] {
    background-color: var(--material-background-color);
    border-radius: 4px;
    box-shadow: var(--material-shadow-elevation-4dp);
    color: var(--material-body-text-color);
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    font-weight: 400;
  }

  [part='content'] {
    padding: 8px 0;
  }

  [part='backdrop'] {
    opacity: 0.2;
    animation: 0.2s vaadin-overlay-backdrop-enter;
    will-change: opacity;
  }

  @keyframes vaadin-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }
`;(0,r.hC)("",i,{moduleId:"material-overlay"})},37365:(e,t,o)=>{var r=o(89229);o(22726);const i=r.iv`
  /* prettier-ignore */
  :host {
    /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */
    --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
  }
`,a=document.createElement("template");a.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(a.content)},8542:(e,t,o)=>{var r=o(89229);o(22726);const i=r.iv`
  :host {
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
`,a=document.createElement("template");a.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(a.content);const n=r.iv`
  body {
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
  :host {
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
`;if((0,r.hC)("",n,{moduleId:"material-typography"}),!window.polymerSkipLoadingFontRoboto){const e="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href=e,document.head.appendChild(t)}},22726:(e,t,o)=>{class r extends HTMLElement{static get version(){return"21.0.2"}}customElements.define("vaadin-material-styles",r)},1335:(e,t,o)=>{o.d(t,{G:()=>d});var r=o(28426),i=o(52521),a=o(87529),n=o(20723),s=o(4358),l=o(59898);class d extends((0,s.T)((0,l.U)(r.H3))){static get template(){return r.dy`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
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

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new n.o(this,(e=>{this._setTemplateFromNodes(e.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{}))}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,o=document.documentElement.clientHeight;t&&o>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",o-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter((e=>e.localName&&"template"===e.localName))[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}render(){console.warn("WARNING: Since Vaadin 21, render() is deprecated. Please use requestContentUpdate() instead."),this.requestContentUpdate()}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),(0,a.T8)(this,(()=>{this.focusTrap&&!this.contains(document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)})),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const o=`__${e}Handler`,r=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",r),delete this[o])};this[o]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof d&&!e.hasAttribute("closing"))).sort(((e,t)=>e.__zIndex-t.__zIndex||0))}get _last(){return this===d.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),d.__attachedInstances.forEach((e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=d.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((e=>{e.parentNode===this.content&&this.content.removeChild(e)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=(0,i.Uv)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const o=e._templateRoot||(e._templateRoot=e.getRootNode());if(o!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let e=Array.from(o.querySelectorAll("style")).reduce(((e,t)=>e+t.textContent),"");if(e=e.replace(/:host/g,":host-nomatch"),e){const t=document.createElement("style");t.textContent=e,this.$.content.shadowRoot.appendChild(t),this._contentNodes.unshift(t)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,o,r){e!==t?this.template=void 0:o!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,o,r,i,a){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const n=this._oldOwner!==o||this._oldModel!==r;this._oldModel=r,this._oldOwner=o;const s=this._oldInstanceProps!==i||this._oldTemplate!==e;this._oldInstanceProps=i,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==a;this._oldOpened=a,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&s?this._stampOverlayTemplate(e,i):t&&(l||d||n)&&a&&this.requestContentUpdate()}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const o=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(o)),(t+=e)>=o.length?t=0:t<0&&(t=o.length-1),o[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&e.matches(':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const o=e,r=this._normalizedTabIndex(o);let i,a=r>0;if(r>=0&&t.push(o),i="slot"===o.localName?o.assignedNodes({flatten:!0}):(o.shadowRoot||o).children,i)for(let e=0;e<i.length;e++)a=this._collectTabbableNodes(i[e],t)||a;return a}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const o=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,o)),i=this._sortByTabIndex(e.slice(o));return this._mergeSortByTabIndex(r,i)}static _mergeSortByTabIndex(e,t){const o=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?o.push(t.shift()):o.push(e.shift());return o.concat(e,t)}static _hasLowerTabOrder(e,t){const o=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return 0===o||0===r?r>o:o>r}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const o=e.ownerDocument;for(;t&&t!==o&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=d.__attachedInstances.filter((e=>e!==this)).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(d.is,d)},89229:(e,t,o)=>{o.d(t,{iv:()=>r.iv,hC:()=>s});o(21384);var r=o(37500),i=o(15392);let a=0;const n={},s=(e,t,o)=>{const s=o&&o.moduleId||"custom-style-module-"+a++;Array.isArray(t)||(t=t?[t]:[]);const l=t.map((e=>{if(!(e instanceof r.c3))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!n[e]){const t=document.createElement("template");t.innerHTML=`<style>${e.toString()}</style>`,n[e]=(0,i.uT)(t)[0]}return n[e].textContent})),d=document.createElement("dom-module");if(e){const t=customElements.get(e);t&&Object.prototype.hasOwnProperty.call(t,"__finalized")&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),d.setAttribute("theme-for",e)}const c=o&&o.include||[];d.innerHTML=`\n    <template>\n      ${c.map((e=>`<style include=${e}></style>`))}\n      ${l.length?`<style>${l.join("\n")}</style>`:""}\n    </template>\n  `,d.register(s)}},4358:(e,t,o)=>{o.d(t,{T:()=>a});var r=o(21384);const i=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"theme"===e&&this._setTheme(o)}},a=e=>class extends(i(e)){static finalize(){super.finalize();const e=this.prototype._template,t=Object.getPrototypeOf(this.prototype)._template;t&&Array.from(t.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e)})),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=r.t.prototype.modules;let o=!1;const i=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const o=0===e.indexOf("vaadin-"),r=0===t.indexOf("vaadin-"),i=["lumo-","material-"],a=i.filter((t=>0===e.indexOf(t))).length>0,n=i.filter((e=>0===t.indexOf(e))).length>0;return o!==r?o?-1:1:a!==n?a?-1:1:0})).forEach((r=>{if(r!==i){const i=t[r].getAttribute("theme-for");i&&i.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(o=!0,this._includeStyle(r,e))}))}})),!o&&t[i]&&this._includeStyle(i,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const o=document.createElement("style");o.setAttribute("include",e),t.content.appendChild(o)}}}}}]);
//# sourceMappingURL=d304e2f7.js.map