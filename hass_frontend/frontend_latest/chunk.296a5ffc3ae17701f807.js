(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5225],{93888:(e,t,i)=>{"use strict";i.r(t);i(81689);var n=i(55317),o=i(15652),s=i(81471),r=i(14516),a=i(47181),l=i(58831),d=i(91741),c=i(45485),u=i(85415),h=i(87744),p=(i(76111),i(81545),i(22098),i(83927),i(10983),i(43709),i(83270));var f=i(90363),m=(i(15291),i(60010),i(11654)),y=i(81796);function g(){g=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var s="static"===o?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!k(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var s=this.decorateConstructor(i,t);return n.push.apply(n,s.finishers),s.finishers=n,s},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],o=e.decorators,s=o.length-1;s>=0;s--){var r=t[e.placement];r.splice(r.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var r=0;r<e.length-1;r++)for(var a=r+1;a<e.length;a++)if(e[r].key===e[a].key&&e[r].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[r].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?E(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=x(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:w(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=w(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function v(e){var t,i=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function _(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function k(e){return e.decorators&&e.decorators.length}function b(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function w(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function x(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function $(e,t,i){return($="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,i,n){var o=g();if(n)for(var s=0;s<n.length;s++)o=n[s](o);var r=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},n=0;n<e.length;n++){var o,s=e[n];if("method"===s.kind&&(o=t.find(i)))if(b(s.descriptor)||b(o.descriptor)){if(k(s)||k(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(k(s)){if(k(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}_(s,o)}else t.push(s)}return t}(r.d.map(v)),e);o.initializeClassElements(r.F,a.elements),o.runClassFinishers(r.F,a.finishers)}([(0,o.Mo)("cloud-google-assistant")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"_entityConfigs",value:()=>({})},{kind:"field",key:"_popstateSyncAttached",value:()=>!1},{kind:"field",key:"_popstateReloadStatusAttached",value:()=>!1},{kind:"field",key:"_isInitialExposed",value:void 0},{kind:"field",key:"_getEntityFilterFunc",value:()=>(0,r.Z)((e=>(0,c.h)(e.include_domains,e.include_entities,e.exclude_domains,e.exclude_entities)))},{kind:"method",key:"render",value:function(){if(void 0===this._entities)return o.dy` <hass-loading-screen></hass-loading-screen> `;const e=(0,c.E)(this.cloudStatus.google_entities),t=this._getEntityFilterFunc(this.cloudStatus.google_entities),i=(0,h.Zu)(this.hass),r=this._isInitialExposed||new Set,a=void 0===this._isInitialExposed;let l=0;const d=[],u=[];return this._entities.forEach((c=>{const h=this.hass.states[c.entity_id],p=this._entityConfigs[c.entity_id]||{should_expose:null},f=e?this._configIsExposed(c.entity_id,p):t(c.entity_id),m=e?this._configIsDomainExposed(c.entity_id):t(c.entity_id);f&&(l++,a&&r.add(c.entity_id));const y=r.has(c.entity_id)?d:u,g=o.dy`<mwc-icon-button
        slot="trigger"
        class=${(0,s.$)({exposed:f,"not-exposed":!f})}
        .disabled=${!e}
        .title=${this.hass.localize("ui.panel.config.cloud.google.expose")}
      >
        <ha-svg-icon
          .path=${null!==p.should_expose?f?n.qtl:n.xaH:m?n.D4N:n.tyg}
        ></ha-svg-icon>
      </mwc-icon-button>`;y.push(o.dy`
        <ha-card>
          <div class="card-content">
            <div class="top-line">
              <state-info
                .hass=${this.hass}
                .stateObj=${h}
                secondary-line
                @click=${this._showMoreInfo}
              >
                ${c.traits.map((e=>e.substr(e.lastIndexOf(".")+1))).join(", ")}
              </state-info>
              ${e?o.dy`<ha-button-menu
                    corner="BOTTOM_START"
                    .entityId=${h.entity_id}
                    @action=${this._exposeChanged}
                  >
                    ${g}
                    <mwc-list-item hasMeta>
                      ${this.hass.localize("ui.panel.config.cloud.google.expose_entity")}
                      <ha-svg-icon
                        class="exposed"
                        slot="meta"
                        .path=${n.qtl}
                      ></ha-svg-icon>
                    </mwc-list-item>
                    <mwc-list-item hasMeta>
                      ${this.hass.localize("ui.panel.config.cloud.google.dont_expose_entity")}
                      <ha-svg-icon
                        class="not-exposed"
                        slot="meta"
                        .path=${n.xaH}
                      ></ha-svg-icon>
                    </mwc-list-item>
                    <mwc-list-item hasMeta>
                      ${this.hass.localize("ui.panel.config.cloud.google.follow_domain")}
                      <ha-svg-icon
                        class=${(0,s.$)({exposed:m,"not-exposed":!m})}
                        slot="meta"
                        .path=${m?n.D4N:n.tyg}
                      ></ha-svg-icon>
                    </mwc-list-item>
                  </ha-button-menu>`:o.dy`${g}`}
            </div>
            ${c.might_2fa?o.dy`
                  <div>
                    <ha-formfield
                      .label=${this.hass.localize("ui.panel.config.cloud.google.disable_2FA")}
                      .dir=${i}
                    >
                      <ha-switch
                        .entityId=${c.entity_id}
                        .checked=${Boolean(p.disable_2fa)}
                        @change=${this._disable2FAChanged}
                      ></ha-switch>
                    </ha-formfield>
                  </div>
                `:""}
          </div>
        </ha-card>
      `)})),a&&(this._isInitialExposed=r),o.dy`
      <hass-subpage header="${this.hass.localize("ui.panel.config.cloud.google.title")}">
        ${e?o.dy`
                <mwc-button
                  slot="toolbar-icon"
                  @click=${this._openDomainToggler}
                  >${this.hass.localize("ui.panel.config.cloud.google.manage_domains")}</mwc-button
                >
              `:""}
        ${e?"":o.dy`
                <div class="banner">
                  ${this.hass.localize("ui.panel.config.cloud.google.banner")}
                </div>
              `}
          ${d.length>0?o.dy`
                  <div class="header">
                    <h3>
                      ${this.hass.localize("ui.panel.config.cloud.google.exposed_entities")}
                    </h3>
                    ${this.narrow?l:this.hass.localize("ui.panel.config.cloud.alexa.exposed","selected",l)}
                  </div>
                  <div class="content">${d}</div>
                `:""}
          ${u.length>0?o.dy`
                  <div class="header second">
                    <h3>
                      ${this.hass.localize("ui.panel.config.cloud.google.not_exposed_entities")}
                    </h3>
                    ${this.narrow?this._entities.length-l:this.hass.localize("ui.panel.config.cloud.alexa.not_exposed","selected",this._entities.length-l)}
                  </div>
                  <div class="content">${u}</div>
                `:""}
        </div>
      </hass-subpage>
    `}},{kind:"method",key:"firstUpdated",value:function(e){$(C(i.prototype),"firstUpdated",this).call(this,e),this._fetchData()}},{kind:"method",key:"updated",value:function(e){$(C(i.prototype),"updated",this).call(this,e),e.has("cloudStatus")&&(this._entityConfigs=this.cloudStatus.prefs.google_entity_configs)}},{kind:"method",key:"_configIsDomainExposed",value:function(e){const t=(0,l.M)(e);return!this.cloudStatus.prefs.google_default_expose||this.cloudStatus.prefs.google_default_expose.includes(t)}},{kind:"method",key:"_configIsExposed",value:function(e,t){var i;return null!==(i=t.should_expose)&&void 0!==i?i:this._configIsDomainExposed(e)}},{kind:"method",key:"_fetchData",value:async function(){const e=await(t=this.hass,t.callWS({type:"cloud/google_assistant/entities"}));var t;e.sort(((e,t)=>{const i=this.hass.states[e.entity_id],n=this.hass.states[t.entity_id];return(0,u.q)(i?(0,d.C)(i):e.entity_id,n?(0,d.C)(n):t.entity_id)})),this._entities=e}},{kind:"method",key:"_showMoreInfo",value:function(e){const t=e.currentTarget.stateObj.entity_id;(0,a.B)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_exposeChanged",value:async function(e){const t=e.currentTarget.entityId;let i=null;switch(e.detail.index){case 0:i=!0;break;case 1:i=!1;break;case 2:i=null}await this._updateExposed(t,i)}},{kind:"method",key:"_updateExposed",value:async function(e,t){await this._updateConfig(e,{should_expose:t}),this._ensureEntitySync()}},{kind:"method",key:"_disable2FAChanged",value:async function(e){const t=e.currentTarget.entityId,i=e.target.checked;i!==Boolean((this._entityConfigs[t]||{}).disable_2fa)&&await this._updateConfig(t,{disable_2fa:i})}},{kind:"method",key:"_updateConfig",value:async function(e,t){const i=await(0,p.QD)(this.hass,e,t);this._entityConfigs={...this._entityConfigs,[e]:i},this._ensureStatusReload()}},{kind:"method",key:"_openDomainToggler",value:function(){(0,f._)(this,{domains:this._entities.map((e=>(0,l.M)(e.entity_id))).filter(((e,t,i)=>i.indexOf(e)===t)),exposedDomains:this.cloudStatus.prefs.google_default_expose,toggleDomain:(e,t)=>{this._updateDomainExposed(e,t)},resetDomain:e=>{this._entities.forEach((t=>{(0,l.M)(t.entity_id)===e&&this._updateExposed(t.entity_id,null)}))}})}},{kind:"method",key:"_updateDomainExposed",value:async function(e,t){const i=this.cloudStatus.prefs.google_default_expose||this._entities.map((e=>(0,l.M)(e.entity_id))).filter(((e,t,i)=>i.indexOf(e)===t));t&&i.includes(e)||!t&&!i.includes(e)||(t?i.push(e):i.splice(i.indexOf(e),1),await(0,p.LV)(this.hass,{google_default_expose:i}),(0,a.B)(this,"ha-refresh-cloud-status"))}},{kind:"method",key:"_ensureStatusReload",value:function(){if(this._popstateReloadStatusAttached)return;this._popstateReloadStatusAttached=!0;const e=this.parentElement;window.addEventListener("popstate",(()=>(0,a.B)(e,"ha-refresh-cloud-status")),{once:!0})}},{kind:"method",key:"_ensureEntitySync",value:function(){if(this._popstateSyncAttached)return;this._popstateSyncAttached=!0;const e=this.parentElement;window.addEventListener("popstate",(()=>{(0,y.C)(e,{message:this.hass.localize("ui.panel.config.cloud.google.sync_to_google")}),(0,p.A$)(this.hass)}),{once:!0})}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,o.iv`
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
      `]}}]}}),o.oi)}}]);
//# sourceMappingURL=chunk.296a5ffc3ae17701f807.js.map