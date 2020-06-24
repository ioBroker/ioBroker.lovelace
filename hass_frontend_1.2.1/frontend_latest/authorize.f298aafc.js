/*! For license information please see authorize.f298aafc.js.LICENSE */
!function(e){function t(t){for(var r,n,o=t[0],a=t[1],s=0,c=[];s<o.length;s++)n=o[s],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&c.push(i[n][0]),i[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);c.length;)c.shift()()}var r={},i={34:0,0:0,1:0,2:0,3:0,19:0};function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=function(e){return n.p+"chunk."+{23:"e81aef5c2126f48d4156",138:"faf4c0015785ce30ea9e",169:"e371c7fcd230514c159d",189:"6108ae81fef1f18e1a16"}[e]+".js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}i[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/frontend_latest/",n.oe=function(e){throw console.error(e),e};var o=self.webpackJsonp=self.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=a;n(n.s=201)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return w})),r.d(t,"d",(function(){return k.a})),r.d(t,"h",(function(){return k.d})),r.d(t,"g",(function(){return k.c})),r.d(t,"i",(function(){return k.e})),r.d(t,"l",(function(){return k.h})),r.d(t,"j",(function(){return k.f})),r.d(t,"e",(function(){return k.b})),r.d(t,"k",(function(){return k.g})),r.d(t,"f",(function(){return p.g})),r.d(t,"m",(function(){return p.k})),r.d(t,"n",(function(){return S})),r.d(t,"c",(function(){return O})),r.d(t,"a",(function(){return P}));var i=r(16),n=r(6);function o(e,t){const{element:{content:r},parts:i}=e,n=document.createTreeWalker(r,133,null,!1);let o=s(i),a=i[o],l=-1,c=0;const d=[];let p=null;for(;n.nextNode();){l++;const e=n.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(d.push(e),null===p&&(p=e)),null!==p&&c++;void 0!==a&&a.index===l;)a.index=null!==p?-1:a.index-c,o=s(i,o),a=i[o]}d.forEach(e=>e.parentNode.removeChild(e))}const a=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},s=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(Object(n.d)(t))return r}return-1};var l=r(27),c=r(25),d=r(39),p=r(9);const u=(e,t)=>`${e}--${t}`;let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const f=e=>t=>{const r=u(t.type,e);let i=c.a.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},c.a.set(r,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(n.f);if(o=i.keyString.get(a),void 0===o){const r=t.getTemplateElement();h&&window.ShadyCSS.prepareTemplateDom(r,e),o=new n.a(t,r),i.keyString.set(a,o)}return i.stringsArray.set(t.strings,o),o},m=["html","svg"],y=new Set,b=(e,t,r)=>{y.add(e);const i=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:l}=n;if(0===l)return void window.ShadyCSS.prepareTemplateStyles(i,e);const d=document.createElement("style");for(let o=0;o<l;o++){const e=n[o];e.parentNode.removeChild(e),d.textContent+=e.textContent}(e=>{m.forEach(t=>{const r=c.a.get(u(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),o(e,r)})})})(e);const p=i.content;r?function(e,t,r=null){const{element:{content:i},parts:n}=e;if(null==r)return void i.appendChild(t);const o=document.createTreeWalker(i,133,null,!1);let l=s(n),c=0,d=-1;for(;o.nextNode();){d++;for(o.currentNode===r&&(c=a(t),r.parentNode.insertBefore(t,r));-1!==l&&n[l].index===d;){if(c>0){for(;-1!==l;)n[l].index+=c,l=s(n,l);return}l=s(n,l)}}}(r,d,p.firstChild):p.insertBefore(d,p.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const h=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)t.insertBefore(h.cloneNode(!0),t.firstChild);else if(r){p.insertBefore(d,p.firstChild);const e=new Set;e.add(d),o(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},g=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:g};class w extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const i=this._attributeNameForProperty(r,t);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=_){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||_}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=g){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,i=t.converter||v,n="function"==typeof i?i:i.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,i=t.converter;return(i&&i.toAttribute||v.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=_){const i=this.constructor,n=i._attributeNameForProperty(e,r);if(void 0!==n){const e=i._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(e);if(void 0!==i){const e=r.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const i=this.constructor,n=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(r){throw e=!1,this._markUpdated(),r}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}w.finalized=!0;var k=r(93);const x="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol();class C{constructor(e,t){if(t!==E)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(x?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const S=e=>new C(String(e),E),O=(e,...t)=>{const r=t.reduce((t,r,i)=>t+(e=>{if(e instanceof C)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1],e[0]);return new C(r,E)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const A={};class P extends w{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),i=[];r.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?x?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==A&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return A}}P.finalized=!0,P.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=l.a.has(t),a=h&&11===t.nodeType&&!!t.host,s=a&&!y.has(n),c=s?document.createDocumentFragment():t;if(Object(l.b)(e,c,Object.assign({templateFactory:f(n)},r)),s){const e=l.a.get(c);l.a.delete(c);const r=e.value instanceof d.a?e.value.template:void 0;b(n,c,r),Object(i.b)(t,t.firstChild),t.appendChild(c),l.a.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)}},function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"g",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"i",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"a",(function(){return p})),r.d(t,"h",(function(){return u}));r(7);function i(e){return e.indexOf(".")>=0}function n(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function o(e,t){return 0===e.indexOf(t+".")}function a(e,t){return 0===t.indexOf(e+".")}function s(e,t,r){return t+r.slice(e.length)}function l(e,t){return e===t||o(e,t)||a(e,t)}function c(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let i=e[r].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function d(e){return Array.isArray(e)?c(e).split("."):e.toString().split(".")}function p(e,t,r){let i=e,n=d(t);for(let o=0;o<n.length;o++){if(!i)return;i=i[n[o]]}return r&&(r.path=n.join(".")),i}function u(e,t,r){let i=e,n=d(t),o=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(i=i[n[e]],!i)return}i[o]=r}else i[t]=r;return n.join(".")}},function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));r(7),r(10);var i=r(67);r(23),r(21);const n=Element.prototype,o=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector,a=function(e,t){return o.call(e,t)};class s{constructor(e){this.node=e}observeNodes(e){return new i.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(this.node.contains(e))return!0;let t=e,r=e.ownerDocument;for(;t&&t!==r&&t!==this.node;)t=t.parentNode||t.host;return t===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=this.node.assignedSlot;for(;t;)e.push(t),t=t.assignedSlot;return e}importNode(e,t){return(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(e,t)}getEffectiveChildNodes(){return i.a.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),r=[];for(let i,n=0,o=t.length;n<o&&(i=t[n]);n++)i.nodeType===Node.ELEMENT_NODE&&a(i,e)&&r.push(i);return r}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}class l{constructor(e){this.event=e}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}s.prototype.cloneNode,s.prototype.appendChild,s.prototype.insertBefore,s.prototype.removeChild,s.prototype.replaceChild,s.prototype.setAttribute,s.prototype.removeAttribute,s.prototype.querySelector,s.prototype.querySelectorAll,s.prototype.parentNode,s.prototype.firstChild,s.prototype.lastChild,s.prototype.nextSibling,s.prototype.previousSibling,s.prototype.firstElementChild,s.prototype.lastElementChild,s.prototype.nextElementSibling,s.prototype.previousElementSibling,s.prototype.childNodes,s.prototype.children,s.prototype.classList,s.prototype.textContent,s.prototype.innerHTML,function(e,t){for(let r=0;r<t.length;r++){let i=t[r];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(s.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),function(e,t){for(let r=0;r<t.length;r++){let i=t[r];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}(s.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let r=0;r<t.length;r++){let i=t[r];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(s.prototype,["textContent","innerHTML"]);const c=function(e){if(!(e=e||document).__domApi){let t;t=e instanceof Event?new l(e):new s(e),e.__domApi=t}return e.__domApi}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(7);class i{constructor(e){this.value=e.toString()}toString(){return this.value}}function n(e){if(e instanceof i)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}const o=function(e,...t){const r=document.createElement("template");return r.innerHTML=t.reduce((t,r,o)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof i)return n(e);throw new Error("non-template value passed to Polymer's html function: "+e)}(r)+e[o+1],e[0]),r}},function(e,t,r){"use strict";r.d(t,"b",(function(){return n.a})),r.d(t,"c",(function(){return y.a})),r.d(t,"a",(function(){return b}));var i=r(49),n=r(5),o=(r(129),r(7),r(40)),a=r(26),s=r(54),l=r(10);const c=Object(s.a)(Object(a.b)(Object(o.a)(HTMLElement)));customElements.define("dom-bind",class extends c{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),l.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});r(117),r(118);var d=r(30),p=r(8),u=r(57),h=r(38);let f=Object(p.a)(e=>{let t=Object(h.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let r=t.path;if("items"==r){let r=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Object(u.a)(r,i);this.__applySplices(e)}this.__lastItems=r,this.__lastMulti=e}else if("items.splices"==t.path)this.__applySplices(t.value.indexSplices);else{let e=r.slice("items.".length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let r=e[i];t.forEach((e,i)=>{e<r.index||(e>=r.index+r.removed.length?t.set(i,e+r.addedCount-r.removed.length):t.set(i,-1))});for(let e=0;e<r.addedCount;e++){let i=r.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let r=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice("selected",r,1):this.selected=this.selectedItem=null,t.delete(i)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths("items."+t,"selected."+e++)})}else this.__selectedMap.forEach(e=>{this.linkPaths("selected","items."+e),this.linkPaths("selectedItem","items."+e)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((r,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths["items."+e];if(t)return parseInt(t.slice("selected.".length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let r;this.__selectedMap.delete(e),this.multi&&(r=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice("selected",r,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push("selected",t):this.selected=this.selectedItem=t)}}})(d.a);class m extends f{static get is(){return"array-selector"}}customElements.define(m.is,m);r(91),r(130);var y=r(3);const b=Object(i.a)(HTMLElement).prototype},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(89);r(7);const n=function(e){let t;return t="function"==typeof e?e:n.Class(e),customElements.define(t.is,t),t};n.Class=i.a},function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"g",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return p}));const i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${n}`),a="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let c=0,u=-1,h=0;const{strings:f,values:{length:m}}=e;for(;h<m;){const e=s.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let i=0;for(let e=0;e<r;e++)l(t[e].name,a)&&i++;for(;i-- >0;){const t=f[h],r=p.exec(t)[2],i=r.toLowerCase()+a,n=e.getAttribute(i);e.removeAttribute(i);const s=n.split(o);this.parts.push({type:"attribute",index:u,name:r,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,n=t.split(o),s=n.length-1;for(let t=0;t<s;t++){let r,o=n[t];if(""===o)r=d();else{const e=p.exec(o);null!==e&&l(e[2],a)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),r=document.createTextNode(o)}i.insertBefore(r,e),this.parts.push({type:"node",index:++u})}""===n[s]?(i.insertBefore(d(),e),r.push(e)):e.data=n[s],h+=s}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==c||(u++,t.insertBefore(d(),e)),c=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(r.push(e),u--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=n.pop()}for(const i of r)i.parentNode.removeChild(i)}}const l=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},c=e=>-1!==e.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,r){"use strict";window.JSCompiler_renameProperty=function(e,t){return e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(7);let i=0;function n(){}n.prototype.__mixinApplications,n.prototype.__mixinSet;const o=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=i++;return function(i){let n=i.__mixinSet;if(n&&n[r])return i;let o=t,a=o.get(i);a||(a=e(i),o.set(i,a));let s=Object.create(a.__mixinSet||n||null);return s[r]=!0,a.__mixinSet=s,a}}},function(e,t,r){"use strict";r.d(t,"f",(function(){return a.a})),r.d(t,"i",(function(){return s.b})),r.d(t,"j",(function(){return s.c})),r.d(t,"h",(function(){return l.a})),r.d(t,"a",(function(){return i.b})),r.d(t,"b",(function(){return i.e})),r.d(t,"c",(function(){return i.g})),r.d(t,"l",(function(){return c.b})),r.d(t,"d",(function(){return o.b})),r.d(t,"e",(function(){return d.c})),r.d(t,"g",(function(){return p})),r.d(t,"k",(function(){return u}));var i=r(14);const n=new class{handleAttributeExpressions(e,t,r,n){const o=t[0];if("."===o){return new i.f(e,t.slice(1),r).parts}if("@"===o)return[new i.d(e,t.slice(1),n.eventContext)];if("?"===o)return[new i.c(e,t.slice(1),r)];return new i.a(e,t,r).parts}handleTextExpression(e){return new i.e(e)}};var o=r(35),a=r(28),s=r(16),l=r(15),c=(r(27),r(25)),d=(r(39),r(6));"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const p=(e,...t)=>new o.b(e,t,"html",n),u=(e,...t)=>new o.a(e,t,"svg",n)},function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"a",(function(){return d}));r(7);var i=r(17);const n=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(i.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let s=!1;const l=function(e){s=e};let c=!1;let d=!1},function(e,t,r){"use strict";r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}));r(7);let i=0,n=0,o=[],a=0,s=document.createTextNode("");new window.MutationObserver((function(){const e=o.length;for(let r=0;r<e;r++){let e=o[r];if(e)try{e()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,e),n+=e})).observe(s,{characterData:!0});const l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},c={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},d={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},p={run:e=>(s.textContent=a++,o.push(e),i++),cancel(e){const t=e-n;if(t>=0){if(!o[t])throw new Error("invalid async handle: "+e);o[t]=null}}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));const i=(e,t,r,i)=>{i=i||{},r=null==r?{}:r;const n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=r,e.dispatchEvent(n),n}},function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l}));const i=!(window.ShadyDOM&&window.ShadyDOM.inUse);let n,o;function a(e){n=(!e||!e.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?n=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);const l=n},function(e,t,r){"use strict";r.d(t,"h",(function(){return c})),r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u})),r.d(t,"e",(function(){return h})),r.d(t,"c",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return y})),r.d(t,"d",(function(){return v}));var i=r(28),n=r(16),o=r(15),a=r(39),s=r(35),l=r(6);const c=e=>null===e||!("object"==typeof e||"function"==typeof e),d=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class p{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let i=0;i<t;i++){r+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(c(e)||!d(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.a||c(e)&&e===this.value||(this.value=e,Object(i.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const e=this.value;this.value=o.a,e(this)}this.value!==o.a&&this.committer.commit()}}class h{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(l.c)()),e.__insert(this.endNode=Object(l.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}const e=this.__pendingValue;e!==o.a&&(c(e)?e!==this.value&&this.__commitText(e):e instanceof s.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):d(e)?this.__commitIterable(e):e===o.b?(this.value=o.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof a.a&&this.value.template===t)this.value.update(e.values);else{const r=new a.a(t,e.processor,this.options),i=r._clone();r.update(e.values),this.__commitNode(i),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,i=0;for(const n of e)r=t[i],void 0===r&&(r=new h(this.options),t.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(t[i-1])),r.setValue(n),r.commit(),i++;i<t.length&&(t.length=i,this.clear(r&&r.endNode))}clear(e=this.startNode){Object(n.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.a}}class m extends p{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new y(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class y extends u{}let b=!1;(()=>{try{const e={get capture(){return b=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class v{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=g(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const g=e=>e&&(b?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const i={},n={}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o}));const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,r=null,i=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,i),t=r}},o=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}}},function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return c}));r(7);let i,n,o=/(url\()([^)]*)(\))/g,a=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(e,t){if(e&&a.test(e))return e;if(void 0===i){i=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",i="http://a/c%20d"===e.href}catch(r){}}return t||(t=document.baseURI||window.location.href),i?new URL(e,t).href:(n||(n=document.implementation.createHTMLDocument("temp"),n.base=n.createElement("base"),n.head.appendChild(n.base),n.anchor=n.createElement("a"),n.body.appendChild(n.anchor)),n.base.href=t,n.anchor.href=e,n.anchor.href||e)}function l(e,t){return e.replace(o,(function(e,r,i,n){return r+"'"+s(i.replace(/["']/g,""),t)+"'"+n}))}function c(e){return e.substring(0,e.lastIndexOf("/")+1)}},function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const i=e=>{let t=[];function r(r,i){e=i?r:Object.assign(Object.assign({},e),r);let n=t;for(let t=0;t<n.length;t++)n[t](e)}return{get state(){return e},action(t){function i(e){r(e,!1)}return function(){let r=[e];for(let e=0;e<arguments.length;e++)r.push(arguments[e]);let n=t.apply(this,r);if(null!=n)return n instanceof Promise?n.then(i):i(n)}},setState:r,subscribe:e=>(t.push(e),()=>{!function(e){let r=[];for(let i=0;i<t.length;i++)t[i]===e?e=null:r.push(t[i]);t=r}(e)})}},n=(e,t,r,n)=>{if(e[t])return e[t];let o,a=0,s=i();const l=()=>r(e).then(e=>s.setState(e,!0)),c=()=>l().catch(t=>{if(e.socket.readyState==e.socket.OPEN)throw t});return e[t]={get state(){return s.state},refresh:l,subscribe(t){a++,1===a&&(n&&(o=n(e,s)),e.addEventListener("ready",c),c());const r=s.subscribe(t);return void 0!==s.state&&setTimeout(()=>t(s.state),0),()=>{r(),a--,a||(o&&o.then(e=>{e()}),e.removeEventListener("ready",l))}}},e[t]},o=(e,t,r,i,o)=>n(i,e,t,r).subscribe(o)},,function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const i=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,n=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(7),r(8),r(11);class i{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,r){return e instanceof i?e.cancel():e=new i,e.setConfig(t,r),e}}},function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));r(7);const i={},n=/-[a-z]/g,o=/([A-Z])/g;function a(e){return i[e]||(i[e]=e.indexOf("-")<0?e:e.replace(n,e=>e[1].toUpperCase()))}function s(e){return i[e]||(i[e]=e.replace(o,"-$1").toLowerCase())}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));r(7),r(21);let i=[];const n=function(e){i.push(e)};function o(){const e=Boolean(i.length);for(;i.length;)try{i.shift().flush()}catch(t){setTimeout(()=>{throw t})}return e}const a=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=o()}while(e||t)}},,function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var i=r(6);function n(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(i.f);return r=t.keyString.get(n),void 0===r&&(r=new i.a(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const o=new Map},function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(8);function n(e,t,r,i,n){let o;n&&(o="object"==typeof r&&null!==r,o&&(i=e.__dataTemp[t]));let a=i!==r&&(i==i||r==r);return o&&a&&(e.__dataTemp[t]=r),a}const o=Object(i.a)(e=>class extends e{_shouldPropertyChange(e,t,r){return n(this,e,t,r,!0)}}),a=Object(i.a)(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,r){return n(this,e,t,r,this.mutableData)}});o._mutablePropertyChange=n},function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var i=r(16),n=r(14),o=r(25);const a=new WeakMap,s=(e,t,r)=>{let s=a.get(t);void 0===s&&(Object(i.b)(t,t.firstChild),a.set(t,s=new n.e(Object.assign({templateFactory:o.b},r))),s.appendInto(t)),s.setValue(e),s.commit()}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const i=new WeakMap,n=e=>(...t)=>{const r=e(...t);return i.set(r,!0),r},o=e=>"function"==typeof e&&i.has(e)},function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var i=r(20);function n(e,t){for(let r in t)null===r?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function o(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}function a(e){const t=i.b.test(e)||i.c.test(e);return i.b.lastIndex=0,i.c.lastIndex=0,t}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(38);r(3);const n=Object(i.a)(HTMLElement)},,,,function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return g}));r(7);var i=r(40),n=r(26),o=r(10);let a=null;function s(){return a}s.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:s,writable:!0}});const l=Object(i.a)(s),c=Object(n.a)(l);const d=Object(i.a)(class{});class p extends d{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)t.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,r(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,r)}}_showHideChildren(e){let t=this.children;for(let r=0;r<t.length;r++){let i=t[r];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),i.parentNode.replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&e.parentNode.replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,r){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(e,t,r)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const u=Object(n.a)(p);function h(e){let t=e.__dataHost;return t&&t._methodHost||t}function f(e,t,r){let i=r.mutableData?u:p,n=class extends i{};return n.prototype.__templatizeOptions=r,n.prototype._bindTemplate(e),function(e,t,r,i){let n=r.hostProps||{};for(let o in i.instanceProps){delete n[o];let t=i.notifyInstanceProp;t&&e.prototype._addPropertyEffect(o,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:b(o,t)})}if(i.forwardHostProp&&t.__dataHost)for(let o in n)e.prototype._addPropertyEffect(o,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,r){e.__dataHost._setPendingPropertyOrPath("_host_"+t,r[t],!0,!0)}})}(n,e,t,r),n}function m(e,t,r){let i=r.forwardHostProp;if(i){let n=t.templatizeTemplateClass;if(!n){let e=r.mutableData?c:l;n=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let t in o)n.prototype._addPropertyEffect("_host_"+t,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:y(t,i)}),n.prototype._createNotifyingProperty("_host_"+t)}!function(e,t){a=e,Object.setPrototypeOf(e,t.prototype),new t,a=null}(e,n),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function y(e,t){return function(e,r,i){t.call(e.__templatizeOwner,r.substring("_host_".length),i[r])}}function b(e,t){return function(e,r,i){t.call(e.__templatizeOwner,e,r,i[r])}}function v(e,t,r){if(o.f&&!h(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:p)._parseTemplate(e),n=i.templatizeInstanceClass;n||(n=f(e,i,r),i.templatizeInstanceClass=n),m(e,i,r);let a=class extends n{};return a.prototype._methodHost=h(e),a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a,a}function g(e,t){let r;for(;t;)if(r=t.__templatizeInstance){if(r.__dataHost==e)return r;t=r.__dataHost}else t=t.parentNode;return null}},function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var i=r(16),n=r(6);const o=` ${n.f} `;class a{constructor(e,t,r,i){this.strings=e,this.values=t,this.type=r,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let i=0;i<e;i++){const e=this.strings[i],a=e.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===e.indexOf("--\x3e",a+1);const s=n.e.exec(e);t+=null===s?e+(r?o:n.g):e.substr(0,s.index)+s[1]+s[2]+n.b+s[3]+n.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class s extends a{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),Object(i.c)(t,r.firstChild),e}}},function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p}));var i=r(58),n=r(41);const o=window.localStorage||{},a={"zh-cn":"zh-Hans","zh-sg":"zh-Hans","zh-my":"zh-Hans","zh-tw":"zh-Hant","zh-hk":"zh-Hant","zh-mo":"zh-Hant",zh:"zh-Hant"};function s(e){if(e in n.a.translations)return e;const t=e.toLowerCase();return t in a?a[t]:Object.keys(n.a.translations).find(e=>e.toLowerCase()===t)}async function l(e){const t=await Object(i.a)(e),r=t?t.language:null;if(r){const e=s(r);if(e)return e}return null}function c(){let e=null;if(o.selectedLanguage)try{const t=JSON.parse(o.selectedLanguage);if(t&&(e=s(t),e))return e}catch(t){}if(navigator.languages)for(const r of navigator.languages)if(e=s(r),e)return e;return e=s(navigator.language),e||(navigator.language&&navigator.language.includes("-")&&(e=s(navigator.language.split("-")[0]),e)?e:"en")}const d={};async function p(e,t){const r=n.a.translations[t];if(!r){if("en"!==t)return p(e,"en");throw new Error("Language en is not found in metadata")}const i=`${e?e+"/":""}${t}-${r.hash}.json`;return d[i]||(d[i]=async function(e){const t=await fetch("/static/translations/"+e,{credentials:"same-origin"});if(!t.ok)throw new Error(`Fail to fetch translation ${e}: HTTP response status is ${t.status}`);return t.json()}(i).then(e=>({language:t,data:e})).catch(r=>(delete d[i],"en"!==t?p(e,"en"):Promise.reject(r)))),d[i]}p(null,c())},function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"c",(function(){return j})),r.d(t,"d",(function(){return D})),r.d(t,"b",(function(){return B}));r(7);var i=r(11),n=r(21),o=r(10);let a="string"==typeof document.head.style.touchAction,s="__polymerGesturesHandled",l="__polymerGesturesTouchAction",c=["mousedown","mousemove","mouseup","click"],d=[0,1,4,2],p=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function u(e){return c.indexOf(e)>-1}let h=!1;function f(e){if(!u(e)&&"touchend"!==e)return a&&h&&o.b?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){h=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let m=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const y=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},v={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function g(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let r=e.getRootNode();if(e.id){let i=r.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let _=function(e){let t=e.sourceCapabilities;var r;if((!t||t.firesTouchEvents)&&(e[s]={skip:!0},"click"===e.type)){let t=!1,i=e.composedPath&&e.composedPath();if(i)for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)y.push(i[e]);else if(r=i[e],b[r.localName]){let r=g(i[e]);for(let e=0;e<r.length;e++)t=t||y.indexOf(r[e])>-1}if(i[e]===x.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function w(e){let t=m?["click"]:c;for(let r,i=0;i<t.length;i++)r=t[i],e?(y.length=0,document.addEventListener(r,_,!0)):document.removeEventListener(r,_,!0)}function k(e){let t=e.type;if(!u(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!p&&(t=d[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let x={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function E(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function C(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){x.mouse.mouseIgnoreJob||w(!0),x.mouse.target=e.composedPath()[0],x.mouse.mouseIgnoreJob=n.a.debounce(x.mouse.mouseIgnoreJob,i.d.after(2500),(function(){w(),x.mouse.target=null,x.mouse.mouseIgnoreJob=null}))}),!!h&&{passive:!0});const S={},O=[];function A(e){if(e.composedPath){const t=e.composedPath();return t.length>0?t[0]:e.target}return e.target}function P(e){let t,r=e.type,i=e.currentTarget.__polymerGestures;if(!i)return;let n=i[r];if(n){if(!e[s]&&(e[s]={},"touch"===r.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===r&&1===e.touches.length&&(x.touch.id=t.identifier),x.touch.id!==t.identifier)return;a||"touchstart"!==r&&"touchmove"!==r||function(e){let t=e.changedTouches[0],r=e.type;if("touchstart"===r)x.touch.x=t.clientX,x.touch.y=t.clientY,x.touch.scrollDecided=!1;else if("touchmove"===r){if(x.touch.scrollDecided)return;x.touch.scrollDecided=!0;let r=function(e){let t="auto",r=e.composedPath&&e.composedPath();if(r)for(let i,n=0;n<r.length;n++)if(i=r[n],i[l]){t=i[l];break}return t}(e),i=!1,n=Math.abs(x.touch.x-t.clientX),o=Math.abs(x.touch.y-t.clientY);e.cancelable&&("none"===r?i=!0:"pan-x"===r?i=o>n:"pan-y"===r&&(i=n>o)),i?e.preventDefault():N("track")}}(e)}if(t=e[s],!t.skip){for(let r,i=0;i<O.length;i++)r=O[i],n[r.name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(let i,o=0;o<O.length;o++)i=O[o],n[i.name]&&!t[i.name]&&(t[i.name]=!0,i[r](e))}}}function T(e,t,r){return!!S[t]&&(function(e,t,r){let i=S[t],n=i.deps,o=i.name,a=e.__polymerGestures;a||(e.__polymerGestures=a={});for(let s,l,c=0;c<n.length;c++)s=n[c],m&&u(s)&&"click"!==s||(l=a[s],l||(a[s]=l={_count:0}),0===l._count&&e.addEventListener(s,P,f(s)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,r),i.touchAction&&D(e,i.touchAction)}(e,t,r),!0)}function j(e,t,r){return!!S[t]&&(function(e,t,r){let i=S[t],n=i.deps,o=i.name,a=e.__polymerGestures;if(a)for(let s,l,c=0;c<n.length;c++)s=n[c],l=a[s],l&&l[o]&&(l[o]=(l[o]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(s,P,f(s)));e.removeEventListener(t,r)}(e,t,r),!0)}function I(e){O.push(e);for(let t=0;t<e.emits.length;t++)S[e.emits[t]]=e}function D(e,t){a&&e instanceof HTMLElement&&i.c.run(()=>{e.style.touchAction=t}),e[l]=t}function z(e,t,r){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,e.dispatchEvent(i),i.defaultPrevented){let e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function N(e){let t=function(e){for(let t,r=0;r<O.length;r++){t=O[r];for(let r,i=0;i<t.emits.length;i++)if(r=t.emits[i],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function R(e,t,r,i){t&&z(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:function(e){return N(e)}})}function F(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),n=Math.abs(e.y-r);return i>=5||n>=5}function L(e,t,r){if(!t)return;let i,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],a=o.x-e.x,s=o.y-e.y,l=0;n&&(i=o.x-n.x,l=o.y-n.y),z(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:a,dy:s,ddx:i,ddy:l,sourceEvent:r,hover:function(){return function(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(r=i)}return r}(r.clientX,r.clientY)}})}function M(e,t,r){let i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=A(r||t);!o||v[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=A(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(t))&&(e.prevent||z(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}I({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){C(this.info)},mousedown:function(e){if(!k(e))return;let t=A(e),r=this;E(this.info,(function(e){k(e)||(R("up",t,e),C(r.info))}),(function(e){k(e)&&R("up",t,e),C(r.info)})),R("down",t,e)},touchstart:function(e){R("down",A(e),e.changedTouches[0],e)},touchend:function(e){R("up",A(e),e.changedTouches[0],e)}}),I({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,C(this.info)},mousedown:function(e){if(!k(e))return;let t=A(e),r=this,i=function(e){let i=e.clientX,n=e.clientY;F(r.info,i,n)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&N("tap"),r.info.addMove({x:i,y:n}),k(e)||(r.info.state="end",C(r.info)),t&&L(r.info,t,e),r.info.started=!0)};E(this.info,i,(function(e){r.info.started&&i(e),C(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=A(e),r=e.changedTouches[0],i=r.clientX,n=r.clientY;F(this.info,i,n)&&("start"===this.info.state&&N("tap"),this.info.addMove({x:i,y:n}),L(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=A(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),L(this.info,t,r))}}),I({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){k(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){k(e)&&M(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){M(this.info,e.changedTouches[0],e)}});const B=A},function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));r(7);var i=r(10),n=r(8),o=r(48),a=r(17),s=r(45),l=r(40),c=r(56);const d=Object(n.a)(e=>{const t=Object(c.a)(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=function(e){const t={};for(let r in e){const i=e[r];t[r]="function"==typeof i?{type:i}:i}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){const e=this._properties;return e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),p=Object(n.a)(e=>{const t=d(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return"3.0.5"}static _finalizeClass(){var e;super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&(e=this.prototype,u.push(e));const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties);let i=this.template;i&&("string"==typeof i?(console.error("template getter must return HTMLTemplateElement"),i=null):i=i.cloneNode(!0)),this.prototype._template=i}static createProperties(e){for(let o in e)t=this.prototype,r=o,i=e[o],n=e,i.computed&&(i.readOnly=!0),i.computed&&!t._hasReadOnlyEffect(r)&&t._createComputedProperty(r,i.computed,n),i.readOnly&&!t._hasReadOnlyEffect(r)&&t._createReadOnlyProperty(r,!i.computed),i.reflectToAttribute&&!t._hasReflectEffect(r)&&t._createReflectedProperty(r),i.notify&&!t._hasNotifyEffect(r)&&t._createNotifyingProperty(r),i.observer&&t._createPropertyObserver(r,i.observer,n[i.observer]),t._addPropertyToAttributeMap(r);var t,r,i,n}static createObservers(e,t){const r=this.prototype;for(let i=0;i<e.length;i++)r._createMethodObserver(e[i],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!i.f||i.a)&&(t=s.a.import(e,"template"),i.f&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Object(a.a)(e.url);else{const e=s.a.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=i.c,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let i=t[r];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return Object(a.b)(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;!function(e,t,r,i){const n=t.content.querySelectorAll("style"),a=Object(o.c)(t),s=Object(o.b)(r),l=t.content.firstElementChild;for(let o=0;o<s.length;o++){let r=s[o];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,l)}let c=0;for(let o=0;o<a.length;o++){let t=a[o],r=n[c];r!==t?(t=t.cloneNode(!0),r.parentNode.insertBefore(t,r)):c++,t.textContent=e._processStyleText(t.textContent,i)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r)}(this,t,e,r?Object(a.c)(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){if(this.attachShadow)return e?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(a.c)(this.importPath)),Object(a.c)(e,t)}static _parseTemplateContent(e,t,r){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,r)}}});const u=[]},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(16),n=r(6);class o{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const r of this.__parts)void 0!==r&&r.commit()}_clone(){const e=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a,s=0,l=0,c=o.nextNode();for(;s<r.length;)if(a=r[s],Object(n.d)(a)){for(;l<a.index;)l++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return i.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return V}));r(7);var i=r(8),n=r(1),o=r(22),a=r(55);const s={"dom-if":!0,"dom-repeat":!0};function l(e){let t=e.getAttribute("is");if(t&&s[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;)e.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return e}function c(e,t){let r=t.parentInfo&&c(e,t.parentInfo);if(!r)return e;for(let i=r.firstChild,n=0;i;i=i.nextSibling)if(t.parentIndex===n++)return i}function d(e,t,r,i){i.id&&(t[i.id]=r)}function p(e,t,r){if(r.events&&r.events.length)for(let i,n=0,o=r.events;n<o.length&&(i=o[n]);n++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function u(e,t,r){r.templateInfo&&(t._templateInfo=r.templateInfo)}const h=Object(i.a)(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let i,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(n,t,r)||i,n.firstChild&&(i=this._parseTemplateChildNodes(n,t,r)||i),n.hasAttributes&&n.hasAttributes()&&(i=this._parseTemplateNodeAttributes(n,t,r)||i),i}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let i,n=e.firstChild,o=0;n;n=i){if("template"==n.localName&&(n=l(n)),i=n.nextSibling,n.nodeType===Node.TEXT_NODE){let r=i;for(;r&&r.nodeType===Node.TEXT_NODE;)n.textContent+=r.textContent,i=r.nextSibling,e.removeChild(r),r=i;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let a={parentIndex:o,parentInfo:r};this._parseTemplateNode(n,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),n.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,r){let i=this._parseTemplate(e,t);return(i.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),r.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,r){let i=!1,n=Array.from(e.attributes);for(let o,a=n.length-1;o=n[a];a--)i=this._parseTemplateNodeAttribute(e,t,r,o.name,o.value)||i;return i}static _parseTemplateNodeAttribute(e,t,r,i,n){return"on-"===i.slice(0,3)?(e.removeAttribute(i),r.events=r.events||[],r.events.push({name:i.slice(3),value:n}),!0):"id"===i&&(r.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),r=t.nodeInfoList,i=t.content||e.content,n=document.importNode(i,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let o=n.nodeList=new Array(r.length);n.$={};for(let a,s=0,l=r.length;s<l&&(a=r[s]);s++){let e=o[s]=c(n,a);d(0,n.$,e,a),u(0,e,a),p(this,e,a)}return n=n,n}_addMethodEventListenerToNode(e,t,r,i){let n=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(i=i||e,0,r);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}});var f=r(10);let m=0;const y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},b=/[A-Z]/;let v;function g(e,t){let r=e[t];if(r){if(!e.hasOwnProperty(t)){r=e[t]=Object.create(e[t]);for(let e in r){let t=r[e],i=r[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}}else r=e[t]={};return r}function _(e,t,r,i,n,o){if(t){let a=!1,s=m++;for(let l in r)w(e,t,s,l,r,i,n,o)&&(a=!0);return a}return!1}function w(e,t,r,i,o,a,s,l){let c=!1,d=t[s?Object(n.g)(i):i];if(d)for(let n,p=0,u=d.length;p<u&&(n=d[p]);p++)n.info&&n.info.lastRun===r||s&&!k(i,n.trigger)||(n.info&&(n.info.lastRun=r),n.fn(e,i,o,a,n.info,s,l),c=!0);return c}function k(e,t){if(t){let r=t.name;return r==e||t.structured&&Object(n.b)(r,e)||t.wildcard&&Object(n.c)(r,e)}return!0}function x(e,t,r,i,n){let o="string"==typeof n.method?e[n.method]:n.method,a=n.property;o?o.call(e,e.__data[a],i[a]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function E(e,t,r){let i=Object(n.g)(t);if(i!==t){return C(e,Object(o.a)(i)+"-changed",r[t],t),!0}return!1}function C(e,t,r,i){let n={value:r,queueProperty:!0};i&&(n.path=i),e.dispatchEvent(new CustomEvent(t,{detail:n}))}function S(e,t,r,i,o,a){let s=(a?Object(n.g)(t):t)!=t?t:null,l=s?Object(n.a)(e,s):e.__data[t];s&&void 0===l&&(l=r[t]),C(e,o.eventName,l,s)}function O(e,t,r,i,n){let o=e.__data[t];f.d&&(o=Object(f.d)(o,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,o)}function A(e,t,r,i,n){let o=N(e,t,r,i,n),a=n.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,o,!0):e[a]=o}function P(e,t,r,i,n,a,s){r.bindings=r.bindings||[];let l={kind:i,target:n,parts:a,literal:s,isCompound:1!==a.length};if(r.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){let{event:e,negate:t}=l.parts[0];l.listenerEvent=e||Object(o.a)(n)+"-changed",l.listenerNegate=t}let c=t.nodeInfoList.length;for(let o=0;o<l.parts.length;o++){let r=l.parts[o];r.compoundIndex=o,T(e,t,l,r,c)}}function T(e,t,r,i,n){if(!i.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,a={index:n,binding:r,part:i,evaluator:e};for(let r=0;r<o.length;r++){let i=o[r];"string"==typeof i&&(i=B(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:j,info:a,trigger:i})}}}function j(e,t,r,i,o,a,s){let l=s[o.index],c=o.binding,d=o.part;if(a&&d.source&&t.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let i=r[t];t=Object(n.i)(d.source,c.target,t),l._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,r,i,n){n=function(e,t,r,i){if(r.isCompound){let n=e.__dataCompoundStorage[r.target];n[i.compoundIndex]=t,t=n.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,r,i),f.d&&(n=Object(f.d)(n,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,n,r.target);else{let i=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[y.READ_ONLY]&&t[y.READ_ONLY][i]||t._setPendingProperty(i,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,n)}}(e,l,c,d,o.evaluator._evaluateBinding(e,d,t,r,i,a))}}function I(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,n=new Array(i.length);for(let e=0;e<i.length;e++)n[e]=i[e].literal;let o=t.target;r[o]=n,t.literal&&"property"==t.kind&&(e[o]=t.literal)}}function D(e,t,r){if(r.listenerEvent){let i=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,i,o){let a,s=e.detail,l=s&&s.path;l?(i=Object(n.i)(r,i,l),a=s&&s.value):a=e.currentTarget[r],a=o?!a:a,t[y.READ_ONLY]&&t[y.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,a,!0,Boolean(l))||s&&s.queueProperty||t._invalidateProperties()}(e,t,r.target,i.source,i.negate)}))}}function z(e,t,r,i,n,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:o};for(let s,l=0;l<t.args.length&&(s=t.args[l]);l++)s.literal||e._addPropertyEffect(s.rootProperty,r,{fn:i,info:a,trigger:s});o&&e._addPropertyEffect(t.methodName,r,{fn:i,info:a})}function N(e,t,r,i,n){let o=e._methodHost||e,a=o[n.methodName];if(a){let i=e._marshalArgs(n.args,t,r);return a.apply(o,i)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const R=[],F=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function L(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function M(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:R};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=B(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function B(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=Object(n.g)(t),r.structured=Object(n.d)(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function $(e,t,r,i){let n=r+".splices";e.notifyPath(n,{indexSplices:i}),e.notifyPath(r+".length",t.length),e.__data[n]={indexSplices:null}}function H(e,t,r,i,n,o){$(e,t,r,[{index:i,addedCount:n,removed:o,object:t,type:"splice"}])}const V=Object(i.a)(e=>{const t=h(Object(a.a)(e));class r extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return y}_initializeProperties(){super._initializeProperties(),U.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[y.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==y.READ_ONLY);let i=g(this,t)[e];i||(i=this[t][e]=[]),i.push(r)}_removePropertyEffect(e,t,r){let i=g(this,t)[e],n=i.indexOf(r);n>=0&&i.splice(n,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,y.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,y.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,y.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,y.COMPUTE)}_setPendingPropertyOrPath(e,t,r,i){if(i||Object(n.g)(Array.isArray(e)?e[0]:e)!==e){if(!i){let r=Object(n.a)(this,e);if(!(e=Object(n.h)(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let i=e.__dataLinkedPaths;if(i){let o;for(let a in i){let s=i[a];Object(n.c)(a,t)?(o=Object(n.i)(a,s,t),e._setPendingPropertyOrPath(o,r,!0,!0)):Object(n.c)(s,t)&&(o=Object(n.i)(s,a,t),e._setPendingPropertyOrPath(o,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||(e[t]=r)}_setPendingProperty(e,t,r){let i=this.__dataHasPaths&&Object(n.d)(e),o=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,o[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[y.NOTIFY]&&this[y.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[y.READ_ONLY]&&this[y.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,r,i){let n=e[y.COMPUTE];if(n){let o=t;for(;_(e,n,o,r,i);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,r,i);let n=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,r,i),this._flushClients(),_(this,this[y.REFLECT],t,r,i),_(this,this[y.OBSERVE],t,r,i),n&&function(e,t,r,i,n){let o,a,s=e[y.NOTIFY],l=m++;for(let c in t)t[c]&&(s&&w(e,s,l,c,r,i,n)||n&&E(e,c,r))&&(o=!0);o&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,n,t,r,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[y.PROPAGATE]&&_(this,this[y.PROPAGATE],e,t,r);let i=this.__templateInfo;for(;i;)_(this,i.propertyEffects,e,t,r,i.nodeList),i=i.nextTemplateInfo}linkPaths(e,t){e=Object(n.f)(e),t=Object(n.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(n.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};$(this,Object(n.a)(this,e,r),r.path,t)}get(e,t){return Object(n.a)(t||this,e)}set(e,t,r){r?Object(n.h)(r,e,t):this[y.READ_ONLY]&&this[y.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let r={path:""},i=Object(n.a)(this,e,r),o=i.length,a=i.push(...t);return t.length&&H(this,i,r.path,o,t.length,[]),a}pop(e){let t={path:""},r=Object(n.a)(this,e,t),i=Boolean(r.length),o=r.pop();return i&&H(this,r,t.path,r.length,0,[o]),o}splice(e,t,r,...i){let o,a={path:""},s=Object(n.a)(this,e,a);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),o=2===arguments.length?s.splice(t):s.splice(t,r,...i),(i.length||o.length)&&H(this,s,a.path,t,i.length,o),o}shift(e){let t={path:""},r=Object(n.a)(this,e,t),i=Boolean(r.length),o=r.shift();return i&&H(this,r,t.path,0,0,[o]),o}unshift(e,...t){let r={path:""},i=Object(n.a)(this,e,r),o=i.unshift(...t);return t.length&&H(this,i,r.path,0,t.length,[]),o}notifyPath(e,t){let r;if(1==arguments.length){let i={path:""};t=Object(n.a)(this,e,i),r=i.path}else r=Array.isArray(e)?Object(n.f)(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,y.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let i={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,y.OBSERVE,{fn:x,info:i,trigger:{name:e}}),r&&this._addPropertyEffect(t,y.OBSERVE,{fn:x,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let r=M(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");z(this,r,y.OBSERVE,N,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,y.NOTIFY,{fn:S,info:{eventName:Object(o.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,y.REFLECT,{fn:O,info:{attrName:t}})}_createComputedProperty(e,t,r){let i=M(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");z(this,i,y.COMPUTE,A,e,r)}_marshalArgs(e,t,r){const i=this.__data;let o=[];for(let a=0,s=e.length;a<s;a++){let s,l=e[a],c=l.name;if(l.literal?s=l.value:l.structured?(s=Object(n.a)(i,c),void 0===s&&(s=r[c])):s=i[c],l.wildcard){let e=0===c.indexOf(t+"."),i=0===t.indexOf(c)&&!e;o[a]={path:i?t:c,value:i?r[t]:s,base:s}}else o[a]=s}return o}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),i=this.__templateInfo==r;if(!i)for(let n in r.propertyEffects)this._createPropertyAccessor(n);if(t&&(r=Object.create(r),r.wasPreBound=i,!i&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=r,r.previousTemplateInfo=e,r}return this.__templateInfo=r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(r)}_stampTemplate(e){U.beginHosting(this);let t=super._stampTemplate(e);U.endHosting(this);let r=this._bindTemplate(e,!0);if(r.nodeList=t.nodeList,!r.wasPreBound){let e=r.childNodes=[];for(let r=t.firstChild;r;r=r.nextSibling)e.push(r)}return t.templateInfo=r,function(e,t){let{nodeList:r,nodeInfoList:i}=t;if(i.length)for(let n=0;n<i.length;n++){let t=i[n],o=r[n],a=t.bindings;if(a)for(let r=0;r<a.length;r++){let t=a[r];I(o,t),D(o,e,t)}o.__dataHost=e}}(this,r),this.__dataReady&&_(this,r.propertyEffects,this.__data,null,!1,r.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let r=t.childNodes;for(let i=0;i<r.length;i++){let e=r[i];e.parentNode.removeChild(e)}}static _parseTemplateNode(e,t,r){let i=super._parseTemplateNode(e,t,r);if(e.nodeType===Node.TEXT_NODE){let n=this._parseBindings(e.textContent,t);n&&(e.textContent=L(n)||" ",P(this,t,r,"text","textContent",n),i=!0)}return i}static _parseTemplateNodeAttribute(e,t,r,i,n){let a=this._parseBindings(n,t);if(a){let n=i,s="property";b.test(i)?s="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),s="attribute");let l=L(a);return l&&"attribute"==s&&e.setAttribute(i,l),"input"===e.localName&&"value"===n&&e.setAttribute(n,""),e.removeAttribute(n),"property"===s&&(i=Object(o.b)(i)),P(this,t,r,s,i,a,l),!0}return super._parseTemplateNodeAttribute(e,t,r,i,n)}static _parseTemplateNestedTemplate(e,t,r){let i=super._parseTemplateNestedTemplate(e,t,r),n=r.templateInfo.hostProps;for(let o in n){P(this,t,r,"property","_host_"+o,[{mode:"{",source:o,dependencies:[o]}])}return i}static _parseBindings(e,t){let r,i=[],n=0;for(;null!==(r=F.exec(e));){r.index>n&&i.push({literal:e.slice(n,r.index)});let o=r[1][0],a=Boolean(r[2]),s=r[3].trim(),l=!1,c="",d=-1;"{"==o&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);let p=M(s),u=[];if(p){let{args:e,methodName:r}=p;for(let t=0;t<e.length;t++){let r=e[t];r.literal||u.push(r)}let i=t.dynamicFns;(i&&i[r]||p.static)&&(u.push(r),p.dynamicFn=!0)}else u.push(s);i.push({source:s,mode:o,negate:a,customEvent:l,signature:p,dependencies:u,event:c}),n=F.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,r,i,o,a){let s;return s=t.signature?N(e,r,i,0,t.signature):r!=t.source?Object(n.a)(e,t.source):a&&Object(n.d)(r)?Object(n.a)(e,r):e.__data[r],t.negate&&(s=!s),s}}return v=r,r});const U=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(96);const n=i},function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));r(4);var i={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},n={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},a=/[a-z0-9*]/,s=/U\+/,l=/^arrow/,c=/^space(bar)?/,d=/^escape$/;function p(e,t){var r="";if(e){var i=e.toLowerCase();" "===i||c.test(i)?r="space":d.test(i)?r="esc":1==i.length?t&&!a.test(i)||(r=i):r=l.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return r}function u(e,t){return e.key?p(e.key,t):e.detail&&e.detail.key?p(e.detail.key,t):(r=e.keyIdentifier,o="",r&&(r in i?o=i[r]:s.test(r)?(r=parseInt(r.replace("U+","0x"),16),o=String.fromCharCode(r).toLowerCase()):o=r.toLowerCase()),o||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):n[e]),t}(e.keyCode)||"");var r,o}function h(e,t){return u(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function f(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var r=t.split(":"),i=r[0],n=r[1];return i in o?(e[o[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const m={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var r=f(t),i=0;i<r.length;++i)if(h(r[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var r=e[0].hasModifiers;return r===t[0].hasModifiers?0:r?-1:1}))},_addKeyBinding:function(e,t){f(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],r=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,r]),this.keyEventTarget.addEventListener(e,r)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,r,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],r=e[1],i=e[2],t.removeEventListener(r,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var r=0;r<e.length;r++){var i=e[r][0],n=e[r][1];if(h(i,t)&&(this._triggerKeyHandler(i,n,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,r){var i=Object.create(e);i.keyboardEvent=r;var n=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,n),n.defaultPrevented&&r.preventDefault()}}},,function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(4),r(2);const i={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(7);var i=r(17),n=r(10);let o={},a={};function s(e,t){o[e]=a[e.toLowerCase()]=t}function l(e){return o[e]||a[e.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let r=l(e);return r&&t?r.querySelector(t):r}return null}attributeChangedCallback(e,t,r,i){t!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(i.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(i.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(n.f&&void 0!==l(e))throw s(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,s(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}c.prototype.modules=o,customElements.define("dom-module",c)},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(12);const n=(e,t)=>Object(i.a)(e,"hass-notification",t)},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"d",(function(){return s}));var i=r(18);const n=async(e,t)=>(await e.sendMessagePromise({type:"frontend/get_user_data",key:t})).value,o=async(e,t,r)=>e.sendMessagePromise({type:"frontend/set_user_data",key:t,value:r}),a=(e,t)=>((e,t,r,n,o)=>{const a=r+"-optimistic",s=Object(i.b)(t,r,n,async(e,r)=>{const i=o?o(t,r):void 0;return t[a]=r,()=>{i&&i.then(e=>e()),t[a]=void 0}});return Object.assign({},s,{async save(r){const i=t[a];let n;i&&(n=i.state,i.setState(r,!0));try{return await e(t,r)}catch(o){throw i&&i.setState(n,!0),o}}})})((r,i)=>o(e,t,i),e,"_frontendUserData-"+t,()=>n(e,t)),s=(e,t,r)=>a(e,t).subscribe(r)},function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return u}));var i=r(45),n=r(17);function o(e){return i.a.import(e)}function a(e){let t=e.body?e.body:e;const r=Object(n.b)(t.textContent,e.baseURI),i=document.createElement("style");return i.textContent=r,i}function s(e){const t=e.trim().split(/\s+/),r=[];for(let i=0;i<t.length;i++)r.push(...l(t[i]));return r}function l(e){const t=o(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...p(t));const r=t.querySelector("template");r&&e.push(...c(r,t.assetpath)),t._styles=e}return t._styles}function c(e,t){if(!e._styles){const r=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let o=i[e],a=o.getAttribute("include");a&&r.push(...s(a).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(o.textContent=Object(n.b)(o.textContent,t)),r.push(o)}e._styles=r}return e._styles}function d(e){let t=o(e);return t?p(t):[]}function p(e){const t=[],r=e.querySelectorAll("link[rel=import][type~=css]");for(let i=0;i<r.length;i++){let e=r[i];if(e.import){const r=e.import,i=e.hasAttribute("shady-unscoped");if(i&&!r._unscopedStyle){const e=a(r);e.setAttribute("shady-unscoped",""),r._unscopedStyle=e}else r._style||(r._style=a(r));t.push(i?r._unscopedStyle:r._style)}}return t}function u(e){let t=e.trim().split(/\s+/),r="";for(let i=0;i<t.length;i++)r+=h(t[i]);return r}function h(e){let t=o(e);if(t&&void 0===t._cssText){let e=f(t),r=t.querySelector("template");r&&(e+=function(e,t){let r="";const i=c(e,t);for(let n=0;n<i.length;n++){let e=i[n];e.parentNode&&e.parentNode.removeChild(e),r+=e.textContent}return r}(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function f(e){let t="",r=p(e);for(let i=0;i<r.length;i++)t+=r[i].textContent;return t}},function(e,t,r){"use strict";r.d(t,"a",(function(){return le}));var i=r(13);class n{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(e){return function e(t,r){let i=r.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;i=r.substring(e,t.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(d.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=t.parsedSelector=t.selector=i.trim();t.atRule=0===n.indexOf(h),t.atRule?0===n.indexOf(u)?t.type=s.MEDIA_RULE:n.match(d.keyframesRule)&&(t.type=s.KEYFRAMES_RULE,t.keyframesName=t.selector.split(d.multipleSpaces).pop()):0===n.indexOf(p)?t.type=s.MIXIN_RULE:t.type=s.STYLE_RULE}let n=t.rules;if(n)for(let o,a=0,s=n.length;a<s&&(o=n[a]);a++)e(o,r);return t}(function(e){let t=new n;t.start=0,t.end=e.length;let r=t;for(let i=0,o=e.length;i<o;i++)if(e[i]===l){r.rules||(r.rules=[]);let e=r,t=e.rules[e.rules.length-1]||null;r=new n,r.start=i+1,r.parent=e,r.previous=t,e.rules.push(r)}else e[i]===c&&(r.end=i+1,r=r.parent||t);return t}(e=e.replace(d.comments,"").replace(d.port,"")),e)}function a(e,t,r=""){let i="";if(e.cssText||e.rules){let r=e.rules;if(r&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(p)}(r))for(let e,n=0,o=r.length;n<o&&(e=r[n]);n++)i=a(e,t,i);else i=t?e.cssText:function(e){return function(e){return e.replace(d.mixinApply,"").replace(d.varApply,"")}(e=function(e){return e.replace(d.customProp,"").replace(d.mixinProp,"")}(e))}(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(r+=e.selector+" "+l+"\n"),r+=i,e.selector&&(r+=c+"\n\n")),r}const s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},p="--",u="@media",h="@";var f=r(20);const m=new Set;function y(e){const t=e.textContent;if(!m.has(t)){m.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function b(e){return e.hasAttribute("shady-unscoped")}function v(e,t){return e?("string"==typeof e&&(e=o(e)),t&&_(e,t),a(e,i.c)):""}function g(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=o(e.textContent)),e.__cssRules||null}function _(e,t,r,i){if(!e)return;let n=!1,o=e.type;if(i&&o===s.MEDIA_RULE){let t=e.selector.match(f.a);t&&(window.matchMedia(t[1]).matches||(n=!0))}o===s.STYLE_RULE?t(e):r&&o===s.KEYFRAMES_RULE?r(e):o===s.MIXIN_RULE&&(n=!0);let a=e.rules;if(a&&!n)for(let s,l=0,c=a.length;l<c&&(s=a[l]);l++)_(s,t,r,i)}function w(e,t){let r=0;for(let i=t,n=e.length;i<n;i++)if("("===e[i])r++;else if(")"===e[i]&&0==--r)return i;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function k(e){if(void 0!==i.a)return i.a;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function x(e){return""!==k(e)}var E=r(29);const C=/;\s*/m,S=/^\s*(initial)|(inherit)\s*$/,O=/\s*!important/;class A{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let P=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new A}detectMixin(e){return Object(E.a)(e)}gatherStyles(e){const t=function(e){const t=[],r=e.querySelectorAll("style");for(let n=0;n<r.length;n++){const e=r[n];b(e)?i.d||(y(e),e.parentNode.removeChild(e)):(t.push(e.textContent),e.parentNode.removeChild(e))}return t.join("").trim()}(e.content);if(t){const r=document.createElement("style");return r.textContent=t,e.content.insertBefore(r,e.content.firstChild),r}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const r=e._gatheredStyle;return r?this.transformStyle(r,t):null}transformStyle(e,t=""){let r=g(e);return this.transformRules(r,t),e.textContent=v(r),r}transformCustomStyle(e){let t=g(e);return _(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=v(t),t}transformRules(e,t){this._currentElement=t,_(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(f.c,(e,r,i,n)=>this._produceCssProperties(e,r,i,n,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const r={};let i=!1;return _(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(r,this._cssTextToMap(t.parsedCssText))}),r}_consumeCssProperties(e,t){let r=null;for(;r=f.b.exec(e);){let i=r[0],n=r[1],o=r.index,a=o+i.indexOf("@apply"),s=o+i.length,l=e.slice(0,a),c=e.slice(s),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let p=this._atApplyToCssProperties(n,d);e=`${l}${p}${c}`,f.b.lastIndex=o+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(C,"");let r=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let n,o,a;this._currentElement&&(i.dependants[this._currentElement]=!0);const s=i.properties;for(n in s)a=t&&t[n],o=[n,": var(",e,"_-_",n],a&&o.push(",",a.replace(O,"")),o.push(")"),O.test(s[n])&&o.push(" !important"),r.push(o.join(""))}return r.join("; ")}_replaceInitialOrInherit(e,t){let r=S.exec(t);return r&&(t=r[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let r,i,n=e.split(";"),o={};for(let a,s,l=0;l<n.length;l++)a=n[l],a&&(s=a.split(":"),s.length>1&&(r=s[0].trim(),i=s.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(r,i)),o[r]=i));return o}_invalidateMixinEntry(e){if(P)for(let t in e.dependants)t!==this._currentElement&&P(t)}_produceCssProperties(e,t,r,i,n){if(r&&function e(t,r){let i=t.indexOf("var(");if(-1===i)return r(t,"","","");let n=w(t,i+3),o=t.substring(i+4,n),a=t.substring(0,i),s=e(t.substring(n+1),r),l=o.indexOf(",");return-1===l?r(a,o.trim(),"",s):r(a,o.substring(0,l).trim(),o.substring(l+1).trim(),s)}(r,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let o=this._consumeCssProperties(""+i,n),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(o,!0),l=s,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),s):this._map.set(t,l);let p,u,h=[],f=!1;for(p in l)u=s[p],void 0===u&&(u="initial"),d&&!(p in d)&&(f=!0),h.push(`${t}_-_${p}: ${u}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),r&&(a=`${e};${a}`),`${a}${h.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin,T.prototype.transformStyle=T.prototype.transformStyle,T.prototype.transformCustomStyle=T.prototype.transformCustomStyle,T.prototype.transformRules=T.prototype.transformRules,T.prototype.transformRule=T.prototype.transformRule,T.prototype.transformTemplate=T.prototype.transformTemplate,T.prototype._separator="_-_",Object.defineProperty(T.prototype,"invalidCallback",{get:()=>P,set(e){P=e}});var j=T;var I={};const D="_applyShimCurrentVersion",z="_applyShimNextVersion",N=Promise.resolve();function R(e){let t=I[e];t&&function(e){e[D]=e[D]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[z]=(e[z]||0)+1}(t)}function F(e){return e[D]===e[z]}function L(e){return!F(e)&&e._applyShimValidatingVersion===e[z]}function M(e){e._applyShimValidatingVersion=e[z],e._validating||(e._validating=!0,N.then((function(){e[D]=e[z],e._validating=!1})))}r(71);const B=new j;class ${constructor(){this.customStyleInterface=null,B.invalidCallback=R}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{B.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),x(e))return;I[t]=e;let r=B.transformTemplate(e,t);e._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let r=e[t],i=this.customStyleInterface.getStyleForCustomStyle(r);i&&B.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Object(E.c)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,r="",i="";return t?t.indexOf("-")>-1?r=t:(i=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,i=e.extends),{is:r,typeExtension:i}}(e),r=I[t];if((!r||!x(r))&&r&&!F(r)){L(r)||(this.prepareTemplate(r,t),M(r));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=r._styleAst,e.textContent=v(r._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new $;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,r,i){e.flushCustomStyles(),e.prepareTemplate(t,r)},prepareTemplateStyles(e,t,r){window.ShadyCSS.prepareTemplate(e,t,r)},prepareTemplateDom(e,t){},styleSubtree(t,r){e.flushCustomStyles(),e.styleSubtree(t,r)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Object(E.b)(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=B;var H=r(38),V=r(54),U=r(55),q=r(8);const K=/:host\(:dir\((ltr|rtl)\)\)/g,X=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Y=[];let W=null,G="";function Z(){G=document.documentElement.getAttribute("dir")}function J(e){if(!e.__autoDirOptOut){e.setAttribute("dir",G)}}function Q(){Z(),G=document.documentElement.getAttribute("dir");for(let e=0;e<Y.length;e++)J(Y[e])}const ee=Object(q.a)(e=>{W||(Z(),W=new MutationObserver(Q),W.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Object(U.a)(e);class r extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),e=this._replaceDirInCssText(e)}static _replaceDirInCssText(e){let t=e;return t=t.replace(K,':host([dir="$1"])'),t=t.replace(X,':host([dir="$2"]) $1'),e!==t&&(this.__activateDir=!0),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(W&&W.takeRecords().length&&Q(),Y.push(this),J(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Y.indexOf(this);e>-1&&Y.splice(e,1)}}}return r.__activateDir=!1,r});r(77);function te(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?te():window.addEventListener("DOMContentLoaded",te);var re=r(2),ie=r(37),ne=r(21),oe=r(11),ae=r(1);let se=window.ShadyCSS;const le=Object(q.a)(e=>{const t=ee(Object(V.a)(Object(H.a)(e))),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,r,i){t!==r&&(super.attributeChangedCallback(e,t,r,i),this.attributeChanged(e,t,r))}attributeChanged(e,t,r){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(e.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,r){this._propertyToAttribute(e,t,r)}serializeValueToAttribute(e,t,r){this._valueToNodeAttribute(r||this,e,t)}extend(e,t){if(!e||!t)return e||t;let r=Object.getOwnPropertyNames(t);for(let i,n=0;n<r.length&&(i=r[n]);n++){let r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(e,i,r)}return e}mixin(e,t){for(let r in t)e[r]=t[r];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,r){r=r||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return i.detail=t,(r.node||this).dispatchEvent(i),i}listen(e,t,r){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),n=i.get(e);n||(n={},i.set(e,n));let o=t+r;n[o]||(n[o]=this._addMethodEventListenerToNode(e,t,r,this))}unlisten(e,t,r){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),n=t+r,o=i&&i[n];o&&(this._removeEventListenerFromNode(e,t,o),i[n]=null)}setScrollDirection(e,t){Object(ie.d)(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=this.getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(re.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(re.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let r,i=0;r=e[i];i++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Object(re.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&this.contains(e)&&this.getRootNode()===e.getRootNode()}isLocalDescendant(e){return this.root===e.getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return se.getComputedStyleValue(this,e)}debounce(e,t,r){return this._debouncers=this._debouncers||{},this._debouncers[e]=ne.a.debounce(this._debouncers[e],r>0?oe.d.after(r):oe.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?oe.d.run(e.bind(this),t):~oe.c.run(e.bind(this))}cancelAsync(e){e<0?oe.c.cancel(~e):oe.d.cancel(e)}create(e,t){let r=document.createElement(e);if(t)if(r.setProperties)r.setProperties(t);else for(let i in t)r[i]=t[i];return r}elementMatches(e,t){return Object(re.b)(t||this,e)}toggleAttribute(e,t){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(t=!r.hasAttribute(e)),t?(r.setAttribute(e,""),!0):(r.removeAttribute(e),!1)}toggleClass(e,t,r){r=r||this,1==arguments.length&&(t=!r.classList.contains(e)),t?r.classList.add(e):r.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,r,i){i=i||this,this.transform("translate3d("+e+","+t+","+r+")",i)}arrayDelete(e,t){let r;if(Array.isArray(e)){if(r=e.indexOf(t),r>=0)return e.splice(r,1)}else{if(r=Object(ae.a)(this,e).indexOf(t),r>=0)return this.splice(e,r,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i})},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(9);class n{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const r of t)this.classes.add(r)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const o=new WeakMap,a=Object(i.f)(e=>t=>{if(!(t instanceof i.a)||t instanceof i.c||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=t,{element:a}=r;let s=o.get(t);void 0===s&&(a.setAttribute("class",r.strings.join(" ")),o.set(t,s=new Set));const l=a.classList||new n(a);s.forEach(t=>{t in e||(l.remove(t),s.delete(t))});for(const i in e){const t=e[i];t!=s.has(i)&&(t?(l.add(i),s.add(i)):(l.remove(i),s.delete(i)))}"function"==typeof l.commit&&l.commit()})},function(e,t,r){"use strict";r(4),r(60);const i=r(3).a`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,r){"use strict";r(4);const i=r(3).a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);var n=document.createElement("style");n.textContent="[hidden] { display: none !important; }",document.head.appendChild(n)},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a}));var i=r(0);const n={"paper-spinner-color":"var(--primary-color)","error-state-color":"var(--error-color)","state-icon-unavailable-color":"var(--disabled-text-color)","sidebar-text-color":"var(--primary-text-color)","sidebar-background-color":"var(--card-background-color)","sidebar-selected-text-color":"var(--primary-color)","sidebar-selected-icon-color":"var(--primary-color)","sidebar-icon-color":"rgba(var(--rgb-primary-text-color), 0.6)","switch-checked-color":"var(--primary-color)","switch-checked-button-color":"var(--switch-checked-color, var(--primary-background-color))","switch-checked-track-color":"var(--switch-checked-color, #000000)","switch-unchecked-button-color":"var(--switch-unchecked-color, var(--primary-background-color))","switch-unchecked-track-color":"var(--switch-unchecked-color, #000000)","slider-color":"var(--primary-color)","slider-secondary-color":"var(--light-primary-color)","slider-bar-color":"var(--disabled-text-color)","label-badge-grey":"var(--paper-grey-500)","label-badge-background-color":"var(--card-background-color)","label-badge-text-color":"rgba(var(--rgb-primary-text-color), 0.8)","paper-card-background-color":"var(--card-background-color)","paper-listbox-background-color":"var(--card-background-color)","paper-item-icon-color":"var(--state-icon-color)","paper-item-icon-active-color":"var(--state-icon-active-color)","table-row-background-color":"var(--primary-background-color)","table-row-alternative-background-color":"var(--secondary-background-color)","paper-slider-knob-color":"var(--slider-color)","paper-slider-knob-start-color":"var(--slider-color)","paper-slider-pin-color":"var(--slider-color)","paper-slider-active-color":"var(--slider-color)","paper-slider-secondary-color":"var(--slider-secondary-color)","paper-slider-container-color":"var(--slider-bar-color)","data-table-background-color":"var(--card-background-color)","mdc-theme-primary":"var(--primary-color)","mdc-theme-secondary":"var(--accent-color)","mdc-theme-background":"var(--primary-background-color)","mdc-theme-surface":"var(--card-background-color)","mdc-theme-on-primary":"var(--text-primary-color)","mdc-theme-on-secondary":"var(--text-primary-color)","mdc-theme-on-surface":"var(--primary-text-color)","mdc-theme-text-primary-on-background":"var(--primary-text-color)","app-header-text-color":"var(--text-primary-color)","app-header-background-color":"var(--primary-color)","material-body-text-color":"var(--primary-text-color)","material-background-color":"var(--card-background-color)","material-secondary-background-color":"var(--secondary-background-color)","mdc-checkbox-unchecked-color":"rgba(var(--rgb-primary-text-color), 0.54)","mdc-checkbox-disabled-color":"var(--disabled-text-color)"},o=i.c`
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

  app-toolbar ha-menu-button + [main-title],
  app-toolbar ha-icon-button-arrow-prev + [main-title],
  app-toolbar ha-icon-button + [main-title] {
    margin-left: 24px;
  }

  h1 {
    font-family: var(--paper-font-title_-_font-family);
    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
    white-space: var(--paper-font-title_-_white-space);
    overflow: var(--paper-font-title_-_overflow);
    text-overflow: var(--paper-font-title_-_text-overflow);
    font-size: var(--paper-font-title_-_font-size);
    font-weight: var(--paper-font-title_-_font-weight);
    line-height: var(--paper-font-title_-_line-height);
  }

  h2 {
    font-family: var(--paper-font-subhead_-_font-family);
    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
    white-space: var(--paper-font-subhead_-_white-space);
    overflow: var(--paper-font-subhead_-_overflow);
    text-overflow: var(--paper-font-subhead_-_text-overflow);
    font-size: var(--paper-font-subhead_-_font-size);
    font-weight: var(--paper-font-subhead_-_font-weight);
    line-height: var(--paper-font-subhead_-_line-height);
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--google-red-500);
  }

  .warning {
    color: var(--google-red-500);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--google-red-500);
  }

  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
  }

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--google-red-500);
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
`,a=i.c`
  /* prevent clipping of positioned elements */
  paper-dialog-scrollable {
    --paper-dialog-scrollable: {
      -webkit-overflow-scrolling: auto;
    }
  }

  /* force smooth scrolling for iOS 10 */
  paper-dialog-scrollable.can-scroll {
    --paper-dialog-scrollable: {
      -webkit-overflow-scrolling: touch;
    }
  }

  .paper-dialog-buttons {
    align-items: flex-end;
    padding: 8px;
  }

  @media all and (min-width: 450px) {
    ha-paper-dialog {
      min-width: 400px;
    }
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    paper-dialog,
    ha-paper-dialog {
      margin: 0;
      width: 100% !important;
      max-height: calc(100% - 64px);

      position: fixed !important;
      bottom: 0px;
      left: 0px;
      right: 0px;
      overflow: scroll;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

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

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: 100vw;
      --mdc-dialog-max-height: 100vh;
      --mdc-dialog-shape-radius: 0px;
      --vertial-align-dialog: flex-end;
    }
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--google-red-500);
  }
  .error {
    color: var(--google-red-500);
  }
`},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(7);var i=r(8),n=r(37);const o=Object(i.a)(e=>class extends e{_addEventListenerToNode(e,t,r){Object(n.a)(e,t,r)||super._addEventListenerToNode(e,t,r)}_removeEventListenerFromNode(e,t,r){Object(n.c)(e,t,r)||super._removeEventListenerFromNode(e,t,r)}})},function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(7);var i=r(8),n=r(22),o=r(56);const a={};let s=HTMLElement.prototype;for(;s;){let e=Object.getOwnPropertyNames(s);for(let t=0;t<e.length;t++)a[e[t]]=!0;s=Object.getPrototypeOf(s)}const l=Object(i.a)(e=>{const t=Object(o.a)(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(n.b)(e[t]))}static attributeNameForProperty(e){return Object(n.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(t){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(i){r=e}break;case Array:try{r=JSON.parse(e)}catch(i){r=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!a[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(7);var i=r(8);const n=r(11).c,o=Object(i.a)(e=>class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let i=this.__data[e],n=this._shouldPropertyChange(e,t,i);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,n.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r))}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r==r||t==t)}attributeChangedCallback(e,t,r,i){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,i)}_attributeToProperty(e,t,r){if(!this.__serializing){const i=this.__dataAttributes,n=i&&i[e]||e;this[n]=this._deserializeValue(t,r||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const i=this._serializeValue(t);void 0===i?e.removeAttribute(r):e.setAttribute(r,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(7);function i(e,t,r){return{index:e,removed:t,addedCount:r}}function n(e,t,r,n,o,s){let l,c=0,d=0,p=Math.min(r-t,s-o);if(0==t&&0==o&&(c=function(e,t,r){for(let i=0;i<r;i++)if(!a(e[i],t[i]))return i;return r}(e,n,p)),r==e.length&&s==n.length&&(d=function(e,t,r){let i=e.length,n=t.length,o=0;for(;o<r&&a(e[--i],t[--n]);)o++;return o}(e,n,p-c)),o+=c,s-=d,(r-=d)-(t+=c)==0&&s-o==0)return[];if(t==r){for(l=i(t,[],0);o<s;)l.removed.push(n[o++]);return[l]}if(o==s)return[i(t,[],r-t)];let u=function(e){let t=e.length-1,r=e[0].length-1,i=e[t][r],n=[];for(;t>0||r>0;){if(0==t){n.push(2),r--;continue}if(0==r){n.push(3),t--;continue}let o,a=e[t-1][r-1],s=e[t-1][r],l=e[t][r-1];o=s<l?s<a?s:a:l<a?l:a,o==a?(a==i?n.push(0):(n.push(1),i=a),t--,r--):o==s?(n.push(3),t--,i=s):(n.push(2),r--,i=l)}return n.reverse(),n}(function(e,t,r,i,n,o){let s=o-n+1,l=r-t+1,c=new Array(s);for(let a=0;a<s;a++)c[a]=new Array(l),c[a][0]=a;for(let a=0;a<l;a++)c[0][a]=a;for(let d=1;d<s;d++)for(let r=1;r<l;r++)if(a(e[t+r-1],i[n+d-1]))c[d][r]=c[d-1][r-1];else{let e=c[d-1][r]+1,t=c[d][r-1]+1;c[d][r]=e<t?e:t}return c}(e,t,r,n,o,s));l=void 0;let h=[],f=t,m=o;for(let a=0;a<u.length;a++)switch(u[a]){case 0:l&&(h.push(l),l=void 0),f++,m++;break;case 1:l||(l=i(f,[],0)),l.addedCount++,f++,l.removed.push(n[m]),m++;break;case 2:l||(l=i(f,[],0)),l.addedCount++,f++;break;case 3:l||(l=i(f,[],0)),l.removed.push(n[m]),m++}return l&&h.push(l),h}function o(e,t){return n(e,0,e.length,t,0,t.length)}function a(e,t){return e===t}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(47);const n=e=>Object(i.a)(e.connection,"language"),o=(e,t)=>Object(i.c)(e.connection,"language",t),a=async(e,t,r,i,n)=>(await e.callWS({type:"frontend/get_translations",language:t,category:r,integration:i,config_flow:n})).resources},function(e,t,r){"use strict";r(4);if(!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const i=r(3).a`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,r){"use strict";r(4);const i=r(3).a`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,r){"use strict";function i(e,t){if(e.closest)return e.closest(t);for(var r=e;r;){if(n(r,t))return r;r=r.parentElement}return null}function n(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}))},function(e,t,r){"use strict";var i;function n(e,t){void 0===t&&(t=!1);var r,n=e.CSS;if("boolean"==typeof i&&!t)return i;if(!(n&&"function"==typeof n.supports))return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=o||a,t||(i=r),r}function o(e,t,r){if(!e)return{x:0,y:0};var i,n,o=t.x,a=t.y,s=o+r.left,l=a+r.top;if("touchstart"===e.type){var c=e;i=c.changedTouches[0].pageX-s,n=c.changedTouches[0].pageY-l}else{var d=e;i=d.pageX-s,n=d.pageY-l}return{x:i,y:n}}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},function(e,t,r){"use strict";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var n=function(){return(n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var o=r(88),a={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},s={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},l={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},c=r(62),d=["touchstart","pointerdown","mousedown","keydown"],p=["touchend","pointerup","mouseup","contextmenu"],u=[],h=function(e){function t(r){var i=e.call(this,n(n({},t.defaultAdapter),r))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(e){return i.activate_(e)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,r=this.supportsPressRipple_();if(this.registerRootHandlers_(r),r){var i=t.cssClasses,n=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.addClass(n),e.adapter_.isUnbounded()&&(e.adapter_.addClass(o),e.layoutInternal_())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var r=t.cssClasses,i=r.ROOT,n=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.removeClass(i),e.adapter_.removeClass(n),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.setUnbounded=function(e){var r=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(r):this.adapter_.removeClass(r)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(d.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):p.forEach((function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},t.prototype.deregisterRootHandlers_=function(){var e=this;d.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),p.forEach((function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},t.prototype.removeCssVars_=function(){var e=this,r=t.strings;Object.keys(r).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(r[t],null)}))},t.prototype.activate_=function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var r=this.activationState_;if(!r.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==e&&i.type!==e.type))r.isActivated=!0,r.isProgrammatic=void 0===e,r.activationEvent=e,r.wasActivatedByPointer=!r.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&u.length>0&&u.some((function(e){return t.adapter_.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(u.push(e.target),this.registerDeactivationHandlers_(e)),r.wasElementMadeActive=this.checkElementMadeActive_(e),r.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){u=[],r.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(r.wasElementMadeActive=t.checkElementMadeActive_(e),r.wasElementMadeActive&&t.animateActivation_()),r.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,r=t.strings,i=r.VAR_FG_TRANSLATE_START,n=r.VAR_FG_TRANSLATE_END,o=t.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,l=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",d="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),u=p.startPoint,h=p.endPoint;c=u.x+"px, "+u.y+"px",d=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(n,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),l)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,r=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?Object(c.a)(r,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,r=t.cssClasses.FG_DEACTIVATION,i=this.activationState_,n=i.hasDeactivationUXRun,o=i.isActivated;(n||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(r),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter_.removeClass(r)}),l.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var r=n({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(r)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(r),e.resetActivationState_()})))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,r=e.wasElementMadeActive;(t||r)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var r=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?r:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING;var i=Math.floor(r*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&i%2!=0?this.initialSize_=i-1:this.initialSize_=i,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,r=e.VAR_FG_SIZE,i=e.VAR_LEFT,n=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(r,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(n,this.unboundedCoords_.top+"px"))},t}(o.a);t.a=h},,function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(4);const i={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(4);var i=r(84);let n=null;const o={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){n=new i.a({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return n&&n.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(7);var i=r(57),n=r(11);function o(e){return"slot"===e.localName}class a{static getFlattenedNodes(e){return o(e)?(e=e).assignedNodes({flatten:!0}):Array.from(e.childNodes).map(e=>o(e)?(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,n.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=Object(i.a)(t,this._effectiveNodes);for(let i,o=0;o<r.length&&(i=r[o]);o++)for(let t,r=0;r<i.removed.length&&(t=i.removed[r]);r++)e.removedNodes.push(t);for(let i,o=0;o<r.length&&(i=r[o]);o++)for(let r=i.index;r<i.index+i.addedCount;r++)e.addedNodes.push(t[r]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];o(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];o(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},,function(e,t,r){"use strict";function i(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var r={get passive(){return t=!0,!1}},i=function(){};e.document.addEventListener("test",i,r),e.document.removeEventListener("test",i,r)}catch(n){t=!1}return t}(e)&&{passive:!0}}r.d(t,"a",(function(){return i}))},,function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));let i,n=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function a(e){requestAnimationFrame((function(){o?o(e):(n||(n=new Promise(e=>{i=e}),"complete"===document.readyState?i():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&i()})),n.then((function(){e&&e()})))}))}const s="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,a(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,a(c))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[s])return e[s];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const r=e[t];if(r[s])continue;const i=this.getStyleForCustomStyle(r);if(i){const e=i.__appliedElement||i;l&&l(e),r[s]=e}}return e}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>c,set(e){let t=!1;c||(t=!0),c=e,t&&this.enqueueDocumentValidation()}}})},function(e,t,r){"use strict";function i(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var o=Object.keys(Object(n)),a=0,s=o.length;a<s;a++){var l=o[a],c=Object.getOwnPropertyDescriptor(n,l);void 0!==c&&c.enumerable&&(r[l]=n[l])}}return r}e.exports={assign:i,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:i})}}},function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));const i=`${location.protocol}//${location.host}`,n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=()=>fetch("/auth/providers",{credentials:"same-origin"}),a=async(e,t,r,i)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:r,password:i})},function(e,t,r){"use strict";var i,n;function o(e){return e.type===i.literal}function a(e){return e.type===i.argument}function s(e){return e.type===i.number}function l(e){return e.type===i.date}function c(e){return e.type===i.time}function d(e){return e.type===i.select}function p(e){return e.type===i.plural}function u(e){return e.type===i.pound}function h(e){return e.type===i.tag}function f(e){return!(!e||"object"!=typeof e||0!==e.type)}function m(e){return!(!e||"object"!=typeof e||1!==e.type)}r.d(t,"a",(function(){return X})),r.d(t,"b",(function(){return Y})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(i||(i={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(n||(n={}));var y,b=(y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),v=function(){return(v=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},g=function(e){function t(r,i,n,o){var a=e.call(this)||this;return a.message=r,a.expected=i,a.found=n,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return b(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function n(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){switch(e.type){case"literal":return'"'+i(e.text)+'"';case"class":var t=e.parts.map((function(e){return Array.isArray(e)?n(e[0])+"-"+n(e[1]):n(e)}));return"["+(e.inverted?"^":"")+t+"]";case"any":return"any character";case"end":return"end of input";case"other":return e.description}}return"Expected "+function(e){var t,r,i=e.map(o);if(i.sort(),i.length>0){for(t=1,r=1;t<i.length;t++)i[t-1]!==i[t]&&(i[r]=i[t],r++);i.length=r}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(e)+" but "+(((a=t)?'"'+i(a)+'"':"end of input")+" found.");var a},t}(Error);var _=function(e,t){t=void 0!==t?t:{};var r,n={},o={start:Pe},a=Pe,s=ke("#",!1),l=Ee("tagElement"),c=ke("<",!1),d=ke("/>",!1),p=ke(">",!1),u=function(e){return Ze.pop(),!0},h=ke("</",!1),f=Ee("argumentElement"),m=ke("{",!1),y=ke("}",!1),b=Ee("numberSkeletonId"),_=/^['\/{}]/,w=xe(["'","/","{","}"],!1,!1),k={type:"any"},x=Ee("numberSkeletonTokenOption"),E=ke("/",!1),C=Ee("numberSkeletonToken"),S=ke("::",!1),O=function(e){return Ze.pop(),e.replace(/\s*$/,"")},A=ke(",",!1),P=ke("number",!1),T=function(e,t,r){return v({type:"number"===t?i.number:"date"===t?i.date:i.time,style:r&&r[2],value:e},et())},j=ke("'",!1),I=/^[^']/,D=xe(["'"],!0,!1),z=/^[^a-zA-Z'{}]/,N=xe([["a","z"],["A","Z"],"'","{","}"],!0,!1),R=/^[a-zA-Z]/,F=xe([["a","z"],["A","Z"]],!1,!1),L=ke("date",!1),M=ke("time",!1),B=ke("plural",!1),$=ke("selectordinal",!1),H=ke("offset:",!1),V=ke("select",!1),U=ke("=",!1),q=Ee("whitespace"),K=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,X=xe([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),Y=Ee("syntax pattern"),W=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,G=xe([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),Z=Ee("optional whitespace"),J=Ee("number"),Q=ke("-",!1),ee=(Ee("apostrophe"),Ee("double apostrophes")),te=ke("''",!1),re=ke("\n",!1),ie=Ee("argNameOrNumber"),ne=Ee("validTag"),oe=Ee("argNumber"),ae=ke("0",!1),se=/^[1-9]/,le=xe([["1","9"]],!1,!1),ce=/^[0-9]/,de=xe([["0","9"]],!1,!1),pe=Ee("argName"),ue=Ee("tagName"),he=0,fe=0,me=[{line:1,column:1}],ye=0,be=[],ve=0;if(void 0!==t.startRule){if(!(t.startRule in o))throw new Error("Can't start parsing from rule \""+t.startRule+'".');a=o[t.startRule]}function ge(){return e.substring(fe,he)}function _e(){return Se(fe,he)}function we(e,t){throw function(e,t){return new g(e,[],"",t)}(e,t=void 0!==t?t:Se(fe,he))}function ke(e,t){return{type:"literal",text:e,ignoreCase:t}}function xe(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function Ee(e){return{type:"other",description:e}}function Ce(t){var r,i=me[t];if(i)return i;for(r=t-1;!me[r];)r--;for(i={line:(i=me[r]).line,column:i.column};r<t;)10===e.charCodeAt(r)?(i.line++,i.column=1):i.column++,r++;return me[t]=i,i}function Se(e,t){var r=Ce(e),i=Ce(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:i.line,column:i.column}}}function Oe(e){he<ye||(he>ye&&(ye=he,be=[]),be.push(e))}function Ae(e,t,r){return new g(g.buildMessage(e,t),e,t,r)}function Pe(){return Te()}function Te(){var e,t;for(e=[],t=je();t!==n;)e.push(t),t=je();return e}function je(){var t;return(t=function(){var e,t;e=he,(t=Ie())!==n&&(fe=e,r=t,t=v({type:i.literal,value:r},et()));var r;return e=t}())===n&&(t=function(){var t,r,o,a;ve++,t=he,123===e.charCodeAt(he)?(r="{",he++):(r=n,0===ve&&Oe(m));r!==n&&He()!==n&&(o=Xe())!==n&&He()!==n?(125===e.charCodeAt(he)?(a="}",he++):(a=n,0===ve&&Oe(y)),a!==n?(fe=t,s=o,r=v({type:i.argument,value:s},et()),t=r):(he=t,t=n)):(he=t,t=n);var s;ve--,t===n&&(r=n,0===ve&&Oe(f));return t}())===n&&(t=function(){var t;(t=function(){var t,r,i,o,a,s,l,c,d;t=he,123===e.charCodeAt(he)?(r="{",he++):(r=n,0===ve&&Oe(m));r!==n&&He()!==n&&(i=Xe())!==n&&He()!==n?(44===e.charCodeAt(he)?(o=",",he++):(o=n,0===ve&&Oe(A)),o!==n&&He()!==n?("number"===e.substr(he,6)?(a="number",he+=6):(a=n,0===ve&&Oe(P)),a!==n&&He()!==n?(s=he,44===e.charCodeAt(he)?(l=",",he++):(l=n,0===ve&&Oe(A)),l!==n&&(c=He())!==n&&(d=function(){var t,r,i;t=he,"::"===e.substr(he,2)?(r="::",he+=2):(r=n,0===ve&&Oe(S));r!==n&&(i=function(){var e,t,r;if(e=he,t=[],(r=Ne())!==n)for(;r!==n;)t.push(r),r=Ne();else t=n;t!==n&&(fe=e,t=v({type:0,tokens:t},et()));return e=t}())!==n?(fe=t,t=r=i):(he=t,t=n);t===n&&(t=he,fe=he,Ze.push("numberArgStyle"),(r=(r=!0)?void 0:n)!==n&&(i=Ie())!==n?(fe=t,r=O(i),t=r):(he=t,t=n));return t}())!==n?s=l=[l,c,d]:(he=s,s=n),s===n&&(s=null),s!==n&&(l=He())!==n?(125===e.charCodeAt(he)?(c="}",he++):(c=n,0===ve&&Oe(y)),c!==n?(fe=t,r=T(i,a,s),t=r):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n);return t}())===n&&(t=function(){var t,r,i,o,a,s,l,c,d;t=he,123===e.charCodeAt(he)?(r="{",he++):(r=n,0===ve&&Oe(m));r!==n&&He()!==n&&(i=Xe())!==n&&He()!==n?(44===e.charCodeAt(he)?(o=",",he++):(o=n,0===ve&&Oe(A)),o!==n&&He()!==n?("date"===e.substr(he,4)?(a="date",he+=4):(a=n,0===ve&&Oe(L)),a===n&&("time"===e.substr(he,4)?(a="time",he+=4):(a=n,0===ve&&Oe(M))),a!==n&&He()!==n?(s=he,44===e.charCodeAt(he)?(l=",",he++):(l=n,0===ve&&Oe(A)),l!==n&&(c=He())!==n&&(d=function(){var t,r,i;t=he,"::"===e.substr(he,2)?(r="::",he+=2):(r=n,0===ve&&Oe(S));r!==n&&(i=function(){var t,r,i,o;t=he,r=he,i=[],(o=Re())===n&&(o=Fe());if(o!==n)for(;o!==n;)i.push(o),(o=Re())===n&&(o=Fe());else i=n;r=i!==n?e.substring(r,he):i;r!==n&&(fe=t,r=v({type:1,pattern:r},et()));return t=r}())!==n?(fe=t,t=r=i):(he=t,t=n);t===n&&(t=he,fe=he,Ze.push("dateOrTimeArgStyle"),(r=(r=!0)?void 0:n)!==n&&(i=Ie())!==n?(fe=t,r=O(i),t=r):(he=t,t=n));return t}())!==n?s=l=[l,c,d]:(he=s,s=n),s===n&&(s=null),s!==n&&(l=He())!==n?(125===e.charCodeAt(he)?(c="}",he++):(c=n,0===ve&&Oe(y)),c!==n?(fe=t,r=T(i,a,s),t=r):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n);return t}());return t}())===n&&(t=function(){var t,r,o,a,s,l,c,d,p,u,h;t=he,123===e.charCodeAt(he)?(r="{",he++):(r=n,0===ve&&Oe(m));if(r!==n)if(He()!==n)if((o=Xe())!==n)if(He()!==n)if(44===e.charCodeAt(he)?(a=",",he++):(a=n,0===ve&&Oe(A)),a!==n)if(He()!==n)if("plural"===e.substr(he,6)?(s="plural",he+=6):(s=n,0===ve&&Oe(B)),s===n&&("selectordinal"===e.substr(he,13)?(s="selectordinal",he+=13):(s=n,0===ve&&Oe($))),s!==n)if(He()!==n)if(44===e.charCodeAt(he)?(l=",",he++):(l=n,0===ve&&Oe(A)),l!==n)if(He()!==n)if(c=he,"offset:"===e.substr(he,7)?(d="offset:",he+=7):(d=n,0===ve&&Oe(H)),d!==n&&(p=He())!==n&&(u=Ve())!==n?c=d=[d,p,u]:(he=c,c=n),c===n&&(c=null),c!==n)if((d=He())!==n){if(p=[],(u=Me())!==n)for(;u!==n;)p.push(u),u=Me();else p=n;p!==n&&(u=He())!==n?(125===e.charCodeAt(he)?(h="}",he++):(h=n,0===ve&&Oe(y)),h!==n?(fe=t,r=function(e,t,r,n){return v({type:i.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:n.reduce((function(e,t){var r=t.id,i=t.value,n=t.location;return r in e&&we('Duplicate option "'+r+'" in plural element: "'+ge()+'"',_e()),e[r]={value:i,location:n},e}),{})},et())}(o,s,c,p),t=r):(he=t,t=n)):(he=t,t=n)}else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;return t}())===n&&(t=function(){var t,r,o,a,s,l,c,d,p;t=he,123===e.charCodeAt(he)?(r="{",he++):(r=n,0===ve&&Oe(m));if(r!==n)if(He()!==n)if((o=Xe())!==n)if(He()!==n)if(44===e.charCodeAt(he)?(a=",",he++):(a=n,0===ve&&Oe(A)),a!==n)if(He()!==n)if("select"===e.substr(he,6)?(s="select",he+=6):(s=n,0===ve&&Oe(V)),s!==n)if(He()!==n)if(44===e.charCodeAt(he)?(l=",",he++):(l=n,0===ve&&Oe(A)),l!==n)if(He()!==n){if(c=[],(d=Le())!==n)for(;d!==n;)c.push(d),d=Le();else c=n;c!==n&&(d=He())!==n?(125===e.charCodeAt(he)?(p="}",he++):(p=n,0===ve&&Oe(y)),p!==n?(fe=t,r=function(e,t){return v({type:i.select,value:e,options:t.reduce((function(e,t){var r=t.id,i=t.value,n=t.location;return r in e&&we('Duplicate option "'+r+'" in select element: "'+ge()+'"',_e()),e[r]={value:i,location:n},e}),{})},et())}(o,c),t=r):(he=t,t=n)):(he=t,t=n)}else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;else he=t,t=n;return t}())===n&&(t=function(){var t,r,o,a,s,f;ve++,t=he,r=he,60===e.charCodeAt(he)?(o="<",he++):(o=n,0===ve&&Oe(c));o!==n&&(a=Ye())!==n&&(s=He())!==n?("/>"===e.substr(he,2)?(f="/>",he+=2):(f=n,0===ve&&Oe(d)),f!==n?r=o=[o,a,s,f]:(he=r,r=n)):(he=r,r=n);r!==n&&(fe=t,m=r,r=v({type:i.literal,value:m.join("")},et()));var m;(t=r)===n&&(t=he,(r=function(){var t,r,i,o;t=he,60===e.charCodeAt(he)?(r="<",he++):(r=n,0===ve&&Oe(c));r!==n?(fe=he,Ze.push("openingTag"),(!0?void 0:n)!==n&&(i=Ye())!==n?(62===e.charCodeAt(he)?(o=">",he++):(o=n,0===ve&&Oe(p)),o!==n?(fe=he,(u()?void 0:n)!==n?(fe=t,t=r=i):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n);return t}())!==n&&(o=Te())!==n&&(a=function(){var t,r,i,o;t=he,"</"===e.substr(he,2)?(r="</",he+=2):(r=n,0===ve&&Oe(h));r!==n?(fe=he,Ze.push("closingTag"),(!0?void 0:n)!==n&&(i=Ye())!==n?(62===e.charCodeAt(he)?(o=">",he++):(o=n,0===ve&&Oe(p)),o!==n?(fe=he,(u()?void 0:n)!==n?(fe=t,t=r=i):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n);return t}())!==n?(fe=t,b=o,(y=r)!==(g=a)&&we('Mismatch tag "'+y+'" !== "'+g+'"',_e()),r=v({type:i.tag,value:y,children:b},et()),t=r):(he=t,t=n));var y,b,g;ve--,t===n&&(r=n,0===ve&&Oe(l));return t}())===n&&(t=function(){var t,r;t=he,35===e.charCodeAt(he)?(r="#",he++):(r=n,0===ve&&Oe(s));r!==n&&(fe=t,r=v({type:i.pound},et()));return t=r}()),t}function Ie(){var e,t,r;if(e=he,t=[],(r=Ue())===n&&(r=qe())===n&&(r=Ke()),r!==n)for(;r!==n;)t.push(r),(r=Ue())===n&&(r=qe())===n&&(r=Ke());else t=n;return t!==n&&(fe=e,t=t.join("")),e=t}function De(){var t,r,i,o,a;if(ve++,t=he,r=[],i=he,o=he,ve++,(a=Be())===n&&(_.test(e.charAt(he))?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(w))),ve--,a===n?o=void 0:(he=o,o=n),o!==n?(e.length>he?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(k)),a!==n?i=o=[o,a]:(he=i,i=n)):(he=i,i=n),i!==n)for(;i!==n;)r.push(i),i=he,o=he,ve++,(a=Be())===n&&(_.test(e.charAt(he))?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(w))),ve--,a===n?o=void 0:(he=o,o=n),o!==n?(e.length>he?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(k)),a!==n?i=o=[o,a]:(he=i,i=n)):(he=i,i=n);else r=n;return t=r!==n?e.substring(t,he):r,ve--,t===n&&(r=n,0===ve&&Oe(b)),t}function ze(){var t,r,i;return ve++,t=he,47===e.charCodeAt(he)?(r="/",he++):(r=n,0===ve&&Oe(E)),r!==n&&(i=De())!==n?(fe=t,t=r=i):(he=t,t=n),ve--,t===n&&(r=n,0===ve&&Oe(x)),t}function Ne(){var e,t,r,i;if(ve++,e=he,He()!==n)if((t=De())!==n){for(r=[],i=ze();i!==n;)r.push(i),i=ze();r!==n?(fe=e,e=function(e,t){return{stem:e,options:t}}(t,r)):(he=e,e=n)}else he=e,e=n;else he=e,e=n;return ve--,e===n&&(n,0===ve&&Oe(C)),e}function Re(){var t,r,i,o;if(t=he,39===e.charCodeAt(he)?(r="'",he++):(r=n,0===ve&&Oe(j)),r!==n){if(i=[],(o=Ue())===n&&(I.test(e.charAt(he))?(o=e.charAt(he),he++):(o=n,0===ve&&Oe(D))),o!==n)for(;o!==n;)i.push(o),(o=Ue())===n&&(I.test(e.charAt(he))?(o=e.charAt(he),he++):(o=n,0===ve&&Oe(D)));else i=n;i!==n?(39===e.charCodeAt(he)?(o="'",he++):(o=n,0===ve&&Oe(j)),o!==n?t=r=[r,i,o]:(he=t,t=n)):(he=t,t=n)}else he=t,t=n;if(t===n)if(t=[],(r=Ue())===n&&(z.test(e.charAt(he))?(r=e.charAt(he),he++):(r=n,0===ve&&Oe(N))),r!==n)for(;r!==n;)t.push(r),(r=Ue())===n&&(z.test(e.charAt(he))?(r=e.charAt(he),he++):(r=n,0===ve&&Oe(N)));else t=n;return t}function Fe(){var t,r;if(t=[],R.test(e.charAt(he))?(r=e.charAt(he),he++):(r=n,0===ve&&Oe(F)),r!==n)for(;r!==n;)t.push(r),R.test(e.charAt(he))?(r=e.charAt(he),he++):(r=n,0===ve&&Oe(F));else t=n;return t}function Le(){var t,r,i,o,a,s,l;return t=he,He()!==n&&(r=Ge())!==n&&He()!==n?(123===e.charCodeAt(he)?(i="{",he++):(i=n,0===ve&&Oe(m)),i!==n?(fe=he,Ze.push("select"),(!0?void 0:n)!==n&&(o=Te())!==n?(125===e.charCodeAt(he)?(a="}",he++):(a=n,0===ve&&Oe(y)),a!==n?(fe=t,s=r,l=o,Ze.pop(),t=v({id:s,value:l},et())):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n),t}function Me(){var t,r,i,o,a,s,l;return t=he,He()!==n&&(r=function(){var t,r,i,o;return t=he,r=he,61===e.charCodeAt(he)?(i="=",he++):(i=n,0===ve&&Oe(U)),i!==n&&(o=Ve())!==n?r=i=[i,o]:(he=r,r=n),(t=r!==n?e.substring(t,he):r)===n&&(t=Ge()),t}())!==n&&He()!==n?(123===e.charCodeAt(he)?(i="{",he++):(i=n,0===ve&&Oe(m)),i!==n?(fe=he,Ze.push("plural"),(!0?void 0:n)!==n&&(o=Te())!==n?(125===e.charCodeAt(he)?(a="}",he++):(a=n,0===ve&&Oe(y)),a!==n?(fe=t,s=r,l=o,Ze.pop(),t=v({id:s,value:l},et())):(he=t,t=n)):(he=t,t=n)):(he=t,t=n)):(he=t,t=n),t}function Be(){var t;return ve++,K.test(e.charAt(he))?(t=e.charAt(he),he++):(t=n,0===ve&&Oe(X)),ve--,t===n&&(n,0===ve&&Oe(q)),t}function $e(){var t;return ve++,W.test(e.charAt(he))?(t=e.charAt(he),he++):(t=n,0===ve&&Oe(G)),ve--,t===n&&(n,0===ve&&Oe(Y)),t}function He(){var t,r,i;for(ve++,t=he,r=[],i=Be();i!==n;)r.push(i),i=Be();return t=r!==n?e.substring(t,he):r,ve--,t===n&&(r=n,0===ve&&Oe(Z)),t}function Ve(){var t,r,i,o,a;return ve++,t=he,45===e.charCodeAt(he)?(r="-",he++):(r=n,0===ve&&Oe(Q)),r===n&&(r=null),r!==n&&(i=We())!==n?(fe=t,o=r,t=r=(a=i)?o?-a:a:0):(he=t,t=n),ve--,t===n&&(r=n,0===ve&&Oe(J)),t}function Ue(){var t,r;return ve++,t=he,"''"===e.substr(he,2)?(r="''",he+=2):(r=n,0===ve&&Oe(te)),r!==n&&(fe=t,r="'"),ve--,(t=r)===n&&(r=n,0===ve&&Oe(ee)),t}function qe(){var t,r,i,o,a,s;if(t=he,39===e.charCodeAt(he)?(r="'",he++):(r=n,0===ve&&Oe(j)),r!==n)if((i=function(){var t,r,i,o;t=he,r=he,e.length>he?(i=e.charAt(he),he++):(i=n,0===ve&&Oe(k));i!==n?(fe=he,(o=(o="<"===(a=i)||">"===a||"{"===a||"}"===a||Qe()&&"#"===a)?void 0:n)!==n?r=i=[i,o]:(he=r,r=n)):(he=r,r=n);var a;t=r!==n?e.substring(t,he):r;return t}())!==n){for(o=he,a=[],"''"===e.substr(he,2)?(s="''",he+=2):(s=n,0===ve&&Oe(te)),s===n&&(I.test(e.charAt(he))?(s=e.charAt(he),he++):(s=n,0===ve&&Oe(D)));s!==n;)a.push(s),"''"===e.substr(he,2)?(s="''",he+=2):(s=n,0===ve&&Oe(te)),s===n&&(I.test(e.charAt(he))?(s=e.charAt(he),he++):(s=n,0===ve&&Oe(D)));(o=a!==n?e.substring(o,he):a)!==n?(39===e.charCodeAt(he)?(a="'",he++):(a=n,0===ve&&Oe(j)),a===n&&(a=null),a!==n?(fe=t,t=r=i+o.replace("''","'")):(he=t,t=n)):(he=t,t=n)}else he=t,t=n;else he=t,t=n;return t}function Ke(){var t,r,i,o,a;return t=he,r=he,e.length>he?(i=e.charAt(he),he++):(i=n,0===ve&&Oe(k)),i!==n?(fe=he,a=i,(o=(o=(tt()||"<"!==a)&&"{"!==a&&!(Qe()&&"#"===a)&&!(Je()&&"}"===a)&&!(!tt()&&Je()&&">"===a))?void 0:n)!==n?r=i=[i,o]:(he=r,r=n)):(he=r,r=n),r===n&&(10===e.charCodeAt(he)?(r="\n",he++):(r=n,0===ve&&Oe(re))),t=r!==n?e.substring(t,he):r}function Xe(){var t,r;return ve++,t=he,(r=We())===n&&(r=Ge()),t=r!==n?e.substring(t,he):r,ve--,t===n&&(r=n,0===ve&&Oe(ie)),t}function Ye(){var t,r;return ve++,t=he,(r=We())===n&&(r=function(){var t,r,i,o,a;ve++,t=he,r=[],45===e.charCodeAt(he)?(i="-",he++):(i=n,0===ve&&Oe(Q));i===n&&(i=he,o=he,ve++,(a=Be())===n&&(a=$e()),ve--,a===n?o=void 0:(he=o,o=n),o!==n?(e.length>he?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(k)),a!==n?i=o=[o,a]:(he=i,i=n)):(he=i,i=n));if(i!==n)for(;i!==n;)r.push(i),45===e.charCodeAt(he)?(i="-",he++):(i=n,0===ve&&Oe(Q)),i===n&&(i=he,o=he,ve++,(a=Be())===n&&(a=$e()),ve--,a===n?o=void 0:(he=o,o=n),o!==n?(e.length>he?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(k)),a!==n?i=o=[o,a]:(he=i,i=n)):(he=i,i=n));else r=n;t=r!==n?e.substring(t,he):r;ve--,t===n&&(r=n,0===ve&&Oe(ue));return t}()),t=r!==n?e.substring(t,he):r,ve--,t===n&&(r=n,0===ve&&Oe(ne)),t}function We(){var t,r,i,o,a;if(ve++,t=he,48===e.charCodeAt(he)?(r="0",he++):(r=n,0===ve&&Oe(ae)),r!==n&&(fe=t,r=0),(t=r)===n){if(t=he,r=he,se.test(e.charAt(he))?(i=e.charAt(he),he++):(i=n,0===ve&&Oe(le)),i!==n){for(o=[],ce.test(e.charAt(he))?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(de));a!==n;)o.push(a),ce.test(e.charAt(he))?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(de));o!==n?r=i=[i,o]:(he=r,r=n)}else he=r,r=n;r!==n&&(fe=t,r=parseInt(r.join(""),10)),t=r}return ve--,t===n&&(r=n,0===ve&&Oe(oe)),t}function Ge(){var t,r,i,o,a;if(ve++,t=he,r=[],i=he,o=he,ve++,(a=Be())===n&&(a=$e()),ve--,a===n?o=void 0:(he=o,o=n),o!==n?(e.length>he?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(k)),a!==n?i=o=[o,a]:(he=i,i=n)):(he=i,i=n),i!==n)for(;i!==n;)r.push(i),i=he,o=he,ve++,(a=Be())===n&&(a=$e()),ve--,a===n?o=void 0:(he=o,o=n),o!==n?(e.length>he?(a=e.charAt(he),he++):(a=n,0===ve&&Oe(k)),a!==n?i=o=[o,a]:(he=i,i=n)):(he=i,i=n);else r=n;return t=r!==n?e.substring(t,he):r,ve--,t===n&&(r=n,0===ve&&Oe(pe)),t}var Ze=["root"];function Je(){return Ze.length>1}function Qe(){return"plural"===Ze[Ze.length-1]}function et(){return t&&t.captureLocation?{location:_e()}:{}}function tt(){return t&&t.ignoreTag}if((r=a())!==n&&he===e.length)return r;throw r!==n&&he<e.length&&Oe({type:"end"}),Ae(be,ye<e.length?e.charAt(ye):null,ye<e.length?Se(ye,ye+1):Se(ye,ye))},w=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,n++)i[n]=o[a];return i},k=/(^|[^\\])#/g;function x(e,t){var r=_(e,t);return t&&!1===t.normalizeHashtagInPlural||function e(t){t.forEach((function(t){(p(t)||d(t))&&Object.keys(t.options).forEach((function(r){for(var i,n=t.options[r],a=-1,s=void 0,l=0;l<n.value.length;l++){var c=n.value[l];if(o(c)&&k.test(c.value)){a=l,s=c;break}}if(s){var d=s.value.replace(k,"$1{"+t.value+", number}"),p=_(d);(i=n.value).splice.apply(i,w([a,1],p))}e(n.value)}))}))}(r),r}var E=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,n++)i[n]=o[a];return i};function C(e){return JSON.stringify(e.map((function(e){return e&&"object"==typeof e?(t=e,Object.keys(t).sort().map((function(e){var r;return(r={})[e]=t[e],r}))):e;var t})))}var S=function(e,t){return void 0===t&&(t={}),function(){for(var r,i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];var o=C(i),a=o&&t[o];return a||(a=new((r=e).bind.apply(r,E([void 0],i))),o&&(t[o]=a)),a}},O=function(){return(O=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},A=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function P(e){var t={};return e.replace(A,(function(e){var r=e.length;switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short";break;case"y":t.year=2===r?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===r?"short":5===r?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead")}return""})),t}var T=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,j=/^(@+)?(\+|#+)?$/g;function I(e){var t={};return e.replace(j,(function(e,r,i){return"string"!=typeof i?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===i?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof i?i.length:0)),""})),t}function D(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":return{currencySign:"accounting"};case"sign-always":return{signDisplay:"always"};case"sign-accounting-always":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":return{signDisplay:"never"}}}function z(e){var t=D(e);return t||{}}function N(e){for(var t={},r=0,i=e;r<i.length;r++){var n=i[r];switch(n.stem){case"percent":t.style="percent";continue;case"currency":t.style="currency",t.currency=n.options[0];continue;case"group-off":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":t.style="unit",t.unit=n.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=O(O(O({},t),{notation:"scientific"}),n.options.reduce((function(e,t){return O(O({},e),z(t))}),{}));continue;case"engineering":t=O(O(O({},t),{notation:"engineering"}),n.options.reduce((function(e,t){return O(O({},e),z(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue}if(T.test(n.stem)){if(n.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");n.stem.replace(T,(function(e,r,i,n,o,a){return"*"===i?t.minimumFractionDigits=r.length:n&&"#"===n[0]?t.maximumFractionDigits=n.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),n.options.length&&(t=O(O({},t),I(n.options[0])))}else if(j.test(n.stem))t=O(O({},t),I(n.stem));else{var o=D(n.stem);o&&(t=O(O({},t),o))}}return t}var R,F=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(R||(R={}));var L,M=function(e){function t(t,r,i){var n=e.call(this,t)||this;return n.code=r,n.originalMessage=i,n}return F(t,e),t.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},t}(Error),B=function(e){function t(t,r,i,n){return e.call(this,'Invalid values for "'+t+'": "'+r+'". Options are "'+Object.keys(i).join('", "')+'"',"INVALID_VALUE",n)||this}return F(t,e),t}(M),$=function(e){function t(t,r,i){return e.call(this,'Value for "'+t+'" must be of type '+r,"INVALID_VALUE",i)||this}return F(t,e),t}(M),H=function(e){function t(t,r){return e.call(this,'The intl string context variable "'+t+'" was not provided to the string "'+r+'"',"MISSING_VALUE",r)||this}return F(t,e),t}(M);function V(e){return"function"==typeof e}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(L||(L={}));var U=function(){return(U=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function q(e,t){return t?Object.keys(e).reduce((function(r,i){var n,o;return r[i]=(n=e[i],(o=t[i])?U(U(U({},n||{}),o||{}),Object.keys(n).reduce((function(e,t){return e[t]=U(U({},n[t]),o[t]||{}),e}),{})):n),r}),U({},e)):e}var K=function(){function e(t,r,i,n){var y,b=this;if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=b.formatToParts(e);if(1===t.length)return t[0].value;var r=t.reduce((function(e,t){return e.length&&0===t.type&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[]);return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return function e(t,r,i,n,y,b,v){if(1===t.length&&o(t[0]))return[{type:0,value:t[0].value}];for(var g=[],_=0,w=t;_<w.length;_++){var k=w[_];if(o(k))g.push({type:0,value:k.value});else if(u(k))"number"==typeof b&&g.push({type:0,value:i.getNumberFormat(r).format(b)});else{var x=k.value;if(!y||!(x in y))throw new H(x,v);var E=y[x];if(a(k))E&&"string"!=typeof E&&"number"!=typeof E||(E="string"==typeof E||"number"==typeof E?String(E):""),g.push({type:"string"==typeof E?0:1,value:E});else if(l(k)){var C="string"==typeof k.style?n.date[k.style]:m(k.style)?P(k.style.pattern):void 0;g.push({type:0,value:i.getDateTimeFormat(r,C).format(E)})}else if(c(k)){C="string"==typeof k.style?n.time[k.style]:m(k.style)?P(k.style.pattern):void 0;g.push({type:0,value:i.getDateTimeFormat(r,C).format(E)})}else if(s(k)){C="string"==typeof k.style?n.number[k.style]:f(k.style)?N(k.style.tokens):void 0;g.push({type:0,value:i.getNumberFormat(r,C).format(E)})}else{if(h(k)){var S=k.children,O=k.value,A=y[O];if(!V(A))throw new $(O,"function",v);var T=e(S,r,i,n,y,b),j=A.apply(void 0,T.map((function(e){return e.value})));Array.isArray(j)||(j=[j]),g.push.apply(g,j.map((function(e){return{type:"string"==typeof e?0:1,value:e}})))}if(d(k)){if(!(I=k.options[E]||k.options.other))throw new B(k.value,E,Object.keys(k.options),v);g.push.apply(g,e(I.value,r,i,n,y))}else if(p(k)){var I;if(!(I=k.options["="+E])){if(!Intl.PluralRules)throw new M('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API",v);var D=i.getPluralRules(r,{type:k.pluralType}).select(E-(k.offset||0));I=k.options[D]||k.options.other}if(!I)throw new B(k.value,E,Object.keys(k.options),v);g.push.apply(g,e(I.value,r,i,n,y,E-(k.offset||0)))}else;}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var r=e[e.length-1];return r&&0===r.type&&0===t.type?r.value+=t.value:e.push(t),e}),[])}(g)}(b.ast,b.locales,b.formatters,b.formats,e,void 0,b.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(b.locales)[0]}},this.getAst=function(){return b.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{normalizeHashtagInPlural:!1})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=q(e.formats,i),this.locales=r,this.formatters=n&&n.formatters||(void 0===(y=this.formatterCache)&&(y={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:S(Intl.NumberFormat,y.number),getDateTimeFormat:S(Intl.DateTimeFormat,y.dateTime),getPluralRules:S(Intl.PluralRules,y.pluralRules)})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!0,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=x,e.formats={number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();Intl.PluralRules||r.e(189).then(r.t.bind(null,872,7));const X=(e,t,r,i)=>(e._localizationCache={},(n,...o)=>{if(!(n&&r&&t&&r[t]))return"";const a=r[t][n];if(!a)return"";const s=n+a;let l=e._localizationCache[s];l||(l=new K(a,t,i),e._localizationCache[s]=l);const c={};for(let e=0;e<o.length;e+=2)c[o[e]]=o[e+1];try{return l.format(c)}catch(d){return"Translation "+d}}),Y=(e,t,r)=>{const i=[t];return r&&Object.keys(r).forEach(e=>{i.push(e),i.push(r[e])}),e(...i)}},,function(e,t,r){"use strict";r(4),r(142),r(143),r(144),r(145);var i=r(65),n=(r(45),r(5)),o=r(3),a=r(124);Object(n.a)({is:"paper-input",_template:o.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[a.a,i.a],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(7);let i=!1,n=[],o=[];function a(){i=!0,requestAnimationFrame((function(){i=!1,s(n),setTimeout((function(){!function(e){for(let t=0,r=e.length;t<r;t++)l(e.shift())}(o)}))}))}function s(e){for(;e.length;)l(e.shift())}function l(e){const t=e[0],r=e[1],i=e[2];try{r.apply(t,i)}catch(n){setTimeout(()=>{throw n})}}function c(e,t,r){i||a(),o.push([e,t,r])}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(4);const i={attached:function(){this.fire("addon-attached")},update:function(e){}}},,,,function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var i=r(46);const n=()=>"serviceWorker"in navigator&&("https:"===location.protocol||"localhost"===location.hostname),o=async(e,t=!0)=>{if(!n())return;navigator.serviceWorker.addEventListener("controllerchange",()=>{location.reload()});const r=await navigator.serviceWorker.register("/service_worker.js");t&&r.addEventListener("updatefound",()=>{const t=r.installing;t&&t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&Object(i.a)(e,{message:"A new version of the frontend is available.",action:{action:()=>t.postMessage({type:"skipWaiting"}),text:"reload"},duration:0,dismissable:!1})})})}},function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));r(4),r(44);var i=r(42),n=r(2);const o={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,r=Object(n.a)(t).localTarget;this.isLightDescendant(r)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,r=Object(n.a)(t).localTarget;this.isLightDescendant(r)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},a=[i.a,o]},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(4);var i=r(5);class n{constructor(e){n[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return n.types[e]&&n.types[e][t]}set value(e){var t=this.type,r=this.key;t&&r&&(t=n.types[t]=n.types[t]||{},null==e?delete t[r]:t[r]=e)}get list(){if(this.type){var e=n.types[this.type];return e?Object.keys(e).map((function(e){return o[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}n[" "]=function(){},n.types={};var o=n.types;Object(i.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,r){var i=new n({type:e,key:t});return void 0!==r&&r!==i.value?i.value=r:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new n({type:this.type,key:e}).value}})},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));const i=(e,t,r=!1)=>{let i;return function(...n){const o=this,a=r&&!i;clearTimeout(i),i=setTimeout(()=>{i=null,r||e.apply(o,n)},t),a&&e.apply(o,n)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(0),n=r(92);r.d(t,"b",(function(){return n.a}));class o extends i.a{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(9);const n=new WeakMap,o=Object(i.f)(e=>t=>{if(!(t instanceof i.a)||t instanceof i.c||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:o}=r.element;let a=n.get(t);void 0===a&&(o.cssText=r.strings.join(" "),n.set(t,a=new Set)),a.forEach(t=>{t in e||(a.delete(t),-1===t.indexOf("-")?o[t]=null:o.removeProperty(t))});for(const i in e)a.add(i),-1===i.indexOf("-")?o[i]=e[i]:o.setProperty(i,e[i])})},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}()},function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return s}));var i=r(49);let n={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};function o(e,t){if(!e)return t=t;t=Object(i.a)(t),Array.isArray(e)||(e=[e]);let r=t.prototype.behaviors;return t=function e(t,r){for(let i=0;i<t.length;i++){let n=t[i];n&&(r=Array.isArray(n)?e(n,r):a(n,r))}return r}(e=function e(t,r,i){r=r||[];for(let n=t.length-1;n>=0;n--){let o=t[n];o?Array.isArray(o)?e(o,r):r.indexOf(o)<0&&(!i||i.indexOf(o)<0)&&r.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return r}(e,null,r),t),r&&(e=r.concat(e)),t.prototype.behaviors=e,t}function a(e,t){class r extends t{static get properties(){return e.properties}static get observers(){return e.observers}created(){super.created(),e.created&&e.created.call(this)}_registered(){super._registered(),e.beforeRegister&&e.beforeRegister.call(Object.getPrototypeOf(this)),e.registered&&e.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),e.listeners)for(let t in e.listeners)this._addMethodEventListenerToNode(this,t,e.listeners[t])}_ensureAttributes(){if(e.hostAttributes)for(let t in e.hostAttributes)this._ensureAttribute(t,e.hostAttributes[t]);super._ensureAttributes()}ready(){super.ready(),e.ready&&e.ready.call(this)}attached(){super.attached(),e.attached&&e.attached.call(this)}detached(){super.detached(),e.detached&&e.detached.call(this)}attributeChanged(t,r,i){super.attributeChanged(t,r,i),e.attributeChanged&&e.attributeChanged.call(this,t,r,i)}}r.generatedFrom=e;for(let i in e)if(!(i in n)){let t=Object.getOwnPropertyDescriptor(e,i);t&&Object.defineProperty(r.prototype,i,t)}return r}const s=function(e,t){e||console.warn("Polymer's Class function requires `info` argument");const r=e.behaviors?o(e.behaviors,HTMLElement):Object(i.a)(HTMLElement),n=a(e,t?t(r):r);return n.is=e.is,n}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class i{constructor(e){this.startPress=t=>{e().then(e=>{e&&e.startPress(t)})},this.endPress=()=>{e().then(e=>{e&&e.endPress()})},this.startFocus=()=>{e().then(e=>{e&&e.startFocus()})},this.endFocus=()=>{e().then(e=>{e&&e.endFocus()})},this.startHover=()=>{e().then(e=>{e&&e.startHover()})},this.endHover=()=>{e().then(e=>{e&&e.endHover()})}}}},function(e,t,r){"use strict";var i=r(71),n=r(29),o=r(13);const a=new i.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){a.processStyles(),Object(n.c)(e,t)},styleElement(e){a.processStyles()},styleDocument(e){a.processStyles(),Object(n.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(n.b)(e,t),flushCustomStyles(){},nativeCss:o.c,nativeShadow:o.d,cssBuild:o.a,disableRuntime:o.b}),window.ShadyCSS.CustomStyleInterface=a;var s=r(48);const l=window.ShadyCSS.CustomStyleInterface;class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=Object(s.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}));var i=r(61);const n=e=>e.nodeType===Node.ELEMENT_NODE;function o(e,t){for(const r of e.assignedNodes({flatten:!0}))if(n(r)){const e=r;if(Object(i.b)(e,t))return e}return null}function a(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}let s=!1;const l=()=>{},c={get passive(){return s=!0,!1}};document.addEventListener("x",l,c),document.removeEventListener("x",l);const d=(e=window.document)=>{let t=e.activeElement;const r=[];if(!t)return r;for(;t&&(r.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return r},p=e=>{const t=d();if(!t.length)return!1;const r=t[t.length-1],i=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const o=e=>{n=e.composedPath()};return document.body.addEventListener("check-if-focused",o),r.dispatchEvent(i),document.body.removeEventListener("check-if-focused",o),-1!==n.indexOf(e)}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"g",(function(){return h}));const i=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),n=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function o(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):n(e,t)}function a(e){return o({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function s(e){return(t,r)=>{const i={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?d(i,t,r):p(i,t)}}function l(e){return(t,r)=>{const i={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?d(i,t,r):p(i,t)}}function c(e){return(t,r)=>{const i={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==r?d(i,t,r):p(i,t)}}const d=(e,t,r)=>{Object.defineProperty(t,r,e)},p=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function u(e){return(t,r)=>void 0!==r?((e,t,r)=>{Object.assign(t[r],e)})(e,t,r):((e,t)=>Object.assign(Object.assign({},t),{finisher(r){Object.assign(r.prototype[t.key],e)}}))(e,t)}function h(e="",t=!1){return(r,i)=>{const n={get(){const r="slot"+(e?`[name=${e}]`:""),i=this.renderRoot.querySelector(r);return i&&i.assignedNodes({flatten:t})},enumerable:!0,configurable:!0};return void 0!==i?d(n,r,i):p(n,r)}}},,,function(e){e.exports=JSON.parse('{"fragments":["config","history","logbook","mailbox","profile","shopping-list","page-authorize","page-demo","page-onboarding","developer-tools"],"translations":{"af":{"nativeName":"Afrikaans","hash":"744e5f80d560dc582565908de558c21f"},"ar":{"nativeName":"العربية","isRTL":true,"hash":"004189facb4e0849cb9559aa14cfee0a"},"bg":{"nativeName":"Български","hash":"b8f19c771ffe293fdabeb316c6306fd4"},"bs":{"nativeName":"Bosanski","hash":"55cf6310fed31bb1263843ce94e72a22"},"ca":{"nativeName":"Català","hash":"61c11dfe9c93e47ca72f4cda9f6a0f57"},"cs":{"nativeName":"Čeština","hash":"8a2dceeeee41b2b65f11f9bfc8caa6ba"},"cy":{"nativeName":"Cymraeg","hash":"5c41328cca7875e91d0fc9c93812bd9e"},"da":{"nativeName":"Dansk","hash":"9c9f04906f47fd2c3b5feab58b888cdb"},"de":{"nativeName":"Deutsch","hash":"30f7e24417314549eeebb58f3999f1cd"},"el":{"nativeName":"Ελληνικά","hash":"b987edaae3205541179234436f81193a"},"en":{"nativeName":"English","hash":"9df8a2c0246d44c419fa8ea75e0d2f99"},"en-GB":{"nativeName":"English (GB)","hash":"9df8a2c0246d44c419fa8ea75e0d2f99"},"eo":{"nativeName":"Esperanto","hash":"e8205349e762ce62a79e1ccd627b7934"},"es":{"nativeName":"Español","hash":"7de6d35f41404e55c0908d6eb2a8bc84"},"es-419":{"nativeName":"Español (Latin America)","hash":"a848debb9bb9e402e3e44f7b5cb5043a"},"et":{"nativeName":"Eesti","hash":"92db338e567ec115219e367745c18911"},"eu":{"nativeName":"Euskara","hash":"54972205c61fce5b3a975a2589c0784c"},"fa":{"nativeName":"فارسی","isRTL":true,"hash":"bf96b3ebe415afa01089e5b9ab843767"},"fi":{"nativeName":"Suomi","hash":"2db8c8f253b36f1add76b18ca98cf1d8"},"fy":{"nativeName":"Frysk","hash":"9df8a2c0246d44c419fa8ea75e0d2f99"},"fr":{"nativeName":"Français","hash":"6ae2b45b94cdb15c9da799e926651811"},"gl":{"nativeName":"Galego","hash":"9df8a2c0246d44c419fa8ea75e0d2f99"},"gsw":{"nativeName":"Schwiizerdütsch","hash":"7d2b10c1c519ac57d4217be3f6915464"},"he":{"nativeName":"עברית","isRTL":true,"hash":"fff59c40f027cfa36dd2a9ecf9ef2a8e"},"hi":{"nativeName":"हिन्दी","hash":"058ed356669b4ec472ca90402299f9ab"},"hr":{"nativeName":"Hrvatski","hash":"139387eecdaa983a21ee66a07e0ea404"},"hu":{"nativeName":"Magyar","hash":"6ee988a95c2fc40302bf5dd0d05deed2"},"hy":{"nativeName":"Հայերեն","hash":"d367b6d756ff0e436f20df6b808b4a5c"},"id":{"nativeName":"Indonesia","hash":"2fbbe0fbf7771f7ba2ee072352d45c40"},"it":{"nativeName":"Italiano","hash":"6bad41ddf19f8fda9c11297a5990cced"},"is":{"nativeName":"Íslenska","hash":"92b2cfdc46120e0d8033985a005987b3"},"ja":{"nativeName":"日本語","hash":"9ab1efa8021370cac969d177d892d671"},"ko":{"nativeName":"한국어","hash":"69b1022f163c4b7a45c00a0cf9f462a3"},"lb":{"nativeName":"Lëtzebuergesch","hash":"a0407568ab6be55a0ba5bd599ec5e659"},"lt":{"nativeName":"Lietuvių","hash":"4d390f6fd4bd4f7ef60ff21c8cca1045"},"lv":{"nativeName":"Latviešu","hash":"625e64458226d2ec0755b1b936186bc0"},"nl":{"nativeName":"Nederlands","hash":"629c3ce8a589e31c8bbaaf7aa451fe39"},"nb":{"nativeName":"Norsk Bokmål","hash":"827e45e8e9ca30c1244e37a0bddcefa9"},"nn":{"nativeName":"Norsk Nynorsk","hash":"4e260d7ffa60d3b0ada6127cd545b927"},"pl":{"nativeName":"Polski","hash":"e6bc0f6a40ccfec9fa281d864d3361b1"},"pt":{"nativeName":"Português","hash":"3d9efb508a571a0e968c0efbce5c2153"},"pt-BR":{"nativeName":"Português (BR)","hash":"d69e793ffa3eb6d6f0466931ef79ffe6"},"ro":{"nativeName":"Română","hash":"aed6cd11cbff0ca7f026a69efb140433"},"ru":{"nativeName":"Русский","hash":"9e1f64bf2da814e15317730dac1f7aa1"},"sk":{"nativeName":"Slovenčina","hash":"4c1c948d0afabb109d25883e83aba101"},"sl":{"nativeName":"Slovenščina","hash":"5ccab9e2ff78486548e885f223f50e29"},"sr":{"nativeName":"Српски","hash":"58a9e1531b1155ba4a1d2ccfeec85c88"},"sr-Latn":{"nativeName":"Srpski","hash":"86f521d196e8a7503a877735b6300346"},"sv":{"nativeName":"Svenska","hash":"254ebec4573ec3e1922381185ae284cf"},"ta":{"nativeName":"தமிழ்","hash":"f0a89ad926e92751dce101eb7d131079"},"te":{"nativeName":"తెలుగు","hash":"535a7b1760fa5166ad00ba435e88e142"},"th":{"nativeName":"ภาษาไทย","hash":"00b195e5ca22362d2dff02e4d504309d"},"tr":{"nativeName":"Türkçe","hash":"e822cb83aa59c54ee1a33faa9cbbfa1a"},"uk":{"nativeName":"Українська","hash":"e429d0877c032f2e1b929b6b43232526"},"ur":{"nativeName":"اُردُو","hash":"06f280f48b2c439b66ba561322496b0f"},"vi":{"nativeName":"Tiếng Việt","hash":"e612ab984bcc464d382c4508a0019b51"},"zh-Hans":{"nativeName":"简体中文","hash":"63d16b2565f084496cf962975fa75da5"},"zh-Hant":{"nativeName":"繁體中文","hash":"f5532ce9c28fb480195f2386c0c1c2a2"},"test":{"nativeName":"Test","hash":"ee3450416da6f720bd4ad5b26dab840b"}}}')},,function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));r(4);var i=r(83),n=r(44),o=r(122);const a={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=o.a._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},s=[i.a,n.a,o.a,a]},,function(e,t){Array.prototype.includes||(Array.prototype.includes=function(e){if(null==this)throw new TypeError("Array.prototype.includes called on null or undefined");var t=Object(this),r=parseInt(t.length,10)||0;if(0===r)return!1;var i,n,o=parseInt(arguments[1],10)||0;for(0<=o?i=o:(i=r+o)<0&&(i=0);i<r;){if(e===(n=t[i])||e!=e&&n!=n)return!0;i++}return!1})},function(e,t,r){var i=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(e,t,r,i){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),a=new k(i||[]);return o._invoke=function(e,t,r){var i="suspendedStart";return function(n,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw o;return E()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=g(a,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var d=l(e,t,r);if("normal"===d.type){if(i=r.done?"completed":"suspendedYield",d.arg===c)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(i="completed",r.method="throw",r.arg=d.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(i){return{type:"throw",arg:i}}}e.wrap=s;var c={};function d(){}function p(){}function u(){}var h={};h[n]=function(){return this};var f=Object.getPrototypeOf,m=f&&f(f(x([])));m&&m!==t&&r.call(m,n)&&(h=m);var y=u.prototype=d.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var i;this._invoke=function(n,o){function a(){return new t((function(i,a){!function i(n,o,a,s){var c=l(e[n],e,o);if("throw"!==c.type){var d=c.arg,p=d.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){i("next",e,a,s)}),(function(e){i("throw",e,a,s)})):t.resolve(p).then((function(e){d.value=e,a(d)}),(function(e){return i("throw",e,a,s)}))}s(c.arg)}(n,o,i,a)}))}return i=i?i.then(a,a):a()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var i=l(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,c;var n=i.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=y.constructor=u,u.constructor=p,u[a]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,u):(e.__proto__=u,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(v.prototype),v.prototype[o]=function(){return this},e.AsyncIterator=v,e.async=function(t,r,i,n,o){void 0===o&&(o=Promise);var a=new v(s(t,r,i,n),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),y[a]="Generator",y[n]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var i=t.pop();if(i in e)return r.value=i,r.done=!1,r}return r.done=!0,r}},e.values=x,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=void 0),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;w(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=i}catch(n){Function("r","regeneratorRuntime = r")(i)}},function(e,t,r){"use strict";var i;(i="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)||"undefined"!=typeof navigator&&"ReactNative"===navigator.product?global:self).Proxy||(i.Proxy=r(103)(),i.Proxy.revocable=i.Proxy.revocable)},function(e,t){e.exports=function(){let e,t=null;function r(e){return!!e&&("object"==typeof e||"function"==typeof e)}return e=function(e,i){if(!r(e)||!r(i))throw new TypeError("Cannot create proxy with a non-object as target or handler");let n=function(){};t=function(){e=null,n=function(e){throw new TypeError(`Cannot perform '${e}' on a proxy that has been revoked`)}},setTimeout((function(){t=null}),0);const o=i;i={get:null,set:null,apply:null,construct:null};for(let t in o){if(!(t in i))throw new TypeError(`Proxy polyfill does not support trap '${t}'`);i[t]=o[t]}"function"==typeof o&&(i.apply=o.apply.bind(o));let a=this,s=!1,l=!1;"function"==typeof e?(a=function(){const t=this&&this.constructor===a,r=Array.prototype.slice.call(arguments);if(n(t?"construct":"apply"),t&&i.construct)return i.construct.call(this,e,r);if(!t&&i.apply)return i.apply(e,this,r);if(t){r.unshift(e);return new(e.bind.apply(e,r))}return e.apply(this,r)},s=!0):e instanceof Array&&(a=[],l=!0);const c=i.get?function(e){return n("get"),i.get(this,e,a)}:function(e){return n("get"),this[e]},d=i.set?function(e,t){n("set");i.set(this,e,t,a)}:function(e,t){n("set"),this[e]=t},p=Object.getOwnPropertyNames(e),u={};p.forEach((function(t){if((s||l)&&t in a)return;const r={enumerable:!!Object.getOwnPropertyDescriptor(e,t).enumerable,get:c.bind(e,t),set:d.bind(e,t)};Object.defineProperty(a,t,r),u[t]=!0}));let h=!0;if(Object.setPrototypeOf?Object.setPrototypeOf(a,Object.getPrototypeOf(e)):a.__proto__?a.__proto__=e.__proto__:h=!1,i.get||!h)for(let t in e)u[t]||Object.defineProperty(a,t,{get:c.bind(e,t)});return Object.seal(e),Object.seal(a),a},e.revocable=function(r,i){return{proxy:new e(r,i),revoke:t}},e}},function(e,t,r){"use strict";var i=r(72),n=r.n(i);r(100),r(101);self.fetch||(self.fetch=function(e,t){return t=t||{},new Promise((r,i)=>{const n=new XMLHttpRequest,o=[],a=[],s={},l=()=>({ok:2==(n.status/100|0),statusText:n.statusText,status:n.status,url:n.responseURL,text:()=>Promise.resolve(n.responseText),json:()=>Promise.resolve(JSON.parse(n.responseText)),blob:()=>Promise.resolve(new Blob([n.response])),clone:l,headers:{keys:()=>o,entries:()=>a,get:e=>s[e.toLowerCase()],has:e=>e.toLowerCase()in s}});n.open(t.method||"get",e,!0),n.onload=()=>{n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(e,t,r)=>{o.push(t=t.toLowerCase()),a.push([t,r]),s[t]=s[t]?`${s[t]},${r}`:r}),r(l())},n.onerror=i,n.withCredentials="include"==t.credentials;for(const e in t.headers)n.setRequestHeader(e,t.headers[e]);n.send(t.body||null)})});r(102);n.a.polyfill(),void 0===Object.values&&(Object.values=e=>Object.keys(e).map(t=>e[t])),String.prototype.padStart||(String.prototype.padStart=function(e,t){return e>>=0,t=String(void 0!==t?t:" "),this.length>=e?String(this):((e-=this.length)>t.length&&(t+=t.repeat(e/t.length)),t.slice(0,e)+String(this))})},,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(0),n=r(74),o=r(36);function a(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(d(o.descriptor)||d(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(a.d.map(s)),e);return n.initializeClassElements(a.F,f.elements),n.runClassFinishers(a.F,f.finishers)}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const y=()=>"",b=e=>a(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[Object(i.h)()],key:"localize",value:()=>y},{kind:"field",decorators:[Object(i.h)()],key:"resources",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"language",value:()=>Object(o.a)()},{kind:"field",decorators:[Object(i.h)()],key:"translationFragment",value:void 0},{kind:"method",key:"connectedCallback",value:function(){f(m(r.prototype),"connectedCallback",this).call(this),this._initializeLocalizeLite()}},{kind:"method",key:"updated",value:function(e){f(m(r.prototype),"updated",this).call(this,e),e.get("translationFragment")&&this._initializeLocalizeLite(),this.language&&this.resources&&(e.has("language")||e.has("resources"))&&(this.localize=Object(n.a)(this.constructor.prototype,this.language,this.resources))}},{kind:"method",key:"_initializeLocalizeLite",value:async function(){if(this.resources)return;if(!this.translationFragment)return void 0;const{language:e,data:t}=await Object(o.b)(this.translationFragment,this.language);this.resources={[e]:t}}}]}}),e)},,function(e,t,r){"use strict";function i(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}var n=r(0);const o=n.c`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let a=class extends n.a{render(){return n.f`<slot></slot>`}};a.styles=o,a=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([Object(n.d)("mwc-icon")],a);r(123);var s=r(90),l=r(50);class c extends n.a{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new s.a(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){const e=this.raised||this.unelevated;return n.f`${this.shouldRenderRipple?n.f`<mwc-ripple .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}`}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return n.f`
      <button
          id="button"
          class="mdc-button ${Object(l.a)(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseup="${this.handleRippleDeactivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <slot></slot>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return n.f`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}i([Object(n.h)({type:Boolean})],c.prototype,"raised",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"unelevated",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"outlined",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"dense",void 0),i([Object(n.h)({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0),i([Object(n.h)({type:Boolean,attribute:"trailingicon"})],c.prototype,"trailingIcon",void 0),i([Object(n.h)({type:Boolean,reflect:!0})],c.prototype,"fullwidth",void 0),i([Object(n.h)({type:String})],c.prototype,"icon",void 0),i([Object(n.h)({type:String})],c.prototype,"label",void 0),i([Object(n.i)("#button")],c.prototype,"buttonElement",void 0),i([Object(n.l)("mwc-ripple")],c.prototype,"ripple",void 0),i([Object(n.g)()],c.prototype,"shouldRenderRipple",void 0),i([Object(n.e)({passive:!0})],c.prototype,"handleRippleActivate",null);const d=n.c`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{height:36px}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}:host{display:inline-flex;outline:none;vertical-align:top}:host([disabled]){pointer-events:none}:host([fullwidth]){width:100%}.mdc-button{flex:auto;overflow:hidden;padding:0 var(--mdc-button-horizontal-padding, 8px) 0 var(--mdc-button-horizontal-padding, 8px);border-radius:var(--mdc-shape-small, 4px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding, 16px) 0 var(--mdc-button-horizontal-padding, 16px)}.mdc-button.mdc-button--raised mwc-ripple,.mdc-button.mdc-button--unelevated mwc-ripple{--mdc-ripple-color: var(--mdc-theme-on-primary, #fff);--mdc-ripple-hover-opacity: .08;--mdc-ripple-press-opacity: .24;--mdc-ripple-focus-opacity: .24}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px)) 0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));border-width:var(--mdc-button-outline-width, 1px);border-color:var(--mdc-button-outline-color, var(--mdc-theme-primary, #6200ee))}.mdc-button.mdc-button--outlined mwc-ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38));border-color:var(--mdc-button-disabled-outline-color, var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38)))}`;let p=class extends c{};p.styles=d,p=i([Object(n.d)("mwc-button")],p)},,function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return l}));class i{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((r,i)=>{const n=indexedDB.open(e,1);n.onerror=()=>i(n.error),n.onsuccess=()=>r(n.result),n.onupgradeneeded=()=>{n.result.createObjectStore(t)}})}_withIDBStore(e,t){return this._dbp.then(r=>new Promise((i,n)=>{const o=r.transaction(this.storeName,e);o.oncomplete=()=>i(),o.onabort=o.onerror=()=>n(o.error),t(o.objectStore(this.storeName))}))}}let n;function o(){return n||(n=new i),n}function a(e,t=o()){let r;return t._withIDBStore("readonly",t=>{r=t.get(e)}).then(()=>r.result)}function s(e,t,r=o()){return r._withIDBStore("readwrite",r=>{r.put(t,e)})}function l(e=o()){return e._withIDBStore("readwrite",e=>{e.clear()})}},function(e,t,r){"use strict";r(4);const i=r(3).a`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,r){"use strict";r.d(t,"b",(function(){return C})),r.d(t,"a",(function(){return O}));r(4);var i=r(2);const n={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=Object(i.a)(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),r=this.__getNormalizedRect(this.fitInto),i=this._fitInfo.margin,n={width:e.width+i.left+i.right,height:e.height+i.top+i.bottom},o=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,n,e,t,r),a=o.left+i.left,s=o.top+i.top,l=Math.min(r.right-i.right,a+e.width),c=Math.min(r.bottom-i.bottom,s+e.height);a=Math.max(r.left+i.left,Math.min(a,l-this._fitInfo.sizedBy.minWidth)),s=Math.max(r.top+i.top,Math.min(s,c-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(l-a,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(c-s,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=a-e.left+"px",this.style.top=s-e.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,r,i,n){this.__sizeDimension(e,t,r,i,n)},__sizeDimension:function(e,t,r,i,n){var o=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),s="Width"===n?a.width:a.height,l=t===i,c=l?s-e[i]:e[r],d=o.margin[l?r:i],p="offset"+n,u=this[p]-this.sizingTarget[p];this.sizingTarget.style["max"+n]=s-d-c-u+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),r=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var i=r.top-t.top+(r.height-t.height)/2;this.style.top=i+"px"}if(!e.horizontally){var n=r.left-t.left+(r.width-t.width)/2;this.style.left=n+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,r){var i=Math.min(0,e.top)+Math.min(0,r.bottom-(e.top+t.height)),n=Math.min(0,e.left)+Math.min(0,r.right-(e.left+t.width));return Math.abs(i)*t.width+Math.abs(n)*t.height},__getPosition:function(e,t,r,i,n,o){var a,s=[{verticalAlign:"top",horizontalAlign:"left",top:n.top+this.verticalOffset,left:n.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:n.top+this.verticalOffset,left:n.right-r.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:n.bottom-r.height-this.verticalOffset,left:n.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:n.bottom-r.height-this.verticalOffset,left:n.right-r.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,c=s.length;l<c;l++){var d={};for(var p in s[l])d[p]=s[l][p];s.push(d)}s[0].top=s[1].top+=n.height,s[2].top=s[3].top-=n.height,s[4].left=s[6].left+=n.width,s[5].left=s[7].left-=n.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(s.push({verticalAlign:"top",horizontalAlign:"center",top:n.top+this.verticalOffset+(this.noOverlap?n.height:0),left:n.left-i.width/2+n.width/2+this.horizontalOffset}),s.push({verticalAlign:"bottom",horizontalAlign:"center",top:n.bottom-r.height-this.verticalOffset-(this.noOverlap?n.height:0),left:n.left-i.width/2+n.width/2+this.horizontalOffset})),t&&"middle"!==t||(s.push({verticalAlign:"middle",horizontalAlign:"left",top:n.top-i.height/2+n.height/2+this.verticalOffset,left:n.left+this.horizontalOffset+(this.noOverlap?n.width:0)}),s.push({verticalAlign:"middle",horizontalAlign:"right",top:n.top-i.height/2+n.height/2+this.verticalOffset,left:n.right-r.width-this.horizontalOffset-(this.noOverlap?n.width:0)})),"middle"===t&&"center"===e&&s.push({verticalAlign:"middle",horizontalAlign:"center",top:n.top-i.height/2+n.height/2+this.verticalOffset,left:n.left-i.width/2+n.width/2+this.horizontalOffset});for(l=0;l<s.length;l++){var u=s[l],h=u.verticalAlign===t,f=u.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&h&&f){a=u;break}var m=(!t||h)&&(!e||f);if(this.dynamicAlign||m){if(u.offscreenArea=this.__getOffscreenArea(u,r,o),0===u.offscreenArea&&m){a=u;break}a=a||u;var y=u.offscreenArea-a.offscreenArea;(y<0||0===y&&(h||f))&&(a=u)}}return a}};var o=r(128),a=r(10),s=r(165),l=r(5),c=r(3);Object(l.a)({_template:c.a`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&Object(i.a)(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||Object(i.a)(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});var d=r(42),p=r(37);const u=new class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,p.a(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&Object(i.a)(e.root).activeElement;)e=Object(i.a)(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var t=this._overlays[e];if(t){var r=this._overlays.length-1,i=this._overlays[r];if(i&&this._shouldBeBehindOverlay(t,i)&&r--,!(e>=r)){var n=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=n&&this._applyOverlayZ(t,n);e<r;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[r]=t}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var r=this._overlays.length,i=this._overlays[r-1],n=Math.max(this._getZ(i),this._minimumZ),o=this._getZ(e);if(i&&this._shouldBeBehindOverlay(e,i)){this._applyOverlayZ(i,n),r--;var a=this._overlays[r-1];n=Math.max(this._getZ(a),this._minimumZ)}o<=n&&this._applyOverlayZ(e,n),this._overlays.splice(r,0,e),this.trackBackdrop()}removeOverlay(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var t=this._minimumZ;if(e){var r=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);r==r&&(t=r)}return t}_setZ(e,t){e.style.zIndex=t}_applyOverlayZ(e,t){this._setZ(e,t+2)}_overlayInPath(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]}_onCaptureClick(e){var t=this._overlays.length-1;if(-1!==t)for(var r,n=Object(i.a)(e).path;(r=this._overlays[t])&&this._overlayInPath(n)!==r&&(r._onCaptureClick(e),r.allowClickThrough);)t--}_onCaptureFocus(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)}_onCaptureKeyDown(e){var t=this.currentOverlay();t&&(d.a.keyboardEventMatchesKeys(e,"esc")?t._onCaptureEsc(e):d.a.keyboardEventMatchesKeys(e,"tab")&&t._onCaptureTab(e))}_shouldBeBehindOverlay(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};var h,f,m={pageX:0,pageY:0},y=null,b=[],v=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function g(e){w.indexOf(e)>=0||(0===w.length&&function(){h=h||E.bind(void 0);for(var e=0,t=v.length;e<t;e++)document.addEventListener(v[e],h,{capture:!0,passive:!1})}(),w.push(e),f=w[w.length-1],k=[],x=[])}function _(e){var t=w.indexOf(e);-1!==t&&(w.splice(t,1),f=w[w.length-1],k=[],x=[],0===w.length&&function(){for(var e=0,t=v.length;e<t;e++)document.removeEventListener(v[e],h,{capture:!0,passive:!1})}())}const w=[];let k=null,x=null;function E(e){if(e.cancelable&&function(e){var t=Object(i.a)(e).rootTarget;"touchmove"!==e.type&&y!==t&&(y=t,b=function(e){for(var t=[],r=e.indexOf(f),i=0;i<=r;i++)if(e[i].nodeType===Node.ELEMENT_NODE){var n=e[i],o=n.style;"scroll"!==o.overflow&&"auto"!==o.overflow&&(o=window.getComputedStyle(n)),"scroll"!==o.overflow&&"auto"!==o.overflow||t.push(n)}return t}(Object(i.a)(e).path));if(!b.length)return!0;if("touchstart"===e.type)return!1;var r=function(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var r=e.targetTouches[0];t.deltaX=m.pageX-r.pageX,t.deltaY=m.pageY-r.pageY}return t}(e);return!function(e,t,r){if(!t&&!r)return;for(var i=Math.abs(r)>=Math.abs(t),n=0;n<e.length;n++){var o=e[n];if(i?r<0?o.scrollTop>0:o.scrollTop<o.scrollHeight-o.clientHeight:t<0?o.scrollLeft>0:o.scrollLeft<o.scrollWidth-o.clientWidth)return o}}(b,r.deltaX,r.deltaY)}(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];m.pageX=t.pageX,m.pageY=t.pageY}}const C={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:u},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||Object(i.a)(this).querySelector("[autofocus]")||this},get _focusableNodes(){return s.a.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=Object(i.a)(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in this._observer&&Object(i.a)(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||S(this,e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=Object(i.a)(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,r=t?this.__firstFocusableNode:this.__lastFocusableNode,i=t?this.__lastFocusableNode:this.__firstFocusableNode,n=!1;if(r===i)n=!0;else{var o=this._manager.deepActiveElement;n=o===r||o===this}n&&(e.preventDefault(),this._focusedChild=i,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var r=this.__rafs;null!==r[e]&&cancelAnimationFrame(r[e]),r[e]=requestAnimationFrame(function(){r[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,r){e&&t&&this.__isValidScrollAction(r)?("lock"===r&&(this.__saveScrollPosition(),g(this)),this.__addScrollListeners()):(_(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],a.g)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||Object(i.a)(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},S=(e,t)=>{for(let i=t;i;i=(r=i).assignedSlot||r.parentNode||r.host)if(i===e)return!0;var r;return!1},O=[n,o.a,C]},,function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(4);var i=r(2),n=r(22);class o{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var r=this.selection.indexOf(e);r>=0&&this.selection.splice(r,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}const a={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new o(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(i.a)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=Object(i.a)(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,r=0;t=this.items[r];r++)if(this._valueForItem(t)==e)return r},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var r=e[Object(n.b)(this.attrForSelected)];return null!=r?r:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return Object(i.a)(e).observeNodes((function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(e){for(var t=e.target,r=this.items;t&&t!=this;){var i=r.indexOf(t);if(i>=0){var n=this._indexToValue(i);return void this._itemActivate(n,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}}},function(e,t,r){"use strict";var i=r(30),n=r(34),o=r(21),a=r(23),s=r(26),l=r(1),c=r(11);const d=Object(s.b)(i.a);class p extends d{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=this.parentNode;for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Object(n.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let r=this.__instances;for(let i,n=0;n<r.length&&(i=r[n]);n++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,r){if(Object(l.e)(this.as,t)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=r);let n=Object(l.i)(this.as,"items."+i,t);this.notifyPath(n,r)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,r=this.__getMethodHost();return function(){return r[t].apply(r,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let r=0;r<t.length;r++)0===e.indexOf(t[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,t>0?c.d.after(t):c.c,e.bind(this)),Object(a.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(a.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let o=0;o<e.length;o++)t[o]=o;this.__filterFn&&(t=t.filter((t,r,i)=>this.__filterFn(e[t],r,i))),this.__sortFn&&t.sort((t,r)=>this.__sortFn(e[t],e[r]));const r=this.__itemsIdxToInstIdx={};let i=0;const n=Math.min(t.length,this.__limit);for(;i<n;i++){let n=this.__instances[i],o=t[i],a=e[o];r[o]=i,n?(n._setPendingProperty(this.as,a),n._setPendingProperty(this.indexAs,i),n._setPendingProperty(this.itemsIndexAs,o),n._flushProperties()):this.__insertInstance(a,i,o)}for(let o=this.__instances.length-1;o>=i;o--)this.__detachAndRemoveInstance(o)}__detachInstance(e){let t=this.__instances[e];for(let r=0;r<t.children.length;r++){let e=t.children[r];t.root.appendChild(e)}return t}__attachInstance(e,t){let r=this.__instances[e];t.insertBefore(r.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,r){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=r,new this.__ctor(i)}__insertInstance(e,t,r){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,e),i._setPendingProperty(this.indexAs,t),i._setPendingProperty(this.itemsIndexAs,r),i._flushProperties()):i=this.__stampInstance(e,t,r);let n=this.__instances[t+1],o=n?n.children[0]:this;return this.parentNode.insertBefore(i.root,o),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let r=e.slice(6),i=r.indexOf("."),n=i<0?r:r.substring(0,i);if(n==parseInt(n,10)){let e=i<0?"":r.substring(i+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[n],a=this.__instances[o];if(a){let r=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(r,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(n.a)(this.template,e)}}customElements.define(p.is,p)},function(e,t,r){"use strict";var i=r(30),n=r(34),o=r(21),a=r(23),s=r(11),l=r(1);class c extends i.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(a.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(a.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=this.parentNode;if(e){if(!this.__ctor){let e=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Object(n.b)(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(this.previousSibling!==t[t.length-1])for(let r,i=0;i<t.length&&(r=t[i]);i++)e.insertBefore(r,this)}}else this.__instance=new this.__ctor,e.insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=e[0].parentNode;if(t)for(let r,i=0;i<e.length&&(r=e[i]);i++)t.removeChild(r)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(c.is,c)},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(4);var i=r(5),n=r(3);const o=Object(i.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){o.instance||(o.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});o.instance=null,o.requestAvailability=function(){o.instance||(o.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(o.instance):document.addEventListener("load",(function(){document.body.appendChild(o.instance)}))}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(4),r(141);var i=r(83),n=r(2);const o={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){i.b._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Object(n.a)(t).appendChild(this._ripple),e){var r=Object(n.a)(this._rippleContainer||this),i=Object(n.a)(e).rootTarget;r.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},function(e,t,r){"use strict";function i(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}var n=r(0),o=r(86),a=r(63),s=r(50),l=r(87);class c extends o.a{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=a.a}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}render(){const e={"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,hover:this.hovering,primary:this.primary,accent:this.accent,disabled:this.disabled,activated:this.activated,selected:this.selected};return n.f`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Object(s.a)(e)}"
          style="${Object(l.a)({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}i([Object(n.i)(".mdc-ripple-surface")],c.prototype,"mdcRoot",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"primary",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"accent",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"unbounded",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"disabled",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"activated",void 0),i([Object(n.h)({type:Boolean})],c.prototype,"selected",void 0),i([Object(n.g)()],c.prototype,"hovering",void 0),i([Object(n.g)()],c.prototype,"bgFocused",void 0),i([Object(n.g)()],c.prototype,"fgActivation",void 0),i([Object(n.g)()],c.prototype,"fgDeactivation",void 0),i([Object(n.g)()],c.prototype,"fgScale",void 0),i([Object(n.g)()],c.prototype,"fgSize",void 0),i([Object(n.g)()],c.prototype,"translateStart",void 0),i([Object(n.g)()],c.prototype,"translateEnd",void 0),i([Object(n.g)()],c.prototype,"leftPos",void 0),i([Object(n.g)()],c.prototype,"topPos",void 0);const d=n.c`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none}.primary{--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}.accent{--mdc-ripple-color: var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface{top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden;--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.hover::before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{opacity:.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface.activated::before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface.activated.hover::before{opacity:.16;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated.mdc-ripple-upgraded--background-focused::before{opacity:.24;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.12)}.mdc-ripple-surface.selected::before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface.selected.hover::before{opacity:.12;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected.mdc-ripple-upgraded--background-focused::before{opacity:.2;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.08)}.mdc-ripple-surface.disabled{--mdc-ripple-color: transparent}`;let p=class extends c{};p.styles=d,p=i([Object(n.d)("mwc-ripple")],p)},function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(4);var i=r(42),n=r(44),o=r(2),a=r(30);const s={NextLabelID:1,NextAddonID:1,NextInputID:1},l={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!a.a&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=Object(o.a)(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var r="paper-input-add-on-"+s.NextAddonID++;t.id=r,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,r)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){n.a._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(r){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=Object(o.a)(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+s.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+s.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},c=[n.a,i.a,l]},,function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(69),n=r(61),o=r(63),a=r(62),s=r(9);const l=r(0).c`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`,c=Object(a.b)(window);class d{constructor(e){this.foundation=e}startPress(){this.foundation.activate()}endPress(){this.foundation.deactivate()}startFocus(){this.foundation.handleFocus()}endFocus(){this.foundation.handleBlur()}destroy(){this.foundation.destroy()}setUnbounded(e){this.foundation.setUnbounded(e)}}const p=navigator.userAgent.match(/Safari/);let u=!1;const h=e=>{p&&!u&&(()=>{u=!0;const e=document.createElement("style"),t=new s.b({templateFactory:s.l});t.appendInto(e),t.setValue(l),t.commit(),document.head.appendChild(e)})();const t=e.surfaceNode,r=e.interactionNode||t;r.getRootNode()!==t.getRootNode()&&""===r.style.position&&(r.style.position="relative");const a={browserSupportsCssVars:()=>c,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>Object(n.b)(r,":active"),isSurfaceDisabled:()=>Boolean(r.hasAttribute("disabled")),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>r.contains(e),registerInteractionHandler:(e,t)=>r.addEventListener(e,t,Object(i.a)()),deregisterInteractionHandler:(e,t)=>r.removeEventListener(e,t,Object(i.a)()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,Object(i.a)()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,Object(i.a)()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,r)=>t.style.setProperty(e,r),computeBoundingRect:()=>t.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})},h=new o.a(a);return h.init(),new d(h)},f=new WeakMap,m=Object(s.f)((e={})=>t=>{const r=t.committer.element,i=e.interactionNode||r;let n=t.value;const o=f.get(n);void 0!==o&&o!==i&&(n.destroy(),n=s.h),n===s.h?(n=h(Object.assign({},e,{surfaceNode:r})),f.set(n,i),t.setValue(n)):(void 0!==e.unbounded&&n.setUnbounded(e.unbounded),void 0!==e.disabled&&n.setUnbounded(e.disabled)),!0===e.active?n.startPress():!1===e.active&&n.endPress()})},,function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(4);var i=r(2),n=r(10),o=new Set;const a={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():n.g||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(i.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(o.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(34);const n={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(i.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(i.a)(this._templatizerTemplate,e)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(26);let n;n=i.a._mutablePropertyChange;const o={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,r){return n(this,e,t,r,this.mutableData)}}},function(e,t){const r=document.createElement("template");r.setAttribute("style","display: none;"),r.innerHTML='<style>\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin"),\n  local("Roboto-Thin"),\n  url(/static/fonts/roboto/Roboto-Thin.woff2) format("woff2");\nfont-weight: 100;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin Italic"),\n  local("Roboto-ThinItalic"),\n  url(/static/fonts/roboto/Roboto-ThinItalic.woff2) format("woff2");\nfont-weight: 100;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light"),\n  local("Roboto-Light"),\n  url(/static/fonts/roboto/Roboto-Light.woff2) format("woff2");\nfont-weight: 300;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light Italic"),\n  local("Roboto-LightItalic"),\n  url(/static/fonts/roboto/Roboto-LightItalic.woff2) format("woff2");\nfont-weight: 300;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Regular"),\n  local("Roboto-Regular"),\n  url(/static/fonts/roboto/Roboto-Regular.woff2) format("woff2");\nfont-weight: 400;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Italic"),\n  local("Roboto-Italic"),\n  url(/static/fonts/roboto/Roboto-RegularItalic.woff2) format("woff2");\nfont-weight: 400;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium"),\n  local("Roboto-Medium"),\n  url(/static/fonts/roboto/Roboto-Medium.woff2) format("woff2");\nfont-weight: 500;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium Italic"),\n  local("Roboto-MediumItalic"),\n  url(/static/fonts/roboto/Roboto-MediumItalic.woff2) format("woff2");\nfont-weight: 500;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold"),\n  local("Roboto-Bold"),\n  url(/static/fonts/roboto/Roboto-Bold.woff2) format("woff2");\nfont-weight: 700;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold Italic"),\n  local("Roboto-BoldItalic"),\n  url(/static/fonts/roboto/Roboto-BoldItalic.woff2) format("woff2");\nfont-weight: 700;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black"),\n  local("Roboto-Black"),\n  url(/static/fonts/roboto/Roboto-Black.woff2) format("woff2");\nfont-weight: 900;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black Italic"),\n  local("Roboto-BlackItalic"),\n  url(/static/fonts/roboto/Roboto-BlackItalic.woff2) format("woff2");\nfont-weight: 900;\nfont-style: italic;\n}\n</style>',document.head.appendChild(r.content)},function(e,t,r){"use strict";r(52),r(60),r(51),r(113),r(59),r(91);var i=r(53);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML=`<custom-style>\n  <style>\n    /*\n      ioBroker default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      --error-color: #db4437;\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* for label-badge */\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n\n      /*\n        Paper-styles color.html dependency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --mwc-switch-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* set our slider style */\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* markdown styles */\n      --markdown-code-background-color: #f6f8fa;\n\n      /* rgb */\n      --rgb-primary-color: 3, 169, 244;\n      --rgb-accent-color: 255, 152, 0;\n      --rgb-primary-text-color: 33, 33, 33;\n      --rgb-secondary-text-color: 114, 114, 114;\n      --rgb-text-primary-color: 255, 255, 255;\n      --rgb-card-background-color: 255, 255, 255;\n\n      ${Object.entries(i.a).map(([e,t])=>`--${e}: ${t};`).join("")}\n    }\n\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) > .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll > .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style>`,document.head.appendChild(n.content)},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));const i=()=>{const e={},t=new URLSearchParams(location.search);for(const[r,i]of t.entries())e[r]=i;return e}},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(0);function n(e){var t,r=c(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function s(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}let p=function(e,t,r,i){var p=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!a(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=c(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:l(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=l(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var u=0;u<i.length;u++)p=i[u](p);var h=t((function(e){p.initializeInstanceElements(e,f.elements)}),r),f=p.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},i=0;i<e.length;i++){var n,l=e[i];if("method"===l.kind&&(n=t.find(r)))if(s(l.descriptor)||s(n.descriptor)){if(a(l)||a(n))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");n.descriptor=l.descriptor}else{if(a(l)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");n.decorators=l.decorators}o(l,n)}else t.push(l)}return t}(h.d.map(n)),e);return p.initializeClassElements(h.F,f.elements),p.runClassFinishers(h.F,f.finishers)}([Object(i.d)("ha-svg-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"path",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return i.m`
    <svg 
      viewBox=${this.viewBox||"0 0 24 24"}
      preserveAspectRatio="xMidYMid meet"
      focusable="false">
      <g>
      ${this.path?i.m`<path d=${this.path}></path>`:""}
      </g>
    </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        display: var(--ha-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentcolor;
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
      }
      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: block;
      }
    `}}]}}),i.a)},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(4);var i=r(83),n=r(44);const o=[i.a,n.a,{hostAttributes:{role:"option",tabindex:"0"}}]},function(e,t,r){"use strict";function i(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}var n=r(0),o=r(126);class a extends n.a{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return n.f`<button
    .ripple="${Object(o.a)()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}i([Object(n.h)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),i([Object(n.h)({type:String})],a.prototype,"icon",void 0),i([Object(n.h)({type:String})],a.prototype,"label",void 0);const s=n.c`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`;let l=class extends a{};l.styles=s,l=i([Object(n.d)("mwc-icon-button")],l)},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(4);const i={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},function(e,t,r){"use strict";r(4),r(51);var i=r(170),n=r(5),o=r(3);Object(n.a)({_template:o.a`
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
`,is:"paper-listbox",behaviors:[i.a],hostAttributes:{role:"listbox"}})},function(e,t,r){"use strict";r(4);var i=r(42),n=r(5),o=r(2),a=r(3),s={distance:function(e,t,r,i){var n=e-r,o=t-i;return Math.sqrt(n*n+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function l(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function c(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(o.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}l.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var r=s.distance(e,t,0,0),i=s.distance(e,t,this.width,0),n=s.distance(e,t,0,this.height),o=s.distance(e,t,this.width,this.height);return Math.max(r,i,n,o)}},c.MAX_RADIUS=300,c.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=s.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?s.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,r=1.1*Math.min(Math.sqrt(e+t),c.MAX_RADIUS)+5,i=1.1-r/c.MAX_RADIUS*.2,n=this.mouseInteractionSeconds/i,o=r*(1-Math.pow(80,-n));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new l(this.element)},draw:function(){var e,t,r;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,r=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+r+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+r+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,r=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=s.now(),this.center?(this.xStart=t,this.yStart=r,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=r,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=s.now())},remove:function(){Object(o.a)(Object(o.a)(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Object(n.a)({_template:a.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[i.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==Object(o.a)(this).parentNode.nodeType?this.keyEventTarget=Object(o.a)(this).getOwnerRoot().host:this.keyEventTarget=Object(o.a)(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new c(this);return Object(o.a)(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}})},function(e,t,r){"use strict";r(4);var i=r(121),n=r(66),o=r(5),a=r(2),s=r(3);Object(o.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[n.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){i.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(a.a)(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(a.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,r=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&r)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var r=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(r)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+r+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=n.a.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}})},function(e,t,r){"use strict";r(4),r(59);var i=r(5),n=r(3),o=r(78);Object(i.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[o.a],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}})},function(e,t,r){"use strict";r(4),r(52),r(51),r(59);var i=r(5),n=r(2),o=r(22),a=r(3);const s=a.a`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content),Object(i.a)({_template:a.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Object(o.b)(this.attrForValue)},get _inputElement(){return Object(n.a)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,r=0;t=this._addons[r];r++)t.update(e)},_computeInputContentClass:function(e,t,r,i,n){var o="input-content";if(e)n&&(o+=" label-is-hidden"),i&&(o+=" is-invalid");else{var a=this.querySelector("label");t||n?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",i?o+=" is-invalid":r&&(o+=" label-is-highlighted")):(a&&(this.$.labelAndInputContainer.style.position="relative"),i&&(o+=" is-invalid"))}return r&&(o+=" focused"),o},_computeUnderlineClass:function(e,t){var r="underline";return t?r+=" is-invalid":e&&(r+=" is-highlighted"),r},_computeAddOnContentClass:function(e,t){var r="add-on-content";return t?r+=" is-invalid":e&&(r+=" is-highlighted"),r}})},function(e,t,r){"use strict";r(4),r(51),r(59);var i=r(5),n=r(3),o=r(78);Object(i.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[o.a],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}})},,,,,function(e,t,r){"use strict";r(153);var i=r(0);r(136);const n=window;"customIconsets"in n||(n.customIconsets={});const o=n.customIconsets;const a=r(157);var s=r(112);const l=new s.a("hass-icon-db","mdi-icon-store"),c=["mdi","hass","hassio","hademo"];let d=[];var p=r(85);function u(e){var t,r=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}const g={};Object(s.c)("_version",l).then(e=>{e?e!==a.version&&Object(s.b)(l).then(()=>Object(s.d)("_version",a.version,l)):Object(s.d)("_version",a.version,l)});const _=Object(p.a)(()=>(async e=>{const t=Object.keys(e),r=await Promise.all(Object.values(e));l._withIDBStore("readwrite",i=>{r.forEach((r,n)=>{Object.entries(r).forEach(([e,t])=>{i.put(t,e)}),delete e[t[n]]})})})(g),2e3),w={};!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!f(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=b(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(m(o.descriptor)||m(n.descriptor)){if(f(o)||f(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(f(o)){if(f(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}h(o,n)}else t.push(o)}return t}(a.d.map(u)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"icon",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_path",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_viewBox",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_legacy",value:()=>!1},{kind:"method",key:"updated",value:function(e){e.has("icon")&&(this._path=void 0,this._viewBox=void 0,this._loadIcon())}},{kind:"method",key:"render",value:function(){return this.icon?this._legacy?i.f`<iron-icon .icon=${this.icon}></iron-icon>`:i.f`<ha-svg-icon
      .path=${this._path}
      .viewBox=${this._viewBox}
    ></ha-svg-icon>`:i.f``}},{kind:"method",key:"_loadIcon",value:async function(){if(!this.icon)return;const[e,t]=this.icon.split(":",2);if(!e||!t)return;if(!c.includes(e)){if(e in o){const r=o[e];return void(r&&this._setCustomPath(r(t)))}return void(this._legacy=!0)}if(this._legacy=!1,t in w)return void(this._path=w[t]);let r;try{r=await(e=>new Promise((t,r)=>{if(d.push([e,t,r]),d.length>1)return;const i=[];l._withIDBStore("readonly",e=>{for(const[t,r]of d)i.push([r,e.get(t)]);d=[]}).then(()=>{for(const[e,t]of i)e(t.result)}).catch(()=>{for(const[,,e]of d)e();d=[]})}))(t)}catch(s){r=void 0}if(r)return this._path=r,void(w[t]=r);const i=(e=>{let t;for(const r of a.parts){if(void 0!==r.start&&e<r.start)break;t=r}return t.file})(t);if(i in g)return void this._setPath(g[i],t);const n=fetch(`/static/mdi/${i}.json`).then(e=>e.json());g[i]=n,this._setPath(n,t),_()}},{kind:"method",key:"_setCustomPath",value:async function(e){const t=await e;this._path=t.path,this._viewBox=t.viewBox}},{kind:"method",key:"_setPath",value:async function(e,t){const r=await e;this._path=r[t],w[t]=r[t]}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        fill: currentcolor;
      }
    `}}]}}),i.a)},function(e,t,r){"use strict";r(4),r(52),r(155);var i=r(5),n=r(3),o=r(137);Object(i.a)({_template:n.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[o.a]})},,function(e,t,r){"use strict";r(52),r(84);var i=r(5),n=r(2),o=r(3),a=r(4);Object(i.a)({_template:o.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:a.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(n.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(n.a)(this.root).appendChild(this._img))}})},,function(e,t,r){"use strict";r(52),r(60),r(51),r(59);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},function(e,t,r){"use strict";r(4),r(42),r(153),r(76),r(158),r(141),r(51),r(183),r(184);var i=r(83),n=r(44),o=r(65),a=r(66),s=r(5),l=r(2),c=r(37),d=r(3);Object(s.a)({_template:d.a`
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
`,is:"paper-dropdown-menu",behaviors:[i.a,n.a,o.a,a.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,r=e.length;t<r;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){c.b(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},function(e){e.exports=JSON.parse('{"version":"4.9.95","parts":[{"file":"ac96ae39d5ca52d23a4ca3d8c6efd5817270091d"},{"start":"alarm-o","file":"d561c36273559890cb6dd9ff93c52f65ebd813c1"},{"start":"arrow-decision-o","file":"c9b7511d0d2534fd6eb9a2d4096ae2d6986c5437"},{"start":"basket-","file":"bc336f888b18158e39d0bf49be0f4c6159b9cc85"},{"start":"blur","file":"119bbb7a5c295866fca20bccb3f56815ad7b9a3d"},{"start":"bus-d","file":"cb82b14ed371a8b31c33d1e86221168c88a2daa1"},{"start":"card-s","file":"c696f5a7ff858eed9b0360a22afa93a4e149f281"},{"start":"circle-slice-7","file":"0aa03086dceff355dce1a5fd76b655532d1ce106"},{"start":"comment-t","file":"b80a4774f52c2c2a5e4239cc559281cb5a46541e"},{"start":"cursor-m","file":"689ebae34d4c444f2ac79c845935f6a39d9cb55e"},{"start":"door-closed-","file":"e3d51e324319d10fd3e55ac99e0748aa4e5055ee"},{"start":"eraser-","file":"42a1c8b700556b7e088be85381b9ac492be31732"},{"start":"file-pdf-o","file":"6c687283fbb6d8413dccbaac610e5e91917d0197"},{"start":"folder-alert-","file":"8be2f984e49a6eaa69a04fd95bd805b3331d94ae"},{"start":"gamepad-circle-l","file":"986ac139fe53bb8be3fedc1ee88af3d7d3e5d53e"},{"start":"google-p","file":"dafb98730fb6f5fcb84b8b94daa920f839d40489"},{"start":"help-network-","file":"a9beb4f10e3575df275e888c1160fc0c1f479a6e"},{"start":"je","file":"df7feb02fe5538edfabb04344646a7318b595259"},{"start":"layers-ou","file":"d8a4c48654c6d31621b08d77a32a5960d64b010c"},{"start":"map-marker-radius-","file":"912daef373e4d5f510836a3b5d195046dfba22c2"},{"start":"music-","file":"cdd1042da2ee7f986e1b035f47901990602c2396"},{"start":"ou","file":"e0ca7b494b7d522f697b00bf83ef596485c7bb98"},{"start":"phone-paused-","file":"93595e945f217083b66408535f56938cb236e91a"},{"start":"qual","file":"d225ac5378ccb48ee4228521f7325526bec0ebd9"},{"start":"safe-square-","file":"bb47adffdf4b9ae3bdcddf438611375c79b73e22"},{"start":"shield-h","file":"344afc4666d56ca2265ec5b8e693b326350c8fcc"},{"start":"source-repository-","file":"369429d8708392e396580146ef6b5b29bdc980a2"},{"start":"table-p","file":"20834d5f95635fd28910309cbdf72cd5249db156"},{"start":"tow","file":"475e7121d81fbc25c95af2cf38622d5192dc005c"},{"start":"vibrate-","file":"56507ed6d56716b4e846f901e9d980a7cdb56555"},{"start":"weather-su","file":"22359538f304ca383bbc4401af6207227c68e4ec"},{"start":"zodiac-li","file":"ad46cd3ed385233a41d3bda8b2975dfcf14a02a3"}]}')},function(e,t,r){"use strict";r(4);var i=r(42),n=r(44),o=r(114),a=r(159),s=r(5),l=r(2),c=r(3);Object(s.a)({_template:c.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[n.a,i.a,o.a,a.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,r=e.length;t<r;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),o.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):o.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):o.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),r=0;r<t.length;r++)t[r].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():o.b._applyFocus.apply(this,arguments)}});const d={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,r){for(var i,n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],o=0;i=n[o];o++)e.style[i]=r;e.style[t]=r},complete:function(e){}};Object(s.a)({is:"fade-in-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});r(51),r(113);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[d],configure:function(e){var t=e.node,r=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:r/2+"px"},{height:r+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[d],configure:function(e){var t=e.node,r=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:r/2+"px"},{width:r+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[d],configure:function(e){var t=e.node,r=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:r+"px"},{width:r-r/20+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[d],configure:function(e){var t=e.node,r=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:r+"px",transform:"translateY(0)"},{height:r/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var p={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const u=Object(s.a)({_template:c.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[i.a,n.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:p.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,r=e.length;t<r;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){n.a._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,r=this.$.trigger;Object(l.a)(t).path.indexOf(r)>-1&&e.preventDefault()}});Object.keys(p).forEach((function(e){u[e]=p[e]}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(4);const i=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var r in t)e[r]=t[r]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,r){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=e?this.animationConfig[e]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var n,o=0;n=i[o];o++)if(n.animatable)n.animatable._getAnimationConfigRecursive(n.type||e,t,r);else if(n.id){var a=t[n.id];a?(a.isClone||(t[n.id]=this._cloneConfig(a),a=t[n.id]),this._copyProperties(a,n)):t[n.id]=n}else r.push(n)},getAnimationConfig:function(e){var t={},r=[];for(var i in this._getAnimationConfigRecursive(e,t,r),t)r.push(t[i]);return r}},{_configureAnimations:function(e){var t=[],r=[];if(e.length>0)for(let o,a=0;o=e[a];a++){let e=document.createElement(o.name);if(e.isNeonAnimation){let t=null;e.configure||(e.configure=function(e){return null}),t=e.configure(o),r.push({result:t,config:o,neonAnimation:e})}else console.warn(this.is+":",o.name,"not found!")}for(var i=0;i<r.length;i++){let e=r[i].result,o=r[i].config,a=r[i].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(n){e=null,console.warn("Couldnt play","(",o.name,").",n)}e&&t.push({neonAnimation:a,config:o,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,r=0;r<e.length;r++)if("finished"!=e[r].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var r=this.getAnimationConfig(e);if(r){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var i=this._configureAnimations(r);if(0!=i.length){this._active[e]=i;for(var n=0;n<i.length;n++)i[n].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var r in t)t[r].animation.cancel()}this._active={}}}]},function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));const i=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>s(e)&&e[i],serialize(e){const{port1:t,port2:r}=new MessageChannel;return function e(t,r=self){r.addEventListener("message",(function n(o){if(!o||!o.data)return;const{id:s,type:l,path:d}=Object.assign({path:[]},o.data),p=(o.data.argumentList||[]).map(m);let u;try{const r=d.slice(0,-1).reduce((e,t)=>e[t],t),n=d.reduce((e,t)=>e[t],t);switch(l){case 0:u=n;break;case 1:r[d.slice(-1)[0]]=m(o.data.value),u=!0;break;case 2:u=n.apply(r,p);break;case 3:u=function(e){return Object.assign(e,{[i]:!0})}(new n(...p));break;case 4:{const{port1:r,port2:i}=new MessageChannel;e(t,i),u=function(e,t){return h.set(e,t),e}(r,[r])}break;case 5:u=void 0}}catch(y){u={value:y,[a]:0}}Promise.resolve(u).catch(e=>({value:e,[a]:0})).then(e=>{const[t,i]=f(e);r.postMessage(Object.assign(Object.assign({},t),{id:s}),i),5===l&&(r.removeEventListener("message",n),c(r))})})),r.start&&r.start()}(e,t),[r,[r]]},deserialize:e=>(e.start(),d(e))}],["throw",{canHandle:e=>s(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function d(e,t){return function e(t,r=[],i=function(){}){let a=!1;const s=new Proxy(i,{get(i,n){if(p(a),n===o)return()=>y(t,{type:5,path:r.map(e=>e.toString())}).then(()=>{c(t),a=!0});if("then"===n){if(0===r.length)return{then:()=>s};const e=y(t,{type:0,path:r.map(e=>e.toString())}).then(m);return e.then.bind(e)}return e(t,[...r,n])},set(e,i,n){p(a);const[o,s]=f(n);return y(t,{type:1,path:[...r,i].map(e=>e.toString()),value:o},s).then(m)},apply(i,o,s){p(a);const l=r[r.length-1];if(l===n)return y(t,{type:4}).then(m);if("bind"===l)return e(t,r.slice(0,-1));const[c,d]=u(s);return y(t,{type:2,path:r.map(e=>e.toString()),argumentList:c},d).then(m)},construct(e,i){p(a);const[n,o]=u(i);return y(t,{type:3,path:r.map(e=>e.toString()),argumentList:n},o).then(m)}});return s}(e,[],t)}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function u(e){const t=e.map(f);return[t.map(e=>e[0]),(r=t.map(e=>e[1]),Array.prototype.concat.apply([],r))];var r}const h=new WeakMap;function f(e){for(const[t,r]of l)if(r.canHandle(e)){const[i,n]=r.serialize(e);return[{type:3,name:t,value:i},n]}return[{type:0,value:e},h.get(e)||[]]}function m(e){switch(e.type){case 3:return l.get(e.name).deserialize(e.value);case 0:return e.value}}function y(e,t,r){return new Promise(i=>{const n=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===n&&(e.removeEventListener("message",t),i(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),r)})}},function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(4);var i=r(65),n=r(66);const o={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},a=[i.a,n.a,o];var s=r(98),l=r(122);const c={_checkedChanged:function(){o._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[s.a,a,c]},function(e,t,r){"use strict";r(4),r(51);var i=r(161),n=r(98),o=r(5),a=r(3),s=r(77);const l=a.a`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),Object(o.a)({_template:l,is:"paper-checkbox",behaviors:[i.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(s.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),t="px",r=e.match(/[A-Za-z]+$/);null!==r&&(t=r[0]);var i=parseFloat(e),n=8/3*i;"px"===t&&(n=Math.floor(n))%2!=i%2&&n++,this.updateStyles({"--paper-checkbox-ink-size":n+t})}}))},_computeCheckboxClass:function(e,t){var r="";return e&&(r+="checked "),t&&(r+="invalid"),r},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,n.b._createRipple.call(this)}})},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(4);var i=r(2),n=Element.prototype,o=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector;const a=new class{getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}isFocusable(e){return o.call(e,"input, select, textarea, button, object")?o.call(e,":not([disabled])"):o.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&o.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}_collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=e;if(!this._isVisible(r))return!1;var n,o=this._normalizedTabIndex(r),a=o>0;o>=0&&t.push(r),n="content"===r.localName||"slot"===r.localName?Object(i.a)(r).getDistributedNodes():Object(i.a)(r.root||r).children;for(var s=0;s<n.length;s++)a=this._collectTabbableNodes(n[s],t)||a;return a}_isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}_sortByTabIndex(e){var t=e.length;if(t<2)return e;var r=Math.ceil(t/2),i=this._sortByTabIndex(e.slice(0,r)),n=this._sortByTabIndex(e.slice(r));return this._mergeSortByTabIndex(i,n)}_mergeSortByTabIndex(e,t){for(var r=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?r.push(t.shift()):r.push(e.shift());return r.concat(e,t)}_hasLowerTabOrder(e,t){var r=Math.max(e.tabIndex,0),i=Math.max(t.tabIndex,0);return 0===r||0===i?i>r:r>i}}},function(e,t,r){"use strict";r(52),r(76),r(188),r(60);var i=r(42),n=r(65),o=r(139),a=r(98),s=r(5),l=r(37);const c=r(4).c`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;c.setAttribute("strip-whitespace",""),Object(s.a)({_template:c,is:"paper-slider",behaviors:[i.a,n.a,a.a,o.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(l.d)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,r,i,n){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",r),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,r=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+r;var i=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(i);var n=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(n+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),r=(e.detail.x-t.left)/this._w*100;this._isRTL&&(r=100-r);var i=this.ratio;this._setTransiting(!0),this._positionKnob(r),i===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,r,i){i||this._setMarkers([]);var n=Math.round((r-t)/this.step);n>e&&(n=e),(n<0||!isFinite(n))&&(n=0),this._setMarkers(new Array(n))},_mergeClasses:function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,a.b._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}})},,function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(9);const n=Object(i.f)((e,t)=>r=>{if(!(r instanceof i.b))throw new Error("dynamicElementDirective can only be used in content bindings");let n=r.value;void 0===n||e.toUpperCase()!==n.tagName?(n=document.createElement(e),t&&Object.entries(t).forEach(([e,t])=>{n[e]=t}),r.setValue(n)):t&&Object.entries(t).forEach(([e,t])=>{n[e]=t})})},,function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return c}));r(4);var i=r(42),n=r(116);const o={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(e){return this._indexToValue(this.indexOf(e))}),this).filter((function(e){return null!=e}),this)):n.a._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter((function(e){return null!=e}));this._selection.clear(t);for(var r=0;r<t.length;r++)this._selection.setItemSelected(t[r],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map((function(e){return this._valueToItem(e)}),this)}},a=[n.a,o];var s=r(2);const l={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),o.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))}),this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,r=this._searchText||"",i=(r+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,n=0;t=this.items[n];n++)if(!t.hasAttribute("disabled")){var o=this.attrForItemTitle||"textContent",a=(t[o]||t.getAttribute(o)||"").trim();if(!(a.length<i)&&a.slice(0,i).toLocaleLowerCase()==r){this._setFocusedItem(t);break}}this._searchText=r,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),r=1;r<e+1;r++){var i=this.items[(t-r+e)%e];if(!i.hasAttribute("disabled")){var n=Object(s.a)(i).getOwnerRoot()||document;if(this._setFocusedItem(i),Object(s.a)(n).activeElement==i)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),r=1;r<e+1;r++){var i=this.items[(t+r)%e];if(!i.hasAttribute("disabled")){var n=Object(s.a)(i).getOwnerRoot()||document;if(this._setFocusedItem(i),Object(s.a)(n).activeElement==i)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),n.a._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");l._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),l._shiftTabPressed=!1}),1)},_onFocus:function(e){if(!l._shiftTabPressed){var t=Object(s.a)(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async((function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()})))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){n.a._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},c=[a,i.a,l]},,function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var i=r(160);let n;const o=async(t,r,o)=>(n||(n=Object(i.a)(new Worker(e,void 0))),await n.renderMarkdown(t,r,o))}).call(this,r(195))},,,,,,,,,function(e,t,r){"use strict";r(138);var i=r(0);r(150);function n(e){var t,r=c(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function s(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var p=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!a(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=c(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:l(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=l(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var u=0;u<i.length;u++)p=i[u](p);var h=t((function(e){p.initializeInstanceElements(e,f.elements)}),r),f=p.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},i=0;i<e.length;i++){var n,l=e[i];if("method"===l.kind&&(n=t.find(r)))if(s(l.descriptor)||s(n.descriptor)){if(a(l)||a(n))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");n.descriptor=l.descriptor}else{if(a(l)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");n.decorators=l.decorators}o(l,n)}else t.push(l)}return t}(h.d.map(n)),e);p.initializeClassElements(h.F,f.elements),p.runClassFinishers(h.F,f.finishers)}([Object(i.d)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[Object(i.h)({type:String})],key:"icon",value:()=>""},{kind:"field",decorators:[Object(i.h)({type:String})],key:"label",value:()=>""},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!0})}},{kind:"method",key:"render",value:function(){return i.f`
      <mwc-icon-button .label=${this.label} .disabled=${this.disabled}>
        <ha-icon .icon=${this.icon}></ha-icon>
      </mwc-icon-button>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        display: inline-block;
        outline: none;
      }
      :host([disabled]) {
        pointer-events: none;
      }
      mwc-icon-button {
        --mdc-theme-on-primary: currentColor;
        --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
      }
      ha-icon {
        --ha-icon-display: inline;
      }
    `}}]}}),i.a)},function(e,t,r){"use strict";r(4),r(52),r(59),r(155);var i=r(5),n=r(3),o=r(137);Object(i.a)({_template:n.a`
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
`,is:"paper-icon-item",behaviors:[o.a]})},function(e,t,r){"use strict";r(185);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(i.content)},function(e,t,r){"use strict";r(51);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},function(e,t,r){"use strict";r(4);var i=r(84),n=r(5),o=r(2);Object(n.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new i.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var r=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(r){var i=Object(o.a)(e.root||e);return i.insertBefore(r,i.childNodes[0]),e._svgIcon=r}return null},removeIcon:function(e){e._svgIcon&&(Object(o.a)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Object(o.a)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,r){if(e){var i=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=i.getAttribute("viewBox")||"0 0 "+t+" "+t,a="pointer-events: none; display: block; width: 100%; height: 100%;";return r&&i.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",o),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=a,n.appendChild(i).removeAttribute("id"),n}return null}})},,,function(e,t,r){"use strict";r(4),r(52),r(60);var i=r(139),n=r(5),o=r(3);Object(n.a)({_template:o.a`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[i.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var r="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=r},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,r,i,n){e=this._clampValue(e),t=this._clampValue(t);var o=100*this._calcRatio(e),a=100*this._calcRatio(t);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,a),this.secondaryProgress=e,n?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",r),this.setAttribute("aria-valuemax",i)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}})},function(e,t,r){"use strict";r(166);const i=customElements.get("paper-slider");customElements.define("ha-paper-slider",class extends i{static get template(){const e=document.createElement("template");e.innerHTML=i.template.innerHTML;const t=document.createElement("style");return t.innerHTML='\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .disabled.ring > .slider-knob > .slider-knob-inner {\n        background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n        border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ',e.content.appendChild(t),e}})},,function(e,t,r){"use strict";r(156),r(76),r(151),r(140);var i=r(3),n=r(30);class o extends n.a{static get template(){return i.a`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
          color: var(
            --paper-input-container-color,
            var(--secondary-text-color)
          );
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          label="[[hourLabel]]"
          on-change="_shouldFormatHour"
          on-focus="_onFocus"
          required
          prevent-invalid-input
          auto-validate="[[autoValidate]]"
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          label="[[minLabel]]"
          on-change="_formatMin"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span hidden$="[[!enableSecond]]" suffix slot="suffix">:</span>
        </paper-input>

        <!-- Sec Input -->
        <paper-input
          id="sec"
          type="number"
          value="{{sec}}"
          label="[[secLabel]]"
          on-change="_formatSec"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
          hidden$="[[!enableSecond]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},floatInputLabels:{type:Boolean,value:!1},alwaysFloatInputLabels:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},sec:{type:String,notify:!0},hourLabel:{type:String,value:""},minLabel:{type:String,value:":"},secLabel:{type:String,value:""},enableSecond:{type:Boolean,value:!1},noHoursLimit:{type:Boolean,value:!1},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, sec, amPm)"}}}validate(){var e=!0;return!this.$.hour.validate()|!this.$.min.validate()&&(e=!1),this.enableSecond&&!this.$.sec.validate()&&(e=!1),12!==this.format||this.$.dropdown.validate()||(e=!1),e}_computeTime(e,t,r,i){let n;return(t||e||r&&this.enableSecond)&&(r=r||"00",n=(t=t||"00")+":"+(e=e||"00"),this.enableSecond&&r&&(n=n+":"+r),12===this.format&&(n=n+" "+i)),n}_onFocus(e){e.target.inputElement.inputElement.select()}_formatSec(){1===this.sec.toString().length&&(this.sec=this.sec.toString().padStart(2,"0"))}_formatMin(){1===this.min.toString().length&&(this.min=this.min.toString().padStart(2,"0"))}_shouldFormatHour(){24===this.format&&1===this.hour.toString().length&&(this.hour=this.hour.toString().padStart(2,"0"))}_computeHourMax(e){return this.noHoursLimit?null:12===e?e:23}_equal(e,t){return e===t}}customElements.define("paper-time-input",o)},function(e,t,r){"use strict";var i=r(0),n=r(168),o=r(12);r(162);function a(e){var t,r=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=p(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var h=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(h.d.map(a)),e);n.initializeClassElements(h.F,f.elements),n.runClassFinishers(h.F,f.finishers)}([Object(i.d)("ha-form-boolean")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.i)("paper-checkbox")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return i.f`
      <paper-checkbox .checked=${this.data} @change=${this._valueChanged}>
        ${this.label}
      </paper-checkbox>
    `}},{kind:"method",key:"_valueChanged",value:function(e){Object(o.a)(this,"value-changed",{value:e.target.checked})}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      paper-checkbox {
        display: block;
        padding: 22px 0;
      }
    `}}]}}),i.a);r(76);function h(e){var t,r=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function b(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=v(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:b(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=b(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(y(o.descriptor)||y(n.descriptor)){if(m(o)||m(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(m(o)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}f(o,n)}else t.push(o)}return t}(a.d.map(h)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form-float")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.i)("paper-input")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return i.f`
      <paper-input
        .label=${this.label}
        .value=${this._value}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        @value-changed=${this._valueChanged}
      >
        <span suffix="" slot="suffix">${this.suffix}</span>
      </paper-input>
    `}},{kind:"get",key:"_value",value:function(){return this.data||0}},{kind:"method",key:"_valueChanged",value:function(e){const t=Number(e.target.value);this._value!==t&&Object(o.a)(this,"value-changed",{value:t})}}]}}),i.a);r(166),r(189);function _(e){var t,r=C(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function k(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!k(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=C(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(x(o.descriptor)||x(n.descriptor)){if(k(o)||k(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(k(o)){if(k(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}w(o,n)}else t.push(o)}return t}(a.d.map(_)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form-integer")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.i)("paper-input ha-paper-slider")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return"valueMin"in this.schema&&"valueMax"in this.schema?i.f`
          <div>
            ${this.label}
            <div class="flex">
              ${this.schema.optional&&void 0===this.schema.default?i.f`
                    <ha-checkbox
                      @change=${this._handleCheckboxChange}
                      .checked=${void 0!==this.data}
                    ></ha-checkbox>
                  `:""}
              <ha-paper-slider
                pin=""
                .value=${this._value}
                .min=${this.schema.valueMin}
                .max=${this.schema.valueMax}
                .disabled=${void 0===this.data}
                @value-changed=${this._valueChanged}
              ></ha-paper-slider>
            </div>
          </div>
        `:i.f`
          <paper-input
            type="number"
            .label=${this.label}
            .value=${this._value}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            @value-changed=${this._valueChanged}
          ></paper-input>
        `}},{kind:"get",key:"_value",value:function(){var e;return this.data||(null===(e=this.schema.description)||void 0===e?void 0:e.suggested_value)||this.schema.default||0}},{kind:"method",key:"_handleCheckboxChange",value:function(e){const t=e.target.checked;Object(o.a)(this,"value-changed",{value:t?this._value:void 0})}},{kind:"method",key:"_valueChanged",value:function(e){const t=Number(e.target.value);this._value!==t&&Object(o.a)(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      .flex {
        display: flex;
      }
    `}}]}}),i.a);r(182),r(140),r(158),r(141),r(150);function O(e){var t,r=I(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function A(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function T(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function j(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function I(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=I(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:j(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=j(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(T(o.descriptor)||T(n.descriptor)){if(P(o)||P(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(P(o)){if(P(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}A(o,n)}else t.push(o)}return t}(a.d.map(O)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form-multi_select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_init",value:()=>!1},{kind:"field",decorators:[Object(i.i)("paper-menu-button")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){const e=Array.isArray(this.schema.options)?this.schema.options:Object.entries(this.schema.options),t=this.data||[];return i.f`
      <paper-menu-button horizontal-align="right" vertical-offset="8">
        <div class="dropdown-trigger" slot="dropdown-trigger">
          <paper-ripple></paper-ripple>
          <paper-input
            id="input"
            type="text"
            readonly
            value=${t.map(e=>this.schema.options[e]||e).join(", ")}
            label=${this.label}
            input-role="button"
            input-aria-haspopup="listbox"
            autocomplete="off"
          >
            <ha-icon
              icon="paper-dropdown-menu:arrow-drop-down"
              suffix
              slot="suffix"
            ></ha-icon>
          </paper-input>
        </div>
        <paper-listbox
          multi
          slot="dropdown-content"
          attr-for-selected="item-value"
          .selectedValues=${t}
          @selected-items-changed=${this._valueChanged}
          @iron-select=${this._onSelect}
        >
          ${e.map(e=>{const r=this._optionValue(e);return i.f`
              <paper-icon-item .itemValue=${r}>
                <paper-checkbox
                  .checked=${t.includes(r)}
                  slot="item-icon"
                ></paper-checkbox>
                ${this._optionLabel(e)}
              </paper-icon-item>
            `})}
        </paper-listbox>
      </paper-menu-button>
    `}},{kind:"method",key:"firstUpdated",value:function(){this.updateComplete.then(()=>{var e,t,r;const i=null===(e=null===(t=this.shadowRoot)||void 0===t||null===(r=t.querySelector("paper-input"))||void 0===r?void 0:r.inputElement)||void 0===e?void 0:e.inputElement;i&&(i.style.textOverflow="ellipsis")})}},{kind:"method",key:"_optionValue",value:function(e){return Array.isArray(e)?e[0]:e}},{kind:"method",key:"_optionLabel",value:function(e){return Array.isArray(e)?e[1]||e[0]:e}},{kind:"method",key:"_onSelect",value:function(e){e.stopPropagation()}},{kind:"method",key:"_valueChanged",value:function(e){e.detail.value&&this._init?Object(o.a)(this,"value-changed",{value:e.detail.value.map(e=>e.itemValue)},{bubbles:!1}):this._init=!0}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      paper-menu-button {
        display: block;
        padding: 0;
        --paper-item-icon-width: 34px;
      }
      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;
      }
      paper-input {
        text-overflow: ellipsis;
      }
    `}}]}}),i.a);r(191);function z(e){var t,r=M(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function N(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function R(e){return e.decorators&&e.decorators.length}function F(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function L(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function M(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!R(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=M(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:L(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=L(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(F(o.descriptor)||F(n.descriptor)){if(R(o)||R(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(R(o)){if(R(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}N(o,n)}else t.push(o)}return t}(a.d.map(z)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form-positive_time_period_dict")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.i)("paper-time-input")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return i.f`
      <paper-time-input
        .label=${this.label}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        error-message="Required"
        enable-second
        format="24"
        .hour=${this._parseDuration(this._hours)}
        .min=${this._parseDuration(this._minutes)}
        .sec=${this._parseDuration(this._seconds)}
        @hour-changed=${this._hourChanged}
        @min-changed=${this._minChanged}
        @sec-changed=${this._secChanged}
        float-input-labels
        no-hours-limit
        always-float-input-labels
        hour-label="hh"
        min-label="mm"
        sec-label="ss"
      ></paper-time-input>
    `}},{kind:"get",key:"_hours",value:function(){return this.data&&this.data.hours?Number(this.data.hours):0}},{kind:"get",key:"_minutes",value:function(){return this.data&&this.data.minutes?Number(this.data.minutes):0}},{kind:"get",key:"_seconds",value:function(){return this.data&&this.data.seconds?Number(this.data.seconds):0}},{kind:"method",key:"_parseDuration",value:function(e){return e.toString().padStart(2,"0")}},{kind:"method",key:"_hourChanged",value:function(e){this._durationChanged(e,"hours")}},{kind:"method",key:"_minChanged",value:function(e){this._durationChanged(e,"minutes")}},{kind:"method",key:"_secChanged",value:function(e){this._durationChanged(e,"seconds")}},{kind:"method",key:"_durationChanged",value:function(e,t){let r=Number(e.detail.value);if(r===this["_"+t])return;let i=this._hours,n=this._minutes;"seconds"===t&&r>59&&(n+=Math.floor(r/60),r%=60),"minutes"===t&&r>59&&(i+=Math.floor(r/60),r%=60),Object(o.a)(this,"value-changed",{value:Object.assign({hours:i,minutes:n,seconds:this._seconds},{[t]:r})})}}]}}),i.a);r(156),r(151);function $(e){var t,r=K(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function H(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function V(e){return e.decorators&&e.decorators.length}function U(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function q(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function K(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!V(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=K(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:q(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=q(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(U(o.descriptor)||U(n.descriptor)){if(V(o)||V(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(V(o)){if(V(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}H(o,n)}else t.push(o)}return t}(a.d.map($)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form-select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.i)("paper-dropdown-menu")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return i.f`
      <paper-dropdown-menu .label=${this.label}>
        <paper-listbox
          slot="dropdown-content"
          attr-for-selected="item-value"
          .selected=${this.data}
          @selected-item-changed=${this._valueChanged}
        >
          ${this.schema.options.map(e=>i.f`
              <paper-item .itemValue=${this._optionValue(e)}>
                ${this._optionLabel(e)}
              </paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `}},{kind:"method",key:"_optionValue",value:function(e){return Array.isArray(e)?e[0]:e}},{kind:"method",key:"_optionLabel",value:function(e){return Array.isArray(e)?e[1]||e[0]:e}},{kind:"method",key:"_valueChanged",value:function(e){e.detail.value&&Object(o.a)(this,"value-changed",{value:e.detail.value.itemValue})}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      paper-dropdown-menu {
        display: block;
      }
    `}}]}}),i.a);r(181);function Y(e){var t,r=Q(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function W(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function G(e){return e.decorators&&e.decorators.length}function Z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function J(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Q(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!G(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ee(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Q(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:J(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=J(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Z(o.descriptor)||Z(n.descriptor)){if(G(o)||G(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(G(o)){if(G(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}W(o,n)}else t.push(o)}return t}(a.d.map(Y)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form-string")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"label",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"suffix",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_unmaskedPassword",value:()=>!1},{kind:"field",decorators:[Object(i.i)("paper-input")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return this.schema.name.includes("password")?i.f`
          <paper-input
            .type=${this._unmaskedPassword?"text":"password"}
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            @value-changed=${this._valueChanged}
          >
            <ha-icon-button
              toggles
              slot="suffix"
              .icon=${this._unmaskedPassword?"hass:eye-off":"hass:eye"}
              id="iconButton"
              title="Click to toggle between masked and clear password"
              @click=${this._toggleUnmaskedPassword}
            >
            </ha-icon-button>
          </paper-input>
        `:i.f`
          <paper-input
            .type=${this._stringType}
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            error-message="Required"
            @value-changed=${this._valueChanged}
          ></paper-input>
        `}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.target.value;this.data!==t&&Object(o.a)(this,"value-changed",{value:t})}},{kind:"get",key:"_stringType",value:function(){if(this.schema.format){if(["email","url"].includes(this.schema.format))return this.schema.format;if("fqdnurl"===this.schema.format)return"url"}return"text"}}]}}),i.a);function te(e){var t,r=ae(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function re(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ie(e){return e.decorators&&e.decorators.length}function ne(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function oe(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ae(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ie(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?se(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ae(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:oe(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=oe(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(ne(o.descriptor)||ne(n.descriptor)){if(ie(o)||ie(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ie(o)){if(ie(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}re(o,n)}else t.push(o)}return t}(a.d.map(te)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-form")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"data",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"schema",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"error",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"computeError",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"computeLabel",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"computeSuffix",value:void 0},{kind:"method",key:"focus",value:function(){const e=this.shadowRoot.getElementById("child-form")||this.shadowRoot.querySelector("ha-form");e&&e.focus()}},{kind:"method",key:"render",value:function(){return Array.isArray(this.schema)?i.f`
        ${this.error&&this.error.base?i.f`
              <div class="error">
                ${this._computeError(this.error.base,this.schema)}
              </div>
            `:""}
        ${this.schema.map(e=>i.f`
            <ha-form
              .data=${this._getValue(this.data,e)}
              .schema=${e}
              .error=${this._getValue(this.error,e)}
              @value-changed=${this._valueChanged}
              .computeError=${this.computeError}
              .computeLabel=${this.computeLabel}
              .computeSuffix=${this.computeSuffix}
            ></ha-form>
          `)}
      `:i.f`
      ${this.error?i.f`
            <div class="error">
              ${this._computeError(this.error,this.schema)}
            </div>
          `:""}
      ${Object(n.a)("ha-form-"+this.schema.type,{schema:this.schema,data:this.data,label:this._computeLabel(this.schema),suffix:this._computeSuffix(this.schema),id:"child-form"})}
    `}},{kind:"method",key:"_computeLabel",value:function(e){return this.computeLabel?this.computeLabel(e):e?e.name:""}},{kind:"method",key:"_computeSuffix",value:function(e){return this.computeSuffix?this.computeSuffix(e):e&&e.description?e.description.suffix:""}},{kind:"method",key:"_computeError",value:function(e,t){return this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_getValue",value:function(e,t){return e?e[t.name]:null}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.target.schema,r=this.data;r[t.name]=e.detail.value,Object(o.a)(this,"value-changed",{value:Object.assign({},r)})}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      .error {
        color: var(--error-color);
      }
    `}}]}}),i.a)},function(e,t,r){"use strict";var i=r(0),n=r(12),o=r(172);function a(e){var t,r=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function h(e,t,r){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=p(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var h=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(h.d.map(a)),e);n.initializeClassElements(h.F,f.elements),n.runClassFinishers(h.F,f.finishers)}([Object(i.d)("ha-markdown-element")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[Object(i.h)()],key:"content",value:void 0},{kind:"field",decorators:[Object(i.h)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[Object(i.h)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"method",key:"update",value:function(e){h(f(r.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:async function(){this.innerHTML=await Object(o.a)(this.content,{breaks:this.breaks,gfm:!0,tables:!0},{allowSvg:this.allowSvg}),this._resize();const e=document.createTreeWalker(this,1,null,!1);for(;e.nextNode();){const t=e.currentNode;t instanceof HTMLAnchorElement&&t.host!==document.location.host?(t.target="_blank",t.rel="noreferrer",t.rel="noreferrer noopener"):t instanceof HTMLImageElement&&t.addEventListener("load",this._resize)}}},{kind:"field",key:"_resize",value(){return()=>Object(n.a)(this,"iron-resize")}}]}}),i.b);function m(e){var t,r=_(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function _(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!b(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=_(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(b(o)||b(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(b(o)){if(b(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}y(o,n)}else t.push(o)}return t}(a.d.map(m)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("ha-markdown")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"content",value:void 0},{kind:"field",decorators:[Object(i.h)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[Object(i.h)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"method",key:"render",value:function(){return this.content?i.f`<ha-markdown-element
      .content=${this.content}
      .allowSvg=${this.allowSvg}
      .breaks=${this.breaks}
    ></ha-markdown-element>`:i.f``}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        display: block;
      }
      ha-markdown-element {
        -ms-user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
      }
      ha-markdown-element > *:first-child {
        margin-top: 0;
      }
      ha-markdown-element > *:last-child {
        margin-bottom: 0;
      }
      ha-markdown-element a {
        color: var(--primary-color);
      }
      ha-markdown-element img {
        max-width: 100%;
      }
      ha-markdown-element code,
      pre {
        background-color: var(--markdown-code-background-color, none);
        border-radius: 3px;
      }
      ha-markdown-element code {
        font-size: 85%;
        padding: 0.2em 0.4em;
      }
      ha-markdown-element pre code {
        padding: 0;
      }
      ha-markdown-element pre {
        padding: 16px;
        overflow: auto;
        line-height: 1.45;
      }
      ha-markdown-element h2 {
        font-size: 1.5em !important;
        font-weight: bold !important;
      }
    `}}]}}),i.a)},,function(e,t,r){e.exports=r.p+"chunk.7d94b0308c0e4dacfb13.worker.js"},,,,,,function(e,t,r){"use strict";r.r(t);r(104),r(118),r(117);var i=r(0),n=r(73),o=r(108),a=r(82);r(110),r(192),r(193);function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let y=function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(d(o.descriptor)||d(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(a.d.map(s)),e);return n.initializeClassElements(a.F,f.elements),n.runClassFinishers(a.F,f.finishers)}(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[Object(i.h)()],key:"authProvider",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"clientId",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"redirectUri",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"oauth2State",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_state",value:()=>"loading"},{kind:"field",decorators:[Object(i.h)()],key:"_stepData",value:()=>({})},{kind:"field",decorators:[Object(i.h)()],key:"_step",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_errorMessage",value:void 0},{kind:"method",key:"render",value:function(){return i.f`
      <form>
        ${this._renderForm()}
      </form>
    `}},{kind:"method",key:"firstUpdated",value:function(e){if(f(m(r.prototype),"firstUpdated",this).call(this,e),null==this.clientId||null==this.redirectUri)return console.error("clientId and redirectUri must not be null",this.clientId,this.redirectUri),this._state="error",void(this._errorMessage=this._unknownError());this.addEventListener("keypress",e=>{13===e.keyCode&&this._handleSubmit(e)})}},{kind:"method",key:"updated",value:function(e){f(m(r.prototype),"updated",this).call(this,e),e.has("authProvider")&&this._providerChanged(this.authProvider)}},{kind:"method",key:"_renderForm",value:function(){switch(this._state){case"step":return null==this._step?i.f``:i.f`
          ${this._renderStep(this._step)}
          <div class="action">
            <mwc-button raised @click=${this._handleSubmit}
              >${"form"===this._step.type?this.localize("ui.panel.page-authorize.form.next"):this.localize("ui.panel.page-authorize.form.start_over")}</mwc-button
            >
          </div>
        `;case"error":return i.f`
          <div class="error">
            ${this.localize("ui.panel.page-authorize.form.error","error",this._errorMessage)}
          </div>
        `;case"loading":return i.f` ${this.localize("ui.panel.page-authorize.form.working")} `;default:return i.f``}}},{kind:"method",key:"_renderStep",value:function(e){switch(e.type){case"abort":return i.f`
          ${this.localize("ui.panel.page-authorize.abort_intro")}:
          <ha-markdown
            allowsvg
            breaks
            .content=${this.localize(`ui.panel.page-authorize.form.providers.${e.handler[0]}.abort.${e.reason}`)}
          ></ha-markdown>
        `;case"form":return i.f`
          ${this._computeStepDescription(e)?i.f`
                <ha-markdown
                  breaks
                  .content=${this._computeStepDescription(e)}
                ></ha-markdown>
              `:i.f``}
          <ha-form
            .data=${this._stepData}
            .schema=${e.data_schema}
            .error=${e.errors}
            .computeLabel=${this._computeLabelCallback(e)}
            .computeError=${this._computeErrorCallback(e)}
            @value-changed=${this._stepDataChanged}
          ></ha-form>
        `;default:return i.f``}}},{kind:"method",key:"_providerChanged",value:async function(e){if(this._step&&"form"===this._step.type&&fetch("/auth/login_flow/"+this._step.flow_id,{method:"DELETE",credentials:"same-origin"}).catch(e=>{console.error("Error delete obsoleted auth flow",e)}),null==e)return console.error("No auth provider"),this._state="error",void(this._errorMessage=this._unknownError());try{const t=await fetch("/auth/login_flow",{method:"POST",credentials:"same-origin",body:JSON.stringify({client_id:this.clientId,handler:[e.type,e.id],redirect_uri:this.redirectUri})}),r=await t.json();if(t.ok){if("create_entry"===r.type)return void this._redirect(r.result);await this._updateStep(r)}else this._state="error",this._errorMessage=r.message}catch(t){console.error("Error starting auth flow",t),this._state="error",this._errorMessage=this._unknownError()}}},{kind:"method",key:"_redirect",value:function(e){let t=this.redirectUri;t.includes("?")?t.endsWith("&")||(t+="&"):t+="?",t+="code="+encodeURIComponent(e),this.oauth2State&&(t+="&state="+encodeURIComponent(this.oauth2State)),document.location.assign(t)}},{kind:"method",key:"_updateStep",value:async function(e){let t=null;this._step&&(e.flow_id!==this._step.flow_id||"form"===e.type&&"form"===this._step.type&&e.step_id!==this._step.step_id)&&(t={}),this._step=e,this._state="step",null!=t&&(this._stepData=t),await this.updateComplete,setTimeout(()=>{const e=this.shadowRoot.querySelector("ha-form");e&&e.focus()},100)}},{kind:"method",key:"_stepDataChanged",value:function(e){this._stepData=e.detail.value}},{kind:"method",key:"_computeStepDescription",value:function(e){const t=`ui.panel.page-authorize.form.providers.${e.handler[0]}.step.${e.step_id}.description`,r=[],i=e.description_placeholders||{};return Object.keys(i).forEach(e=>{r.push(e),r.push(i[e])}),this.localize(t,...r)}},{kind:"method",key:"_computeLabelCallback",value:function(e){return t=>this.localize(`ui.panel.page-authorize.form.providers.${e.handler[0]}.step.${e.step_id}.data.${t.name}`)}},{kind:"method",key:"_computeErrorCallback",value:function(e){return t=>this.localize(`ui.panel.page-authorize.form.providers.${e.handler[0]}.error.${t}`)}},{kind:"method",key:"_unknownError",value:function(){return this.localize("ui.panel.page-authorize.form.unknown_error")}},{kind:"method",key:"_handleSubmit",value:async function(e){if(e.preventDefault(),null==this._step)return;if("form"!==this._step.type)return void this._providerChanged(this.authProvider);this._state="loading",this.style.setProperty("min-height",this.offsetHeight+"px");const t=Object.assign({},this._stepData,{client_id:this.clientId});try{const e=await fetch("/auth/login_flow/"+this._step.flow_id,{method:"POST",credentials:"same-origin",body:JSON.stringify(t)}),r=await e.json();if("create_entry"===r.type)return void this._redirect(r.result);await this._updateStep(r)}catch(r){console.error("Error submitting step",r),this._state="error",this._errorMessage=this._unknownError()}finally{this.style.setProperty("min-height","")}}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        /* So we can set min-height to avoid jumping during loading */
        display: block;
      }
      .action {
        margin: 24px 0 8px;
        text-align: center;
      }
      .error {
        color: red;
      }
    `}}]}}),Object(o.a)(i.a));customElements.define("ha-auth-flow",y);var b=r(133);function v(e){var t,r=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function w(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function x(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function C(e,t,r){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Promise.all([r.e(23),r.e(138)]).then(r.bind(null,879));let O=function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!_(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=x(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(w(o.descriptor)||w(n.descriptor)){if(_(o)||_(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(_(o)){if(_(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}g(o,n)}else t.push(o)}return t}(a.d.map(v)),e);return n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}(null,(function(e,t){class r extends t{constructor(){super(),e(this),this.translationFragment="page-authorize";const t=Object(b.a)();t.client_id&&(this.clientId=t.client_id),t.redirect_uri&&(this.redirectUri=t.redirect_uri),t.state&&(this.oauth2State=t.state)}}return{F:r,d:[{kind:"field",decorators:[Object(i.h)()],key:"clientId",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"redirectUri",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"oauth2State",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_authProvider",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_authProviders",value:void 0},{kind:"method",key:"render",value:function(){if(!this._authProviders)return i.f`
        <p>${this.localize("ui.panel.page-authorize.initializing")}</p>
      `;const e=document.createElement("div");e.innerText=this.localize("ui.panel.page-authorize.logging_in_with","authProviderName","NAME"),e.innerHTML=e.innerHTML.replace("**NAME**",`<b>${this._authProvider.name}</b>`);const t=this._authProviders.filter(e=>e!==this._authProvider);return i.f`
      <p>
        ${this.localize("ui.panel.page-authorize.authorizing_client","clientId",this.clientId)}
      </p>
      ${e}

      <ha-auth-flow
        .resources="${this.resources}"
        .clientId="${this.clientId}"
        .redirectUri="${this.redirectUri}"
        .oauth2State="${this.oauth2State}"
        .authProvider="${this._authProvider}"
      ></ha-auth-flow>

      ${t.length>0?i.f`
            <ha-pick-auth-provider
              .resources="${this.resources}"
              .clientId="${this.clientId}"
              .authProviders="${t}"
              @pick-auth-provider="${this._handleAuthProviderPick}"
            ></ha-pick-auth-provider>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(e){if(C(S(r.prototype),"firstUpdated",this).call(this,e),this._fetchAuthProviders(),!this.redirectUri)return;const t=document.createElement("a");t.href=this.redirectUri,t.host===location.host&&Object(a.a)(this,!1)}},{kind:"method",key:"updated",value:function(e){C(S(r.prototype),"updated",this).call(this,e),e.has("language")&&document.querySelector("html").setAttribute("lang",this.language)}},{kind:"method",key:"_fetchAuthProviders",value:async function(){try{const e=await(window.providersPromise||Object(n.b)()),t=await e.json();if(400===e.status&&"onboarding_required"===t.code)return void(location.href="/onboarding.html"+location.search);if(0===t.length)return void alert("No auth providers returned. Unable to finish login.");this._authProviders=t,this._authProvider=t[0]}catch(e){console.error("Error loading auth providers",e)}}},{kind:"method",key:"_handleAuthProviderPick",value:async function(e){this._authProvider=e.detail}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      ha-pick-auth-provider {
        display: block;
        margin-top: 48px;
      }
    `}}]}}),Object(o.a)(i.a));customElements.define("ha-authorize",O);r(132),r(131);setTimeout(()=>r.e(169).then(r.t.bind(null,870,7)),2e3)}]);
//# sourceMappingURL=authorize.f298aafc.js.map