"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[89870],{89870:(e,t,r)=>{r.r(t);r(53918);var i=r(37500),n=r(26767),o=r(5701),a=r(17717),s=r(83849),d=(r(54909),r(22098),r(91810)),c=r(28575),l=(r(1359),r(11654)),h=(r(88165),r(27691)),p=r(47465);function f(){f=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!y(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,n[o])(s)||s);e=d.element,this.addElementPlacement(e,t),d.finisher&&i.push(d.finisher);var c=d.extras;if(c){for(var l=0;l<c.length;l++)this.addElementPlacement(c[l],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:w(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=w(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function u(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function w(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=f();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(y(o)||y(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(y(o)){if(y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}m(o,n)}else t.push(o)}return t}(a.d.map(u)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.M)("ozw-node-config")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.C)({type:Object})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Object})],key:"route",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"configEntryId",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"ozwInstance",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"nodeId",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_node",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_metadata",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_error",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this.ozwInstance?this.nodeId?this._fetchData():(0,s.c)(`/config/ozw/network/${this.ozwInstance}/nodes`,{replace:!0}):(0,s.c)("/config/ozw/dashboard",{replace:!0})}},{kind:"method",key:"render",value:function(){var e,t;return this._error?i.dy`
        <hass-error-screen
          .hass=${this.hass}
          .error=${this.hass.localize("ui.panel.config.ozw.node."+this._error)}
        ></hass-error-screen>
      `:i.dy`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .tabs=${(0,h.ozwNodeTabs)(this.ozwInstance,this.nodeId)}
      >
        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.ozw.node_config.header")}
          </div>

          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.ozw.node_config.introduction")}
            <p>
              <em>
                ${this.hass.localize("ui.panel.config.ozw.node_config.help_source")}
              </em>
            </p>
            <p>
              Note: This panel is currently read-only. The ability to change
              values will come in a later update.
            </p>
          </div>
          ${this._node?i.dy`
                <ha-card class="content">
                  <div class="card-content">
                    <b>
                      ${this._node.node_manufacturer_name}
                      ${this._node.node_product_name} </b
                    ><br />
                    ${this.hass.localize("ui.panel.config.ozw.common.node_id")}:
                    ${this._node.node_id}<br />
                    ${this.hass.localize("ui.panel.config.ozw.common.query_stage")}:
                    ${this._node.node_query_stage}
                    ${null!==(e=this._metadata)&&void 0!==e&&e.metadata.ProductManualURL?i.dy` <a
                          href=${this._metadata.metadata.ProductManualURL}
                        >
                          <p>
                            ${this.hass.localize("ui.panel.config.ozw.node_metadata.product_manual")}
                          </p>
                        </a>`:""}
                  </div>
                  <div class="card-actions">
                    <mwc-button @click=${this._refreshNodeClicked}>
                      ${this.hass.localize("ui.panel.config.ozw.refresh_node.button")}
                    </mwc-button>
                  </div>
                </ha-card>

                ${null!==(t=this._metadata)&&void 0!==t&&t.metadata.WakeupHelp?i.dy`
                      <ha-card
                        class="content"
                        header=${this.hass.localize("ui.panel.config.ozw.common.wakeup_instructions")}
                      >
                        <div class="card-content">
                          <span class="secondary">
                            ${this.hass.localize("ui.panel.config.ozw.node_config.wakeup_help")}
                          </span>
                          <p>${this._metadata.metadata.WakeupHelp}</p>
                        </div>
                      </ha-card>
                    `:""}
                ${this._config?i.dy`
                      ${this._config.map((e=>i.dy`
                          <ha-card class="content">
                            <div class="card-content">
                              <b>${e.label}</b><br />
                              <span class="secondary">${e.help}</span>
                              <p>${e.value}</p>
                            </div>
                          </ha-card>
                        `))}
                    `:""}
              `:""}
        </ha-config-section>
      </hass-tabs-subpage>
    `}},{kind:"method",key:"_fetchData",value:async function(){if(this.ozwInstance&&this.nodeId)try{const e=(0,d.Jl)(this.hass,this.ozwInstance,this.nodeId),t=(0,d.Lm)(this.hass,this.ozwInstance,this.nodeId),r=(0,d.ol)(this.hass,this.ozwInstance,this.nodeId);[this._node,this._metadata,this._config]=await Promise.all([e,t,r])}catch(e){if(e.code===c.Vc)return void(this._error=c.Vc);throw e}}},{kind:"method",key:"_refreshNodeClicked",value:async function(){(0,p.B)(this,{node_id:this.nodeId,ozw_instance:this.ozwInstance})}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,i.iv`
        .secondary {
          color: var(--secondary-text-color);
          font-size: 0.9em;
        }

        .content {
          margin-top: 24px;
        }

        .sectionHeader {
          position: relative;
          padding-right: 40px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        [hidden] {
          display: none;
        }

        blockquote {
          display: block;
          background-color: #ddd;
          padding: 8px;
          margin: 8px 0;
          font-size: 0.9em;
        }

        blockquote em {
          font-size: 0.9em;
          margin-top: 6px;
        }
      `]}}]}}),i.oi)}}]);
//# sourceMappingURL=4c011ad4.js.map