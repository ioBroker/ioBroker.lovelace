(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[51193],{20122:(e,a,i)=>{e.exports=i(52461)},58831:(e,a,i)=>{"use strict";i.d(a,{M:()=>r});const r=e=>e.substr(0,e.indexOf("."))},22311:(e,a,i)=>{"use strict";i.d(a,{N:()=>t});var r=i(58831);const t=e=>(0,r.M)(e.entity_id)},33315:(e,a,i)=>{"use strict";i.r(a);i(51187),i(49842);var r=i(37500),t=i(33310),n=i(14516),o=i(47181);const s=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMK","ZWL"];i(48456);var c=i(20122);const l={$:"USD","€":"EUR","¥":"JPY","£":"GBP","₽":"RUB","₹":"INR"};var u=i(76307);i(33220),i(83927);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,a){["method","field"].forEach((function(i){a.forEach((function(a){a.kind===i&&"own"===a.placement&&this.defineClassElement(e,a)}),this)}),this)},initializeClassElements:function(e,a){var i=e.prototype;["method","field"].forEach((function(r){a.forEach((function(a){var t=a.placement;if(a.kind===r&&("static"===t||"prototype"===t)){var n="static"===t?e:i;this.defineClassElement(n,a)}}),this)}),this)},defineClassElement:function(e,a){var i=a.descriptor;if("field"===a.kind){var r=a.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,a.key,i)},decorateClass:function(e,a){var i=[],r=[],t={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,t)}),this),e.forEach((function(e){if(!T(e))return i.push(e);var a=this.decorateElement(e,t);i.push(a.element),i.push.apply(i,a.extras),r.push.apply(r,a.finishers)}),this),!a)return{elements:i,finishers:r};var n=this.decorateConstructor(i,a);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,a,i){var r=a[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,a){for(var i=[],r=[],t=e.decorators,n=t.length-1;n>=0;n--){var o=a[e.placement];o.splice(o.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,t[n])(s)||s);e=c.element,this.addElementPlacement(e,a),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],a);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,a){for(var i=[],r=a.length-1;r>=0;r--){var t=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,a[r])(t)||t);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var o=0;o<e.length-1;o++)for(var s=o+1;s<e.length;s++)if(e[o].key===e[s].key&&e[o].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var a={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(a,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(a.initializer=e.initializer),a},toElementDescriptors:function(e){var a;if(void 0!==e)return(a=e,function(e){if(Array.isArray(e))return e}(a)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,a){if(e){if("string"==typeof e)return G(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?G(e,a):void 0}}(a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var a=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),a}),this)},toElementDescriptor:function(e){var a=String(e.kind);if("method"!==a&&"field"!==a)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+a+'"');var i=f(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var t=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:a,key:i,placement:r,descriptor:Object.assign({},t)};return"field"!==a?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(t,"get","The property descriptor of a field descriptor"),this.disallowProperty(t,"set","The property descriptor of a field descriptor"),this.disallowProperty(t,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:M(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var a={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(a,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),a},toClassDescriptor:function(e){var a=String(e.kind);if("class"!==a)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+a+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=M(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,a){for(var i=0;i<a.length;i++){var r=(0,a[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,a,i){if(void 0!==e[a])throw new TypeError(i+" can't have a ."+a+" property.")}};return e}function m(e){var a,i=f(e.key);"method"===e.kind?a={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?a={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?a={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(a={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:a};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function h(e,a){void 0!==e.descriptor.get?a.descriptor.get=e.descriptor.get:a.descriptor.set=e.descriptor.set}function T(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function M(e,a){var i=e[a];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+a+"' to be a function");return i}function f(e){var a=function(e,a){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,a||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:String(a)}function G(e,a){(null==a||a>e.length)&&(a=e.length);for(var i=0,r=new Array(a);i<a;i++)r[i]=e[i];return r}function A(e,a,i){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,a,i){var r=function(e,a){for(;!Object.prototype.hasOwnProperty.call(e,a)&&null!==(e=g(e)););return e}(e,a);if(r){var t=Object.getOwnPropertyDescriptor(r,a);return t.get?t.get.call(i):t.value}},A(e,a,i||e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}const y=[52.3731339,4.8903147],v=matchMedia("(prefers-color-scheme: dark)"),k="location";!function(e,a,i,r){var t=d();if(r)for(var n=0;n<r.length;n++)t=r[n](t);var o=a((function(e){t.initializeInstanceElements(e,s.elements)}),i),s=t.decorateClass(function(e){for(var a=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var t,n=e[r];if("method"===n.kind&&(t=a.find(i)))if(p(n.descriptor)||p(t.descriptor)){if(T(n)||T(t))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");t.descriptor=n.descriptor}else{if(T(n)){if(T(t))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");t.decorators=n.decorators}h(n,t)}else a.push(n)}return a}(o.d.map(m)),e);t.initializeClassElements(o.F,s.elements),t.runClassFinishers(o.F,s.finishers)}([(0,t.Mo)("onboarding-core-config")],(function(e,a){class i extends a{constructor(...a){super(...a),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,t.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,t.Cb)()],key:"onboardingLocalize",value:void 0},{kind:"field",decorators:[(0,t.SB)()],key:"_working",value:()=>!1},{kind:"field",decorators:[(0,t.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,t.SB)()],key:"_location",value:void 0},{kind:"field",decorators:[(0,t.SB)()],key:"_elevation",value:void 0},{kind:"field",decorators:[(0,t.SB)()],key:"_unitSystem",value:void 0},{kind:"field",decorators:[(0,t.SB)()],key:"_currency",value:void 0},{kind:"field",decorators:[(0,t.SB)()],key:"_timeZone",value:void 0},{kind:"field",decorators:[(0,t.IO)("ha-locations-editor",!0)],key:"map",value:void 0},{kind:"method",key:"render",value:function(){return r.dy`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro","name",this.hass.user.name)}
      </p>

      <paper-input
        .label=${this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name")}
        name="name"
        .disabled=${this._working}
        .value=${this._nameValue}
        @value-changed=${this._handleChange}
      ></paper-input>

      <div class="middle-text">
        <p>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location")}
        </p>

        <div class="row">
          <div>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location_detect")}
          </div>
          <mwc-button @click=${this._detect}>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.button_detect")}
          </mwc-button>
        </div>
      </div>

      <div class="row">
        <ha-locations-editor
          class="flex"
          .hass=${this.hass}
          .locations=${this._markerLocation(this._locationValue)}
          zoom="14"
          .darkMode=${v.matches}
          @location-updated=${this._locationChanged}
        ></ha-locations-editor>
      </div>

      <div class="row">
        <paper-input
          class="flex"
          .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone")}
          name="timeZone"
          list="timezones"
          .disabled=${this._working}
          .value=${this._timeZoneValue}
          @value-changed=${this._handleChange}
        ></paper-input>

        <paper-input
          class="flex"
          .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation")}
          name="elevation"
          type="number"
          .disabled=${this._working}
          .value=${this._elevationValue}
          @value-changed=${this._handleChange}
        >
          <span slot="suffix">
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation_meters")}
          </span>
        </paper-input>
      </div>

      <div class="row">
        <div class="flex">
          ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system")}
        </div>
        <div class="radio-group">
          <ha-formfield
            .label=${r.dy`${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")}
              <div class="secondary">
                ${this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example")}
              </div>`}
          >
            <ha-radio
              name="unit_system"
              value="metric"
              .checked=${"metric"===this._unitSystemValue}
              @change=${this._unitSystemChanged}
              .disabled=${this._working}
            ></ha-radio>
          </ha-formfield>
          <ha-formfield
            .label=${r.dy`${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_us_customary")}
              <div class="secondary">
                ${this.hass.localize("ui.panel.config.core.section.core.core_config.us_customary_example")}
              </div>`}
          >
            <ha-radio
              name="unit_system"
              value="us_customary"
              .checked=${"us_customary"===this._unitSystemValue}
              @change=${this._unitSystemChanged}
              .disabled=${this._working}
            ></ha-radio>
          </ha-formfield>
        </div>
      </div>

      <div class="row">
            <div class="flex">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.currency")}<br />
              <a
                href="https://en.wikipedia.org/wiki/ISO_4217#Active_codes"
                target="_blank"
                rel="noopener noreferrer"
                >${this.hass.localize("ui.panel.config.core.section.core.core_config.find_currency_value")}</a
              >
            </div>

            <paper-input
              class="flex"
              .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.currency")}
              name="currency"
              list="currencies"
              .disabled=${this._working}
              .value=${this._currencyValue}
              @value-changed=${this._handleChange}
            ></paper-input>
          </div>
        </div>

      <div class="footer">
        <mwc-button @click=${this._save} .disabled=${this._working}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")}
        </mwc-button>
      </div>
    `}},{kind:"method",key:"firstUpdated",value:function(e){A(g(i.prototype),"firstUpdated",this).call(this,e),setTimeout((()=>this.shadowRoot.querySelector("paper-input").focus()),100),this.addEventListener("keypress",(e=>{13===e.keyCode&&this._save(e)}));this.shadowRoot.querySelector("[name=timeZone]").inputElement.appendChild((()=>{const e=document.createElement("datalist");return e.id="timezones",Object.keys(c).forEach((a=>{const i=document.createElement("option");i.value=a,i.innerHTML=c[a],e.appendChild(i)})),e})());this.shadowRoot.querySelector("[name=currency]").inputElement.appendChild((()=>{const e=document.createElement("datalist");e.id="currencies";for(const a of s){const i=document.createElement("option");i.value=a,i.innerHTML=a,e.appendChild(i)}return e})())}},{kind:"get",key:"_nameValue",value:function(){return void 0!==this._name?this._name:this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default")}},{kind:"get",key:"_locationValue",value:function(){return this._location||y}},{kind:"get",key:"_elevationValue",value:function(){return void 0!==this._elevation?this._elevation:0}},{kind:"get",key:"_timeZoneValue",value:function(){return this._timeZone}},{kind:"get",key:"_unitSystemValue",value:function(){return void 0!==this._unitSystem?this._unitSystem:"metric"}},{kind:"get",key:"_currencyValue",value:function(){return void 0!==this._currency?this._currency:""}},{kind:"field",key:"_markerLocation",value:()=>(0,n.Z)((e=>[{id:k,latitude:e[0],longitude:e[1],location_editable:!0}]))},{kind:"method",key:"_handleChange",value:function(e){const a=e.currentTarget;let i=a.value;"currency"===a.name&&i&&i in l&&(i=l[i]),this[`_${a.name}`]=i}},{kind:"method",key:"_locationChanged",value:function(e){this._location=e.detail.location}},{kind:"method",key:"_unitSystemChanged",value:function(e){this._unitSystem=e.target.value}},{kind:"method",key:"_detect",value:async function(){this._working=!0;try{const a=await(e=this.hass,e.callWS({type:"config/core/detect"}));a.latitude&&a.longitude&&(this.map.addEventListener("markers-updated",(()=>{this.map.fitMarker(k)}),{once:!0}),this._location=[Number(a.latitude),Number(a.longitude)]),a.elevation&&(this._elevation=String(a.elevation)),a.unit_system&&(this._unitSystem=a.unit_system),a.time_zone&&(this._timeZone=a.time_zone),a.currency&&(this._currency=a.currency)}catch(e){alert(`Failed to detect location information: ${e.message}`)}finally{this._working=!1}var e}},{kind:"method",key:"_save",value:async function(e){e.preventDefault(),this._working=!0;try{const e=this._locationValue;await(a=this.hass,i={location_name:this._nameValue,latitude:e[0],longitude:e[1],elevation:Number(this._elevationValue),unit_system:this._unitSystemValue,time_zone:this._timeZoneValue||"UTC",currency:this._currencyValue||"EUR"},a.callWS({type:"config/core/update",...i}));const r=await(0,u.Rj)(this.hass);(0,o.B)(this,"onboarding-step",{type:"core_config",result:r})}catch(e){this._working=!1,alert(`Failed to save: ${e.message}`)}var a,i}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      .row {
        display: flex;
        flex-direction: row;
        margin: 0 -8px;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
      }

      ha-locations-editor {
        height: 200px;
      }

      .flex {
        flex: 1;
      }

      .middle-text {
        margin: 24px 0;
      }

      .row > * {
        margin: 0 8px;
      }

      .radio-group {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .footer {
        margin-top: 16px;
        text-align: right;
      }
      a {
        color: var(--primary-color);
      }
    `}}]}}),r.oi)},52461:e=>{"use strict";e.exports=JSON.parse('{"Pacific/Niue":"(GMT-11:00) Niue","Pacific/Pago_Pago":"(GMT-11:00) Pago Pago","Pacific/Honolulu":"(GMT-10:00) Hawaii Time","Pacific/Rarotonga":"(GMT-10:00) Rarotonga","Pacific/Tahiti":"(GMT-10:00) Tahiti","Pacific/Marquesas":"(GMT-09:30) Marquesas","America/Anchorage":"(GMT-09:00) Alaska Time","Pacific/Gambier":"(GMT-09:00) Gambier","America/Los_Angeles":"(GMT-08:00) Pacific Time","America/Tijuana":"(GMT-08:00) Pacific Time - Tijuana","America/Vancouver":"(GMT-08:00) Pacific Time - Vancouver","America/Whitehorse":"(GMT-08:00) Pacific Time - Whitehorse","Pacific/Pitcairn":"(GMT-08:00) Pitcairn","America/Dawson_Creek":"(GMT-07:00) Mountain Time - Dawson Creek","America/Denver":"(GMT-07:00) Mountain Time","America/Edmonton":"(GMT-07:00) Mountain Time - Edmonton","America/Hermosillo":"(GMT-07:00) Mountain Time - Hermosillo","America/Mazatlan":"(GMT-07:00) Mountain Time - Chihuahua, Mazatlan","America/Phoenix":"(GMT-07:00) Mountain Time - Arizona","America/Yellowknife":"(GMT-07:00) Mountain Time - Yellowknife","America/Belize":"(GMT-06:00) Belize","America/Chicago":"(GMT-06:00) Central Time","America/Costa_Rica":"(GMT-06:00) Costa Rica","America/El_Salvador":"(GMT-06:00) El Salvador","America/Guatemala":"(GMT-06:00) Guatemala","America/Managua":"(GMT-06:00) Managua","America/Mexico_City":"(GMT-06:00) Central Time - Mexico City","America/Regina":"(GMT-06:00) Central Time - Regina","America/Tegucigalpa":"(GMT-06:00) Central Time - Tegucigalpa","America/Winnipeg":"(GMT-06:00) Central Time - Winnipeg","Pacific/Galapagos":"(GMT-06:00) Galapagos","America/Bogota":"(GMT-05:00) Bogota","America/Cancun":"(GMT-05:00) America Cancun","America/Cayman":"(GMT-05:00) Cayman","America/Guayaquil":"(GMT-05:00) Guayaquil","America/Havana":"(GMT-05:00) Havana","America/Iqaluit":"(GMT-05:00) Eastern Time - Iqaluit","America/Jamaica":"(GMT-05:00) Jamaica","America/Lima":"(GMT-05:00) Lima","America/Nassau":"(GMT-05:00) Nassau","America/New_York":"(GMT-05:00) Eastern Time","America/Panama":"(GMT-05:00) Panama","America/Port-au-Prince":"(GMT-05:00) Port-au-Prince","America/Rio_Branco":"(GMT-05:00) Rio Branco","America/Toronto":"(GMT-05:00) Eastern Time - Toronto","Pacific/Easter":"(GMT-05:00) Easter Island","America/Caracas":"(GMT-04:30) Caracas","America/Asuncion":"(GMT-03:00) Asuncion","America/Barbados":"(GMT-04:00) Barbados","America/Boa_Vista":"(GMT-04:00) Boa Vista","America/Campo_Grande":"(GMT-03:00) Campo Grande","America/Cuiaba":"(GMT-03:00) Cuiaba","America/Curacao":"(GMT-04:00) Curacao","America/Grand_Turk":"(GMT-04:00) Grand Turk","America/Guyana":"(GMT-04:00) Guyana","America/Halifax":"(GMT-04:00) Atlantic Time - Halifax","America/La_Paz":"(GMT-04:00) La Paz","America/Manaus":"(GMT-04:00) Manaus","America/Martinique":"(GMT-04:00) Martinique","America/Port_of_Spain":"(GMT-04:00) Port of Spain","America/Porto_Velho":"(GMT-04:00) Porto Velho","America/Puerto_Rico":"(GMT-04:00) Puerto Rico","America/Santo_Domingo":"(GMT-04:00) Santo Domingo","America/Thule":"(GMT-04:00) Thule","Atlantic/Bermuda":"(GMT-04:00) Bermuda","America/St_Johns":"(GMT-03:30) Newfoundland Time - St. Johns","America/Araguaina":"(GMT-03:00) Araguaina","America/Argentina/Buenos_Aires":"(GMT-03:00) Buenos Aires","America/Bahia":"(GMT-03:00) Salvador","America/Belem":"(GMT-03:00) Belem","America/Cayenne":"(GMT-03:00) Cayenne","America/Fortaleza":"(GMT-03:00) Fortaleza","America/Godthab":"(GMT-03:00) Godthab","America/Maceio":"(GMT-03:00) Maceio","America/Miquelon":"(GMT-03:00) Miquelon","America/Montevideo":"(GMT-03:00) Montevideo","America/Paramaribo":"(GMT-03:00) Paramaribo","America/Recife":"(GMT-03:00) Recife","America/Santiago":"(GMT-03:00) Santiago","America/Sao_Paulo":"(GMT-02:00) Sao Paulo","Antarctica/Palmer":"(GMT-03:00) Palmer","Antarctica/Rothera":"(GMT-03:00) Rothera","Atlantic/Stanley":"(GMT-03:00) Stanley","America/Noronha":"(GMT-02:00) Noronha","Atlantic/South_Georgia":"(GMT-02:00) South Georgia","America/Scoresbysund":"(GMT-01:00) Scoresbysund","Atlantic/Azores":"(GMT-01:00) Azores","Atlantic/Cape_Verde":"(GMT-01:00) Cape Verde","Africa/Abidjan":"(GMT+00:00) Abidjan","Africa/Accra":"(GMT+00:00) Accra","Africa/Bissau":"(GMT+00:00) Bissau","Africa/Casablanca":"(GMT+00:00) Casablanca","Africa/El_Aaiun":"(GMT+00:00) El Aaiun","Africa/Monrovia":"(GMT+00:00) Monrovia","America/Danmarkshavn":"(GMT+00:00) Danmarkshavn","Atlantic/Canary":"(GMT+00:00) Canary Islands","Atlantic/Faroe":"(GMT+00:00) Faeroe","Atlantic/Reykjavik":"(GMT+00:00) Reykjavik","Etc/GMT":"(GMT+00:00) GMT (no daylight saving)","Europe/Dublin":"(GMT+00:00) Dublin","Europe/Lisbon":"(GMT+00:00) Lisbon","Europe/London":"(GMT+00:00) London","Africa/Algiers":"(GMT+01:00) Algiers","Africa/Ceuta":"(GMT+01:00) Ceuta","Africa/Lagos":"(GMT+01:00) Lagos","Africa/Ndjamena":"(GMT+01:00) Ndjamena","Africa/Tunis":"(GMT+01:00) Tunis","Africa/Windhoek":"(GMT+02:00) Windhoek","Europe/Amsterdam":"(GMT+01:00) Amsterdam","Europe/Andorra":"(GMT+01:00) Andorra","Europe/Belgrade":"(GMT+01:00) Central European Time - Belgrade","Europe/Berlin":"(GMT+01:00) Berlin","Europe/Brussels":"(GMT+01:00) Brussels","Europe/Budapest":"(GMT+01:00) Budapest","Europe/Copenhagen":"(GMT+01:00) Copenhagen","Europe/Gibraltar":"(GMT+01:00) Gibraltar","Europe/Luxembourg":"(GMT+01:00) Luxembourg","Europe/Madrid":"(GMT+01:00) Madrid","Europe/Malta":"(GMT+01:00) Malta","Europe/Monaco":"(GMT+01:00) Monaco","Europe/Oslo":"(GMT+01:00) Oslo","Europe/Paris":"(GMT+01:00) Paris","Europe/Prague":"(GMT+01:00) Central European Time - Prague","Europe/Rome":"(GMT+01:00) Rome","Europe/Stockholm":"(GMT+01:00) Stockholm","Europe/Tirane":"(GMT+01:00) Tirane","Europe/Vienna":"(GMT+01:00) Vienna","Europe/Warsaw":"(GMT+01:00) Warsaw","Europe/Zurich":"(GMT+01:00) Zurich","Africa/Cairo":"(GMT+02:00) Cairo","Africa/Johannesburg":"(GMT+02:00) Johannesburg","Africa/Maputo":"(GMT+02:00) Maputo","Africa/Tripoli":"(GMT+02:00) Tripoli","Asia/Amman":"(GMT+02:00) Amman","Asia/Beirut":"(GMT+02:00) Beirut","Asia/Damascus":"(GMT+02:00) Damascus","Asia/Gaza":"(GMT+02:00) Gaza","Asia/Jerusalem":"(GMT+02:00) Jerusalem","Asia/Nicosia":"(GMT+02:00) Nicosia","Europe/Athens":"(GMT+02:00) Athens","Europe/Bucharest":"(GMT+02:00) Bucharest","Europe/Chisinau":"(GMT+02:00) Chisinau","Europe/Helsinki":"(GMT+02:00) Helsinki","Europe/Istanbul":"(GMT+02:00) Istanbul","Europe/Kaliningrad":"(GMT+02:00) Moscow-01 - Kaliningrad","Europe/Kiev":"(GMT+02:00) Kiev","Europe/Riga":"(GMT+02:00) Riga","Europe/Sofia":"(GMT+02:00) Sofia","Europe/Tallinn":"(GMT+02:00) Tallinn","Europe/Vilnius":"(GMT+02:00) Vilnius","Africa/Khartoum":"(GMT+03:00) Khartoum","Africa/Nairobi":"(GMT+03:00) Nairobi","Antarctica/Syowa":"(GMT+03:00) Syowa","Asia/Baghdad":"(GMT+03:00) Baghdad","Asia/Qatar":"(GMT+03:00) Qatar","Asia/Riyadh":"(GMT+03:00) Riyadh","Europe/Minsk":"(GMT+03:00) Minsk","Europe/Moscow":"(GMT+03:00) Moscow+00 - Moscow","Asia/Tehran":"(GMT+03:30) Tehran","Asia/Baku":"(GMT+04:00) Baku","Asia/Dubai":"(GMT+04:00) Dubai","Asia/Tbilisi":"(GMT+04:00) Tbilisi","Asia/Yerevan":"(GMT+04:00) Yerevan","Europe/Samara":"(GMT+04:00) Moscow+01 - Samara","Indian/Mahe":"(GMT+04:00) Mahe","Indian/Mauritius":"(GMT+04:00) Mauritius","Indian/Reunion":"(GMT+04:00) Reunion","Asia/Kabul":"(GMT+04:30) Kabul","Antarctica/Mawson":"(GMT+05:00) Mawson","Asia/Aqtau":"(GMT+05:00) Aqtau","Asia/Aqtobe":"(GMT+05:00) Aqtobe","Asia/Ashgabat":"(GMT+05:00) Ashgabat","Asia/Dushanbe":"(GMT+05:00) Dushanbe","Asia/Karachi":"(GMT+05:00) Karachi","Asia/Tashkent":"(GMT+05:00) Tashkent","Asia/Yekaterinburg":"(GMT+05:00) Moscow+02 - Yekaterinburg","Indian/Kerguelen":"(GMT+05:00) Kerguelen","Indian/Maldives":"(GMT+05:00) Maldives","Asia/Calcutta":"(GMT+05:30) India Standard Time","Asia/Colombo":"(GMT+05:30) Colombo","Asia/Katmandu":"(GMT+05:45) Katmandu","Antarctica/Vostok":"(GMT+06:00) Vostok","Asia/Almaty":"(GMT+06:00) Almaty","Asia/Bishkek":"(GMT+06:00) Bishkek","Asia/Dhaka":"(GMT+06:00) Dhaka","Asia/Omsk":"(GMT+06:00) Moscow+03 - Omsk, Novosibirsk","Asia/Thimphu":"(GMT+06:00) Thimphu","Indian/Chagos":"(GMT+06:00) Chagos","Asia/Rangoon":"(GMT+06:30) Rangoon","Indian/Cocos":"(GMT+06:30) Cocos","Antarctica/Davis":"(GMT+07:00) Davis","Asia/Bangkok":"(GMT+07:00) Bangkok","Asia/Hovd":"(GMT+07:00) Hovd","Asia/Jakarta":"(GMT+07:00) Jakarta","Asia/Krasnoyarsk":"(GMT+07:00) Moscow+04 - Krasnoyarsk","Asia/Saigon":"(GMT+07:00) Hanoi","Asia/Ho_Chi_Minh":"(GMT+07:00) Ho Chi Minh","Indian/Christmas":"(GMT+07:00) Christmas","Antarctica/Casey":"(GMT+08:00) Casey","Asia/Brunei":"(GMT+08:00) Brunei","Asia/Choibalsan":"(GMT+08:00) Choibalsan","Asia/Hong_Kong":"(GMT+08:00) Hong Kong","Asia/Irkutsk":"(GMT+08:00) Moscow+05 - Irkutsk","Asia/Kuala_Lumpur":"(GMT+08:00) Kuala Lumpur","Asia/Macau":"(GMT+08:00) Macau","Asia/Makassar":"(GMT+08:00) Makassar","Asia/Manila":"(GMT+08:00) Manila","Asia/Shanghai":"(GMT+08:00) China Time - Beijing","Asia/Singapore":"(GMT+08:00) Singapore","Asia/Taipei":"(GMT+08:00) Taipei","Asia/Ulaanbaatar":"(GMT+08:00) Ulaanbaatar","Australia/Perth":"(GMT+08:00) Western Time - Perth","Asia/Pyongyang":"(GMT+08:30) Pyongyang","Asia/Dili":"(GMT+09:00) Dili","Asia/Jayapura":"(GMT+09:00) Jayapura","Asia/Seoul":"(GMT+09:00) Seoul","Asia/Tokyo":"(GMT+09:00) Tokyo","Asia/Yakutsk":"(GMT+09:00) Moscow+06 - Yakutsk","Pacific/Palau":"(GMT+09:00) Palau","Australia/Adelaide":"(GMT+10:30) Central Time - Adelaide","Australia/Darwin":"(GMT+09:30) Central Time - Darwin","Antarctica/DumontDUrville":"(GMT+10:00) Dumont D\'Urville","Asia/Magadan":"(GMT+10:00) Moscow+07 - Magadan","Asia/Vladivostok":"(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk","Australia/Brisbane":"(GMT+10:00) Eastern Time - Brisbane","Australia/Hobart":"(GMT+11:00) Eastern Time - Hobart","Australia/Sydney":"(GMT+11:00) Eastern Time - Melbourne, Sydney","Pacific/Chuuk":"(GMT+10:00) Truk","Pacific/Guam":"(GMT+10:00) Guam","Pacific/Port_Moresby":"(GMT+10:00) Port Moresby","Pacific/Efate":"(GMT+11:00) Efate","Pacific/Guadalcanal":"(GMT+11:00) Guadalcanal","Pacific/Kosrae":"(GMT+11:00) Kosrae","Pacific/Norfolk":"(GMT+11:00) Norfolk","Pacific/Noumea":"(GMT+11:00) Noumea","Pacific/Pohnpei":"(GMT+11:00) Ponape","Asia/Kamchatka":"(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy","Pacific/Auckland":"(GMT+13:00) Auckland","Pacific/Fiji":"(GMT+13:00) Fiji","Pacific/Funafuti":"(GMT+12:00) Funafuti","Pacific/Kwajalein":"(GMT+12:00) Kwajalein","Pacific/Majuro":"(GMT+12:00) Majuro","Pacific/Nauru":"(GMT+12:00) Nauru","Pacific/Tarawa":"(GMT+12:00) Tarawa","Pacific/Wake":"(GMT+12:00) Wake","Pacific/Wallis":"(GMT+12:00) Wallis","Pacific/Apia":"(GMT+14:00) Apia","Pacific/Enderbury":"(GMT+13:00) Enderbury","Pacific/Fakaofo":"(GMT+13:00) Fakaofo","Pacific/Tongatapu":"(GMT+13:00) Tongatapu","Pacific/Kiritimati":"(GMT+14:00) Kiritimati"}')}}]);
//# sourceMappingURL=5ec604f1.js.map