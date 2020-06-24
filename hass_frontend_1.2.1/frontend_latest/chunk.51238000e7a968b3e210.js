(self.webpackJsonp=self.webpackJsonp||[]).push([[217],{900:function(e,t,r){"use strict";r.r(t),r.d(t,"severityMap",(function(){return O}));var i=r(0),n=r(87),o=(r(390),r(99)),a=r(12),s=r(206),c=r(304),l=(r(208),r(269)),d=r(234),u=r(229),h=r(85),f=r(367);function p(e){var t,r=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function k(e,t,r){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const O={red:"var(--label-badge-red)",green:"var(--label-badge-green)",yellow:"var(--label-badge-yellow)",normal:"var(--label-badge-blue)"};!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!y(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=b(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(y(o)||y(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(y(o)){if(y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}m(o,n)}else t.push(o)}return t}(a.d.map(p)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(i.d)("hui-gauge-card")],(function(e,t){class p extends t{constructor(...t){super(...t),e(this)}}return{F:p,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(0),r.e(1),r.e(3),r.e(4),r.e(72)]).then(r.bind(null,859)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"gauge",entity:Object(l.a)(e,1,t,r,["sensor"],e=>!isNaN(Number(e.state)))[0]||""}}},{kind:"field",decorators:[Object(i.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_config",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"connectedCallback",value:function(){k(E(p.prototype),"connectedCallback",this).call(this),this.updateComplete.then(()=>this._attachObserver())}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"getCardSize",value:function(){return 2}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entity)throw new Error("Invalid card configuration");if(!Object(c.b)(e.entity))throw new Error("Invalid Entity");this._config=Object.assign({min:0,max:100},e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return i.f``;const e=this.hass.states[this._config.entity];if(!e)return i.f`
        <hui-warning>
          ${Object(u.a)(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=Number(e.state);if(isNaN(t))return i.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity)}</hui-warning
        >
      `;const r=this._computeSeverity(t);let o;return o=null===this._config.max||isNaN(this._config.max)?void 0:Math.min(this._config.max,t),i.f`
      <ha-card
        @click=${this._handleClick}
        tabindex="0"
        style=${Object(n.a)({"--round-slider-bar-color":r})}
      >
        <round-slider
          readonly
          arcLength="180"
          startAngle="180"
          .value=${o}
          .min=${this._config.min}
          .max=${this._config.max}
        ></round-slider>
        <div class="gauge-data">
          <div class="percent">
            ${e.state}
            ${this._config.unit||e.attributes.unit_of_measurement||""}
          </div>
          <div class="name">
            ${this._config.name||Object(s.a)(e)}
          </div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return Object(d.a)(this,e)}},{kind:"method",key:"firstUpdated",value:function(){this._measureCard(),this._attachObserver()}},{kind:"method",key:"updated",value:function(e){if(k(E(p.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||Object(o.a)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(e){const t=this._config.severity;if(!t)return O.normal;const r=Object.keys(t).map(e=>[e,t[e]]);for(const i of r)if(null==O[i[0]]||isNaN(i[1]))return O.normal;return r.sort((e,t)=>e[1]-t[1]),e>=r[0][1]&&e<r[1][1]?O[r[0][0]]:e>=r[1][1]&&e<r[2][1]?O[r[1][0]]:e>=r[2][1]?O[r[2][0]]:O.normal}},{kind:"method",key:"_handleClick",value:function(){Object(a.a)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await Object(f.a)(),this._resizeObserver=new ResizeObserver(Object(h.a)(()=>this._measureCard(),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"method",key:"_measureCard",value:function(){this.isConnected&&(this.offsetWidth<200?this.setAttribute("narrow",""):this.removeAttribute("narrow"),this.offsetWidth<150?this.setAttribute("veryNarrow",""):this.removeAttribute("veryNarrow"))}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        display: block;
      }

      ha-card {
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
      }

      ha-card:focus {
        outline: none;
        background: var(--divider-color);
      }

      round-slider {
        max-width: 200px;
        --round-slider-path-width: 35px;
        --round-slider-path-color: var(--primary-background-color);
        --round-slider-linecap: "butt";
      }

      .gauge-data {
        text-align: center;
        line-height: initial;
        color: var(--primary-text-color);
        margin-top: -26px;
        width: 100%;
      }

      .gauge-data .percent {
        white-space: nowrap;
        font-size: 28px;
      }

      .gauge-data .name {
        font-size: 15px;
      }

      /* ============= NARROW ============= */

      :host([narrow]) ha-card {
        padding: 8px;
      }

      :host([narrow]) round-slider {
        --round-slider-path-width: 22px;
      }

      :host([narrow]) .gauge-data {
        margin-top: -22px;
      }

      :host([narrow]) .gauge-data .percent {
        font-size: 24px;
      }

      :host([narrow]) .gauge-data .name {
        font-size: 14px;
      }

      /* ============= VERY NARROW ============= */

      :host([narrow]) ha-card {
        padding: 4px;
      }

      :host([veryNarrow]) round-slider {
        --round-slider-path-width: 15px;
      }

      :host([veryNarrow]) .gauge-data {
        margin-top: -16px;
      }

      :host([veryNarrow]) .gauge-data .percent {
        font-size: 16px;
      }

      :host([veryNarrow]) .gauge-data .name {
        font-size: 12px;
      }
    `}}]}}),i.a)}}]);
//# sourceMappingURL=chunk.51238000e7a968b3e210.js.map