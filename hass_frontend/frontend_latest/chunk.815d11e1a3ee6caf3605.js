(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[388],{8330:(t,e,i)=>{"use strict";i.d(e,{P:()=>a});const a=(t,e,i=!0,a=!0)=>{let s,n,r,o=0;const l=()=>{o=!1===i?0:Date.now(),s=void 0,t.apply(n,r),s||(n=null,r=null)};return function(...c){n=this,r=c;const d=Date.now();o||!1!==i||(o=d);const h=e-(d-o);h<=0||h>e?(s&&(clearTimeout(s),s=void 0),o=d,t.apply(n,r)):s||!1===a||(s=window.setTimeout(l,h))}}},92390:(t,e,i)=>{"use strict";i(31206);var a=i(50856),s=i(28426),n=i(1265),r=i(78956),o=i(44583),l=i(72986),c=i(33367),d=i(21683),h=i(49684);i(10983);let u=null;class p extends((0,c.P)([l.z],s.H3)){static get template(){return a.d`
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
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=r.d.debounce(this._debouncer,d.Wc.after(10),(()=>{this._isAttached&&this.resizeChart()}))},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver((t=>{t.forEach((()=>{this._resizeListener()}))})),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===u&&(u=Promise.all([i.e(3296),i.e(7770)]).then(i.bind(i,79109))),u.then((t=>{this.ChartClass=t.default,this.onPropsChange()}))}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(t){if(0===t.opacity)return void this.set(["tooltip","opacity"],0);t.yAlign?this.set(["tooltip","yAlign"],t.yAlign):this.set(["tooltip","yAlign"],"no-transform");const e=t.title&&t.title[0]||"";this.set(["tooltip","title"],e),t.beforeBody&&this.set(["tooltip","beforeBody"],t.beforeBody.join("\n"));const i=t.body.map((t=>t.lines));t.body&&this.set(["tooltip","lines"],i.map(((e,i)=>{const a=t.labelColors[i];return{color:a.borderColor,bgColor:a.backgroundColor,text:e.join("\n")}})));const a=this.$.chartTarget.clientWidth;let s=t.caretX;const n=this._chart.canvas.offsetTop+t.caretY;t.caretX+100>a?s=a-100:t.caretX<100&&(s=100),s+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:s+"px",top:n+"px"}}_legendClick(t){(t=t||window.event).stopPropagation();let e=t.target||t.srcElement;for(;"LI"!==e.nodeName;)e=e.parentElement;const i=t.model.itemsIndex,a=this._chart.getDatasetMeta(i);a.hidden=null===a.hidden?!this._chart.data.datasets[i].hidden:null,this.set(["metas",i,"hidden"],this._chart.isDatasetVisible(i)?null:"hidden"),this._chart.update()}_drawLegend(){const t=this._chart,e=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map(((i,a)=>({label:i.label,color:i.color,bgColor:i.backgroundColor,hidden:e&&a<this.metas.length?this.metas[a].hidden:!t.isDatasetVisible(a)}))));let i=!1;if(e)for(let a=0;a<this.metas.length;a++){const e=t.getDatasetMeta(a);!!e.hidden!=!!this.metas[a].hidden&&(i=!0),e.hidden=!!this.metas[a].hidden||null}i&&t.update(),this.unit=this.data.unit}_formatTickValue(t,e,i){if(0===i.length)return t;const a=new Date(i[e].value);return(0,h.m)(a,this.hass.language)}drawChart(){const t=this.data.data,e=this.$.chartCanvas;if(t.datasets&&t.datasets.length||this._chart){if("timeline"!==this.data.type&&t.datasets.length>0){const e=t.datasets.length,i=this.constructor.getColorList(e);for(let a=0;a<e;a++)t.datasets[a].borderColor=i[a].rgbString(),t.datasets[a].backgroundColor=i[a].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=t,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=t.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!t.datasets)return;this._customTooltips({opacity:0});const i=[{afterRender:()=>this._setRendered(!0)}];let a={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};a=Chart.helpers.merge(a,this.data.options),a.scales.xAxes[0].ticks.callback=this._formatTickValue.bind(this),"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(a.elements.colorFunction=this._colorFunc),1===t.datasets.length&&(a.scales.yAxes[0].ticks?a.scales.yAxes[0].ticks.display=!1:a.scales.yAxes[0].ticks={display:!1},a.scales.yAxes[0].gridLines?a.scales.yAxes[0].gridLines.display=!1:a.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const s={type:this.data.type,data:this.data.data,options:a,plugins:i};this._chart=new this.ChartClass(e,s),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const t=this.$.chartTarget,e=this.data.data;if(0===e.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const i=this._chart.chartArea.top,a=this._chart.chartArea.bottom,s=this._chart.canvas.clientHeight;if(a>0&&(this._axisHeight=s-a+i),!this._axisHeight)return t.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const i=30*e.datasets.length+this._axisHeight+"px";t.style.height!==i&&(t.style.height=i),this._chart.resize()}}static getColorList(t){let e=!1;t>10&&(e=!0,t=Math.ceil(t/2));const i=360/t,a=[];for(let s=0;s<t;s++)a[s]=Color().hsl(i*s,80,38),e&&(a[s+t]=Color().hsl(i*s,80,62));return a}static getColorGenerator(t,e){const i=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function a(t){return Color("#"+i[t%i.length])}const s={};let n=0;return e>0&&(n=e),t&&Object.keys(t).forEach((e=>{const i=t[e];isFinite(i)?s[e.toLowerCase()]=a(i):s[e.toLowerCase()]=Color(t[e])})),function(t,e){let i;const r=e[3];if(null===r)return Color().hsl(0,40,38);if(void 0===r)return Color().hsl(120,40,38);const o=r.toLowerCase();return void 0===i&&(i=s[o]),void 0===i&&(i=a(n),n++,s[o]=i),i}}}customElements.define("ha-chart-base",p);class m extends((0,n.Z)(s.H3)){static get template(){return a.d`
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
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}ready(){super.ready(),this.addEventListener("transitionend",(()=>{this.style.overflow="auto"}))}dataChanged(){this.drawChart()}_onRenderedChanged(t){t&&this.animateHeight()}animateHeight(){requestAnimationFrame((()=>requestAnimationFrame((()=>{this.style.height=this.$.chart.scrollHeight+"px"}))))}drawChart(){if(!this._isAttached)return;const t=this.unit,e=this.data,i=[];let a;if(0===e.length)return;function s(t){const e=parseFloat(t);return isFinite(e)?e:null}a=this.endTime||new Date(Math.max.apply(null,e.map((t=>new Date(t.states[t.states.length-1].last_changed))))),a>new Date&&(a=new Date);const n=this.names||{};e.forEach((e=>{const r=e.domain,o=n[e.entity_id]||e.name;let l;const c=[];function d(t,e){e&&(t>a||(c.forEach(((i,a)=>{i.data.push({x:t,y:e[a]})})),l=e))}function h(e,i,a){let s=!1,n=!1;a&&(s="origin"),i&&(n="before"),c.push({label:e,fill:s,steppedLine:n,pointRadius:0,data:[],unitText:t})}if("thermostat"===r||"climate"===r||"water_heater"===r){const t=e.states.some((t=>t.attributes&&t.attributes.hvac_action)),i="climate"===r&&t?t=>"heating"===t.attributes.hvac_action:t=>"heat"===t.state,a="climate"===r&&t?t=>"cooling"===t.attributes.hvac_action:t=>"cool"===t.state,n=e.states.some(i),l=e.states.some(a),c=e.states.some((t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low));h(""+this.hass.localize("ui.card.climate.current_temperature","name",o),!0),n&&h(""+this.hass.localize("ui.card.climate.heating","name",o),!0,!0),l&&h(""+this.hass.localize("ui.card.climate.cooling","name",o),!0,!0),c?(h(""+this.hass.localize("ui.card.climate.target_temperature_mode","name",o,"mode",this.hass.localize("ui.card.climate.high")),!0),h(""+this.hass.localize("ui.card.climate.target_temperature_mode","name",o,"mode",this.hass.localize("ui.card.climate.low")),!0)):h(""+this.hass.localize("ui.card.climate.target_temperature_entity","name",o),!0),e.states.forEach((t=>{if(!t.attributes)return;const e=s(t.attributes.current_temperature),r=[e];if(n&&r.push(i(t)?e:null),l&&r.push(a(t)?e:null),c){const e=s(t.attributes.target_temp_high),i=s(t.attributes.target_temp_low);r.push(e,i),d(new Date(t.last_changed),r)}else{const e=s(t.attributes.temperature);r.push(e),d(new Date(t.last_changed),r)}}))}else if("humidifier"===r)h(""+this.hass.localize("ui.card.humidifier.target_humidity_entity","name",o),!0),h(""+this.hass.localize("ui.card.humidifier.on_entity","name",o),!0,!0),e.states.forEach((t=>{if(!t.attributes)return;const e=s(t.attributes.humidity),i=[e];i.push("on"===t.state?e:null),d(new Date(t.last_changed),i)}));else{h(o,"sensor"===r);let t=null,i=null,a=null;e.states.forEach((e=>{const n=s(e.state),r=new Date(e.last_changed);if(null!==n&&null!==a){const e=r.getTime(),s=a.getTime(),o=i.getTime();d(a,[(s-o)/(e-o)*(n-t)+t]),d(new Date(s+1),[null]),d(r,[n]),i=r,t=n,a=null}else null!==n&&null===a?(d(r,[n]),i=r,t=n):null===n&&null===a&&null!==t&&(a=r)}))}d(a,l),Array.prototype.push.apply(i,c)}));const r={type:"line",unit:t,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"}}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(t,e)=>{const i=t[0],a=e.datasets[i.datasetIndex].data[i.index].x;return(0,o.E)(a,this.hass.language)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:i}};this.chartData=r}}customElements.define("state-history-chart-line",m);var g=i(87744);class f extends((0,n.Z)(s.H3)){static get template(){return a.d`
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
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let t=this.data;if(!this._isAttached)return;t||(t=[]);const e=new Date(t.reduce(((t,e)=>Math.min(t,new Date(e.data[0].last_changed))),new Date));let i=this.endTime||new Date(t.reduce(((t,e)=>Math.max(t,new Date(e.data[e.data.length-1].last_changed))),e));i>new Date&&(i=new Date);const a=[],s=[],n=this.names||{};t.forEach((t=>{let r,o=null,l=null,c=e;const d=n[t.entity_id]||t.name,h=[];t.data.forEach((t=>{let e=t.state;void 0!==e&&""!==e||(e=null),new Date(t.last_changed)>i||(null!==o&&e!==o?(r=new Date(t.last_changed),h.push([c,r,l,o]),o=e,l=t.state_localize,c=r):null===o&&(o=e,l=t.state_localize,c=new Date(t.last_changed)))})),null!==o&&h.push([c,i,l,o]),s.push({data:h,entity_id:t.entity_id}),a.push(d)}));const r={type:"timeline",options:{tooltips:{callbacks:{label:(t,e)=>{const i=e.datasets[t.datasetIndex].data[t.index],a=(0,o.E)(i[0],this.hass.language),s=(0,o.E)(i[1],this.hass.language);return[i[2],a,s]},beforeBody:(t,e)=>{if(!this.hass.userData||!this.hass.userData.showAdvanced||!t[0])return"";return e.datasets[t[0].datasetIndex].entity_id||""}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"}}}],yAxes:[{afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},position:this._computeRTL?"right":"left"}]}},data:{labels:a,datasets:s},colors:{staticColors:{on:1,off:0,home:1,not_home:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=r}_computeRTL(t){return(0,g.HE)(t)}}customElements.define("state-history-chart-timeline",f);class y extends((0,n.Z)(s.H3)){static get template(){return a.d`
      <style>
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
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `}static get properties(){return{hass:Object,historyData:{type:Object,value:null},names:Object,isLoadingData:Boolean,endTime:{type:Object},upToNow:Boolean,noSingle:Boolean}}_computeIsSingleLineChart(t,e){return!e&&t&&1===t.length}_computeIsEmpty(t,e){const i=!e||!e.timeline||!e.line||0===e.timeline.length&&0===e.line.length;return!t&&i}_computeIsLoading(t){return t&&!this.historyData}_computeEndTime(t,e){return e?new Date:t}}customElements.define("state-history-charts",y)},99990:(t,e,i)=>{"use strict";i.d(e,{W:()=>n});var a=i(58763);const s={};const n=(t,e,i,n,l)=>{const d=i.cacheKey,h=new Date,u=new Date(h);u.setHours(u.getHours()-i.hoursToShow);let p=u,m=!1,g=s[d+"_"+i.hoursToShow];if(g&&p>=g.startTime&&p<=g.endTime&&g.language===l){if(p=g.endTime,m=!0,h<=g.endTime)return g.prom}else g=s[d]=function(t,e,i){return{prom:Promise.resolve({line:[],timeline:[]}),language:t,startTime:e,endTime:i,data:{line:[],timeline:[]}}}(l,u,h);const f=g.prom;return g.prom=(async()=>{let i;try{i=(await Promise.all([f,(0,a.vq)(t,e,p,h,m)]))[1]}catch(b){throw delete s[d],b}const y=(0,a.Nu)(t,i,n,l);return m?(r(y.line,g.data.line),o(y.timeline,g.data.timeline),c(u,g.data)):g.data=y,g.data})(),g.startTime=u,g.endTime=h,g.prom},r=(t,e)=>{t.forEach((t=>{const i=t.unit,a=e.find((t=>t.unit===i));a?t.data.forEach((t=>{const e=a.data.find((e=>t.entity_id===e.entity_id));e?e.states=e.states.concat(t.states):a.data.push(t)})):e.push(t)}))},o=(t,e)=>{t.forEach((t=>{const i=e.find((e=>e.entity_id===t.entity_id));i?i.data=i.data.concat(t.data):e.push(t)}))},l=(t,e)=>{if(0===e.length)return e;const i=e.findIndex((e=>new Date(e.last_changed)>t));if(0===i)return e;const a=-1===i?e.length-1:i-1;return e[a].last_changed=t,e.slice(a)},c=(t,e)=>{e.line.forEach((e=>{e.data.forEach((e=>{e.states=l(t,e.states)}))})),e.timeline.forEach((e=>{e.data=l(t,e.data)}))}},74674:(t,e,i)=>{"use strict";i.d(e,{T1:()=>a,vz:()=>s,xN:()=>n,pD:()=>r,LO:()=>o,A7:()=>l,Mu:()=>c,zH:()=>d,ZS:()=>u});const a="none",s=1,n=2,r=4,o=8,l=16,c=32,d=64,h={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},u=(t,e)=>h[t]-h[e]},58763:(t,e,i)=>{"use strict";i.d(e,{vq:()=>l,_J:()=>c,Nu:()=>h});var a=i(29171),s=i(22311),n=i(91741);const r=["climate","humidifier","water_heater"],o=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],l=(t,e,i,a,s=!1,n,r=!0)=>{let o="history/period";return i&&(o+="/"+i.toISOString()),o+="?filter_entity_id="+e,a&&(o+="&end_time="+a.toISOString()),s&&(o+="&skip_initial_state"),void 0!==n&&(o+="&significant_changes_only="+Number(n)),r&&(o+="&minimal_response"),t.callApi("GET",o)},c=(t,e,i,a)=>t.callApi("GET",`history/period/${e.toISOString()}?end_time=${i.toISOString()}&minimal_response${a?"&filter_entity_id="+a:""}`),d=(t,e)=>t.state===e.state&&(!t.attributes||!e.attributes||o.every((i=>t.attributes[i]===e.attributes[i]))),h=(t,e,i,l)=>{const c={},h=[];if(!e)return{line:[],timeline:[]};e.forEach((e=>{if(0===e.length)return;const r=e.find((t=>t.attributes&&"unit_of_measurement"in t.attributes));let o;r?o=r.attributes.unit_of_measurement:"climate"===(0,s.N)(e[0])||"water_heater"===(0,s.N)(e[0])?o=t.config.unit_system.temperature:"humidifier"===(0,s.N)(e[0])&&(o="%"),o?o in c?c[o].push(e):c[o]=[e]:h.push(((t,e,i)=>{const s=[],r=i.length-1;for(const n of i)s.length>0&&n.state===s[s.length-1].state||(n.entity_id||(n.attributes=i[r].attributes,n.entity_id=i[r].entity_id),s.push({state_localize:(0,a.D)(t,n,e),state:n.state,last_changed:n.last_changed}));return{name:(0,n.C)(i[0]),entity_id:i[0].entity_id,data:s}})(i,l,e))}));return{line:Object.keys(c).map((t=>((t,e)=>{const i=[];for(const a of e){const t=a[a.length-1],e=(0,s.N)(t),l=[];for(const i of a){let t;if(r.includes(e)){t={state:i.state,last_changed:i.last_updated,attributes:{}};for(const e of o)e in i.attributes&&(t.attributes[e]=i.attributes[e])}else t=i;l.length>1&&d(t,l[l.length-1])&&d(t,l[l.length-2])||l.push(t)}i.push({domain:e,name:(0,n.C)(t),entity_id:t.entity_id,states:l})}return{unit:t,identifier:e.map((t=>t[0].entity_id)).join(""),data:i}})(t,c[t]))),timeline:h}}},75692:(t,e,i)=>{"use strict";i.d(e,{rc:()=>c,NF:()=>y,pv:()=>b,k2:()=>_,A$:()=>w,M0:()=>x,Cq:()=>C});var a=i(55317),s=i(15652),n=i(79865),r=(i(16509),i(52039),i(88027));const o=new Set(["clear-night","cloudy","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),l={exceptional:"hass:alert-circle-outline"},c={humidity:a.uUi,wind_bearing:a.GOG,wind_speed:a.GOG,pressure:a.mXo,visibility:a.VE8,precipitation:a.yxk},d=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),h=new Set(["hail","rainy","pouring"]),u=new Set(["windy","windy-variant"]),p=new Set(["snowy","snowy-rainy"]),m=new Set(["lightning","lightning-rainy"]),g=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],f=t=>null!=t?(t=>{const e=parseInt(t,10);return isFinite(e)?g[((e+11.25)/22.5|0)%16]:t})(t):"",y=(t,e,i)=>{if(null!==i){const a=f(i);return`${e} ${b(t,"wind_speed")} (${t.localize("ui.card.weather.cardinal_direction."+a.toLowerCase())||a})`}return`${e} ${b(t,"wind_speed")}`},b=(t,e)=>{const i=t.config.unit_system.length||"";switch(e){case"pressure":return"km"===i?"hPa":"inHg";case"wind_speed":return i+"/h";case"visibility":case"length":return i;case"precipitation":return"km"===i?"mm":"in";case"humidity":case"precipitation_probability":return"%";default:return t.config.unit_system[e]||""}},_=(t,e)=>{var i;const a=v(t,e);if(a)return a;let n,o;if((null===(i=e.attributes.forecast)||void 0===i?void 0:i.length)&&void 0!==e.attributes.forecast[0].precipitation&&null!==e.attributes.forecast[0].precipitation)n=e.attributes.forecast[0].precipitation,o="precipitation";else{if(!("humidity"in e.attributes))return;n=e.attributes.humidity,o="humidity"}const l=c[o];return s.dy`
    ${l?s.dy`
          <ha-svg-icon class="attr-icon" .path=${l}></ha-svg-icon>
        `:t.localize("ui.card.weather.attributes."+o)}
    ${(0,r.IU)(n)} ${b(t,o)}
  `},v=(t,e)=>{var i;if(!(null===(i=e.attributes.forecast)||void 0===i?void 0:i.length))return;let a,n;const r=(new Date).getDate();for(const s of e.attributes.forecast){if(new Date(s.datetime).getDate()!==r)break;(!n||s.temperature>n)&&(n=s.temperature),(!a||s.templow&&s.templow<a)&&(a=s.templow),s.templow||a&&!(s.temperature<a)||(a=s.temperature)}if(!a&&!n)return;const o=b(t,"temperature");return s.dy`
    ${n?`\n            ${n} ${o}\n          `:""}
    ${a&&n?" / ":""}
    ${a?`\n          ${a} ${o}\n        `:""}
  `},w=s.iv`
  .rain {
    fill: var(--weather-icon-rain-color, #30b3ff);
  }
  .sun {
    fill: var(--weather-icon-sun-color, #fdd93c);
  }
  .moon {
    fill: var(--weather-icon-moon-color, #fcf497);
  }
  .cloud-back {
    fill: var(--weather-icon-cloud-back-color, #d4d4d4);
  }
  .cloud-front {
    fill: var(--weather-icon-cloud-front-color, #f9f9f9);
  }
`,x=t=>/.+\.png|\.svg|\.jpg|\.jpeg/i.test(t),C=(t,e,i,a)=>{const r=getComputedStyle(e).getPropertyValue("--weather-icon-"+t);if(r)return s.dy`
      <div
        style="background-size: cover;${(0,n.V)({"background-image":r})}"
      ></div>
    `;if(x(t)){let e=t.toString();return e.startsWith("/adapter")&&(e+=a?"?token="+a:""),s.dy`
      <div
        style="
            min-width: 32px;
            min-height: 32px;
            background-size: cover; 
               background-image: url(${e});"
      ></div>
    `}return o.has(t)?s.dy`${((t,e)=>s.YP`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${"sunny"===t?s.YP`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${"clear-night"===t?s.YP`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${"partlycloudy"===t&&e?s.YP`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:"partlycloudy"===t?s.YP`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${d.has(t)?s.YP`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${h.has(t)?s.YP`
          <path
            class="rain"
            d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"
          />
          <path
            class="rain"
            d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"
          />
        `:""}
  ${"pouring"===t?s.YP`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${u.has(t)?s.YP`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${p.has(t)?s.YP`
          <path
            class="rain"
            d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"
          />
          <path
            class="rain"
            d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"
          />
          <path
            class="rain"
            d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"
          />
        `:""}
  ${m.has(t)?s.YP`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`)(t,i)}`:t in l?s.dy`
      <ha-icon class="weather-icon" .icon=${l[t]}></ha-icon>
    `:void 0}},88027:(t,e,i)=>{"use strict";i.d(e,{Fv:()=>a,Ff:()=>s,IU:()=>n});const a=(t,e,i)=>isNaN(t)||isNaN(e)||isNaN(i)?0:t>i?i:t<e?e:t,s=(t,e,i)=>100*(t-e)/(i-e),n=t=>Math.round(10*t)/10}}]);
//# sourceMappingURL=chunk.815d11e1a3ee6caf3605.js.map