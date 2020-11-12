(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4998],{51144:(e,t,r)=>{"use strict";r.d(t,{G:()=>s,t:()=>c});var i=r(58831),n=r(49706),o=r(91741);const s=async(e,t,r,i)=>{const n=encodeURI(`?start=${t.toISOString()}&end=${r.toISOString()}`),o=[],s=[];i.forEach((t=>{s.push(e.callApi("GET",`calendars/${t.entity_id}${n}`))}));return(await Promise.all(s)).forEach(((e,t)=>{const r=i[t];e.forEach((e=>{const t=a(e.start);if(!t)return;const i={start:t,end:a(e.end),title:e.summary,summary:e.summary,backgroundColor:r.backgroundColor,borderColor:r.backgroundColor,calendar:r.entity_id};o.push(i)}))})),o},a=e=>"string"==typeof e?e:e.dateTime?e.dateTime:e.date?e.date:void 0,c=e=>Object.keys(e.states).filter((e=>"calendar"===(0,i.M)(e))).sort().map(((t,r)=>({entity_id:t,name:(0,o.C)(e.states[t]),backgroundColor:"#"+n.AZ[r%n.AZ.length]})))},21668:(e,t,r)=>{"use strict";r.d(t,{LU:()=>i,un:()=>n,rs:()=>o,nm:()=>s,zT:()=>a});const i=1,n=2,o=4,s=16,a=128},25995:(e,t,r)=>{"use strict";var i=r(43924),n=r(2849),o=r(57231),s=r(61716),a=r(33075),c=r(72436),l=r(7623),d=(r(53918),r(55317)),h=r(15652),f=r(14516),u=r(47181);r(25230),r(52039);function p(){p=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!v(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=w(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:b(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=b(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function m(e){var t,r=w(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function v(e){return e.decorators&&e.decorators.length}function g(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function b(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=p();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(g(o.descriptor)||g(n.descriptor)){if(v(o)||v(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(v(o)){if(v(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}y(o,n)}else t.push(o)}return t}(s.d.map(m)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,h.Mo)("ha-button-toggle-group")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"buttons",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"active",value:void 0},{kind:"method",key:"render",value:function(){return h.dy`
      <div>
        ${this.buttons.map((e=>h.dy`
            <mwc-icon-button
              .label=${e.label}
              .value=${e.value}
              ?active=${this.active===e.value}
              @click=${this._handleClick}
            >
              <ha-svg-icon .path=${e.iconPath}></ha-svg-icon>
            </mwc-icon-button>
          `))}
      </div>
    `}},{kind:"method",key:"_handleClick",value:function(e){this.active=e.currentTarget.value,(0,u.B)(this,"value-changed",{value:this.active})}},{kind:"get",static:!0,key:"styles",value:function(){return h.iv`
      div {
        display: flex;
        --mdc-icon-button-size: var(--button-toggle-size, 36px);
        --mdc-icon-size: var(--button-toggle-icon-size, 20px);
      }
      mwc-icon-button {
        border: 1px solid var(--primary-color);
        border-right-width: 0px;
        position: relative;
        cursor: pointer;
      }
      mwc-icon-button::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: currentColor;
        opacity: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear, background-color 15ms linear;
      }
      mwc-icon-button[active]::before {
        opacity: var(--mdc-icon-button-ripple-opacity, 0.12);
      }
      mwc-icon-button:first-child {
        border-radius: 4px 0 0 4px;
      }
      mwc-icon-button:last-child {
        border-radius: 0 4px 4px 0;
        border-right-width: 1px;
      }
      mwc-icon-button:only-child {
        border-radius: 4px;
        border-right-width: 1px;
      }
    `}}]}}),h.oi);r(10983);var E=r(11654);function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!C(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=z(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function x(e){var t,r=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function P(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function C(e){return e.decorators&&e.decorators.length}function D(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function z(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function O(e,t,r){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const j={headerToolbar:!1,plugins:[o.ZP,c.Z,a.ZP],initialView:"dayGridMonth",dayMaxEventRows:!0,height:"parent",eventDisplay:"list-item"},$=[{label:"Month View",value:"dayGridMonth",iconPath:d.SI1},{label:"Week View",value:"dayGridWeek",iconPath:d.KXE},{label:"Day View",value:"dayGridDay",iconPath:d.r3U},{label:"List View",value:"listWeek",iconPath:d.uay}];let F=function(e,t,r,i){var n=_();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(D(o.descriptor)||D(n.descriptor)){if(C(o)||C(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(C(o)){if(C(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}P(o,n)}else t.push(o)}return t}(s.d.map(x)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"events",value:()=>[]},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"views",value:()=>["dayGridMonth","dayGridWeek","dayGridDay"]},{kind:"field",decorators:[(0,h.Cb)()],key:"initialView",value:()=>"dayGridMonth"},{kind:"field",decorators:[(0,h.sz)()],key:"calendar",value:void 0},{kind:"field",decorators:[(0,h.sz)()],key:"_activeView",value:void 0},{kind:"method",key:"render",value:function(){const e=this._viewToggleButtons(this.views);return h.dy`
      ${this.calendar?h.dy`
            <div class="header">
              ${this.narrow?h.dy`
                    <div class="controls">
                      <h1>
                        ${this.calendar.view.title}
                      </h1>
                      <div>
                        <ha-icon-button
                          label=${this.hass.localize("ui.common.previous")}
                          icon="hass:chevron-left"
                          class="prev"
                          @click=${this._handlePrev}
                        >
                        </ha-icon-button>
                        <ha-icon-button
                          label=${this.hass.localize("ui.common.next")}
                          icon="hass:chevron-right"
                          class="next"
                          @click=${this._handleNext}
                        >
                        </ha-icon-button>
                      </div>
                    </div>
                    <div class="controls">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >${this.hass.localize("ui.panel.calendar.today")}</mwc-button
                      >
                      <ha-button-toggle-group
                        .buttons=${e}
                        .active=${this._activeView}
                        @value-changed=${this._handleView}
                      ></ha-button-toggle-group>
                    </div>
                  `:h.dy`
                    <div class="navigation">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >${this.hass.localize("ui.panel.calendar.today")}</mwc-button
                      >
                      <ha-icon-button
                        label=${this.hass.localize("ui.common.previous")}
                        icon="hass:chevron-left"
                        class="prev"
                        @click=${this._handlePrev}
                      >
                      </ha-icon-button>
                      <ha-icon-button
                        label=${this.hass.localize("ui.common.next")}
                        icon="hass:chevron-right"
                        class="next"
                        @click=${this._handleNext}
                      >
                      </ha-icon-button>
                    </div>
                    <h1>
                      ${this.calendar.view.title}
                    </h1>
                    <ha-button-toggle-group
                      .buttons=${e}
                      .active=${this._activeView}
                      @value-changed=${this._handleView}
                    ></ha-button-toggle-group>
                  `}
            </div>
          `:""}
      <div id="calendar"></div>
    `}},{kind:"method",key:"updated",value:function(e){O(T(r.prototype),"updated",this).call(this,e),this.calendar&&(e.has("events")&&(this.calendar.removeAllEventSources(),this.calendar.addEventSource(this.events)),e.has("views")&&!this.views.includes(this._activeView)&&(this._activeView=this.initialView&&this.views.includes(this.initialView)?this.initialView:this.views[0],this.calendar.changeView(this._activeView),this._fireViewChanged()))}},{kind:"method",key:"firstUpdated",value:function(){const e={...j,locale:this.hass.language,initialView:this.initialView};this._activeView=this.initialView,e.dateClick=e=>this._handleDateClick(e),e.eventClick=e=>this._handleEventClick(e),this.calendar=new n.faS(this.shadowRoot.getElementById("calendar"),e),this.calendar.render(),this._fireViewChanged()}},{kind:"method",key:"_handleEventClick",value:function(e){"dayGridMonth"===e.view.type&&(this._activeView="dayGridDay",this.calendar.changeView("dayGridDay"),this.calendar.gotoDate(e.event.startStr))}},{kind:"method",key:"_handleDateClick",value:function(e){"dayGridMonth"===e.view.type&&(this._activeView="dayGridDay",this.calendar.changeView("dayGridDay"),this.calendar.gotoDate(e.dateStr))}},{kind:"method",key:"_handleNext",value:function(){this.calendar.next(),this._fireViewChanged()}},{kind:"method",key:"_handlePrev",value:function(){this.calendar.prev(),this._fireViewChanged()}},{kind:"method",key:"_handleToday",value:function(){this.calendar.today(),this._fireViewChanged()}},{kind:"method",key:"_handleView",value:function(e){this._activeView=e.detail.value,this.calendar.changeView(this._activeView),this._fireViewChanged()}},{kind:"method",key:"_fireViewChanged",value:function(){(0,u.B)(this,"view-changed",{start:this.calendar.view.activeStart,end:this.calendar.view.activeEnd,view:this.calendar.view.type})}},{kind:"field",key:"_viewToggleButtons",value:()=>(0,f.Z)((e=>$.filter((t=>e.includes(t.value)))))},{kind:"get",static:!0,key:"styles",value:function(){return[E.Qx,h.iv`
        ${(0,h.$m)(i.Z)}
        ${(0,h.$m)(s.Z)}
        ${(0,h.$m)(l.Z)}
        
        :host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        :host([narrow]) .header {
          padding-right: 8px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: initial;
        }

        .navigation {
          display: flex;
          align-items: center;
          flex-grow: 0;
        }

        a {
          color: var(--primary-text-color);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .today {
          margin-right: 20px;
        }

        .prev,
        .next {
          --mdc-icon-button-size: 32px;
        }

        ha-button-toggle-group {
          color: var(--primary-color);
        }

        #calendar {
          flex-grow: 1;
          background-color: var(--card-background-color);
          min-height: 400px;
          --fc-neutral-bg-color: var(--card-background-color);
          --fc-list-event-hover-bg-color: var(--card-background-color);
          --fc-theme-standard-border-color: var(--divider-color);
          --fc-border-color: var(--divider-color);
        }

        a {
            color: inherit !important; 
        }

        .fc-theme-standard .fc-scrollgrid {
          border: 1px solid var(--divider-color);
        }

        .fc-scrollgrid-section-header td {
          border: none;
        }

        th.fc-col-header-cell.fc-day {
          color: var(--secondary-text-color);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .fc-daygrid-dot-event:hover {
          background-color: inherit
        }

        .fc-daygrid-day-top {
          text-align: center;
          padding-top: 5px;
          justify-content: center;
        }

        table.fc-scrollgrid-sync-table
          tbody
          tr:first-child
          .fc-daygrid-day-top {
          padding-top: 0;
        }

        a.fc-daygrid-day-number {
          float: none !important;
          font-size: 12px;
        }

        .fc .fc-daygrid-day-number {
            padding: 3px !important;
        }

        .fc .fc-daygrid-day.fc-day-today {
          background: inherit;
        }

        td.fc-day-today .fc-daygrid-day-top {
          padding-top: 4px;
        }

        td.fc-day-today .fc-daygrid-day-number {
          height: 24px;
          color: var(--text-primary-color) !important;
          background-color: var(--primary-color);
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          width: max-content;
          min-width: 24px;
          line-height: 140%;
        }

        .fc-daygrid-day-events {
          margin-top: 4px;
        }

        .fc-event {
          border-radius: 4px;
          line-height: 1.7;
        }

        .fc-daygrid-block-event .fc-event-main {
          padding: 0 1px;
        }

        .fc-day-past .fc-daygrid-day-events {
          opacity: 0.5;
        }

        .fc-icon-x:before {
          font-family: var(--material-font-family);
          content: "X";
        }

        .fc-popover {
          background-color: var(--primary-background-color) !important;
        }

        .fc-popover-header {
          background-color: var(--secondary-background-color) !important;
        }

        .fc-theme-standard .fc-list-day-frame {
          background-color: transparent;
        }

        .fc-list.fc-view,
        .fc-list-event.fc-event td {
          border: none;
        }

        .fc-list-day.fc-day th {
          border-bottom: none;
          border-top: 1px solid var(--fc-theme-standard-border-color, #ddd) !important;
        }

        .fc-list-day-text {
          font-size: 16px;
          font-weight: 400;
        }

        .fc-list-day-side-text {
          font-weight: 400;
          font-size: 16px;
          color: var(--primary-color);
        }

        .fc-list-table td,
        .fc-list-day-frame {
          padding-top: 12px;
          padding-bottom: 12px;
        }

        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-time,
        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-title,
          :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom {
          display: none;
        }

        :host([narrow]) .fc .fc-dayGridMonth-view .fc-daygrid-event-harness-abs {
          visibility: visible !important;
          position: static;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events {
          display: flex;
          min-height: 2em !important;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 2em;
          height: 2em;
          overflow: hidden;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table {
          overflow: hidden;
        }
      `]}}]}}),h.oi);window.customElements.define("ha-full-calendar",F)},80251:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HuiCalendarCard:()=>w});var i=r(15652),n=r(49706),o=r(62877),s=r(38346),a=(r(22098),r(16509),r(51144)),c=(r(25995),r(64588)),l=r(54845);r(75502);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!u(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:m(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=m(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function h(e){var t,r=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function g(e,t,r){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let w=function(e,t,r,i){var n=d();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(p(o.descriptor)||p(n.descriptor)){if(u(o)||u(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(u(o)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}f(o,n)}else t.push(o)}return t}(s.d.map(h)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,i.Mo)("hui-calendar-card")],(function(e,t){class d extends t{constructor(...t){super(...t),e(this)}}return{F:d,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(8946),r.e(7924),r.e(6291),r.e(4535),r.e(6902),r.e(5741)]).then(r.bind(r,69759)),document.createElement("hui-calendar-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{entities:(0,c.j)(e,2,t,r,["calendar"])}}},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"_events",value:()=>[]},{kind:"field",decorators:[(0,i.sz)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_calendars",value:()=>[]},{kind:"field",decorators:[(0,i.sz)()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[(0,i.sz)()],key:"_veryNarrow",value:()=>!1},{kind:"field",key:"_startDate",value:void 0},{kind:"field",key:"_endDate",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function(e){var t,r;if(!(null===(t=e.entities)||void 0===t?void 0:t.length))throw new Error("Entities must be defined");if(!Array.isArray(e.entities))throw new Error("Entities need to be an array");this._calendars=e.entities.map(((e,t)=>({entity_id:e,backgroundColor:"#"+n.AZ[t%n.AZ.length]}))),(null===(r=this._config)||void 0===r?void 0:r.entities)!==e.entities&&this._fetchCalendarEvents(),this._config={initial_view:"dayGridMonth",...e}}},{kind:"method",key:"getCardSize",value:function(){var e;return(null===(e=this._config)||void 0===e?void 0:e.header)?1:11}},{kind:"method",key:"connectedCallback",value:function(){g(b(d.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachObserver()))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass||!this._calendars.length)return i.dy``;const e=this._veryNarrow?["listWeek"]:["listWeek","dayGridMonth","dayGridDay"];return i.dy`
      <ha-card>
        <div class="header">${this._config.title}</div>
        <ha-full-calendar
          .narrow=${this._narrow}
          .events=${this._events}
          .hass=${this.hass}
          .views=${e}
          .initialView=${this._config.initial_view}
          @view-changed=${this._handleViewChanged}
        ></ha-full-calendar>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(g(b(d.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");(!t||!r||e.has("hass")&&t.themes!==this.hass.themes||e.has("_config")&&r.theme!==this._config.theme)&&(0,o.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_handleViewChanged",value:function(e){this._startDate=e.detail.start,this._endDate=e.detail.end,this._fetchCalendarEvents()}},{kind:"method",key:"_fetchCalendarEvents",value:async function(){this._startDate&&this._endDate&&(this._events=await(0,a.G)(this.hass,this._startDate,this._endDate,this._calendars))}},{kind:"method",key:"_measureCard",value:function(){const e=this.shadowRoot.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<870,this._veryNarrow=e.offsetWidth<350)}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,l.P)(),this._resizeObserver=new ResizeObserver((0,s.D)((()=>this._measureCard()),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      ha-card {
        position: relative;
        padding: 0 8px 8px;
        box-sizing: border-box;
        height: 100%;
      }

      .header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-size: var(--ha-card-header-font-size, 24px);
        line-height: 1.2;
        padding-top: 16px;
        padding-left: 8px;
      }
    `}}]}}),i.oi)},50467:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});const i=e=>"function"==typeof e.getCardSize?e.getCardSize():customElements.get(e.localName)?1:customElements.whenDefined(e.localName).then((()=>i(e)))},64588:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});var i=r(58831);const n=(e,t,r,o,s,a)=>{const c=[];(null==s?void 0:s.length)&&c.push((e=>s.includes((0,i.M)(e)))),a&&c.push((t=>e.states[t]&&a(e.states[t])));const l=((e,t,r)=>{(!r||r>e.length)&&(r=e.length);const i=[];for(let n=0;n<e.length&&i.length<r;n++){let r=!0;for(const i of t)if(!i(e[n])){r=!1;break}r&&i.push(e[n])}return i})(r,c,t);if(l.length<t&&o.length){const r=n(e,t-l.length,o,[],s,a);l.push(...r)}return l}},65082:(e,t,r)=>{"use strict";var i=r(15652);r(16509);function n(){n=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!a(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=d(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:l(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=l(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function o(e){var t,r=d(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var l=n();if(i)for(var d=0;d<i.length;d++)l=i[d](l);var h=t((function(e){l.initializeInstanceElements(e,f.elements)}),r),f=l.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(a(o)||a(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(a(o)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(h.d.map(o)),e);l.initializeClassElements(h.F,f.elements),l.runClassFinishers(h.F,f.finishers)}([(0,i.Mo)("hui-warning-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)()],key:"label",value:void 0},{kind:"method",key:"render",value:function(){return i.dy` <ha-icon icon="hass:alert" .title=${this.label}></ha-icon> `}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      ha-icon {
        color: #fce588;
      }
    `}}]}}),i.oi)},46628:(e,t,r)=>{"use strict";r.d(t,{Z6:()=>sr,Do:()=>ar,l$:()=>or});r(66702);var i=r(98734),n=r(15652),o=r(49629),s=r(79865),a=r(49706),c=r(62877),l=r(56949),d=r(58831),h=r(29171),f=r(22311),u=r(91741),p=r(36145),m=r(84627),y=r(52797),v=(r(22098),r(93491)),g=r(64588),b=r(22503),w=r(22193),k=r(75502);function E(){E=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=A(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _(e){var t,r=A(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function A(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function S(e,t,r){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let T=function(e,t,r,i){var n=E();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(C(o.descriptor)||C(n.descriptor)){if(P(o)||P(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(P(o)){if(P(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}x(o,n)}else t.push(o)}return t}(s.d.map(_)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-button-card")],(function(e,t){class E extends t{constructor(...t){super(...t),e(this)}}return{F:E,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(3641),r.e(8946),r.e(7924),r.e(1527),r.e(5422),r.e(4535),r.e(6902),r.e(3284),r.e(9986)]).then(r.bind(r,56214)),document.createElement("hui-button-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"button",tap_action:{action:"toggle"},entity:(0,g.j)(e,1,t,r,["light","switch"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.GC)("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_shouldRenderRipple",value:()=>!1},{kind:"method",key:"getCardSize",value:function(){var e,t;return((null===(e=this._config)||void 0===e?void 0:e.show_icon)?4:0)+((null===(t=this._config)||void 0===t?void 0:t.show_name)?1:0)}},{kind:"method",key:"setConfig",value:function(e){if(e.entity&&!(0,m.T)(e.entity))throw new Error("Invalid Entity");this._config={tap_action:{action:e.entity&&a.Kk.has((0,d.M)(e.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},show_icon:!0,show_name:!0,state_color:!0,...e}}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config"))return!0;const t=e.get("hass");return!t||t.themes!==this.hass.themes||t.language!==this.hass.language||Boolean(this._config.entity)&&t.states[this._config.entity]!==this.hass.states[this._config.entity]}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n.dy``;const e=this._config.entity?this.hass.states[this._config.entity]:void 0;return this._config.entity&&!e?n.dy`
        <hui-warning>
          ${(0,k.i)(this.hass,this._config.entity)}
        </hui-warning>
      `:n.dy`
      <ha-card
        @action=${this._handleAction}
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleActivate}"
        @mouseup="${this.handleRippleDeactivate}"
        @touchstart="${this.handleRippleActivate}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
        .actionHandler=${(0,v.K)({hasHold:(0,w._)(this._config.hold_action),hasDoubleClick:(0,w._)(this._config.double_tap_action)})}
        tabindex=${(0,o.o)((0,w._)(this._config.tap_action)?"0":void 0)}
      >
        ${this._config.show_icon?n.dy`
              <ha-icon
                tabindex="-1"
                data-domain=${(0,o.o)(this._config.state_color&&e?(0,f.N)(e):void 0)}
                data-state=${(0,o.o)(e?(0,l.q)(e):void 0)}
                .icon=${this._config.icon||(e?(0,p.M)(e):"")}
                style=${(0,s.V)({filter:e?this._computeBrightness(e):"",color:e?this._computeColor(e):"",height:this._config.icon_height?this._config.icon_height:""})}
              ></ha-icon>
            `:""}
        ${this._config.show_name?n.dy`
              <span tabindex="-1">
                ${this._config.name||(e?(0,u.C)(e):"")}
              </span>
            `:""}
        ${this._config.show_state&&e?n.dy`<span class="state">
              ${(0,h.D)(this.hass.localize,e,this.hass.language)}
            </span>`:""}
        ${this._shouldRenderRipple?n.dy`<mwc-ripple></mwc-ripple>`:""}
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(S(O(E.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"field",key:"_rippleHandlers",value(){return new i.A((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",decorators:[(0,n.hO)({passive:!0})],key:"handleRippleActivate",value:function(e){this._rippleHandlers.startPress(e)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4% 0;
        font-size: 1.2rem;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        position: relative;
      }

      ha-card:focus {
        outline: none;
      }

      ha-icon {
        width: 40%;
        height: auto;
        color: var(--paper-item-icon-color, #44739e);
        --mdc-icon-size: 100%;
      }

      ha-icon,
      span {
        outline: none;
      }

      .state {
        font-size: 0.9rem;
        color: var(--secondary-text-color);
      }

      ${y.N}
    `}},{kind:"method",key:"_computeBrightness",value:function(e){var t;if(!e.attributes.brightness||!(null===(t=this._config)||void 0===t?void 0:t.state_color))return"";return`brightness(${(e.attributes.brightness+245)/5}%)`}},{kind:"method",key:"_computeColor",value:function(e){var t;if(!e.attributes.hs_color||!(null===(t=this._config)||void 0===t?void 0:t.state_color))return"";const[r,i]=e.attributes.hs_color;return i<=10?"":`hsl(${r}, 100%, ${100-i/2}%)`}},{kind:"method",key:"_handleAction",value:function(e){(0,b.G)(this,this.hass,this._config,e.detail.action)}}]}}),n.oi);r(80251);var j=r(50467),$=r(90271),F=(r(43709),r(62359));function R(){R=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!V(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=U(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:G(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=G(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function I(e){var t,r=U(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function M(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function V(e){return e.decorators&&e.decorators.length}function N(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function G(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function U(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function H(e,t,r){return(H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Z(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=R();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(N(o.descriptor)||N(n.descriptor)){if(V(o)||V(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(V(o)){if(V(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}M(o,n)}else t.push(o)}return t}(s.d.map(I)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-entities-toggle")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"entities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_toggleEntities",value:void 0},{kind:"method",key:"updated",value:function(e){H(Z(r.prototype),"updated",this).call(this,e),e.has("entities")&&(this._toggleEntities=this.entities.filter((e=>e in this.hass.states&&a.Kk.has(e.split(".",1)[0]))))}},{kind:"method",key:"render",value:function(){var e;return(null===(e=this._toggleEntities)||void 0===e?void 0:e.length)?n.dy`
      <ha-switch
        aria-label=${this.hass.localize("ui.panel.lovelace.card.entities.toggle")}
        .checked=${this._toggleEntities.some((e=>{const t=this.hass.states[e];return t&&"on"===t.state}))}
        @change=${this._callService}
      ></ha-switch>
    `:n.dy``}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      :host {
        width: 38px;
        display: block;
      }
      ha-switch {
        padding: 13px 5px;
        margin: -4px -5px;
      }
    `}},{kind:"method",key:"_callService",value:function(e){(0,F.j)("light");const t=e.target.checked;((e,t,r=!0)=>{const i={};t.forEach((t=>{if(a.tj.includes(e.states[t].state)===r){const e=(0,d.M)(t),r=["cover","lock"].includes(e)?e:"homeassistant";r in i||(i[r]=[]),i[r].push(t)}})),Object.keys(i).forEach((t=>{let n;switch(t){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off"}const o=i[t];e.callService(t,n,{entity_id:o})}))})(this.hass,this._toggleEntities,t)}}]}}),n.oi);var q=r(89026),W=r(32834);function L(){L=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!X(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ee(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:J(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=J(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Y(e){var t,r=ee(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function K(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function X(e){return e.decorators&&e.decorators.length}function Q(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function J(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ee(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function re(e,t,r){return(re="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ie(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=L();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Q(o.descriptor)||Q(n.descriptor)){if(X(o)||X(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(X(o)){if(X(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}K(o,n)}else t.push(o)}return t}(s.d.map(Y)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-entities-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(3641),r.e(8946),r.e(7924),r.e(1527),r.e(4535),r.e(5145)]).then(r.bind(r,97011)),document.createElement("hui-entities-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"entities",entities:(0,g.j)(e,3,t,r,["light","switch","sensor"])}}},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",key:"_hass",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_showHeaderToggle",value:void 0},{kind:"field",key:"_headerElement",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"set",key:"hass",value:function(e){this._hass=e,this.shadowRoot.querySelectorAll("#states > div > *").forEach((t=>{t.hass=e})),this._headerElement&&(this._headerElement.hass=e),this._footerElement&&(this._footerElement.hass=e);const t=this.shadowRoot.querySelector("hui-entities-toggle");t&&(t.hass=e)}},{kind:"method",key:"getCardSize",value:async function(){if(!this._config)return 0;let e=(this._config.title||this._showHeaderToggle?2:0)+(this._config.entities.length||1);if(this._headerElement){const t=(0,j.N)(this._headerElement);e+=t instanceof Promise?await t:t}if(this._footerElement){const t=(0,j.N)(this._footerElement);e+=t instanceof Promise?await t:t}return e}},{kind:"method",key:"setConfig",value:function(e){const t=(0,$.A)(e.entities);if(this._config=e,this._configEntities=t,void 0===e.show_header_toggle){let e=0;for(const r of t)if("entity"in r&&(e+=Number(a.Kk.has((0,d.M)(r.entity))),2===e))break;this._showHeaderToggle=2===e}else this._showHeaderToggle=e.show_header_toggle;this._config.header?(this._headerElement=(0,q.t)(this._config.header),this._hass&&(this._headerElement.hass=this._hass)):this._headerElement=void 0,this._config.footer?(this._footerElement=(0,q.t)(this._config.footer),this._hass&&(this._footerElement.hass=this._hass)):this._footerElement=void 0}},{kind:"method",key:"updated",value:function(e){if(re(ie(i.prototype),"updated",this).call(this,e),!this._config||!this._hass)return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,c.R)(this,this._hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){return this._config&&this._hass?n.dy`
      <ha-card>
        ${this._headerElement?n.dy`<div class="header-footer header">
              ${this._headerElement}
            </div>`:""}
        ${this._config.title||this._showHeaderToggle||this._config.icon?n.dy`
              <h1 class="card-header">
                <div class="name">
                  ${this._config.icon?n.dy`
                        <ha-icon
                          class="icon"
                          .icon=${this._config.icon}
                        ></ha-icon>
                      `:""}
                  ${this._config.title}
                </div>
                ${this._showHeaderToggle?n.dy`
                      <hui-entities-toggle
                        .hass=${this._hass}
                        .entities=${this._configEntities.filter((e=>"entity"in e)).map((e=>e.entity))}
                      ></hui-entities-toggle>
                    `:n.dy``}
              </h1>
            `:""}
        <div id="states" class="card-content">
          ${this._configEntities.map((e=>this.renderEntity(e)))}
        </div>

        ${this._footerElement?n.dy`<div class="header-footer footer">
              ${this._footerElement}
            </div>`:""}
      </ha-card>
    `:n.dy``}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
      }

      .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #states {
        flex: 1;
      }

      #states > * {
        margin: 8px 0;
      }

      #states > *:first-child {
        margin-top: 0;
      }

      #states > *:last-child {
        margin-bottom: 0;
      }

      #states > div > * {
        overflow: hidden;
      }

      #states > div {
        position: relative;
      }

      .icon {
        padding: 0px 18px 0px 8px;
      }

      .header {
        border-top-left-radius: var(--ha-card-border-radius, 2px);
        border-top-right-radius: var(--ha-card-border-radius, 2px);
        margin-bottom: 16px;
        overflow: hidden;
      }

      .footer {
        border-bottom-left-radius: var(--ha-card-border-radius, 2px);
        border-bottom-right-radius: var(--ha-card-border-radius, 2px);
        margin-top: -16px;
        overflow: hidden;
      }
    `}},{kind:"method",key:"renderEntity",value:function(e){const t=(0,W.m)(!("type"in e)&&this._config.state_color?{state_color:!0,...e}:e);return this._hass&&(t.hass=this._hass),n.dy`<div>${t}</div>`}}]}}),n.oi);function ne(){ne=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ae(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?he(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=de(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:le(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=le(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function oe(e){var t,r=de(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function se(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ae(e){return e.decorators&&e.decorators.length}function ce(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function le(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function de(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=ne();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(ce(o.descriptor)||ce(n.descriptor)){if(ae(o)||ae(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ae(o)){if(ae(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}se(o,n)}else t.push(o)}return t}(s.d.map(oe)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-entity-button-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),T);var fe=r(47181),ue=(r(16509),r(56007)),pe=r(53658);function me(){me=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ge(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ke(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:we(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=we(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ye(e){var t,r=ke(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function ve(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ge(e){return e.decorators&&e.decorators.length}function be(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function we(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ke(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _e(e,t,r){return(_e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=xe(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let Pe=function(e,t,r,i){var n=me();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(be(o.descriptor)||be(n.descriptor)){if(ge(o)||ge(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ge(o)){if(ge(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}ve(o,n)}else t.push(o)}return t}(s.d.map(ye)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-entity-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(8946),r.e(7924),r.e(1527),r.e(5422),r.e(4535),r.e(6902),r.e(3284),r.e(349)]).then(r.bind(r,87731)),document.createElement("hui-entity-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{entity:(0,g.j)(e,1,t,r,["sensor","light","switch"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(e.entity&&!(0,m.T)(e.entity))throw new Error("Invalid Entity");this._config=e,this._config.footer?this._footerElement=(0,q.t)(this._config.footer):this._footerElement&&(this._footerElement=void 0)}},{kind:"method",key:"getCardSize",value:async function(){let e=2;if(this._footerElement){const t=(0,j.N)(this._footerElement);e+=t instanceof Promise?await t:t}return e}},{kind:"method",key:"render",value:function(){var e;if(!this._config||!this.hass)return n.dy``;const t=this.hass.states[this._config.entity];if(!t)return n.dy`
        <hui-warning>
          ${(0,k.i)(this.hass,this._config.entity)}
        </hui-warning>
      `;const r=this._config.attribute?this._config.attribute in t.attributes:!ue.V_.includes(t.state);return n.dy`
      <ha-card @click=${this._handleClick} tabindex="0">
        <div class="header">
          <div class="name">
            ${this._config.name||(0,u.C)(t)}
          </div>
          <div class="icon">
            <ha-icon
              .icon=${this._config.icon||(0,p.M)(t)}
            ></ha-icon>
          </div>
        </div>
        <div class="info">
          <span class="value"
            >${"attribute"in this._config?null!==(e=t.attributes[this._config.attribute])&&void 0!==e?e:this.hass.localize("state.default.unknown"):t.attributes.unit_of_measurement?t.state:(0,h.D)(this.hass.localize,t,this.hass.language)}</span
          >${r?n.dy`
                <span class="measurement"
                  >${this._config.unit||(this._config.attribute?"":t.attributes.unit_of_measurement)}</span
                >
              `:""}
        </div>
        ${this._footerElement}
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return this._footerElement&&(this._footerElement.hass=this.hass),(0,pe.G)(this,e)}},{kind:"method",key:"updated",value:function(e){if(_e(xe(i.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_handleClick",value:function(){(0,fe.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        outline: none;
      }

      .header {
        display: flex;
        padding: 8px 16px 0;
        justify-content: space-between;
      }

      .name {
        color: var(--secondary-text-color);
        line-height: 40px;
        font-weight: 500;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .icon {
        color: var(--state-icon-color, #44739e);
        line-height: 40px;
      }

      .info {
        padding: 0px 16px 16px;
        margin-top: -4px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 28px;
      }

      .value {
        font-size: 28px;
        margin-right: 4px;
      }

      .measurement {
        font-size: 18px;
        color: var(--secondary-text-color);
      }
    `}}]}}),n.oi);var Ce=r(81471),De=r(5435);r(3143),r(89255),r(65082);function Ae(){Ae=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Oe(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Fe(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=$e(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:je(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=je(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ze(e){var t,r=$e(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Se(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Oe(e){return e.decorators&&e.decorators.length}function Te(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function je(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function $e(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function Re(e,t,r){return(Re="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ie(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=Ae();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Te(o.descriptor)||Te(n.descriptor)){if(Oe(o)||Oe(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Oe(o)){if(Oe(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Se(o,n)}else t.push(o)}return t}(s.d.map(ze)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-glance-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(3641),r.e(8946),r.e(7924),r.e(1527),r.e(4535),r.e(6902),r.e(8491)]).then(r.bind(r,67291)),document.createElement("hui-glance-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"glance",entities:(0,g.j)(e,3,t,r,["sensor"])}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"method",key:"getCardSize",value:function(){const e=(this._config.show_icon?1:0)+(this._config.show_name?1:0)+(this._config.show_state?1:0),t=Math.ceil(this._configEntities.length/(this._config.columns||5));return(this._config.title?2:0)+e*t}},{kind:"method",key:"setConfig",value:function(e){this._config={show_name:!0,show_state:!0,show_icon:!0,state_color:!0,...e};const t=(0,$.A)(e.entities).map((e=>({hold_action:{action:"more-info"},...e})));for(const i of t)if(i.tap_action&&"call-service"===i.tap_action.action&&!i.tap_action.service||i.hold_action&&"call-service"===i.hold_action.action&&!i.hold_action.service)throw new Error('Missing required property "service" when tap_action or hold_action is call-service');const r=e.columns||Math.min(e.entities.length,5);this.style.setProperty("--glance-column-width",100/r+"%"),this._configEntities=t,this.hass&&this.requestUpdate()}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!this._configEntities||!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;for(const r of this._configEntities)if(t.states[r.entity]!==this.hass.states[r.entity])return!0;return!1}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n.dy``;const{title:e}=this._config;return n.dy`
      <ha-card .header="${e}">
        <div class="${(0,Ce.$)({entities:!0,"no-header":!e})}">
          ${this._configEntities.map((e=>this.renderEntity(e)))}
        </div>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(Re(Ie(i.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        height: 100%;
      }
      .entities {
        display: flex;
        padding: 0 16px 4px;
        flex-wrap: wrap;
        box-sizing: border-box;
        align-content: center;
      }
      .entities.no-header {
        padding-top: 16px;
      }
      .entity {
        box-sizing: border-box;
        padding: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-bottom: 12px;
        width: var(--glance-column-width, 20%);
      }
      .entity:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 14px;
        padding: 4px;
        margin: -4px 0;
      }
      .entity div {
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        min-height: var(--paper-font-body1_-_line-height, 20px);
      }
      state-badge {
        margin: 8px 0;
      }
    `}},{kind:"method",key:"renderEntity",value:function(e){var t;const r=this.hass.states[e.entity];return r?n.dy`
      <div
        class="entity"
        .config="${e}"
        @action=${this._handleAction}
        .actionHandler=${(0,v.K)({hasHold:(0,w._)(e.hold_action),hasDoubleClick:(0,w._)(e.double_tap_action)})}
        tabindex=${(0,o.o)((0,w._)(e.tap_action)?"0":void 0)}
      >
        ${this._config.show_name?n.dy`
              <div class="name">
                ${"name"in e?e.name:(0,u.C)(r)}
              </div>
            `:""}
        ${this._config.show_icon?n.dy`
              <state-badge
                .hass=${this.hass}
                .stateObj=${r}
                .overrideIcon=${e.icon}
                .overrideImage=${e.image}
                .stateColor=${null!==(t=!1===e.state_color||e.state_color)&&void 0!==t?t:this._config.state_color}
              ></state-badge>
            `:""}
        ${this._config.show_state&&!1!==e.show_state?n.dy`
              <div>
                ${"sensor"!==(0,d.M)(e.entity)||"timestamp"!==r.attributes.device_class||ue.V_.includes(r.state)?e.show_last_changed?(0,De.Z)(new Date(r.last_changed),this.hass.localize):(0,h.D)(this.hass.localize,r,this.hass.language):n.dy`
                      <hui-timestamp-display
                        .hass=${this.hass}
                        .ts=${new Date(r.state)}
                        .format=${e.format}
                      ></hui-timestamp-display>
                    `}
              </div>
            `:""}
      </div>
    `:n.dy`
        <hui-warning-element
          .label=${(0,k.i)(this.hass,e.entity)}
        ></hui-warning-element>
      `}},{kind:"method",key:"_handleAction",value:function(e){const t=e.currentTarget.config;(0,b.G)(this,this.hass,t,e.detail.action)}}]}}),n.oi);var Me=r(8330),Ve=(r(92390),r(99990));function Ne(){Ne=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Be(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return We(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?We(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=qe(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Ze(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Ze(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Ge(e){var t,r=qe(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Ue(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Be(e){return e.decorators&&e.decorators.length}function He(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Ze(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function qe(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function Le(e,t,r){return(Le="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ye(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Ye(e){return(Ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=Ne();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(He(o.descriptor)||He(n.descriptor)){if(Be(o)||Be(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Be(o)){if(Be(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Ue(o,n)}else t.push(o)}return t}(s.d.map(Ge)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-history-graph-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(1041),r.e(8374),r.e(7924),r.e(6014),r.e(4535),r.e(6902),r.e(6523)]).then(r.bind(r,52524)),document.createElement("hui-history-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"history-graph",entities:(0,g.j)(e,1,t,r,["sensor"])}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_stateHistory",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_cacheConfig",value:void 0},{kind:"field",key:"_fetching",value:()=>!1},{kind:"field",key:"_throttleGetStateHistory",value:void 0},{kind:"method",key:"getCardSize",value:function(){var e,t;return(null===(e=this._config)||void 0===e?void 0:e.title)?2:0+2*((null===(t=this._configEntities)||void 0===t?void 0:t.length)||1)}},{kind:"method",key:"setConfig",value:function(e){if(!e.entities)throw new Error("Entities must be defined");if(e.entities&&!Array.isArray(e.entities))throw new Error("Entities need to be an array");this._config=e,this._configEntities=e.entities?(0,$.A)(e.entities):[];const t=[];this._configEntities.forEach((e=>{t.push(e.entity),e.name&&(this._names[e.entity]=e.name)})),this._throttleGetStateHistory=(0,Me.P)((()=>{this._getStateHistory()}),e.refresh_interval||1e4),this._cacheConfig={cacheKey:t.join(),hoursToShow:e.hours_to_show||24}}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,pe.W)(this,e)}},{kind:"method",key:"updated",value:function(e){if(Le(Ye(i.prototype),"updated",this).call(this,e),!(this._config&&this.hass&&this._throttleGetStateHistory&&this._cacheConfig))return;if(!e.has("_config")&&!e.has("hass"))return;const t=e.get("_config");!e.has("_config")||(null==t?void 0:t.entities)===this._config.entities&&(null==t?void 0:t.hours_to_show)===this._config.hours_to_show?e.has("hass")&&setTimeout(this._throttleGetStateHistory,1e3):this._throttleGetStateHistory()}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?n.dy`
      <ha-card .header="${this._config.title}">
        <div
          class="content ${(0,Ce.$)({"has-header":!!this._config.title})}"
        >
          <state-history-charts
            .hass=${this.hass}
            .isLoadingData=${!this._stateHistory}
            .historyData=${this._stateHistory}
            .names=${this._names}
            .upToNow=${!0}
            .noSingle=${!0}
          ></state-history-charts>
        </div>
      </ha-card>
    `:n.dy``}},{kind:"method",key:"_getStateHistory",value:async function(){if(!this._fetching){this._fetching=!0;try{this._stateHistory={...await(0,Ve.W)(this.hass,this._cacheConfig.cacheKey,this._cacheConfig,this.hass.localize,this.hass.language)}}finally{this._fetching=!1}}}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        height: 100%;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
    `}}]}}),n.oi);function Ke(){Ke=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Je(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return it(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?it(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=rt(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:tt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=tt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Xe(e){var t,r=rt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Qe(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Je(e){return e.decorators&&e.decorators.length}function et(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function tt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function rt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function it(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function nt(e,t,r){return(nt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ot(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function ot(e){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let st=function(e,t,r,i){var n=Ke();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(et(o.descriptor)||et(n.descriptor)){if(Je(o)||Je(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Je(o)){if(Je(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Qe(o,n)}else t.push(o)}return t}(s.d.map(Xe)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(3641),r.e(8946),r.e(7924),r.e(9033),r.e(1572),r.e(1527),r.e(5422),r.e(5324),r.e(1480),r.e(7482),r.e(4535),r.e(3822),r.e(6902),r.e(3284),r.e(2231),r.e(2979),r.e(3499)]).then(r.bind(r,74513)),document.createElement("hui-stack-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{cards:[]}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"editMode",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"_cards",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.cards||!Array.isArray(e.cards))throw new Error("Card config incorrect");this._config=e,this._cards=e.cards.map((e=>this._createCardElement(e)))}},{kind:"method",key:"updated",value:function(e){if(nt(ot(i.prototype),"updated",this).call(this,e),this._cards&&(e.has("hass")||e.has("editMode")))for(const t of this._cards)this.hass&&(t.hass=this.hass),void 0!==this.editMode&&(t.editMode=this.editMode)}},{kind:"method",key:"render",value:function(){return this._config&&this._cards?n.dy`
      ${this._config.title?n.dy`<h1 class="card-header">${this._config.title}</h1>`:""}
      <div id="root">${this._cards}</div>
    `:n.dy``}},{kind:"get",static:!0,key:"sharedStyles",value:function(){return n.iv`
      .card-header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        display: block;
        padding: 24px 16px 16px;
      }
    `}},{kind:"method",key:"_createCardElement",value:function(e){const t=sr(e);return this.hass&&(t.hass=this.hass),t.addEventListener("ll-rebuild",(r=>{r.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}},{kind:"method",key:"_rebuildCard",value:function(e,t){const r=this._createCardElement(t);e.parentElement&&e.parentElement.replaceChild(r,e),this._cards=this._cards.map((t=>t===e?r:t))}}]}}),n.oi);customElements.define("hui-horizontal-stack-card",class extends st{async getCardSize(){if(!this._cards)return 0;const e=[];for(const r of this._cards)e.push((0,j.N)(r));const t=await Promise.all(e);return Math.max(...t)}static get styles(){return[super.sharedStyles,n.iv`
        #root {
          display: flex;
          height: 100%;
        }
        #root > * {
          flex: 1 1 0;
          margin: 0 4px;
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      `]}});var at=r(55317),ct=(r(32333),r(40095)),lt=(r(10983),r(21668));function dt(){dt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!ut(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return vt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?vt(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=yt(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:mt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=mt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ht(e){var t,r=yt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function ft(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ut(e){return e.decorators&&e.decorators.length}function pt(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function mt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function yt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function vt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function gt(e,t,r){return(gt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=bt(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function bt(e){return(bt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=dt();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(pt(o.descriptor)||pt(n.descriptor)){if(ut(o)||ut(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(ut(o)){if(ut(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}ft(o,n)}else t.push(o)}return t}(s.d.map(ht)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-light-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(8946),r.e(7924),r.e(1527),r.e(5422),r.e(4535),r.e(6902),r.e(3284),r.e(5570)]).then(r.bind(r,24596)),document.createElement("hui-light-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"light",entity:(0,g.j)(e,1,t,r,["light"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",key:"_brightnessTimout",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"light"!==e.entity.split(".")[0])throw new Error("Specify an entity from within the light domain.");this._config={tap_action:{action:"toggle"},hold_action:{action:"more-info"},...e}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n.dy``;const e=this.hass.states[this._config.entity];if(!e)return n.dy`
        <hui-warning>
          ${(0,k.i)(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=Math.round(e.attributes.brightness/255*100)||0;return n.dy`
      <ha-card>
        <mwc-icon-button
          class="more-info"
          label="Open more info"
          @click=${this._handleMoreInfo}
          tabindex="0"
        >
          <ha-svg-icon .path=${at.SXi}></ha-svg-icon>
        </mwc-icon-button>

        <div class="content">
          <div id="controls">
            <div id="slider">
              <round-slider
                min="1"
                max="100"
                .value=${t}
                .disabled=${ue.V_.includes(e.state)}
                @value-changing=${this._dragEvent}
                @value-changed=${this._setBrightness}
                style=${(0,s.V)({visibility:(0,ct.e)(e,lt.LU)?"visible":"hidden"})}
              ></round-slider>
              <ha-icon-button
                class="light-button ${(0,Ce.$)({"slider-center":(0,ct.e)(e,lt.LU),"state-on":"on"===e.state,"state-unavailable":e.state===ue.nZ})}"
                .icon=${this._config.icon||(0,p.M)(e)}
                .disabled=${ue.V_.includes(e.state)}
                style=${(0,s.V)({filter:this._computeBrightness(e),color:this._computeColor(e)})}
                @action=${this._handleAction}
                .actionHandler=${(0,v.K)({hasHold:(0,w._)(this._config.hold_action),hasDoubleClick:(0,w._)(this._config.double_tap_action)})}
                tabindex="0"
              ></ha-icon-button>
            </div>
          </div>

          <div id="info">
            ${ue.V_.includes(e.state)?n.dy`
                  <div>
                    ${(0,h.D)(this.hass.localize,e,this.hass.language)}
                  </div>
                `:n.dy`
                  <div class="brightness">
                    %
                  </div>
                `}
            ${this._config.name||(0,u.C)(e)}
          </div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,pe.G)(this,e)}},{kind:"method",key:"updated",value:function(e){if(gt(bt(i.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;if(!this.hass.states[this._config.entity])return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_dragEvent",value:function(e){this.shadowRoot.querySelector(".brightness").innerHTML=e.detail.value+" %",this._showBrightness(),this._hideBrightness()}},{kind:"method",key:"_showBrightness",value:function(){clearTimeout(this._brightnessTimout),this.shadowRoot.querySelector(".brightness").classList.add("show_brightness")}},{kind:"method",key:"_hideBrightness",value:function(){this._brightnessTimout=window.setTimeout((()=>{this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness")}),500)}},{kind:"method",key:"_setBrightness",value:function(e){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:e.detail.value})}},{kind:"method",key:"_computeBrightness",value:function(e){if("off"===e.state||!e.attributes.brightness)return"";return`brightness(${(e.attributes.brightness+245)/5}%)`}},{kind:"method",key:"_computeColor",value:function(e){if("off"===e.state||!e.attributes.hs_color)return"";const[t,r]=e.attributes.hs_color;return r<=10?"":`hsl(${t}, 100%, ${100-r/2}%)`}},{kind:"method",key:"_handleAction",value:function(e){(0,b.G)(this,this.hass,this._config,e.detail.action)}},{kind:"method",key:"_handleMoreInfo",value:function(){(0,fe.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        text-align: center;
        --name-font-size: 1.2rem;
        --brightness-font-size: 1.2rem;
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      #controls {
        display: flex;
        justify-content: center;
        padding: 16px;
        position: relative;
      }

      #slider {
        height: 100%;
        width: 100%;
        position: relative;
        max-width: 200px;
        min-width: 100px;
      }

      round-slider {
        --round-slider-path-color: var(--disabled-text-color);
        --round-slider-bar-color: var(--primary-color);
        padding-bottom: 10%;
      }

      .light-button {
        color: var(--paper-item-icon-color, #44739e);
        width: 60%;
        height: auto;
        position: absolute;
        max-width: calc(100% - 40px);
        box-sizing: border-box;
        border-radius: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        --mdc-icon-button-size: 100%;
        --mdc-icon-size: 100%;
      }

      .light-button.state-on {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      .light-button.state-unavailable {
        color: var(--state-icon-unavailable-color);
      }

      #info {
        text-align: center;
        margin-top: -56px;
        padding: 16px;
        font-size: var(--name-font-size);
      }

      .brightness {
        font-size: var(--brightness-font-size);
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        -moz-transition: opacity 0.5s ease-in-out;
        -webkit-transition: opacity 0.5s ease-in-out;
      }

      .show_brightness {
        opacity: 1;
      }
    `}}]}}),n.oi);function wt(){wt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!_t(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Dt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Dt(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Ct(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Pt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Pt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function kt(e){var t,r=Ct(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Et(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _t(e){return e.decorators&&e.decorators.length}function xt(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Pt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Ct(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Dt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function At(e,t,r){return(At="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=zt(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function zt(e){return(zt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=wt();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(xt(o.descriptor)||xt(n.descriptor)){if(_t(o)||_t(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(_t(o)){if(_t(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Et(o,n)}else t.push(o)}return t}(s.d.map(kt)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-sensor-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(3641),r.e(8946),r.e(2982),r.e(4535),r.e(5861)]).then(r.bind(r,67477)),document.createElement("hui-sensor-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"sensor",entity:(0,g.j)(e,1,t,r,["sensor"],(e=>!isNaN(Number(e.state))&&!!e.attributes.unit_of_measurement))[0]||"",graph:"line"}}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"sensor"!==e.entity.split(".")[0])throw new Error("Specify an entity from within the sensor domain.");const{graph:t,detail:r,hours_to_show:n,...o}=e,s={...o,type:"entity"};if("line"===t){const t={type:"graph",entity:e.entity,detail:r||1,hours_to_show:n||24};s.footer=t}At(zt(i.prototype),"setConfig",this).call(this,s)}}]}}),Pe);var St=r(74674);function Ot(){Ot=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!$t(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Mt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Mt(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=It(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Rt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Rt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function Tt(e){var t,r=It(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function jt(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function $t(e){return e.decorators&&e.decorators.length}function Ft(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Rt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function It(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Mt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function Vt(e,t,r){return(Vt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Nt(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Nt(e){return(Nt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const Gt={auto:"hass:calendar-sync",heat_cool:"hass:autorenew",heat:"hass:fire",cool:"hass:snowflake",off:"hass:power",fan_only:"hass:fan",dry:"hass:water-percent"};!function(e,t,r,i){var n=Ot();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Ft(o.descriptor)||Ft(n.descriptor)){if($t(o)||$t(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if($t(o)){if($t(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}jt(o,n)}else t.push(o)}return t}(s.d.map(Tt)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-thermostat-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(8946),r.e(7523),r.e(4535),r.e(6187)]).then(r.bind(r,74728)),document.createElement("hui-thermostat-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"thermostat",entity:(0,g.j)(e,1,t,r,["climate"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_setTemp",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-card")],key:"_card",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 7}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"climate"!==e.entity.split(".")[0])throw new Error("Specify an entity from within the climate domain.");this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n.dy``;const e=this.hass.states[this._config.entity];if(!e)return n.dy`
        <hui-warning>
          ${(0,k.i)(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=e.state in Gt?e.state:"unknown-mode",r=this._config.name||(0,u.C)(this.hass.states[this._config.entity]),i=null!==e.attributes.temperature&&Number.isFinite(Number(e.attributes.temperature))?e.attributes.temperature:e.attributes.min_temp,o=e.state===ue.nZ?n.dy` <round-slider disabled="true"></round-slider> `:n.dy`
            <round-slider
              .value=${i}
              .low=${e.attributes.target_temp_low}
              .high=${e.attributes.target_temp_high}
              .min=${e.attributes.min_temp}
              .max=${e.attributes.max_temp}
              .step=${this._stepSize}
              @value-changing=${this._dragEvent}
              @value-changed=${this._setTemperature}
            ></round-slider>
          `,s=isNaN(e.attributes.current_temperature)?"":n.YP`
          <svg viewBox="0 0 40 20">
            <text
              x="50%"
              dx="1"
              y="60%"
              text-anchor="middle"
              style="font-size: 13px;"
            >
              ${e.attributes.current_temperature}
              <tspan dx="-3" dy="-6.5" style="font-size: 4px;">
                ${this.hass.config.unit_system.temperature}
              </tspan>
            </text>
          </svg>
        `,a=n.YP`
      <svg id="set-values">
        <g>
          <text text-anchor="middle" class="set-value">
            ${e.state===ue.nZ?this.hass.localize("state.default.unavailable"):void 0===this._setTemp||null===this._setTemp?"":Array.isArray(this._setTemp)?1===this._stepSize?n.YP`
                      ${this._setTemp[0].toFixed()} -
                      ${this._setTemp[1].toFixed()}
                      `:n.YP`
                      ${this._setTemp[0].toFixed(1)} -
                      ${this._setTemp[1].toFixed(1)}
                      `:1===this._stepSize?n.YP`
                      ${this._setTemp.toFixed()}
                      `:n.YP`
                      ${this._setTemp.toFixed(1)}
                      `}
          </text>
          <text
            dy="22"
            text-anchor="middle"
            id="set-mode"
          >
            ${e.attributes.hvac_action?this.hass.localize("state_attributes.climate.hvac_action."+e.attributes.hvac_action):this.hass.localize("component.climate.state._."+e.state)}
            ${e.attributes.preset_mode&&e.attributes.preset_mode!==St.T1?n.dy`
                    -
                    ${this.hass.localize("state_attributes.climate.preset_mode."+e.attributes.preset_mode)||e.attributes.preset_mode}
                  `:""}
          </text>
        </g>
      </svg>
    `;return n.dy`
      <ha-card
        class=${(0,Ce.$)({[t]:!0})}
      >
        <mwc-icon-button
          class="more-info"
          label="Open more info"
          @click=${this._handleMoreInfo}
          tabindex="0"
        >
          <ha-svg-icon .path=${at.SXi}></ha-svg-icon>
        </mwc-icon-button>

        <div class="content">
          <div id="controls">
            <div id="slider">
              ${o}
              <div id="slider-center">
                <div id="temperature">
                  ${s} ${a}
                </div>
              </div>
            </div>
          </div>
          <div id="info">
            <div id="modes">
              ${(e.attributes.hvac_modes||[]).concat().sort(St.ZS).map((e=>this._renderIcon(e,t)))}
            </div>
            ${r}
          </div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,pe.G)(this,e)}},{kind:"method",key:"updated",value:function(e){if(Vt(Nt(i.prototype),"updated",this).call(this,e),!this._config||!this.hass||!e.has("hass")&&!e.has("_config"))return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme);const n=this.hass.states[this._config.entity];n&&(t&&t.states[this._config.entity]===n||(this._setTemp=this._getSetTemp(n),this._rescale_svg()))}},{kind:"method",key:"_rescale_svg",value:function(){const e=this._card;e&&e.updateComplete.then((()=>{const e=this.shadowRoot.querySelector("#set-values"),t=e.querySelector("g").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`),e.setAttribute("width",""+t.width),e.setAttribute("height",""+t.height)}))}},{kind:"get",key:"_stepSize",value:function(){const e=this.hass.states[this._config.entity];return e.attributes.target_temp_step?e.attributes.target_temp_step:this.hass.config.unit_system.temperature===a.gD?1:.5}},{kind:"method",key:"_getSetTemp",value:function(e){if(e.state!==ue.nZ)return e.attributes.target_temp_low&&e.attributes.target_temp_high?[e.attributes.target_temp_low,e.attributes.target_temp_high]:e.attributes.temperature}},{kind:"method",key:"_dragEvent",value:function(e){const t=this.hass.states[this._config.entity];e.detail.low?this._setTemp=[e.detail.low,t.attributes.target_temp_high]:e.detail.high?this._setTemp=[t.attributes.target_temp_low,e.detail.high]:this._setTemp=e.detail.value}},{kind:"method",key:"_setTemperature",value:function(e){const t=this.hass.states[this._config.entity];e.detail.low?this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:e.detail.low,target_temp_high:t.attributes.target_temp_high}):e.detail.high?this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:t.attributes.target_temp_low,target_temp_high:e.detail.high}):this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:e.detail.value})}},{kind:"method",key:"_renderIcon",value:function(e,t){return Gt[e]?n.dy`
      <ha-icon-button
        class="${(0,Ce.$)({"selected-icon":t===e})}"
        .mode="${e}"
        .icon="${Gt[e]}"
        @click=${this._handleAction}
        tabindex="0"
      ></ha-icon-button>
    `:n.dy``}},{kind:"method",key:"_handleMoreInfo",value:function(){(0,fe.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_handleAction",value:function(e){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e.currentTarget.mode})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
        position: relative;
        overflow: hidden;
        --name-font-size: 1.2rem;
        --brightness-font-size: 1.2rem;
        --rail-border-color: transparent;
        --auto-color: green;
        --eco-color: springgreen;
        --cool-color: #2b9af9;
        --heat-color: #ff8100;
        --manual-color: #44739e;
        --off-color: #8a8a8a;
        --fan_only-color: #8a8a8a;
        --dry-color: #efbd07;
        --idle-color: #8a8a8a;
        --unknown-color: #bac;
      }
      .auto,
      .heat_cool {
        --mode-color: var(--auto-color);
      }
      .cool {
        --mode-color: var(--cool-color);
      }
      .heat {
        --mode-color: var(--heat-color);
      }
      .manual {
        --mode-color: var(--manual-color);
      }
      .off {
        --mode-color: var(--off-color);
      }
      .fan_only {
        --mode-color: var(--fan_only-color);
      }
      .eco {
        --mode-color: var(--eco-color);
      }
      .dry {
        --mode-color: var(--dry-color);
      }
      .idle {
        --mode-color: var(--idle-color);
      }
      .unknown-mode {
        --mode-color: var(--unknown-color);
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      #controls {
        display: flex;
        justify-content: center;
        padding: 16px;
        position: relative;
      }

      #slider {
        height: 100%;
        width: 100%;
        position: relative;
        max-width: 250px;
        min-width: 100px;
      }

      round-slider {
        --round-slider-path-color: var(--disabled-text-color);
        --round-slider-bar-color: var(--mode-color);
        padding-bottom: 10%;
      }

      #slider-center {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        box-sizing: border-box;
        border-radius: 100%;
        left: 20px;
        top: 20px;
        text-align: center;
        overflow-wrap: break-word;
        pointer-events: none;
      }

      #temperature {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 50%;
        top: 45%;
        left: 50%;
      }

      #set-values {
        max-width: 80%;
        transform: translate(0, -50%);
        font-size: 20px;
      }

      #set-mode {
        fill: var(--secondary-text-color);
        font-size: 16px;
      }

      #info {
        display: flex-vertical;
        justify-content: center;
        text-align: center;
        padding: 16px;
        margin-top: -60px;
        font-size: var(--name-font-size);
      }

      #modes > * {
        color: var(--disabled-text-color);
        cursor: pointer;
        display: inline-block;
      }

      #modes .selected-icon {
        color: var(--mode-color);
      }

      text {
        fill: var(--primary-text-color);
      }
    `}}]}}),n.oi);customElements.define("hui-vertical-stack-card",class extends st{async getCardSize(){if(!this._cards)return 0;const e=[];for(const t of this._cards)e.push((0,j.N)(t));return(await Promise.all(e)).reduce(((e,t)=>e+t),0)}static get styles(){return[super.sharedStyles,n.iv`
        #root {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #root > * {
          margin: 4px 0 4px 0;
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      `]}});var Ut=r(38346),Bt=r(75692),Ht=r(54845);function Zt(){Zt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Lt(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Qt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qt(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Xt(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Kt(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Kt(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function qt(e){var t,r=Xt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Wt(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Lt(e){return e.decorators&&e.decorators.length}function Yt(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Kt(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Xt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Qt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function Jt(e,t,r){return(Jt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=er(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function er(e){return(er=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const tr=864e5;!function(e,t,r,i){var n=Zt();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Yt(o.descriptor)||Yt(n.descriptor)){if(Lt(o)||Lt(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Lt(o)){if(Lt(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Wt(o,n)}else t.push(o)}return t}(s.d.map(qt)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-weather-forecast-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(4358),r.e(8161),r.e(1041),r.e(8374),r.e(3641),r.e(8946),r.e(4325),r.e(4535),r.e(258)]).then(r.bind(r,65679)),document.createElement("hui-weather-forecast-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"weather-forecast",entity:(0,g.j)(e,1,t,r,["weather"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0,attribute:"veryverynarrow"})],key:"_veryVeryNarrow",value:()=>!1},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"connectedCallback",value:function(){Jt(er(i.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachObserver()))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"getCardSize",value:function(){var e;return!1!==(null===(e=this._config)||void 0===e?void 0:e.show_forecast)?5:2}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entity)throw new Error("Invalid card configuration");if(!(0,m.T)(e.entity))throw new Error("Invalid Entity");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,pe.G)(this,e)}},{kind:"method",key:"firstUpdated",value:function(){this._measureCard(),this._attachObserver()}},{kind:"method",key:"updated",value:function(e){if(Jt(er(i.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");(e.has("hass")&&!t||e.has("_config")&&!r||e.has("hass")&&t.themes!==this.hass.themes||e.has("_config")&&r.theme!==this._config.theme)&&((0,c.R)(this,this.hass.themes,this._config.theme),this.requestUpdate())}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config||!this.hass)return n.dy``;const r=this.hass.states[this._config.entity];if(!r)return n.dy`
        <hui-warning>
          ${(0,k.i)(this.hass,this._config.entity)}
        </hui-warning>
      `;if(r.state===ue.nZ)return n.dy`
        <ha-card class="unavailable" @click=${this._handleAction}>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable","entity",`${(0,u.C)(r)} (${this._config.entity})`)}
        </ha-card>
      `;const i=!1!==(null===(e=this._config)||void 0===e?void 0:e.show_forecast)&&(null===(t=r.attributes.forecast)||void 0===t?void 0:t.length)?r.attributes.forecast.slice(0,this._veryVeryNarrow?3:5):void 0;let o,s;if((null==i?void 0:i.length)&&(null==i?void 0:i.length)>2){const e=new Date(i[1].datetime),t=new Date(i[2].datetime).getTime()-e.getTime();if(o=t<tr,o){const e=new Date(i[0].datetime),t=new Date(i[i.length-1].datetime).getTime()-e.getTime();s=t>tr}}const a=(0,Bt.Cq)(r.state,this,!1,this.hass.auth.accessToken),c=(0,Bt.M0)(r.state);return n.dy`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${(0,v.K)()}
        tabindex="0"
      >
        <div class="content">
          <div class="icon-image">
            ${a||n.dy`
              <ha-icon
                class="weather-icon"
                .icon=${(0,p.M)(r)}
              ></ha-icon>
            `}
          </div>
          <div class="info">
            <div class="name-state">
              <div class="state">
                <!-- IoB print name instead of state which is an URL -->
                ${c?this._config.name||(0,u.C)(r):(0,h.D)(this.hass.localize,r,this.hass.language)}
              </div>
              <div class="name">
                <!-- IoB name is already printed once -->
                ${c?"":this._config.name||(0,u.C)(r)}
              </div>
            </div>
            <div class="temp-attribute">
              <div class="temp">
                ${r.attributes.temperature}<span
                  >${(0,Bt.pv)(this.hass,"temperature")}</span
                >
              </div>
              <div class="attribute">
                ${void 0!==this._config.secondary_info_attribute?n.dy`
                      ${this._config.secondary_info_attribute in Bt.rc?n.dy`
                            <ha-svg-icon
                              class="attr-icon"
                              .path=${Bt.rc[this._config.secondary_info_attribute]}
                            ></ha-svg-icon>
                          `:this.hass.localize("ui.card.weather.attributes."+this._config.secondary_info_attribute)}
                      ${"wind_speed"===this._config.secondary_info_attribute?(0,Bt.NF)(this.hass,r.attributes.wind_speed,r.attributes.wind_bearing):n.dy`
                            ${r.attributes[this._config.secondary_info_attribute]}
                            ${(0,Bt.pv)(this.hass,this._config.secondary_info_attribute)}
                          `}
                    `:(0,Bt.k2)(this.hass,r)}
              </div>
            </div>
          </div>
        </div>
        ${i?n.dy`
              <div class="forecast">
                ${i.map((e=>n.dy`
                    <div>
                      <div>
                        ${s?n.dy`
                              ${new Date(e.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}
                              <div class="daynight">
                                ${void 0===e.daytime||e.daytime?this.hass.localize("ui.card.weather.day"):this.hass.localize("ui.card.weather.night")}<br />
                              </div>
                            `:o?n.dy`
                              ${new Date(e.datetime).toLocaleTimeString(this.hass.language,{hour:"numeric"})}
                            `:n.dy`
                              ${new Date(e.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}
                            `}
                      </div>
                      ${void 0!==e.condition&&null!==e.condition?n.dy`
                            <div class="forecast-image-icon">
                              ${(0,Bt.Cq)(e.condition,this,!(e.daytime||void 0===e.daytime),this.hass.auth.accessToken)}
                            </div>
                          `:""}
                      ${void 0!==e.temperature&&null!==e.temperature?n.dy`
                            <div class="temp">
                              ${e.temperature}°
                            </div>
                          `:""}
                      ${void 0!==e.templow&&null!==e.templow?n.dy`
                            <div class="templow">
                              ${e.templow}°
                            </div>
                          `:""}
                    </div>
                  `))}
              </div>
            `:""}
      </ha-card>
    `}},{kind:"method",key:"_handleAction",value:function(){(0,fe.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,Ht.P)(),this._resizeObserver=new ResizeObserver((0,Ut.D)((()=>this._measureCard()),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"method",key:"_measureCard",value:function(){if(!this.isConnected)return;const e=this.shadowRoot.querySelector("ha-card");e&&(e.offsetWidth<375?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.offsetWidth<300?this.setAttribute("verynarrow",""):this.removeAttribute("verynarrow"),this._veryVeryNarrow=e.offsetWidth<245)}},{kind:"get",static:!0,key:"styles",value:function(){return[Bt.A$,n.iv`
        ha-card {
          cursor: pointer;
          outline: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        }

        .content {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }

        .icon-image {
          display: flex;
          align-items: center;
          min-width: 64px;
          margin-right: 16px;
        }

        .icon-image > * {
          flex: 0 0 64px;
          height: 64px;
        }

        .weather-icon {
          --mdc-icon-size: 64px;
        }

        .info {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          overflow: hidden;
        }

        .temp-attribute {
          text-align: right;
        }

        .temp-attribute .temp {
          position: relative;
          margin-right: 24px;
        }

        .temp-attribute .temp span {
          position: absolute;
          font-size: 24px;
          top: 1px;
        }

        .state,
        .temp-attribute .temp {
          font-size: 28px;
          line-height: 1.2;
        }

        .name,
        .attribute {
          font-size: 14px;
          line-height: 1;
        }

        .name-state {
          overflow: hidden;
          padding-right: 12px;
          width: 100%;
        }

        .name,
        .state {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .attribute {
          white-space: nowrap;
        }

        .forecast {
          display: flex;
          justify-content: space-around;
          padding-top: 16px;
        }

        .forecast > div {
          text-align: center;
        }

        .forecast .icon,
        .forecast .temp {
          margin: 4px 0;
        }

        .forecast .temp {
          font-size: 16px;
        }

        .forecast-image-icon {
          padding-top: 4px;
          padding-bottom: 4px;
          display: flex;
        }

        .forecast-image-icon > * {
          width: 40px;
          height: 40px;
          --mdc-icon-size: 40px;
        }

        .forecast-icon {
          --mdc-icon-size: 40px;
        }

        .attr-icon {
          --mdc-icon-size: 20px;
        }

        .attribute,
        .templow,
        .daynight,
        .name {
          color: var(--secondary-text-color);
        }

        .unavailable {
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          padding: 10px 20px;
          text-align: center;
        }

        /* ============= NARROW ============= */

        :host([narrow]) .icon-image {
          min-width: 52px;
        }

        :host([narrow]) .weather-image {
          flex: 0 0 52px;
          width: 52px;
        }

        :host([narrow]) .icon-image .weather-icon {
          --mdc-icon-size: 52px;
        }

        :host([narrow]) .state,
        :host([narrow]) .temp-attribute .temp {
          font-size: 22px;
        }

        :host([narrow]) .temp-attribute .temp {
          margin-right: 16px;
        }

        :host([narrow]) .temp span {
          top: 1px;
          font-size: 16px;
        }

        /* ============= VERY NARROW ============= */

        :host([veryNarrow]) .name,
        :host([veryNarrow]) .attribute {
          display: none;
        }

        :host([veryNarrow]) .info {
          flex-direction: column;
          align-items: flex-start;
        }

        :host([veryNarrow]) .name-state {
          padding-right: 0;
        }

        /* ============= VERY VERY NARROW ============= */

        :host([veryVeryNarrow]) .info {
          padding-top: 4px;
          align-items: center;
        }

        :host([veryVeryNarrow]) .content {
          flex-wrap: wrap;
          justify-content: center;
          flex-direction: column;
        }

        :host([veryVeryNarrow]) .icon-image {
          margin-right: 0;
        }
      `]}}]}}),n.oi);var rr=r(7778);const ir=new Set(["entity","entities","button","entity-button","glance","history-graph","horizontal-stack","light","sensor","thermostat","vertical-stack","weather-forecast"]),nr={"alarm-panel":()=>r.e(1878).then(r.bind(r,81878)),error:()=>Promise.all([r.e(9033),r.e(1572),r.e(5796)]).then(r.bind(r,55796)),"empty-state":()=>r.e(7284).then(r.bind(r,67284)),starting:()=>r.e(7873).then(r.bind(r,47873)),"entity-filter":()=>r.e(3688).then(r.bind(r,33688)),humidifier:()=>r.e(8558).then(r.bind(r,68558)),"media-control":()=>Promise.all([r.e(9824),r.e(4564)]).then(r.bind(r,54564)),"picture-elements":()=>Promise.all([r.e(319),r.e(7282),r.e(2016),r.e(7364),r.e(9103)]).then(r.bind(r,83358)),"picture-entity":()=>Promise.all([r.e(319),r.e(7282),r.e(5691)]).then(r.bind(r,41500)),"picture-glance":()=>Promise.all([r.e(319),r.e(7282),r.e(6584)]).then(r.bind(r,66621)),"plant-status":()=>r.e(8723).then(r.bind(r,48723)),"safe-mode":()=>r.e(4503).then(r.bind(r,24503)),"shopping-list":()=>Promise.all([r.e(7440),r.e(3376)]).then(r.bind(r,43376)),conditional:()=>r.e(8857).then(r.bind(r,68857)),gauge:()=>r.e(6130).then(r.bind(r,6130)),iframe:()=>r.e(5018).then(r.bind(r,95018)),map:()=>r.e(76).then(r.bind(r,60076)),markdown:()=>Promise.all([r.e(4940),r.e(6474)]).then(r.bind(r,51282)),picture:()=>r.e(5338).then(r.bind(r,45338)),calendar:()=>Promise.resolve().then(r.bind(r,80251))},or=e=>(0,rr.Xm)("card",e,ir,nr,void 0,void 0),sr=e=>(0,rr.Tw)("card",e,ir,nr,void 0,void 0),ar=e=>(0,rr.ED)(e,"card",ir,nr)},89026:(e,t,r)=>{"use strict";r.d(t,{t:()=>o});var i=r(7778);const n={picture:()=>r.e(9130).then(r.bind(r,69130)),buttons:()=>r.e(2587).then(r.bind(r,32587)),graph:()=>r.e(5773).then(r.bind(r,25773))},o=e=>(0,i.Tw)("header-footer",e,void 0,n,void 0,void 0)},54324:(e,t,r)=>{"use strict";r.d(t,{Z0:()=>i,BN:()=>n,LG:()=>o,f1:()=>s,qD:()=>a,Y7:()=>c,wI:()=>l,Uo:()=>d,YI:()=>h,mA:()=>f,PT:()=>u});const i=(e,t,r)=>{const[i]=t,n=[];return e.views.forEach(((t,o)=>{if(o!==i)return void n.push(e.views[o]);const s=t.cards?[...t.cards,r]:[r];n.push({...t,cards:s})})),{...e,views:n}},n=(e,t,r)=>{const[i]=t,n=[];return e.views.forEach(((t,o)=>{if(o!==i)return void n.push(e.views[o]);const s=t.cards?[...t.cards,...r]:[...r];n.push({...t,cards:s})})),{...e,views:n}},o=(e,t,r)=>{const[i,n]=t,o=[];return e.views.forEach(((t,s)=>{s===i?o.push({...t,cards:(t.cards||[]).map(((e,t)=>t===n?r:e))}):o.push(e.views[s])})),{...e,views:o}},s=(e,t)=>{const[r,i]=t,n=[];return e.views.forEach(((t,o)=>{o===r?n.push({...t,cards:(t.cards||[]).filter(((e,t)=>t!==i))}):n.push(e.views[o])})),{...e,views:n}},a=(e,t,r)=>{const[i,n]=t,o=[];return e.views.forEach(((t,s)=>{if(s!==i)return void o.push(e.views[s]);const a=t.cards?[...t.cards.slice(0,n),r,...t.cards.slice(n)]:[r];o.push({...t,cards:a})})),{...e,views:o}},c=(e,t,r)=>{const i=e.views[t[0]].cards[t[1]],n=e.views[r[0]].cards[r[1]],o=e.views[t[0]],s={...o,cards:o.cards.map(((e,r)=>r===t[1]?n:e))},a=t[0]===r[0]?s:e.views[r[0]],c={...a,cards:a.cards.map(((e,t)=>t===r[1]?i:e))};return{...e,views:e.views.map(((e,i)=>i===r[0]?c:i===t[0]?s:e))}},l=(e,t,r)=>{if(t[0]===r[0])throw new Error("You can not move a card to the view it is in.");const i=e.views[t[0]],n=i.cards[t[1]],o={...i,cards:(i.cards||[]).filter(((e,r)=>r!==t[1]))},s=e.views[r[0]],a=s.cards?[...s.cards,n]:[n],c={...s,cards:a};return{...e,views:e.views.map(((e,i)=>i===r[0]?c:i===t[0]?o:e))}},d=(e,t)=>({...e,views:e.views.concat(t)}),h=(e,t,r)=>({...e,views:e.views.map(((e,i)=>i===t?r:e))}),f=(e,t,r)=>{const i=e.views[t],n=e.views[r];return{...e,views:e.views.map(((e,o)=>o===r?i:o===t?n:e))}},u=(e,t)=>({...e,views:e.views.filter(((e,r)=>r!==t))})}}]);
//# sourceMappingURL=chunk.d3c9602f59f182464bfe.js.map