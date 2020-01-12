/*! For license information please see chunk.681bba3285fa623a7282.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[102],{177:function(e,t,r){"use strict";var i=r(8);t.a=Object(i.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},180:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r(8),s=r(13);const a=Object(i.a)(e=>(class extends e{fire(e,t,r){return r=r||{},Object(s.a)(r.node||this,e,t,r)}}))},245:function(e,t,r){"use strict";var i=r(119),s=r(0),a=r(72);r(283);function n(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const p=customElements.get("mwc-fab");!function(e,t,r,i){var s=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var s=t.placement;if(t.kind===i&&("static"===s||"prototype"===s)){var a="static"===s?e:r;this.defineClassElement(a,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],s={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,s)},this),e.forEach(function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],s=e.decorators,a=s.length-1;a>=0;a--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[a])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var s=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(s)||s);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=d(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var a=0;a<i.length;a++)s=i[a](s);var p=t(function(e){s.initializeInstanceElements(e,h.elements)},r),h=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var s,a=e[i];if("method"===a.kind&&(s=t.find(r)))if(c(a.descriptor)||c(s.descriptor)){if(l(a)||l(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(l(a)){if(l(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}o(a,s)}else t.push(a)}return t}(p.d.map(n)),e);s.initializeClassElements(p.F,h.elements),s.runClassFinishers(p.F,h.finishers)}([Object(s.d)("ha-fab")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){const e={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},t=""!==this.label&&this.extended;return s.e`
      <button
        .ripple="${Object(a.a)()}"
        class="mdc-fab ${Object(i.a)(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label||this.icon}"
      >
        ${t&&this.showIconAtEnd?this.label:""}
        ${this.icon?s.e`
              <ha-icon .icon=${this.icon}></ha-icon>
            `:""}
        ${t&&!this.showIconAtEnd?this.label:""}
      </button>
    `}}]}},p)},252:function(e,t,r){"use strict";r(4);var i=r(5);Object(i.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var t={},r=!1;for(var i in e)t[i]=e[i],!r&&this.queryParams&&e[i]===this.queryParams[i]||(r=!0);for(var i in this.queryParams)if(r||!(i in e)){r=!0;break}if(!r)return;this._queryParamsUpdating=!0,this.set("queryParams",t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){this.active&&!this._queryParamsUpdating&&this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(this.autoActivate&&""===e&&(e="/"),t)if(e){for(var r=e.split("/"),i=t.split("/"),s=[],a={},n=0;n<i.length;n++){var o=i[n];if(!o&&""!==o)break;var l=r.shift();if(!l&&""!==l)return void this.__resetProperties();if(s.push(l),":"==o.charAt(0))a[o.slice(1)]=l;else if(o!==l)return void this.__resetProperties()}this._matched=s.join("/");var c={};this.active||(c.active=!0);var d=this.route.prefix+this._matched,u=r.join("/");for(var p in r.length>0&&(u="/"+u),this.tail&&this.tail.prefix===d&&this.tail.path===u||(c.tail={prefix:d,path:u,__queryParams:this.route.__queryParams}),c.data=a,this._dataInUrl={},a)this._dataInUrl[p]=a[p];this.setProperties?this.setProperties(c,!0):this.__setMulti(c)}else this.__resetProperties()}},__tailPathChanged:function(e){if(this.active){var t=e,r=this._matched;t&&("/"!==t.charAt(0)&&(t="/"+t),r+=t),this.set("route.path",r)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({});e!==this.__getLink(this._dataInUrl)&&this.set("route.path",e)}},__getLink:function(e){var t={tail:null};for(var r in this.data)t[r]=this.data[r];for(var r in e)t[r]=e[r];var i=this.pattern.split("/").map(function(e){return":"==e[0]&&(e=t[e.slice(1)]),e},this);return t.tail&&t.tail.path&&(i.length>0&&"/"===t.tail.path.charAt(0)?i.push(t.tail.path.slice(1)):i.push(t.tail.path)),i.join("/")},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);void 0!==e.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==e.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==e.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},320:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var i=r(47);const s=(e,t)=>Object(i.a)(e,{message:t.localize("ui.common.successfully_saved")})},329:function(e,t,r){"use strict";var i=r(8),s=r(97);t.a=Object(i.a)(e=>(class extends e{navigate(...e){Object(s.a)(this,...e)}}))},397:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return s}),r.d(t,"d",function(){return a}),r.d(t,"e",function(){return n}),r.d(t,"c",function(){return o});const i="system-admin",s="system-users",a=async e=>e.callWS({type:"config/auth/list"}),n=async(e,t,r)=>e.callWS(Object.assign({},r,{type:"config/auth/update",user_id:t})),o=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t})},773:function(e,t,r){"use strict";r.r(t);r(252);var i=r(10),s=r(21),a=r(3),n=r(30),o=r(329),l=(r(143),r(184),r(151),r(306),r(178),r(245),r(177)),c=r(180),d=r(92);let u=!1;customElements.define("ha-config-user-picker",class extends(Object(c.a)(Object(o.a)(Object(l.a)(n.a)))){static get template(){return a.a`
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

      <hass-subpage
        header="[[localize('ui.panel.config.users.picker.title')]]"
        showBackButton="[[!isWide]]"
      >
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
    `}static get properties(){return{hass:Object,users:Array,isWide:Boolean,rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}connectedCallback(){super.connectedCallback(),u||(u=!0,this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>Promise.all([r.e(1),r.e(42)]).then(r.bind(null,755))}))}_withDefault(e,t){return e||t}_computeUrl(e){return`/config/users/${e.id}`}_computeGroup(e,t){return e(`groups.${t.group_ids[0]}`)}_computeRTL(e){return Object(d.a)(e)}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId:e})=>{this.fire("reload-users"),e&&this.navigate(`/config/users/${e}`)}})}});var p=r(0),h=r(14),f=r(19);const m=new WeakMap,y=Object(f.f)((...e)=>t=>{let r=m.get(t);void 0===r&&(r={lastRenderedIndex:2147483647,values:[]},m.set(t,r));const i=r.values;let s=i.length;r.values=e;for(let a=0;a<e.length&&!(a>r.lastRenderedIndex);a++){const n=e[a];if(Object(h.h)(n)||"function"!=typeof n.then){t.setValue(n),r.lastRenderedIndex=a;break}a<s&&n===i[a]||(r.lastRenderedIndex=2147483647,s=0,Promise.resolve(n).then(e=>{const i=r.values.indexOf(n);i>-1&&i<r.lastRenderedIndex&&(r.lastRenderedIndex=i,t.setValue(e),t.commit())}))}});r(83);var v=r(55),g=r(13),b=r(97),_=r(397),w=r(320);function k(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function E(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function j(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const D=[_.b,_.a];!function(e,t,r,i){var s=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var s=t.placement;if(t.kind===i&&("static"===s||"prototype"===s)){var a="static"===s?e:r;this.defineClassElement(a,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],s={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,s)},this),e.forEach(function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],s=e.decorators,a=s.length-1;a>=0;a--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[a])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var s=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(s)||s);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=j(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=j(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var a=0;a<i.length;a++)s=i[a](s);var n=t(function(e){s.initializeInstanceElements(e,o.elements)},r),o=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var s,a=e[i];if("method"===a.kind&&(s=t.find(r)))if(x(a.descriptor)||x(s.descriptor)){if(P(a)||P(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(P(a)){if(P(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}E(a,s)}else t.push(a)}return t}(n.d.map(k)),e);s.initializeClassElements(n.F,o.elements),s.runClassFinishers(n.F,o.finishers)}([Object(p.d)("ha-user-editor")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(p.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(p.f)()],key:"user",value:void 0},{kind:"method",key:"render",value:function(){const e=this.hass,t=this.user;return e&&t?p.e`
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
                  ${D.map(t=>p.e`
                      <option value=${t}>
                        ${e.localize(`groups.${t}`)}
                      </option>
                    `)}
                </select>
              </td>
            </tr>
            ${t.group_ids[0]===_.b?p.e`
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
            ${t.system_generated?p.e`
                  ${e.localize("ui.panel.config.users.editor.system_generated_users_not_removable")}
                `:""}
          </div>
        </ha-card>
      </hass-subpage>
    `:p.e``}},{kind:"get",key:"_name",value:function(){return this.user&&(this.user.name||this.hass.localize("ui.panel.config.users.editor.unnamed_user"))}},{kind:"method",key:"_handleRenameUser",value:async function(e){e.currentTarget.blur();const t=prompt(this.hass.localize("ui.panel.config.users.editor.enter_new_name"),this.user.name);if(null!==t&&t!==this.user.name)try{await Object(_.e)(this.hass,this.user.id,{name:t}),Object(g.a)(this,"reload-users")}catch(r){alert(`${this.hass.localize("ui.panel.config.users.editor.user_rename_failed")} ${r.message}`)}}},{kind:"method",key:"_handleGroupChange",value:async function(e){const t=e.currentTarget,r=t.value;try{await Object(_.e)(this.hass,this.user.id,{group_ids:[r]}),Object(w.a)(this,this.hass),Object(g.a)(this,"reload-users")}catch(i){alert(`${this.hass.localize("ui.panel.config.users.editor.group_update_failed")} ${i.message}`),t.value=this.user.group_ids[0]}}},{kind:"method",key:"_deleteUser",value:async function(e){if(confirm(this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion","name",this._name))){try{await Object(_.c)(this.hass,this.user.id)}catch(t){return void alert(t.code)}Object(g.a)(this,"reload-users"),Object(b.a)(this,"/config/users")}else e.target.blur()}},{kind:"get",static:!0,key:"styles",value:function(){return[v.a,p.c`
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
      `]}}]}},p.a);customElements.define("ha-config-users",class extends(Object(o.a)(n.a)){static get template(){return a.a`
      <app-route
        route="[[route]]"
        pattern="/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <ha-config-user-picker
          hass="[[hass]]"
          users="[[_users]]"
          is-wide="[[isWide]]"
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
    `}static get properties(){return{hass:Object,isWide:Boolean,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready(),this._loadData(),this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(e){this._user=e.detail.user}_checkRoute(e){Object(g.a)(this,"iron-resize"),this._debouncer=s.a.debounce(this._debouncer,i.d.after(0),()=>{""===e.path&&this.navigate(`${e.prefix}/picker`,!0)})}_computeUser(e,t){return e&&e.filter(e=>e.id===t)[0]}_equals(e,t){return e===t}async _loadData(){this._users=await Object(_.d)(this.hass)}})}}]);
//# sourceMappingURL=chunk.681bba3285fa623a7282.js.map