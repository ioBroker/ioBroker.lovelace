(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1254],{93748:(e,t,i)=>{"use strict";i.d(t,{xu:()=>r,SC:()=>n,Ip:()=>s,Pl:()=>l});var o=i(83849);const r=(e,t)=>{e.callService("automation","trigger",{entity_id:t})},n=(e,t)=>e.callApi("DELETE","config/automation/config/"+t);let a;const s=(e,t)=>{a=t,(0,o.c)(e,"/config/automation/edit/new")},l=()=>{const e=a;return a=void 0,e}},44030:(e,t,i)=>{"use strict";i.r(t);var o=i(15652),r=i(14516),n=i(22311),a=i(18199),s=(i(29119),i(55317)),l=(i(53268),i(12730),i(46002),i(25856),i(81689),i(81471)),c=i(83849),d=(i(81545),i(22098),i(10983),i(52039),i(18900),i(81796)),u=i(93748),h=i(26765),p=(i(27849),i(1359),i(23670)),f=i(11654),m=i(27322),y=(i(88165),i(29311)),v=(i(57987),i(43547)),g=(i(50364),i(60148),i(61387));function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var r=t.placement;if(t.kind===o&&("static"===r||"prototype"===r)){var n="static"===r?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var o=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],o=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!_(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:i,finishers:o};var n=this.decorateConstructor(i,t);return o.push.apply(o,n.finishers),n.finishers=o,n},addElementPlacement:function(e,t,i){var o=t[e.placement];if(!i&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var i=[],o=[],r=e.decorators,n=r.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:o,extras:i}},decorateConstructor:function(e,t){for(var i=[],o=t.length-1;o>=0;o--){var r=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[o])(r)||r);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=z(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:o,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var o=(0,t[i])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function k(e){var t,i=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function $(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function z(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function P(e,t,i){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(i):r.value}})(e,t,i||e)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const A=["single","restart","queued","parallel"],T=["queued","parallel"];let D=function(e,t,i,o){var r=b();if(o)for(var n=0;n<o.length;n++)r=o[n](r);var a=t((function(e){r.initializeInstanceElements(e,s.elements)}),i),s=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},o=0;o<e.length;o++){var r,n=e[o];if("method"===n.kind&&(r=t.find(i)))if($(n.descriptor)||$(r.descriptor)){if(_(n)||_(r))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");r.descriptor=n.descriptor}else{if(_(n)){if(_(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");r.decorators=n.decorators}w(n,r)}else t.push(n)}return t}(a.d.map(k)),e);return r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"automationId",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"automations",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_dirty",value:()=>!1},{kind:"field",decorators:[(0,o.sz)()],key:"_errors",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_mode",value:()=>"gui"},{kind:"field",decorators:[(0,o.IO)("ha-yaml-editor",!0)],key:"_editor",value:void 0},{kind:"method",key:"render",value:function(){var e;const t=this._entityId?this.hass.states[this._entityId]:void 0;return o.dy`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .backCallback=${()=>this._backTapped()}
        .tabs=${y.configSections.automation}
      >
        <ha-button-menu
          corner="BOTTOM_START"
          slot="toolbar-icon"
          @action=${this._handleMenuAction}
          activatable
        >
          <mwc-icon-button
            slot="trigger"
            .title=${this.hass.localize("ui.common.menu")}
            .label=${this.hass.localize("ui.common.overflow_menu")}
            ><ha-svg-icon path=${s.SXi}></ha-svg-icon>
          </mwc-icon-button>

          <mwc-list-item
            aria-label=${this.hass.localize("ui.panel.config.automation.editor.edit_ui")}
            graphic="icon"
            ?activated=${"gui"===this._mode}
          >
            ${this.hass.localize("ui.panel.config.automation.editor.edit_ui")}
            ${"gui"===this._mode?o.dy`<ha-svg-icon
                  class="selected_menu_item"
                  slot="graphic"
                  .path=${s.oL1}
                ></ha-svg-icon>`:""}
          </mwc-list-item>
          <mwc-list-item
            aria-label=${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            graphic="icon"
            ?activated=${"yaml"===this._mode}
          >
            ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            ${"yaml"===this._mode?o.dy`<ha-svg-icon
                  class="selected_menu_item"
                  slot="graphic"
                  .path=${s.oL1}
                ></ha-svg-icon>`:""}
          </mwc-list-item>

          <li divider role="separator"></li>

          <mwc-list-item
            .disabled=${!this.automationId}
            aria-label=${this.hass.localize("ui.panel.config.automation.picker.duplicate_automation")}
            graphic="icon"
          >
            ${this.hass.localize("ui.panel.config.automation.picker.duplicate_automation")}
            <ha-svg-icon
              slot="graphic"
              .path=${s.RDO}
            ></ha-svg-icon>
          </mwc-list-item>

          <mwc-list-item
            .disabled=${!this.automationId}
            aria-label=${this.hass.localize("ui.panel.config.automation.picker.delete_automation")}
            class=${(0,l.$)({warning:this.automationId})}
            graphic="icon"
          >
            ${this.hass.localize("ui.panel.config.automation.picker.delete_automation")}
            <ha-svg-icon
              class=${(0,l.$)({warning:this.automationId})}
              slot="graphic"
              .path=${s.x9U}
            >
            </ha-svg-icon>
          </mwc-list-item>
        </ha-button-menu>
        ${this._config?o.dy`
              ${this.narrow?o.dy` <span slot="header">${null===(e=this._config)||void 0===e?void 0:e.alias}</span> `:""}
              <div class="content">
                ${this._errors?o.dy` <div class="errors">${this._errors}</div> `:""}
                ${"gui"===this._mode?o.dy`
                      <ha-config-section .isWide=${this.isWide}>
                        ${this.narrow?"":o.dy`
                              <span slot="header">${this._config.alias}</span>
                            `}
                        <span slot="introduction">
                          ${this.hass.localize("ui.panel.config.automation.editor.introduction")}
                        </span>
                        <ha-card>
                          <div class="card-content">
                            <paper-input
                              .label=${this.hass.localize("ui.panel.config.automation.editor.alias")}
                              name="alias"
                              .value=${this._config.alias}
                              @value-changed=${this._valueChanged}
                            >
                            </paper-input>
                            <paper-textarea
                              .label=${this.hass.localize("ui.panel.config.automation.editor.description.label")}
                              .placeholder=${this.hass.localize("ui.panel.config.automation.editor.description.placeholder")}
                              name="description"
                              .value=${this._config.description}
                              @value-changed=${this._valueChanged}
                            ></paper-textarea>
                            <p>
                              ${this.hass.localize("ui.panel.config.automation.editor.modes.description","documentation_link",o.dy`<a
                                  href="${(0,m.R)(this.hass,"/integrations/automation/#automation-modes")}"
                                  target="_blank"
                                  rel="noreferrer"
                                  >${this.hass.localize("ui.panel.config.automation.editor.modes.documentation")}</a
                                >`)}
                            </p>
                            <paper-dropdown-menu-light
                              .label=${this.hass.localize("ui.panel.config.automation.editor.modes.label")}
                              no-animations
                            >
                              <paper-listbox
                                slot="dropdown-content"
                                .selected=${this._config.mode?A.indexOf(this._config.mode):0}
                                @iron-select=${this._modeChanged}
                              >
                                ${A.map((e=>o.dy`
                                    <paper-item .mode=${e}>
                                      ${this.hass.localize("ui.panel.config.automation.editor.modes."+e)||e}
                                    </paper-item>
                                  `))}
                              </paper-listbox>
                            </paper-dropdown-menu-light>
                            ${this._config.mode&&T.includes(this._config.mode)?o.dy`<paper-input
                                  .label=${this.hass.localize("ui.panel.config.automation.editor.max."+this._config.mode)}
                                  type="number"
                                  name="max"
                                  .value=${this._config.max||"10"}
                                  @value-changed=${this._valueChanged}
                                >
                                </paper-input>`:o.dy``}
                          </div>
                          ${t?o.dy`
                                <div
                                  class="card-actions layout horizontal justified center"
                                >
                                  <div class="layout horizontal center">
                                    <ha-entity-toggle
                                      .hass=${this.hass}
                                      .stateObj=${t}
                                    ></ha-entity-toggle>
                                    ${this.hass.localize("ui.panel.config.automation.editor.enable_disable")}
                                  </div>
                                  <mwc-button
                                    @click=${this._excuteAutomation}
                                    .stateObj=${t}
                                  >
                                    ${this.hass.localize("ui.card.automation.trigger")}
                                  </mwc-button>
                                </div>
                              `:""}
                        </ha-card>
                      </ha-config-section>

                      <ha-config-section .isWide=${this.isWide}>
                        <span slot="header">
                          ${this.hass.localize("ui.panel.config.automation.editor.triggers.header")}
                        </span>
                        <span slot="introduction">
                          <p>
                            ${this.hass.localize("ui.panel.config.automation.editor.triggers.introduction")}
                          </p>
                          <a
                            href="${(0,m.R)(this.hass,"/docs/automation/trigger/")}"
                            target="_blank"
                            rel="noreferrer"
                          >
                            ${this.hass.localize("ui.panel.config.automation.editor.triggers.learn_more")}
                          </a>
                        </span>
                        <ha-automation-trigger
                          .triggers=${this._config.trigger}
                          @value-changed=${this._triggerChanged}
                          .hass=${this.hass}
                        ></ha-automation-trigger>
                      </ha-config-section>

                      <ha-config-section .isWide=${this.isWide}>
                        <span slot="header">
                          ${this.hass.localize("ui.panel.config.automation.editor.conditions.header")}
                        </span>
                        <span slot="introduction">
                          <p>
                            ${this.hass.localize("ui.panel.config.automation.editor.conditions.introduction")}
                          </p>
                          <a
                            href="${(0,m.R)(this.hass,"/docs/scripts/conditions/")}"
                            target="_blank"
                            rel="noreferrer"
                          >
                            ${this.hass.localize("ui.panel.config.automation.editor.conditions.learn_more")}
                          </a>
                        </span>
                        <ha-automation-condition
                          .conditions=${this._config.condition||[]}
                          @value-changed=${this._conditionChanged}
                          .hass=${this.hass}
                        ></ha-automation-condition>
                      </ha-config-section>

                      <ha-config-section .isWide=${this.isWide}>
                        <span slot="header">
                          ${this.hass.localize("ui.panel.config.automation.editor.actions.header")}
                        </span>
                        <span slot="introduction">
                          <p>
                            ${this.hass.localize("ui.panel.config.automation.editor.actions.introduction")}
                          </p>
                          <a
                            href="${(0,m.R)(this.hass,"/docs/automation/action/")}"
                            target="_blank"
                            rel="noreferrer"
                          >
                            ${this.hass.localize("ui.panel.config.automation.editor.actions.learn_more")}
                          </a>
                        </span>
                        <ha-automation-action
                          .actions=${this._config.action}
                          @value-changed=${this._actionChanged}
                          .hass=${this.hass}
                        ></ha-automation-action>
                      </ha-config-section>
                    `:"yaml"===this._mode?o.dy`
                      <ha-config-section .isWide=${!1}>
                        ${this.narrow?"":o.dy`
                              <span slot="header">${this._config.alias}</span>
                            `}
                        <ha-card>
                          <div class="card-content">
                            <ha-yaml-editor
                              .defaultValue=${this._preprocessYaml()}
                              @value-changed=${this._yamlChanged}
                            ></ha-yaml-editor>
                            <mwc-button @click=${this._copyYaml}>
                              ${this.hass.localize("ui.panel.config.automation.editor.copy_to_clipboard")}
                            </mwc-button>
                          </div>
                          ${t?o.dy`
                                <div
                                  class="card-actions layout horizontal justified center"
                                >
                                  <div class="layout horizontal center">
                                    <ha-entity-toggle
                                      .hass=${this.hass}
                                      .stateObj=${t}
                                    ></ha-entity-toggle>
                                    ${this.hass.localize("ui.panel.config.automation.editor.enable_disable")}
                                  </div>
                                  <mwc-button
                                    @click=${this._excuteAutomation}
                                    .stateObj=${t}
                                  >
                                    ${this.hass.localize("ui.card.automation.trigger")}
                                  </mwc-button>
                                </div>
                              `:""}
                        </ha-card>
                        <ha-config-section> </ha-config-section
                      ></ha-config-section>
                    `:""}
              </div>
            `:""}
        <mwc-fab
          slot="fab"
          class=${(0,l.$)({dirty:this._dirty})}
          .title=${this.hass.localize("ui.panel.config.automation.editor.save")}
          @click=${this._saveAutomation}
        >
          <ha-svg-icon slot="icon" .path=${s.Tls}></ha-svg-icon>
        </mwc-fab>
      </hass-tabs-subpage>
    `}},{kind:"method",key:"updated",value:function(e){P(x(i.prototype),"updated",this).call(this,e);const t=e.get("automationId");if(e.has("automationId")&&this.automationId&&this.hass&&t!==this.automationId&&(this._setEntityId(),this.hass.callApi("GET","config/automation/config/"+this.automationId).then((e=>{for(const t of["trigger","condition","action"]){const i=e[t];i&&!Array.isArray(i)&&(e[t]=[i])}this._dirty=!1,this._config=e}),(e=>{(0,h.Ys)(this,{text:404===e.status_code?this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable"):this.hass.localize("ui.panel.config.automation.editor.load_error_unknown","err_no",e.status_code)}).then((()=>history.back()))}))),e.has("automationId")&&!this.automationId&&this.hass){const e=(0,u.Pl)();this._dirty=!!e,this._config={alias:this.hass.localize("ui.panel.config.automation.editor.default_name"),description:"",trigger:[{platform:"device",...g.k.defaultConfig}],condition:[],action:[{...v.x.defaultConfig}],...e}}e.has("automations")&&this.automationId&&!this._entityId&&this._setEntityId()}},{kind:"method",key:"_setEntityId",value:function(){const e=this.automations.find((e=>e.attributes.id===this.automationId));this._entityId=null==e?void 0:e.entity_id}},{kind:"method",key:"_modeChanged",value:function(e){var t,i;const o=null===(t=e.target)||void 0===t||null===(i=t.selectedItem)||void 0===i?void 0:i.mode;o!==this._config.mode&&(this._config={...this._config,mode:o},T.includes(o)||delete this._config.max,this._dirty=!0)}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.target,i=t.name;if(!i)return;let o=e.detail.value;"number"===t.type&&(o=Number(o)),(this._config[i]||"")!==o&&(this._config={...this._config,[i]:o},this._dirty=!0)}},{kind:"method",key:"_triggerChanged",value:function(e){this._config={...this._config,trigger:e.detail.value},this._errors=void 0,this._dirty=!0}},{kind:"method",key:"_conditionChanged",value:function(e){this._config={...this._config,condition:e.detail.value},this._errors=void 0,this._dirty=!0}},{kind:"method",key:"_actionChanged",value:function(e){this._config={...this._config,action:e.detail.value},this._errors=void 0,this._dirty=!0}},{kind:"method",key:"_excuteAutomation",value:function(e){(0,u.xu)(this.hass,e.target.stateObj.entity_id)}},{kind:"method",key:"_preprocessYaml",value:function(){const e=this._config;return e?(delete e.id,e):{}}},{kind:"method",key:"_copyYaml",value:async function(){var e;(null===(e=this._editor)||void 0===e?void 0:e.yaml)&&navigator.clipboard.writeText(this._editor.yaml)}},{kind:"method",key:"_yamlChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&(this._config=e.detail.value,this._errors=void 0,this._dirty=!0)}},{kind:"method",key:"_backTapped",value:function(){this._dirty?(0,h.g7)(this,{text:this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"),confirmText:this.hass.localize("ui.common.yes"),dismissText:this.hass.localize("ui.common.no"),confirm:()=>history.back()}):history.back()}},{kind:"method",key:"_duplicate",value:async function(){var e;if(this._dirty){if(!(await(0,h.g7)(this,{text:this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"),confirmText:this.hass.localize("ui.common.yes"),dismissText:this.hass.localize("ui.common.no")})))return;await new Promise((e=>setTimeout(e,0)))}(0,u.Ip)(this,{...this._config,id:void 0,alias:`${null===(e=this._config)||void 0===e?void 0:e.alias} (${this.hass.localize("ui.panel.config.automation.picker.duplicate")})`})}},{kind:"method",key:"_deleteConfirm",value:async function(){(0,h.g7)(this,{text:this.hass.localize("ui.panel.config.automation.picker.delete_confirm"),confirmText:this.hass.localize("ui.common.yes"),dismissText:this.hass.localize("ui.common.no"),confirm:()=>this._delete()})}},{kind:"method",key:"_delete",value:async function(){await(0,u.SC)(this.hass,this.automationId),history.back()}},{kind:"method",key:"_handleMenuAction",value:async function(e){switch(e.detail.index){case 0:this._mode="gui";break;case 1:this._mode="yaml";break;case 2:this._duplicate();break;case 3:this._deleteConfirm()}}},{kind:"method",key:"_saveAutomation",value:function(){const e=this.automationId||String(Date.now());this.hass.callApi("POST","config/automation/config/"+e,this._config).then((()=>{this._dirty=!1,this.automationId||(0,c.c)(this,"/config/automation/edit/"+e,!0)}),(e=>{throw this._errors=e.body.message,(0,d.C)(this,{message:e.body.message}),e}))}},{kind:"method",key:"handleKeyboardSave",value:function(){this._saveAutomation()}},{kind:"get",static:!0,key:"styles",value:function(){return[f.Qx,o.iv`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--error-color);
        }
        .content {
          padding-bottom: 20px;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        p {
          margin-bottom: 0;
        }
        ha-entity-toggle {
          margin-right: 8px;
        }
        mwc-fab {
          position: relative;
          bottom: calc(-80px - env(safe-area-inset-bottom));
          transition: bottom 0.3s;
        }
        mwc-fab.dirty {
          bottom: 0;
        }
        .selected_menu_item {
          color: var(--primary-color);
        }
        li[role="separator"] {
          border-bottom-color: var(--divider-color);
        }
      `]}}]}}),(0,p.U)(o.oi));customElements.define("ha-automation-editor",D);i(25230),i(54444);var O=i(49629),S=i(7323),I=i(44583),j=i(47181),F=i(91741),R=(i(47150),i(56007));i(96551);const W=()=>i.e(2896).then(i.bind(i,72868));function U(){U=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var r=t.placement;if(t.kind===o&&("static"===r||"prototype"===r)){var n="static"===r?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var o=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],o=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!B(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:i,finishers:o};var n=this.decorateConstructor(i,t);return o.push.apply(o,n.finishers),n.finishers=o,n},addElementPlacement:function(e,t,i){var o=t[e.placement];if(!i&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var i=[],o=[],r=e.decorators,n=r.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:o,extras:i}},decorateConstructor:function(e,t){for(var i=[],o=t.length-1;o>=0;o--){var r=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[o])(r)||r);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?V(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=L(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:o,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:q(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=q(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var o=(0,t[i])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function M(e){var t,i=L(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function N(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function Y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function q(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function L(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}!function(e,t,i,o){var r=U();if(o)for(var n=0;n<o.length;n++)r=o[n](r);var a=t((function(e){r.initializeInstanceElements(e,s.elements)}),i),s=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},o=0;o<e.length;o++){var r,n=e[o];if("method"===n.kind&&(r=t.find(i)))if(Y(n.descriptor)||Y(r.descriptor)){if(B(n)||B(r))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");r.descriptor=n.descriptor}else{if(B(n)){if(B(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");r.decorators=n.decorators}N(n,r)}else t.push(n)}return t}(a.d.map(M)),e);r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-automation-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"automations",value:void 0},{kind:"field",key:"_automations",value:()=>(0,r.Z)((e=>e.map((e=>({...e,name:(0,F.C)(e)})))))},{kind:"field",key:"_columns",value(){return(0,r.Z)(((e,t)=>{const i={toggle:{title:"",type:"icon",template:(e,t)=>o.dy`
              <ha-entity-toggle
                .hass=${this.hass}
                .stateObj=${t}
              ></ha-entity-toggle>
            `},name:{title:this.hass.localize("ui.panel.config.automation.picker.headers.name"),sortable:!0,filterable:!0,direction:"asc",grows:!0,template:(e,t)=>o.dy`
            ${e}
            <div class="secondary">
              ${this.hass.localize("ui.card.automation.last_triggered")}:
              ${t.attributes.last_triggered?(0,I.o)(new Date(t.attributes.last_triggered),this.hass.language):this.hass.localize("ui.components.relative_time.never")}
            </div>
          `}};return e||(i.execute={title:"",template:(e,t)=>o.dy`
            <mwc-button
              .automation=${t}
              @click=${e=>this._execute(e)}
              .disabled=${R.V_.includes(t.state)}
            >
              ${this.hass.localize("ui.card.automation.trigger")}
            </mwc-button>
          `}),i.info={title:"",type:"icon-button",template:(e,t)=>o.dy`
          <ha-icon-button
            .automation=${t}
            @click=${this._showInfo}
            icon="hass:information-outline"
            title="${this.hass.localize("ui.panel.config.automation.picker.show_info_automation")}"
          ></ha-icon-button>
        `},i.edit={title:"",type:"icon-button",template:(e,t)=>o.dy`
          <a
            href=${(0,O.o)(t.attributes.id?"/config/automation/edit/"+t.attributes.id:void 0)}
          >
            <ha-icon-button
              .icon=${t.attributes.id?"hass:pencil":"hass:pencil-off"}
              .disabled=${!t.attributes.id}
              title="${this.hass.localize("ui.panel.config.automation.picker.show_info_automation")}"
            ></ha-icon-button>
          </a>
          ${t.attributes.id?"":o.dy`
                <paper-tooltip animation-delay="0" position="left">
                  ${this.hass.localize("ui.panel.config.automation.picker.only_editable")}
                </paper-tooltip>
              `}
        `},i}))}},{kind:"method",key:"render",value:function(){return o.dy`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${y.configSections.automation}
        .columns=${this._columns(this.narrow,this.hass.language)}
        .data=${this._automations(this.automations)}
        id="entity_id"
        .noDataText=${this.hass.localize("ui.panel.config.automation.picker.no_automations")}
        hasFab
      >
        <mwc-icon-button slot="toolbar-icon" @click=${this._showHelp}>
          <ha-svg-icon .path=${s.Xc_}></ha-svg-icon>
        </mwc-icon-button>
        <mwc-fab
          slot="fab"
          title=${this.hass.localize("ui.panel.config.automation.picker.add_automation")}
          @click=${this._createNew}
        >
          <ha-svg-icon slot="icon" .path=${s.qX5}></ha-svg-icon>
        </mwc-fab>
      </hass-tabs-subpage-data-table>
    `}},{kind:"method",key:"_showInfo",value:function(e){e.stopPropagation();const t=e.currentTarget.automation.entity_id;(0,j.B)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_showHelp",value:function(){(0,h.Ys)(this,{title:this.hass.localize("ui.panel.config.automation.caption"),text:o.dy`
        ${this.hass.localize("ui.panel.config.automation.picker.introduction")}
        <p>
          <a
            href="${(0,m.R)(this.hass,"/docs/automation/editor/")}"
            target="_blank"
            rel="noreferrer"
          >
            ${this.hass.localize("ui.panel.config.automation.picker.learn_more")}
          </a>
        </p>
      `})}},{kind:"method",key:"_execute",value:function(e){const t=e.currentTarget.automation.entity_id;(0,u.xu)(this.hass,t)}},{kind:"method",key:"_createNew",value:function(){var e,t;(0,S.p)(this.hass,"cloud")?(e=this,t={callback:e=>(0,u.Ip)(this,e)},(0,j.B)(e,"show-dialog",{dialogTag:"ha-dialog-thinktalk",dialogImport:W,dialogParams:t})):(0,u.Ip)(this)}},{kind:"get",static:!0,key:"styles",value:function(){return f.Qx}}]}}),o.oi);var X=i(38346);function Z(){Z=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(o){t.forEach((function(t){var r=t.placement;if(t.kind===o&&("static"===r||"prototype"===r)){var n="static"===r?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var o=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],o=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!G(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),o.push.apply(o,t.finishers)}),this),!t)return{elements:i,finishers:o};var n=this.decorateConstructor(i,t);return o.push.apply(o,n.finishers),n.finishers=o,n},addElementPlacement:function(e,t,i){var o=t[e.placement];if(!i&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var i=[],o=[],r=e.decorators,n=r.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:o,extras:i}},decorateConstructor:function(e,t){for(var i=[],o=t.length-1;o>=0;o--){var r=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[o])(r)||r);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?te(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=ee(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:o,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:J(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=J(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var o=(0,t[i])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function H(e){var t,i=ee(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function Q(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function G(e){return e.decorators&&e.decorators.length}function K(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function J(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function ee(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function ie(e,t,i){return(ie="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=oe(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(i):r.value}})(e,t,i||e)}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,i,o){var r=Z();if(o)for(var n=0;n<o.length;n++)r=o[n](r);var a=t((function(e){r.initializeInstanceElements(e,s.elements)}),i),s=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},o=0;o<e.length;o++){var r,n=e[o];if("method"===n.kind&&(r=t.find(i)))if(K(n.descriptor)||K(r.descriptor)){if(G(n)||G(r))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");r.descriptor=n.descriptor}else{if(G(n)){if(G(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");r.decorators=n.decorators}Q(n,r)}else t.push(n)}return t}(a.d.map(H)),e);r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-config-automation")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"showAdvanced",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"automations",value:()=>[]},{kind:"field",key:"_debouncedUpdateAutomations",value(){return(0,X.D)((e=>{const t=this._getAutomations(this.hass.states);var i,o;i=t,o=e.automations,i.length===o.length&&i.every(((e,t)=>e===o[t]))||(e.automations=t)}),10)}},{kind:"field",key:"routerOptions",value:()=>({defaultPage:"dashboard",routes:{dashboard:{tag:"ha-automation-picker",cache:!0},edit:{tag:"ha-automation-editor"}}})},{kind:"field",key:"_getAutomations",value:()=>(0,r.Z)((e=>Object.values(e).filter((e=>"automation"===(0,n.N)(e)))))},{kind:"method",key:"firstUpdated",value:function(e){ie(oe(i.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("device_automation")}},{kind:"method",key:"updatePageEl",value:function(e,t){if(e.hass=this.hass,e.narrow=this.narrow,e.isWide=this.isWide,e.route=this.routeTail,e.showAdvanced=this.showAdvanced,this.hass&&(e.automations&&t?t.has("hass")&&this._debouncedUpdateAutomations(e):e.automations=this._getAutomations(this.hass.states)),(!t||t.has("route"))&&"edit"===this._currentPage){const t=this.routeTail.path.substr(1);e.automationId="new"===t?null:t}}}]}}),a.n)}}]);
//# sourceMappingURL=chunk.d119c08ca21ef1c0b599.js.map