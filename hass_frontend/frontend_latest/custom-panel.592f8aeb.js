/*! For license information please see custom-panel.592f8aeb.js.LICENSE.txt */
(()=>{var e,t,o={56646:()=>{"use strict";window.JSCompiler_renameProperty=function(e,t){return e}},42687:(e,t,o)=>{"use strict";o.d(t,{Kk:()=>a,Rq:()=>s,iY:()=>c});o(56646);let r,i,n=/(url\()([^)]*)(\))/g,l=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(e,t){if(e&&l.test(e))return e;if("//"===e)return e;if(void 0===r){r=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",r="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),r)try{return new URL(e,t).href}catch(t){return e}return i||(i=document.implementation.createHTMLDocument("temp"),i.base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=t,i.anchor.href=e,i.anchor.href||e}function s(e,t){return e.replace(n,(function(e,o,r,i){return o+"'"+a(r.replace(/["']/g,""),t)+"'"+i}))}function c(e){return e.substring(0,e.lastIndexOf("/")+1)}},74460:(e,t,o)=>{"use strict";o.d(t,{my:()=>i,FV:()=>n,sM:()=>l,v1:()=>a,f6:()=>s,XN:()=>c,ZN:()=>d,nL:()=>h,a2:()=>p,Hr:()=>u,HY:()=>m,ls:()=>v,z2:()=>b,xj:()=>f,gx:()=>y,ew:()=>g,dJ:()=>w,j8:()=>_,md:()=>$});o(56646);var r=o(42687);const i=!window.ShadyDOM||!window.ShadyDOM.inUse,n=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,i&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let l=window.Polymer&&window.Polymer.rootPath||(0,r.iY)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let s=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let c=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let d=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let h=window.Polymer&&window.Polymer.legacyOptimizations||!1;let p=window.Polymer&&window.Polymer.legacyWarnings||!1;let u=window.Polymer&&window.Polymer.syncInitialRender||!1;let m=window.Polymer&&window.Polymer.legacyUndefined||!1;let v=window.Polymer&&window.Polymer.orderedComputed||!1;let b=!0;const f=function(e){b=e};let y=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let g=window.Polymer&&window.Polymer.fastDomIf||!1;let w=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let _=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let $=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},47181:(e,t,o)=>{"use strict";o.d(t,{B:()=>r});const r=(e,t,o,r)=>{r=r||{},o=null==o?{}:o;const i=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return i.detail=o,e.dispatchEvent(i),i}},37846:()=>{if(/^((?!chrome|android).)*version\/14\.0\s.*safari/i.test(navigator.userAgent)){const e=window.Element.prototype.attachShadow;window.Element.prototype.attachShadow=function(t){return t&&t.delegatesFocus&&delete t.delegatesFocus,e.apply(this,[t])}}},11654:(e,t,o)=>{"use strict";o.d(t,{_l:()=>i,q0:()=>n,Qx:()=>a,e$:()=>s});var r=o(37500);const i={"primary-background-color":"#111111","card-background-color":"#1c1c1c","secondary-background-color":"#202020","primary-text-color":"#e1e1e1","secondary-text-color":"#9b9b9b","disabled-text-color":"#6f6f6f","app-header-text-color":"#e1e1e1","app-header-background-color":"#101e24","switch-unchecked-button-color":"#999999","switch-unchecked-track-color":"#9b9b9b","divider-color":"rgba(225, 225, 225, .12)","mdc-ripple-color":"#AAAAAA","input-idle-line-color":"rgba(255, 255, 255, 0.42)","input-hover-line-color":"rgba(255, 255, 255, 0.87)","input-disabled-line-color":"rgba(255, 255, 255, 0.06)","input-outlined-idle-border-color":"rgba(255, 255, 255, 0.38)","input-outlined-hover-border-color":"rgba(255, 255, 255, 0.87)","input-outlined-disabled-border-color":"rgba(255, 255, 255, 0.06)","input-fill-color":"rgba(255, 255, 255, 0.05)","input-disabled-fill-color":"rgba(255, 255, 255, 0.02)","input-ink-color":"rgba(255, 255, 255, 0.87)","input-label-ink-color":"rgba(255, 255, 255, 0.6)","input-disabled-ink-color":"rgba(255, 255, 255, 0.37)","input-dropdown-icon-color":"rgba(255, 255, 255, 0.54)","codemirror-keyword":"#C792EA","codemirror-operator":"#89DDFF","codemirror-variable":"#f07178","codemirror-variable-2":"#EEFFFF","codemirror-variable-3":"#DECB6B","codemirror-builtin":"#FFCB6B","codemirror-atom":"#F78C6C","codemirror-number":"#FF5370","codemirror-def":"#82AAFF","codemirror-string":"#C3E88D","codemirror-string-2":"#f07178","codemirror-comment":"#545454","codemirror-tag":"#FF5370","codemirror-meta":"#FFCB6B","codemirror-attribute":"#C792EA","codemirror-property":"#C792EA","codemirror-qualifier":"#DECB6B","codemirror-type":"#DECB6B","energy-grid-return-color":"#a280db"},n={"state-icon-error-color":"var(--error-state-color, var(--error-color))","state-unavailable-color":"var(--state-icon-unavailable-color, var(--disabled-text-color))","sidebar-text-color":"var(--primary-text-color)","sidebar-background-color":"var(--card-background-color)","sidebar-selected-text-color":"var(--primary-color)","sidebar-selected-icon-color":"var(--primary-color)","sidebar-icon-color":"rgba(var(--rgb-primary-text-color), 0.6)","switch-checked-color":"var(--primary-color)","switch-checked-button-color":"var(--switch-checked-color, var(--primary-background-color))","switch-checked-track-color":"var(--switch-checked-color, #000000)","switch-unchecked-button-color":"var(--switch-unchecked-color, var(--primary-background-color))","switch-unchecked-track-color":"var(--switch-unchecked-color, #000000)","slider-color":"var(--primary-color)","slider-secondary-color":"var(--light-primary-color)","slider-track-color":"var(--scrollbar-thumb-color)","label-badge-background-color":"var(--card-background-color)","label-badge-text-color":"rgba(var(--rgb-primary-text-color), 0.8)","paper-listbox-background-color":"var(--card-background-color)","paper-item-icon-color":"var(--state-icon-color)","paper-item-icon-active-color":"var(--state-icon-active-color)","table-row-background-color":"var(--primary-background-color)","table-row-alternative-background-color":"var(--secondary-background-color)","paper-slider-knob-color":"var(--slider-color)","paper-slider-knob-start-color":"var(--slider-color)","paper-slider-pin-color":"var(--slider-color)","paper-slider-pin-start-color":"var(--slider-color)","paper-slider-active-color":"var(--slider-color)","paper-slider-secondary-color":"var(--slider-secondary-color)","paper-slider-container-color":"var(--slider-track-color)","data-table-background-color":"var(--card-background-color)","markdown-code-background-color":"var(--primary-background-color)","mdc-theme-primary":"var(--primary-color)","mdc-theme-secondary":"var(--accent-color)","mdc-theme-background":"var(--primary-background-color)","mdc-theme-surface":"var(--card-background-color)","mdc-theme-on-primary":"var(--text-primary-color)","mdc-theme-on-secondary":"var(--text-primary-color)","mdc-theme-on-surface":"var(--primary-text-color)","mdc-theme-text-disabled-on-light":"var(--disabled-text-color)","mdc-theme-text-primary-on-background":"var(--primary-text-color)","mdc-theme-text-secondary-on-background":"var(--secondary-text-color)","mdc-theme-text-hint-on-background":"var(--secondary-text-color)","mdc-theme-text-icon-on-background":"var(--secondary-text-color)","mdc-theme-error":"var(--error-color)","app-header-text-color":"var(--text-primary-color)","app-header-background-color":"var(--primary-color)","mdc-checkbox-unchecked-color":"rgba(var(--rgb-primary-text-color), 0.54)","mdc-checkbox-disabled-color":"var(--disabled-text-color)","mdc-radio-unchecked-color":"rgba(var(--rgb-primary-text-color), 0.54)","mdc-radio-disabled-color":"var(--disabled-text-color)","mdc-tab-text-label-color-default":"var(--primary-text-color)","mdc-button-disabled-ink-color":"var(--disabled-text-color)","mdc-button-outline-color":"var(--divider-color)","mdc-dialog-scroll-divider-color":"var(--divider-color)","mdc-text-field-idle-line-color":"var(--input-idle-line-color)","mdc-text-field-hover-line-color":"var(--input-hover-line-color)","mdc-text-field-disabled-line-color":"var(--input-disabled-line-color)","mdc-text-field-outlined-idle-border-color":"var(--input-outlined-idle-border-color)","mdc-text-field-outlined-hover-border-color":"var(--input-outlined-hover-border-color)","mdc-text-field-outlined-disabled-border-color":"var(--input-outlined-disabled-border-color)","mdc-text-field-fill-color":"var(--input-fill-color)","mdc-text-field-disabled-fill-color":"var(--input-disabled-fill-color)","mdc-text-field-ink-color":"var(--input-ink-color)","mdc-text-field-label-ink-color":"var(--input-label-ink-color)","mdc-text-field-disabled-ink-color":"var(--input-disabled-ink-color)","mdc-select-idle-line-color":"var(--input-idle-line-color)","mdc-select-hover-line-color":"var(--input-hover-line-color)","mdc-select-outlined-idle-border-color":"var(--input-outlined-idle-border-color)","mdc-select-outlined-hover-border-color":"var(--input-outlined-hover-border-color)","mdc-select-outlined-disabled-border-color":"var(--input-outlined-disabled-border-color)","mdc-select-fill-color":"var(--input-fill-color)","mdc-select-disabled-fill-color":"var(--input-disabled-fill-color)","mdc-select-ink-color":"var(--input-ink-color)","mdc-select-label-ink-color":"var(--input-label-ink-color)","mdc-select-disabled-ink-color":"var(--input-disabled-ink-color)","mdc-select-dropdown-icon-color":"var(--input-dropdown-icon-color)","mdc-select-disabled-dropdown-icon-color":"var(--input-disabled-ink-color)","chip-background-color":"rgba(var(--rgb-primary-text-color), 0.15)","material-body-text-color":"var(--primary-text-color)","material-background-color":"var(--card-background-color)","material-secondary-background-color":"var(--secondary-background-color)","material-secondary-text-color":"var(--secondary-text-color)"},l=r.iv`
  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
    outline: none;
  }
`,a=r.iv`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar {
    background-color: var(--app-header-background-color);
    font-weight: 400;
    color: var(--app-header-text-color, white);
  }

  app-toolbar {
    height: var(--header-height);
    border-bottom: var(--app-header-border-bottom);
    box-sizing: border-box;
  }

  app-header div[sticky] {
    height: 48px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
  }

  h1 {
    font-family: var(--paper-font-headline_-_font-family);
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    white-space: var(--paper-font-headline_-_white-space);
    overflow: var(--paper-font-headline_-_overflow);
    text-overflow: var(--paper-font-headline_-_text-overflow);
    font-size: var(--paper-font-headline_-_font-size);
    font-weight: var(--paper-font-headline_-_font-weight);
    line-height: var(--paper-font-headline_-_line-height);
  }

  h2 {
    font-family: var(--paper-font-title_-_font-family);
    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
    white-space: var(--paper-font-title_-_white-space);
    overflow: var(--paper-font-title_-_overflow);
    text-overflow: var(--paper-font-title_-_text-overflow);
    font-size: var(--paper-font-title_-_font-size);
    font-weight: var(--paper-font-title_-_font-weight);
    line-height: var(--paper-font-title_-_line-height);
  }

  h3 {
    font-family: var(--paper-font-subhead_-_font-family);
    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
    white-space: var(--paper-font-subhead_-_white-space);
    overflow: var(--paper-font-subhead_-_overflow);
    text-overflow: var(--paper-font-subhead_-_text-overflow);
    font-size: var(--paper-font-subhead_-_font-size);
    font-weight: var(--paper-font-subhead_-_font-weight);
    line-height: var(--paper-font-subhead_-_line-height);
  }

  a {
    color: var(--primary-color);
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color);
  }

  .warning {
    color: var(--error-color);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }

  ${l}

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--error-color);
  }

  .layout.horizontal,
  .layout.vertical {
    display: flex;
  }
  .layout.inline {
    display: inline-flex;
  }
  .layout.horizontal {
    flex-direction: row;
  }
  .layout.vertical {
    flex-direction: column;
  }
  .layout.wrap {
    flex-wrap: wrap;
  }
  .layout.no-wrap {
    flex-wrap: nowrap;
  }
  .layout.center,
  .layout.center-center {
    align-items: center;
  }
  .layout.bottom {
    align-items: flex-end;
  }
  .layout.center-justified,
  .layout.center-center {
    justify-content: center;
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }
  .layout.justified {
    justify-content: space-between;
  }
`,s=(r.iv`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
  }

  ha-dialog .form {
    padding-bottom: 24px;
    color: var(--primary-text-color);
  }

  a {
    color: var(--primary-color);
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );
      --mdc-dialog-max-width: calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertial-align-dialog: flex-end;
      --ha-dialog-border-radius: 0px;
    }
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  .error {
    color: var(--error-color);
  }
`,r.iv`
  .ha-scrollbar::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  .ha-scrollbar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: var(--scrollbar-thumb-color);
  }

  .ha-scrollbar {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`,r.iv`
  body {
    background-color: var(--primary-background-color);
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`)},15304:(e,t,o)=>{"use strict";var r;o.d(t,{dy:()=>$,Jb:()=>A,Ld:()=>k,sY:()=>S,YP:()=>x});const i=globalThis.trustedTypes,n=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,l=`lit$${(Math.random()+"").slice(9)}$`,a="?"+l,s=`<${a}>`,c=document,d=(e="")=>c.createComment(e),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,u=e=>{var t;return p(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,b=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,y=/'/g,g=/"/g,w=/^(?:script|style|textarea)$/i,_=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),$=_(1),x=_(2),A=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),E=new WeakMap,S=(e,t,o)=>{var r,i;const n=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:t;let l=n._$litPart$;if(void 0===l){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=l=new H(t.insertBefore(d(),e),e,void 0,null!=o?o:{})}return l._$AI(e),l},P=c.createTreeWalker(c,129,null,!1),C=(e,t)=>{const o=e.length-1,r=[];let i,a=2===t?"<svg>":"",c=m;for(let t=0;t<o;t++){const o=e[t];let n,d,h=-1,p=0;for(;p<o.length&&(c.lastIndex=p,d=c.exec(o),null!==d);)p=c.lastIndex,c===m?"!--"===d[1]?c=v:void 0!==d[1]?c=b:void 0!==d[2]?(w.test(d[2])&&(i=RegExp("</"+d[2],"g")),c=f):void 0!==d[3]&&(c=f):c===f?">"===d[0]?(c=null!=i?i:m,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,n=d[1],c=void 0===d[3]?f:'"'===d[3]?g:y):c===g||c===y?c=f:c===v||c===b?c=m:(c=f,i=void 0);const u=c===f&&e[t+1].startsWith("/>")?" ":"";a+=c===m?o+s:h>=0?(r.push(n),o.slice(0,h)+"$lit$"+o.slice(h)+l+u):o+l+(-2===h?(r.push(void 0),t):u)}const d=a+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==n?n.createHTML(d):d,r]};class U{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,s=0;const c=e.length-1,h=this.parts,[p,u]=C(e,t);if(this.el=U.createElement(p,o),P.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=P.nextNode())&&h.length<c;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(l)){const o=u[s++];if(e.push(t),void 0!==o){const e=r.getAttribute(o.toLowerCase()+"$lit$").split(l),t=/([.?@])?(.*)/.exec(o);h.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?M:"?"===t[1]?j:"@"===t[1]?B:N})}else h.push({type:6,index:n})}for(const t of e)r.removeAttribute(t)}if(w.test(r.tagName)){const e=r.textContent.split(l),t=e.length-1;if(t>0){r.textContent=i?i.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],d()),P.nextNode(),h.push({type:2,index:++n});r.append(e[t],d())}}}else if(8===r.nodeType)if(r.data===a)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(l,e+1));)h.push({type:7,index:n}),e+=l.length-1}n++}}static createElement(e,t){const o=c.createElement("template");return o.innerHTML=e,o}}function T(e,t,o=e,r){var i,n,l,a;if(t===A)return t;let s=void 0!==r?null===(i=o._$Cl)||void 0===i?void 0:i[r]:o._$Cu;const c=h(t)?void 0:t._$litDirective$;return(null==s?void 0:s.constructor)!==c&&(null===(n=null==s?void 0:s._$AO)||void 0===n||n.call(s,!1),void 0===c?s=void 0:(s=new c(e),s._$AT(e,o,r)),void 0!==r?(null!==(l=(a=o)._$Cl)&&void 0!==l?l:a._$Cl=[])[r]=s:o._$Cu=s),void 0!==s&&(t=T(e,s._$AS(e,t.values),s,r)),t}class O{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:r}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:c).importNode(o,!0);P.currentNode=i;let n=P.nextNode(),l=0,a=0,s=r[0];for(;void 0!==s;){if(l===s.index){let t;2===s.type?t=new H(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new L(n,this,e)),this.v.push(t),s=r[++a]}l!==(null==s?void 0:s.index)&&(n=P.nextNode(),l++)}return i}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class H{constructor(e,t,o,r){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),h(e)?e===k||null==e||""===e?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==A&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):u(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==k&&h(this._$AH)?this._$AA.nextSibling.data=e:this.S(c.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=U.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(o);else{const e=new O(i,this),t=e.p(this.options);e.m(o),this.S(t),this._$AH=e}}_$AC(e){let t=E.get(e.strings);return void 0===t&&E.set(e.strings,t=new U(e)),t}A(e){p(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const i of e)r===t.length?t.push(o=new H(this.M(d()),this.M(d()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class N{constructor(e,t,o,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,r){const i=this.strings;let n=!1;if(void 0===i)e=T(this,e,t,0),n=!h(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const r=e;let l,a;for(e=i[0],l=0;l<i.length-1;l++)a=T(this,r[o+l],t,l),a===A&&(a=this._$AH[l]),n||(n=!h(a)||a!==this._$AH[l]),a===k?e=k:e!==k&&(e+=(null!=a?a:"")+i[l+1]),this._$AH[l]=a}n&&!r&&this.k(e)}k(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class M extends N{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===k?void 0:e}}const R=i?i.emptyScript:"";class j extends N{constructor(){super(...arguments),this.type=4}k(e){e&&e!==k?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class B extends N{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=T(this,e,t,0))&&void 0!==o?o:k)===A)return;const r=this._$AH,i=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==k&&(r===k||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const z=window.litHtmlPolyfillSupport;null==z||z(U,H),(null!==(r=globalThis.litHtmlVersions)&&void 0!==r?r:globalThis.litHtmlVersions=[]).push("2.1.2")},37500:(e,t,o)=>{"use strict";o.d(t,{oi:()=>_,iv:()=>s,dy:()=>w.dy,YP:()=>w.YP});const r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new Map;class l{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=n.get(this.cssText);return r&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=e=>new l("string"==typeof e?e:e+"",i),s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new l(o,i)},c=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return a(t)})(e):e;var d;const h=window.trustedTypes,p=h?h.emptyScript:"",u=window.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const r=this._$Eh(o,t);void 0!==r&&(this._$Eu.set(r,o),e.push(r))})),e}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,o,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{r?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=b){var r,i;const n=this.constructor._$Eh(e,o);if(void 0!==n&&!0===o.reflect){const l=(null!==(i=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:m.toAttribute)(t,o.type);this._$Ei=e,null==l?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(e,t){var o,r,i;const n=this.constructor,l=n._$Eu.get(e);if(void 0!==l&&this._$Ei!==l){const e=n.getPropertyOptions(l),a=e.converter,s=null!==(i=null!==(r=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:m.fromAttribute;this._$Ei=l,this[l]=s(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let r=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(d=globalThis.reactiveElementVersions)&&void 0!==d?d:globalThis.reactiveElementVersions=[]).push("1.2.1");var y,g,w=o(15304);class _ extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=(0,w.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return w.Jb}}_.finalized=!0,_._$litElement$=!0,null===(y=globalThis.litElementHydrateSupport)||void 0===y||y.call(globalThis,{LitElement:_});const $=globalThis.litElementPolyfillSupport;null==$||$({LitElement:_});(null!==(g=globalThis.litElementVersions)&&void 0!==g?g:globalThis.litElementVersions=[]).push("3.1.2")}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.m=o,i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>({16134:"d6e6b6d6",43835:"eaad59c3",48811:"e095ce0c",82678:"935f20bd",95655:"7729c4b1"}[e]+".js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="home-assistant-frontend:",i.l=(o,r,n,l)=>{if(e[o])e[o].push(r);else{var a,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var h=c[d];if(h.getAttribute("src")==o||h.getAttribute("data-webpack")==t+n){a=h;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+n),a.src=o),e[o]=[r];var p=(t,r)=>{a.onerror=a.onload=null,clearTimeout(u);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(r))),t)return t(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/frontend_latest/",(()=>{var e={28017:0};i.f.j=(t,o)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,i)=>r=e[t]=[o,i]));o.push(r[2]=n);var l=i.p+i.u(t),a=new Error;i.l(l,(o=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",a.name="ChunkLoadError",a.type=n,a.request=l,r[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[l,a,s]=o,c=0;if(l.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(s)s(i)}for(t&&t(o);c<l.length;c++)n=l[c],i.o(e,n)&&e[n]&&e[n][0](),e[l[c]]=0},o=self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(()=>{"use strict";var e=i(74460),t=(i(37846),i(47181));const o=(e,t,o)=>new Promise(((r,i)=>{const n=document.createElement(e);let l="src",a="body";switch(n.onload=()=>r(t),n.onerror=()=>i(t),e){case"script":n.async=!0,o&&(n.type=o);break;case"link":n.type="text/css",n.rel="stylesheet",l="href",a="head"}n[l]=t,document[a].appendChild(n)})),r=e=>o("script",e),n="customElements"in window&&"content"in document.createElement("template"),l="ha-main-window",a=window.name===l?window:parent.name===l?parent:top;Symbol.for("HA focus target");let s;const c=(e,o)=>{const r=(null==o?void 0:o.replace)||!1;var i;s?s.then((()=>c(e,o))):(r?a.history.replaceState(null!==(i=a.history.state)&&void 0!==i&&i.root?{root:!0}:null,"",e):a.history.pushState(null,"",e),(0,t.B)(a,"location-changed",{replace:r}))};var d=i(11654);const h={},p=e=>{const t=(e=>e.html_url?{type:"html",url:e.html_url}:e.module_url&&e.js_url||e.module_url?{type:"module",url:e.module_url}:{type:"js",url:e.js_url})(e);return"js"===t.type?(t.url in h||(h[t.url]=r(t.url)),h[t.url]):"module"===t.type?(i=t.url,o("script",i,"module")):Promise.reject("No valid url found in panel config.");var i};let u,m;function v(e){m&&((e,t)=>{"setProperties"in e?e.setProperties(t):Object.keys(t).forEach((o=>{e[o]=t[o]}))})(m,e)}function b(e,o){const l=document.createElement("style");l.innerHTML="\n  body {\n    margin:0;\n    background-color: var(--primary-background-color, #fafafa);\n    color: var(--primary-text-color, #212121);\n  }\n  @media (prefers-color-scheme: dark) {\n    body {\n      background-color: var(--primary-background-color, #111111);\n      color: var(--primary-text-color, #e1e1e1);\n    }\n  }",document.head.appendChild(l);const a=e.config._panel_custom;let s=Promise.resolve();n||(s=s.then((()=>r("/static/polyfills/webcomponents-bundle.js")))),s.then((()=>p(a))).then((()=>u||Promise.resolve())).then((()=>{m=(e=>{const t="html_url"in e?`ha-panel-${e.name}`:e.name;return document.createElement(t)})(a);m.addEventListener("hass-toggle-menu",(e=>{window.parent.customPanel&&(0,t.B)(window.parent.customPanel,e.type,e.detail)})),window.addEventListener("location-changed",(e=>{window.parent.customPanel&&window.parent.customPanel.navigate(window.location.pathname,e.detail)})),v({panel:e,...o}),document.body.appendChild(m)}),(t=>{let r;console.error(t,e),"hassio"===e.url_path?(Promise.all([i.e(95655),i.e(43835),i.e(16134),i.e(82678)]).then(i.bind(i,82678)),r=document.createElement("supervisor-error-screen")):(Promise.all([i.e(95655),i.e(16134),i.e(48811)]).then(i.bind(i,48811)),r=document.createElement("hass-error-screen"),r.error=`Unable to load the panel source: ${t}.`);const n=document.createElement("style");n.innerHTML=d.e$.cssText,document.body.appendChild(n),r.hass=o.hass,document.body.appendChild(r)})),document.body.addEventListener("click",(e=>{const t=(e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find((e=>"A"===e.tagName));if(!t||t.target||t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;let o=t.href;if(!o||-1!==o.indexOf("mailto:"))return;const r=window.location,i=r.origin||r.protocol+"//"+r.host;return 0===o.indexOf(i)&&(o=o.substr(i.length),"#"!==o)?(e.preventDefault(),o):void 0})(e);t&&c(t)}))}(0,e.xj)(!1),window.loadES5Adapter=()=>(u||(u=r("/static/polyfills/custom-elements-es5-adapter.js").catch()),u),document.addEventListener("DOMContentLoaded",(()=>window.parent.customPanel.registerIframe(b,v)),{once:!0})})()})();
//# sourceMappingURL=custom-panel.592f8aeb.js.map