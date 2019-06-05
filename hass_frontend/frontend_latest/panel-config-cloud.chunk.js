(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-cloud"],{

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));

/***/ }),

/***/ "./src/common/entity/entity_filter.ts":
/*!********************************************!*\
  !*** ./src/common/entity/entity_filter.ts ***!
  \********************************************/
/*! exports provided: isEmptyFilter, generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyFilter", function() { return isEmptyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const isEmptyFilter = filter => filter.include_domains.length + filter.include_entities.length + filter.exclude_domains.length + filter.exclude_entities.length === 0;
const generateFilter = (includeDomains, includeEntities, excludeDomains, excludeEntities) => {
  const includeDomainsSet = new Set(includeDomains);
  const includeEntitiesSet = new Set(includeEntities);
  const excludeDomainsSet = new Set(excludeDomains);
  const excludeEntitiesSet = new Set(excludeEntities);
  const haveInclude = includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
  const haveExclude = excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0; // Case 1 - no includes or excludes - pass all entities

  if (!haveInclude && !haveExclude) {
    return () => true;
  } // Case 2 - includes, no excludes - only include specified entities


  if (haveInclude && !haveExclude) {
    return entityId => includeEntitiesSet.has(entityId) || includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId));
  } // Case 3 - excludes, no includes - only exclude specified entities


  if (!haveInclude && haveExclude) {
    return entityId => !excludeEntitiesSet.has(entityId) && !excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId));
  } // Case 4 - both includes and excludes specified
  // Case 4a - include domain specified
  //  - if domain is included, pass if entity not excluded
  //  - if domain is not included, pass if entity is included
  // note: if both include and exclude domains specified,
  //   the exclude domains are ignored


  if (includeDomainsSet.size) {
    return entityId => includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId)) ? !excludeEntitiesSet.has(entityId) : includeEntitiesSet.has(entityId);
  } // Case 4b - exclude domain specified
  //  - if domain is excluded, pass if entity is included
  //  - if domain is not excluded, pass if entity not excluded


  if (excludeDomainsSet.size) {
    return entityId => excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId)) ? includeEntitiesSet.has(entityId) : !excludeEntitiesSet.has(entityId);
  } // Case 4c - neither include or exclude domain specified
  //  - Only pass if entity is included.  Ignore entity excludes.


  return entityId => includeEntitiesSet.has(entityId);
};

/***/ }),

/***/ "./src/components/buttons/ha-call-api-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-call-api-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




class HaCallApiButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  constructor() {
    super();
    this.method = "POST";
    this.data = {};
    this.disabled = false;
    this.progress = false;
  }

  static get properties() {
    return {
      hass: {},
      progress: Boolean,
      path: String,
      method: String,
      data: {},
      disabled: Boolean
    };
  }

  get progressButton() {
    return this.renderRoot.querySelector("ha-progress-button");
  }

  async _buttonTapped() {
    this.progress = true;
    const eventData = {
      method: this.method,
      path: this.path,
      data: this.data
    };

    try {
      const resp = await this.hass.callApi(this.method, this.path, this.data);
      this.progress = false;
      this.progressButton.actionSuccess();
      eventData.success = true;
      eventData.response = resp;
    } catch (err) {
      this.progress = false;
      this.progressButton.actionError();
      eventData.success = false;
      eventData.response = err;
    }

    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "hass-api-called", eventData);
  }

}

customElements.define("ha-call-api-button", HaCallApiButton);

/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");





class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("ha-progress-button", HaProgressButton);

/***/ }),

/***/ "./src/data/webhook.ts":
/*!*****************************!*\
  !*** ./src/data/webhook.ts ***!
  \*****************************/
/*! exports provided: fetchWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWebhooks", function() { return fetchWebhooks; });
const fetchWebhooks = hass => hass.callWS({
  type: "webhook/list"
});

/***/ }),

/***/ "./src/panels/config/cloud/cloud-alexa-pref.ts":
/*!*****************************************************!*\
  !*** ./src/panels/config/cloud/cloud-alexa-pref.ts ***!
  \*****************************************************/
