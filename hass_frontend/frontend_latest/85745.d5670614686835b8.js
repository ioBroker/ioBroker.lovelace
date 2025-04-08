export const __webpack_ids__=["85745"];export const __webpack_modules__={50875:function(t,e,a){a.d(e,{Eu:()=>n,hZ:()=>o,o9:()=>c});var s=a(27486),r=a(11259);const i=["#4269d0","#f4bd4a","#ff725c","#6cc5b0","#a463f2","#ff8ab7","#9c6b4e","#97bbf5","#01ab63","#9498a0","#094bad","#c99000","#d84f3e","#49a28f","#048732","#d96895","#8043ce","#7599d1","#7a4c31","#74787f","#6989f4","#ffd444","#ff957c","#8fe9d3","#62cc71","#ffadda","#c884ff","#badeff","#bf8b6d","#b6bac2","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function n(t){return i[t%i.length]}function o(t,e){const a=e.getPropertyValue(`--graph-color-${t+1}`)||n(t);return(0,r.Rq)(a)}const c=(0,s.Z)((t=>i.map(((e,a)=>o(a,t)))),((t,e)=>t[0].getPropertyValue("--graph-color-1")===e[0].getPropertyValue("--graph-color-1")))},17705:function(t,e,a){a.d(e,{Cj:()=>h,F7:()=>r,Hs:()=>x,Kd:()=>k,Kj:()=>_,Nw:()=>m,PA:()=>i,Py:()=>c,Qm:()=>C,Z0:()=>b,_Y:()=>l,_m:()=>n,dL:()=>d,dO:()=>S,hN:()=>f,h_:()=>u,j2:()=>v,q6:()=>p,uR:()=>o});a(9359),a(52924);var s=a(47194);let r=function(t){return t[t.NONE=0]="NONE",t[t.ARITHMETIC=1]="ARITHMETIC",t[t.CIRCULAR=2]="CIRCULAR",t}({});const i=99387==a.j?["entity_not_recorded","entity_no_longer_recorded","state_class_removed","units_changed","mean_type_changed","no_state"]:null,n=t=>t.sendMessagePromise({type:"recorder/info"}),o=(t,e)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:e}),c=(t,e)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e}),d=(t,e,a,s,r="hour",i,n)=>t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:a?.toISOString(),statistic_ids:s,period:r,units:i,types:n}),l=(t,e,a,s)=>t.callWS({type:"recorder/statistic_during_period",statistic_id:e,units:s,fixed_period:a.fixed_period?{start_time:a.fixed_period.start instanceof Date?a.fixed_period.start.toISOString():a.fixed_period.start,end_time:a.fixed_period.end instanceof Date?a.fixed_period.end.toISOString():a.fixed_period.end}:void 0,calendar:a.calendar,rolling_window:a.rolling_window}),u=t=>t.callWS({type:"recorder/validate_statistics"}),h=(t,e,a)=>t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:a}),f=(t,e)=>t.callWS({type:"recorder/clear_statistics",statistic_ids:e}),_=t=>{let e=null;if(!t)return null;for(const a of t)null!==a.change&&void 0!==a.change&&(null===e?e=a.change:e+=a.change);return e},p=(t,e)=>{let a=null;for(const s of e){if(!(s in t))continue;const e=_(t[s]);null!==e&&(null===a?a=e:a+=e)}return a},m=(t,e)=>t.some((t=>void 0!==t[e]&&null!==t[e])),y=["mean","min","max"],g=["sum","state","change"],b=(t,e)=>!(!y.includes(e)||t.mean_type===r.NONE)||!(!g.includes(e)||!t.has_sum),v=(t,e,a,s,r)=>{const i=new Date(a).toISOString();return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:e,start_time:i,adjustment:s,adjustment_unit_of_measurement:r})},k=(t,e,a)=>{const r=t.states[e];return r?(0,s.C)(r):a?.name||e},S=(t,e,a)=>{let s;return e&&(s=t.states[e]?.attributes.unit_of_measurement),void 0===s?a?.statistics_unit_of_measurement:s},x=t=>t.includes(":"),C=t=>t.callWS({type:"recorder/update_statistics_issues"})},6736:function(t,e,a){a.d(e,{f:()=>n});var s=a(44249),r=a(72621),i=(a(9359),a(52924),a(15093));const n=t=>(0,s.Z)(null,(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)(a,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,r.Z)(a,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,r.Z)(a,"updated",this,3)([t]),t.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const e of t.keys())if(this.hassSubscribeRequiredHostProps.includes(e))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((t=>void 0===this[t]))&&(this.__unsubs=this.hassSubscribe())}}]}}),t)},20548:function(t,e,a){a.d(e,{H:()=>i});var s=a(11259),r=a(4643);function i(t,e,a,i,n,o){const c=t.getPropertyValue(n+"-"+o).trim(),d=c.length>0?c:t.getPropertyValue(n).trim();let l=(0,s.Rq)(d);return 0===c.length&&o&&(l=(0,s.CO)((0,s.p3)(e?(0,r.C)((0,s.Rw)((0,s.wK)(l)),o):(0,r.W)((0,s.Rw)((0,s.wK)(l)),o)))),i?l+=a?"32":"7F":a&&(l+="7F"),l}},53259:function(t,e,a){a.a(t,(async function(t,s){try{a.d(e,{J:()=>v,MC:()=>g,Zx:()=>S,b4:()=>b,kT:()=>x});a(92745),a(9359),a(56475),a(31526),a(70104),a(92519),a(42179),a(89256),a(24931),a(88463),a(57449),a(19814);var r=a(21893),i=a(13809),n=a(38836),o=a(84775),c=a(80951),d=a(13730),l=a(6542),u=a(83204),h=a(23459),f=a(23711),_=a(50602),p=a(46467),m=a(33570),y=t([p,m,_]);function g(t,e){let a=new Date(e);return t>2&&0===a.getHours()&&(a=(0,r.b)(a,1)),a.setMinutes(0,0,0),t>35&&a.setDate(1),t>2&&a.setHours(0),a.getTime()}function b(t){return t>35?"month":t>2?"day":"hour"}function v(t,e,a,s,r,n,o,c){const d=(0,i.j)(e,t),l=void 0!==n&&void 0!==o;return{xAxis:{type:"time",min:t,max:g(d,e)},yAxis:{type:"value",name:r,nameGap:2,nameTextStyle:{align:"left"},axisLabel:{formatter:t=>(0,_.uf)(Math.abs(t),a)},splitLine:{show:!0}},grid:{top:15,bottom:0,left:1,right:1,containLabel:!0},tooltip:{trigger:"axis",formatter:t=>{if(Array.isArray(t)){const e=[],i=[];return t.forEach((t=>{t.seriesId?.startsWith("compare-")?i.push(t):e.push(t)})),[e,i].map((t=>k(t,a,s,d,l,r,c))).filter(Boolean).join("<br><br>")}return k([t],a,s,d,l,r,c)}}}}function k(t,e,a,s,r,i,o){if(!t[0]?.value)return"";const c=new Date(t[0].value?.[2]??t[0].value?.[0]);let d;d=s>89?`${(0,p.NC)(c,e,a)}`:s>0?`${(0,p.ud)(c,e,a)}`:`${r?`${(0,p.ud)(c,e,a)}: `:""}${(0,m.mr)(c,e,a)} – ${(0,m.mr)((0,n.T)(c,1),e,a)}`;const l=`<h4 style="text-align: center; margin: 0;">${d}</h4>`;let u=0,h=0,f=0,y=0;const g=t.map((t=>{const a=t.value?.[1],s=(0,_.uf)(a,e);return"0"!==s&&("bar"===t.componentSubType&&(a>0?(u+=a,h++):(f+=a,y++)),`${t.marker} ${t.seriesName}: ${s} ${i}`)})).filter(Boolean);let b="";return 0!==u&&h>1&&o&&(b+=`<br><b>${o(u)}</b>`),0!==f&&y>1&&o&&(b+=`<br><b>${o(f)}</b>`),g.length>0?`${l}${g.join("<br>")}${b}`:""}function S(t){Array.from(new Set(t.map((t=>t.data.map((t=>Number(t[0]))))).flat())).sort(((t,e)=>t-e)).forEach(((e,a)=>{const s={},r={};for(let i=t.length-1;i>=0;i--){const n=t[i].data[a],o=n&&"object"==typeof n&&"value"in n?n:{value:n},c=o.value?.[0],d=t[i].stack??"";void 0!==c&&(Number(c)!==e?t[i].data?.splice(a,0,{value:[e,0],itemStyle:{borderWidth:0}}):0===o.value?.[1]?t[i].data[a]={...o,itemStyle:{...o.itemStyle,borderWidth:0}}:!s[d]&&o.value?.[1]>0?(t[i].data[a]={...o,itemStyle:{...o.itemStyle,borderRadius:[4,4,0,0]}},s[d]=!0):!r[d]&&o.value?.[1]<0&&(t[i].data[a]={...o,itemStyle:{...o.itemStyle,borderRadius:[0,0,4,4]}},r[d]=!0))}}))}function x(t,e){if(!e)return t=>t;const a=(0,o.o)(t,e);if(0!==a&&t.getTime()===(0,c.e)(t).getTime())return t=>(0,d.B)(t,a);const s=(0,l.d)(t,e);if(0!==s&&t.getTime()===(0,u.N)(t).getTime())return t=>(0,h.z)(t,s);const r=t.getTime()-e.getTime();return t=>(0,f.n)(t,r)}[p,m,_]=y.then?(await y)():y,s()}catch(C){s(C)}}))},63:function(t,e,a){a.a(t,(async function(t,s){try{a.r(e),a.d(e,{HuiEnergySolarGraphCard:()=>S});var r=a(44249),i=(a(92745),a(9359),a(56475),a(31526),a(52924),a(42625)),n=a(83389),o=a(16444),c=a(13809),d=a(57243),l=a(15093),u=a(35359),h=a(27486),f=a(20548),_=a(50602),p=a(25179),m=(a(54977),a(1118)),y=a(17705),g=a(6736),b=a(93331),v=a(53259),k=t([p,_,m,v]);[p,_,m,v]=k.then?(await k)():k;let S=(0,r.Z)([(0,l.Mo)("hui-energy-solar-graph-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_chartData",value:()=>[]},{kind:"field",decorators:[(0,l.SB)()],key:"_start",value:()=>(0,i.I)()},{kind:"field",decorators:[(0,l.SB)()],key:"_end",value:()=>(0,n.p)()},{kind:"field",decorators:[(0,l.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_compareEnd",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){return[(0,m.UB)(this.hass,{key:this._config?.collection_key}).subscribe((t=>this._getStatistics(t)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,b.SN)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?d.dy` <ha-card> ${this._config.title?d.dy`<h1 class="card-header">${this._config.title}</h1>`:""} <div class="content ${(0,u.$)({"has-header":!!this._config.title})}"> <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._createOptions(this._start,this._end,this.hass.locale,this.hass.config,this._compareStart,this._compareEnd)}" chart-type="bar"></ha-chart-base> ${this._chartData.length?"":d.dy`<div class="no-data"> ${(0,o.z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")} </div>`} </div> </ha-card> `:d.Ld}},{kind:"field",key:"_formatTotal",value(){return t=>this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.total_produced",{num:(0,_.uf)(t,this.hass.locale)})}},{kind:"field",key:"_createOptions",value(){return(0,h.Z)(((t,e,a,s,r,i)=>(0,v.J)(t,e,a,s,"kWh",r,i,this._formatTotal)))}},{kind:"method",key:"_getStatistics",value:async function(t){this._start=t.start,this._end=t.end||(0,n.p)(),this._compareStart=t.startCompare,this._compareEnd=t.endCompare;const e=t.prefs.energy_sources.filter((t=>"solar"===t.type));let a;if(e.some((t=>t.config_entry_solar_forecast?.length)))try{a=await(0,m.jB)(this.hass)}catch(t){}const s=[],r=getComputedStyle(this);if(t.statsCompare)s.push(...this._processDataSet(t.statsCompare,t.statsMetadata,e,r,!0));else{const t=e[0]?.stat_energy_from??"placeholder";s.push({id:"compare-"+t,type:"bar",stack:"solar",data:[]})}s.push(...this._processDataSet(t.stats,t.statsMetadata,e,r)),(0,v.Zx)(s),a&&s.push(...this._processForecast(t.statsMetadata,a,e,r.getPropertyValue("--primary-text-color"),t.start,t.end)),this._chartData=s}},{kind:"method",key:"_processDataSet",value:function(t,e,a,s,r=!1){const i=[],n=(0,v.kT)(this._start,this._compareStart);return a.forEach(((a,o)=>{let c=null;const d=[];if(a.stat_energy_from in t){const e=t[a.stat_energy_from];for(const t of e){if(null===t.change||void 0===t.change||0===t.change)continue;if(c===t.start)continue;const e=[t.start,t.change];r&&(e[2]=e[0],e[0]=n(new Date(t.start))),d.push(e),c=t.start}}i.push({type:"bar",cursor:"default",id:r?"compare-"+a.stat_energy_from:a.stat_energy_from,name:this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.production",{name:(0,y.Kd)(this.hass,a.stat_energy_from,e[a.stat_energy_from])}),barMaxWidth:50,itemStyle:{borderColor:(0,f.H)(s,this.hass.themes.darkMode,!1,r,"--energy-solar-color",o)},color:(0,f.H)(s,this.hass.themes.darkMode,!0,r,"--energy-solar-color",o),data:d,stack:r?"compare":"solar"})})),i}},{kind:"method",key:"_processForecast",value:function(t,e,a,s,r,i){const n=[],o=(0,c.j)(i||new Date,r);return a.forEach((a=>{if(a.config_entry_solar_forecast){const c={};if(a.config_entry_solar_forecast.forEach((t=>{e[t]&&Object.entries(e[t].wh_hours).forEach((([t,e])=>{const a=new Date(t);if(a<r||i&&a>i)return;o>35&&a.setDate(1),o>2?a.setHours(0,0,0,0):a.setMinutes(0,0,0);const s=a.getTime();s in c?c[s]+=e:c[s]=e}))})),c){const e=[];for(const[t,a]of Object.entries(c))e.push([Number(t),a/1e3]);e.length&&n.push({id:"forecast-"+a.stat_energy_from,type:"line",stack:"forecast",name:this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.forecast",{name:(0,y.Kd)(this.hass,a.stat_energy_from,t[a.stat_energy_from])}),step:!1,color:s,lineStyle:{type:[7,5],width:1.5},symbol:"none",data:e})}}})),n}},{kind:"field",static:!0,key:"styles",value:()=>d.iv`ha-card{height:100%}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.no-data{position:absolute;height:100%;top:0;left:0;right:0;display:flex;justify-content:center;align-items:center;padding:20%;margin-left:32px;margin-inline-start:32px;margin-inline-end:initial;box-sizing:border-box}`}]}}),(0,g.f)(d.oi));s()}catch(t){s(t)}}))},41924:function(t,e,a){a.d(e,{y:()=>r});var s=a(53907);function r(t){return(0,s.L)(t,Date.now())}},97836:function(t,e,a){a.d(e,{K:()=>i});var s=a(18492),r=a(7591);function i(t,e,a){const[i,n]=(0,s.d)(a?.in,t,e);return+(0,r.b)(i)==+(0,r.b)(n)}},16444:function(t,e,a){a.d(e,{z:()=>n});var s=a(53907),r=a(41924),i=a(97836);function n(t,e){return(0,i.K)((0,s.L)(e?.in||t,t),(0,r.y)(e?.in||t))}}};
//# sourceMappingURL=85745.d5670614686835b8.js.map