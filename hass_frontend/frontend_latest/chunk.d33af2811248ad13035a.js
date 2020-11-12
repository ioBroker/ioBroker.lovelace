(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8664],{62021:(e,t,r)=>{"use strict";r.d(t,{HD:()=>i,oO:()=>s,p6:()=>n,jt:()=>a});const i=e=>e.callWS({type:"person/list"}),s=(e,t)=>e.callWS({type:"person/create",...t}),n=(e,t,r)=>e.callWS({type:"person/update",person_id:t,...r}),a=(e,t)=>e.callWS({type:"person/delete",person_id:t})},65253:(e,t,r)=>{"use strict";r.d(t,{Pb:()=>i,CE:()=>s,uh:()=>n,r4:()=>a,Nq:()=>o,h8:()=>l});const i="system-admin",s="system-users",n=async e=>e.callWS({type:"config/auth/list"}),a=async(e,t,r)=>e.callWS({type:"config/auth/create",name:t,group_ids:r}),o=async(e,t,r)=>e.callWS({...r,type:"config/auth/update",user_id:t}),l=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t})},18873:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HaPanelLogbook:()=>w});var i=r(55317),s=(r(53268),r(12730),r(15652)),n=r(87744),a=(r(74535),r(31206),r(44491),r(10983),r(48932),r(55422)),o=r(62021),l=r(65253),c=(r(27849),r(11654));r(97740);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var s=t.placement;if(t.kind===i&&("static"===s||"prototype"===s)){var n="static"===s?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!u(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],s=e.decorators,n=s.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[n])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(s)||s);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=m(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function h(e){var t,r=m(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function v(e,t,r){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(i){var s=Object.getOwnPropertyDescriptor(i,t);return s.get?s.get.call(r):s.value}})(e,t,r||e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let w=function(e,t,r,i){var s=d();if(i)for(var n=0;n<i.length;n++)s=i[n](s);var a=t((function(e){s.initializeInstanceElements(e,o.elements)}),r),o=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var s,n=e[i];if("method"===n.kind&&(s=t.find(r)))if(f(n.descriptor)||f(s.descriptor)){if(u(n)||u(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(u(n)){if(u(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}p(n,s)}else t.push(n)}return t}(a.d.map(h)),e);return s.initializeClassElements(a.F,o.elements),s.runClassFinishers(a.F,o.finishers)}([(0,s.Mo)("ha-panel-logbook")],(function(e,t){class r extends t{constructor(){super(),e(this);const t=new Date;t.setHours(t.getHours()-2),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),this._startDate=t;const r=new Date;r.setHours(r.getHours()+1),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0),this._endDate=r}}return{F:r,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"_userIdToName",value:()=>({})},{kind:"field",decorators:[(0,s.Cb)()],key:"_startDate",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"_endDate",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"_entityId",value:()=>""},{kind:"field",decorators:[(0,s.Cb)()],key:"_isLoading",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"_entries",value:()=>[]},{kind:"field",decorators:[(0,s.Cb)({reflect:!0,type:Boolean})],key:"rtl",value:()=>!1},{kind:"field",decorators:[(0,s.sz)()],key:"_ranges",value:void 0},{kind:"field",key:"_fetchUserDone",value:void 0},{kind:"method",key:"render",value:function(){return s.dy`
      <ha-app-layout>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            ></ha-menu-button>
            <div main-title>${this.hass.localize("panel.logbook")}</div>
            <mwc-icon-button
              @click=${this._refreshLogbook}
              .disabled=${this._isLoading}
            >
              <ha-svg-icon .path=${i.jcD}></ha-svg-icon>
            </mwc-icon-button>
          </app-toolbar>
        </app-header>

        ${this._isLoading?s.dy``:""}

        <div class="filters">
          <ha-date-range-picker
            .hass=${this.hass}
            ?disabled=${this._isLoading}
            .startDate=${this._startDate}
            .endDate=${this._endDate}
            .ranges=${this._ranges}
            @change=${this._dateRangeChanged}
          ></ha-date-range-picker>

          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entityId}
            .label=${this.hass.localize("ui.components.entity.entity-picker.entity")}
            .disabled=${this._isLoading}
            @change=${this._entityPicked}
          ></ha-entity-picker>
        </div>

        ${this._isLoading?s.dy`
              <div class="progress-wrapper">
                <ha-circular-progress
                  active
                  alt=${this.hass.localize("ui.common.loading")}
                ></ha-circular-progress>
              </div>
            `:s.dy`
              <ha-logbook
                .hass=${this.hass}
                .entries=${this._entries}
                .userIdToName=${this._userIdToName}
                virtualize
              ></ha-logbook>
            `}
      </ha-app-layout>
    `}},{kind:"method",key:"firstUpdated",value:function(e){v(k(r.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("title"),this._fetchUserDone=this._fetchUserNames();const t=new Date;t.setHours(0,0,0,0);const i=new Date(t);i.setDate(i.getDate()+1),i.setMilliseconds(i.getMilliseconds()-1);const s=new Date(t),n=new Date(s.setDate(t.getDate()-1)),a=new Date(n);a.setDate(a.getDate()+1),a.setMilliseconds(a.getMilliseconds()-1);const o=new Date(s.setDate(t.getDate()-t.getDay())),l=new Date(s.setDate(o.getDate()+7));l.setMilliseconds(l.getMilliseconds()-1);const c=new Date(s.setDate(t.getDate()-t.getDay()-7)),d=new Date(s.setDate(c.getDate()+7));d.setMilliseconds(d.getMilliseconds()-1),this._ranges={[this.hass.localize("ui.panel.logbook.ranges.today")]:[t,i],[this.hass.localize("ui.panel.logbook.ranges.yesterday")]:[n,a],[this.hass.localize("ui.panel.logbook.ranges.this_week")]:[o,l],[this.hass.localize("ui.panel.logbook.ranges.last_week")]:[c,d]}}},{kind:"method",key:"updated",value:function(e){if((e.has("_startDate")||e.has("_endDate")||e.has("_entityId"))&&this._getData(),e.has("hass")){const t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=(0,n.HE)(this.hass))}}},{kind:"method",key:"_fetchUserNames",value:async function(){const e={},t=(0,o.HD)(this.hass),r=this.hass.user.is_admin&&(0,l.uh)(this.hass),i=await t;for(const s of i.storage)s.user_id&&(e[s.user_id]=s.name);for(const s of i.config)s.user_id&&(e[s.user_id]=s.name);if(r){const t=await r;for(const r of t)r.id in e||(e[r.id]=r.name)}this._userIdToName=e}},{kind:"method",key:"_dateRangeChanged",value:function(e){this._startDate=e.detail.startDate;const t=e.detail.endDate;0===t.getHours()&&0===t.getMinutes()&&(t.setDate(t.getDate()+1),t.setMilliseconds(t.getMilliseconds()-1)),this._endDate=t}},{kind:"method",key:"_entityPicked",value:function(e){this._entityId=e.target.value}},{kind:"method",key:"_refreshLogbook",value:function(){this._entries=[],(0,a.tf)(this._startDate.toISOString(),this._endDate.toISOString()),this._getData()}},{kind:"method",key:"_getData",value:async function(){this._isLoading=!0;const[e]=await Promise.all([(0,a.rM)(this.hass,this._startDate.toISOString(),this._endDate.toISOString(),this._entityId),this._fetchUserDone]);this._entries=e,this._isLoading=!1}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,s.iv`
        ha-logbook,
        .progress-wrapper {
          height: calc(100vh - 136px);
        }

        :host([narrow]) ha-logbook,
        :host([narrow]) .progress-wrapper {
          height: calc(100vh - 198px);
        }

        ha-date-range-picker {
          margin-right: 16px;
          max-width: 100%;
        }

        :host([narrow]) ha-date-range-picker {
          margin-right: 0;
        }

        .progress-wrapper {
          position: relative;
        }

        ha-circular-progress {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .filters {
          display: flex;
          align-items: flex-end;
          padding: 0 16px;
        }

        :host([narrow]) .filters {
          flex-wrap: wrap;
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
      `]}}]}}),s.oi)}}]);
//# sourceMappingURL=chunk.d33af2811248ad13035a.js.map