"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[56217],{48091:(e,t,i)=>{i.d(t,{A8:()=>r,Ax:()=>n,Fc:()=>a,G$:()=>o,zq:()=>s});const r=async e=>e.callWS({type:"application_credentials/config"}),n=async(e,t)=>e.callWS({type:"application_credentials/config_entry",config_entry_id:t}),a=async e=>e.callWS({type:"application_credentials/list"}),o=async(e,t,i,r,n)=>e.callWS({type:"application_credentials/create",domain:t,client_id:i,client_secret:r,name:n}),s=async(e,t)=>e.callWS({type:"application_credentials/delete",application_credentials_id:t})},56217:(e,t,i)=>{i.r(t),i.d(t,{HaConfigApplicationCredentials:()=>_});var r=i(37500),n=i(33310),a=i(8636),o=i(14516),s=(i(12171),i(36125),i(76865),i(52039),i(48091)),l=i(5986),c=i(26765),d=(i(96551),i(29311)),p=i(12343);function h(){h=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var a="static"===n?e:i;this.defineClassElement(a,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var a=this.decorateConstructor(i,t);return r.push.apply(r,a.finishers),a.finishers=r,a},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,a=n.length-1;a>=0;a--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[a])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==a.finisher&&i.push(a.finisher),void 0!==a.elements){e=a.elements;for(var o=0;o<e.length-1;o++)for(var s=o+1;s<e.length;s++)if(e[o].key===e[s].key&&e[o].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=b(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function f(e){var t,i=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function k(e,t,i){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},k(e,t,i||e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}let _=function(e,t,i,r){var n=h();if(r)for(var a=0;a<r.length;a++)n=r[a](n);var o=t((function(e){n.initializeInstanceElements(e,s.elements)}),i),s=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},r=0;r<e.length;r++){var n,a=e[r];if("method"===a.kind&&(n=t.find(i)))if(y(a.descriptor)||y(n.descriptor)){if(m(a)||m(n))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");n.descriptor=a.descriptor}else{if(m(a)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");n.decorators=a.decorators}u(a,n)}else t.push(a)}return t}(o.d.map(f)),e);return n.initializeClassElements(o.F,s.elements),n.runClassFinishers(o.F,s.finishers)}([(0,n.Mo)("ha-config-application-credentials")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_applicationCredentials",value:()=>[]},{kind:"field",decorators:[(0,n.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_selected",value:()=>[]},{kind:"field",decorators:[(0,n.IO)("hass-tabs-subpage-data-table",!0)],key:"_dataTable",value:void 0},{kind:"field",key:"_columns",value:()=>(0,o.Z)(((e,t)=>({name:{title:t("ui.panel.config.application_credentials.picker.headers.name"),direction:"asc",grows:!0,template:(e,t)=>r.dy`${t.name}`},clientId:{title:t("ui.panel.config.application_credentials.picker.headers.client_id"),width:"30%",direction:"asc",hidden:e,template:(e,t)=>r.dy`${t.client_id}`},application:{title:t("ui.panel.config.application_credentials.picker.headers.application"),sortable:!0,width:"30%",direction:"asc",template:(e,i)=>r.dy`${(0,l.Lh)(t,i.domain)}`}})))},{kind:"method",key:"firstUpdated",value:function(e){k(w(i.prototype),"firstUpdated",this).call(this,e),this._loadTranslations(),this._fetchApplicationCredentials()}},{kind:"method",key:"render",value:function(){return r.dy`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        backPath="/config"
        .tabs=${d.configSections.devices}
        .columns=${this._columns(this.narrow,this.hass.localize)}
        .data=${this._applicationCredentials}
        hasFab
        selectable
        @selection-changed=${this._handleSelectionChanged}
      >
        ${this._selected.length?r.dy`
              <div
                class=${(0,a.$)({"header-toolbar":this.narrow,"table-header":!this.narrow})}
                slot="header"
              >
                <p class="selected-txt">
                  ${this.hass.localize("ui.panel.config.application_credentials.picker.selected","number",this._selected.length)}
                </p>
                <div class="header-btns">
                  ${this.narrow?r.dy`
                        <ha-icon-button
                          class="warning"
                          id="remove-btn"
                          @click=${this._removeSelected}
                          .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                          .label=${this.hass.localize("ui.common.remove")}
                        ></ha-icon-button>
                        <ha-help-tooltip
                          .label=${this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")}
                        >
                        </ha-help-tooltip>
                      `:r.dy`
                        <mwc-button
                          @click=${this._removeSelected}
                          class="warning"
                          >${this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")}</mwc-button
                        >
                      `}
                </div>
              </div>
            `:r.dy``}
        <ha-fab
          slot="fab"
          .label=${this.hass.localize("ui.panel.config.application_credentials.picker.add_application_credential")}
          extended
          @click=${this._addApplicationCredential}
        >
          <ha-svg-icon slot="icon" .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
        </ha-fab>
      </hass-tabs-subpage-data-table>
    `}},{kind:"method",key:"_handleSelectionChanged",value:function(e){this._selected=e.detail.value}},{kind:"method",key:"_removeSelected",value:function(){(0,c.g7)(this,{title:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_title","number",this._selected.length),text:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:async()=>{try{await Promise.all(this._selected.map((async e=>{await(0,s.zq)(this.hass,e)})))}catch(e){return void(0,c.Ys)(this,{title:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.error_title"),text:e.message})}this._dataTable.clearSelection(),this._fetchApplicationCredentials()}})}},{kind:"method",key:"_loadTranslations",value:async function(){await this.hass.loadBackendTranslation("title",void 0,!0)}},{kind:"method",key:"_fetchApplicationCredentials",value:async function(){this._applicationCredentials=await(0,s.Fc)(this.hass)}},{kind:"method",key:"_addApplicationCredential",value:function(){(0,p.L)(this,{applicationCredentialAddedCallback:async e=>{e&&(this._applicationCredentials=[...this._applicationCredentials,e])}})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      .table-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        background-color: var(--mdc-text-field-fill-color, whitesmoke);
        border-bottom: 1px solid
          var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42));
        box-sizing: border-box;
      }
      .header-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--secondary-text-color);
        position: relative;
        top: -4px;
      }
      .selected-txt {
        font-weight: bold;
        padding-left: 16px;
        padding-inline-start: 16px;
        direction: var(--direction);
      }
      .table-header .selected-txt {
        margin-top: 20px;
      }
      .header-toolbar .selected-txt {
        font-size: 16px;
      }
      .header-toolbar .header-btns {
        margin-right: -12px;
      }
      .header-btns {
        display: flex;
      }
      .header-btns > mwc-button,
      .header-btns > ha-icon-button {
        margin: 8px;
      }
      ha-button-menu {
        margin-left: 8px;
      }
    `}}]}}),r.oi)},12343:(e,t,i)=>{i.d(t,{L:()=>a});var r=i(47181);const n=()=>Promise.all([i.e(85084),i.e(78874),i.e(46772),i.e(77576),i.e(29925),i.e(4940),i.e(89493)]).then(i.bind(i,89493)),a=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-add-application-credential",dialogImport:n,dialogParams:t})}}}]);
//# sourceMappingURL=2593e551.js.map