"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9928],{92306:(e,t,r)=>{r.d(t,{v:()=>i});const i=(e,t)=>{const r={};for(const i of e){const e=t(i);e in r?r[e].push(i):r[e]=[i]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>i});const i=async(e,t)=>new Promise((r=>{const i=t(e,(e=>{i(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>i,Q4:()=>n,DJ:()=>o,pB:()=>s,SO:()=>a,iJ:()=>c,Nn:()=>l,Ny:()=>d,T0:()=>u});const i=["migration_error","setup_error","setup_retry"],n=["not_loaded","loaded","setup_error","setup_retry"],o=(e,t,r)=>{const i={type:"config_entries/subscribe"};return r&&r.type&&(i.type_filter=r.type),e.connection.subscribeMessage((e=>t(e)),i)},s=(e,t)=>{const r={};return t&&(t.type&&(r.type_filter=t.type),t.domain&&(r.domain=t.domain)),e.callWS({type:"config_entries/get",...r})},a=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),c=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),l=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.d(t,{Bm:()=>_,o1:()=>b,iK:()=>k,rl:()=>w,P:()=>x,KU:()=>C,Cj:()=>E,xZ:()=>$,gy:()=>P,ZC:()=>S,_Z:()=>M,Jj:()=>D,yH:()=>T,UB:()=>A,jB:()=>z,G9:()=>j,vE:()=>Z,b:()=>W});var i=r(4535),n=r(59699),o=r(32182),s=r(79021),a=r(39244),c=r(27088),l=r(83008),d=r(70390),u=r(47538),p=r(97330),f=r(92306),h=r(11950),m=r(81582),y=r(74186),g=r(38014);const v=[],_=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),k=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),w=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),x=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),C=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),E=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),$=e=>e.callWS({type:"energy/info"}),P=e=>e.callWS({type:"energy/validate"}),S=e=>e.callWS({type:"energy/get_prefs"}),M=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return H(e),r},L=async(e,t,r,i,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:r,co2_statistic_id:i,period:o}),D=e=>(0,f.v)(e.energy_sources,(e=>e.type)),T=(e,t)=>{const r=[];for(const i of e.energy_sources)if("solar"!==i.type)if("gas"!==i.type&&"water"!==i.type)if("battery"!==i.type){for(const e of i.flow_from){r.push(e.stat_energy_from),e.stat_cost&&r.push(e.stat_cost);const i=t.cost_sensors[e.stat_energy_from];i&&r.push(i)}for(const e of i.flow_to){r.push(e.stat_energy_to),e.stat_compensation&&r.push(e.stat_compensation);const i=t.cost_sensors[e.stat_energy_to];i&&r.push(i)}}else r.push(i.stat_energy_from),r.push(i.stat_energy_to);else{r.push(i.stat_energy_from),i.stat_cost&&r.push(i.stat_cost);const e=t.cost_sensors[i.stat_energy_from];e&&r.push(e)}else r.push(i.stat_energy_from);return r},H=e=>{v.forEach((t=>{const r=A(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},A=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];v.push(t.key);const f=(0,p._)(e.connection,r,(async()=>{if(f.prefs||(f.prefs=await S(e)),f._refreshTimeout&&clearTimeout(f._refreshTimeout),f._active&&(!f.end||f.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),f._refreshTimeout=window.setTimeout((()=>f.refresh()),e.getTime()-Date.now())}return(async(e,t,r,c,l)=>{const[d,u,p]=await Promise.all([(0,m.pB)(e,{domain:"co2signal"}),(0,h.l)(e.connection,y.LM),$(e)]),f=d.length?d[0]:void 0;let v;if(f)for(const t of u){if(t.config_entry_id!==f.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){v=r.entity_id;break}}const _=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)_.push(t.stat_energy_from);const b=T(t,p),k=(0,i.Z)(c||new Date,r),w=k>35?"month":k>2?"day":"hour",x=(0,n.Z)(r,-1),C={energy:"kWh",volume:"km"===(e.config.unit_system.length||"")?"m³":"ft³"},E=await(0,g.dL)(e,x,c,b,w,C);let P,S,M,D,H;if(l){S=k>27&&k<32?(0,o.Z)(r,-1):(0,s.Z)(r,-1*(k+1));const t=(0,n.Z)(S,-1);M=(0,a.Z)(r,-1),P=await(0,g.dL)(e,t,M,b,w,C)}void 0!==v&&(D=await L(e,r,_,v,c,k>35?"month":k>2?"day":"hour"),l&&(H=await L(e,S,_,v,M,k>35?"month":k>2?"day":"hour"))),Object.values(E).forEach((e=>{e.length&&new Date(e[0].start)>x&&e.unshift({...e[0],start:x.toISOString(),end:x.toISOString(),sum:0,state:0})}));const A=await(0,g.Py)(e,b),z={};return A.forEach((e=>{z[e.statistic_id]=e})),{start:r,end:c,startCompare:S,endCompare:M,info:p,prefs:t,stats:E,statsMetadata:z,statsCompare:P,co2SignalConfigEntry:f,co2SignalEntity:v,fossilEnergyConsumption:D,fossilEnergyConsumptionCompare:H}})(e,f.prefs,f.start,f.end,f.compare)})),_=f.subscribe;f.subscribe=e=>{const t=_(e);return f._active++,()=>{f._active--,f._active<1&&(clearTimeout(f._refreshTimeout),f._refreshTimeout=void 0),t()}},f._active=0,f.prefs=t.prefs;const b=new Date;f.start=b.getHours()>0?(0,c.Z)():(0,l.Z)(),f.end=b.getHours()>0?(0,d.Z)():(0,u.Z)();const k=()=>{f._updatePeriodTimeout=window.setTimeout((()=>{f.start=(0,c.Z)(),f.end=(0,d.Z)(),k()}),(0,n.Z)((0,d.Z)(),1).getTime()-Date.now())};return k(),f.clearPrefs=()=>{f.prefs=void 0},f.setPeriod=(e,t)=>{var r;f.start=e,f.end=t,f.start.getTime()!==(0,c.Z)().getTime()||(null===(r=f.end)||void 0===r?void 0:r.getTime())!==(0,d.Z)().getTime()||f._updatePeriodTimeout?f._updatePeriodTimeout&&(clearTimeout(f._updatePeriodTimeout),f._updatePeriodTimeout=void 0):k()},f.setCompare=e=>{f.compare=e},f},z=e=>e.callWS({type:"energy/solar_forecast"}),O=["volume","energy"],j=(e,t={},r)=>{for(const i of e.energy_sources){if("gas"!==i.type)continue;if(r&&r===i.stat_energy_from)continue;const e=t[i.stat_energy_from];if(O.includes(null==e?void 0:e.unit_class))return e.unit_class}},Z=(e,t,r={})=>{const i=j(t,r);if(void 0!==i)return"energy"===i?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},W=e=>"km"===e.config.unit_system.length?"m³":"ft³"},38014:(e,t,r)=>{r.d(t,{uR:()=>n,Py:()=>o,dL:()=>s,_Y:()=>a,h_:()=>c,Cj:()=>l,hN:()=>d,Kj:()=>u,q6:()=>p,Nw:()=>f,Z0:()=>y,j2:()=>g,Kd:()=>v,dO:()=>_,Hs:()=>b});var i=r(91741);const n=(e,t)=>e.callWS({type:"recorder/list_statistic_ids",statistic_type:t}),o=(e,t)=>e.callWS({type:"recorder/get_statistics_metadata",statistic_ids:t}),s=(e,t,r,i,n="hour",o)=>e.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:i,period:n,units:o}),a=(e,t,r,i)=>e.callWS({type:"recorder/statistic_during_period",statistic_id:t,units:i,fixed_period:r.fixed_period?{start_time:r.fixed_period.start instanceof Date?r.fixed_period.start.toISOString():r.fixed_period.start,end_time:r.fixed_period.end instanceof Date?r.fixed_period.end.toISOString():r.fixed_period.end}:void 0,calendar:r.calendar,rolling_window:r.rolling_window}),c=e=>e.callWS({type:"recorder/validate_statistics"}),l=(e,t,r)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r}),d=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),u=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const r=e[0].sum;return null===r?t:t-r},p=(e,t)=>{let r=null;for(const i of t){if(!(i in e))continue;const t=u(e[i]);null!==t&&(null===r?r=t:r+=t)}return r},f=(e,t)=>e.some((e=>null!==e[t])),h=["mean","min","max"],m=["sum"],y=(e,t)=>!(!h.includes(t)||!e.has_mean)||!(!m.includes(t)||!e.has_sum),g=(e,t,r,i,n)=>e.callWS({type:"recorder/adjust_sum_statistics",statistic_id:t,start_time:r,adjustment:i,adjustment_unit_of_measurement:n}),v=(e,t,r)=>{const n=e.states[t];return n?(0,i.C)(n):(null==r?void 0:r.name)||t},_=(e,t,r)=>{let i;var n;t&&(i=null===(n=e.states[t])||void 0===n?void 0:n.attributes.unit_of_measurement);return void 0===i?null==r?void 0:r.statistics_unit_of_measurement:i},b=e=>e.includes(":")},73826:(e,t,r)=>{r.d(t,{f:()=>m});var i=r(33310);function n(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var u=t((function(e){n.initializeInstanceElements(e,p.elements)}),r),p=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(l(o.descriptor)||l(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(u.d.map(s)),e);return n.initializeClassElements(u.F,p.elements),n.runClassFinishers(u.F,p.finishers)}function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e,t,r){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},f(e,t,r||e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}const m=e=>n(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){f(h(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(f(h(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(f(h(r.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},9928:(e,t,r)=>{r.r(t);r(51187);var i=r(37500),n=r(33310),o=r(8636),s=r(18457),a=(r(22098),r(52039),r(55424)),c=r(38014),l=r(73826);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!f(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:m(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=m(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function u(e){var t,r=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}const v="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z",_=238.76104;!function(e,t,r,i){var n=d();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(h(o.descriptor)||h(n.descriptor)){if(f(o)||f(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(f(o)){if(f(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}p(o,n)}else t.push(o)}return t}(s.d.map(u)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-energy-distribution-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,a.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config)return i.dy``;if(!this._data)return i.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const r=this._data.prefs,n=(0,a.Jj)(r),l=void 0!==n.solar,d=void 0!==n.battery,u=void 0!==n.gas,p=void 0!==n.water,f=n.grid[0].flow_to.length>0,h=null!==(e=(0,c.q6)(this._data.stats,n.grid[0].flow_from.map((e=>e.stat_energy_from))))&&void 0!==e?e:0;let m=null;var y;p&&(m=null!==(y=(0,c.q6)(this._data.stats,n.water.map((e=>e.stat_energy_from))))&&void 0!==y?y:0);let g=null;var b;u&&(g=null!==(b=(0,c.q6)(this._data.stats,n.gas.map((e=>e.stat_energy_from))))&&void 0!==b?b:0);let k=null;l&&(k=(0,c.q6)(this._data.stats,n.solar.map((e=>e.stat_energy_from)))||0);let w=null,x=null;d&&(w=(0,c.q6)(this._data.stats,n.battery.map((e=>e.stat_energy_to)))||0,x=(0,c.q6)(this._data.stats,n.battery.map((e=>e.stat_energy_from)))||0);let C=null;f&&(C=(0,c.q6)(this._data.stats,n.grid[0].flow_to.map((e=>e.stat_energy_to)))||0);let E=null;l&&(E=(k||0)-(C||0)-(w||0));let $=null,P=null;null!==E&&E<0&&(d&&($=-1*E,$>h&&(P=Math.min(0,$-h),$=h)),E=0);let S=null;l&&d?(P||(P=Math.max(0,(C||0)-(k||0)-(w||0)-($||0))),S=w-($||0)):!l&&d&&(P=C);let M=null;d&&(M=(x||0)-(P||0));const L=Math.max(0,h-($||0)),D=Math.max(0,L+(E||0)+(M||0));let T,H,A,z,O;l&&(T=_*(E/D)),M&&(H=_*(M/D));let j="https://app.electricitymap.org";if(this._data.co2SignalEntity&&this._data.fossilEnergyConsumption){const e=Object.values(this._data.fossilEnergyConsumption).reduce(((e,t)=>e+t),0),t=this.hass.states[this._data.co2SignalEntity];if(null!=t&&t.attributes.country_code&&(j+=`/zone/${t.attributes.country_code}`),null!==e){let t;A=h-e,t=L!==h?e*(L/h):e,O=_*(t/D),z=_-(T||0)-(H||0)-O}}const Z=L+(E||0)+(C?C-(P||0):0)+(S||0)+(M||0)+($||0)+(P||0);return i.dy`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          ${void 0!==A||l||u||p?i.dy`<div class="row">
                ${void 0===A?i.dy`<div class="spacer"></div>`:i.dy`<div class="circle-container low-carbon">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.low_carbon")}</span
                      >
                      <a
                        class="circle"
                        href=${j}
                        target="_blank"
                        rel="noopener no referrer"
                      >
                        <ha-svg-icon .path=${"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"}></ha-svg-icon>
                        ${(0,s.uf)(A||0,this.hass.locale,{maximumFractionDigits:1})}
                        kWh
                      </a>
                      <svg width="80" height="30">
                        <line x1="40" y1="0" x2="40" y2="30"></line>
                      </svg>
                    </div>`}
                ${l?i.dy`<div class="circle-container solar">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")}</span
                      >
                      <div class="circle">
                        <ha-svg-icon .path=${"M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z"}></ha-svg-icon>
                        ${(0,s.uf)(k||0,this.hass.locale,{maximumFractionDigits:1})}
                        kWh
                      </div>
                    </div>`:u||p?i.dy`<div class="spacer"></div>`:""}
                ${u?i.dy`<div class="circle-container gas">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.gas")}</span
                      >
                      <div class="circle">
                        <ha-svg-icon .path=${"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z"}></ha-svg-icon>
                        ${(0,s.uf)(g||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${(0,a.vE)(this.hass,r,this._data.statsMetadata)||"m³"}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 0 v30" id="gas" />
                        ${g?i.YP`<circle
                    r="1"
                    class="gas"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#gas" />
                    </animateMotion>
                  </circle>`:""}
                      </svg>
                    </div>`:p?i.dy`<div class="circle-container water">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.water")}</span
                      >
                      <div class="circle">
                        <ha-svg-icon .path=${v}></ha-svg-icon>
                        ${(0,s.uf)(m||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${(0,a.b)(this.hass)||"m³"}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 0 v30" id="water" />
                        ${m?i.YP`<circle
                r="1"
                class="water"
                vector-effect="non-scaling-stroke"
              >
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="linear"
                >
                  <mpath xlink:href="#water" />
                </animateMotion>
              </circle>`:""}
                      </svg>
                    </div>`:i.dy`<div class="spacer"></div>`}
              </div>`:""}
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                <ha-svg-icon .path=${"M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z"}></ha-svg-icon>
                ${null!==C?i.dy`<span class="return">
                      <ha-svg-icon
                        class="small"
                        .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
                      ></ha-svg-icon
                      >${(0,s.uf)(C,this.hass.locale,{maximumFractionDigits:1})}
                      kWh
                    </span>`:""}
                <span class="consumption">
                  ${f?i.dy`<ha-svg-icon
                        class="small"
                        .path=${"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}
                      ></ha-svg-icon>`:""}${(0,s.uf)(h,this.hass.locale,{maximumFractionDigits:1})}
                  kWh
                </span>
              </div>
              <span class="label"
                >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")}</span
              >
            </div>
            <div class="circle-container home">
              <div
                class="circle ${(0,o.$)({border:void 0===T&&void 0===z})}"
              >
                <ha-svg-icon .path=${"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}></ha-svg-icon>
                ${(0,s.uf)(D,this.hass.locale,{maximumFractionDigits:1})}
                kWh
                ${void 0!==T||void 0!==z?i.dy`<svg>
                      ${void 0!==T?i.YP`<circle
                            class="solar"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${T} ${_-T}"
                            shape-rendering="geometricPrecision"
                            stroke-dashoffset="-${_-T}"
                          />`:""}
                      ${H?i.YP`<circle
                            class="battery"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${H} ${_-H}"
                            stroke-dashoffset="-${_-H-(T||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                      ${z?i.YP`<circle
                            class="low-carbon"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${z} ${_-z}"
                            stroke-dashoffset="-${_-z-(H||0)-(T||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                      <circle
                        class="grid"
                        cx="40"
                        cy="40"
                        r="38"
                        stroke-dasharray="${null!==(t=O)&&void 0!==t?t:_-T-(H||0)} ${void 0!==O?_-O:T+(H||0)}"
                        stroke-dashoffset="0"
                        shape-rendering="geometricPrecision"
                      />
                    </svg>`:""}
              </div>
              ${u&&p?"":i.dy`<span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home")}</span
                  >`}
            </div>
          </div>
          ${d||u&&p?i.dy`<div class="row">
                <div class="spacer"></div>
                ${d?i.dy` <div class="circle-container battery">
                      <div class="circle">
                        <ha-svg-icon .path=${"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z"}></ha-svg-icon>
                        <span class="battery-in">
                          <ha-svg-icon
                            class="small"
                            .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
                          ></ha-svg-icon
                          >${(0,s.uf)(w||0,this.hass.locale,{maximumFractionDigits:1})}
                          kWh</span
                        >
                        <span class="battery-out">
                          <ha-svg-icon
                            class="small"
                            .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                          ></ha-svg-icon
                          >${(0,s.uf)(x||0,this.hass.locale,{maximumFractionDigits:1})}
                          kWh</span
                        >
                      </div>
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")}</span
                      >
                    </div>`:i.dy`<div class="spacer"></div>`}
                ${u&&p?i.dy`<div class="circle-container water bottom">
                      <svg width="80" height="30">
                        <path d="M40 30 v-30" id="water" />
                        ${m?i.YP`<circle
                    r="1"
                    class="water"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#water" />
                    </animateMotion>
                  </circle>`:""}
                      </svg>
                      <div class="circle">
                        <ha-svg-icon .path=${v}></ha-svg-icon>
                        ${(0,s.uf)(m||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${(0,a.b)(this.hass)||"m³"}
                      </div>
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.water")}</span
                      >
                    </div>`:i.dy`<div class="spacer"></div>`}
              </div>`:""}
          <div
            class="lines ${(0,o.$)({high:d||u&&p})}"
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              ${f&&l?i.YP`<path
                    id="return"
                    class="return"
                    d="M${d?45:47},0 v15 c0,${d?"35 -10,30 -30,30":"40 -10,35 -30,35"} h-20"
                    vector-effect="non-scaling-stroke"
                  ></path> `:""}
              ${l?i.YP`<path
                    id="solar"
                    class="solar"
                    d="M${d?55:53},0 v15 c0,${d?"35 10,30 30,30":"40 10,35 30,35"} h20"
                    vector-effect="non-scaling-stroke"
                  ></path>`:""}
              ${d?i.YP`<path
                    id="battery-house"
                    class="battery-house"
                    d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  <path
                    id="battery-grid"
                    class=${(0,o.$)({"battery-from-grid":Boolean($),"battery-to-grid":Boolean(P)})}
                    d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  `:""}
              ${d&&l?i.YP`<path
                    id="battery-solar"
                    class="battery-solar"
                    d="M50,0 V100"
                    vector-effect="non-scaling-stroke"
                  ></path>`:""}
              <path
                class="grid"
                id="grid"
                d="M0,${d?50:l?56:53} H100"
                vector-effect="non-scaling-stroke"
              ></path>
              ${C&&l?i.YP`<circle
                    r="1"
                    class="return"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-(C-(P||0))/Z*6}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#return" />
                    </animateMotion>
                  </circle>`:""}
              ${E?i.YP`<circle
                    r="1"
                    class="solar"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-E/Z*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#solar" />
                    </animateMotion>
                  </circle>`:""}
              ${L?i.YP`<circle
                    r="1"
                    class="grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-L/Z*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#grid" />
                    </animateMotion>
                  </circle>`:""}
              ${S?i.YP`<circle
                    r="1"
                    class="battery-solar"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-S/Z*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-solar" />
                    </animateMotion>
                  </circle>`:""}
              ${M?i.YP`<circle
                    r="1"
                    class="battery-house"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-M/Z*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-house" />
                    </animateMotion>
                  </circle>`:""}
              ${$?i.YP`<circle
                    r="1"
                    class="battery-from-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-$/Z*5}s"
                      repeatCount="indefinite"
                      keyPoints="1;0" keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-grid" />
                    </animateMotion>
                  </circle>`:""}
              ${P?i.YP`<circle
                    r="1"
                    class="battery-to-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-P/Z*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-grid" />
                    </animateMotion>
                  </circle>`:""}
            </svg>
          </div>
        </div>
        ${this._config.link_dashboard?i.dy`
              <div class="card-actions">
                <a href="/energy"
                  ><mwc-button>
                    ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
                  </mwc-button></a
                >
              </div>
            `:""}
      </ha-card>
    `}},{kind:"field",static:!0,key:"styles",value:()=>i.iv`
    :host {
      --mdc-icon-size: 24px;
    }
    ha-card {
      min-width: 210px;
    }
    .card-content {
      position: relative;
      direction: ltr;
    }
    .lines {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 146px;
      display: flex;
      justify-content: center;
      padding: 0 16px 16px;
      box-sizing: border-box;
    }
    .lines.high {
      bottom: 100px;
      height: 156px;
    }
    .lines svg {
      width: calc(100% - 160px);
      height: 100%;
      max-width: 340px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      max-width: 500px;
      margin: 0 auto;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .circle-container.low-carbon {
      margin-right: 4px;
    }
    .circle-container.solar {
      margin: 0 4px;
      height: 130px;
    }
    .circle-container.gas {
      margin-left: 4px;
      height: 130px;
    }
    .circle-container.water {
      margin-left: 4px;
      height: 130px;
    }
    .circle-container.water.bottom {
      position: relative;
      top: -20px;
      margin-bottom: -20px;
    }
    .circle-container.battery {
      height: 110px;
      justify-content: flex-end;
    }
    .spacer {
      width: 84px;
    }
    .circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 2px solid;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);
    }
    ha-svg-icon {
      padding-bottom: 2px;
    }
    ha-svg-icon.small {
      --mdc-icon-size: 12px;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
      opacity: 1;
    }
    line,
    path {
      stroke: var(--primary-text-color);
      stroke-width: 1;
      fill: none;
    }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .gas path,
    .gas circle {
      stroke: var(--energy-gas-color);
    }
    circle.gas {
      stroke-width: 4;
      fill: var(--energy-gas-color);
    }
    .gas .circle {
      border-color: var(--energy-gas-color);
    }
    .water path,
    .water circle {
      stroke: var(--energy-water-color);
    }
    circle.water {
      stroke-width: 4;
      fill: var(--energy-water-color);
    }
    .water .circle {
      border-color: var(--energy-water-color);
    }
    .low-carbon line {
      stroke: var(--energy-non-fossil-color);
    }
    .low-carbon .circle {
      border-color: var(--energy-non-fossil-color);
    }
    .low-carbon ha-svg-icon {
      color: var(--energy-non-fossil-color);
    }
    circle.low-carbon {
      stroke: var(--energy-non-fossil-color);
      fill: var(--energy-non-fossil-color);
    }
    .solar .circle {
      border-color: var(--energy-solar-color);
    }
    circle.solar,
    path.solar {
      stroke: var(--energy-solar-color);
    }
    circle.solar {
      stroke-width: 4;
      fill: var(--energy-solar-color);
    }
    .battery .circle {
      border-color: var(--energy-battery-in-color);
    }
    circle.battery,
    path.battery {
      stroke: var(--energy-battery-out-color);
    }
    path.battery-house,
    circle.battery-house {
      stroke: var(--energy-battery-out-color);
    }
    circle.battery-house {
      stroke-width: 4;
      fill: var(--energy-battery-out-color);
    }
    path.battery-solar,
    circle.battery-solar {
      stroke: var(--energy-battery-in-color);
    }
    circle.battery-solar {
      stroke-width: 4;
      fill: var(--energy-battery-in-color);
    }
    .battery-in {
      color: var(--energy-battery-in-color);
    }
    .battery-out {
      color: var(--energy-battery-out-color);
    }
    path.battery-from-grid {
      stroke: var(--energy-grid-consumption-color);
    }
    path.battery-to-grid {
      stroke: var(--energy-grid-return-color);
    }
    path.return,
    circle.return,
    circle.battery-to-grid {
      stroke: var(--energy-grid-return-color);
    }
    circle.return,
    circle.battery-to-grid {
      stroke-width: 4;
      fill: var(--energy-grid-return-color);
    }
    .return {
      color: var(--energy-grid-return-color);
    }
    .grid .circle {
      border-color: var(--energy-grid-consumption-color);
    }
    .consumption {
      color: var(--energy-grid-consumption-color);
    }
    circle.grid,
    circle.battery-from-grid,
    path.grid {
      stroke: var(--energy-grid-consumption-color);
    }
    circle.grid,
    circle.battery-from-grid {
      stroke-width: 4;
      fill: var(--energy-grid-consumption-color);
    }
    .home .circle {
      border-width: 0;
      border-color: var(--primary-color);
    }
    .home .circle.border {
      border-width: 2px;
    }
    .circle svg circle {
      animation: rotate-in 0.6s ease-in;
      transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;
      fill: none;
    }
    @keyframes rotate-in {
      from {
        stroke-dashoffset: 238.76104;
        stroke-dasharray: 238.76104;
      }
    }
    .card-actions a {
      text-decoration: none;
    }
  `}]}}),(0,l.f)(i.oi))}}]);
//# sourceMappingURL=59da6265.js.map