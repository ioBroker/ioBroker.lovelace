"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[92534],{55070:(e,t,i)=>{i.d(t,{Eu:()=>a,hZ:()=>n});const r=["#44739e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067","#f43600","#4ba93b","#5779bb","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function a(e){return r[e%r.length]}function n(e,t){return t.getPropertyValue(`--graph-color-${e+1}`)||a(e)}},349:(e,t,i)=>{function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{m:()=>s});class a{constructor(e=!0){r(this,"_storage",{}),r(this,"_listeners",{}),e&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=window.localStorage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){this._storage[e]=t;try{void 0===t?window.localStorage.removeItem(e):window.localStorage.setItem(e,JSON.stringify(t))}catch(e){}}}const n=new a,s=(e,t,i=!0,r)=>s=>{const o=i?n:new a(!1),l=String(s.key);e=e||String(s.key);const c=s.initializer?s.initializer():void 0;o.addFromStorage(e);const d=()=>o.hasKey(e)?o.getValue(e):c;return{kind:"method",placement:"prototype",key:s.key,descriptor:{set(i){((i,r)=>{let a;t&&(a=d()),o.setValue(e,r),t&&i.requestUpdate(s.key,a)})(this,i)},get:()=>d(),enumerable:!0,configurable:!0},finisher(a){if(t&&i){const t=a.prototype.connectedCallback,i=a.prototype.disconnectedCallback;a.prototype.connectedCallback=function(){var i;t.call(this),this[`__unbsubLocalStorage${l}`]=(i=this,o.subscribeChanges(e,(e=>{i.requestUpdate(s.key,e)})))},a.prototype.disconnectedCallback=function(){i.call(this),this[`__unbsubLocalStorage${l}`]()}}t&&a.createProperty(s.key,{noAccessor:!0,...r})}}}},3542:(e,t,i)=>{i.a(e,(async e=>{i.r(t);i(53268),i(12730);var r=i(59401),a=i(59281),n=i(27088),s=i(70390),o=i(83008),l=i(47538),c=i(79021),d=i(37500),h=i(33310),u=i(26410),p=i(349),f=i(42141),y=i(83849),g=i(15493),m=i(87744),k=i(77243),v=(i(31206),i(39143)),_=(i(10983),i(48932),i(63681),i(57066)),b=i(57292),w=i(74186),E=i(58763),D=(i(27849),i(73826)),P=i(11654),L=e([E,v,k]);function C(){C=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var a=t.placement;if(t.kind===r&&("static"===a||"prototype"===a)){var n="static"===a?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],a={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,a)}),this),e.forEach((function(e){if(!V(e))return i.push(e);var t=this.decorateElement(e,a);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],a=e.decorators,n=a.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,a[n])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var a=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(a)||a);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var o=s+1;o<e.length;o++)if(e[s].key===e[o].key&&e[s].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=O(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},a)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:z(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=z(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function S(e){var t,i=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function V(e){return e.decorators&&e.decorators.length}function $(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function z(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function O(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function H(e,t,i){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(i):a.value}},H(e,t,i||e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}[E,v,k]=L.then?await L:L;let T=function(e,t,i,r){var a=C();if(r)for(var n=0;n<r.length;n++)a=r[n](a);var s=t((function(e){a.initializeInstanceElements(e,o.elements)}),i),o=a.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var a,n=e[r];if("method"===n.kind&&(a=t.find(i)))if($(n.descriptor)||$(a.descriptor)){if(V(n)||V(a))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");a.descriptor=n.descriptor}else{if(V(n)){if(V(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");a.decorators=n.decorators}x(n,a)}else t.push(n)}return t}(s.d.map(S)),e);return a.initializeClassElements(s.F,o.elements),a.runClassFinishers(s.F,o.finishers)}(null,(function(e,t){class i extends t{constructor(){super(),e(this);const t=new Date;t.setHours(t.getHours()-2,0,0,0),this._startDate=t;const i=new Date;i.setHours(i.getHours()+1,0,0,0),this._endDate=i}}return{F:i,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,h.Cb)({reflect:!0,type:Boolean})],key:"rtl",value:()=>!1},{kind:"field",decorators:[(0,h.SB)()],key:"_startDate",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_endDate",value:void 0},{kind:"field",decorators:[(0,p.m)("historyPickedValue",!0,!1)],key:"_targetPickerValue",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_isLoading",value:()=>!1},{kind:"field",decorators:[(0,h.SB)()],key:"_stateHistory",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_ranges",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_deviceEntityLookup",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_areaEntityLookup",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_areaDeviceLookup",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[(0,w.LM)(this.hass.connection,(e=>{this._deviceEntityLookup=(0,b.pI)(e),this._areaEntityLookup=(0,_.TD)(e)})),(0,b.q4)(this.hass.connection,(e=>{this._areaDeviceLookup=(0,_.Dl)(e)}))]}},{kind:"method",key:"render",value:function(){return d.dy`
      <ha-app-layout>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            ></ha-menu-button>
            <div main-title>${this.hass.localize("panel.history")}</div>
            ${this._targetPickerValue?d.dy`
                  <ha-icon-button
                    @click=${this._removeAll}
                    .disabled=${this._isLoading}
                    .path=${"M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z"}
                    .label=${this.hass.localize("ui.panel.history.remove_all")}
                  ></ha-icon-button>
                `:""}
            <ha-icon-button
              @click=${this._getHistory}
              .disabled=${this._isLoading||!this._targetPickerValue}
              .path=${"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}
              .label=${this.hass.localize("ui.common.refresh")}
            ></ha-icon-button>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div class="filters flex layout horizontal narrow-wrap">
            <ha-date-range-picker
              .hass=${this.hass}
              ?disabled=${this._isLoading}
              .startDate=${this._startDate}
              .endDate=${this._endDate}
              .ranges=${this._ranges}
              @change=${this._dateRangeChanged}
            ></ha-date-range-picker>
            <ha-target-picker
              .hass=${this.hass}
              .value=${this._targetPickerValue}
              .disabled=${this._isLoading}
              horizontal
              @value-changed=${this._targetsChanged}
            ></ha-target-picker>
          </div>
          ${this._isLoading?d.dy`<div class="progress-wrapper">
                <ha-circular-progress
                  active
                  alt=${this.hass.localize("ui.common.loading")}
                ></ha-circular-progress>
              </div>`:this._targetPickerValue?d.dy`
                <state-history-charts
                  .hass=${this.hass}
                  .historyData=${this._stateHistory}
                  .endTime=${this._endDate}
                  no-single
                >
                </state-history-charts>
              `:d.dy`<div class="start-search">
                ${this.hass.localize("ui.panel.history.start_search")}
              </div>`}
        </div>
      </ha-app-layout>
    `}},{kind:"method",key:"willUpdate",value:function(e){if(H(j(i.prototype),"willUpdate",this).call(this,e),this.hasUpdated)return;const t=new Date,d=(0,u.Bt)(this.hass.locale),h=(0,r.Z)(t,{weekStartsOn:d}),p=(0,a.Z)(t,{weekStartsOn:d});this._ranges={[this.hass.localize("ui.components.date-range-picker.ranges.today")]:[(0,n.Z)(),(0,s.Z)()],[this.hass.localize("ui.components.date-range-picker.ranges.yesterday")]:[(0,o.Z)(),(0,l.Z)()],[this.hass.localize("ui.components.date-range-picker.ranges.this_week")]:[h,p],[this.hass.localize("ui.components.date-range-picker.ranges.last_week")]:[(0,c.Z)(h,-7),(0,c.Z)(p,-7)]};const f=(0,g.Q2)(),y=f.entity_id,m=f.device_id,k=f.area_id;if((y||m||k)&&(this._targetPickerValue={}),y){const e=y.split(",");this._targetPickerValue.entity_id=e}if(m){const e=m.split(",");this._targetPickerValue.device_id=e}if(k){const e=k.split(",");this._targetPickerValue.area_id=e}const v=f.start_date;v&&(this._startDate=new Date(v));const _=f.end_date;_&&(this._endDate=new Date(_))}},{kind:"method",key:"updated",value:function(e){if(this._targetPickerValue&&(e.has("_startDate")||e.has("_endDate")||e.has("_targetPickerValue")||!this._stateHistory&&(e.has("_deviceEntityLookup")||e.has("_areaEntityLookup")||e.has("_areaDeviceLookup")))&&this._getHistory(),!e.has("hass")&&!e.has("_entities"))return;const t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=(0,m.HE)(this.hass))}},{kind:"method",key:"_removeAll",value:function(){this._targetPickerValue=void 0,this._updatePath()}},{kind:"method",key:"_getHistory",value:async function(){if(!this._targetPickerValue)return;this._isLoading=!0;const e=this._getEntityIds();if(void 0===e)return this._isLoading=!1,void(this._stateHistory=void 0);if(0===e.length)return this._isLoading=!1,void(this._stateHistory=[]);try{const t=await(0,E.iz)(this.hass,this._startDate,this._endDate,e);this._stateHistory=(0,E.Nu)(this.hass,t,this.hass.localize)}finally{this._isLoading=!1}}},{kind:"method",key:"_getEntityIds",value:function(){if(!this._targetPickerValue||void 0===this._deviceEntityLookup||void 0===this._areaEntityLookup||void 0===this._areaDeviceLookup)return;const e=new Set;let{area_id:t,device_id:i,entity_id:r}=this._targetPickerValue;if(t){t=(0,f.r)(t);for(const i of t){const t=this._areaEntityLookup[i];if(null!=t&&t.length)for(const i of t)null===i.entity_category&&e.add(i.entity_id);const r=this._areaDeviceLookup[i];if(null!=r&&r.length)for(const t of r){const r=this._deviceEntityLookup[t.id];if(null!=r&&r.length)for(const t of r)t.area_id&&t.area_id!==i||null!==t.entity_category||e.add(t.entity_id)}}}if(i){i=(0,f.r)(i);for(const t of i){const i=this._deviceEntityLookup[t];if(null!=i&&i.length)for(const t of i)null===t.entity_category&&e.add(t.entity_id)}}if(r){r=(0,f.r)(r);for(const t of r)e.add(t)}return[...e]}},{kind:"method",key:"_dateRangeChanged",value:function(e){this._startDate=e.detail.startDate;const t=e.detail.endDate;0===t.getHours()&&0===t.getMinutes()&&(t.setDate(t.getDate()+1),t.setMilliseconds(t.getMilliseconds()-1)),this._endDate=t,this._updatePath()}},{kind:"method",key:"_targetsChanged",value:function(e){this._targetPickerValue=e.detail.value,this._updatePath()}},{kind:"method",key:"_updatePath",value:function(){const e={};this._targetPickerValue&&(this._targetPickerValue.entity_id&&(e.entity_id=(0,f.r)(this._targetPickerValue.entity_id).join(",")),this._targetPickerValue.area_id&&(e.area_id=(0,f.r)(this._targetPickerValue.area_id).join(",")),this._targetPickerValue.device_id&&(e.device_id=(0,f.r)(this._targetPickerValue.device_id).join(","))),this._startDate&&(e.start_date=this._startDate.toISOString()),this._endDate&&(e.end_date=this._endDate.toISOString()),(0,y.c)(`/history?${(0,g.ou)(e)}`,{replace:!0})}},{kind:"get",static:!0,key:"styles",value:function(){return[P.Qx,d.iv`
        .content {
          padding: 0 16px 16px;
        }

        state-history-charts {
          height: calc(100vh - 136px);
        }

        :host([narrow]) state-history-charts {
          height: calc(100vh - 198px);
        }

        .progress-wrapper {
          height: calc(100vh - 136px);
        }

        :host([narrow]) .progress-wrapper {
          height: calc(100vh - 198px);
        }

        :host([virtualize]) {
          height: 100%;
        }

        :host([narrow]) .narrow-wrap {
          flex-wrap: wrap;
        }

        .horizontal {
          align-items: center;
        }

        :host(:not([narrow])) .selector-padding {
          padding-left: 32px;
        }

        .progress-wrapper {
          position: relative;
        }

        .filters {
          display: flex;
          align-items: flex-start;
          padding: 8px 16px 0;
        }

        :host([narrow]) .filters {
          flex-wrap: wrap;
        }

        ha-date-range-picker {
          margin-right: 16px;
          margin-inline-end: 16px;
          margin-inline-start: initial;
          max-width: 100%;
          direction: var(--direction);
        }

        :host([narrow]) ha-date-range-picker {
          margin-right: 0;
          margin-inline-end: 0;
          margin-inline-start: initial;
          direction: var(--direction);
        }

        ha-circular-progress {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        ha-entity-picker {
          display: inline-block;
          flex-grow: 1;
          max-width: 400px;
        }

        :host([narrow]) ha-entity-picker {
          max-width: none;
          width: 100%;
        }

        .start-search {
          padding-top: 16px;
          text-align: center;
          color: var(--secondary-text-color);
        }
      `]}}]}}),(0,D.f)(d.oi));customElements.define("ha-panel-history",T)}))}}]);
//# sourceMappingURL=2375013c.js.map