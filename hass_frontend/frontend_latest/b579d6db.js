"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[16938],{92306:(e,t,r)=>{r.d(t,{v:()=>s});const s=(e,t)=>{const r={};for(const s of e){const e=t(s);e in r?r[e].push(s):r[e]=[s]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>s});const s=async(e,t)=>new Promise((r=>{const s=t(e,(e=>{s(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>s,pB:()=>a,SO:()=>i,iJ:()=>n,Nn:()=>o,Ny:()=>l,T0:()=>c});const s=32143==r.j?["migration_error","setup_error","setup_retry"]:null,a=e=>e.callApi("GET","config/config_entries/entry"),i=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),n=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),o=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),l=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),c=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.a(e,(async e=>{r.d(t,{Bm:()=>y,o1:()=>b,iK:()=>g,rl:()=>v,P:()=>w,KU:()=>k,xZ:()=>E,gy:()=>C,ZC:()=>P,_Z:()=>$,Jj:()=>S,UB:()=>D,jB:()=>A,gM:()=>O,yT:()=>j,_n:()=>x,vR:()=>z,vE:()=>W});var s=r(4535),a=r(59699),i=r(27088),n=r(83008),o=r(70390),l=r(47538),c=r(97330),d=r(92306),u=r(11950),f=r(81582),h=r(74186),p=r(58763),m=e([p]);p=(m.then?await m:m)[0];const _=[],y=()=>({stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_to:null,entity_energy_price:null,number_energy_price:null}),g=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),v=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),w=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),k=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),E=e=>e.callWS({type:"energy/info"}),C=e=>e.callWS({type:"energy/validate"}),P=e=>e.callWS({type:"energy/get_prefs"}),$=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return T(e),r},S=e=>(0,d.v)(e.energy_sources,(e=>e.type)),T=e=>{_.forEach((t=>{const r=D(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},D=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];_.push(t.key);const d=(0,c._)(e.connection,r,(async()=>{if(d.prefs||(d.prefs=await P(e)),d._refreshTimeout&&clearTimeout(d._refreshTimeout),d._active&&(!d.end||d.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),d._refreshTimeout=window.setTimeout((()=>d.refresh()),e.getTime()-Date.now())}return(async(e,t,r,i)=>{const[n,o,l]=await Promise.all([(0,f.pB)(e),(0,u.l)(e.connection,h.LM),E(e)]),c=n.find((e=>"co2signal"===e.domain));let d;if(c)for(const t of o){if(t.config_entry_id!==c.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){d=r.entity_id;break}}const m=[],_=[];for(const e of t.energy_sources)if("solar"!==e.type)if("gas"!==e.type)if("battery"!==e.type){for(const t of e.flow_from){m.push(t.stat_energy_from),_.push(t.stat_energy_from),t.stat_cost&&_.push(t.stat_cost);const e=l.cost_sensors[t.stat_energy_from];e&&_.push(e)}for(const t of e.flow_to){_.push(t.stat_energy_to),t.stat_compensation&&_.push(t.stat_compensation);const e=l.cost_sensors[t.stat_energy_to];e&&_.push(e)}}else _.push(e.stat_energy_from),_.push(e.stat_energy_to);else{_.push(e.stat_energy_from),e.stat_cost&&_.push(e.stat_cost);const t=l.cost_sensors[e.stat_energy_from];t&&_.push(t)}else _.push(e.stat_energy_from);const y=(0,s.Z)(i||new Date,r),b=(0,a.Z)(r,-1),g=await(0,p.dL)(e,b,i,_,y>35?"month":y>2?"day":"hour");let v;return void 0!==d&&(v=await(async(e,t,r,s,a,i="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==a?void 0:a.toISOString(),energy_statistic_ids:r,co2_statistic_id:s,period:i}))(e,r,m,d,i,y>35?"month":y>2?"day":"hour")),Object.values(g).forEach((e=>{e.length&&new Date(e[0].start)>b&&e.unshift({...e[0],start:b.toISOString(),end:b.toISOString(),sum:0,state:0})})),{start:r,end:i,info:l,prefs:t,stats:g,co2SignalConfigEntry:c,co2SignalEntity:d,fossilEnergyConsumption:v}})(e,d.prefs,d.start,d.end)})),m=d.subscribe;d.subscribe=e=>{const t=m(e);return d._active++,()=>{d._active--,d._active<1&&(clearTimeout(d._refreshTimeout),d._refreshTimeout=void 0),t()}},d._active=0,d.prefs=t.prefs;const y=new Date;d.start=y.getHours()>0?(0,i.Z)():(0,n.Z)(),d.end=y.getHours()>0?(0,o.Z)():(0,l.Z)();const b=()=>{d._updatePeriodTimeout=window.setTimeout((()=>{d.start=(0,i.Z)(),d.end=(0,o.Z)(),b()}),(0,a.Z)((0,o.Z)(),1).getTime()-Date.now())};return b(),d.clearPrefs=()=>{d.prefs=void 0},d.setPeriod=(e,t)=>{var r;d.start=e,d.end=t,d.start.getTime()!==(0,i.Z)().getTime()||(null===(r=d.end)||void 0===r?void 0:r.getTime())!==(0,o.Z)().getTime()||d._updatePeriodTimeout?d._updatePeriodTimeout&&(clearTimeout(d._updatePeriodTimeout),d._updatePeriodTimeout=void 0):b()},d},A=e=>e.callWS({type:"energy/solar_forecast"}),O=["m³","ft³"],j=["kWh"],x=[...O,...j],z=(e,t)=>{for(const r of t.energy_sources){if("gas"!==r.type)continue;const t=e.states[r.stat_energy_from];if(t)return O.includes(t.attributes.unit_of_measurement)?"volume":"energy"}},W=(e,t)=>{for(const r of t.energy_sources){if("gas"!==r.type)continue;const t=e.states[r.stat_energy_from];if(null!=t&&t.attributes.unit_of_measurement)return"Wh"===t.attributes.unit_of_measurement?"kWh":t.attributes.unit_of_measurement}}}))},74186:(e,t,r)=>{r.d(t,{eD:()=>n,Mw:()=>o,vA:()=>l,L3:()=>c,Nv:()=>d,z3:()=>u,LM:()=>p});var s=r(97330);if(32143==r.j)var a=r(91741);var i=r(38346);const n=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class)),o=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),l=(e,t)=>{if(t.name)return t.name;const r=e.states[t.entity_id];return r?(0,a.C)(r):t.entity_id},c=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),d=(e,t,r)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...r}),u=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),f=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),h=(e,t)=>e.subscribeEvents((0,i.D)((()=>f(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),p=(e,t)=>(0,s.B)("_entityRegistry",f,h,e,t)},73826:(e,t,r)=>{r.d(t,{f:()=>m});var s=r(5701);function a(e,t,r,s){var a=i();if(s)for(var d=0;d<s.length;d++)a=s[d](a);var u=t((function(e){a.initializeInstanceElements(e,f.elements)}),r),f=a.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},s=0;s<e.length;s++){var a,i=e[s];if("method"===i.kind&&(a=t.find(r)))if(c(i.descriptor)||c(a.descriptor)){if(l(i)||l(a))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");a.descriptor=i.descriptor}else{if(l(i)){if(l(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");a.decorators=i.decorators}o(i,a)}else t.push(i)}return t}(u.d.map(n)),e);return a.initializeClassElements(u.F,f.elements),a.runClassFinishers(u.F,f.finishers)}function i(){i=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(s){t.forEach((function(t){var a=t.placement;if(t.kind===s&&("static"===a||"prototype"===a)){var i="static"===a?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var s=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===s?void 0:s.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],s=[],a={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,a)}),this),e.forEach((function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,a);r.push(t.element),r.push.apply(r,t.extras),s.push.apply(s,t.finishers)}),this),!t)return{elements:r,finishers:s};var i=this.decorateConstructor(r,t);return s.push.apply(s,i.finishers),i.finishers=s,i},addElementPlacement:function(e,t,r){var s=t[e.placement];if(!r&&-1!==s.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");s.push(e.key)},decorateElement:function(e,t){for(var r=[],s=[],a=e.decorators,i=a.length-1;i>=0;i--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,a[i])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&s.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:s,extras:r}},decorateConstructor:function(e,t){for(var r=[],s=t.length-1;s>=0;s--){var a=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[s])(a)||a);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),s=String(e.placement);if("static"!==s&&"prototype"!==s&&"own"!==s)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+s+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:s,descriptor:Object.assign({},a)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var s=(0,t[r])(e);if(void 0!==s){if("function"!=typeof s)throw new TypeError("Finishers must return a constructor.");e=s}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function n(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var s={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(s.decorators=e.decorators),"field"===e.kind&&(s.initializer=e.value),s}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function h(e,t,r){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var s=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(s){var a=Object.getOwnPropertyDescriptor(s,t);return a.get?a.get.call(r):a.value}},h(e,t,r||e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}const m=e=>a(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){h(p(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(h(p(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){h(p(r.prototype),"updated",this).call(this,e),e.has("hass")&&this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},16938:(e,t,r)=>{r.a(e,(async e=>{r.r(t),r.d(t,{HuiEnergySourcesTableCard:()=>$});var s=r(40521),a=r(37500),i=r(26767),n=r(5701),o=r(17717),l=r(47501),c=r(15838),d=r(89525),u=r(91741),f=r(18457),h=r(5372),p=(r(22098),r(55424)),m=r(58763),_=r(73826),y=e([m,p,h]);function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(s){t.forEach((function(t){var a=t.placement;if(t.kind===s&&("static"===a||"prototype"===a)){var i="static"===a?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var s=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===s?void 0:s.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],s=[],a={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,a)}),this),e.forEach((function(e){if(!w(e))return r.push(e);var t=this.decorateElement(e,a);r.push(t.element),r.push.apply(r,t.extras),s.push.apply(s,t.finishers)}),this),!t)return{elements:r,finishers:s};var i=this.decorateConstructor(r,t);return s.push.apply(s,i.finishers),i.finishers=s,i},addElementPlacement:function(e,t,r){var s=t[e.placement];if(!r&&-1!==s.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");s.push(e.key)},decorateElement:function(e,t){for(var r=[],s=[],a=e.decorators,i=a.length-1;i>=0;i--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,a[i])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&s.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:s,extras:r}},decorateConstructor:function(e,t){for(var r=[],s=t.length-1;s>=0;s--){var a=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[s])(a)||a);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=C(e.key),s=String(e.placement);if("static"!==s&&"prototype"!==s&&"own"!==s)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+s+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:s,descriptor:Object.assign({},a)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var s=(0,t[r])(e);if(void 0!==s){if("function"!=typeof s)throw new TypeError("Finishers must return a constructor.");e=s}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function g(e){var t,r=C(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var s={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(s.decorators=e.decorators),"field"===e.kind&&(s.initializer=e.value),s}function v(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function k(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}[m,p,h]=y.then?await y:y;let $=function(e,t,r,s){var a=b();if(s)for(var i=0;i<s.length;i++)a=s[i](a);var n=t((function(e){a.initializeInstanceElements(e,o.elements)}),r),o=a.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},s=0;s<e.length;s++){var a,i=e[s];if("method"===i.kind&&(a=t.find(r)))if(k(i.descriptor)||k(a.descriptor)){if(w(i)||w(a))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");a.descriptor=i.descriptor}else{if(w(i)){if(w(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");a.decorators=i.decorators}v(i,a)}else t.push(i)}return t}(n.d.map(g)),e);return a.initializeClassElements(n.F,o.elements),a.runClassFinishers(n.F,o.finishers)}([(0,i.M)("hui-energy-sources-table-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_data",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,p.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){var e,t,r,s,i,n,o;if(!this.hass||!this._config)return a.dy``;if(!this._data)return a.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;let h=0,_=0,y=0,b=0,g=0,v=0;const w=(0,p.Jj)(this._data.prefs),k=getComputedStyle(this),E=k.getPropertyValue("--energy-solar-color").trim(),C=k.getPropertyValue("--energy-battery-out-color").trim(),P=k.getPropertyValue("--energy-battery-in-color").trim(),$=k.getPropertyValue("--energy-grid-return-color").trim(),S=k.getPropertyValue("--energy-grid-consumption-color").trim(),T=k.getPropertyValue("--energy-gas-color").trim(),D=(null===(e=w.grid)||void 0===e?void 0:e[0].flow_from.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price)))||(null===(t=w.grid)||void 0===t?void 0:t[0].flow_to.some((e=>e.stat_compensation||e.entity_energy_price||e.number_energy_price)))||(null===(r=w.gas)||void 0===r?void 0:r.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price))),A=(0,p.vE)(this.hass,this._data.prefs)||"";return a.dy` <ha-card>
      ${this._config.title?a.dy`<h1 class="card-header">${this._config.title}</h1>`:""}
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
                <th
                  class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                  role="columnheader"
                  scope="col"
                >
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.energy")}
                </th>
                ${D?a.dy` <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                      role="columnheader"
                      scope="col"
                    >
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.cost")}
                    </th>`:""}
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${null===(s=w.solar)||void 0===s?void 0:s.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],s=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0;y+=s;const i=t>0?this.hass.themes.darkMode?(0,d.C)((0,c.Rw)((0,c.wK)(E)),t):(0,d.W)((0,c.Rw)((0,c.wK)(E)),t):void 0,n=i?(0,c.CO)((0,c.p3)(i)):E;return a.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,l.V)({borderColor:n,backgroundColor:n+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${r?(0,u.C)(r):e.stat_energy_from}
                  </th>
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,f.uf)(s,this.hass.locale)} kWh
                  </td>
                  ${D?a.dy`<td class="mdc-data-table__cell"></td>`:""}
                </tr>`}))}
              ${w.solar?a.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      Solar total
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(y,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`:""}
              ${null===(i=w.battery)||void 0===i?void 0:i.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],s=this.hass.states[e.stat_energy_to],i=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0,n=(0,m.Kj)(this._data.stats[e.stat_energy_to])||0;b+=i-n;const o=t>0?this.hass.themes.darkMode?(0,d.C)((0,c.Rw)((0,c.wK)(C)),t):(0,d.W)((0,c.Rw)((0,c.wK)(C)),t):void 0,h=o?(0,c.CO)((0,c.p3)(o)):C,p=t>0?this.hass.themes.darkMode?(0,d.C)((0,c.Rw)((0,c.wK)(P)),t):(0,d.W)((0,c.Rw)((0,c.wK)(P)),t):void 0,_=p?(0,c.CO)((0,c.p3)(p)):P;return a.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,l.V)({borderColor:h,backgroundColor:h+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${r?(0,u.C)(r):e.stat_energy_from}
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(i,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>
                  <tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,l.V)({borderColor:_,backgroundColor:_+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${s?(0,u.C)(s):e.stat_energy_from}
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(-1*n,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`}))}
              ${w.battery?a.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.battery_total")}
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(b,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`:""}
              ${null===(n=w.grid)||void 0===n?void 0:n.map((e=>a.dy`${e.flow_from.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],s=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0;h+=s;const i=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],n=i?(0,m.Kj)(this._data.stats[i])||0:null;null!==n&&(_+=n);const o=t>0?this.hass.themes.darkMode?(0,d.C)((0,c.Rw)((0,c.wK)(S)),t):(0,d.W)((0,c.Rw)((0,c.wK)(S)),t):void 0,p=o?(0,c.CO)((0,c.p3)(o)):S;return a.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,l.V)({borderColor:p,backgroundColor:p+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${r?(0,u.C)(r):e.stat_energy_from}
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(s,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${null!==n?(0,f.uf)(n,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                        </td>`:""}
                  </tr>`}))}
                ${e.flow_to.map(((e,t)=>{const r=this.hass.states[e.stat_energy_to],s=-1*((0,m.Kj)(this._data.stats[e.stat_energy_to])||0);h+=s;const i=e.stat_compensation||this._data.info.cost_sensors[e.stat_energy_to],n=i?-1*((0,m.Kj)(this._data.stats[i])||0):null;null!==n&&(_+=n);const o=t>0?this.hass.themes.darkMode?(0,d.C)((0,c.Rw)((0,c.wK)($)),t):(0,d.W)((0,c.Rw)((0,c.wK)($)),t):void 0,p=o?(0,c.CO)((0,c.p3)(o)):$;return a.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,l.V)({borderColor:p,backgroundColor:p+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${r?(0,u.C)(r):e.stat_energy_to}
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(s,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${null!==n?(0,f.uf)(n,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                        </td>`:""}
                  </tr>`}))}`))}
              ${w.grid?a.dy` <tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.grid_total")}
                    </th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(h,this.hass.locale)} kWh
                    </td>
                    ${D?a.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,f.uf)(_,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${null===(o=w.gas)||void 0===o?void 0:o.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],s=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0;g+=s;const i=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],n=i?(0,m.Kj)(this._data.stats[i])||0:null;null!==n&&(v+=n);const o=t>0?this.hass.themes.darkMode?(0,d.C)((0,c.Rw)((0,c.wK)(T)),t):(0,d.W)((0,c.Rw)((0,c.wK)(T)),t):void 0,h=o?(0,c.CO)((0,c.p3)(o)):T;return a.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,l.V)({borderColor:h,backgroundColor:h+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${r?(0,u.C)(r):e.stat_energy_from}
                  </th>
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,f.uf)(s,this.hass.locale)} ${A}
                  </td>
                  ${D?a.dy`<td
                        class="mdc-data-table__cell mdc-data-table__cell--numeric"
                      >
                        ${null!==n?(0,f.uf)(n,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                      </td>`:""}
                </tr>`}))}
              ${w.gas?a.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">Gas total</th>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(g,this.hass.locale)} ${A}
                    </td>
                    ${D?a.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,f.uf)(v,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${v&&_?a.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.total_costs")}
                    </th>
                    <td class="mdc-data-table__cell"></td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,f.uf)(v+_,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                    </td>
                  </tr>`:""}
            </tbody>
          </table>
        </div>
      </div>
    </ha-card>`}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`
      ${(0,a.$m)(s)}
      .mdc-data-table {
        width: 100%;
        border: 0;
      }
      .mdc-data-table__header-cell,
      .mdc-data-table__cell {
        color: var(--primary-text-color);
        border-bottom-color: var(--divider-color);
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
      }
      .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        height: 16px;
        width: 32px;
      }
    `}}]}}),(0,_.f)(a.oi))}))}}]);
//# sourceMappingURL=b579d6db.js.map