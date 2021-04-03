/*! For license information please see chunk.e07e2197d40e1848e228.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4378],{18601:(e,t,i)=>{"use strict";i.d(t,{qN:()=>r.q,Wg:()=>n});var r=i(78220);class n extends r.H{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}},32333:(e,t,i)=>{"use strict";var r=i(15652);class n extends r.oi{static get properties(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},handleZoom:{type:Number},readonly:{type:Boolean},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0},rtl:{type:Boolean},_scale:{type:Number},valueLabel:{type:String},lowLabel:{type:String},highLabel:{type:String}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.attachedListeners=!1}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}_angleInside(e){let t=(this.startAngle+this.arcLength/2-e+180+360)%360-180;return t<this.arcLength/2&&t>-this.arcLength/2}_angle2xy(e){return this.rtl?{x:-Math.cos(e),y:Math.sin(e)}:{x:Math.cos(e),y:Math.sin(e)}}_xy2angle(e,t){return this.rtl&&(e=-e),(Math.atan2(t,e)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(e){const t=((e=Math.min(this.max,Math.max(this.min,e)))-this.min)/(this.max-this.min);return this._start+t*this._len}_angle2value(e){return Math.round((e/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const e=this._angle2xy(this._start),t=this._angle2xy(this._end);let i=1;this._angleInside(270)||(i=Math.max(-e.y,-t.y));let r=1;this._angleInside(90)||(r=Math.max(e.y,t.y));let n=1;this._angleInside(180)||(n=Math.max(-e.x,-t.x));let o=1;return this._angleInside(0)||(o=Math.max(e.x,t.x)),{up:i,down:r,left:n,right:o,height:i+r,width:n+o}}_mouse2value(e){const t=e.type.startsWith("touch")?e.touches[0].clientX:e.clientX,i=e.type.startsWith("touch")?e.touches[0].clientY:e.clientY,r=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=this._boundaries,o=t-(r.left+n.left*r.width/n.width),s=i-(r.top+n.up*r.height/n.height),a=this._xy2angle(o,s);return this._angle2value(a)}dragStart(e){if(!this._showHandle||this.disabled)return;let t,i=e.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(i.classList.contains("shadowpath"))if("touchstart"===e.type&&(t=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)i=this.shadowRoot.querySelector("#value");else{const t=this._mouse2value(e);i=Math.abs(t-this.low)<Math.abs(t-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(i.classList.contains("overflow")&&(i=i.nextElementSibling),!i.classList.contains("handle"))return;i.setAttribute("stroke-width",2*this.handleSize*this.handleZoom*this._scale);const r="high"===i.id?this.low:this.min,n="low"===i.id?this.high:this.max;this._rotation={handle:i,min:r,max:n,start:this[i.id],type:e.type,cooldown:t},this.dragging=!0}_cleanupRotation(){const e=this._rotation.handle;e.setAttribute("stroke-width",2*this.handleSize*this._scale),this._rotation=!1,this.dragging=!1,e.blur()}dragEnd(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const t=this._rotation.handle;this._cleanupRotation();let i=new CustomEvent("value-changed",{detail:{[t.id]:this[t.id]},bubbles:!0,composed:!0});this.dispatchEvent(i),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.coldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;e.preventDefault();const t=this._mouse2value(e);this._dragpos(t)}_dragpos(e){if(e<this._rotation.min||e>this._rotation.max)return;const t=this._rotation.handle;this[t.id]=e;let i=new CustomEvent("value-changing",{detail:{[t.id]:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}_keyStep(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const t=this._rotation.handle;"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.rtl?this._dragpos(this[t.id]+this.step):this._dragpos(this[t.id]-this.step)),"ArrowRight"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.rtl?this._dragpos(this[t.id]-this.step):this._dragpos(this[t.id]+this.step)),"Home"===e.key&&(e.preventDefault(),this._dragpos(this.min)),"End"===e.key&&(e.preventDefault(),this._dragpos(this.max))}firstUpdated(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1}),document.addEventListener("keydown",this._keyStep.bind(this))}updated(e){if(this.shadowRoot.querySelector(".slider")){const e=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(e&&e.strokeWidth){const t=parseFloat(e.strokeWidth);if(t>this.handleSize*this.handleZoom){const e=this._boundaries,i=`\n          ${t/2*Math.abs(e.up)}px\n          ${t/2*Math.abs(e.right)}px\n          ${t/2*Math.abs(e.down)}px\n          ${t/2*Math.abs(e.left)}px`;this.shadowRoot.querySelector("svg").style.margin=i}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){e.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((e=>{if(e.getAttribute("stroke-width"))return;const t=parseFloat(getComputedStyle(e).getPropertyValue("stroke-width"));e.style.strokeWidth=t*this._scale+"px"}));const t=this.shadowRoot.querySelector("svg").getBoundingClientRect(),i=Math.max(t.width,t.height);this._scale=2/i}}_renderArc(e,t){const i=t-e;return e=this._angle2xy(e),t=this._angle2xy(t+.001),`\n      M ${e.x} ${e.y}\n      A 1 1,\n        0,\n        ${i>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${t.x} ${t.y}\n    `}_renderHandle(e){const t=this._value2angle(this[e]),i=this._angle2xy(t),n={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[e]||"";return r.YP`
      <g class="${e} handle">
        <path
          id=${e}
          class="overflow"
          d="
          M ${i.x} ${i.y}
          L ${i.x+.001} ${i.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${e}
          class="handle"
          d="
          M ${i.x} ${i.y}
          L ${i.x+.001} ${i.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[e]}
          aria-disabled=${this.disabled}
          aria-label=${n||""}
          />
        </g>
      `}render(){const e=this._boundaries;return r.dy`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-e.left} ${-e.up} ${e.width} ${e.height}"
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
        ${this._showHandle?null!=this.low?this._reverseOrder?r.dy`${this._renderHandle("high")} ${this._renderHandle("low")}`:r.dy`${this._renderHandle("low")} ${this._renderHandle("high")}`:r.dy`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}static get styles(){return r.iv`
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
    `}}customElements.define("round-slider",n)},60461:e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(i){!t.hasOwnProperty(i)||null===t[i]||"object"!=typeof t[i]&&"function"!=typeof t[i]||Object.isFrozen(t[i])||e(t[i])})),t}},58993:(e,t,i)=>{"use strict";i.d(t,{yh:()=>r,U2:()=>s,t8:()=>a,ZH:()=>l});class r{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise(((i,r)=>{const n=indexedDB.open(e,1);n.onerror=()=>r(n.error),n.onsuccess=()=>i(n.result),n.onupgradeneeded=()=>{n.result.createObjectStore(t)}}))}_withIDBStore(e,t){return this._dbp.then((i=>new Promise(((r,n)=>{const o=i.transaction(this.storeName,e);o.oncomplete=()=>r(),o.onabort=o.onerror=()=>n(o.error),t(o.objectStore(this.storeName))}))))}}let n;function o(){return n||(n=new r),n}function s(e,t=o()){let i;return t._withIDBStore("readonly",(t=>{i=t.get(e)})).then((()=>i.result))}function a(e,t,i=o()){return i._withIDBStore("readwrite",(i=>{i.put(t,e)}))}function l(e=o()){return e._withIDBStore("readwrite",(e=>{e.clear()}))}},7323:(e,t,i)=>{"use strict";i.d(t,{p:()=>r});const r=(e,t)=>e&&e.config.components.includes(t)},49706:(e,t,i)=>{"use strict";i.d(t,{Rb:()=>r,Zy:()=>n,h2:()=>o,PS:()=>s,l:()=>a,ht:()=>l,f0:()=>c,tj:()=>d,uo:()=>h,lC:()=>u,Kk:()=>p,iY:()=>f,ot:()=>m,gD:()=>v,a1:()=>y,AZ:()=>g});const r="hass:bookmark",n={alert:"hass:alert",alexa:"hass:amazon-alexa",air_quality:"hass:air-filter",automation:"hass:robot",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:cog",conversation:"hass:text-to-speech",counter:"hass:counter",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:toggle-switch-outline",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:form-textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",number:"hass:ray-vertex",persistent_notification:"hass:bell",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:palette",script:"hass:script-text",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer-outline",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",zone:"hass:map-marker-radius"},o={current:"hass:current-ac",carbon_dioxide:"mdi:molecule-co2",carbon_monoxide:"mdi:molecule-co",energy:"hass:flash",humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",power_factor:"hass:angle-acute",signal_strength:"hass:wifi",timestamp:"hass:clock",voltage:"hass:sine-wave"},s=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","number","scene","script","timer","vacuum","water_heater"],a=["alarm_control_panel","automation","camera","climate","configurator","counter","cover","fan","group","humidifier","input_datetime","light","lock","media_player","person","remote","script","sun","timer","vacuum","water_heater","weather"],l=["input_number","input_select","input_text","number","scene"],c=["camera","configurator","scene"],d=["closed","locked","off"],h="on",u="off",p=new Set(["fan","input_boolean","light","switch","group","automation","humidifier"]),f=new Set(["camera","media_player"]),m="°C",v="°F",y="group.default_view",g=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"]},69470:(e,t,i)=>{"use strict";i.d(t,{j:()=>n,fs:()=>o,$y:()=>s});const r=(e,t,i)=>new Promise(((r,n)=>{const o=document.createElement(e);let s="src",a="body";switch(o.onload=()=>r(t),o.onerror=()=>n(t),e){case"script":o.async=!0,i&&(o.type=i);break;case"link":o.type="text/css",o.rel="stylesheet",s="href",a="head"}o[s]=t,document[a].appendChild(o)})),n=e=>r("link",e),o=e=>r("script",e),s=e=>r("script",e,"module")},86977:(e,t,i)=>{"use strict";i.d(t,{Q:()=>r});const r=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},85415:(e,t,i)=>{"use strict";i.d(t,{q:()=>r,w:()=>n});const r=(e,t)=>e<t?-1:e>t?1:0,n=(e,t)=>r(e.toLowerCase(),t.toLowerCase())},15493:(e,t,i)=>{"use strict";i.d(t,{Q2:()=>r,io:()=>n,ou:()=>o,j4:()=>s,pc:()=>a});const r=()=>{const e={},t=new URLSearchParams(location.search);for(const[i,r]of t.entries())e[i]=r;return e},n=e=>new URLSearchParams(window.location.search).get(e),o=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,i])=>{t.append(e,i)})),t.toString()},s=e=>{const t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,i])=>{t.set(e,i)})),t.toString()},a=e=>{const t=new URLSearchParams(window.location.search);return t.delete(e),t.toString()}},81545:(e,t,i)=>{"use strict";i(33300);var r=i(15652);function n(){n=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!a(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=d(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function o(e){var t,i=d(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var c=n();if(r)for(var d=0;d<r.length;d++)c=r[d](c);var h=t((function(e){c.initializeInstanceElements(e,u.elements)}),i),u=c.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(l(o.descriptor)||l(n.descriptor)){if(a(o)||a(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(a(o)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(h.d.map(o)),e);c.initializeClassElements(h.F,u.elements),c.runClassFinishers(h.F,u.finishers)}([(0,r.Mo)("ha-button-menu")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"corner",value:()=>"TOP_START"},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"render",value:function(){return r.dy`
      <div @click=${this._handleClick}>
        <slot name="trigger"></slot>
      </div>
      <mwc-menu
        .corner=${this.corner}
        .multi=${this.multi}
        .activatable=${this.activatable}
      >
        <slot></slot>
      </mwc-menu>
    `}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
    `}}]}}),r.oi)},46167:(e,t,i)=>{"use strict";i(87482);var r=i(15652);function n(){n=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!a(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=d(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function o(e){var t,i=d(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function u(e,t,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const f=customElements.get("paper-tabs");let m;!function(e,t,i,r){var c=n();if(r)for(var d=0;d<r.length;d++)c=r[d](c);var h=t((function(e){c.initializeInstanceElements(e,u.elements)}),i),u=c.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(l(o.descriptor)||l(n.descriptor)){if(a(o)||a(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(a(o)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(h.d.map(o)),e);c.initializeClassElements(h.F,u.elements),c.runClassFinishers(h.F,u.finishers)}([(0,r.Mo)("ha-tabs")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"_firstTabWidth",value:()=>0},{kind:"field",key:"_lastTabWidth",value:()=>0},{kind:"field",key:"_lastLeftHiddenState",value:()=>!1},{kind:"get",static:!0,key:"template",value:function(){if(!m){m=f.template.cloneNode(!0);const e=m.content.querySelector("style");m.content.querySelectorAll("paper-icon-button").forEach((e=>{e.setAttribute("noink","")})),e.appendChild(document.createTextNode("\n          #selectionBar {\n            box-sizing: border-box;\n          }\n          .not-visible {\n            display: none;\n          }\n          paper-icon-button {\n            width: 24px;\n            height: 48px;\n            padding: 0;\n            margin: 0;\n          }\n        "))}return m}},{kind:"method",key:"_tabChanged",value:function(e,t){u(p(i.prototype),"_tabChanged",this).call(this,e,t);const r=this.querySelectorAll("paper-tab:not(.hide-tab)");r.length>0&&(this._firstTabWidth=r[0].clientWidth,this._lastTabWidth=r[r.length-1].clientWidth);const n=this.querySelector(".iron-selected");n&&n.scrollIntoView()}},{kind:"method",key:"_affectScroll",value:function(e){if(0===this._firstTabWidth||0===this._lastTabWidth)return;this.$.tabsContainer.scrollLeft+=e;const t=this.$.tabsContainer.scrollLeft;this._leftHidden=t-this._firstTabWidth<0,this._rightHidden=t+this._lastTabWidth>this._tabContainerScrollSize,this._lastLeftHiddenState!==this._leftHidden&&(this._lastLeftHiddenState=this._leftHidden,this.$.tabsContainer.scrollLeft+=this._leftHidden?-23:23)}}]}}),f)},57066:(e,t,i)=>{"use strict";i.d(t,{Lo:()=>s,IO:()=>a,qv:()=>l,sG:()=>h});var r=i(95282),n=i(85415),o=i(38346);const s=(e,t)=>e.callWS({type:"config/area_registry/create",...t}),a=(e,t,i)=>e.callWS({type:"config/area_registry/update",area_id:t,...i}),l=(e,t)=>e.callWS({type:"config/area_registry/delete",area_id:t}),c=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,t)=>(0,n.q)(e.name,t.name))))),d=(e,t)=>e.subscribeEvents((0,o.D)((()=>c(e).then((e=>t.setState(e,!0)))),500,!0),"area_registry_updated"),h=(e,t)=>(0,r.B)("_areaRegistry",c,d,e,t)},57292:(e,t,i)=>{"use strict";i.d(t,{jL:()=>s,y_:()=>a,t1:()=>l,q4:()=>h});var r=i(95282),n=i(91741),o=i(38346);const s=(e,t,i)=>e.name_by_user||e.name||i&&((e,t)=>{for(const i of t||[]){const t="string"==typeof i?i:i.entity_id,r=e.states[t];if(r)return(0,n.C)(r)}})(t,i)||t.localize("ui.panel.config.devices.unnamed_device"),a=(e,t)=>e.filter((e=>e.area_id===t)),l=(e,t,i)=>e.callWS({type:"config/device_registry/update",device_id:t,...i}),c=e=>e.sendMessagePromise({type:"config/device_registry/list"}),d=(e,t)=>e.subscribeEvents((0,o.D)((()=>c(e).then((e=>t.setState(e,!0)))),500,!0),"device_registry_updated"),h=(e,t)=>(0,r.B)("_dr",c,d,e,t)},74186:(e,t,i)=>{"use strict";i.d(t,{eD:()=>s,Mw:()=>a,vA:()=>l,L3:()=>c,Nv:()=>d,z3:()=>h,LM:()=>f});var r=i(95282),n=i(91741),o=i(38346);const s=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class)),a=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),l=(e,t)=>{if(t.name)return t.name;const i=e.states[t.entity_id];return i?(0,n.C)(i):null},c=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),d=(e,t,i)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...i}),h=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),u=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),p=(e,t)=>e.subscribeEvents((0,o.D)((()=>u(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),f=(e,t)=>(0,r.B)("_entityRegistry",u,p,e,t)},15327:(e,t,i)=>{"use strict";i.d(t,{eL:()=>r,SN:()=>n,id:()=>o,fg:()=>s,j2:()=>a,JR:()=>l,Y:()=>c,iM:()=>d,Q2:()=>h,Oh:()=>u,vj:()=>p,Gc:()=>f});const r=e=>e.sendMessagePromise({type:"lovelace/resources"}),n=(e,t)=>e.callWS({type:"lovelace/resources/create",...t}),o=(e,t,i)=>e.callWS({type:"lovelace/resources/update",resource_id:t,...i}),s=(e,t)=>e.callWS({type:"lovelace/resources/delete",resource_id:t}),a=e=>e.callWS({type:"lovelace/dashboards/list"}),l=(e,t)=>e.callWS({type:"lovelace/dashboards/create",...t}),c=(e,t,i)=>e.callWS({type:"lovelace/dashboards/update",dashboard_id:t,...i}),d=(e,t)=>e.callWS({type:"lovelace/dashboards/delete",dashboard_id:t}),h=(e,t,i)=>e.sendMessagePromise({type:"lovelace/config",url_path:t,force:i}),u=(e,t,i)=>e.callWS({type:"lovelace/config/save",url_path:t,config:i}),p=(e,t)=>e.callWS({type:"lovelace/config/delete",url_path:t}),f=(e,t,i)=>e.subscribeEvents((e=>{e.data.url_path===t&&i()}),"lovelace_updated")},9893:(e,t,i)=>{"use strict";i.d(t,{Qo:()=>r,kb:()=>o,cs:()=>s});const r="custom:",n=window;"customCards"in n||(n.customCards=[]);const o=n.customCards,s=e=>o.find((t=>t.type===e))},51444:(e,t,i)=>{"use strict";i.d(t,{_:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(5009),i.e(9462),i.e(2420)]).then(i.bind(i,72420)),o=e=>{(0,r.B)(e,"show-dialog",{dialogTag:"ha-voice-command-dialog",dialogImport:n,dialogParams:{}})}},27849:(e,t,i)=>{"use strict";i(39841);var r=i(50856);i(28426);class n extends(customElements.get("app-header-layout")){static get template(){return r.d`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
          margin-left: env(safe-area-inset-left);
          margin-right: env(safe-area-inset-right);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `}}customElements.define("ha-app-layout",n)},68500:(e,t,i)=>{"use strict";i.d(t,{k:()=>s});var r=i(69470);const n={},o={},s=(e,t)=>e.forEach((e=>{const i=new URL(e.url,t).toString();switch(e.type){case"css":if(i in n)break;n[i]=(0,r.j)(i);break;case"js":if(i in o)break;o[i]=(0,r.fs)(i);break;case"module":(0,r.$y)(i);break;default:console.warn(`Unknown resource type specified: ${e.type}`)}}))},89172:(e,t,i)=>{"use strict";i.d(t,{J:()=>b});var r=i(15652),n=i(49629),o=(i(6315),i(93491)),s=i(22503),a=i(22193);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!h(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=l();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(u(o.descriptor)||u(n.descriptor)){if(h(o)||h(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(h(o)){if(h(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}d(o,n)}else t.push(o)}return t}(s.d.map(c)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,r.Mo)("hui-state-label-badge")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return r.dy``;const e=this.hass.states[this._config.entity];return r.dy`
      <ha-state-label-badge
        .hass=${this.hass}
        .state=${e}
        .name=${this._config.name}
        .icon=${this._config.icon}
        .image=${this._config.image}
        @action=${this._handleAction}
        .actionHandler=${(0,o.K)({hasHold:(0,a._)(this._config.hold_action),hasDoubleClick:(0,a._)(this._config.double_tap_action)})}
        tabindex=${(0,n.o)((0,a._)(this._config.tap_action)||this._config.entity?"0":void 0)}
      ></ha-state-label-badge>
    `}},{kind:"method",key:"_handleAction",value:function(e){(0,s.G)(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-state-label-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 4px;
      }
      ha-state-label-badge {
        display: inline-block;
        padding: 4px 2px 4px 2px;
        margin: -4px -2px -4px -2px;
      }
    `}}]}}),r.oi);var v=i(7778);const y=new Set(["error","state-label"]),g={"entity-filter":()=>i.e(8045).then(i.bind(i,68045))},b=e=>(0,v.Tw)("badge",e,y,g,void 0,"state-label")},7778:(e,t,i)=>{"use strict";i.d(t,{N2:()=>o,Tw:()=>c,Xm:()=>d,ED:()=>h});var r=i(47181),n=i(9893);const o=(e,t)=>({type:"error",error:e,origConfig:t}),s=(e,t)=>{const i=document.createElement(e);return i.setConfig(t),i},a=(e,t)=>(e=>{const t=document.createElement("hui-error-card");return customElements.get("hui-error-card")?t.setConfig(e):(Promise.all([i.e(9033),i.e(3304),i.e(5796)]).then(i.bind(i,55796)),customElements.whenDefined("hui-error-card").then((()=>{customElements.upgrade(t),t.setConfig(e)}))),t})(o(e,t)),l=e=>e.startsWith(n.Qo)?e.substr(n.Qo.length):void 0,c=(e,t,i,r,n,o)=>{try{return d(e,t,i,r,n,o)}catch(i){return console.error(e,t.type,i),a(i.message,t)}},d=(e,t,i,n,o,c)=>{if(!t||"object"!=typeof t)throw new Error("Config is not an object");if(!(t.type||c||o&&"entity"in t))throw new Error("No card type configured");const d=t.type?l(t.type):void 0;if(d)return((e,t)=>{if(customElements.get(e))return s(e,t);const i=a(`Custom element doesn't exist: ${e}.`,t);if(!e.includes("-"))return i;i.style.display="None";const n=window.setTimeout((()=>{i.style.display=""}),2e3);return customElements.whenDefined(e).then((()=>{clearTimeout(n),(0,r.B)(i,"ll-rebuild")})),i})(d,t);let h;if(o&&!t.type&&t.entity){h=`${o[t.entity.split(".",1)[0]]||o._domain_not_found}-entity`}else h=t.type||c;if(void 0===h)throw new Error("No type specified");const u=`hui-${h}-${e}`;if(n&&h in n)return n[h](),((e,t)=>{if(customElements.get(e))return s(e,t);const i=document.createElement(e);return customElements.whenDefined(e).then((()=>{try{customElements.upgrade(i),i.setConfig(t)}catch(e){(0,r.B)(i,"ll-rebuild")}})),i})(u,t);if(i&&i.has(h))return s(u,t);throw new Error(`Unknown type encountered: ${h}`)},h=async(e,t,i,r)=>{const n=l(e);if(n){const e=customElements.get(n);if(e)return e;if(!n.includes("-"))throw new Error(`Custom element not found: ${n}`);return new Promise(((e,t)=>{setTimeout((()=>t(new Error(`Custom element not found: ${n}`))),2e3),customElements.whenDefined(n).then((()=>e(customElements.get(n))))}))}const o=`hui-${e}-${t}`,s=customElements.get(o);if(i&&i.has(e))return s;if(r&&e in r)return s||r[e]().then((()=>customElements.get(o)));throw new Error(`Unknown type: ${e}`)}},37482:(e,t,i)=>{"use strict";i.d(t,{m:()=>a,T:()=>l});i(12141),i(31479),i(23266),i(65716),i(97600),i(83896),i(65593),i(56427),i(23658);var r=i(7778);const n=new Set(["media-player-entity","scene-entity","script-entity","sensor-entity","text-entity","toggle-entity","button","call-service"]),o={"climate-entity":()=>i.e(5642).then(i.bind(i,35642)),"cover-entity":()=>Promise.all([i.e(9448),i.e(6755)]).then(i.bind(i,16755)),"group-entity":()=>i.e(1534).then(i.bind(i,81534)),"humidifier-entity":()=>i.e(1102).then(i.bind(i,41102)),"input-datetime-entity":()=>Promise.all([i.e(5009),i.e(2955),i.e(8161),i.e(9543),i.e(7078),i.e(8559)]).then(i.bind(i,22350)),"input-number-entity":()=>i.e(2335).then(i.bind(i,12335)),"input-select-entity":()=>Promise.all([i.e(5009),i.e(2955),i.e(8161),i.e(1644),i.e(5675)]).then(i.bind(i,25675)),"input-text-entity":()=>i.e(3943).then(i.bind(i,73943)),"lock-entity":()=>i.e(1596).then(i.bind(i,61596)),"number-entity":()=>i.e(6778).then(i.bind(i,66778)),"timer-entity":()=>i.e(1203).then(i.bind(i,31203)),conditional:()=>i.e(7749).then(i.bind(i,97749)),"weather-entity":()=>i.e(1850).then(i.bind(i,71850)),divider:()=>i.e(1930).then(i.bind(i,41930)),section:()=>i.e(4832).then(i.bind(i,94832)),weblink:()=>i.e(4689).then(i.bind(i,44689)),cast:()=>i.e(5840).then(i.bind(i,25840)),buttons:()=>i.e(2137).then(i.bind(i,82137)),attribute:()=>Promise.resolve().then(i.bind(i,65593)),text:()=>i.e(3459).then(i.bind(i,63459))},s={_domain_not_found:"text",alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",humidifier:"humidifier",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",number:"number",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime",weather:"weather"},a=e=>(0,r.Tw)("row",e,n,o,s,void 0),l=e=>(0,r.ED)(e,"row",n,o)},62765:(e,t,i)=>{"use strict";i.d(t,{K:()=>n,k:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(5009),i.e(6076),i.e(5050)]).then(i.bind(i,95050)),o=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"hui-dialog-delete-card",dialogImport:n,dialogParams:t})}},18678:(e,t,i)=>{"use strict";i.d(t,{I:()=>n,x:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(5009),i.e(2955),i.e(8161),i.e(9543),i.e(8374),i.e(5906),i.e(9494),i.e(3098),i.e(9033),i.e(3304),i.e(6087),i.e(6133),i.e(6321),i.e(4507),i.e(6966),i.e(4535),i.e(8101),i.e(6902),i.e(8331),i.e(3902),i.e(167),i.e(2231),i.e(7970)]).then(i.bind(i,90705)),o=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"hui-dialog-edit-card",dialogImport:n,dialogParams:t})}},3887:(e,t,i)=>{"use strict";i.r(t);i(53918);var r=i(60461),n=i.n(r),o=i(15652),s=i(5986),a=i(15327),l=(i(48811),i(15291),i(81796)),c=i(77760),d=i(68500),h=i(47181);const u="show-save-config";let p=!1;i(81689);var f=i(55317);i(53268),i(85530);(0,i(28393).VA)("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}});i(12730),i(91441),i(87482);var m=i(81471),v=i(14516),y=i(7323);var g=i(86977),b=i(83849),w=i(15493);const k=e=>{const t=window.location.pathname;return e?t+"?"+e:t};var _=i(87744),E=i(38346),C=i(96151);i(81545),i(16509),i(25230),i(52039);function x(){x=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!S(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=T(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function P(e){var t,i=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function $(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function D(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function T(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function O(e,t,i){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,i,r){var n=x();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(D(o.descriptor)||D(n.descriptor)){if(S(o)||S(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(S(o)){if(S(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}$(o,n)}else t.push(o)}return t}(s.d.map(P)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("ha-icon-button-arrow-next")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_icon",value:()=>f.aIO},{kind:"method",key:"connectedCallback",value:function(){O(j(i.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?f.aIO:f.J3k}),100)}},{kind:"method",key:"render",value:function(){var e;return o.dy`<mwc-icon-button
      .disabled=${this.disabled}
      .label=${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.next"))||"Next"}
    >
      <ha-svg-icon .path=${this._icon}></ha-svg-icon>
    </mwc-icon-button> `}}]}}),o.oi);i(2315),i(48932),i(46167);var M=i(26765),R=i(51444),I=(i(27849),i(11654)),F=i(27322),L=i(54324);let B=!1;const N="show-edit-lovelace",U=(e,t)=>{B||(B=!0,(e=>{(0,h.B)(e,"register-dialog",{dialogShowEvent:N,dialogTag:"hui-dialog-edit-lovelace",dialogImport:()=>Promise.all([i.e(5009),i.e(1199),i.e(4764)]).then(i.bind(i,74764))})})(e)),(0,h.B)(e,N,t)};let V=!1;const q="show-edit-view",W=(e,t)=>{V||(V=!0,(e=>{(0,h.B)(e,"register-dialog",{dialogShowEvent:q,dialogTag:"hui-dialog-edit-view",dialogImport:()=>Promise.all([i.e(5009),i.e(2955),i.e(9543),i.e(8374),i.e(5906),i.e(3098),i.e(6087),i.e(4535),i.e(6902),i.e(7979)]).then(i.bind(i,18632))})})(e)),(0,h.B)(e,q,t)};var H=i(62877),Q=(i(6315),i(90271)),Z=i(89172),X=i(51153),Y=i(50467);function J(){J=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ee(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ne(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=re(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ie(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=ie(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function G(e){var t,i=re(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function K(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ee(e){return e.decorators&&e.decorators.length}function te(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ie(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function re(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function oe(e,t,i){return(oe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=se(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let ae=!1;const le=(e,t)=>{let i=0;for(let t=0;t<e.length;t++){if(e[t]<5){i=t;break}e[t]<e[i]&&(i=t)}return e[i]+=t,i};let ce=function(e,t,i,r){var n=J();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(te(o.descriptor)||te(n.descriptor)){if(ee(o)||ee(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ee(o)){if(ee(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}K(o,n)}else t.push(o)}return t}(s.d.map(G)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}(null,(function(e,t){class r extends t{constructor(){super(),e(this),this.addEventListener("iron-resize",(e=>e.stopPropagation()))}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"cards",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"badges",value:()=>[]},{kind:"field",decorators:[(0,o.sz)()],key:"_columns",value:void 0},{kind:"field",key:"_createColumnsIteration",value:()=>0},{kind:"field",key:"_mqls",value:void 0},{kind:"method",key:"setConfig",value:function(e){}},{kind:"method",key:"render",value:function(){var e;return o.dy`
      <div
        id="badges"
        style=${this.badges.length>0?"display: block":"display: none"}
      >
        ${this.badges.map((e=>o.dy`${e}`))}
      </div>
      <div id="columns"></div>
      ${(null===(e=this.lovelace)||void 0===e?void 0:e.editMode)?o.dy`
            <ha-fab
              .label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}
              extended
              @click=${this._addCard}
              class=${(0,m.$)({rtl:(0,_.HE)(this.hass)})}
            >
              <ha-svg-icon slot="icon" .path=${f.qX5}></ha-svg-icon>
            </ha-fab>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._mqls=[300,600,900,1200].map((e=>{const t=window.matchMedia(`(min-width: ${e}px)`);return t.addListener((()=>this._updateColumns())),t})),this._updateColumns()}},{kind:"method",key:"updated",value:function(e){var t,n,o;if(oe(se(r.prototype),"updated",this).call(this,e),(null===(t=this.lovelace)||void 0===t?void 0:t.editMode)&&!ae&&(ae=!0,Promise.all([i.e(9119),i.e(741)]).then(i.bind(i,70741))),e.has("hass")){const t=e.get("hass");if(t&&this.hass.dockedSidebar!==t.dockedSidebar&&this._updateColumns(),1===e.size)return}e.has("narrow")&&this._updateColumns();const s=e.get("lovelace");(e.has("lovelace")&&((null==s?void 0:s.config)!==(null===(n=this.lovelace)||void 0===n?void 0:n.config)||(null==s?void 0:s.editMode)!==(null===(o=this.lovelace)||void 0===o?void 0:o.editMode))||e.has("_columns"))&&this._createColumns()}},{kind:"method",key:"_addCard",value:function(){(0,h.B)(this,"ll-create-card")}},{kind:"method",key:"_createColumns",value:async function(){if(!this._columns)return;this._createColumnsIteration++;const e=this._createColumnsIteration,t=this.shadowRoot.getElementById("columns");for(;t.lastChild;)t.removeChild(t.lastChild);const i=[],r=[];for(let e=0;e<Math.min(this._columns,this.cards.length);e++){const e=document.createElement("div");e.classList.add("column"),t.appendChild(e),i.push(0),r.push(e)}let n,o;for(const[t,s]of this.cards.entries()){let a;void 0===n&&(n=(0,C.y)().then((()=>{n=void 0,o=void 0}))),void 0===o?o=new Date:(new Date).getTime()-o.getTime()>16&&(a=n);const l=(0,Y.N)(s),[c]=await Promise.all([l,a]);if(e!==this._createColumnsIteration)return;this._addCardToColumn(r[le(i,c)],t,this.lovelace.editMode)}r.forEach((e=>{e.lastChild||e.parentElement.removeChild(e)}))}},{kind:"method",key:"_addCardToColumn",value:function(e,t,i){const r=this.cards[t];if(i){const i=document.createElement("hui-card-options");i.hass=this.hass,i.lovelace=this.lovelace,i.path=[this.index,t],r.editMode=!0,i.appendChild(r),e.appendChild(i)}else r.editMode=!1,e.appendChild(r)}},{kind:"method",key:"_updateColumns",value:function(){if(!this._mqls)return;const e=this._mqls.reduce(((e,t)=>e+Number(t.matches)),0);this._columns=Math.max(1,e-Number(!this.narrow&&"docked"===this.hass.dockedSidebar))}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
      :host {
        display: block;
        padding-top: 4px;
        height: 100%;
        box-sizing: border-box;
      }

      #badges {
        margin: 8px 16px;
        font-size: 85%;
        text-align: center;
      }

      #columns {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 4px;
        margin-right: 4px;
      }

      .column {
        flex: 1 0 0;
        max-width: 500px;
        min-width: 0;
      }

      .column > * {
        display: block;
        margin: var(--masonry-view-card-margin, 4px 4px 8px);
      }

      ha-fab {
        position: sticky;
        float: right;
        right: calc(16px + env(safe-area-inset-right));
        bottom: calc(16px + env(safe-area-inset-bottom));
        z-index: 1;
      }

      ha-fab.rtl {
        float: left;
        right: auto;
        left: calc(16px + env(safe-area-inset-left));
      }

      @media (max-width: 500px) {
        .column > * {
          margin-left: 0;
          margin-right: 0;
        }
      }

      @media (max-width: 599px) {
        .column {
          max-width: 600px;
        }
      }
    `}}]}}),o.oi);customElements.define("hui-masonry-view",ce);var de=i(7778);const he=new Set(["masonry"]),ue={panel:()=>i.e(8480).then(i.bind(i,48480))};var pe=i(97504),fe=i(18678);var me=i(62765);async function ve(e,t,i,r){const n=i.config.views[r[0]].cards[r[1]];(0,me.k)(e,{cardConfig:n,deleteCard:async()=>{try{const o=(0,L.f1)(i.config,r);await i.saveConfig(o);((e,t,i)=>{const r={message:t.localize("ui.common.successfully_deleted")};i&&(r.action={action:i,text:t.localize("ui.common.undo")}),(0,l.C)(e,r)})(e,t,(async()=>{await i.saveConfig((0,L.qD)(o,r,n))}))}catch(t){(0,M.Ys)(e,{text:`Deleting failed: ${t.message}`})}}})}function ye(){ye=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!we(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Ce(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Ce(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=Ee(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_e(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=_e(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function ge(e){var t,i=Ee(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function be(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function we(e){return e.decorators&&e.decorators.length}function ke(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _e(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function Ee(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function xe(e,t,i){return(xe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Pe(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,i,r){var n=ye();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(ke(o.descriptor)||ke(n.descriptor)){if(we(o)||we(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(we(o)){if(we(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}be(o,n)}else t.push(o)}return t}(s.d.map(ge)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("hui-view")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_cards",value:()=>[]},{kind:"field",decorators:[(0,o.sz)()],key:"_badges",value:()=>[]},{kind:"field",key:"_layoutElementType",value:void 0},{kind:"field",key:"_layoutElement",value:void 0},{kind:"method",key:"createCardElement",value:function(e){const t=(0,X.Z6)(e);return t.hass=this.hass,t.addEventListener("ll-rebuild",(i=>{this.lovelace.editMode||(i.stopPropagation(),this._rebuildCard(t,e))}),{once:!0}),t}},{kind:"method",key:"createBadgeElement",value:function(e){const t=(0,Z.J)(e);return t.hass=this.hass,t.addEventListener("ll-badge-rebuild",(()=>{this._rebuildBadge(t,e)}),{once:!0}),t}},{kind:"method",key:"updated",value:function(e){xe(Pe(i.prototype),"updated",this).call(this,e);const t=this.hass,r=this.lovelace,n=e.has("hass"),o=e.get("lovelace");let s,a=!1,l=!1;e.has("index")?l=!0:e.has("lovelace")&&(a=o&&r.editMode!==o.editMode,l=!o||r.config!==o.config),l&&(s=r.config.views[this.index],s={...s,type:s.panel?"panel":s.type||"masonry"});let c=!1;var d;!l||this._layoutElement&&this._layoutElementType===s.type||(c=!0,this._layoutElement=(d=s,(0,de.Tw)("view",d,he,ue)),this._layoutElementType=s.type,this._layoutElement.addEventListener("ll-create-card",(()=>{(0,pe.F)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:[this.index]})})),this._layoutElement.addEventListener("ll-edit-card",(e=>{(0,fe.x)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:e.detail.path})})),this._layoutElement.addEventListener("ll-delete-card",(e=>{ve(this,this.hass,this.lovelace,e.detail.path)}))),l&&(this._createBadges(s),this._createCards(s),this._layoutElement.hass=this.hass,this._layoutElement.narrow=this.narrow,this._layoutElement.lovelace=r,this._layoutElement.index=this.index),n&&(this._badges.forEach((e=>{e.hass=t})),this._cards.forEach((e=>{e.hass=t})),this._layoutElement.hass=this.hass),e.has("narrow")&&(this._layoutElement.narrow=this.narrow),a&&(this._layoutElement.lovelace=r),(l||n||a||e.has("_cards")||e.has("_badges"))&&(this._layoutElement.cards=this._cards,this._layoutElement.badges=this._badges);const h=e.get("hass");if((l||a||n&&h&&(t.themes!==h.themes||t.selectedTheme!==h.selectedTheme))&&(0,H.R)(this,t.themes,r.config.views[this.index].theme),this._layoutElement&&c){for(;this.lastChild;)this.removeChild(this.lastChild);this.appendChild(this._layoutElement)}}},{kind:"method",key:"_createBadges",value:function(e){if(!e||!e.badges||!Array.isArray(e.badges))return void(this._badges=[]);const t=(0,Q.A)(e.badges);this._badges=t.map((e=>{const t=(0,Z.J)(e);return t.hass=this.hass,t}))}},{kind:"method",key:"_createCards",value:function(e){e&&e.cards&&Array.isArray(e.cards)?this._cards=e.cards.map((e=>{const t=this.createCardElement(e);return t.hass=this.hass,t})):this._cards=[]}},{kind:"method",key:"_rebuildCard",value:function(e,t){const i=this.createCardElement(t);i.hass=this.hass,e.parentElement&&e.parentElement.replaceChild(i,e),this._cards=this._cards.map((t=>t===e?i:t))}},{kind:"method",key:"_rebuildBadge",value:function(e,t){const i=this.createBadgeElement(t);i.hass=this.hass,e.parentElement&&e.parentElement.replaceChild(i,e),this._badges=this._badges.map((t=>t===e?i:t))}}]}}),o.f4);var $e=i(6936),Se=(i(25071),i(32957));function De(){De=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ze(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Re(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Re(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=Me(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:je(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=je(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function Ae(e){var t,i=Me(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function Te(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ze(e){return e.decorators&&e.decorators.length}function Oe(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function je(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function Me(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function Ie(e,t,i){return(Ie="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Fe(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let Le=function(e,t,i,r){var n=De();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(Oe(o.descriptor)||Oe(n.descriptor)){if(ze(o)||ze(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ze(o)){if(ze(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Te(o,n)}else t.push(o)}return t}(s.d.map(Ae)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}(null,(function(e,t){class r extends t{constructor(){super(),e(this),this._debouncedConfigChanged=(0,E.D)((()=>this._selectView(this._curView,!0)),100,!1)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_curView",value:void 0},{kind:"field",decorators:[(0,o.IO)("ha-app-layout",!0)],key:"_appLayout",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"_persistentNotifications",value:void 0},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"field",key:"_viewCache",value:void 0},{kind:"field",key:"_debouncedConfigChanged",value:void 0},{kind:"field",key:"_conversation",value(){return(0,v.Z)((e=>"webkitSpeechRecognition"in window&&(0,y.p)(this.hass,"conversation")))}},{kind:"method",key:"connectedCallback",value:function(){Ie(Fe(r.prototype),"connectedCallback",this).call(this),this._unsubNotifications=(0,$e.r)(this.hass.connection,(e=>{this._persistentNotifications=e?e.length:0}))}},{kind:"method",key:"disconnectedCallback",value:function(){Ie(Fe(r.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&this._unsubNotifications()}},{kind:"method",key:"render",value:function(){var e,t,i,r;return o.dy`
      <!-- Inserted for IoB -->
      <notification-drawer .hass="${this.hass}"></notification-drawer>

      <ha-app-layout
        class=${(0,m.$)({"edit-mode":this._editMode})}
        id="layout"
      >
        <app-header slot="header" effects="waterfall" fixed condenses>
          ${this._editMode?o.dy`
                <app-toolbar class="edit-mode">
                  <mwc-icon-button
                    .label="${this.hass.localize("ui.panel.lovelace.menu.exit_edit_mode")}"
                    title="${this.hass.localize("ui.panel.lovelace.menu.close")}"
                    @click="${this._editModeDisable}"
                  >
                    <ha-svg-icon .path=${f.r5M}></ha-svg-icon>
                  </mwc-icon-button>
                  <div main-title>
                    ${this.config.title||this.hass.localize("ui.panel.lovelace.editor.header")}
                    <mwc-icon-button
                      aria-label="${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.edit_title")}"
                      title="${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.edit_title")}"
                      class="edit-icon"
                      @click="${this._editLovelace}"
                    >
                      <ha-svg-icon .path=${f.r9}></ha-svg-icon>
                    </mwc-icon-button>
                  </div>
                  <a
                    href="${(0,F.R)(this.hass,"/lovelace/")}"
                    rel="noreferrer"
                    class="menu-link"
                    target="_blank"
                  >
                    <mwc-icon-button
                      title="${this.hass.localize("ui.panel.lovelace.menu.help")}"
                    >
                      <ha-svg-icon .path=${f.Xc_}></ha-svg-icon>
                    </mwc-icon-button>
                  </a>
                  <ha-button-menu corner="BOTTOM_START">
                    <mwc-icon-button
                      slot="trigger"
                      .title="${this.hass.localize("ui.panel.lovelace.editor.menu.open")}"
                      .label=${this.hass.localize("ui.panel.lovelace.editor.menu.open")}
                    >
                      <ha-svg-icon .path=${f.SXi}></ha-svg-icon>
                    </mwc-icon-button>
                    ${o.dy`
                          <mwc-list-item
                            graphic="icon"
                            aria-label=${this.hass.localize("ui.panel.lovelace.unused_entities.title")}
                            @request-selected="${this._handleUnusedEntities}"
                          >
                            <ha-svg-icon
                              slot="graphic"
                              .path=${f.lAj}
                            >
                            </ha-svg-icon>
                            ${this.hass.localize("ui.panel.lovelace.unused_entities.title")}
                          </mwc-list-item>
                        `}
                    <mwc-list-item
                      graphic="icon"
                      @request-selected="${this._handleRawEditor}"
                    >
                      <ha-svg-icon
                        slot="graphic"
                        .path=${f.bl5}
                      ></ha-svg-icon>
                      ${this.hass.localize("ui.panel.lovelace.editor.menu.raw_editor")}
                    </mwc-list-item>
                    ${o.dy`<mwc-list-item
                            graphic="icon"
                            @request-selected="${this._handleManageDashboards}"
                          >
                            <ha-svg-icon
                              slot="graphic"
                              .path=${f.Ccq}
                            ></ha-svg-icon>
                            ${this.hass.localize("ui.panel.lovelace.editor.menu.manage_dashboards")}
                          </mwc-list-item>
                          ${(null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced)?o.dy`<mwc-list-item
                                graphic="icon"
                                @request-selected="${this._handleManageResources}"
                              >
                                <ha-svg-icon
                                  slot="graphic"
                                  .path=${f.b82}
                                ></ha-svg-icon>
                                ${this.hass.localize("ui.panel.lovelace.editor.menu.manage_resources")}
                              </mwc-list-item>`:""} `}
                  </ha-button-menu>
                </app-toolbar>
              `:o.dy`
                <app-toolbar>
                  <!-- Disabled for IoB -->
                  <!--ha-menu-button
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                  ></ha-menu-button-->
                  ${this.lovelace.config.views.length>1?o.dy`
                        <ha-tabs
                          scrollable
                          .selected="${this._curView}"
                          @iron-activate="${this._handleViewSelected}"
                          dir="${(0,_.Zu)(this.hass)}"
                        >
                          ${this.lovelace.config.views.map((e=>o.dy`
                              <paper-tab
                                aria-label="${e.title}"
                                class="${(0,m.$)({"hide-tab":Boolean(void 0!==e.visible&&(Array.isArray(e.visible)&&!e.visible.some((e=>e.user===this.hass.user.id))||!1===e.visible))})}"
                              >
                                ${e.icon?o.dy`
                                      <ha-icon
                                        title="${e.title}"
                                        .icon="${e.icon}"
                                      ></ha-icon>
                                    `:e.title||"Unnamed view"}
                              </paper-tab>
                            `))}
                        </ha-tabs>
                      `:o.dy`<div main-title>${this.config.title}</div>`}
                  ${this._hideToolbar?this.renderNotificationButton(!0):o.dy`
                        <!-- Enabled for IoB -->
                        ${this.renderNotificationButton()}
                        ${!this.narrow&&this._conversation(this.hass.config.components)?o.dy`
                              <mwc-icon-button
                                .label=${this.hass.localize("ui.panel.lovelace.menu.start_conversation")}
                                @click=${this._showVoiceCommandDialog}
                              >
                                <ha-svg-icon
                                  .path=${f.N3O}
                                ></ha-svg-icon>
                              </mwc-icon-button>
                            `:""}
                        <ha-button-menu corner="BOTTOM_START">
                          <mwc-icon-button
                            slot="trigger"
                            .label=${this.hass.localize("ui.panel.lovelace.editor.menu.open")}
                            .title="${this.hass.localize("ui.panel.lovelace.editor.menu.open")}"
                          >
                            <ha-svg-icon .path=${f.SXi}></ha-svg-icon>
                          </mwc-icon-button>
                          ${this.narrow&&this._conversation(this.hass.config.components)?o.dy`
                                <mwc-list-item
                                  .label=${this.hass.localize("ui.panel.lovelace.menu.start_conversation")}
                                  graphic="icon"
                                  @request-selected=${this._showVoiceCommandDialog}
                                >
                                  <span
                                    >${this.hass.localize("ui.panel.lovelace.menu.start_conversation")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${f.N3O}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${this._yamlMode?o.dy`
                                <mwc-list-item
                                  aria-label=${this.hass.localize("ui.common.refresh")}
                                  graphic="icon"
                                  @request-selected="${this._handleRefresh}"
                                >
                                  <span
                                    >${this.hass.localize("ui.common.refresh")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${f.jcD}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                                <mwc-list-item
                                  aria-label=${this.hass.localize("ui.panel.lovelace.unused_entities.title")}
                                  graphic="icon"
                                  @request-selected="${this._handleUnusedEntities}"
                                >
                                  <span
                                    >${this.hass.localize("ui.panel.lovelace.unused_entities.title")}</span
                                  >
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${f.RIj}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${"yaml"===(null===(t=this.hass.panels.lovelace)||void 0===t||null===(i=t.config)||void 0===i?void 0:i.mode)?o.dy`
                                <mwc-list-item
                                  graphic="icon"
                                  aria-label=${this.hass.localize("ui.panel.lovelace.menu.reload_resources")}
                                  @request-selected=${this._handleReloadResources}
                                >
                                  ${this.hass.localize("ui.panel.lovelace.menu.reload_resources")}
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${f.jcD}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          ${(null===(r=this.hass.user)||void 0===r?void 0:r.is_admin)&&!this.hass.config.safe_mode?o.dy`
                                <mwc-list-item
                                  graphic="icon"
                                  aria-label=${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                                  @request-selected=${this._handleEnableEditMode}
                                >
                                  ${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                                  <ha-svg-icon
                                    slot="graphic"
                                    .path=${f.Shd}
                                  ></ha-svg-icon>
                                </mwc-list-item>
                              `:""}
                          <a
                            href="${(0,F.R)(this.hass,"/lovelace/")}"
                            rel="noreferrer"
                            class="menu-link"
                            target="_blank"
                          >
                            <mwc-list-item
                              graphic="icon"
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.help")}
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.help")}
                              <ha-svg-icon
                                slot="graphic"
                                .path=${f.HET}
                              ></ha-svg-icon>
                            </mwc-list-item>
                          </a>
                        </ha-button-menu>
                      `}
                </app-toolbar>
              `}
          ${this._editMode?o.dy`
                <div sticky>
                  <paper-tabs
                    scrollable
                    .selected="${this._curView}"
                    @iron-activate="${this._handleViewSelected}"
                    dir="${(0,_.Zu)(this.hass)}"
                  >
                    ${this.lovelace.config.views.map((e=>o.dy`
                        <paper-tab
                          aria-label="${e.title}"
                          class="${(0,m.$)({"hide-tab":Boolean(!this._editMode&&void 0!==e.visible&&(Array.isArray(e.visible)&&!e.visible.some((e=>e.user===this.hass.user.id))||!1===e.visible))})}"
                        >
                          ${this._editMode?o.dy`
                                <ha-icon-button-arrow-prev
                                  .hass=${this.hass}
                                  .title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.move_left")}"
                                  .label="${this.hass.localize("ui.panel.lovelace.editor.edit_view.move_left")}"
                                  class="edit-icon view"
                                  @click="${this._moveViewLeft}"
                                  ?disabled="${0===this._curView}"
                                ></ha-icon-button-arrow-prev>
                              `:""}
                          ${e.icon?o.dy`
                                <ha-icon
                                  title="${e.title}"
                                  .icon="${e.icon}"
                                ></ha-icon>
                              `:e.title||"Unnamed view"}
                          ${this._editMode?o.dy`
                                <ha-svg-icon
                                  title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.edit")}"
                                  class="edit-icon view"
                                  .path=${f.r9}
                                  @click="${this._editView}"
                                ></ha-svg-icon>
                                <ha-icon-button-arrow-next
                                  .hass=${this.hass}
                                  .title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.move_right")}"
                                  .label="${this.hass.localize("ui.panel.lovelace.editor.edit_view.move_right")}"
                                  class="edit-icon view"
                                  @click="${this._moveViewRight}"
                                  ?disabled="${this._curView+1===this.lovelace.config.views.length}"
                                ></ha-icon-button-arrow-next>
                              `:""}
                        </paper-tab>
                      `))}
                    ${this._editMode?o.dy`
                          <mwc-icon-button
                            id="add-view"
                            @click="${this._addView}"
                            title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.add")}"
                          >
                            <ha-svg-icon .path=${f.qX5}></ha-svg-icon>
                          </mwc-icon-button>
                        `:""}
                  </paper-tabs>
                </div>
              `:""}
        </app-header>
        <div id="view" @ll-rebuild="${this._debouncedConfigChanged}"></div>
      </ha-app-layout>
    `}},{kind:"field",key:"_isVisible",value(){return e=>Boolean(this._editMode||void 0===e.visible||!0===e.visible||Array.isArray(e.visible)&&e.visible.some((e=>{var t;return e.user===(null===(t=this.hass.user)||void 0===t?void 0:t.id)})))}},{kind:"method",key:"firstUpdated",value:function(){"1"===(0,w.io)("edit")&&this._enableEditMode()}},{kind:"method",key:"updated",value:function(e){Ie(Fe(r.prototype),"updated",this).call(this,e);const t=this._viewRoot.lastChild;let i;e.has("hass")&&t&&(t.hass=this.hass),e.has("narrow")&&t&&(t.narrow=this.narrow);let n=!1;const o=this.route.path.split("/")[1];if(e.has("route")){const e=this.config.views;if(!o&&e.length)i=e.findIndex(this._isVisible),this._navigateToView(e[i].path||i,!0);else if("hass-unused-entities"===o)i="hass-unused-entities";else if(o){const t=o,r=Number(t);let n=0;for(let i=0;i<e.length;i++)if(e[i].path===t||i===r){n=i;break}i=n}}if(e.has("lovelace")){const r=e.get("lovelace");if(r&&r.config===this.lovelace.config||(n=!0),!r||r.editMode!==this.lovelace.editMode){const e=this.config&&this.config.views;(0,h.B)(this,"iron-resize"),"storage"===this.lovelace.mode&&"hass-unused-entities"===o&&(i=e.findIndex(this._isVisible),this._navigateToView(e[i].path||i,!0))}!n&&t&&(t.lovelace=this.lovelace)}(void 0!==i||n)&&(n&&void 0===i&&(i=this._curView),(0,C.T)((()=>this._selectView(i,n))))}},{kind:"method",key:"renderNotificationButton",value:function(e){return o.dy`
      <mwc-icon-button
        style="cursor: pointer; position: relative;"
        label="${this.hass.localize("ui.notification_drawer.title")}"
        @click=${this._handleShowNotificationDrawer}
      >
        <ha-svg-icon path=${f.Kox}></ha-svg-icon>
        ${this._notificationsCount>0?o.dy`
              <span
                style="top: -4px; right: -6px; font-size: 1.0rem; position: absolute; min-width: 20px; box-sizing: border-box; border-radius: 50%; font-weight: 400; background-color: var(--accent-color); line-height: 24px; text-align: center; padding: 0 6px; color: var(--text-primary-color);"
              >
                ${this._notificationsCount}
              </span>
            `:""}
      </mwc-icon-button>
      ${e&&this._conversation(this.hass.config.components)?o.dy`
            <mwc-icon-button
              label="Start conversation"
              @click=${this._showVoiceCommandDialog}
            >
              <ha-svg-icon path=${f.N3O}></ha-svg-icon>
            </mwc-icon-button>
          `:""}
    `}},{kind:"get",key:"_notificationsCount",value:function(){const e=this.hass.states,t=Object.keys(e).filter((e=>"configurator"===e.substr(0,e.indexOf(".")))).map((t=>e[t])).length;return(this._persistentNotifications||0)+t}},{kind:"get",key:"_hideToolbar",value:function(){return!0===this.config.hideToolbar&&-1===window.location.search.indexOf("toolbar")}},{kind:"method",key:"_handleShowNotificationDrawer",value:function(){(0,Se.d)(this,{narrow:this.narrow})}},{kind:"get",key:"config",value:function(){return this.lovelace.config}},{kind:"get",key:"_yamlMode",value:function(){return"yaml"===this.lovelace.mode}},{kind:"get",key:"_editMode",value:function(){return this.lovelace.editMode}},{kind:"get",key:"_layout",value:function(){return this.shadowRoot.getElementById("layout")}},{kind:"get",key:"_viewRoot",value:function(){return this.shadowRoot.getElementById("view")}},{kind:"method",key:"_handleRefresh",value:function(e){(0,g.Q)(e)&&(0,h.B)(this,"config-refresh")}},{kind:"method",key:"_handleReloadResources",value:function(e){(0,g.Q)(e)&&(this.hass.callService("lovelace","reload_resources"),(0,M.g7)(this,{title:this.hass.localize("ui.panel.lovelace.reload_resources.refresh_header"),text:this.hass.localize("ui.panel.lovelace.reload_resources.refresh_body"),confirmText:this.hass.localize("ui.common.refresh"),dismissText:this.hass.localize("ui.common.not_now"),confirm:()=>location.reload()}))}},{kind:"method",key:"_handleRawEditor",value:function(e){(0,g.Q)(e)&&this.lovelace.enableFullEditMode()}},{kind:"method",key:"_handleManageDashboards",value:function(e){(0,g.Q)(e)&&(0,b.c)(this,"/config/lovelace/dashboards")}},{kind:"method",key:"_handleManageResources",value:function(e){(0,g.Q)(e)&&(0,b.c)(this,"/config/lovelace/resources")}},{kind:"method",key:"_handleUnusedEntities",value:function(e){var t;(0,g.Q)(e)&&(0,b.c)(this,`${null===(t=this.route)||void 0===t?void 0:t.prefix}/hass-unused-entities`)}},{kind:"method",key:"_showVoiceCommandDialog",value:function(){(0,R._)(this)}},{kind:"method",key:"_handleEnableEditMode",value:function(e){(0,g.Q)(e)&&(this._yamlMode?(0,M.Ys)(this,{text:"The edit UI is not available when in YAML mode."}):this._enableEditMode())}},{kind:"method",key:"_enableEditMode",value:function(){this.lovelace.setEditMode(!0),window.history.replaceState(null,"",k((0,w.j4)({edit:"1"})))}},{kind:"method",key:"_editModeDisable",value:function(){this.lovelace.setEditMode(!1),window.history.replaceState(null,"",k((0,w.pc)("edit")))}},{kind:"method",key:"_editLovelace",value:function(){U(this,this.lovelace)}},{kind:"method",key:"_navigateToView",value:function(e,t){this.lovelace.editMode?(0,b.c)(this,`${this.route.prefix}/${e}?${(0,w.j4)({edit:"1"})}`,t):(0,b.c)(this,`${this.route.prefix}/${e}`,t)}},{kind:"method",key:"_editView",value:function(){W(this,{lovelace:this.lovelace,viewIndex:this._curView})}},{kind:"method",key:"_moveViewLeft",value:function(){if(0===this._curView)return;const e=this.lovelace,t=this._curView,i=this._curView-1;this._curView=i,e.saveConfig((0,L.mA)(e.config,t,i))}},{kind:"method",key:"_moveViewRight",value:function(){if(this._curView+1===this.lovelace.config.views.length)return;const e=this.lovelace,t=this._curView,i=this._curView+1;this._curView=i,e.saveConfig((0,L.mA)(e.config,t,i))}},{kind:"method",key:"_addView",value:function(){W(this,{lovelace:this.lovelace,saveCallback:(e,t)=>{const i=t.path||e;this._navigateToView(i)}})}},{kind:"method",key:"_handleViewSelected",value:function(e){const t=e.detail.selected;if(t!==this._curView){const e=this.config.views[t].path||t;this._navigateToView(e)}!function(e,t){const i=t,r=Math.random(),n=Date.now(),o=i.scrollTop,s=0-o;e._currentAnimationId=r,function t(){const a=Date.now()-n;var l;a>200?i.scrollTop=0:e._currentAnimationId===r&&(i.scrollTop=(l=a,-s*(l/=200)*(l-2)+o),requestAnimationFrame(t.bind(e)))}.call(e)}(this,this._layout.header.scrollTarget)}},{kind:"method",key:"_selectView",value:function(e,t){if(!t&&this._curView===e)return;e=void 0===e?0:e,this._curView=e,t&&(this._viewCache={});const r=this._viewRoot;if(r.lastChild&&r.removeChild(r.lastChild),"hass-unused-entities"===e){const e=document.createElement("hui-unused-entities");return Promise.all([i.e(9494),i.e(1960),i.e(9119),i.e(7065),i.e(2152)]).then(i.bind(i,28279)).then((()=>{e.hass=this.hass,e.lovelace=this.lovelace,e.narrow=this.narrow})),void r.appendChild(e)}let n;const o=this.config.views[e];if(!o)return void this._enableEditMode();!t&&this._viewCache[e]?n=this._viewCache[e]:(n=document.createElement("hui-view"),n.index=e,this._viewCache[e]=n),n.lovelace=this.lovelace,n.hass=this.hass,n.narrow=this.narrow;const s=o.background||this.config.background;s?this._appLayout.style.setProperty("--lovelace-background",s):this._appLayout.style.removeProperty("--lovelace-background"),r.appendChild(n),(0,h.B)(this,"iron-resize")}},{kind:"get",static:!0,key:"styles",value:function(){return[I.Qx,o.iv`
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
        }
        ha-tabs {
          width: 100%;
          height: 100%;
          margin-left: 4px;
        }
        paper-tabs {
          margin-left: 12px;
          margin-left: max(env(safe-area-inset-left), 12px);
          margin-right: env(safe-area-inset-right);
        }
        ha-tabs,
        paper-tabs {
          --paper-tabs-selection-bar-color: var(
            --app-header-selection-bar-color,
            var(--app-header-text-color, #fff)
          );
          text-transform: uppercase;
        }

        .edit-mode app-header,
        .edit-mode app-toolbar {
          background-color: var(--app-header-edit-background-color, #455a64);
          color: var(--app-header-edit-text-color, #fff);
        }
        .edit-mode div[main-title] {
          pointer-events: auto;
        }
        paper-tab.iron-selected .edit-icon {
          display: inline-flex;
        }
        .edit-icon {
          color: var(--accent-color);
          padding-left: 8px;
          vertical-align: middle;
          --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
        }
        .edit-icon.view {
          display: none;
        }
        #add-view {
          position: absolute;
          height: 44px;
        }
        #add-view ha-svg-icon {
          background-color: var(--accent-color);
          border-radius: 4px;
        }
        app-toolbar a {
          color: var(--text-primary-color, white);
        }
        mwc-button.warning:not([disabled]) {
          color: var(--error-color);
        }
        #view {
          min-height: calc(100vh - var(--header-height));
          /**
          * Since we only set min-height, if child nodes need percentage
          * heights they must use absolute positioning so we need relative
          * positioning here.
          *
          * https://www.w3.org/TR/CSS2/visudet.html#the-height-property
          */
          position: relative;
          display: flex;
        }
        /**
         * In edit mode we have the tab bar on a new line *
         */
        .edit-mode #view {
          min-height: calc(100vh - var(--header-height) - 48px);
        }
        #view > * {
          /**
          * The view could get larger than the window in Firefox
          * to prevent that we set the max-width to 100%
          * flex-grow: 1 and flex-basis: 100% should make sure the view
          * stays full width.
          *
          * https://github.com/home-assistant/home-assistant-polymer/pull/3806
          */
          flex: 1 1 100%;
          max-width: 100%;
        }
        .hide-tab {
          display: none;
        }
        .menu-link {
          text-decoration: none;
        }
        hui-view {
          background: var(
            --lovelace-background,
            var(--primary-background-color)
          );
        }
      `]}}]}}),o.oi);function Be(){Be=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Ve(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Qe(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Qe(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=He(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:We(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=We(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function Ne(e){var t,i=He(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function Ue(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Ve(e){return e.decorators&&e.decorators.length}function qe(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function We(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function He(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function Ze(e,t,i){return(Ze="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Xe(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function Xe(e){return(Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("hui-root",Le),window.loadCardHelpers=()=>Promise.all([i.e(319),i.e(7282),i.e(9810),i.e(5457)]).then(i.bind(i,49686));let Ye=!1,Je=!1,Ge=function(e,t,i,r){var n=Be();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(qe(o.descriptor)||qe(n.descriptor)){if(Ve(o)||Ve(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Ve(o)){if(Ve(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Ue(o,n)}else t.push(o)}return t}(s.d.map(Ne)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}(null,(function(e,t){class r extends t{constructor(){super(),e(this),this._closeEditor=this._closeEditor.bind(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)()],key:"panel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"_state",value:()=>"loading"},{kind:"field",decorators:[(0,o.sz)()],key:"_errorMsg",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"lovelace",value:void 0},{kind:"field",key:"_ignoreNextUpdateEvent",value:()=>!1},{kind:"field",key:"_fetchConfigOnConnect",value:()=>!1},{kind:"field",key:"_unsubUpdates",value:void 0},{kind:"method",key:"connectedCallback",value:function(){Ze(Xe(r.prototype),"connectedCallback",this).call(this),this.lovelace&&this.hass&&this.lovelace.locale!==this.hass.locale?this._setLovelaceConfig(this.lovelace.config,this.lovelace.mode):this.lovelace&&"generated"===this.lovelace.mode?(this._state="loading",this._regenerateConfig()):this._fetchConfigOnConnect&&this._fetchConfig(!1)}},{kind:"method",key:"disconnectedCallback",value:function(){Ze(Xe(r.prototype),"disconnectedCallback",this).call(this),null!==this.urlPath&&this._unsubUpdates&&this._unsubUpdates()}},{kind:"method",key:"render",value:function(){const e=this._state;return"loaded"===e?o.dy`
        <hui-root
          .hass=${this.hass}
          .lovelace=${this.lovelace}
          .route=${this.route}
          .narrow=${this.narrow}
          @config-refresh=${this._forceFetchConfig}
        ></hui-root>
      `:"error"===e?o.dy`
        <hass-error-screen
          .hass=${this.hass}
          title="${(0,s.Lh)(this.hass.localize,"lovelace")}"
          .error="${this._errorMsg}"
        >
          <mwc-button raised @click=${this._forceFetchConfig}>
            ${this.hass.localize("ui.panel.lovelace.reload_lovelace")}
          </mwc-button>
        </hass-error-screen>
      `:"yaml-editor"===e?o.dy`
        <hui-editor
          .hass=${this.hass}
          .lovelace="${this.lovelace}"
          .closeEditor="${this._closeEditor}"
        ></hui-editor>
      `:o.dy`
      <hass-loading-screen
        rootnav
        .hass=${this.hass}
        .narrow=${this.narrow}
      ></hass-loading-screen>
    `}},{kind:"method",key:"firstUpdated",value:function(){this._fetchConfig(!1),this._unsubUpdates||this._subscribeUpdates(),window.addEventListener("connection-status",(e=>{"connected"===e.detail&&this._fetchConfig(!1)}))}},{kind:"method",key:"_regenerateConfig",value:async function(){const e=await(0,c.UO)(this.hass);this._setLovelaceConfig(e,"generated"),this._state="loaded"}},{kind:"method",key:"_subscribeUpdates",value:async function(){this._unsubUpdates=await(0,a.Gc)(this.hass.connection,this.urlPath,(()=>this._lovelaceChanged()))}},{kind:"method",key:"_closeEditor",value:function(){this._state="loaded"}},{kind:"method",key:"_lovelaceChanged",value:function(){this._ignoreNextUpdateEvent?this._ignoreNextUpdateEvent=!1:this.isConnected?(0,l.C)(this,{message:this.hass.localize("ui.panel.lovelace.changed_toast.message"),action:{action:()=>this._fetchConfig(!1),text:this.hass.localize("ui.common.refresh")},duration:0,dismissable:!1}):this._fetchConfigOnConnect=!0}},{kind:"get",key:"urlPath",value:function(){return"lovelace"===this.panel.url_path?null:this.panel.url_path}},{kind:"method",key:"_forceFetchConfig",value:function(){this._fetchConfig(!0)}},{kind:"method",key:"_fetchConfig",value:async function(e){let t,i,r=this.panel.config.mode;const n=window;n.llConfProm&&(i=n.llConfProm,n.llConfProm=void 0),Je||(Je=!0,(n.llConfProm||(0,a.eL)(this.hass.connection)).then((e=>(0,d.k)(e,this.hass.auth.data.hassUrl)))),null===this.urlPath&&i||(this.lovelace&&"yaml"===this.lovelace.mode&&(this._ignoreNextUpdateEvent=!0),i=(0,a.Q2)(this.hass.connection,this.urlPath,e));try{t=await i}catch(e){if("config_not_found"!==e.code)return console.log(e),this._state="error",void(this._errorMsg=e.message);const i=await this.hass.loadBackendTranslation("title");t=await(0,c.UO)(this.hass,i),r="generated"}finally{this.lovelace&&"yaml"===this.lovelace.mode&&setTimeout((()=>{this._ignoreNextUpdateEvent=!1}),2e3)}this._state="yaml-editor"===this._state?this._state:"loaded",this._setLovelaceConfig(t,r)}},{kind:"method",key:"_checkLovelaceConfig",value:function(e){let t=Object.isFrozen(e)?void 0:e;return e.views.forEach(((i,r)=>{i.badges&&!i.badges.every(Boolean)&&(t=t||{...e,views:[...e.views]},t.views[r]={...i},t.views[r].badges=i.badges.filter(Boolean))})),t?n()(t):e}},{kind:"method",key:"_setLovelaceConfig",value:function(e,t){e=this._checkLovelaceConfig(e);const r=this.urlPath;this.lovelace={config:e,mode:t,urlPath:this.urlPath,editMode:!!this.lovelace&&this.lovelace.editMode,locale:this.hass.locale,enableFullEditMode:()=>{Ye||(Ye=!0,Promise.all([i.e(9033),i.e(3304),i.e(2118),i.e(5912)]).then(i.bind(i,95912))),this._state="yaml-editor"},setEditMode:e=>{var t,r;e&&"generated"===this.lovelace.mode?(t=this,r={lovelace:this.lovelace,mode:this.panel.config.mode},p||(p=!0,(0,h.B)(t,"register-dialog",{dialogShowEvent:u,dialogTag:"hui-dialog-save-config",dialogImport:()=>Promise.all([i.e(5906),i.e(9033),i.e(3304),i.e(8082)]).then(i.bind(i,78082))})),(0,h.B)(t,u,r)):this._updateLovelace({editMode:e})},saveConfig:async e=>{const{config:t,mode:i}=this.lovelace;e=this._checkLovelaceConfig(e);try{this._updateLovelace({config:e,mode:"storage"}),this._ignoreNextUpdateEvent=!0,await(0,a.Oh)(this.hass,r,e)}catch(e){throw console.error(e),this._updateLovelace({config:t,mode:i}),e}},deleteConfig:async()=>{const{config:e,mode:t}=this.lovelace;try{const e=await this.hass.loadBackendTranslation("title");this._updateLovelace({config:await(0,c.UO)(this.hass,e),mode:"generated",editMode:!1}),this._ignoreNextUpdateEvent=!0,await(0,a.vj)(this.hass,r)}catch(i){throw console.error(i),this._updateLovelace({config:e,mode:t}),i}}}}},{kind:"method",key:"_updateLovelace",value:function(e){this.lovelace={...this.lovelace,...e}}}]}}),o.oi);customElements.define("ha-panel-lovelace",Ge)},27322:(e,t,i)=>{"use strict";i.d(t,{R:()=>r});const r=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=chunk.e07e2197d40e1848e228.js.map