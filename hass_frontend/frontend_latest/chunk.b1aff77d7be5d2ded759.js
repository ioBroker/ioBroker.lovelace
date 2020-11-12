(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5204],{38654:(e,t,i)=>{"use strict";i.r(t);i(81689);var n=i(55317),r=i(15652),o=i(81471),s=i(14516),a=i(47181),l=i(58831),d=i(91741),c=i(45485),u=i(85415),p=(i(76111),i(81545),i(22098),i(83927),i(10983),i(43709),i(27434)),h=i(83270),f=i(90363),m=(i(15291),i(60010),i(11654));function y(){y=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!_(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var o=this.decorateConstructor(i,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,o=r.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=w(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function v(e){var t,i=w(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function E(e,t,i){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(i):r.value}})(e,t,i||e)}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const S=["Alexa.EndpointHealth"];!function(e,t,i,n){var r=y();if(n)for(var o=0;o<n.length;o++)r=n[o](r);var s=t((function(e){r.initializeInstanceElements(e,a.elements)}),i),a=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var r,o=e[n];if("method"===o.kind&&(r=t.find(i)))if(x(o.descriptor)||x(r.descriptor)){if(_(o)||_(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(_(o)){if(_(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}g(o,r)}else t.push(o)}return t}(s.d.map(v)),e);r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}([(0,r.Mo)("cloud-alexa")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"_entityConfigs",value:()=>({})},{kind:"field",key:"_popstateSyncAttached",value:()=>!1},{kind:"field",key:"_popstateReloadStatusAttached",value:()=>!1},{kind:"field",key:"_isInitialExposed",value:void 0},{kind:"field",key:"_getEntityFilterFunc",value:()=>(0,s.Z)((e=>(0,c.h)(e.include_domains,e.include_entities,e.exclude_domains,e.exclude_entities)))},{kind:"method",key:"render",value:function(){if(void 0===this._entities)return r.dy` <hass-loading-screen></hass-loading-screen> `;const e=(0,c.E)(this.cloudStatus.alexa_entities),t=this._getEntityFilterFunc(this.cloudStatus.alexa_entities),i=this._isInitialExposed||new Set,s=void 0===this._isInitialExposed;let a=0;const l=[],d=[];return this._entities.forEach((c=>{const u=this.hass.states[c.entity_id],p=this._entityConfigs[c.entity_id]||{should_expose:null},h=e?this._configIsExposed(c.entity_id,p):t(c.entity_id),f=e?this._configIsDomainExposed(c.entity_id):t(c.entity_id);h&&(a++,s&&i.add(c.entity_id));const m=i.has(c.entity_id)?l:d,y=r.dy`<mwc-icon-button
        slot="trigger"
        class=${(0,o.$)({exposed:h,"not-exposed":!h})}
        .disabled=${!e}
        .title=${this.hass.localize("ui.panel.config.cloud.alexa.expose")}
      >
        <ha-svg-icon
          .path=${null!==p.should_expose?h?n.qtl:n.xaH:f?n.D4N:n.tyg}
        ></ha-svg-icon>
      </mwc-icon-button>`;m.push(r.dy`
        <ha-card>
          <div class="card-content">
            <div class="top-line">
              <state-info
                .hass=${this.hass}
                .stateObj=${u}
                secondary-line
                @click=${this._showMoreInfo}
              >
                ${c.interfaces.filter((e=>!S.includes(e))).map((e=>e.replace(/(Alexa.|Controller)/g,""))).join(", ")}
              </state-info>
              ${e?r.dy`<ha-button-menu
                    corner="BOTTOM_START"
                    .entityId=${u.entity_id}
                    @action=${this._exposeChanged}
                  >
                    ${y}
                    <mwc-list-item hasMeta>
                      ${this.hass.localize("ui.panel.config.cloud.alexa.expose_entity")}
                      <ha-svg-icon
                        class="exposed"
                        slot="meta"
                        .path=${n.qtl}
                      ></ha-svg-icon>
                    </mwc-list-item>
                    <mwc-list-item hasMeta>
                      ${this.hass.localize("ui.panel.config.cloud.alexa.dont_expose_entity")}
                      <ha-svg-icon
                        class="not-exposed"
                        slot="meta"
                        .path=${n.xaH}
                      ></ha-svg-icon>
                    </mwc-list-item>
                    <mwc-list-item hasMeta>
                      ${this.hass.localize("ui.panel.config.cloud.alexa.follow_domain")}
                      <ha-svg-icon
                        class=${(0,o.$)({exposed:f,"not-exposed":!f})}
                        slot="meta"
                        .path=${f?n.D4N:n.tyg}
                      ></ha-svg-icon>
                    </mwc-list-item>
                  </ha-button-menu>`:r.dy`${y}`}
            </div>
          </div>
        </ha-card>
      `)})),s&&(this._isInitialExposed=i),r.dy`
      <hass-subpage header="${this.hass.localize("ui.panel.config.cloud.alexa.title")}">
        ${e?r.dy`
                <mwc-button
                  slot="toolbar-icon"
                  @click=${this._openDomainToggler}
                  >${this.hass.localize("ui.panel.config.cloud.alexa.manage_domains")}</mwc-button
                >
              `:""}
        ${e?"":r.dy`
                <div class="banner">
                  ${this.hass.localize("ui.panel.config.cloud.alexa.banner")}
                </div>
              `}
          ${l.length>0?r.dy`
                  <div class="header">
                    <h3>
                      ${this.hass.localize("ui.panel.config.cloud.alexa.exposed_entities")}
                    </h3>
                    ${this.narrow?a:this.hass.localize("ui.panel.config.cloud.alexa.exposed","selected",a)}
                  </div>
                  <div class="content">${l}</div>
                `:""}
          ${d.length>0?r.dy`
                  <div class="header second">
                    <h3>
                      ${this.hass.localize("ui.panel.config.cloud.alexa.not_exposed_entities")}
                    </h3>
                    ${this.narrow?this._entities.length-a:this.hass.localize("ui.panel.config.cloud.alexa.not_exposed","selected",this._entities.length-a)}
                  </div>
                  <div class="content">${d}</div>
                `:""}
        </div>
      </hass-subpage>
    `}},{kind:"method",key:"firstUpdated",value:function(e){E($(i.prototype),"firstUpdated",this).call(this,e),this._fetchData()}},{kind:"method",key:"updated",value:function(e){E($(i.prototype),"updated",this).call(this,e),e.has("cloudStatus")&&(this._entityConfigs=this.cloudStatus.prefs.alexa_entity_configs)}},{kind:"method",key:"_fetchData",value:async function(){const e=await(0,p.t)(this.hass);e.sort(((e,t)=>{const i=this.hass.states[e.entity_id],n=this.hass.states[t.entity_id];return(0,u.q)(i?(0,d.C)(i):e.entity_id,n?(0,d.C)(n):t.entity_id)})),this._entities=e}},{kind:"method",key:"_showMoreInfo",value:function(e){const t=e.currentTarget.stateObj.entity_id;(0,a.B)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_configIsDomainExposed",value:function(e){const t=(0,l.M)(e);return!this.cloudStatus.prefs.alexa_default_expose||this.cloudStatus.prefs.alexa_default_expose.includes(t)}},{kind:"method",key:"_configIsExposed",value:function(e,t){var i;return null!==(i=t.should_expose)&&void 0!==i?i:this._configIsDomainExposed(e)}},{kind:"method",key:"_exposeChanged",value:async function(e){const t=e.currentTarget.entityId;let i=null;switch(e.detail.index){case 0:i=!0;break;case 1:i=!1;break;case 2:i=null}await this._updateExposed(t,i)}},{kind:"method",key:"_updateExposed",value:async function(e,t){await this._updateConfig(e,{should_expose:t}),this._ensureEntitySync()}},{kind:"method",key:"_updateConfig",value:async function(e,t){const i=await(0,h.tW)(this.hass,e,t);this._entityConfigs={...this._entityConfigs,[e]:i},this._ensureStatusReload()}},{kind:"method",key:"_openDomainToggler",value:function(){(0,f._)(this,{domains:this._entities.map((e=>(0,l.M)(e.entity_id))).filter(((e,t,i)=>i.indexOf(e)===t)),exposedDomains:this.cloudStatus.prefs.alexa_default_expose,toggleDomain:(e,t)=>{this._updateDomainExposed(e,t)},resetDomain:e=>{this._entities.forEach((t=>{(0,l.M)(t.entity_id)===e&&this._updateExposed(t.entity_id,null)}))}})}},{kind:"method",key:"_updateDomainExposed",value:async function(e,t){const i=this.cloudStatus.prefs.alexa_default_expose||this._entities.map((e=>(0,l.M)(e.entity_id))).filter(((e,t,i)=>i.indexOf(e)===t));t&&i.includes(e)||!t&&!i.includes(e)||(t?i.push(e):i.splice(i.indexOf(e),1),await(0,h.LV)(this.hass,{alexa_default_expose:i}),(0,a.B)(this,"ha-refresh-cloud-status"))}},{kind:"method",key:"_ensureStatusReload",value:function(){if(this._popstateReloadStatusAttached)return;this._popstateReloadStatusAttached=!0;const e=this.parentElement;window.addEventListener("popstate",(()=>(0,a.B)(e,"ha-refresh-cloud-status")),{once:!0})}},{kind:"method",key:"_ensureEntitySync",value:function(){this._popstateSyncAttached||(this._popstateSyncAttached=!0,window.addEventListener("popstate",(()=>{}),{once:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,r.iv`
        mwc-list-item > [slot="meta"] {
          margin-left: 4px;
        }
        .banner {
          color: var(--primary-text-color);
          background-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          padding: 16px 8px;
          text-align: center;
        }
        .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 8px 8px;
          padding: 8px;
        }
        .card-content {
          padding-bottom: 12px;
        }
        state-info {
          cursor: pointer;
        }
        ha-switch {
          padding: 8px 0;
        }
        .top-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          border-bottom: 1px solid var(--divider-color);
          background: var(--app-header-background-color);
        }
        .header.second {
          border-top: 1px solid var(--divider-color);
        }
        .exposed {
          color: var(--success-color);
        }
        .not-exposed {
          color: var(--error-color);
        }
        @media all and (max-width: 450px) {
          ha-card {
            max-width: 100%;
          }
        }
      `]}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.b1aff77d7be5d2ded759.js.map