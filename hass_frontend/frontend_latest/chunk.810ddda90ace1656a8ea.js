(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2979],{54531:(e,t,r)=>{"use strict";r.d(t,{zJ:()=>o,Xr:()=>l,Qc:()=>d});const i=["zone","persistent_notification"],n=(e,t)=>{if("call-service"!==t.action||!t.service_data||!t.service_data.entity_id)return;let r=t.service_data.entity_id;Array.isArray(r)||(r=[r]);for(const t of r)e.add(t)},a=(e,t)=>{"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&n(e,t.tap_action),t.hold_action&&n(e,t.hold_action)):e.add(t)},s=(e,t)=>{t.entity&&a(e,t.entity),t.entities&&Array.isArray(t.entities)&&t.entities.forEach((t=>a(e,t))),t.card&&s(e,t.card),t.cards&&Array.isArray(t.cards)&&t.cards.forEach((t=>s(e,t))),t.elements&&Array.isArray(t.elements)&&t.elements.forEach((t=>s(e,t))),t.badges&&Array.isArray(t.badges)&&t.badges.forEach((t=>a(e,t)))},o=e=>{const t=new Set;return e.views.forEach((e=>s(t,e))),t},l=(e,t)=>{const r=new Set;for(const n of Object.keys(e.states))t.has(n)||i.includes(n.split(".",1)[0])||r.add(n);return r},d=(e,t)=>{const r=o(t);return l(e,r)}},32979:(e,t,r)=>{"use strict";r(46363),r(47765);var i=r(81480),n=r(50424),a=r(55358),s=r(76666),o=r(92483),l=r(11716),d=r(14516),c=r(47181),h=(r(7164),r(31206),r(56007)),p=r(9893),u=r(54531),f=r(51153);const m=[{type:"alarm-panel",showElement:!0},{type:"button",showElement:!0},{type:"calendar",showElement:!0},{type:"entities",showElement:!0},{type:"entity",showElement:!0},{type:"gauge",showElement:!0},{type:"glance",showElement:!0},{type:"history-graph",showElement:!0},{type:"humidifier",showElement:!0},{type:"light",showElement:!0},{type:"map",showElement:!0},{type:"markdown",showElement:!0},{type:"media-control",showElement:!0},{type:"picture",showElement:!0},{type:"picture-elements",showElement:!0},{type:"picture-entity",showElement:!0},{type:"picture-glance",showElement:!0},{type:"plant-status",showElement:!0},{type:"sensor",showElement:!0},{type:"thermostat",showElement:!0},{type:"weather-forecast",showElement:!0},{type:"conditional"},{type:"entity-filter"},{type:"grid"},{type:"horizontal-stack"},{type:"iframe"},{type:"logbook"},{type:"vertical-stack"},{type:"shopping-list"}];function y(){y=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var a="static"===n?e:r;this.defineClassElement(a,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!k(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,a=n.length-1;a>=0;a--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[a])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var s=0;s<e.length-1;s++)for(var o=s+1;o<e.length;o++)if(e[s].key===e[o].key&&e[s].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=b(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function v(e){var t,r=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function k(e){return e.decorators&&e.decorators.length}function w(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=y();if(i)for(var a=0;a<i.length;a++)n=i[a](n);var s=t((function(e){n.initializeInstanceElements(e,o.elements)}),r),o=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var n,a=e[i];if("method"===a.kind&&(n=t.find(r)))if(w(a.descriptor)||w(n.descriptor)){if(k(a)||k(n))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");n.descriptor=a.descriptor}else{if(k(a)){if(k(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");n.decorators=a.decorators}g(a,n)}else t.push(a)}return t}(s.d.map(v)),e);n.initializeClassElements(s.F,o.elements),n.runClassFinishers(s.F,o.finishers)}([(0,a.Mo)("hui-card-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_cards",value:()=>[]},{kind:"field",key:"lovelace",value:void 0},{kind:"field",key:"cardPicked",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_filter",value:()=>""},{kind:"field",decorators:[(0,a.SB)()],key:"_width",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_height",value:void 0},{kind:"field",key:"_unusedEntities",value:void 0},{kind:"field",key:"_usedEntities",value:void 0},{kind:"field",key:"_filterCards",value:()=>(0,d.Z)(((e,t)=>{if(!t)return e;let r=e.map((e=>e.card));const n=new i.Z(r,{keys:["type","name","description"],isCaseSensitive:!1,minMatchCharLength:2,threshold:.2});return r=n.search(t).map((e=>e.item)),e.filter((e=>r.includes(e.card)))}))},{kind:"method",key:"render",value:function(){return this.hass&&this.lovelace&&this._unusedEntities&&this._usedEntities?n.dy`
      <search-input
        .filter=${this._filter}
        no-label-float
        @value-changed=${this._handleSearchChange}
        .label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.search_cards")}
      ></search-input>
      <div
        id="content"
        style=${(0,o.V)({width:this._width?`${this._width}px`:"auto",height:this._height?`${this._height}px`:"auto"})}
      >
        <div class="cards-container">
          ${this._filterCards(this._cards,this._filter).map((e=>e.element))}
        </div>
        <div class="cards-container">
          <div
            class="card manual"
            @click=${this._cardPicked}
            .config=${{type:""}}
          >
            <div class="card-header">
              ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual")}
            </div>
            <div class="preview description">
              ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual_description")}
            </div>
          </div>
        </div>
      </div>
    `:n.dy``}},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass");return!t||t.locale!==this.hass.locale}},{kind:"method",key:"firstUpdated",value:function(){if(!this.hass||!this.lovelace)return;const e=(0,u.zJ)(this.lovelace),t=(0,u.Xr)(this.hass,e);this._usedEntities=[...e].filter((e=>this.hass.states[e]&&!h.V_.includes(this.hass.states[e].state))),this._unusedEntities=[...t].filter((e=>this.hass.states[e]&&!h.V_.includes(this.hass.states[e].state))),this._loadCards()}},{kind:"method",key:"_loadCards",value:function(){let e=m.map((e=>({name:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.name`),description:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.description`),...e})));p.kb.length>0&&(e=e.concat(p.kb.map((e=>({type:e.type,name:e.name,description:e.description,showElement:e.preview,isCustom:!0}))))),this._cards=e.map((e=>({card:e,element:n.dy`${(0,l.C)(this._renderCardElement(e),n.dy`
          <div class="card spinner">
            <ha-circular-progress active alt="Loading"></ha-circular-progress>
          </div>
        `)}`})))}},{kind:"method",key:"_handleSearchChange",value:function(e){const t=e.detail.value;if(t){if(!this._width||!this._height){const e=this.shadowRoot.getElementById("content");if(e&&!this._width){const t=e.clientWidth;t&&(this._width=t)}if(e&&!this._height){const t=e.clientHeight;t&&(this._height=t)}}}else this._width=void 0,this._height=void 0;this._filter=t}},{kind:"method",key:"_cardPicked",value:function(e){const t=e.currentTarget.config;(0,c.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_tryCreateCardElement",value:function(e){const t=(0,f.l$)(e);return t.hass=this.hass,t.addEventListener("ll-rebuild",(r=>{r.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}},{kind:"method",key:"_rebuildCard",value:function(e,t){let r;try{r=this._tryCreateCardElement(t)}catch(e){return}e.parentElement&&e.parentElement.replaceChild(r,e)}},{kind:"method",key:"_renderCardElement",value:async function(e){let{type:t}=e;const{showElement:r,isCustom:i,name:a,description:o}=e,l=i?(0,p.cs)(t):void 0;let d;i&&(t=`${p.Qo}${t}`);let c={type:t};if(this.hass&&this.lovelace&&(c=await(async(e,t,r,i)=>{let n={type:t};const a=await(0,f.Do)(t);if(a&&a.getStubConfig){const t=a.getStubConfig(e,r,i);n={...n,...t}}return n})(this.hass,t,this._unusedEntities,this._usedEntities),r))try{d=this._tryCreateCardElement(c)}catch(e){d=void 0}return n.dy`
      <div class="card">
        <div
          class="overlay"
          @click=${this._cardPicked}
          .config=${c}
        ></div>
        <div class="card-header">
          ${l?`${this.hass.localize("ui.panel.lovelace.editor.cardpicker.custom_card")}: ${l.name||l.type}`:a}
        </div>
        <div
          class="preview ${(0,s.$)({description:!d||"HUI-ERROR-CARD"===d.tagName})}"
        >
          ${d&&"HUI-ERROR-CARD"!==d.tagName?d:l?l.description||this.hass.localize("ui.panel.lovelace.editor.cardpicker.no_description"):o}
        </div>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`
        search-input {
          display: block;
          margin: 0 -8px;
        }

        .cards-container {
          display: grid;
          grid-gap: 8px 8px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          margin-top: 20px;
        }

        .card {
          height: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          border-radius: var(--ha-card-border-radius, 4px);
          background: var(--primary-background-color, #fafafa);
          cursor: pointer;
          position: relative;
        }

        .card-header {
          color: var(--ha-card-header-color, --primary-text-color);
          font-family: var(--ha-card-header-font-family, inherit);
          font-size: 16px;
          font-weight: bold;
          letter-spacing: -0.012em;
          line-height: 20px;
          padding: 12px 16px;
          display: block;
          text-align: center;
          background: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          border-bottom: 1px solid var(--divider-color);
        }

        .preview {
          pointer-events: none;
          margin: 20px;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preview > :first-child {
          zoom: 0.6;
          display: block;
          width: 100%;
        }

        .description {
          text-align: center;
        }

        .spinner {
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          box-sizing: border-box;
          border: var(--ha-card-border-width, 1px) solid
            var(--ha-card-border-color, var(--divider-color));
          border-radius: var(--ha-card-border-radius, 4px);
        }

        .manual {
          max-width: none;
        }
      `]}}]}}),n.oi)}}]);
//# sourceMappingURL=chunk.810ddda90ace1656a8ea.js.map