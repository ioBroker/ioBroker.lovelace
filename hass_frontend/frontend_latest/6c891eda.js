/*! For license information please see 6c891eda.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[19490],{54444:(t,e,i)=>{i(48175);var n=i(9672),r=i(87156),o=i(50856);(0,n.k)({_template:o.d`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=(0,r.vz)(this).parentNode,e=(0,r.vz)(this).getOwnerRoot();return this.for?(0,r.vz)(e).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===(0,r.vz)(this).textContent.trim()){for(var t=!0,e=(0,r.vz)(this).getEffectiveChildNodes(),i=0;i<e.length;i++)if(""!==e[i].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var e,i,n=this.offsetParent.getBoundingClientRect(),r=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),a=(r.width-o.width)/2,s=(r.height-o.height)/2,l=r.left-n.left,c=r.top-n.top;switch(this.position){case"top":e=l+a,i=c-o.height-t;break;case"bottom":e=l+a,i=c+r.height+t;break;case"left":e=l-o.width-t,i=c+s;break;case"right":e=l+r.width+t,i=c+s}this.fitToVisibleBounds?(n.left+e+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,e)+"px",this.style.right="auto"),n.top+i+o.height>window.innerHeight?(this.style.bottom=n.height-c+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,i)+"px",this.style.bottom="auto")):(this.style.left=e+"px",this.style.top=i+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var e=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":e+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":e+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},92306:(t,e,i)=>{i.d(e,{v:()=>n});const n=(t,e)=>{const i={};for(const n of t){const t=e(n);t in i?i[t].push(n):i[t]=[n]}return i}},11950:(t,e,i)=>{i.d(e,{l:()=>n});const n=async(t,e)=>new Promise((i=>{const n=e(t,(t=>{n(),i(t)}))}))},81582:(t,e,i)=>{i.d(e,{LZ:()=>n,Q4:()=>r,DJ:()=>o,pB:()=>a,SO:()=>s,iJ:()=>l,Nn:()=>c,Ny:()=>d,T0:()=>p});const n=32143==i.j?["migration_error","setup_error","setup_retry"]:null,r=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(t,e,i)=>{const n={type:"config_entries/subscribe"};return i&&i.type&&(n.type_filter=i.type),t.connection.subscribeMessage((t=>e(t)),n)},a=(t,e)=>{const i={};return e&&(e.type&&(i.type_filter=e.type),e.domain&&(i.domain=e.domain)),t.callWS({type:"config_entries/get",...i})},s=(t,e,i)=>t.callWS({type:"config_entries/update",entry_id:e,...i}),l=(t,e)=>t.callApi("DELETE",`config/config_entries/entry/${e}`),c=(t,e)=>t.callApi("POST",`config/config_entries/entry/${e}/reload`),d=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:"user"}),p=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:null})},55424:(t,e,i)=>{i.d(e,{Bm:()=>_,o1:()=>b,iK:()=>w,rl:()=>k,P:()=>E,KU:()=>S,xZ:()=>x,gy:()=>P,ZC:()=>C,_Z:()=>T,Jj:()=>D,yH:()=>O,UB:()=>j,jB:()=>F,G9:()=>L,vE:()=>M});var n=i(4535),r=i(59699),o=i(32182),a=i(79021),s=i(39244),l=i(27088),c=i(83008),d=i(70390),p=i(47538),u=i(97330),f=i(92306),h=i(11950),m=i(81582),y=i(74186),g=i(38014);const v=[],_=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),w=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),k=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),E=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),S=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),x=t=>t.callWS({type:"energy/info"}),P=t=>t.callWS({type:"energy/validate"}),C=t=>t.callWS({type:"energy/get_prefs"}),T=async(t,e)=>{const i=t.callWS({type:"energy/save_prefs",...e});return z(t),i},A=async(t,e,i,n,r,o="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==r?void 0:r.toISOString(),energy_statistic_ids:i,co2_statistic_id:n,period:o}),D=t=>(0,f.v)(t.energy_sources,(t=>t.type)),O=(t,e)=>{const i=[];for(const n of t.energy_sources)if("solar"!==n.type)if("gas"!==n.type)if("battery"!==n.type){for(const t of n.flow_from){i.push(t.stat_energy_from),t.stat_cost&&i.push(t.stat_cost);const n=e.cost_sensors[t.stat_energy_from];n&&i.push(n)}for(const t of n.flow_to){i.push(t.stat_energy_to),t.stat_compensation&&i.push(t.stat_compensation);const n=e.cost_sensors[t.stat_energy_to];n&&i.push(n)}}else i.push(n.stat_energy_from),i.push(n.stat_energy_to);else{i.push(n.stat_energy_from),n.stat_cost&&i.push(n.stat_cost);const t=e.cost_sensors[n.stat_energy_from];t&&i.push(t)}else i.push(n.stat_energy_from);return i},z=t=>{v.forEach((e=>{const i=j(t,{key:e});i.clearPrefs(),i._active&&i.refresh()}))},j=(t,e={})=>{let i="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");i=`_${e.key}`}if(t.connection[i])return t.connection[i];v.push(e.key);const f=(0,u._)(t.connection,i,(async()=>{if(f.prefs||(f.prefs=await C(t)),f._refreshTimeout&&clearTimeout(f._refreshTimeout),f._active&&(!f.end||f.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),f._refreshTimeout=window.setTimeout((()=>f.refresh()),t.getTime()-Date.now())}return(async(t,e,i,l,c)=>{const[d,p,u]=await Promise.all([(0,m.pB)(t,{domain:"co2signal"}),(0,h.l)(t.connection,y.LM),x(t)]),f=d.length?d[0]:void 0;let v;if(f)for(const e of p){if(e.config_entry_id!==f.entry_id)continue;const i=t.states[e.entity_id];if(i&&"%"===i.attributes.unit_of_measurement){v=i.entity_id;break}}const _=[];for(const t of e.energy_sources)if("grid"===t.type)for(const e of t.flow_from)_.push(e.stat_energy_from);const b=O(e,u),w=(0,n.Z)(l||new Date,i),k=w>35?"month":w>2?"day":"hour",E=(0,r.Z)(i,-1),S={energy:"kWh",volume:"km"===(t.config.unit_system.length||"")?"m³":"ft³"},P=await(0,g.dL)(t,E,l,b,k,S);let C,T,D,z,j;if(c){T=w>27&&w<32?(0,o.Z)(i,-1):(0,a.Z)(i,-1*(w+1));const e=(0,r.Z)(T,-1);D=(0,s.Z)(i,-1),C=await(0,g.dL)(t,e,D,b,k,S)}void 0!==v&&(z=await A(t,i,_,v,l,w>35?"month":w>2?"day":"hour"),c&&(j=await A(t,T,_,v,D,w>35?"month":w>2?"day":"hour"))),Object.values(P).forEach((t=>{t.length&&new Date(t[0].start)>E&&t.unshift({...t[0],start:E.toISOString(),end:E.toISOString(),sum:0,state:0})}));const F=await(0,g.Py)(t,b),$={};return F.forEach((t=>{$[t.statistic_id]=t})),{start:i,end:l,startCompare:T,endCompare:D,info:u,prefs:e,stats:P,statsMetadata:$,statsCompare:C,co2SignalConfigEntry:f,co2SignalEntity:v,fossilEnergyConsumption:z,fossilEnergyConsumptionCompare:j}})(t,f.prefs,f.start,f.end,f.compare)})),_=f.subscribe;f.subscribe=t=>{const e=_(t);return f._active++,()=>{f._active--,f._active<1&&(clearTimeout(f._refreshTimeout),f._refreshTimeout=void 0),e()}},f._active=0,f.prefs=e.prefs;const b=new Date;f.start=b.getHours()>0?(0,l.Z)():(0,c.Z)(),f.end=b.getHours()>0?(0,d.Z)():(0,p.Z)();const w=()=>{f._updatePeriodTimeout=window.setTimeout((()=>{f.start=(0,l.Z)(),f.end=(0,d.Z)(),w()}),(0,r.Z)((0,d.Z)(),1).getTime()-Date.now())};return w(),f.clearPrefs=()=>{f.prefs=void 0},f.setPeriod=(t,e)=>{var i;f.start=t,f.end=e,f.start.getTime()!==(0,l.Z)().getTime()||(null===(i=f.end)||void 0===i?void 0:i.getTime())!==(0,d.Z)().getTime()||f._updatePeriodTimeout?f._updatePeriodTimeout&&(clearTimeout(f._updatePeriodTimeout),f._updatePeriodTimeout=void 0):w()},f.setCompare=t=>{f.compare=t},f},F=t=>t.callWS({type:"energy/solar_forecast"}),$=["volume","energy"],L=(t,e={},i)=>{for(const n of t.energy_sources){if("gas"!==n.type)continue;if(i&&i===n.stat_energy_from)continue;const t=e[n.stat_energy_from];if($.includes(null==t?void 0:t.unit_class))return t.unit_class}},M=(t,e,i={})=>{const n=L(e,i);if(void 0!==n)return"energy"===n?"kWh":"km"===t.config.unit_system.length?"m³":"ft³"}},38014:(t,e,i)=>{i.d(e,{uR:()=>r,Py:()=>o,dL:()=>a,h_:()=>s,Cj:()=>l,hN:()=>c,Kj:()=>d,q6:()=>p,Nw:()=>u,Z0:()=>m,j2:()=>y,Kd:()=>g,dO:()=>v,Hs:()=>_});var n=i(91741);const r=(t,e)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:e}),o=(t,e)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e}),a=(t,e,i,n,r="hour",o)=>t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==i?void 0:i.toISOString(),statistic_ids:n,period:r,units:o}),s=t=>t.callWS({type:"recorder/validate_statistics"}),l=(t,e,i)=>t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:i}),c=(t,e)=>t.callWS({type:"recorder/clear_statistics",statistic_ids:e}),d=t=>{if(!t||t.length<2)return null;const e=t[t.length-1].sum;if(null===e)return null;const i=t[0].sum;return null===i?e:e-i},p=(t,e)=>{let i=null;for(const n of e){if(!(n in t))continue;const e=d(t[n]);null!==e&&(null===i?i=e:i+=e)}return i},u=(t,e)=>t.some((t=>null!==t[e])),f=["mean","min","max"],h=["sum"],m=(t,e)=>!(!f.includes(e)||!t.has_mean)||!(!h.includes(e)||!t.has_sum),y=(t,e,i,n,r)=>t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:e,start_time:i,adjustment:n,adjustment_unit_of_measurement:r}),g=(t,e,i)=>{const r=t.states[e];return r?(0,n.C)(r):(null==i?void 0:i.name)||e},v=(t,e,i)=>{let n;var r;e&&(n=null===(r=t.states[e])||void 0===r?void 0:r.attributes.unit_of_measurement);return void 0===n?null==i?void 0:i.statistics_unit_of_measurement:n},_=t=>t.includes(":")},73826:(t,e,i)=>{i.d(e,{f:()=>m});var n=i(33310);function r(t,e,i,n){var r=o();if(n)for(var d=0;d<n.length;d++)r=n[d](r);var p=e((function(t){r.initializeInstanceElements(t,u.elements)}),i),u=r.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},n=0;n<t.length;n++){var r,o=t[n];if("method"===o.kind&&(r=e.find(i)))if(c(o.descriptor)||c(r.descriptor)){if(l(o)||l(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(l(o)){if(l(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}s(o,r)}else e.push(o)}return e}(p.d.map(a)),t);return r.initializeClassElements(p.F,u.elements),r.runClassFinishers(p.F,u.finishers)}function o(){o=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(n){e.forEach((function(e){var r=e.placement;if(e.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?t:i;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var n=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],n=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!l(t))return i.push(t);var e=this.decorateElement(t,r);i.push(e.element),i.push.apply(i,e.extras),n.push.apply(n,e.finishers)}),this),!e)return{elements:i,finishers:n};var o=this.decorateConstructor(i,e);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(t,e,i){var n=e[t.placement];if(!i&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)},decorateElement:function(t,e){for(var i=[],n=[],r=t.decorators,o=r.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,r[o])(s)||s);t=l.element,this.addElementPlacement(t,e),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:n,extras:i}},decorateConstructor:function(t,e){for(var i=[],n=e.length-1;n>=0;n--){var r=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=p(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:d(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=d(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var n=(0,e[i])(t);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");t=n}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function a(t){var e,i=p(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(n.decorators=t.decorators),"field"===t.kind&&(n.initializer=t.value),n}function s(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function l(t){return t.decorators&&t.decorators.length}function c(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function d(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function p(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function f(t,e,i){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(i):r.value}},f(t,e,i||t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}const m=t=>r(null,(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){f(h(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(f(h(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if(f(h(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const e of t.keys())if(this.hassSubscribeRequiredHostProps.includes(e))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((t=>void 0===this[t]))||(this.__unsubs=this.hassSubscribe())}}]}}),t)},19490:(t,e,i)=>{i.r(e);i(54444);var n=i(37500),r=i(33310),o=i(70483),a=i(27593),s=(i(22098),i(49915),i(52039),i(55424)),l=i(38014),c=i(73826),d=i(75502),p=i(43283);function u(){u=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(n){e.forEach((function(e){var r=e.placement;if(e.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?t:i;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var n=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],n=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!m(t))return i.push(t);var e=this.decorateElement(t,r);i.push(e.element),i.push.apply(i,e.extras),n.push.apply(n,e.finishers)}),this),!e)return{elements:i,finishers:n};var o=this.decorateConstructor(i,e);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(t,e,i){var n=e[t.placement];if(!i&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)},decorateElement:function(t,e){for(var i=[],n=[],r=t.decorators,o=r.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,r[o])(s)||s);t=l.element,this.addElementPlacement(t,e),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:n,extras:i}},decorateConstructor:function(t,e){for(var i=[],n=e.length-1;n>=0;n--){var r=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=v(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:g(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=g(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var n=(0,e[i])(t);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");t=n}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function f(t){var e,i=v(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(n.decorators=t.decorators),"field"===t.kind&&(n.initializer=t.value),n}function h(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function m(t){return t.decorators&&t.decorators.length}function y(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function g(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function v(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}!function(t,e,i,n){var r=u();if(n)for(var o=0;o<n.length;o++)r=n[o](r);var a=e((function(t){r.initializeInstanceElements(t,s.elements)}),i),s=r.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},n=0;n<t.length;n++){var r,o=t[n];if("method"===o.kind&&(r=e.find(i)))if(y(o.descriptor)||y(r.descriptor)){if(m(o)||m(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(m(o)){if(m(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}h(o,r)}else e.push(o)}return e}(a.d.map(f)),t);r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}([(0,r.Mo)("hui-energy-carbon-consumed-gauge-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"hassSubscribe",value:function(){var t;return[(0,s.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>{this._data=t}))]}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n.dy``;if(!this._data)return n.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;if(!this._data.co2SignalEntity)return n.dy``;if(!this.hass.states[this._data.co2SignalEntity])return n.dy`<hui-warning>
        ${(0,d.i)(this.hass,this._data.co2SignalEntity)}
      </hui-warning>`;const t=this._data.prefs,e=(0,s.Jj)(t),i=(0,l.q6)(this._data.stats,e.grid[0].flow_from.map((t=>t.stat_energy_from)));let r;if(this._data.fossilEnergyConsumption&&i){const t=this._data.fossilEnergyConsumption?Object.values(this._data.fossilEnergyConsumption).reduce(((t,e)=>t+e),0):0,n=e.solar&&(0,l.q6)(this._data.stats,e.solar.map((t=>t.stat_energy_from)))||0,o=(0,l.q6)(this._data.stats,e.grid[0].flow_to.map((t=>t.stat_energy_to)))||0,s=i+Math.max(0,n-o);r=(0,a.N)(100*(1-t/s))}return n.dy`
      <ha-card>
        ${void 0!==r?n.dy`
              <ha-svg-icon id="info" .path=${"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}></ha-svg-icon>
              <paper-tooltip animation-delay="0" for="info" position="left">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.card_indicates_energy_used")}
                </span>
              </paper-tooltip>
              <ha-gauge
                min="0"
                max="100"
                .value=${r}
                .locale=${this.hass.locale}
                label="%"
                style=${(0,o.V)({"--gauge-color":this._computeSeverity(r)})}
              ></ha-gauge>
              <div class="name">
                ${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.low_carbon_energy_consumed")}
              </div>
            `:n.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.low_carbon_energy_not_calculated")}`}
      </ha-card>
    `}},{kind:"method",key:"_computeSeverity",value:function(t){return t<10?p.severityMap.red:t<30?p.severityMap.yellow:t>75?p.severityMap.green:p.severityMap.normal}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ha-card {
        height: 100%;
        overflow: hidden;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
      }

      ha-gauge {
        width: 100%;
        max-width: 250px;
      }

      .name {
        text-align: center;
        line-height: initial;
        color: var(--primary-text-color);
        width: 100%;
        font-size: 15px;
        margin-top: 8px;
      }

      ha-svg-icon {
        position: absolute;
        right: 4px;
        top: 4px;
        color: var(--secondary-text-color);
      }
      paper-tooltip > span {
        font-size: 12px;
        line-height: 12px;
      }
      paper-tooltip {
        width: 80%;
        max-width: 250px;
        top: 8px !important;
      }
    `}}]}}),(0,c.f)(n.oi))}}]);
//# sourceMappingURL=6c891eda.js.map