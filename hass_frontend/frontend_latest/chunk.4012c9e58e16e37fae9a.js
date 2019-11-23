/*! For license information please see chunk.4012c9e58e16e37fae9a.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[102],{172:function(e,t,r){"use strict";var i=r(8);t.a=Object(i.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},176:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var i=r(8),a=r(13);const s=Object(i.a)(e=>(class extends e{fire(e,t,r){return r=r||{},Object(a.a)(r.node||this,e,t,r)}}))},177:function(e,t,r){"use strict";r.d(t,"a",function(){return s});r(106);const i=customElements.get("iron-icon");let a=!1;class s extends i{constructor(...e){var t,r,i;super(...e),i=void 0,(r="_iconsetName")in(t=this)?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}listen(e,t,i){super.listen(e,t,i),a||"mdi"!==this._iconsetName||(a=!0,r.e(81).then(r.bind(null,216)))}}customElements.define("ha-icon",s)},237:function(e,t,r){"use strict";r(3);var i=r(5);Object(i.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var t={},r=!1;for(var i in e)t[i]=e[i],!r&&this.queryParams&&e[i]===this.queryParams[i]||(r=!0);for(var i in this.queryParams)if(r||!(i in e)){r=!0;break}if(!r)return;this._queryParamsUpdating=!0,this.set("queryParams",t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){this.active&&!this._queryParamsUpdating&&this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(this.autoActivate&&""===e&&(e="/"),t)if(e){for(var r=e.split("/"),i=t.split("/"),a=[],s={},n=0;n<i.length;n++){var o=i[n];if(!o&&""!==o)break;var l=r.shift();if(!l&&""!==l)return void this.__resetProperties();if(a.push(l),":"==o.charAt(0))s[o.slice(1)]=l;else if(o!==l)return void this.__resetProperties()}this._matched=a.join("/");var c={};this.active||(c.active=!0);var u=this.route.prefix+this._matched,d=r.join("/");for(var h in r.length>0&&(d="/"+d),this.tail&&this.tail.prefix===u&&this.tail.path===d||(c.tail={prefix:u,path:d,__queryParams:this.route.__queryParams}),c.data=s,this._dataInUrl={},s)this._dataInUrl[h]=s[h];this.setProperties?this.setProperties(c,!0):this.__setMulti(c)}else this.__resetProperties()}},__tailPathChanged:function(e){if(this.active){var t=e,r=this._matched;t&&("/"!==t.charAt(0)&&(t="/"+t),r+=t),this.set("route.path",r)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({});e!==this.__getLink(this._dataInUrl)&&this.set("route.path",e)}},__getLink:function(e){var t={tail:null};for(var r in this.data)t[r]=this.data[r];for(var r in e)t[r]=e[r];var i=this.pattern.split("/").map(function(e){return":"==e[0]&&(e=t[e.slice(1)]),e},this);return t.tail&&t.tail.path&&(i.length>0&&"/"===t.tail.path.charAt(0)?i.push(t.tail.path.slice(1)):i.push(t.tail.path)),i.join("/")},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);void 0!==e.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==e.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==e.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},272:function(e,t,r){"use strict";r(106);var i=r(177);customElements.define("ha-icon-next",class extends i.a{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left"},100)}})},282:function(e,t,r){"use strict";var i=r(8),a=r(96);t.a=Object(i.a)(e=>(class extends e{navigate(...e){Object(a.a)(this,...e)}}))},379:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r(48);const a=(e,t)=>Object(i.a)(e,{message:t.localize("ui.common.successfully_saved")})},756:function(e,t,r){"use strict";r.r(t);r(237);var i=r(10),a=r(21),s=r(4),n=r(30),o=r(282),l=(r(140),r(179),r(149),r(272),r(174),r(234),r(172)),c=r(176),u=r(93);let d=!1;customElements.define("ha-config-user-picker",class extends(Object(c.a)(Object(o.a)(Object(l.a)(n.a)))){static get template(){return s.a`
      <style>
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }
        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }
        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        ha-card {
          max-width: 600px;
          margin: 16px auto;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.users.picker.title')]]">
        <ha-card>
          <template is="dom-repeat" items="[[users]]" as="user">
            <a href="[[_computeUrl(user)]]">
              <paper-item>
                <paper-item-body two-line>
                  <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
                  <div secondary="">
                    [[_computeGroup(localize, user)]]
                    <template is="dom-if" if="[[user.system_generated]]">
                      -
                      [[localize('ui.panel.config.users.picker.system_generated')]]
                    </template>
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </template>
        </ha-card>

        <ha-fab
          is-wide$="[[isWide]]"
          icon="hass:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></ha-fab>
      </hass-subpage>
    `}static get properties(){return{hass:Object,users:Array,rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}connectedCallback(){super.connectedCallback(),d||(d=!0,this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>Promise.all([r.e(1),r.e(43)]).then(r.bind(null,736))}))}_withDefault(e,t){return e||t}_computeUrl(e){return`/config/users/${e.id}`}_computeGroup(e,t){return e(`groups.${t.group_ids[0]}`)}_computeRTL(e){return Object(u.a)(e)}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId:e})=>{this.fire("reload-users"),e&&this.navigate(`/config/users/${e}`)}})}});var h=r(0),p=r(14),f=r(19);const m=new WeakMap,y=Object(f.f)((...e)=>t=>{let r=m.get(t);void 0===r&&(r={lastRenderedIndex:2147483647,values:[]},m.set(t,r));const i=r.values;let a=i.length;r.values=e;for(let s=0;s<e.length&&!(s>r.lastRenderedIndex);s++){const n=e[s];if(Object(p.h)(n)||"function"!=typeof n.then){t.setValue(n),r.lastRenderedIndex=s;break}s<a&&n===i[s]||(r.lastRenderedIndex=2147483647,a=0,Promise.resolve(n).then(e=>{const i=r.values.indexOf(n);i>-1&&i<r.lastRenderedIndex&&(r.lastRenderedIndex=i,t.setValue(e),t.commit())}))}});r(83);var v=r(55),_=r(13),g=r(96),b=r(412),k=r(379);function w(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function P(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function x(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function j(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const z=[b.b,b.a];!function(e,t,r,i){var a=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var a=t.placement;if(t.kind===i&&("static"===a||"prototype"===a)){var s="static"===a?e:r;this.defineClassElement(s,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],a={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,a)},this),e.forEach(function(e){if(!x(e))return r.push(e);var t=this.decorateElement(e,a);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var s=this.decorateConstructor(r,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],a=e.decorators,s=a.length-1;s>=0;s--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,a[s])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var a=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(a)||a);if(void 0!==s.finisher&&r.push(s.finisher),void 0!==s.elements){e=s.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:i,descriptor:Object.assign({},a)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=j(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=j(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var s=0;s<i.length;s++)a=i[s](a);var n=t(function(e){a.initializeInstanceElements(e,o.elements)},r),o=a.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var a,s=e[i];if("method"===s.kind&&(a=t.find(r)))if(E(s.descriptor)||E(a.descriptor)){if(x(s)||x(a))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");a.descriptor=s.descriptor}else{if(x(s)){if(x(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");a.decorators=s.decorators}P(s,a)}else t.push(s)}return t}(n.d.map(w)),e);a.initializeClassElements(n.F,o.elements),a.runClassFinishers(n.F,o.finishers)}([Object(h.d)("ha-user-editor")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(h.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(h.f)()],key:"user",value:void 0},{kind:"method",key:"render",value:function(){const e=this.hass,t=this.user;return e&&t?h.e`
      <hass-subpage
        .header=${e.localize("ui.panel.config.users.editor.caption")}
      >
        <ha-card .header=${this._name}>
          <table class="card-content">
            <tr>
              <td>${e.localize("ui.panel.config.users.editor.id")}</td>
              <td>${t.id}</td>
            </tr>
            <tr>
              <td>${e.localize("ui.panel.config.users.editor.owner")}</td>
              <td>${t.is_owner}</td>
            </tr>
            <tr>
              <td>${e.localize("ui.panel.config.users.editor.group")}</td>
              <td>
                <select
                  @change=${this._handleGroupChange}
                  .value=${y(this.updateComplete.then(()=>t.group_ids[0]))}
                >
                  ${z.map(t=>h.e`
                      <option value=${t}>
                        ${e.localize(`groups.${t}`)}
                      </option>
                    `)}
                </select>
              </td>
            </tr>
            ${t.group_ids[0]===b.b?h.e`
                  <tr>
                    <td colspan="2" class="user-experiment">
                      The users group is a work in progress. The user will be
                      unable to administer the instance via the UI. We're still
                      auditing all management API endpoints to ensure that they
                      correctly limit access to administrators.
                    </td>
                  </tr>
                `:""}

            <tr>
              <td>${e.localize("ui.panel.config.users.editor.active")}</td>
              <td>${t.is_active}</td>
            </tr>
            <tr>
              <td>
                ${e.localize("ui.panel.config.users.editor.system_generated")}
              </td>
              <td>${t.system_generated}</td>
            </tr>
          </table>

          <div class="card-actions">
            <mwc-button @click=${this._handleRenameUser}>
              ${e.localize("ui.panel.config.users.editor.rename_user")}
            </mwc-button>
            <mwc-button
              class="warning"
              @click=${this._deleteUser}
              .disabled=${t.system_generated}
            >
              ${e.localize("ui.panel.config.users.editor.delete_user")}
            </mwc-button>
            ${t.system_generated?h.e`
                  ${e.localize("ui.panel.config.users.editor.system_generated_users_not_removable")}
                `:""}
          </div>
        </ha-card>
      </hass-subpage>
    `:h.e``}},{kind:"get",key:"_name",value:function(){return this.user&&(this.user.name||this.hass.localize("ui.panel.config.users.editor.unnamed_user"))}},{kind:"method",key:"_handleRenameUser",value:async function(e){e.currentTarget.blur();const t=prompt(this.hass.localize("ui.panel.config.users.editor.enter_new_name"),this.user.name);if(null!==t&&t!==this.user.name)try{await Object(b.e)(this.hass,this.user.id,{name:t}),Object(_.a)(this,"reload-users")}catch(r){alert(`${this.hass.localize("ui.panel.config.users.editor.user_rename_failed")} ${r.message}`)}}},{kind:"method",key:"_handleGroupChange",value:async function(e){const t=e.currentTarget,r=t.value;try{await Object(b.e)(this.hass,this.user.id,{group_ids:[r]}),Object(k.a)(this,this.hass),Object(_.a)(this,"reload-users")}catch(i){alert(`${this.hass.localize("ui.panel.config.users.editor.group_update_failed")} ${i.message}`),t.value=this.user.group_ids[0]}}},{kind:"method",key:"_deleteUser",value:async function(e){if(confirm(this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion","name",this._name))){try{await Object(b.c)(this.hass,this.user.id)}catch(t){return void alert(t.code)}Object(_.a)(this,"reload-users"),Object(g.a)(this,"/config/users")}else e.target.blur()}},{kind:"get",static:!0,key:"styles",value:function(){return[v.a,h.c`
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ha-card {
          max-width: 600px;
          margin: 0 auto 16px;
        }
        hass-subpage ha-card:first-of-type {
          direction: ltr;
        }
        table {
          width: 100%;
        }
        td {
          vertical-align: top;
        }
        .user-experiment {
          padding: 8px 0;
        }
      `]}}]}},h.a);customElements.define("ha-config-users",class extends(Object(o.a)(n.a)){static get template(){return s.a`
      <app-route
        route="[[route]]"
        pattern="/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <ha-config-user-picker
          hass="[[hass]]"
          users="[[_users]]"
        ></ha-config-user-picker>
      </template>
      <template
        is="dom-if"
        if='[[!_equals(_routeData.user, "picker")]]'
        restamp
      >
        <ha-user-editor
          hass="[[hass]]"
          user="[[_computeUser(_users, _routeData.user)]]"
        ></ha-user-editor>
      </template>
    `}static get properties(){return{hass:Object,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready(),this._loadData(),this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(e){this._user=e.detail.user}_checkRoute(e){Object(_.a)(this,"iron-resize"),this._debouncer=a.a.debounce(this._debouncer,i.d.after(0),()=>{""===e.path&&this.navigate(`${e.prefix}/picker`,!0)})}_computeUser(e,t){return e&&e.filter(e=>e.id===t)[0]}_equals(e,t){return e===t}async _loadData(){this._users=await Object(b.d)(this.hass)}})}}]);
//# sourceMappingURL=chunk.4012c9e58e16e37fae9a.js.map