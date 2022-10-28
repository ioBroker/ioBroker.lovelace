"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[16938],{92306:(e,t,r)=>{r.d(t,{v:()=>a});const a=(e,t)=>{const r={};for(const a of e){const e=t(a);e in r?r[e].push(a):r[e]=[a]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>a});const a=async(e,t)=>new Promise((r=>{const a=t(e,(e=>{a(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>a,Q4:()=>s,DJ:()=>l,pB:()=>i,SO:()=>o,iJ:()=>n,Nn:()=>c,Ny:()=>d,T0:()=>u});const a=["migration_error","setup_error","setup_retry"],s=["not_loaded","loaded","setup_error","setup_retry"],l=(e,t,r)=>{const a={type:"config_entries/subscribe"};return r&&r.type&&(a.type_filter=r.type),e.connection.subscribeMessage((e=>t(e)),a)},i=(e,t)=>{const r={};return t&&(t.type&&(r.type_filter=t.type),t.domain&&(r.domain=t.domain)),e.callWS({type:"config_entries/get",...r})},o=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),n=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),c=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.d(t,{Bm:()=>g,o1:()=>v,iK:()=>w,rl:()=>k,P:()=>$,KU:()=>E,Cj:()=>C,xZ:()=>S,gy:()=>P,ZC:()=>j,_Z:()=>T,Jj:()=>K,yH:()=>x,UB:()=>W,jB:()=>A,G9:()=>R,vE:()=>F,b:()=>M});var a=r(4535),s=r(59699),l=r(32182),i=r(79021),o=r(39244),n=r(27088),c=r(83008),d=r(70390),u=r(47538),_=r(97330),h=r(92306),m=r(11950),f=r(81582),p=r(74186),y=r(38014);const b=[],g=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),v=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),w=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),k=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),$=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),E=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=e=>e.callWS({type:"energy/info"}),P=e=>e.callWS({type:"energy/validate"}),j=e=>e.callWS({type:"energy/get_prefs"}),T=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return O(e),r},D=async(e,t,r,a,s,l="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==s?void 0:s.toISOString(),energy_statistic_ids:r,co2_statistic_id:a,period:l}),K=e=>(0,h.v)(e.energy_sources,(e=>e.type)),x=(e,t)=>{const r=[];for(const a of e.energy_sources)if("solar"!==a.type)if("gas"!==a.type&&"water"!==a.type)if("battery"!==a.type){for(const e of a.flow_from){r.push(e.stat_energy_from),e.stat_cost&&r.push(e.stat_cost);const a=t.cost_sensors[e.stat_energy_from];a&&r.push(a)}for(const e of a.flow_to){r.push(e.stat_energy_to),e.stat_compensation&&r.push(e.stat_compensation);const a=t.cost_sensors[e.stat_energy_to];a&&r.push(a)}}else r.push(a.stat_energy_from),r.push(a.stat_energy_to);else{r.push(a.stat_energy_from),a.stat_cost&&r.push(a.stat_cost);const e=t.cost_sensors[a.stat_energy_from];e&&r.push(e)}else r.push(a.stat_energy_from);return r},O=e=>{b.forEach((t=>{const r=W(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},W=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];b.push(t.key);const h=(0,_._)(e.connection,r,(async()=>{if(h.prefs||(h.prefs=await j(e)),h._refreshTimeout&&clearTimeout(h._refreshTimeout),h._active&&(!h.end||h.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),h._refreshTimeout=window.setTimeout((()=>h.refresh()),e.getTime()-Date.now())}return(async(e,t,r,n,c)=>{const[d,u,_]=await Promise.all([(0,f.pB)(e,{domain:"co2signal"}),(0,m.l)(e.connection,p.LM),S(e)]),h=d.length?d[0]:void 0;let b;if(h)for(const t of u){if(t.config_entry_id!==h.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){b=r.entity_id;break}}const g=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)g.push(t.stat_energy_from);const v=x(t,_),w=(0,a.Z)(n||new Date,r),k=w>35?"month":w>2?"day":"hour",$=(0,s.Z)(r,-1),E={energy:"kWh",volume:"km"===(e.config.unit_system.length||"")?"m³":"ft³"},C=await(0,y.dL)(e,$,n,v,k,E);let P,j,T,K,O;if(c){j=w>27&&w<32?(0,l.Z)(r,-1):(0,i.Z)(r,-1*(w+1));const t=(0,s.Z)(j,-1);T=(0,o.Z)(r,-1),P=await(0,y.dL)(e,t,T,v,k,E)}void 0!==b&&(K=await D(e,r,g,b,n,w>35?"month":w>2?"day":"hour"),c&&(O=await D(e,j,g,b,T,w>35?"month":w>2?"day":"hour"))),Object.values(C).forEach((e=>{e.length&&new Date(e[0].start)>$&&e.unshift({...e[0],start:$.toISOString(),end:$.toISOString(),sum:0,state:0})}));const W=await(0,y.Py)(e,v),A={};return W.forEach((e=>{A[e.statistic_id]=e})),{start:r,end:n,startCompare:j,endCompare:T,info:_,prefs:t,stats:C,statsMetadata:A,statsCompare:P,co2SignalConfigEntry:h,co2SignalEntity:b,fossilEnergyConsumption:K,fossilEnergyConsumptionCompare:O}})(e,h.prefs,h.start,h.end,h.compare)})),g=h.subscribe;h.subscribe=e=>{const t=g(e);return h._active++,()=>{h._active--,h._active<1&&(clearTimeout(h._refreshTimeout),h._refreshTimeout=void 0),t()}},h._active=0,h.prefs=t.prefs;const v=new Date;h.start=v.getHours()>0?(0,n.Z)():(0,c.Z)(),h.end=v.getHours()>0?(0,d.Z)():(0,u.Z)();const w=()=>{h._updatePeriodTimeout=window.setTimeout((()=>{h.start=(0,n.Z)(),h.end=(0,d.Z)(),w()}),(0,s.Z)((0,d.Z)(),1).getTime()-Date.now())};return w(),h.clearPrefs=()=>{h.prefs=void 0},h.setPeriod=(e,t)=>{var r;h.start=e,h.end=t,h.start.getTime()!==(0,n.Z)().getTime()||(null===(r=h.end)||void 0===r?void 0:r.getTime())!==(0,d.Z)().getTime()||h._updatePeriodTimeout?h._updatePeriodTimeout&&(clearTimeout(h._updatePeriodTimeout),h._updatePeriodTimeout=void 0):w()},h.setCompare=e=>{h.compare=e},h},A=e=>e.callWS({type:"energy/solar_forecast"}),z=["volume","energy"],R=(e,t={},r)=>{for(const a of e.energy_sources){if("gas"!==a.type)continue;if(r&&r===a.stat_energy_from)continue;const e=t[a.stat_energy_from];if(z.includes(null==e?void 0:e.unit_class))return e.unit_class}},F=(e,t,r={})=>{const a=R(t,r);if(void 0!==a)return"energy"===a?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},M=e=>"km"===e.config.unit_system.length?"m³":"ft³"},38014:(e,t,r)=>{r.d(t,{uR:()=>s,Py:()=>l,dL:()=>i,_Y:()=>o,h_:()=>n,Cj:()=>c,hN:()=>d,Kj:()=>u,q6:()=>_,Nw:()=>h,Z0:()=>p,j2:()=>y,Kd:()=>b,dO:()=>g,Hs:()=>v});var a=r(91741);const s=(e,t)=>e.callWS({type:"recorder/list_statistic_ids",statistic_type:t}),l=(e,t)=>e.callWS({type:"recorder/get_statistics_metadata",statistic_ids:t}),i=(e,t,r,a,s="hour",l)=>e.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:a,period:s,units:l}),o=(e,t,r,a)=>e.callWS({type:"recorder/statistic_during_period",statistic_id:t,units:a,fixed_period:r.fixed_period?{start_time:r.fixed_period.start instanceof Date?r.fixed_period.start.toISOString():r.fixed_period.start,end_time:r.fixed_period.end instanceof Date?r.fixed_period.end.toISOString():r.fixed_period.end}:void 0,calendar:r.calendar,rolling_window:r.rolling_window}),n=e=>e.callWS({type:"recorder/validate_statistics"}),c=(e,t,r)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r}),d=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),u=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const r=e[0].sum;return null===r?t:t-r},_=(e,t)=>{let r=null;for(const a of t){if(!(a in e))continue;const t=u(e[a]);null!==t&&(null===r?r=t:r+=t)}return r},h=(e,t)=>e.some((e=>null!==e[t])),m=["mean","min","max"],f=["sum"],p=(e,t)=>!(!m.includes(t)||!e.has_mean)||!(!f.includes(t)||!e.has_sum),y=(e,t,r,a,s)=>e.callWS({type:"recorder/adjust_sum_statistics",statistic_id:t,start_time:r,adjustment:a,adjustment_unit_of_measurement:s}),b=(e,t,r)=>{const s=e.states[t];return s?(0,a.C)(s):(null==r?void 0:r.name)||t},g=(e,t,r)=>{let a;var s;t&&(a=null===(s=e.states[t])||void 0===s?void 0:s.attributes.unit_of_measurement);return void 0===a?null==r?void 0:r.statistics_unit_of_measurement:a},v=e=>e.includes(":")},73826:(e,t,r)=>{r.d(t,{f:()=>f});var a=r(33310);function s(e,t,r,a){var s=l();if(a)for(var d=0;d<a.length;d++)s=a[d](s);var u=t((function(e){s.initializeInstanceElements(e,_.elements)}),r),_=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},a=0;a<e.length;a++){var s,l=e[a];if("method"===l.kind&&(s=t.find(r)))if(c(l.descriptor)||c(s.descriptor)){if(n(l)||n(s))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");s.descriptor=l.descriptor}else{if(n(l)){if(n(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");s.decorators=l.decorators}o(l,s)}else t.push(l)}return t}(u.d.map(i)),e);return s.initializeClassElements(u.F,_.elements),s.runClassFinishers(u.F,_.finishers)}function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(a){t.forEach((function(t){var s=t.placement;if(t.kind===a&&("static"===s||"prototype"===s)){var l="static"===s?e:r;this.defineClassElement(l,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!n(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)}),this),!t)return{elements:r,finishers:a};var l=this.decorateConstructor(r,t);return a.push.apply(a,l.finishers),l.finishers=a,l},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,l=s.length-1;l>=0;l--){var i=t[e.placement];i.splice(i.indexOf(e.key),1);var o=this.fromElementDescriptor(e),n=this.toElementFinisherExtras((0,s[l])(o)||o);e=n.element,this.addElementPlacement(e,t),n.finisher&&a.push(n.finisher);var c=n.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),l=this.toClassDescriptor((0,t[a])(s)||s);if(void 0!==l.finisher&&r.push(l.finisher),void 0!==l.elements){e=l.elements;for(var i=0;i<e.length-1;i++)for(var o=i+1;o<e.length;o++)if(e[i].key===e[o].key&&e[i].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[i].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var l={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),l.initializer=e.initializer),l},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function i(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function n(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e,t,r){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(a){var s=Object.getOwnPropertyDescriptor(a,t);return s.get?s.get.call(r):s.value}},h(e,t,r||e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}const f=e=>s(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){h(m(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(h(m(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(h(m(r.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},16938:(e,t,r)=>{r.r(t),r.d(t,{HuiEnergySourcesTableCard:()=>w});var a=r(40521),s=r(37500),l=r(33310),i=r(70483),o=r(15838),n=r(89525),c=r(18457),d=(r(22098),r(55424)),u=r(38014),_=r(73826);function h(){h=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(a){t.forEach((function(t){var s=t.placement;if(t.kind===a&&("static"===s||"prototype"===s)){var l="static"===s?e:r;this.defineClassElement(l,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!p(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)}),this),!t)return{elements:r,finishers:a};var l=this.decorateConstructor(r,t);return a.push.apply(a,l.finishers),l.finishers=a,l},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,l=s.length-1;l>=0;l--){var i=t[e.placement];i.splice(i.indexOf(e.key),1);var o=this.fromElementDescriptor(e),n=this.toElementFinisherExtras((0,s[l])(o)||o);e=n.element,this.addElementPlacement(e,t),n.finisher&&a.push(n.finisher);var c=n.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),l=this.toClassDescriptor((0,t[a])(s)||s);if(void 0!==l.finisher&&r.push(l.finisher),void 0!==l.elements){e=l.elements;for(var i=0;i<e.length-1;i++)for(var o=i+1;o<e.length;o++)if(e[i].key===e[o].key&&e[i].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[i].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=g(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var l={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),l.initializer=e.initializer),l},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:b(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=b(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function m(e){var t,r=g(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function b(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function g(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}let w=function(e,t,r,a){var s=h();if(a)for(var l=0;l<a.length;l++)s=a[l](s);var i=t((function(e){s.initializeInstanceElements(e,o.elements)}),r),o=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},a=0;a<e.length;a++){var s,l=e[a];if("method"===l.kind&&(s=t.find(r)))if(y(l.descriptor)||y(s.descriptor)){if(p(l)||p(s))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");s.descriptor=l.descriptor}else{if(p(l)){if(p(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");s.decorators=l.decorators}f(l,s)}else t.push(l)}return t}(i.d.map(m)),e);return s.initializeClassElements(i.F,o.elements),s.runClassFinishers(i.F,o.finishers)}([(0,l.Mo)("hui-energy-sources-table-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,d.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){var e,t,r,a,l,_,h,m,f;if(!this.hass||!this._config)return s.dy``;if(!this._data)return s.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;let p=0,y=0,b=0,g=0,v=0,w=0,k=0,$=0,E=0,C=0,S=0,P=0,j=0,T=0,D=0,K=0;const x=(0,d.Jj)(this._data.prefs),O=getComputedStyle(this),W=O.getPropertyValue("--energy-solar-color").trim(),A=O.getPropertyValue("--energy-battery-out-color").trim(),z=O.getPropertyValue("--energy-battery-in-color").trim(),R=O.getPropertyValue("--energy-grid-return-color").trim(),F=O.getPropertyValue("--energy-grid-consumption-color").trim(),M=O.getPropertyValue("--energy-gas-color").trim(),Z=O.getPropertyValue("--energy-water-color").trim(),I=(null===(e=x.grid)||void 0===e?void 0:e[0].flow_from.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price)))||(null===(t=x.grid)||void 0===t?void 0:t[0].flow_to.some((e=>e.stat_compensation||e.entity_energy_price||e.number_energy_price)))||(null===(r=x.gas)||void 0===r?void 0:r.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price)))||(null===(a=x.water)||void 0===a?void 0:a.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price))),V=(0,d.vE)(this.hass,this._data.prefs,this._data.statsMetadata)||"",H=(0,d.b)(this.hass)||"m³",B=void 0!==this._data.statsCompare;return s.dy` <ha-card>
      ${this._config.title?s.dy`<h1 class="card-header">${this._config.title}</h1>`:""}
      <div class="mdc-data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="Energy sources">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell"></th>
                <th
                  class="mdc-data-table__header-cell"
                  role="columnheader"
                  scope="col"
                >
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.source")}
                </th>
                ${B?s.dy`<th
                        class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                        role="columnheader"
                        scope="col"
                      >
                        ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_energy")}
                      </th>
                      ${I?s.dy`<th
                            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                            role="columnheader"
                            scope="col"
                          >
                            ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_cost")}
                          </th>`:""}`:""}
                <th
                  class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                  role="columnheader"
                  scope="col"
                >
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.energy")}
                </th>
                ${I?s.dy` <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                      role="columnheader"
                      scope="col"
                    >
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.cost")}
                    </th>`:""}
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${null===(l=x.solar)||void 0===l?void 0:l.map(((e,t)=>{var r;const a=(0,u.Kj)(this._data.stats[e.stat_energy_from])||0;b+=a;const l=B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_from])||0;S+=l;const d=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(W)),t):(0,n.W)((0,o.Rw)((0,o.wK)(W)),t):void 0,_=d?(0,o.CO)((0,o.p3)(d)):W;return s.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,i.V)({borderColor:_,backgroundColor:_+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${(0,u.Kd)(this.hass,e.stat_energy_from,null===(r=this._data)||void 0===r?void 0:r.statsMetadata[e.stat_energy_from])}
                  </th>
                  ${B?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,c.uf)(l,this.hass.locale)} kWh
                        </td>
                        ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,c.uf)(a,this.hass.locale)} kWh
                  </td>
                  ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                </tr>`}))}
              ${x.solar?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      Solar total
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(S,this.hass.locale)}
                            kWh
                          </td>
                          ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(b,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`:""}
              ${null===(_=x.battery)||void 0===_?void 0:_.map(((e,t)=>{var r,a;const l=(0,u.Kj)(this._data.stats[e.stat_energy_from])||0,d=(0,u.Kj)(this._data.stats[e.stat_energy_to])||0;g+=l-d;const _=B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_from])||0,h=B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_to])||0;P+=_-h;const m=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(A)),t):(0,n.W)((0,o.Rw)((0,o.wK)(A)),t):void 0,f=m?(0,o.CO)((0,o.p3)(m)):A,p=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(z)),t):(0,n.W)((0,o.Rw)((0,o.wK)(z)),t):void 0,y=p?(0,o.CO)((0,o.p3)(p)):z;return s.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:f,backgroundColor:f+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${(0,u.Kd)(this.hass,e.stat_energy_from,null===(r=this._data)||void 0===r?void 0:r.statsMetadata[e.stat_energy_from])}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(_,this.hass.locale)}
                            kWh
                          </td>
                          ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(l,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>
                  <tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:y,backgroundColor:y+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${(0,u.Kd)(this.hass,e.stat_energy_to,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[e.stat_energy_to])}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(-1*h,this.hass.locale)}
                            kWh
                          </td>
                          ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(-1*d,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`}))}
              ${x.battery?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.battery_total")}
                    </th>
                    ${B?s.dy` <td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(P,this.hass.locale)}
                            kWh
                          </td>
                          ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(g,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`:""}
              ${null===(h=x.grid)||void 0===h?void 0:h.map((e=>s.dy`${e.flow_from.map(((e,t)=>{var r;const a=(0,u.Kj)(this._data.stats[e.stat_energy_from])||0;p+=a;const l=B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_from])||0;E+=l;const d=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],_=d?(0,u.Kj)(this._data.stats[d])||0:null;null!==_&&(y+=_);const h=B&&d?(0,u.Kj)(this._data.statsCompare[d])||0:null;null!==h&&(C+=h);const m=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(F)),t):(0,n.W)((0,o.Rw)((0,o.wK)(F)),t):void 0,f=m?(0,o.CO)((0,o.p3)(m)):F;return s.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:f,backgroundColor:f+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${(0,u.Kd)(this.hass,e.stat_energy_from,null===(r=this._data)||void 0===r?void 0:r.statsMetadata[e.stat_energy_from])}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(l,this.hass.locale)} kWh
                          </td>
                          ${I?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${null!==h?(0,c.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(a,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${null!==_?(0,c.uf)(_,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                        </td>`:""}
                  </tr>`}))}
                ${e.flow_to.map(((e,t)=>{var r;const a=-1*((0,u.Kj)(this._data.stats[e.stat_energy_to])||0);p+=a;const l=e.stat_compensation||this._data.info.cost_sensors[e.stat_energy_to],d=l?-1*((0,u.Kj)(this._data.stats[l])||0):null;null!==d&&(y+=d);const _=-1*(B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_to])||0);E+=_;const h=B&&l?-1*((0,u.Kj)(this._data.statsCompare[l])||0):null;null!==h&&(C+=h);const m=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(R)),t):(0,n.W)((0,o.Rw)((0,o.wK)(R)),t):void 0,f=m?(0,o.CO)((0,o.p3)(m)):R;return s.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:f,backgroundColor:f+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${(0,u.Kd)(this.hass,e.stat_energy_to,null===(r=this._data)||void 0===r?void 0:r.statsMetadata[e.stat_energy_to])}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(_,this.hass.locale)} kWh
                          </td>
                          ${I?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${null!==h?(0,c.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(a,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${null!==d?(0,c.uf)(d,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                        </td>`:""}
                  </tr>`}))}`))}
              ${x.grid?s.dy` <tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.grid_total")}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(E,this.hass.locale)}
                            kWh
                          </td>
                          ${I?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${(0,c.uf)(C,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(p,this.hass.locale)} kWh
                    </td>
                    ${I?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,c.uf)(y,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${null===(m=x.gas)||void 0===m?void 0:m.map(((e,t)=>{var r;const a=(0,u.Kj)(this._data.stats[e.stat_energy_from])||0;v+=a;const l=B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_from])||0;j+=l;const d=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],_=d?(0,u.Kj)(this._data.stats[d])||0:null;null!==_&&(w+=_);const h=B&&d?(0,u.Kj)(this._data.statsCompare[d])||0:null;null!==h&&(T+=h);const m=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(M)),t):(0,n.W)((0,o.Rw)((0,o.wK)(M)),t):void 0,f=m?(0,o.CO)((0,o.p3)(m)):M;return s.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,i.V)({borderColor:f,backgroundColor:f+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${(0,u.Kd)(this.hass,e.stat_energy_from,null===(r=this._data)||void 0===r?void 0:r.statsMetadata[e.stat_energy_from])}
                  </th>
                  ${B?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,c.uf)(l,this.hass.locale)}
                          ${V}
                        </td>
                        ${I?s.dy`<td
                              class="mdc-data-table__cell mdc-data-table__cell--numeric"
                            >
                              ${null!==h?(0,c.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                            </td>`:""}`:""}
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,c.uf)(a,this.hass.locale)} ${V}
                  </td>
                  ${I?s.dy`<td
                        class="mdc-data-table__cell mdc-data-table__cell--numeric"
                      >
                        ${null!==_?(0,c.uf)(_,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                      </td>`:""}
                </tr>`}))}
              ${x.gas?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.gas_total")}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(j,this.hass.locale)}
                            ${V}
                          </td>
                          ${I?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${(0,c.uf)(T,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(v,this.hass.locale)} ${V}
                    </td>
                    ${I?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,c.uf)(w,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${null===(f=x.water)||void 0===f?void 0:f.map(((e,t)=>{var r;const a=(0,u.Kj)(this._data.stats[e.stat_energy_from])||0;k+=a;const l=B&&(0,u.Kj)(this._data.statsCompare[e.stat_energy_from])||0;D+=l;const d=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],_=d?(0,u.Kj)(this._data.stats[d])||0:null;null!==_&&($+=_);const h=B&&d?(0,u.Kj)(this._data.statsCompare[d])||0:null;null!==h&&(K+=h);const m=t>0?this.hass.themes.darkMode?(0,n.C)((0,o.Rw)((0,o.wK)(Z)),t):(0,n.W)((0,o.Rw)((0,o.wK)(Z)),t):void 0,f=m?(0,o.CO)((0,o.p3)(m)):Z;return s.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,i.V)({borderColor:f,backgroundColor:f+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${(0,u.Kd)(this.hass,e.stat_energy_from,null===(r=this._data)||void 0===r?void 0:r.statsMetadata[e.stat_energy_from])}
                  </th>
                  ${B?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,c.uf)(l,this.hass.locale)}
                          ${H}
                        </td>
                        ${I?s.dy`<td
                              class="mdc-data-table__cell mdc-data-table__cell--numeric"
                            >
                              ${null!==h?(0,c.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                            </td>`:""}`:""}
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,c.uf)(a,this.hass.locale)} ${H}
                  </td>
                  ${I?s.dy`<td
                        class="mdc-data-table__cell mdc-data-table__cell--numeric"
                      >
                        ${null!==_?(0,c.uf)(_,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                      </td>`:""}
                </tr>`}))}
              ${x.water?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.water_total")}
                    </th>
                    ${B?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(D,this.hass.locale)}
                            ${V}
                          </td>
                          ${I?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${(0,c.uf)(K,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(k,this.hass.locale)} ${H}
                    </td>
                    ${I?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,c.uf)($,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${[w,$,y].filter(Boolean).length>1?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.total_costs")}
                    </th>
                    ${B?s.dy`${I?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                          <td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,c.uf)(T+C+K,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                          </td>`:""}
                    <td class="mdc-data-table__cell"></td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,c.uf)(w+y+$,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                    </td>
                  </tr>`:""}
            </tbody>
          </table>
        </div>
      </div>
    </ha-card>`}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`
      ${(0,s.$m)(a)}
      .mdc-data-table {
        width: 100%;
        border: 0;
      }
      .mdc-data-table__header-cell,
      .mdc-data-table__cell {
        color: var(--primary-text-color);
        border-bottom-color: var(--divider-color);
        text-align: var(--float-start);
      }
      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }
      .total {
        --mdc-typography-body2-font-weight: 500;
      }
      .total .mdc-data-table__cell {
        border-top: 1px solid var(--divider-color);
      }
      ha-card {
        height: 100%;
        overflow: hidden;
      }
      .card-header {
        padding-bottom: 0;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
      .cell-bullet {
        width: 32px;
        padding-right: 0;
        padding-inline-end: 0;
        padding-inline-start: 16px;
        direction: var(--direction);
      }
      .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        height: 16px;
        width: 32px;
      }
      .mdc-data-table__cell--numeric {
        direction: ltr;
      }
    `}}]}}),(0,_.f)(s.oi))}}]);
//# sourceMappingURL=69c25c39.js.map