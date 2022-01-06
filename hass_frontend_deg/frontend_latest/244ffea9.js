"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6240],{22814:(e,t,i)=>{i.d(t,{iI:()=>n,W2:()=>r,TZ:()=>a});location.protocol,location.host;const n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),r=async(e,t,i,n)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:i,password:n}),a=async(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:i})},62770:(e,t,i)=>{let n,r,a;var o,s;i.d(t,{tt:()=>n,is:()=>r,Uf:()=>a,N2:()=>c,e4:()=>d,Fy:()=>l,x1:()=>h,OV:()=>u,aK:()=>p,rs:()=>f,pr:()=>_,wz:()=>v,PE:()=>y,xK:()=>g,Qf:()=>m,JT:()=>w,BP:()=>k,f$:()=>b,vS:()=>z,mZ:()=>S,Mb:()=>E,kL:()=>$,yD:()=>j,vN:()=>x,uq:()=>C,Hr:()=>A,OF:()=>D,Ir:()=>I,M0:()=>W,EW:()=>P,T5:()=>T,LD:()=>O,Db:()=>M,xw:()=>L}),function(e){e[e.Default=0]="Default",e[e.SmartStart=1]="SmartStart",e[e.Insecure=2]="Insecure",e[e.Security_S0=3]="Security_S0",e[e.Security_S2=4]="Security_S2"}(n||(n={})),function(e){e[e.Temporary=-2]="Temporary",e[e.None=-1]="None",e[e.S2_Unauthenticated=0]="S2_Unauthenticated",e[e.S2_Authenticated=1]="S2_Authenticated",e[e.S2_AccessControl=2]="S2_AccessControl",e[e.S0_Legacy=7]="S0_Legacy"}(r||(r={})),function(e){e[e.SmartStart=0]="SmartStart"}(a||(a={})),function(e){e[e.S2=0]="S2",e[e.SmartStart=1]="SmartStart"}(o||(o={})),function(e){e[e.ZWave=0]="ZWave",e[e.ZWaveLongRange=1]="ZWaveLongRange"}(s||(s={}));const c=52;let d;!function(e){e[e.Unknown=0]="Unknown",e[e.Asleep=1]="Asleep",e[e.Awake=2]="Awake",e[e.Dead=3]="Dead",e[e.Alive=4]="Alive"}(d||(d={}));const l=["unknown","asleep","awake","dead","alive"],h=(e,t,i=!0)=>e.callWS({type:"zwave_js/migrate_zwave",entry_id:t,dry_run:i}),u=(e,t)=>e.callWS({type:"zwave_js/network_status",entry_id:t}),p=(e,t)=>e.callWS({type:"zwave_js/data_collection_status",entry_id:t}),f=(e,t,i)=>e.callWS({type:"zwave_js/update_data_collection_preference",entry_id:t,opted_in:i}),_=(e,t)=>e.callWS({type:"zwave_js/get_provisioning_entries",entry_id:t}),v=(e,t,i,r=n.Default,a,o,s)=>e.connection.subscribeMessage((e=>i(e)),{type:"zwave_js/add_node",entry_id:t,inclusion_strategy:r,qr_code_string:o,qr_provisioning_information:a,planned_provisioning_entry:s}),y=(e,t)=>e.callWS({type:"zwave_js/stop_inclusion",entry_id:t}),g=(e,t,i,n)=>e.callWS({type:"zwave_js/grant_security_classes",entry_id:t,security_classes:i,client_side_auth:n}),m=(e,t,i)=>e.callWS({type:"zwave_js/validate_dsk_and_enter_pin",entry_id:t,pin:i}),w=(e,t,i)=>e.callWS({type:"zwave_js/supports_feature",entry_id:t,feature:i}),k=(e,t,i)=>e.callWS({type:"zwave_js/parse_qr_code_string",entry_id:t,qr_code_string:i}),b=(e,t,i,n,r)=>e.callWS({type:"zwave_js/provision_smart_start_node",entry_id:t,qr_code_string:n,qr_provisioning_information:i,planned_provisioning_entry:r}),z=(e,t,i,n)=>e.callWS({type:"zwave_js/unprovision_smart_start_node",entry_id:t,dsk:i,node_id:n}),S=(e,t,i)=>e.callWS({type:"zwave_js/node_status",entry_id:t,node_id:i}),E=(e,t,i)=>e.callWS({type:"zwave_js/node_metadata",entry_id:t,node_id:i}),$=(e,t,i)=>e.callWS({type:"zwave_js/get_config_parameters",entry_id:t,node_id:i}),j=(e,t,i,n,r,a)=>{const o={type:"zwave_js/set_config_parameter",entry_id:t,node_id:i,property:n,value:r,property_key:a};return e.callWS(o)},x=(e,t,i,n)=>e.connection.subscribeMessage((e=>n(e)),{type:"zwave_js/refresh_node_info",entry_id:t,node_id:i}),C=(e,t,i)=>e.callWS({type:"zwave_js/heal_node",entry_id:t,node_id:i}),A=(e,t,i,n)=>e.connection.subscribeMessage((e=>n(e)),{type:"zwave_js/remove_failed_node",entry_id:t,node_id:i}),D=(e,t)=>e.callWS({type:"zwave_js/begin_healing_network",entry_id:t}),I=(e,t)=>e.callWS({type:"zwave_js/stop_healing_network",entry_id:t}),W=(e,t,i,n)=>e.connection.subscribeMessage((e=>n(e)),{type:"zwave_js/node_ready",entry_id:t,node_id:i}),P=(e,t,i)=>e.connection.subscribeMessage((e=>i(e)),{type:"zwave_js/subscribe_heal_network_progress",entry_id:t}),T=e=>{if(!e)return;const t=e.identifiers.find((e=>"zwave_js"===e[0]));if(!t)return;const i=t[1].split("-");return{node_id:parseInt(i[1]),home_id:i[0]}},O=(e,t,i)=>e.connection.subscribeMessage(i,{type:"zwave_js/subscribe_log_updates",entry_id:t}),M=(e,t)=>e.callWS({type:"zwave_js/get_log_config",entry_id:t}),L=(e,t,i)=>e.callWS({type:"zwave_js/update_log_config",entry_id:t,config:{level:i}})},26765:(e,t,i)=>{i.d(t,{Ys:()=>o,g7:()=>s,D9:()=>c});var n=i(47181);const r=()=>Promise.all([i.e(45243),i.e(68200),i.e(30879),i.e(54703),i.e(1281)]).then(i.bind(i,1281)),a=(e,t,i)=>new Promise((a=>{const o=t.cancel,s=t.confirm;(0,n.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:r,dialogParams:{...t,...i,cancel:()=>{a(!(null==i||!i.prompt)&&null),o&&o()},confirm:e=>{a(null==i||!i.prompt||e),s&&s(e)}}})})),o=(e,t)=>a(e,t),s=(e,t)=>a(e,t,{confirmation:!0}),c=(e,t)=>a(e,t,{prompt:!0})},6240:(e,t,i)=>{i.r(t);i(53918);var n=i(37500),r=i(26767),a=i(5701),o=i(17717),s=i(228),c=(i(22098),i(10983),i(36125),i(99282),i(52039),i(22814)),d=i(62770),l=i(81582),h=i(26765),u=(i(1359),i(11654)),p=i(25936),f=(i(88165),i(70332)),_=i(47181);const v=()=>Promise.all([i.e(45243),i.e(16266),i.e(13327)]).then(i.bind(i,13327)),y=()=>Promise.all([i.e(45243),i.e(24358)]).then(i.bind(i,32451));var g=i(17100),m=i(17416),w=i(87744);function k(){k=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var a="static"===r?e:i;this.defineClassElement(a,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!S(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var a=this.decorateConstructor(i,t);return n.push.apply(n,a.finishers),a.finishers=n,a},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,a=r.length-1;a>=0;a--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[a])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var d=c.extras;if(d){for(var l=0;l<d.length;l++)this.addElementPlacement(d[l],t);i.push.apply(i,d)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==a.finisher&&i.push(a.finisher),void 0!==a.elements){e=a.elements;for(var o=0;o<e.length-1;o++)for(var s=o+1;s<e.length;s++)if(e[o].key===e[s].key&&e[o].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?x(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=j(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:$(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=$(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function b(e){var t,i=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function z(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function $(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function j(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}!function(e,t,i,n){var r=k();if(n)for(var a=0;a<n.length;a++)r=n[a](r);var o=t((function(e){r.initializeInstanceElements(e,s.elements)}),i),s=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},n=0;n<e.length;n++){var r,a=e[n];if("method"===a.kind&&(r=t.find(i)))if(E(a.descriptor)||E(r.descriptor)){if(S(a)||S(r))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");r.descriptor=a.descriptor}else{if(S(a)){if(S(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");r.decorators=a.decorators}z(a,r)}else t.push(a)}return t}(o.d.map(b)),e);r.initializeClassElements(o.F,s.elements),r.runClassFinishers(o.F,s.finishers)}([(0,r.M)("zwave_js-config-dashboard")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.C)({type:Object})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.C)({type:Object})],key:"route",value:void 0},{kind:"field",decorators:[(0,a.C)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,a.C)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,a.C)()],key:"configEntryId",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_configEntry",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_network",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_nodes",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_provisioningEntries",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_status",value:()=>"unknown"},{kind:"field",decorators:[(0,o.S)()],key:"_icon",value:()=>"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"},{kind:"field",decorators:[(0,o.S)()],key:"_dataCollectionOptIn",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this.hass&&this._fetchData()}},{kind:"method",key:"render",value:function(){var e,t,i;if(!this._configEntry)return n.dy``;if(l.LZ.includes(this._configEntry.state))return this._renderErrorScreen();const r=null!==(e=null===(t=this._nodes)||void 0===t?void 0:t.filter((e=>!e.ready)).length)&&void 0!==e?e:0;return n.dy`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .tabs=${g.configTabs}
      >
        <ha-icon-button
          slot="toolbar-icon"
          @click=${this._fetchData}
          .path=${"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}
          .label=${this.hass.localize("ui.common.refresh")}
        ></ha-icon-button>
        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.zwave_js.dashboard.header")}
          </div>

          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.zwave_js.dashboard.introduction")}
          </div>
          ${this._network?n.dy`
                <ha-card class="content network-status">
                  <div class="card-content">
                    <div class="heading">
                      <div class="icon">
                        ${"connecting"===this._status?n.dy`<ha-circular-progress
                              active
                            ></ha-circular-progress>`:n.dy`
                              <ha-svg-icon
                                .path=${this._icon}
                                class="network-status-icon ${(0,s.$)({[this._status]:!0})}"
                                slot="item-icon"
                              ></ha-svg-icon>
                            `}
                      </div>
                      ${"connecting"!==this._status?n.dy`
                            <div class="details">
                              ${this.hass.localize("ui.panel.config.zwave_js.common.network")}
                              ${this.hass.localize(`ui.panel.config.zwave_js.network_status.${this._status}`)}<br />
                              <small>
                                ${this.hass.localize("ui.panel.config.zwave_js.dashboard.devices",{count:this._network.controller.nodes.length})}
                                ${r>0?n.dy`(${this.hass.localize("ui.panel.config.zwave_js.dashboard.not_ready",{count:r})})`:""}
                              </small>
                            </div>
                          `:""}
                    </div>
                  </div>
                  <div class="card-actions">
                    <a
                      href=${`/config/devices/dashboard?historyBack=1&config_entry=${this.configEntryId}`}
                    >
                      <mwc-button>
                        ${this.hass.localize("ui.panel.config.devices.caption")}
                      </mwc-button>
                    </a>
                    <a
                      href=${`/config/entities/dashboard?historyBack=1&config_entry=${this.configEntryId}`}
                    >
                      <mwc-button>
                        ${this.hass.localize("ui.panel.config.entities.caption")}
                      </mwc-button>
                    </a>
                    ${null!==(i=this._provisioningEntries)&&void 0!==i&&i.length?n.dy`<a
                          href=${`provisioned?config_entry=${this.configEntryId}`}
                          ><mwc-button>
                            ${this.hass.localize("ui.panel.config.zwave_js.dashboard.provisioned_devices")}
                          </mwc-button></a
                        >`:""}
                  </div>
                </ha-card>
                <ha-card header="Diagnostics">
                  <div class="card-content">
                    ${this.hass.localize("ui.panel.config.zwave_js.dashboard.driver_version")}:
                    ${this._network.client.driver_version}<br />
                    ${this.hass.localize("ui.panel.config.zwave_js.dashboard.server_version")}:
                    ${this._network.client.server_version}<br />
                    ${this.hass.localize("ui.panel.config.zwave_js.dashboard.home_id")}:
                    ${this._network.controller.home_id}<br />
                    ${this.hass.localize("ui.panel.config.zwave_js.dashboard.server_url")}:
                    ${this._network.client.ws_server_url}<br />
                  </div>
                  <div class="card-actions">
                    <mwc-button
                      @click=${this._dumpDebugClicked}
                      .disabled=${"connecting"===this._status}
                    >
                      ${this.hass.localize("ui.panel.config.zwave_js.dashboard.dump_debug")}
                    </mwc-button>
                    <mwc-button
                      @click=${this._removeNodeClicked}
                      .disabled=${"connecting"===this._status}
                    >
                      ${this.hass.localize("ui.panel.config.zwave_js.common.remove_node")}
                    </mwc-button>
                    <mwc-button
                      @click=${this._healNetworkClicked}
                      .disabled=${"connecting"===this._status}
                    >
                      ${this.hass.localize("ui.panel.config.zwave_js.common.heal_network")}
                    </mwc-button>
                    <mwc-button
                      @click=${this._openOptionFlow}
                      .disabled=${"connecting"===this._status}
                    >
                      ${this.hass.localize("ui.panel.config.zwave_js.common.reconfigure_server")}
                    </mwc-button>
                  </div>
                </ha-card>
                <ha-card>
                  <div class="card-header">
                    <h1>Third-Party Data Reporting</h1>
                    ${void 0!==this._dataCollectionOptIn?n.dy`
                          <ha-switch
                            .checked=${!0===this._dataCollectionOptIn}
                            @change=${this._dataCollectionToggled}
                          ></ha-switch>
                        `:n.dy`
                          <ha-circular-progress
                            size="small"
                            active
                          ></ha-circular-progress>
                        `}
                  </div>
                  <div class="card-content">
                    <p>
                      Enable the reporting of anonymized telemetry and
                      statistics to the <em>Z-Wave JS organization</em>. This
                      data will be used to focus development efforts and improve
                      the user experience. Information about the data that is
                      collected and how it is used, including an example of the
                      data collected, can be found in the
                      <a
                        target="_blank"
                        href="https://zwave-js.github.io/node-zwave-js/#/data-collection/data-collection?id=usage-statistics"
                        >Z-Wave JS data collection documentation</a
                      >.
                    </p>
                  </div>
                </ha-card>
              `:""}
        </ha-config-section>
        <ha-fab
          slot="fab"
          .label=${this.hass.localize("ui.panel.config.zwave_js.common.add_node")}
          .disabled=${"connecting"===this._status}
          extended
          ?rtl=${(0,w.HE)(this.hass)}
          @click=${this._addNodeClicked}
        >
          <ha-svg-icon slot="icon" .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
        </ha-fab>
      </hass-tabs-subpage>
    `}},{kind:"method",key:"_renderErrorScreen",value:function(){var e;const t=this._configEntry;let i,r;return t.disabled_by?(i=["ui.panel.config.integrations.config_entry.disable.disabled_cause",{cause:this.hass.localize(`ui.panel.config.integrations.config_entry.disable.disabled_by.${t.disabled_by}`)||t.disabled_by}],"failed_unload"===t.state&&(r=n.dy`.
        ${this.hass.localize("ui.panel.config.integrations.config_entry.disable_restart_confirm")}.`)):"not_loaded"===t.state?i=["ui.panel.config.integrations.config_entry.not_loaded"]:l.LZ.includes(t.state)&&(i=[`ui.panel.config.integrations.config_entry.state.${t.state}`],t.reason?(this.hass.loadBackendTranslation("config",t.domain),r=n.dy` ${this.hass.localize(`component.${t.domain}.config.error.${t.reason}`)||t.reason}`):r=n.dy`
          <br />
          <a href="/config/logs"
            >${this.hass.localize("ui.panel.config.integrations.config_entry.check_the_logs")}</a
          >
        `),n.dy` ${i?n.dy`
          <div class="error-message">
            <ha-svg-icon .path=${"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}></ha-svg-icon>
            <h3>
              ${this._configEntry.title}: ${this.hass.localize(...i)}
            </h3>
            <p>${r}</p>
            <mwc-button @click=${this._handleBack}>
              ${(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.panel.error.go_back"))||"go back"}
            </mwc-button>
          </div>
        `:""}`}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"method",key:"_fetchData",value:async function(){if(!this.configEntryId)return;const e=await(0,l.pB)(this.hass);if(this._configEntry=e.find((e=>e.entry_id===this.configEntryId)),l.LZ.includes(this._configEntry.state))return;const[t,i,n]=await Promise.all([(0,d.OV)(this.hass,this.configEntryId),(0,d.aK)(this.hass,this.configEntryId),(0,d.pr)(this.hass,this.configEntryId)]);this._provisioningEntries=n,this._network=t,this._status=this._network.client.state,"connected"===this._status&&(this._icon="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"),this._dataCollectionOptIn=!0===i.opted_in||!0===i.enabled,this._fetchNodeStatus()}},{kind:"method",key:"_fetchNodeStatus",value:async function(){if(!this._network)return;const e=this._network.controller.nodes.map((e=>(0,d.mZ)(this.hass,this.configEntryId,e)));this._nodes=await Promise.all(e)}},{kind:"method",key:"_addNodeClicked",value:async function(){(0,f.B)(this,{entry_id:this.configEntryId,addedCallback:()=>this._fetchData()})}},{kind:"method",key:"_removeNodeClicked",value:async function(){var e,t;e=this,t={entry_id:this.configEntryId},(0,_.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-remove-node",dialogImport:y,dialogParams:t})}},{kind:"method",key:"_healNetworkClicked",value:async function(){var e,t;e=this,t={entry_id:this.configEntryId},(0,_.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-heal-network",dialogImport:v,dialogParams:t})}},{kind:"method",key:"_dataCollectionToggled",value:function(e){(0,d.rs)(this.hass,this.configEntryId,e.target.checked)}},{kind:"method",key:"_openOptionFlow",value:async function(){if(!this.configEntryId)return;const e=(await(0,l.pB)(this.hass)).find((e=>e.entry_id===this.configEntryId));(0,m.c)(this,e)}},{kind:"method",key:"_dumpDebugClicked",value:async function(){var e,t;await this._fetchNodeStatus();const i=null===(e=this._nodes)||void 0===e?void 0:e.filter((e=>!e.ready)),n=null===(t=this._nodes)||void 0===t?void 0:t.filter((e=>e.status===d.e4.Dead));if(null!=n&&n.length&&await(0,h.Ys)(this,{title:this.hass.localize("ui.panel.config.zwave_js.dashboard.dump_dead_nodes_title"),text:this.hass.localize("ui.panel.config.zwave_js.dashboard.dump_dead_nodes_text")}),null!=i&&i.length&&i.length!==(null==n?void 0:n.length)&&!await(0,h.g7)(this,{title:this.hass.localize("ui.panel.config.zwave_js.dashboard.dump_not_ready_title"),text:this.hass.localize("ui.panel.config.zwave_js.dashboard.dump_not_ready_text"),confirmText:this.hass.localize("ui.panel.config.zwave_js.dashboard.dump_not_ready_confirm")}))return;let r;try{r=await(0,c.iI)(this.hass,`/api/zwave_js/dump/${this.configEntryId}`)}catch(e){return void(0,h.Ys)(this,{title:"Error",text:e.error||e.body||e})}(0,p.N)(this,r.path,"zwave_js_dump.jsonl")}},{kind:"get",static:!0,key:"styles",value:function(){return[u.Qx,n.iv`
        .secondary {
          color: var(--secondary-text-color);
        }
        .connected {
          color: green;
        }
        .starting {
          color: orange;
        }
        .offline {
          color: red;
        }

        .error-message {
          display: flex;
          color: var(--primary-text-color);
          height: calc(100% - var(--header-height));
          padding: 16px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .error-message h3 {
          text-align: center;
          font-weight: bold;
        }

        .error-message ha-svg-icon {
          color: var(--error-color);
          width: 64px;
          height: 64px;
        }

        .content {
          margin-top: 24px;
        }

        .sectionHeader {
          position: relative;
          padding-right: 40px;
        }

        .network-status div.heading {
          display: flex;
          align-items: center;
        }

        .network-status div.heading .icon {
          width: 48px;
          height: 48px;
          margin-right: 16px;
        }
        .network-status div.heading ha-svg-icon {
          width: 48px;
          height: 48px;
        }
        .network-status div.heading .details {
          font-size: 1.5rem;
        }

        .network-status small {
          font-size: 1rem;
        }

        .card-header {
          display: flex;
        }
        .card-header h1 {
          flex: 1;
        }
        .card-header ha-switch {
          width: 48px;
          margin-top: 16px;
        }

        ha-card {
          margin: 0px auto 24px;
          max-width: 600px;
        }

        button.dump {
          width: 100%;
          text-align: center;
          color: var(--secondary-text-color);
        }

        [hidden] {
          display: none;
        }
      `]}}]}}),n.oi)},25936:(e,t,i)=>{i.d(t,{N:()=>n});const n=(e,t,i)=>{const n=document.createElement("a");n.target="_blank",n.href=t,n.download=i,e.shadowRoot.appendChild(n),n.dispatchEvent(new MouseEvent("click")),e.shadowRoot.removeChild(n)}}}]);
//# sourceMappingURL=244ffea9.js.map