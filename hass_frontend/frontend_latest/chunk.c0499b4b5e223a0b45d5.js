/*! For license information please see chunk.c0499b4b5e223a0b45d5.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[372],{18601:(t,e,s)=>{"use strict";s.d(e,{qN:()=>i.q,Wg:()=>r});var i=s(78220);class r extends i.H{click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(t=>{this.dispatchEvent(new Event("change",t))}))}}r.shadowRootOptions={mode:"open",delegatesFocus:!0}},32333:(t,e,s)=>{"use strict";var i=s(55704);class r extends i.oi{static get properties(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},handleZoom:{type:Number},readonly:{type:Boolean},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0},rtl:{type:Boolean},_scale:{type:Number},valueLabel:{type:String},lowLabel:{type:String},highLabel:{type:String}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.attachedListeners=!1}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(t){const e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let s=1;this._angleInside(270)||(s=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let r=1;this._angleInside(180)||(r=Math.max(-t.x,-e.x));let n=1;return this._angleInside(0)||(n=Math.max(t.x,e.x)),{up:s,down:i,left:r,right:n,height:s+i,width:r+n}}_mouse2value(t){const e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,s=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),r=this._boundaries,n=e-(i.left+r.left*i.width/r.width),o=s-(i.top+r.up*i.height/r.height),a=this._xy2angle(n,o);return this._angle2value(a)}dragStart(t){if(!this._showHandle||this.disabled)return;let e,s=t.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(s.classList.contains("shadowpath"))if("touchstart"===t.type&&(e=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)s=this.shadowRoot.querySelector("#value");else{const e=this._mouse2value(t);s=Math.abs(e-this.low)<Math.abs(e-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(s.classList.contains("overflow")&&(s=s.nextElementSibling),!s.classList.contains("handle"))return;s.setAttribute("stroke-width",2*this.handleSize*this.handleZoom*this._scale);const i="high"===s.id?this.low:this.min,r="low"===s.id?this.high:this.max;this._rotation={handle:s,min:i,max:r,start:this[s.id],type:t.type,cooldown:e},this.dragging=!0}_cleanupRotation(){const t=this._rotation.handle;t.setAttribute("stroke-width",2*this.handleSize*this._scale),this._rotation=!1,this.dragging=!1,t.blur()}dragEnd(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;this._cleanupRotation();let s=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]},bubbles:!0,composed:!0});this.dispatchEvent(s),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.coldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;t.preventDefault();const e=this._mouse2value(t);this._dragpos(e)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let s=new CustomEvent("value-changing",{detail:{[e.id]:t},bubbles:!0,composed:!0});this.dispatchEvent(s)}_keyStep(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),"Home"===t.key&&(t.preventDefault(),this._dragpos(this.min)),"End"===t.key&&(t.preventDefault(),this._dragpos(this.max))}firstUpdated(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1}),document.addEventListener("keydown",this._keyStep.bind(this))}updated(t){if(this.shadowRoot.querySelector(".slider")){const t=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(t&&t.strokeWidth){const e=parseFloat(t.strokeWidth);if(e>this.handleSize*this.handleZoom){const t=this._boundaries,s=`\n          ${e/2*Math.abs(t.up)}px\n          ${e/2*Math.abs(t.right)}px\n          ${e/2*Math.abs(t.down)}px\n          ${e/2*Math.abs(t.left)}px`;this.shadowRoot.querySelector("svg").style.margin=s}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((t=>{if(t.getAttribute("stroke-width"))return;const e=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth=e*this._scale+"px"}));const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=Math.max(e.width,e.height);this._scale=2/s}}_renderArc(t,e){const s=e-t;return t=this._angle2xy(t),e=this._angle2xy(e+.001),`\n      M ${t.x} ${t.y}\n      A 1 1,\n        0,\n        ${s>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${e.x} ${e.y}\n    `}_renderHandle(t){const e=this._value2angle(this[t]),s=this._angle2xy(e),r={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return i.YP`
      <g class="${t} handle">
        <path
          id=${t}
          class="overflow"
          d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${t}
          class="handle"
          d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[t]}
          aria-disabled=${this.disabled}
          aria-label=${r||""}
          />
        </g>
      `}render(){const t=this._boundaries;return i.dy`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />

        </g>

        <g class="handles">
        ${this._showHandle?null!=this.low?this._reverseOrder?i.dy`${this._renderHandle("high")} ${this._renderHandle("low")}`:i.dy`${this._renderHandle("low")} ${this._renderHandle("high")}`:i.dy`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}static get styles(){return i.iv`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `}}customElements.define("round-slider",r)},98626:(t,e,s)=>{"use strict";function i(t){return new Promise(((e,s)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>s(t.error)}))}function r(t,e){const s=indexedDB.open(t);s.onupgradeneeded=()=>s.result.createObjectStore(e);const r=i(s);return(t,s)=>r.then((i=>s(i.transaction(e,t).objectStore(e))))}let n;function o(){return n||(n=r("keyval-store","keyval")),n}function a(t,e=o()){return e("readonly",(e=>i(e.get(t))))}function h(t,e,s=o()){return s("readwrite",(s=>(s.put(e,t),i(s.transaction))))}function l(t=o()){return t("readwrite",(t=>(t.clear(),i(t.transaction))))}s.d(e,{ZH:()=>l,MT:()=>r,U2:()=>a,RV:()=>i,t8:()=>h})},78389:(t,e,s)=>{"use strict";s.d(e,{s:()=>u});var i=s(99602),r=s(55122),n=s(57724);const o=(t,e)=>{var s,i;const r=t.N;if(void 0===r)return!1;for(const t of r)null===(i=(s=t).O)||void 0===i||i.call(s,e,!1),o(t,e);return!0},a=t=>{let e,s;do{if(void 0===(e=t.M))break;s=e.N,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},h=t=>{for(let e;e=t.M;t=e){let s=e.N;if(void 0===s)e.N=s=new Set;else if(s.has(t))break;s.add(t),c(e)}};function l(t){void 0!==this.N?(a(this),this.M=t,h(this)):this.M=t}function d(t,e=!1,s=0){const i=this.H,r=this.N;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)o(i[t],!1),a(i[t]);else null!=i&&(o(i,!1),a(i));else o(this,t)}const c=t=>{var e,s,i,n;t.type==r.pX.CHILD&&(null!==(e=(i=t).P)&&void 0!==e||(i.P=d),null!==(s=(n=t).Q)&&void 0!==s||(n.Q=l))};class u extends r.Xe{constructor(){super(...arguments),this.isConnected=!0,this.ut=i.Jb,this.N=void 0}T(t,e,s){super.T(t,e,s),h(this)}O(t,e=!0){this.at(t),e&&(o(this,t),a(this))}at(t){var e,s;t!==this.isConnected&&(t?(this.isConnected=!0,this.ut!==i.Jb&&(this.setValue(this.ut),this.ut=i.Jb),null===(e=this.reconnected)||void 0===e||e.call(this)):(this.isConnected=!1,null===(s=this.disconnected)||void 0===s||s.call(this)))}S(t,e){if(!this.isConnected)throw Error(`AsyncDirective ${this.constructor.name} was rendered while its tree was disconnected.`);return super.S(t,e)}setValue(t){if(this.isConnected)if((0,n.OR)(this.Σdt))this.Σdt.I(t,this);else{const e=[...this.Σdt.H];e[this.Σct]=t,this.Σdt.I(e,this,0)}else this.ut=t}disconnected(){}reconnected(){}}},57724:(t,e,s)=>{"use strict";s.d(e,{E_:()=>v,i9:()=>g,_Y:()=>l,pt:()=>n,OR:()=>a,hN:()=>o,ws:()=>p,fk:()=>d,hl:()=>u});var i=s(99602);const{et:r}=i.Vm,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,o=(t,e)=>{var s,i;return void 0===e?void 0!==(null===(s=t)||void 0===s?void 0:s._$litType$):(null===(i=t)||void 0===i?void 0:i._$litType$)===e},a=t=>void 0===t.strings,h=()=>document.createComment(""),l=(t,e,s)=>{var i;const n=t.A.parentNode,o=void 0===e?t.B:e.A;if(void 0===s){const e=n.insertBefore(h(),o),i=n.insertBefore(h(),o);s=new r(e,i,t,t.options)}else{const e=s.B.nextSibling,r=s.M!==t;if(r&&(null===(i=s.Q)||void 0===i||i.call(s,t),s.M=t),e!==o||r){let t=s.A;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,o),t=e}}}return s},d=(t,e,s=t)=>(t.I(e,s),t),c={},u=(t,e=c)=>t.H=e,g=t=>t.H,p=t=>{var e;null===(e=t.P)||void 0===e||e.call(t,!1,!0);let s=t.A;const i=t.B.nextSibling;for(;s!==i;){const t=s.nextSibling;s.remove(),s=t}},v=t=>{t.R()}},19967:(t,e,s)=>{"use strict";s.d(e,{Xe:()=>i.Xe,pX:()=>i.pX,XM:()=>i.XM});var i=s(55122)},76666:(t,e,s)=>{"use strict";s.d(e,{$:()=>i.$});var i=s(81471)},82816:(t,e,s)=>{"use strict";s.d(e,{o:()=>i.o});var i=s(49629)},92483:(t,e,s)=>{"use strict";s.d(e,{V:()=>i.V});var i=s(79865)}}]);
//# sourceMappingURL=chunk.c0499b4b5e223a0b45d5.js.map