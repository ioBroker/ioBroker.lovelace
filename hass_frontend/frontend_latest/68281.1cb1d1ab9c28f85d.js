/*! For license information please see 68281.1cb1d1ab9c28f85d.js.LICENSE.txt */
export const __webpack_ids__=["68281"];export const __webpack_modules__={58795:function(r,e,t){t.d(e,{B:()=>u});var o=t(9065),i=t(15093),a=t(57243),n=t(35359);const c=(0,t(13823).T)(a.oi);class s extends c{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:r}=this;return a.dy` <div class="progress ${(0,n.$)(this.getRenderClasses())}" role="progressbar" aria-label="${r||a.Ld}" aria-valuemin="0" aria-valuemax="${this.max}" aria-valuenow="${this.indeterminate?a.Ld:this.value}">${this.renderIndicator()}</div> `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}(0,o.__decorate)([(0,i.Cb)({type:Number})],s.prototype,"value",void 0),(0,o.__decorate)([(0,i.Cb)({type:Number})],s.prototype,"max",void 0),(0,o.__decorate)([(0,i.Cb)({type:Boolean})],s.prototype,"indeterminate",void 0),(0,o.__decorate)([(0,i.Cb)({type:Boolean,attribute:"four-color"})],s.prototype,"fourColor",void 0);class l extends s{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const r=100*(1-this.value/this.max);return a.dy` <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="${r}"></circle> </svg> `}renderIndeterminateContainer(){return a.dy` <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>`}}const d=a.iv`:host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}`;let u=class extends l{};u.styles=[d],u=(0,o.__decorate)([(0,i.Mo)("md-circular-progress")],u)},75351:function(r,e,t){t.d(e,{Ud:()=>v});t(9359),t(70104),t(48136);const o=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),n=Symbol("Comlink.finalizer"),c=Symbol("Comlink.thrown"),s=r=>"object"==typeof r&&null!==r||"function"==typeof r,l=new Map([["proxy",{canHandle:r=>s(r)&&r[o],serialize(r){const{port1:e,port2:t}=new MessageChannel;return d(r,e),[t,[t]]},deserialize:r=>(r.start(),v(r))}],["throw",{canHandle:r=>s(r)&&c in r,serialize({value:r}){let e;return e=r instanceof Error?{isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:{isError:!1,value:r},[e,[]]},deserialize(r){if(r.isError)throw Object.assign(new Error(r.value.message),r.value);throw r.value}}]]);function d(r,e=globalThis,t=["*"]){e.addEventListener("message",(function i(a){if(!a||!a.data)return;if(!function(r,e){for(const t of r){if(e===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(e))return!0}return!1}(t,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:s,type:l,path:v}=Object.assign({path:[]},a.data),f=(a.data.argumentList||[]).map(w);let p;try{const e=v.slice(0,-1).reduce(((r,e)=>r[e]),r),t=v.reduce(((r,e)=>r[e]),r);switch(l){case"GET":p=t;break;case"SET":e[v.slice(-1)[0]]=w(a.data.value),p=!0;break;case"APPLY":p=t.apply(e,f);break;case"CONSTRUCT":p=function(r){return Object.assign(r,{[o]:!0})}(new t(...f));break;case"ENDPOINT":{const{port1:e,port2:t}=new MessageChannel;d(r,t),p=function(r,e){return y.set(r,e),r}(e,[e])}break;case"RELEASE":p=void 0;break;default:return}}catch(r){p={value:r,[c]:0}}Promise.resolve(p).catch((r=>({value:r,[c]:0}))).then((t=>{const[o,a]=_(t);e.postMessage(Object.assign(Object.assign({},o),{id:s}),a),"RELEASE"===l&&(e.removeEventListener("message",i),u(e),n in r&&"function"==typeof r[n]&&r[n]())})).catch((r=>{const[t,o]=_({value:new TypeError("Unserializable return value"),[c]:0});e.postMessage(Object.assign(Object.assign({},t),{id:s}),o)}))})),e.start&&e.start()}function u(r){(function(r){return"MessagePort"===r.constructor.name})(r)&&r.close()}function v(r,e){const t=new Map;return r.addEventListener("message",(function(r){const{data:e}=r;if(!e||!e.id)return;const o=t.get(e.id);if(o)try{o(e)}finally{t.delete(e.id)}})),h(r,t,[],e)}function f(r){if(r)throw new Error("Proxy has been released and is not useable")}function p(r){return k(r,new Map,{type:"RELEASE"}).then((()=>{u(r)}))}const m=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry((r=>{const e=(m.get(r)||0)-1;m.set(r,e),0===e&&p(r)}));function h(r,e,t=[],o=function(){}){let n=!1;const c=new Proxy(o,{get(o,i){if(f(n),i===a)return()=>{!function(r){g&&g.unregister(r)}(c),p(r),e.clear(),n=!0};if("then"===i){if(0===t.length)return{then:()=>c};const o=k(r,e,{type:"GET",path:t.map((r=>r.toString()))}).then(w);return o.then.bind(o)}return h(r,e,[...t,i])},set(o,i,a){f(n);const[c,s]=_(a);return k(r,e,{type:"SET",path:[...t,i].map((r=>r.toString())),value:c},s).then(w)},apply(o,a,c){f(n);const s=t[t.length-1];if(s===i)return k(r,e,{type:"ENDPOINT"}).then(w);if("bind"===s)return h(r,e,t.slice(0,-1));const[l,d]=b(c);return k(r,e,{type:"APPLY",path:t.map((r=>r.toString())),argumentList:l},d).then(w)},construct(o,i){f(n);const[a,c]=b(i);return k(r,e,{type:"CONSTRUCT",path:t.map((r=>r.toString())),argumentList:a},c).then(w)}});return function(r,e){const t=(m.get(e)||0)+1;m.set(e,t),g&&g.register(r,e,r)}(c,r),c}function b(r){const e=r.map(_);return[e.map((r=>r[0])),(t=e.map((r=>r[1])),Array.prototype.concat.apply([],t))];var t}const y=new WeakMap;function _(r){for(const[e,t]of l)if(t.canHandle(r)){const[o,i]=t.serialize(r);return[{type:"HANDLER",name:e,value:o},i]}return[{type:"RAW",value:r},y.get(r)||[]]}function w(r){switch(r.type){case"HANDLER":return l.get(r.name).deserialize(r.value);case"RAW":return r.value}}function k(r,e,t,o){return new Promise((i=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.set(a,i),r.start&&r.start(),r.postMessage(Object.assign({id:a},t),o)}))}},67064:function(r,e,t){t.d(e,{F:()=>c});var o=t(2841),i=t(45779),a=t(53232);const n=r=>(0,a.dZ)(r)?r._$litType$.h:r.strings,c=(0,i.XM)(class extends i.Xe{constructor(r){super(r),this.tt=new WeakMap}render(r){return[r]}update(r,[e]){const t=(0,a.hN)(this.et)?n(this.et):null,i=(0,a.hN)(e)?n(e):null;if(null!==t&&(null===i||t!==i)){const e=(0,a.i9)(r).pop();let i=this.tt.get(t);if(void 0===i){const r=document.createDocumentFragment();i=(0,o.sY)(o.Ld,r),i.setConnected(!1),this.tt.set(t,i)}(0,a.hl)(i,[e]),(0,a._Y)(i,void 0,e)}if(null!==i){if(null===t||t!==i){const e=this.tt.get(i);if(void 0!==e){const t=(0,a.i9)(e).pop();(0,a.E_)(r),(0,a._Y)(r,void 0,t),(0,a.hl)(r,[t])}}this.et=e}else this.et=void 0;return this.render(e)}})}};
//# sourceMappingURL=68281.1cb1d1ab9c28f85d.js.map