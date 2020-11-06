(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4910],{18678:(e,t,i)=>{"use strict";i.d(t,{x:()=>n});var r=i(47181);const o=()=>Promise.all([i.e(5009),i.e(4358),i.e(8161),i.e(8941),i.e(879),i.e(1041),i.e(8374),i.e(3641),i.e(6372),i.e(8946),i.e(6547),i.e(7924),i.e(9033),i.e(1572),i.e(1527),i.e(5422),i.e(486),i.e(4018),i.e(5062),i.e(6552),i.e(4359),i.e(1082),i.e(2643),i.e(6509),i.e(4535),i.e(1927),i.e(3822),i.e(6902),i.e(3284),i.e(1311),i.e(388),i.e(1900),i.e(4998),i.e(4030),i.e(2231),i.e(38),i.e(6186)]).then(i.bind(i,90705)),n=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"hui-dialog-edit-card",dialogImport:o,dialogParams:t})}},4398:(e,t,i)=>{"use strict";i.d(t,{i:()=>o});var r=i(47181);const o=(e,t)=>{(0,r.B)(e,"show-dialog",{dialogTag:"hui-dialog-select-view",dialogImport:()=>Promise.all([i.e(5009),i.e(4358),i.e(8161),i.e(6372),i.e(4359),i.e(9278),i.e(1900),i.e(5024)]).then(i.bind(i,9700)),dialogParams:t})}},70858:(e,t,i)=>{"use strict";i.r(t);i(29119),i(53918),i(81689),i(25230),i(81545);var r=i(15652),o=i(18678),n=i(54324),a=i(26765),s=i(81796);var l=i(47181);const c=()=>Promise.all([i.e(5009),i.e(6076),i.e(4892)]).then(i.bind(i,95050));async function d(e,t,i,r){const o=i.config.views[r[0]].cards[r[1]];((e,t)=>{(0,l.B)(e,"show-dialog",{dialogTag:"hui-dialog-delete-card",dialogImport:c,dialogParams:t})})(e,{cardConfig:o,deleteCard:async()=>{try{const a=(0,n.f1)(i.config,r);await i.saveConfig(a);((e,t,i)=>{const r={message:t.localize("ui.common.successfully_deleted")};i&&(r.action={action:i,text:t.localize("ui.common.undo")}),(0,s.C)(e,r)})(e,t,(async()=>{await i.saveConfig((0,n.qD)(a,r,o))}))}catch(l){(0,a.Ys)(e,{text:"Deleting failed: "+l.message})}}})}var h=i(50467),u=i(55317),f=i(4398),p=i(15327),m=i(98573);function v(){v=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!w(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?E(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=C(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function y(e){var t,i=C(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function b(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var o=v();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(b(n.descriptor)||b(o.descriptor)){if(w(n)||w(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(w(n)){if(w(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}g(n,o)}else t.push(n)}return t}(a.d.map(y)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,r.Mo)("hui-card-options")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,r.vZ)()],key:"_assignedNodes",value:void 0},{kind:"method",key:"getCardSize",value:function(){return this._assignedNodes?(0,h.N)(this._assignedNodes[0]):1}},{kind:"method",key:"render",value:function(){return r.dy`
      <slot></slot>
      <ha-card>
        <div class="card-actions">
          <mwc-button @click=${this._editCard}
            >${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")}</mwc-button
          >
          <div>
            <mwc-icon-button
              title="Move card down"
              class="move-arrow"
              @click=${this._cardDown}
              ?disabled=${this.lovelace.config.views[this.path[0]].cards.length===this.path[1]+1}
            >
              <ha-svg-icon .path=${u.dYk}></ha-svg-icon>
            </mwc-icon-button>
            <mwc-icon-button
              title="Move card up"
              class="move-arrow"
              @click=${this._cardUp}
              ?disabled=${0===this.path[1]}
              ><ha-svg-icon .path=${u.XHH}></ha-svg-icon
            ></mwc-icon-button>
            <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
              <mwc-icon-button
                slot="trigger"
                aria-label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.options")}
                title="${this.hass.localize("ui.panel.lovelace.editor.edit_card.options")}"
              >
                <ha-svg-icon .path=${u.SXi}></ha-svg-icon>
              </mwc-icon-button>

              <mwc-list-item>
                ${this.hass.localize("ui.panel.lovelace.editor.edit_card.move")}</mwc-list-item
              >
              <mwc-list-item
                >${this.hass.localize("ui.panel.lovelace.editor.edit_card.duplicate")}</mwc-list-item
              >
              <mwc-list-item class="delete-item">
                ${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}</mwc-list-item
              >
            </ha-button-menu>
          </div>
        </div>
      </ha-card>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      :host(:hover) {
        outline: 2px solid var(--primary-color);
      }

      ::slotted(*) {
        display: block;
      }

      ha-card {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }

      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      mwc-icon-button {
        color: var(--primary-text-color);
      }

      mwc-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      mwc-list-item {
        cursor: pointer;
        white-space: nowrap;
      }

      mwc-list-item.delete-item {
        color: var(--error-color);
      }
    `}},{kind:"method",key:"_handleAction",value:function(e){switch(e.detail.index){case 0:this._moveCard();break;case 1:this._duplicateCard();break;case 2:this._deleteCard()}}},{kind:"method",key:"_duplicateCard",value:function(){const e=this.path,t=this.lovelace.config.views[e[0]].cards[e[1]];(0,o.x)(this,{lovelaceConfig:this.lovelace.config,cardConfig:t,saveConfig:this.lovelace.saveConfig,path:[e[0]]})}},{kind:"method",key:"_editCard",value:function(){(0,o.x)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:this.path})}},{kind:"method",key:"_cardUp",value:function(){const e=this.lovelace,t=this.path;e.saveConfig((0,n.Y7)(e.config,t,[t[0],t[1]-1]))}},{kind:"method",key:"_cardDown",value:function(){const e=this.lovelace,t=this.path;e.saveConfig((0,n.Y7)(e.config,t,[t[0],t[1]+1]))}},{kind:"method",key:"_moveCard",value:function(){(0,f.i)(this,{lovelaceConfig:this.lovelace.config,urlPath:this.lovelace.urlPath,allowDashboardChange:!0,header:this.hass.localize("ui.panel.lovelace.editor.move_card.header"),viewSelectedCallback:async(e,t,i)=>{if(e===this.lovelace.urlPath)return this.lovelace.saveConfig((0,n.wI)(this.lovelace.config,this.path,[i])),void(0,m.f)(this,this.hass);try{await(0,p.Oh)(this.hass,e,(0,n.Z0)(t,[i],this.lovelace.config.views[this.path[0]].cards[this.path[1]])),this.lovelace.saveConfig((0,n.f1)(this.lovelace.config,this.path)),(0,m.f)(this,this.hass)}catch(r){(0,a.Ys)(this,{text:"Moving failed: "+r.message})}}})}},{kind:"method",key:"_deleteCard",value:function(){d(this,this.hass,this.lovelace,this.path)}}]}}),r.oi)},98573:(e,t,i)=>{"use strict";i.d(t,{f:()=>o});var r=i(81796);const o=(e,t)=>(0,r.C)(e,{message:t.localize("ui.common.successfully_saved")})}}]);
//# sourceMappingURL=chunk.794fa7694c2ac07a882c.js.map