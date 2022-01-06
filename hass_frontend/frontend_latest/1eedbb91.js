"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[67498],{96151:(e,t,r)=>{r.d(t,{T:()=>i,y:()=>n});const i=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},n=()=>new Promise((e=>{i(e)}))},67498:(e,t,r)=>{var i=r(37500),n=r(26767),o=r(5701),s=r(17717),a=r(48399),l=r(47501),c=r(18457),d=r(96151);const f=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function p(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function b(e,t,r){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},b(e,t,r||e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}const E=f&&/Version\/15\.[^0-1]/.test(navigator.userAgent),P=(e,t,r)=>{const i=((e,t,r)=>100*(e-t)/(r-t))(((e,t,r)=>isNaN(e)||isNaN(t)||isNaN(r)?0:e>r?r:e<t?t:e)(e,t,r),t,r);return 180*i/100};!function(e,t,r,i){var n=u();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(m(o)||m(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(m(o)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}h(o,n)}else t.push(o)}return t}(s.d.map(p)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.M)("ha-gauge")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.C)({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[(0,o.C)({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[(0,o.C)({type:Number})],key:"value",value:()=>0},{kind:"field",decorators:[(0,o.C)({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"locale",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"levels",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"label",value:()=>""},{kind:"field",decorators:[(0,s.S)()],key:"_angle",value:()=>0},{kind:"field",decorators:[(0,s.S)()],key:"_updated",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(e){b(w(r.prototype),"firstUpdated",this).call(this,e),(0,d.T)((()=>{this._updated=!0,this._angle=P(this.value,this.min,this.max),this._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){b(w(r.prototype),"updated",this).call(this,e),this._updated&&e.has("value")&&(this._angle=P(this.value,this.min,this.max),this._rescale_svg())}},{kind:"method",key:"render",value:function(){return i.YP`
      <svg viewBox="0 0 100 50" class="gauge">
        ${this.needle&&this.levels?"":i.YP`<path
          class="dial"
          d="M 10 50 A 40 40 0 0 1 90 50"
        ></path>`}

        ${this.levels?this.levels.sort(((e,t)=>e.level-t.level)).map(((e,t)=>{let r;if(0===t&&e.level!==this.min){const e=P(this.min,this.min,this.max);r=i.YP`<path
                        stroke="var(--info-color)"
                        class="level"
                        d="M
                          ${50-40*Math.cos(e*Math.PI/180)}
                          ${50-40*Math.sin(e*Math.PI/180)}
                         A 40 40 0 0 1 90 50
                        "
                      ></path>`}const n=P(e.level,this.min,this.max);return i.YP`${r}<path
                      stroke="${e.stroke}"
                      class="level"
                      d="M
                        ${50-40*Math.cos(n*Math.PI/180)}
                        ${50-40*Math.sin(n*Math.PI/180)}
                       A 40 40 0 0 1 90 50
                      "
                    ></path>`})):""}
        ${this.needle?i.YP`<path
                class="needle"
                d="M 25 47.5 L 2.5 50 L 25 52.5 z"
                style=${(0,a.o)(f?void 0:(0,l.V)({transform:`rotate(${this._angle}deg)`}))}
                transform=${(0,a.o)(f?`rotate(${this._angle}${E?"":" 50 50"})`:void 0)}
              >
              `:i.YP`<path
                class="value"
                d="M 90 50.001 A 40 40 0 0 1 10 50"
                style=${(0,a.o)(f?void 0:(0,l.V)({transform:`rotate(${this._angle}deg)`}))}
                transform=${(0,a.o)(f?`rotate(${this._angle}${E?"":" 50 50"})`:void 0)}
              >`}
        ${f?i.YP`<animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="${this._angle} 50 50"
                dur="1s"
              />`:""}
        </path>
      </svg>
      <svg class="text">
        <text class="value-text">
          ${this.valueText||(0,c.uf)(this.value,this.locale)} ${this.label}
        </text>
      </svg>`}},{kind:"method",key:"_rescale_svg",value:function(){const e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host {
        position: relative;
      }
      .dial {
        fill: none;
        stroke: var(--primary-background-color);
        stroke-width: 15;
      }
      .value {
        fill: none;
        stroke-width: 15;
        stroke: var(--gauge-color);
        transform-origin: 50% 100%;
        transition: all 1s ease 0s;
      }
      .needle {
        fill: var(--primary-text-color);
        transform-origin: 50% 100%;
        transition: all 1s ease 0s;
      }
      .level {
        fill: none;
        stroke-width: 15;
      }
      .gauge {
        display: block;
      }
      .text {
        position: absolute;
        max-height: 40%;
        max-width: 55%;
        left: 50%;
        bottom: -6%;
        transform: translate(-50%, 0%);
      }
      .value-text {
        font-size: 50px;
        fill: var(--primary-text-color);
        text-anchor: middle;
      }
    `}}]}}),i.oi)}}]);
//# sourceMappingURL=1eedbb91.js.map