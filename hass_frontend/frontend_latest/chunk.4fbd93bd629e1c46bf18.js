(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7305],{44608:(t,e,i)=>{"use strict";var a=i(50424),r=i(55358),s=i(7323),n=(i(31206),i(78956)),o=i(50856),l=i(28426),d=i(44583),c=i(1265),h=i(72986),u=i(33367),p=i(21683),m=i(49684);i(10983);let f=null;class y extends((0,u.P)([h.z],l.H3)){static get template(){return o.d`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip ul {
          margin: 0 3px;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip li::first-line {
          line-height: 0;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartTooltip .beforeBody {
          text-align: center;
          font-weight: 300;
          word-break: break-all;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        ha-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <template is="dom-if" if="[[tooltip.beforeBody]]">
            <div class="beforeBody">[[tooltip.beforeBody]]</div>
          </template>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=n.d.debounce(this._debouncer,p.Wc.after(10),(()=>{this._isAttached&&this.resizeChart()}))},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver((t=>{t.forEach((()=>{this._resizeListener()}))})),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===f&&(f=Promise.all([i.e(5070),i.e(9213)]).then(i.bind(i,79109))),f.then((t=>{this.ChartClass=t.default,this.onPropsChange()}))}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(t){if(0===t.opacity)return void this.set(["tooltip","opacity"],0);t.yAlign?this.set(["tooltip","yAlign"],t.yAlign):this.set(["tooltip","yAlign"],"no-transform");const e=t.title&&t.title[0]||"";this.set(["tooltip","title"],e),t.beforeBody&&this.set(["tooltip","beforeBody"],t.beforeBody.join("\n"));const i=t.body.map((t=>t.lines));t.body&&this.set(["tooltip","lines"],i.map(((e,i)=>{const a=t.labelColors[i];return{color:a.borderColor,bgColor:a.backgroundColor,text:e.join("\n")}})));const a=this.$.chartTarget.clientWidth;let r=t.caretX;const s=this._chart.canvas.offsetTop+t.caretY;t.caretX+100>a?r=a-100:t.caretX<100&&(r=100),r+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:`${r}px`,top:`${s}px`}}_legendClick(t){(t=t||window.event).stopPropagation();let e=t.target||t.srcElement;for(;"LI"!==e.nodeName;)e=e.parentElement;const i=t.model.itemsIndex,a=this._chart.getDatasetMeta(i);a.hidden=null===a.hidden?!this._chart.data.datasets[i].hidden:null,this.set(["metas",i,"hidden"],this._chart.isDatasetVisible(i)?null:"hidden"),this._chart.update()}_drawLegend(){const t=this._chart,e=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map(((i,a)=>({label:i.label,color:i.color,bgColor:i.backgroundColor,hidden:e&&a<this.metas.length?this.metas[a].hidden:!t.isDatasetVisible(a)}))));let i=!1;if(e)for(let e=0;e<this.metas.length;e++){const a=t.getDatasetMeta(e);!!a.hidden!=!!this.metas[e].hidden&&(i=!0),a.hidden=!!this.metas[e].hidden||null}i&&t.update(),this.unit=this.data.unit}_formatTickValue(t,e,i){if(0===i.length)return t;const a=new Date(i[e].value);return(0,m.mr)(a,this.hass.locale)}drawChart(){const t=this.data.data,e=this.$.chartCanvas;if(t.datasets&&t.datasets.length||this._chart){if("timeline"!==this.data.type&&t.datasets.length>0){const e=t.datasets.length,i=this.constructor.getColorList(e);for(let a=0;a<e;a++)t.datasets[a].borderColor=i[a].rgbString(),t.datasets[a].backgroundColor=i[a].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=t,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=t.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!t.datasets)return;this._customTooltips({opacity:0});const i=[{afterRender:()=>this._setRendered(!0)}];let a={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};a=Chart.helpers.merge(a,this.data.options),a.scales.xAxes[0].ticks.callback=this._formatTickValue.bind(this),"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(a.elements.colorFunction=this._colorFunc),1===t.datasets.length&&(a.scales.yAxes[0].ticks?a.scales.yAxes[0].ticks.display=!1:a.scales.yAxes[0].ticks={display:!1},a.scales.yAxes[0].gridLines?a.scales.yAxes[0].gridLines.display=!1:a.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const r={type:this.data.type,data:this.data.data,options:a,plugins:i};this._chart=new this.ChartClass(e,r),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const t=this.$.chartTarget,e=this.data.data;if(0===e.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const i=this._chart.chartArea.top,a=this._chart.chartArea.bottom,r=this._chart.canvas.clientHeight;if(a>0&&(this._axisHeight=r-a+i),!this._axisHeight)return t.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const i=30*e.datasets.length+this._axisHeight+"px";t.style.height!==i&&(t.style.height=i),this._chart.resize()}}static getColorList(t){let e=!1;t>10&&(e=!0,t=Math.ceil(t/2));const i=360/t,a=[];for(let r=0;r<t;r++)a[r]=Color().hsl(i*r,80,38),e&&(a[r+t]=Color().hsl(i*r,80,62));return a}static getColorGenerator(t,e){const i=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function a(t){return Color("#"+i[t%i.length])}const r={};let s=0;return e>0&&(s=e),t&&Object.keys(t).forEach((e=>{const i=t[e];isFinite(i)?r[e.toLowerCase()]=a(i):r[e.toLowerCase()]=Color(t[e])})),function(t,e){let i;const n=e[3];if(null===n)return Color().hsl(0,40,38);if(void 0===n)return Color().hsl(120,40,38);let o=n.toLowerCase();return void 0===i&&(e[4]&&(o="on"===o?"off":"off"===o?"on":o),i=r[o]),void 0===i&&(i=a(s),s++,r[o]=i),i}}}customElements.define("ha-chart-base",y);class g extends((0,c.Z)(l.H3)){static get template(){return o.d`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        hass="[[hass]]"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}ready(){super.ready(),this.addEventListener("transitionend",(()=>{this.style.overflow="auto"}))}dataChanged(){this.drawChart()}_onRenderedChanged(t){t&&this.animateHeight()}animateHeight(){requestAnimationFrame((()=>requestAnimationFrame((()=>{this.style.height=this.$.chart.scrollHeight+"px"}))))}drawChart(){if(!this._isAttached)return;const t=this.unit,e=this.data,i=[];let a;if(0===e.length)return;function r(t){const e=parseFloat(t);return isFinite(e)?e:null}a=this.endTime||new Date(Math.max.apply(null,e.map((t=>new Date(t.states[t.states.length-1].last_changed))))),a>new Date&&(a=new Date);const s=this.names||{};e.forEach((e=>{const n=e.domain,o=s[e.entity_id]||e.name;let l;const d=[];function c(t,e){e&&(t>a||(d.forEach(((i,a)=>{null===e[a]&&l&&null!==l[a]&&i.data.push({x:t,y:l[a]}),i.data.push({x:t,y:e[a]})})),l=e))}function h(e,i,a){let r=!1,s=!1;a&&(r="origin"),i&&(s="before"),d.push({label:e,fill:r,steppedLine:s,pointRadius:0,data:[],unitText:t})}if("thermostat"===n||"climate"===n||"water_heater"===n){const t=e.states.some((t=>t.attributes&&t.attributes.hvac_action)),i="climate"===n&&t?t=>"heating"===t.attributes.hvac_action:t=>"heat"===t.state,a="climate"===n&&t?t=>"cooling"===t.attributes.hvac_action:t=>"cool"===t.state,s=e.states.some(i),l=e.states.some(a),d=e.states.some((t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low));h(`${this.hass.localize("ui.card.climate.current_temperature","name",o)}`,!0),s&&h(`${this.hass.localize("ui.card.climate.heating","name",o)}`,!0,!0),l&&h(`${this.hass.localize("ui.card.climate.cooling","name",o)}`,!0,!0),d?(h(`${this.hass.localize("ui.card.climate.target_temperature_mode","name",o,"mode",this.hass.localize("ui.card.climate.high"))}`,!0),h(`${this.hass.localize("ui.card.climate.target_temperature_mode","name",o,"mode",this.hass.localize("ui.card.climate.low"))}`,!0)):h(`${this.hass.localize("ui.card.climate.target_temperature_entity","name",o)}`,!0),e.states.forEach((t=>{if(!t.attributes)return;const e=r(t.attributes.current_temperature),n=[e];if(s&&n.push(i(t)?e:null),l&&n.push(a(t)?e:null),d){const e=r(t.attributes.target_temp_high),i=r(t.attributes.target_temp_low);n.push(e,i),c(new Date(t.last_changed),n)}else{const e=r(t.attributes.temperature);n.push(e),c(new Date(t.last_changed),n)}}))}else if("humidifier"===n)h(`${this.hass.localize("ui.card.humidifier.target_humidity_entity","name",o)}`,!0),h(`${this.hass.localize("ui.card.humidifier.on_entity","name",o)}`,!0,!0),e.states.forEach((t=>{if(!t.attributes)return;const e=r(t.attributes.humidity),i=[e];i.push("on"===t.state?e:null),c(new Date(t.last_changed),i)}));else{h(o,"sensor"===n);let t=null,i=null,a=null;e.states.forEach((e=>{const s=r(e.state),n=new Date(e.last_changed);if(null!==s&&null!==a){const e=n.getTime(),r=a.getTime(),o=i.getTime();c(a,[(r-o)/(e-o)*(s-t)+t]),c(new Date(r+1),[null]),c(n,[s]),i=n,t=s,a=null}else null!==s&&null===a?(c(n,[s]),i=n,t=s):null===s&&null===a&&null!==t&&(a=n)}))}c(a,l),Array.prototype.push.apply(i,d)}));const n={type:"line",unit:t,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"},source:"auto",sampleSize:5,autoSkipPadding:20,maxRotation:0}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(t,e)=>{const i=t[0],a=e.datasets[i.datasetIndex].data[i.index].x;return(0,d.E)(a,this.hass.locale)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:i}};this.chartData=n}}customElements.define("state-history-chart-line",g);var b=i(58831),v=i(87744);const _=new Set(["battery","door","garage_door","gas","lock","opening","problem","safety","smoke","window"]);class w extends((0,c.Z)(l.H3)){static get template(){return o.d`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        hass="[[hass]]"
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let t=this.data;if(!this._isAttached)return;t||(t=[]);const e=new Date(t.reduce(((t,e)=>Math.min(t,new Date(e.data[0].last_changed))),new Date));let i=this.endTime||new Date(t.reduce(((t,e)=>Math.max(t,new Date(e.data[e.data.length-1].last_changed))),e));i>new Date&&(i=new Date);const a=[],r=[],s=this.names||{};t.forEach((t=>{let n,o=null,l=null,d=e;const c=s[t.entity_id]||t.name,h="binary_sensor"===(0,b.M)(t.entity_id)&&_.has(this.hass.states[t.entity_id].attributes.device_class),u=[];t.data.forEach((t=>{let e=t.state;void 0!==e&&""!==e||(e=null),new Date(t.last_changed)>i||(null!==o&&e!==o?(n=new Date(t.last_changed),u.push([d,n,l,o,h]),o=e,l=t.state_localize,d=n):null===o&&(o=e,l=t.state_localize,d=new Date(t.last_changed)))})),null!==o&&u.push([d,i,l,o,h]),r.push({data:u,entity_id:t.entity_id}),a.push(c)}));const n={type:"timeline",options:{tooltips:{callbacks:{label:(t,e)=>{const i=e.datasets[t.datasetIndex].data[t.index],a=(0,d.E)(i[0],this.hass.locale),r=(0,d.E)(i[1],this.hass.locale);return[i[2],a,r]},beforeBody:(t,e)=>{if(!this.hass.userData||!this.hass.userData.showAdvanced||!t[0])return"";return e.datasets[t[0].datasetIndex].entity_id||""}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"},sampleSize:5,autoSkipPadding:50,maxRotation:0},categoryPercentage:void 0,barPercentage:void 0,time:{format:void 0}}],yAxes:[{afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},position:this._computeRTL?"right":"left",categoryPercentage:void 0,barPercentage:void 0,time:{format:void 0}}]}},datasets:{categoryPercentage:.8,barPercentage:.9},data:{labels:a,datasets:r},colors:{staticColors:{on:1,off:0,home:1,not_home:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=n}_computeRTL(t){return(0,v.HE)(t)}}function k(){k=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(a){e.forEach((function(e){var r=e.placement;if(e.kind===a&&("static"===r||"prototype"===r)){var s="static"===r?t:i;this.defineClassElement(s,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var a=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===a?void 0:a.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],a=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!T(t))return i.push(t);var e=this.decorateElement(t,r);i.push(e.element),i.push.apply(i,e.extras),a.push.apply(a,e.finishers)}),this),!e)return{elements:i,finishers:a};var s=this.decorateConstructor(i,e);return a.push.apply(a,s.finishers),s.finishers=a,s},addElementPlacement:function(t,e,i){var a=e[t.placement];if(!i&&-1!==a.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");a.push(t.key)},decorateElement:function(t,e){for(var i=[],a=[],r=t.decorators,s=r.length-1;s>=0;s--){var n=e[t.placement];n.splice(n.indexOf(t.key),1);var o=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,r[s])(o)||o);t=l.element,this.addElementPlacement(t,e),l.finisher&&a.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],e);i.push.apply(i,d)}}return{element:t,finishers:a,extras:i}},decorateConstructor:function(t,e){for(var i=[],a=e.length-1;a>=0;a--){var r=this.fromClassDescriptor(t),s=this.toClassDescriptor((0,e[a])(r)||r);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){t=s.elements;for(var n=0;n<t.length-1;n++)for(var o=n+1;o<t.length;o++)if(t[n].key===t[o].key&&t[n].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[n].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?A(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=E(t.key),a=String(t.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var s={kind:e,key:i,placement:a,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=t.initializer),s},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:z(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=z(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var a=(0,e[i])(t);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");t=a}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function x(t){var e,i=E(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(a.decorators=t.decorators),"field"===t.kind&&(a.initializer=t.value),a}function C(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function T(t){return t.decorators&&t.decorators.length}function D(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function z(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function E(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}customElements.define("state-history-chart-timeline",w);!function(t,e,i,a){var r=k();if(a)for(var s=0;s<a.length;s++)r=a[s](r);var n=e((function(t){r.initializeInstanceElements(t,o.elements)}),i),o=r.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===s.key&&t.placement===s.placement},a=0;a<t.length;a++){var r,s=t[a];if("method"===s.kind&&(r=e.find(i)))if(D(s.descriptor)||D(r.descriptor)){if(T(s)||T(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(T(s)){if(T(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}C(s,r)}else e.push(s)}return e}(n.d.map(x)),t);r.initializeClassElements(n.F,o.elements),r.runClassFinishers(n.F,o.finishers)}([(0,r.Mo)("state-history-charts")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"historyData",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"names",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"upToNow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-single"})],key:"noSingle",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"method",key:"render",value:function(){if(!(0,s.p)(this.hass,"history"))return a.dy` <div class="info">
        ${this.hass.localize("ui.components.history_charts.history_disabled")}
      </div>`;if(this.isLoadingData&&!this.historyData)return a.dy` <div class="info">
        ${this.hass.localize("ui.components.history_charts.loading_history")}
      </div>`;if(this._isHistoryEmpty())return a.dy` <div class="info">
        ${this.hass.localize("ui.components.history_charts.no_history_found")}
      </div>`;const t=this.upToNow?new Date:this.endTime||new Date;return a.dy`
      ${this.historyData.timeline.length?a.dy`
            <state-history-chart-timeline
              .hass=${this.hass}
              .data=${this.historyData.timeline}
              .endTime=${t}
              .noSingle=${this.noSingle}
              .names=${this.names}
            ></state-history-chart-timeline>
          `:a.dy``}
      ${this.historyData.line.map((e=>a.dy`
          <state-history-chart-line
            .hass=${this.hass}
            .unit=${e.unit}
            .data=${e.data}
            .identifier=${e.identifier}
            .isSingleDevice=${!this.noSingle&&e.data&&1===e.data.length}
            .endTime=${t}
            .names=${this.names}
          ></state-history-chart-line>
        `))}
    `}},{kind:"method",key:"shouldUpdate",value:function(t){return!(1===t.size&&t.has("hass"))}},{kind:"method",key:"_isHistoryEmpty",value:function(){const t=!this.historyData||!this.historyData.timeline||!this.historyData.line||0===this.historyData.timeline.length&&0===this.historyData.line.length;return!this.isLoadingData&&t}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`
      :host {
        display: block;
        /* height of single timeline chart = 58px */
        min-height: 58px;
      }
      .info {
        text-align: center;
        line-height: 58px;
        color: var(--secondary-text-color);
      }
    `}}]}}),a.oi)},58763:(t,e,i)=>{"use strict";i.d(e,{vq:()=>l,_J:()=>d,Nu:()=>h});var a=i(29171),r=i(22311),s=i(91741);const n=["climate","humidifier","water_heater"],o=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],l=(t,e,i,a,r=!1,s,n=!0)=>{let o="history/period";return i&&(o+="/"+i.toISOString()),o+="?filter_entity_id="+e,a&&(o+="&end_time="+a.toISOString()),r&&(o+="&skip_initial_state"),void 0!==s&&(o+=`&significant_changes_only=${Number(s)}`),n&&(o+="&minimal_response"),t.callApi("GET",o)},d=(t,e,i,a)=>t.callApi("GET",`history/period/${e.toISOString()}?end_time=${i.toISOString()}&minimal_response${a?`&filter_entity_id=${a}`:""}`),c=(t,e)=>t.state===e.state&&(!t.attributes||!e.attributes||o.every((i=>t.attributes[i]===e.attributes[i]))),h=(t,e,i)=>{const l={},d=[];if(!e)return{line:[],timeline:[]};e.forEach((e=>{if(0===e.length)return;const n=e.find((t=>t.attributes&&"unit_of_measurement"in t.attributes));let o;o=n?n.attributes.unit_of_measurement:{climate:t.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:t.config.unit_system.temperature}[(0,r.N)(e[0])],o?o in l?l[o].push(e):l[o]=[e]:d.push(((t,e,i)=>{const r=[],n=i.length-1;for(const s of i)r.length>0&&s.state===r[r.length-1].state||(s.entity_id||(s.attributes=i[n].attributes,s.entity_id=i[n].entity_id),r.push({state_localize:(0,a.D)(t,s,e),state:s.state,last_changed:s.last_changed}));return{name:(0,s.C)(i[0]),entity_id:i[0].entity_id,data:r}})(i,t.locale,e))}));return{line:Object.keys(l).map((t=>((t,e)=>{const i=[];for(const t of e){const e=t[t.length-1],a=(0,r.N)(e),l=[];for(const e of t){let t;if(n.includes(a)){t={state:e.state,last_changed:e.last_updated,attributes:{}};for(const i of o)i in e.attributes&&(t.attributes[i]=e.attributes[i])}else t=e;l.length>1&&c(t,l[l.length-1])&&c(t,l[l.length-2])||l.push(t)}i.push({domain:a,name:(0,s.C)(e),entity_id:e.entity_id,states:l})}return{unit:t,identifier:e.map((t=>t[0].entity_id)).join(""),data:i}})(t,l[t]))),timeline:d}}},1265:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});const a=(0,i(76389).o)((t=>class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))}}]);
//# sourceMappingURL=chunk.4fbd93bd629e1c46bf18.js.map