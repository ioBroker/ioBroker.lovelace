(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{103:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var i=r(10),n=r(22);const s=Object(i.a)(e=>(class extends e{fire(e,t,r){return r=r||{},Object(n.a)(r.node||this,e,t,r)}}))},166:function(e,t,r){"use strict";var i=r(10);t.a=Object(i.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},167:function(e,t,r){"use strict";var i=r(1);function n(e){var t,r=l(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function o(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let d=function(e,t,r,i){var d=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var s="static"===n?e:r;this.defineClassElement(s,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!a(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var s=this.decorateConstructor(r,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,s=n.length-1;s>=0;s--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var o=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[s])(o)||o);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==s.finisher&&r.push(s.finisher),void 0!==s.elements){e=s.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=l(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=c(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=c(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var u=0;u<i.length;u++)d=i[u](d);var p=t(function(e){d.initializeInstanceElements(e,h.elements)},r),h=d.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===c.key&&e.placement===c.placement},i=0;i<e.length;i++){var n,c=e[i];if("method"===c.kind&&(n=t.find(r)))if(o(c.descriptor)||o(n.descriptor)){if(a(c)||a(n))throw new ReferenceError("Duplicated methods ("+c.key+") can't be decorated.");n.descriptor=c.descriptor}else{if(a(c)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+c.key+").");n.decorators=c.decorators}s(c,n)}else t.push(c)}return t}(p.d.map(n)),e);return d.initializeClassElements(p.F,h.elements),d.runClassFinishers(p.F,h.finishers)}(null,function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(i.f)()],key:"header",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `}},{kind:"method",key:"render",value:function(){return i.e`
      ${this.header?i.e`
            <div class="card-header">${this.header}</div>
          `:i.e``}
      <slot></slot>
    `}}]}},i.a);customElements.define("ha-card",d)},172:function(e,t,r){"use strict";r.d(t,"a",function(){return s});r(105);const i=customElements.get("iron-icon");let n=!1;class s extends i{constructor(...e){var t,r,i;super(...e),i=void 0,(r="_iconsetName")in(t=this)?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}listen(e,t,i){super.listen(e,t,i),n||"mdi"!==this._iconsetName||(n=!0,r.e(62).then(r.bind(null,212)))}}customElements.define("ha-icon",s)},221:function(e,t,r){"use strict";var i=r(10),n=r(107);t.a=Object(i.a)(e=>(class extends e{navigate(...e){Object(n.a)(this,...e)}}))},237:function(e,t,r){"use strict";r(105);var i=r(172);customElements.define("ha-icon-next",class extends i.a{connectedCallback(){this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left",super.connectedCallback()}})},319:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n}),r.d(t,"d",function(){return s}),r.d(t,"e",function(){return a}),r.d(t,"c",function(){return o});const i="system-admin",n="system-users",s=async e=>e.callWS({type:"config/auth/list"}),a=async(e,t,r)=>e.callWS(Object.assign({},r,{type:"config/auth/update",user_id:t})),o=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t})},657:function(e,t,r){"use strict";r.r(t);r(224);var i=r(12),n=r(18),s=r(4),a=r(26),o=r(221),c=(r(226),r(135),r(174),r(144),r(237),r(167),r(166)),l=r(103),d=r(67);let u=!1;customElements.define("ha-config-user-picker",class extends(Object(l.a)(Object(o.a)(Object(c.a)(a.a)))){static get template(){return s.a`
      <style>
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }
        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }
        paper-fab[rtl][is-wide] {
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
                      - System Generated
                    </template>
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </template>
        </ha-card>

        <paper-fab
          is-wide$="[[isWide]]"
          icon="hass:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></paper-fab>
      </hass-subpage>
    `}static get properties(){return{hass:Object,users:Array,rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}connectedCallback(){super.connectedCallback(),u||(u=!0,this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>Promise.all([r.e(0),r.e(25)]).then(r.bind(null,705))}))}_withDefault(e,t){return e||t}_computeUrl(e){return`/config/users/${e.id}`}_computeGroup(e,t){return e(`groups.${t.group_ids[0]}`)}_computeRTL(e){return Object(d.a)(e)}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId:e})=>{this.fire("reload-users"),e&&this.navigate(`/config/users/${e}`)}})}});var p=r(1),h=r(614),f=(r(82),r(54)),m=r(22),y=r(107),v=r(319);function b(e){var t,r=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function k(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function x(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const _=[v.b,v.a];!function(e,t,r,i){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var s="static"===n?e:r;this.defineClassElement(s,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!w(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var s=this.decorateConstructor(r,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,s=n.length-1;s>=0;s--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var o=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[s])(o)||o);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==s.finisher&&r.push(s.finisher),void 0!==s.elements){e=s.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=x(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=E(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=E(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var s=0;s<i.length;s++)n=i[s](n);var a=t(function(e){n.initializeInstanceElements(e,o.elements)},r),o=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var n,s=e[i];if("method"===s.kind&&(n=t.find(r)))if(k(s.descriptor)||k(n.descriptor)){if(w(s)||w(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(w(s)){if(w(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}g(s,n)}else t.push(s)}return t}(a.d.map(b)),e);n.initializeClassElements(a.F,o.elements),n.runClassFinishers(a.F,o.finishers)}([Object(p.d)("ha-user-editor")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(p.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(p.f)()],key:"user",value:void 0},{kind:"method",key:"render",value:function(){const e=this.hass,t=this.user;return e&&t?p.e`
      <hass-subpage
        .header=${e.localize("ui.panel.config.users.editor.caption")}
      >
        <ha-card .header=${this._name}>
          <table class="card-content">
            <tr>
              <td>ID</td>
              <td>${t.id}</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>${t.is_owner}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>
                <select
                  @change=${this._handleGroupChange}
                  .value=${Object(h.a)(this.updateComplete.then(()=>t.group_ids[0]))}
                >
                  ${_.map(t=>p.e`
                      <option value=${t}>
                        ${e.localize(`groups.${t}`)}
                      </option>
                    `)}
                </select>
              </td>
            </tr>
            ${t.group_ids[0]===v.b?p.e`
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
              <td>Active</td>
              <td>${t.is_active}</td>
            </tr>
            <tr>
              <td>System generated</td>
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
                  Unable to remove system generated users.
                `:""}
          </div>
        </ha-card>
      </hass-subpage>
    `:p.e``}},{kind:"get",key:"_name",value:function(){return this.user&&(this.user.name||"Unnamed user")}},{kind:"method",key:"_handleRenameUser",value:async function(e){e.currentTarget.blur();const t=prompt("New name?",this.user.name);if(null!==t&&t!==this.user.name)try{await Object(v.e)(this.hass,this.user.id,{name:t}),Object(m.a)(this,"reload-users")}catch(r){alert(`User rename failed: ${r.message}`)}}},{kind:"method",key:"_handleGroupChange",value:async function(e){const t=e.currentTarget,r=t.value;try{await Object(v.e)(this.hass,this.user.id,{group_ids:[r]}),Object(m.a)(this,"reload-users")}catch(i){alert(`Group update failed: ${i.message}`),t.value=this.user.group_ids[0]}}},{kind:"method",key:"_deleteUser",value:async function(e){if(confirm(`Are you sure you want to delete ${this._name}`)){try{await Object(v.c)(this.hass,this.user.id)}catch(t){return void alert(t.code)}Object(m.a)(this,"reload-users"),Object(y.a)(this,"/config/users")}else e.target.blur()}},{kind:"get",static:!0,key:"styles",value:function(){return[f.a,p.c`
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
      `]}}]}},p.a);customElements.define("ha-config-users",class extends(Object(o.a)(a.a)){static get template(){return s.a`
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
    `}static get properties(){return{hass:Object,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready(),this._loadData(),this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(e){this._user=e.detail.user}_checkRoute(e){Object(m.a)(this,"iron-resize"),this._debouncer=n.a.debounce(this._debouncer,i.d.after(0),()=>{""===e.path&&this.navigate(`${e.prefix}/picker`,!0)})}_computeUser(e,t){return e&&e.filter(e=>e.id===t)[0]}_equals(e,t){return e===t}async _loadData(){this._users=await Object(v.d)(this.hass)}})}}]);