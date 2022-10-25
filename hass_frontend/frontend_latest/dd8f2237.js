"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[67876],{67876:(e,t,i)=>{i.a(e,(async e=>{i.r(t),i.d(t,{HaScriptTrace:()=>S});var r=i(37500),o=i(33310),s=i(8636),n=i(86230),a=i(7323),c=i(44583),l=(i(10983),i(71955),i(13126),i(8420)),d=i(78940),h=i(7719),u=(i(54933),i(19476)),p=i(55422),f=i(97389),v=i(26765),m=i(11654),y=(i(60010),i(81545),i(47181)),k=e([p,c,h,d,l]);function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var s="static"===o?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!w(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,s=o.length-1;s>=0;s--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[s])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var n=0;n<e.length-1;n++)for(var a=n+1;a<e.length;a++)if(e[n].key===e[a].key&&e[n].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=I(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function g(e){var t,i=I(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function b(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function $(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function I(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function A(e,t,i){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}},A(e,t,i||e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}[p,c,h,d,l]=k.then?await k:k;let S=function(e,t,i,r){var o=_();if(r)for(var s=0;s<r.length;s++)o=r[s](o);var n=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var o,s=e[r];if("method"===s.kind&&(o=t.find(i)))if($(s.descriptor)||$(o.descriptor)){if(w(s)||w(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(w(s)){if(w(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}b(s,o)}else t.push(s)}return t}(n.d.map(g)),e);return o.initializeClassElements(n.F,a.elements),o.runClassFinishers(n.F,a.finishers)}([(0,o.Mo)("ha-script-trace")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"scriptId",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"scripts",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_traces",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_runId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_selected",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_trace",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_view",value:()=>"details"},{kind:"field",decorators:[(0,o.IO)("hat-script-graph")],key:"_graph",value:void 0},{kind:"method",key:"render",value:function(){var e;const t=this._entityId?this.hass.states[this._entityId]:void 0,i=this._graph,o=null==i?void 0:i.trackedNodes,a=null==i?void 0:i.renderedNodes,l=(null==t?void 0:t.attributes.friendly_name)||this._entityId;return r.dy`
      ${""}
      <hass-subpage .hass=${this.hass} .narrow=${this.narrow} .header=${l}>
        ${!this.narrow&&this.scriptId?r.dy`
              <a
                class="trace-link"
                href="/config/script/edit/${this.scriptId}"
                slot="toolbar-icon"
              >
                <mwc-button>
                  ${this.hass.localize("ui.panel.config.script.trace.edit_script")}
                </mwc-button>
              </a>
            `:""}

        <ha-button-menu corner="BOTTOM_START" slot="toolbar-icon">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.menu")}
            .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
          ></ha-icon-button>

          <mwc-list-item
            graphic="icon"
            .disabled=${!t}
            @click=${this._showInfo}
          >
            ${this.hass.localize("ui.panel.config.script.editor.show_info")}
            <ha-svg-icon
              slot="graphic"
              .path=${"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"}
            ></ha-svg-icon>
          </mwc-list-item>

          ${this.narrow&&this.scriptId?r.dy`
                <a
                  class="trace-link"
                  href="/config/script/edit/${this.scriptId}"
                >
                  <mwc-list-item graphic="icon">
                    ${this.hass.localize("ui.panel.config.script.trace.edit_script")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                    ></ha-svg-icon>
                  </mwc-list-item>
                </a>
              `:""}

          <li divider role="separator"></li>

          <mwc-list-item graphic="icon" @click=${this._refreshTraces}>
            ${this.hass.localize("ui.panel.config.automation.trace.refresh")}
            <ha-svg-icon slot="graphic" .path=${"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}></ha-svg-icon>
          </mwc-list-item>

          <mwc-list-item
            graphic="icon"
            .disabled=${!this._trace}
            @click=${this._downloadTrace}
          >
            ${this.hass.localize("ui.panel.config.automation.trace.download_trace")}
            <ha-svg-icon slot="graphic" .path=${"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}></ha-svg-icon>
          </mwc-list-item>
        </ha-button-menu>

        <div class="toolbar">
          ${this._traces&&this._traces.length>0?r.dy`
                <ha-icon-button
                  .disabled=${this._traces[this._traces.length-1].run_id===this._runId}
                  label="Older trace"
                  @click=${this._pickOlderTrace}
                  .path=${"M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z"}
                ></ha-icon-button>
                <select .value=${this._runId} @change=${this._pickTrace}>
                  ${(0,n.r)(this._traces,(e=>e.run_id),(e=>r.dy`<option value=${e.run_id}>
                        ${(0,c.E8)(new Date(e.timestamp.start),this.hass.locale)}
                      </option>`))}
                </select>
                <ha-icon-button
                  .disabled=${this._traces[0].run_id===this._runId}
                  label="Newer trace"
                  @click=${this._pickNewerTrace}
                  .path=${"M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z"}
                ></ha-icon-button>
              `:""}
        </div>

        ${void 0===this._traces?r.dy`<div class="container">Loading…</div>`:0===this._traces.length?r.dy`<div class="container">No traces found</div>`:void 0===this._trace?"":r.dy`
              <div class="main">
                <div class="graph">
                  <hat-script-graph
                    .trace=${this._trace}
                    .selected=${null===(e=this._selected)||void 0===e?void 0:e.path}
                    @graph-node-selected=${this._pickNode}
                  ></hat-script-graph>
                </div>

                <div class="info">
                  <div class="tabs top">
                    ${[["details","Step Details"],["timeline","Trace Timeline"],["logbook","Related logbook entries"],["config","Script Config"]].map((([e,t])=>r.dy`
                        <button
                          tabindex="0"
                          .view=${e}
                          class=${(0,s.$)({active:this._view===e})}
                          @click=${this._showTab}
                        >
                          ${t}
                        </button>
                      `))}
                    ${this._trace.blueprint_inputs?r.dy`
                          <button
                            tabindex="0"
                            .view=${"blueprint"}
                            class=${(0,s.$)({active:"blueprint"===this._view})}
                            @click=${this._showTab}
                          >
                            Blueprint Config
                          </button>
                        `:""}
                  </div>
                  ${void 0===this._selected||void 0===this._logbookEntries||void 0===o?"":"details"===this._view?r.dy`
                        <ha-trace-path-details
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                          .trace=${this._trace}
                          .selected=${this._selected}
                          .logbookEntries=${this._logbookEntries}
                          .trackedNodes=${o}
                          .renderedNodes=${a}
                        ></ha-trace-path-details>
                      `:"config"===this._view?r.dy`
                        <ha-trace-config
                          .hass=${this.hass}
                          .trace=${this._trace}
                        ></ha-trace-config>
                      `:"logbook"===this._view?r.dy`
                        <ha-trace-logbook
                          .hass=${this.hass}
                          .narrow=${this.narrow}
                          .trace=${this._trace}
                          .logbookEntries=${this._logbookEntries}
                        ></ha-trace-logbook>
                      `:"blueprint"===this._view?r.dy`
                        <ha-trace-blueprint-config
                          .hass=${this.hass}
                          .trace=${this._trace}
                        ></ha-trace-blueprint-config>
                      `:r.dy`
                        <ha-trace-timeline
                          .hass=${this.hass}
                          .trace=${this._trace}
                          .logbookEntries=${this._logbookEntries}
                          .selected=${this._selected}
                          @value-changed=${this._timelinePathPicked}
                        ></ha-trace-timeline>
                      `}
                </div>
              </div>
            `}
      </hass-subpage>
    `}},{kind:"method",key:"firstUpdated",value:function(e){var t;if(A(C(i.prototype),"firstUpdated",this).call(this,e),!this.scriptId)return;const r=new URLSearchParams(location.search);this._loadTraces(r.get("run_id")||void 0),this._entityId=null===(t=Object.values(this.hass.entities).find((e=>e.unique_id===this.scriptId)))||void 0===t?void 0:t.entity_id}},{kind:"method",key:"willUpdate",value:function(e){var t;(A(C(i.prototype),"willUpdate",this).call(this,e),e.get("scriptId"))&&(this._traces=void 0,this._runId=void 0,this._trace=void 0,this._logbookEntries=void 0,this.scriptId&&(this._loadTraces(),this._entityId=null===(t=Object.values(this.hass.entities).find((e=>e.unique_id===this.scriptId)))||void 0===t?void 0:t.entity_id));e.has("_runId")&&this._runId&&(this._trace=void 0,this._logbookEntries=void 0,this._loadTrace())}},{kind:"method",key:"_pickOlderTrace",value:function(){const e=this._traces.findIndex((e=>e.run_id===this._runId));this._runId=this._traces[e+1].run_id,this._selected=void 0}},{kind:"method",key:"_pickNewerTrace",value:function(){const e=this._traces.findIndex((e=>e.run_id===this._runId));this._runId=this._traces[e-1].run_id,this._selected=void 0}},{kind:"method",key:"_pickTrace",value:function(e){this._runId=e.target.value,this._selected=void 0}},{kind:"method",key:"_pickNode",value:function(e){this._selected=e.detail}},{kind:"method",key:"_refreshTraces",value:function(){this._loadTraces()}},{kind:"method",key:"_loadTraces",value:async function(e){if(this._traces=await(0,f.lj)(this.hass,"script",this.scriptId),this._traces.reverse(),e&&(this._runId=e),this._runId&&!this._traces.some((e=>e.run_id===this._runId))){if(this._runId=void 0,this._selected=void 0,e){const e=new URLSearchParams(location.search);e.delete("run_id"),history.replaceState(null,"",`${location.pathname}?${e.toString()}`)}await(0,v.Ys)(this,{text:"Chosen trace is no longer available"})}!this._runId&&this._traces.length>0&&(this._runId=this._traces[0].run_id)}},{kind:"method",key:"_loadTrace",value:async function(){const e=await(0,f.mA)(this.hass,"script",this.scriptId,this._runId);this._logbookEntries=(0,a.p)(this.hass,"logbook")?await(0,p.sS)(this.hass,e.timestamp.start,e.context.id):[],this._trace=e}},{kind:"method",key:"_downloadTrace",value:function(){const e=document.createElement("a");e.download=`trace ${this._entityId} ${this._trace.timestamp.start}.json`,e.href=`data:application/json;charset=utf-8,${encodeURI(JSON.stringify({trace:this._trace,logbookEntries:this._logbookEntries},void 0,2))}`,e.click()}},{kind:"method",key:"_importTrace",value:function(){const e=prompt("Enter downloaded trace");e&&(localStorage.devTrace=e,this._loadLocalTrace(e))}},{kind:"method",key:"_loadLocalStorageTrace",value:function(){localStorage.devTrace&&this._loadLocalTrace(localStorage.devTrace)}},{kind:"method",key:"_loadLocalTrace",value:function(e){const t=JSON.parse(e);this._trace=t.trace,this._logbookEntries=t.logbookEntries}},{kind:"method",key:"_showTab",value:function(e){this._view=e.target.view}},{kind:"method",key:"_timelinePathPicked",value:function(e){const t=e.detail.value,i=this._graph.trackedNodes;i[t]&&(this._selected=i[t])}},{kind:"method",key:"_showInfo",value:async function(){this._entityId&&(0,y.B)(this,"hass-more-info",{entityId:this._entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,u.b,r.iv`
        .toolbar {
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--header-height);
          background-color: var(--primary-background-color);
          color: var(--app-header-text-color, white);
          border-bottom: var(--app-header-border-bottom, none);
          box-sizing: border-box;
        }

        .main {
          height: calc(100% - 56px);
          display: flex;
          background-color: var(--card-background-color);
        }

        :host([narrow]) .main {
          height: auto;
          flex-direction: column;
        }

        .container {
          padding: 16px;
        }

        .graph {
          border-right: 1px solid var(--divider-color);
          overflow-x: auto;
          max-width: 50%;
        }
        :host([narrow]) .graph {
          max-width: 100%;
        }

        .info {
          flex: 1;
          background-color: var(--card-background-color);
        }

        .linkButton {
          color: var(--primary-text-color);
        }
        .trace-link {
          text-decoration: none;
        }
      `]}}]}}),r.oi)}))}}]);
//# sourceMappingURL=dd8f2237.js.map