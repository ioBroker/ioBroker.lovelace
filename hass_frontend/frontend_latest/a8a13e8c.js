"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9928],{23682:(e,t,r)=>{function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:()=>i})},90394:(e,t,r)=>{function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,{Z:()=>i})},59699:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(90394),n=r(39244),o=r(23682),s=36e5;function a(e,t){(0,o.Z)(2,arguments);var r=(0,i.Z)(t);return(0,n.Z)(e,r*s)}},39244:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(90394),n=r(34327),o=r(23682);function s(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(e).getTime(),s=(0,i.Z)(t);return new Date(r+s)}},4535:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(34327);function n(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var o=r(59429),s=r(23682),a=864e5;function c(e,t){(0,s.Z)(2,arguments);var r=(0,o.Z)(e),i=(0,o.Z)(t),c=r.getTime()-n(r),l=i.getTime()-n(i);return Math.round((c-l)/a)}function l(e,t){var r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}function d(e,t){(0,s.Z)(2,arguments);var r=(0,i.Z)(e),n=(0,i.Z)(t),o=l(r,n),a=Math.abs(c(r,n));r.setDate(r.getDate()-o*a);var d=Number(l(r,n)===-o),u=o*(a-d);return 0===u?0:u}},93752:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e){(0,n.Z)(1,arguments);var t=(0,i.Z)(e);return t.setHours(23,59,59,999),t}},70390:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(93752);function n(){return(0,i.Z)(Date.now())}},47538:(e,t,r)=>{function i(){var e=new Date,t=e.getFullYear(),r=e.getMonth(),i=e.getDate(),n=new Date(0);return n.setFullYear(t,r,i-1),n.setHours(23,59,59,999),n}r.d(t,{Z:()=>i})},59429:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e){(0,n.Z)(1,arguments);var t=(0,i.Z)(e);return t.setHours(0,0,0,0),t}},27088:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(59429);function n(){return(0,i.Z)(Date.now())}},83008:(e,t,r)=>{function i(){var e=new Date,t=e.getFullYear(),r=e.getMonth(),i=e.getDate(),n=new Date(0);return n.setFullYear(t,r,i-1),n.setHours(0,0,0,0),n}r.d(t,{Z:()=>i})},34327:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(23682);function n(e){(0,i.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},92306:(e,t,r)=>{r.d(t,{v:()=>i});const i=(e,t)=>{const r={};for(const i of e){const e=t(i);e in r?r[e].push(i):r[e]=[i]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>i});const i=async(e,t)=>new Promise((r=>{const i=t(e,(e=>{i(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>i,pB:()=>n,SO:()=>o,iJ:()=>s,Nn:()=>a,Ny:()=>c,T0:()=>l});const i=32143==r.j?["migration_error","setup_error","setup_retry"]:null,n=e=>e.callApi("GET","config/config_entries/entry"),o=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),s=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),a=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),c=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),l=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.a(e,(async e=>{r.d(t,{Bm:()=>g,o1:()=>v,iK:()=>_,rl:()=>b,P:()=>k,KU:()=>w,xZ:()=>E,gy:()=>C,ZC:()=>x,_Z:()=>$,Jj:()=>S,UB:()=>P,jB:()=>D,gM:()=>L,yT:()=>T,_n:()=>Z,vR:()=>H,vE:()=>j});var i=r(4535),n=r(59699),o=r(27088),s=r(83008),a=r(70390),c=r(47538),l=r(97330),d=r(92306),u=r(11950),f=r(81582),p=r(74186),h=r(58763),y=e([h]);h=(y.then?await y:y)[0];const m=[],g=()=>({stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),v=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_to:null,entity_energy_price:null,number_energy_price:null}),_=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),b=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),k=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),w=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),E=e=>e.callWS({type:"energy/info"}),C=e=>e.callWS({type:"energy/validate"}),x=e=>e.callWS({type:"energy/get_prefs"}),$=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return M(e),r},S=e=>(0,d.v)(e.energy_sources,(e=>e.type)),M=e=>{m.forEach((t=>{const r=P(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},P=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];m.push(t.key);const d=(0,l._)(e.connection,r,(async()=>{if(d.prefs||(d.prefs=await x(e)),d._refreshTimeout&&clearTimeout(d._refreshTimeout),d._active&&(!d.end||d.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),d._refreshTimeout=window.setTimeout((()=>d.refresh()),e.getTime()-Date.now())}return(async(e,t,r,o)=>{const[s,a,c]=await Promise.all([(0,f.pB)(e),(0,u.l)(e.connection,p.LM),E(e)]),l=s.find((e=>"co2signal"===e.domain));let d;if(l)for(const t of a){if(t.config_entry_id!==l.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){d=r.entity_id;break}}const y=[],m=[];for(const e of t.energy_sources)if("solar"!==e.type)if("gas"!==e.type)if("battery"!==e.type){for(const t of e.flow_from){y.push(t.stat_energy_from),m.push(t.stat_energy_from),t.stat_cost&&m.push(t.stat_cost);const e=c.cost_sensors[t.stat_energy_from];e&&m.push(e)}for(const t of e.flow_to){m.push(t.stat_energy_to),t.stat_compensation&&m.push(t.stat_compensation);const e=c.cost_sensors[t.stat_energy_to];e&&m.push(e)}}else m.push(e.stat_energy_from),m.push(e.stat_energy_to);else{m.push(e.stat_energy_from),e.stat_cost&&m.push(e.stat_cost);const t=c.cost_sensors[e.stat_energy_from];t&&m.push(t)}else m.push(e.stat_energy_from);const g=(0,i.Z)(o||new Date,r),v=(0,n.Z)(r,-1),_=await(0,h.dL)(e,v,o,m,g>35?"month":g>2?"day":"hour");let b;return void 0!==d&&(b=await(async(e,t,r,i,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:r,co2_statistic_id:i,period:o}))(e,r,y,d,o,g>35?"month":g>2?"day":"hour")),Object.values(_).forEach((e=>{e.length&&new Date(e[0].start)>v&&e.unshift({...e[0],start:v.toISOString(),end:v.toISOString(),sum:0,state:0})})),{start:r,end:o,info:c,prefs:t,stats:_,co2SignalConfigEntry:l,co2SignalEntity:d,fossilEnergyConsumption:b}})(e,d.prefs,d.start,d.end)})),y=d.subscribe;d.subscribe=e=>{const t=y(e);return d._active++,()=>{d._active--,d._active<1&&(clearTimeout(d._refreshTimeout),d._refreshTimeout=void 0),t()}},d._active=0,d.prefs=t.prefs;const g=new Date;d.start=g.getHours()>0?(0,o.Z)():(0,s.Z)(),d.end=g.getHours()>0?(0,a.Z)():(0,c.Z)();const v=()=>{d._updatePeriodTimeout=window.setTimeout((()=>{d.start=(0,o.Z)(),d.end=(0,a.Z)(),v()}),(0,n.Z)((0,a.Z)(),1).getTime()-Date.now())};return v(),d.clearPrefs=()=>{d.prefs=void 0},d.setPeriod=(e,t)=>{var r;d.start=e,d.end=t,d.start.getTime()!==(0,o.Z)().getTime()||(null===(r=d.end)||void 0===r?void 0:r.getTime())!==(0,a.Z)().getTime()||d._updatePeriodTimeout?d._updatePeriodTimeout&&(clearTimeout(d._updatePeriodTimeout),d._updatePeriodTimeout=void 0):v()},d},D=e=>e.callWS({type:"energy/solar_forecast"}),L=["m³","ft³"],T=["kWh"],Z=[...L,...T],H=(e,t)=>{for(const r of t.energy_sources){if("gas"!==r.type)continue;const t=e.states[r.stat_energy_from];if(t)return L.includes(t.attributes.unit_of_measurement)?"volume":"energy"}},j=(e,t)=>{for(const r of t.energy_sources){if("gas"!==r.type)continue;const t=e.states[r.stat_energy_from];if(null!=t&&t.attributes.unit_of_measurement)return"Wh"===t.attributes.unit_of_measurement?"kWh":t.attributes.unit_of_measurement}}}))},74186:(e,t,r)=>{r.d(t,{eD:()=>s,Mw:()=>a,vA:()=>c,L3:()=>l,Nv:()=>d,z3:()=>u,LM:()=>h});var i=r(97330);if(32143==r.j)var n=r(91741);var o=r(38346);const s=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class)),a=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),c=(e,t)=>{if(t.name)return t.name;const r=e.states[t.entity_id];return r?(0,n.C)(r):t.entity_id},l=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),d=(e,t,r)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...r}),u=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),f=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),p=(e,t)=>e.subscribeEvents((0,o.D)((()=>f(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),h=(e,t)=>(0,i.B)("_entityRegistry",f,p,e,t)},58763:(e,t,r)=>{r.a(e,(async e=>{r.d(t,{vq:()=>l,_J:()=>d,Nu:()=>f,uR:()=>p,dL:()=>h,h_:()=>y,Cj:()=>m,hN:()=>g,Kj:()=>v,q6:()=>_,Nw:()=>b});var i=r(29171),n=r(22311),o=r(91741),s=e([i]);i=(s.then?await s:s)[0];const a=["climate","humidifier","water_heater"],c=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],l=(e,t,r,i,n=!1,o,s=!0)=>{let a="history/period";return r&&(a+="/"+r.toISOString()),a+="?filter_entity_id="+t,i&&(a+="&end_time="+i.toISOString()),n&&(a+="&skip_initial_state"),void 0!==o&&(a+=`&significant_changes_only=${Number(o)}`),s&&(a+="&minimal_response"),e.callApi("GET",a)},d=(e,t,r,i)=>e.callApi("GET",`history/period/${t.toISOString()}?end_time=${r.toISOString()}&minimal_response${i?`&filter_entity_id=${i}`:""}`),u=(e,t)=>e.state===t.state&&(!e.attributes||!t.attributes||c.every((r=>e.attributes[r]===t.attributes[r]))),f=(e,t,r)=>{const s={},l=[];if(!t)return{line:[],timeline:[]};t.forEach((t=>{if(0===t.length)return;const a=t.find((e=>e.attributes&&("unit_of_measurement"in e.attributes||"state_class"in e.attributes)));let c;c=a?a.attributes.unit_of_measurement||" ":{climate:e.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:e.config.unit_system.temperature}[(0,n.N)(t[0])],c?c in s?s[c].push(t):s[c]=[t]:l.push(((e,t,r)=>{const n=[],s=r.length-1;for(const o of r)n.length>0&&o.state===n[n.length-1].state||(o.entity_id||(o.attributes=r[s].attributes,o.entity_id=r[s].entity_id),n.push({state_localize:(0,i.D)(e,o,t),state:o.state,last_changed:o.last_changed}));return{name:(0,o.C)(r[0]),entity_id:r[0].entity_id,data:n}})(r,e.locale,t))}));return{line:Object.keys(s).map((e=>((e,t)=>{const r=[];for(const e of t){const t=e[e.length-1],i=(0,n.N)(t),s=[];for(const t of e){let e;if(a.includes(i)){e={state:t.state,last_changed:t.last_updated,attributes:{}};for(const r of c)r in t.attributes&&(e.attributes[r]=t.attributes[r])}else e=t;s.length>1&&u(e,s[s.length-1])&&u(e,s[s.length-2])||s.push(e)}r.push({domain:i,name:(0,o.C)(t),entity_id:t.entity_id,states:s})}return{unit:e,identifier:t.map((e=>e[0].entity_id)).join(""),data:r}})(e,s[e]))),timeline:l}},p=(e,t)=>e.callWS({type:"history/list_statistic_ids",statistic_type:t}),h=(e,t,r,i,n="hour")=>e.callWS({type:"history/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:i,period:n}),y=e=>e.callWS({type:"recorder/validate_statistics"}),m=(e,t,r)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r}),g=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),v=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const r=e[0].sum;return null===r?t:t-r},_=(e,t)=>{let r=null;for(const i of t){if(!(i in e))continue;const t=v(e[i]);null!==t&&(null===r?r=t:r+=t)}return r},b=(e,t)=>e.some((e=>null!==e[t]))}))},73826:(e,t,r)=>{r.d(t,{f:()=>y});var i=r(5701);function n(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var u=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(l(o.descriptor)||l(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(u.d.map(s)),e);return n.initializeClassElements(u.F,f.elements),n.runClassFinishers(u.F,f.finishers)}function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function p(e,t,r){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},p(e,t,r||e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}const y=e=>n(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){p(h(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(p(h(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){p(h(r.prototype),"updated",this).call(this,e),e.has("hass")&&this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},9928:(e,t,r)=>{r.a(e,(async e=>{r.r(t);var i=r(37500),n=r(26767),o=r(5701),s=r(17717),a=r(228),c=(r(53918),r(18457)),l=(r(22098),r(52039),r(55424)),d=r(58763),u=r(73826),f=e([l,d]);function p(){p=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=_(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function h(e){var t,r=_(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function g(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function _(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}[l,d]=f.then?await f:f;const k=238.76104;!function(e,t,r,i){var n=p();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(g(o.descriptor)||g(n.descriptor)){if(m(o)||m(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(m(o)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}y(o,n)}else t.push(o)}return t}(s.d.map(h)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.M)("hui-energy-distribution-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.S)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.S)()],key:"_data",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,l.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config)return i.dy``;if(!this._data)return i.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const r=this._data.prefs,n=(0,l.Jj)(r),o=void 0!==n.solar,s=void 0!==n.battery,u=void 0!==n.gas,f=n.grid[0].flow_to.length>0,p=null!==(e=(0,d.q6)(this._data.stats,n.grid[0].flow_from.map((e=>e.stat_energy_from))))&&void 0!==e?e:0;let h=null;var y;u&&(h=null!==(y=(0,d.q6)(this._data.stats,n.gas.map((e=>e.stat_energy_from))))&&void 0!==y?y:0);let m=null;o&&(m=(0,d.q6)(this._data.stats,n.solar.map((e=>e.stat_energy_from)))||0);let g=null,v=null;s&&(g=(0,d.q6)(this._data.stats,n.battery.map((e=>e.stat_energy_to)))||0,v=(0,d.q6)(this._data.stats,n.battery.map((e=>e.stat_energy_from)))||0);let _=null;f&&(_=(0,d.q6)(this._data.stats,n.grid[0].flow_to.map((e=>e.stat_energy_to)))||0);let b=null;o&&(b=(m||0)-(_||0)-(g||0));let w=null,E=null;null!==b&&b<0&&(s&&(w=-1*b,w>p&&(E=Math.min(0,w-p),w=p)),b=0);let C=null;o&&s?(E||(E=Math.max(0,(_||0)-(m||0)-(g||0)-(w||0))),C=g-(w||0)):!o&&s&&(E=_);let x=null;s&&(x=(v||0)-(E||0));const $=Math.max(0,p-(w||0)),S=Math.max(0,$+(b||0)+(x||0));let M,P,D,L,T;o&&(M=k*(b/S)),x&&(P=k*(x/S));let Z="https://www.electricitymap.org";if(this._data.co2SignalEntity&&this._data.fossilEnergyConsumption){const e=Object.values(this._data.fossilEnergyConsumption).reduce(((e,t)=>e+t),0),t=this.hass.states[this._data.co2SignalEntity];if(null!=t&&t.attributes.country_code&&(Z+=`/zone/${t.attributes.country_code}`),null!==e){let t;D=p-e,t=$!==p?e*($/p):e,T=k*(t/S),L=k-(M||0)-(P||0)-T}}const H=$+(b||0)+(_?_-(E||0):0)+(C||0)+(x||0)+(w||0)+(E||0);return i.dy`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          ${void 0!==D||o||u?i.dy`<div class="row">
                ${void 0===D?i.dy`<div class="spacer"></div>`:i.dy`<div class="circle-container low-carbon">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.non_fossil")}</span
                      >
                      <a
                        class="circle"
                        href=${Z}
                        target="_blank"
                        rel="noopener no referrer"
                      >
                        <ha-svg-icon .path=${"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"}></ha-svg-icon>
                        ${D?(0,c.uf)(D,this.hass.locale,{maximumFractionDigits:1}):"-"}
                        kWh
                      </a>
                      <svg width="80" height="30">
                        <line x1="40" y1="0" x2="40" y2="30"></line>
                      </svg>
                    </div>`}
                ${o?i.dy`<div class="circle-container solar">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")}</span
                      >
                      <div class="circle">
                        <ha-svg-icon .path=${"M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z"}></ha-svg-icon>
                        ${(0,c.uf)(m||0,this.hass.locale,{maximumFractionDigits:1})}
                        kWh
                      </div>
                    </div>`:u?i.dy`<div class="spacer"></div>`:""}
                ${u?i.dy`<div class="circle-container gas">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.gas")}</span
                      >
                      <div class="circle">
                        <ha-svg-icon .path=${"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z"}></ha-svg-icon>
                        ${(0,c.uf)(h||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${(0,l.vE)(this.hass,r)||"m³"}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 0 v30" id="gas" />
                        ${h?i.YP`<circle
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
                    </div>`:i.dy`<div class="spacer"></div>`}
              </div>`:""}
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                <ha-svg-icon .path=${"M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z"}></ha-svg-icon>
                ${null!==_?i.dy`<span class="return">
                      <ha-svg-icon
                        class="small"
                        .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
                      ></ha-svg-icon
                      >${(0,c.uf)(_,this.hass.locale,{maximumFractionDigits:1})}
                      kWh
                    </span>`:""}
                <span class="consumption">
                  ${f?i.dy`<ha-svg-icon
                        class="small"
                        .path=${"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}
                      ></ha-svg-icon>`:""}${(0,c.uf)(p,this.hass.locale,{maximumFractionDigits:1})}
                  kWh
                </span>
              </div>
              <span class="label"
                >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")}</span
              >
            </div>
            <div class="circle-container home">
              <div
                class="circle ${(0,a.$)({border:void 0===M&&void 0===L})}"
              >
                <ha-svg-icon .path=${"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}></ha-svg-icon>
                ${(0,c.uf)(S,this.hass.locale,{maximumFractionDigits:1})}
                kWh
                ${void 0!==M||void 0!==L?i.dy`<svg>
                      ${void 0!==M?i.YP`<circle
                            class="solar"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${M} ${k-M}"
                            shape-rendering="geometricPrecision"
                            stroke-dashoffset="-${k-M}"
                          />`:""}
                      ${P?i.YP`<circle
                            class="battery"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${P} ${k-P}"
                            stroke-dashoffset="-${k-P-(M||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                      ${L?i.YP`<circle
                            class="low-carbon"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${L} ${k-L}"
                            stroke-dashoffset="-${k-L-(P||0)-(M||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                      <circle
                        class="grid"
                        cx="40"
                        cy="40"
                        r="38"
                        stroke-dasharray="${null!==(t=T)&&void 0!==t?t:k-M-(P||0)} ${void 0!==T?k-T:M+(P||0)}"
                        stroke-dashoffset="0"
                        shape-rendering="geometricPrecision"
                      />
                    </svg>`:""}
              </div>
              <span class="label"
                >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home")}</span
              >
            </div>
          </div>
          ${s?i.dy`<div class="row">
                <div class="spacer"></div>
                <div class="circle-container battery">
                  <div class="circle">
                    <ha-svg-icon .path=${"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z"}></ha-svg-icon>
                    <span class="battery-in">
                      <ha-svg-icon
                        class="small"
                        .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
                      ></ha-svg-icon
                      >${(0,c.uf)(g||0,this.hass.locale,{maximumFractionDigits:1})}
                      kWh</span
                    >
                    <span class="battery-out">
                      <ha-svg-icon
                        class="small"
                        .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                      ></ha-svg-icon>
                      ${(0,c.uf)(v||0,this.hass.locale,{maximumFractionDigits:1})}
                      kWh</span
                    >
                  </div>
                  <span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")}</span
                  >
                </div>
                <div class="spacer"></div>
              </div>`:""}
          <div class="lines ${(0,a.$)({battery:s})}">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              ${f&&o?i.YP`<path
                    id="return"
                    class="return"
                    d="M${s?45:47},0 v15 c0,${s?"35 -10,30 -30,30":"40 -10,35 -30,35"} h-20"
                    vector-effect="non-scaling-stroke"
                  ></path> `:""}
              ${o?i.YP`<path
                    id="solar"
                    class="solar"
                    d="M${s?55:53},0 v15 c0,${s?"35 10,30 30,30":"40 10,35 30,35"} h20"
                    vector-effect="non-scaling-stroke"
                  ></path>`:""}
              ${s?i.YP`<path
                    id="battery-house"
                    class="battery-house"
                    d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  <path
                    id="battery-grid"
                    class=${(0,a.$)({"battery-from-grid":Boolean(w),"battery-to-grid":Boolean(E)})}
                    d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  `:""}
              ${s&&o?i.YP`<path
                    id="battery-solar"
                    class="battery-solar"
                    d="M50,0 V100"
                    vector-effect="non-scaling-stroke"
                  ></path>`:""}
              <path
                class="grid"
                id="grid"
                d="M0,${s?50:o?56:53} H100"
                vector-effect="non-scaling-stroke"
              ></path>
              ${_&&o?i.YP`<circle
                    r="1"
                    class="return"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-(_-(E||0))/H*6}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#return" />
                    </animateMotion>
                  </circle>`:""}
              ${b?i.YP`<circle
                    r="1"
                    class="solar"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-b/H*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#solar" />
                    </animateMotion>
                  </circle>`:""}
              ${$?i.YP`<circle
                    r="1"
                    class="grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-$/H*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#grid" />
                    </animateMotion>
                  </circle>`:""}
              ${C?i.YP`<circle
                    r="1"
                    class="battery-solar"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-C/H*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-solar" />
                    </animateMotion>
                  </circle>`:""}
              ${x?i.YP`<circle
                    r="1"
                    class="battery-house"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-x/H*5}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-house" />
                    </animateMotion>
                  </circle>`:""}
              ${w?i.YP`<circle
                    r="1"
                    class="battery-from-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-w/H*5}s"
                      repeatCount="indefinite"
                      keyPoints="1;0" keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-grid" />
                    </animateMotion>
                  </circle>`:""}
              ${E?i.YP`<circle
                    r="1"
                    class="battery-to-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${6-E/H*5}s"
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
    .card-content {
      position: relative;
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
    .lines.battery {
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
  `}]}}),(0,u.f)(i.oi))}))}}]);
//# sourceMappingURL=a8a13e8c.js.map