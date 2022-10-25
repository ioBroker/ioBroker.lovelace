"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7044],{21560:(e,t,r)=>{r.d(t,{ZH:()=>c,MT:()=>s,U2:()=>l,RV:()=>n,t8:()=>d});const i=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const r=()=>indexedDB.databases().finally(t);e=setInterval(r,100),r()})).finally((()=>clearInterval(e)))};function n(e){return new Promise(((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)}))}function s(e,t){const r=i().then((()=>{const r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),n(r)}));return(e,i)=>r.then((r=>i(r.transaction(t,e).objectStore(t))))}let a;function o(){return a||(a=s("keyval-store","keyval")),a}function l(e,t=o()){return t("readonly",(t=>n(t.get(e))))}function d(e,t,r=o()){return r("readwrite",(r=>(r.put(t,e),n(r.transaction))))}function c(e=o()){return e("readwrite",(e=>(e.clear(),n(e.transaction))))}},17324:(e,t,r)=>{r.d(t,{N:()=>i});const i=(e,t,r)=>e.subscribeMessage((e=>t(e)),{type:"render_template",...r})},5369:(e,t,r)=>{r.r(t);r(51187);var i=r(37500),n=r(33310),s=r(8636),a=r(38346),o=(r(31206),r(53822),r(17324)),l=r(11654),d=r(27322);function c(){c=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var s="static"===n?e:r;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!h(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var s=this.decorateConstructor(r,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,s=n.length-1;s>=0;s--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[s])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==s.finisher&&r.push(s.finisher),void 0!==s.elements){e=s.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=v(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:f(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=f(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function p(e){var t,r=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function b(e,t,r){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},b(e,t,r||e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}const _='{## Imitate available variables: ##}\n{% set my_test_json = {\n  "temperature": 25,\n  "unit": "°C"\n} %}\n\nThe temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.\n\n{% if is_state("sun.sun", "above_horizon") -%}\n  The sun rose {{ relative_time(states.sun.sun.last_changed) }} ago.\n{%- else -%}\n  The sun will rise at {{ as_timestamp(state_attr("sun.sun", "next_rising")) | timestamp_local }}.\n{%- endif %}\n\nFor loop example getting entity values in the weather domain:\n\n{% for state in states.weather -%}\n  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}\n  {{ state.name | lower }} is {{state.state_with_unit}}\n{%- endfor %}.';!function(e,t,r,i){var n=c();if(i)for(var s=0;s<i.length;s++)n=i[s](n);var a=t((function(e){n.initializeInstanceElements(e,o.elements)}),r),o=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var n,s=e[i];if("method"===s.kind&&(n=t.find(r)))if(m(s.descriptor)||m(n.descriptor)){if(h(s)||h(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(h(s)){if(h(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}u(s,n)}else t.push(s)}return t}(a.d.map(p)),e);n.initializeClassElements(a.F,o.elements),n.runClassFinishers(a.F,o.finishers)}([(0,n.Mo)("developer-tools-template")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_rendering",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_templateResult",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_unsubRenderTemplate",value:void 0},{kind:"field",key:"_template",value:()=>""},{kind:"field",key:"_inited",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){b(g(r.prototype),"connectedCallback",this).call(this),this._template&&!this._unsubRenderTemplate&&this._subscribeTemplate()}},{kind:"method",key:"disconnectedCallback",value:function(){this._unsubscribeTemplate()}},{kind:"method",key:"firstUpdated",value:function(){localStorage&&localStorage["panel-dev-template-template"]?this._template=localStorage["panel-dev-template-template"]:this._template=_,this._subscribeTemplate(),this._inited=!0}},{kind:"method",key:"render",value:function(){var e,t,r,n,a,o;const l=typeof(null===(e=this._templateResult)||void 0===e?void 0:e.result),c="object"===l?Array.isArray(null===(t=this._templateResult)||void 0===t?void 0:t.result)?"list":"dict":l;return i.dy`
      <div
        class="content ${(0,s.$)({layout:!this.narrow,horizontal:!this.narrow})}"
      >
        <div class="edit-pane">
          <p>
            ${this.hass.localize("ui.panel.developer-tools.tabs.templates.description")}
          </p>
          <ul>
            <li>
              <a
                href="https://jinja.palletsprojects.com/en/latest/templates/"
                target="_blank"
                rel="noreferrer"
                >${this.hass.localize("ui.panel.developer-tools.tabs.templates.jinja_documentation")}
              </a>
            </li>
            <li>
              <a
                href=${(0,d.R)(this.hass,"/docs/configuration/templating/")}
                target="_blank"
                rel="noreferrer"
              >
                ${this.hass.localize("ui.panel.developer-tools.tabs.templates.template_extensions")}</a
              >
            </li>
          </ul>
          <p>
            ${this.hass.localize("ui.panel.developer-tools.tabs.templates.editor")}
          </p>
          <ha-code-editor
            mode="jinja2"
            .hass=${this.hass}
            .value=${this._template}
            .error=${this._error}
            autofocus
            autocomplete-entities
            autocomplete-icons
            @value-changed=${this._templateChanged}
            dir="ltr"
          ></ha-code-editor>
          <mwc-button @click=${this._restoreDemo}>
            ${this.hass.localize("ui.panel.developer-tools.tabs.templates.reset")}
          </mwc-button>
        </div>

        <div class="render-pane">
          ${this._rendering?i.dy`<ha-circular-progress
                class="render-spinner"
                active
                size="small"
              ></ha-circular-progress>`:""}
          ${this._templateResult?i.dy`${this.hass.localize("ui.panel.developer-tools.tabs.templates.result_type")}:
              ${c}`:""}
          <!-- prettier-ignore -->
          <pre
            class="rendered ${(0,s.$)({error:Boolean(this._error),[c]:c})}"
          >${this._error}${"object"===l?JSON.stringify(this._templateResult.result,null,2):null===(r=this._templateResult)||void 0===r?void 0:r.result}</pre>
          ${null!==(n=this._templateResult)&&void 0!==n&&n.listeners.time?i.dy`
                <p>
                  ${this.hass.localize("ui.panel.developer-tools.tabs.templates.time")}
                </p>
              `:""}
          ${null!==(a=this._templateResult)&&void 0!==a&&a.listeners?this._templateResult.listeners.all?i.dy`
                <p class="all_listeners">
                  ${this.hass.localize("ui.panel.developer-tools.tabs.templates.all_listeners")}
                </p>
              `:this._templateResult.listeners.domains.length||this._templateResult.listeners.entities.length?i.dy`
                <p>
                  ${this.hass.localize("ui.panel.developer-tools.tabs.templates.listeners")}
                </p>
                <ul>
                  ${this._templateResult.listeners.domains.sort().map((e=>i.dy`
                          <li>
                            <b
                              >${this.hass.localize("ui.panel.developer-tools.tabs.templates.domain")}</b
                            >: ${e}
                          </li>
                        `))}
                  ${this._templateResult.listeners.entities.sort().map((e=>i.dy`
                          <li>
                            <b
                              >${this.hass.localize("ui.panel.developer-tools.tabs.templates.entity")}</b
                            >: ${e}
                          </li>
                        `))}
                </ul>
              `:null!==(o=this._templateResult)&&void 0!==o&&o.listeners.time?i.dy``:i.dy` <span class="all_listeners">
                ${this.hass.localize("ui.panel.developer-tools.tabs.templates.no_listeners")}
              </span>`:""}
        </div>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,i.iv`
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px;
          padding: max(16px, env(safe-area-inset-top))
            max(16px, env(safe-area-inset-right))
            max(16px, env(safe-area-inset-bottom))
            max(16px, env(safe-area-inset-left));
        }

        .edit-pane {
          margin-right: 16px;
          margin-inline-start: initial;
          margin-inline-end: 16px;
          direction: var(--direction);
        }

        .edit-pane a {
          color: var(--primary-color);
        }

        .horizontal .edit-pane {
          max-width: 50%;
        }

        .render-pane {
          position: relative;
          max-width: 50%;
        }

        .render-spinner {
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .rendered {
          @apply --paper-font-code1;
          clear: both;
          white-space: pre-wrap;
          background-color: var(--secondary-background-color);
          padding: 8px;
          direction: ltr;
        }

        .all_listeners {
          color: var(--warning-color);
        }

        .rendered.error {
          color: var(--error-color);
        }

        @media all and (max-width: 870px) {
          .render-pane {
            max-width: 100%;
          }
        }
      `]}},{kind:"field",key:"_debounceRender",value(){return(0,a.D)((()=>{this._subscribeTemplate(),this._storeTemplate()}),500,!1)}},{kind:"method",key:"_templateChanged",value:function(e){this._template=e.detail.value,this._error&&(this._error=void 0),this._debounceRender()}},{kind:"method",key:"_subscribeTemplate",value:async function(){this._rendering=!0,await this._unsubscribeTemplate();try{this._unsubRenderTemplate=(0,o.N)(this.hass.connection,(e=>{this._templateResult=e,this._error=void 0}),{template:this._template,timeout:3,strict:!0}),await this._unsubRenderTemplate}catch(e){this._error="Unknown error",e.message&&(this._error=e.message,this._templateResult=void 0),this._unsubRenderTemplate=void 0}finally{this._rendering=!1}}},{kind:"method",key:"_unsubscribeTemplate",value:async function(){if(this._unsubRenderTemplate)try{(await this._unsubRenderTemplate)(),this._unsubRenderTemplate=void 0}catch(e){if("not_found"!==e.code)throw e}}},{kind:"method",key:"_storeTemplate",value:function(){this._inited&&(localStorage["panel-dev-template-template"]=this._template)}},{kind:"method",key:"_restoreDemo",value:function(){this._template=_,this._subscribeTemplate(),delete localStorage["panel-dev-template-template"]}}]}}),i.oi)},27322:(e,t,r)=>{r.d(t,{R:()=>i});const i=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=ab56ac0f.js.map