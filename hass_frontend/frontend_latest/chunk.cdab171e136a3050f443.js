(self.webpackJsonp=self.webpackJsonp||[]).push([[74],{294:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return o}));const a=async(e,t=!1)=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const a=await i.e(124).then(i.t.bind(null,367,7));a.Icon.Default.imagePath="/static/images/leaflet/images/";const n=a.map(e),s=document.createElement("link");return s.setAttribute("href","/static/images/leaflet/leaflet.css"),s.setAttribute("rel","stylesheet"),e.parentNode.appendChild(s),n.setView([52.3731339,4.8903147],13),o(a,t).addTo(n),[n,a]},o=(e,t)=>e.tileLayer(`https://{s}.basemaps.cartocdn.com/${t?"dark_all":"light_all"}/{z}/{x}/{y}${e.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},362:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return o}));const a=(e,t)=>e.callWS(Object.assign({type:"config/core/update"},t)),o=e=>e.callWS({type:"config/core/detect"})},408:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var a=i(464),o=i.n(a);const n=()=>{const e=document.createElement("datalist");return e.id="timezones",Object.keys(o.a).forEach(t=>{const i=document.createElement("option");i.value=t,i.innerHTML=o.a[t],e.appendChild(i)}),e}},409:function(e,t,i){"use strict";var a=i(4),o=i(0),n=i(294),s=i(18);let c=class extends o.a{constructor(){super(...arguments),this.fitZoom=16}fitMap(){this._leafletMap&&this.location&&this._leafletMap.setView(this.location,this.fitZoom)}render(){return o.f`
      <div id="map"></div>
    `}firstUpdated(e){super.firstUpdated(e),this._initMap()}updated(e){super.updated(e),this.Leaflet&&(this._updateMarker(),this._ignoreFitToMap&&this._ignoreFitToMap===this.location||this.fitMap(),this._ignoreFitToMap=void 0)}get _mapEl(){return this.shadowRoot.querySelector("div")}async _initMap(){[this._leafletMap,this.Leaflet]=await Object(n.b)(this._mapEl),this._leafletMap.addEventListener("click",e=>this._updateLocation(e.latlng)),this._updateMarker(),this.fitMap(),this._leafletMap.invalidateSize()}_updateLocation(e){this.location=this._ignoreFitToMap=[e.lat,e.lng],Object(s.a)(this,"change",void 0,{bubbles:!1})}_updateMarker(){this.location?this._locationMarker?this._locationMarker.setLatLng(this.location):(this._locationMarker=this.Leaflet.marker(this.location,{draggable:!0}),this._locationMarker.addEventListener("dragend",e=>this._updateLocation(e.target.getLatLng())),this._leafletMap.addLayer(this._locationMarker)):this._locationMarker&&(this._locationMarker.remove(),this._locationMarker=void 0)}static get styles(){return o.c`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
    `}};Object(a.b)([Object(o.g)()],c.prototype,"location",void 0),c=Object(a.b)([Object(o.d)("ha-location-editor")],c)},678:function(e,t,i){"use strict";i.r(t);var a=i(4),o=i(0),n=(i(85),i(93),i(257),i(242),i(362)),s=i(112),c=i(18),r=i(408);i(409);const l=[52.3731339,4.8903147];let d=class extends o.a{constructor(){super(...arguments),this._working=!1}render(){return o.f`
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
        <ha-location-editor
          class="flex"
          .location=${this._locationValue}
          .fitZoom=${14}
          @change=${this._locationChanged}
        ></ha-location-editor>
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
        <paper-radio-group
          class="flex"
          .selected=${this._unitSystemValue}
          @selected-changed=${this._unitSystemChanged}
        >
          <paper-radio-button name="metric" .disabled=${this._working}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")}
            <div class="secondary">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example")}
            </div>
          </paper-radio-button>
          <paper-radio-button name="imperial" .disabled=${this._working}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial")}
            <div class="secondary">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.imperial_example")}
            </div>
          </paper-radio-button>
        </paper-radio-group>
      </div>

      <div class="footer">
        <mwc-button @click=${this._save} .disabled=${this._working}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")}
        </mwc-button>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),setTimeout(()=>this.shadowRoot.querySelector("paper-input").focus(),100),this.addEventListener("keypress",e=>{13===e.keyCode&&this._save(e)}),this.shadowRoot.querySelector("[name=timeZone]").inputElement.appendChild(Object(r.a)())}get _nameValue(){return void 0!==this._name?this._name:this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default")}get _locationValue(){return this._location||l}get _elevationValue(){return void 0!==this._elevation?this._elevation:0}get _timeZoneValue(){return this._timeZone}get _unitSystemValue(){return void 0!==this._unitSystem?this._unitSystem:"metric"}_handleChange(e){const t=e.currentTarget;this[`_${t.name}`]=t.value}_locationChanged(e){this._location=e.currentTarget.location}_unitSystemChanged(e){this._unitSystem=e.detail.value}async _detect(){this._working=!0;try{const e=await Object(n.a)(this.hass);e.latitude&&e.longitude&&(this._location=[Number(e.latitude),Number(e.longitude)]),e.elevation&&(this._elevation=String(e.elevation)),e.unit_system&&(this._unitSystem=e.unit_system),e.time_zone&&(this._timeZone=e.time_zone)}catch(e){alert(`Failed to detect location information: ${e.message}`)}finally{this._working=!1}}async _save(e){e.preventDefault(),this._working=!0;try{const e=this._locationValue;await Object(n.b)(this.hass,{location_name:this._nameValue,latitude:e[0],longitude:e[1],elevation:Number(this._elevationValue),unit_system:this._unitSystemValue,time_zone:this._timeZoneValue||"UTC"});const t=await Object(s.b)(this.hass);Object(c.a)(this,"onboarding-step",{type:"core_config",result:t})}catch(t){this._working=!1,alert("FAIL")}}static get styles(){return o.c`
      .row {
        display: flex;
        flex-direction: row;
        margin: 0 -8px;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
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
      .footer {
        margin-top: 16px;
        text-align: right;
      }
    `}};Object(a.b)([Object(o.g)()],d.prototype,"hass",void 0),Object(a.b)([Object(o.g)()],d.prototype,"onboardingLocalize",void 0),Object(a.b)([Object(o.g)()],d.prototype,"_working",void 0),Object(a.b)([Object(o.g)()],d.prototype,"_name",void 0),Object(a.b)([Object(o.g)()],d.prototype,"_location",void 0),Object(a.b)([Object(o.g)()],d.prototype,"_elevation",void 0),Object(a.b)([Object(o.g)()],d.prototype,"_unitSystem",void 0),Object(a.b)([Object(o.g)()],d.prototype,"_timeZone",void 0),d=Object(a.b)([Object(o.d)("onboarding-core-config")],d)}}]);
//# sourceMappingURL=chunk.cdab171e136a3050f443.js.map