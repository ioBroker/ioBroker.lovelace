export const id=61046;export const ids=[61046,60609];export const modules={53725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},e.exports=t.default},20508:(e,t,n)=>{var s=n(28847).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)({},e)};var o=s(n(53725));e.exports=t.default},59699:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(90394),o=n(39244),r=n(23682),i=36e5;function a(e,t){(0,r.Z)(2,arguments);var n=(0,s.Z)(t);return(0,o.Z)(e,n*i)}},39244:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(90394),o=n(34327),r=n(23682);function i(e,t){(0,r.Z)(2,arguments);var n=(0,o.Z)(e).getTime(),i=(0,s.Z)(t);return new Date(n+i)}},57879:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(34327),o=n(23682);function r(e,t){(0,o.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,s.Z)(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}},38588:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(34327),o=n(23682);var r=n(57879),i=n(63390);function a(e,t){(0,o.Z)(2,arguments);var n,a=(0,s.Z)(e),c=(0,s.Z)(t),l=(0,r.Z)(a,c),u=Math.abs(function(e,t){(0,o.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,s.Z)(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(a,c));if(u<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*u);var d=(0,r.Z)(a,c)===-l;(0,i.Z)((0,s.Z)(e))&&1===u&&1===(0,r.Z)(e,c)&&(d=!1),n=l*(u-Number(d))}return 0===n?0:n}},74774:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(34327),o=n(23682);function r(e){return(0,o.Z)(1,arguments),1===(0,s.Z)(e).getDate()}},63390:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(34327),o=n(93752),r=n(1905),i=n(23682);function a(e){(0,i.Z)(1,arguments);var t=(0,s.Z)(e);return(0,o.Z)(t).getTime()===(0,r.Z)(t).getTime()}},72043:(e,t,n)=>{n.d(t,{A:()=>a,v:()=>c});var s=n(23158),o=n(25101),r=n(66477);const i=(e,t,n,r)=>{const i=n((0,s.Z)(e,t),r);return i instanceof Date?(0,o.Z)(i,t):i},a=(e,t,n,s,o)=>n.time_zone===r.c_.server?i(e,s.time_zone,t,o):t(e,o),c=(e,t,n,s,o)=>n.time_zone===r.c_.server?i(e,s.time_zone,t,o):t(e,o)},92306:(e,t,n)=>{n.d(t,{v:()=>s});const s=(e,t)=>{const n={};for(const s of e){const e=t(s);e in n?n[e].push(s):n[e]=[s]}return n}},81582:(e,t,n)=>{n.d(t,{DJ:()=>r,LZ:()=>s,Nn:()=>u,Ny:()=>d,Pk:()=>f,Q4:()=>o,RQ:()=>a,SO:()=>c,T0:()=>_,iJ:()=>l,pB:()=>i});const s=32143==n.j?["migration_error","setup_error","setup_retry"]:null,o=32143==n.j?["not_loaded","loaded","setup_error","setup_retry"]:null,r=(e,t,n)=>{const s={type:"config_entries/subscribe"};return n&&n.type&&(s.type_filter=n.type),e.connection.subscribeMessage((e=>t(e)),s)},i=(e,t)=>{const n={};return t&&(t.type&&(n.type_filter=t.type),t.domain&&(n.domain=t.domain)),e.callWS({type:"config_entries/get",...n})},a=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),c=(e,t,n)=>e.callWS({type:"config_entries/update",entry_id:t,...n}),l=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),u=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),_=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),f=(e,t)=>{const n=[...e],s=e=>{const n=t[e.domain];return"helper"===(null==n?void 0:n.integration_type)?-1:1};return n.sort(((e,t)=>s(t)-s(e)))}},55424:(e,t,n)=>{n.a(e,(async(e,s)=>{try{n.d(t,{Bm:()=>Z,Cj:()=>P,G9:()=>z,Jj:()=>A,KU:()=>D,P:()=>S,UB:()=>L,ZC:()=>W,_Z:()=>x,b:()=>R,gy:()=>B,iK:()=>w,jB:()=>O,kJ:()=>Y,o1:()=>C,rl:()=>T,vE:()=>F,xZ:()=>M,yH:()=>H});var o=n(24112),r=n(74774),i=n(63390),a=n(32182),c=n(38588),l=n(79021),u=n(39244),d=n(59429),_=n(93752),f=n(59699),h=n(97330),y=n(72043),g=n(49684),p=n(92306),m=n(81582),v=n(38014),b=e([g]);g=(b.then?(await b)():b)[0];const k=[],Z=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),w=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),T=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),S=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),D=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),P=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),M=e=>e.callWS({type:"energy/info"}),B=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),W=e=>e.callWS({type:"energy/get_prefs"}),x=async(e,t)=>{const n=e.callWS({type:"energy/save_prefs",...t});return $(e),n},E=async(e,t,n,s,o,r="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==o?void 0:o.toISOString(),energy_statistic_ids:n,co2_statistic_id:s,period:r}),A=e=>(0,p.v)(e.energy_sources,(e=>e.type)),H=(e,t,n)=>{const s=[];for(const o of e.energy_sources)if(!n||n.includes(o.type))if("solar"!==o.type)if("gas"!==o.type&&"water"!==o.type)if("battery"!==o.type){for(const e of o.flow_from){s.push(e.stat_energy_from),e.stat_cost&&s.push(e.stat_cost);const n=t.cost_sensors[e.stat_energy_from];n&&s.push(n)}for(const e of o.flow_to){s.push(e.stat_energy_to),e.stat_compensation&&s.push(e.stat_compensation);const n=t.cost_sensors[e.stat_energy_to];n&&s.push(n)}}else s.push(o.stat_energy_from),s.push(o.stat_energy_to);else{s.push(o.stat_energy_from),o.stat_cost&&s.push(o.stat_cost);const e=t.cost_sensors[o.stat_energy_from];e&&s.push(e)}else s.push(o.stat_energy_from);return s},U=async(e,t,n,s,d)=>{const[_,f]=await Promise.all([(0,m.pB)(e,{domain:"co2signal"}),M(e)]),h=_.length?_[0]:void 0;let g;if(h)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const n=e.states[t.entity_id];if(n&&"%"===n.attributes.unit_of_measurement){g=n.entity_id;break}}const p=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)p.push(t.stat_energy_from);const b=H(t,f,["grid","solar","battery","gas"]),k=H(t,f,["water"]),Z=[...b,...k],C=(0,o.Z)(s||new Date,n),w=C>35?"month":C>2?"day":"hour",T=e.config.unit_system.length||"",S={energy:"kWh",volume:"km"===T?"m³":"ft³"},D={volume:"km"===T?"L":"gal"},P=b.length?(0,v.dL)(e,n,s,b,w,S,["change"]):{},B=k.length?(0,v.dL)(e,n,s,k,w,D,["change"]):{};let W,x,A,U,$,j={},L={};d&&(x=(0,y.v)(n,r.Z,e.locale,e.config)&&(0,y.v)(s||new Date,i.Z,e.locale,e.config)?(0,y.A)(n,a.Z,e.locale,e.config,-(0,y.v)(s||new Date,c.Z,e.locale,e.config,n)-1):(0,y.A)(n,l.Z,e.locale,e.config,-1*(C+1)),A=(0,u.Z)(n,-1),b.length&&(j=(0,v.dL)(e,x,A,b,w,S,["change"])),k.length&&(L=(0,v.dL)(e,x,A,k,w,D,["change"]))),void 0!==g&&(U=E(e,n,p,g,s,C>35?"month":C>2?"day":"hour"),d&&($=E(e,x,p,g,A,C>35?"month":C>2?"day":"hour")));const O={},q=Z.length?(0,v.Py)(e,Z):[],[z,F,R,Y,J,N,K]=await Promise.all([P,B,j,L,q,U,$]),I={...z,...F};d&&(W={...R,...Y}),Z.length&&J.forEach((e=>{O[e.statistic_id]=e}));return{start:n,end:s,startCompare:x,endCompare:A,info:f,prefs:t,stats:I,statsMetadata:O,statsCompare:W,co2SignalConfigEntry:h,co2SignalEntity:g,fossilEnergyConsumption:N,fossilEnergyConsumptionCompare:K}},$=e=>{k.forEach((t=>{const n=L(e,{key:t});n.clearPrefs(),n._active&&n.refresh()}))},j=e=>{if(e._refreshTimeout&&clearTimeout(e._refreshTimeout),e._active&&(!e.end||e.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),e._refreshTimeout=window.setTimeout((()=>e.refresh()),t.getTime()-Date.now())}},L=(e,t={})=>{let n="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");n=`_${t.key}`}if(e.connection[n])return e.connection[n];k.push(t.key);const s=(0,h._)(e.connection,n,(async()=>(s.prefs||(s.prefs=await W(e)),j(s),U(e,s.prefs,s.start,s.end,s.compare)))),o=s.subscribe;s.subscribe=e=>{const t=o(e);return s._active++,void 0===s._refreshTimeout&&j(s),()=>{s._active--,s._active<1&&(clearTimeout(s._refreshTimeout),s._refreshTimeout=void 0),t()}},s._active=0,s.prefs=t.prefs;const r=new Date,i=(0,g.Zs)(r,e.locale,e.config).split(":")[0];s.start=(0,y.A)("0"===i?(0,l.Z)(r,-1):r,d.Z,e.locale,e.config),s.end=(0,y.A)("0"===i?(0,l.Z)(r,-1):r,_.Z,e.locale,e.config);const a=()=>{s._updatePeriodTimeout=window.setTimeout((()=>{s.start=(0,y.A)(new Date,d.Z,e.locale,e.config),s.end=(0,y.A)(new Date,_.Z,e.locale,e.config),a()}),(0,f.Z)((0,y.A)(r,_.Z,e.locale,e.config),1).getTime()-Date.now())};return a(),s.clearPrefs=()=>{s.prefs=void 0},s.setPeriod=(t,n)=>{var o;s.start=t,s.end=n,s.start.getTime()!==(0,y.A)(new Date,d.Z,e.locale,e.config).getTime()||(null===(o=s.end)||void 0===o?void 0:o.getTime())!==(0,y.A)(new Date,_.Z,e.locale,e.config).getTime()||s._updatePeriodTimeout?s._updatePeriodTimeout&&(clearTimeout(s._updatePeriodTimeout),s._updatePeriodTimeout=void 0):a()},s.setCompare=e=>{s.compare=e},s},O=e=>e.callWS({type:"energy/solar_forecast"}),q=["volume","energy"],z=(e,t={},n)=>{for(const s of e.energy_sources){if("gas"!==s.type)continue;if(n&&n===s.stat_energy_from)continue;const e=t[s.stat_energy_from];if(q.includes(null==e?void 0:e.unit_class))return e.unit_class}},F=(e,t,n={})=>{const s=z(t,n);if(void 0!==s)return"energy"===s?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},R=e=>"km"===e.config.unit_system.length?"L":"gal",Y="/docs/energy/faq/#troubleshooting-missing-entities";s()}catch(e){s(e)}}))},73826:(e,t,n)=>{n.d(t,{f:()=>a});var s=n(17463),o=n(34541),r=n(47838),i=n(79932);const a=e=>(0,s.Z)(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,r.Z)(n.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,o.Z)((0,r.Z)(n.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,o.Z)((0,r.Z)(n.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},61046:(e,t,n)=>{n.a(e,(async(e,s)=>{try{n.r(t),n.d(t,{HuiEnergyCompareCard:()=>h});var o=n(17463),r=n(24112),i=n(93752),a=n(68144),c=n(79932),l=n(12198),u=n(55424),d=n(73826),_=n(53658),f=e([l,u]);[l,u]=f.then?(await f)():f;let h=(0,o.Z)([(0,c.Mo)("hui-energy-compare-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_start",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_end",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_startCompare",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_endCompare",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,reflect:!0})],key:"hidden",value:()=>!0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.UB)(this.hass,{key:this._config.collection_key}).subscribe((e=>this._update(e)))]}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,_.SN)(this,e)||e.size>1||!e.has("hass")}},{kind:"method",key:"render",value:function(){if(!this._startCompare||!this._endCompare)return a.Ld;const e=(0,r.Z)(this._endCompare,this._startCompare);return a.dy` <ha-alert dismissable @alert-dismissed-clicked="${this._stopCompare}"> ${this.hass.localize("ui.panel.energy.compare.info",{start:a.dy`<b>${(0,l.p6)(this._start,this.hass.locale,this.hass.config)}${e>0?` -\n          ${(0,l.p6)(this._end||(0,i.Z)(new Date),this.hass.locale,this.hass.config)}`:""}</b>`,end:a.dy`<b>${(0,l.p6)(this._startCompare,this.hass.locale,this.hass.config)}${e>0?` -\n          ${(0,l.p6)(this._endCompare,this.hass.locale,this.hass.config)}`:""}</b>`})} </ha-alert> `}},{kind:"method",key:"_update",value:function(e){this._start=e.start,this._end=e.end,this._startCompare=e.startCompare,this._endCompare=e.endCompare,this.hidden=!this._startCompare}},{kind:"method",key:"_stopCompare",value:function(){const e=(0,u.UB)(this.hass,{key:this._config.collection_key});e.setCompare(!1),e.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`mwc-button{width:max-content}`}}]}}),(0,d.f)(a.oi));s()}catch(e){s(e)}}))},28847:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},23158:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(89273),o=n(36857);function r(e,t,n){var r=(0,o.Z)(e,n),i=(0,s.Z)(t,r,!0),a=new Date(r.getTime()-i),c=new Date(0);return c.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),c.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),c}},25101:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(20508),o=n(36857),r=n(57944),i=n(89273),a=n(74101);function c(e,t,n){if("string"==typeof e&&!e.match(r.Z)){var c=s(n);return c.timeZone=t,(0,o.Z)(e,c)}var l=(0,o.Z)(e,n),u=(0,a.Z)(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours(),l.getMinutes(),l.getSeconds(),l.getMilliseconds()).getTime(),d=(0,i.Z)(t,new Date(u));return new Date(u+d)}}};
//# sourceMappingURL=61046.pp-CCz241WQ.js.map