(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6584],{96151:(e,t,i)=>{"use strict";i.d(t,{T:()=>r,y:()=>n});const r=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},n=()=>new Promise((e=>{r(e)}))},66621:(e,t,i)=>{"use strict";i.r(t);var r=i(15652),n=i(81471),o=i(49629),s=i(49706),a=i(62877),c=i(58831),l=i(29171),d=i(91741),h=i(36145),f=(i(22098),i(10983),i(93491)),u=i(64588),p=i(22503),m=i(22193),g=i(53658),y=i(90271),v=(i(97282),i(75502));i(65082);function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!_(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=$(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:x(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=x(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function w(e){var t,i=$(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function k(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function $(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function P(e,t,i){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const A=new Set(["closed","locked","not_home","off"]);!function(e,t,i,r){var n=b();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(E(o.descriptor)||E(n.descriptor)){if(_(o)||_(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(_(o)){if(_(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}k(o,n)}else t.push(o)}return t}(s.d.map(w)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,r.Mo)("hui-picture-glance-card")],(function(e,t){class b extends t{constructor(...t){super(...t),e(this)}}return{F:b,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(5009),i.e(4358),i.e(8161),i.e(1041),i.e(8374),i.e(8946),i.e(7924),i.e(1527),i.e(5422),i.e(4535),i.e(6902),i.e(3284),i.e(528)]).then(i.bind(i,33785)),document.createElement("hui-picture-glance-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"picture-glance",title:"Kitchen",image:"https://demo.home-assistant.io/stub_config/kitchen.png",entities:(0,u.j)(e,2,t,i,["sensor","binary_sensor"])}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_config",value:void 0},{kind:"field",key:"_entitiesDialog",value:void 0},{kind:"field",key:"_entitiesToggle",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entities||!Array.isArray(e.entities)||!(e.image||e.camera_image||e.state_image)||e.state_image&&!e.entity)throw new Error("Invalid card configuration");const t=(0,y.A)(e.entities);this._entitiesDialog=[],this._entitiesToggle=[],t.forEach((t=>{e.force_dialog||!s.Kk.has((0,c.M)(t.entity))?this._entitiesDialog.push(t):this._entitiesToggle.push(t)})),this._config={hold_action:{action:"more-info"},...e}}},{kind:"method",key:"shouldUpdate",value:function(e){if((0,g.G)(this,e))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(this._entitiesDialog)for(const i of this._entitiesDialog)if(t.states[i.entity]!==this.hass.states[i.entity])return!0;if(this._entitiesToggle)for(const i of this._entitiesToggle)if(t.states[i.entity]!==this.hass.states[i.entity])return!0;return!1}},{kind:"method",key:"updated",value:function(e){if(P(C(b.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||(0,a.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?r.dy`
      <ha-card>
        <hui-image
          class=${(0,n.$)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.camera_image)})}
          @action=${this._handleAction}
          .actionHandler=${(0,f.K)({hasHold:(0,m._)(this._config.hold_action),hasDoubleClick:(0,m._)(this._config.double_tap_action)})}
          tabindex=${(0,o.o)((0,m._)(this._config.tap_action)?"0":void 0)}
          .config=${this._config}
          .hass=${this.hass}
          .image=${this._config.image}
          .stateImage=${this._config.state_image}
          .stateFilter=${this._config.state_filter}
          .cameraImage=${this._config.camera_image}
          .cameraView=${this._config.camera_view}
          .entity=${this._config.entity}
          .aspectRatio=${this._config.aspect_ratio}
        ></hui-image>
        <div class="box">
          ${this._config.title?r.dy` <div class="title">${this._config.title}</div> `:""}
          <div class="row">
            ${this._entitiesDialog.map((e=>this.renderEntity(e,!0)))}
          </div>
          <div class="row">
            ${this._entitiesToggle.map((e=>this.renderEntity(e,!1)))}
          </div>
        </div>
      </ha-card>
    `:r.dy``}},{kind:"method",key:"renderEntity",value:function(e,t){const i=this.hass.states[e.entity];return e={tap_action:{action:t?"more-info":"toggle"},hold_action:{action:"more-info"},...e},i?r.dy`
      <div class="wrapper">
        <ha-icon-button
          @action=${this._handleAction}
          .actionHandler=${(0,f.K)({hasHold:(0,m._)(e.hold_action),hasDoubleClick:(0,m._)(e.double_tap_action)})}
          tabindex=${(0,o.o)((0,m._)(e.tap_action)?void 0:"-1")}
          .disabled=${!(0,m._)(e.tap_action)}
          .config=${e}
          class=${(0,n.$)({"state-on":!A.has(i.state)})}
          .icon=${e.icon||(0,h.M)(i)}
          title=${`\n            ${(0,d.C)(i)} : ${(0,l.D)(this.hass.localize,i,this.hass.language)}\n          `}
        ></ha-icon-button>
        ${!0!==this._config.show_state&&!0!==e.show_state?r.dy`<div class="state"></div>`:r.dy`
              <div class="state">
                ${e.attribute?r.dy`
                      ${e.prefix}${i.attributes[e.attribute]}${e.suffix}
                    `:(0,l.D)(this.hass.localize,i,this.hass.language)}
              </div>
            `}
      </div>
    `:r.dy`
        <hui-warning-element
          .label=${(0,v.i)(this.hass,e.entity)}
        ></hui-warning-element>
      `}},{kind:"method",key:"_handleAction",value:function(e){const t=e.currentTarget.config;(0,p.G)(this,this.hass,t,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-card {
        position: relative;
        min-height: 48px;
        overflow: hidden;
        height: 100%;
        box-sizing: border-box;
      }

      hui-image.clickable {
        cursor: pointer;
      }

      .box {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        font-size: 16px;
        line-height: 40px;
        color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }

      .box .title {
        font-weight: 500;
        margin-left: 8px;
      }

      ha-icon-button {
        --mdc-icon-button-size: 40px;
        --disabled-text-color: currentColor;
        color: #a9a9a9;
      }

      ha-icon-button.state-on {
        color: white;
      }
      .state {
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        width: 40px;
      }
    `}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.1362d96cea2cdd65e207.js.map