/*! exports provided: CloudAlexaPref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudAlexaPref", function() { return CloudAlexaPref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cloud_exposed_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud-exposed-entities */ "./src/panels/config/cloud/cloud-exposed-entities.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/cloud */ "./src/data/cloud.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // tslint:disable-next-line





class CloudAlexaPref extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "cloudStatus", void 0);
  }

  static get properties() {
    return {
      hass: {},
      cloudStatus: {}
    };
  }

  render() {
    if (!this.cloudStatus) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }

    const enabled = this.cloudStatus.prefs.alexa_enabled;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="Alexa">
        <paper-toggle-button
          .checked="${enabled}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          With the Alexa integration for ioBroker Cloud you'll be able to
          control all your ioBroker devices via any Alexa-enabled device.
          <ul>
            <li>
              To activate, search in the Alexa app for the ioBroker Smart
              Home skill.
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/amazon_alexa/"
                target="_blank"
              >
                Config documentation
              </a>
            </li>
          </ul>
          <em
            >This integration requires an Alexa-enabled device like the Amazon
            Echo.</em
          >
          ${enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <p>Exposed entities:</p>
                <cloud-exposed-entities
                  .hass="${this.hass}"
                  .filter="${this.cloudStatus.alexa_entities}"
                  .supportedDomains="${this.cloudStatus.alexa_domains}"
                ></cloud-exposed-entities>
              ` : ""}
        </div>
      </ha-card>
    `;
  }

  async _toggleChanged(ev) {
    const toggle = ev.target;

    try {
      await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
        alexa_enabled: toggle.checked
      });
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "ha-refresh-cloud-status");
    } catch (err) {
      toggle.checked = !toggle.checked;
    }
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
    `;
  }

}
customElements.define("cloud-alexa-pref", CloudAlexaPref);

/***/ }),

/***/ "./src/panels/config/cloud/cloud-exposed-entities.ts":
/*!***********************************************************!*\
  !*** ./src/panels/config/cloud/cloud-exposed-entities.ts ***!
  \***********************************************************/
/*! exports provided: CloudExposedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudExposedEntities", function() { return CloudExposedEntities; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CloudExposedEntities extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "filter", void 0);

    _defineProperty(this, "supportedDomains", void 0);

    _defineProperty(this, "_filterFunc", void 0);
  }

  static get properties() {
    return {
      hass: {},
      filter: {},
      supportedDomains: {},
      _filterFunc: {}
    };
  }

  render() {
    if (!this._filterFunc) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }

    const states = [];
    Object.keys(this.hass.states).forEach(entityId => {
      if (this._filterFunc(entityId)) {
        const stateObj = this.hass.states[entityId];
        states.push([Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj), stateObj]);
      }
    });
    states.sort();
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.renderStyle()}
      ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__["repeat"])(states, stateInfo => stateInfo[1].entity_id, stateInfo => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <span>
            <ha-state-icon
              .stateObj="${stateInfo[1]}"
              @click="${this._handleMoreInfo}"
            ></ha-state-icon>
            <paper-tooltip position="bottom">${stateInfo[0]}</paper-tooltip>
          </span>
        `)}
    `;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("filter") && changedProperties.get("filter") !== this.filter) {
      const filter = this.filter;
      const filterFunc = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities);
      const domains = new Set(this.supportedDomains);

      this._filterFunc = entityId => {
        const domain = entityId.split(".")[0];
        return domains.has(domain) && filterFunc(entityId);
      };
    }
  }

  _handleMoreInfo(ev) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", {
      entityId: ev.currentTarget.stateObj.entity_id
    });
  }

  renderStyle() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        ha-state-icon {
          color: var(--primary-text-color);
          cursor: pointer;
        }
      </style>
    `;
  }

}
customElements.define("cloud-exposed-entities", CloudExposedEntities);

/***/ }),

/***/ "./src/panels/config/cloud/cloud-google-pref.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/cloud-google-pref.ts ***!
  \******************************************************/
/*! exports provided: CloudGooglePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudGooglePref", function() { return CloudGooglePref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/cloud */ "./src/data/cloud.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // tslint:disable-next-line





