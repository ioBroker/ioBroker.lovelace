"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62336],{50239:(t,e,i)=>{i.d(e,{u:()=>r,Y:()=>o});const r=(t,e,i)=>Math.min(Math.max(t,e),i),o=(t,e,i)=>{let r;return r=e?Math.max(t,e):t,r=i?Math.min(r,i):r,r}},62336:(t,e,i)=>{i.d(e,{Q:()=>g});var r=i(37500),o=i(33310),n=i(8636),a=i(70483),s=i(50239);function l(){l=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var o=e.placement;if(e.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?t:i;this.defineClassElement(n,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],o={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,o)}),this),t.forEach((function(t){if(!h(t))return i.push(t);var e=this.decorateElement(t,o);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var n=this.decorateConstructor(i,e);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],o=t.decorators,n=o.length-1;n>=0;n--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,o[n])(s)||s);t=l.element,this.addElementPlacement(t,e),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],e);i.push.apply(i,d)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var o=this.fromClassDescriptor(t),n=this.toClassDescriptor((0,e[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){t=n.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=f(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var n={kind:e,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=t.initializer),n},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:u(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=u(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function d(t){var e,i=f(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function c(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function h(t){return t.decorators&&t.decorators.length}function p(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function u(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function f(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function v(t,e,i){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(i):o.value}},v(t,e,i||t)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}const g=3e5;!function(t,e,i,r){var o=l();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var a=e((function(t){o.initializeInstanceElements(t,s.elements)}),i),s=o.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===n.key&&t.placement===n.placement},r=0;r<t.length;r++){var o,n=t[r];if("method"===n.kind&&(o=e.find(i)))if(p(n.descriptor)||p(o.descriptor)){if(h(n)||h(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(h(n)){if(h(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}c(n,o)}else e.push(n)}return e}(a.d.map(d)),t);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-chart-base")],(function(t,e){class l extends e{constructor(...e){super(...e),t(this)}}return{F:l,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),v(m(l.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){v(m(l.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((t,e)=>{t.hidden&&this._hiddenDatasets.add(e)}))}},{kind:"method",key:"willUpdate",value:function(t){if(v(m(l.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((t,e)=>{t.hidden=this._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i,o;return r.dy`
      ${!0===(null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e||null===(i=e.legend)||void 0===i?void 0:i.display)?r.dy`<div class="chartLegend">
            <ul>
              ${this.data.datasets.map(((t,e)=>r.dy`<li
                  .datasetIndex=${e}
                  @click=${this._legendClick}
                  class=${(0,n.$)({hidden:this._hiddenDatasets.has(e)})}
                  .title=${t.label}
                >
                  <div
                    class="bullet"
                    style=${(0,a.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor})}
                  ></div>
                  <div class="label">${t.label}</div>
                </li>`))}
            </ul>
          </div>`:""}
      <div
        class="chartContainer"
        style=${(0,a.V)({height:`${null!==(o=this.height)&&void 0!==o?o:this._chartHeight}px`,overflow:this._chartHeight?"initial":"hidden"})}
      >
        <canvas></canvas>
        ${this._tooltip?r.dy`<div
              class="chartTooltip ${(0,n.$)({[this._tooltip.yAlign]:!0})}"
              style=${(0,a.V)({top:this._tooltip.top,left:this._tooltip.left})}
            >
              <div class="title">${this._tooltip.title}</div>
              ${this._tooltip.beforeBody?r.dy`<div class="beforeBody">
                    ${this._tooltip.beforeBody}
                  </div>`:""}
              <div>
                <ul>
                  ${this._tooltip.body.map(((t,e)=>r.dy`<li>
                      <div
                        class="bullet"
                        style=${(0,a.V)({backgroundColor:this._tooltip.labelColors[e].backgroundColor,borderColor:this._tooltip.labelColors[e].borderColor})}
                      ></div>
                      ${t.lines.join("\n")}
                    </li>`))}
                </ul>
              </div>
              ${this._tooltip.footer.length?r.dy`<div class="footer">
                    ${this._tooltip.footer.map((t=>r.dy`${t}<br />`))}
                  </div>`:""}
            </div>`:""}
      </div>
    `}},{kind:"method",key:"_setupChart",value:async function(){const t=this.renderRoot.querySelector("canvas").getContext("2d"),e=(await Promise.all([i.e(5287),i.e(12020),i.e(55928)]).then(i.bind(i,55928))).Chart,r=getComputedStyle(this);e.defaults.borderColor=r.getPropertyValue("--divider-color"),e.defaults.color=r.getPropertyValue("--secondary-text-color"),e.defaults.font.family=r.getPropertyValue("--mdc-typography-body1-font-family")||r.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new e(t,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var t,e,i,r,o;return{...this.options,plugins:{...null===(t=this.options)||void 0===t?void 0:t.plugins,tooltip:{...null===(e=this.options)||void 0===e||null===(i=e.plugins)||void 0===i?void 0:i.tooltip,enabled:!1,external:t=>this._handleTooltip(t)},legend:{...null===(r=this.options)||void 0===r||null===(o=r.plugins)||void 0===o?void 0:o.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var t,e;return[...this.plugins||[],{id:"afterRenderHook",afterRender:t=>{this._chartHeight=t.height},legend:{...null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(t){if(!this.chart)return;const e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip={...t.tooltip,top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,s.u)(t.tooltip.caretX,100,this.clientWidth-100)-100+"px"}:this._tooltip=void 0}},{kind:"field",key:"updateChart",value(){return t=>{this.chart&&this.chart.update(t)}}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      :host {
        display: block;
      }
      .chartContainer {
        overflow: hidden;
        height: 0;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      canvas {
        max-height: var(--chart-max-height, 400px);
      }
      .chartLegend {
        text-align: center;
      }
      .chartLegend li {
        cursor: pointer;
        display: inline-grid;
        grid-auto-flow: column;
        padding: 0 8px;
        box-sizing: border-box;
        align-items: center;
        color: var(--secondary-text-color);
      }
      .chartLegend .hidden {
        text-decoration: line-through;
      }
      .chartLegend .label {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .chartLegend .bullet,
      .chartTooltip .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        display: inline-block;
        height: 16px;
        margin-right: 6px;
        width: 16px;
        flex-shrink: 0;
        box-sizing: border-box;
        margin-inline-end: 6px;
        margin-inline-start: initial;
        direction: var(--direction);
      }
      .chartTooltip .bullet {
        align-self: baseline;
      }
      :host([rtl]) .chartLegend .bullet,
      :host([rtl]) .chartTooltip .bullet {
        margin-right: inherit;
        margin-left: 6px;
        margin-inline-end: inherit;
        margin-inline-start: 6px;
        direction: var(--direction);
      }
      .chartTooltip {
        padding: 8px;
        font-size: 90%;
        position: absolute;
        background: rgba(80, 80, 80, 0.9);
        color: white;
        border-radius: 4px;
        pointer-events: none;
        z-index: 1000;
        width: 200px;
        box-sizing: border-box;
      }
      :host([rtl]) .chartTooltip {
        direction: rtl;
      }
      .chartLegend ul,
      .chartTooltip ul {
        display: inline-block;
        padding: 0 0px;
        margin: 8px 0 0 0;
        width: 100%;
      }
      .chartTooltip ul {
        margin: 0 4px;
      }
      .chartTooltip li {
        display: flex;
        white-space: pre-line;
        align-items: center;
        line-height: 16px;
        padding: 4px 0;
      }
      .chartTooltip .title {
        text-align: center;
        font-weight: 500;
        direction: ltr;
      }
      .chartTooltip .footer {
        font-weight: 500;
      }
      .chartTooltip .beforeBody {
        text-align: center;
        font-weight: 300;
        word-break: break-all;
      }
    `}}]}}),r.oi)}}]);
//# sourceMappingURL=6d1b5c24.js.map