"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["51062"],{53259:function(t,i,e){e.a(t,(async function(t,s){try{e.d(i,{J:()=>p,MC:()=>b,Zx:()=>$,b4:()=>k,kT:()=>T});e(28457),e(71695),e(92745),e(61893),e(5509),e(9359),e(56475),e(31526),e(70104),e(19423),e(92519),e(42179),e(89256),e(24931),e(88463),e(57449),e(19814),e(88044),e(47021);var n=e(21893),a=e(13809),o=e(38836),r=e(84775),d=e(80951),h=e(13730),c=e(6542),l=e(83204),u=e(23459),_=e(23711),g=e(50602),y=e(46467),v=e(33570),f=t([y,v,g]);function b(t,i){let e=new Date(i);return t>2&&0===e.getHours()&&(e=(0,n.b)(e,1)),e.setMinutes(0,0,0),t>35&&e.setDate(1),t>2&&e.setHours(0),e.getTime()}function k(t){return t>35?"month":t>2?"day":"hour"}function p(t,i,e,s,n,o,r,d){const h=(0,a.j)(i,t),c=void 0!==o&&void 0!==r;return{xAxis:{type:"time",min:t,max:b(h,i)},yAxis:{type:"value",name:n,nameGap:2,nameTextStyle:{align:"left"},axisLabel:{formatter:t=>(0,g.uf)(Math.abs(t),e)},splitLine:{show:!0}},grid:{top:15,bottom:0,left:1,right:1,containLabel:!0},tooltip:{trigger:"axis",formatter:t=>{if(Array.isArray(t)){const i=[],a=[];return t.forEach((t=>{var e;null!==(e=t.seriesId)&&void 0!==e&&e.startsWith("compare-")?a.push(t):i.push(t)})),[i,a].map((t=>S(t,e,s,h,c,n,d))).filter(Boolean).join("<br><br>")}return S([t],e,s,h,c,n,d)}}}}function S(t,i,e,s,n,a,r){var d,h,c,l;if(null===(d=t[0])||void 0===d||!d.value)return"";const u=new Date(null!==(h=null===(c=t[0].value)||void 0===c?void 0:c[2])&&void 0!==h?h:null===(l=t[0].value)||void 0===l?void 0:l[0]);let _;_=s>89?`${(0,y.NC)(u,i,e)}`:s>0?`${(0,y.ud)(u,i,e)}`:`${n?`${(0,y.ud)(u,i,e)}: `:""}${(0,v.mr)(u,i,e)} – ${(0,v.mr)((0,o.T)(u,1),i,e)}`;const f=`<h4 style="text-align: center; margin: 0;">${_}</h4>`;let m=0,b=0,k=0,p=0;const S=t.map((t=>{var e;const s=null===(e=t.value)||void 0===e?void 0:e[1],n=(0,g.uf)(s,i);return"0"!==n&&("bar"===t.componentSubType&&(s>0?(m+=s,b++):(k+=s,p++)),`${t.marker} ${t.seriesName}: ${n} ${a}`)})).filter(Boolean);let $="";return 0!==m&&b>1&&r&&($+=`<br><b>${r(m)}</b>`),0!==k&&p>1&&r&&($+=`<br><b>${r(k)}</b>`),S.length>0?`${f}${S.join("<br>")}${$}`:""}function $(t){Array.from(new Set(t.map((t=>t.data.map((t=>Number(t[0]))))).flat())).sort(((t,i)=>t-i)).forEach(((i,e)=>{const s={},n={};for(let l=t.length-1;l>=0;l--){var a,o,r,d,h;const u=t[l].data[e],_=u&&"object"==typeof u&&"value"in u?u:{value:u},g=null===(a=_.value)||void 0===a?void 0:a[0],y=null!==(o=t[l].stack)&&void 0!==o?o:"";var c;if(void 0!==g)if(Number(g)!==i)null===(c=t[l].data)||void 0===c||c.splice(e,0,{value:[i,0],itemStyle:{borderWidth:0}});else 0===(null===(r=_.value)||void 0===r?void 0:r[1])?t[l].data[e]=Object.assign(Object.assign({},_),{},{itemStyle:Object.assign(Object.assign({},_.itemStyle),{},{borderWidth:0})}):!s[y]&&(null===(d=_.value)||void 0===d?void 0:d[1])>0?(t[l].data[e]=Object.assign(Object.assign({},_),{},{itemStyle:Object.assign(Object.assign({},_.itemStyle),{},{borderRadius:[4,4,0,0]})}),s[y]=!0):!n[y]&&(null===(h=_.value)||void 0===h?void 0:h[1])<0&&(t[l].data[e]=Object.assign(Object.assign({},_),{},{itemStyle:Object.assign(Object.assign({},_.itemStyle),{},{borderRadius:[0,0,4,4]})}),n[y]=!0)}}))}function T(t,i){if(!i)return t=>t;const e=(0,r.o)(t,i);if(0!==e&&t.getTime()===(0,d.e)(t).getTime())return t=>(0,h.B)(t,e);const s=(0,c.d)(t,i);if(0!==s&&t.getTime()===(0,l.N)(t).getTime())return t=>(0,u.z)(t,s);const n=t.getTime()-i.getTime();return t=>(0,_.n)(t,n)}[y,v,g]=f.then?(await f)():f,s()}catch(m){s(m)}}))},56615:function(t,i,e){e.a(t,(async function(t,s){try{e.r(i),e.d(i,{DEFAULT_DAYS_TO_SHOW:()=>S,HuiStatisticsGraphCard:()=>$});var n=e(61701),a=e(72621),o=(e(52247),e(71695),e(92745),e(9359),e(1331),e(31526),e(40251),e(47021),e(13809)),r=e(21893),d=e(57243),h=e(50778),c=e(35359),l=(e(54977),e(1118)),u=e(53259),_=e(17705),g=e(69223),y=e(93331),v=e(29401),f=t([l,u]);[l,u]=f.then?(await f)():f;let m,b,k,p=t=>t;const S=30;let $=(0,n.Z)([(0,h.Mo)("hui-statistics-graph-card")],(function(t,i){class s extends i{constructor(...i){super(...i),t(this)}}return{F:s,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([e.e("46379"),e.e("24199"),e.e("78943"),e.e("27090"),e.e("87593"),e.e("19551"),e.e("47457")]).then(e.bind(e,23656)),document.createElement("hui-statistics-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,i,e){const s=(0,g.j)(t,1,i,e,["sensor"],(t=>"state_class"in t.attributes));return{type:"statistics-graph",entities:s.length?[s[0]]:[]}}},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_statistics",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_metadata",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_unit",value:void 0},{kind:"field",key:"_entities",value(){return[]}},{kind:"field",key:"_names",value(){return{}}},{kind:"field",key:"_interval",value:void 0},{kind:"field",key:"_statTypes",value:void 0},{kind:"field",key:"_energySub",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_energyStart",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_energyEnd",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(s,"disconnectedCallback",this,3)([]),this._unsubscribeEnergy(),this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"connectedCallback",value:function(){var t;(0,a.Z)(s,"connectedCallback",this,3)([]),this.hasUpdated&&(null!==(t=this._config)&&void 0!==t&&t.energy_date_selection?this._subscribeEnergy():this._setFetchStatisticsTimer())}},{kind:"method",key:"_subscribeEnergy",value:function(){var t;this._energySub||(this._energySub=(0,l.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>{this._energyStart=t.start,this._energyEnd=t.end,this._getStatistics()})))}},{kind:"method",key:"_unsubscribeEnergy",value:function(){this._energySub&&(this._energySub(),this._energySub=void 0),this._energyStart=void 0,this._energyEnd=void 0}},{kind:"method",key:"getCardSize",value:function(){var t,i,e;return 5+(null!==(t=this._config)&&void 0!==t&&t.title?2:0)+(null!==(i=this._config)&&void 0!==i&&i.hide_legend?0:(null===(e=this._entities)||void 0===e?void 0:e.length)||0)}},{kind:"method",key:"getGridOptions",value:function(){return{columns:12,min_columns:6,min_rows:3}}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");const i=t.entities?(0,v.A)(t.entities,!1):[];this._entities=[],i.forEach((t=>{this._entities.push(t.entity),t.name&&(this._names[t.entity]=t.name)})),"string"==typeof t.stat_types?this._statTypes=[t.stat_types]:t.stat_types?this._statTypes=t.stat_types:this._statTypes=["change","state","sum","min","max","mean"],this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,y.Wh)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)(s,"willUpdate",this,3)([t]),!this._config||!t.has("_config"))return;const i=t.get("_config");if(this.hass){if(this._config.energy_date_selection&&!this._energySub)return void this._subscribeEnergy();if(!this._config.energy_date_selection&&this._energySub)return this._unsubscribeEnergy(),void this._setFetchStatisticsTimer();this._config.energy_date_selection&&this._energySub&&t.has("_config")&&(null==i?void 0:i.collection_key)!==this._config.collection_key&&(this._unsubscribeEnergy(),this._subscribeEnergy())}t.has("_config")&&(null==i?void 0:i.entities)!==this._config.entities?this._getStatisticsMetaData(this._entities).then((()=>{this._setFetchStatisticsTimer()})):!t.has("_config")||(null==i?void 0:i.stat_types)===this._config.stat_types&&(null==i?void 0:i.days_to_show)===this._config.days_to_show&&(null==i?void 0:i.period)===this._config.period&&(null==i?void 0:i.unit)===this._config.unit||this._setFetchStatisticsTimer()}},{kind:"method",key:"_setFetchStatisticsTimer",value:function(){var t;this._getStatistics(),clearInterval(this._interval),null!==(t=this._config)&&void 0!==t&&t.energy_date_selection||(this._interval=window.setInterval((()=>this._getStatistics()),this._intervalTimeout))}},{kind:"get",key:"_period",value:function(){var t,i;return null!==(t=null===(i=this._config)||void 0===i?void 0:i.period)&&void 0!==t?t:this._energyStart&&this._energyEnd?(0,u.b4)((0,o.j)(this._energyEnd,this._energyStart)):void 0}},{kind:"method",key:"render",value:function(){var t;if(!this.hass||!this._config)return d.Ld;const i="number"==typeof(null===(t=this._config.grid_options)||void 0===t?void 0:t.rows);return(0,d.dy)(m||(m=p` <ha-card> ${0} <div class="content ${0}"> <statistics-chart .hass="${0}" .isLoadingData="${0}" .statisticsData="${0}" .metadata="${0}" .period="${0}" .chartType="${0}" .statTypes="${0}" .names="${0}" .unit="${0}" .minYAxis="${0}" .maxYAxis="${0}" .startTime="${0}" .endTime="${0}" .fitYData="${0}" .hideLegend="${0}" .logarithmicScale="${0}" .daysToShow="${0}" .height="${0}" .expandLegend="${0}"></statistics-chart> </div> </ha-card> `),this._config.title?(0,d.dy)(b||(b=p`<h1 class="card-header">${0}</h1>`),this._config.title):d.Ld,(0,c.$)({"has-header":!!this._config.title}),this.hass,!this._statistics,this._statistics,this._metadata,this._period,this._config.chart_type||"line",this._statTypes,this._names,this._unit,this._config.min_y_axis,this._config.max_y_axis,this._energyStart,this._energyEnd&&this._energyStart?(0,u.MC)((0,o.j)(this._energyEnd,this._energyStart),this._energyEnd):void 0,this._config.fit_y_data||!1,this._config.hide_legend||!1,this._config.logarithmic_scale||!1,this._energyStart&&this._energyEnd?(0,o.j)(this._energyEnd,this._energyStart):this._config.days_to_show||S,i?"100%":void 0,this._config.expand_legend)}},{kind:"get",key:"_intervalTimeout",value:function(){var t;return 1e3*("5minute"===(null===(t=this._config)||void 0===t?void 0:t.period)?5:60)*60}},{kind:"method",key:"_getStatisticsMetaData",value:async function(t){const i=await(0,_.Py)(this.hass,t),e={};i.forEach((t=>{e[t.statistic_id]=t})),this._metadata=e}},{kind:"method",key:"_getStatistics",value:async function(){var t;const i=null!==(t=this._energyStart)&&void 0!==t?t:(0,r.b)(new Date,24*(this._config.days_to_show||S)+1),e=this._energyEnd;try{let t;if(this._config.unit&&this._metadata){const i=Object.values(this._metadata).find((t=>(0,_.dO)(this.hass,null==t?void 0:t.statistic_id,t)===this._config.unit));i&&(t=i.unit_class,this._unit=this._config.unit)}if(!t&&this._metadata){const i=this._metadata[this._entities[0]];t=null==i?void 0:i.unit_class,this._unit=t&&(0,_.dO)(this.hass,i.statistic_id,i)||void 0}const s=t?{[t]:this._unit}:void 0,n=await(0,_.dL)(this.hass,i,e,this._entities,this._period,s,this._statTypes);this._statistics={},this._entities.forEach((t=>{t in n&&(this._statistics[t]=n[t])}))}catch(s){this._statistics=void 0}}},{kind:"field",static:!0,key:"styles",value(){return(0,d.iv)(k||(k=p`ha-card{display:flex;flex-direction:column;height:100%}.card-header{padding-bottom:0}.content{padding:16px;flex:1}.has-header{padding-top:0}statistics-chart{height:100%}`))}}]}}),d.oi);s()}catch(m){s(m)}}))}}]);
//# sourceMappingURL=51062.b57514b6c2373965.js.map