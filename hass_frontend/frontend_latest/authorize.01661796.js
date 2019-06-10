/*! For license information please see authorize.01661796.js.LICENSE */
!function(e){function t(t){for(var n,r,o=t[0],a=t[1],s=0,c=[];s<o.length;s++)r=o[s],i[r]&&c.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);c.length;)c.shift()()}var n={},i={10:0,3:0,4:0,6:0,73:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"chunk."+{47:"490236f07a00d2327660",49:"cf0f5f444e015911edc9",56:"89ce5c8ffe4d12c094e6",75:"d3a9161e4b241a32d4b5",77:"d0611c62665f006841dc"}[e]+".js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/frontend_latest/",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=a;r(r.s=157)}([function(e,t,n){"use strict";n.d(t,"a",function(){return i});const i=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e},function(e,t,n){"use strict";var i=n(11),r=n(19),o=n(8);const a=133;function s(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,a,null,!1);let o=c(i),s=i[o],l=-1,d=0;const p=[];let u=null;for(;r.nextNode();){l++;const e=r.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(p.push(e),null===u&&(u=e)),null!==u&&d++;void 0!==s&&s.index===l;)s.index=null!==u?-1:s.index-d,s=i[o=c(i,o)]}p.forEach(e=>e.parentNode.removeChild(e))}const l=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,a,null,!1);for(;n.nextNode();)t++;return t},c=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(o.d)(t))return n}return-1};var d=n(31),p=n(28),u=n(39),h=n(23);const f=(e,t)=>`${e}--${t}`;let b=!0;void 0===window.ShadyCSS?b=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),b=!1);const m=e=>t=>{const n=f(t.type,e);let i=p.a.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},p.a.set(n,i));let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(o.f);if(void 0===(r=i.keyString.get(a))){const n=t.getTemplateElement();b&&window.ShadyCSS.prepareTemplateDom(n,e),r=new o.a(t,n),i.keyString.set(a,r)}return i.stringsArray.set(t.strings,r),r},g=["html","svg"],_=new Set,y=(e,t,n)=>{_.add(n);const i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const o=document.createElement("style");for(let a=0;a<r;a++){const e=i[a];e.parentNode.removeChild(e),o.textContent+=e.textContent}(e=>{g.forEach(t=>{const n=p.a.get(f(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),s(e,n)})})})(n);const d=t.element.content;!function(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const o=document.createTreeWalker(i,a,null,!1);let s=c(r),d=0,p=-1;for(;o.nextNode();)for(p++,o.currentNode===n&&(d=l(t),n.parentNode.insertBefore(t,n));-1!==s&&r[s].index===p;){if(d>0){for(;-1!==s;)r[s].index+=d,s=c(r,s);return}s=c(r,s)}}(t,o,d.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n);const u=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==u)e.insertBefore(u.cloneNode(!0),e.firstChild);else{d.insertBefore(o,d.firstChild);const e=new Set;e.add(o),s(t,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},w=(e,t)=>t!==e&&(t==t||e==e),x={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:w},k=Promise.resolve(!0),C=1,S=4,O=8,j=16,E=32;class A extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=k,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=x){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const i=this[e];this[n]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=w){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||v,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||v.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|E,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=x){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|O,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=this._updateState&~O}}_attributeToProperty(e,t){if(this._updateState&O)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n._classProperties.get(i)||x;this._updateState=this._updateState|j,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~j}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const i=this.constructor,r=i._classProperties.get(e)||x;i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||this._updateState&j||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|S;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{e=n,t=i});try{await n}catch(i){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(i){t(i)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&E}get _hasRequestedUpdate(){return this._updateState&S}get hasUpdated(){return this._updateState&C}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(n){throw e=!1,n}finally{this._markUpdated()}e&&(this._updateState&C||(this._updateState=this._updateState|C,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~S}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}A.finalized=!0;const P=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),T=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),I=(e,t,n)=>{t.constructor.createProperty(n,e)};function N(e){return(t,n)=>void 0!==n?I(e,t,n):T(e,t)}function z(e){return(t,n)=>{const i={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?R(i,t,n):M(i,t)}}const R=(e,t,n)=>{Object.defineProperty(t,n,e)},M=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),L="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol();class D{constructor(e,t){if(t!==F)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(L?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const B=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof D)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new D(n,F)};n.d(t,"a",function(){return V}),n.d(t,"b",function(){return A}),n.d(t,"d",function(){return P}),n.d(t,"f",function(){return N}),n.d(t,"g",function(){return z}),n.d(t,"e",function(){return i.g}),n.d(t,"h",function(){return i.k}),n.d(t,"c",function(){return B}),(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const H=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let i=0,r=t.length;i<r;i++){const r=t[i];Array.isArray(r)?e(r,n):n.push(r)}return n}(e);class V extends A{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){H(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?L?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof i.d&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}V.finalized=!0,V.render=(e,t,n)=>{const i=n.scopeName,o=d.a.has(t),a=b&&11===t.nodeType&&!!t.host&&e instanceof h.b,s=a&&!_.has(i),l=s?document.createDocumentFragment():t;if(Object(d.b)(e,l,Object.assign({templateFactory:m(i)},n)),s){const e=d.a.get(l);d.a.delete(l),e.value instanceof u.a&&y(l,e.value.template,i),Object(r.b)(t,t.firstChild),t.appendChild(l),d.a.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"g",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"i",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"a",function(){return p}),n.d(t,"h",function(){return u});n(9);function i(e){return e.indexOf(".")>=0}function r(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function o(e,t){return 0===e.indexOf(t+".")}function a(e,t){return 0===t.indexOf(e+".")}function s(e,t,n){return t+n.slice(e.length)}function l(e,t){return e===t||o(e,t)||a(e,t)}function c(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function d(e){return Array.isArray(e)?c(e).split("."):e.toString().split(".")}function p(e,t,n){let i=e,r=d(t);for(let o=0;o<r.length;o++){if(!i)return;i=i[r[o]]}return n&&(n.path=r.join(".")),i}function u(e,t,n){let i=e,r=d(t),o=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(!(i=i[r[e]]))return}i[o]=n}else i[t]=n;return r.join(".")}},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});n(9);var i=n(0),r=(n(7),n(63));n(25),n(18);const o=Element.prototype,a=o.matches||o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,s=function(e,t){return a.call(e,t)};class l{constructor(e){this.node=e}observeNodes(e){return new r.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(i.a)(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=Object(i.a)(t).parentNode||Object(i.a)(t).host;return t===this.node}getOwnerRoot(){return Object(i.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(i.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Object(i.a)(this.node).assignedSlot;for(;t;)e.push(t),t=Object(i.a)(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(i.a)(n).importNode(e,t)}getEffectiveChildNodes(){return r.a.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,r=0,o=t.length;r<o&&(i=t[r]);r++)i.nodeType===Node.ELEMENT_NODE&&s(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function c(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class d{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;let p=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])}),c(e.prototype,["classList"]),p=e,Object.defineProperties(d.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(l.prototype,["textContent","innerHTML"]);const u=function(e){if((e=e||document)instanceof p)return e;if(e instanceof d)return e;let t=e.__domApi;return t||(t=e instanceof Event?new d(e):new p(e),e.__domApi=t),t}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(9);class i{constructor(e){this.value=e.toString()}toString(){return this.value}}function r(e){if(e instanceof i)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const o=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,o)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof i)return r(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[o+1],e[0]),n}},function(e,t,n){"use strict";var i=n(41),r=n(6),o=(n(97),n(9),n(38)),a=n(27),s=n(47),l=n(7),c=n(0);const d=Object(s.a)(Object(a.b)(Object(o.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),l.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(c.a)(Object(c.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(!(e=e||this.querySelector("template"))){let t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});n(85),n(86);var p=n(26),u=n(10),h=n(51),f=n(37);let b=Object(u.a)(e=>{let t=Object(f.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Object(h.a)(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))});for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let n=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(p.a);class m extends b{static get is(){return"array-selector"}static get template(){return null}}customElements.define(m.is,m);n(72),n(98);var g=n(4);n.d(t,"a",function(){return _}),n.d(t,"b",function(){return r.a}),n.d(t,"c",function(){return g.a});const _=Object(i.a)(HTMLElement).prototype},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(71);n(9);const r=function(e){let t;return t="function"==typeof e?e:r.Class(e),customElements.define(t.is,t),t};r.Class=i.a},function(e,t,n){"use strict";n.d(t,"i",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return p}),n.d(t,"h",function(){return u});n(9);var i=n(20);const r=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(i.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let s=!1;const l=function(e){s=e};let c=!1;let d=!1;let p=!1;let u=!1},function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"g",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return p});const i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${r}`),a="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],s=document.createTreeWalker(t.content,133,null,!1);let c=0,u=-1,h=0;const{strings:f,values:{length:b}}=e;for(;h<b;){const e=s.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)l(t[e].name,a)&&i++;for(;i-- >0;){const t=f[h],n=p.exec(t)[2],i=n.toLowerCase()+a,r=e.getAttribute(i);e.removeAttribute(i);const s=r.split(o);this.parts.push({type:"attribute",index:u,name:n,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,r=t.split(o),s=r.length-1;for(let t=0;t<s;t++){let n,o=r[t];if(""===o)n=d();else{const e=p.exec(o);null!==e&&l(e[2],a)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),n=document.createTextNode(o)}i.insertBefore(n,e),this.parts.push({type:"node",index:++u})}""===r[s]?(i.insertBefore(d(),e),n.push(e)):e.data=r[s],h+=s}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==c||(u++,t.insertBefore(d(),e)),c=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(n.push(e),u--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=r.pop()}for(const i of n)i.parentNode.removeChild(i)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>-1!==e.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";window.JSCompiler_renameProperty=function(e,t){return e}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(9);let i=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const o=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=i++;return function(i){let r=i.__mixinSet;if(r&&r[n])return i;let o=t,a=o.get(i);a||(a=e(i),o.set(i,a));let s=Object.create(a.__mixinSet||r||null);return s[n]=!0,a.__mixinSet=s,a}}},function(e,t,n){"use strict";var i=n(14);const r=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new i.f(e,t.slice(1),n).parts:"@"===o?[new i.d(e,t.slice(1),r.eventContext)]:"?"===o?[new i.c(e,t.slice(1),n)]:new i.a(e,t,n).parts}handleTextExpression(e){return new i.e(e)}};var o=n(23),a=n(30),s=n(19),l=n(16),c=(n(31),n(28)),d=(n(39),n(8));n.d(t,"g",function(){return p}),n.d(t,"k",function(){return u}),n.d(t,"f",function(){return a.a}),n.d(t,"i",function(){return s.b}),n.d(t,"j",function(){return s.c}),n.d(t,"h",function(){return l.a}),n.d(t,"a",function(){return i.b}),n.d(t,"b",function(){return i.e}),n.d(t,"c",function(){return i.g}),n.d(t,"l",function(){return c.b}),n.d(t,"d",function(){return o.b}),n.d(t,"e",function(){return d.c}),(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const p=(e,...t)=>new o.b(e,t,"html",r),u=(e,...t)=>new o.a(e,t,"svg",r)},function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return p});n(9);let i=0,r=0,o=[],a=0,s=document.createTextNode("");new window.MutationObserver(function(){const e=o.length;for(let n=0;n<e;n++){let e=o[n];if(e)try{e()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,e),r+=e}).observe(s,{characterData:!0});const l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},c={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},d={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},p={run:e=>(s.textContent=a++,o.push(e),i++),cancel(e){const t=e-r;if(t>=0){if(!o[t])throw new Error("invalid async handle: "+e);o[t]=null}}}},function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l});const i=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,o;function a(e){r=(!e||!e.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);const l=r},function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return h}),n.d(t,"c",function(){return f}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return _});var i=n(30),r=n(19),o=n(16),a=n(39),s=n(23),l=n(8);const c=e=>null===e||!("object"==typeof e||"function"==typeof e),d=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class p{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(c(e)||!d(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.a||c(e)&&e===this.value||(this.value=e,Object(i.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const e=this.value;this.value=o.a,e(this)}this.value!==o.a&&this.committer.commit()}}class h{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(l.c)()),e.__insert(this.endNode=Object(l.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}const e=this.__pendingValue;e!==o.a&&(c(e)?e!==this.value&&this.__commitText(e):e instanceof s.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):d(e)?this.__commitIterable(e):e===o.b?(this.value=o.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof a.a&&this.value.template===t)this.value.update(e.values);else{const n=new a.a(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)void 0===(n=t[i])&&(n=new h(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(r.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.a}}class b extends p{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends u{}let g=!1;try{const e={get capture(){return g=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(v){}class _{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const y=e=>e&&(g?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";var i=n(1),r=n(70);n.d(t,"e",function(){return i.e}),n.d(t,"a",function(){return i.a}),n.d(t,"d",function(){return i.d}),n.d(t,"f",function(){return i.f}),n.d(t,"c",function(){return i.c}),n.d(t,"b",function(){return r.a})},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});const i={},r={}},,function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a});n(9),n(10),n(12);class i{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof i?e._cancelAsync():e=new i,e.setConfig(t,n),e}}let r=new Set;const o=function(e){r.add(e)},a=function(){const e=Boolean(r.size);return r.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),e}},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o});const i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,n=null,i=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,i),t=n}},o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}}},function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});n(9);let i,r,o=/(url\()([^)]*)(\))/g,a=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(e,t){if(e&&a.test(e))return e;if(void 0===i){i=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",i="http://a/c%20d"===e.href}catch(n){}}return t||(t=document.baseURI||window.location.href),i?new URL(e,t).href:(r||((r=document.implementation.createHTMLDocument("temp")).base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=t,r.anchor.href=e,r.anchor.href||e)}function l(e,t){return e.replace(o,function(e,n,i,r){return n+"'"+s(i.replace(/["']/g,""),t)+"'"+r})}function c(e){return e.substring(0,e.lastIndexOf("/")+1)}},function(e,t,n){"use strict";n.d(t,"a",function(){return i});const i=(e,t,n,i)=>{i=i||{},n=null==n?{}:n;const r=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,e.dispatchEvent(r),r}},function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});const i=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var i=n(19),r=n(8);class o{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=r.e.exec(e);t+=null===a?e+(n?r.f:r.g):e.substr(0,a.index)+a[1]+a[2]+r.b+a[3]+r.f}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(i.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s});n(9);const i={},r=/-[a-z]/g,o=/([A-Z])/g;function a(e){return i[e]||(i[e]=e.indexOf("-")<0?e:e.replace(r,e=>e[1].toUpperCase()))}function s(e){return i[e]||(i[e]=e.replace(o,"-$1").toLowerCase())}},function(e,t,n){"use strict";n.d(t,"b",function(){return r});n(9);var i=n(18);n.d(t,"a",function(){return i.b});const r=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Object(i.c)()}while(e||t)}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(37);n(4);const r=Object(i.a)(HTMLElement)},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var i=n(10);function r(e,t,n,i,r){let o;r&&(o="object"==typeof n&&null!==n)&&(i=e.__dataTemp[t]);let a=i!==n&&(i==i||n==n);return o&&a&&(e.__dataTemp[t]=n),a}const o=Object(i.a)(e=>{return class extends e{_shouldPropertyChange(e,t,n){return r(this,e,t,n,!0)}}}),a=Object(i.a)(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return r(this,e,t,n,this.mutableData)}}});o._mutablePropertyChange=r},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var i=n(8);function r(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i.f);return void 0===(n=t.keyString.get(r))&&(n=new i.a(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const o=new Map},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var i=n(22);function r(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function o(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}function a(e){const t=i.b.test(e)||i.c.test(e);return i.b.lastIndex=0,i.c.lastIndex=0,t}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});const i=new WeakMap,r=e=>(...t)=>{const n=e(...t);return i.set(n,!0),n},o=e=>"function"==typeof e&&i.has(e)},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var i=n(19),r=n(14),o=n(28);const a=new WeakMap,s=(e,t,n)=>{let s=a.get(t);void 0===s&&(Object(i.b)(t,t.firstChild),a.set(t,s=new r.e(Object.assign({templateFactory:o.b},n))),s.appendInto(t)),s.setValue(e),s.commit()}},function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(5);var i={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},r={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},a=/[a-z0-9*]/,s=/U\+/,l=/^arrow/,c=/^space(bar)?/,d=/^escape$/;function p(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||c.test(i)?n="space":d.test(i)?n="esc":1==i.length?t&&!a.test(i)||(n=i):n=l.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function u(e,t){return e.key?p(e.key,t):e.detail&&e.detail.key?p(e.detail.key,t):(n=e.keyIdentifier,o="",n&&(n in i?o=i[n]:s.test(n)?(n=parseInt(n.replace("U+","0x"),16),o=String.fromCharCode(n).toLowerCase()):o=n.toLowerCase()),o||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):r[e]),t}(e.keyCode)||"");var n,o}function h(e,t){return u(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function f(e){return e.trim().split(" ").map(function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(e,t){var n=t.split(":"),i=n[0],r=n[1];return i in o?(e[o[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e},{combo:e.split(":").shift()})}(e)})}const b={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=f(t),i=0;i<n.length;++i)if(h(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1})},_addKeyBinding:function(e,t){f(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)},this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],r=e[n][1];if(h(i,t)&&(this._triggerKeyHandler(i,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var r=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&n.preventDefault()}}},function(e,t,n){"use strict";n.d(t,"b",function(){return y}),n.d(t,"a",function(){return v});n(9);var i=n(38),r=n(27),o=n(7),a=n(0);let s=null;function l(){return s}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(i.a)(l),d=Object(r.a)(c);const p=Object(i.a)(class{});class u extends p{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)t.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),Object(a.a)(Object(a.a)(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&Object(a.a)(Object(a.a)(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}u.prototype.__dataHost,u.prototype.__templatizeOptions,u.prototype._methodHost,u.prototype.__templatizeOwner,u.prototype.__hostProps;const h=Object(r.a)(u);function f(e){let t=e.__dataHost;return t&&t._methodHost||t}function b(e,t,n){let i=n.mutableData?h:u;y.mixin&&(i=y.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(e),function(e,t,n,i){let r=n.hostProps||{};for(let o in i.instanceProps){delete r[o];let t=i.notifyInstanceProp;t&&e.prototype._addPropertyEffect(o,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:_(o,t)})}if(i.forwardHostProp&&t.__dataHost)for(let o in r)e.prototype._addPropertyEffect(o,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(r,e,t,n),r}function m(e,t,n){let i=n.forwardHostProp;if(i){let r=t.templatizeTemplateClass;if(!r){let e=n.mutableData?d:c;r=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let t in o)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:g(t,i)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(e,t){s=e,Object.setPrototypeOf(e,t.prototype),new t,s=null}(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function g(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring("_host_".length),i[n])}}function _(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function y(e,t,n){if(o.g&&!f(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:u)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=b(e,i,n),i.templatizeInstanceClass=r),m(e,i,n);let a=class extends r{};return a.prototype._methodHost=f(e),a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a}function v(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=Object(a.a)(t).parentNode;return null}},function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return p});var i=n(40),r=n(43);const o=window.localStorage||{},a={"zh-cn":"zh-Hans","zh-sg":"zh-Hans","zh-my":"zh-Hans","zh-tw":"zh-Hant","zh-hk":"zh-Hant","zh-mo":"zh-Hant",zh:"zh-Hant"};function s(e){if(e in i.a.translations)return e;const t=e.toLowerCase();if(t in a)return a[t];for(const n in Object.keys(i.a.translations))if(n.toLowerCase()===t)return n}async function l(e){const t=await Object(r.a)(e,"language"),n=t?t.language:null;if(n){const e=s(n);if(e)return e}return null}function c(){let e=null;if(o.selectedLanguage)try{const n=JSON.parse(o.selectedLanguage);if(n&&(e=s(n)))return e}catch(t){}if(navigator.languages)for(const n of navigator.languages)if(e=s(n))return e;return(e=s(navigator.language))||(navigator.language&&navigator.language.includes("-")&&(e=s(navigator.language.split("-")[0]))?e:"en")}const d={};async function p(e,t){const n=i.a.translations[t];if(!n){if("en"!==t)return p(e,"en");throw new Error("Language en is not found in metadata")}const r=n.fingerprints[e?`${e}/${t}`:t];return d[r]||(d[r]=async function(e){const t=await fetch(`/static/translations/${e}`,{credentials:"same-origin"});if(!t.ok)throw new Error(`Fail to fetch translation ${e}: HTTP response status is ${t.status}`);return t.json()}(r).then(e=>({language:t,data:e})).catch(n=>(delete d[r],"en"!==t?p(e,"en"):Promise.reject(n)))),d[r]}p(null,c())},function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(5),n(3);const i={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},function(e,t,n){"use strict";n.d(t,"b",function(){return M}),n.d(t,"e",function(){return L}),n.d(t,"f",function(){return D}),n.d(t,"d",function(){return H}),n.d(t,"c",function(){return K}),n.d(t,"a",function(){return X});n(9);var i=n(12),r=n(18),o=n(7),a=n(0);let s="string"==typeof document.head.style.touchAction,l="__polymerGestures",c="__polymerGesturesHandled",d="__polymerGesturesTouchAction",p=25,u=5,h=2500,f=["mousedown","mousemove","mouseup","click"],b=[0,1,4,2],m=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function g(e){return f.indexOf(e)>-1}let _=!1;function y(e){if(!g(e)&&"touchend"!==e)return s&&_&&o.c?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){_=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}}();let v=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],x={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},k={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function C(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let S=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[c]={skip:!0},"click"===e.type)){let t=!1,i=T(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)w.push(i[e]);else if(n=i[e],x[n.localName]){let n=C(i[e]);for(let e=0;e<n.length;e++)t=t||w.indexOf(n[e])>-1}if(i[e]===E.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function O(e){let t=v?["click"]:f;for(let n,i=0;i<t.length;i++)n=t[i],e?(w.length=0,document.addEventListener(n,S,!0)):document.removeEventListener(n,S,!0)}function j(e){let t=e.type;if(!g(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!m&&(t=b[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let E={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function A(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function P(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",function(e){E.mouse.mouseIgnoreJob||O(!0),E.mouse.target=T(e)[0],E.mouse.mouseIgnoreJob=r.a.debounce(E.mouse.mouseIgnoreJob,i.d.after(h),function(){O(),E.mouse.target=null,E.mouse.mouseIgnoreJob=null})},!!_&&{passive:!0});const T=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],I={},N=[];function z(e){const t=T(e);return t.length>0?t[0]:e.target}function R(e){let t,n=e.type,i=e.currentTarget[l];if(!i)return;let r=i[n];if(r){if(!e[c]&&(e[c]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(E.touch.id=t.identifier),E.touch.id!==t.identifier)return;s||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)E.touch.x=t.clientX,E.touch.y=t.clientY,E.touch.scrollDecided=!1;else if("touchmove"===n){if(E.touch.scrollDecided)return;E.touch.scrollDecided=!0;let n=function(e){let t="auto",n=T(e);for(let i,r=0;r<n.length;r++)if((i=n[r])[d]){t=i[d];break}return t}(e),i=!1,r=Math.abs(E.touch.x-t.clientX),o=Math.abs(E.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=o>r:"pan-y"===n&&(i=r>o)),i?e.preventDefault():H("track")}}(e)}if(!(t=e[c]).skip){for(let n,i=0;i<N.length;i++)r[(n=N[i]).name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,o=0;o<N.length;o++)r[(i=N[o]).name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function M(e,t,n){return!!I[t]&&(function(e,t,n){let i=I[t],r=i.deps,o=i.name,a=e[l];a||(e[l]=a={});for(let s,l,c=0;c<r.length;c++)s=r[c],v&&g(s)&&"click"!==s||((l=a[s])||(a[s]=l={_count:0}),0===l._count&&e.addEventListener(s,R,y(s)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,n),i.touchAction&&D(e,i.touchAction)}(e,t,n),!0)}function L(e,t,n){return!!I[t]&&(function(e,t,n){let i=I[t],r=i.deps,o=i.name,a=e[l];if(a)for(let s,l,c=0;c<r.length;c++)s=r[c],(l=a[s])&&l[o]&&(l[o]=(l[o]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(s,R,y(s)));e.removeEventListener(t,n)}(e,t,n),!0)}function F(e){N.push(e);for(let t=0;t<e.emits.length;t++)I[e.emits[t]]=e}function D(e,t){s&&e instanceof HTMLElement&&i.c.run(()=>{e.style.touchAction=t}),e[d]=t}function B(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,Object(a.a)(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function H(e){let t=function(e){for(let t,n=0;n<N.length;n++){t=N[n];for(let n,i=0;i<t.emits.length;i++)if((n=t.emits[i])===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function V(e,t,n,i){t&&B(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return H(e)}})}function $(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),r=Math.abs(e.y-n);return i>=u||r>=u}function U(e,t,n){if(!t)return;let i,r=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],a=o.x-e.x,s=o.y-e.y,l=0;r&&(i=o.x-r.x,l=o.y-r.y),B(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:a,dy:s,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM&&i!==(i=i.shadowRoot.elementFromPoint(e,t));)i&&(n=i);return n}(n.clientX,n.clientY)}})}function q(e,t,n){let i=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=z(n||t);!o||k[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=p&&r<=p||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=z(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,r=e.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(t))&&(e.prevent||B(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}F({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){P(this.info)},mousedown:function(e){if(!j(e))return;let t=z(e),n=this;A(this.info,function(e){j(e)||(V("up",t,e),P(n.info))},function(e){j(e)&&V("up",t,e),P(n.info)}),V("down",t,e)},touchstart:function(e){V("down",z(e),e.changedTouches[0],e)},touchend:function(e){V("up",z(e),e.changedTouches[0],e)}}),F({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,P(this.info)},mousedown:function(e){if(!j(e))return;let t=z(e),n=this,i=function(e){let i=e.clientX,r=e.clientY;$(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&H("tap"),n.info.addMove({x:i,y:r}),j(e)||(n.info.state="end",P(n.info)),t&&U(n.info,t,e),n.info.started=!0)};A(this.info,i,function(e){n.info.started&&i(e),P(n.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=z(e),n=e.changedTouches[0],i=n.clientX,r=n.clientY;$(this.info,i,r)&&("start"===this.info.state&&H("tap"),this.info.addMove({x:i,y:r}),U(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=z(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),U(this.info,t,n))}}),F({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){j(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){j(e)&&q(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){q(this.info,e.changedTouches[0],e)}});const K=z,X=M},function(e,t,n){"use strict";n(9);var i=n(7),r=n(10),o=n(45),a=n(20),s=n(42),l=n(38);const c=[];var d=n(50);const p=Object(r.a)(e=>{const t=Object(d.a)(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=function(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){e=this.prototype,c.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var u=n(0);n.d(t,"a",function(){return b});const h="3.2.0",f=window.ShadyCSS&&window.ShadyCSS.cssBuild,b=Object(r.a)(e=>{const t=p(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return h}static _finalizeClass(){super._finalizeClass();const e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);var t;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):i.b||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let o in e)t=this.prototype,n=o,i=e[o],r=e,i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):t._createComputedProperty(n,i.computed,r)),i.readOnly&&!t._hasReadOnlyEffect(n)?t._createReadOnlyProperty(n,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(n)?t._createReflectedProperty(n):!1===i.reflectToAttribute&&t._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),i.notify&&!t._hasNotifyEffect(n)?t._createNotifyingProperty(n):!1===i.notify&&t._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),i.observer&&t._createPropertyObserver(n,i.observer,r[i.observer]),t._addPropertyToAttributeMap(n);var t,n,i,r}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!i.g||i.a)&&(t=s.a.import(e,"template"),i.g&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Object(a.a)(e.url);else{const e=s.a.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=i.d,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return Object(a.b)(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;!function(e,t,n,i){if(!f){const r=t.content.querySelectorAll("style"),a=Object(o.c)(t),s=Object(o.b)(n),l=t.content.firstElementChild;for(let n=0;n<s.length;n++){let r=s[n];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,l)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=r[c];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):c++,n.textContent=e._processStyleText(n.textContent,i)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}(this,t,e,n?Object(a.c)(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Object(u.a)(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),i.h&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(a.c)(this.importPath)),Object(a.c)(e,t)}static _parseTemplateContent(e,t,n){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,n)}static _addTemplatePropertyEffect(e,t,n){return!i.b||t in this._properties||console.warn(`Property '${t}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(e,t,n)}}})},function(e,t,n){"use strict";n(9);var i=n(0),r=n(10),o=n(2),a=n(24),s=n(49);const l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),c={"dom-if":!0,"dom-repeat":!0};function d(e){let t=e.getAttribute("is");if(t&&c[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function p(e,t){let n=t.parentInfo&&p(e,t.parentInfo);if(!n)return e;l.currentNode=n;for(let i=l.firstChild(),r=0;i;i=l.nextSibling())if(t.parentIndex===r++)return i}function u(e,t,n,i){i.id&&(t[i.id]=n)}function h(e,t,n){if(n.events&&n.events.length)for(let i,r=0,o=n.events;r<o.length&&(i=o[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function f(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const b=Object(r.a)(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,t,n)||i,l.currentNode=r,l.firstChild()&&(i=this._parseTemplateChildNodes(r,t,n)||i),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,t,n)||i),i}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName){l.currentNode=e;for(let i,r=l.firstChild(),o=0;r;r=i){if("template"==r.localName&&(r=d(r)),l.currentNode=r,i=l.nextSibling(),r.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,i=l.nextSibling(),e.removeChild(n),n=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let a={parentIndex:o,parentInfo:n};this._parseTemplateNode(r,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),l.currentNode=r,l.parentNode()&&o++}}}static _parseTemplateNestedTemplate(e,t,n){let i=this._parseTemplate(e,t);return(i.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,r=Array.from(e.attributes);for(let o,a=r.length-1;o=r[a];a--)i=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,r){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(n.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,i=t.content||e.content,r=document.importNode(i,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=new Array(n.length);r.$={};for(let a,s=0,l=n.length;s<l&&(a=n[s]);s++){let e=o[s]=p(r,a);u(0,r.$,e,a),f(0,e,a),h(this,e,a)}return r=r}_addMethodEventListenerToNode(e,t,n,i){let r=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||e,0,n);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}});var m=n(7);n.d(t,"a",function(){return q});let g=0;const _={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},y=/[A-Z]/;function v(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}}else n=e[t]={};return n}function w(e,t,n,i,r,o){if(t){let a=!1,s=g++;for(let l in n)x(e,t,s,l,n,i,r,o)&&(a=!0);return a}return!1}function x(e,t,n,i,r,a,s,l){let c=!1,d=t[s?Object(o.g)(i):i];if(d)for(let o,p=0,u=d.length;p<u&&(o=d[p]);p++)o.info&&o.info.lastRun===n||s&&!k(i,o.trigger)||(o.info&&(o.info.lastRun=n),o.fn(e,i,r,a,o.info,s,l),c=!0);return c}function k(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!Object(o.b)(n,e))||!(!t.wildcard||!Object(o.c)(n,e))}return!0}function C(e,t,n,i,r){let o="string"==typeof r.method?e[r.method]:r.method,a=r.property;o?o.call(e,e.__data[a],i[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function S(e,t,n){let i=Object(o.g)(t);if(i!==t){return O(e,Object(a.a)(i)+"-changed",n[t],t),!0}return!1}function O(e,t,n,r){let o={value:n,queueProperty:!0};r&&(o.path=r),Object(i.a)(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function j(e,t,n,i,r,a){let s=(a?Object(o.g)(t):t)!=t?t:null,l=s?Object(o.a)(e,s):e.__data[t];s&&void 0===l&&(l=n[t]),O(e,r.eventName,l,s)}function E(e,t,n,i,r){let o=e.__data[t];m.e&&(o=Object(m.e)(o,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,o)}function A(e,t,n,i,r){let o=M(e,t,n,i,r),a=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,o,!0):e[a]=o}function P(e,t,n,i,r,o,s){n.bindings=n.bindings||[];let l={kind:i,target:r,parts:o,literal:s,isCompound:1!==o.length};if(n.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){let{event:e,negate:t}=l.parts[0];l.listenerEvent=e||Object(a.a)(r)+"-changed",l.listenerNegate=t}let c=t.nodeInfoList.length;for(let a=0;a<l.parts.length;a++){let n=l.parts[a];n.compoundIndex=a,T(e,t,l,n,c)}}function T(e,t,n,i,r){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,a={index:r,binding:n,part:i,evaluator:e};for(let n=0;n<o.length;n++){let i=o[n];"string"==typeof i&&((i=H(i)).wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:I,info:a,trigger:i})}}}function I(e,t,n,i,r,a,s){let l=s[r.index],c=r.binding,d=r.part;if(a&&d.source&&t.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let i=n[t];t=Object(o.i)(d.source,c.target,t),l._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,n,i,r){r=function(e,t,n,i){if(n.isCompound){let r=e.__dataCompoundStorage[n.target];r[i.compoundIndex]=t,t=r.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,r,n,i),m.e&&(r=Object(m.e)(r,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,r,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[_.READ_ONLY]&&t[_.READ_ONLY][i]||t._setPendingProperty(i,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,r)}}(e,l,c,d,r.evaluator._evaluateBinding(e,d,t,n,i,a))}}function N(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i[e].literal;let o=t.target;n[o]=r,t.literal&&"property"==t.kind&&(e[o]=t.literal)}}function z(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,function(e){!function(e,t,n,i,r){let a,s=e.detail,l=s&&s.path;l?(i=Object(o.i)(n,i,l),a=s&&s.value):a=e.currentTarget[n],a=r?!a:a,t[_.READ_ONLY]&&t[_.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,a,!0,Boolean(l))||s&&s.queueProperty||t._invalidateProperties()}(e,t,n.target,i.source,i.negate)})}}function R(e,t,n,i,r,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let s,l=0;l<t.args.length&&(s=t.args[l]);l++)s.literal||e._addPropertyEffect(s.rootProperty,n,{fn:i,info:a,trigger:s});o&&e._addPropertyEffect(t.methodName,n,{fn:i,info:a})}function M(e,t,n,i,r){let o=e._methodHost||e,a=o[r.methodName];if(a){let i=e._marshalArgs(r.args,t,n);return a.apply(o,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const L=[],F=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function D(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function B(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:L};if(t[2].trim()){return function(e,t){return t.args=e.map(function(e){let n=H(e);return n.literal||(t.static=!1),n},this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function H(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Object(o.g)(t),n.structured=Object(o.d)(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function V(e,t,n){let i=Object(o.a)(e,n);return void 0===i&&(i=t[n]),i}function $(e,t,n,i){e.notifyPath(n+".splices",{indexSplices:i}),e.notifyPath(n+".length",t.length)}function U(e,t,n,i,r,o){$(e,t,n,[{index:i,addedCount:r,removed:o,object:t,type:"splice"}])}const q=Object(r.a)(e=>{const t=b(Object(s.a)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),K.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[_.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==_.READ_ONLY);let i=v(this,t)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=v(this,t)[e],r=i.indexOf(n);r>=0&&i.splice(r,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,_.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,_.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,_.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,_.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||Object(o.g)(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=Object(o.a)(this,e);if(!(e=Object(o.h)(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let i=e.__dataLinkedPaths;if(i){let r;for(let a in i){let s=i[a];Object(o.c)(a,t)?(r=Object(o.i)(a,s,t),e._setPendingPropertyOrPath(r,n,!0,!0)):Object(o.c)(s,t)&&(r=Object(o.i)(s,a,t),e._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||(e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&Object(o.d)(e),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[_.NOTIFY]&&this[_.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[_.READ_ONLY]&&this[_.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,i){let r=e[_.COMPUTE];if(r){let o=t;for(;w(e,r,o,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,n,i);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,i),this._flushClients(),w(this,this[_.REFLECT],t,n,i),w(this,this[_.OBSERVE],t,n,i),r&&function(e,t,n,i,r){let o,a,s=e[_.NOTIFY],l=g++;for(let c in t)t[c]&&(s&&x(e,s,l,c,n,i,r)?o=!0:r&&S(e,c,n)&&(o=!0));o&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,r,t,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[_.PROPAGATE]&&w(this,this[_.PROPAGATE],e,t,n);let i=this.__templateInfo;for(;i;)w(this,i.propertyEffects,e,t,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(e,t){e=Object(o.f)(e),t=Object(o.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(o.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};$(this,Object(o.a)(this,e,n),n.path,t)}get(e,t){return Object(o.a)(t||this,e)}set(e,t,n){n?Object(o.h)(n,e,t):this[_.READ_ONLY]&&this[_.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=Object(o.a)(this,e,n),r=i.length,a=i.push(...t);return t.length&&U(this,i,n.path,r,t.length,[]),a}pop(e){let t={path:""},n=Object(o.a)(this,e,t),i=Boolean(n.length),r=n.pop();return i&&U(this,n,t.path,n.length,0,[r]),r}splice(e,t,n,...i){let r,a={path:""},s=Object(o.a)(this,e,a);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?s.splice(t):s.splice(t,n,...i),(i.length||r.length)&&U(this,s,a.path,t,i.length,r),r}shift(e){let t={path:""},n=Object(o.a)(this,e,t),i=Boolean(n.length),r=n.shift();return i&&U(this,n,t.path,0,0,[r]),r}unshift(e,...t){let n={path:""},i=Object(o.a)(this,e,n),r=i.unshift(...t);return t.length&&U(this,i,n.path,0,t.length,[]),r}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=Object(o.a)(this,e,i),n=i.path}else n=Array.isArray(e)?Object(o.f)(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,_.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,_.OBSERVE,{fn:C,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,_.OBSERVE,{fn:C,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=B(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");R(this,n,_.OBSERVE,M,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,_.NOTIFY,{fn:j,info:{eventName:Object(a.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,_.REFLECT,{fn:E,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=B(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");R(this,i,_.COMPUTE,A,e,n)}_marshalArgs(e,t,n){const i=this.__data,r=[];for(let a=0,s=e.length;a<s;a++){let{name:s,structured:l,wildcard:c,value:d,literal:p}=e[a];if(!p)if(c){const e=Object(o.c)(s,t),r=V(i,n,e?t:s);d={path:e?t:s,value:r,base:e?Object(o.a)(i,s):r}}else d=l?V(i,n,s):i[s];r[a]=d}return r}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__templateInfo==n;if(!i)for(let r in n.propertyEffects)this._createPropertyAccessor(r);if(t&&((n=Object.create(n)).wasPreBound=i,!i&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e){K.beginHosting(this);let t=super._stampTemplate(e);K.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let r=0;r<i.length;r++){let t=i[r],o=n[r],a=t.bindings;if(a)for(let n=0;n<a.length;n++){let t=a[n];N(o,t),z(o,e,t)}o.__dataHost=e}}(this,n),this.__dataReady&&w(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let i=0;i<n.length;i++){let e=n[i];e.parentNode.removeChild(e)}}static _parseTemplateNode(e,t,n){let i=super._parseTemplateNode(e,t,n);if(e.nodeType===Node.TEXT_NODE){let r=this._parseBindings(e.textContent,t);r&&(e.textContent=D(r)||" ",P(this,t,n,"text","textContent",r),i=!0)}return i}static _parseTemplateNodeAttribute(e,t,n,i,r){let o=this._parseBindings(r,t);if(o){let r=i,s="property";y.test(i)?s="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),s="attribute");let l=D(o);return l&&"attribute"==s&&("class"==i&&e.hasAttribute("class")&&(l+=" "+e.getAttribute(i)),e.setAttribute(i,l)),"input"===e.localName&&"value"===r&&e.setAttribute(r,""),e.removeAttribute(r),"property"===s&&(i=Object(a.b)(i)),P(this,t,n,s,i,o,l),!0}return super._parseTemplateNodeAttribute(e,t,n,i,r)}static _parseTemplateNestedTemplate(e,t,n){let i=super._parseTemplateNestedTemplate(e,t,n),r=n.templateInfo.hostProps;for(let o in r)P(this,t,n,"property","_host_"+o,[{mode:"{",source:o,dependencies:[o]}]);return i}static _parseBindings(e,t){let n,i=[],r=0;for(;null!==(n=F.exec(e));){n.index>r&&i.push({literal:e.slice(r,n.index)});let o=n[1][0],a=Boolean(n[2]),s=n[3].trim(),l=!1,c="",d=-1;"{"==o&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);let p=B(s),u=[];if(p){let{args:e,methodName:n}=p;for(let t=0;t<e.length;t++){let n=e[t];n.literal||u.push(n)}let i=t.dynamicFns;(i&&i[n]||p.static)&&(u.push(n),p.dynamicFn=!0)}else u.push(s);i.push({source:s,mode:o,negate:a,customEvent:l,signature:p,dependencies:u,event:c}),r=F.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,r,a){let s;return s=t.signature?M(e,n,i,0,t.signature):n!=t.source?Object(o.a)(e,t.source):a&&Object(o.d)(n)?Object(o.a)(e,n):e.__data[n],t.negate&&(s=!s),s}}});const K=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(19),r=n(8);class o{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a,s=0,l=0,c=o.nextNode();for(;s<n.length;)if(a=n[s],Object(r.d)(a)){for(;l<a.index;)l++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return i.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(76);const r=i},function(e,t,n){"use strict";var i=n(13);class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(e){return function e(t,n){let i=n.substring(t.start,t.end-1);t.parsedCssText=t.cssText=i.trim();if(t.parent){let e=t.previous?t.previous.end:t.parent.start;i=(i=(i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}(i=n.substring(e,t.start-1))).replace(d.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=i.trim();t.atRule=0===r.indexOf(h),t.atRule?0===r.indexOf(u)?t.type=s.MEDIA_RULE:r.match(d.keyframesRule)&&(t.type=s.KEYFRAMES_RULE,t.keyframesName=t.selector.split(d.multipleSpaces).pop()):0===r.indexOf(p)?t.type=s.MIXIN_RULE:t.type=s.STYLE_RULE}let r=t.rules;if(r)for(let o,a=0,s=r.length;a<s&&(o=r[a]);a++)e(o,n);return t}(function(e){let t=new r;t.start=0,t.end=e.length;let n=t;for(let i=0,o=e.length;i<o;i++)if(e[i]===l){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;(n=new r).start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===c&&(n.end=i+1,n=n.parent||t);return t}(e=e.replace(d.comments,"").replace(d.port,"")),e)}function a(e,t,n=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(p)}(n))for(let e,r=0,o=n.length;r<o&&(e=n[r]);r++)i=a(e,t,i);else(i=(i=t?e.cssText:function(e){return function(e){return e.replace(d.mixinApply,"").replace(d.varApply,"")}(e=function(e){return e.replace(d.customProp,"").replace(d.mixinProp,"")}(e))}(e.cssText)).trim())&&(i="  "+i+"\n")}return i&&(e.selector&&(n+=e.selector+" "+l+"\n"),n+=i,e.selector&&(n+=c+"\n\n")),n}const s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},p="--",u="@media",h="@";var f=n(22);const b=new Set,m="shady-unscoped";function g(e){const t=e.textContent;if(!b.has(t)){b.add(t);const n=e.cloneNode(!0);document.head.appendChild(n)}}function _(e){return e.hasAttribute(m)}function y(e,t){return e?("string"==typeof e&&(e=o(e)),t&&w(e,t),a(e,i.c)):""}function v(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=o(e.textContent)),e.__cssRules||null}function w(e,t,n,i){if(!e)return;let r=!1,o=e.type;if(i&&o===s.MEDIA_RULE){let t=e.selector.match(f.a);t&&(window.matchMedia(t[1]).matches||(r=!0))}o===s.STYLE_RULE?t(e):n&&o===s.KEYFRAMES_RULE?n(e):o===s.MIXIN_RULE&&(r=!0);let a=e.rules;if(a&&!r)for(let s,l=0,c=a.length;l<c&&(s=a[l]);l++)w(s,t,n,i)}function x(e,t){let n=0;for(let i=t,r=e.length;i<r;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const k="css-build";function C(e){if(void 0!==i.a)return i.a;if(void 0===e.__cssBuild){const t=e.getAttribute(k);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===k)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function S(e){return""!==C(e)}var O=n(29);const j=/;\s*/m,E=/^\s*(initial)|(inherit)\s*$/,A=/\s*!important/,P="_-_";class T{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let I=null;class N{constructor(){this._currentElement=null,this._measureElement=null,this._map=new T}detectMixin(e){return Object(O.a)(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let r=0;r<n.length;r++){const e=n[r];_(e)?i.d||(g(e),e.parentNode.removeChild(e)):(t.push(e.textContent),e.parentNode.removeChild(e))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=v(e);return this.transformRules(n,t),e.textContent=y(n),n}transformCustomStyle(e){let t=v(e);return w(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=y(t),t}transformRules(e,t){this._currentElement=t,w(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(f.c,(e,n,i,r)=>this._produceCssProperties(e,n,i,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return w(t,t=>{(i=i||t===e)||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=f.b.exec(e);){let i=n[0],r=n[1],o=n.index,a=o+i.indexOf("@apply"),s=o+i.length,l=e.slice(0,a),c=e.slice(s),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let p=this._atApplyToCssProperties(r,d);e=`${l}${p}${c}`,f.b.lastIndex=o+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(j,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let r,o,a;this._currentElement&&(i.dependants[this._currentElement]=!0);const s=i.properties;for(r in s)a=t&&t[r],o=[r,": var(",e,P,r],a&&o.push(",",a.replace(A,"")),o.push(")"),A.test(s[r])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=E.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,r=e.split(";"),o={};for(let a,s,l=0;l<r.length;l++)(a=r[l])&&(s=a.split(":")).length>1&&(n=s[0].trim(),i=s.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),o[n]=i);return o}_invalidateMixinEntry(e){if(I)for(let t in e.dependants)t!==this._currentElement&&I(t)}_produceCssProperties(e,t,n,i,r){if(n&&function e(t,n){let i=t.indexOf("var(");if(-1===i)return n(t,"","","");let r=x(t,i+3),o=t.substring(i+4,r),a=t.substring(0,i),s=e(t.substring(r+1),n),l=o.indexOf(",");return-1===l?n(a,o.trim(),"",s):n(a,o.substring(0,l).trim(),o.substring(l+1).trim(),s)}(n,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let o=this._consumeCssProperties(""+i,r),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(o,!0),l=s,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),s):this._map.set(t,l);let p,u,h=[],f=!1;for(p in l)void 0===(u=s[p])&&(u="initial"),!d||p in d||(f=!0),h.push(`${t}${P}${p}: ${u}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(a=`${e};${a}`),`${a}${h.join("; ")};`}}N.prototype.detectMixin=N.prototype.detectMixin,N.prototype.transformStyle=N.prototype.transformStyle,N.prototype.transformCustomStyle=N.prototype.transformCustomStyle,N.prototype.transformRules=N.prototype.transformRules,N.prototype.transformRule=N.prototype.transformRule,N.prototype.transformTemplate=N.prototype.transformTemplate,N.prototype._separator=P,Object.defineProperty(N.prototype,"invalidCallback",{get:()=>I,set(e){I=e}});var z=N;var R={};const M="_applyShimCurrentVersion",L="_applyShimNextVersion",F="_applyShimValidatingVersion",D=Promise.resolve();function B(e){let t=R[e];t&&function(e){e[M]=e[M]||0,e[F]=e[F]||0,e[L]=(e[L]||0)+1}(t)}function H(e){return e[M]===e[L]}function V(e){return!H(e)&&e[F]===e[L]}function $(e){e[F]=e[L],e._validating||(e._validating=!0,D.then(function(){e[M]=e[L],e._validating=!1}))}n(62);const U=new z;class q{constructor(){this.customStyleInterface=null,U.invalidCallback=B}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{U.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),S(e))return;R[t]=e;let n=U.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&U.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Object(O.c)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}(e),n=R[t];if((!n||!S(n))&&n&&!H(n)){V(n)||(this.prepareTemplate(n,t),$(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=y(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new q;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Object(O.b)(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=U;var K=n(37),X=n(47),W=n(49),Y=n(10);const J=/:host\(:dir\((ltr|rtl)\)\)/g,G=':host([dir="$1"])',Z=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',ee=/:dir\((?:ltr|rtl)\)/,te=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),ne=[];let ie=null,re="";function oe(){re=document.documentElement.getAttribute("dir")}function ae(e){if(!e.__autoDirOptOut){e.setAttribute("dir",re)}}function se(){oe(),re=document.documentElement.getAttribute("dir");for(let e=0;e<ne.length;e++)ae(ne[e])}const le=Object(Y.a)(e=>{te||ie||(oe(),(ie=new MutationObserver(se)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Object(W.a)(e);class n extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!te&&ee.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=(t=t.replace(J,G)).replace(Z,Q)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(ie&&ie.takeRecords().length&&se(),ne.push(this),ae(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=ne.indexOf(this);e>-1&&ne.splice(e,1)}}}return n.__activateDir=!1,n});n(66);function ce(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ce():window.addEventListener("DOMContentLoaded",ce);var de=n(3),pe=n(36),ue=n(18),he=n(12),fe=n(2),be=n(0);n.d(t,"a",function(){return ge});let me=window.ShadyCSS;const ge=Object(Y.a)(e=>{const t=le(Object(X.a)(Object(K.a)(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,r=0;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let r=n.node||this;return Object(be.a)(r).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(e);r||(r={},i.set(e,r));let o=t+n;r[o]||(r[o]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),r=t+n,o=i&&i[r];o&&(this._removeEventListenerFromNode(e,t,o),i[r]=null)}setScrollDirection(e,t){Object(pe.f)(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Object(be.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Object(de.a)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(de.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(de.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Object(de.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){return this!==e&&Object(be.a)(this).contains(e)&&Object(be.a)(this).getRootNode()===Object(be.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object(be.a)(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return me.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=ue.a.debounce(this._debouncers[e],n>0?he.d.after(n):he.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?he.d.run(e.bind(this),t):~he.c.run(e.bind(this))}cancelAsync(e){e<0?he.c.cancel(~e):he.d.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let i in t)n[i]=t[i];return n}elementMatches(e,t){return Object(de.b)(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(Object(be.a)(n).setAttribute(e,""),!0):(Object(be.a)(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if((n=e.indexOf(t))>=0)return e.splice(n,1)}else{if((n=Object(fe.a)(this,e).indexOf(t))>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i})},function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(9);var i=n(20),r=n(7);let o={},a={};function s(e,t){o[e]=a[e.toLowerCase()]=t}function l(e){return o[e]||a[e.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=l(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(i.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(i.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(r.g&&void 0!==l(e))throw s(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,s(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}c.prototype.modules=o,customElements.define("dom-module",c)},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});const i=async(e,t)=>{return(await e.callWS({type:"frontend/get_user_data",key:t})).value},r=async(e,t,n)=>e.callWS({type:"frontend/set_user_data",key:t,value:n})},function(e,t,n){"use strict";n(5),n(73);const i=n(4).a`
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
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return b});var i=n(42),r=n(20);const o="link[rel=import][type~=css]",a="include",s="shady-unscoped";function l(e){return i.a.import(e)}function c(e){let t=e.body?e.body:e;const n=Object(r.b)(t.textContent,e.baseURI),i=document.createElement("style");return i.textContent=n,i}function d(e){const t=e.trim().split(/\s+/),n=[];for(let i=0;i<t.length;i++)n.push(...p(t[i]));return n}function p(e){const t=l(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...f(t));const n=t.querySelector("template");n&&e.push(...u(n,t.assetpath)),t._styles=e}return t._styles}function u(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let o=i[e],s=o.getAttribute(a);s&&n.push(...d(s).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(o.textContent=Object(r.b)(o.textContent,t)),n.push(o)}e._styles=n}return e._styles}function h(e){let t=l(e);return t?f(t):[]}function f(e){const t=[],n=e.querySelectorAll(o);for(let i=0;i<n.length;i++){let e=n[i];if(e.import){const n=e.import,i=e.hasAttribute(s);if(i&&!n._unscopedStyle){const e=c(n);e.setAttribute(s,""),n._unscopedStyle=e}else n._style||(n._style=c(n));t.push(i?n._unscopedStyle:n._style)}}return t}function b(e){let t=e.trim().split(/\s+/),n="";for(let i=0;i<t.length;i++)n+=m(t[i]);return n}function m(e){let t=l(e);if(t&&void 0===t._cssText){let e=g(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const i=u(e,t);for(let r=0;r<i.length;r++){let e=i[r];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function g(e){let t="",n=f(e);for(let i=0;i<n.length;i++)t+=n[i].textContent;return t}},function(e,t,n){"use strict";n(5);const i=n(4).a`
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
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);var r=document.createElement("style");r.textContent="[hidden] { display: none !important; }",document.head.appendChild(r)},function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(9);var i=n(10),r=n(36);const o=Object(i.a)(e=>{return class extends e{_addEventListenerToNode(e,t,n){Object(r.b)(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){Object(r.e)(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}})},function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(5);var i=n(6);class r{constructor(e){r[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return r.types[e]&&r.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=r.types[t]=r.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=r.types[this.type];return e?Object.keys(e).map(function(e){return o[this.type][e]},this):[]}}byKey(e){return this.key=e,this.value}}r[" "]=function(){},r.types={};var o=r.types;Object(i.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new r({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new r({type:this.type,key:e}).value}})},function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(9);var i=n(10),r=n(24),o=n(50);const a={};let s=HTMLElement.prototype;for(;s;){let e=Object.getOwnPropertyNames(s);for(let t=0;t<e.length;t++)a[e[t]]=!0;s=Object.getPrototypeOf(s)}const l=Object(i.a)(e=>{const t=Object(o.a)(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(r.b)(e[t]))}static attributeNameForProperty(e){return Object(r.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(t){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(i){n=e}break;case Array:try{n=JSON.parse(e)}catch(i){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!a[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(9);var i=n(10),r=n(12),o=n(0);const a=r.c,s=Object(i.a)(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],r=this._shouldPropertyChange(e,t,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,a.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[e]||e;this[r]=this._deserializeValue(t,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);void 0===i?e.removeAttribute(n):("class"!==n&&"name"!==n&&"slot"!==n||(e=Object(o.a)(e)),e.setAttribute(n,i))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}})},function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(9);function i(e,t,n){return{index:e,removed:t,addedCount:n}}const r=0,o=1,a=2,s=3;function l(e,t,n,l,c,p){let u,h=0,f=0,b=Math.min(n-t,p-c);if(0==t&&0==c&&(h=function(e,t,n){for(let i=0;i<n;i++)if(!d(e[i],t[i]))return i;return n}(e,l,b)),n==e.length&&p==l.length&&(f=function(e,t,n){let i=e.length,r=t.length,o=0;for(;o<n&&d(e[--i],t[--r]);)o++;return o}(e,l,b-h)),c+=h,p-=f,(n-=f)-(t+=h)==0&&p-c==0)return[];if(t==n){for(u=i(t,[],0);c<p;)u.removed.push(l[c++]);return[u]}if(c==p)return[i(t,[],n-t)];let m=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],l=[];for(;t>0||n>0;){if(0==t){l.push(a),n--;continue}if(0==n){l.push(s),t--;continue}let c,d=e[t-1][n-1],p=e[t-1][n],u=e[t][n-1];(c=p<u?p<d?p:d:u<d?u:d)==d?(d==i?l.push(r):(l.push(o),i=d),t--,n--):c==p?(l.push(s),t--,i=p):(l.push(a),n--,i=u)}return l.reverse(),l}(function(e,t,n,i,r,o){let a=o-r+1,s=n-t+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(s),l[c][0]=c;for(let c=0;c<s;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let n=1;n<s;n++)if(d(e[t+n-1],i[r+c-1]))l[c][n]=l[c-1][n-1];else{let e=l[c-1][n]+1,t=l[c][n-1]+1;l[c][n]=e<t?e:t}return l}(e,t,n,l,c,p));u=void 0;let g=[],_=t,y=c;for(let d=0;d<m.length;d++)switch(m[d]){case r:u&&(g.push(u),u=void 0),_++,y++;break;case o:u||(u=i(_,[],0)),u.addedCount++,_++,u.removed.push(l[y]),y++;break;case a:u||(u=i(_,[],0)),u.addedCount++,_++;break;case s:u||(u=i(_,[],0)),u.removed.push(l[y]),y++}return u&&g.push(u),g}function c(e,t){return l(e,0,e.length,t,0,t.length)}function d(e,t){return e===t}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(21);const r=(e,t)=>Object(i.a)(e,"hass-notification",t)},function(e,t,n){"use strict";n(5),n(56);const i=n(4).a`<custom-style>
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
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});n(5),n(35);var i=n(32),r=n(3);const o={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=Object(r.a)(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=Object(r.a)(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},a=[i.a,o]},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var i=n(1);const r=i.c`
  :host {
    @apply --paper-font-body1;
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar {
    background-color: var(--primary-color);
    font-weight: 400;
    color: var(--text-primary-color, white);
  }

  app-toolbar ha-menu-button + [main-title],
  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],
  app-toolbar paper-icon-button + [main-title] {
    margin-left: 24px;
  }

  h1 {
    @apply --paper-font-title;
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
`,o=i.c`
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

  .paper-dialog-buttons .warning {
    --mdc-theme-primary: var(--google-red-500);
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
`},function(e,t){},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s});n(5);var i=n(54),r=n(35),o=n(67);const a={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=o.a._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},s=[i.a,r.a,o.a,a]},function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty;function r(e){var t,n,r,o,a=Array.prototype.slice.call(arguments,1);for(t=0,n=a.length;t<n;t+=1)if(r=a[t])for(o in r)i.call(r,o)&&(e[o]=r[o]);return e}var o=function(){try{return!!Object.defineProperty({},"a",{})}catch(e){return!1}}(),a=(!o&&Object.prototype.__defineGetter__,o?Object.defineProperty:function(e,t,n){"get"in n&&e.__defineGetter__?e.__defineGetter__(t,n.get):(!i.call(e,t)||"value"in n)&&(e[t]=n.value)}),s=Object.create||function(e,t){var n,r;function o(){}for(r in o.prototype=e,n=new o,t)i.call(t,r)&&a(n,r,t[r]);return n},l=c;function c(e,t,n){this.locales=e,this.formats=t,this.pluralFn=n}function d(e){this.id=e}function p(e,t,n,i,r){this.id=e,this.useOrdinal=t,this.offset=n,this.options=i,this.pluralFn=r}function u(e,t,n,i){this.id=e,this.offset=t,this.numberFormat=n,this.string=i}function h(e,t){this.id=e,this.options=t}c.prototype.compile=function(e){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(e)},c.prototype.compileMessage=function(e){if(!e||"messageFormatPattern"!==e.type)throw new Error('Message AST is not of type: "messageFormatPattern"');var t,n,i,r=e.elements,o=[];for(t=0,n=r.length;t<n;t+=1)switch((i=r[t]).type){case"messageTextElement":o.push(this.compileMessageText(i));break;case"argumentElement":o.push(this.compileArgument(i));break;default:throw new Error("Message element does not have a valid type")}return o},c.prototype.compileMessageText=function(e){return this.currentPlural&&/(^|[^\\])#/g.test(e.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new u(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,e.value)):e.value.replace(/\\#/g,"#")},c.prototype.compileArgument=function(e){var t=e.format;if(!t)return new d(e.id);var n,i=this.formats,r=this.locales,o=this.pluralFn;switch(t.type){case"numberFormat":return n=i.number[t.style],{id:e.id,format:new Intl.NumberFormat(r,n).format};case"dateFormat":return n=i.date[t.style],{id:e.id,format:new Intl.DateTimeFormat(r,n).format};case"timeFormat":return n=i.time[t.style],{id:e.id,format:new Intl.DateTimeFormat(r,n).format};case"pluralFormat":return n=this.compileOptions(e),new p(e.id,t.ordinal,t.offset,n,o);case"selectFormat":return n=this.compileOptions(e),new h(e.id,n);default:throw new Error("Message element does not have a valid format type")}},c.prototype.compileOptions=function(e){var t,n,i,r=e.format,o=r.options,a={};for(this.pluralStack.push(this.currentPlural),this.currentPlural="pluralFormat"===r.type?e:null,t=0,n=o.length;t<n;t+=1)a[(i=o[t]).selector]=this.compileMessage(i.value);return this.currentPlural=this.pluralStack.pop(),a},d.prototype.format=function(e){return e||"number"==typeof e?"string"==typeof e?e:String(e):""},p.prototype.getOption=function(e){var t=this.options;return t["="+e]||t[this.pluralFn(e-this.offset,this.useOrdinal)]||t.other},u.prototype.format=function(e){var t=this.numberFormat.format(e-this.offset);return this.string.replace(/(^|[^\\])#/g,"$1"+t).replace(/\\#/g,"#")},h.prototype.getOption=function(e){var t=this.options;return t[e]||t.other};var f=n(77),b=n.n(f),m=g;function g(e,t,n){var i="string"==typeof e?g.__parse(e):e;if(!i||"messageFormatPattern"!==i.type)throw new TypeError("A message must be provided as a String or AST.");n=this._mergeFormats(g.formats,n),a(this,"_locale",{value:this._resolveLocale(t)});var r=this._findPluralRuleFunction(this._locale),o=this._compilePattern(i,t,n,r),s=this;this.format=function(t){try{return s._format(o,t)}catch(n){throw n.variableId?new Error("The intl string context variable '"+n.variableId+"' was not provided to the string '"+e+"'"):n}}}a(g,"formats",{enumerable:!0,value:{number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}),a(g,"__localeData__",{value:s(null)}),a(g,"__addLocaleData",{value:function(e){if(!e||!e.locale)throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");g.__localeData__[e.locale.toLowerCase()]=e}}),a(g,"__parse",{value:b.a.parse}),a(g,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),g.prototype.resolvedOptions=function(){return{locale:this._locale}},g.prototype._compilePattern=function(e,t,n,i){return new l(t,n,i).compile(e)},g.prototype._findPluralRuleFunction=function(e){for(var t=g.__localeData__,n=t[e.toLowerCase()];n;){if(n.pluralRuleFunction)return n.pluralRuleFunction;n=n.parentLocale&&t[n.parentLocale.toLowerCase()]}throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :"+e)},g.prototype._format=function(e,t){var n,r,o,a,s,l,c="";for(n=0,r=e.length;n<r;n+=1)if("string"!=typeof(o=e[n])){if(a=o.id,!t||!i.call(t,a))throw(l=new Error("A value must be provided for: "+a)).variableId=a,l;s=t[a],o.options?c+=this._format(o.getOption(s),t):c+=o.format(s)}else c+=o;return c},g.prototype._mergeFormats=function(e,t){var n,o,a={};for(n in e)i.call(e,n)&&(a[n]=o=s(e[n]),t&&i.call(t,n)&&r(o,t[n]));return a},g.prototype._resolveLocale=function(e){"string"==typeof e&&(e=[e]),e=(e||[]).concat(g.defaultLocale);var t,n,i,r,o=g.__localeData__;for(t=0,n=e.length;t<n;t+=1)for(i=e[t].toLowerCase().split("-");i.length;){if(r=o[i.join("-")])return r.locale;i.pop()}var a=e.pop();throw new Error("No locale data has been added to IntlMessageFormat for: "+e.join(", ")+", or the default locale: "+a)};var _={locale:"en",pluralRuleFunction:function(e,t){var n=String(e).split("."),i=!n[1],r=Number(n[0])==e,o=r&&n[0].slice(-1),a=r&&n[0].slice(-2);return t?1==o&&11!=a?"one":2==o&&12!=a?"two":3==o&&13!=a?"few":"other":1==e&&i?"one":"other"}};m.__addLocaleData(_),m.defaultLocale="en";var y=m;n.d(t,"a",function(){return v}),n.d(t,"b",function(){return w});const v=(e,t,n,i)=>(e._localizationCache={},(r,...o)=>{if(!(r&&n&&t&&n[t]))return"";const a=n[t][r];if(!a)return"";const s=r+a;let l=e._localizationCache[s];l||(l=new y(a,t,i),e._localizationCache[s]=l);const c={};for(let e=0;e<o.length;e+=2)c[o[e]]=o[e+1];try{return l.format(c)}catch(d){return"Translation "+d}}),w=(e,t,n)=>{const i=[t];return n&&Object.keys(n).forEach(e=>{i.push(e),i.push(n[e])}),e(...i)}},,function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(5);const i={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(5);var i=n(48);let r=null;const o={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){r=new i.a({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return r&&r.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}}},function(e,t,n){"use strict";let i,r=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function a(e){requestAnimationFrame(function(){o?o(e):(r||(r=new Promise(e=>{i=e}),"complete"===document.readyState?i():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&i()})),r.then(function(){e&&e()}))})}n.d(t,"a",function(){return p});const s="__seenByShadyCSS",l="__shadyCSSCachedStyle";let c=null,d=null;class p{constructor(){this.customStyles=[],this.enqueued=!1,a(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,a(d))}addCustomStyle(e){e[s]||(e[s]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[l])return e[l];let t;return t=e.getStyle?e.getStyle():e}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[l])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;c&&c(e),n[l]=e}}return e}}p.prototype.addCustomStyle=p.prototype.addCustomStyle,p.prototype.getStyleForCustomStyle=p.prototype.getStyleForCustomStyle,p.prototype.processStyles=p.prototype.processStyles,Object.defineProperties(p.prototype,{transformCallback:{get:()=>c,set(e){c=e}},validateCallback:{get:()=>d,set(e){let t=!1;d||(t=!0),d=e,t&&this.enqueueDocumentValidation()}}})},function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(9);var i=n(51),r=n(12),o=n(0);function a(e){return"slot"===e.localName}let s=class{static getFlattenedNodes(e){const t=Object(o.a)(e);return a(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>a(e)?(e=e,Object(o.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){a(this._target)?this._listenSlots([this._target]):Object(o.a)(this._target).children&&(this._listenSlots(Object(o.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){a(this._target)?this._unlistenSlots([this._target]):Object(o.a)(this._target).children&&(this._unlistenSlots(Object(o.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Object(i.a)(t,this._effectiveNodes);for(let i,o=0;o<n.length&&(i=n[o]);o++)for(let t,n=0;n<i.removed.length&&(t=i.removed[n]);n++)e.removedNodes.push(t);for(let i,o=0;o<n.length&&(i=n[o]);o++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];a(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];a(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}},function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});const i=`${location.protocol}//${location.host}`,r=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=()=>fetch("/auth/providers",{credentials:"same-origin"})},,function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(9);let i=!1,r=[],o=[];function a(){i=!0,requestAnimationFrame(function(){i=!1,s(r),setTimeout(function(){!function(e){for(let t=0,n=e.length;t<n;t++)l(e.shift())}(o)})})}function s(e){for(;e.length;)l(e.shift())}function l(e){const t=e[0],n=e[1],i=e[2];try{n.apply(t,i)}catch(r){setTimeout(()=>{throw r})}}function c(e,t,n){i||a(),o.push([e,t,n])}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(5),n(108);var i=n(54),r=n(3);const o={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){i.b._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Object(r.a)(t).appendChild(this._ripple),e){var n=Object(r.a)(this._rippleContainer||this),i=Object(r.a)(e).rootTarget;n.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(5);const i={attached:function(){this.fire("addon-attached")},update:function(e){}}},,function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(11);const r=new WeakMap,o=Object(i.f)(e=>t=>{if(!(t instanceof i.a)||t instanceof i.c||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=t,{element:o}=n;r.has(t)||(o.className=n.strings.join(" "));const{classList:a}=o,s=r.get(t);for(const i in s)i in e||a.remove(i);for(const i in e){const t=e[i];if(!s||t!==s[i]){a[t?"add":"remove"](i)}}r.set(t,e)})},function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return u});var i=n(41),r=n(7);const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},a={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},a);function l(e,t){return p({},Object(i.a)(t),e)}function c(e,t,n,i){!function(e,t,n){const i=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let o=0;o<r.length;o++){let a=r[o];if(!(a in n))if(i)t[a]=e[a];else{let n=Object.getOwnPropertyDescriptor(e,a);n&&(n.configurable=!0,Object.defineProperty(t,a,n))}}}(t,e,i);for(let r in o)t[r]&&(n[r]=n[r]||[],n[r].push(t[r]))}function d(e,t){for(const n in t){const i=e[n],r=t[n];e[n]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}function p(e,t,n){let i;const o={};class l extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)(e=i[t]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)d(t,i[e].properties);return d(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)(e=i[n]).observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=o.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=l.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),r.b&&p(e);const t=Object.getPrototypeOf(this);let n=o.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=o.registered)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=o.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=o.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=o.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=o.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=o.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=o.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=function e(t,n,i){n=n||[];for(let r=t.length-1;r>=0;r--){let o=t[r];o?Array.isArray(o)?e(o,n):n.indexOf(o)<0&&(!i||i.indexOf(o)<0)&&n.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),l.prototype.behaviors=e?e.concat(n):i}const p=t=>{i&&function(e,t,n){for(let i=0;i<t.length;i++)c(e,t[i],n,s)}(t,i,o),c(t,e,o,a)};return r.b||p(l.prototype),l.generatedFrom=e,l}const u=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(Object(i.a)(HTMLElement)):Object(i.a)(HTMLElement);return(n=p(e,n,e.behaviors)).is=n.prototype.is=e.is,n}},function(e,t,n){"use strict";var i=n(62),r=n(29),o=n(13);const a=new i.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){a.processStyles(),Object(r.c)(e,t)},styleElement(e){a.processStyles()},styleDocument(e){a.processStyles(),Object(r.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(r.b)(e,t),flushCustomStyles(){},nativeCss:o.c,nativeShadow:o.d,cssBuild:o.a,disableRuntime:o.b}),window.ShadyCSS.CustomStyleInterface=a;var s=n(45);const l="include",c=window.ShadyCSS.CustomStyleInterface;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,c.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(l);return t&&(e.removeAttribute(l),e.textContent=Object(s.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}})},function(e,t,n){"use strict";n(5);const i=n(4).a`
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
`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,n){"use strict";var i=n(11),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var a,s,l=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),c={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},d={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},p={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function u(e,t){if(void 0===e&&(e=window),void 0===t&&(t=!1),void 0===s||t){var n=!1;try{e.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(i){}s=n}return!!s&&{passive:!0}}var h=["touchstart","pointerdown","mousedown","keydown"],f=["touchend","pointerup","mouseup","contextmenu"],b=[],m=function(e){function t(n){var i=e.call(this,o({},t.defaultAdapter,n))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(e){return i.activate_(e)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=t.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.addClass(r),e.adapter_.isUnbounded()&&(e.adapter_.addClass(o),e.layoutInternal_())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.removeClass(i),e.adapter_.removeClass(r),e.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){e.layoutInternal_(),e.layoutFrame_=0})},t.prototype.setUnbounded=function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(h.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):f.forEach(function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)})},t.prototype.deregisterRootHandlers_=function(){var e=this;h.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),f.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})},t.prototype.removeCssVars_=function(){var e=this,n=t.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})},t.prototype.activate_=function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==e&&i.type!==e.type))n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&b.length>0&&b.some(function(e){return t.adapter_.containsEventTarget(e)})?this.resetActivationState_():(void 0!==e&&(b.push(e.target),this.registerDeactivationHandlers_(e)),n.wasElementMadeActive=this.checkElementMadeActive_(e),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){b=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive_(e),n.wasElementMadeActive&&t.animateActivation_()),n.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())}))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,n=t.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=t.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,l=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",d="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),u=p.startPoint,h=p.endPoint;c=u.x+"px, "+u.y+"px",d=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return e.activationTimerCallback_()},l)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,n=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,n){if(!e)return{x:0,y:0};var i,r,o=t.x,a=t.y,s=o+n.left,l=a+n.top;if("touchstart"===e.type){var c=e;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-l}else{var d=e;i=d.pageX-s,r=d.pageY-l}return{x:i,y:r}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,o=i.isActivated;(r||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){e.adapter_.removeClass(n)},p.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return e.previousActivationEvent_=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var n=o({},t);t.isProgrammatic?(requestAnimationFrame(function(){return e.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(n),e.resetActivationState_()}))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING,this.initialSize_=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,n=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},t}(l);const g=n(15).c`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`;function _(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}n.d(t,"a",function(){return C});const y=function(e,t){void 0===t&&(t=!1);var n=e.CSS,i=a;if("boolean"==typeof a&&!t)return a;if(!n||"function"!=typeof n.supports)return!1;var r=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=!(!r&&!o||function(e){var t=e.document,n=t.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",t.body.appendChild(n);var i=e.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.remove(),r}(e)),t||(a=i),i}(window),v=navigator.userAgent.match(/Safari/);let w=!1;const x=e=>{v&&!w&&(()=>{w=!0;const e=new i.b({templateFactory:i.l});e.appendInto(document.head),e.setValue(g),e.commit()})();const t=e.surfaceNode,n=e.interactionNode||t;n.getRootNode()!==t.getRootNode()&&""===n.style.position&&(n.style.position="relative");const r=new m({browserSupportsCssVars:()=>y,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>_(n,":active"),isSurfaceDisabled:()=>Boolean(e.disabled),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>n.contains(e),registerInteractionHandler:(e,t)=>n.addEventListener(e,t,u()),deregisterInteractionHandler:(e,t)=>n.removeEventListener(e,t,u()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,u()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,u()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,n)=>t.style.setProperty(e,n),computeBoundingRect:()=>n.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return r.init(),r},k=new WeakMap,C=Object(i.f)((e={})=>t=>{const n=t.committer.element,r=e.interactionNode||n;let o=t.value;const a=k.get(o);void 0!==a&&a!==r&&(o.destroy(),o=i.h),o===i.h?(o=x(Object.assign({},e,{surfaceNode:n})),k.set(o,r),t.setValue(o)):(void 0!==e.unbounded&&o.setUnbounded(e.unbounded),void 0!==e.disabled&&o.setUnbounded(e.disabled)),!0===e.active?o.activate():!1===e.active&&o.deactivate()})},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(52);const r=(e=!0)=>{"serviceWorker"in navigator&&("https:"===location.protocol||"localhost"===location.hostname)&&(navigator.serviceWorker.register("/service_worker.js").then(t=>{t.addEventListener("updatefound",()=>{const n=t.installing;n&&e&&n.addEventListener("statechange",()=>{if("installed"===n.state&&navigator.serviceWorker.controller){const e=window.document.querySelector("home-assistant, ha-onboarding");Object(i.a)(e,{message:"A new version of the frontend is available.",action:{action:()=>n.postMessage({type:"skipWaiting"}),text:"reload"},duration:0,dismissable:!1})}})})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{location.reload()}))}},function(e){e.exports={fragments:["config","history","logbook","mailbox","profile","shopping-list","page-authorize","page-onboarding"],translations:{af:{nativeName:"Afrikaans",fingerprints:{af:"af-f131401387e319ccfb397c24f181d190.json","config/af":"config/af-5451db15e9cd6aa694d78799646c5b55.json","history/af":"history/af-24952254b8606ca48d3df36410430b20.json","logbook/af":"logbook/af-3989c57a2689ec6517ba0733447294d9.json","mailbox/af":"mailbox/af-d1f4b114665e2b06b246db7fabc8b8f5.json","page-authorize/af":"page-authorize/af-49c9625addb271301793522b3989f95f.json","page-onboarding/af":"page-onboarding/af-e03b6ef0111e348dbfbd1d92024f9dde.json","profile/af":"profile/af-3ec5bece146163f669dfcbe1aab90b56.json","shopping-list/af":"shopping-list/af-8a603244a3b2451b2915bf1f1c49371d.json"}},ar:{nativeName:"العربية",isRTL:!0,fingerprints:{ar:"ar-06b133f6ba3192c879760a029b047723.json","config/ar":"config/ar-1ab2cda507fb9b24ed59a5574f4bc965.json","history/ar":"history/ar-c321d3dac3049b82ad4eede78ff91b9c.json","logbook/ar":"logbook/ar-b50db777a7a02cf46c839403a1bf121e.json","mailbox/ar":"mailbox/ar-2509d061cee5c986656fb3e07c99b36c.json","page-authorize/ar":"page-authorize/ar-6b71136444ba7a00b44feb441b95285b.json","page-onboarding/ar":"page-onboarding/ar-dea8bb9bf10a57717f3ce7cbbbd85ff8.json","profile/ar":"profile/ar-921a42b5533687dde55aa0863e9caf62.json","shopping-list/ar":"shopping-list/ar-99024fec625c3df4dfa08e57cc0ba426.json"}},bg:{nativeName:"Български",fingerprints:{bg:"bg-ca1a934d91e47c71cf79a6b85202ddbe.json","config/bg":"config/bg-2e5dd35b13ef0406b3d111a3765bb48d.json","history/bg":"history/bg-5284d1b81db0ce4d8fbdc9f38b9776e7.json","logbook/bg":"logbook/bg-e5a1fefc58753b085d7207129e8fd8dd.json","mailbox/bg":"mailbox/bg-6784c67b918f82efb683b3015a146393.json","page-authorize/bg":"page-authorize/bg-f85bf286913e6037e752ac6cbc5d24eb.json","page-onboarding/bg":"page-onboarding/bg-4680ecf56fd4239db3451971e332aadb.json","profile/bg":"profile/bg-5c12ce0761125d0605cfa1b122f0e09b.json","shopping-list/bg":"shopping-list/bg-b9d8774859dd369e8870a809c46d38bf.json"}},bs:{nativeName:"Bosanski",fingerprints:{bs:"bs-cf8e27f4e095605d17e0fb8240e44459.json","config/bs":"config/bs-1068ff23d74d0e3a6a78d157bd18c3a5.json","history/bs":"history/bs-ff19fc552bb533b540bbadf9f88e6b78.json","logbook/bs":"logbook/bs-4b07c9bd5066c18c47b980b51da20dcc.json","mailbox/bs":"mailbox/bs-b6910682902a5993edf247a428bd9ad3.json","page-authorize/bs":"page-authorize/bs-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/bs":"page-onboarding/bs-8be449932765f8c89a53c93ed8ba47c8.json","profile/bs":"profile/bs-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/bs":"shopping-list/bs-4f2f7e9d9ee35e3c3bd7d8f30cef36a8.json"}},ca:{nativeName:"Català",fingerprints:{ca:"ca-641eb9f2e0bb5916a903a5af724b3514.json","config/ca":"config/ca-9d9e56f65ad134334bb516f58e90a877.json","history/ca":"history/ca-726032ecfcc6833b0add4babd6b02b1e.json","logbook/ca":"logbook/ca-fca3a2001f167aa12e2405a0153fc66d.json","mailbox/ca":"mailbox/ca-1265a6be3775573dcd808c56b3160c61.json","page-authorize/ca":"page-authorize/ca-aca92525a537050d3b996667597631b7.json","page-onboarding/ca":"page-onboarding/ca-114e0370e368d1a9f52d2938f9b533af.json","profile/ca":"profile/ca-5138df62b2f4e90377d07c527c9f427e.json","shopping-list/ca":"shopping-list/ca-7ec2d8a4e8c44bd1ccfac29531cb3f87.json"}},cs:{nativeName:"Čeština",fingerprints:{cs:"cs-812c4f5354e40e7ba9ad835ed0a37c90.json","config/cs":"config/cs-518eea65adb190287e6d5fead6ce7b4e.json","history/cs":"history/cs-0d545a3ecafd870b3098a3d8f76580f7.json","logbook/cs":"logbook/cs-d01eec1fd0b14305f0c34019cc2d6cc6.json","mailbox/cs":"mailbox/cs-670a0d6dd38d7b32159aa197feb766a5.json","page-authorize/cs":"page-authorize/cs-30ecb3dc8f70f7b4e1fa00e6ab76e9bb.json","page-onboarding/cs":"page-onboarding/cs-c4f288c861cfb9c79aff6a48d7d11eb0.json","profile/cs":"profile/cs-f189e8ad9745924f303bf6f104b8ef97.json","shopping-list/cs":"shopping-list/cs-ce6e7e83b1df2ee1c3c769dd1f89f95d.json"}},cy:{nativeName:"Cymraeg",fingerprints:{cy:"cy-954ea224e7d7ed7e99f006667b607ecc.json","config/cy":"config/cy-aa20f1294c628fc250ec05d75f780ca8.json","history/cy":"history/cy-b2ef9a050371463a2881c0f8d4dab5af.json","logbook/cy":"logbook/cy-997b83ce87f8075cb41d6b629e9eafcd.json","mailbox/cy":"mailbox/cy-170e5f1d136086aba8283acbdeef31ac.json","page-authorize/cy":"page-authorize/cy-9aae6747f052273dd0e98ca78dbb0f8a.json","page-onboarding/cy":"page-onboarding/cy-a6d83bec956a31a84804a5e7280944ca.json","profile/cy":"profile/cy-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/cy":"shopping-list/cy-69532d7d5274bc12c0e56a993e8526d7.json"}},da:{nativeName:"Dansk",fingerprints:{da:"da-859806cd42afcc010ad8c2d886b0ebb9.json","config/da":"config/da-fa7dae1c9f50beb275175bcb2aa19a01.json","history/da":"history/da-e9076a2d5e91c3778de3802b208e4205.json","logbook/da":"logbook/da-3dd8c7c0805c203110ecbc6028cbd5ff.json","mailbox/da":"mailbox/da-4d8b449fed095727b7cac57c8259b598.json","page-authorize/da":"page-authorize/da-3a27195b6310dc31fdaa7002cd1580d3.json","page-onboarding/da":"page-onboarding/da-c69325abf4475ba5d9ac205eb2d0cfb8.json","profile/da":"profile/da-d4826c36a55c0e2c7a417f70a5d1b8f7.json","shopping-list/da":"shopping-list/da-702f5daf0b2e1464b0719fd252f32a56.json"}},de:{nativeName:"Deutsch",fingerprints:{de:"de-ea73a5c79f1de871a7dfa677ba47e5ad.json","config/de":"config/de-d5b110cefe6f70397b1682c82033b1b1.json","history/de":"history/de-4e70209d9cde408a3a51a351e24e04cb.json","logbook/de":"logbook/de-48bf0e770258c71f34330f92a257e954.json","mailbox/de":"mailbox/de-006c408a6647fcb43c8364ee1928c1fb.json","page-authorize/de":"page-authorize/de-15a7938176ecad33d70db4d0ca652396.json","page-onboarding/de":"page-onboarding/de-f41b2542d8e45f3d4dcb43250ef4ef21.json","profile/de":"profile/de-e7248cc69c56358f30ebe2b91bd88062.json","shopping-list/de":"shopping-list/de-66db7a1493ed065e6cddec43d7f275c7.json"}},el:{nativeName:"Ελληνικά",fingerprints:{el:"el-1ced05e9fa403c062c309acb62f58abe.json","config/el":"config/el-878481d8314774862c7e9cd11438cb7f.json","history/el":"history/el-7691d87ff15b72aa6da9aa0d34447c9d.json","logbook/el":"logbook/el-d67b0eab3d5de77458d27c4ac556da79.json","mailbox/el":"mailbox/el-b3fc6cb665e41fceb2ec0c68aafd807a.json","page-authorize/el":"page-authorize/el-c9f85f250faab3635091bfe221e09b8b.json","page-onboarding/el":"page-onboarding/el-6f413b6bab0af620651ed2b51dd303e9.json","profile/el":"profile/el-4b92a5a3081dc8da3fe41bb579438792.json","shopping-list/el":"shopping-list/el-14ec32607d284afb5d89dbab0febd38b.json"}},en:{nativeName:"English",fingerprints:{en:"en-686bf98bfcb4fb944ef986369f76ff8e.json","config/en":"config/en-6b27b0bf48382ac696dbd81d156b83f7.json","history/en":"history/en-c731b6ed1707695bcc1efb80a969111b.json","logbook/en":"logbook/en-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/en":"mailbox/en-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/en":"page-authorize/en-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/en":"page-onboarding/en-8be449932765f8c89a53c93ed8ba47c8.json","profile/en":"profile/en-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/en":"shopping-list/en-ca53a02b4a4afd05878689eb7c1b0296.json"}},es:{nativeName:"Español",fingerprints:{es:"es-0cbb66ee45a740a419c5c69b48f7cd5c.json","config/es":"config/es-e1a80bf2b2ac7321a34d45b3eab88999.json","history/es":"history/es-226ee201175eecdbf6ea89087c23245f.json","logbook/es":"logbook/es-d7925fde116e2c5e06363e9131166f4c.json","mailbox/es":"mailbox/es-a433ec9cfcd44224ba3baacc7a6a7b8d.json","page-authorize/es":"page-authorize/es-389516fb2e29b87ebd169dd265c5c31b.json","page-onboarding/es":"page-onboarding/es-4a4dcced193c0b4d40e3ef420dec1827.json","profile/es":"profile/es-71274c2be2370cd5e2bdf62feb9ace4f.json","shopping-list/es":"shopping-list/es-38253a1b9331762d8dab36692c56c356.json"}},"es-419":{nativeName:"Español (Latin America)",fingerprints:{"es-419":"es-419-c509ccf74dd181d39c0d989c2ce77c08.json","config/es-419":"config/es-419-c972b2a99766e7334d46ff1d08838602.json","history/es-419":"history/es-419-0b9334fad5f7e132df381f65d368eba9.json","logbook/es-419":"logbook/es-419-76178776224e4b80159668806fc22522.json","mailbox/es-419":"mailbox/es-419-57ef0dbc5bb678c6aa53b461ae1c22b0.json","page-authorize/es-419":"page-authorize/es-419-28b79494b2d493ce4ee7fd2f11e332a8.json","page-onboarding/es-419":"page-onboarding/es-419-30bf070b9902a61c0a19e7a7dd5f749e.json","profile/es-419":"profile/es-419-a57f7abba6228dbe8f5aa37adf0215e7.json","shopping-list/es-419":"shopping-list/es-419-a04dc8ec5ae6217c186870e22188afda.json"}},et:{nativeName:"Eesti",fingerprints:{et:"et-722ffa9b0f7f9eec7fd1c267971e9b95.json","config/et":"config/et-5c8736e7adabbd378f36b1f3dd6c9502.json","history/et":"history/et-e0b32c59ee85d22af6ff83da8864b616.json","logbook/et":"logbook/et-5f629c82035967ba862f69ea3d8a7201.json","mailbox/et":"mailbox/et-63c257f3ad39805f75d945f45eeaae60.json","page-authorize/et":"page-authorize/et-1008c5a89a96b4596a9d4f10a10ba949.json","page-onboarding/et":"page-onboarding/et-24f29d768c712d735022411c1a5e7fbf.json","profile/et":"profile/et-8dac28916a1e6fc75ede726b7d5ea1c9.json","shopping-list/et":"shopping-list/et-64a31b482eefdc4a8e9dd32ef2aae2cb.json"}},eu:{nativeName:"Euskara",fingerprints:{eu:"eu-2e42d20c27f711dc61805ce98af7c684.json","config/eu":"config/eu-ec9a6aed9fcdc892d92ed3290119dceb.json","history/eu":"history/eu-c731b6ed1707695bcc1efb80a969111b.json","logbook/eu":"logbook/eu-f86205a7e66d222b401ba3f826d40698.json","mailbox/eu":"mailbox/eu-4ba6bc32187202ebf63054705d6929bc.json","page-authorize/eu":"page-authorize/eu-f7ac33f04f3b96607b75724be0481b2b.json","page-onboarding/eu":"page-onboarding/eu-f0826e95f6e8fa91f1794770817721fc.json","profile/eu":"profile/eu-a0e13fe0e251b66f473b6826cc702b87.json","shopping-list/eu":"shopping-list/eu-037ed5d3ec406e0f8314b23430edf92a.json"}},fa:{nativeName:"فارسی",fingerprints:{fa:"fa-ca6d25d8a81d4d126d43db4b2b88fc18.json","config/fa":"config/fa-cc0bfae0399e9acb67fd4102c7a4300d.json","history/fa":"history/fa-c731b6ed1707695bcc1efb80a969111b.json","logbook/fa":"logbook/fa-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/fa":"mailbox/fa-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/fa":"page-authorize/fa-9cdf6910ea3608ea3a2d49b126993d28.json","page-onboarding/fa":"page-onboarding/fa-ac72fe2819bc656982742dcfe393e480.json","profile/fa":"profile/fa-d0e019414e14ce46504274b5cc0b9d33.json","shopping-list/fa":"shopping-list/fa-ca53a02b4a4afd05878689eb7c1b0296.json"}},fi:{nativeName:"Suomi",fingerprints:{fi:"fi-f0c3f143558c2d3ca2a7dc542ea18a0f.json","config/fi":"config/fi-76e917f3a225a3e831c740a2c46cbdd8.json","history/fi":"history/fi-e7e4431a7db0bdd44f549bc29c0e6f24.json","logbook/fi":"logbook/fi-27c06649908d711f700c1b8ed48df1ba.json","mailbox/fi":"mailbox/fi-49f8386cb5b55ecb49fb76689a824d33.json","page-authorize/fi":"page-authorize/fi-fadd6590b18c6d9f3b6ddca081e70894.json","page-onboarding/fi":"page-onboarding/fi-d1e67ac86ada483e0a4b4e113cb338ff.json","profile/fi":"profile/fi-77d4df17d888b84f5f9978d2d21175ef.json","shopping-list/fi":"shopping-list/fi-a36879e4a85dc2185f019f96da031dd3.json"}},fr:{nativeName:"Français",fingerprints:{fr:"fr-341d23f7b3e9af366dbcd7a285e1044e.json","config/fr":"config/fr-8a2efee750842f5218e3fe28eb66be46.json","history/fr":"history/fr-0b24b7c275f06453f29734162c368b43.json","logbook/fr":"logbook/fr-350b2f9c75d09c00b7baa91ea343567e.json","mailbox/fr":"mailbox/fr-9fafe1aada8f0c87a7697f5654791df0.json","page-authorize/fr":"page-authorize/fr-dc650f46799a6805c3ff92ac9fdbfcdd.json","page-onboarding/fr":"page-onboarding/fr-7a4cfb63bb6427b1b4b33174cf4e66c8.json","profile/fr":"profile/fr-4e73f55514531a09d9d5106563632a45.json","shopping-list/fr":"shopping-list/fr-c68102bb021a2461f2daad53cf3e3857.json"}},gsw:{nativeName:"Schwiizerdütsch",fingerprints:{gsw:"gsw-964fd92b1e4984d0e75d30b2584cad5b.json","config/gsw":"config/gsw-fc7f46cd77cf1158b9749b6a742eb0a9.json","history/gsw":"history/gsw-8b0c8ba7dc48ae286346c2eaa74b1d40.json","logbook/gsw":"logbook/gsw-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/gsw":"mailbox/gsw-5ed68a37a357fb93b437016049448ca1.json","page-authorize/gsw":"page-authorize/gsw-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/gsw":"page-onboarding/gsw-8be449932765f8c89a53c93ed8ba47c8.json","profile/gsw":"profile/gsw-9bbdebd6388a8b1c1bb0ad01d388d606.json","shopping-list/gsw":"shopping-list/gsw-ca53a02b4a4afd05878689eb7c1b0296.json"}},he:{nativeName:"עברית",isRTL:!0,fingerprints:{he:"he-cad87cf8293a41718b0ce445606caa9a.json","config/he":"config/he-1e4571b83999d0bbba856f8c3cbfcdb6.json","history/he":"history/he-49cd035460062b9e557610fae6f57c59.json","logbook/he":"logbook/he-a36c34155130b25e998b41633fc3344c.json","mailbox/he":"mailbox/he-cce3340751d5ef5a30f36ed4be404a9e.json","page-authorize/he":"page-authorize/he-f82c56455975028ee1c7fe73822a1dc1.json","page-onboarding/he":"page-onboarding/he-e4e7b1dd65538bebaa9b97c46b68a6b8.json","profile/he":"profile/he-54596b2860fea9f3e5af3b4089b25442.json","shopping-list/he":"shopping-list/he-587c419016a4fdb1b51dcb80f7f47d7a.json"}},hi:{nativeName:"हिन्दी",fingerprints:{hi:"hi-5910bb2fe4a8aaaf782792167a7321d5.json","config/hi":"config/hi-5b7b3ad4eb8949070b9dd5a4016faf37.json","history/hi":"history/hi-c731b6ed1707695bcc1efb80a969111b.json","logbook/hi":"logbook/hi-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/hi":"mailbox/hi-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/hi":"page-authorize/hi-3ba9a9a19ff2d2360fb9ab340d83608d.json","page-onboarding/hi":"page-onboarding/hi-fd36f2d3c169a40d5ad2236556fee7be.json","profile/hi":"profile/hi-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/hi":"shopping-list/hi-4c32ab06d6ce6256151be30ecbf8c630.json"}},hr:{nativeName:"Hrvatski",fingerprints:{hr:"hr-f653d3ce8fec4618a567858722686efd.json","config/hr":"config/hr-79b0339e2820e2004ce7c19a3d2ce07a.json","history/hr":"history/hr-c182fbf1b355504eb0c84a2f5e77cb95.json","logbook/hr":"logbook/hr-23bd11bde7060f78d79016ab89331b3d.json","mailbox/hr":"mailbox/hr-1a9e32096cfb1e047e596bea7da02d70.json","page-authorize/hr":"page-authorize/hr-654bc70c1928da713cbaf42b2bceb4fd.json","page-onboarding/hr":"page-onboarding/hr-e75ab14db795eecbf387cfb9206c6b49.json","profile/hr":"profile/hr-6108d000b722e6d31f2e5dc74e853587.json","shopping-list/hr":"shopping-list/hr-4543c6cd4a2ca7ff4942cd421d950834.json"}},hu:{nativeName:"Magyar",fingerprints:{hu:"hu-9dd74d6b8be87afc57146a9fbf67d085.json","config/hu":"config/hu-eef90483a60c335a7b9c13f564a2c9b0.json","history/hu":"history/hu-06ef9d6733e357ad1da57341ebf26098.json","logbook/hu":"logbook/hu-410f7649c1eff67a505fbe7a0cc52c70.json","mailbox/hu":"mailbox/hu-e9d9f2449f6dfce9915bb7a6fe9b2ca1.json","page-authorize/hu":"page-authorize/hu-10fc45196c163c32b61b6144e488f987.json","page-onboarding/hu":"page-onboarding/hu-2668b534b0d133db92b4241e84a45c37.json","profile/hu":"profile/hu-4ef4b8a828c0f7352defc86df53b8ef9.json","shopping-list/hu":"shopping-list/hu-196bd35532e272d5e0379f13dc31a1bc.json"}},id:{nativeName:"Indonesia",fingerprints:{id:"id-5756fd5bb586e9b8853f87a90e8dce91.json","config/id":"config/id-809d1f48f56219f8fbbf11ae074beb77.json","history/id":"history/id-7b37f4ee3e9add21bb93adc63d195714.json","logbook/id":"logbook/id-4bf354836352ff9b3dd31a7fed3d085b.json","mailbox/id":"mailbox/id-cd7c3903174a68f27c9c8f88e3b1f257.json","page-authorize/id":"page-authorize/id-ddc7be53025b91528c70d291831401d3.json","page-onboarding/id":"page-onboarding/id-cf2a50a699223e0bbd4716e44699a88b.json","profile/id":"profile/id-726b150aa3f524dc2577769ca580eab4.json","shopping-list/id":"shopping-list/id-6f74f6f88ef230410479dcf498502f6a.json"}},it:{nativeName:"Italiano",fingerprints:{it:"it-26e8c21f7f0bb6eac0754734a4ca0448.json","config/it":"config/it-07d3f4bf251b06078dfdfd1ca0175f57.json","history/it":"history/it-a57d42a25333e44fcdda0c67da6246ab.json","logbook/it":"logbook/it-6afd70252b05cb98128de0d4a07e0971.json","mailbox/it":"mailbox/it-c6d36cf8d8edba59cbba7360d385a9ff.json","page-authorize/it":"page-authorize/it-e343f593d5be57e169c03f07f8f98a90.json","page-onboarding/it":"page-onboarding/it-614d473803ec38d99b0b6f599cfb0317.json","profile/it":"profile/it-21e9640e01aa27f3d3152f40eeac2c0f.json","shopping-list/it":"shopping-list/it-f5bd42a49a13e20db7149a9652b9f826.json"}},is:{nativeName:"Íslenska",fingerprints:{is:"is-c2a16d37621849de5790e2412f2c299a.json","config/is":"config/is-84296c38f3900e70341b09c3b20311d3.json","history/is":"history/is-420b2a6112df057a23d262e3cbbbc3c2.json","logbook/is":"logbook/is-acbbbe28519ccdf300d36cab906d88c8.json","mailbox/is":"mailbox/is-36d48df31d95299b37ee5e849157228a.json","page-authorize/is":"page-authorize/is-5676a0c25dbd35a8917856d53f57c71e.json","page-onboarding/is":"page-onboarding/is-9586f91ddaa8c230b19b9d6464da0de6.json","profile/is":"profile/is-62c90e0a51bbe9cd329831b06490c554.json","shopping-list/is":"shopping-list/is-e871d5daba0112bc87a9c3c235ab2381.json"}},ja:{nativeName:"日本語",fingerprints:{ja:"ja-944f6be30c5548336bf62cbad35516c0.json","config/ja":"config/ja-3341d3f2777eed984685665a52e1b89b.json","history/ja":"history/ja-fadc13765031920127c8f7f89b36562b.json","logbook/ja":"logbook/ja-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/ja":"mailbox/ja-a7e1c1873579d1b68106ccb7c5fb1eab.json","page-authorize/ja":"page-authorize/ja-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/ja":"page-onboarding/ja-8be449932765f8c89a53c93ed8ba47c8.json","profile/ja":"profile/ja-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/ja":"shopping-list/ja-9987d984eca7128b156b9994208cb017.json"}},ko:{nativeName:"한국어",fingerprints:{ko:"ko-da198c7bb13a42efa42133ac8656bebf.json","config/ko":"config/ko-67dd5326af56ea78418550f9047c7bfd.json","history/ko":"history/ko-2466cf47aa80071419940ebbd584af66.json","logbook/ko":"logbook/ko-e804594fd27790bcbe40bac954fca916.json","mailbox/ko":"mailbox/ko-6243fbc81dd684d7aae64ee321b5c291.json","page-authorize/ko":"page-authorize/ko-e32e045a296319d080c79e363871822d.json","page-onboarding/ko":"page-onboarding/ko-4713834756d0b166a87b1e9d36a6c2c3.json","profile/ko":"profile/ko-db1eb340fc50fc9a4be96d81e1566e8c.json","shopping-list/ko":"shopping-list/ko-0cb2778002db711a0336fc24489fb2ee.json"}},lb:{nativeName:"Lëtzebuergesch",fingerprints:{lb:"lb-4955cb44008c0153ca9e5ddad9c17a6f.json","config/lb":"config/lb-a6e397e5c31c36243bd043cd30462032.json","history/lb":"history/lb-b8871044bfee9a774b4c95c9c658c850.json","logbook/lb":"logbook/lb-2178ddf0c8fd50f32822c4e808110b16.json","mailbox/lb":"mailbox/lb-801d3c9dae52237d2999d51a5fc3215a.json","page-authorize/lb":"page-authorize/lb-4ef7372a81edaa3322de7a5c25880964.json","page-onboarding/lb":"page-onboarding/lb-f0917c306c341e7634db5d898fd26767.json","profile/lb":"profile/lb-55cb9fdc4cd126ea2d65cf3e323c0887.json","shopping-list/lb":"shopping-list/lb-5b789da9cada841ec3f730afa9518b03.json"}},lt:{nativeName:"Lietuvių",fingerprints:{lt:"lt-cca3e71e01042900f3ac003af112d775.json","config/lt":"config/lt-2cb6be42ef6d86d880cd7aa27ed94ca9.json","history/lt":"history/lt-c731b6ed1707695bcc1efb80a969111b.json","logbook/lt":"logbook/lt-b07d3ea420607085d7f060286aa1725d.json","mailbox/lt":"mailbox/lt-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/lt":"page-authorize/lt-6573cea1ffacf53f24a693ea7d48942b.json","page-onboarding/lt":"page-onboarding/lt-6114892532c0bf619c4a18cb731fe458.json","profile/lt":"profile/lt-f8cd1da076da2c1c0b408005563387c3.json","shopping-list/lt":"shopping-list/lt-ca53a02b4a4afd05878689eb7c1b0296.json"}},lv:{nativeName:"Latviešu",fingerprints:{lv:"lv-49d8e439681aa6a5160ac0cc7e573fcb.json","config/lv":"config/lv-98556ff8356e71a37828c7c70b2cd724.json","history/lv":"history/lv-34028a79910f6759d7f1e62c2bd5b464.json","logbook/lv":"logbook/lv-e966460a445099089b118d8a30f7e283.json","mailbox/lv":"mailbox/lv-10cab8d4e971dcc1b8edf9195acd5cca.json","page-authorize/lv":"page-authorize/lv-63c5ed6aaaa80d93f1760298a477f198.json","page-onboarding/lv":"page-onboarding/lv-a2376e9f9bb4b05a10efcdfecedfb1e3.json","profile/lv":"profile/lv-cbb8d3d4cba49c1d5be19834c99638d3.json","shopping-list/lv":"shopping-list/lv-211a209455331b12902eb24c2224a163.json"}},nl:{nativeName:"Nederlands",fingerprints:{nl:"nl-6c1136c5cb69b66c2276de77da053161.json","config/nl":"config/nl-5a932112103c1528a3e68acb4379f915.json","history/nl":"history/nl-2f0af34bf917f4dc9b3d7616e77ad55a.json","logbook/nl":"logbook/nl-e091d7bd224b6f2ec5728b759a8206dd.json","mailbox/nl":"mailbox/nl-210a1f8fbb03d58f2b613e9aa6680e1d.json","page-authorize/nl":"page-authorize/nl-904ef9088cb6c1a81388590103e8775b.json","page-onboarding/nl":"page-onboarding/nl-d979503457560e38d58f9b4bdd841f8e.json","profile/nl":"profile/nl-612176865da8a712bbdb959fc183dc8a.json","shopping-list/nl":"shopping-list/nl-ca5bc361b3ac6fac0ca10b563deef4c3.json"}},nb:{nativeName:"Norsk Bokmål",fingerprints:{nb:"nb-150df33f41e7b60abe3097543bd58122.json","config/nb":"config/nb-ef161df0201419c56dcee384586a5b89.json","history/nb":"history/nb-2230534a5f094ddcd802defaa43e8c82.json","logbook/nb":"logbook/nb-3bb256013718b124ee5fe62554617838.json","mailbox/nb":"mailbox/nb-29e7765930ebdaec095388ecc12da788.json","page-authorize/nb":"page-authorize/nb-2f2666f7bd8e1656814edf41316b28a7.json","page-onboarding/nb":"page-onboarding/nb-cfba768f5f2ea3ee06847779ce294f39.json","profile/nb":"profile/nb-2c26f592bddcf3c8a9310f18b568352a.json","shopping-list/nb":"shopping-list/nb-f35227e1381bb0cdbe61926591c7537c.json"}},nn:{nativeName:"Norsk Nynorsk",fingerprints:{nn:"nn-c224305af2226bf09dfc6b82ff44c21d.json","config/nn":"config/nn-b9f57b5f190d6137859a081090d5c1dd.json","history/nn":"history/nn-2230534a5f094ddcd802defaa43e8c82.json","logbook/nn":"logbook/nn-fc5f3ae9c6cea1ba1d46b02e0b2251a3.json","mailbox/nn":"mailbox/nn-2364a2d6904287efa0748d2c6010cd01.json","page-authorize/nn":"page-authorize/nn-b06594d40b3c099fda8ca06f10769587.json","page-onboarding/nn":"page-onboarding/nn-cb93eaf323ed605415b1f6af0f09e314.json","profile/nn":"profile/nn-73b263aca73f6ae6367edc5bd6b29244.json","shopping-list/nn":"shopping-list/nn-005a84e9ee0a55bb7bab0034fa1393d8.json"}},pl:{nativeName:"Polski",fingerprints:{pl:"pl-03452ea5db05ed3417443e397c9588fe.json","config/pl":"config/pl-3baf6222a6be353745a04ff214061f63.json","history/pl":"history/pl-72f2213cce350d37f290ebe304209d30.json","logbook/pl":"logbook/pl-c9bd1856715db99fe8088e6a7fd9525a.json","mailbox/pl":"mailbox/pl-0f0be50366398fee52145e41637ad796.json","page-authorize/pl":"page-authorize/pl-1899d65e649a32c0f241dc41b66e7a65.json","page-onboarding/pl":"page-onboarding/pl-112d676f78a3b5331e4fabbbb80eb8ea.json","profile/pl":"profile/pl-2eefd7e4bee04f6257baa96c7eb04457.json","shopping-list/pl":"shopping-list/pl-3938b0e56c5b8a49233a6130217b29cc.json"}},pt:{nativeName:"Português",fingerprints:{pt:"pt-8efd1dbb20526b07fc7a6cf59749ff35.json","config/pt":"config/pt-8282965b89214210b78beed2f6bd91d6.json","history/pt":"history/pt-fb0badd7a412af3b7339100c68100277.json","logbook/pt":"logbook/pt-f5e91913a489b7411d4d22174e737d2c.json","mailbox/pt":"mailbox/pt-b14eadb11a749aa0ad2cf8ccce99bcb5.json","page-authorize/pt":"page-authorize/pt-36da8c3863d26c8d8b7253fa41bd2e56.json","page-onboarding/pt":"page-onboarding/pt-73cd16981d73e4980aca0298e034ada6.json","profile/pt":"profile/pt-83475114b7fa00f6cfb6ae2fbbecfe24.json","shopping-list/pt":"shopping-list/pt-b21bc5c7812437480ff662e258c6f528.json"}},"pt-BR":{nativeName:"Português (BR)",fingerprints:{"pt-BR":"pt-BR-8fad037a14a83239e53cea71dffe7e0b.json","config/pt-BR":"config/pt-BR-6efa955e329ced9f0376cc4e3637e024.json","history/pt-BR":"history/pt-BR-dcb3ed0df9f0274867b234a0fc321bdc.json","logbook/pt-BR":"logbook/pt-BR-d5cc0e529def6e9d5545ff9b73f6cdf4.json","mailbox/pt-BR":"mailbox/pt-BR-273bfb5134c8f7e2a46159545223f56d.json","page-authorize/pt-BR":"page-authorize/pt-BR-746e98c7a41f99eb52db46b94cb873c6.json","page-onboarding/pt-BR":"page-onboarding/pt-BR-c387c83ace69de200c604f5c631452e7.json","profile/pt-BR":"profile/pt-BR-94289778ced0d2ffa5650ee0e9b0a3b9.json","shopping-list/pt-BR":"shopping-list/pt-BR-0f097f6f81a88450a689ec18fd23675e.json"}},ro:{nativeName:"Română",fingerprints:{ro:"ro-68747b1e34601e825b7c06a6fec5b482.json","config/ro":"config/ro-b34ae1591bd169e68a1640967798dca9.json","history/ro":"history/ro-c17411a8f8c277de93ad0b1d7c923f82.json","logbook/ro":"logbook/ro-d790197c744cb41423203d96c49117f0.json","mailbox/ro":"mailbox/ro-caa8cd0ef2a22a5c6690140906b6a369.json","page-authorize/ro":"page-authorize/ro-7ee2d75b5150594c888bf3124382e2e7.json","page-onboarding/ro":"page-onboarding/ro-920b006e1354d2999750ad0f540ff173.json","profile/ro":"profile/ro-5367d607cebea4df68e0ca1df9ead7cd.json","shopping-list/ro":"shopping-list/ro-9c9fc52be99ef3d62e95dc5316bf0fb9.json"}},ru:{nativeName:"Русский",fingerprints:{ru:"ru-14ba06a9a989cf100ad225befadfe76a.json","config/ru":"config/ru-18ba2f9a608df84ef1352a377f048da1.json","history/ru":"history/ru-906a6a5a183855d33a639cd2eebf466b.json","logbook/ru":"logbook/ru-b581599a5d68821f7bfff7cadd8543a9.json","mailbox/ru":"mailbox/ru-8fb6ee3e5ab59205aad1bf755635ad91.json","page-authorize/ru":"page-authorize/ru-6799ce55389549148e943ac9b87505f4.json","page-onboarding/ru":"page-onboarding/ru-6c7c9cba0c5196441ab87591b3a33b79.json","profile/ru":"profile/ru-d68a2b2f05df00ae39fb093942d9f021.json","shopping-list/ru":"shopping-list/ru-7f81258e65befd495c2eb9b4b267549a.json"}},sk:{nativeName:"Slovenčina",fingerprints:{sk:"sk-8a0016488187fb21c14c034829477de4.json","config/sk":"config/sk-7de5dbc85bd6f5e308d32eab0fd8e95b.json","history/sk":"history/sk-03c3f4f5bb212cc6edcc7c74b8099c2d.json","logbook/sk":"logbook/sk-66b5bf542a1fc970a95b7693134a4b6d.json","mailbox/sk":"mailbox/sk-03dd52673830e64d96ded1844f650f67.json","page-authorize/sk":"page-authorize/sk-039c799dd9e436106e9d0fa2cf5c8996.json","page-onboarding/sk":"page-onboarding/sk-c5adacb04df5d486e91f742a78392e72.json","profile/sk":"profile/sk-6224df9ede510fd0682359850fc312b1.json","shopping-list/sk":"shopping-list/sk-a7e9bcccd3f24423b7e07d38571283e4.json"}},sl:{nativeName:"Slovenščina",fingerprints:{sl:"sl-555b3f03b33075ed0436d3e6fe4ab9ef.json","config/sl":"config/sl-0511251dc885ab742a5cf2b1d3d5fbe1.json","history/sl":"history/sl-f4a805a9a1e80c3915ea6cc6cf069998.json","logbook/sl":"logbook/sl-1d0ec01bd05f875cbf974cfd9cedff94.json","mailbox/sl":"mailbox/sl-f631c03128838d256c86ecbde3d001fe.json","page-authorize/sl":"page-authorize/sl-3d9f365391862f1635e85581ced86b19.json","page-onboarding/sl":"page-onboarding/sl-e48691d0aa4b0bc62d893baa3e9d2855.json","profile/sl":"profile/sl-d9f3f564712df48f98521ab581870040.json","shopping-list/sl":"shopping-list/sl-e87362effc0bcc1c7d8f10257e16a1ba.json"}},sr:{nativeName:"Српски",fingerprints:{sr:"sr-f46b5059279b4f7bb207dea0345f01a2.json","config/sr":"config/sr-6df9aa1de41746b6b317b11d1c9a5901.json","history/sr":"history/sr-c731b6ed1707695bcc1efb80a969111b.json","logbook/sr":"logbook/sr-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/sr":"mailbox/sr-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/sr":"page-authorize/sr-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/sr":"page-onboarding/sr-26a6ddfeb4bb7c80bc8a3df6f856e44e.json","profile/sr":"profile/sr-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/sr":"shopping-list/sr-ca53a02b4a4afd05878689eb7c1b0296.json"}},"sr-Latn":{nativeName:"Srpski",fingerprints:{"sr-Latn":"sr-Latn-8eef7c89be26ef69797e7ba4cec0fea4.json","config/sr-Latn":"config/sr-Latn-4e9d6a636bb5b0d6e1ce9cb703b3c871.json","history/sr-Latn":"history/sr-Latn-c731b6ed1707695bcc1efb80a969111b.json","logbook/sr-Latn":"logbook/sr-Latn-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/sr-Latn":"mailbox/sr-Latn-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/sr-Latn":"page-authorize/sr-Latn-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/sr-Latn":"page-onboarding/sr-Latn-26a6ddfeb4bb7c80bc8a3df6f856e44e.json","profile/sr-Latn":"profile/sr-Latn-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/sr-Latn":"shopping-list/sr-Latn-ca53a02b4a4afd05878689eb7c1b0296.json"}},sv:{nativeName:"Svenska",fingerprints:{sv:"sv-6eb103e9fae69ccd83ad28457cfb0657.json","config/sv":"config/sv-11a4f57d11c28a618bbc40445c67011d.json","history/sv":"history/sv-b96b275475b0a0c4dee3ff54df0067d1.json","logbook/sv":"logbook/sv-de0ea0d08a9bf0da0f311163e1dbd488.json","mailbox/sv":"mailbox/sv-78ed74aa52d4257d3955103040096b9c.json","page-authorize/sv":"page-authorize/sv-c35923e43e9c93b0cf2dc73bc21407ed.json","page-onboarding/sv":"page-onboarding/sv-9dfb96e48f1638eda792f06b44ad4860.json","profile/sv":"profile/sv-bf91e8cf7bf8acae159d92766433dd88.json","shopping-list/sv":"shopping-list/sv-3ba4d04a913df757fd3351e3963ba53e.json"}},ta:{nativeName:"தமிழ்",fingerprints:{ta:"ta-4fdacfedf6a58a220645859e5fda483b.json","config/ta":"config/ta-1068ff23d74d0e3a6a78d157bd18c3a5.json","history/ta":"history/ta-c731b6ed1707695bcc1efb80a969111b.json","logbook/ta":"logbook/ta-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/ta":"mailbox/ta-5aff2968280fc37d9ed1081f0aa735d1.json","page-authorize/ta":"page-authorize/ta-10f6811e4fd6b7b1bdf90ada4d213fa8.json","page-onboarding/ta":"page-onboarding/ta-8be449932765f8c89a53c93ed8ba47c8.json","profile/ta":"profile/ta-c01d42036a4038a3eebbcb957e50921e.json","shopping-list/ta":"shopping-list/ta-ca53a02b4a4afd05878689eb7c1b0296.json"}},te:{nativeName:"తెలుగు",fingerprints:{te:"te-a6e9c2b693f8f4d5a95a216178ead6b7.json","config/te":"config/te-1616e54fcb4ef2eee5cc54ffbd6a4553.json","history/te":"history/te-c0a1510e01a60f52b96cf0246cd34378.json","logbook/te":"logbook/te-d1b490b66b980e7ce9d60194b71fcfae.json","mailbox/te":"mailbox/te-f5310c3d729f2cbf7d3e933064c6cd5b.json","page-authorize/te":"page-authorize/te-114bebb26a12fcb0fcce783f7ce38ec7.json","page-onboarding/te":"page-onboarding/te-0213023990344e0e7cfe561f1c905230.json","profile/te":"profile/te-0043259b8aa6eb0b2274ea33671807ed.json","shopping-list/te":"shopping-list/te-1ca1011342a53a93721a688b1ed97f6a.json"}},th:{nativeName:"ภาษาไทย",fingerprints:{th:"th-b90036ec17901ca7ccddfdf2dcbcc7f6.json","config/th":"config/th-9a8007e54728e08b17b94ccb6585939d.json","history/th":"history/th-cc5a685c0de438e3e71ac034a246adc8.json","logbook/th":"logbook/th-a686e297193443571fbf27c874b099c2.json","mailbox/th":"mailbox/th-869e0f55f3081bd9a2de44a2518cd650.json","page-authorize/th":"page-authorize/th-261d542a392a33713ad1e8afc36f7baa.json","page-onboarding/th":"page-onboarding/th-997c78bf378d12df23aafb8a11aee63e.json","profile/th":"profile/th-a9cc5e45a4e7286a60b7d2c0f7756f38.json","shopping-list/th":"shopping-list/th-329f549cade11d8752f6fca7de3e4223.json"}},tr:{nativeName:"Türkçe",fingerprints:{tr:"tr-74c0da4b129e9fc86e0a55a592f8be40.json","config/tr":"config/tr-ac02266f78ffaa5f61d9f2ba7daf49dc.json","history/tr":"history/tr-c8a856bfaa267fa040fe8547808d4d8e.json","logbook/tr":"logbook/tr-7ee57d96fcb969d4c528a5cecf1ec727.json","mailbox/tr":"mailbox/tr-3918cdf8be7e5fd02936f2099b71adfd.json","page-authorize/tr":"page-authorize/tr-03aecb9997b3aa0460ba502df93d5814.json","page-onboarding/tr":"page-onboarding/tr-797c865b6f8124103c2cbc436edfe322.json","profile/tr":"profile/tr-236aa22f6f0fefef269cbe3cc5fed847.json","shopping-list/tr":"shopping-list/tr-e92e36d196d384475b21f4d4a945b30c.json"}},uk:{nativeName:"Українська",fingerprints:{uk:"uk-b61321be83d1bbf018f2d5570e8387d0.json","config/uk":"config/uk-93e6726d83020a89362330dd3ba18107.json","history/uk":"history/uk-ae9c488d8d86b4a42d24a2cc3083ec63.json","logbook/uk":"logbook/uk-09e7c40de61fd286b6069e364e7c62c0.json","mailbox/uk":"mailbox/uk-159332b3084bdb5577c9d1601c32f0c8.json","page-authorize/uk":"page-authorize/uk-b91defa130bed41a2fa0631256e75207.json","page-onboarding/uk":"page-onboarding/uk-1855597ab455c58f9dd8044e305edd6a.json","profile/uk":"profile/uk-4a392fc8ea2a27da3da29ea32e5b9909.json","shopping-list/uk":"shopping-list/uk-df37c1591d78d56fa5a1dc87e7ed3f14.json"}},vi:{nativeName:"Tiếng Việt",fingerprints:{vi:"vi-0f8786e28ac5eaa0cb704d2fe279888e.json","config/vi":"config/vi-1452473c6e7f01ee3ba376448659dde3.json","history/vi":"history/vi-d4b4e0f5c070be096ff57fd986ca7f46.json","logbook/vi":"logbook/vi-9a4063be2bf138ecec75bda0102bc745.json","mailbox/vi":"mailbox/vi-72716b644c2b813127cfc012a070b634.json","page-authorize/vi":"page-authorize/vi-f6476adc4ba0d3289d7241c3f626ada8.json","page-onboarding/vi":"page-onboarding/vi-d38e760196811555bb670834caf4972f.json","profile/vi":"profile/vi-14698a8bb5c5c954d815a458e582de25.json","shopping-list/vi":"shopping-list/vi-53808ddc1e8af830db9095fa1440a3ac.json"}},"zh-Hans":{nativeName:"简体中文",fingerprints:{"zh-Hans":"zh-Hans-0377b90b987ff3f3006a10ac80fdf2f0.json","config/zh-Hans":"config/zh-Hans-cde2b6a5084cef228db1800c2c597140.json","history/zh-Hans":"history/zh-Hans-5227a7eba9c5e4fb74100a0a328ba6bb.json","logbook/zh-Hans":"logbook/zh-Hans-1d2f9ce505657f855a7dd9f53056aa3f.json","mailbox/zh-Hans":"mailbox/zh-Hans-c63f0f03c4095d7df8e82d649f2a9670.json","page-authorize/zh-Hans":"page-authorize/zh-Hans-4bcecff530e1ea879f0edf90b0919f9f.json","page-onboarding/zh-Hans":"page-onboarding/zh-Hans-6c860cc6950784864ff3f7a2a5dbc32f.json","profile/zh-Hans":"profile/zh-Hans-90f164be41117883469338572697432f.json","shopping-list/zh-Hans":"shopping-list/zh-Hans-78ae21891e187b85f1f73effc7ab8278.json"}},"zh-Hant":{nativeName:"繁體中文",fingerprints:{"zh-Hant":"zh-Hant-fa8b61d679bf32c657056aa81ddd9f0c.json","config/zh-Hant":"config/zh-Hant-423299ddbf277a965f3e0ca68838d144.json","history/zh-Hant":"history/zh-Hant-18ee37b23fa0fe3191e440ddfcb00e89.json","logbook/zh-Hant":"logbook/zh-Hant-18fb28eb3f903506a5cb6fbad7b8411a.json","mailbox/zh-Hant":"mailbox/zh-Hant-ea296ec9aeefb095c6e6731f2c82c5bd.json","page-authorize/zh-Hant":"page-authorize/zh-Hant-1b0ea5c98b3e2aab270ad70d441bf942.json","page-onboarding/zh-Hant":"page-onboarding/zh-Hant-f5cf3c02a1a195a20c2fbed13d10232f.json","profile/zh-Hant":"profile/zh-Hant-cd5fb6d9c18b63fdc6f2925c60eb60e9.json","shopping-list/zh-Hant":"shopping-list/zh-Hant-915da1656c131861ea98ae71de3395a5.json"}}}}},function(e,t,n){"use strict";(t=e.exports=n(103).default).default=t},,,function(e,t,n){"use strict";var i=n(34);const r=e=>(class extends e{_initializeLocalizeLite(){this.resources||this.translationFragment&&this._downloadResources()}async _downloadResources(){const{language:e,data:t}=await Object(i.b)(this.translationFragment,this.language);this.resources={[e]:t}}});var o=n(58);n.d(t,"a",function(){return s});const a=()=>"",s=e=>(class extends(r(e)){static get properties(){return{localize:{},language:{},resources:{},translationFragment:{}}}constructor(){super(),this.localize=a,this.language=Object(i.a)()}connectedCallback(){super.connectedCallback(),this._initializeLocalizeLite(),this.localize=Object(o.a)(this.constructor.prototype,this.language,this.resources)}updated(e){super.updated(e),(e.has("language")||e.has("resources"))&&(this.localize=Object(o.a)(this.constructor.prototype,this.language,this.resources))}})},,function(e,t,n){"use strict";var i=n(15);const r=i.c`.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}:host([disabled]){pointer-events:none}.mdc-button{flex:1}`;var o=n(74),a=(n(56),function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a});let s=class extends i.a{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},t=i.e`<span class="material-icons mdc-button__icon">${this.icon}</span>`;return i.e`
      <button
          .ripple="${Object(o.a)({unbounded:!1})}"
          class="mdc-button ${Object(i.b)(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}">
        ${this.icon&&!this.trailingIcon?t:""}
        <span class="mdc-button__label">${this.label}</span>
        ${this.icon&&this.trailingIcon?t:""}
        <slot></slot>
      </button>`}};s.styles=r,a([Object(i.f)({type:Boolean})],s.prototype,"raised",void 0),a([Object(i.f)({type:Boolean})],s.prototype,"unelevated",void 0),a([Object(i.f)({type:Boolean})],s.prototype,"outlined",void 0),a([Object(i.f)({type:Boolean})],s.prototype,"dense",void 0),a([Object(i.f)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),a([Object(i.f)({type:Boolean})],s.prototype,"trailingIcon",void 0),a([Object(i.f)()],s.prototype,"icon",void 0),a([Object(i.f)()],s.prototype,"label",void 0),s=a([Object(i.d)("mwc-button")],s)},function(e,t,n){"use strict";n(5);const i=n(4).a`
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
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,n){"use strict";n(5);var i=n(3);const r={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=Object(i.a)(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){void 0===this._isRTL&&(this._isRTL="rtl"==window.getComputedStyle(this).direction),this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),n=this.__getNormalizedRect(this.fitInto),i=this._fitInfo.margin,r={width:e.width+i.left+i.right,height:e.height+i.top+i.bottom},o=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,r,e,t,n),a=o.left+i.left,s=o.top+i.top,l=Math.min(n.right-i.right,a+e.width),c=Math.min(n.bottom-i.bottom,s+e.height);a=Math.max(n.left+i.left,Math.min(a,l-this._fitInfo.sizedBy.minWidth)),s=Math.max(n.top+i.top,Math.min(s,c-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(l-a,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(c-s,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=a-e.left+"px",this.style.top=s-e.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,n,i,r){this.__sizeDimension(e,t,n,i,r)},__sizeDimension:function(e,t,n,i,r){var o=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),s="Width"===r?a.width:a.height,l=t===i,c=l?s-e[i]:e[n],d=o.margin[l?n:i],p="offset"+r,u=this[p]-this.sizingTarget[p];this.sizingTarget.style["max"+r]=s-d-c-u+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),n=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var i=n.top-t.top+(n.height-t.height)/2;this.style.top=i+"px"}if(!e.horizontally){var r=n.left-t.left+(n.width-t.width)/2;this.style.left=r+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,n){var i=Math.min(0,e.top)+Math.min(0,n.bottom-(e.top+t.height)),r=Math.min(0,e.left)+Math.min(0,n.right-(e.left+t.width));return Math.abs(i)*t.width+Math.abs(r)*t.height},__getPosition:function(e,t,n,i,r,o){var a,s=[{verticalAlign:"top",horizontalAlign:"left",top:r.top+this.verticalOffset,left:r.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:r.top+this.verticalOffset,left:r.right-n.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:r.bottom-n.height-this.verticalOffset,left:r.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:r.bottom-n.height-this.verticalOffset,left:r.right-n.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,c=s.length;l<c;l++){var d={};for(var p in s[l])d[p]=s[l][p];s.push(d)}s[0].top=s[1].top+=r.height,s[2].top=s[3].top-=r.height,s[4].left=s[6].left+=r.width,s[5].left=s[7].left-=r.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(s.push({verticalAlign:"top",horizontalAlign:"center",top:r.top+this.verticalOffset+(this.noOverlap?r.height:0),left:r.left-i.width/2+r.width/2+this.horizontalOffset}),s.push({verticalAlign:"bottom",horizontalAlign:"center",top:r.bottom-n.height-this.verticalOffset-(this.noOverlap?r.height:0),left:r.left-i.width/2+r.width/2+this.horizontalOffset})),t&&"middle"!==t||(s.push({verticalAlign:"middle",horizontalAlign:"left",top:r.top-i.height/2+r.height/2+this.verticalOffset,left:r.left+this.horizontalOffset+(this.noOverlap?r.width:0)}),s.push({verticalAlign:"middle",horizontalAlign:"right",top:r.top-i.height/2+r.height/2+this.verticalOffset,left:r.right-n.width-this.horizontalOffset-(this.noOverlap?r.width:0)})),"middle"===t&&"center"===e&&s.push({verticalAlign:"middle",horizontalAlign:"center",top:r.top-i.height/2+r.height/2+this.verticalOffset,left:r.left-i.width/2+r.width/2+this.horizontalOffset});for(l=0;l<s.length;l++){var u=s[l],h=u.verticalAlign===t,f=u.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&h&&f){a=u;break}var b=(!t||h)&&(!e||f);if(this.dynamicAlign||b){if(u.offscreenArea=this.__getOffscreenArea(u,n,o),0===u.offscreenArea&&b){a=u;break}a=a||u;var m=u.offscreenArea-a.offscreenArea;(m<0||0===m&&(h||f))&&(a=u)}}return a}};var o=n(92),a=n(7),s=n(118),l=n(6),c=n(4);Object(l.a)({_template:c.a`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&Object(i.a)(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||Object(i.a)(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});var d=n(32),p=n(36);const u=function(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,p.a(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};u.prototype={constructor:u,get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement},get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&Object(i.a)(e.root).activeElement;)e=Object(i.a)(e.root).activeElement;return e},_bringOverlayAtIndexToFront:function(e){var t=this._overlays[e];if(t){var n=this._overlays.length-1,i=this._overlays[n];if(i&&this._shouldBeBehindOverlay(t,i)&&n--,!(e>=n)){var r=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=r&&this._applyOverlayZ(t,r);e<n;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[n]=t}}},addOrRemoveOverlay:function(e){e.opened?this.addOverlay(e):this.removeOverlay(e)},addOverlay:function(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var n=this._overlays.length,i=this._overlays[n-1],r=Math.max(this._getZ(i),this._minimumZ),o=this._getZ(e);if(i&&this._shouldBeBehindOverlay(e,i)){this._applyOverlayZ(i,r),n--;var a=this._overlays[n-1];r=Math.max(this._getZ(a),this._minimumZ)}o<=r&&this._applyOverlayZ(e,r),this._overlays.splice(n,0,e),this.trackBackdrop()},removeOverlay:function(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())},currentOverlay:function(){var e=this._overlays.length-1;return this._overlays[e]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(e){this._minimumZ=Math.max(this._minimumZ,e)},focusOverlay:function(){var e=this.currentOverlay();e&&e._applyFocus()},trackBackdrop:function(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())},getBackdrops:function(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]},_getZ:function(e){var t=this._minimumZ;if(e){var n=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);n==n&&(t=n)}return t},_setZ:function(e,t){e.style.zIndex=t},_applyOverlayZ:function(e,t){this._setZ(e,t+2)},_overlayInPath:function(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]},_onCaptureClick:function(e){var t=this._overlays.length-1;if(-1!==t)for(var n,r=Object(i.a)(e).path;(n=this._overlays[t])&&this._overlayInPath(r)!==n&&(n._onCaptureClick(e),n.allowClickThrough);)t--},_onCaptureFocus:function(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)},_onCaptureKeyDown:function(e){var t=this.currentOverlay();t&&(d.a.keyboardEventMatchesKeys(e,"esc")?t._onCaptureEsc(e):d.a.keyboardEventMatchesKeys(e,"tab")&&t._onCaptureTab(e))},_shouldBeBehindOverlay:function(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};const h=new u;var f,b,m={pageX:0,pageY:0},g=null,_=[],y=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function v(e){x.indexOf(e)>=0||(0===x.length&&function(){f=f||function(e){e.cancelable&&function(e){var t=Object(i.a)(e).rootTarget;"touchmove"!==e.type&&g!==t&&(g=t,_=function(e){for(var t=[],n=e.indexOf(b),i=0;i<=n;i++)if(e[i].nodeType===Node.ELEMENT_NODE){var r=e[i],o=r.style;"scroll"!==o.overflow&&"auto"!==o.overflow&&(o=window.getComputedStyle(r)),"scroll"!==o.overflow&&"auto"!==o.overflow||t.push(r)}return t}(Object(i.a)(e).path));if(!_.length)return!0;if("touchstart"===e.type)return!1;var n=function(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var n=e.targetTouches[0];t.deltaX=m.pageX-n.pageX,t.deltaY=m.pageY-n.pageY}return t}(e);return!function(e,t,n){if(!t&&!n)return;for(var i=Math.abs(n)>=Math.abs(t),r=0;r<e.length;r++){var o=e[r];if(i?n<0?o.scrollTop>0:o.scrollTop<o.scrollHeight-o.clientHeight:t<0?o.scrollLeft>0:o.scrollLeft<o.scrollWidth-o.clientWidth)return o}}(_,n.deltaX,n.deltaY)}(e)&&e.preventDefault();if(e.targetTouches){var t=e.targetTouches[0];m.pageX=t.pageX,m.pageY=t.pageY}}.bind(void 0);for(var e=0,t=y.length;e<t;e++)document.addEventListener(y[e],f,{capture:!0,passive:!1})}(),x.push(e),b=x[x.length-1],k=[],C=[])}function w(e){var t=x.indexOf(e);-1!==t&&(x.splice(t,1),b=x[x.length-1],k=[],C=[],0===x.length&&function(){for(var e=0,t=y.length;e<t;e++)document.removeEventListener(y[e],f,{capture:!0,passive:!1})}())}const x=[];let k=null,C=null;n.d(t,"b",function(){return S}),n.d(t,"a",function(){return O});const S={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:h},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||Object(i.a)(this).querySelector("[autofocus]")||this},get _focusableNodes(){return s.a.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=Object(i.a)(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in Object(i.a)(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||Object(i.a)(this).deepContains(e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=Object(i.a)(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,n=t?this.__firstFocusableNode:this.__lastFocusableNode,i=t?this.__lastFocusableNode:this.__firstFocusableNode,r=!1;if(n===i)r=!0;else{var o=this._manager.deepActiveElement;r=o===n||o===this}r&&(e.preventDefault(),this._focusedChild=i,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var n=this.__rafs;null!==n[e]&&cancelAnimationFrame(n[e]),n[e]=requestAnimationFrame(function(){n[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,n){e&&t&&this.__isValidScrollAction(n)?("lock"===n&&(this.__saveScrollPosition(),v(this)),this.__addScrollListeners()):(w(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],a.i)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||Object(i.a)(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},O=[r,o.a,S]},function(e,t,n){"use strict";var i=n(26),r=n(33),o=n(18),a=n(25),s=n(27),l=n(2),c=n(12),d=n(0);const p=Object(s.b)(i.a);class u extends p{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=Object(d.a)(Object(d.a)(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Object(r.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let i,r=0;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if(Object(l.e)(this.as,t)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let r=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(r,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,t>0?c.d.after(t):c.c,e.bind(this)),Object(a.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(a.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let o=0;o<e.length;o++)t[o]=o;this.__filterFn&&(t=t.filter((t,n,i)=>this.__filterFn(e[t],n,i))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const r=Math.min(t.length,this.__limit);for(;i<r;i++){let r=this.__instances[i],o=t[i],a=e[o];n[o]=i,r?(r._setPendingProperty(this.as,a),r._setPendingProperty(this.indexAs,i),r._setPendingProperty(this.itemsIndexAs,o),r._flushProperties()):this.__insertInstance(a,i,o)}for(let o=this.__instances.length-1;o>=i;o--)this.__detachAndRemoveInstance(o)}__detachInstance(e){let t=this.__instances[e];const n=Object(d.a)(t.root);for(let i=0;i<t.children.length;i++){let e=t.children[i];n.appendChild(e)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,e),i._setPendingProperty(this.indexAs,t),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(e,t,n);let r=this.__instances[t+1],o=r?r.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(i.root,o),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[r],a=this.__instances[o];if(a){let n=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(n,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(r.a)(this.template,e)}}customElements.define(u.is,u)},function(e,t,n){"use strict";var i=n(26),r=n(33),o=n(18),a=n(25),s=n(12),l=n(2),c=n(0);class d extends i.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(a.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Object(c.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(a.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=Object(c.a)(this).parentNode;if(e){if(!this.__ctor){let e=Object(c.a)(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Object(r.b)(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(Object(c.a)(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)Object(c.a)(e).insertBefore(n,this)}}else this.__instance=new this.__ctor,Object(c.a)(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Object(c.a)(e[0]).parentNode;if(t){t=Object(c.a)(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(d.is,d)},function(e,t,n){"use strict";n(5);var i=n(48),r=n(6),o=n(3);Object(r.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new i.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+":"+e},this)},applyIcon:function(e,t){this.removeIcon(e);var n=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(n){var i=Object(o.a)(e.root||e);return i.insertBefore(n,i.childNodes[0]),e._svgIcon=n}return null},removeIcon:function(e){e._svgIcon&&(Object(o.a)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return Object(o.a)(this).querySelectorAll("[id]").forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,n){if(e){var i=e.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=i.getAttribute("viewBox")||"0 0 "+t+" "+t,a="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&i.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",o),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=a,r.appendChild(i).removeAttribute("id"),r}return null}})},function(e,t,n){"use strict";n(5);var i=n(3),r=n(24);class o{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach(function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)},this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var n=this.selection.indexOf(e);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}n.d(t,"a",function(){return a});const a={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new o(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(i.a)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=Object(i.a)(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,n=0;t=this.items[n];n++)if(this._valueForItem(t)==e)return n},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var n=e[Object(r.b)(this.attrForSelected)];return null!=n?n:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return Object(i.a)(e).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,n=this.items;t&&t!=this;){var i=n.indexOf(t);if(i>=0){var r=this._indexToValue(i);return void this._itemActivate(r,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}}},,function(e,t,n){"use strict";n(5),n(114),n(111),n(112),n(113);var i=n(60),r=(n(42),n(6)),o=n(4),a=n(95);Object(r.a)({is:"paper-input",_template:o.a`
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
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[a.a,i.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},,function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(5);var i=n(3),r=n(7),o=new Set;const a={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():r.i||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(i.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(o.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},,function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(5);var i=n(6),r=n(4);const o=Object(i.a)({_template:r.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){o.instance||(o.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});o.instance=null,o.requestAvailability=function(){o.instance||(o.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(o.instance)}},function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(5);var i=n(32),r=n(35),o=n(3),a=n(26);const s={NextLabelID:1,NextAddonID:1,NextInputID:1},l={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!a.a&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=Object(o.a)(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var n="paper-input-add-on-"+s.NextAddonID++;t.id=n,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,n)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){r.a._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(n){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=Object(o.a)(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+s.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+s.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},c=[r.a,i.a,l]},function(e,t,n){"use strict";n(46),n(73),n(44),n(83),n(53),n(72);var i=n(55);const r=document.createElement("template");r.setAttribute("style","display: none;"),r.innerHTML=`<custom-style>\n  <style>\n    /*\n      ioBroker default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n      --state-icon-unavailable-color: var(--disabled-text-color);\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* sidebar menu */\n      --sidebar-text-color: var(--primary-text-color);\n      --sidebar-background-color: var(--paper-listbox-background-color); /* backward compatible with existing themes */\n      --sidebar-icon-color: rgba(0, 0, 0, 0.5);\n      --sidebar-selected-text-color: var(--primary-color);\n      --sidebar-selected-icon-color: var(--primary-color);\n\n      /* controls */\n      --toggle-button-color: var(--primary-color);\n      /* --toggle-button-unchecked-color: var(--accent-color); */\n      --slider-color: var(--primary-color);\n      --slider-secondary-color: var(--light-primary-color);\n      --slider-bar-color: var(--disabled-text-color);\n\n      /* for label-badge */\n      --label-badge-background-color: white;\n      --label-badge-text-color: rgb(76, 76, 76);\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n      --label-badge-grey: var(--paper-grey-500);\n\n      /*\n        Paper-styles color.html depency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --paper-toggle-button-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n      --paper-spinner-color: var(--primary-color);\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* derived colors, to keep existing themes mostly working */\n      --paper-card-background-color: var(--card-background-color);\n      --paper-listbox-background-color: var(--card-background-color);\n      --paper-item-icon-color: var(--state-icon-color);\n      --paper-item-icon-active-color: var(--state-icon-active-color);\n      --table-row-background-color: var(--primary-background-color);\n      --table-row-alternative-background-color: var(--secondary-background-color);\n\n      /* set our toggle style */\n      --paper-toggle-button-checked-ink-color: var(--toggle-button-color);\n      --paper-toggle-button-checked-button-color: var(--toggle-button-color);\n      --paper-toggle-button-checked-bar-color: var(--toggle-button-color);\n      --paper-toggle-button-unchecked-button-color: var(--toggle-button-unchecked-color, var(--paper-grey-50));\n      --paper-toggle-button-unchecked-bar-color: var(--toggle-button-unchecked-color, #000000);\n      /* set our slider style */\n      --paper-slider-knob-color: var(--slider-color);\n      --paper-slider-knob-start-color: var(--slider-color);\n      --paper-slider-pin-color: var(--slider-color);\n      --paper-slider-active-color: var(--slider-color);\n      --paper-slider-secondary-color: var(--slider-secondary-color);\n      --paper-slider-container-color: var(--slider-bar-color);\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* mwc */\n      --mdc-theme-primary: var(--primary-color);\n    }\n  </style>\n\n  <style shady-unscoped="">\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) &gt; .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll &gt; .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style><dom-module id="ha-style">\n  <template>\n    <style>\n    ${i.a.cssText}\n    </style>\n  </template>\n</dom-module><dom-module id="ha-style-dialog">\n  <template>\n    <style>\n      ${i.b.cssText}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(r.content)},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(33);const r={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(i.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(i.a)(this._templatizerTemplate,e)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(27);let r;r=i.a._mutablePropertyChange;const o={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,n){return r(this,e,t,n,this.mutableData)}}},,function(e,t){const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<style>\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Thin.ttf) format("truetype");\nfont-weight: 100;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-ThinItalic.ttf) format("truetype");\nfont-weight: 100;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Light.ttf) format("truetype");\nfont-weight: 300;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-LightItalic.ttf) format("truetype");\nfont-weight: 300;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Regular.ttf) format("truetype");\nfont-weight: 400;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Italic.ttf) format("truetype");\nfont-weight: 400;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Medium.ttf) format("truetype");\nfont-weight: 500;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-MediumItalic.ttf) format("truetype");\nfont-weight: 500;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Bold.ttf) format("truetype");\nfont-weight: 700;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-BoldItalic.ttf) format("truetype");\nfont-weight: 700;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-Black.ttf) format("truetype");\nfont-weight: 900;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc: url(/static/fonts/roboto/Roboto-BlackItalic.ttf) format("truetype");\nfont-weight: 900;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-Thin.ttf) format("truetype");\nfont-weight: 100;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-ThinItalic.ttf) format("truetype");\nfont-weight: 100;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-Light.ttf) format("truetype");\nfont-weight: 300;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-LightItalic.ttf) format("truetype");\nfont-weight: 300;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-Regular.ttf) format("truetype");\nfont-weight: 400;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-Italic.ttf) format("truetype");\nfont-weight: 400;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-Medium.ttf) format("truetype");\nfont-weight: 500;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-MediumItalic.ttf) format("truetype");\nfont-weight: 500;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-Bold.ttf) format("truetype");\nfont-weight: 700;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto Mono";\nsrc: url(/static/fonts/robotomono/RobotoMono-BoldItalic.ttf) format("truetype");\nfont-weight: 700;\nfont-style: italic;\n}\n</style>',document.head.appendChild(n.content)},function(e,t,n){"use strict";n(87);const i=customElements.get("iron-iconset-svg");customElements.define("ha-iconset-svg",class extends i{_fireIronIconsetAdded(){this.async(()=>this.fire("iron-iconset-added",this,{node:window}))}_nameChanged(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.ownerDocument&&"loading"===this.ownerDocument.readyState?this.ownerDocument.addEventListener("DOMContentLoaded",()=>{this._fireIronIconsetAdded()}):this._fireIronIconsetAdded()}})},,function(e,t,n){"use strict";t.default=function(){function e(t,n,i,r){this.message=t,this.expected=n,this.found=i,this.location=r,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(e,Error),{SyntaxError:e,parse:function(t){var n,i=arguments.length>1?arguments[1]:{},r={},o={start:Pe},a=Pe,s=function(e){return{type:"messageFormatPattern",elements:e,location:Se()}},l=function(e){var t,n,i,r,o,a="";for(t=0,i=e.length;t<i;t+=1)for(n=0,o=(r=e[t]).length;n<o;n+=1)a+=r[n];return a},c=function(e){return{type:"messageTextElement",value:e,location:Se()}},d=/^[^ \t\n\r,.+={}#]/,p={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},u="{",h={type:"literal",value:"{",description:'"{"'},f=",",b={type:"literal",value:",",description:'","'},m="}",g={type:"literal",value:"}",description:'"}"'},_=function(e,t){return{type:"argumentElement",id:e,format:t&&t[2],location:Se()}},y="number",v={type:"literal",value:"number",description:'"number"'},w="date",x={type:"literal",value:"date",description:'"date"'},k="time",C={type:"literal",value:"time",description:'"time"'},S=function(e,t){return{type:e+"Format",style:t&&t[2],location:Se()}},O="plural",j={type:"literal",value:"plural",description:'"plural"'},E=function(e){return{type:e.type,ordinal:!1,offset:e.offset||0,options:e.options,location:Se()}},A="selectordinal",P={type:"literal",value:"selectordinal",description:'"selectordinal"'},T=function(e){return{type:e.type,ordinal:!0,offset:e.offset||0,options:e.options,location:Se()}},I="select",N={type:"literal",value:"select",description:'"select"'},z=function(e){return{type:"selectFormat",options:e,location:Se()}},R="=",M={type:"literal",value:"=",description:'"="'},L=function(e,t){return{type:"optionalFormatPattern",selector:e,value:t,location:Se()}},F="offset:",D={type:"literal",value:"offset:",description:'"offset:"'},B=function(e){return e},H=function(e,t){return{type:"pluralFormat",offset:e,options:t,location:Se()}},V={type:"other",description:"whitespace"},$=/^[ \t\n\r]/,U={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},q={type:"other",description:"optionalWhitespace"},K=/^[0-9]/,X={type:"class",value:"[0-9]",description:"[0-9]"},W=/^[0-9a-f]/i,Y={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},J="0",G={type:"literal",value:"0",description:'"0"'},Z=/^[1-9]/,Q={type:"class",value:"[1-9]",description:"[1-9]"},ee=function(e){return parseInt(e,10)},te=/^[^{}\\\0-\x1F \t\n\r]/,ne={type:"class",value:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"},ie="\\\\",re={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},oe=function(){return"\\"},ae="\\#",se={type:"literal",value:"\\#",description:'"\\\\#"'},le=function(){return"\\#"},ce="\\{",de={type:"literal",value:"\\{",description:'"\\\\{"'},pe=function(){return"{"},ue="\\}",he={type:"literal",value:"\\}",description:'"\\\\}"'},fe=function(){return"}"},be="\\u",me={type:"literal",value:"\\u",description:'"\\\\u"'},ge=function(e){return String.fromCharCode(parseInt(e,16))},_e=function(e){return e.join("")},ye=0,ve=0,we=[{line:1,column:1,seenCR:!1}],xe=0,ke=[],Ce=0;if("startRule"in i){if(!(i.startRule in o))throw new Error("Can't start parsing from rule \""+i.startRule+'".');a=o[i.startRule]}function Se(){return je(ve,ye)}function Oe(e){var n,i,r=we[e];if(r)return r;for(n=e-1;!we[n];)n--;for(r={line:(r=we[n]).line,column:r.column,seenCR:r.seenCR};n<e;)"\n"===(i=t.charAt(n))?(r.seenCR||r.line++,r.column=1,r.seenCR=!1):"\r"===i||"\u2028"===i||"\u2029"===i?(r.line++,r.column=1,r.seenCR=!0):(r.column++,r.seenCR=!1),n++;return we[e]=r,r}function je(e,t){var n=Oe(e),i=Oe(t);return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:i.line,column:i.column}}}function Ee(e){ye<xe||(ye>xe&&(xe=ye,ke=[]),ke.push(e))}function Ae(t,n,i,r){return null!==n&&function(e){var t=1;for(e.sort(function(e,t){return e.description<t.description?-1:e.description>t.description?1:0});t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(n),new e(null!==t?t:function(e,t){var n,i=new Array(e.length);for(n=0;n<e.length;n++)i[n]=e[n].description;return"Expected "+(e.length>1?i.slice(0,-1).join(", ")+" or "+i[e.length-1]:i[0])+" but "+(t?'"'+function(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0100-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1000-\uFFFF]/g,function(e){return"\\u"+t(e)})}(t)+'"':"end of input")+" found."}(n,i),n,i,r)}function Pe(){return Te()}function Te(){var e,t,n;for(e=ye,t=[],n=Ie();n!==r;)t.push(n),n=Ie();return t!==r&&(ve=e,t=s(t)),e=t}function Ie(){var e;return(e=function(){var e,n;return e=ye,(n=function(){var e,n,i,o,a,s;if(e=ye,n=[],i=ye,(o=Me())!==r&&(a=He())!==r&&(s=Me())!==r?i=o=[o,a,s]:(ye=i,i=r),i!==r)for(;i!==r;)n.push(i),i=ye,(o=Me())!==r&&(a=He())!==r&&(s=Me())!==r?i=o=[o,a,s]:(ye=i,i=r);else n=r;return n!==r&&(ve=e,n=l(n)),(e=n)===r&&(e=ye,n=Re(),e=n!==r?t.substring(e,ye):n),e}())!==r&&(ve=e,n=c(n)),e=n}())===r&&(e=function(){var e,n,i,o,a,s,l;return e=ye,123===t.charCodeAt(ye)?(n=u,ye++):(n=r,0===Ce&&Ee(h)),n!==r&&Me()!==r&&(i=function(){var e,n,i;if((e=De())===r){if(e=ye,n=[],d.test(t.charAt(ye))?(i=t.charAt(ye),ye++):(i=r,0===Ce&&Ee(p)),i!==r)for(;i!==r;)n.push(i),d.test(t.charAt(ye))?(i=t.charAt(ye),ye++):(i=r,0===Ce&&Ee(p));else n=r;e=n!==r?t.substring(e,ye):n}return e}())!==r&&Me()!==r?(o=ye,44===t.charCodeAt(ye)?(a=f,ye++):(a=r,0===Ce&&Ee(b)),a!==r&&(s=Me())!==r&&(l=function(){var e;return(e=function(){var e,n,i,o,a,s;return e=ye,t.substr(ye,6)===y?(n=y,ye+=6):(n=r,0===Ce&&Ee(v)),n===r&&(t.substr(ye,4)===w?(n=w,ye+=4):(n=r,0===Ce&&Ee(x)),n===r&&(t.substr(ye,4)===k?(n=k,ye+=4):(n=r,0===Ce&&Ee(C)))),n!==r&&Me()!==r?(i=ye,44===t.charCodeAt(ye)?(o=f,ye++):(o=r,0===Ce&&Ee(b)),o!==r&&(a=Me())!==r&&(s=He())!==r?i=o=[o,a,s]:(ye=i,i=r),i===r&&(i=null),i!==r?(ve=e,n=S(n,i),e=n):(ye=e,e=r)):(ye=e,e=r),e}())===r&&(e=function(){var e,n,i,o;return e=ye,t.substr(ye,6)===O?(n=O,ye+=6):(n=r,0===Ce&&Ee(j)),n!==r&&Me()!==r?(44===t.charCodeAt(ye)?(i=f,ye++):(i=r,0===Ce&&Ee(b)),i!==r&&Me()!==r&&(o=ze())!==r?(ve=e,n=E(o),e=n):(ye=e,e=r)):(ye=e,e=r),e}())===r&&(e=function(){var e,n,i,o;return e=ye,t.substr(ye,13)===A?(n=A,ye+=13):(n=r,0===Ce&&Ee(P)),n!==r&&Me()!==r?(44===t.charCodeAt(ye)?(i=f,ye++):(i=r,0===Ce&&Ee(b)),i!==r&&Me()!==r&&(o=ze())!==r?(ve=e,n=T(o),e=n):(ye=e,e=r)):(ye=e,e=r),e}())===r&&(e=function(){var e,n,i,o,a;if(e=ye,t.substr(ye,6)===I?(n=I,ye+=6):(n=r,0===Ce&&Ee(N)),n!==r)if(Me()!==r)if(44===t.charCodeAt(ye)?(i=f,ye++):(i=r,0===Ce&&Ee(b)),i!==r)if(Me()!==r){if(o=[],(a=Ne())!==r)for(;a!==r;)o.push(a),a=Ne();else o=r;o!==r?(ve=e,n=z(o),e=n):(ye=e,e=r)}else ye=e,e=r;else ye=e,e=r;else ye=e,e=r;else ye=e,e=r;return e}()),e}())!==r?o=a=[a,s,l]:(ye=o,o=r),o===r&&(o=null),o!==r&&(a=Me())!==r?(125===t.charCodeAt(ye)?(s=m,ye++):(s=r,0===Ce&&Ee(g)),s!==r?(ve=e,n=_(i,o),e=n):(ye=e,e=r)):(ye=e,e=r)):(ye=e,e=r),e}()),e}function Ne(){var e,n,i,o,a;return e=ye,Me()!==r&&(n=function(){var e,n,i,o;return e=ye,n=ye,61===t.charCodeAt(ye)?(i=R,ye++):(i=r,0===Ce&&Ee(M)),i!==r&&(o=De())!==r?n=i=[i,o]:(ye=n,n=r),(e=n!==r?t.substring(e,ye):n)===r&&(e=He()),e}())!==r&&Me()!==r?(123===t.charCodeAt(ye)?(i=u,ye++):(i=r,0===Ce&&Ee(h)),i!==r&&Me()!==r&&(o=Te())!==r&&Me()!==r?(125===t.charCodeAt(ye)?(a=m,ye++):(a=r,0===Ce&&Ee(g)),a!==r?(ve=e,e=L(n,o)):(ye=e,e=r)):(ye=e,e=r)):(ye=e,e=r),e}function ze(){var e,n,i,o;if(e=ye,(n=function(){var e,n,i;return e=ye,t.substr(ye,7)===F?(n=F,ye+=7):(n=r,0===Ce&&Ee(D)),n!==r&&Me()!==r&&(i=De())!==r?(ve=e,e=n=B(i)):(ye=e,e=r),e}())===r&&(n=null),n!==r)if(Me()!==r){if(i=[],(o=Ne())!==r)for(;o!==r;)i.push(o),o=Ne();else i=r;i!==r?(ve=e,e=n=H(n,i)):(ye=e,e=r)}else ye=e,e=r;else ye=e,e=r;return e}function Re(){var e,n;if(Ce++,e=[],$.test(t.charAt(ye))?(n=t.charAt(ye),ye++):(n=r,0===Ce&&Ee(U)),n!==r)for(;n!==r;)e.push(n),$.test(t.charAt(ye))?(n=t.charAt(ye),ye++):(n=r,0===Ce&&Ee(U));else e=r;return Ce--,e===r&&(n=r,0===Ce&&Ee(V)),e}function Me(){var e,n,i;for(Ce++,e=ye,n=[],i=Re();i!==r;)n.push(i),i=Re();return e=n!==r?t.substring(e,ye):n,Ce--,e===r&&(n=r,0===Ce&&Ee(q)),e}function Le(){var e;return K.test(t.charAt(ye))?(e=t.charAt(ye),ye++):(e=r,0===Ce&&Ee(X)),e}function Fe(){var e;return W.test(t.charAt(ye))?(e=t.charAt(ye),ye++):(e=r,0===Ce&&Ee(Y)),e}function De(){var e,n,i,o,a,s;if(e=ye,48===t.charCodeAt(ye)?(n=J,ye++):(n=r,0===Ce&&Ee(G)),n===r){if(n=ye,i=ye,Z.test(t.charAt(ye))?(o=t.charAt(ye),ye++):(o=r,0===Ce&&Ee(Q)),o!==r){for(a=[],s=Le();s!==r;)a.push(s),s=Le();a!==r?i=o=[o,a]:(ye=i,i=r)}else ye=i,i=r;n=i!==r?t.substring(n,ye):i}return n!==r&&(ve=e,n=ee(n)),e=n}function Be(){var e,n,i,o,a,s,l,c;return te.test(t.charAt(ye))?(e=t.charAt(ye),ye++):(e=r,0===Ce&&Ee(ne)),e===r&&(e=ye,t.substr(ye,2)===ie?(n=ie,ye+=2):(n=r,0===Ce&&Ee(re)),n!==r&&(ve=e,n=oe()),(e=n)===r&&(e=ye,t.substr(ye,2)===ae?(n=ae,ye+=2):(n=r,0===Ce&&Ee(se)),n!==r&&(ve=e,n=le()),(e=n)===r&&(e=ye,t.substr(ye,2)===ce?(n=ce,ye+=2):(n=r,0===Ce&&Ee(de)),n!==r&&(ve=e,n=pe()),(e=n)===r&&(e=ye,t.substr(ye,2)===ue?(n=ue,ye+=2):(n=r,0===Ce&&Ee(he)),n!==r&&(ve=e,n=fe()),(e=n)===r&&(e=ye,t.substr(ye,2)===be?(n=be,ye+=2):(n=r,0===Ce&&Ee(me)),n!==r?(i=ye,o=ye,(a=Fe())!==r&&(s=Fe())!==r&&(l=Fe())!==r&&(c=Fe())!==r?o=a=[a,s,l,c]:(ye=o,o=r),(i=o!==r?t.substring(i,ye):o)!==r?(ve=e,e=n=ge(i)):(ye=e,e=r)):(ye=e,e=r)))))),e}function He(){var e,t,n;if(e=ye,t=[],(n=Be())!==r)for(;n!==r;)t.push(n),n=Be();else t=r;return t!==r&&(ve=e,t=_e(t)),e=t}if((n=a())!==r&&ye===t.length)return n;throw n!==r&&ye<t.length&&Ee({type:"end",description:"end of input"}),Ae(null,ke,xe<t.length?t.charAt(xe):null,xe<t.length?je(xe,xe+1):je(xe,xe))}}}()},,function(e,t,n){"use strict";n(5),n(107),n(44);var i=n(57),r=n(6),o=n(4);Object(r.a)({is:"paper-icon-button",_template:o.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[i.a],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var n=this.getAttribute("aria-label");n&&t!=n||this.setAttribute("aria-label",e)}})},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(10),r=n(21);const o=Object(i.a)(e=>(class extends e{fire(e,t,n){return n=n||{},Object(r.a)(n.node||this,e,t,n)}}))},function(e,t,n){"use strict";n(46),n(48);var i=n(6),r=n(3),o=n(4),a=n(5);Object(i.a)({_template:o.a`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:a.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(r.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(r.a)(this.root).appendChild(this._img))}})},function(e,t,n){"use strict";n(5);var i=n(32),r=n(6),o=n(3),a=n(4),s={distance:function(e,t,n,i){var r=e-n,o=t-i;return Math.sqrt(r*r+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function l(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function c(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(o.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}l.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=s.distance(e,t,0,0),i=s.distance(e,t,this.width,0),r=s.distance(e,t,0,this.height),o=s.distance(e,t,this.width,this.height);return Math.max(n,i,r,o)}},c.MAX_RADIUS=300,c.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=s.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?s.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(e+t),c.MAX_RADIUS)+5,i=1.1-n/c.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/i,o=n*(1-Math.pow(80,-r));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new l(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=s.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=s.now())},remove:function(){Object(o.a)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(r.a)({_template:a.a`
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
`,is:"paper-ripple",behaviors:[i.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(o.a)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var e=new c(this);return Object(o.a)(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}})},function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(5);const i={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},,function(e,t,n){"use strict";n(5),n(53);var i=n(6),r=n(4),o=n(68);Object(i.a)({_template:r.a`
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
`,is:"paper-input-char-counter",behaviors:[o.a],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}})},function(e,t,n){"use strict";n(5),n(46),n(44),n(53);var i=n(6),r=n(3),o=n(24),a=n(4);const s=a.a`
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
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Object(o.b)(this.attrForValue)},get _inputElement(){return Object(r.a)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,n=0;t=this._addons[n];n++)t.update(e)},_computeInputContentClass:function(e,t,n,i,r){var o="input-content";if(e)r&&(o+=" label-is-hidden"),i&&(o+=" is-invalid");else{var a=this.querySelector("label");t||r?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",i?o+=" is-invalid":n&&(o+=" label-is-highlighted")):(a&&(this.$.labelAndInputContainer.style.position="relative"),i&&(o+=" is-invalid"))}return n&&(o+=" focused"),o},_computeUnderlineClass:function(e,t){var n="underline";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n},_computeAddOnContentClass:function(e,t){var n="add-on-content";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n}})},function(e,t,n){"use strict";n(5),n(44),n(53);var i=n(6),r=n(4),o=n(68);Object(i.a)({_template:r.a`
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
`,is:"paper-input-error",behaviors:[o.a],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}})},function(e,t,n){"use strict";n(5);var i=n(94),r=n(61),o=n(6),a=n(3),s=n(4);Object(o.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[r.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){i.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(a.a)(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(a.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,n=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&n)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var n=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(n)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+n+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=r.a.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}})},,,function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(5);var i=n(54),r=n(35);const o=[i.a,r.a,{hostAttributes:{role:"option",tabindex:"0"}}]},function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(5);var i=n(3),r=Element.prototype,o=r.matches||r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector;const a={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return o.call(e,"input, select, textarea, button, object")?o.call(e,":not([disabled])"):o.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&o.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var n,r=e,o=this._normalizedTabIndex(r),a=o>0;o>=0&&t.push(r),n="content"===r.localName||"slot"===r.localName?Object(i.a)(r).getDistributedNodes():Object(i.a)(r.root||r).children;for(var s=0;s<n.length;s++)a=this._collectTabbableNodes(n[s],t)||a;return a},_isVisible:function(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)},_sortByTabIndex:function(e){var t=e.length;if(t<2)return e;var n=Math.ceil(t/2),i=this._sortByTabIndex(e.slice(0,n)),r=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(i,r)},_mergeSortByTabIndex:function(e,t){for(var n=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)},_hasLowerTabOrder:function(e,t){var n=Math.max(e.tabIndex,0),i=Math.max(t.tabIndex,0);return 0===n||0===i?i>n:n>i}}},function(e,t,n){"use strict";n(5);const i={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var n in t)e[n]=t[n]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,n){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=e?this.animationConfig[e]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var r,o=0;r=i[o];o++)if(r.animatable)r.animatable._getAnimationConfigRecursive(r.type||e,t,n);else if(r.id){var a=t[r.id];a?(a.isClone||(t[r.id]=this._cloneConfig(a),a=t[r.id]),this._copyProperties(a,r)):t[r.id]=r}else n.push(r)},getAnimationConfig:function(e){var t={},n=[];for(var i in this._getAnimationConfigRecursive(e,t,n),t)n.push(t[i]);return n}};n.d(t,"a",function(){return r});const r=[i,{_configureAnimations:function(e){var t=[],n=[];if(e.length>0)for(let o,a=0;o=e[a];a++){let e=document.createElement(o.name);if(e.isNeonAnimation){let t=null;e.configure||(e.configure=function(e){return null}),t=e.configure(o),n.push({result:t,config:o,neonAnimation:e})}else console.warn(this.is+":",o.name,"not found!")}for(var i=0;i<n.length;i++){let e=n[i].result,o=n[i].config,a=n[i].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(r){e=null,console.warn("Couldnt play","(",o.name,").",r)}e&&t.push({neonAnimation:a,config:o,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,n=0;n<e.length;n++)if("finished"!=e[n].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var n=this.getAnimationConfig(e);if(n){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var i=this._configureAnimations(n);if(0!=i.length){this._active[e]=i;for(var r=0;r<i.length;r++)i[r].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var n in t)t[n].animation.cancel()}this._active={}}}]},,function(e,t,n){"use strict";n(5);var i=n(60),r=n(61);const o={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},a=[i.a,r.a,o];var s=n(57),l=n(67);n.d(t,"a",function(){return d});const c={_checkedChanged:function(){o._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[s.a,a,c]},function(e,t,n){"use strict";n(5);var i=n(32),r=n(88);const o={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map(function(e){return this._indexToValue(this.indexOf(e))},this).filter(function(e){return null!=e},this)):r.a._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter(function(e){return null!=e});this._selection.clear(t);for(var n=0;n<t.length;n++)this._selection.setItemSelected(t[n],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map(function(e){return this._valueToItem(e)},this)}},a=[r.a,o];var s=n(3);n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});const l={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),o.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))},this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,n=this._searchText||"",i=(n+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,r=0;t=this.items[r];r++)if(!t.hasAttribute("disabled")){var o=this.attrForItemTitle||"textContent",a=(t[o]||t.getAttribute(o)||"").trim();if(!(a.length<i)&&a.slice(0,i).toLocaleLowerCase()==n){this._setFocusedItem(t);break}}this._searchText=n,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),n=1;n<e+1;n++){var i=this.items[(t-n+e)%e];if(!i.hasAttribute("disabled")){var r=Object(s.a)(i).getOwnerRoot()||document;if(this._setFocusedItem(i),Object(s.a)(r).activeElement==i)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),n=1;n<e+1;n++){var i=this.items[(t+n)%e];if(!i.hasAttribute("disabled")){var r=Object(s.a)(i).getOwnerRoot()||document;if(this._setFocusedItem(i),Object(s.a)(r).activeElement==i)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),r.a._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");l._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),l._shiftTabPressed=!1},1)},_onFocus:function(e){if(!l._shiftTabPressed){var t=Object(s.a)(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async(function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()}))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){r.a._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},c=[a,i.a,l]},,,,,,,,function(e,t,n){"use strict";n(5),n(46),n(132);var i=n(6),r=n(4),o=n(117);Object(i.a)({_template:r.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[o.a]})},function(e,t,n){"use strict";n(5),n(44);var i=n(122),r=n(6),o=n(4);Object(r.a)({_template:o.a`
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
`,is:"paper-listbox",behaviors:[i.a],hostAttributes:{role:"listbox"}})},function(e,t,n){"use strict";n(46),n(56),n(44),n(53);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},function(e,t,n){"use strict";n(5),n(32),n(107),n(90),n(137),n(108),n(44),n(141),n(142);var i=n(54),r=n(35),o=n(60),a=n(61),s=n(6),l=n(3),c=n(36),d=n(4);Object(s.a)({_template:d.a`
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
`,is:"paper-dropdown-menu",behaviors:[i.a,r.a,o.a,a.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,n=e.length;t<n;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){c.c(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},function(e,t,n){"use strict";var i=n(26),r=n(106);let o=null;const a=["svg","path"];customElements.define("ha-markdown",class extends(Object(r.a)(i.a)){static get properties(){return{content:{type:String,observer:"_render"},allowSvg:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback(),this._scriptLoaded=0,this._renderScheduled=!1,this._resize=()=>this.fire("iron-resize"),o||(o=Promise.all([n.e(75),n.e(47)]).then(n.bind(null,158))),o.then(({marked:e,filterXSS:t})=>{this.marked=e,this.filterXSS=t,this._scriptLoaded=1},()=>{this._scriptLoaded=2}).then(()=>this._render())}_render(){0===this._scriptLoaded||this._renderScheduled||(this._renderScheduled=!0,Promise.resolve().then(()=>{if(this._renderScheduled=!1,1===this._scriptLoaded){this.innerHTML=this.filterXSS(this.marked(this.content,{gfm:!0,tables:!0,breaks:!0}),{onIgnoreTag:this.allowSvg?(e,t)=>a.indexOf(e)>=0?t:null:null}),this._resize();const e=document.createTreeWalker(this,1,null,!1);for(;e.nextNode();){const t=e.currentNode;"A"===t.tagName&&t.host!==document.location.host?t.target="_blank":"IMG"===t.tagName&&t.addEventListener("load",this._resize)}}else 2===this._scriptLoaded&&(this.innerText=this.content)}))}})},function(e,t,n){"use strict";n(138);const i=customElements.get("paper-slider");customElements.define("ha-paper-slider",class extends i{static get template(){const e=document.createElement("template");e.innerHTML=i.template.innerHTML;const t=document.createElement("style");return t.innerHTML='\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ',e.content.appendChild(t),e}})},,function(e,t,n){"use strict";n(5);var i=n(32),r=n(35),o=n(84),a=n(119),s=n(6),l=n(3),c=n(4);Object(s.a)({_template:c.a`
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
`,is:"iron-dropdown",behaviors:[r.a,i.a,o.a,a.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,n=e.length;t<n;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),o.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):o.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):o.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),n=0;n<t.length;n++)t[n].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():o.b._applyFocus.apply(this,arguments)}});const d={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,n){for(var i,r={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],o=0;i=r[o];o++)e.style[i]=n;e.style[t]=n},complete:function(e){}};Object(s.a)({is:"fade-in-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});n(44),n(83);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[d],configure:function(e){var t=e.node,n=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:n/2+"px"},{height:n+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[d],configure:function(e){var t=e.node,n=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:n/2+"px"},{width:n+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[d],configure:function(e){var t=e.node,n=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:n+"px"},{width:n-n/20+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[d],configure:function(e){var t=e.node,n=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:n+"px",transform:"translateY(0)"},{height:n/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var p={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const u=Object(s.a)({_template:c.a`
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
`,is:"paper-menu-button",behaviors:[i.a,r.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:p.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,n=e.length;t<n;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){r.a._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,n=this.$.trigger;Object(l.a)(t).path.indexOf(n)>-1&&e.preventDefault()}});Object.keys(p).forEach(function(e){u[e]=p[e]})},function(e,t,n){"use strict";n(46),n(90),n(144),n(56);var i=n(32),r=n(60),o=n(109),a=n(57),s=n(6),l=n(36);const c=n(5).c`
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
`;c.setAttribute("strip-whitespace",""),Object(s.a)({_template:c,is:"paper-slider",behaviors:[i.a,r.a,a.a,o.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(l.f)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,n,i,r){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",n),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,n=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+n;var i=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(i);var r=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(r+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),n=(e.detail.x-t.left)/this._w*100;this._isRTL&&(n=100-n);var i=this.ratio;this._setTransiting(!0),this._positionKnob(n),i===this.ratio&&this._setTransiting(!1),this.async(function(){this.fire("change",{composed:!0})}),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,n,i){i||this._setMarkers([]);var r=Math.round((n-t)/this.step);r>e&&(r=e),(r<0||!isFinite(r))&&(r=0),this._setMarkers(new Array(r))},_mergeClasses:function(e){return Object.keys(e).filter(function(t){return e[t]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,a.b._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}})},,function(e,t,n){"use strict";n(5),n(44);var i=n(121),r=n(57),o=n(6),a=n(4),s=n(66);const l=a.a`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),Object(o.a)({_template:l,is:"paper-checkbox",behaviors:[i.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(s.a)(this,function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),t="px",n=e.match(/[A-Za-z]+$/);null!==n&&(t=n[0]);var i=parseFloat(e),r=8/3*i;"px"===t&&(r=Math.floor(r))%2!=i%2&&r++,this.updateStyles({"--paper-checkbox-ink-size":r+t})}})},_computeCheckboxClass:function(e,t){var n="";return e&&(n+="checked "),t&&(n+="invalid"),n},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,r.b._createRipple.call(this)}})},function(e,t,n){"use strict";n(87);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(i.content)},function(e,t,n){"use strict";n(44);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},function(e,t,n){"use strict";n(140),n(133),n(105),n(90),n(130),n(131);var i=n(4),r=n(26),o=(n(135),n(106));customElements.define("ha-form",class extends(Object(o.a)(r.a)){static get template(){return i.a`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-label="[[computeLabel]]"
            compute-error="[[computeError]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          ></paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `}static get properties(){return{data:{type:Object,notify:!0},schema:Object,error:Object,computeLabel:{type:Function,value:()=>e=>e&&e.name},computeError:{type:Function,value:()=>(e,t)=>e}}}focus(){const e=this.shadowRoot.querySelector("ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu");e&&e.focus()}_isArray(e){return Array.isArray(e)}_isRange(e){return"valueMin"in e&&"valueMax"in e}_equals(e,t){return e===t}_includes(e,t){return e.indexOf(t)>=0}_getValue(e,t){return e?e[t.name]:null}_valueChanged(e){let t=e.detail.value;"integer"===e.model.item.type&&(t=Number(e.detail.value)),this.set(["data",e.model.item.name],t)}_passwordFieldType(e){return e?"text":"password"}_passwordFieldIcon(e){return e?"hass:eye-off":"hass:eye"}_optionValue(e){return Array.isArray(e)?e[0]:e}_optionLabel(e){return Array.isArray(e)?e[1]:e}})},function(e,t,n){"use strict";n(5),n(46),n(56);var i=n(109),r=n(6),o=n(4);Object(r.a)({_template:o.a`
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
`,is:"paper-progress",behaviors:[i.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var n="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=n},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,n,i,r){e=this._clampValue(e),t=this._clampValue(t);var o=100*this._calcRatio(e),a=100*this._calcRatio(t);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,a),this.secondaryProgress=e,r?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",n),this.setAttribute("aria-valuemax",i)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}})},,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(86),n(85),n(101),n(96),n(100);var i=n(80),r=n(1);n(82),n(143),n(134);function o(e){var t,n=d(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let h=function(e,t,n,i){var r=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(n){t.forEach(function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var o="static"===r?e:n;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,r)},this),e.forEach(function(e){if(!s(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:n,finishers:i};var o=this.decorateConstructor(n,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,o=r.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=d(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),n=c(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:n,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=c(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(i)for(var p=0;p<i.length;p++)r=i[p](r);var u=t(function(e){r.initializeInstanceElements(e,h.elements)},n),h=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var r,o=e[i];if("method"===o.kind&&(r=t.find(n)))if(l(o.descriptor)||l(r.descriptor)){if(s(o)||s(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(s(o)){if(s(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}a(o,r)}else t.push(o)}return t}(u.d.map(o)),e);return r.initializeClassElements(u.F,h.elements),r.runClassFinishers(u.F,h.finishers)}(null,function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[Object(r.f)()],key:"authProvider",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"clientId",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"redirectUri",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"oauth2State",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_state",value:()=>"loading"},{kind:"field",decorators:[Object(r.f)()],key:"_stepData",value:()=>({})},{kind:"field",decorators:[Object(r.f)()],key:"_step",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_errorMessage",value:void 0},{kind:"method",key:"render",value:function(){return r.e`
      <form>
        ${this._renderForm()}
      </form>
    `}},{kind:"method",key:"firstUpdated",value:function(e){if(p(u(n.prototype),"firstUpdated",this).call(this,e),null==this.clientId||null==this.redirectUri)return console.error("clientId and redirectUri must not be null",this.clientId,this.redirectUri),this._state="error",void(this._errorMessage=this._unknownError());this.addEventListener("keypress",e=>{13===e.keyCode&&this._handleSubmit(e)})}},{kind:"method",key:"updated",value:function(e){p(u(n.prototype),"updated",this).call(this,e),e.has("authProvider")&&this._providerChanged(this.authProvider)}},{kind:"method",key:"_renderForm",value:function(){switch(this._state){case"step":return null==this._step?r.e``:r.e`
          ${this._renderStep(this._step)}
          <div class="action">
            <mwc-button raised @click=${this._handleSubmit}
              >${"form"===this._step.type?"Next":"Start over"}</mwc-button
            >
          </div>
        `;case"error":return r.e`
          <div class="error">Error: ${this._errorMessage}</div>
        `;case"loading":return r.e`
          ${this.localize("ui.panel.page-authorize.form.working")}
        `}}},{kind:"method",key:"_renderStep",value:function(e){switch(e.type){case"abort":return r.e`
          ${this.localize("ui.panel.page-authorize.abort_intro")}:
          <ha-markdown
            .content=${this.localize(`ui.panel.page-authorize.form.providers.${e.handler[0]}.abort.${e.reason}`)}
          ></ha-markdown>
        `;case"form":return r.e`
          ${this._computeStepDescription(e)?r.e`
                <ha-markdown
                  .content=${this._computeStepDescription(e)}
                  allow-svg
                ></ha-markdown>
              `:r.e``}
          <ha-form
            .data=${this._stepData}
            .schema=${e.data_schema}
            .error=${e.errors}
            .computeLabel=${this._computeLabelCallback(e)}
            .computeError=${this._computeErrorCallback(e)}
          ></ha-form>
        `;default:return r.e``}}},{kind:"method",key:"_providerChanged",value:async function(e){if(this._step&&"form"===this._step.type&&fetch(`/auth/login_flow/${this._step.flow_id}`,{method:"DELETE",credentials:"same-origin"}).catch(e=>{console.error("Error delete obsoleted auth flow",e)}),null==e)return console.error("No auth provider"),this._state="error",void(this._errorMessage=this._unknownError());try{const n=await fetch("/auth/login_flow",{method:"POST",credentials:"same-origin",body:JSON.stringify({client_id:this.clientId,handler:[e.type,e.id],redirect_uri:this.redirectUri})}),i=await n.json();if(n.ok){if("create_entry"===i.type)return void this._redirect(i.result);await this._updateStep(i)}else this._state="error",this._errorMessage=i.message}catch(t){console.error("Error starting auth flow",t),this._state="error",this._errorMessage=this._unknownError()}}},{kind:"method",key:"_redirect",value:function(e){let t=this.redirectUri;t.includes("?")?t.endsWith("&")||(t+="&"):t+="?",t+=`code=${encodeURIComponent(e)}`,this.oauth2State&&(t+=`&state=${encodeURIComponent(this.oauth2State)}`),document.location.assign(t)}},{kind:"method",key:"_updateStep",value:async function(e){let t=null;this._step&&(e.flow_id!==this._step.flow_id||"form"===e.type&&"form"===this._step.type&&e.step_id!==this._step.step_id)&&(t={}),this._step=e,this._state="step",null!=t&&(this._stepData=t),await this.updateComplete,setTimeout(()=>{const e=this.shadowRoot.querySelector("ha-form");e&&e.focus()},100)}},{kind:"method",key:"_computeStepDescription",value:function(e){const t=`ui.panel.page-authorize.form.providers.${e.handler[0]}.step.${e.step_id}.description`,n=[],i=e.description_placeholders||{};return Object.keys(i).forEach(e=>{n.push(e),n.push(i[e])}),this.localize(t,...n)}},{kind:"method",key:"_computeLabelCallback",value:function(e){return t=>this.localize(`ui.panel.page-authorize.form.providers.${e.handler[0]}.step.${e.step_id}.data.${t.name}`)}},{kind:"method",key:"_computeErrorCallback",value:function(e){return t=>this.localize(`ui.panel.page-authorize.form.providers.${e.handler[0]}.error.${t}`)}},{kind:"method",key:"_unknownError",value:function(){return this.localize("ui.panel.page-authorize.form.unknown_error")}},{kind:"method",key:"_handleSubmit",value:async function(e){if(e.preventDefault(),null==this._step)return;if("form"!==this._step.type)return void this._providerChanged(this.authProvider);this._state="loading",this.style.setProperty("min-height",`${this.offsetHeight}px`);const t=Object.assign({},this._stepData,{client_id:this.clientId});try{const e=await fetch(`/auth/login_flow/${this._step.flow_id}`,{method:"POST",credentials:"same-origin",body:JSON.stringify(t)}),i=await e.json();if("create_entry"===i.type)return void this._redirect(i.result);await this._updateStep(i)}catch(n){console.error("Error submitting step",n),this._state="error",this._errorMessage=this._unknownError()}finally{this.style.setProperty("min-height","")}}},{kind:"get",static:!0,key:"styles",value:function(){return r.c`
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
    `}}]}},Object(i.a)(r.a));customElements.define("ha-auth-flow",h);var f=n(64),b=n(75);function m(e){var t,n=w(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.e(56).then(n.bind(null,338));let C=function(e,t,n,i){var r=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(n){t.forEach(function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var o="static"===r?e:n;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,r)},this),e.forEach(function(e){if(!_(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:n,finishers:i};var o=this.decorateConstructor(n,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,o=r.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=w(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),n=v(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:n,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=v(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)r=i[o](r);var a=t(function(e){r.initializeInstanceElements(e,s.elements)},n),s=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var r,o=e[i];if("method"===o.kind&&(r=t.find(n)))if(y(o.descriptor)||y(r.descriptor)){if(_(o)||_(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(_(o)){if(_(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}g(o,r)}else t.push(o)}return t}(a.d.map(m)),e);return r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}(null,function(e,t){class n extends t{constructor(){super(),e(this),this.translationFragment="page-authorize";const t={},n=location.search.substr(1).split("&");for(const e of n){const n=e.split("=");n.length>1&&(t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]))}t.client_id&&(this.clientId=t.client_id),t.redirect_uri&&(this.redirectUri=t.redirect_uri),t.state&&(this.oauth2State=t.state)}}return{F:n,d:[{kind:"field",decorators:[Object(r.f)()],key:"clientId",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"redirectUri",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"oauth2State",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_authProvider",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_authProviders",value:void 0},{kind:"get",static:!0,key:"properties",value:function(){return{_authProvider:{},_authProviders:{},clientId:{},redirectUri:{},oauth2State:{}}}},{kind:"method",key:"render",value:function(){if(!this._authProviders)return r.e`
        <p>${this.localize("ui.panel.page-authorize.initializing")}</p>
      `;const e=document.createElement("div");e.innerText=this.localize("ui.panel.page-authorize.logging_in_with","authProviderName","NAME"),e.innerHTML=e.innerHTML.replace("**NAME**",`<b>${this._authProvider.name}</b>`);const t=this._authProviders.filter(e=>e!==this._authProvider);return r.e`
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
        .step="{{step}}"
      ></ha-auth-flow>

      ${t.length>0?r.e`
            <ha-pick-auth-provider
              .resources="${this.resources}"
              .clientId="${this.clientId}"
              .authProviders="${t}"
              @pick-auth-provider="${this._handleAuthProviderPick}"
            ></ha-pick-auth-provider>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(e){if(x(k(n.prototype),"firstUpdated",this).call(this,e),this._fetchAuthProviders(),!this.redirectUri)return;const t=document.createElement("a");t.href=this.redirectUri,t.host===location.host&&Object(b.a)(!1)}},{kind:"method",key:"_fetchAuthProviders",value:async function(){try{const t=await(window.providersPromise||Object(f.a)()),n=await t.json();if(400===t.status&&"onboarding_required"===n.code)return void(location.href="/?");if(0===n.length)return void alert("No auth providers returned. Unable to finish login.");this._authProviders=n,this._authProvider=n[0]}catch(e){console.error("Error loading auth providers",e)}}},{kind:"method",key:"_handleAuthProviderPick",value:async function(e){this._authProvider=e.detail}},{kind:"get",static:!0,key:"styles",value:function(){return r.c`
      ha-pick-auth-provider {
        display: block;
        margin-top: 48px;
      }
    `}}]}},Object(i.a)(r.a));customElements.define("ha-authorize",C),setTimeout(()=>n.e(77).then(n.t.bind(null,336,7)),2e3)}]);
//# sourceMappingURL=authorize.01661796.js.map