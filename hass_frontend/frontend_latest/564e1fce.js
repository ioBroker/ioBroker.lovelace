/*! For license information please see 564e1fce.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[79578],{27849:(e,t,r)=>{r(39841);var i=r(50856);r(28426);class n extends(customElements.get("app-header-layout")){static get template(){return i.d`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
          padding: env(safe-area-inset-top) env(safe-area-inset-right)
            env(safe-area-inset-bottom) env(safe-area-inset-left);
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
          margin-left: env(safe-area-inset-left);
          margin-right: env(safe-area-inset-right);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `}}customElements.define("ha-app-layout",n)},79578:(e,t,r)=>{r.a(e,(async e=>{r.r(t);r(44577),r(53268),r(12730);var i=r(37500),n=r(33310),o=r(14516),a=r(7323),s=(r(81545),r(22098),r(10983),r(99282),r(48932),r(52039),r(37610),r(45339)),l=r(24833),c=r(52415),d=(r(27849),r(73826)),p=r(11654),h=r(27322),u=(r(88165),r(29311)),f=r(80736),m=(r(74402),r(95306),e([f]));function y(){y=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!b(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=E(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function v(e){var t,r=E(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function w(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function E(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function x(e,t,r){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},x(e,t,r||e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}f=(m.then?await m:m)[0];!function(e,t,r,i){var n=y();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(w(o.descriptor)||w(n.descriptor)){if(b(o)||b(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(b(o)){if(b(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}g(o,n)}else t.push(o)}return t}(a.d.map(v)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("ha-config-dashboard")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"showAdvanced",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_tip",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_repairsIssues",value:()=>({issues:[],total:0})},{kind:"field",key:"_pages",value(){return(0,o.Z)(((e,t)=>{const r=[];return e&&t&&r.push({component:"cloud",path:"/config/cloud",name:"ioBroker Cloud",info:this.cloudStatus,iconPath:"M22 17C22.5 17 23 17.5 23 18V22C23 22.5 22.5 23 22 23H17C16.5 23 16 22.5 16 22V18C16 17.5 16.5 17 17 17V15.5C17 14.1 18.1 13 19.5 13C20.9 13 22 14.1 22 15.5V17M21 17V15.5C21 14.7 20.3 14 19.5 14C18.7 14 18 14.7 18 15.5V17H21M19.36 9.03C21.95 9.22 24 11.36 24 14L23.94 14.77C23.59 12.63 21.74 11 19.5 11C17 11 15 13 15 15.5L15 15.76C14.39 16.31 14 17.11 14 18V19H6C2.69 19 0 16.31 0 13C0 9.9 2.34 7.36 5.35 7.04C6.6 4.64 9.11 3 12 3C15.64 3 18.67 5.59 19.36 9.03Z",iconColor:"#3B808E"}),[...r,...u.configSections.dashboard]}))}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,s.$X)(this.hass.connection,(e=>{const t=e.issues.filter((e=>!e.ignored));this._repairsIssues={issues:t.sort(((e,t)=>s.wC[e.severity]-s.wC[t.severity])).slice(0,3===t.length?t.length:2),total:t.length};const r=new Set;for(const e of this._repairsIssues.issues)r.add(e.domain);this.hass.loadBackendTranslation("issues",[...r])}))]}},{kind:"method",key:"render",value:function(){const{updates:e,total:t}=this._filterUpdateEntitiesWithInstall(this.hass.states),{issues:r,total:n}=this._repairsIssues;return i.dy`
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            ></ha-menu-button>
            <div main-title>${this.hass.localize("panel.config")}</div>
            <ha-icon-button
              .label=${this.hass.localize("ui.dialogs.quick-bar.title")}
              .path=${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}
              @click=${this._showQuickBar}
            ></ha-icon-button>
            <ha-button-menu
              corner="BOTTOM_START"
              @action=${this._handleMenuAction}
              activatable
            >
              <ha-icon-button
                slot="trigger"
                .label=${this.hass.localize("ui.common.menu")}
                .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
              ></ha-icon-button>

              <mwc-list-item>
                ${this.hass.localize("ui.panel.config.updates.check_updates")}
              </mwc-list-item>
            </ha-button-menu>
          </app-toolbar>
        </app-header>

        <ha-config-section
          .narrow=${this.narrow}
          .isWide=${this.isWide}
          full-width
        >
          ${r.length||e.length?i.dy`<ha-card outlined>
                ${r.length?i.dy`
                      <ha-config-repairs
                        .hass=${this.hass}
                        .narrow=${this.narrow}
                        .total=${n}
                        .repairsIssues=${r}
                      ></ha-config-repairs>
                      ${n>r.length?i.dy`
                            <a class="button" href="/config/repairs">
                              ${this.hass.localize("ui.panel.config.repairs.more_repairs",{count:n-r.length})}
                            </a>
                          `:""}
                    `:""}
                ${r.length&&e.length?i.dy`<hr />`:""}
                ${e.length?i.dy`
                      <ha-config-updates
                        .hass=${this.hass}
                        .narrow=${this.narrow}
                        .total=${t}
                        .updateEntities=${e}
                      ></ha-config-updates>
                      ${t>e.length?i.dy`
                            <a class="button" href="/config/updates">
                              ${this.hass.localize("ui.panel.config.updates.more_updates",{count:t-e.length})}
                            </a>
                          `:""}
                    `:""}
              </ha-card>`:""}

          <ha-card outlined>
            <ha-config-navigation
              .hass=${this.hass}
              .narrow=${this.narrow}
              .showAdvanced=${this.showAdvanced}
              .pages=${this._pages(this.cloudStatus,(0,a.p)(this.hass,"cloud"))}
            ></ha-config-navigation>
          </ha-card>
          <ha-tip>${this._tip}</ha-tip>
        </ha-config-section>
      </ha-app-layout>
    `}},{kind:"method",key:"updated",value:function(e){x(A(r.prototype),"updated",this).call(this,e),!this._tip&&e.has("hass")&&(this._tip=((e,t)=>{const r=[];let n=[{content:e.localize("ui.panel.config.tips.join","forums",i.dy`<a
          href="https://community.home-assistant.io"
          target="_blank"
          rel="noreferrer"
          >Forums</a
        >`,"twitter",i.dy`<a
          href=${(0,h.R)(e,"/twitter")}
          target="_blank"
          rel="noreferrer"
          >Twitter</a
        >`,"discord",i.dy`<a
          href=${(0,h.R)(e,"/join-chat")}
          target="_blank"
          rel="noreferrer"
          >Chat</a
        >`,"blog",i.dy`<a
          href=${(0,h.R)(e,"/blog")}
          target="_blank"
          rel="noreferrer"
          >Blog</a
        >`,"newsletter",i.dy`<span class="keep-together"
          ><a
            href=${(0,h.R)(e,"/newsletter")}
            target="_blank"
            rel="noreferrer"
            >Newsletter</a
          >
        </span>`),weight:2,narrow:!0},{content:e.localize("ui.tips.key_c_hint"),weight:1,narrow:!1},{content:e.localize("ui.tips.key_m_hint"),weight:1,narrow:!1}];return t&&(n=n.filter((e=>e.narrow))),n.forEach((e=>{for(let t=0;t<e.weight;t++)r.push(e.content)})),r[Math.floor(Math.random()*r.length)]})(this.hass,this.narrow))}},{kind:"field",key:"_filterUpdateEntitiesWithInstall",value:()=>(0,o.Z)((e=>{const t=(0,l.Fj)(e);return{updates:t.slice(0,3===t.length?t.length:2),total:t.length}}))},{kind:"method",key:"_showQuickBar",value:function(){(0,c.H)(this,{commandMode:!0,hint:this.hass.localize("ui.dialogs.quick-bar.key_c_hint")})}},{kind:"method",key:"_handleMenuAction",value:async function(e){if(0===e.detail.index)(0,l.M$)(this,this.hass)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.Qx,i.iv`
        ha-card:last-child {
          margin-bottom: env(safe-area-inset-bottom);
        }
        :host(:not([narrow])) ha-card:last-child {
          margin-bottom: max(24px, env(safe-area-inset-bottom));
        }
        ha-config-section {
          margin: auto;
          margin-top: -32px;
          max-width: 600px;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
        a.button {
          display: inline-block;
          color: var(--primary-text-color);
          padding: 6px 16px;
          margin: 8px 16px 16px 16px;
          border-radius: 32px;
          border: 1px solid var(--divider-color);
        }
        .title {
          font-size: 16px;
          padding: 16px;
          padding-bottom: 0;
        }

        @media all and (max-width: 600px) {
          ha-card {
            border-width: 1px 0;
            border-radius: 0;
            box-shadow: unset;
          }
          ha-config-section {
            margin-top: -42px;
          }
        }

        ha-tip {
          margin-bottom: max(env(safe-area-inset-bottom), 8px);
        }

        .new {
          color: var(--primary-color);
        }

        .keep-together {
          display: inline-block;
        }

        hr {
          height: 1px;
          background-color: var(
            --ha-card-border-color,
            var(--divider-color, #e0e0e0)
          );
          border: none;
          margin-top: 0;
        }
      `]}}]}}),(0,d.f)(i.oi))}))},74402:(e,t,r)=>{r(24103),r(44577);var i=r(37500),n=r(33310),o=r(60228);r(22098),r(99282),r(35197);function a(){a=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=h(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=h(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=a();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var p=t((function(e){n.initializeInstanceElements(e,h.elements)}),r),h=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(d(o.descriptor)||d(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(p.d.map(s)),e);n.initializeClassElements(p.F,h.elements),n.runClassFinishers(p.F,h.finishers)}([(0,n.Mo)("ha-config-navigation")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"pages",value:void 0},{kind:"method",key:"render",value:function(){const e=this.pages.filter((e=>{var t;return"#external-app-configuration"===e.path?null===(t=this.hass.auth.external)||void 0===t?void 0:t.config.hasSettingsScreen:(0,o.j)(this.hass,e)})).map((e=>({...e,name:e.name||this.hass.localize(`ui.panel.config.dashboard.${e.translationKey}.main`),description:"cloud"===e.component&&e.info?e.info.logged_in?`\n                  ${this.hass.localize("ui.panel.config.cloud.description_login")}\n                `:`\n                  ${this.hass.localize("ui.panel.config.cloud.description_features")}\n                `:`\n                ${e.description||this.hass.localize(`ui.panel.config.dashboard.${e.translationKey}.secondary`)}\n              `})));return i.dy`
      <ha-navigation-list
        hasSecondary
        .hass=${this.hass}
        .narrow=${this.narrow}
        .pages=${e}
        .label=${this.hass.localize("panel.config")}
      ></ha-navigation-list>
    `}},{kind:"field",static:!0,key:"styles",value:()=>i.iv`
    ha-navigation-list {
      --navigation-list-item-title-font-size: 16px;
    }
  `}]}}),i.oi)},27322:(e,t,r)=>{r.d(t,{R:()=>i});const i=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=564e1fce.js.map