class CloudGooglePref extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "cloudStatus", void 0);
  }

  static get properties() {
    return {
      hass: {},
      cloudStatus: {}
    };
  }

  render() {
    if (!this.cloudStatus) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }

    const {
      google_enabled,
      google_secure_devices_pin
    } = this.cloudStatus.prefs;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="Google Assistant">
        <paper-toggle-button
          id="google_enabled"
          .checked="${google_enabled}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          With the Google Assistant integration for ioBroker Cloud you'll
          be able to control all your ioBroker devices via any Google
          Assistant-enabled device.
          <ul>
            <li>
              <a
                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"
                target="_blank"
              >
                Activate the ioBroker skill for Google Assistant
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/google_assistant/"
                target="_blank"
              >
                Config documentation
              </a>
            </li>
          </ul>
          <em
            >This integration requires a Google Assistant-enabled device like
            the Google Home or Android phone.</em
          >
          ${google_enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="secure_devices">
                  Please enter a pin to interact with security devices. Security
                  devices are doors, garage doors and locks. You will be asked
                  to say/enter this pin when interacting with such devices via
                  Google Assistant.
                  <paper-input
                    label="Secure Devices Pin"
                    id="google_secure_devices_pin"
                    placeholder="Secure devices disabled"
                    .value=${google_secure_devices_pin || ""}
                    @change="${this._pinChanged}"
                  ></paper-input>
                </div>
              ` : ""}
        </div>
        <div class="card-actions">
          <ha-call-api-button
            .hass="${this.hass}"
            .disabled="${!google_enabled}"
            path="cloud/google_actions/sync"
          >
            Sync entities to Google
          </ha-call-api-button>
          <div class="spacer"></div>
          <a href="/config/cloud/google-assistant">
            <mwc-button>Manage Entities</mwc-button>
          </a>
        </div>
      </ha-card>
    `;
  }

  async _toggleChanged(ev) {
    const toggle = ev.target;

    try {
      await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
        [toggle.id]: toggle.checked
      });
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
    } catch (err) {
      toggle.checked = !toggle.checked;
    }
  }

  async _pinChanged(ev) {
    const input = ev.target;

    try {
      await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
        [input.id]: input.value || null
      });
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
    } catch (err) {
      alert(`Unable to store pin: ${err.message}`);
      input.value = this.cloudStatus.prefs.google_secure_devices_pin;
    }
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      ha-call-api-button {
        color: var(--primary-color);
        font-weight: 500;
      }
      .secure_devices {
        padding-top: 16px;
      }
      paper-input {
        width: 200px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `;
  }

}
customElements.define("cloud-google-pref", CloudGooglePref);

/***/ }),

/***/ "./src/panels/config/cloud/cloud-remote-pref.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/cloud-remote-pref.ts ***!
  \******************************************************/
/*! exports provided: CloudRemotePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRemotePref", function() { return CloudRemotePref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-dialog-cloud-certificate */ "./src/panels/config/cloud/show-dialog-cloud-certificate.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // tslint:disable-next-line





let CloudRemotePref = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("cloud-remote-pref")], function (_initialize, _LitElement) {
  class CloudRemotePref extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudRemotePref,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "get",
      static: true,
      key: "properties",
      value: function properties() {
        return {
          hass: {},
          cloudStatus: {}
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.cloudStatus) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const {
          remote_connected,
          remote_domain,
          remote_certificate
        } = this.cloudStatus;

        if (!remote_certificate) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-card header="Remote Control">
          <div class="preparing">
            Remote access is being prepared. We will notify you when it's ready.
          </div>
        </ha-card>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="Remote Control">
        <paper-toggle-button
          .checked="${remote_connected}"
          @change="${this._toggleChanged}"
        ></paper-toggle-button>
        <div class="card-content">
          ioBroker Cloud provides a secure remote connection to your
          instance while away from home. Your instance
          ${remote_connected ? "is" : "will be"} available at
          <a href="https://${remote_domain}" target="_blank">
            https://${remote_domain}</a
          >.
        </div>
        <div class="card-actions">
          <a href="https://www.nabucasa.com/config/remote/" target="_blank">
            <mwc-button>Learn how it works</mwc-button>
          </a>
          ${remote_certificate ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="spacer"></div>
                <mwc-button @click=${this._openCertInfo}>
                  Certificate Info
                </mwc-button>
              ` : ""}
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "_openCertInfo",
      value: function _openCertInfo() {
        Object(_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__["showCloudCertificateDialog"])(this, {
          certificateInfo: this.cloudStatus.remote_certificate
        });
      }
    }, {
      kind: "method",
      key: "_toggleChanged",
      value: async function _toggleChanged(ev) {
        const toggle = ev.target;

        try {
          if (toggle.checked) {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["connectCloudRemote"])(this.hass);
          } else {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["disconnectCloudRemote"])(this.hass);
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          alert(err.message);
          toggle.checked = !toggle.checked;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .preparing {
        padding: 0 16px 16px;
      }
      a {
        color: var(--primary-color);
      }
      ha-card > paper-toggle-button {
        margin: -4px 0;
        position: absolute;
        right: 8px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/cloud/cloud-webhooks.ts":
/*!***************************************************!*\
  !*** ./src/panels/config/cloud/cloud-webhooks.ts ***!
  \***************************************************/
/*! exports provided: CloudWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudWebhooks", function() { return CloudWebhooks; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_webhook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/webhook */ "./src/data/webhook.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _show_cloud_webhook_manage_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-cloud-webhook-manage-dialog */ "./src/panels/config/cloud/show-cloud-webhook-manage-dialog.ts");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class CloudWebhooks extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      hass: {},
      cloudStatus: {},
      _cloudHooks: {},
      _localHooks: {},
      _progress: {}
    };
  }

  constructor() {
    super();

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "cloudStatus", void 0);

    _defineProperty(this, "_cloudHooks", void 0);

    _defineProperty(this, "_localHooks", void 0);

    _defineProperty(this, "_progress", void 0);

    this._progress = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this._fetchData();
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.renderStyle()}
      <ha-card header="Webhooks">
        <div class="card-content">
          Anything that is configured to be triggered by a webhook can be given
          a publicly accessible URL to allow you to send data back to Home
          Assistant from anywhere, without exposing your instance to the
          internet. ${this._renderBody()}

          <div class="footer">
            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">
              Learn more about creating webhook-powered automations.
            </a>
          </div>
        </div>
      </ha-card>
    `;
  }

  updated(changedProps) {
    super.updated(changedProps);

    if (changedProps.has("cloudStatus") && this.cloudStatus) {
      this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
    }
  }

  _renderBody() {
    if (!this.cloudStatus || !this._localHooks || !this._cloudHooks) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="body-text">Loading…</div>
      `;
    }

    if (this._localHooks.length === 0) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="body-text">
          Looks like you have no webhooks yet. Get started by configuring a
          <a href="/config/integrations">webhook-based integration</a> or by
          creating a <a href="/config/automation/new">webhook automation</a>.
        </div>
      `;
    }

    return this._localHooks.map(entry => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="webhook" .entry="${entry}">
          <paper-item-body two-line>
            <div>
              ${entry.name}
              ${entry.domain === entry.name.toLowerCase() ? "" : ` (${entry.domain})`}
            </div>
            <div secondary>${entry.webhook_id}</div>
          </paper-item-body>
          ${this._progress.includes(entry.webhook_id) ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="progress">
                  <paper-spinner active></paper-spinner>
                </div>
              ` : this._cloudHooks[entry.webhook_id] ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <mwc-button @click="${this._handleManageButton}">
                  Manage
                </mwc-button>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-toggle-button
                  @click="${this._enableWebhook}"
                ></paper-toggle-button>
              `}
        </div>
      `);
  }

  _showDialog(webhookId) {
    const webhook = this._localHooks.find(ent => ent.webhook_id === webhookId);

    const cloudhook = this._cloudHooks[webhookId];
    Object(_show_cloud_webhook_manage_dialog__WEBPACK_IMPORTED_MODULE_8__["showManageCloudhookDialog"])(this, {
      webhook,
      cloudhook,
      disableHook: () => this._disableWebhook(webhookId)
    });
  }

  _handleManageButton(ev) {
    const entry = ev.currentTarget.parentElement.entry;

    this._showDialog(entry.webhook_id);
  }

  async _enableWebhook(ev) {
    const entry = ev.currentTarget.parentElement.entry;
    this._progress = [...this._progress, entry.webhook_id];
    let updatedWebhook;

    try {
      updatedWebhook = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["createCloudhook"])(this.hass, entry.webhook_id);
    } catch (err) {
      alert(err.message);
      return;
    } finally {
      this._progress = this._progress.filter(wid => wid !== entry.webhook_id);
    }

    this._cloudHooks = Object.assign({}, this._cloudHooks, {
      [entry.webhook_id]: updatedWebhook
    }); // Only open dialog if we're not also enabling others, otherwise it's confusing

    if (this._progress.length === 0) {
      this._showDialog(entry.webhook_id);
    }
  }

  async _disableWebhook(webhookId) {
    this._progress = [...this._progress, webhookId];

    try {
      await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["deleteCloudhook"])(this.hass, webhookId);
    } catch (err) {
      alert(`Failed to disable webhook: ${err.message}`);
      return;
    } finally {
      this._progress = this._progress.filter(wid => wid !== webhookId);
    } // Remove cloud related parts from entry.


    const _ref = this._cloudHooks,
          newHooks = _objectWithoutPropertiesLoose(_ref, [webhookId].map(_toPropertyKey));

    this._cloudHooks = newHooks;
  }

  async _fetchData() {
    this._localHooks = this.hass.config.components.includes("webhook") ? await Object(_data_webhook__WEBPACK_IMPORTED_MODULE_6__["fetchWebhooks"])(this.hass) : [];
  }

  renderStyle() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .body-text {
          padding: 8px 0;
        }
        .webhook {
          display: flex;
          padding: 4px 0;
        }
        .progress {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer {
          padding-top: 16px;
        }
        .body-text a,
        .footer a {
          color: var(--primary-color);
        }
      </style>
    `;
  }

}
customElements.define("cloud-webhooks", CloudWebhooks);

/***/ }),

/***/ "./src/panels/config/cloud/ha-config-cloud-account.js":
/*!************************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud-account.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _cloud_webhooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cloud-webhooks */ "./src/panels/config/cloud/cloud-webhooks.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _cloud_alexa_pref__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cloud-alexa-pref */ "./src/panels/config/cloud/cloud-alexa-pref.ts");
/* harmony import */ var _cloud_google_pref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cloud-google-pref */ "./src/panels/config/cloud/cloud-google-pref.ts");
/* harmony import */ var _cloud_remote_pref__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cloud-remote-pref */ "./src/panels/config/cloud/cloud-remote-pref.ts");



















let registeredWebhookDialog = false;
/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HaConfigCloudAccount extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        .account-row {
          display: flex;
          padding: 0 16px;
        }
        mwc-button {
          align-self: center;
        }
        .soon {
          font-style: italic;
          margin-top: 24px;
          text-align: center;
        }
        .nowrap {
          white-space: nowrap;
        }
        .wrap {
          white-space: normal;
        }
        .status {
          text-transform: capitalize;
          padding: 16px;
        }
        a {
          color: var(--primary-color);
        }
      </style>
      <hass-subpage header="ioBroker Cloud">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">ioBroker Cloud</span>
            <div slot="introduction">
              <p>
                Thank you for being part of ioBroker Cloud. It's because
                of people like you that we are able to make a great home
                automation experience for everyone. Thank you!
              </p>
            </div>

            <ha-card header="Nabu Casa Account">
              <div class="account-row">
                <paper-item-body two-line="">
                  [[cloudStatus.email]]
                  <div secondary class="wrap">
                    [[_formatSubscription(_subscription)]]
                  </div>
                </paper-item-body>
              </div>

              <div class="account-row">
                <paper-item-body> Cloud connection status </paper-item-body>
                <div class="status">[[cloudStatus.cloud]]</div>
              </div>

              <div class="card-actions">
                <a href="https://account.nabucasa.com" target="_blank"
                  ><mwc-button>Manage Account</mwc-button></a
                >
                <mwc-button style="float: right" on-click="handleLogout"
                  >Sign out</mwc-button
                >
              </div>
            </ha-card>
          </ha-config-section>

          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">Integrations</span>
            <div slot="introduction">
              <p>
                Integrations for ioBroker Cloud allow you to connect with
                services in the cloud without having to expose your Home
                Assistant instance publicly on the internet.
              </p>
              <p>
                Check the website for
                <a href="https://www.nabucasa.com" target="_blank"
                  >all available features</a
                >.
              </p>
            </div>

            <cloud-remote-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-remote-pref>

            <cloud-alexa-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-alexa-pref>

            <cloud-google-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-google-pref>

            <cloud-webhooks
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-webhooks>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      cloudStatus: Object,
      _subscription: {
        type: Object,
        value: null
      }
    };
  }

  ready() {
    super.ready();

    this._fetchSubscriptionInfo();
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredWebhookDialog) {
      registeredWebhookDialog = true;
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__["fireEvent"])(this, "register-dialog", {
        dialogShowEvent: "manage-cloud-webhook",
        dialogTag: "cloud-webhook-manage-dialog",
        dialogImport: () => Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./cloud-webhook-manage-dialog */ "./src/panels/config/cloud/cloud-webhook-manage-dialog.ts"))
      });
    }
  }

  _computeRemoteConnected(connected) {
    return connected ? "Connected" : "Not Connected";
  }

  async _fetchSubscriptionInfo() {
    this._subscription = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_15__["fetchCloudSubscriptionInfo"])(this.hass);

    if (this._subscription.provider && this.cloudStatus && this.cloudStatus.cloud !== "connected") {
      this.fire("ha-refresh-cloud-status");
    }
  }

  handleLogout() {
    this.hass.callApi("post", "cloud/logout").then(() => this.fire("ha-refresh-cloud-status"));
  }

  _formatSubscription(subInfo) {
    if (subInfo === null) {
      return "Fetching subscription…";
    }

    let description = subInfo.human_description;

    if (subInfo.plan_renewal_date) {
      description = description.replace("{periodEnd}", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(subInfo.plan_renewal_date * 1000), this.hass.language));
    }

    return description;
  }

}

customElements.define("ha-config-cloud-account", HaConfigCloudAccount);

/***/ }),

/***/ "./src/panels/config/cloud/ha-config-cloud-login.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud-login.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
















/*
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 */

class HaConfigCloudLogin extends Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-item {
          cursor: pointer;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card .card-header {
          margin-bottom: -8px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        [hidden] {
          display: none;
        }
        .flash-msg {
          padding-right: 44px;
        }
        .flash-msg paper-icon-button {
          position: absolute;
          top: 8px;
          right: 8px;
          color: var(--secondary-text-color);
        }
      </style>
      <hass-subpage header="Cloud Login">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">ioBroker Cloud</span>
            <div slot="introduction">
              <p>
                ioBroker Cloud provides you with a secure remote
                connection to your instance while away from home. It also allows
                you to connect with cloud-only services: Amazon Alexa and Google
                Assistant.
              </p>
              <p>
                This service is run by our partner
                <a href="https://www.nabucasa.com" target="_blank"
                  >Nabu&nbsp;Casa,&nbsp;Inc</a
                >, a company founded by the founders of ioBroker and
                Hass.io.
              </p>
              <p>
                ioBroker Cloud is a subscription service with a free one
                month trial. No payment information necessary.
              </p>
              <p>
                <a href="https://www.nabucasa.com" target="_blank"
                  >Learn more about ioBroker Cloud</a
                >
              </p>
            </div>

            <ha-card hidden$="[[!flashMessage]]">
              <div class="card-content flash-msg">
                [[flashMessage]]
                <paper-icon-button icon="hass:close" on-click="_dismissFlash"
                  >Dismiss</paper-icon-button
                >
                <paper-ripple id="flashRipple" noink=""></paper-ripple>
              </div>
            </ha-card>

            <ha-card header="Sign in">
              <div class="card-content">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
                <paper-input
                  label="Email"
                  id="email"
                  type="email"
                  value="{{email}}"
                  on-keydown="_keyDown"
                  error-message="Invalid email"
                ></paper-input>
                <paper-input
                  id="password"
                  label="Password"
                  value="{{_password}}"
                  type="password"
                  on-keydown="_keyDown"
                  error-message="Passwords are at least 8 characters"
                ></paper-input>
              </div>
              <div class="card-actions">
                <ha-progress-button
                  on-click="_handleLogin"
                  progress="[[_requestInProgress]]"
                  >Sign in</ha-progress-button
                >
                <button
                  class="link"
                  hidden="[[_requestInProgress]]"
                  on-click="_handleForgotPassword"
                >
                  forgot password?
                </button>
              </div>
            </ha-card>

            <ha-card>
              <paper-item on-click="_handleRegister">
                <paper-item-body two-line="">
                  Start your free 1 month trial
                  <div secondary="">No payment information necessary</div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </ha-card>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      email: {
        type: String,
        notify: true
      },
      _password: {
        type: String,
        value: ""
      },
      _requestInProgress: {
        type: Boolean,
        value: false
      },
      flashMessage: {
        type: String,
        notify: true
      },
      _error: String
    };
  }

  static get observers() {
    return ["_inputChanged(email, _password)"];
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.flashMessage) {
      // Wait for DOM to be drawn
      requestAnimationFrame(() => requestAnimationFrame(() => this.$.flashRipple.simulatedRipple()));
    }
  }

  _inputChanged() {
    this.$.email.invalid = false;
    this.$.password.invalid = false;
    this._error = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleLogin();

      ev.preventDefault();
    }
  }

  _handleLogin() {
    let invalid = false;

    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
      this.$.email.focus();
      invalid = true;
    }

    if (this._password.length < 8) {
      this.$.password.invalid = true;

      if (!invalid) {
        invalid = true;
        this.$.password.focus();
      }
    }

    if (invalid) return;
    this._requestInProgress = true;
    this.hass.callApi("post", "cloud/login", {
      email: this.email,
      password: this._password
    }).then(() => {
      this.fire("ha-refresh-cloud-status");
      this.setProperties({
        email: "",
        _password: ""
      });
    }, err => {
      // Do this before setProperties because changing it clears errors.
      this._password = "";
      const errCode = err && err.body && err.body.code;

      if (errCode === "PasswordChangeRequired") {
        alert("You need to change your password before logging in.");
        this.navigate("/config/cloud/forgot-password");
        return;
      }

      const props = {
        _requestInProgress: false,
        _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
      };

      if (errCode === "UserNotConfirmed") {
        props._error = "You need to confirm your email before logging in.";
      }

      this.setProperties(props);
      this.$.email.focus();
    });
  }

  _handleRegister() {
    this.flashMessage = "";
    this.navigate("/config/cloud/register");
  }

  _handleForgotPassword() {
    this.flashMessage = "";
    this.navigate("/config/cloud/forgot-password");
  }

  _dismissFlash() {
    // give some time to let the ripple finish.
    setTimeout(() => {
      this.flashMessage = "";
    }, 200);
  }

}

customElements.define("ha-config-cloud-login", HaConfigCloudLogin);

/***/ }),

/***/ "./src/panels/config/cloud/ha-config-cloud.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ha_config_cloud_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ha-config-cloud-account */ "./src/panels/config/cloud/ha-config-cloud-account.js");
/* harmony import */ var _ha_config_cloud_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-config-cloud-login */ "./src/panels/config/cloud/ha-config-cloud-login.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






const LOGGED_IN_URLS = ["account", "google-assistant"];
const NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];

let HaConfigCloud = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-config-cloud")], function (_initialize, _HassRouterPage) {
  class HaConfigCloud extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigCloud,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "login",
          showLoading: true,
          initialLoad: () => this._cloudStatusLoaded,
          // Guard the different pages based on if we're logged in.
          beforeRender: page => {
            if (this.cloudStatus.logged_in) {
              if (!LOGGED_IN_URLS.includes(page)) {
                return "account";
              }
            } else {
              if (!NOT_LOGGED_IN_URLS.includes(page)) {
                return "login";
              }
            }

            return undefined;
          },
          routes: {
            login: {
              tag: "ha-config-cloud-login"
            },
            register: {
              tag: "ha-config-cloud-register",
              load: () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./ha-config-cloud-register */ "./src/panels/config/cloud/ha-config-cloud-register.js"))
            },
            "forgot-password": {
              tag: "ha-config-cloud-forgot-password",
              load: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./ha-config-cloud-forgot-password */ "./src/panels/config/cloud/ha-config-cloud-forgot-password.js"))
            },
            account: {
              tag: "ha-config-cloud-account"
            },
            "google-assistant": {
              tag: "ha-config-cloud-google-assistant",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./ha-config-cloud-google-assistant */ "./src/panels/config/cloud/ha-config-cloud-google-assistant.ts"))
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_flashMessage",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_loginEmail",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "_resolveCloudStatusLoaded",
      value: void 0
    }, {
      kind: "field",
      key: "_cloudStatusLoaded",

      value() {
        return new Promise(resolve => {
          this._resolveCloudStatusLoaded = resolve;
        });
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigCloud.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("cloud-done", ev => {
          this._flashMessage = ev.detail.flashMessage;
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, "/config/cloud/login");
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigCloud.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          const oldStatus = changedProps.get("cloudStatus");

          if (oldStatus === undefined) {
            this._resolveCloudStatusLoaded();
          } else if (oldStatus.logged_in !== this.cloudStatus.logged_in) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, this.route.prefix, true);
          }
        }
      }
    }, {
      kind: "method",
      key: "createElement",
      value: function createElement(tag) {
        const el = _get(_getPrototypeOf(HaConfigCloud.prototype), "createElement", this).call(this, tag);

        el.addEventListener("email-changed", ev => {
          this._loginEmail = ev.detail.value;
        });
        el.addEventListener("flash-message-changed", ev => {
          this._flashMessage = ev.detail.value;
        });
        return el;
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        // We are not going to update if the current page if we are not logged in
        // and the current page requires being logged in. Happens when we log out.
        if (this.cloudStatus && !this.cloudStatus.logged_in && LOGGED_IN_URLS.includes(this._currentPage)) {
          return;
        }

        if ("setProperties" in el) {
          // As long as we have Polymer pages
          el.setProperties({
            hass: this.hass,
            email: this._loginEmail,
            isWide: this.isWide,
            cloudStatus: this.cloudStatus,
            flashMessage: this._flashMessage
          });
        } else {
          el.hass = this.hass;
          el.email = this._loginEmail;
          el.isWide = this.isWide;
          el.narrow = this.narrow;
          el.cloudStatus = this.cloudStatus;
          el.flashMessage = this._flashMessage;
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__["HassRouterPage"]);

/***/ }),

/***/ "./src/panels/config/cloud/show-cloud-webhook-manage-dialog.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/config/cloud/show-cloud-webhook-manage-dialog.ts ***!
  \*********************************************************************/
/*! exports provided: showManageCloudhookDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showManageCloudhookDialog", function() { return showManageCloudhookDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showManageCloudhookDialog = (element, webhookDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "cloud-webhook-manage-dialog",
    dialogImport: () => Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./cloud-webhook-manage-dialog */ "./src/panels/config/cloud/cloud-webhook-manage-dialog.ts")),
    dialogParams: webhookDialogParams
  });
};

/***/ }),

/***/ "./src/panels/config/cloud/show-dialog-cloud-certificate.ts":
/*!******************************************************************!*\
  !*** ./src/panels/config/cloud/show-dialog-cloud-certificate.ts ***!
  \******************************************************************/
/*! exports provided: showCloudCertificateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCloudCertificateDialog", function() { return showCloudCertificateDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showCloudCertificateDialog = (element, webhookDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-cloud-certificate",
    dialogImport: () => Promise.all(/*! import() | dialog-cloud-certificate */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("dialog-cloud-certificate")]).then(__webpack_require__.bind(null, /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate.ts")),
    dialogParams: webhookDialogParams
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-config-cloud.chunk.js.map