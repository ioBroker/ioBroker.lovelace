"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[50148],{46046:(e,t,i)=>{i.d(t,{q:()=>n});var r=i(47181);const o=()=>Promise.all([i.e(85084),i.e(75049)]).then(i.bind(i,75049)),n=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"ha-dialog-automation-mode",dialogImport:o,dialogParams:t})}},89497:(e,t,i)=>{i.d(t,{D:()=>n});var r=i(47181);const o=()=>Promise.all([i.e(85084),i.e(74365)]).then(i.bind(i,74365)),n=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"ha-dialog-automation-rename",dialogImport:o,dialogParams:t})}},36859:(e,t,i)=>{i(51187);var r=i(37500),o=i(33310),n=i(47181),a=(i(13266),i(22098),i(31206),i(4940),i(25727),i(14089),i(3555),i(9381),i(86490)),s=i(11654);i(88165);function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!h(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function y(e,t,i){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},y(e,t,i||e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}!function(e,t,i,r){var o=l();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(u(n.descriptor)||u(o.descriptor)){if(h(n)||h(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(h(n)){if(h(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}d(n,o)}else t.push(n)}return t}(a.d.map(c)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("blueprint-automation-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"config",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_blueprints",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){y(v(i.prototype),"firstUpdated",this).call(this,e),this._getBlueprints()}},{kind:"get",key:"_blueprint",value:function(){if(this._blueprints)return this._blueprints[this.config.use_blueprint.path]}},{kind:"method",key:"render",value:function(){var e,t;const i=this._blueprint;return r.dy`
      ${this.disabled?r.dy`<ha-alert alert-type="warning">
            ${this.hass.localize("ui.panel.config.automation.editor.read_only")}
            <mwc-button slot="action" @click=${this._duplicate}>
              ${this.hass.localize("ui.panel.config.automation.editor.migrate")}
            </mwc-button>
          </ha-alert>`:""}
      ${"off"===(null===(e=this.stateObj)||void 0===e?void 0:e.state)?r.dy`
            <ha-alert alert-type="info">
              ${this.hass.localize("ui.panel.config.automation.editor.disabled")}
              <mwc-button slot="action" @click=${this._enable}>
                ${this.hass.localize("ui.panel.config.automation.editor.enable")}
              </mwc-button>
            </ha-alert>
          `:""}
      ${this.config.description?r.dy`<p class="description">${this.config.description}</p>`:""}
      <ha-card
        outlined
        class="blueprint"
        .header=${this.hass.localize("ui.panel.config.automation.editor.blueprint.header")}
      >
        <div class="blueprint-picker-container">
          ${this._blueprints?Object.keys(this._blueprints).length?r.dy`
                  <ha-blueprint-picker
                    .hass=${this.hass}
                    .label=${this.hass.localize("ui.panel.config.automation.editor.blueprint.blueprint_to_use")}
                    .blueprints=${this._blueprints}
                    .value=${this.config.use_blueprint.path}
                    .disabled=${this.disabled}
                    @value-changed=${this._blueprintChanged}
                  ></ha-blueprint-picker>
                `:this.hass.localize("ui.panel.config.automation.editor.blueprint.no_blueprints"):r.dy`<ha-circular-progress active></ha-circular-progress>`}
        </div>

        ${this.config.use_blueprint.path?i&&"error"in i?r.dy`<p class="warning padding">
                There is an error in this Blueprint: ${i.error}
              </p>`:r.dy`${null!=i&&i.metadata.description?r.dy`<ha-markdown
                    class="card-content"
                    breaks
                    .content=${i.metadata.description}
                  ></ha-markdown>`:""}
              ${null!=i&&null!==(t=i.metadata)&&void 0!==t&&t.input&&Object.keys(i.metadata.input).length?Object.entries(i.metadata.input).map((([e,t])=>{var i,o;return r.dy`<ha-settings-row .narrow=${this.narrow}>
                        <span slot="heading">${(null==t?void 0:t.name)||e}</span>
                        <ha-markdown
                          slot="description"
                          class="card-content"
                          breaks
                          .content=${null==t?void 0:t.description}
                        ></ha-markdown>
                        ${null!=t&&t.selector?r.dy`<ha-selector
                              .hass=${this.hass}
                              .selector=${t.selector}
                              .key=${e}
                              .value=${null!==(i=this.config.use_blueprint.input&&this.config.use_blueprint.input[e])&&void 0!==i?i:null==t?void 0:t.default}
                              .disabled=${this.disabled}
                              @value-changed=${this._inputChanged}
                            ></ha-selector>`:r.dy`<ha-textfield
                              .key=${e}
                              required
                              .value=${null!==(o=this.config.use_blueprint.input&&this.config.use_blueprint.input[e])&&void 0!==o?o:null==t?void 0:t.default}
                              .disabled=${this.disabled}
                              @input=${this._inputChanged}
                            ></ha-textfield>`}
                      </ha-settings-row>`})):r.dy`<p class="padding">
                    ${this.hass.localize("ui.panel.config.automation.editor.blueprint.no_inputs")}
                  </p>`}`:""}
      </ha-card>
    `}},{kind:"method",key:"_getBlueprints",value:async function(){this._blueprints=await(0,a.wc)(this.hass,"automation")}},{kind:"method",key:"_blueprintChanged",value:function(e){e.stopPropagation(),this.config.use_blueprint.path!==e.detail.value&&(0,n.B)(this,"value-changed",{value:{...this.config,use_blueprint:{path:e.detail.value}}})}},{kind:"method",key:"_inputChanged",value:function(e){var t,i;e.stopPropagation();const r=e.target,o=r.key,a=null!==(t=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==t?t:r.value;if(this.config.use_blueprint.input&&this.config.use_blueprint.input[o]===a||!this.config.use_blueprint.input&&""===a)return;const s={...this.config.use_blueprint.input,[o]:a};""!==a&&void 0!==a||delete s[o],(0,n.B)(this,"value-changed",{value:{...this.config,use_blueprint:{...this.config.use_blueprint,input:s}}})}},{kind:"method",key:"_enable",value:async function(){this.hass&&this.stateObj&&await this.hass.callService("automation","turn_on",{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_duplicate",value:function(){(0,n.B)(this,"duplicate")}},{kind:"get",static:!0,key:"styles",value:function(){return[s.Qx,r.iv`
        :host {
          display: block;
        }
        ha-card.blueprint {
          margin: 0 auto;
        }
        .padding {
          padding: 16px;
        }
        .link-button-row {
          padding: 14px;
        }
        .blueprint-picker-container {
          padding: 0 16px 16px;
        }
        ha-textfield,
        ha-blueprint-picker {
          display: block;
        }
        h3 {
          margin: 16px;
        }
        .introduction {
          margin-top: 0;
          margin-bottom: 12px;
        }
        .introduction a {
          color: var(--primary-color);
        }
        p {
          margin-bottom: 0;
        }
        .description {
          margin-bottom: 16px;
        }
        ha-settings-row {
          --paper-time-input-justify-content: flex-end;
          --settings-row-content-width: 100%;
          --settings-row-prefix-display: contents;
          border-top: 1px solid var(--divider-color);
        }
        ha-alert {
          margin-bottom: 16px;
          display: block;
        }
      `]}}]}}),r.oi)},44105:(e,t,i)=>{i.a(e,(async e=>{i(51187),i(44577),i(53268),i(12730);var t=i(37500),r=i(33310),o=i(8636),n=i(47181),a=i(83849),s=i(50577),l=i(96151),c=(i(81545),i(22098),i(36125),i(10983),i(52039),i(18900),i(93748)),d=i(26765),h=(i(27849),i(60010),i(23670)),u=i(11654),p=i(81796),f=(i(88165),i(46046)),m=i(89497),y=(i(36859),i(49819)),v=e([y]);function g(){g=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!w(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=A(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function b(e){var t,i=A(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function k(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function A(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function $(e,t,i){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},$(e,t,i||e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}y=(v.then?await v:v)[0];const z="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";let x=function(e,t,i,r){var o=g();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(_(n.descriptor)||_(o.descriptor)){if(w(n)||w(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(w(n)){if(w(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}k(n,o)}else t.push(n)}return t}(a.d.map(b)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}(null,(function(e,i){class h extends i{constructor(...t){super(...t),e(this)}}return{F:h,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"automationId",value:()=>null},{kind:"field",decorators:[(0,r.Cb)()],key:"entityId",value:()=>null},{kind:"field",decorators:[(0,r.Cb)()],key:"automations",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_dirty",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_errors",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_mode",value:()=>"gui"},{kind:"field",decorators:[(0,r.SB)()],key:"_readOnly",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_configSubscriptions",value:()=>({})},{kind:"field",key:"_configSubscriptionsId",value:()=>1},{kind:"method",key:"render",value:function(){var e;const i=this._entityId?this.hass.states[this._entityId]:void 0;return t.dy`
      <hass-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .backCallback=${this._backTapped}
        .header=${this._config?this._config.alias||this.hass.localize("ui.panel.config.automation.editor.default_name"):""}
      >
        ${null!==(e=this._config)&&void 0!==e&&e.id&&!this.narrow?t.dy`
              <mwc-button @click=${this._showTrace} slot="toolbar-icon">
                ${this.hass.localize("ui.panel.config.automation.editor.show_trace")}
              </mwc-button>
            `:""}
        <ha-button-menu corner="BOTTOM_START" slot="toolbar-icon">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.menu")}
            .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
          ></ha-icon-button>

          <mwc-list-item
            graphic="icon"
            .disabled=${!i}
            @click=${this._showInfo}
          >
            ${this.hass.localize("ui.panel.config.automation.editor.show_info")}
            <ha-svg-icon
              slot="graphic"
              .path=${"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"}
            ></ha-svg-icon>
          </mwc-list-item>

          <mwc-list-item
            graphic="icon"
            .disabled=${!i}
            @click=${this._runActions}
          >
            ${this.hass.localize("ui.panel.config.automation.editor.run")}
            <ha-svg-icon slot="graphic" .path=${"M8,5.14V19.14L19,12.14L8,5.14Z"}></ha-svg-icon>
          </mwc-list-item>

          ${i&&this._config&&this.narrow?t.dy`<a href="/config/automation/trace/${this._config.id}">
                <mwc-list-item graphic="icon">
                  ${this.hass.localize("ui.panel.config.automation.editor.show_trace")}
                  <ha-svg-icon
                    slot="graphic"
                    .path=${"M15,12C15,10.7 14.16,9.6 13,9.18V6.82C14.16,6.4 15,5.3 15,4A3,3 0 0,0 12,1A3,3 0 0,0 9,4C9,5.3 9.84,6.4 11,6.82V9.19C9.84,9.6 9,10.7 9,12C9,13.3 9.84,14.4 11,14.82V17.18C9.84,17.6 9,18.7 9,20A3,3 0 0,0 12,23A3,3 0 0,0 15,20C15,18.7 14.16,17.6 13,17.18V14.82C14.16,14.4 15,13.3 15,12M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M12,21A1,1 0 0,1 11,20A1,1 0 0,1 12,19A1,1 0 0,1 13,20A1,1 0 0,1 12,21Z"}
                  ></ha-svg-icon>
                </mwc-list-item>
              </a>`:""}

          <mwc-list-item
            graphic="icon"
            @click=${this._promptAutomationAlias}
            .disabled=${!this.automationId||"yaml"===this._mode}
          >
            ${this.hass.localize("ui.panel.config.automation.editor.rename")}
            <ha-svg-icon slot="graphic" .path=${"M18,17H10.5L12.5,15H18M6,17V14.5L13.88,6.65C14.07,6.45 14.39,6.45 14.59,6.65L16.35,8.41C16.55,8.61 16.55,8.92 16.35,9.12L8.47,17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}></ha-svg-icon>
          </mwc-list-item>

          ${this._config&&!("use_blueprint"in this._config)?t.dy`
                <mwc-list-item
                  graphic="icon"
                  @click=${this._promptAutomationMode}
                  .disabled=${this._readOnly||"yaml"===this._mode}
                >
                  ${this.hass.localize("ui.panel.config.automation.editor.change_mode")}
                  <ha-svg-icon
                    slot="graphic"
                    .path=${"M12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14M23.46,8.86L21.87,15.75L15,14.16L18.8,11.78C17.39,9.5 14.87,8 12,8C8.05,8 4.77,10.86 4.12,14.63L2.15,14.28C2.96,9.58 7.06,6 12,6C15.58,6 18.73,7.89 20.5,10.72L23.46,8.86Z"}
                  ></ha-svg-icon>
                </mwc-list-item>
              `:""}

          <mwc-list-item
            .disabled=${!this._readOnly&&!this.automationId}
            graphic="icon"
            @click=${this._duplicate}
          >
            ${this.hass.localize(this._readOnly?"ui.panel.config.automation.editor.migrate":"ui.panel.config.automation.editor.duplicate")}
            <ha-svg-icon
              slot="graphic"
              .path=${"M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z"}
            ></ha-svg-icon>
          </mwc-list-item>

          <li divider role="separator"></li>

          <mwc-list-item graphic="icon" @click=${this._switchUiMode}>
            ${this.hass.localize("ui.panel.config.automation.editor.edit_ui")}
            ${"gui"===this._mode?t.dy`<ha-svg-icon
                  class="selected_menu_item"
                  slot="graphic"
                  .path=${z}
                ></ha-svg-icon>`:""}
          </mwc-list-item>
          <mwc-list-item graphic="icon" @click=${this._switchYamlMode}>
            ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            ${"yaml"===this._mode?t.dy`<ha-svg-icon
                  class="selected_menu_item"
                  slot="graphic"
                  .path=${z}
                ></ha-svg-icon>`:""}
          </mwc-list-item>

          <li divider role="separator"></li>

          <mwc-list-item
            graphic="icon"
            .disabled=${!i}
            @click=${this._toggle}
          >
            ${"off"===(null==i?void 0:i.state)?this.hass.localize("ui.panel.config.automation.editor.enable"):this.hass.localize("ui.panel.config.automation.editor.disable")}
            <ha-svg-icon
              slot="graphic"
              .path=${"off"===(null==i?void 0:i.state)?"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9"}
            ></ha-svg-icon>
          </mwc-list-item>

          <mwc-list-item
            .disabled=${!this.automationId}
            class=${(0,o.$)({warning:Boolean(this.automationId)})}
            graphic="icon"
            @click=${this._deleteConfirm}
          >
            ${this.hass.localize("ui.panel.config.automation.picker.delete")}
            <ha-svg-icon
              class=${(0,o.$)({warning:Boolean(this.automationId)})}
              slot="graphic"
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            >
            </ha-svg-icon>
          </mwc-list-item>
        </ha-button-menu>

        ${this._config?t.dy`
              <div
                class="content ${(0,o.$)({"yaml-mode":"yaml"===this._mode})}"
                @subscribe-automation-config=${this._subscribeAutomationConfig}
              >
                ${this._errors?t.dy`<ha-alert alert-type="error">
                      ${this._errors}
                    </ha-alert>`:""}
                ${"gui"===this._mode?"use_blueprint"in this._config?t.dy`
                        <blueprint-automation-editor
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                          .isWide=${this.isWide}
                          .stateObj=${i}
                          .config=${this._config}
                          .disabled=${Boolean(this._readOnly)}
                          @value-changed=${this._valueChanged}
                          @duplicate=${this._duplicate}
                        ></blueprint-automation-editor>
                      `:t.dy`
                        <manual-automation-editor
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                          .isWide=${this.isWide}
                          .stateObj=${i}
                          .config=${this._config}
                          .disabled=${Boolean(this._readOnly)}
                          @value-changed=${this._valueChanged}
                          @duplicate=${this._duplicate}
                        ></manual-automation-editor>
                      `:"yaml"===this._mode?t.dy`
                      ${this._readOnly?t.dy`<ha-alert alert-type="warning">
                            ${this.hass.localize("ui.panel.config.automation.editor.read_only")}
                            <mwc-button slot="action" @click=${this._duplicate}>
                              ${this.hass.localize("ui.panel.config.automation.editor.migrate")}
                            </mwc-button>
                          </ha-alert>`:""}
                      ${"off"===(null==i?void 0:i.state)?t.dy`
                            <ha-alert alert-type="info">
                              ${this.hass.localize("ui.panel.config.automation.editor.disabled")}
                              <mwc-button slot="action" @click=${this._toggle}>
                                ${this.hass.localize("ui.panel.config.automation.editor.enable")}
                              </mwc-button>
                            </ha-alert>
                          `:""}
                      <ha-yaml-editor
                        .hass=${this.hass}
                        .defaultValue=${this._preprocessYaml()}
                        .readOnly=${this._readOnly}
                        @value-changed=${this._yamlChanged}
                      ></ha-yaml-editor>
                      <ha-card outlined>
                        <div class="card-actions">
                          <mwc-button @click=${this._copyYaml}>
                            ${this.hass.localize("ui.panel.config.automation.editor.copy_to_clipboard")}
                          </mwc-button>
                        </div>
                      </ha-card>
                    `:""}
              </div>
            `:""}
        <ha-fab
          slot="fab"
          class=${(0,o.$)({dirty:this._dirty})}
          .label=${this.hass.localize("ui.panel.config.automation.editor.save")}
          extended
          @click=${this._saveAutomation}
        >
          <ha-svg-icon slot="icon" .path=${"M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"}></ha-svg-icon>
        </ha-fab>
      </hass-subpage>
    `}},{kind:"method",key:"updated",value:function(e){$(P(h.prototype),"updated",this).call(this,e);const t=e.get("automationId");if(e.has("automationId")&&this.automationId&&this.hass&&t!==this.automationId&&(this._setEntityId(),this._loadConfig()),e.has("automationId")&&!this.automationId&&!this.entityId&&this.hass){const e=(0,c.Pl)();let t={description:""};e&&"use_blueprint"in e||(t={...t,mode:"single",trigger:[],condition:[],action:[]}),this._config={...t,...e},this._entityId=void 0,this._readOnly=!1,this._dirty=!0}e.has("entityId")&&this.entityId&&((0,c.SQ)(this.hass,this.entityId).then((e=>{this._config=this._normalizeConfig(e.config)})),this._entityId=this.entityId,this._dirty=!1,this._readOnly=!0),e.has("automations")&&this.automationId&&!this._entityId&&this._setEntityId(),e.has("_config")&&Object.values(this._configSubscriptions).forEach((e=>e(this._config)))}},{kind:"method",key:"_setEntityId",value:function(){const e=this.automations.find((e=>e.attributes.id===this.automationId));this._entityId=null==e?void 0:e.entity_id}},{kind:"method",key:"_normalizeConfig",value:function(e){for(const t of["trigger","condition","action"]){const i=e[t];i&&!Array.isArray(i)&&(e[t]=[i])}return e}},{kind:"method",key:"_loadConfig",value:async function(){try{const e=await(0,c.r4)(this.hass,this.automationId);this._dirty=!1,this._readOnly=!1,this._config=this._normalizeConfig(e)}catch(e){const t=Object.values(this.hass.entities).find((e=>"automation"===e.platform&&e.unique_id===this.automationId));if(t)return void(0,a.c)(`/config/automation/show/${t.entity_id}`,{replace:!0});await(0,d.Ys)(this,{text:404===e.status_code?this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable"):this.hass.localize("ui.panel.config.automation.editor.load_error_unknown","err_no",e.status_code)}),history.back()}}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this._readOnly||(this._config=e.detail.value,this._dirty=!0,this._errors=void 0)}},{kind:"method",key:"_showInfo",value:function(){this.hass&&this._entityId&&(0,n.B)(this,"hass-more-info",{entityId:this._entityId})}},{kind:"method",key:"_showTrace",value:async function(){var e;if(null!==(e=this._config)&&void 0!==e&&e.id){await this.confirmUnsavedChanged()&&(0,a.c)(`/config/automation/trace/${this._config.id}`)}}},{kind:"method",key:"_runActions",value:function(){this.hass&&this._entityId&&(0,c.Es)(this.hass,this.hass.states[this._entityId].entity_id)}},{kind:"method",key:"_toggle",value:async function(){if(!this.hass||!this._entityId)return;const e=this.hass.states[this._entityId],t="off"===e.state?"turn_on":"turn_off";await this.hass.callService("automation",t,{entity_id:e.entity_id})}},{kind:"method",key:"_preprocessYaml",value:function(){if(!this._config)return{};const e={...this._config};return delete e.id,e}},{kind:"method",key:"_copyYaml",value:async function(){var e;null!==(e=this._yamlEditor)&&void 0!==e&&e.yaml&&(await(0,s.v)(this._yamlEditor.yaml),(0,p.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")}))}},{kind:"method",key:"_yamlChanged",value:function(e){var t;e.stopPropagation(),e.detail.isValid&&(this._config={id:null===(t=this._config)||void 0===t?void 0:t.id,...e.detail.value},this._errors=void 0,this._dirty=!0)}},{kind:"method",key:"confirmUnsavedChanged",value:async function(){return!this._dirty||(0,d.g7)(this,{title:this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm_title"),text:this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm_text"),confirmText:this.hass.localize("ui.common.leave"),dismissText:this.hass.localize("ui.common.stay"),destructive:!0})}},{kind:"field",key:"_backTapped",value(){return async()=>{await this.confirmUnsavedChanged()&&(0,l.T)((()=>history.back()))}}},{kind:"method",key:"_duplicate",value:async function(){var e;(this._readOnly?await(0,d.g7)(this,{title:"Migrate automation?",text:"You can migrate this automation, so it can be edited from the UI. After it is migrated and you have saved it, you will have to manually delete your old automation from your configuration. Do you want to migrate this automation?"}):await this.confirmUnsavedChanged())&&(0,c.Ip)({...this._config,id:void 0,alias:this._readOnly?null===(e=this._config)||void 0===e?void 0:e.alias:void 0})}},{kind:"method",key:"_deleteConfirm",value:async function(){var e;(0,d.g7)(this,{title:this.hass.localize("ui.panel.config.automation.picker.delete_confirm_title"),text:this.hass.localize("ui.panel.config.automation.picker.delete_confirm_text",{name:null===(e=this._config)||void 0===e?void 0:e.alias}),confirmText:this.hass.localize("ui.common.delete"),destructive:!0,dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>this._delete()})}},{kind:"method",key:"_delete",value:async function(){this.automationId&&(await(0,c.SC)(this.hass,this.automationId),history.back())}},{kind:"method",key:"_switchUiMode",value:function(){this._mode="gui"}},{kind:"method",key:"_switchYamlMode",value:function(){this._mode="yaml"}},{kind:"method",key:"_promptAutomationAlias",value:async function(){return new Promise((e=>{(0,m.D)(this,{config:this._config,updateAutomation:t=>{this._config=t,this._dirty=!0,this.requestUpdate(),e()},onClose:()=>e()})}))}},{kind:"method",key:"_promptAutomationMode",value:async function(){return new Promise((e=>{(0,f.q)(this,{config:this._config,updateAutomation:t=>{this._config=t,this._dirty=!0,this.requestUpdate(),e()},onClose:()=>e()})}))}},{kind:"method",key:"_saveAutomation",value:async function(){const e=this.automationId||String(Date.now());this.automationId||await this._promptAutomationAlias();try{await(0,c.sq)(this.hass,e,this._config)}catch(e){throw this._errors=e.body.message||e.error||e.body,(0,p.C)(this,{message:e.body.message||e.error||e.body}),e}this._dirty=!1,this.automationId||(0,a.c)(`/config/automation/edit/${e}`,{replace:!0})}},{kind:"method",key:"_subscribeAutomationConfig",value:function(e){const t=this._configSubscriptionsId++;this._configSubscriptions[t]=e.detail.callback,e.detail.unsub=()=>{delete this._configSubscriptions[t]},e.detail.callback(this._config)}},{kind:"method",key:"handleKeyboardSave",value:function(){this._saveAutomation()}},{kind:"get",static:!0,key:"styles",value:function(){return[u.Qx,t.iv`
        ha-card {
          overflow: hidden;
        }
        .content {
          padding-bottom: 20px;
        }
        .yaml-mode {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding-bottom: 0;
        }
        manual-automation-editor,
        blueprint-automation-editor {
          margin: 0 auto;
          max-width: 1040px;
          padding: 28px 20px 0;
        }
        ha-yaml-editor {
          flex-grow: 1;
          --code-mirror-height: 100%;
          min-height: 0;
        }
        .yaml-mode ha-card {
          overflow: initial;
          --ha-card-border-radius: 0;
          border-bottom: 1px solid var(--divider-color);
        }
        p {
          margin-bottom: 0;
        }
        ha-entity-toggle {
          margin-right: 8px;
        }
        ha-fab {
          position: relative;
          bottom: calc(-80px - env(safe-area-inset-bottom));
          transition: bottom 0.3s;
        }
        ha-fab.dirty {
          bottom: 0;
        }
        .selected_menu_item {
          color: var(--primary-color);
        }
        li[role="separator"] {
          border-bottom-color: var(--divider-color);
        }
        ha-button-menu a {
          text-decoration: none;
          color: var(--primary-color);
        }
        h1 {
          margin: 0;
        }
        .header-name {
          display: flex;
          align-items: center;
          margin: 0 auto;
          max-width: 1040px;
          padding: 28px 20px 0;
        }
      `]}}]}}),(0,h.U)(t.oi));customElements.define("ha-automation-editor",x)}))},47024:(e,t,i)=>{i.a(e,(async e=>{i(54444);var t=i(37500),r=i(33310),o=i(14516),n=i(4535),a=i(7323),s=i(44583),l=i(5435),c=i(47181),d=i(91741),h=i(83849),u=(i(67556),i(88324),i(36125),i(10983),i(48429),i(52039),i(93748)),p=i(26765),f=(i(96551),i(11654)),m=i(27322),y=i(29311),v=i(87515),g=e([l,s]);function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!_(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?$(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=C(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function k(e){var t,i=C(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}[l,s]=g.then?await g:g;!function(e,t,i,r){var o=b();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(E(n.descriptor)||E(o.descriptor)){if(_(n)||_(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(_(n)){if(_(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}w(n,o)}else t.push(n)}return t}(a.d.map(k)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,r.Mo)("ha-automation-picker")],(function(e,i){return{F:class extends i{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"automations",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"_activeFilters",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_filteredAutomations",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_filterValue",value:void 0},{kind:"field",key:"_automations",value:()=>(0,o.Z)(((e,t)=>null===t?[]:(t?e.filter((e=>t.includes(e.entity_id))):e).map((e=>({...e,name:(0,d.C)(e),last_triggered:e.attributes.last_triggered||void 0,disabled:"off"===e.state})))))},{kind:"field",key:"_columns",value(){return(0,o.Z)(((e,i)=>{const r={icon:{title:"",label:this.hass.localize("ui.panel.config.automation.picker.headers.state"),type:"icon",template:(e,i)=>t.dy`<ha-state-icon .state=${i}></ha-state-icon>`},name:{title:this.hass.localize("ui.panel.config.automation.picker.headers.name"),main:!0,sortable:!0,filterable:!0,direction:"asc",grows:!0,template:e?(e,i)=>{const r=new Date(i.attributes.last_triggered),o=new Date,a=(0,n.Z)(o,r);return t.dy`
                  ${e}
                  <div class="secondary">
                    ${this.hass.localize("ui.card.automation.last_triggered")}:
                    ${i.attributes.last_triggered?a>3?(0,s.yD)(r,this.hass.locale):(0,l.G)(r,this.hass.locale):this.hass.localize("ui.components.relative_time.never")}
                  </div>
                `}:void 0}};return e||(r.last_triggered={sortable:!0,width:"20%",title:this.hass.localize("ui.card.automation.last_triggered"),template:e=>{const i=new Date(e),r=new Date,o=(0,n.Z)(r,i);return t.dy`
              ${e?o>3?(0,s.yD)(i,this.hass.locale):(0,l.G)(i,this.hass.locale):this.hass.localize("ui.components.relative_time.never")}
            `}}),r.disabled=this.narrow?{title:"",template:e=>e?t.dy`
                    <paper-tooltip animation-delay="0" position="left">
                      ${this.hass.localize("ui.panel.config.automation.picker.disabled")}
                    </paper-tooltip>
                    <ha-svg-icon
                      .path=${"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z"}
                      style="color: var(--secondary-text-color)"
                    ></ha-svg-icon>
                  `:""}:{width:"20%",title:"",template:e=>e?t.dy`
                    <ha-chip>
                      ${this.hass.localize("ui.panel.config.automation.picker.disabled")}
                    </ha-chip>
                  `:""},r.actions={title:"",width:this.narrow?void 0:"10%",type:"overflow-menu",template:(e,i)=>t.dy`
            <ha-icon-overflow-menu
              .hass=${this.hass}
              narrow
              .items=${[{path:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",label:this.hass.localize("ui.panel.config.automation.editor.show_info"),action:()=>this._showInfo(i)},{path:"M8,5.14V19.14L19,12.14L8,5.14Z",label:this.hass.localize("ui.panel.config.automation.editor.run"),action:()=>this._runActions(i)},{path:"M15,12C15,10.7 14.16,9.6 13,9.18V6.82C14.16,6.4 15,5.3 15,4A3,3 0 0,0 12,1A3,3 0 0,0 9,4C9,5.3 9.84,6.4 11,6.82V9.19C9.84,9.6 9,10.7 9,12C9,13.3 9.84,14.4 11,14.82V17.18C9.84,17.6 9,18.7 9,20A3,3 0 0,0 12,23A3,3 0 0,0 15,20C15,18.7 14.16,17.6 13,17.18V14.82C14.16,14.4 15,13.3 15,12M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M12,21A1,1 0 0,1 11,20A1,1 0 0,1 12,19A1,1 0 0,1 13,20A1,1 0 0,1 12,21Z",label:this.hass.localize("ui.panel.config.automation.editor.show_trace"),action:()=>this._showTrace(i)},{divider:!0},{path:"M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z",label:this.hass.localize("ui.panel.config.automation.picker.duplicate"),action:()=>this.duplicate(i)},{path:"off"===i.state?"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9",label:"off"===i.state?this.hass.localize("ui.panel.config.automation.editor.enable"):this.hass.localize("ui.panel.config.automation.editor.disable"),action:()=>this._toggle(i)},{label:this.hass.localize("ui.panel.config.automation.picker.delete"),path:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",action:()=>this._deleteConfirm(i),warning:!0}]}
            >
            </ha-icon-overflow-menu>
          `},r}))}},{kind:"method",key:"render",value:function(){return t.dy`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        id="entity_id"
        .route=${this.route}
        .tabs=${y.configSections.automations}
        .activeFilters=${this._activeFilters}
        .columns=${this._columns(this.narrow,this.hass.locale)}
        .data=${this._automations(this.automations,this._filteredAutomations)}
        @row-click=${this._handleRowClicked}
        .noDataText=${this.hass.localize("ui.panel.config.automation.picker.no_automations")}
        @clear-filter=${this._clearFilter}
        hasFab
        clickable
      >
        <ha-icon-button
          slot="toolbar-icon"
          .label=${this.hass.localize("ui.common.help")}
          .path=${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}
          @click=${this._showHelp}
        ></ha-icon-button>
        <ha-button-related-filter-menu
          slot="filter-menu"
          corner="BOTTOM_START"
          .narrow=${this.narrow}
          .hass=${this.hass}
          .value=${this._filterValue}
          exclude-domains='["automation"]'
          @related-changed=${this._relatedFilterChanged}
        >
        </ha-button-related-filter-menu>
        <ha-fab
          slot="fab"
          .label=${this.hass.localize("ui.panel.config.automation.picker.add_automation")}
          extended
          @click=${this._createNew}
        >
          <ha-svg-icon slot="icon" .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
        </ha-fab>
      </hass-tabs-subpage-data-table>
    `}},{kind:"method",key:"_relatedFilterChanged",value:function(e){this._filterValue=e.detail.value,this._filterValue?(this._activeFilters=[e.detail.filter],this._filteredAutomations=e.detail.items.automation||null):this._clearFilter()}},{kind:"method",key:"_clearFilter",value:function(){this._filteredAutomations=void 0,this._activeFilters=void 0,this._filterValue=void 0}},{kind:"method",key:"_showInfo",value:function(e){(0,c.B)(this,"hass-more-info",{entityId:e.entity_id})}},{kind:"method",key:"_runActions",value:function(e){(0,u.Es)(this.hass,e.entity_id)}},{kind:"method",key:"_showTrace",value:function(e){e.attributes.id?(0,h.c)(`/config/automation/trace/${e.attributes.id}`):(0,p.Ys)(this,{text:this.hass.localize("ui.panel.config.automation.picker.traces_not_available")})}},{kind:"method",key:"_toggle",value:async function(e){const t="off"===e.state?"turn_on":"turn_off";await this.hass.callService("automation",t,{entity_id:e.entity_id})}},{kind:"method",key:"_deleteConfirm",value:async function(e){(0,p.g7)(this,{title:this.hass.localize("ui.panel.config.automation.picker.delete_confirm_title"),text:this.hass.localize("ui.panel.config.automation.picker.delete_confirm_text",{name:e.name}),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>this._delete(e),destructive:!0})}},{kind:"method",key:"_delete",value:async function(e){try{await(0,u.SC)(this.hass,e.attributes.id)}catch(e){await(0,p.Ys)(this,{text:400===e.status_code?this.hass.localize("ui.panel.config.automation.editor.load_error_not_deletable"):this.hass.localize("ui.panel.config.automation.editor.load_error_unknown","err_no",e.status_code)})}}},{kind:"method",key:"duplicate",value:async function(e){try{const t=await(0,u.r4)(this.hass,e.attributes.id);(0,u.HF)(t)}catch(t){if(404===t.status_code){const t=await(0,u.SQ)(this.hass,e.entity_id);return void(0,u.Ip)({...t.config,id:void 0})}await(0,p.Ys)(this,{text:this.hass.localize("ui.panel.config.automation.editor.load_error_unknown","err_no",t.status_code)})}}},{kind:"method",key:"_showHelp",value:function(){(0,p.Ys)(this,{title:this.hass.localize("ui.panel.config.automation.caption"),text:t.dy`
        ${this.hass.localize("ui.panel.config.automation.picker.introduction")}
        <p>
          <a
            href=${(0,m.R)(this.hass,"/docs/automation/editor/")}
            target="_blank"
            rel="noreferrer"
          >
            ${this.hass.localize("ui.panel.config.automation.picker.learn_more")}
          </a>
        </p>
      `})}},{kind:"method",key:"_handleRowClicked",value:function(e){const t=this.automations.find((t=>t.entity_id===e.detail.id));null!=t&&t.attributes.id?(0,h.c)(`/config/automation/edit/${t.attributes.id}`):(0,h.c)(`/config/automation/show/${e.detail.id}`)}},{kind:"method",key:"_createNew",value:function(){(0,a.p)(this.hass,"blueprint")?(0,v.X)(this):(0,h.c)("/config/automation/edit/new")}},{kind:"get",static:!0,key:"styles",value:function(){return f.Qx}}]}}),t.oi)}))},50148:(e,t,i)=>{i.a(e,(async e=>{i.r(t);var r=i(33310),o=i(14516),n=i(22311),a=i(38346),s=i(18199),l=i(44105),c=i(47024),d=e([c,l]);function h(){h=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!f(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=v(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function u(e){var t,i=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function b(e,t,i){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},b(e,t,i||e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}[c,l]=d.then?await d:d;!function(e,t,i,r){var o=h();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(m(n.descriptor)||m(o.descriptor)){if(f(n)||f(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(f(n)){if(f(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}p(n,o)}else t.push(n)}return t}(a.d.map(u)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,r.Mo)("ha-config-automation")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"showAdvanced",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"automations",value:()=>[]},{kind:"field",key:"_debouncedUpdateAutomations",value(){return(0,a.D)((e=>{const t=this._getAutomations(this.hass.states);var i,r;i=t,r=e.automations,i.length===r.length&&i.every(((e,t)=>e===r[t]))||(e.automations=t)}),10)}},{kind:"field",key:"routerOptions",value:()=>({defaultPage:"dashboard",routes:{dashboard:{tag:"ha-automation-picker",cache:!0},edit:{tag:"ha-automation-editor"},show:{tag:"ha-automation-editor"},trace:{tag:"ha-automation-trace",load:()=>Promise.all([i.e(99528),i.e(85763),i.e(53890)]).then(i.bind(i,53890))}}})},{kind:"field",key:"_getAutomations",value:()=>(0,o.Z)((e=>Object.values(e).filter((e=>"automation"===(0,n.N)(e)&&!e.attributes.restored))))},{kind:"method",key:"firstUpdated",value:function(e){b(k(s.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("device_automation")}},{kind:"method",key:"updatePageEl",value:function(e,t){if(e.hass=this.hass,e.narrow=this.narrow,e.isWide=this.isWide,e.route=this.routeTail,e.showAdvanced=this.showAdvanced,this.hass&&(e.automations&&t?t.has("hass")&&this._debouncedUpdateAutomations(e):e.automations=this._getAutomations(this.hass.states)),(!t||t.has("route"))&&"show"===this._currentPage){const t=decodeURIComponent(this.routeTail.path.substr(1));return e.automationId=null,void(e.entityId="new"===t?null:t)}if((!t||t.has("route"))&&"dashboard"!==this._currentPage){const t=decodeURIComponent(this.routeTail.path.substr(1));e.automationId="new"===t?null:t,e.entityId=null}}}]}}),s.n)}))},49819:(e,t,i)=>{i.a(e,(async e=>{i(51187);var t=i(37500),r=i(33310),o=i(47181),n=(i(22098),i(10983),i(11654)),a=i(27322),s=i(61788),l=i(50364),c=i(15491),d=e([c,l,s]);function h(){h=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!f(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=v(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function u(e){var t,i=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}[c,l,s]=d.then?await d:d;const b="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";!function(e,t,i,r){var o=h();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(m(n.descriptor)||m(o.descriptor)){if(f(n)||f(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(f(n)){if(f(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}p(n,o)}else t.push(n)}return t}(a.d.map(u)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,r.Mo)("manual-automation-editor")],(function(e,i){return{F:class extends i{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){var e;return t.dy`
      ${this.disabled?t.dy`<ha-alert alert-type="warning">
            ${this.hass.localize("ui.panel.config.automation.editor.read_only")}
            <mwc-button slot="action" @click=${this._duplicate}>
              ${this.hass.localize("ui.panel.config.automation.editor.migrate")}
            </mwc-button>
          </ha-alert>`:""}
      ${"off"===(null===(e=this.stateObj)||void 0===e?void 0:e.state)?t.dy`
            <ha-alert alert-type="info">
              ${this.hass.localize("ui.panel.config.automation.editor.disabled")}
              <mwc-button slot="action" @click=${this._enable}>
                ${this.hass.localize("ui.panel.config.automation.editor.enable")}
              </mwc-button>
            </ha-alert>
          `:""}
      ${this.config.description?t.dy`<ha-markdown
            class="description"
            breaks
            .content=${this.config.description}
          ></ha-markdown>`:""}
      <div class="header">
        <h2 id="triggers-heading" class="name">
          ${this.hass.localize("ui.panel.config.automation.editor.triggers.header")}
        </h2>
        <a
          href=${(0,a.R)(this.hass,"/docs/automation/trigger/")}
          target="_blank"
          rel="noreferrer"
        >
          <ha-icon-button
            .path=${b}
            .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.learn_more")}
          ></ha-icon-button>
        </a>
      </div>

      <ha-automation-trigger
        role="region"
        aria-labelledby="triggers-heading"
        .triggers=${this.config.trigger}
        @value-changed=${this._triggerChanged}
        .hass=${this.hass}
        .disabled=${this.disabled}
      ></ha-automation-trigger>

      <div class="header">
        <h2 id="conditions-heading" class="name">
          ${this.hass.localize("ui.panel.config.automation.editor.conditions.header")}
        </h2>
        <a
          href=${(0,a.R)(this.hass,"/docs/automation/condition/")}
          target="_blank"
          rel="noreferrer"
        >
          <ha-icon-button
            .path=${b}
            .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.learn_more")}
          ></ha-icon-button>
        </a>
      </div>

      <ha-automation-condition
        role="region"
        aria-labelledby="conditions-heading"
        .conditions=${this.config.condition||[]}
        @value-changed=${this._conditionChanged}
        .hass=${this.hass}
        .disabled=${this.disabled}
      ></ha-automation-condition>

      <div class="header">
        <h2 id="actions-heading" class="name">
          ${this.hass.localize("ui.panel.config.automation.editor.actions.header")}
        </h2>
        <div>
          <a
            href=${(0,a.R)(this.hass,"/docs/automation/action/")}
            target="_blank"
            rel="noreferrer"
          >
            <ha-icon-button
              .path=${b}
              .label=${this.hass.localize("ui.panel.config.automation.editor.actions.learn_more")}
            ></ha-icon-button>
          </a>
        </div>
      </div>

      <ha-automation-action
        role="region"
        aria-labelledby="actions-heading"
        .actions=${this.config.action}
        @value-changed=${this._actionChanged}
        .hass=${this.hass}
        .narrow=${this.narrow}
        .disabled=${this.disabled}
      ></ha-automation-action>
    `}},{kind:"method",key:"_triggerChanged",value:function(e){e.stopPropagation(),(0,o.B)(this,"value-changed",{value:{...this.config,trigger:e.detail.value}})}},{kind:"method",key:"_conditionChanged",value:function(e){e.stopPropagation(),(0,o.B)(this,"value-changed",{value:{...this.config,condition:e.detail.value}})}},{kind:"method",key:"_actionChanged",value:function(e){e.stopPropagation(),(0,o.B)(this,"value-changed",{value:{...this.config,action:e.detail.value}})}},{kind:"method",key:"_enable",value:async function(){this.hass&&this.stateObj&&await this.hass.callService("automation","turn_on",{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_duplicate",value:function(){(0,o.B)(this,"duplicate")}},{kind:"get",static:!0,key:"styles",value:function(){return[n.Qx,t.iv`
        :host {
          display: block;
        }
        ha-card {
          overflow: hidden;
        }
        .description {
          margin: 0;
        }
        p {
          margin-bottom: 0;
        }
        .header {
          display: flex;
          align-items: center;
        }
        .header:first-child {
          margin-top: -16px;
        }
        .header .name {
          font-size: 20px;
          font-weight: 400;
          flex: 1;
        }
        .header a {
          color: var(--secondary-text-color);
        }
      `]}}]}}),t.oi)}))},87515:(e,t,i)=>{i.d(t,{X:()=>n});var r=i(47181);const o=()=>Promise.all([i.e(85084),i.e(42228)]).then(i.bind(i,42228)),n=e=>{(0,r.B)(e,"show-dialog",{dialogTag:"ha-dialog-new-automation",dialogImport:o,dialogParams:{}})}}}]);
//# sourceMappingURL=95cfdcd4.js.map