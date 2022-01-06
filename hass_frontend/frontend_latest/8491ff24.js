"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[12519],{96151:(e,t,r)=>{r.d(t,{T:()=>i,y:()=>a});const i=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{i(e)}))},96551:(e,t,r)=>{r(53918),r(54444);var i=r(37500),a=r(26767),o=r(5701),n=r(67352),s=r(47181),l=r(87744);r(67065),r(1359);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var a=t.placement;if(t.kind===i&&("static"===a||"prototype"===a)){var o="static"===a?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],a={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,a)}),this),e.forEach((function(e){if(!p(e))return r.push(e);var t=this.decorateElement(e,a);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],a=e.decorators,o=a.length-1;o>=0;o--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,a[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var a=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(a)||a);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var n=0;n<e.length-1;n++)for(var s=n+1;s<e.length;s++)if(e[n].key===e[s].key&&e[n].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=m(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},a)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:f(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=f(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function c(e){var t,r=m(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var a=d();if(i)for(var o=0;o<i.length;o++)a=i[o](a);var n=t((function(e){a.initializeInstanceElements(e,s.elements)}),r),s=a.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var a,o=e[i];if("method"===o.kind&&(a=t.find(r)))if(u(o.descriptor)||u(a.descriptor)){if(p(o)||p(a))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");a.descriptor=o.descriptor}else{if(p(o)){if(p(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");a.decorators=o.decorators}h(o,a)}else t.push(o)}return t}(n.d.map(c)),e);a.initializeClassElements(n.F,s.elements),a.runClassFinishers(n.F,s.finishers)}([(0,a.M)("hass-tabs-subpage-data-table")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Object})],key:"columns",value:()=>({})},{kind:"field",decorators:[(0,o.C)({type:Array})],key:"data",value:()=>[]},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"selectable",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"clickable",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean})],key:"hasFab",value:()=>!1},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[(0,o.C)({type:String})],key:"id",value:()=>"id"},{kind:"field",decorators:[(0,o.C)({type:String})],key:"filter",value:()=>""},{kind:"field",decorators:[(0,o.C)()],key:"searchLabel",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Array})],key:"activeFilters",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"hiddenLabel",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Number})],key:"numHidden",value:()=>0},{kind:"field",decorators:[(0,o.C)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,o.C)({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"tabs",value:void 0},{kind:"field",decorators:[(0,n.I)("ha-data-table",!0)],key:"_dataTable",value:void 0},{kind:"method",key:"clearSelection",value:function(){this._dataTable.clearSelection()}},{kind:"method",key:"render",value:function(){const e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden","number",this.numHidden)||this.numHidden:void 0,t=this.activeFilters?i.dy`${this.hass.localize("ui.components.data-table.filtering_by")}
        ${this.activeFilters.join(", ")}
        ${e?`(${e})`:""}`:e,r=i.dy`<search-input
        .hass=${this.hass}
        .filter=${this.filter}
        no-label-float
        no-underline
        @value-changed=${this._handleSearchChange}
        .label=${this.searchLabel||this.hass.localize("ui.components.data-table.search")}
      >
      </search-input
      >${t?i.dy`<div class="active-filters">
            ${this.narrow?i.dy`<div>
                  <ha-svg-icon .path=${"M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"}></ha-svg-icon>
                  <paper-tooltip animation-delay="0" position="left">
                    ${t}
                  </paper-tooltip>
                </div>`:t}
            <mwc-button @click=${this._clearFilter}>
              ${this.hass.localize("ui.components.data-table.clear")}
            </mwc-button>
          </div>`:""}<slot name="filter-menu"></slot>`;return i.dy`
      <hass-tabs-subpage
        .hass=${this.hass}
        .localizeFunc=${this.localizeFunc}
        .narrow=${this.narrow}
        .isWide=${this.isWide}
        .backPath=${this.backPath}
        .backCallback=${this.backCallback}
        .route=${this.route}
        .tabs=${this.tabs}
        .mainPage=${this.mainPage}
        .supervisor=${this.supervisor}
      >
        <div slot="toolbar-icon"><slot name="toolbar-icon"></slot></div>
        ${this.narrow?i.dy`
              <div slot="header">
                <slot name="header">
                  <div class="search-toolbar">${r}</div>
                </slot>
              </div>
            `:""}
        <ha-data-table
          .hass=${this.hass}
          .columns=${this.columns}
          .data=${this.data}
          .filter=${this.filter}
          .selectable=${this.selectable}
          .hasFab=${this.hasFab}
          .id=${this.id}
          .noDataText=${this.noDataText}
          .dir=${(0,l.Zu)(this.hass)}
          .clickable=${this.clickable}
          .appendRow=${this.appendRow}
        >
          ${this.narrow?i.dy` <div slot="header"></div> `:i.dy`
                <div slot="header">
                  <slot name="header">
                    <div class="table-header">${r}</div>
                  </slot>
                </div>
              `}
        </ha-data-table>
        <div slot="fab"><slot name="fab"></slot></div>
      </hass-tabs-subpage>
    `}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter=e.detail.value,(0,s.B)(this,"search-changed",{value:this.filter})}},{kind:"method",key:"_clearFilter",value:function(){(0,s.B)(this,"clear-filter")}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      ha-data-table {
        width: 100%;
        height: 100%;
        --data-table-border-width: 0;
      }
      :host(:not([narrow])) ha-data-table {
        height: calc(100vh - 1px - var(--header-height));
        display: block;
      }
      .table-header {
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
        padding: 0 16px;
        display: flex;
        align-items: center;
      }
      .search-toolbar {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
      }
      search-input {
        position: relative;
        top: 2px;
        flex-grow: 1;
      }
      search-input.header {
        left: -8px;
      }
      .active-filters {
        color: var(--primary-text-color);
        position: relative;
        display: flex;
        align-items: center;
        padding: 2px 2px 2px 8px;
        margin-left: 4px;
        font-size: 14px;
      }
      .active-filters ha-svg-icon {
        color: var(--primary-color);
      }
      .active-filters mwc-button {
        margin-left: 8px;
      }
      .active-filters::before {
        background-color: var(--primary-color);
        opacity: 0.12;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
      }
    `}}]}}),i.oi)}}]);
//# sourceMappingURL=8491ff24.js.map